import React from "react";
import { Helmet } from "react-helmet";
import ListaServicios from "../components/service/ListaServicios";
import ServicesFAQ from "../components/service/ServicesFAQ";
import { FaWhatsapp } from "react-icons/fa";

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
          className="relative w-full flex items-center justify-center my-16 animate-fade-in-up bg-gradient-to-br from-pink-50 via-yellow-50 to-white"
          style={{ minHeight: '260px' }}
        >
          {/* Overlay decorativo premium */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/30 via-pink-100/20 to-transparent pointer-events-none z-10" />
          <div className="w-full flex justify-center">
            <video
              className="w-full max-w-4xl h-auto rounded-xl z-20 shadow-gold bg-white"
              style={{ aspectRatio: '16/9', objectFit: 'contain', background: 'transparent' }}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/assets/videos/ReservaTurno.mp4" type="video/mp4" />
              Tu navegador no soporta el video HTML5.
            </video>
          </div>
        </div>

        {/* Llamado a la acción */}
        <section className="w-full bg-gradient-to-b from-pink-100 via-white to-white py-16 px-4 flex flex-col items-center text-center mt-10 rounded-3xl shadow-gold animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#b76e79] mb-4 drop-shadow-gold animate-fade-in-up">
            ¿Lista para tu próxima sesión de belleza?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl animate-fade-in-up delay-100">
            Reservá tu turno ahora mismo y descubrí todo lo que nuestros tratamientos pueden hacer por vos.
          </p>

          <a
            href="https://wa.me/549XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-rose-300 hover:bg-green-600 text-white text-lg font-bold px-8 py-4 rounded-full shadow-gold border-2 border-yellow-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-200 animate-gold-glow drop-shadow-gold animate-fade-in-up delay-200"
            aria-label="Solicitar turno por WhatsApp"
          >
            <FaWhatsapp className="text-2xl animate-gold-glow" />
            Solicitar Turno
          </a>
        </section>
      </div>
      <style>{`
        .shadow-gold { box-shadow: 0 2px 12px 0 #d4af3740, 0 0 0 2px #d4af37; }
        .drop-shadow-gold { filter: drop-shadow(0 0 6px #d4af37cc); }
        .animate-gold-glow {
          animation: gold-glow 2.2s infinite alternate;
        }
        @keyframes gold-glow {
          0% { filter: drop-shadow(0 0 0px #d4af37cc); }
          100% { filter: drop-shadow(0 0 12px #d4af37cc); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s;
        }
      `}</style>
    </>
  );
};

export default Services;
