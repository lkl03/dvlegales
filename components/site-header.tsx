'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

type NavItem = {
  href: string;
  label: string;
};

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.62 2 2.22 6.4 2.22 11.82c0 1.73.45 3.42 1.31 4.91L2 22l5.42-1.49a9.77 9.77 0 0 0 4.61 1.17h.01c5.41 0 9.82-4.4 9.82-9.82 0-2.62-1.02-5.08-2.81-6.95Zm-7.02 15.1h-.01a8.14 8.14 0 0 1-4.15-1.14l-.3-.18-3.22.88.86-3.14-.2-.32a8.16 8.16 0 0 1-1.25-4.29c0-4.51 3.67-8.18 8.19-8.18 2.18 0 4.24.84 5.78 2.38a8.11 8.11 0 0 1 2.4 5.8c0 4.51-3.67 8.19-8.1 8.19Zm4.49-6.12c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.55.12-.16.24-.63.78-.77.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.68 2.57 4.06 3.6.57.25 1.02.4 1.36.51.57.18 1.08.16 1.49.1.45-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

export function SiteHeader({ navItems }: { navItems: readonly NavItem[] }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    }

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/80 backdrop-blur-xl">
      <div className="container-shell flex min-h-[4.9rem] items-center justify-between gap-3 py-3">
        <Link href="#inicio" className="flex min-w-0 items-center gap-3" onClick={() => setIsOpen(false)}>
          <img src="/logo-dv-legales.png" alt="DV Legales" className="h-14 w-auto shrink-0 object-contain sm:h-20" />
        </Link>

        <nav className="hidden items-center gap-8 text-base text-muted lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-accent">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://wa.me/5491151175372"
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-[#1ea952] bg-[#25D366] px-4 py-3 text-base font-medium text-white! transition-transform hover:-translate-y-0.5 sm:px-5"
          >
            <WhatsAppIcon />
            <span className="hidden sm:inline">Solicitar consulta</span>
            <span className="sm:hidden text-xs">Contactanos</span>
          </a>

          <button
            type="button"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white text-accent transition-colors hover:border-accent hover:bg-accent hover:text-white lg:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="border-t border-border bg-white lg:hidden">
          <nav id="mobile-nav" className="container-shell flex flex-col gap-2 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-base text-foreground border-b border-accent/10"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}