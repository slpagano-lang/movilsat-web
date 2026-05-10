import {
  Network,
  ShieldCheck,
  Cpu,
  Package,
  Headphones,
  Cable,
  Wifi,
  Server,
  Camera,
  Lock,
  Bell,
  Monitor,
  Settings,
  Radio,
  CircuitBoard,
  ShoppingCart,
  Wrench,
  Clock,
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const services = [
  {
    title: 'Redes y conectividad',
    description:
      'Diseñamos, implementamos y mantenemos infraestructuras de red de alta performance para empresas de cualquier escala.',
    icon: Network,
    accent: 'steel',
    items: [
      { label: 'Fibra óptica y FTTH', icon: Cable },
      { label: 'Cableado estructurado', icon: Network },
      { label: 'Redes inalámbricas', icon: Wifi },
      { label: 'Data centers', icon: Server },
    ],
  },
  {
    title: 'Seguridad electrónica',
    description:
      'Protege tu infraestructura con sistemas de videovigilancia, control de accesos y monitoreo centralizado las 24 horas.',
    icon: ShieldCheck,
    accent: 'accent',
    items: [
      { label: 'Videovigilancia IP', icon: Camera },
      { label: 'Control de accesos', icon: Lock },
      { label: 'Alarmas', icon: Bell },
      { label: 'Centrales de monitoreo', icon: Monitor },
    ],
  },
  {
    title: 'Automatización e Industria 4.0',
    description:
      'Moderniza tus procesos productivos con control industrial, redes de planta y soluciones IoT a medida.',
    icon: Cpu,
    accent: 'steel',
    items: [
      { label: 'Control de procesos', icon: Settings },
      { label: 'Redes para plantas', icon: Radio },
      { label: 'IoT industrial', icon: CircuitBoard },
    ],
  },
  {
    title: 'Distribución de equipos',
    description:
      'Venta y distribución de las marcas líderes del mercado, con soporte técnico especializado y garantía.',
    icon: Package,
    accent: 'accent',
    items: [
      { label: 'Marcas líderes (3M, Furukawa, Hikvision...)', icon: ShoppingCart },
      { label: 'Soporte técnico', icon: Wrench },
    ],
  },
  {
    title: 'Mantenimiento y atención 24/7',
    description:
      'Un técnico asignado a tu empresa. Respuesta garantizada en menos de 30 minutos. Soporte remoto y presencial.',
    icon: Headphones,
    accent: 'urgent',
    highlight: true,
    items: [
      { label: 'Técnico dedicado', icon: Headphones },
      { label: 'Respuesta <30 min', icon: Clock },
      { label: 'Soporte remoto y presencial', icon: Wrench },
    ],
  },
];

const accentMap: Record<string, { bg: string; icon: string; border: string; badge: string }> = {
  steel: {
    bg: 'bg-steel-600/10',
    icon: 'text-steel-400',
    border: 'border-steel-600/20',
    badge: 'bg-steel-600/15 text-steel-300',
  },
  accent: {
    bg: 'bg-accent-500/10',
    icon: 'text-accent-400',
    border: 'border-accent-500/20',
    badge: 'bg-accent-500/15 text-accent-300',
  },
  urgent: {
    bg: 'bg-urgent-600/10',
    icon: 'text-urgent-400',
    border: 'border-urgent-500/30',
    badge: 'bg-urgent-600/15 text-urgent-400',
  },
};

export default function Services() {
  const sectionRef = useScrollReveal();

  return (
    <section id="servicios" className="section-padding bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-3 py-1 bg-steel-600/10 text-steel-600 text-sm font-semibold rounded-full mb-4">
            Nuestros servicios
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-navy-900 mb-4">
            Soluciones completas para tu infraestructura
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Desde el diseño hasta el mantenimiento continuo, cubrimos todo el ciclo de vida de tus sistemas de tecnología y seguridad.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const colors = accentMap[service.accent];
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className={`reveal card-hover group relative bg-white rounded-2xl p-6 border ${
                  service.highlight
                    ? 'border-urgent-500/30 ring-2 ring-urgent-500/20 lg:col-span-2 md:col-span-2 lg:col-span-1'
                    : 'border-gray-100'
                }`}
              >
                {service.highlight && (
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-urgent-600 text-white text-xs font-bold rounded-full">
                    Destacado
                  </div>
                )}

                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-5`}>
                  <Icon className={`w-6 h-6 ${colors.icon}`} />
                </div>

                <h3 className="font-display font-semibold text-xl text-navy-900 mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                <ul className="space-y-2.5">
                  {service.items.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <li key={item.label} className="flex items-center gap-3 text-sm text-gray-600">
                        <ItemIcon className={`w-4 h-4 ${colors.icon} flex-shrink-0`} />
                        {item.label}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
