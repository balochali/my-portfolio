import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import Icon, { type IconName } from "@/components/Icon";
import { emailLink, hero, site, whatsappLink } from "@/data/offerData";
import "./Hero.css";

const [first, ...rest] = site.name.split(" ");
const style = (vars: Record<string, number | string>) => vars as CSSProperties;

const socials: { label: string; icon: IconName; href: string; external: boolean }[] = [
  { label: "GitHub", icon: "github", href: site.github, external: true },
  { label: "LinkedIn", icon: "linkedin", href: site.linkedin, external: true },
  { label: "WhatsApp", icon: "whatsapp", href: whatsappLink("Hi Ali, I found your portfolio."), external: true },
  { label: "Email", icon: "mail", href: emailLink(), external: false },
];

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-stage">
        <h1 className="name" id="hero-title" aria-label={`${site.name}, ${hero.role}`}>
          <span className="out land from-left" style={style({ "--base": 300 })} aria-hidden="true">{first}</span>
          <span className="solid land from-right" style={style({ "--base": 380 })} aria-hidden="true">{rest.join(" ")}</span>
        </h1>

        <div className="hero-body">
          <div className="hero-left">
            <h2 className="role land from-left" style={style({ "--base": 760 })}>{hero.role}</h2>
            <p className="tagline land from-left" style={style({ "--base": 840 })}>{hero.tagline}</p>
            <div className="hero-actions">
              <Link className="button primary land from-pop" style={style({ "--base": 940 })} href="/#projects">
                View projects <Icon name="arrow-up-right" className="icon icon-arrow" />
              </Link>
              <Link className="button land from-pop" style={style({ "--base": 1020 })} href="/#contact">Hire me</Link>
            </div>
            <p className="proof land from-bottom" style={style({ "--base": 1100, "--fy": "20px" })}>{hero.proof}</p>
          </div>

          <div className="portrait land from-bottom" style={style({ "--base": 560, "--fs": 0.92 })}>
            <Image src="/hero-section/ali-cutout.webp" alt="Illustration of Ali Baloch waving hello" width={790} height={800} priority sizes="(max-width: 960px) 80vw, 500px" />
          </div>

          <ul className="socials" aria-label="Find me online">
            {socials.map((item, index) => (
              <li key={item.label} className="land from-right" style={style({ "--base": 820, "--i": index })}>
                <a className="pill" href={item.href} {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}>
                  <Icon name={item.icon} />{item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
