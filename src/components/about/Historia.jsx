import React from "react";

const Historia = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Nuestra Historia</h2>
        <img
          src="/assets/images/history.jpg"
          alt="Historia del estudio"
          className="w-full h-auto mb-6 rounded-lg shadow-md"
        />
        <p className="text-lg text-gray-700">
          El estudio de belleza nació con la misión de empoderar a las personas a través de su imagen. A lo largo de los años, hemos formado una comunidad fiel de clientas que valoran el profesionalismo, la dedicación y el detalle. Desde nuestros comienzos en Trelew hasta convertirnos en un punto de referencia en la ciudad, cada paso ha estado guiado por la pasión y el compromiso con la excelencia.
        </p>
      </div>
    </section>
  );
};

export default Historia;
