import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // El fondo cambia solo en desktop al hacer scroll
  const isMobile = window.innerWidth < 768;
  const navClasses =
    !isMobile && scrolled
      ? "bg-gradient-to-r from-[#eac9c1]/90 to-[#d4af37]/90 backdrop-blur-md shadow-lg p-4 fixed top-0 left-0 right-0 z-50 transition-colors duration-500"
      : "bg-gradient-to-r from-[#B76E79]/60 to-[#eac9c1]/60 p-4 fixed top-0 left-0 right-0 z-50 transition-colors duration-500";

  const textColor = "text-neutral-900";

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Sobre mí", path: "/about" },
    { name: "Servicios", path: "/services" },
    { name: "Galería", path: "/galeria" },

    { name: "Contacto", path: "/contact" },
  ];

  return (
    <nav className={navClasses}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img
            src="/assets/images/fondotrans.png"
            alt="MYBeautyStudy"
            className="rounded-md h-12 w-auto drop-shadow-md transition-transform duration-300 hover:scale-110"
          />
        </Link>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className={`text-neutral-900 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50`}
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((item, idx) => (
            <li key={idx}>
              <Link
                to={item.path}
                className={`text-white font-semibold text-lg transition-colors hover:text-[#d4af37]`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md shadow-md rounded-b-lg transition-all duration-300">
          <ul className="px-4 pt-4 pb-3 space-y-2">
            {navLinks.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-3 text-neutral-800 font-semibold rounded-md hover:text-[#d4af37] transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
