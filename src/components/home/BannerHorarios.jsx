import React from 'react';
import { motion } from 'framer-motion';

const BannerHorarios = () => {
  return (
    <motion.div
  className="
    relative 
    w-full 
    max-w-7xl 
    h-72 
    md:h-80 
    lg:h-96 
    xl:h-[520px] 
    overflow-hidden 
    rounded-2xl 
    shadow-lg 
    mx-auto
  "
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

  {/* Overlay animado sin cambiar posición */}
  <div
    className="
      absolute 
      bottom-4 md:bottom-6 lg:bottom-8 xl:bottom-10
      left-1/2 
      transform -translate-x-1/2 
    "
  >
    <motion.div
      className="
        bg-white/80 
        backdrop-blur-md 
        p-4 md:p-6 
        rounded-xl 
        shadow-md 
        text-center 
        max-w-xs md:max-w-md lg:max-w-lg
      "
      initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
      whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <ul className="text-gray-700 text-xs md:text-base leading-relaxed space-y-1 md:space-y-2">
        <li><strong>Lunes a Viernes:</strong> 09:00 - 11:00 / 14:00 - 20:00</li>
        <li><strong>Sábados y Feriados:</strong> 09:00 - 13:00</li>
        
        <li><strong>Domingos:</strong> Cerrado</li>
      </ul>
    </motion.div>
  </div>
</motion.div>

  );
};

export default BannerHorarios;
