import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen bg-no-repeat bg-center bg-cover md:bg-contain "
      style={{ backgroundImage: "url('/assets/images/banner2.png')" }} // Usamos una sola imagen optimizada
    >
      {/* Capa oscura para mejor legibilidad del texto */}
      <div className="absolute inset-0 bg-black bg-opacity-5"></div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4 translate-y-48 md:translate-y-60">

        <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-md">
          Armonizá tu mirada
        </h1>

        <p className="text-base md:text-xl max-w-2xl mb-6 drop-shadow-md">
          Perfilado de cejas · Lifting y extensiones de pestañas · Depilación láser y con cera · Limpieza facial y dermaplaning
        </p>

        <Link
          to="/contact"
          className="bg-[#d4af37] hover:bg-[#bfa437] text-white font-semibold py-3 px-8 rounded-full transition shadow-lg"
        >
          Reservar turno
        </Link>
      </div>
    </section>
  );
};

export default Hero;
