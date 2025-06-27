import React from "react";
import { Helmet } from "react-helmet";
import Presentacion from "../components/about/Presentacion";
import Historia from "../components/about/Historia";
import MisionVision from "../components/about/MisionVision";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Sobre Nosotros | MyBeautyStudy</title>
        <meta
          name="description"
          content="Conocé la historia, misión y visión de MyBeautyStudy, especialistas en belleza facial en Trelew. Profesionalismo, compromiso y pasión por resaltar tu belleza natural."
        />
        <meta
          name="keywords"
          content="sobre nosotros, historia, misión, visión, estética, cejas, pestañas, MyBeautyStudy, Trelew"
        />
        {/* SEO: Open Graph para compartir en redes */}
        <meta property="og:title" content="Sobre Nosotros | MyBeautyStudy" />
        <meta
          property="og:description"
          content="Conocé la historia, misión y visión de MyBeautyStudy, especialistas en belleza facial en Trelew."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://my-beauty-study.vercel.app/about" />
        <meta property="og:image" content="/assets/images/logotipo.webp" />
        {/* SEO: Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sobre Nosotros | MyBeautyStudy" />
        <meta
          name="twitter:description"
          content="Conocé la historia, misión y visión de MyBeautyStudy, especialistas en belleza facial en Trelew."
        />
        <meta name="twitter:image" content="/assets/images/logotipo.webp" />
        {/* SEO: Canonical */}
        <link rel="canonical" href="https://my-beauty-study.vercel.app/about" />
        {/* SEO: Local Business (JSON-LD) */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BeautySalon",
            "name": "MyBeautyStudy",
            "image": "https://my-beauty-study.vercel.app/assets/images/logotipo.webp",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rivadavia 519, 1er piso",
              "addressLocality": "Trelew",
              "addressRegion": "Chubut",
              "addressCountry": "AR"
            },
            "url": "https://my-beauty-study.vercel.app/about",
            "telephone": "+54 9 2804 034308"
          }
        `}</script>
      </Helmet>
      <main id="main-content" role="main">
        <section aria-labelledby="presentacion">
          <Presentacion />
        </section>
        <section aria-labelledby="historia">
          <Historia />
        </section>
        <section aria-labelledby="mision-vision">
          <MisionVision />
        </section>
      </main>
    </>
  );
};

export default About;
