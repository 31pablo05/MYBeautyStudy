import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    reason: '',
    message: '',
  });

  const suggestedMessages = {
    turno: '¡Hola! Me gustaría pedir un turno para cejas o pestañas. ¿Qué disponibilidad tienen?',
    precios: '¡Hola! Quisiera consultar los precios de los servicios. ¿Podrían pasarme el listado?',
    curso: '¡Hola! Estoy interesada en hacer uno de sus cursos. ¿Podrían enviarme más información?',
  };

  useEffect(() => {
    if (form.reason && suggestedMessages[form.reason]) {
      setForm((prevForm) => ({
        ...prevForm,
        message: suggestedMessages[form.reason],
      }));
    }
  }, [form.reason]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.reason && suggestedMessages[form.reason]) {
      const whatsappMessage = `Hola, soy ${form.name} (${form.email}). ${suggestedMessages[form.reason]}`;
      const phoneNumber = '5492804034308';
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(url, '_blank');
    } else {
      alert('Por favor completá todos los campos antes de continuar.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Contacto | Diseño de cejas, pestañas y depilación láser en Trelew, Chubut</title>
        <meta
          name="description"
          content="Contáctanos para pedir turnos, consultar precios o información sobre cursos de diseño de cejas, pestañas y depilación láser en Trelew, Chubut."
        />
        <meta
          name="keywords"
          content="diseño de cejas, pestañas, depilación láser, Trelew, Chubut, turnos, precios, cursos"
        />
        <meta name="author" content="MyBeautyStudy" />
      </Helmet>

      <div className="container mx-auto px-4 py-16 md:py-32">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center mb-2 text-pink-600 mt-12"
        >
          Contáctanos
        </motion.h2>

        {/* LÍNEA DORADA */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '96px' }}
          transition={{ duration: 0.6 }}
          className="h-1 bg-[#d4af37] mx-auto rounded-full mb-8"
        />

        {/* FORMULARIO CON FONDO */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
          style={{
            backgroundImage: 'url(/assets/images/fondoform.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '2rem',
            borderRadius: '1rem',
          }}
        >
          <motion.form
            onSubmit={handleSubmit}
            className="w-full max-w-md space-y-4 bg-white bg-opacity-90 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.input
              type="text"
              name="name"
              placeholder="Tu nombre"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all"
              required
              whileFocus={{ scale: 1.02 }}
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Tu correo electrónico"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all"
              required
              whileFocus={{ scale: 1.02 }}
            />
            <motion.select
              name="reason"
              value={form.reason}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all"
              required
              whileFocus={{ scale: 1.02 }}
            >
              <option value="">Seleccioná el motivo de tu consulta</option>
              <option value="turno">Pedir un turno</option>
              <option value="precios">Consultar precios</option>
              <option value="curso">Información sobre cursos</option>
            </motion.select>
            <motion.textarea
              name="message"
              placeholder="Tu mensaje aparecerá automáticamente según el motivo"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all"
              rows="4"
              readOnly
              whileFocus={{ scale: 1.01 }}
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition-colors"
            >
              Enviar por WhatsApp
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </>
  );
};

export default Contact;
