// src/components/home/TurnoCalendar.jsx
import React, { useState, useRef, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { motion, AnimatePresence } from 'framer-motion';

const diasBloqueados = [
  // Ejemplo: [2025, 6, 29] para 29 de junio de 2025
  // [2025, 6, 29],
  // Aquí puedes agregar días específicos bloqueados por vacaciones o eventos particulares
];

// Genera array de horas en string HH:MM dado un rango
function generarHoras(inicio, fin) {
  const horas = [];
  let [h, m] = inicio.split(':').map(Number);
  const [hFin, mFin] = fin.split(':').map(Number);
  while (h < hFin || (h === hFin && m < mFin)) {
    horas.push(`${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`);
    m += 30;
    if (m >= 60) { h++; m = 0; }
  }
  return horas;
}

const horasLV = [...generarHoras('09:00', '11:30'), ...generarHoras('14:00', '20:30')];
const horasSab = generarHoras('09:00', '13:30');

const TurnoCalendar = () => {
  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
  const [horaSeleccionada, setHoraSeleccionada] = useState('');
  const [confirmado, setConfirmado] = useState(false);
  const [loading, setLoading] = useState(false);
  const horasRef = useRef(null);

  // Limpiar flag de interacción al cargar el componente
  useEffect(() => {
    localStorage.removeItem('calendario-interaccion');
  }, []);

  // Deshabilita días bloqueados y domingos
  const tileDisabled = ({ date }) => {
    const day = date.getDay();
    if (day === 0) return true; // Domingo
    return diasBloqueados.some(
      ([y, m, d]) =>
        date.getFullYear() === y &&
        date.getMonth() === m - 1 &&
        date.getDate() === d
    );
  };

  // Devuelve las horas disponibles según el día
  const getHorasDisponibles = () => {
    if (!fechaSeleccionada) return [];
    const day = fechaSeleccionada.getDay();
    // Domingo: cerrado
    if (day === 0) return [];
    // Sábado
    if (day === 6) return horasSab;
    // Lunes a viernes
    return horasLV;
  };

  // Deshabilita horas pasadas si el día es hoy
  const getHorasDisponiblesHoy = () => {
    const horas = getHorasDisponibles();
    if (!fechaSeleccionada) return horas;
    
    const hoy = new Date();
    const esHoy =
      fechaSeleccionada.getDate() === hoy.getDate() &&
      fechaSeleccionada.getMonth() === hoy.getMonth() &&
      fechaSeleccionada.getFullYear() === hoy.getFullYear();
    
    if (!esHoy) return horas;
    
    // Agregar 1 hora de buffer para dar tiempo de preparación
    const horaActual = hoy.getHours() + hoy.getMinutes() / 60 + 1;
    return horas.filter((h) => {
      const [hh, mm] = h.split(":").map(Number);
      return hh + mm / 60 > horaActual;
    });
  };

  // Redirige a WhatsApp con feedback visual y validación
  const redirigirWhatsapp = () => {
    if (!fechaSeleccionada || !horaSeleccionada) {
      alert('Por favor selecciona una fecha y hora válidas.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setConfirmado(true);
      try {
        const opcionesFecha = {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        };
        const diaTexto = fechaSeleccionada.toLocaleDateString('es-AR', opcionesFecha);
        // Mensaje predeterminado profesional y claro
        const mensaje = `¡Hola! 😊\n\n¿Cómo estás? Te escribo para consultar disponibilidad de turnos. Me gustaría saber si tenés algún horario libre para el *${diaTexto}* cerca de las *${horaSeleccionada}*\n\n💅 Me interesa coordinar un servicio de belleza\n📍 Entiendo que estás en Rivadavia 519, 1er piso, Trelew\n\nSi ese día no te queda cómodo, también podríamos ver otras fechas que manejes 😉\n\n¡Muchas gracias! 🌸`;
        const url = `https://wa.me/5492804034308?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
        // Limpiar selección después de enviar
        setTimeout(() => {
          setConfirmado(false);
          setFechaSeleccionada(null);
          setHoraSeleccionada('');
          localStorage.removeItem('turno_fecha');
          localStorage.removeItem('turno_hora');
        }, 3000);
      } catch (error) {
        console.error('Error al generar el mensaje de WhatsApp:', error);
        alert('Hubo un error al generar el mensaje. Inténtalo nuevamente.');
      }
    }, 900);
  };

  // Efecto: cuando cambia fecha, limpiar hora y hacer scroll (solo si no es la carga inicial)
  useEffect(() => {
    setHoraSeleccionada('');
    // Solo hacer scroll si ya hay una fecha seleccionada previamente y no es la carga inicial
    if (fechaSeleccionada && horasRef.current) {
      // Verificar si el usuario ya interactuó con el calendario
      const hasUserInteracted = localStorage.getItem('calendario-interaccion');
      if (hasUserInteracted) {
        horasRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [fechaSeleccionada]);

  // Guardar selección en localStorage con validación
  useEffect(() => {
    try {
      if (fechaSeleccionada) {
        localStorage.setItem('turno_fecha', fechaSeleccionada.toISOString());
      }
      if (horaSeleccionada) {
        localStorage.setItem('turno_hora', horaSeleccionada);
      }
    } catch (error) {
      console.warn('No se pudo guardar en localStorage:', error);
    }
  }, [fechaSeleccionada, horaSeleccionada]);

  // Cargar selección desde localStorage con validación
  useEffect(() => {
    try {
      const fecha = localStorage.getItem('turno_fecha');
      const hora = localStorage.getItem('turno_hora');
      
      if (fecha) {
        const fechaRecuperada = new Date(fecha);
        // Solo recuperar si la fecha es válida y futura
        if (fechaRecuperada > new Date()) {
          setFechaSeleccionada(fechaRecuperada);
        }
      }
      if (hora) {
        setHoraSeleccionada(hora);
      }
    } catch (error) {
      console.warn('Error al cargar desde localStorage:', error);
    }
  }, []);

  return (
    <motion.div
      className="w-full px-4 sm:max-w-md mx-auto mt-8 p-6 bg-[#F7E3D8] border-2 border-[#D4AF37] rounded-2xl shadow-lg transition-transform duration-300 hover:shadow-2xl hover:scale-[1.01] relative"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {/* Imán o pin superior */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#D4A29E] rounded-full shadow-md border-4 border-white z-10"></div>
      <div className="flex items-center justify-center gap-2 mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#d4af37" className="w-7 h-7"><circle cx="12" cy="12" r="9" stroke="#d4af37" strokeWidth="2" fill="#fff8e1" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7v5l3 2" /></svg>
        <h2 className="text-2xl font-bold text-center text-[#b76e79] tracking-wide drop-shadow-sm">Reservá tu turno</h2>
      </div>
      <p className="text-center text-[#4E3B1C] text-sm mb-4">Seleccioná el día y la hora, luego confirmá tu turno por WhatsApp.</p>
      {/* Calendario con estilos personalizados */}
      <motion.div
        className="rounded-xl overflow-hidden bg-white shadow-inner p-2 border-2 border-[#D4AF37] mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <Calendar
          onChange={(date) => {
            setFechaSeleccionada(date);
            // Marcar que el usuario ha interactuado con el calendario
            localStorage.setItem('calendario-interaccion', 'true');
          }}
          value={fechaSeleccionada}
          minDate={new Date()}
          tileDisabled={tileDisabled}
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
      </motion.div>
      {/* Mostrar día y hora seleccionados */}
      <AnimatePresence>
        {(fechaSeleccionada || horaSeleccionada) && (
          <motion.div
            key="resumen"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="text-center mb-2"
            aria-live="polite"
          >
            {fechaSeleccionada && (
              <span className="inline-block bg-[#fff8e1] text-[#b76e79] px-3 py-1 rounded-full text-sm font-semibold mr-2 mb-1">
                {fechaSeleccionada.toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
            )}
            {horaSeleccionada && (
              <span className="inline-block bg-[#d4af37]/90 text-white px-3 py-1 rounded-full text-sm font-semibold mb-1">
                {horaSeleccionada} hs
              </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      {/* Selección de hora usando una grilla de botones */}
      <div ref={horasRef}>
        {fechaSeleccionada && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4"
          >
            <label className="block mb-2 font-semibold text-[#4E3B1C]">🕐 Elegí la hora:</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {getHorasDisponiblesHoy().map((hora) => (
                <button
                  key={hora}
                  aria-label={`Seleccionar hora ${hora}`}
                  onClick={() => setHoraSeleccionada(hora)}
                  className={`py-2 rounded-xl text-center font-medium transition-all duration-200 focus:ring-2 focus:ring-[#d4af37] focus:outline-none
                    ${horaSeleccionada === hora
                      ? 'bg-[#D4AF37] text-white scale-105 shadow-lg'
                      : 'bg-white text-[#333] border border-[#D4AF37] hover:bg-[#FCECE6] hover:scale-102'
                    }`}
                >
                  {hora}
                </button>
              ))}
              {getHorasDisponiblesHoy().length === 0 && (
                <div className="col-span-2 sm:col-span-3 text-center p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                  <span className="text-[#b76e79] text-sm font-medium">
                    {fechaSeleccionada?.getDay() === 0 
                      ? "Los domingos estamos cerrados 🛌" 
                      : "No hay horarios disponibles para este día 😔"}
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
      {/* Botón de confirmación */}
      <motion.button
        aria-label="Confirmar turno y abrir WhatsApp"
        disabled={!fechaSeleccionada || !horaSeleccionada || loading}
        onClick={redirigirWhatsapp}
        className={`
          w-full mt-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition transform
          ${fechaSeleccionada && horaSeleccionada && !loading
            ? 'bg-[#D4AF37] hover:bg-[#B8912B] text-white shadow-md hover:scale-105 delay-200 animate-pulse'
            : 'bg-gray-300 text-gray-600 cursor-not-allowed'
          }`}
        whileTap={{ scale: 0.97 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M20.52 3.48A12 12 0 0 0 3.48 20.52l-1.09 4.01a1 1 0 0 0 1.23 1.23l4.01-1.09A12 12 0 1 0 20.52 3.48ZM12 22a10 10 0 1 1 10-10A10 10 0 0 1 12 22Zm5.07-7.75c-.28-.14-1.65-.81-1.9-.9s-.44-.14-.62.14-.71.9-.87 1.09-.32.21-.6.07a7.94 7.94 0 0 1-2.34-1.44 8.82 8.82 0 0 1-1.63-2c-.17-.28 0-.43.13-.57.13-.13.28-.34.42-.51a.51.51 0 0 0 .07-.53c-.07-.14-.62-1.49-.85-2.05-.22-.53-.45-.46-.62-.47h-.53a1 1 0 0 0-.72.34A2.93 2.93 0 0 0 7 10.5a5.08 5.08 0 0 0 1.09 2.77c.14.19 2.13 3.25 5.18 4.42.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32s-.26-.19-.54-.33Z"/></svg>
        {loading ? 'Enviando...' : 'Confirmar turno por WhatsApp'}
      </motion.button>
      {/* Mensaje de éxito mejorado */}
      <AnimatePresence>
        {confirmado && (
          <motion.div
            key="confirmado"
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="mt-4 p-3 bg-green-50 border border-green-200 rounded-xl text-center"
            aria-live="polite"
          >
            <div className="text-[#25D366] font-bold text-lg mb-1">
              ✅ ¡Perfecto!
            </div>
            <div className="text-sm text-green-700">
              Tu solicitud se abrió en WhatsApp. Te responderemos pronto 💚
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TurnoCalendar;