'use client';

import { useEffect, useMemo, useState } from 'react';

type HeroTypingTitleProps = {
  firstLine: string;
  secondLine: string;
};

export function HeroTypingTitle({ firstLine, secondLine }: HeroTypingTitleProps) {
  const [progress, setProgress] = useState(0);
  const totalLength = useMemo(() => firstLine.length + secondLine.length, [firstLine, secondLine]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setProgress((current) => {
        if (current >= totalLength) {
          window.clearInterval(interval);
          return current;
        }
        return current + 1;
      });
    }, 42);

    return () => window.clearInterval(interval);
  }, [totalLength]);

  const firstVisible = firstLine.slice(0, Math.min(progress, firstLine.length));
  const secondProgress = Math.max(progress - firstLine.length, 0);
  const secondVisible = secondLine.slice(0, Math.min(secondProgress, secondLine.length));
  const showCursorOnFirstLine = progress < firstLine.length;
  const showCursorOnSecondLine = progress >= firstLine.length && progress < totalLength;

  return (
    <h1 className="mt-5 max-w-[1440px] text-5xl tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.25rem] xl:leading-[0.96] text-balance">
      <span className="block min-h-[1.15em]">
        {firstVisible}
        {showCursorOnFirstLine ? <span className="typing-caret" aria-hidden="true" /> : null}
      </span>
      <span className="mt-1 block min-h-[1.15em] text-white/96">
        {secondVisible}
        {showCursorOnSecondLine ? <span className="typing-caret" aria-hidden="true" /> : null}
      </span>
    </h1>
  );
}
