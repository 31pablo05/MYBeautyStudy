import React from "react";

const MisionVision = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Misión y Visión</h2>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Nuestra Misión</h3>
          <p className="text-lg text-gray-600">
            Ofrecer servicios de belleza de la más alta calidad, utilizando productos de primera y las mejores técnicas, para que cada cliente se sienta feliz y satisfecho con los resultados.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Nuestra Visión</h3>
          <p className="text-lg text-gray-600">
            Convertirnos en el referente número uno de la belleza en la región, manteniendo siempre altos estándares de calidad, atención personalizada y un ambiente cálido y profesional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MisionVision;
