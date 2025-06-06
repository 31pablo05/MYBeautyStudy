import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom"; // al principio del archivo


const cursosPasados = [
  {
    titulo: "Lifting y Tinte de Pestañas",
    fecha: "Marzo 2024",
    descripcion:
      "Técnica intensiva para levantar y pigmentar pestañas naturales. Incluye práctica, teoría y certificación profesional.",
    img: "/assets/images/curso-lifting.jpg",
  },
  {
    titulo: "Diseño y Perfilado de Cejas",
    fecha: "Enero 2024",
    descripcion:
      "Curso práctico para dominar el diseño simétrico de cejas, técnicas de visagismo y atención al cliente.",
    img: "/assets/images/curso-cejas.jpg",
  },
];

const CursosDictados = () => {
  return (
    <section className="bg-gradient-to-br from-[#fefaf7] to-[#fff0eb] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16 relative inline-block after:block after:w-20 after:h-1 after:bg-[#d4af37] after:mx-auto after:mt-2">
          Formación Profesional
        </h2>

        {/* Videos de experiencias */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            Mirá algunos momentos de nuestros cursos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((n, index) => (
              <div
                key={n}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
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
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
           <Link
  to="/Contact"
  className="inline-block bg-[#d4af37] hover:bg-[#bfa437] text-white font-semibold py-3 px-6 rounded-full transition-transform duration-500 hover:scale-105 animate-pulse"
>
  Consultá por el próximo curso
</Link>

          </div>
        </div>

        {/* Próximamente */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            Próximos Cursos
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Muy pronto anunciaremos nuevas fechas para nuestros cursos intensivos y workshops. ¡Seguinos en redes para enterarte primero!
          </p>
          <p className="text-gray-600 italic mt-2">
            ¿Querés capacitarte en el mundo de la estética? Este espacio es para vos.
          </p>
        </div>

        {/* Profesionales Invitados */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            Profesionales Invitados
          </h3>
          <p className="text-gray-600 leading-relaxed">
            A lo largo del año contaremos con la presencia de especialistas de otras provincias para dictar formaciones exclusivas. Una oportunidad única para sumar valor a tu carrera.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CursosDictados;
