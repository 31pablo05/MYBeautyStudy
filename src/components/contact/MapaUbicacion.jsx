import React from 'react';

const MapaUbicacion = () => {
  return (
    <div className="w-full max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-gold bg-white/80 backdrop-blur-md border border-yellow-400 animate-fade-in-up">
      <iframe
        title="Ubicación My Beauty Study"
        src="https://www.google.com/maps?q=Rivadavia+519,+Trelew,+Chubut,+Argentina&output=embed"
        width="100%"
        height="380"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        aria-label="Mapa de ubicación del local en Rivadavia 519, 1er piso, Trelew, Chubut"
      ></iframe>
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold text-[#b76e79] mb-1">¿Dónde estamos?</h3>
        <p className="text-gray-700 text-sm">Rivadavia 519, 1er piso, Trelew, Chubut</p>
      </div>
    </div>
  );
};

export default MapaUbicacion;
