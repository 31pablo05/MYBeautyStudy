import React, { useState, useEffect } from 'react';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaInstagram
} from 'react-icons/fa';

const Footer = () => {
  // Animación de año actual
  const [year, setYear] = useState('');
  useEffect(() => {
    let y = new Date().getFullYear().toString();
    let i = 0;
    setYear('');
    const interval = setInterval(() => {
      setYear(y.slice(0, i + 1));
      i++;
      if (i === y.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  // Tooltip para redes
  const socialLinks = [
    {
      href: "https://www.facebook.com/mybeautystudy",
      icon: <FaFacebookF className="text-4xl text-white" />, label: "Facebook"
    },
    {
      href: "https://www.instagram.com/meliii_lash/",
      icon: <FaInstagram className="text-4xl text-white" />, label: "Instagram"
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-[#eac9c1] to-[#d4af37] text-white mt-40 py-16 md:py-24 relative overflow-hidden animate-footer-fadein">
      {/* Fondo textura premium con overlay para contraste */}
      <div className="absolute inset-0 bg-[url('/assets/images/fondoform.webp')] bg-cover bg-center opacity-10 pointer-events-none z-0" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#fffbe6]/90 via-[#eac9c1]/80 to-[#d4af37]/80 z-0" aria-hidden="true" />
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center relative z-10">
        {/* DERECHA - Redes sociales (orden móvil: primero) */}
        <div className="flex space-x-6 order-1 sm:order-3 mb-6 sm:mb-0">
          {socialLinks.map((s, i) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-transform duration-300 hover:scale-110 focus:outline-none relative"
              aria-label={s.label}
              tabIndex={0}
            >
              <div className="p-3 rounded-full group-hover:bg-[#e7c3b1] group-hover:shadow-[0_0_15px_#e7c3b1] group-hover:drop-shadow-gold group-hover:animate-bounce-gold transition-all duration-300 focus:ring-4 focus:ring-[#d4af37]/70">
                {s.icon}
              </div>
              {/* Tooltip */}
              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1 bg-[#fffbe6] text-[#b76e79] text-xs rounded shadow-gold opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 pointer-events-none z-20 whitespace-nowrap">
                {s.label}
              </span>
            </a>
          ))}
        </div>
        {/* IZQUIERDA - Contacto */}
        <div className="flex flex-col space-y-3 items-start mb-6 sm:mb-0 order-2 sm:order-1">
          <div className="group flex items-center space-x-2 transition-all duration-300 hover:scale-105">
            <div className="p-2 rounded-md group-hover:bg-[#e7c3b1] group-hover:shadow-[0_0_10px_#e7c3b1] transition-all duration-300">
              <FaMapMarkerAlt className="text-2xl md:text-2xl text-[#b76e79]" />
            </div>
            <span className="text-base md:text-lg font-medium text-[#7a5c2e]">Rivadavia 519 - 1er piso, Trelew, Chubut, Argentina</span>
          </div>
          <a
            href="https://wa.me/5492804034308"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-2 transition-all duration-300 hover:scale-105 focus:outline-none"
            aria-label="WhatsApp: +54 9 280 403-4308"
          >
            <div className="p-2 rounded-md group-hover:bg-[#e7c3b1] group-hover:shadow-[0_0_10px_#e7c3b1] transition-all duration-300">
              <FaPhone className="text-2xl md:text-2xl text-[#b76e79]" />
            </div>
            <span className="text-base md:text-lg font-medium text-[#7a5c2e]">+54 9 280 403-4308</span>
          </a>
          <a
            href="mailto:Meyapier.4@gmail.com"
            className="group flex items-center space-x-2 transition-all duration-300 hover:scale-105 focus:outline-none"
            aria-label="Email: Meyapier.4@gmail.com"
          >
            <div className="p-2 rounded-md group-hover:bg-[#e7c3b1] group-hover:shadow-[0_0_10px_#e7c3b1] transition-all duration-300">
              <FaEnvelope className="text-2xl md:text-2xl text-[#b76e79]" />
            </div>
            <span className="text-base md:text-lg font-medium text-[#7a5c2e]">Meyapier.4@gmail.com</span>
          </a>
        </div>
        {/* CENTRO - Derechos */}
        <div className="text-center text-[#7a5c2e] text-base md:text-lg font-semibold mb-6 sm:mb-0 order-3 sm:order-2">
          <p>&copy; <span className="inline-block animate-fadein-year font-bold text-[#d4af37] drop-shadow-gold text-lg md:text-xl">{year}</span> <span className="footer-highlight footer-highlight-white">MYBeautyStudy</span>. Todos los derechos reservados.</p>
          <p>
            Desarrollado por <a
              href="https://pablo-web-app.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-highlight footer-highlight-white font-semibold hover:text-[#fffbe6] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/70 transition-colors"
              aria-label="Portafolio de Pablo Proboste (se abre en nueva pestaña)"
            >
              Pablo Proboste
            </a> &nbsp;|&nbsp;
            <a
              href="/privacy-policy"
              className="hover:text-[#d4af37] hover:underline focus:outline-none focus:ring-2 focus:ring-[#d4af37]/70"
              aria-label="Política de privacidad"
            >
              Política de privacidad
            </a>
          </p>
        </div>
      </div>
     
      {/* Estilos premium y animaciones */}
      <style>{`
        .shadow-gold { box-shadow: 0 2px 8px 0 #d4af3740, 0 0 0 2px #d4af37; }
        .drop-shadow-gold { filter: drop-shadow(0 0 6px #d4af37cc); }
        .animate-gold-glow {
          animation: gold-glow 2.2s infinite alternate;
        }
        @keyframes gold-glow {
          0% { filter: drop-shadow(0 0 0px #d4af37cc); }
          100% { filter: drop-shadow(0 0 12px #d4af37cc); }
        }
        .footer-star-glow {
          text-shadow: 0 0 16px #fffbe6, 0 0 32px #d4af37, 0 0 8px #fffbe6;
        }
        .animate-star-glow {
          animation: star-glow 2.5s infinite alternate;
        }
        @keyframes star-glow {
          0% { filter: drop-shadow(0 0 0px #fffbe6); opacity: 0.7; }
          50% { filter: drop-shadow(0 0 16px #fffbe6) drop-shadow(0 0 32px #d4af37); opacity: 1; }
          100% { filter: drop-shadow(0 0 0px #fffbe6); opacity: 0.7; }
        }
        .footer-highlight {
          position: relative;
          font-weight: bold;
        }
        .footer-highlight-white {
          color: #fff !important;
        }
        .footer-highlight::after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: -2px;
          height: 4px;
          background: linear-gradient(90deg, #d4af37 0%, #fffbe6 50%, #d4af37 100%);
          border-radius: 2px;
          opacity: 0.85;
          z-index: 1;
          transition: background 0.3s;
        }
        .footer-highlight:hover::after, .footer-highlight:focus::after {
          background: linear-gradient(90deg, #fffbe6 0%, #d4af37 100%);
        }
        .animate-footer-fadein {
          animation: footer-fadein 1.2s cubic-bezier(.4,0,.2,1);
        }
        @keyframes footer-fadein {
          0% { opacity: 0; transform: translateY(60px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-bounce-gold {
          animation: bounce-gold 0.7s;
        }
        @keyframes bounce-gold {
          0% { transform: scale(1); }
          30% { transform: scale(1.18); }
          60% { transform: scale(0.95); }
          100% { transform: scale(1); }
        }
        .animate-fadein-year {
          animation: fadein-year 1.2s;
        }
        @keyframes fadein-year {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
