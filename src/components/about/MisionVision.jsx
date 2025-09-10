
import React, { useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaEye, FaBullseye, FaHeart, FaGift, FaStar } from "react-icons/fa";

// Componente MisionVision: Moderno, profesional, elegante con diseño premium
const VIDEO_SRC = "/assets/videos/arte.mp4";
const POSTER_SRC = "/assets/images/GIFTCARDMelinaYancan.webp";

const MisionVision = () => {
  const videoRef = useRef(null);
  const [posterVisible, setPosterVisible] = useState(true);

  const handlePlay = () => {
    setTimeout(() => setPosterVisible(false), 400);
  };

  const misionVisionData = [
    {
      icon: <FaBullseye className="text-2xl" />,
      title: "Misión",
      subtitle: "Nuestro Propósito",
      content: "Brindar servicios de estética de alta calidad, personalizados y con calidez humana, promoviendo el bienestar integral y la confianza de cada cliente.",
      gradient: "from-[#d4af37] to-[#b76e79]",
      bgGradient: "from-[#d4af37]/10 to-[#b76e79]/10"
    },
    {
      icon: <FaEye className="text-2xl" />,
      title: "Visión",
      subtitle: "Nuestro Horizonte",
      content: "Ser referentes en el sector de la estética, innovando constantemente y generando experiencias memorables que inspiren belleza, salud y profesionalismo.",
      gradient: "from-[#b76e79] to-[#d4af37]",
      bgGradient: "from-[#b76e79]/10 to-[#d4af37]/10"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#faf8f5] via-white to-[#f8f4f0] relative overflow-hidden">
      {/* Efectos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-[#d4af37]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#b76e79]/5 to-transparent rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header elegante */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-[#d4af37] to-[#b76e79] bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase">
              🎯 Nuestros Valores
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2c2c2c] mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-[#b76e79] via-[#d4af37] to-[#b76e79] bg-clip-text text-transparent">
              Misión & Visión
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conocé los valores y principios que guían nuestro trabajo diario y nos inspiran 
            a brindar la mejor experiencia en belleza y bienestar.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-[#d4af37] to-[#b76e79] mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Video promocional mejorado */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              
              {/* Efectos decorativos */}
              <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-[#d4af37]/20 to-[#b76e79]/20 rounded-3xl blur-xl"></div>
              <div className="absolute top-6 left-6 w-full h-full bg-gradient-to-tl from-[#b76e79]/10 to-[#d4af37]/10 rounded-3xl"></div>
              
              {/* Container del video */}
              <motion.div
                className="relative bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 overflow-hidden"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-gray-900">
                  
                  {/* Poster con fade-out */}
                  <img
                    src={POSTER_SRC}
                    alt="Gift Card Promocional"
                    aria-hidden={!posterVisible}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out z-20 pointer-events-none select-none ${
                      posterVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                    draggable="false"
                  />
                  
                  {/* Video institucional */}
                  <video
                    ref={videoRef}
                    src={VIDEO_SRC}
                    poster={POSTER_SRC}
                    autoPlay
                    loop
                    muted
                    playsInline
                    tabIndex={0}
                    aria-label="Video institucional de Misión y Visión"
                    className="w-full h-full object-cover z-10"
                    onPlay={handlePlay}
                  />
                  
                  {/* Overlay decorativo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none z-30"></div>
                </div>
                
                {/* Info del video */}
                <motion.div
                  className="absolute bottom-10 left-10 right-10 bg-white/95 backdrop-blur-sm rounded-2xl p-4 border border-[#d4af37]/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-[#2c2c2c] flex items-center gap-2">
                        <FaGift className="text-[#d4af37]" />
                        Gift Card Especial
                      </h4>
                      <p className="text-sm text-gray-600">Regalo ideal para quien amas</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-[#d4af37] text-sm" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contenido de Misión y Visión */}
          <motion.div
            className="order-1 lg:order-2 space-y-8"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            
            {misionVisionData.map((item, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-r ${item.bgGradient} backdrop-blur-sm rounded-2xl p-8 border border-[#d4af37]/20 shadow-lg`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                {/* Header de la tarjeta */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2c2c2c]">{item.title}</h3>
                    <p className="text-sm text-gray-600 font-medium">{item.subtitle}</p>
                  </div>
                </div>
                
                {/* Contenido */}
                <p className="text-gray-700 text-lg leading-relaxed">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Sección final inspiracional */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            
            {/* Quote inspiracional */}
            <motion.div
              className="bg-gradient-to-r from-[#d4af37]/10 to-[#b76e79]/10 rounded-3xl p-8 mb-8 border border-[#d4af37]/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-center mb-4">
                <FaHeart className="text-[#b76e79] text-3xl" />
              </div>
              <blockquote className="text-2xl md:text-3xl font-bold text-[#2c2c2c] italic mb-4">
                "Regalate un momento para vos. La belleza comienza con el primer paso."
              </blockquote>
              <p className="text-lg text-gray-600">
                En MyBeautyStudy, cada servicio es una experiencia diseñada para tu bienestar y confianza.
              </p>
            </motion.div>

            {/* Call to actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="bg-gradient-to-r from-[#d4af37] to-[#b76e79] hover:from-[#b76e79] hover:to-[#d4af37] text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Reservá tu Turno</span>
                <span className="text-xl">✨</span>
              </motion.a>
              
              <motion.a
                href="/services"
                className="border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Ver Servicios</span>
                <span>→</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MisionVision;
