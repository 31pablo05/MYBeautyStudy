// src/components/common/TurnoCalendar.jsx
import React, { useState, useRef, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const TurnoCalendar = () => {
  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
  const [horaSeleccionada, setHoraSeleccionada] = useState('');
  const horasRef = useRef(null);

  const horasDisponibles = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];

  // Redirige a WhatsApp con fecha formateada en español y la hora elegida
  const redirigirWhatsapp = () => {
    const opcionesFecha = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const diaTexto = fechaSeleccionada.toLocaleDateString('es-AR', opcionesFecha);
    const mensaje = `Hola! Quiero reservar un turno el ${diaTexto} a las ${horaSeleccionada}.`;
    const url = `https://wa.me/5492804034308?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  // Efecto: cuando cambia fecha, limpiar hora y hacer scroll
  useEffect(() => {
    setHoraSeleccionada(''); // limpiamos hora al cambiar fecha
    if (fechaSeleccionada && horasRef.current) {
      horasRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [fechaSeleccionada]);

  return (
    <div className="w-full px-4 sm:max-w-md mx-auto mt-8 p-6 bg-[#F7E3D8] border-2 border-[#D4AF37] rounded-2xl shadow-lg transition-transform duration-300 hover:shadow-2xl hover:scale-[1.01] relative">
      {/* Imán o pin superior */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#D4A29E] rounded-full shadow-md border-4 border-white z-10"></div>

      <h2 className="text-2xl font-bold mb-6 text-center text-[#333]">📅 Reservá tu turno</h2>

      {/* Calendario con estilos personalizados */}
      <div className="rounded-xl overflow-hidden bg-white shadow-inner p-2 border-2 border-[#D4AF37] mb-4">
        <Calendar
          onChange={(date) => setFechaSeleccionada(date)}
          value={fechaSeleccionada}
          minDate={new Date()}
          tileDisabled={({ date }) => {
            const day = date.getDay(); // 0 = domingo, 6 = sábado
            return day === 0 || day === 6;
          }}
          className={`!border-none
            [&_.react-calendar__tile]:p-3
            [&_.react-calendar__tile]:rounded-lg
            [&_.react-calendar__tile]:text-sm sm:[&_.react-calendar__tile]:text-base
            [&_.react-calendar__tile:hover]:bg-[#FCECE6]
            [&_.react-calendar__tile--active]:bg-[#D4AF37]
            [&_.react-calendar__tile--active]:text-white
            [&_.react-calendar__tile--now]:bg-[#ECD4B0]
            [&_.react-calendar__tile--now]:text-[#4E3B1C]
            [&_.react-calendar__navigation__label]:font-bold
            [&_.react-calendar__navigation__label]:text-[#4E3B1C]
            [&_.react-calendar__navigation__arrow]:text-[#D4AF37]
            [&_.react-calendar__month-view__weekdays]:text-xs
            [&_.react-calendar__month-view__weekdays]:text-[#8C7A58]
            [&_.react-calendar__month-view__weekdays]:uppercase`}
        />
      </div>

      {/* Mostrar día seleccionado */}
      {fechaSeleccionada && (
        <p className="text-center text-[#4E3B1C] font-medium mb-2">
          Día seleccionado: {fechaSeleccionada.toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>
      )}

      {/* Selección de hora usando una grilla de botones */}
      <div ref={horasRef}>
        {fechaSeleccionada && (
          <div className="mt-4 transition-opacity duration-500 ease-in delay-100">
            <label className="block mb-2 font-semibold text-[#4E3B1C]">🕐 Elegí la hora:</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {horasDisponibles.map((hora) => (
                <button
                  key={hora}
                  aria-label={`Seleccionar hora ${hora}`}
                  onClick={() => setHoraSeleccionada(hora)}
                  className={`py-2 rounded-xl text-center font-medium transition
                    ${horaSeleccionada === hora
                      ? 'bg-[#D4AF37] text-white'
                      : 'bg-white text-[#333] border border-[#D4AF37] hover:bg-[#FCECE6]'
                    }`}
                >
                  {hora}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Botón de confirmación */}
      <button
        aria-label="Confirmar turno y abrir WhatsApp"
        disabled={!fechaSeleccionada || !horaSeleccionada}
        onClick={redirigirWhatsapp}
        className={`
          w-full mt-6 py-3 rounded-xl font-semibold transition transform
          ${fechaSeleccionada && horaSeleccionada
            ? 'bg-[#D4AF37] hover:bg-[#B8912B] text-white shadow-md hover:scale-105 delay-200'
            : 'bg-gray-300 text-gray-600 cursor-not-allowed'
          }`}
      >
        ✅ Confirmar turno por WhatsApp
      </button>
    </div>
  );
};

export default TurnoCalendar;
