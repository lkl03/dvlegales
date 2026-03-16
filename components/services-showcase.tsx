'use client';

import { useState } from 'react';

type Service = {
  name: string;
  summary: string;
  detail: string;
  bullets: readonly string[];
};

export function ServicesShowcase({ services }: { services: readonly Service[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = services[activeIndex];

  return (
    <div className="grid gap-6 xl:grid-cols-[0.88fr_1.12fr] xl:items-start">
      <div className="overflow-hidden rounded-[18px] border border-border bg-white shadow-[0_18px_40px_rgba(47,38,61,0.05)]">
        {services.map((service, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={service.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              className={`grid w-full gap-3 border-b border-border px-5 py-5 text-left transition-colors last:border-b-0 sm:grid-cols-[auto_1fr] sm:items-start sm:px-6 ${
                isActive ? 'bg-[#f7f4f3]' : 'bg-white hover:bg-[#f7f4f3]'
              }`}
            >
              <span className="text-xs font-semibold tracking-[0.28em] text-accent/55">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span>
                <span className="block font-medium service-title">
                  {service.name}
                </span>
                <span className="mt-2 block max-w-2xl text-base leading-7 text-muted">
                  {service.summary}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <aside className="overflow-hidden rounded-[18px] border border-white/10 bg-accent text-white shadow-[0_24px_48px_rgba(17,16,21,0.22)]">
        <div className="p-6 sm:p-8 xl:p-10">
          <p className="text-xs uppercase tracking-[0.28em] text-white/45">Especialidad en</p>
          <h3 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">{active.name}</h3>
          <p className="mt-5 max-w-2xl text-base sm:text-lg leading-8 text-white/80">{active.detail}</p>

          <div className="mt-8 grid gap-3">
            {active.bullets.map((bullet) => (
              <div key={bullet} className="rounded-[14px] border border-white/10 bg-white/5 px-5 py-4 text-base leading-7 text-white/84">
                {bullet}
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
