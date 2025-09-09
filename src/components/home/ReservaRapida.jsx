import React from "react";
import { motion } from "framer-motion";
import BannerHorarios from "./BannerHorarios";

const ReservaRapida = () => {
  const mensaje = "¡Hola! Quisiera consultar por disponibilidad de turnos. 😊";
  const telefono = "542804034308";

  const redireccionarWhatsapp = () => {
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  const beneficios = [
    { icon: "⚡", text: "Respuesta inmediata" },
    { icon: "📅", text: "Horarios flexibles" },
    { icon: "💎", text: "Atención personalizada" },
    { icon: "🎯", text: "Resultados garantizados" }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-[#faf8f5] via-[#f8f4f0] to-[#f5f0eb] relative overflow-hidden">
      {/* Efectos decorativos mejorados */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-[#d4af37]/30 to-[#b76e79]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 -right-24 w-80 h-80 bg-gradient-to-bl from-[#b76e79]/25 to-[#d4af37]/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#d4af37]/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Partículas flotantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#d4af37]/40 rounded-full"
            animate={{
              y: [-10, -60],
              x: [0, Math.random() * 50 - 25],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 4
            }}
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Título principal con efecto */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <span className="bg-gradient-to-r from-[#d4af37] to-[#b76e79] bg-clip-text text-transparent text-lg font-semibold tracking-wider uppercase">
              ✨ Reserva Inteligente
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#2c2c2c] mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-[#2c2c2c] via-[#4a4a4a] to-[#2c2c2c] bg-clip-text text-transparent">
              Tu cita perfecta te espera
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#d4af37] to-[#b76e79] mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Imagen mejorada con efectos */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative group">
              {/* Fondo decorativo */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#d4af37]/20 via-[#b76e79]/15 to-[#d4af37]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              
              {/* Imagen principal */}
              <motion.div
                className="relative overflow-hidden rounded-3xl shadow-2xl"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <motion.img
                  src="/assets/images/meli/meli.webp"
                  alt="Melina Yancan - Especialista en Cejas y Pestañas"
                  className="w-full h-auto object-cover border-4 border-white/80 backdrop-blur-sm"
                  style={{ aspectRatio: '4/5' }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                
                {/* Overlay con información */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold mb-2">Melina Yancan</h3>
                  <p className="text-sm opacity-90">Especialista Certificada • +3 años exp.</p>
                  <div className="flex items-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">⭐</span>
                    ))}
                    <span className="text-xs ml-2 opacity-80">(500+ clientas)</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contenido mejorado */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            
            {/* Texto principal */}
            <motion.h3
              className="text-3xl md:text-4xl font-bold text-[#2c2c2c] mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Reserva tu turno en 
              <span className="bg-gradient-to-r from-[#d4af37] to-[#b76e79] bg-clip-text text-transparent"> segundos</span>
            </motion.h3>
            
            <motion.p
              className="text-lg text-[#555] mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Coordiná tu cita con nuestra especialista certificada y viví una experiencia de belleza única. Técnicas profesionales de última generación en el corazón de Trelew.
            </motion.p>

            {/* Beneficios grid */}
            <motion.div
              className="grid grid-cols-2 gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {beneficios.map((beneficio, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-lg border border-white/20"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-2xl">{beneficio.icon}</span>
                  <span className="text-sm font-semibold text-[#4a4a4a]">{beneficio.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Botones de acción */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={redireccionarWhatsapp}
                className="group relative bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] text-white font-bold py-4 px-8 rounded-2xl shadow-xl transition-all duration-300 text-lg tracking-wide focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.520-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                  </svg>
                  Reservar por WhatsApp
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="group bg-white/80 backdrop-blur-sm hover:bg-white text-[#b76e79] hover:text-[#d4af37] font-semibold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl text-lg border-2 border-[#b76e79]/20 hover:border-[#d4af37]/40"
              >
                <span className="flex items-center justify-center gap-2">
                  📞 Llamar ahora
                </span>
              </motion.button>
            </motion.div>

            {/* Badge de confianza */}
            <motion.div
              className="flex items-center gap-4 mt-8 p-4 bg-gradient-to-r from-white/60 to-white/40 backdrop-blur-sm rounded-xl border border-white/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-[#4a4a4a]">Disponible ahora</span>
              </div>
              <div className="h-4 w-px bg-gray-300"></div>
              <span className="text-sm text-[#666]">Rivadavia 519, 1° piso</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Banner de horarios mejorado */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <BannerHorarios />
        </motion.div>
      </div>
    </section>
  );
};

export default ReservaRapida;
