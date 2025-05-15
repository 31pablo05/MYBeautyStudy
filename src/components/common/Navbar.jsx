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

  // Cuando no hay scroll: gradient de tu color hacia rosa pastel
  // Cuando hay scroll: gradient dorado como antes
  const navClasses = scrolled
    ? "bg-gradient-to-r from-[#eac9c1]/90 to-[#d4af37]/90 backdrop-blur-md shadow-lg p-4 transition-colors duration-500 ease-in-out fixed top-0 left-0 right-0 z-50"
    : "bg-gradient-to-r from-[#B76E79]/60 to-[#eac9c1]/60 p-4 transition-colors duration-500 ease-in-out fixed top-0 left-0 right-0 z-50";

  const textColor = scrolled ? "text-white" : "text-gray-800";

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Sobre mí", path: "/about" },
    { name: "Servicios", path: "/services" },
    { name: "Galería", path: "/gallery" },
    { name: "Contacto", path: "/contact" }
  ];

  return (
    <nav className={navClasses}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo con bounce */}
        <Link to="/">
          <img
            src="/assets/images/fondotrans.png"
            alt="MYBeautyStudy"
            className="h-10 w-auto drop-shadow-lg transition-transform duration-300 ease-out hover:scale-110 hover:-translate-y-1"
          />
        </Link>

        {/* Botón mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className={`${textColor} p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50`}
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Menú desktop */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((item, idx) => (
            <li key={idx}>
              <Link
                to={item.path}
                className={`
                  ${textColor} font-semibold transition-colors duration-200 
                  link-animated hover:text-[#d4af37]
                `}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Menú mobile con slide & fade */}
      {isOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-sm shadow-lg rounded-b-lg
                        origin-top transform transition-transform duration-300 ease-out
                        opacity-0 animate-slideFadeIn">
          <ul className="px-4 pt-4 pb-3 space-y-2">
            {navLinks.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`
                    ${textColor} block py-2 px-3 rounded-md font-semibold 
                    transition-colors duration-200 link-animated hover:text-[#d4af37]
                  `}
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
