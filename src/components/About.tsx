import { Heart, Lightbulb, Sparkles, Users } from 'lucide-react';
import ImageSlot from '@/components/ImageSlot';
import { profile } from '@/data/portfolio';

const traits = [
  { label: 'Dedicada', icon: Heart },
  { label: 'Organizada', icon: Sparkles },
  { label: 'Con iniciativa', icon: Lightbulb },
  { label: 'Trabajo en equipo', icon: Users },
];

export default function About() {
  return (
    <section id="sobre-mi" className="px-4 py-20 sm:px-6">
      <div className="glass mx-auto grid max-w-6xl gap-10 rounded-2xl p-6 sm:p-10 md:grid-cols-12 md:items-center md:gap-12">
        <div className="md:col-span-5">
          {/* Foto de perfil: reemplaza public/assets/mi-foto.jpg con tu imagen */}
          <ImageSlot
            src={profile.avatarSrc}
            alt={`Fotografía de ${profile.name}`}
            placeholderLabel="Tu fotografía de perfil"
            className="aspect-[4/5] w-full rounded-2xl object-cover shadow-soft"
          />
        </div>

        <div className="md:col-span-7">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-plum-600">Sobre mí</p>
          <h2 className="font-display text-3xl sm:text-4xl">Un poco sobre mí</h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-silver-600">
            <p>
              Soy estudiante de Ingeniería en Desarrollo y Gestión de Software. Me considero una persona con facilidad para trabajar en equipo, coordinar actividades y asumir
              responsabilidades de liderazgo.
            </p>
            <p>
              He tenido la oportunidad de combinar mi formación con experiencias en la enseñanza, lo cual, me ha ayudado a fortalecer estas habilidades. Mi objetivo es seguir aprendiendo, aprovechar nuevas oportunidades y utilizar mis conocimientos para
              crear soluciones que generen un impacto positivo.
            </p>
          </div>

          <ul className="mt-8 flex flex-wrap gap-3">
            {traits.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-plum-100 bg-white/70 px-4 py-2 text-sm font-semibold text-plum-700 transition-colors hover:border-plum-300"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
