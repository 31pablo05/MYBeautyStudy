import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const slides = [
  { type: "image", src: "/assets/images/estudio.webp", alt: "Estudio 1" },
  { type: "video", src: "/assets/videos/competencia.mp4" },
  { type: "video", src: "/assets/videos/videodepilacion.mp4", alt: "Estudio 3" },
];

const Historia = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef(null);

  // Limpieza de timeouts al desmontar
  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setPaused(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setPaused(false), 8000);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setPaused(true);
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

  // Autoplay (pausa si el usuario interactúa)
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [paused]);

  // Ir a slide por bullet
  const goToSlide = (idx) => {
    setCurrent(idx);
    setPaused(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setPaused(false), 8000);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#b76e79] mb-8 mt-2 drop-shadow-gold relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-yellow-400 after:via-yellow-500 after:to-yellow-600 after:rounded-full after:mt-2">
          Nuestra Historia
        </h2>

        {/* Carrusel premium */}
        <div
          className="relative w-full aspect-video mb-8 rounded-2xl overflow-hidden bg-black shadow-gold border-4 border-yellow-400 animate-gold-glow"
          tabIndex={0}
          aria-label="Carrusel de historia"
        >
          {/* Overlay decorativo */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/30 via-pink-100/20 to-transparent pointer-events-none z-10" />
          {/* Slide animado */}
          <div className="w-full h-full flex items-center justify-center transition-all duration-700">
            {slides[current].type === "image" ? (
              <img
                src={slides[current].src}
                alt={slides[current].alt || ""}
                className="w-full h-full object-contain transition-all duration-700"
                style={{ animation: 'fadeinSlide 0.7s' }}
              />
            ) : (
              slides[current].src && (
                <ReactPlayer
                  url={slides[current].src}
                  playing
                  loop
                  muted
                  controls={false}
                  width="100%"
                  height="100%"
                  className="react-player"
                  style={{ animation: 'fadeinSlide 0.7s' }}
                />
              )
            )}
          </div>
          {/* Flechas premium */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-3 md:left-6 -translate-y-1/2 bg-gradient-to-br from-yellow-400 via-pink-300 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white p-3 md:p-4 rounded-full shadow-gold transition focus:outline-none focus:ring-4 focus:ring-yellow-300 z-20 text-2xl md:text-3xl"
            aria-label="Anterior"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-3 md:right-6 -translate-y-1/2 bg-gradient-to-br from-yellow-400 via-pink-300 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white p-3 md:p-4 rounded-full shadow-gold transition focus:outline-none focus:ring-4 focus:ring-yellow-300 z-20 text-2xl md:text-3xl"
            aria-label="Siguiente"
          >
            <FaChevronRight />
          </button>
          {/* Bullets/indicadores */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-4 h-4 rounded-full border-2 border-yellow-400 bg-white/80 shadow-gold transition-all duration-300 ${current === idx ? 'scale-125 bg-yellow-400' : 'opacity-60'} focus:outline-none focus:ring-2 focus:ring-yellow-400`}
                aria-label={`Ir al slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Texto */}
        <motion.p
          className="text-xl md:text-2xl text-[#7a5c2e] font-medium max-w-3xl mx-auto animate-fadein-historia"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          El estudio de belleza nació con la misión de <span className="text-pink-500 font-bold">empoderar a las personas</span> a través de su imagen. A lo largo de los años, hemos formado una comunidad fiel de clientas que valoran el <span className="text-yellow-600 font-bold">profesionalismo</span>, la <span className="text-yellow-600 font-bold">dedicación</span> y el <span className="text-yellow-600 font-bold">detalle</span>. Desde nuestros comienzos en Trelew hasta convertirnos en un punto de referencia en la ciudad, cada paso ha estado guiado por la pasión y el compromiso con la excelencia.
        </motion.p>
      <style>{`
        .shadow-gold { box-shadow: 0 2px 8px 0 #d4af3740, 0 0 0 2px #d4af37; }
        .drop-shadow-gold { filter: drop-shadow(0 0 6px #d4af37cc); }
        .animate-gold-glow {
          animation: gold-glow 2.2s infinite alternate;
        }
        @keyframes gold-glow {
          0% { filter: drop-shadow(0 0 0px #d4af37cc); }
          100% { filter: drop-shadow(0 0 12px #d4af37cc); }
        }
        @keyframes fadeinSlide {
          0% { opacity: 0; transform: scale(0.98); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-fadein-historia {
          animation: fadeinHistoria 1.2s;
        }
        @keyframes fadeinHistoria {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      </div>
    </section>
  );
};

export default Historia;
