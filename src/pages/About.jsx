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
      </Helmet>

      <div>
        <Presentacion />
        <Historia />
        <MisionVision />
      </div>
    </>
  );
};

export default About;
