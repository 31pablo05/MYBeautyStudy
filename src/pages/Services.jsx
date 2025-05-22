import React from "react";
import ListaServicios from "../components/service/ListaServicios";

const Services = () => {
  return (
    <div>
      {/* Lista de servicios */}
      <ListaServicios />

   {/* Video decorativo responsive */}
<div className="relative w-full overflow-hidden mt-10 flex items-center justify-center bg-black 
                max-h-[80vh] md:max-h-none md:h-[600px]">

  <video
    className="w-full h-full object-contain md:object-cover md:w-auto md:h-full"
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
  );
};

export default Services;
