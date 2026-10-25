/**
 * Everything the home page says about what Ali can be hired to build.
 * Edit copy, services, featured projects and contact details here.
 */

export const site = {
  name: "Ali Baloch",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://balochali.dev",
  email: "alibaloshi018@gmail.com",
  whatsapp: "923433322698",
  linkedin: "https://www.linkedin.com/in/balochali/",
  github: "https://github.com/balochali",
  resume: "/resume/ali_baloch.pdf",
  location: "Karachi, Pakistan",
  hours: "Usually online 9 AM to 11 PM Pakistan time (UTC+5).",
  title: "Ali Baloch: MERN developer for web apps, dashboards and POS systems",
  description:
    "Ali Baloch is a full-stack MERN developer in Karachi. Hire him to build web apps, dashboards and admin panels, POS and inventory systems, and to fix and deploy existing projects.",
  shareTitle: "Ali Baloch: I build web apps, dashboards and POS systems",
  shareDescription: "Full-stack MERN developer in Karachi. See the projects and send me what you need built.",
};

export const whatsappLink = (message?: string) =>
  `https://wa.me/${site.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export const emailLink = (subject = "Project enquiry") =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;

export const hero = {
  headline: "I build the web apps, dashboards and POS systems small businesses run on.",
  lede: "I'm a full-stack MERN developer in Karachi. I help shops, restaurants and startups replace spreadsheets and paperwork with software that works every day.",
  proof: { strong: "3+ years", rest: "building production apps. Currently at Rex Official." },
};

/** Shown on the hero order slip and as the contact form's "what do you need" options. */
export const needs = [
  "A web app",
  "A dashboard or admin panel",
  "A POS or inventory system",
  "Bug fixing or deployment",
];

/** Slugs from projectData.ts, in the order they appear on the page. */
export const featuredSlugs = [
  "restaurant-pos-system",
  "baloch-builder",
  "e-commerce-platform-rex-official",
  "port-city-wise-visualization",
];

export const services = [
  {
    title: "MERN web apps",
    description: "Web apps with login, a database and an API, from the first screen to launch.",
    tools: ["React", "Node.js", "Express", "MongoDB"],
    proof: "e-commerce-platform-rex-official",
  },
  {
    title: "Dashboards and admin panels",
    description: "Screens where you manage products, orders, users and reports, with charts, maps and filters.",
    tools: ["Next.js", "React", "D3.js", "Mapbox"],
    proof: "port-city-wise-visualization",
  },
  {
    title: "POS and inventory systems",
    description: "Billing, menus, stock and receipts for shops and restaurants, running on a local database.",
    tools: ["Tauri", "Python", "PyQt6", "SQLite"],
    proof: "restaurant-pos-system",
  },
  {
    title: "Bug fixing and deployment",
    description: "Send me the repo and what's broken. I'll fix it, speed it up and put it online with a proper setup.",
    tools: ["Node.js", "Next.js", "PostgreSQL", "AWS"],
    proof: null,
  },
];

export const skillGroups = [
  { name: "Web apps", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Redux", "Zustand"] },
  { name: "Backend and APIs", items: ["Node.js", "Express", "REST APIs", "Prisma", "Python", "Flask"] },
  { name: "Databases", items: ["MongoDB", "PostgreSQL", "SQLite", "Firebase"] },
  { name: "Desktop and mobile", items: ["Tauri", "React Native", "PyQt6"] },
  { name: "Data and AI", items: ["D3.js", "Mapbox", "Hugging Face", "Transformers"] },
  { name: "Cloud and Web3", items: ["AWS", "Firebase", "Web3"] },
];
