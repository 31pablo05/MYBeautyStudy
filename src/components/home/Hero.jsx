import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import logo from "/assets/images/LOGO ROSEGOLD.webp";
import fondo from "/assets/images/fondoform.webp";

const MotionLink = motion(Link);

const keywords = [
  "Cejas perfectas",
  "Miradas inolvidables",
  "Belleza natural",
  "Lifting de pestañas",
  "Depilación láser profesional"
];

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % keywords.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href="/assets/images/LOGO ROSEGOLD.webp" type="image/webp" />
      </Helmet>
      <section
        id="hero-section"
        className="hero-section relative w-full min-h-[92vh] flex flex-col justify-center bg-no-repeat bg-center bg-cover overflow-hidden"
        style={{
          backgroundImage:
            `linear-gradient(120deg, rgba(247,202,201,0.92) 0%, rgba(251,213,189,0.85) 10%, rgba(241,169,160,0.85) 40%), url(${fondo})`
        }}
      >
        {/* Logo centrado verticalmente */}
        <div className="w-full flex justify-center items-center pt-32 md:pt-20">
          <motion.img
            src={logo}
            alt="MYBeautyStudy Logo"
            className="w-60 md:w-80 lg:w-[28rem] drop-shadow-xl"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ filter: "drop-shadow(0 0 2px #d4af37)" }}
          />
        </div>
        {/* Contenido principal */}
        <div className="flex flex-col items-center justify-center flex-1 text-center px-4 mt-2 md:mt-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight text-[#b76e79] drop-shadow-lg"
          >
            Armonizá tu mirada
          </motion.h1>
          <div className="h-12 md:h-14 flex items-center justify-center mb-6">
            <AnimatePresence mode="wait">
              <motion.span
                key={keywords[wordIndex]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7 }}
                className="text-lg md:text-2xl font-semibold text-[#d4af37] bg-white/60 px-4 py-2 rounded-full shadow-md"
              >
                {keywords[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-base md:text-xl max-w-2xl mb-8 text-[#6d4c41] font-medium drop-shadow-sm"
          >
            Brow Lamination · Lashista · Lami Maker
          </motion.p>
          <MotionLink
            to="/contact"
            className="bg-[#d4af37] hover:bg-[#bfa437] text-white font-bold py-4 px-12 rounded-full transition-all duration-300 shadow-xl hover:scale-110 hover:shadow-2xl text-lg md:text-xl tracking-wide focus:outline-none focus:ring-4 focus:ring-[#d4af37]/40 animate-pulse"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
          >
            Reservar turno
          </MotionLink>
        </div>
        {/* Quitados los detalles decorativos dorados */}
      </section>
    </>
  );
};

export default Hero;
