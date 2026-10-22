"use client";

import { useEffect } from "react";
import "./PortfolioMotion.css";

/** Progressive enhancement: content stays visible if animation is unavailable. */
export default function ScrollReveals() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        if (preference.matches) return;
        const animation = entry.target.animate([
          { opacity: 0, transform: "translateY(24px)" },
          { opacity: 1, transform: "translateY(0)" },
        ], { duration: 600, easing: "cubic-bezier(.22,1,.36,1)" });
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      });
    }, { threshold: .12 });
    document.querySelectorAll(".about-stat-grid, .about-overview-copy, .skills-matrix-intro, .skills-matrix, .education-intro, .credential-strip, .degree-card, .certificate-card, .contact-intro, .projects-intro, .services-intro, .service-card, .career-intro, .career-stats, .career-layout, .section-heading, .contact-grid").forEach(element => observer.observe(element));
    const cancel = () => { if (preference.matches) animations.forEach(animation => animation.cancel()); };
    preference.addEventListener("change", cancel);
    return () => { observer.disconnect(); animations.forEach(animation => animation.cancel()); preference.removeEventListener("change", cancel); };
  }, []);
  return null;
}
