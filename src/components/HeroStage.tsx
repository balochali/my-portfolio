"use client";
import { useEffect, useRef, type ReactNode } from "react";
import Image from "next/image";

const shots = [
  { cls: "back", src: "/project-images/covers/baloch-builder.webp", alt: "Baloch Builder dashboard", w: 1280, h: 960 },
  { cls: "mid", src: "/project-images/covers/restaurant-pos-system.webp", alt: "Restaurant POS admin panel", w: 1280, h: 761 },
];

/** Floating project screenshots that drift with the cursor, with the order slip in front. */
export default function HeroStage({ children }: { children: ReactNode }) {
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stage.current;
    const hero = el?.closest<HTMLElement>(".hero");
    if (!el || !hero) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.matchMedia("(pointer: fine)").matches) return;
    let frame = 0;
    const move = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const box = hero.getBoundingClientRect();
        el.style.setProperty("--px", String(((event.clientX - box.left) / box.width - 0.5) * 2));
        el.style.setProperty("--py", String(((event.clientY - box.top) / box.height - 0.5) * 2));
      });
    };
    const reset = () => { el.style.setProperty("--px", "0"); el.style.setProperty("--py", "0"); };
    hero.addEventListener("pointermove", move, { passive: true });
    hero.addEventListener("pointerleave", reset);
    return () => { hero.removeEventListener("pointermove", move); hero.removeEventListener("pointerleave", reset); cancelAnimationFrame(frame); };
  }, []);

  return (
    <div className="stage" ref={stage}>
      {shots.map((shot, index) => (
        <div className={`layer layer-${shot.cls}`} key={shot.cls}>
          <div className="enter" style={{ animationDelay: `${0.5 + index * 0.18}s` }}>
            <div className="win" style={{ animationDelay: `${index * -2.5}s` }}>
              <div className="win-bar" aria-hidden="true"><i /><i /><i /></div>
              <Image src={shot.src} alt={shot.alt} width={shot.w} height={shot.h} sizes="(max-width: 860px) 90vw, 440px" priority />
            </div>
          </div>
        </div>
      ))}
      <div className="layer layer-slip">{children}</div>
    </div>
  );
}
