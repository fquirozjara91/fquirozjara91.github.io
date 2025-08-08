import { stack } from '../data';

export default function Stack({ theme }) {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className={`text-2xl md:text-3xl font-semibold ${theme.title}`}>Stack tecnológico</h2>
      <p className={`mt-2 ${theme.subtitle}`}>Principales tecnologías por nivel de dominio.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {stack.map(s => (
          <div key={s.level} className={`rounded-2xl p-6 ${theme.card}`}>
            <h3 className={`${theme.subtitle} text-center font-bold font-mono`}>{s.level}</h3>
            <ul className="mt-4 grid grid-cols-1 gap-2 text-sm list-inside">
              {/* {s.items.map(i => <li key={i} className={`px-3 py-1.5 rounded-lg  ${theme.chip}`}>{i}</li>)} */}
              {s.items.map(i => <li key={i} className={`list-image-[url(./assets/checkmark.svg)] `}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}