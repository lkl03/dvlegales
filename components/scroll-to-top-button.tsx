'use client';

import { ArrowUp } from 'lucide-react';

export function ScrollToTopButton() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="btn-accent-outline inline-flex items-center gap-2 cursor-pointer"
    >
      <ArrowUp className="h-4 w-4" />
      Volver arriba
    </button>
  );
}