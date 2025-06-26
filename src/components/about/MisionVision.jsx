import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaRegCalendarAlt, FaStar } from "react-icons/fa";

const MisionVision = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#fff7f9] via-[#fbeee6] to-[#fff] relative overflow-hidden">
      {/* Contenido principal centrado */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-[#b76e79] mb-12 drop-shadow-gold inline-block relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Misión & Visión
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-yellow-400 text-3xl animate-gold-glow">
            <FaStar />
          </span>
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-start mb-16">
          <motion.div
            className="flex-1 px-4"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-yellow-700 mb-3 flex items-center gap-2">
              <FaStar className="text-yellow-400" /> Nuestra Misión
            </h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed bg-white/70 rounded-xl p-4 shadow-gold">
              Ofrecer servicios de belleza de la más alta calidad, utilizando
              productos de primera y las mejores técnicas, para que cada cliente
              se sienta feliz y satisfecho con los resultados.
            </p>
          </motion.div>
          {/* Separador decorativo */}
          <div className="hidden md:flex flex-col items-center mx-6">
            <span className="w-1 h-16 bg-gradient-to-b from-yellow-400 via-pink-300 to-yellow-600 rounded-full animate-gold-glow2" />
            <FaStar className="text-yellow-400 text-2xl my-2 animate-gold-glow" />
            <span className="w-1 h-16 bg-gradient-to-t from-yellow-400 via-pink-300 to-yellow-600 rounded-full animate-gold-glow2" />
          </div>
          <motion.div
            className="flex-1 px-4"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-yellow-700 mb-3 flex items-center gap-2">
              <FaStar className="text-yellow-400" /> Nuestra Visión
            </h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed bg-white/70 rounded-xl p-4 shadow-gold">
              Convertirnos en el referente número uno de la belleza en la región,
              manteniendo siempre altos estándares de calidad, atención
              personalizada y un ambiente cálido y profesional.
            </p>
          </motion.div>
        </div>
        {/* Sección de video premium */}
        <motion.div
          className="mt-10 animate-fade-in-up duration-1000"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-yellow-700 mb-4 flex items-center gap-2 justify-center">
            <FaStar className="text-yellow-400" /> Nuestros Trabajos
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Mirá este breve recorrido por algunos resultados en cejas y pestañas
            de nuestras clientas.
          </p>
          <div
            className="w-full max-w-2xl aspect-video mx-auto rounded-2xl overflow-hidden relative group focus-within:ring-4 focus-within:ring-yellow-300 transition-transform duration-700 hover:scale-105"
            style={{ maxHeight: "380px" }}
            tabIndex={0}
            aria-label="Video de trabajos realizados"
          >
            {/* Overlay decorativo sutil */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/20 via-pink-100/10 to-transparent pointer-events-none z-10" />
            <ReactPlayer
              url="/assets/videos/arte.mp4"
              playing
              loop
              muted
              controls={false}
              width="100%"
              height="100%"
              className="rounded-2xl"
              style={{ animation: "fadeinSlide 0.7s" }}
            />
          </div>
        </motion.div>
      </div>
      {/* Botón fuera del contenedor central, pero dentro del section */}
      <motion.div
        className="mt-12 flex justify-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <Link
          to="/contact"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-[#e6b7c1] to-[#f4d3d9] hover:from-[#f4d3d9] hover:to-[#e6b7c1] text-yellow-900 text-lg font-semibold py-3 px-7 rounded-full shadow-gold border-2 border-yellow-400 transition duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-300 animate-gold-glow2"
          aria-label="Reservar turno"
        >
          <FaRegCalendarAlt className="text-2xl text-yellow-400 animate-gold-glow" />
          Reservar Turno
        </Link>
      </motion.div>
      <style>{`
        .shadow-gold { box-shadow: 0 2px 8px 0 #d4af3740, 0 0 0 2px #d4af37; }
        .drop-shadow-gold { filter: drop-shadow(0 0 6px #d4af37cc); }
        .animate-gold-glow {
          animation: gold-glow 2.2s infinite alternate;
        }
        .animate-gold-glow2 {
          animation: gold-glow2 3.2s infinite alternate;
        }
        @keyframes gold-glow {
          0% { filter: drop-shadow(0 0 0px #d4af37cc); }
          100% { filter: drop-shadow(0 0 12px #d4af37cc); }
        }
        @keyframes gold-glow2 {
          0% { filter: drop-shadow(0 0 0px #e6b7c1cc); }
          100% { filter: drop-shadow(0 0 10px #e6b7c1cc); }
        }
        @keyframes fadeinSlide {
          0% { opacity: 0; transform: scale(0.98); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default MisionVision;
