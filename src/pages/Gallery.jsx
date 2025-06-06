import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { Helmet } from 'react-helmet';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

const Gallery = () => {
  const { categoria } = useParams();
  const categoriasDisponibles = ['pestanas', 'cejas', 'depilacion'];
  const [activeTab, setActiveTab] = useState('pestanas');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    if (categoriasDisponibles.includes(categoria)) {
      setActiveTab(categoria);
    }
  }, [categoria]);

  const tabsContent = {
    pestanas: [
      { src: '/assets/images/pestañas/MYBeauty1.webp', title: 'Diseño de Pestañas 1' },
      { src: '/assets/images/pestañas/MYBeauty2.webp', title: 'Diseño de Pestañas 2' },
      { src: '/assets/images/pestañas/MYBeauty4.webp', title: 'Diseño de Pestañas 3' },
    ],
    cejas: [
      { src: '/assets/images/cejas/MYBeauty3.webp', title: 'Perfilado de Cejas 1' },
      { src: '/assets/images/cejas/MYBeauty5.webp', title: 'Perfilado de Cejas 2' },
      { src: '/assets/images/cejas/MYBeauty6.webp', title: 'Perfilado de Cejas 3' },
      { src: '/assets/images/cejas/MYBeauty7.webp', title: 'Perfilado de Cejas 4' },
    ],
    depilacion: [
      { src: '/assets/images/depilacion/depilacion.webp', title: 'Depilación Corporal 1' },
      { src: '/assets/images/depilacion/depilacionLaser.webp', title: 'Depilación Láser' },
      { src: '/assets/images/depilacion/maquina.webp', title: 'Equipamiento' },
    ],
  };

  const titleMap = {
    pestanas: 'Galería de Pestañas',
    cejas: 'Galería de Cejas',
    depilacion: 'Galería de Depilación',
  };

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setIsOpen(true);
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
        {/* Tabs */}
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

        {/* Galería */}
        <AnimatePresence mode="wait">
  <motion.div
    key={activeTab}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
  >
    {tabsContent[activeTab].map((image, index) => (
      <motion.div
        key={index}
        onClick={() => openLightbox(index)}
        className="cursor-pointer bg-white shadow-lg rounded-lg overflow-hidden"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
      >
        <img
          src={image.src}
          alt={image.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <p className="text-center text-lg font-semibold text-gray-700">
            {image.title}
          </p>
        </div>
      </motion.div>
    ))}
  </motion.div>
</AnimatePresence>

      </div>

      {/* Lightbox */}
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={selectedImageIndex}
        slides={tabsContent[activeTab]}
        plugins={[Captions, Thumbnails]}
        captions={{ showToggle: true }}
      />
    </>
  );
};

export default Gallery;
