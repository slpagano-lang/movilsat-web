import { ArrowRight, Phone, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image - server rack */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-navy-900/85" />
        {/* Gradient overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(135deg, rgba(10,37,64,0.95) 0%, rgba(10,37,64,0.7) 50%, rgba(10,37,64,0.85) 100%)',
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-urgent-600/15 border border-urgent-500/30 rounded-full mb-8 animate-fade-in">
            <Shield className="w-4 h-4 text-urgent-400" />
            <span className="text-urgent-400 text-sm font-medium">
              Guardia de mantenimiento las 24 hs todo el año
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight mb-6 animate-fade-in-up">
            Soluciones integrales en{' '}
            <span className="text-steel-400">tecnología</span> y{' '}
            <span className="text-steel-400">seguridad</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            Desplegamos, mantenemos e integramos redes de datos, fibra óptica, seguridad electrónica y automatización.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a href="#contacto" className="btn-accent text-base">
              Cotizar proyecto
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="tel:+5493511234567"
              className="btn-urgent text-base"
            >
              <Phone className="w-5 h-5" />
              Emergencia 24/7 — Llámanos ahora
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-14 flex flex-wrap gap-8 items-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-urgent-500" />
              <span className="text-gray-400 text-sm">Respuesta &lt;30 min</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-steel-400" />
              <span className="text-gray-400 text-sm">+20 años de experiencia</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent-400" />
              <span className="text-gray-400 text-sm">+100 clientes activos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '1s' }}>
        <span className="text-gray-500 text-xs uppercase tracking-widest">Explorar</span>
        <div className="w-5 h-8 border-2 border-gray-600 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-gray-500 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
