import { useMemo, useState } from 'react';
import Presentacion from './components/presentacion.jsx';
import Proyectos from './components/proyectos.jsx';
import Stack from './components/stack.jsx';
import Formacion from './components/certification.jsx';
import Formulario from './components/formulario.jsx';
import { Moon, Sun } from 'lucide-react'
import { accent } from './data';

export default function Portfolio() {
  const [dark, setDark] = useState(true);

  const theme = useMemo(() => ({
    page: dark ? 'bg-[#0b1020] text-zinc-100' : 'bg-zinc-50 text-zinc-900',
    card: dark ? 'bg-zinc-900/60 ring-1 ring-white/10' : 'bg-white ring-1 ring-black/5',
    paragraph: dark ? 'text-zinc-400' : 'text-zinc-600',
    // chip: dark ? 'bg-zinc-800' : 'bg-zinc-100',
    chip: dark ? 'bg-[#0a192f] text-white' : 'bg-[#0a192f] text-white',
    link: dark ? 'text-zinc-200 hover:text-white' : 'text-zinc-800 hover:text-black',
    checkmark: dark ? 'list-image-[url(./assets/checkmark.svg)]' : 'list-image-[url(./assets/checkmark.svg)]',
    title: dark ? 'text-sky-600/100 font-merriweather' : 'font-merriweather text-[#0a192f]',
    subtitle: dark ? 'text-sky-600/75  ' : 'text-[#0a192f]',
    text:  dark ? 'text-sky-600/40 font-openSans'   : 'font-openSans text-zinc-800',
  }), [dark]);

  return (
    <div className={`${theme.page} min-h-screen transition-colors`}>
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/5">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#inicio" className="font-semibold tracking-wide" style={{ color : dark ? 'text-sky-600/100' : 'text-[#0a192f]' }}>
            felipequiroz.dev
          </a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a className={theme.link} href="#proyectos">Proyectos</a>
            <a className={theme.link} href="#stack">Stack</a>
            <a className={theme.link} href="#certificaciones">Certificaciones</a>
            <a className={theme.link} href="#contacto">Contacto</a>
          </nav>
          <button aria-label="Cambiar tema" onClick={() => setDark(v => !v)}
            className="inline-flex items-center gap-2 rounded-2xl px-3 py-2 ring-1 hover:opacity-90"
            style={{ background: dark ? '#0a192f' : 'white', color: dark ? 'white' : '#0a192f', borderColor: '#0a192f' }}>
            {dark ? <Sun size={18} /> : <Moon size={18} />}
            <span className="text-xs">{dark ? 'Claro' : 'Oscuro'}</span>
          </button>
        </div>
      </header>

      <Presentacion theme={theme} accent={accent} dark={dark} setDark={setDark} />
      <Proyectos theme={theme} accent={accent}/>
      <Stack theme={theme} />
      <Formacion theme={theme} />
      <Formulario theme={theme} accent={accent} />
    </div>
  );
}