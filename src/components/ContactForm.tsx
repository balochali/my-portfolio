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

"use client";
import { useState, type FormEvent } from "react";
import { sendEmail } from "@/app/actions/contact";
import { business } from "@/data/business";
export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const field = (key: string) => String(data.get(key) || "");
    setStatus("sending");
    setFeedback("");
    try {
      const result = await sendEmail({
        name: field("name"),
        email: field("email"),
        subject: field("subject"),
        message: field("message"),
        website: field("website"),
        budget: field("budget"),
        timeline: field("timeline"),
      });
      setStatus(result.success ? "success" : "error");
      setFeedback(
        result.success
          ? "Thank you. Your project inquiry has been sent."
          : result.error || "Please try again.",
      );
      if (result.success) form.reset();
    } catch {
      setStatus("error");
      setFeedback("Your message could not be sent. Try again or use WhatsApp.");
    }
  }
  return (
    <form
      className="contact-form card"
      onSubmit={submit}
      aria-busy={status === "sending"}
    >
      <h3>Tell me about your project</h3>
      <p>Fields marked * are required.</p>
      <div className="form-row">
        <label>
          Your name *
          <input name="name" autoComplete="name" required maxLength={100} />
        </label>
        <label>
          Email *
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
          />
        </label>
      </div>
      <label>
        Project type *
        <select name="subject" required>
          {business.contact.projectTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </label>
      <div className="form-row">
        <label>
          Budget range (optional)
          <input
            name="budget"
            placeholder={business.contact.budgetPlaceholder}
            maxLength={100}
          />
        </label>
        <label>
          Timeline (optional)
          <input
            name="timeline"
            placeholder={business.contact.timelinePlaceholder}
            maxLength={100}
          />
        </label>
      </div>
      <label>
        What do you need? *
        <textarea
          name="message"
          rows={5}
          minLength={10}
          maxLength={5000}
          required
          placeholder="Describe your business, the problem and what a useful solution would do."
        />
      </label>
      <div className="honeypot" aria-hidden="true">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <button className="button primary" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send project inquiry ↗"}
      </button>
      <p role="status" aria-live="polite" className="form-feedback">
        {feedback}
      </p>
    </form>
  );
}
