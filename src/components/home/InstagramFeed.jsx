import React, { useRef } from "react";
// eslint-disable-next-line no-unused-vars
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

  // Ref para scroll horizontal en mobile
  const scrollRef = useRef(null);

  // Accesibilidad: mover foco con flechas
  const handleKeyDown = (e, idx) => {
    if (e.key === "ArrowRight" && idx < images.length - 1) {
      document.getElementById(`insta-img-${idx + 1}`)?.focus();
    } else if (e.key === "ArrowLeft" && idx > 0) {
      document.getElementById(`insta-img-${idx - 1}`)?.focus();
    }
  };

  // Variants para animación staggered
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.13,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 30 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      className="text-center py-14 px-4 bg-white relative overflow-x-hidden"
      aria-label="Galería de trabajos reales de MYBeautyStudy en Instagram"
      id="instagram-feed"
    >
      {/* Fondo fade-in premium */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#fffbe6] via-white to-[#fff6e0] pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        aria-hidden="true"
      />
      <motion.h2
        className="text-3xl font-bold text-gray-800 mb-8 inline-block relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-full after:h-1 after:bg-gradient-to-r after:from-yellow-400 after:via-yellow-500 after:to-yellow-600 drop-shadow-gold z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="instagram-feed-title"
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
        className="text-[#7a5c2e] mb-6 text-base max-w-xl mx-auto z-10 relative px-4 py-2 rounded-lg bg-white/80 shadow-gold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Inspirate con nuestros últimos trabajos y resultados reales. ¡Seguinos y
        compartí tu experiencia usando{" "}
        <b
          tabIndex={0}
          className="relative cursor-pointer group/tooltip focus:outline-none"
          aria-label="Hashtag MYBeautyStudy en Instagram"
        >
          #MYBeautyStudy
          {/* Tooltip premium */}
          <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1 bg-[#fffbe6] text-[#b76e79] text-xs rounded shadow-gold opacity-0 group-hover/tooltip:opacity-100 group-focus/tooltip:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
            ¡Usá este hashtag y aparecé en nuestra galería!
          </span>
        </b>
        !
      </motion.p>
      {/* Galería responsive: grid en desktop, carrusel en mobile */}
      <motion.div
        className="mb-8 z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div
          ref={scrollRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 justify-center md:overflow-visible overflow-x-auto scroll-smooth md:scroll-auto snap-x md:snap-none pb-2 md:pb-0"
          style={{ WebkitOverflowScrolling: "touch" }}
          tabIndex={0}
          aria-label="Galería de imágenes de Instagram"
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="relative group rounded-lg overflow-hidden shadow-gold focus-within:ring-4 focus-within:ring-[#d4af37]/70 outline-none snap-center"
              variants={itemVariants}
              tabIndex={-1}
            >
              <img
                src={img}
                id={`insta-img-${index}`}
                tabIndex={0}
                onKeyDown={e => handleKeyDown(e, index)}
                alt={`Trabajo real de MYBeautyStudy en Instagram ${index + 1}`}
                className="w-full h-36 sm:h-40 object-cover object-center rounded-lg transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110 group-hover:shadow-2xl group-hover:ring-4 group-hover:ring-[#d4af37]/60 focus:ring-4 focus:ring-[#d4af37]/80 outline-none cursor-pointer animate-gold-border"
                style={{ imageRendering: "auto" }}
                aria-label={`Imagen ${index + 1} de la galería de Instagram`}
              />
              {/* Overlay dorado y zoom al hacer hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#d4af37]/40 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none rounded-lg"></div>
              {/* Overlay hashtag y usuario en hover */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none">
                <span className="bg-white/80 text-[#b76e79] font-bold px-3 py-1 rounded-full mb-2 text-xs shadow-gold">
                  #MYBeautyStudy
                </span>
                <span className="bg-[#d4af37]/90 text-white font-semibold px-3 py-1 rounded-full text-xs shadow-gold">
                  @meliii_lash
                </span>
              </div>
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
      </motion.div>
      {/* Botón premium estático en mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="z-20 flex justify-center mt-8"
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
      {/* Estilos premium para resplandor dorado, sombra y borde animado */}
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
        /* Borde dorado animado en hover */
        .animate-gold-border {
          box-shadow: 0 2px 8px 0 #d4af3740, 0 0 0 2px #d4af37;
          transition: box-shadow 0.5s, border-color 0.5s;
        }
        .group:hover .animate-gold-border, .group:focus-within .animate-gold-border {
          box-shadow: 0 4px 16px 0 #d4af37a0, 0 0 0 4px #d4af37, 0 0 16px 4px #fffbe6;
          border-color: #d4af37;
        }
        /* Carrusel snap en mobile */
        @media (max-width: 767px) {
          #instagram-feed .snap-x { scroll-snap-type: x mandatory; }
          #instagram-feed .snap-center { scroll-snap-align: center; }
        }
      `}</style>
    </section>
  );
};

export default InstagramFeed;
