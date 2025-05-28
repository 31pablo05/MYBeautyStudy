import React from "react";
import { useParams } from "react-router-dom";

const DetalleServicio = () => {
  const { servicioId } = useParams(); // Obtener el id del servicio desde la URL

  // Servicios actualizados
  const servicio = {
    "pestanas": {
      nombre: "Pestañas",
      descripcion: "Realzamos tu mirada con nuestros servicios especializados en extensión de pestañas.",
      detalles: "Ofrecemos diversas opciones de extensión para que elijas la que mejor se adapte a tu estilo.",
      precio: "$40"
    },
    "cejas": {
      nombre: "Cejas",
      descripcion: "Dale forma perfecta a tus cejas con nuestros servicios de diseño y depilación.",
      detalles: "Desde depilación con cera hasta diseño con hilo, realzamos tus cejas para un look natural.",
      precio: "$25"
    },
    "depilacion-laser": {
      nombre: "Depilación Láser",
      descripcion: "Deshazte del vello de manera permanente con nuestra depilación láser segura y eficaz.",
      detalles: "Nuestro tratamiento de depilación láser es rápido, eficiente y garantiza resultados duraderos.",
      precio: "$100"
    },
    "Tarjetas de regalo": {
      nombre: "gift-cards",
      descripcion: "Regalá belleza con nuestras tarjetas de regalo personalizadas.",
      detalles: "Nuestras gift cards son el regalo perfecto para cualquier ocasión, personalizables y válidas para todos nuestros servicios.",
      precio: "$50"
    }
  };

  const servicioSeleccionado = servicio[servicioId];

  if (!servicioSeleccionado) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-gray-800">Servicio no encontrado</h2>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">{servicioSeleccionado.nombre}</h2>
        <p className="text-lg text-gray-600 mb-6">{servicioSeleccionado.descripcion}</p>
        <p className="text-lg text-gray-600 mb-4">{servicioSeleccionado.detalles}</p>
        <p className="text-xl font-semibold text-gray-800">Precio: {servicioSeleccionado.precio}</p>
      </div>
    </section>
  );
};

export default DetalleServicio;
