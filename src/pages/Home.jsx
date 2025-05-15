import React from "react";
import Hero from "../components/home/Hero";
import ServiciosDestacados from "../components/home/ServiciosDestacados";
import ReservaRapida from "../components/home/ReservaRapida";
import Testimonios from "../components/home/Testimonios";

const Home = () => {
  return (
    <div>
      <Hero />
      <ServiciosDestacados />
      <ReservaRapida />
      <Testimonios />
    </div>
  );
};

export default Home;
