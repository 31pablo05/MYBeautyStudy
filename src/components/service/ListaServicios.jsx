import React from "react";
import { Link } from "react-router-dom";

const ListaServicios = () => {
  return (
    <section className="py-16 bg-white mt-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border p-6 rounded-lg shadow-lg hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Pestañas</h3>
            <p className="text-gray-600 mb-4">
              Realzamos tu mirada con nuestros servicios especializados en extensión de pestañas.
            </p>
            <Link to="/services/pestanas" className="text-[#d4af37] font-semibold">
              Ver más
            </Link>
          </div>
          <div className="border p-6 rounded-lg shadow-lg hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Cejas</h3>
            <p className="text-gray-600 mb-4">
              Diseñamos y definimos tus cejas para resaltar tu belleza natural con precisión y estilo.
            </p>
            <Link to="/services/cejas" className="text-[#d4af37] font-semibold">
              Ver más
            </Link>
          </div>
          <div className="border p-6 rounded-lg shadow-lg hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Depilación Láser</h3>
            <p className="text-gray-600 mb-4">
              Olvidate del vello con nuestra depilación láser, un tratamiento eficaz y duradero.
            </p>
            <Link to="/services/depilacion-laser" className="text-[#d4af37] font-semibold">
              Ver más
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListaServicios;
