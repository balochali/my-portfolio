"use client";
import { useState, type FormEvent } from "react";
import { sendEmail } from "@/app/actions/contact";
import Icon from "@/components/Icon";
import { needs } from "@/data/offerData";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = new FormData(form);
    setStatus("sending");
    setFeedback("");
    try {
      const result = await sendEmail({
        name: String(fields.get("name") || ""),
        email: String(fields.get("email") || ""),
        subject: String(fields.get("subject") || ""),
        message: String(fields.get("message") || ""),
        website: String(fields.get("website") || ""),
      });
      if (result.success) {
        setStatus("success");
        setFeedback("Message sent. I'll reply by email.");
        form.reset();
      } else {
        setStatus("error");
        setFeedback(result.error || "Your message could not be sent. Please email me directly.");
      }
    } catch {
      setStatus("error");
      setFeedback("Something went wrong. Please email me directly or try again.");
    }
  }

  return (
    <form className="contact-form" onSubmit={submit} aria-labelledby="contact-form-title">
      <header className="form-head">
        <h3 id="contact-form-title">Start your project</h3>
        <p>Takes a minute. I reply by email, usually within a day.</p>
      </header>
      <div className="form-row">
        <label><span className="lbl">Your name</span>
          <span className="field"><Icon name="user" /><input name="name" autoComplete="name" required maxLength={100} placeholder="Ayesha Khan" /></span>
        </label>
        <label><span className="lbl">Email address</span>
          <span className="field"><Icon name="mail" /><input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="Your email" /></span>
        </label>
      </div>
      <fieldset>
        <legend>What do you need?</legend>
        <div className="form-choices">
          {[...needs, "Something else"].map((item, index) => (
            <label key={item}>
              <input type="radio" name="subject" value={item} defaultChecked={index === 0} required />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <label><span className="lbl">Tell me about the project</span>
        <span className="field area"><Icon name="edit" /><textarea name="message" rows={4} required minLength={10} maxLength={5000} placeholder="What it should do, who uses it, and when you need it." /></span>
      </label>
      <div className="honeypot" aria-hidden="true"><label>Leave this empty<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <button className="button primary" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : <>Send message <Icon name="send" className="icon icon-arrow" /></>}</button>
      <p className={`form-feedback ${status}`} role="status" aria-live="polite">{feedback}</p>
    </form>
  );
}
