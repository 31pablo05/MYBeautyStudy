import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaStar, FaAward, FaInstagram, FaRegSmile, FaGraduationCap, FaHeart } from "react-icons/fa";

const skills = [
  { icon: <FaStar className="text-[#d4af37] text-lg" />, label: "Cejas & Pestañas", color: "bg-gradient-to-r from-[#d4af37]/10 to-[#b76e79]/10" },
  { icon: <FaGraduationCap className="text-[#b76e79] text-lg" />, label: "Cursos Certificados", color: "bg-gradient-to-r from-[#b76e79]/10 to-[#d4af37]/10" },
  { icon: <FaRegSmile className="text-[#d4af37] text-lg" />, label: "Atención Personalizada", color: "bg-gradient-to-r from-[#d4af37]/10 to-[#b76e79]/10" },
  { icon: <FaInstagram className="text-[#b76e79] text-lg" />, label: "@meliii_lash", color: "bg-gradient-to-r from-[#b76e79]/10 to-[#d4af37]/10" },
];

const Presentacion = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#faf8f5] via-[#f8f4f0] to-[#f5f0eb] relative overflow-hidden">
      {/* Efectos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#d4af37]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#b76e79]/5 to-transparent rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header moderno */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-[#d4af37] to-[#b76e79] bg-clip-text text-transparent text-lg font-semibold tracking-wider uppercase">
              ✨ Conocé a la Especialista
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2c2c2c] mb-6 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-[#b76e79] via-[#d4af37] to-[#b76e79] bg-clip-text text-transparent">
              Melina Yancan
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#d4af37] to-[#b76e79] mx-auto rounded-full"></div>
        </motion.div>

        {/* Contenido principal */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Imagen profesional mejorada */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Efectos decorativos */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-[#d4af37]/20 to-[#b76e79]/20 rounded-3xl blur-xl"></div>
              <div className="absolute top-4 left-4 w-full h-full bg-gradient-to-tl from-[#b76e79]/10 to-[#d4af37]/10 rounded-3xl"></div>
              
              {/* Imagen principal */}
              <motion.div
                className="relative bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 overflow-hidden"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/assets/images/meli/3.webp"
                  alt="Melina Yancan - Especialista en Belleza"
                  className="w-full h-96 object-cover object-top rounded-2xl"
                />
                
                {/* Badge flotante */}
                <motion.div
                  className="absolute top-10 right-10 bg-gradient-to-r from-[#d4af37] to-[#b76e79] text-white px-4 py-2 rounded-full shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-2">
                    <FaAward className="text-sm" />
                    <span className="text-sm font-bold">+5 años</span>
                  </div>
                </motion.div>
                
                {/* Indicador de experiencia */}
                <div className="absolute bottom-10 left-10 right-10 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-[#d4af37]/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-[#2c2c2c]">Especialista Certificada</p>
                      <p className="text-xs text-gray-600">Cejas, Pestañas & Estética</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-[#d4af37] text-sm" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contenido de texto mejorado */}
          <motion.div
            className="order-1 lg:order-2 space-y-8"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            
            {/* Introducción */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#2c2c2c] mb-4">
                Profesional Especializada en Belleza Facial
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Soy una profesional apasionada por el mundo de la belleza, especializada en 
                <span className="font-semibold text-[#b76e79]"> cejas, pestañas y estética facial</span>. 
                Mi enfoque se basa en brindar servicios personalizados de alta calidad, donde cada 
                clienta se siente escuchada, cómoda y completamente satisfecha con su experiencia.
              </p>
            </div>

            {/* Quote inspiracional */}
            <motion.div
              className="bg-gradient-to-r from-[#d4af37]/10 to-[#b76e79]/10 rounded-2xl p-6 border-l-4 border-[#d4af37]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <FaHeart className="text-[#b76e79] text-2xl flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-medium text-[#2c2c2c] italic">
                    "La confianza y el bienestar de cada clienta es mi mayor logro profesional. 
                    Cada sonrisa y cada mirada radiante me motiva a seguir perfeccionando mi arte."
                  </p>
                  <p className="text-sm text-gray-600 mt-2 font-semibold">- Melina Yancan</p>
                </div>
              </div>
            </motion.div>

            {/* Skills profesionales */}
            <div>
              <h4 className="text-xl font-bold text-[#2c2c2c] mb-6 flex items-center gap-2">
                <span className="text-[#d4af37] text-2xl">✨</span>
                Especialidades & Servicios
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className={`${skill.color} backdrop-blur-sm rounded-xl p-4 border border-[#d4af37]/20 shadow-sm`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        {skill.icon}
                      </div>
                      <span className="font-semibold text-[#2c2c2c]">{skill.label}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Call to actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="https://www.instagram.com/meliii_lash/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gradient-to-r from-[#E4405F] to-[#833AB4] hover:from-[#833AB4] hover:to-[#E4405F] text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaInstagram className="text-xl" />
                <span>Seguir en Instagram</span>
              </motion.a>
              
              <motion.a
                href="/contact"
                className="flex-1 bg-gradient-to-r from-[#d4af37] to-[#b76e79] hover:from-[#b76e79] hover:to-[#d4af37] text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Reservar Consulta</span>
                <span className="text-xl">→</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Presentacion;
