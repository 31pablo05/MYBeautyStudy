import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const slides = [
  { type: "image", src: "/assets/images/estudio.webp", alt: "Estudio 1" },
  { type: "video", src: "/assets/videos/competencia.mp4" },
  { type: "video", src: "/assets/videos/videodepilacion.mp4", alt: "Estudio 3" },
];

const Historia = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Opcional: autoplay (cada 5 segundos)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Nuestra Historia</h2>

        {/* Carrusel */}
        <div className="relative w-full aspect-video mb-6 rounded-lg overflow-hidden bg-black">
          {slides[current].type === "image" ? (
            <img
              src={slides[current].src}
              alt={slides[current].alt}
              className="w-full h-full object-contain transition-all duration-500"
            />
          ) : (
            <ReactPlayer
              url={slides[current].src}
              playing
              loop
              muted
              controls={false}
              width="100%"
              height="100%"
              className="react-player"
            />
          )}

          {/* Flechas */}
         {/* Flecha izquierda */}
<button
  onClick={prevSlide}
  className="
    absolute 
    top-1/2 
    left-4 
    transform -translate-y-1/2 
    bg-white/20 
    backdrop-blur-md 
    hover:bg-white/40 
    p-3 
    rounded-full 
    shadow-md 
    transition 
    text-white 
    text-xl
  "
>
  <span className="sr-only">Anterior</span>
  ❮
</button>

{/* Flecha derecha */}
<button
  onClick={nextSlide}
  className="
    absolute 
    top-1/2 
    right-4 
    transform -translate-y-1/2 
    bg-white/20 
    backdrop-blur-md 
    hover:bg-white/40 
    p-3 
    rounded-full 
    shadow-md 
    transition 
    text-white 
    text-xl
  "
>
  <span className="sr-only">Siguiente</span>
  ❯
</button>

        </div>

        {/* Texto */}
        <p className="text-lg text-gray-700">
          El estudio de belleza nació con la misión de empoderar a las personas a través de su imagen. A lo largo de los años, hemos formado una comunidad fiel de clientas que valoran el profesionalismo, la dedicación y el detalle. Desde nuestros comienzos en Trelew hasta convertirnos en un punto de referencia en la ciudad, cada paso ha estado guiado por la pasión y el compromiso con la excelencia.
        </p>
      </div>
    </section>
  );
};

export default Historia;
