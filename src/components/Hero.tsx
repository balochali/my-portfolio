import type { CSSProperties } from "react";
import Link from "next/link";
import { hero } from "@/data/offerData";
import HeroStage from "./HeroStage";
import OrderSlip from "./OrderSlip";
import "./Hero.css";

const words = hero.headline.split(" ");

export default function Hero() {
  return (
    <section className="hero dark spot" aria-labelledby="hero-title">
      <div className="aurora" aria-hidden="true"><span /><span /></div>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="status"><i aria-hidden="true" />Open to new projects</p>
          <h1 id="hero-title">
            {words.map((word, index) => (
              <span key={index}>
                <span className="w"><span style={{ "--i": index } as CSSProperties}>{word}</span></span>{" "}
              </span>
            ))}
          </h1>
          <p className="hero-lede">{hero.lede}</p>
          <div className="hero-actions">
            <Link className="button primary" href="/#projects">View projects <span className="arrow" aria-hidden="true">→</span></Link>
            <Link className="button" href="/#contact">Hire me</Link>
          </div>
          <p className="hero-proof"><strong>{hero.proof.strong}</strong> {hero.proof.rest}</p>
        </div>
        <HeroStage>
          <OrderSlip />
        </HeroStage>
      </div>
    </section>
  );
}
