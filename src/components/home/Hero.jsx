import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import logo from "/assets/images/LOGO ROSEGOLD.webp";
import fondo from "/assets/images/fondoform.webp";

const MotionLink = motion(Link);

const keywords = [
  "✨ Cejas perfectas",
  "👁️ Miradas inolvidables", 
  "🌸 Belleza natural",
  "💫 Lifting de pestañas",
  "⚡ Depilación láser profesional"
];

const stats = [
  { number: "500+", label: "Clientas felices" },
  { number: "3+", label: "Años de experiencia" },
  { number: "100%", label: "Satisfacción garantizada" }
];

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % keywords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href="/assets/images/LOGO ROSEGOLD.webp" type="image/webp" />
        <link rel="preload" as="image" href="/assets/images/fondoform.webp" type="image/webp" />
      </Helmet>
      
      <section
        id="hero-section"
        className="hero-section relative w-full min-h-screen flex flex-col justify-center bg-no-repeat bg-center bg-cover overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(183,110,121,0.1) 0%, rgba(212,175,55,0.15) 50%, rgba(247,227,216,0.9) 100%), url(${fondo})`
        }}
      >
        {/* Partículas flotantes decorativas */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#d4af37]/30 rounded-full"
              animate={{
                y: [-20, -100],
                x: [0, Math.random() * 100 - 50],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3
              }}
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${50 + Math.random() * 40}%`
              }}
            />
          ))}
        </div>

        {/* Contenedor principal */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Logo con efecto glassmorphism */}
          <motion.div
            className="flex justify-center items-center pt-32 md:pt-28 mb-8"
            initial={{ opacity: 0, scale: 0.8, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/20 to-[#b76e79]/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <motion.img
                src={logo}
                alt="MYBeautyStudy - Especialista en Cejas y Pestañas"
                className="relative w-48 md:w-64 lg:w-80 drop-shadow-2xl"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                style={{ 
                  filter: "drop-shadow(0 8px 32px rgba(212, 175, 55, 0.3))",
                }}
              />
            </div>
          </motion.div>

          {/* Contenido principal mejorado */}
          <div className="text-center space-y-8">
            
            {/* Título principal con gradiente */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-[#b76e79] via-[#d4af37] to-[#b76e79] bg-clip-text text-transparent bg-300% animate-gradient-x">
                  Armonizá tu mirada
                </span>
              </h1>
              
              {/* Subtítulo con efecto typewriter */}
              <div className="h-16 md:h-20 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={keywords[wordIndex]}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/60 to-white/40 backdrop-blur-sm rounded-2xl"></div>
                    <span className="relative text-xl md:text-3xl font-bold text-[#6d4c41] px-6 py-3 block">
                      {keywords[wordIndex]}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Descripción profesional */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="space-y-3"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-xl"></div>
                <p className="relative text-lg md:text-2xl font-semibold text-[#6d4c41] mb-2 px-4 py-2">
                  Brow Lamination · Lashista · Lami Maker
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-xl"></div>
                <p className="relative text-base md:text-lg text-[#3e2723] max-w-2xl mx-auto leading-relaxed font-semibold px-4 py-2 drop-shadow-md">
                  Transformo tu mirada con técnicas profesionales de última generación. 
                  Especialista certificada en Trelew, Chubut.
                </p>
              </div>
            </motion.div>

            {/* Estadísticas */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-6 md:gap-12 py-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-[#d4af37] mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-[#6d4c41] font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Botones de acción mejorados */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <MotionLink
                to="/contact"
                className="group relative bg-gradient-to-r from-[#d4af37] to-[#b8912b] hover:from-[#b8912b] hover:to-[#d4af37] text-white font-bold py-4 px-8 md:px-12 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl text-lg md:text-xl tracking-wide focus:outline-none focus:ring-4 focus:ring-[#d4af37]/40 overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  📞 Reservar turno
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </MotionLink>

              <MotionLink
                to="/services"
                className="group bg-white/90 backdrop-blur-sm hover:bg-white text-[#b76e79] hover:text-[#d4af37] font-semibold py-4 px-8 md:px-12 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-lg md:text-xl border-2 border-[#b76e79]/20 hover:border-[#d4af37]/40"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center gap-2">
                  ✨ Ver servicios
                </span>
              </MotionLink>
            </motion.div>

            {/* Badge de confianza */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex justify-center items-center gap-2 pt-6"
            >
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                <span className="text-sm font-medium text-[#6d4c41]">
                  Rivadavia 519, 1er piso, Trelew
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        
      </section>
    </>
  );
};

export default Hero;
