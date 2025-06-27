import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/home/Hero";
import ServiciosDestacados from "../components/home/ServiciosDestacados";
import ReservaRapida from "../components/home/ReservaRapida";
import CursosDictados from "../components/home/CursosDictados";
import InstagramFeed from "../components/home/InstagramFeed";
import TurnoCalendar from "../components/home/TurnoCalendar";
import BannerHorarios from "../components/home/BannerHorarios";
import MapaUbicacion from '../components/contact/MapaUbicacion';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>MyBeautyStudy | Estética de Cejas y Pestañas en Trelew</title>
        <meta name="description" content="Especialista en lifting de pestañas, diseño de cejas, perfilado y estética personalizada. Descubrí tu mejor versión con MyBeautyStudy en Trelew." />
        <meta name="keywords" content="cejas, pestañas, lifting, diseño de cejas, estética facial, MyBeautyStudy, Trelew, belleza" />
        {/* SEO: Open Graph para compartir en redes */}
        <meta property="og:title" content="MyBeautyStudy | Estética de Cejas y Pestañas en Trelew" />
        <meta property="og:description" content="Especialista en lifting de pestañas, diseño de cejas, perfilado y estética personalizada en Trelew, Chubut." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://my-beauty-study.vercel.app/" />
        <meta property="og:image" content="/assets/images/logotipo.webp" />
        {/* SEO: Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MyBeautyStudy | Estética de Cejas y Pestañas en Trelew" />
        <meta name="twitter:description" content="Especialista en lifting de pestañas, diseño de cejas, perfilado y estética personalizada en Trelew, Chubut." />
        <meta name="twitter:image" content="/assets/images/logotipo.webp" />
        {/* SEO: Canonical */}
        <link rel="canonical" href="https://my-beauty-study.vercel.app/" />
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
            "url": "https://my-beauty-study.vercel.app/",
            "telephone": "+54 9 2804 034308"
          }
        `}</script>
      </Helmet>

      <main id="main-content" role="main">
        {/* Hero debe contener el h1 principal de la página */}
        <Hero />
        <ReservaRapida />
        {/* Sección del calendario para reservar turnos */}
        <section id="reservas" className="py-10 bg-white" aria-labelledby="calendario-turnos">
          <div className="container mx-auto">
            {/* El h2 debe estar dentro del componente TurnoCalendar o aquí */}
            <TurnoCalendar />
          </div>
        </section>
        {/* Secciones siguientes */}
        <section aria-labelledby="servicios-destacados">
          <ServiciosDestacados />
        </section>
        <section aria-labelledby="cursos-dictados">
          <CursosDictados />
        </section>
        <section aria-labelledby="instagram-feed">
          <InstagramFeed />
        </section>
        {/* Mapa de ubicación debajo de InstagramFeed */}
        <section aria-labelledby="ubicacion">
          <div className="mt-12 flex justify-center">
            <MapaUbicacion />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
