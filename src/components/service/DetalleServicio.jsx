import React from "react";
import { useParams } from "react-router-dom";

// Galerías de imágenes por servicio
const galeriaServicios = {
  pestanas: [
    "/assets/images/pestañas/MYBeauty1.webp",
    "/assets/images/pestañas/MYBeauty2.webp",
    "/assets/images/pestañas/MYBeauty4.webp",
    "/assets/images/pestañas/pestañas.webp",
  ],
  cejas: [
    "/assets/images/cejas/MYBeauty3.webp",
    "/assets/images/cejas/MYBeauty5.webp",
    "/assets/images/cejas/MYBeauty6.webp",
    "/assets/images/cejas/MYBeauty7.webp",
  ],
  "depilacion-laser": [
    "/assets/images/depilacion/maquina.webp",
    "/assets/images/depilacion/depilacionLaser.webp",
    "/assets/images/depilacion/depilacion.webp",
  ],
  "gift-cards": [
    "/assets/images/GIFTCARDMelinaYancan.webp",
    "/assets/images/logotipo.webp",
  ],
};

const nombresServicios = {
  pestanas: "Pestañas",
  cejas: "Cejas",
  "depilacion-laser": "Depilación Láser",
  "gift-cards": "Tarjetas de Regalo",
};

const DetalleServicio = () => {
  const { servicioId } = useParams();
  const imagenes = galeriaServicios[servicioId];
  const nombre = nombresServicios[servicioId];

  if (!imagenes) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-gray-800">Servicio no encontrado</h2>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50 min-h-[60vh]">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#b76e79] mb-10 text-center drop-shadow-gold">
          Galería de {nombre}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
          {imagenes.map((img, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl overflow-hidden shadow-gold group animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.08}s`, animationFillMode: "both" }}
            >
              <img
                src={img}
                alt={`${nombre} ${idx + 1}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl"
                loading="lazy"
              />
              {/* Overlay dorado al hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/0 via-yellow-100/30 to-yellow-200/40 opacity-0 group-hover:opacity-80 transition-opacity duration-500 z-10 pointer-events-none" />
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

export default DetalleServicio;
