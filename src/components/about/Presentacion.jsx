import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaAward, FaInstagram, FaRegSmile } from "react-icons/fa";

const skills = [
  { icon: <FaStar className="text-yellow-400 text-xl" />, label: "Cejas & Pestañas" },
  { icon: <FaAward className="text-pink-400 text-xl" />, label: "Cursos Certificados" },
  { icon: <FaRegSmile className="text-yellow-500 text-xl" />, label: "Atención Personalizada" },
  { icon: <FaInstagram className="text-pink-500 text-xl" />, label: "@meliii_lash" },
];

const Presentacion = () => {
  return (
    <section className="py-20 bg-pink-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.h2
          className="relative inline-block text-3xl md:text-4xl font-extrabold text-[#b76e79] mb-10 mt-10 drop-shadow-gold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Conocé a <span className="text-pink-500 font-black">Melina Yancan</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mt-6">
          {/* Imagen premium con borde animado */}
          <motion.div
            className="relative flex-shrink-0"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Fondo difuminado y anillo dorado animado */}
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <span className="block w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-pink-200 to-pink-100 blur-2xl scale-125" />
              <span className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-yellow-400 animate-gold-ring z-10" style={{boxShadow:'0 0 32px #d4af37cc'}}></span>
            </div>
            {/* Imagen animada */}
            <motion.img
              src="/assets/images/meli/3.webp"
              alt="Melina Yancan"
              className="relative w-72 h-72 md:w-96 md:h-96 object-cover object-top rounded-full shadow-lg z-20 border-4 border-white"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            />
          </motion.div>

          {/* Texto animado y skills */}
          <motion.div
            className="flex-1 text-left md:text-left space-y-5"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-pink-500 mb-2">Melina Yancan</h3>
            <p className="text-lg md:text-xl text-[#7a5c2e] font-medium mb-2">
              Especialista en Cejas, Pestañas y Estética Facial
              <span className="ml-2 inline-block px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs align-middle font-semibold">+5 años de experiencia</span>
            </p>
            <p className="text-base md:text-xl text-gray-700 mb-2">
              Soy una profesional apasionada por el mundo de la belleza. Me dedico a brindar servicios de cejas, pestañas y estética facial con un enfoque personalizado y de alta calidad. Mi objetivo es que cada persona que visite el estudio se sienta escuchada, cómoda y feliz con su imagen. Además, me encanta compartir mis conocimientos y por eso también dicto cursos para formar nuevas profesionales.
            </p>
            {/* Frase inspiracional */}
            <blockquote className="italic text-pink-600 text-lg md:text-xl border-l-4 border-pink-300 pl-4 my-3">
              "La confianza y el bienestar de cada clienta es mi mayor logro profesional."
            </blockquote>
            {/* Skills con íconos */}
            <div className="flex flex-wrap gap-3 mt-4">
              {skills.map((s, i) => (
                <span key={i} className="flex items-center gap-2 px-3 py-1 bg-white/80 rounded-full shadow-gold text-pink-700 font-semibold text-sm md:text-base animate-skill-fadein">
                  {s.icon} {s.label}
                </span>
              ))}
            </div>
            {/* Botón a Instagram profesional */}
            <a
              href="https://www.instagram.com/meliii_lash/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-pink-400 via-yellow-400 to-yellow-500 text-white font-bold shadow-gold hover:from-pink-500 hover:to-yellow-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-200 animate-gold-glow"
              aria-label="Ver Instagram profesional de Melina Yancan"
            >
              Ver Instagram profesional
            </a>
          </motion.div>
        </div>
      </div>
      {/* Estilos premium para anillo dorado, skills y glow */}
      <style>{`
        .shadow-gold { box-shadow: 0 2px 8px 0 #d4af3740, 0 0 0 2px #d4af37; }
        .drop-shadow-gold { filter: drop-shadow(0 0 6px #d4af37cc); }
        .animate-gold-glow {
          animation: gold-glow 2.2s infinite alternate;
        }
        @keyframes gold-glow {
          0% { filter: drop-shadow(0 0 0px #d4af37cc); }
          100% { filter: drop-shadow(0 0 12px #d4af37cc); }
        }
        .animate-gold-ring {
          animation: gold-ring 2.5s infinite alternate;
        }
        @keyframes gold-ring {
          0% { box-shadow: 0 0 16px #fffbe6, 0 0 0px #d4af37cc; }
          100% { box-shadow: 0 0 32px #d4af37cc, 0 0 8px #fffbe6; }
        }
        .animate-skill-fadein {
          animation: skill-fadein 1.2s;
        }
        @keyframes skill-fadein {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Presentacion;
