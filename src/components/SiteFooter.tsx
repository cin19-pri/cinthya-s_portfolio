import { Mail, MessageCircle, Phone } from 'lucide-react';
import { profile } from '@/data/portfolio';

const socials = [
  { label: 'WhatsApp', href: profile.whatsapp, icon: MessageCircle },
  { label: 'Teléfono', href: `tel:${profile.phone.replace(/\s/g, '')}`, icon: Phone },
  { label: 'Correo electrónico', href: `mailto:${profile.email}`, icon: Mail },
];

export default function SiteFooter() {
  return (
    <footer id="contacto" className="border-t border-silver-200 bg-silver-50/80 px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center text-sm text-silver-600 sm:flex-row sm:justify-between sm:text-left">
        <p>
          © {new Date().getFullYear()} {profile.name}. Todos los derechos reservados.
        </p>
        <ul className="flex items-center gap-2">
          {socials.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                target={href.startsWith('https://') ? '_blank' : undefined}
                rel={href.startsWith('https://') ? 'noopener noreferrer' : undefined}
                className="flex h-10 w-10 items-center justify-center rounded-xl text-plum-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-plum-50 hover:text-plum-900"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
