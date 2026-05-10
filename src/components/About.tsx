import { useScrollReveal } from '../hooks/useScrollReveal';
import { Users, Clock, MessageCircle, Zap } from 'lucide-react';

const differentiators = [
  {
    icon: Users,
    title: 'Técnico dedicado',
    description: 'No un call center anónimo. Un profesional que conoce tu infraestructura y tu equipo.',
  },
  {
    icon: Clock,
    title: 'Respuesta <30 min',
    description: 'Garantizamos tiempo de respuesta inferior a 30 minutos, las 24 horas, los 365 días.',
  },
  {
    icon: MessageCircle,
    title: 'Contacto directo',
    description: 'Comunicación directa con tu técnico asignado. Sin sistemas de tickets, sin esperas.',
  },
  {
    icon: Zap,
    title: 'Soporte inmediato',
    description: 'Diagnóstico remoto en minutos. Si se necesita presencialidad, el técnico ya está en camino.',
  },
];

export default function About() {
  const sectionRef = useScrollReveal();

  return (
    <section id="nosotros" className="section-padding bg-navy-900 relative overflow-hidden" ref={sectionRef}>
      {/* Background effects */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />
      <div className="absolute top-0 right-0 w-96 h-96 bg-steel-600/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text + technician image */}
          <div className="reveal">
            <span className="inline-block px-3 py-1 bg-steel-600/15 text-steel-300 text-sm font-semibold rounded-full mb-6">
              Sobre nosotros
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-tight">
              Tecnología de punta con un enfoque{' '}
              <span className="text-steel-400">humano</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Somos una empresa con más de 20 años de experiencia, integrando tecnología de punta con un enfoque humano.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              A diferencia de otros integradores, aquí no perderás tiempo con sistemas de tickets anónimos. Tendrás un contacto directo disponible 24/7, porque sabemos que una avería no espera al horario comercial.
            </p>

            {/* Technician image */}
            <div className="relative rounded-xl overflow-hidden mb-6">
              <img
                src="https://images.unsplash.com/photo-1652565436975-5ac0c22fb3ee?auto=format&fit=crop&w=800&q=80"
                alt="Técnico de soporte atendiendo emergencia"
                className="w-full h-48 sm:h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-urgent-600/90 flex items-center justify-center backdrop-blur-sm">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Soporte 24/7 disponible</p>
                  <p className="text-steel-300 text-xs">Respuesta garantizada &lt;30 min</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-urgent-600/10 border border-urgent-500/20 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-urgent-600/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-urgent-400" />
              </div>
              <p className="text-urgent-300 text-sm font-medium">
                Una avería a las 3 AM se responde a las 3 AM. No a las 9 del lunes.
              </p>
            </div>
          </div>

          {/* Right: Differentiators */}
          <div className="grid sm:grid-cols-2 gap-4">
            {differentiators.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="reveal group p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
                  style={{ transitionDelay: `${i * 0.05}s` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-steel-600/15 flex items-center justify-center mb-3 group-hover:bg-steel-600/25 transition-colors">
                    <Icon className="w-5 h-5 text-steel-400" />
                  </div>
                  <h3 className="text-white font-semibold text-base mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
