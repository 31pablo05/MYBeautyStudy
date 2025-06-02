import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Sobre mí", path: "/about" },
    { name: "Servicios", path: "/services" },
    { name: "Galería", path: "/galeria" },
    { name: "Contacto", path: "/contact" },
  ];

  const navClasses = `fixed top-0 left-0 right-0 z-50 p-4 transition-colors duration-500 ${
    scrolled
      ? "bg-gradient-to-r from-[#eac9c1]/90 to-[#d4af37]/90 backdrop-blur-md shadow-lg"
      : "bg-gradient-to-r from-[#B76E79]/60 to-[#eac9c1]/60"
  }`;

  return (
    <nav className={navClasses}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="md:hidden z-50">
          <button
            onClick={toggleMenu}
            className="text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#d4af37]/60"
            aria-label="Abrir menú"
          >
            {isOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Escritorio */}
        <ul className="hidden md:flex space-x-6 ml-auto">
          {navLinks.map((item, idx) => (
            <li key={idx}>
              <Link
                to={item.path}
                className="text-white font-semibold text-lg transition-colors hover:text-[#d4af37]"
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
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={toggleMenu}
        />
      )}

      {/* Menú móvil */}
      <div
        className={`md:hidden fixed top-16 left-0 right-0 bg-white text-neutral-800 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="px-6 py-4 space-y-4">
          {navLinks.map((item, idx) => (
            <li key={idx}>
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-semibold text-neutral-700 hover:text-[#d4af37] transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Redes Sociales */}
       <div className="flex justify-start gap-4 mt-6 px-6">
  <a href="https://www.facebook.com/my.estudio.beauty?mibextid=wwXIfr&rdid=gqeVbEcOUft7YLM6#" target="_blank" rel="noopener noreferrer">
    <img src="/assets/images/icon/icons8-facebook.gif" alt="Facebook" className="w-6 h-6" />
  </a>
  <a href="https://www.instagram.com/meliii_lash/" target="_blank" rel="noopener noreferrer">
    <img src="/assets/images/icon/icons8-instagram.gif" alt="Instagram" className="w-6 h-6" />
  </a>
  <a href="https://wa.me/5492804034308" target="_blank" rel="noopener noreferrer">
    <img src="/assets/images/icon/icons8-whatsapp.gif" alt="WhatsApp" className="w-6 h-6" />
  </a>
</div>

      </div>
    </nav>
  );
};

export default Navbar;
