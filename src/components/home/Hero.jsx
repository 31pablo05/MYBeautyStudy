import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

  return (
    <section
      className="mt-2 hero-section relative w-full min-h-[90vh] bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: "url('/assets/images/banner4.png')" }}
    >
      {/* Capa oscura para mejor legibilidad */}
      <div className="absolute inset-0 bg-black bg-opacity-5"></div>

      {/* Contenido principal con animación */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col justify-end items-center min-h-[80vh] text-black text-center px-4"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Armonizá tu mirada
        </h1>

        <p className="text-base md:text-xl max-w-2xl mb-6">
          Perfilado de cejas · Lifting y extensiones de pestañas · Depilación
          láser y con cera · Limpieza facial y dermaplaning
        </p>

        <Link
          to="/contact"
          className="bg-[#d4af37] hover:bg-[#bfa437] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-xl"
        >
          Reservar turno
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
