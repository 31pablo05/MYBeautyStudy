import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '+5492804034308';
  const message = "¡Hola! Me gustaría reservar un turno. ¿Podrías contarme qué disponibilidad hay para cejas, pestañas o depilación láser? 💖";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <button
        onClick={handleClick}
        className="p-4 bg-[#E6A5A1] hover:bg-[#D98E89] rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 ease-in-out focus:outline-none flex items-center justify-center"
        aria-label="Contactar por WhatsApp"
        title="Reservá ahora por WhatsApp"
      >
        <FaWhatsapp className="text-white group-hover:text-green-500 text-4xl transition-colors duration-300" />

      </button>

      {/* Tooltip elegante visible solo en desktop */}
      <div className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-white text-[#E6A5A1] text-sm px-3 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
        Reservá ahora
      </div>
    </div>
  );
};

export default WhatsAppButton;
