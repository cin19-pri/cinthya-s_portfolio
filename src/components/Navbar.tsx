import { useEffect, useState } from 'react';

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#tecnolochicas', label: 'Instructora' },
  { href: '#reconocimientos', label: 'Reconocimientos' },
  { href: '#credenciales', label: 'Credenciales' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 py-4 sm:px-6">
      <nav
        className={`mx-auto flex max-w-6xl items-center gap-4 rounded-2xl px-3 transition-all duration-300 ${
          scrolled ? 'glass py-2.5' : 'bg-transparent py-3'
        }`}
      >
        <a
          href="#inicio"
          aria-label="Ir al inicio"
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-display text-sm font-semibold tracking-wide transition-colors duration-300 ${
            scrolled ? 'bg-plum-700 text-white' : 'bg-white text-plum-800'
          }`}
        >
          CP
        </a>

        <ul className="flex min-w-0 flex-1 snap-x items-center gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:justify-end">

          {links.map((link) => (
            <li key={link.href} className="shrink-0 snap-center">
              <a
                href={link.href}
                className={`block rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                  scrolled
                    ? 'text-silver-700 hover:bg-plum-50 hover:text-plum-700'
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
