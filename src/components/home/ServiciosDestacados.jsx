// ServiciosDestacados.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const servicios = [
  {
    img: "/assets/images/MYBeauty1.webp",
    titulo: "Pestañas",
    descripcion: "Realzamos tu mirada con lifting, extensiones clásicas o volumen.",
    ruta: "pestanas",
  },
  {
    img: "/assets/images/MYBeauty3.webp",
    titulo: "Cejas",
    descripcion: "Diseño, perfilado y pigmentación para lograr unas cejas perfectas.",
    ruta: "cejas",
  },
  {
    img: "/assets/images/service3.jpg",
    titulo: "Depilación Láser",
    descripcion: "Tecnología avanzada para eliminar el vello de forma eficaz y segura.",
    ruta: "depilacion",
  },
];

const ServiciosDestacados = () => {
  return (
    <section className="py-20 bg-[#fdfaf7]">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Servicios Destacados
      </h2>

      <div className="max-w-4xl mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
        >
          {servicios.map((servicio, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-xl mx-auto">
                <img
                  src={servicio.img}
                  alt={servicio.titulo}
                  className="w-60 h-60 object-cover rounded-md mx-auto mb-6 border-4 border-[#d4af37]"
                />
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {servicio.titulo}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {servicio.descripcion}
                </p>
                <Link
                  to={`/galeria/${servicio.ruta}`}
                  className="inline-block bg-[#d4af37] hover:bg-[#bfa437] text-white font-medium py-2 px-6 rounded-full transition-all"
                >
                  Ver más
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ServiciosDestacados;
