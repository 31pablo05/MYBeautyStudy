import React from "react";
import { motion } from "framer-motion";
import BannerHorarios from "./BannerHorarios";

const ReservaRapida = () => {
  const mensaje = "¡Hola! Quisiera consultar por disponibilidad de turnos. 😊";
  const telefono = "542804034308";

  const redireccionarWhatsapp = () => {
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-24 bg-gradient-to-br from-[#fbeeee] via-[#fdf6e3] to-[#fbe6d3] relative overflow-hidden">
      {/* Efecto decorativo de fondo */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#d4af37]/20 rounded-full blur-3xl z-0 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#b76e79]/20 rounded-full blur-2xl z-0 animate-pulse-slow"></div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 relative z-10">
        {/* Imagen de la profesional con animación de brillo */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.img
            src="/assets/images/meli/meli.webp"
            alt="Profesional con herramientas"
            className="rounded-2xl shadow-2xl w-full object-cover border-4 border-white"
            initial={{ scale: 0.96, filter: 'brightness(0.95)' }}
            whileHover={{ scale: 1.01, filter: 'brightness(1.05)' }}
            transition={{ duration: 0.5, type: 'spring' }}
            whileTap={{ scale: 0.98 }}
          />
        </motion.div>

        {/* Texto y botón */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-[#2c2c2c] mb-6 tracking-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Reserva tu turno fácilmente
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-[#4a4a4a] mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Coordiná tu cita con nuestra profesional y viví una experiencia de belleza única y personalizada. ¡Tu bienestar es prioridad!
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.09, boxShadow: '0 8px 32px 0 #d4af37cc' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={redireccionarWhatsapp}
            className="bg-[#d4af37] hover:bg-[#c29c2f] text-white font-bold py-4 px-12 rounded-full shadow-xl transition-transform transform text-lg md:text-xl tracking-wide focus:outline-none focus:ring-4 focus:ring-[#d4af37]/40 animate-pulse"
          >
            Consultar disponibilidad
          </motion.button>
        </motion.div>
      </div>

      {/* Banner de horarios debajo, separado del contenido */}
      <div className="mt-16 px-6 relative z-10">
        <BannerHorarios />
      </div>
    </section>
  );
};

export default ReservaRapida;
