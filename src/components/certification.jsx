import { certifications } from '../data';

export default function Formacion({ theme }) {
  return (
    <section id="certificaciones" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className={`text-2xl md:text-3xl font-semibold ${theme.title}`}>Formación & Certificaciones</h2>
      <ul className="mt-6 grid gap-3 md:grid-cols-2">
        {certifications.map(c => (
          <li key={c} className={`rounded-xl px-4 py-3 ${theme.card}`}>{c}</li>
        ))}
      </ul>
    </section>
  );
}