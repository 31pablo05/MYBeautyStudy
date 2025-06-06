// App.jsx
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import WhatsAppButton from "./WhatsAppButton";
import ScrollToTop from "./ScrollToTop";

// Lazy imports de páginas principales
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));
const DetalleServicio = lazy(() =>
  import("./components/service/DetalleServicio")
);

function App() {
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
            <Route path="/galeria/:categoria" element={<Gallery />} />
            <Route path="/galeria" element={<Gallery />} />
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
