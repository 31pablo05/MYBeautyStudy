import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

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

      <div className="container mx-auto px-4 py-32">
        <h2 className="text-3xl font-bold text-center mb-6 text-pink-600">Contáctanos</h2>
<div
  className="flex flex-col items-center bg-cover bg-center rounded-xl p-6 shadow-lg"
  style={{
    backgroundImage: 'url(/assets/images/fondoform.PNG)',
  }}
>

          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Tu correo electrónico"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />

            <select
              name="reason"
              value={form.reason}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Seleccioná el motivo de tu consulta</option>
              <option value="turno">Pedir un turno</option>
              <option value="precios">Consultar precios</option>
              <option value="curso">Información sobre cursos</option>
            </select>

            <textarea
              name="message"
              placeholder="Tu mensaje aparecerá automáticamente según el motivo"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              rows="4"
              readOnly
            />

            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition-colors"
            >
              Enviar por WhatsApp
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
