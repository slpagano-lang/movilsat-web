import { Phone, Mail, MapPin, Clock, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-white/5">
      {/* Emergency banner */}
      <div className="bg-urgent-600/10 border-b border-urgent-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-urgent-600/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-urgent-400" />
              </div>
              <div>
                <p className="text-white font-display font-bold text-lg">
                  Emergencia? Estamos despiertos.
                </p>
                <p className="text-urgent-300 text-sm">Soporte 24/7 — 365 días</p>
              </div>
            </div>
            <a
              href="tel:+5493511234567"
              className="btn-urgent text-base"
            >
              <Phone className="w-5 h-5" />
              +54 9 351 123-4567
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-steel-600 flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">M</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-display font-bold text-base leading-tight">
                  Movilsat
                </span>
                <span className="text-steel-300 text-[10px] font-medium tracking-widest uppercase leading-none">
                  Comunicaciones
                </span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Soluciones integrales en tecnología y seguridad con atención personalizada 24/7.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Servicios</h4>
            <ul className="space-y-2.5">
              {['Redes y conectividad', 'Seguridad electrónica', 'Automatización', 'Distribución', 'Mantenimiento 24/7'].map(
                (item) => (
                  <li key={item}>
                    <a href="#servicios" className="text-gray-500 text-sm hover:text-steel-300 transition-colors">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Empresa</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Nosotros', href: '#nosotros' },
                { label: 'Proyectos', href: '#proyectos' },
                { label: 'Capacidades', href: '#capacidades' },
                { label: 'Contacto', href: '#contacto' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-gray-500 text-sm hover:text-steel-300 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+5493511234567"
                  className="flex items-center gap-2 text-urgent-400 text-sm font-semibold hover:text-urgent-300 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +54 9 351 123-4567
                </a>
              </li>
              <li>
                <a
                  href="mailto:ventas@movilsat.com"
                  className="flex items-center gap-2 text-gray-500 text-sm hover:text-steel-300 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  ventas@movilsat.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:soporte247@movilsat.com"
                  className="flex items-center gap-2 text-gray-500 text-sm hover:text-steel-300 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  soporte247@movilsat.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-500 text-sm">
                <MapPin className="w-4 h-4" />
                Córdoba, Argentina
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Movilsat Comunicaciones. Todos los derechos reservados.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-gray-500 text-sm hover:text-steel-300 transition-colors"
          >
            Volver arriba
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
