"use client";
import Image from "next/image";
import { useState } from "react";
export default function ProjectGallery({
  title,
  images,
}: {
  title: string;
  images: string[];
}) {
  const [active, setActive] = useState(0);
  return (
    <section className="case-gallery" aria-label={`${title} screenshots`}>
      <div className="case-main-image">
        <Image
          src={images[active]}
          alt={`${title}, screenshot ${active + 1}`}
          fill
          priority
          sizes="(max-width: 700px) 90vw, 85vw"
        />
      </div>
      {images.length > 1 && (
        <>
          <div className="gallery-controls">
            <button
              aria-label="Previous screenshot"
              onClick={() =>
                setActive((active - 1 + images.length) % images.length)
              }
            >
              ← Previous
            </button>
            <span aria-live="polite">
              {active + 1} / {images.length}
            </span>
            <button
              aria-label="Next screenshot"
              onClick={() => setActive((active + 1) % images.length)}
            >
              Next →
            </button>
          </div>
          <div className="gallery-thumbnails">
            {images.map((src, index) => (
              <button
                key={src}
                aria-label={`Show screenshot ${index + 1}`}
                aria-pressed={active === index}
                onClick={() => setActive(index)}
              >
                <Image src={src} alt="" fill sizes="90px" />
              </button>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
