import { useEffect } from 'react';
import { ExternalLink, X } from 'lucide-react';
import ImageSlot from '@/components/ImageSlot';
import type { PortfolioDocument } from '@/data/portfolio';

type DocumentModalProps = {
  document: PortfolioDocument | null;
  onClose: () => void;
};

export default function DocumentModal({ document, onClose }: DocumentModalProps) {
  useEffect(() => {
    if (!document) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    const previousOverflow = window.document.body.style.overflow;
    window.document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [document, onClose]);

  if (!document) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="document-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-silver-900/40 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/70 bg-white shadow-glass"
      >
        <header className="flex items-start justify-between gap-4 border-b border-silver-200 p-5 sm:p-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-plum-600">{document.issuer}</p>
            <h3 id="document-modal-title" className="mt-1 font-display text-xl sm:text-2xl">
              {document.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar vista previa"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-silver-700 transition-colors hover:bg-plum-50 hover:text-plum-700"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        <div className="flex-1 overflow-auto bg-silver-50 p-4 sm:p-6">
          {document.kind === 'pdf' ? (
            /* Documento PDF: reemplaza el archivo en public/assets y su ruta en src/data/portfolio.ts */
            <iframe
              src={document.src}
              title={`Vista previa de ${document.title}`}
              className="h-[65vh] w-full rounded-xl border border-silver-200 bg-white"
            />
          ) : (
            <ImageSlot
              src={document.src}
              alt={`Evidencia de ${document.title}`}
              placeholderLabel={`Diploma: ${document.title}`}
              className="mx-auto max-h-[65vh] w-full rounded-xl object-contain"
            />
          )}
        </div>

        <footer className="flex flex-col gap-3 border-t border-silver-200 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <p className="text-sm text-silver-600">{document.date}</p>
          <a
            href={document.src}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-plum-700 px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-plum-800"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            Abrir en pestaña nueva
          </a>
        </footer>
      </div>
    </div>
  );
}
