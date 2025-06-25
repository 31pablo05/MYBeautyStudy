import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const servicios = [
  {
    img: "/assets/images/pestañas/MYBeauty1.webp",
    
    titulo: "Realzá tu mirada con pestañas perfectas",
    descripcion:
      "Extensiones clásicas, volumen Brasilero y efecto remmel. Técnicas indoloras y duraderas aplicadas por especialistas para una mirada profunda sin maquillaje.",
    bullets: [
      "Volumen Natural o Intenso según tu estilo",
      "Técnicas seguras e indoloras",
      "Aplicación profesional con años de experiencia",
      "Resultados duraderos y cuidados post tratamiento",
    ],
    ruta: "pestanas",
    cta: "Consultar citas de pestañas",
  },
  {
    img: "/assets/images/cejas/MYBeauty7.webp",
    titulo: "Tus cejas perfectas con Micro de Cejas Blink",
    descripcion:
      "El Micro de Cejas Blink logra la mejor versión de tu mirada, con un diseño profesional adaptado a tu rostro para un resultado natural y duradero.",
    bullets: [
      "Diseño profesional personalizado",
      "Realizado por especialistas con experiencia",
      "Técnica indolora y segura",
      "Resultado semi-permanente sin cambios bruscos",
    ],
    ruta: "cejas",
    cta: "Reservá tu micro de cejas",
  },
  {
    img: "/assets/images/depilacion/depilacion.webp", // Asegurate que exista esta imagen
    titulo: "Depilación Láser definitiva y segura",
    descripcion:
      "Eliminá el vello de forma eficaz con tecnología láser de última generación. Tratamiento personalizado, rápido e indoloro para todo tipo de piel.",
    bullets: [
      "Tecnología de última generación",
      "Resultados visibles desde la primera sesión",
      "Tratamiento apto para todo tipo de piel",
      "Atención personalizada por profesionales",
    ],
    ruta: "depilacion-laser",
    cta: "Reservá tu sesión de depilación",
  },
];

// Componente para la card de servicio destacado
const ServicioCard = ({ servicio, index }) => {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-[#D4AF37] relative group"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 * index }}
    >
      {/* Separador decorativo dorado */}
      <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-[#D4AF37]/80 to-transparent z-10" style={{transform: 'translateX(-50%)'}}></div>
      {/* Imagen con animación de zoom y brillo al hacer hover */}
      <motion.div
        className="md:w-1/2 w-full h-96 md:h-[500px] overflow-hidden relative"
        whileHover={{ scale: 1.03 }}
        transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      >
        <img
          src={servicio.img}
          alt={servicio.titulo}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110 group-hover:shadow-gold"
        />
        {/* Overlay dorado sutil al hacer hover */}
        <div className="absolute inset-0 pointer-events-none group-hover:bg-gradient-to-tr group-hover:from-[#D4AF37]/10 group-hover:to-transparent transition-all duration-500"></div>
      </motion.div>
      {/* Contenido */}
      <div className="md:w-1/2 w-full p-8 md:p-12 text-left z-20">
        <motion.h3
          className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 drop-shadow-gold"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {servicio.titulo}
        </motion.h3>
        <motion.p
          className="text-gray-600 mb-4 leading-relaxed"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {servicio.descripcion}
        </motion.p>
        {/* Bullets animados en cascada */}
        <motion.ul
          className="list-disc text-gray-700 pl-5 mb-6 space-y-2"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          viewport={{ once: true }}
        >
          {servicio.bullets.map((item, i) => (
            <motion.li
              key={i}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
};

const ServiciosDestacados = () => {
  return (
    <section className="py-20 bg-[#fdfaf7]">
      <motion.h2
        className="text-4xl font-bold text-center text-gray-800 mb-12 drop-shadow-gold"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Tratamientos de Cejas y Pestañas
      </motion.h2>
      <motion.div
        className="max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000 }}
        >
          {servicios.map((servicio, index) => (
            <SwiperSlide key={index}>
              <ServicioCard servicio={servicio} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      {/* Estilos premium para resplandor dorado y sombra */}
      <style>{`
        .shadow-gold { box-shadow: 0 2px 8px 0 #d4af3740, 0 0 0 2px #d4af37; }
        .drop-shadow-gold { filter: drop-shadow(0 0 6px #d4af37cc); }
        .animate-gold-glow {
          animation: gold-glow 2.2s infinite alternate;
        }
        @keyframes gold-glow {
          0% { filter: drop-shadow(0 0 0px #d4af37cc); }
          100% { filter: drop-shadow(0 0 12px #d4af37cc); }
        }
      `}</style>
    </section>
  );
};

export default ServiciosDestacados;
