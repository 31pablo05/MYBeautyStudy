import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const servicios = [
  {
    img: "/assets/images/pestañas/MYBeauty1.webp",
    icon: "👁️",
    categoria: "Pestañas",
    titulo: "Realzá tu mirada con pestañas perfectas",
    descripcion:
      "Extensiones clásicas, volumen Brasilero y efecto remmel. Técnicas indoloras y duraderas aplicadas por especialistas para una mirada profunda sin maquillaje.",
    bullets: [
      "Volumen Natural o Intenso según tu estilo",
      "Técnicas seguras e indoloras",
      "Aplicación profesional con años de experiencia",
      "Resultados duraderos y cuidados post tratamiento",
    ],
    duracion: "2-3 horas",
    ruta: "pestanas",
    cta: "Consultar citas de pestañas",
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-gradient-to-br from-pink-50 to-rose-50",
  },
  {
    img: "/assets/images/cejas/MYBeauty7.webp",
    icon: "✨",
    categoria: "Cejas",
    titulo: "Tus cejas perfectas con Micro de Cejas Blink",
    descripcion:
      "El Micro de Cejas Blink logra la mejor versión de tu mirada, con un diseño profesional adaptado a tu rostro para un resultado natural y duradero.",
    bullets: [
      "Diseño profesional personalizado",
      "Realizado por especialistas con experiencia",
      "Técnica indolora y segura",
      "Resultado semi-permanente sin cambios bruscos",
    ],
    duracion: "1.5-2 horas",
    ruta: "cejas",
    cta: "Reservá tu micro de cejas",
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
  },
  {
    img: "/assets/images/depilacion/depilacion.webp",
    icon: "💫",
    categoria: "Depilación",
    titulo: "Depilación Láser definitiva y segura",
    descripcion:
      "Eliminá el vello de forma eficaz con tecnología láser de última generación. Tratamiento personalizado, rápido e indoloro para todo tipo de piel.",
    bullets: [
      "Tecnología de última generación",
      "Resultados visibles desde la primera sesión",
      "Tratamiento apto para todo tipo de piel",
      "Atención personalizada por profesionales",
    ],
    duracion: "30-60 min",
    ruta: "depilacion-laser",
    cta: "Reservá tu sesión de depilación",
    color: "from-purple-500 to-indigo-600",
    bgColor: "bg-gradient-to-br from-purple-50 to-indigo-50",
  },
];

// Componente para la card de servicio destacado modernizada
const ServicioCard = ({ servicio, index }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-3xl shadow-2xl bg-white border border-gray-100 group h-full"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 * index }}
      whileHover={{ y: -8 }}
    >
      {/* Efectos decorativos */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#d4af37]/20 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#b76e79]/20 to-transparent rounded-full blur-xl"></div>
      
      <div className="flex flex-col lg:flex-row h-full">
        
        {/* Imagen mejorada */}
        <motion.div
          className="lg:w-1/2 w-full h-64 lg:h-auto relative overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>
          <img
            src={servicio.img}
            alt={servicio.titulo}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          />
          
          {/* Badge de categoría */}
          <motion.div
            className="absolute top-4 left-4 z-20"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-white font-bold text-sm backdrop-blur-sm bg-gradient-to-r ${servicio.color} shadow-lg`}>
              <span className="text-lg">{servicio.icon}</span>
              {servicio.categoria}
            </span>
          </motion.div>
          
          {/* Información flotante */}
          <motion.div
            className="absolute bottom-4 right-4 z-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="bg-[#d4af37]/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              ⏱️ {servicio.duracion}
            </span>
          </motion.div>
        </motion.div>
        
        {/* Contenido mejorado */}
        <div className="lg:w-1/2 w-full p-6 lg:p-8 flex flex-col justify-between relative z-10">
          
          {/* Header */}
          <div>
            <motion.h3
              className="text-2xl lg:text-3xl font-extrabold text-[#2c2c2c] mb-4 leading-tight"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-[#b76e79] via-[#d4af37] to-[#b76e79] bg-clip-text text-transparent">
                {servicio.titulo}
              </span>
            </motion.h3>
            
            <motion.p
              className="text-gray-600 mb-6 leading-relaxed text-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {servicio.descripcion}
            </motion.p>
          </div>
          
          {/* Benefits con iconos */}
          <motion.div
            className="mb-8"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold text-[#2c2c2c] mb-4 flex items-center gap-2">
              <span className="text-[#d4af37] text-xl">✨</span>
              Beneficios destacados
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {servicio.bullets.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3 p-3 bg-gradient-to-r from-white/60 to-white/30 backdrop-blur-sm rounded-xl border border-[#d4af37]/20 shadow-sm"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <span className="text-[#d4af37] font-bold text-lg flex-shrink-0">•</span>
                  <span className="text-gray-700 font-medium text-sm lg:text-base">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* CTA Button mejorado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link
              to={`/services#${servicio.ruta}`}
              className="group relative w-full bg-gradient-to-r from-[#d4af37] to-[#b76e79] hover:from-[#b76e79] hover:to-[#d4af37] text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 text-lg shadow-xl hover:shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">{servicio.cta}</span>
              <motion.svg
                className="w-6 h-6 relative z-10"
                fill="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
              </motion.svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const ServiciosDestacados = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#faf8f5] via-[#f8f4f0] to-[#f5f0eb] relative overflow-hidden">
      
      {/* Efectos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#d4af37]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#b76e79]/10 to-transparent rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header mejorado */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <span className="bg-gradient-to-r from-[#d4af37] to-[#b76e79] bg-clip-text text-transparent text-lg font-semibold tracking-wider uppercase">
              ✨ Servicios Premium
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2c2c2c] mb-6 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-[#b76e79] via-[#d4af37] to-[#b76e79] bg-clip-text text-transparent">
              Tratamientos de
            </span>
            <br />
            <span className="text-[#2c2c2c]">Cejas y Pestañas</span>
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-[#d4af37] to-[#b76e79] mx-auto rounded-full mb-6"></div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubrí nuestros tratamientos especializados para realzar tu belleza natural con técnicas profesionales de última generación
          </p>
        </motion.div>

        {/* Carousel modernizado para desktop */}
        <div className="hidden lg:block">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
              spaceBetween={40}
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              effect="coverflow"
              coverflowEffect={{
                rotate: 10,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: true,
              }}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              pagination={{ 
                clickable: true,
                el: '.swiper-pagination-custom',
                bulletClass: 'swiper-pagination-bullet-custom',
                bulletActiveClass: 'swiper-pagination-bullet-active-custom'
              }}
              autoplay={{ 
                delay: 8000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              className="servicios-swiper"
            >
              {servicios.map((servicio, index) => (
                <SwiperSlide key={index}>
                  <div className="pb-16">
                    <ServicioCard servicio={servicio} index={index} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Controles personalizados */}
            <div className="flex items-center justify-center gap-8 mt-8">
              <motion.button
                className="swiper-button-prev-custom w-14 h-14 bg-gradient-to-r from-[#d4af37] to-[#b76e79] rounded-full flex items-center justify-center text-white shadow-xl hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
                </svg>
              </motion.button>
              
              <div className="swiper-pagination-custom flex gap-3"></div>
              
              <motion.button
                className="swiper-button-next-custom w-14 h-14 bg-gradient-to-r from-[#d4af37] to-[#b76e79] rounded-full flex items-center justify-center text-white shadow-xl hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Stack layout para móvil */}
        <div className="lg:hidden space-y-8">
          {servicios.map((servicio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <ServicioCard servicio={servicio} index={index} />
            </motion.div>
          ))}
        </div>

        {/* Call to action final */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-white/60 to-white/40 backdrop-blur-sm rounded-3xl p-8 border border-[#d4af37]/20 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-[#2c2c2c] mb-4">
              ¿Lista para tu transformación?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Reservá tu cita hoy mismo y descubrí por qué somos el centro de belleza preferido en Trelew
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl text-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.520-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
              </svg>
              Reservar por WhatsApp
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Estilos personalizados para el swiper */}
      <style jsx>{`
        .servicios-swiper {
          padding: 0 40px;
        }
        
        .swiper-pagination-bullet-custom {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet-active-custom {
          background: linear-gradient(135deg, #d4af37, #b76e79);
          transform: scale(1.3);
          box-shadow: 0 4px 12px rgba(212, 175, 55, 0.4);
        }
        
        .servicios-swiper .swiper-slide {
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }
        
        .servicios-swiper .swiper-slide-active {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default ServiciosDestacados;
