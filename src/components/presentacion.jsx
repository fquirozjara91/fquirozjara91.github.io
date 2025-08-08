import { motion } from 'framer-motion';
import { Mail, Linkedin, Download, Moon, Sun, Shield } from 'lucide-react';
import foto from '../assets/1711240096772.jpeg';

export default function Presentacion({ theme, accent, dark, setDark }) {
  return (
    <section id="inicio" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      {/* <div className="grid items-center gap-10 md:grid-cols-2"> */}
      <div className="flex flex-row">
        <div className='basis-2/3'>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className={`text-3xl md:text-5xl font-bold leading-tight ${theme.title}`}>
            Felipe Ignacio Quiroz Jara
          </motion.h1>

          <p className={`mt-3 text-lg md:text-xl ${theme.subtitle}`} >
            Full-Stack Developer & Technical Lead
          </p>

          <p className={`mt-6 max-w-prose ${theme.text}`}>
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
               className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 ring-1 hover:ring-2"
               style={{ borderColor: accent, color: dark ? '#fff' : accent }}>
              <Linkedin size={18} /> LinkedIn
            </a>

            <a href="/CV-2025.pdf" target="_blank" rel="noopener" download
               className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 ring-1 hover:ring-2"
               style={{ borderColor: accent, color: dark ? '#fff' : accent }}>
              <Download size={18} /> Descargar CV (PDF)
            </a>
          </div>
        </div>

        <div className="basis-1/3">
          <div className="relative aspect-square w-56 md:w-72 rounded-full p-[2px]" style={{ background: accent }}>
            <div className={`h-full w-full rounded-full ${theme.card} grid place-items-center`}>
              <img src={foto}
                alt="Foto de Felipe Quiroz"
                className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-lg" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        
      </div>
    </section>
  );
}