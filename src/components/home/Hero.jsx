import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "/assets/images/LOGO ROSEGOLD.webp";

// Crear componente animado basado en Link
const MotionLink = motion(Link);

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.hero-section');
      const yOffset = window.scrollY;
      if (section) {
        section.style.backgroundPositionY = `${yOffset * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.3,
        duration: 1,
      }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="hero-section relative w-full min-h-[90vh] bg-gradient-to-br from-[#f7cac9] via-[#fbd5bd] to-[#f1a9a0] bg-no-repeat bg-center bg-cover"
    >
      <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-sm"></div>

      {/* Logo flotante con animación */}
      <motion.img
  src={logo}
  alt="MYBeautyStudy Logo"
  className="
    absolute top-16 
    left-[20%] -translate-x-[45%] 
    w-56 sm:w-72 
    z-20 mt-32
    md:left-[40%] md:-translate-x-[55%]
    md:w-96
  "
  style={{
    filter: "drop-shadow(0 10px 5px rgba(0, 0, 0, 0.55))",
    willChange: "transform", // ⚡ mejora el rendimiento
  }}
  animate={{
    y: [0, -10, 0],
    rotate: [0, 2, -2, 0],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>



     

      {/* Contenedor animado para texto y botón */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col justify-end items-center min-h-[80vh] text-black text-center px-4 pt-40"
      >
        <motion.h1 
          variants={itemVariants} 
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          Armonizá tu mirada
        </motion.h1>

        <motion.p 
          variants={itemVariants} 
          className="text-base md:text-xl max-w-2xl mb-6"
        >
          Perfilado de cejas · Lifting y extensiones de pestañas · Depilación
          láser y con cera · Limpieza facial y dermaplaning
        </motion.p>

        <motion.div variants={itemVariants}>
          <MotionLink
            to="/contact"
            className="bg-[#d4af37] hover:bg-[#bfa437] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-xl"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Reservar turno
          </MotionLink>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
