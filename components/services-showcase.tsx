'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type Service = {
  name: string;
  summary: string;
  detail: string;
  bullets: readonly string[];
};

export function ServicesShowcase({ services }: { services: readonly Service[] }) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const active = services[activeIndex];

  return (
    <>
      {/* Mobile: accordion inline */}
      <div className="grid gap-4 md:hidden">
        {services.map((service, index) => {
          const isActive = index === activeIndex;

          return (
            <article
              key={service.name}
              className={`overflow-hidden rounded-[18px] border border-border shadow-[0_18px_40px_rgba(47,38,61,0.05)] transition-all duration-300 ${
                isActive ? 'bg-[#f7f4f3]' : 'bg-white'
              }`}
            >
              <button
                type="button"
                onClick={() => setActiveIndex(isActive ? -1 : index)}
                aria-expanded={isActive}
                aria-controls={`service-panel-${index}`}
                className="w-full px-5 py-5 text-left"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full border border-accent/12 bg-accent/6 px-2 text-[0.7rem] font-semibold tracking-[0.18em] text-accent/70">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <span className="mt-3 block font-medium service-title">
                      {service.name}
                    </span>

                    <span className="mt-2 block text-base leading-7 text-muted">
                      {service.summary}
                    </span>
                  </div>

                  <span
                    className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-white/85 transition-transform duration-300 ${
                      isActive ? 'rotate-180' : ''
                    }`}
                  >
                    <ChevronDown className="h-4 w-4 text-accent" />
                  </span>
                </div>
              </button>

              <div
                id={`service-panel-${index}`}
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                  isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div
                    className={`border-t border-border px-5 py-5 transition-transform duration-300 ${
                      isActive ? 'translate-y-0' : '-translate-y-1'
                    }`}
                  >
                    <p className="text-xs uppercase tracking-[0.28em] text-accent/55">
                      Especialidad en
                    </p>

                    <p className="mt-3 text-base leading-8 text-foreground">
                      {service.detail}
                    </p>

                    <div className="mt-5 grid gap-3">
                      {service.bullets.map((bullet) => (
                        <div
                          key={bullet}
                          className="rounded-[14px] border border-border bg-white px-4 py-3 text-base leading-7 text-muted"
                        >
                          {bullet}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Tablet / desktop: layout actual */}
      <div className="hidden gap-6 md:grid xl:grid-cols-[0.88fr_1.12fr] xl:items-start">
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
            <p className="text-xs uppercase tracking-[0.28em] text-white/45">
              Especialidad en
            </p>
            <h3 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
              {active?.name}
            </h3>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              {active?.detail}
            </p>

            <div className="mt-8 grid gap-3">
              {active?.bullets.map((bullet) => (
                <div
                  key={bullet}
                  className="rounded-[14px] border border-white/10 bg-white/5 px-5 py-4 text-base leading-7 text-white/84"
                >
                  {bullet}
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
