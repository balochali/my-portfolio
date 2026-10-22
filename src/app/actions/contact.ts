"use server";
import nodemailer from "nodemailer";

type ContactInput = { name: string; email: string; subject: string; message: string; website?: string };
const recent = new Map<string, number>();
export async function sendEmail(input: ContactInput) {
  if (!input || typeof input !== "object") return { success: false, error: "Please complete all fields." };
  const { name, email, subject, message, website } = input;
  if (website) return { success: false, error: "Your message could not be sent." };
  if ([name, email, subject, message].some(value => typeof value !== "string" || !value.trim())) return { success: false, error: "Please complete all fields." };
  if (name.length > 100 || email.length > 254 || subject.length > 150 || message.length > 5000 || message.trim().length < 10 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || /[\r\n]/.test(name + email + subject)) return { success: false, error: "Please check your details. Your message must be between 10 and 5,000 characters." };
  const now = Date.now();
  for (const [key, time] of recent) if (now - time >= 60_000) recent.delete(key);
  const key = email.trim().toLowerCase();
  if (recent.has(key)) return { success: false, error: "Please wait a minute before sending another message." };
  const password = process.env.SMTP_PASS || process.env.SMTP_PASSWORD;
  const recipient = process.env.CONTACT_EMAIL || process.env.EMAIL_TO;
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !password || !recipient) return { success: false, error: "The contact form is temporarily unavailable. Please email alibaloshi018@gmail.com directly." };
  recent.set(key, now);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, port: Number(process.env.SMTP_PORT || 587), secure: process.env.SMTP_PORT === "465",
    auth: { user: process.env.SMTP_USER, pass: password },
    connectionTimeout: 10000, greetingTimeout: 10000, socketTimeout: 15000,
  });
  try {
    await transporter.sendMail({
      from: { name: "Ali Baloch Portfolio", address: process.env.SMTP_FROM || process.env.EMAIL_FROM || process.env.SMTP_USER },
      replyTo: { name: name.trim(), address: email.trim() }, to: recipient,
      subject: `Portfolio: ${subject.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`,
    });
    return { success: true };
  } catch {
    recent.delete(key);
    return { success: false, error: "Your message could not be sent. Please try again or email alibaloshi018@gmail.com directly." };
  } finally { transporter.close(); }
}
