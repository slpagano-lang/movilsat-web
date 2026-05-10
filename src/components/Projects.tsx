import { Building2, Factory, CheckCircle2, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
  {
    icon: Factory,
    title: 'Planta industrial — Red y seguridad unificadas',
    client: 'Empresa líder del sector alimentario',
    image: 'https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?auto=format&fit=crop&w=800&q=80',
    challenge:
      'La planta contaba con redes segmentadas sin conexión entre sí, cámaras analógicas sin monitoreo centralizado y tiempos de respuesta ante fallas superiores a 4 horas.',
    solution:
      'Desplegamos una red backbone de fibra óptica de 10 Gbps interconectando los 5 edificios. Migramos a videovigilancia IP con 120 cámaras y central de monitoreo. Implementamos un sistema de control de accesos biométrico en todas las entradas.',
    result:
      'Reducción del 85% en incidentes de seguridad. Tiempo de respuesta a fallas de red: de 4 horas a 15 minutos. Monitoreo 24/7 con técnico dedicado.',
    tags: ['Fibra óptica', 'Videovigilancia IP', 'Control de accesos', 'Mantenimiento 24/7'],
  },
  {
    icon: Building2,
    title: 'Torre corporativa — Infraestructura de misión crítica',
    client: 'Corporativo financiero — 12 pisos',
    image: 'https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?auto=format&fit=crop&w=800&q=80',
    challenge:
      'Edificio de 12 pisos con infraestructura obsoleta, sin redundancia en el data center y sin sistema de seguridad integrado. Necesitaban operar sin interrupciones.',
    solution:
      'Diseñamos e implementamos un data center con redundancia N+1, cableado estructurado Cat6A en toda la torre, sistema de videovigilancia con 200 cámaras y control de accesos por piso con credenciales NFC.',
    result:
      'Uptime del 99.98% en el primer año. Incidentes de seguridad reducidos un 92%. Soporte técnico con respuesta en menos de 20 minutos, 24/7.',
    tags: ['Data center', 'Cableado estructurado', 'Videovigilancia', 'Control de accesos NFC'],
  },
];

export default function Projects() {
  const sectionRef = useScrollReveal();

  return (
    <section id="proyectos" className="section-padding bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-3 py-1 bg-accent-500/10 text-accent-500 text-sm font-semibold rounded-full mb-4">
            Casos de éxito
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-navy-900 mb-4">
            Proyectos que hablan por nosotros
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Cada proyecto es un desafío único. Así lo resolvemos.
          </p>
        </div>

        {/* Project cards */}
        <div className="space-y-8">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className="reveal card-hover bg-gray-50 rounded-2xl overflow-hidden border border-gray-100"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Left: Image */}
                  <div className="relative min-h-[280px] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/50 to-navy-900/30" />
                    <div className="relative h-full p-8 lg:p-12 flex flex-col justify-between">
                      <div>
                        <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="font-display font-bold text-2xl text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-steel-300 text-sm">{project.client}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="p-8 lg:p-12 space-y-5">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                        Desafío
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-steel-600 mb-2">
                        Solución
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-urgent-600 mb-2">
                        Resultado
                      </h4>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-urgent-500 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700 text-sm leading-relaxed font-medium">
                          {project.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 reveal">
          <a
            href="#contacto"
            className="btn-primary text-base"
          >
            Tu proyecto puede ser el próximo
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
