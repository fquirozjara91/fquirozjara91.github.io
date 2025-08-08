import { useState, useMemo, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Download, Moon, Sun, ExternalLink, Code2, Shield } from 'lucide-react'
import foto from './assets/1711240096772.jpeg'

const projects = [
  { title: 'Engine SobreTasa – Control de Cambio III', period: 'Jul 2024 – Jun 2025', role: 'Líder Técnico / Full Stack',
    summary: 'Soporte, análisis y arquitectura de datos; vistas multi‑perfil y servicios REST para cálculo de Sobretasa 7BIS. Despliegues CI/CD en Bamboo y TeamCity.',
    tech: ['AngularJS','Java','Spring Boot','Spring Batch','JUnit','Oracle','Bamboo','TeamCity'] },
  { title: 'Reevalúo Agrícola SII – SEPAG', period: 'May 2023 – Abr 2024', role: 'Líder Técnico / Full Stack',
    summary: 'Formulario web de gestión de muestras de suelos. Diseño de modelo de datos, vistas multi‑perfil y backend REST.',
    tech: ['AngularJS','Java','Spring Boot','JUnit','Bamboo','SQL'] },
  { title: 'Inicio de Actividades – SII', period: 'Oct 2022 – May 2023', role: 'Full Stack',
    summary: 'Diseño de microservicios con Swagger y desarrollo frontend/back. CI/CD con Jenkins y Docker.',
    tech: ['Java 11','Spring Boot','REST','WSDL','Docker','Jenkins','VueJS','Oracle 12'] },
  { title: 'SENCE – Valor Hora Imponible MiPyme', period: 'Ene 2024 – Feb 2024', role: 'Backend',
    summary: 'Ajustes de lógica de cálculo y eficiencia de código.', tech: ['Java','JSP','PL/SQL'] },
  { title: 'Engine SobreTasa – SII', period: 'Abr 2022 – Oct 2022', role: 'Full Stack',
    summary: 'Procesos batch y servicios REST para cálculo de sobretasa; análisis y modelado de BD.', tech: ['Java','Spring','Spring Batch','AngularJS','Oracle'] },
  { title: 'BUC – Sodimac (GCP)', period: 'Ago 2019 – Sep 2019', role: 'Full Stack',
    summary: 'Unificación regional de base de clientes. Arquitectura, servicios REST y despliegues en Docker.', tech: ['GCP','TypeScript','Docker','PostgreSQL'] },
]

const stack = [
  { level: 'Avanzado (4+ años)', items: ['AngularJS','Java','JavaScript','Spring Boot','Spring Batch','HTML/CSS','Bootstrap','APIs REST','Unix','Oracle (PL/SQL)','Material UI'] },
  { level: 'Intermedio (1–3 años)', items: ['Angular','JSP','Docker','Kubernetes','Jenkins','Ionic'] },
  { level: 'Básico (<1 año)', items: ['VueJS','React','GCP','Azure','Python','C++','Ruby','Spark','Scala'] },
]

const certifications = [
  'Scrum Foundation (SFPC) – 2021','Scrum Master Certified (SMC) – 2021','DevOps con Docker/Jenkins/K8s/Git/GitFlow CI/CD – 2023',
  'OWASP API Security – 2024','Azure Fundamentals AZ‑900 – 2024','Spark y Scala en Databricks – 2024','Spring Boot – 2024',
]

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [canSend, setCanSend] = useState(false);
  const captchaRef = useRef(null);
  const accent = '#0a192f'

  const theme = useMemo(() => ({
    page: dark ? 'bg-[#0b1020] text-zinc-100' : 'bg-zinc-50 text-zinc-900',
    card: dark ? 'bg-zinc-900/60 ring-1 ring-white/10' : 'bg-white ring-1 ring-black/5',
    muted: dark ? 'text-zinc-400' : 'text-zinc-600',
    chip: dark ? 'bg-zinc-800' : 'bg-zinc-100',
    link: dark ? 'text-zinc-200 hover:text-white' : 'text-zinc-800 hover:text-black',
    btn: dark ? "bg-accent text-white hover:bg-accent/90" : "bg-accent text-black hover:bg-accent/90"
  }), [dark])

  useEffect(() => {
    const tryInit = () => {
      if (window.hcaptcha && captchaRef.current) {
        window.hcaptcha.render(captchaRef.current, {
          sitekey: import.meta.env.VITE_HCAPTCHA_SITE_KEY,
          callback: () => setCanSend(true),
          'error-callback': () => setCanSend(false),
          'expired-callback': () => setCanSend(false),
        });
      } else {
        setTimeout(tryInit, 250);
      }
    };
    tryInit();
  }, []);

  return (
    <div className={`${theme.page} min-h-screen transition-colors`}>
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/5">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#inicio" className="font-semibold tracking-wide" style={{ color: accent }}>felipequiroz.dev</a>
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

      <section id="inicio" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold leading-tight">Felipe Ignacio Quiroz Jara</motion.h1>
            <p className="mt-3 text-lg md:text-xl" style={{ borderColor: accent, color: dark ? '#fff' : accent }}>Full‑Stack Developer & Technical Lead</p>
            <p className={`mt-6 max-w-prose ${theme.muted}`}>
              Ingeniero Informático con más de 5 años construyendo soluciones para el sector público y privado. Especialista en
              aplicaciones web/móviles, integraciones API (REST/SOAP), procesos batch y despliegues CI/CD.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:Felipe.quirozj@hotmail.com"
                 className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 ring-1 ring-white/10 hover:scale-[1.01]"
                 style={{ background: accent, color: 'white' }}>
                 <Mail size={18} /> Contacto directo
              </a>
              <a href="https://www.linkedin.com/in/felipe-quiroz-jara-06a2821b6/" target="_blank"
                 className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 ring-1 hover:ring-2`}
                 style={{ borderColor: accent, color: dark ? '#fff' : accent }}>
                 <Linkedin size={18} /> LinkedIn
              </a>
              <a href="/CV-2025.pdf" target="_blank" rel="noopener" download
                 className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 ring-1 hover:ring-2"
                 style={{ borderColor: accent, color: dark ? '#fff' : accent }}>
                 <Download size={18} /> Descargar CV (PDF)
              </a>
            </div>
            <div className={`mt-4 flex items-center gap-2 text-xs ${theme.muted}`}>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative aspect-square w-56 md:w-72 rounded-full p-[2px]" style={{ background: accent }}>
              <div className={`h-full w-full rounded-full ${theme.card} grid place-items-center`}>
                <img src={foto} alt="Foto de Felipe Quiroz" className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-lg"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="proyectos" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Proyectos destacados</h2>
        <p className={`mt-2 ${theme.muted}`}>Selección de iniciativas recientes y de alto impacto.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map(p => (
            <motion.article key={p.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
              className={`rounded-2xl p-6 ${theme.card}`}>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg md:text-xl font-medium">{p.title}</h3>
                  <p className={`text-sm ${theme.muted}`}>{p.period} · {p.role}</p>
                </div>
                <a href="#" className={`text-xs inline-flex items-center gap-1 ${theme.link}`}>
                  Ver más <ExternalLink size={14} />
                </a>
              </div>
              <p className="mt-3 text-sm leading-relaxed">{p.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tech.map(t => <li key={t} className={`text-xs px-2 py-1 rounded-full ${theme.chip}`}>{t}</li>)}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="stack" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Stack tecnológico</h2>
        <p className={`mt-2 ${theme.muted}`}>Principales tecnologías por nivel de dominio.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {stack.map(s => (
            <div key={s.level} className={`rounded-2xl p-6 ${theme.card}`}>
              <h3 className="font-medium">{s.level}</h3>
              <ul className="mt-4 grid grid-cols-1 gap-2 text-sm">
                {s.items.map(i => <li key={i} className={`px-3 py-1.5 rounded-lg ${theme.chip}`}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="certificaciones" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Formación & Certificaciones</h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {certifications.map(c => <li key={c} className={`rounded-xl px-4 py-3 ${theme.card}`}>{c}</li>)}
        </ul>
      </section>

      <section id="contacto" className="mx-auto max-w-6xl px-4 py-16">
        <div className={`rounded-3xl p-8 md:p-10 ${theme.card}`}>
          <h2 className="text-2xl md:text-3xl font-semibold">Hablemos</h2>
          <p className={`mt-2 ${theme.muted}`}>¿Tienes un proyecto o una propuesta? Completa el formulario y te respondo a la brevedad.</p>
          <form className="mt-6 grid gap-4 md:grid-cols-2" method="POST" action="https://formspree.io/f/mjkoplwl">
            <input type="text" name="name" placeholder="Nombre" className="rounded-xl px-4 py-3 ring-1 ring-black/10 bg-transparent" required />
            <input type="email" name="email" placeholder="Correo" className="rounded-xl px-4 py-3 ring-1 ring-black/10 bg-transparent" required />
            <input type="text" name="subject" placeholder="Asunto" className="rounded-xl px-4 py-3 ring-1 ring-black/10 bg-transparent md:col-span-2" />
            <textarea name="message" placeholder="Mensaje" className="min-h-[140px] rounded-xl px-4 py-3 ring-1 ring-black/10 bg-transparent md:col-span-2" required />
            <div className="md:col-span-2">
              <div ref={captchaRef} className="h-captcha" />
            </div>
            <div className="md:col-span-2">
              <button type="submit" disabled={!canSend} className="w-full md:w-auto inline-flex items-center gap-2 rounded-2xl px-5 py-3" style={{ background: accent, color: 'white' }}>
                Enviar
              </button>
            </div>
          </form>
        </div>
        <footer className={`mx-auto max-w-6xl px-4 py-10 text-sm ${theme.muted}`}>
          © {new Date().getFullYear()} Felipe Quiroz · Construido con React + Tailwind
        </footer>
      </section>
    </div>
  )
}
