// Gallery.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Gallery = () => {
  const { categoria } = useParams();
  const categoriasDisponibles = ['pestanas', 'cejas', 'depilacion'];
  const [activeTab, setActiveTab] = useState('pestanas');

  useEffect(() => {
    if (categoriasDisponibles.includes(categoria)) {
      setActiveTab(categoria);
    }
  }, [categoria]);

  const tabsContent = {
    pestanas: [
      { img: 'https://via.placeholder.com/300x200?text=Pestañas+1', label: 'Imagen 1 Pestañas' },
      { img: 'https://via.placeholder.com/300x200?text=Pestañas+2', label: 'Imagen 2 Pestañas' },
      { img: 'https://via.placeholder.com/300x200?text=Pestañas+3', label: 'Imagen 3 Pestañas' },
    ],
    cejas: [
      { img: 'https://via.placeholder.com/300x200?text=Cejas+1', label: 'Imagen 1 Cejas' },
      { img: 'https://via.placeholder.com/300x200?text=Cejas+2', label: 'Imagen 2 Cejas' },
      { img: 'https://via.placeholder.com/300x200?text=Cejas+3', label: 'Imagen 3 Cejas' },
    ],
    depilacion: [
      { img: 'https://via.placeholder.com/300x200?text=Depilación+1', label: 'Imagen 1 Depilación' },
      { img: 'https://via.placeholder.com/300x200?text=Depilación+2', label: 'Imagen 2 Depilación' },
      { img: 'https://via.placeholder.com/300x200?text=Depilación+3', label: 'Imagen 3 Depilación' },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto py-20 px-4">
      <div className="flex justify-center space-x-6 border-b-2 mb-8">
        {categoriasDisponibles.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 px-6 text-lg font-semibold transition-all duration-300 ${
              activeTab === tab
                ? 'border-b-4 border-[#d4af37] text-[#d4af37]'
                : 'text-gray-600 hover:text-[#d4af37]'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tabsContent[activeTab]?.map((image, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 duration-300"
          >
            <img
              src={image.img}
              alt={image.label}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-center text-lg font-semibold text-gray-700">{image.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Gallery = () => {
  const { categoria } = useParams();
  const categoriasDisponibles = ['pestanas', 'cejas', 'depilacion'];
  const [activeTab, setActiveTab] = useState('pestanas');

  useEffect(() => {
    if (categoriasDisponibles.includes(categoria)) {
      setActiveTab(categoria);
    }
  }, [categoria]);

  const tabsContent = {
    pestanas: [
      { img: 'https://via.placeholder.com/300x200?text=Pestañas+1', label: 'Imagen 1 Pestañas' },
      { img: 'https://via.placeholder.com/300x200?text=Pestañas+2', label: 'Imagen 2 Pestañas' },
      { img: 'https://via.placeholder.com/300x200?text=Pestañas+3', label: 'Imagen 3 Pestañas' },
    ],
    cejas: [
      { img: 'https://via.placeholder.com/300x200?text=Cejas+1', label: 'Imagen 1 Cejas' },
      { img: 'https://via.placeholder.com/300x200?text=Cejas+2', label: 'Imagen 2 Cejas' },
      { img: 'https://via.placeholder.com/300x200?text=Cejas+3', label: 'Imagen 3 Cejas' },
    ],
    depilacion: [
      { img: 'https://via.placeholder.com/300x200?text=Depilación+1', label: 'Imagen 1 Depilación' },
      { img: 'https://via.placeholder.com/300x200?text=Depilación+2', label: 'Imagen 2 Depilación' },
      { img: 'https://via.placeholder.com/300x200?text=Depilación+3', label: 'Imagen 3 Depilación' },
    ],
  };

  const titleMap = {
    pestanas: 'Galería de Pestañas',
    cejas: 'Galería de Cejas',
    depilacion: 'Galería de Depilación',
  };

  return (
    <>
      <Helmet>
        <title>{titleMap[activeTab]} | MyBeautyStudy</title>
        <meta
          name="description"
          content={`Mirá fotos reales de nuestros tratamientos de ${activeTab}. Conocé la calidad y detalle del trabajo profesional en MyBeautyStudy.`}
        />
        <meta
          name="keywords"
          content={`${activeTab}, galería, estética, belleza, MyBeautyStudy, resultados, imágenes`}
        />
      </Helmet>

      <div className="max-w-6xl mx-auto py-20 px-4">
        <div className="flex justify-center space-x-6 border-b-2 mb-8">
          {categoriasDisponibles.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 px-6 text-lg font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? 'border-b-4 border-[#d4af37] text-[#d4af37]'
                  : 'text-gray-600 hover:text-[#d4af37]'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tabsContent[activeTab]?.map((image, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 duration-300"
            >
              <img
                src={image.img}
                alt={image.label}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-center text-lg font-semibold text-gray-700">{image.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
