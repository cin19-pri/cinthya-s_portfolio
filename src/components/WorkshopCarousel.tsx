import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ImageSlot from '@/components/ImageSlot';
import { workshops } from '@/data/portfolio';

export default function WorkshopCarousel() {
  const [index, setIndex] = useState(0);
  const last = workshops.length - 1;

  const goTo = (next: number) => setIndex(Math.min(Math.max(next, 0), last));

  return (
    <div className="glass rounded-2xl p-4 sm:p-6">
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {workshops.map((workshop) => (
            <figure key={workshop.id} className="relative w-full shrink-0">
              {/* Fotografía del taller: reemplaza el src en src/data/portfolio.ts por tus fotos reales */}
              <ImageSlot
                src={workshop.src}
                alt={`Taller ${workshop.title}`}
                placeholderLabel={`Foto del taller: ${workshop.title}`}
                className="aspect-[16/9] w-full rounded-2xl object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 rounded-b-2xl bg-gradient-to-t from-plum-900/85 to-transparent p-5 pt-16 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lavender-200">{workshop.date}</p>
                <p className="mt-1 font-display text-xl sm:text-2xl">{workshop.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2" role="tablist" aria-label="Talleres impartidos">
          {workshops.map((workshop, position) => (
            <button
              key={workshop.id}
              type="button"
              role="tab"
              aria-selected={position === index}
              aria-label={`Ver taller ${workshop.title}`}
              onClick={() => goTo(position)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                position === index ? 'w-8 bg-plum-600' : 'w-2.5 bg-silver-300 hover:bg-plum-300'
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            disabled={index === 0}
            aria-label="Taller anterior"
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-plum-700 shadow-soft transition-all hover:bg-plum-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            disabled={index === last}
            aria-label="Siguiente taller"
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-plum-700 shadow-soft transition-all hover:bg-plum-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
