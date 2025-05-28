import React from "react";
import { Link } from "react-router-dom";
import servicios from "../service/serviciosData"; // Ajustá el path si hace falta

const ListaServicios = () => {
  return (
    <section className="py-16 bg-white mt-20">
      <div className="max-w-6xl mx-auto text-center">
       <h2 className="text-3xl font-bold text-gray-800 mb-8 inline-block relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-full after:h-1 after:bg-gradient-to-r after:from-yellow-400 after:via-yellow-500 after:to-yellow-600">
  Nuestros Servicios
</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio) => (
            <div
              key={servicio.id}
              className="border p-6 rounded-lg shadow-lg hover:shadow-2xl bg-white"
            >
              <img
                src={servicio.imagen}
                alt={servicio.titulo}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {servicio.titulo}
              </h3>
              <p className="text-gray-600 mb-4">{servicio.descripcion}</p>
              <Link to={servicio.link} className="text-[#d4af37] font-semibold">
                Ver más
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListaServicios;
