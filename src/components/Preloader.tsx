import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import gsap from 'gsap';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        const exitTl = gsap.timeline({ onComplete });
        exitTl
          .to(textRef.current, { y: -50, opacity: 0, duration: 0.5, ease: 'power3.in' })
          .to(preloaderRef.current, { yPercent: -100, duration: 1, ease: 'power4.inOut' }, '-=0.2');
      },
    });

    tl.to(counterRef.current, {
      innerText: 100,
      duration: 2.5,
      ease: 'power2.inOut',
      snap: { innerText: 1 },
      onUpdate: function () {
        if (counterRef.current) {
          counterRef.current.innerText = Math.round(parseFloat(counterRef.current.innerText || '0')).toString();
        }
      },
    });

    tl.to(progressRef.current, { width: '100%', duration: 2.5, ease: 'power2.inOut' }, 0);

    return () => { tl.kill(); };
  }, [onComplete]);

  return createPortal(
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-4"
      style={{ background: 'hsl(220 20% 4%)' }}
    >
      <div ref={textRef} className="text-center w-full max-w-md">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-8">
          OASIF<span className="text-primary">.</span>
        </h1>

        <div className="text-8xl md:text-9xl font-display font-bold gradient-text mb-8">
          <span ref={counterRef}>0</span>%
        </div>

        <div className="w-full max-w-xs md:max-w-sm h-1 mx-auto rounded-full overflow-hidden" style={{ background: 'hsl(220 15% 12%)' }}>
          <div
            ref={progressRef}
            className="h-full rounded-full"
            style={{ width: '0%', background: 'linear-gradient(90deg, hsl(187 100% 35%), hsl(187 100% 50%), hsl(187 100% 65%))', boxShadow: '0 0 15px hsl(187 100% 50% / 0.4)' }}
          />
        </div>

        <p className="mt-8 text-muted-foreground text-xs sm:text-sm tracking-[0.2em] uppercase font-medium">
          Loading Experience
        </p>
      </div>
    </div>,
    document.body
  );
};

export default Preloader;
