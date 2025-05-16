// src/pages/Contact.jsx
import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    reason: '',
    message: '',
  });
  const [messageSent, setMessageSent] = useState(false);

  // Mensajes sugeridos según motivo
  const suggestedMessages = {
    turno: '¡Hola! Me gustaría pedir un turno para cejas o pestañas. ¿Qué disponibilidad tienen?',
    precios: '¡Hola! Quisiera consultar los precios de los servicios. ¿Podrían pasarme el listado?',
    curso: '¡Hola! Estoy interesada en hacer uno de sus cursos. ¿Podrían enviarme más información?',
  };

  // Actualiza el mensaje automáticamente según el motivo
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
    // Aquí podrías integrar EmailJS u otro sistema para enviar el formulario
    setMessageSent(true);
    setForm({ name: '', email: '', reason: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-32">
      <h2 className="text-3xl font-bold text-center mb-6 text-pink-600">Contáctanos</h2>

      <div className="flex flex-col items-center">
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
            placeholder="Escribí tu mensaje"
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            rows="4"
            required
          />

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition-colors"
          >
            Enviar mensaje
          </button>
        </form>

        {messageSent && (
          <div className="mt-4 text-center text-green-600">
            <p>¡Gracias! Tu mensaje fue enviado con éxito. Te responderemos lo antes posible.</p>
          </div>
        )}

        {form.reason && (
          <div className="mt-8 text-center">
            <p className="text-lg font-semibold mb-2">¿Preferís hablar por WhatsApp?</p>
            <a
              href={`https://wa.me/5492804034308?text=${encodeURIComponent(suggestedMessages[form.reason])}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md transition-colors"
            >
              Chatear por WhatsApp
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
