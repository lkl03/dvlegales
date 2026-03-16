'use client';

import {
  type CSSProperties,
  type ReactNode,
  useEffect,
  useRef,
  useState
} from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
};

export function Reveal({
  children,
  className = '',
  delay = 0,
  y = 24,
  duration = 0.65,
  once = true,
  threshold = 0.16
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobileQuery = window.matchMedia('(max-width: 767px)');

    const updateReducedMotion = () => setReduceMotion(reducedMotionQuery.matches);
    const updateMobile = () => setIsMobile(mobileQuery.matches);

    updateReducedMotion();
    updateMobile();

    if (typeof reducedMotionQuery.addEventListener === 'function') {
      reducedMotionQuery.addEventListener('change', updateReducedMotion);
      mobileQuery.addEventListener('change', updateMobile);
    } else {
      reducedMotionQuery.addListener(updateReducedMotion);
      mobileQuery.addListener(updateMobile);
    }

    return () => {
      if (typeof reducedMotionQuery.removeEventListener === 'function') {
        reducedMotionQuery.removeEventListener('change', updateReducedMotion);
        mobileQuery.removeEventListener('change', updateMobile);
      } else {
        reducedMotionQuery.removeListener(updateReducedMotion);
        mobileQuery.removeListener(updateMobile);
      }
    };
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setIsVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [once, reduceMotion, threshold]);

  const actualY = isMobile ? Math.min(y, 14) : y;
  const actualDuration = isMobile ? Math.min(duration, 0.48) : duration;
  const actualDelay = isMobile ? Math.min(delay, 0.12) : delay;

  const style: CSSProperties = reduceMotion
    ? {}
    : {
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? 'translate3d(0, 0, 0)'
          : `translate3d(0, ${actualY}px, 0)`,
        transitionProperty: 'opacity, transform',
        transitionDuration: `${actualDuration}s`,
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        transitionDelay: `${actualDelay}s`,
        willChange: 'opacity, transform'
      };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}