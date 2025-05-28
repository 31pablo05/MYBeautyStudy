import React, { useState } from "react";

const faqData = [
  {
    category: "Pestañas",
    questions: [
      {
        q: "¿Cuánto duran las extensiones de pestañas?",
        a: "Las extensiones de pestañas duran entre 3 a 4 semanas, dependiendo del cuidado y del ciclo natural de tus pestañas.",
      },
      {
        q: "¿Puedo mojarme las pestañas después de aplicarlas?",
        a: "Recomendamos evitar el agua las primeras 24 horas después de la aplicación para asegurar una buena adhesión.",
      },
      {
        q: "¿Daña mis pestañas naturales?",
        a: "No, si se aplican correctamente y se cuidan bien, tus pestañas naturales no sufrirán daños.",
      },
    ],
  },
  {
    category: "Cejas",
    questions: [
      {
        q: "¿Qué es el diseño de cejas con visagismo?",
        a: "Es una técnica que adapta la forma de tus cejas según tu rostro, mejorando la armonía facial.",
      },
      {
        q: "¿La depilación de cejas duele?",
        a: "Puede causar una leve molestia, pero es rápida y tolerable. Usamos productos que alivian la piel.",
      },
      {
        q: "¿Cada cuánto tiempo debo retocar mis cejas?",
        a: "Se recomienda un retoque cada 2 a 3 semanas para mantener su forma.",
      },
    ],
  },
  {
    category: "Depilación Láser",
    questions: [
      {
        q: "¿Es definitiva la depilación láser?",
        a: "Reduce el crecimiento del vello de forma permanente, aunque pueden requerirse sesiones de mantenimiento anuales.",
      },
      {
        q: "¿Cuántas sesiones necesito?",
        a: "En promedio, se necesitan entre 6 y 10 sesiones para resultados óptimos.",
      },
      {
        q: "¿Duele el tratamiento?",
        a: "La mayoría lo describe como una sensación de pinchazo leve. Nuestro equipo está preparado para minimizar molestias.",
      },
    ],
  },
];

const ServicesFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Preguntas Frecuentes sobre Nuestros Servicios
      </h2>

      {faqData.map((group, groupIndex) => (
        <div key={group.category} className="mb-8">
          <h3 className="text-xl font-semibold text-pink-600 mb-4">{group.category}</h3>
          <div className="space-y-2">
            {group.questions.map((item, i) => {
              const index = `${groupIndex}-${i}`;
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="border rounded-md p-4 cursor-pointer bg-white shadow-sm transition hover:shadow-md"
                  onClick={() => toggle(index)}
                >
                  <p className="font-medium text-gray-800 flex justify-between items-center">
                    {item.q}
                    <span className="text-pink-500">{isOpen ? "−" : "+"}</span>
                  </p>
                  {isOpen && (
                    <p className="text-gray-600 mt-2 transition duration-300">
                      {item.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServicesFAQ;
