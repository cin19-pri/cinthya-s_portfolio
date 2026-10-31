import { useState } from 'react';
import { ImagePlus } from 'lucide-react';

type ImageSlotProps = {
  src: string;
  alt: string;
  placeholderLabel: string;
  className?: string;
};

// Muestra la imagen en `src`; si el archivo aún no existe, muestra un marco de placeholder.
export default function ImageSlot({ src, alt, placeholderLabel, className = '' }: ImageSlotProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex min-h-[12rem] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-plum-200 bg-gradient-to-br from-lavender-100 via-white to-silver-100 p-6 text-center text-plum-600 ${className}`}
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-soft">
          <ImagePlus className="h-5 w-5" aria-hidden="true" />
        </span>
        <p className="text-sm font-semibold text-plum-700">{placeholderLabel}</p>
        <p className="text-xs text-silver-500">Ruta: {src}</p>
      </div>
    );
  }

  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className={className} />;
}
