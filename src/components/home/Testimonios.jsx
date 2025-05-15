import React from "react";

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-200">
      <h2 className="text-3xl font-bold text-center mb-8">Lo que dicen nuestros clientes</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Testimonio 1 */}
        <div className="bg-white p-6 shadow-lg rounded-lg text-center">
          <p className="text-gray-600 mb-4">"¡Excelente atención! Me encantó el servicio de extensiones de pestañas. Muy recomendados."</p>
          <p className="font-semibold text-gray-800">Maria G.</p>
        </div>
        {/* Testimonio 2 */}
        <div className="bg-white p-6 shadow-lg rounded-lg text-center">
          <p className="text-gray-600 mb-4">"Las cejas perfectas y la depilación láser fue indolora y rápida. Totalmente satisfecha."</p>
          <p className="font-semibold text-gray-800">Laura T.</p>
        </div>
        {/* Testimonio 3 */}
        <div className="bg-white p-6 shadow-lg rounded-lg text-center">
          <p className="text-gray-600 mb-4">"Un lugar muy profesional y amigable. Volveré sin duda para más servicios."</p>
          <p className="font-semibold text-gray-800">Sofia M.</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
