import { useRef, useEffect, useState } from 'react';
import { accent as defaultAccent } from '../data';

export default function Formulario({ theme, accent = defaultAccent }) {
  const [canSend, setCanSend] = useState(false);
  const captchaRef = useRef(null);

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
    <section id="contacto" className="mx-auto max-w-6xl px-4 py-16">
      <div className={`rounded-3xl p-8 md:p-10 ${theme.card}`}>
        <h2 className="text-2xl md:text-3xl font-semibold">Hablemos</h2>
        <p className={`mt-2 ${theme.paragraph}`}>¿Tienes un proyecto o una propuesta? Completa el formulario y te respondo a la brevedad.</p>

        <form className="mt-6 grid gap-4 md:grid-cols-2" method="POST" action="https://formspree.io/f/your-id">
          <input type="text" name="name" placeholder="Nombre" className="rounded-xl px-4 py-3 ring-1 ring-black/10 bg-transparent" required />
          <input type="email" name="email" placeholder="Correo" className="rounded-xl px-4 py-3 ring-1 ring-black/10 bg-transparent" required />
          <input type="text" name="subject" placeholder="Asunto" className="rounded-xl px-4 py-3 ring-1 ring-black/10 bg-transparent md:col-span-2" />
          <textarea name="message" placeholder="Mensaje" className="min-h-[140px] rounded-xl px-4 py-3 ring-1 ring-black/10 bg-transparent md:col-span-2" required />

          <div className="md:col-span-2">
            <div ref={captchaRef} className="h-captcha" />
          </div>

          <div className="md:col-span-2">
            <button type="submit" disabled={!canSend}
              className="w-full md:w-auto inline-flex items-center gap-2 rounded-2xl px-5 py-3"
              style={{ background: accent, color: 'white', opacity: canSend ? 1 : 0.6 }}>
              Enviar
            </button>
          </div>
        </form>
      </div>

      <footer className={`mx-auto max-w-6xl px-4 py-10 text-sm ${theme.paragraph}`}>
        © {new Date().getFullYear()} Felipe Quiroz · Construido con React + Tailwind
      </footer>
    </section>
  );
}