import React from "react";
import { Helmet } from "react-helmet";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Presentacion from "../components/about/Presentacion";
import Historia from "../components/about/Historia";
import MisionVision from "../components/about/MisionVision";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Sobre Nosotros | MyBeautyStudy - Especialistas en Belleza Facial</title>
        <meta
          name="description"
          content="Conocé la historia de Melina Yancan y MyBeautyStudy, especialistas en cejas, pestañas y estética facial en Trelew. +5 años de experiencia profesional y compromiso con la excelencia."
        />
        <meta
          name="keywords"
          content="sobre nosotros, Melina Yancan, historia, misión, visión, estética facial, cejas, pestañas, MyBeautyStudy, Trelew, profesional, experiencia"
        />
        {/* SEO: Open Graph para compartir en redes */}
        <meta property="og:title" content="Sobre Nosotros | MyBeautyStudy - Especialistas en Belleza Facial" />
        <meta
          property="og:description"
          content="Conocé la historia de Melina Yancan y MyBeautyStudy, especialistas en cejas, pestañas y estética facial en Trelew."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://my-beauty-study.vercel.app/about" />
        <meta property="og:image" content="/assets/images/meli/3.webp" />
        {/* SEO: Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sobre Nosotros | MyBeautyStudy" />
        <meta
          name="twitter:description"
          content="Conocé la historia de Melina Yancan y MyBeautyStudy, especialistas en belleza facial en Trelew."
        />
        <meta name="twitter:image" content="/assets/images/meli/3.webp" />
        {/* SEO: Canonical */}
        <link rel="canonical" href="https://my-beauty-study.vercel.app/about" />
        {/* SEO: Local Business (JSON-LD) */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BeautySalon",
            "name": "MyBeautyStudy",
            "image": "https://my-beauty-study.vercel.app/assets/images/meli/3.webp",
            "description": "Especialistas en cejas, pestañas y estética facial en Trelew. Más de 5 años de experiencia profesional.",
            "address": {
              "@type": "PostalAddress",
              "@id": "https://my-beauty-study.vercel.app/about#address",
              "streetAddress": "Rivadavia 519, 1er piso",
              "addressLocality": "Trelew",
              "addressRegion": "Chubut",
              "postalCode": "9100",
              "addressCountry": "AR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -43.2481,
              "longitude": -65.3051
            },
            "url": "https://my-beauty-study.vercel.app",
            "telephone": "+54 9 2804 034308",
            "email": "info@mybeautystudy.com",
            "founder": {
              "@type": "Person",
              "name": "Melina Yancan",
              "jobTitle": "Especialista en Estética Facial",
              "image": "https://my-beauty-study.vercel.app/assets/images/meli/3.webp"
            },
            "priceRange": "$$",
            "openingHours": [
              "Mo-Fr 09:00-18:00",
              "Sa 09:00-15:00"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servicios de Belleza",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Diseño y Depilación de Cejas",
                    "description": "Diseño personalizado y depilación profesional de cejas"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Extensiones de Pestañas",
                    "description": "Aplicación profesional de extensiones de pestañas"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Cursos de Capacitación",
                    "description": "Formación profesional en técnicas de estética facial"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "150",
              "bestRating": "5"
            },
            "sameAs": [
              "https://www.instagram.com/meliii_lash/"
            ]
          }
        `}</script>
      </Helmet>
      
      {/* Hero Section - Breadcrumb y introducción */}
      <div className="bg-gradient-to-br from-[#faf8f5] via-white to-[#f8f4f0] py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#d4af37]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#b76e79]/5 to-transparent rounded-full blur-2xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
         
          
          {/* Título principal */}
          <h1 className="mt-12 text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2c2c2c] mb-12 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-[#b76e79] via-[#d4af37] to-[#b76e79] bg-clip-text text-transparent">
              Conocé MyBeautyStudy
            </span>
          </h1>
          
          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Descubrí la historia, los valores y la pasión que nos convierten en 
            <span className="font-semibold text-[#b76e79]"> especialistas en belleza facial</span> en Trelew. 
            Más de 5 años creando experiencias únicas y transformadoras.
          </p>
          
          {/* Indicadores de calidad */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
              <span className="text-[#d4af37] text-lg">⭐</span>
              <span className="text-gray-700">+5 años de experiencia</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
              <span className="text-[#b76e79] text-lg">👥</span>
              <span className="text-gray-700">+500 clientas satisfechas</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
              <span className="text-[#d4af37] text-lg">🎓</span>
              <span className="text-gray-700">Formación profesional</span>
            </div>
          </div>
        </div>
      </div>

      <main id="main-content" role="main" className="relative">
        
        {/* Sección Presentación */}
        <section aria-labelledby="presentacion" className="relative">
          <Presentacion />
        </section>
        
        {/* Separador decorativo */}
        <div className="relative py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-center">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"></div>
              <div className="mx-8">
                <div className="w-16 h-16 bg-gradient-to-r from-[#d4af37] to-[#b76e79] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl">✨</span>
                </div>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"></div>
            </div>
          </div>
        </div>
        
        {/* Sección Historia */}
        <section aria-labelledby="historia" className="relative">
          <Historia />
        </section>
        
        {/* Separador decorativo */}
        <div className="relative py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-center">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#b76e79]/30 to-transparent"></div>
              <div className="mx-8">
                <div className="w-16 h-16 bg-gradient-to-r from-[#b76e79] to-[#d4af37] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl">🎯</span>
                </div>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#b76e79]/30 to-transparent"></div>
            </div>
          </div>
        </div>
        
        {/* Sección Misión y Visión */}
        <section aria-labelledby="mision-vision" className="relative">
          <MisionVision />
        </section>
        
        
      </main>
    </>
  );
};

export default About;
