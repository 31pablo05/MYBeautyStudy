import React from "react";

const Presentacion = () => {
  return (
    <section className="py-16 bg-pink-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Conocé a Melina Yancan</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="/assets/images/meli/5.png"
            alt="Melina Yancan"
            className="w-48 h-48 rounded-md shadow-lg object-cover"
          />
          <p className="text-lg text-gray-700 text-left">
            Soy Melina Yancan, una profesional apasionada por el mundo de la belleza. Desde hace más de 5 años me dedico a brindar servicios de cejas, pestañas y estética facial con un enfoque personalizado y de alta calidad. Mi objetivo es que cada persona que visite el estudio se sienta escuchada, cómoda y feliz con su imagen. Además, me encanta compartir mis conocimientos y por eso también dicto cursos para formar nuevas profesionales.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Presentacion;
