import { Eye, FileText } from 'lucide-react';
import ImageSlot from '@/components/ImageSlot';
import type { PortfolioDocument } from '@/data/portfolio';

type DocumentCardProps = {
  document: PortfolioDocument;
  variant: 'recognition' | 'credential';
  onOpen: (document: PortfolioDocument) => void;
};

export default function DocumentCard({ document, variant, onOpen }: DocumentCardProps) {
  const isPdf = document.kind === 'pdf';
  const Icon = document.icon;
  const actionLabel = variant === 'recognition' ? 'Ver evidencia' : 'Consultar evidencia';
  const buttonLabel = isPdf ? 'Ver documento' : actionLabel;

  return (
    <article className="glass group flex h-full flex-col rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
      {variant === 'recognition' ? (
        <div className="relative mb-5 overflow-hidden rounded-xl">
          {isPdf ? (
            <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-lavender-100 via-white to-silver-100 text-plum-600">
              <FileText className="h-10 w-10" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em]">Documento PDF</span>
            </div>
          ) : (
            /* Miniatura del diploma: reemplaza el src en src/data/portfolio.ts por tu archivo real */
            <ImageSlot
              src={document.src}
              alt={`Miniatura de ${document.title}`}
              placeholderLabel={`Miniatura: ${document.title}`}
              className="aspect-[4/3] w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
        </div>
      ) : (
        <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-plum-600 to-plum-800 text-white shadow-soft">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
      )}

      <div className="flex flex-1 flex-col">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-plum-600">{document.date}</p>
        <h3 className="mt-2 font-display text-xl">{document.title}</h3>
        <p className="mt-2 text-sm text-silver-600">{document.issuer}</p>
      </div>

      <button
        type="button"
        onClick={() => onOpen(document)}
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-plum-200 bg-white/80 px-4 py-3 text-sm font-semibold text-plum-700 transition-all duration-300 hover:border-plum-600 hover:bg-plum-700 hover:text-white"
      >
        <Eye className="h-4 w-4" aria-hidden="true" />
        {buttonLabel}
      </button>
    </article>
  );
}
