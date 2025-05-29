import React from "react";
import { Helmet } from "react-helmet";
import ListaServicios from "../components/service/ListaServicios";
import ServicesFAQ from "../components/service/ServicesFAQ";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Servicios de Estética | MyBeautyStudy</title>
        <meta
          name="description"
          content="Descubrí todos los servicios de belleza facial y estética que ofrecemos en MyBeautyStudy. Tratamientos personalizados de cejas, pestañas y mucho más en Trelew."
        />
        <meta
          name="keywords"
          content="servicios, belleza, cejas, pestañas, estética facial, tratamientos, MyBeautyStudy, Trelew"
        />
      </Helmet>

      <div className="animate-fadeInUp min-h-screen">
        {/* Lista de servicios */}
        <div className="animate-fade-in delay-100">
          <ListaServicios />
        </div>

        {/* Preguntas frecuentes */}
        <div className="animate-fade-in delay-300">
          <ServicesFAQ />
        </div>

        {/* Video decorativo */}
        <div
          className="relative w-full overflow-hidden mt-0 flex items-center justify-center bg-black
                    max-h-[80vh] md:max-h-none md:h-[600px]
                    animate-fade-in"
        >
          <video
            className="w-full h-full object-contain md:object-cover md:w-auto md:h-full
                       transform transition-transform duration-[30000ms] ease-linear
                       hover:scale-105"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/assets/videos/ReservaTurno.mp4" type="video/mp4" />
            Tu navegador no soporta el video HTML5.
          </video>
        </div>

        {/* Llamado a la acción */}
        <section className="w-full bg-gradient-to-b from-pink-100 via-white to-white py-16 px-4 flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 animate-fade-in">
            ¿Lista para tu próxima sesión de belleza?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl animate-fade-in delay-100">
            Reservá tu turno ahora mismo y descubrí todo lo que nuestros tratamientos pueden hacer por vos.
          </p>

          <a
            href="https://wa.me/549XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-600 text-white px-8 py-4 rounded-full text-base shadow-xl 
                       hover:bg-pink-700 transition-all duration-300 transform hover:scale-105
                       animate-fade-in delay-200
                       animate-pulse-slow"
          >
            Solicitar Turno
          </a>
        </section>
      </div>
    </>
  );
};

export default Services;
