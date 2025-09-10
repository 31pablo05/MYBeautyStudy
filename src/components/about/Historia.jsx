import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";

const slides = [
  { type: "image", src: "/assets/images/estudio.webp", alt: "Nuestro Estudio Profesional", title: "Estudio Moderno" },
  { type: "video", src: "/assets/videos/melicurso1.mp4", title: "Formación Profesional", description: "Cursos especializados" },
  { type: "video", src: "/assets/videos/videodepilacion.mp4", title: "Tratamientos Avanzados", description: "Depilación láser" },
];

const Historia = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const timeoutRef = useRef(null);

  // Limpieza de timeouts al desmontar
  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setPaused(true);
    setIsPlaying(false);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setPaused(false), 8000);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setPaused(true);
    setIsPlaying(false);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setPaused(false), 8000);
  };

  // Navegación con flechas del teclado
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Autoplay solo para imágenes
  useEffect(() => {
    if (paused) return;
    if (slides[current].type === "image") {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [paused, current]);

  // Ir a slide por bullet
  const goToSlide = (idx) => {
    setCurrent(idx);
    setPaused(true);
    setIsPlaying(false);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setPaused(false), 8000);
  };

  // Avanzar al siguiente slide cuando termina el video
  const handleVideoEnded = () => {
    setIsPlaying(false);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 800);
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  const currentSlide = slides[current];

  return (
    <section className="py-24 bg-gradient-to-br from-[#f8f6f3] via-white to-[#f5f2ef] relative overflow-hidden">
      {/* Efectos decorativos de fondo */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-[#d4af37]/5 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 left-10 w-56 h-56 bg-gradient-to-tl from-[#b76e79]/5 to-transparent rounded-full blur-xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header elegante */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-[#d4af37] to-[#b76e79] bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase">
              📚 Nuestra Trayectoria
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2c2c2c] mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-[#b76e79] via-[#d4af37] to-[#b76e79] bg-clip-text text-transparent">
              Historia & Evolución
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#d4af37] to-[#b76e79] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Carrusel mejorado */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 overflow-hidden">
              {/* Contenedor del slide */}
              <div
                className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-900"
                tabIndex={0}
                aria-label="Carrusel de historia"
              >
                
                {/* Slide actual */}
                <motion.div
                  key={current}
                  className="w-full h-full flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {currentSlide.type === "image" ? (
                    <img
                      src={currentSlide.src}
                      alt={currentSlide.alt || ""}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full relative">
                      <ReactPlayer
                        url={currentSlide.src}
                        playing={isPlaying}
                        loop={false}
                        muted
                        controls={false}
                        width="100%"
                        height="100%"
                        className="react-player"
                        onEnded={handleVideoEnded}
                        onPlay={handleVideoPlay}
                        onPause={handleVideoPause}
                      />
                      
                      {/* Control de video personalizado */}
                      <div className="absolute bottom-4 left-4 right-4 z-20">
                        <div className="bg-black/70 backdrop-blur-sm rounded-lg p-3 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => setIsPlaying(!isPlaying)}
                              className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                            >
                              {isPlaying ? <FaPause className="text-white" /> : <FaPlay className="text-white ml-1" />}
                            </button>
                            <div className="flex items-center gap-2 text-white text-sm">
                              <FaClock />
                              <span>Video profesional</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Controles de navegación */}
                <button
                  onClick={prevSlide}
                  className="absolute top-1/2 left-4 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-[#d4af37] to-[#b76e79] hover:from-[#b76e79] hover:to-[#d4af37] text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center z-20 hover:scale-110"
                  aria-label="Anterior"
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute top-1/2 right-4 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-[#d4af37] to-[#b76e79] hover:from-[#b76e79] hover:to-[#d4af37] text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center z-20 hover:scale-110"
                  aria-label="Siguiente"
                >
                  <FaChevronRight />
                </button>

                {/* Indicadores */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToSlide(idx)}
                      className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-300 ${
                        current === idx 
                          ? 'bg-white scale-125' 
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`Ir al slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
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
            
            {/* Texto principal */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-[#2c2c2c]">
                Un Camino de Crecimiento y Excelencia
              </h3>
              
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  El estudio de belleza nació con la misión de 
                  <span className="font-semibold text-[#b76e79]"> empoderar a las personas</span> a 
                  través de su imagen. Desde nuestros inicios en Trelew, hemos construido una 
                  reputación basada en la excelencia y el trato personalizado.
                </p>
                
                <p>
                  A lo largo de los años, hemos formado una 
                  <span className="font-semibold text-[#d4af37]"> comunidad fiel de clientas</span> que 
                  valoran nuestro profesionalismo, dedicación y atención al detalle. Cada paso en 
                  nuestro crecimiento ha estado guiado por la pasión y el compromiso con la calidad.
                </p>
                
                <p>
                  Hoy somos un 
                  <span className="font-semibold text-[#b76e79]"> punto de referencia</span> en la ciudad, 
                  no solo por nuestros servicios de belleza, sino también por nuestra labor formativa 
                  en el área de capacitación profesional.
                </p>
              </div>
            </div>

            {/* Estadísticas */}
            <motion.div
              className="grid grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {[
                { number: "5+", label: "Años de experiencia" },
                { number: "500+", label: "Clientas satisfechas" },
                { number: "50+", label: "Profesionales formadas" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#b76e79] to-[#d4af37] bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Call to action */}
            <motion.div
              className="bg-gradient-to-r from-[#d4af37]/10 to-[#b76e79]/10 rounded-2xl p-6 border border-[#d4af37]/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-[#2c2c2c] mb-3">
                ¿Querés ser parte de nuestra historia?
              </h4>
              <p className="text-gray-600 mb-4">
                Descubrí cómo podemos ayudarte a realzar tu belleza natural con nuestros tratamientos personalizados.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#d4af37] to-[#b76e79] hover:from-[#b76e79] hover:to-[#d4af37] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Conocé Nuestros Servicios</span>
                <span>→</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Historia;
