import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

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
      <h2 className="text-3xl font-extrabold text-[#b76e79] mb-10 inline-block relative drop-shadow-gold">
        Preguntas Frecuentes sobre Nuestros Servicios
      </h2>

      {faqData.map((group, groupIndex) => (
        <div
          key={group.category}
          className="mb-10 animate-fade-in-up"
          style={{ animationDelay: `${groupIndex * 0.2}s`, animationFillMode: "both" }}
        >
          <h3 className="text-xl font-bold text-yellow-700 mb-5 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-gradient-to-br from-yellow-400 via-pink-300 to-yellow-600 inline-block animate-gold-glow2" />
            {group.category}
          </h3>
          <div className="space-y-4">
            {group.questions.map((item, i) => {
              const index = `${groupIndex}-${i}`;
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`border-2 rounded-xl p-5 cursor-pointer bg-white shadow-gold transition-all duration-300 hover:shadow-lg hover:border-yellow-400 group relative animate-fade-in-up`}
                  style={{ animationDelay: `${i * 0.07}s`, animationFillMode: "both" }}
                  onClick={() => toggle(index)}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isOpen}
                  aria-label={`Pregunta frecuente: ${item.q}`}
                  onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && toggle(index)}
                >
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-[#b76e79] text-lg text-left">
                      {item.q}
                    </p>
                    <span className="ml-4 text-yellow-500 text-2xl transition-transform duration-300 group-hover:scale-125">
                      {isOpen ? <FaChevronUp className="animate-chevron" /> : <FaChevronDown className="animate-chevron" />}
                    </span>
                  </div>
                  <div
                    className={`text-gray-700 mt-2 overflow-hidden transition-[max-height] duration-500 ease-in-out text-left`}
                    style={{
                      maxHeight: isOpen ? "200px" : "0px",
                    }}
                  >
                    <p className="pt-2 leading-relaxed">{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
      <style>{`
        .shadow-gold { box-shadow: 0 2px 12px 0 #d4af3740, 0 0 0 2px #d4af37; }
        .drop-shadow-gold { filter: drop-shadow(0 0 6px #d4af37cc); }
        .animate-gold-glow2 {
          animation: gold-glow2 3.2s infinite alternate;
        }
        @keyframes gold-glow2 {
          0% { filter: drop-shadow(0 0 0px #e6b7c1cc); }
          100% { filter: drop-shadow(0 0 10px #e6b7c1cc); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s;
        }
        .animate-chevron {
          transition: transform 0.3s;
        }
      `}</style>
    </section>
  );
};

export default ServicesFAQ;
