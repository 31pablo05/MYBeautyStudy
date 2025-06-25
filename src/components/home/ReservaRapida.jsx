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
    <section className="py-20 bg-gradient-to-br from-[#fbeeee] via-[#fdf6e3] to-[#fbe6d3]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        {/* Imagen de la profesional */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img
            src="/assets/images/meli/meli.webp"
            alt="Profesional con herramientas"
            className="rounded-2xl shadow-xl w-full object-cover"
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
          <h2 className="text-4xl md:text-5xl font-bold text-[#2c2c2c] mb-6">
            Reserva tu turno fácilmente
          </h2>
          <p className="text-lg text-[#4a4a4a] mb-8 leading-relaxed">
            Coordiná tu cita con nuestra profesional y viví una experiencia de belleza única y personalizada. ¡Tu bienestar es prioridad!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={redireccionarWhatsapp}
            className="bg-[#d4af37] hover:bg-[#c29c2f] text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform"
          >
            Consultar disponibilidad
          </motion.button>
          
        </motion.div>
      </div>

      {/* Banner de horarios debajo, separado del contenido */}
      <div className="mt-12 px-6">
        <BannerHorarios />
      </div>
    </section>
  );
};

export default ReservaRapida;
