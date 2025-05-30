// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // IMPORTANTE
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import WhatsAppButton from "./WhatsAppButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import DetalleServicio from "./components/service/DetalleServicio";
import ScrollToTop from "./ScrollToTop";

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:servicioId" element={<DetalleServicio />} />
          <Route path="/galeria/:categoria" element={<Gallery />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;
