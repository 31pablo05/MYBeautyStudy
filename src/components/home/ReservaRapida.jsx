import React from "react";

const ReservaRapida = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#fbeeee] via-[#fdf6e3] to-[#fbe6d3]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        {/* Imagen de la profesional */}
        <div className="w-full md:w-1/2">
          <img
            src="/assets/images/meli/1.png"
            alt="Profesional con herramientas"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </div>

        {/* Texto y llamada a la acción */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2c2c2c] mb-6">
            Reserva tu turno fácilmente
          </h2>
          <p className="text-lg text-[#4a4a4a] mb-8 leading-relaxed">
            Coordiná tu cita con nuestra profesional y viví una experiencia de belleza única y personalizada. ¡Tu bienestar es prioridad!
          </p>
          <button
            onClick={() => window.location.href = "tel:+542804034308"}
            className="bg-[#d4af37] hover:bg-[#c29c2f] text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            consultar disponibilidad
            
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReservaRapida;
