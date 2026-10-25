import Link from "next/link";
import { hero } from "@/data/offerData";
import OrderSlip from "./OrderSlip";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div>
          <h1 id="hero-title">{hero.headline}</h1>
          <p className="hero-lede">{hero.lede}</p>
          <div className="hero-actions">
            <Link className="button primary" href="/#projects">View projects</Link>
            <Link className="button" href="/#contact">Hire me</Link>
          </div>
          <p className="hero-proof"><strong>{hero.proof.strong}</strong> {hero.proof.rest}</p>
        </div>
        <OrderSlip />
      </div>
    </section>
  );
}
