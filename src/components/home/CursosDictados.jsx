import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom"; // al principio del archivo

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
            {[1, 2].map((n, index) => (
              <div
                key={n}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl border-2 border-[#D4AF37] transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <ReactPlayer
                  url={`/assets/videos/melicurso${n}.mp4`}
                  controls
                  playing
                  muted
                  loop
                  width="100%"
                  height="100%"
                  className="react-player group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  style={{ borderRadius: "1rem", overflow: "hidden" }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
              </div>
            ))}
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
      {/* Estilos premium para resplandor dorado y animaciones */}
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
        .animate-fade-in-up {
          animation: fadeInUp 1.1s cubic-bezier(.39,.575,.565,1) both;
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default CursosDictados;
