import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";


// Componente para video con poster y fade premium usando solo Tailwind y animación global
function VideoConPoster({ url, poster, animationDelay }) {
  const [posterVisible, setPosterVisible] = useState(true);
  return (
    <div
      className={
        `group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl border-2 border-[#D4AF37] transition-all duration-500 animate-fadeInUp`
      }
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <ReactPlayer
        url={url}
        playing
        controls
        muted
        loop
        width="100%"
        height="100%"
        className="react-player group-hover:scale-105 transition-transform duration-700 ease-in-out"
        style={{ borderRadius: "1rem", overflow: "hidden" }}
        onReady={() => {
          setTimeout(() => setPosterVisible(false), 300);
        }}
      />
      {/* Poster con fade-out usando Tailwind y animación global */}
      <img
        src={poster}
        alt="Poster del curso"
        className={`absolute top-0 left-0 w-full h-full object-cover rounded-2xl pointer-events-none transition-opacity duration-700 ${posterVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ zIndex: 2, borderRadius: '1rem' }}
        draggable={false}
      />
      <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
    </div>
  );
}

const CursosDictados = () => {
  return (
    <section className="bg-gradient-to-br from-[#fefaf7] to-[#fff0eb] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16 relative inline-block after:block after:w-20 after:h-1 after:bg-[#d4af37] after:mx-auto after:mt-2 drop-shadow-gold">
          Formación Profesional
        </h2>

        {/* Videos de experiencias */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
            <svg
              className="w-7 h-7 text-[#d4af37]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="#d4af37"
                strokeWidth="2"
                fill="#fff8e1"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12l2 2 4-4"
              />
            </svg>
            Mirá algunos momentos de nuestros cursos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <VideoConPoster
              url="/assets/videos/melicurso1.mp4"
              poster="/assets/images/posterComponentes/posterCurso1.webp"
              animationDelay={0}
            />
            <VideoConPoster
              url="/assets/videos/melicurso2.mp4"
              poster="/assets/images/posterComponentes/posterCurso2.webp"
              animationDelay={0.2}
            />
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/Contact"
              className="inline-block bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#B8912B] hover:from-[#B8912B] hover:to-[#FFD700] text-white font-semibold py-3 px-6 rounded-full transition-transform duration-500 hover:scale-105 animate-gold-glow shadow-gold focus:outline-none focus:ring-2 focus:ring-[#D4AF37] flex items-center gap-2"
              aria-label="Consultar por el próximo curso"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="18"
                  rx="2"
                  stroke="#fff"
                  strokeWidth="2"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 2v4M8 2v4M3 10h18"
                />
              </svg>
              Consultá por el próximo curso
            </Link>
          </div>
        </div>

        {/* Próximamente */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <svg
              className="w-7 h-7 text-[#d4af37]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3"
              />
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="#d4af37"
                strokeWidth="2"
                fill="#fff8e1"
              />
            </svg>
            <h3 className="text-2xl font-semibold text-gray-700">
              Próximos Cursos
            </h3>
          </div>
          <div className="border-t-2 border-dashed border-[#d4af37] mb-4"></div>
          <p className="text-gray-600 leading-relaxed">
            Muy pronto anunciaremos nuevas fechas para nuestros cursos intensivos y
            workshops. ¡Seguinos en redes para enterarte primero!
          </p>
          <p className="text-gray-600 italic mt-2">
            ¿Querés capacitarte en el mundo de la estética? Este espacio es para
            vos.
          </p>
        </div>

        {/* Profesionales Invitados */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <svg
              className="w-7 h-7 text-[#d4af37]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="#d4af37"
                strokeWidth="2"
                fill="#fff8e1"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <h3 className="text-2xl font-semibold text-gray-700">
              Profesionales Invitados
            </h3>
          </div>
          <div className="border-t-2 border-dashed border-[#d4af37] mb-4"></div>
          <p className="text-gray-600 leading-relaxed">
            A lo largo del año contaremos con la presencia de especialistas de
            otras provincias para dictar formaciones exclusivas. Una oportunidad
            única para sumar valor a tu carrera.
          </p>
        </div>
      </div>
      {/* Animaciones y estilos premium ahora solo en index.css y Tailwind */}
    </section>
  );
};

export default CursosDictados;
