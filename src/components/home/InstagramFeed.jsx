import React from "react";
import { motion } from "framer-motion";

const InstagramFeed = () => {
  const images = [
    "/assets/images/pestañas/MYBeauty4.webp",
    "/assets/images/pestañas/MYBeauty1.webp",
    "/assets/images/cejas/MYBeauty6.webp",
    "/assets/images/cejas/MYBeauty7.webp",
    "/assets/images/pestañas/MYBeauty2.webp",
    "/assets/images/cejas/MYBeauty3.webp",
  ];

  return (
    <section className="text-center py-14 px-4 bg-white">
      <motion.h2
        className="text-3xl font-bold text-gray-800 mb-8 inline-block relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-full after:h-1 after:bg-gradient-to-r after:from-yellow-400 after:via-yellow-500 after:to-yellow-600 drop-shadow-gold"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="inline-flex items-center gap-2">
          <svg
            className="w-8 h-8 text-pink-500"
            viewBox="0 0 448 512"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.36-30.36C293.19,120,224,120,224,120s-69.19,0-94.35,11.3a54,54,0,0,0-30.36,30.36C88,162.81,88,224,88,224s0,61.19,11.3,94.35a54,54,0,0,0,30.36,30.36C154.81,392,224,392,224,392s69.19,0,94.35-11.3a54,54,0,0,0,30.36-30.36C360,285.19,360,224,360,224S360,162.81,348.71,161.66ZM224,338a82,82,0,1,1,82-82A82,82,0,0,1,224,338Zm85.4-148.6a19.2,19.2,0,1,1-19.2-19.2A19.2,19.2,0,0,1,309.4,189.4Z" />
          </svg>
          <span>#MYBEAUTYSTUDY EN INSTAGRAM</span>
        </span>
      </motion.h2>
      <motion.p
        className="text-gray-600 mb-6 text-base max-w-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Inspirate con nuestros últimos trabajos y resultados reales. ¡Seguinos y
        compartí tu experiencia usando{" "}
        <b>#MYBeautyStudy</b>!
      </motion.p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-8 justify-center">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="relative group rounded-lg overflow-hidden shadow-gold"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            viewport={{ once: true }}
          >
            <img
              src={img}
              alt={`Trabajo real de MYBeautyStudy en Instagram ${index + 1}`}
              className="w-full h-36 sm:h-40 object-cover object-center rounded-lg transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110 group-hover:shadow-2xl"
              style={{ imageRendering: "auto" }}
            />
            {/* Overlay dorado y zoom al hacer hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#d4af37]/30 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none rounded-lg"></div>
            {/* Icono Instagram en hover */}
            <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none">
              <svg
                className="w-7 h-7 text-white drop-shadow-gold"
                viewBox="0 0 448 512"
                fill="currentColor"
              >
                <path d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.36-30.36C293.19,120,224,120,224,120s-69.19,0-94.35,11.3a54,54,0,0,0-30.36,30.36C88,162.81,88,224,88,224s0,61.19,11.3,94.35a54,54,0,0,0,30.36,30.36C154.81,392,224,392,224,392s69.19,0,94.35-11.3a54,54,0,0,0,30.36-30.36C360,285.19,360,224,360,224S360,162.81,348.71,161.66ZM224,338a82,82,0,1,1,82-82A82,82,0,0,1,224,338Zm85.4-148.6a19.2,19.2,0,1,1-19.2-19.2A19.2,19.2,0,0,1,309.4,189.4Z" />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <a
          href="https://www.instagram.com/meliii_lash/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white font-semibold shadow-gold hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300 animate-gold-glow"
          aria-label="Ver perfil de Instagram de MYBeautyStudy"
        >
          <svg
            className="w-6 h-6 text-white"
            viewBox="0 0 448 512"
            fill="currentColor"
          >
            <path d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.36-30.36C293.19,120,224,120,224,120s-69.19,0-94.35,11.3a54,54,0,0,0-30.36,30.36C88,162.81,88,224,88,224s0,61.19,11.3,94.35a54,54,0,0,0,30.36,30.36C154.81,392,224,392,224,392s69.19,0,94.35-11.3a54,54,0,0,0,30.36-30.36C360,285.19,360,224,360,224S360,162.81,348.71,161.66ZM224,338a82,82,0,1,1,82-82A82,82,0,0,1,224,338Zm85.4-148.6a19.2,19.2,0,1,1-19.2-19.2A19.2,19.2,0,0,1,309.4,189.4Z" />
          </svg>
          @meliii_lash
        </a>
      </motion.div>
      {/* Estilos premium para resplandor dorado y sombra */}
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
      `}</style>
    </section>
  );
};

export default InstagramFeed;
