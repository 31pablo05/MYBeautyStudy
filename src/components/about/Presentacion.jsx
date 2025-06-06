import React from "react";
import { motion } from "framer-motion";

const Presentacion = () => {
  return (
    <section className="py-16 bg-pink-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="relative inline-block text-3xl font-bold text-gray-800 mb-12 mt-12 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-yellow-400 after:rounded-full after:mt-2">

          Conocé a Melina Yancan
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8">

          {/* Imagen con fondo decorativo */}
          <div className="relative">
            {/* Fondo difuminado */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-pink-100 rounded-full blur-2xl scale-125 z-0" />

            {/* Imagen animada con framer-motion */}
<motion.img
  src="/assets/images/meli/1.webp"
  alt="Melina Yancan"
  className="relative max-w-xs md:max-w-sm object-contain z-10"
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
/>

          </div>

          {/* Texto animado */}
          <motion.p
            className="text-lg text-gray-700 text-left"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Soy Melina Yancan, una profesional apasionada por el mundo de la belleza. Desde hace más de 5 años me dedico a brindar servicios de cejas, pestañas y estética facial con un enfoque personalizado y de alta calidad. Mi objetivo es que cada persona que visite el estudio se sienta escuchada, cómoda y feliz con su imagen. Además, me encanta compartir mis conocimientos y por eso también dicto cursos para formar nuevas profesionales.
          </motion.p>

        </div>
      </div>
    </section>
  );
};

export default Presentacion;
