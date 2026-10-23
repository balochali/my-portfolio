import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import ContactForm from "./ContactForm";
import { CTA, Footer, ProjectCards, Testimonials } from "./SiteElements";
import { business as b, isReady, whatsappUrl } from "@/data/business";
import { projects } from "@/data/projectData";
export default function Portfolio() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="hero wrap" id="home">
          <div className="hero-grid">
            <div>
              <p className="eyebrow">ALI BALOCH · CUSTOM BUSINESS SOFTWARE</p>
              <h1>
                Better tools for
                <br />
                your growing
                <br />
                <span className="highlight">business.</span>
              </h1>
              <p className="hero-description">
                I build custom e-commerce stores, POS systems and web
                applications for small and medium businesses in Pakistan and the
                Gulf.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#contact">
                  Start a project ↗
                </a>
                <a className="button secondary" href="#projects">
                  See my work ↓
                </a>
              </div>
              {b.availability.enabled && (
                <p className="availability">
                  <span aria-hidden="true">●</span> {b.availability.text}
                </p>
              )}
            </div>
            <figure className="hero-visual card">
              <div className="visual-label">
                BUILT AROUND YOUR WORKFLOW <span>↗</span>
              </div>
              <Image
                src="/project-images/baloch-builder/projects-desktop.webp"
                alt="Baloch Builder project management interface, showing illustrative sample records"
                width={1100}
                height={730}
                sizes="(max-width: 800px) 90vw, 45vw"
                priority
              />
              <figcaption>
                <strong>Business records. Connected.</strong>
                <span>Baloch Builder · Offline desktop workspace</span>
                <Link className="text-link" href="/projects/baloch-builder">
                  Explore the project ↗
                </Link>
              </figcaption>
            </figure>
          </div>
          <dl className="stats">
            {b.stats
              .filter((s) => isReady(s.value))
              .map((s) => (
                <div key={s.label}>
                  <dt>{s.label}</dt>
                  <dd>{s.value}</dd>
                </div>
              ))}
          </dl>
        </section>
        <section className="section tint" id="services">
          <div className="wrap">
            <p className="eyebrow">SERVICES / BUILT FOR BUSINESS</p>
            <h2>
              Software that fits
              <br />
              the way you work.
            </h2>
            <div className="offer-grid">
              {b.packages.map((offer, i) => (
                <article className="card offer" key={offer.id}>
                  <span className="number">0{i + 1}</span>
                  <h3>{offer.title}</h3>
                  <p>{offer.audience}</p>
                  <ul>
                    {offer.deliverables.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                  <p className="offer-detail">
                    Timeline:{" "}
                    {isReady(offer.timeline)
                      ? offer.timeline
                      : "Agreed after discovery"}
                  </p>
                  <p className="offer-detail">
                    {isReady(offer.price)
                      ? `Starting from ${offer.price}`
                      : "Pricing: tailored to your scope"}
                  </p>
                  <a className="button secondary" href="#contact">
                    {offer.cta} ↗
                  </a>
                </article>
              ))}
            </div>
            <p className="also">
              <strong>Also available:</strong> {b.alsoAvailable}
            </p>
            <CTA text="Not sure which offer fits? Let’s map out your needs." />
          </div>
        </section>
        <section className="section wrap" id="projects">
          <div className="section-heading">
            <div>
              <p className="eyebrow">FEATURED WORK</p>
              <h2>
                From storefronts
                <br />
                to daily operations.
              </h2>
            </div>
            <Link className="button secondary" href="/projects">
              All projects ↗
            </Link>
          </div>
          <ProjectCards
            items={b.featuredSlugs.flatMap((slug) =>
              projects.filter((p) => p.slug === slug),
            )}
          />
          <CTA text="Want something like this for your business?" />
        </section>
        <Testimonials />
        <section className="section tint" id="process">
          <div className="wrap">
            <p className="eyebrow">HOW IT WORKS</p>
            <h2>A clear path from idea to handover.</h2>
            <ol className="process-grid">
              {b.process.map((step, i) => (
                <li key={step.title}>
                  <span className="number">0{i + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
            <CTA text="Start with a conversation about your business." />
          </div>
        </section>
        <section className="section wrap" id="about">
          <div className="about-grid">
            <div>
              <p className="eyebrow">YOUR DEVELOPMENT PARTNER</p>
              <h2>
                Hi, I’m Ali.
                <br />I connect the pieces.
              </h2>
              <p>
                I’m a full-stack developer based in {b.location}. My work spans
                storefronts, restaurant operations and business management tools
                — connecting interfaces, APIs and data.
              </p>
              <p>
                My focus is custom applications for small businesses, with the
                tools chosen around the work they need to do.
              </p>
              {isReady(b.education) && <p>{b.education}</p>}
              <div className="hero-actions">
                <a className="text-link" href={b.socials.linkedin}>
                  LinkedIn ↗
                </a>
                <a className="text-link" href={b.resume}>
                  Résumé ↓
                </a>
              </div>
            </div>
            <div className="skills card">
              <h3>A focused toolkit</h3>
              {b.skills.map((group) => (
                <div key={group.group}>
                  <h4>{group.group}</h4>
                  <p>{group.items.join(" · ")}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="experience">
            <h3>Experience</h3>
            {b.experience.map((job) => (
              <article key={job.company}>
                <p>{job.period}</p>
                <div>
                  <h4>
                    {job.company} · {job.role}
                  </h4>
                  <p>{job.text}</p>
                </div>
              </article>
            ))}
          </div>
          <CTA text="Tell me where your business needs a better tool." />
        </section>
        <section className="section tint" id="faq">
          <div className="wrap faq">
            <p className="eyebrow">BEFORE WE BEGIN</p>
            <h2>A few useful answers.</h2>
            {b.faq.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
            <CTA text="Have a question about your specific project?" />
          </div>
        </section>
        <section className="section wrap" id="contact">
          <div className="contact-grid">
            <div>
              <p className="eyebrow">LET’S TALK</p>
              <h2>
                Your next step:
                <br />a better business tool.
              </h2>
              <p>
                Tell me what you do, what’s slowing you down and what you’d like
                to build.
              </p>
              {isReady(b.contact.responseTime) && (
                <p>{b.contact.responseTime}</p>
              )}
              <div className="contact-links">
                {isReady(b.contact.email) && (
                  <a href={`mailto:${b.contact.email}`}>{b.contact.email}</a>
                )}
                {isReady(b.contact.bookingUrl) && (
                  <a className="button primary" href={b.contact.bookingUrl}>
                    Book a discovery call ↗
                  </a>
                )}
                {isReady(b.contact.whatsapp) && (
                  <a className="button secondary" href={whatsappUrl()}>
                    Chat on WhatsApp ↗
                  </a>
                )}
              </div>
              <p>
                {b.location}
                <br />
                {b.timezone}
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
