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
        const mensaje = `¡Hola! 😊\n\n¿Cómo estás? Te escribo para consultar disponibilidad de turnos. Me gustaría saber si tenés algún horario libre para el *${diaTexto}* cerca de las *${horaSeleccionada}*\n\n💅 Me interesa coordinar un servicio de belleza\n📍 Entiendo que estás en Rivadavia 519, 1er piso, Trelew😉\n\n¡Muchas gracias! 🌸`;
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
    <div className="w-full max-w-lg mx-auto px-4">
      <motion.div
        className="relative bg-gradient-to-br from-white via-[#faf8f5] to-[#f8f4f0] border border-[#d4af37]/30 rounded-3xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Efectos decorativos */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#d4af37]/20 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#b76e79]/20 to-transparent rounded-full blur-xl"></div>
        
        {/* Header premium */}
        <motion.div
          className="relative z-10 text-center pt-8 pb-6 px-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Badge superior */}
          <motion.div
            className="inline-block mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <span className="bg-gradient-to-r from-[#d4af37] to-[#b76e79] bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase">
              📅 Reserva Online
            </span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2c2c2c] mb-3 tracking-tight">
            <span className="bg-gradient-to-r from-[#b76e79] via-[#d4af37] to-[#b76e79] bg-clip-text text-transparent">
              Elegí tu momento ideal
            </span>
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-[#d4af37] to-[#b76e79] mx-auto rounded-full mb-4"></div>
          
          <p className="text-[#555] text-lg leading-relaxed max-w-md mx-auto">
            Seleccioná tu fecha y horario preferido. Te contactaremos por WhatsApp al instante.
          </p>
        </motion.div>

        <div className="px-6 pb-8">
          
          {/* Calendario modernizado */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                className="w-10 h-10 bg-gradient-to-r from-[#d4af37] to-[#b76e79] rounded-xl flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                </svg>
              </motion.div>
              <h3 className="text-xl font-bold text-[#2c2c2c]">Paso 1: Seleccioná tu fecha</h3>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-4 border border-[#d4af37]/20">
              <Calendar
                onChange={(date) => {
                  setFechaSeleccionada(date);
                  localStorage.setItem('calendario-interaccion', 'true');
                }}
                value={fechaSeleccionada}
                minDate={new Date()}
                tileDisabled={tileDisabled}
                className={`!border-none w-full
                  [&_.react-calendar__tile]:p-3
                  [&_.react-calendar__tile]:rounded-xl
                  [&_.react-calendar__tile]:text-sm sm:[&_.react-calendar__tile]:text-base
                  [&_.react-calendar__tile]:font-semibold
                  [&_.react-calendar__tile]:transition-all
                  [&_.react-calendar__tile]:duration-300
                  [&_.react-calendar__tile:hover]:bg-[#d4af37]/10
                  [&_.react-calendar__tile:hover]:scale-110
                  [&_.react-calendar__tile:hover]:shadow-md
                  [&_.react-calendar__tile--active]:bg-gradient-to-r
                  [&_.react-calendar__tile--active]:from-[#d4af37]
                  [&_.react-calendar__tile--active]:to-[#b76e79]
                  [&_.react-calendar__tile--active]:text-white
                  [&_.react-calendar__tile--active]:shadow-lg
                  [&_.react-calendar__tile--active]:scale-105
                  [&_.react-calendar__tile--now]:bg-[#d4af37]/20
                  [&_.react-calendar__tile--now]:text-[#2c2c2c]
                  [&_.react-calendar__tile--now]:font-bold
                  [&_.react-calendar__tile--now]:border-2
                  [&_.react-calendar__tile--now]:border-[#d4af37]
                  [&_.react-calendar__navigation__label]:font-bold
                  [&_.react-calendar__navigation__label]:text-[#2c2c2c]
                  [&_.react-calendar__navigation__label]:text-lg
                  [&_.react-calendar__navigation__arrow]:text-[#d4af37]
                  [&_.react-calendar__navigation__arrow]:text-xl
                  [&_.react-calendar__navigation__arrow]:font-bold
                  [&_.react-calendar__navigation__arrow:hover]:bg-[#d4af37]/10
                  [&_.react-calendar__navigation__arrow:hover]:rounded-lg
                  [&_.react-calendar__month-view__weekdays]:text-xs
                  [&_.react-calendar__month-view__weekdays]:text-[#666]
                  [&_.react-calendar__month-view__weekdays]:uppercase
                  [&_.react-calendar__month-view__weekdays]:font-bold
                  [&_.react-calendar__month-view__weekdays]:tracking-wider
                  [&_.react-calendar__month-view__weekdays]:py-2`}
              />
            </div>
          </motion.div>

          {/* Resumen visual de selección */}
          <AnimatePresence>
            {(fechaSeleccionada || horaSeleccionada) && (
              <motion.div
                key="resumen"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-wrap justify-center gap-3 mb-6"
                aria-live="polite"
              >
                {fechaSeleccionada && (
                  <motion.div
                    className="bg-gradient-to-r from-[#d4af37]/20 to-[#b76e79]/20 backdrop-blur-sm border border-[#d4af37]/30 text-[#2c2c2c] px-4 py-2 rounded-full font-bold flex items-center gap-2 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-lg">📅</span>
                    {fechaSeleccionada.toLocaleDateString('es-AR', { 
                      weekday: 'long',
                      day: 'numeric', 
                      month: 'long'
                    })}
                  </motion.div>
                )}
                {horaSeleccionada && (
                  <motion.div
                    className="bg-gradient-to-r from-[#25D366]/20 to-[#128C7E]/20 backdrop-blur-sm border border-[#25D366]/30 text-[#2c2c2c] px-4 py-2 rounded-full font-bold flex items-center gap-2 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-lg">🕐</span>
                    {horaSeleccionada} hs
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Selección de horario */}
          <div ref={horasRef}>
            {fechaSeleccionada && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="w-10 h-10 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-xl flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/>
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-bold text-[#2c2c2c]">Paso 2: Elegí tu horario</h3>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg p-4 border border-[#d4af37]/20">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {getHorasDisponiblesHoy().map((hora, index) => (
                      <motion.button
                        key={hora}
                        aria-label={`Seleccionar hora ${hora}`}
                        onClick={() => setHoraSeleccionada(hora)}
                        className={`py-3 px-4 rounded-xl text-center font-bold transition-all duration-300 focus:ring-2 focus:ring-[#d4af37] focus:outline-none relative overflow-hidden group
                          ${horaSeleccionada === hora
                            ? 'bg-gradient-to-r from-[#d4af37] to-[#b76e79] text-white shadow-lg transform scale-105'
                            : 'bg-gray-50 text-[#333] border-2 border-gray-200 hover:border-[#d4af37] hover:bg-[#d4af37]/10 hover:shadow-md'
                          }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <span className="relative z-10">{hora}</span>
                        {horaSeleccionada === hora && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                            initial={{ x: '-100%' }}
                            animate={{ x: '100%' }}
                            transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 2 }}
                          />
                        )}
                      </motion.button>
                    ))}
                    {getHorasDisponiblesHoy().length === 0 && (
                      <div className="col-span-2 sm:col-span-3 text-center p-6 bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-xl">
                        <div className="text-4xl mb-2">
                          {fechaSeleccionada?.getDay() === 0 ? "😴" : "📅"}
                        </div>
                        <span className="text-[#b76e79] font-bold block">
                          {fechaSeleccionada?.getDay() === 0 
                            ? "Los domingos estamos cerrados" 
                            : "No hay horarios disponibles"}
                        </span>
                        <span className="text-sm text-gray-600 mt-1 block">
                          Elegí otra fecha para ver horarios disponibles
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Botón de confirmación premium */}
          {fechaSeleccionada && horaSeleccionada && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="w-10 h-10 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-xl flex items-center justify-center shadow-lg"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-white text-lg">✓</span>
                </motion.div>
                <h3 className="text-xl font-bold text-[#2c2c2c]">Paso 3: Confirmá tu reserva</h3>
              </div>
              
              <motion.button
                aria-label="Confirmar turno y abrir WhatsApp"
                disabled={loading}
                onClick={redirigirWhatsapp}
                className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] text-white font-bold py-4 px-6 rounded-2xl shadow-xl transition-all duration-300 flex items-center justify-center gap-3 text-lg group relative overflow-hidden"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <motion.svg 
                  className="w-6 h-6" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ rotate: loading ? 360 : 0 }}
                  transition={{ duration: 1, repeat: loading ? Infinity : 0 }}
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.520-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                </motion.svg>
                <span className="relative z-10">
                  {loading ? 'Preparando mensaje...' : 'Confirmar por WhatsApp'}
                </span>
                {!loading && (
                  <motion.div
                    className="w-2 h-2 bg-white rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}
              </motion.button>
            </motion.div>
          )}

          {/* Mensaje de éxito premium */}
          <AnimatePresence>
            {confirmado && (
              <motion.div
                key="confirmado"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 text-center shadow-lg"
                aria-live="polite"
              >
                <motion.div
                  className="text-6xl mb-3"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.6 }}
                >
                  ✅
                </motion.div>
                <div className="text-[#25D366] font-bold text-xl mb-2">
                  ¡Solicitud enviada con éxito!
                </div>
                <div className="text-green-700 font-semibold mb-3">
                  Tu mensaje se abrió en WhatsApp
                </div>
                <div className="text-sm text-green-600 bg-white/60 rounded-xl px-4 py-2">
                  💚 Te responderemos en minutos para confirmar tu cita
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Footer con garantías */}
          <motion.div
            className="mt-8 pt-6 border-t border-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="grid grid-cols-3 gap-4 text-center">
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl mb-1">⚡</div>
                <div className="text-xs font-bold text-gray-600">Respuesta inmediata</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl mb-1">🔒</div>
                <div className="text-xs font-bold text-gray-600">100% Seguro</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl mb-1">💎</div>
                <div className="text-xs font-bold text-gray-600">Servicio Premium</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default TurnoCalendar;