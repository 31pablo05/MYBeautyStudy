import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import MapaUbicacion from '../components/contact/MapaUbicacion';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    reason: '',
    message: '',
  });
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState('');

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.reason]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isFormValid = form.name && validateEmail(form.email) && form.reason;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    setSending(true);
    setFeedback('Redirigiendo a WhatsApp...');
    setTimeout(() => {
      const whatsappMessage = `Hola, soy ${form.name} (${form.email}). ${suggestedMessages[form.reason]}`;
      const phoneNumber = '5492804034308';
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(url, '_blank');
      setSending(false);
      setFeedback('');
    }, 1200);
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
        {/* SEO: Open Graph para compartir en redes */}
        <meta property="og:title" content="Contacto | Diseño de cejas, pestañas y depilación láser en Trelew, Chubut" />
        <meta property="og:description" content="Contáctanos para pedir turnos, consultar precios o información sobre cursos de diseño de cejas, pestañas y depilación láser en Trelew, Chubut." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://my-beauty-study.vercel.app/contact" />
        <meta property="og:image" content="/assets/images/logotipo.webp" />
        {/* SEO: Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contacto | Diseño de cejas, pestañas y depilación láser en Trelew, Chubut" />
        <meta name="twitter:description" content="Contáctanos para pedir turnos, consultar precios o información sobre cursos de diseño de cejas, pestañas y depilación láser en Trelew, Chubut." />
        <meta name="twitter:image" content="/assets/images/logotipo.webp" />
        {/* SEO: Canonical */}
        <link rel="canonical" href="https://my-beauty-study.vercel.app/contact" />
        {/* SEO: Local Business (JSON-LD) */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BeautySalon",
            "name": "MyBeautyStudy",
            "image": "https://my-beauty-study.vercel.app/assets/images/logotipo.webp",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rivadavia 519, 1er piso",
              "addressLocality": "Trelew",
              "addressRegion": "Chubut",
              "addressCountry": "AR"
            },
            "url": "https://my-beauty-study.vercel.app/contact",
            "telephone": "+54 9 2804 034308"
          }
        `}</script>
      </Helmet>
      <main id="main-content" role="main">
        {/* Fondo de imagen global */}
        <div
          className="fixed inset-0 z-0 w-full h-full bg-black/30"
          style={{
            backgroundImage: 'url(/assets/images/fondoform.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(1px)',
          }}
          aria-hidden="true"
        />
        <motion.div
          className="container mx-auto px-4 py-16 md:py-32 relative z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-extrabold text-center mb-2 text-[#b76e79] mt-12 drop-shadow-gold"
            id="contacto-titulo"
          >
            Contáctanos
          </motion.h1>
          {/* LÍNEA DORADA ANIMADA */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '96px' }}
            transition={{ duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 mx-auto rounded-full mb-8"
          />
          {/* FORMULARIO SIN FONDO DE IMAGEN */}
          <section aria-labelledby="contacto-titulo">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <motion.form
                onSubmit={handleSubmit}
                className="w-full max-w-md space-y-4 bg-white/90 p-6 rounded-xl shadow-gold animate-fade-in-up"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                aria-label="Formulario de contacto para turnos, precios o cursos"
              >
                <motion.input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] shadow-sm transition-all"
                  required
                  whileFocus={{ scale: 1.02 }}
                  autoComplete="name"
                />
                <motion.input
                  type="email"
                  name="email"
                  placeholder="Tu correo electrónico"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] shadow-sm transition-all"
                  required
                  whileFocus={{ scale: 1.02 }}
                  autoComplete="email"
                />
                <motion.select
                  name="reason"
                  value={form.reason}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] shadow-sm transition-all"
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
                  className="w-full bg-gradient-to-r from-pink-500 to-yellow-400 text-white py-2 rounded-md font-bold shadow-gold hover:from-pink-600 hover:to-yellow-500 transition-colors animate-gold-glow focus:outline-none focus:ring-4 focus:ring-yellow-200"
                  disabled={!isFormValid || sending}
                  aria-disabled={!isFormValid || sending}
                >
                  {sending ? 'Enviando...' : 'Enviar por WhatsApp'}
                </motion.button>
                {feedback && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-yellow-700 font-semibold mt-2 animate-fade-in"
                  >
                    {feedback}
                  </motion.p>
                )}
              </motion.form>
            </motion.div>
          </section>
          {/* Mapa de ubicación debajo del formulario */}
          <section aria-label="Mapa de ubicación del local">
            <div className="mt-12 flex justify-center">
              <MapaUbicacion />
            </div>
          </section>
        </motion.div>
      </main>
    </>
  );
};

export default Contact;
