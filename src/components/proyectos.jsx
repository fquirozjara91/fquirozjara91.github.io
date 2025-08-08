import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data';

export default function Proyectos({ theme, accent }) {
  return (
    <section id="proyectos" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className={`text-2xl md:text-3xl font-semibold ${theme.title} `}>Proyectos destacados</h2>
      <p className={`mt-2 ${theme.subtitle}`}>Selección de iniciativas recientes y de alto impacto.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {projects.map(p => (
          <motion.article key={p.title}
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.4 }}
            className={`rounded-2xl p-6 ${theme.card}`}>
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className={`text-lg md:text-xl font-medium font-mono ${theme.subtitle}`}>{p.title}</h3>
                <p className={`text-sm ${theme.paragraph}`}>{p.period} · {p.role}</p>
              </div>
            </div>
            <p className={`mt-3 text-sm leading-relaxed font-mono`}>{p.summary}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {p.tech.map(t => <li key={t} className={`text-xs px-2 py-1 rounded-full ${theme.chip}`}>{t}</li>)}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}