"use client";

import { useEffect, useRef } from "react";
import "./WavingAvatar.css";

// Atlas cells: pocket, unused alternate hand, waist, chest, raised, outward, inward, neutral.
// Returning through the same poses makes the hand tuck back into its pocket.
const greeting = [
  [0, 700], [2, 160], [3, 160], [4, 180],
  [5, 170], [7, 100], [6, 170], [7, 100],
  [5, 170], [7, 100], [6, 170], [7, 100],
  [4, 170], [3, 160], [2, 160], [0, 250],
] as const;

export default function WavingAvatar() {
  const host = useRef<HTMLDivElement>(null);
  const wave = useRef<() => void>(() => {});

  useEffect(() => {
    const element = host.current;
    if (!element) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setTimeout> | undefined;
    let visible = false;
    let loaded = false;
    let greeted = false;
    let playing = false;
    let disposed = false;
    const pose = (index: number) => {
      element.style.setProperty("--pose-x", `${(index % 4) * 100 / 3}%`);
      element.style.setProperty("--pose-y", index < 4 ? "0%" : "100%");
      element.dataset.pose = String(index);
    };
    const rest = () => {
      clearTimeout(timer);
      playing = false;
      pose(0);
    };
    const play = () => {
      // Repeated clicks never snap an arm back midway through a greeting.
      if (!loaded || playing || !visible || document.hidden || reduced.matches) return;
      playing = true;
      let step = 0;
      const advance = () => {
        if (disposed) return;
        if (step >= greeting.length) { rest(); return; }
        const [frame, duration] = greeting[step++];
        pose(frame);
        timer = setTimeout(advance, duration);
      };
      advance();
    };
    const greetOnce = () => {
      if (loaded && visible && !document.hidden && !greeted) {
        greeted = true;
        play();
      }
    };
    wave.current = play;
    const image = new window.Image();
    image.onload = () => {
      if (disposed) return;
      loaded = true;
      greetOnce();
    };
    image.src = "/avatar/ali-greeting-atlas.png";
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (!visible) rest();
      else greetOnce();
    }, { threshold: .2 });
    observer.observe(element);
    const visibility = () => { if (document.hidden) rest(); else greetOnce(); };
    const preference = () => { if (reduced.matches) rest(); };
    document.addEventListener("visibilitychange", visibility);
    reduced.addEventListener("change", preference);
    return () => {
      disposed = true;
      rest();
      observer.disconnect();
      image.onload = null;
      document.removeEventListener("visibilitychange", visibility);
      reduced.removeEventListener("change", preference);
      wave.current = () => {};
    };
  }, []);

  return <div className="avatar-interactive">
    <div className="avatar-stage avatar-greeting-stage" ref={host} role="img" aria-label="Illustrated Ali Baloch resting with both hands in his pockets, taking one hand out to wave hello and returning it to his pocket">
      {/* The body always uses cell zero. Only the isolated arm reads the pose variables. */}
      <div className="avatar-greeting-sprite avatar-still-body" aria-hidden="true" />
      <div className="avatar-greeting-sprite avatar-moving-arm" aria-hidden="true" />
    </div>
    <button className="wave-button" onClick={() => wave.current()} aria-label="Make Ali wave hello again">Say hello! <span aria-hidden="true">↗</span></button>
  </div>;
}
