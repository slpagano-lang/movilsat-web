import { useCountUp } from '../hooks/useCountUp';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Briefcase, Users, Calendar, UsersRound } from 'lucide-react';

const stats = [
  { icon: Briefcase, end: 50, suffix: '+', label: 'Proyectos completados' },
  { icon: Users, end: 15, suffix: '+', label: 'Técnicos certificados' },
  { icon: Calendar, end: 20, suffix: '+', label: 'Años de experiencia' },
  { icon: UsersRound, end: 100, suffix: '+', label: 'Clientes activos' },
];

function StatCard({ icon: Icon, end, suffix, label }: { icon: typeof Briefcase; end: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(end, 2000, suffix);

  return (
    <div ref={ref} className="text-center group">
      <div className="w-14 h-14 mx-auto rounded-xl bg-steel-600/10 flex items-center justify-center mb-4 group-hover:bg-steel-600/20 transition-colors">
        <Icon className="w-7 h-7 text-steel-600" />
      </div>
      <div className="font-display font-bold text-4xl md:text-5xl text-navy-900 mb-2">
        {count}
      </div>
      <p className="text-gray-500 text-sm font-medium">{label}</p>
    </div>
  );
}

export default function Capabilities() {
  const sectionRef = useScrollReveal();

  return (
    <section id="capacidades" className="section-padding bg-gray-50" ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-3 py-1 bg-steel-600/10 text-steel-600 text-sm font-semibold rounded-full mb-4">
            Capacidades técnicas
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-navy-900 mb-4">
            Números que respaldan nuestra experiencia
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 reveal">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
