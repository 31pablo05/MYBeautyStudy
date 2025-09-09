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

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    scrolled
      ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-[#d4af37]/20 py-2'
      : 'bg-gradient-to-r from-[#2a1810]/80 via-[#3d1a12]/70 to-[#2a1810]/80 backdrop-blur-sm py-4'
  }`;

  const handleNavClick = (path) => {
    setIsOpen(false);
    if (path === '/') {
      // Scroll inmediato al tope sin delay
      window.scrollTo({ top: 0, behavior: 'auto' });
      // Asegurar scroll después del render
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
      });
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
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo SVG con mejor contraste y animaciones */}
        <Link to="/" onClick={() => handleNavClick('/')} className="flex items-center group relative z-50" aria-label="Ir al inicio">
          <div className="relative">
            <img
              src="/assets/images/logosvg/logomybeautytransp.svg"
              alt="Logo My Beauty Study"
              className={`transition-all duration-300 drop-shadow-2xl ${
                scrolled 
                  ? 'h-12 w-auto filter brightness-75 contrast-125' 
                  : 'h-16 w-auto filter brightness-110 contrast-110'
              } group-hover:scale-105 group-hover:drop-shadow-[0_0_20px_#d4af37aa]`}
              style={{ maxWidth: scrolled ? '180px' : '240px' }}
              loading="lazy"
              decoding="async"
            />
            {/* Glow effect behind logo */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              scrolled ? 'bg-[#d4af37]/10' : 'bg-white/10'
            } rounded-xl blur-xl -z-10`}></div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8" role="menubar">
          {navLinks.map((item, idx) => (
            <li key={idx} role="none">
              <Link
                to={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`relative font-semibold text-lg transition-all duration-300 hover:scale-105 ${
                  scrolled
                    ? location.pathname === item.path
                      ? 'text-[#d4af37] font-bold'
                      : 'text-gray-800 hover:text-[#d4af37]'
                    : location.pathname === item.path
                      ? 'text-[#d4af37] font-bold drop-shadow-lg'
                      : 'text-white hover:text-[#d4af37] drop-shadow-md'
                } after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#d4af37] after:transition-all after:duration-300 hover:after:w-full ${
                  location.pathname === item.path ? 'after:w-full' : ''
                }`}
                aria-current={location.pathname === item.path ? 'page' : undefined}
                role="menuitem"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden z-50">
          <button
            onClick={toggleMenu}
            className={`p-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/60 ${
              scrolled
                ? 'text-gray-800 hover:bg-[#d4af37]/10 hover:text-[#d4af37]'
                : 'text-white hover:bg-white/10 hover:text-[#d4af37]'
            } ${isOpen ? 'rotate-90' : ''}`}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <div className="relative w-6 h-6">
              {isOpen ? (
                <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </div>
          </button>
        </div>
      </div>
      {/* Overlay moderno con blur */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-all duration-300 animate-fadeIn"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}
      
      {/* Mobile Menu - Simplificado y funcional */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed top-28 left-4 right-4 bg-white rounded-2xl shadow-2xl z-50 transform transition-all duration-300 ease-out ${
          isOpen ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-4 opacity-0 scale-95 pointer-events-none'
        }`}
        role="menu"
        aria-label="Menú de navegación móvil"
      >
        {/* Navigation Links */}
        <nav className="p-6">
          <ul className="space-y-2">
            {navLinks.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`block px-4 py-3 rounded-xl font-semibold text-lg transition-all duration-200 ${
                    location.pathname === item.path
                      ? 'text-white bg-[#d4af37] shadow-md'
                      : 'text-gray-800 hover:text-[#d4af37] hover:bg-[#d4af37]/10'
                  }`}
                  aria-current={location.pathname === item.path ? 'page' : undefined}
                  role="menuitem"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links Section */}
        <div className="px-6 pb-6 border-t border-gray-100 pt-4">
          <p className="text-sm font-medium text-gray-600 mb-3 text-center">Síguenos</p>
          <div className="flex justify-center gap-4">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-2 rounded-lg hover:scale-110 transition-transform duration-300"
              >
                <img 
                  src={link.img} 
                  alt={link.alt} 
                  className="w-5 h-5" 
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
