import React from "react";

const ReservaRapida = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-pink-100 via-yellow-100 to-yellow-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 px-6">
        {/* Imagen */}
        <div className="flex-shrink-0 w-full md:w-1/2">
          <img
            src="/assets/images/meli/4.png"
            alt="Profesional con herramientas"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Texto y llamada a acción */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Reserva turno rápidamente
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Agenda tu turno con nuestra profesional para disfrutar de un servicio
            personalizado y de calidad. ¡No esperes más!
          </p>
          <button
            onClick={() => window.location.href = "tel:+542804034308"}
            className="bg-gradient-to-r from-rose-400 via-pink-500 to-rose-600 text-white py-3 px-8 rounded-full font-semibold shadow-lg hover:shadow-rose-500 hover:scale-105 transition-transform duration-300"
          >
            Reservar turno
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReservaRapida;
