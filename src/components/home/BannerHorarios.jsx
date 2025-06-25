import React from 'react';
import { motion } from 'framer-motion';

const ClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="#d4af37"
    className="w-7 h-7 md:w-8 md:h-8 inline-block align-middle mr-2 drop-shadow"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" stroke="#d4af37" strokeWidth="2" fill="#fff8e1" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7v5l3 2" />
  </svg>
);

const BannerHorarios = () => {
  return (
    <motion.div
      className="relative w-full max-w-7xl h-72 md:h-80 lg:h-96 xl:h-[520px] overflow-hidden rounded-2xl shadow-lg mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Imagen de fondo */}
      <img
        src="/assets/images/BannerHorarios4.png"
        alt="Horarios de Atención"
        className="w-full h-full object-cover brightness-90"
      />
      {/* Overlay decorativo */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#fff8e1]/80 to-transparent pointer-events-none" />
      {/* Overlay animado con borde dorado y sombra, AJUSTADO para mobile */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 w-full flex justify-center"
        style={{
          bottom: 'unset',
          top: '1.5rem',
        }}
      >
        <motion.div
          className="bg-white/60 md:bg-white/90 backdrop-blur-md p-3 md:p-8 rounded-2xl shadow-xl border border-[#d4af37] max-w-[90vw] md:max-w-md lg:max-w-lg text-center relative"
          initial={{ opacity: 0, filter: 'blur(10px)', y: 30 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {/* Título con ícono */}
          <div className="flex items-center justify-center mb-2 md:mb-3 gap-2">
            <ClockIcon />
            <h3 className="text-lg md:text-2xl font-bold text-[#b76e79] tracking-wide drop-shadow-sm">Horarios de Atención</h3>
          </div>
          {/* Separador dorado */}
          <div className="w-12 md:w-16 h-1 mx-auto mb-3 md:mb-4 rounded-full bg-gradient-to-r from-[#d4af37] via-[#fff8e1] to-[#d4af37]" />
          <ul className="text-gray-700 text-xs md:text-base leading-relaxed space-y-1 md:space-y-3">
            <li className="flex items-center justify-center gap-1 md:gap-2">
              <span className="font-semibold text-[#d4af37]">Lunes a Viernes:</span>
              <span>09:00 - 11:00</span>
              <span className="mx-1 text-[#b76e79]">•</span>
              <span>14:00 - 20:00</span>
            </li>
            <li className="flex items-center justify-center gap-1 md:gap-2">
              <span className="font-semibold text-[#d4af37]">Sábados y Feriados:</span>
              <span>09:00 - 13:00</span>
            </li>
            <li className="flex items-center justify-center gap-1 md:gap-2">
              <span className="font-semibold text-[#b76e79]">Domingos:</span>
              <span>Cerrado</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BannerHorarios;
