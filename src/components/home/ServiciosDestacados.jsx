// ServiciosDestacados.jsx
import React from "react";
import { Link } from "react-router-dom";

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

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        {servicios.map((servicio, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-xl text-center hover:shadow-2xl transition duration-300"
          >
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
        ))}
      </div>
    </section>
  );
};

export default ServiciosDestacados;
