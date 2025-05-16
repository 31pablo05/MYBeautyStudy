import React from "react";
import Hero from "../components/home/Hero";
import ServiciosDestacados from "../components/home/ServiciosDestacados";
import ReservaRapida from "../components/home/ReservaRapida";
import CursosDictados from "../components/home/CursosDictados";
const Home = () => {
  return (
    <div>
      <Hero />
      <ReservaRapida />
      <ServiciosDestacados />
      <CursosDictados />
     
    </div>
  );
};

export default Home;
