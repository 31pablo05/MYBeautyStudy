
import React, { useRef, useState } from "react";

// Componente MisionVision: Moderno, profesional, accesible y visualmente premium.
// Video institucional con poster, fade-out suave, sin íconos de play ni precarga fea.
// Usa solo Tailwind para estilos y animaciones.
const VIDEO_SRC = "/assets/videos/arte.mp4"; // Video institucional correcto
const POSTER_SRC = "/assets/images/giftpromo.webp"; // Poster promocionando la gift card

const MisionVision = () => {
  const videoRef = useRef(null);
  const [posterVisible, setPosterVisible] = useState(true);

  // Cuando el video empieza a reproducirse, fade-out del poster
  const handlePlay = () => {
    setTimeout(() => setPosterVisible(false), 400); // Fade-out tras breve delay
  };

  return (
    <section
      id="mision-vision"
      aria-labelledby="mision-vision-title"
      className="relative w-full max-w-4xl mx-auto px-4 py-16 md:py-24 flex flex-col items-center gap-10"
    >
      <header className="w-full text-center mb-6">
        <h2
          id="mision-vision-title"
          className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2"
          style={{
            background: 'linear-gradient(90deg, #b76e79 0%, #ffd700 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Misión & Visión
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: '#b76e79' }}>
          Nuestra misión es potenciar la belleza y confianza de cada persona a través de servicios de excelencia, innovación y calidez humana. Nuestra visión es ser referentes en estética integral, inspirando bienestar y profesionalismo.
        </p>
      </header>

      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-[9/16] rounded-2xl overflow-hidden shadow-xl group mx-auto border-4 border-[#b76e79]">
        {/* Poster con fade-out */}
        <img
          src={POSTER_SRC}
          alt="Gift Card Promocional"
          aria-hidden={!posterVisible}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out z-20 pointer-events-none select-none ${posterVisible ? 'opacity-100' : 'opacity-0'}`}
          draggable="false"
        />
        {/* Video vertical accesible, sin controles, autoplay, loop, muted, sin íconos */}
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          poster={POSTER_SRC}
          autoPlay
          loop
          muted
          playsInline
          tabIndex={0}
          aria-label="Video institucional de Misión y Visión"
          className="w-full h-full object-cover z-10"
          onPlay={handlePlay}
          style={{ aspectRatio: '9/16' }}
        />
        {/* Overlay decorativo premium */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#b76e79]/60 via-transparent to-transparent pointer-events-none z-30" aria-hidden="true" />
      </div>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-3xl mt-10">
        <article className="bg-white/80 backdrop-blur rounded-xl shadow-lg p-6 flex flex-col gap-2 border-l-4" style={{ borderColor: '#b76e79' }}>
          <h3 className="text-xl font-bold mb-1" style={{ color: '#b76e79' }}>Misión</h3>
          <p className="text-gray-700">
            Brindar servicios de estética de alta calidad, personalizados y con calidez humana, promoviendo el bienestar integral y la confianza de cada cliente.
          </p>
        </article>
        <article className="bg-white/80 backdrop-blur rounded-xl shadow-lg p-6 flex flex-col gap-2 border-l-4" style={{ borderColor: '#ffd700' }}>
          <h3 className="text-xl font-bold mb-1" style={{ color: '#ffd700' }}>Visión</h3>
          <p className="text-gray-700">
            Ser referentes en el sector de la estética, innovando constantemente y generando experiencias memorables que inspiren belleza, salud y profesionalismo.
          </p>
        </article>
      </div>

      {/* Frase inspiradora y Botón CTA premium */}
      <div className="w-full flex flex-col items-center mt-10 gap-4">
        <p className="text-xl md:text-2xl font-semibold text-center max-w-xl" style={{ color: '#b76e79' }}>
          "Regalate un momento para vos. La belleza comienza con el primer paso."
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#b76e79] focus:ring-offset-2 bg-gradient-to-r from-[#b76e79] to-[#ffd700] text-white border-none relative overflow-hidden animate-bounce"
          aria-label="Reservar turno o consultar"
        >
          <span className="relative z-10">Reservá tu turno</span>
          {/* Efecto "destello" animado */}
          <span className="absolute left-0 top-0 w-full h-full pointer-events-none z-0">
            <span className="block w-2 h-2 rounded-full bg-yellow-300 opacity-80 animate-ping absolute right-4 top-3"></span>
            <span className="block w-1.5 h-1.5 rounded-full bg-[#b76e79] opacity-70 animate-pulse absolute left-6 bottom-3"></span>
          </span>
        </a>
      </div>
    </section>
  );
};

export default MisionVision;
