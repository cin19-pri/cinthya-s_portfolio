import SectionHeading from '@/components/SectionHeading';
import DocumentCard from '@/components/DocumentCard';
import { recognitions, type PortfolioDocument } from '@/data/portfolio';

type RecognitionsProps = {
  onOpen: (document: PortfolioDocument) => void;
};

export default function Recognitions({ onOpen }: RecognitionsProps) {
  return (
    <section id="reconocimientos" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Evidencias académicas"
          title="Reconocimientos"
          description="Logros institucionales y académicos que reflejan mi dedicación, disciplina y compromiso con el aprendizaje."
        />
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {recognitions.map((item) => (
            <DocumentCard key={item.id} document={item} variant="recognition" onOpen={onOpen} />
          ))}
        </div>
      </div>
    </section>
  );
}
