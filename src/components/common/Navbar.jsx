import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';

const socialLinks = [
  {
    href: 'https://www.facebook.com/my.estudio.beauty?mibextid=wwXIfr&rdid=gqeVbEcOUft7YLM6#',
    img: '/assets/images/icon/icons8-facebook.gif',
    alt: 'Facebook',
    label: 'Ir a Facebook',
  },
  {
    href: 'https://www.instagram.com/meliii_lash/',
    img: '/assets/images/icon/icons8-instagram.gif',
    alt: 'Instagram',
    label: 'Ir a Instagram',
  },
  {
    href: 'https://wa.me/5492804034308',
    img: '/assets/images/icon/icons8-whatsapp.gif',
    alt: 'WhatsApp',
    label: 'Ir a WhatsApp',
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  // Cerrar menú con Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    // Solo bloquear scroll en móvil
    if (window.innerWidth < 768) {
      document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Sobre mí', path: '/about' },
    { name: 'Servicios', path: '/services' },
    { name: 'Contacto', path: '/contact' },
  ];

  const navClasses = `fixed top-0 left-0 right-0 z-50 p-4 transition-colors duration-500 ${
    scrolled
      ? 'bg-gradient-to-r from-[#eac9c1]/90 to-[#d4af37]/90 backdrop-blur-md shadow-lg'
      : 'bg-gradient-to-r from-[#B76E79]/60 to-[#eac9c1]/60'
  }`;

  const handleNavClick = (path) => {
    setIsOpen(false);
    if (path === '/') {
      // Esperar a que el router termine el cambio de ruta
      setTimeout(() => {
        // Buscar el elemento principal del home (Hero)
        const hero = document.getElementById('hero-section');
        if (hero) {
          hero.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 200);
    }
  };

  return (
    <nav className={navClasses} role="navigation" aria-label="Menú principal de navegación">
      {/* SEO: Local Business (JSON-LD) */}
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          "name": "MyBeautyStudy",
          "image": "https://my-beauty-study.vercel.app/assets/images/logotipo.webp",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rivadavia 519, 1er piso",
            "addressLocality": "Trelew",
            "addressRegion": "Chubut",
            "addressCountry": "AR"
          },
          "url": "https://my-beauty-study.vercel.app/",
          "telephone": "+54 9 2804 034308"
        }
      `}</script>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo eliminado para simplificar el Navbar */}
        {/* Botón menú móvil */}
        <div className="md:hidden z-50">
          <button
            onClick={toggleMenu}
            className="text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#d4af37]/60"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        {/* Escritorio */}
        <ul className="hidden md:flex space-x-6 ml-auto" role="menubar">
          {navLinks.map((item, idx) => (
            <li key={idx} role="none">
              <Link
                to={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`text-white font-semibold text-lg transition-colors hover:text-[#d4af37] ${
                  location.pathname === item.path ? 'underline underline-offset-4 text-[#d4af37]' : ''
                }`}
                aria-current={location.pathname === item.path ? 'page' : undefined}
                role="menuitem"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Overlay oscuro */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 transition-opacity duration-300 animate-fadeIn"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}
      {/* Menú móvil */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed top-16 left-0 right-0 bg-white text-neutral-800 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'
        }`}
        role="menu"
        aria-label="Menú de navegación móvil"
      >
        <ul className="px-6 py-4 space-y-4">
          {navLinks.map((item, idx) => (
            <li key={idx}>
              <Link
                to={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`block text-lg font-semibold transition-colors hover:text-[#d4af37] ${
                  location.pathname === item.path ? 'text-[#d4af37] underline underline-offset-4' : 'text-neutral-700'
                }`}
                aria-current={location.pathname === item.path ? 'page' : undefined}
                role="menuitem"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* Redes Sociales */}
        <div className="flex justify-start gap-4 mt-6 px-6">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="transition-transform duration-200 hover:scale-110 focus:scale-110"
            >
              <img src={link.img} alt={link.alt} className="w-6 h-6 drop-shadow-md" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
