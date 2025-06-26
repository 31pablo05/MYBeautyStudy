import React from "react";
import { Link } from "react-router-dom";
import servicios from "../service/serviciosData";
import { FaArrowRight } from "react-icons/fa";

const ListaServicios = () => {
  return (
    <section className="py-16 bg-white mt-20 animate-fade-in">
      <div className="max-w-6xl mx-auto text-center">
        {/* Título con animación */}
        <h2 className="text-3xl font-extrabold text-[#b76e79] mb-12 inline-block relative drop-shadow-gold">
          Nuestros Servicios
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicios.map((servicio, index) => (
            <div
              key={servicio.id}
              className={`group bg-white rounded-2xl shadow-gold border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300 overflow-visible relative animate-fade-in-up min-h-[420px] flex flex-col`}
              style={{ animationDelay: `${index * 0.08}s`, animationFillMode: 'both' }}
              tabIndex={0}
              role="article"
              aria-label={`Servicio: ${servicio.titulo}`}
            >
              <div className="relative w-full h-48 overflow-hidden rounded-t-2xl">
                <img
                  src={servicio.imagen}
                  alt={servicio.titulo}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay dorado al hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/0 via-yellow-100/30 to-yellow-200/40 opacity-0 group-hover:opacity-80 transition-opacity duration-500 z-10 pointer-events-none" />
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#b76e79] mb-2 group-hover:text-yellow-700 transition-colors duration-300">
                    {servicio.titulo}
                  </h3>
                  <p className="text-gray-700 mb-6">{servicio.descripcion}</p>
                </div>
                <Link
                  to={servicio.link}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 text-yellow-900 font-bold px-5 py-2 rounded-full border-2 border-yellow-400 shadow-gold hover:from-yellow-600 hover:to-yellow-500 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-200 drop-shadow-gold mt-2"
                  aria-label={`Ver más sobre ${servicio.titulo}`}
                >
                  Ver más <FaArrowRight className="text-lg" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .shadow-gold { box-shadow: 0 2px 12px 0 #d4af3740, 0 0 0 2px #d4af37; }
        .drop-shadow-gold { filter: drop-shadow(0 0 6px #d4af37cc); }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s;
        }
      `}</style>
    </section>
  );
};

export default ListaServicios;
