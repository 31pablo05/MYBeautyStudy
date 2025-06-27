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
        <meta
          name="description"
          content="Especialista en lifting de pestañas, diseño de cejas, perfilado y estética personalizada. Descubrí tu mejor versión con MyBeautyStudy en Trelew."
        />
        <meta
          name="keywords"
          content="cejas, pestañas, lifting, diseño de cejas, estética facial, MyBeautyStudy, Trelew, belleza"
        />
      </Helmet>

      <div>
        <Hero />
        <ReservaRapida />
        


        {/* Sección del calendario para reservar turnos */}
        <section id="reservas" className="py-10 bg-white">
          <div className="container mx-auto">
            <TurnoCalendar />
          </div>
        </section>

        {/* Secciones siguientes */}
        <ServiciosDestacados />
        <CursosDictados />
        <InstagramFeed />
        {/* Mapa de ubicación debajo de InstagramFeed */}
        <div className="mt-12 flex justify-center">
          <MapaUbicacion />
        </div>
      </div>
    </>
  );
};

export default Home;
