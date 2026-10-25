"use client";
import { useId, useState } from "react";
import { needs, site, whatsappLink } from "@/data/offerData";

/** Tick what you need, then send it to Ali on WhatsApp with those choices already written. */
export default function OrderSlip() {
  const id = useId();
  const [picked, setPicked] = useState<string[]>([]);
  const toggle = (item: string) => setPicked(list => (list.includes(item) ? list.filter(x => x !== item) : [...list, item]));
  const message = `Hi Ali, I found your portfolio.${picked.length ? ` I need: ${picked.map(p => p.toLowerCase()).join(", ")}.` : ""} Here's what I'm working on: `;

  return (
    <form className="slip" aria-labelledby={`${id}-title`} onSubmit={event => event.preventDefault()}>
      <h2 id={`${id}-title`}>What do you need?</h2>
      <p className="slip-sub">Tick what fits, then send it to me.</p>
      <hr />
      <fieldset>
        <legend>Choose what you need built</legend>
        {needs.map(item => (
          <label className="tick" key={item}>
            <input type="checkbox" checked={picked.includes(item)} onChange={() => toggle(item)} />
            <span>{item}</span>
          </label>
        ))}
      </fieldset>
      <hr />
      <a className="slip-send" href={whatsappLink(message)} target="_blank" rel="noreferrer">Send on WhatsApp</a>
      <div className="barcode" aria-hidden="true" />
      <p className="slip-who">{site.name} · Karachi</p>
    </form>
  );
}
