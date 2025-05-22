import React from 'react';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTiktok,
  FaInstagram
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-[#eac9c1] to-[#d4af37] text-white mt-40 py-8">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">

        {/* DERECHA - Redes sociales (orden móvil: primero) */}
        <div className="flex space-x-6 order-1 sm:order-3 mb-6 sm:mb-0">
          <a
            href="https://www.facebook.com/mybeautystudy"
            target="_blank"
            rel="noopener noreferrer"
            className="group transition-transform duration-300 hover:scale-110"
          >
            <div className="p-3 rounded-full group-hover:bg-[#e7c3b1] group-hover:shadow-[0_0_15px_#e7c3b1] transition-all duration-300">
              <FaFacebookF className="text-4xl text-white" />
            </div>
          </a>
          <a
            href="https://www.tiktok.com/@mybeautystudy"
            target="_blank"
            rel="noopener noreferrer"
            className="group transition-transform duration-300 hover:scale-110"
          >
            <div className="p-3 rounded-full group-hover:bg-[#e7c3b1] group-hover:shadow-[0_0_15px_#e7c3b1] transition-all duration-300">
              <FaTiktok className="text-4xl text-white" />
            </div>
          </a>
          <a
            href="https://www.instagram.com/meliii_lash/"
            target="_blank"
            rel="noopener noreferrer"
            className="group transition-transform duration-300 hover:scale-110"
          >
            <div className="p-3 rounded-full group-hover:bg-[#e7c3b1] group-hover:shadow-[0_0_15px_#e7c3b1] transition-all duration-300">
              <FaInstagram className="text-4xl text-white" />
            </div>
          </a>
        </div>

        {/* IZQUIERDA - Contacto */}
        <div className="flex flex-col space-y-3 items-start mb-6 sm:mb-0 order-2 sm:order-1">
          <div className="group flex items-center space-x-2 transition-all duration-300 hover:scale-105">
            <div className="p-2 rounded-md group-hover:bg-[#e7c3b1] group-hover:shadow-[0_0_10px_#e7c3b1] transition-all duration-300">
              <FaMapMarkerAlt className="text-xl" />
            </div>
            <span className="text-sm">Rivadavia 519 - 1er piso, Trelew, Chubut, Argentina</span>
          </div>

          <a
            href="https://wa.me/5492804034308"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-2 transition-all duration-300 hover:scale-105"
          >
            <div className="p-2 rounded-md group-hover:bg-[#e7c3b1] group-hover:shadow-[0_0_10px_#e7c3b1] transition-all duration-300">
              <FaPhone className="text-xl" />
            </div>
            <span className="text-sm">+54 9 280 403-4308</span>
          </a>

          <a
            href="mailto:Meyapier.4@gmail.com"
            className="group flex items-center space-x-2 transition-all duration-300 hover:scale-105"
          >
            <div className="p-2 rounded-md group-hover:bg-[#e7c3b1] group-hover:shadow-[0_0_10px_#e7c3b1] transition-all duration-300">
              <FaEnvelope className="text-xl" />
            </div>
            <span className="text-sm">Meyapier.4@gmail.com</span>
          </a>
        </div>

        {/* CENTRO - Derechos */}
        <div className="text-center text-gray-200 text-sm mb-6 sm:mb-0 order-3 sm:order-2">
          <p>&copy; {currentYear} MYBeautyStudy. Todos los derechos reservados.</p>
          <p>
            Desarrollado por Pablo Proboste &nbsp;|&nbsp;
            <a
              href="/privacy-policy"
              className="hover:text-[#d4af37] hover:underline"
            >
              Política de privacidad
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
