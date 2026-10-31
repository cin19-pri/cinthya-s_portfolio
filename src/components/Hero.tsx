import type { MouseEvent } from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { profile } from '@/data/portfolio';

async function downloadCv(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
  try {
    const response = await fetch(profile.cvSrc);
    if (!response.ok) throw new Error(`CV request failed: ${response.status}`);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = profile.cvSrc.split('/').pop() ?? 'cv.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  } catch {
    window.open(profile.cvSrc, '_blank', 'noopener,noreferrer');
  }
}

const stats = [
  { value: '+200', label: 'Estudiantes capacitadas' },
  { value: '14', label: 'Cursos impartidos' },
  { value: '140', label: 'Horas de mentoría' },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-[#07050d] px-4 pb-20 pt-32 sm:px-6 lg:pt-40"
    >
      <div className="pointer-events-none absolute -left-40 -top-40 -z-10 h-[32rem] w-[32rem] rounded-full bg-plum-500/50 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-80 w-80 rounded-full bg-lavender-400/15 blur-[100px]" />

      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 py-1 pl-1 pr-4 text-sm text-white/80 backdrop-blur-md">
            <span className="rounded-full bg-white px-3 py-0.5 text-xs font-semibold text-plum-800">Carrera</span>
            Estudiante de Ingeniería en Desarrollo de Software
          </span>

          <h1 className="mt-8 font-display text-4xl leading-[1.15] text-white sm:text-5xl lg:text-6xl">
            Creo soluciones digitales y enseño a crear el <span className="text-lavender-300">futuro</span>
          </h1>

          <p className="mt-5 text-lg font-semibold text-lavender-200">{profile.role}</p>

          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/75">
            Combino la ingeniería de software con la enseñanza para acercar la tecnología a más personas, con especial
            atención a niñas y jóvenes que están por descubrir su vocación.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-plum-500 to-plum-700 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_32px_-4px_rgba(138,79,194,0.7)] ring-1 ring-plum-300/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_44px_-2px_rgba(138,79,194,0.9)]"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Contactarme
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href={profile.cvSrc}
              download
              onClick={downloadCv}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Descargar CV
            </a>
          </div>

          
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          {/* Ilustración de la sección principal: reemplaza public/assets/hero-image.jpg para cambiarla */}
          <img
            src="/assets/hero-image.jpg"
            alt="Ilustración de infraestructura, nube, inteligencia artificial y ciberseguridad"
            className="relative w-full mix-blend-screen [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_78%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_78%)]"
          />
        </div>
      </div>
    </section>
  );
}
