export default function Educacion({ theme }) {
  return (
    <section id="educacion" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className={`text-2xl md:text-3xl font-semibold ${theme.title}`}>Educación</h2>
      <div className={`mt-6 rounded-2xl p-6 ${theme.card}`}>
        <h3 className={`text-lg md:text-xl font-medium font-mono ${theme.subtitle}`}>Ingeniería en Informática</h3>
        <p className={`text-sm ${theme.paragraph}`}>Universidad Tecnológica de Chile INACAP · 2018</p>
      </div>
    </section>
  );
}
