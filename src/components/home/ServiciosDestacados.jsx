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
    img: "/assets/images/cejas/MYBeauty7.webp",
    titulo: "Realzá tu mirada con pestañas perfectas",
    descripcion:
      "Extensiones clásicas, volumen ruso o lifting. Técnicas indoloras y duraderas aplicadas por especialistas para una mirada profunda sin maquillaje.",
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
    img: "/assets/images/pestañas/MYBeauty1.webp",
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
    img: "/assets/images/depilacion/depilacion.PNG", // Asegurate que exista esta imagen
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


const ServiciosDestacados = () => {
  return (
    <section className="py-20 bg-[#fdfaf7]">
      <motion.h2
        className="text-4xl font-bold text-center text-gray-800 mb-12"
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
              <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl overflow-hidden shadow-xl">
                <div className="md:w-1/2 w-full h-96 md:h-[500px]">
                  <img
                    src={servicio.img}
                    alt={servicio.titulo}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="md:w-1/2 w-full p-8 md:p-12 text-left">
                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                    {servicio.titulo}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {servicio.descripcion}
                  </p>
                  <ul className="list-disc text-gray-700 pl-5 mb-6 space-y-2">
                    {servicio.bullets.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <Link
                    to="/Contact"
                    className="inline-block bg-[#E6A5A1] hover:bg-[#D98E89] text-white font-medium py-2 px-6 rounded-full transition-all"
                  >
                    {servicio.cta}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default ServiciosDestacados;
