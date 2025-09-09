import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const MapaUbicacion = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const ubicacionInfo = {
    direccion: "Rivadavia 519, 1er piso",
    ciudad: "Trelew, Chubut",
    telefono: "+54 9 280 XXX-XXXX",
    horarios: {
      lunes: "9:00 - 18:00",
      martes: "9:00 - 18:00", 
      miercoles: "9:00 - 18:00",
      jueves: "9:00 - 18:00",
      viernes: "9:00 - 18:00",
      sabado: "9:00 - 15:00",
      domingo: "Cerrado"
    }
  };

  const abrirEnGoogleMaps = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=Rivadavia+519,+Trelew,+Chubut,+Argentina', '_blank');
  };

  return (
    <motion.div
      className="w-full max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Header con título */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="inline-block mb-4">
          <span className="bg-gradient-to-r from-[#d4af37] to-[#b76e79] bg-clip-text text-transparent text-lg font-semibold tracking-wider uppercase">
            📍 Nuestra Ubicación
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#2c2c2c] mb-4">
          <span className="bg-gradient-to-r from-[#b76e79] via-[#d4af37] to-[#b76e79] bg-clip-text text-transparent">
            Visitanos en
          </span>
          <br />
          <span className="text-[#2c2c2c]">Nuestro Centro</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#d4af37] to-[#b76e79] mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        
        {/* Mapa mejorado */}
        <motion.div
          className="relative overflow-hidden rounded-3xl shadow-2xl bg-white border border-gray-100 group"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
        >
          {/* Efectos decorativos */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#d4af37]/20 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#b76e79]/20 to-transparent rounded-full blur-xl"></div>
          
          {/* Loading skeleton */}
          {!isMapLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse flex items-center justify-center z-10">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#d4af37] to-[#b76e79] rounded-full animate-spin mx-auto mb-4 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full"></div>
                </div>
                <p className="text-gray-500 font-medium">Cargando mapa...</p>
              </div>
            </div>
          )}
          
          {/* Iframe del mapa */}
          <iframe
            title="Ubicación My Beauty Study - Centro de Belleza en Trelew"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.5234567890123!2d-65.30123456789012!3d-43.25123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDE1JzA0LjQiUyA2NcKwMTgnMDQuNCJX!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar&q=Rivadavia+519,+Trelew,+Chubut,+Argentina"
            width="100%"
            height="400"
            style={{ border: 0, filter: isMapLoaded ? 'none' : 'blur(2px)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setIsMapLoaded(true)}
            className="transition-all duration-500"
            aria-label="Mapa interactivo de ubicación del centro de belleza My Beauty Study"
          ></iframe>
          
          {/* Overlay con información rápida */}
          <div className="absolute top-4 left-4 z-20">
            <motion.div
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-[#d4af37]/20"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-[#d4af37] to-[#b76e79] rounded-full animate-pulse"></div>
                <div>
                  <p className="font-bold text-[#2c2c2c] text-sm">My Beauty Study</p>
                  <p className="text-gray-600 text-xs">Centro de Belleza</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Información de contacto mejorada */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          
          {/* Tarjeta de dirección */}
          <motion.div
            className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-[#d4af37]/20 relative overflow-hidden"
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#d4af37]/10 to-transparent rounded-full blur-xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#d4af37] to-[#b76e79] rounded-2xl flex items-center justify-center text-white text-xl shadow-lg">
                  📍
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2c2c2c]">Dirección</h3>
                  <p className="text-gray-600">Fácil acceso en el centro</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-lg font-semibold text-[#2c2c2c]">{ubicacionInfo.direccion}</p>
                <p className="text-gray-600">{ubicacionInfo.ciudad}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="bg-gradient-to-r from-[#d4af37]/20 to-[#b76e79]/20 text-[#2c2c2c] px-3 py-1 rounded-full text-sm font-medium">
                    🚗 Estacionamiento disponible
                  </span>
                  <span className="bg-gradient-to-r from-[#d4af37]/20 to-[#b76e79]/20 text-[#2c2c2c] px-3 py-1 rounded-full text-sm font-medium">
                    🏢 1er piso
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tarjeta de horarios */}
          <motion.div
            className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-[#d4af37]/20 relative overflow-hidden"
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-[#b76e79]/10 to-transparent rounded-full blur-xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#b76e79] to-[#d4af37] rounded-2xl flex items-center justify-center text-white text-xl shadow-lg">
                  ⏰
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2c2c2c]">Horarios de Atención</h3>
                  <p className="text-gray-600">Te esperamos</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-2">
                  <div className="flex justify-between items-center py-1">
                    <span className="text-sm font-medium text-gray-700">Lun - Vie</span>
                    <span className="text-sm font-bold text-[#2c2c2c] bg-[#d4af37]/20 px-2 py-1 rounded-lg">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-sm font-medium text-gray-700">Sábados</span>
                    <span className="text-sm font-bold text-[#2c2c2c] bg-[#d4af37]/20 px-2 py-1 rounded-lg">9:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-sm font-medium text-gray-700">Domingos</span>
                    <span className="text-sm font-bold text-red-600 bg-red-50 px-2 py-1 rounded-lg">Cerrado</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[#d4af37]/10 to-[#b76e79]/10 rounded-2xl p-4">
                  <p className="text-sm font-semibold text-[#2c2c2c] mb-2">💡 Tip</p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Recomendamos reservar con anticipación para asegurar tu turno preferido
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Botón de navegación */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={abrirEnGoogleMaps}
              className="group relative bg-gradient-to-r from-[#4285F4] to-[#34A853] hover:from-[#34A853] hover:to-[#4285F4] text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl overflow-hidden w-full max-w-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="text-2xl relative z-10">🗺</span>
              <span className="relative z-10">Abrir en Google Maps</span>
            </motion.button>
          </motion.div>

          {/* Call to action adicional */}
          <motion.div
            className="bg-gradient-to-r from-[#25D366]/10 to-[#128C7E]/10 backdrop-blur-sm rounded-3xl p-6 border border-[#25D366]/20"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <h4 className="text-lg font-bold text-[#2c2c2c] mb-2">
                ¿Necesitás indicaciones?
              </h4>
              <p className="text-gray-600 mb-4 text-sm">
                Escribinos por WhatsApp y te ayudamos a llegar sin problemas
              </p>
              <motion.button
                className="bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.520-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                </svg>
                Pedir indicaciones
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MapaUbicacion;
