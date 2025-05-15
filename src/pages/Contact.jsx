// src/pages/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes integrar la lógica para enviar el formulario, como con EmailJS o un servidor
    setMessageSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-6">Contáctanos</h2>
      <div className="flex flex-col items-center">
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
          <div className="space-y-2">
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
              placeholder="Tu correo"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
            <textarea
              name="message"
              placeholder="Tu mensaje"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              rows="4"
              required
            />
          </div>
          <button type="submit" className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600">
            Enviar mensaje
          </button>
        </form>

        {messageSent && (
          <div className="mt-4 text-center text-green-500">
            <p>¡Tu mensaje ha sido enviado! Nos pondremos en contacto pronto.</p>
          </div>
        )}

        <div className="mt-8 text-center">
          <p className="text-lg font-semibold">O contáctanos por WhatsApp</p>
          <a
            href="https://wa.me/+5491123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md"
          >
            Chatear por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
