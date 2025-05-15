import React from "react";

const ReservaRapida = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">¡Reserva tu cita rápidamente!</h2>
        <p className="text-lg text-gray-600 mb-8">Llama al número o llena el formulario para agendar tu cita y disfrutar de nuestros servicios.</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-yellow-500 text-white py-2 px-6 rounded-lg">Llamar ahora</button>
          <button className="bg-gray-800 text-white py-2 px-6 rounded-lg">Formulario de cita</button>
        </div>
      </div>
    </section>
  );
};

export default ReservaRapida;
