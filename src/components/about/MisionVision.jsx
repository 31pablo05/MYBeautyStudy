import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaRegCalendarAlt } from "react-icons/fa";

const MisionVision = () => {
  return (
    <section className="py-16 bg-gray-50">

      {/* Contenido principal centrado */}
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Nuestra Misión</h3>
          <p className="text-lg text-gray-600">
            Ofrecer servicios de belleza de la más alta calidad, utilizando productos de primera y las mejores técnicas, para que cada cliente se sienta feliz y satisfecho con los resultados.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Nuestra Visión</h3>
          <p className="text-lg text-gray-600">
            Convertirnos en el referente número uno de la belleza en la región, manteniendo siempre altos estándares de calidad, atención personalizada y un ambiente cálido y profesional.
          </p>
        </div>

        {/* Sección de video */}
        <div className="mt-16 animate-fade-in-up duration-1000">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Nuestros Trabajos</h3>
          <p className="text-lg text-gray-600 mb-6">
            Mirá este breve recorrido por algunos resultados en cejas y pestañas de nuestras clientas.
          </p>
          <div className="max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg transform transition-transform duration-700 hover:scale-105">
            <ReactPlayer
              url="/assets/videos/arte.mp4"
              playing
              loop
              muted
              controls={false}
              width="100%"
              height="100%"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Botón fuera del contenedor central, pero dentro del section */}
      <motion.div
        className="mt-12 flex justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Link
          to="/contact"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-[#e6b7c1] to-[#f4d3d9] hover:from-[#f4d3d9] hover:to-[#e6b7c1] text-white text-lg font-semibold py-3 px-6 rounded-full shadow-md transition duration-300"
        >
          <FaRegCalendarAlt className="text-xl" />
          Reservar Turno
        </Link>
      </motion.div>

    </section>
  );
};

export default MisionVision;
