import SectionHeading from '@/components/SectionHeading';
import DocumentCard from '@/components/DocumentCard';
import { credentials, type PortfolioDocument } from '@/data/portfolio';

type CredentialsProps = {
  onOpen: (document: PortfolioDocument) => void;
};

export default function Credentials({ onOpen }: CredentialsProps) {
  return (
    <section id="credenciales" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Cursos y certificaciones"
          title="Credenciales"
          description="Formación continua en ciberseguridad, idiomas, habilidades blandas y herramientas ofimáticas."
        />
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {credentials.map((item) => (
            <DocumentCard key={item.id} document={item} variant="credential" onOpen={onOpen} />
          ))}
        </div>
      </div>
    </section>
  );
}
