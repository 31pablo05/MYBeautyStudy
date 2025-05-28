import React from "react";
import Hero from "../components/home/Hero";
import ServiciosDestacados from "../components/home/ServiciosDestacados";
import ReservaRapida from "../components/home/ReservaRapida";
import CursosDictados from "../components/home/CursosDictados";
import InstagramFeed from "../components/home/InstagramFeed";
const Home = () => {
  return (
    <div>
      <Hero />
      <ReservaRapida />
      <ServiciosDestacados />
      <CursosDictados />
      <InstagramFeed />
     
    </div>
  );
};

export default Home;
