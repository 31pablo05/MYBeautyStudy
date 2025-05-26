import React from "react";
import ReactPlayer from "react-player";

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
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16 relative inline-block after:block after:w-20 after:h-1 after:bg-rose-300 after:mx-auto after:mt-2">
          Formación Profesional
        </h2>

        {/* Videos de experiencias */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            Mirá algunos momentos de nuestros cursos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
              <ReactPlayer
                url="/assets/videos/melicurso1.mp4"
                controls
                playing
                muted
                loop
                width="100%"
                height="100%"
                className="react-player group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
              <ReactPlayer
                url="/assets/videos/melicurso2.mp4"
                controls
                playing
                muted
                loop
                width="100%"
                height="100%"
                className="react-player group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href="#contacto"
              className="inline-block bg-[#d4af37] hover:bg-[#bfa437] text-white font-semibold py-3 px-6 rounded-full transition"
            >
              Consultá por el próximo curso
            </a>
          </div>
        </div>

        {/* Próximamente */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Próximos Cursos</h3>
          <p className="text-gray-600 leading-relaxed">
            Muy pronto anunciaremos nuevas fechas para nuestros cursos intensivos y workshops. ¡Seguinos en redes para enterarte primero!
          </p>
          <p className="text-gray-600 italic mt-2">
            ¿Querés capacitarte en el mundo de la estética? Este espacio es para vos.
          </p>
        </div>

        {/* Profesionales Invitados */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Profesionales Invitados</h3>
          <p className="text-gray-600 leading-relaxed">
            A lo largo del año contaremos con la presencia de especialistas de otras provincias para dictar formaciones exclusivas. Una oportunidad única para sumar valor a tu carrera.
          </p>
        </div>

        {/* Cursos Pasados */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">Cursos Anteriores</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cursosPasados.map((curso, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition duration-300"
              >
                <img
                  src={curso.img}
                  alt={curso.titulo}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800">{curso.titulo}</h4>
                  <p className="text-sm text-gray-500 mb-2">{curso.fecha}</p>
                  <p className="text-gray-600">{curso.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CursosDictados;
