import { metrics } from '@/data/portfolio';
import SectionHeading from '@/components/SectionHeading';
import WorkshopCarousel from '@/components/WorkshopCarousel';

export default function TechnoloChicas() {
  return (
    <section id="tecnolochicas" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Instructora y mentora · TECNOLOchicas México"
          title="Formando a las futuras creadoras de tecnología"
          description="Facilito talleres de programación, electrónica e inteligencia artificial para mujeres de 12 a 17 años, acompañándolas desde la primera línea de código hasta su primer proyecto."
        />

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {metrics.map(({ value, label, icon: Icon }) => (
            <article
              key={label}
              className="glass group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-plum-50 text-plum-600 transition-colors group-hover:bg-plum-700 group-hover:text-white">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="mt-5 font-display text-3xl text-plum-700 sm:text-4xl">{value}</p>
              <p className="mt-1 text-sm font-semibold text-silver-600">{label}</p>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <WorkshopCarousel />
        </div>
      </div>
    </section>
  );
}
