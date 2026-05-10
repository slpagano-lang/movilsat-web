import { useState, type FormEvent } from 'react';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const sectionRef = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contacto" className="section-padding bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-3 py-1 bg-accent-500/10 text-accent-500 text-sm font-semibold rounded-full mb-4">
            Contacto
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-navy-900 mb-4">
            Hablemos de tu proyecto
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Cotizá tu proyecto o contactanos por una emergencia. Respondemos en minutos.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3 reveal">
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy-900 mb-1.5">
                    Nombre
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-steel-500/40 focus:border-steel-500 transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-900 mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-steel-500/40 focus:border-steel-500 transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div className="mb-5">
                <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-1.5">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-steel-500/40 focus:border-steel-500 transition-all resize-none"
                  placeholder="Contanos sobre tu proyecto o necesidad..."
                />
              </div>
              <button
                type="submit"
                className="btn-accent w-full sm:w-auto"
                disabled={submitted}
              >
                {submitted ? (
                  'Mensaje enviado'
                ) : (
                  <>
                    Enviar mensaje
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2 reveal space-y-4">
            {/* 24/7 Emergency - highlighted */}
            <div className="p-5 bg-urgent-600/5 border-2 border-urgent-500/20 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-urgent-600/15 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-urgent-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 text-base">Emergencia 24/7</h3>
                  <p className="text-gray-500 text-xs">Respuesta garantizada &lt;30 min</p>
                </div>
              </div>
              <a
                href="tel:+5493511234567"
                className="flex items-center gap-2 text-urgent-600 font-bold text-lg hover:text-urgent-500 transition-colors"
              >
                <Phone className="w-5 h-5" />
                +54 9 351 123-4567
              </a>
            </div>

            {/* Regular phone */}
            <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-steel-600/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-steel-600" />
                </div>
                <h3 className="font-semibold text-navy-900 text-base">Teléfono de línea</h3>
              </div>
              <a
                href="tel:+543514321234"
                className="text-steel-600 font-semibold hover:text-steel-500 transition-colors"
              >
                +54 351 432-1234
              </a>
            </div>

            {/* Emails */}
            <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-steel-600/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-steel-600" />
                </div>
                <h3 className="font-semibold text-navy-900 text-base">Email</h3>
              </div>
              <div className="space-y-2">
                <a
                  href="mailto:ventas@movilsat.com"
                  className="block text-steel-600 text-sm font-medium hover:text-steel-500 transition-colors"
                >
                  ventas@movilsat.com
                </a>
                <a
                  href="mailto:soporte247@movilsat.com"
                  className="block text-urgent-600 text-sm font-medium hover:text-urgent-500 transition-colors"
                >
                  soporte247@movilsat.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-steel-600/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-steel-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 text-base">Ubicación</h3>
                  <p className="text-gray-500 text-sm">Córdoba, Argentina</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
