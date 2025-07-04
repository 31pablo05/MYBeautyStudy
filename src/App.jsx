// App.jsx
import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import WhatsAppButton from "./WhatsAppButton";
import ScrollToTop from "./ScrollToTop";

// Lazy imports de páginas principales
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const DetalleServicio = lazy(() =>
  import("./components/service/DetalleServicio")
);

function App() {
  const location = useLocation();

  // Forzar scroll al tope al cargar la página y desactivar scroll restoration del navegador
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    // Scroll inmediato al tope
    window.scrollTo({ top: 0, behavior: 'auto' });
    
    // Scroll adicional después del render completo
    const handleLoad = () => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }
    
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  // Scroll al tope en cada cambio de ruta
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>MyBeautyStudy | Estética en Trelew</title>
        <meta
          name="description"
          content="MyBeautyStudy ofrece servicios profesionales de cejas, pestañas y depilación láser en Trelew. Turnos rápidos y atención personalizada."
        />
        <meta
          name="keywords"
          content="estética Trelew, cejas, pestañas, depilación láser, belleza, lifting de pestañas, diseño de cejas"
        />
        {/* SEO: Open Graph para compartir en redes */}
        <meta property="og:title" content="MyBeautyStudy | Estética en Trelew" />
        <meta property="og:description" content="MyBeautyStudy ofrece servicios profesionales de cejas, pestañas y depilación láser en Trelew. Turnos rápidos y atención personalizada." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://my-beauty-study.vercel.app/" />
        <meta property="og:image" content="/assets/images/logotipo.webp" />
        {/* SEO: Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MyBeautyStudy | Estética en Trelew" />
        <meta name="twitter:description" content="MyBeautyStudy ofrece servicios profesionales de cejas, pestañas y depilación láser en Trelew. Turnos rápidos y atención personalizada." />
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

      <ScrollToTop />
      <Navbar />

      <main className="flex-grow">
        <Suspense
          fallback={
            <div className="text-center p-8 text-gray-500">Cargando...</div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:servicioId" element={<DetalleServicio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;
