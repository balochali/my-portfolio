import type { CSSProperties } from "react";

/** Stagger helper: <div data-reveal="rise" style={stagger(2)}> waits 2 steps before it plays. */
export const stagger = (step: number, unit = 90) => ({ "--d": step * unit } as CSSProperties);
