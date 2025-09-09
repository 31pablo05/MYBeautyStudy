import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaClock,
  FaHeart
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

  // Datos de contacto
  const contactInfo = {
    direccion: "Rivadavia 519, 1er piso",
    ciudad: "Trelew, Chubut, Argentina",
    telefono: "+54 9 280 403-4308",
    email: "Meyapier.4@gmail.com",
    whatsapp: "https://wa.me/5492804034308"
  };

  // Horarios de atención
  const horarios = [
    { dias: "Lun - Vie", horas: "9:00 - 18:00" },
    { dias: "Sábados", horas: "9:00 - 15:00" },
    { dias: "Domingos", horas: "Cerrado" }
  ];

  // Redes sociales
  const socialLinks = [
    {
      href: "https://www.facebook.com/mybeautystudy",
      icon: <FaFacebookF />,
      label: "Facebook",
      color: "hover:bg-[#1877F2]"
    },
    {
      href: "https://www.instagram.com/meliii_lash/",
      icon: <FaInstagram />,
      label: "Instagram",
      color: "hover:bg-gradient-to-r hover:from-[#E4405F] hover:to-[#833AB4]"
    },
    {
      href: contactInfo.whatsapp,
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      color: "hover:bg-[#25D366]"
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#2c2c2c] via-[#3d3d3d] to-[#2c2c2c] text-white overflow-hidden">
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

      {/* Efectos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#d4af37]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#b76e79]/10 to-transparent rounded-full blur-2xl"></div>
      
      <div className="relative z-10">
        {/* Sección principal */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Información del negocio */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-extrabold">
                    <span className="bg-gradient-to-r from-[#d4af37] via-[#b76e79] to-[#d4af37] bg-clip-text text-transparent">
                      MY Beauty Study
                    </span>
                  </h3>
                  <motion.img 
                    src="/assets/images/logosvg/logomybeautytransp.svg" 
                    alt="MY Beauty Study Logo" 
                    className="w-10 h-10 object-contain"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.4,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.3, ease: "easeInOut" }
                    }}
                    viewport={{ once: true }}
                  />
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Tu centro de belleza especializado en tratamientos de cejas, pestañas y depilación láser. 
                  Realzamos tu belleza natural con técnicas profesionales de última generación en Trelew, Chubut.
                </p>
              </div>

              {/* Información de contacto */}
              <div className="space-y-4">
                <motion.div
                  className="flex items-center gap-3 group cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-[#d4af37] to-[#b76e79] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaMapMarkerAlt className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{contactInfo.direccion}</p>
                    <p className="text-gray-300 text-sm">{contactInfo.ciudad}</p>
                  </div>
                </motion.div>

                <motion.a
                  href={`tel:${contactInfo.telefono}`}
                  className="flex items-center gap-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-[#d4af37] to-[#b76e79] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaPhone className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{contactInfo.telefono}</p>
                    <p className="text-gray-300 text-sm">Llamanos o escribinos</p>
                  </div>
                </motion.a>

                <motion.a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-[#d4af37] to-[#b76e79] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaEnvelope className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{contactInfo.email}</p>
                    <p className="text-gray-300 text-sm">Consultas por email</p>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* Horarios de atención */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-6">
                <FaClock className="text-[#d4af37] text-xl" />
                <h4 className="text-xl font-bold text-white">Horarios</h4>
              </div>
              <div className="space-y-3">
                {horarios.map((horario, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">{horario.dias}</span>
                    <span className={`font-bold text-sm px-3 py-1 rounded-lg ${
                      horario.horas === 'Cerrado' 
                        ? 'bg-red-500/20 text-red-300' 
                        : 'bg-[#d4af37]/20 text-[#d4af37]'
                    }`}>
                      {horario.horas}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Call to action para reservas */}
              <motion.a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp className="text-lg" />
                <span className="text-sm">Reservar Turno</span>
              </motion.a>
            </motion.div>

            {/* Redes sociales */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-white mb-6">Seguinos</h4>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 ${social.color} group`}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-8 h-8 flex items-center justify-center text-white group-hover:text-white transition-colors">
                      {social.icon}
                    </div>
                    <span className="font-medium text-white group-hover:text-white transition-colors">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>

              {/* Testimonios rápidos */}
              <div className="mt-6 p-4 bg-gradient-to-r from-[#d4af37]/10 to-[#b76e79]/10 rounded-xl border border-[#d4af37]/20">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#d4af37] text-sm">⭐</span>
                    ))}
                  </div>
                  <span className="text-white text-sm font-bold">5.0</span>
                </div>
                <p className="text-gray-300 text-xs italic">
                  "Excelente atención y resultados increíbles. ¡Super recomendado!"
                </p>
                <p className="text-gray-400 text-xs mt-1">- Clientes satisfechos</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-white/10"></div>

        {/* Footer bottom */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300">
                &copy; <span className="font-bold text-[#d4af37]">{year}</span> MY Beauty Study. 
                Todos los derechos reservados.
              </p>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 text-sm text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="flex items-center gap-1">
                Hecho con <FaHeart className="text-red-500 text-xs animate-pulse" /> por
              </span>
              <a
                href="https://devcraftpablo.online/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#d4af37] hover:text-[#b76e79] transition-colors duration-300 hover:underline"
              >
                Pablo Proboste
              </a>
              <span>|</span>
              <a
                href="/privacy-policy"
                className="hover:text-[#d4af37] transition-colors duration-300 hover:underline"
              >
                Política de privacidad
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
