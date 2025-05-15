import React from "react";

const Historia = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Nuestra Historia</h2>
        <p className="text-lg text-gray-600 mb-8">
          Desde nuestra fundación, nos hemos comprometido a brindar un servicio excepcional en el mundo de la belleza. Comenzamos con la idea de ofrecer un lugar donde cada cliente pueda sentirse único y especial, y hoy nos enorgullece ser una de las opciones más confiables en el sector.
        </p>
        <img
          src="/assets/images/history.jpg"
          alt="Historia de la empresa"
          className="w-full h-auto mb-8 rounded-lg shadow-md"
        />
        <p className="text-lg text-gray-600">
          A lo largo de los años, hemos crecido gracias a la confianza de nuestros clientes, quienes nos eligen por la calidad y el trato personalizado que ofrecemos. ¡Gracias por ser parte de nuestra historia!
        </p>
      </div>
    </section>
  );
};

export default Historia;
