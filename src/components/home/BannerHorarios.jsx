import React from 'react';

const BannerHorarios = () => {
  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96">
      {/* Imagen de fondo */}
      <img
        src="/assets/images/BannerHorarios2.png" // Cambiá esta ruta por la real
        alt="Horarios de Atención"
        className="w-full h-full object-cover"
      />

      {/* Overlay con los horarios */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md text-center max-w-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Horarios de Atención</h2>
          <ul className="text-gray-700 text-sm leading-relaxed">
            <li>Lunes a Viernes: 09:00 - 13:00 / 17:00 - 20:00</li>
            <li>Sábados: 09:00 - 13:00</li>
            <li>Domingos y feriados: Cerrado</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BannerHorarios;
