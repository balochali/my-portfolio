// The single editing surface for business content. TODO values never render.
export const isReady = (value: string) =>
  Boolean(value.trim()) && !/TODO_(REPLACE|VERIFY)/.test(value);
export const business = {
  name: "Ali Baloch",
  siteUrl: "TODO_REPLACE: canonical https:// domain",
  tagline: "Custom e-commerce, POS & business software",
  location: "Karachi, Pakistan",
  city: "Karachi",
  countryCode: "PK",
  serviceAreas: ["Pakistan", "Gulf region"],
  timezone: "PKT · UTC+5",
  audience: "Small and medium businesses in Pakistan and the Gulf",
  availability: { enabled: true, text: "Taking on new projects" },
  contact: {
    email: "TODO_REPLACE: professional domain email",
    bookingUrl: "TODO_REPLACE: booking URL (optional)",
    whatsapp: "923433322698",
    whatsappMessage:
      "Hi Ali, I’d like to discuss a custom software project for my business.",
    responseTime: "TODO_VERIFY: I reply within 24 hours",
    projectTypes: [
      "Business website / e-commerce",
      "POS / inventory system",
      "Custom web app / dashboard",
      "Other integration",
    ],
    budgetPlaceholder: "Your range and currency, if known",
    timelinePlaceholder: "Your target date or timeframe, if known",
  },
  socials: {
    github: "https://github.com/balochali",
    linkedin: "https://www.linkedin.com/in/balochali/",
  },
  resume: "/resume/ali_baloch.pdf",
  education: "TODO_VERIFY: degree, institution and graduation status/date",
  stats: [
    { label: "Development experience", value: "Since November 2022" },
    { label: "Based in", value: "Karachi, Pakistan" },
    { label: "Timezone", value: "PKT · UTC+5" },
    {
      label: "Verified shipped projects",
      value: "TODO_VERIFY: real shipped project count",
    },
  ],
  packages: [
    {
      id: "store",
      title: "Business website & e-commerce",
      audience: "For businesses bringing their products and services online.",
      deliverables: [
        "Responsive website or storefront",
        "Product catalogue and checkout where needed",
        "Admin tools for products and orders",
      ],
      timeline: "TODO_REPLACE: typical store timeline",
      price: "TODO_REPLACE: starting price and currency",
      cta: "Discuss your store",
    },
    {
      id: "operations",
      title: "POS & inventory systems",
      audience: "For shops, restaurants and teams managing daily operations.",
      deliverables: [
        "Order and billing workflows",
        "Inventory and business records",
        "Operational reports and admin tools",
      ],
      timeline: "TODO_REPLACE: typical POS timeline",
      price: "TODO_REPLACE: starting price and currency",
      cta: "Discuss your workflow",
    },
    {
      id: "app",
      title: "Custom web apps & dashboards",
      audience:
        "For businesses whose workflows need more than an off-the-shelf tool.",
      deliverables: [
        "Interfaces tailored to your workflow",
        "Backend APIs and database",
        "Business dashboards and integrations",
      ],
      timeline: "TODO_REPLACE: typical app timeline",
      price: "TODO_REPLACE: starting price and currency",
      cta: "Discuss your application",
    },
  ],
  alsoAvailable:
    "AI integrations, data dashboards, mobile apps, and backend / Web3 APIs.",
  process: [
    {
      title: "Discovery call",
      text: "Talk through your business, users and the problem you want to solve.",
    },
    {
      title: "Proposal & scope",
      text: "Agree on deliverables, a timeline and commercial terms before work starts.",
    },
    {
      title: "Build & weekly updates",
      text: "Review progress together and keep decisions connected to the agreed scope.",
    },
    {
      title: "Launch & support",
      text: "Plan handover, launch and any ongoing support around your needs.",
    },
  ],
  faq: [
    {
      question: "How much will my project cost?",
      answer:
        "Pricing depends on scope, integrations and complexity. Share your requirements for a tailored quote.",
    },
    {
      question: "How long does a project take?",
      answer:
        "A timeline is proposed after discovery, once requirements and dependencies are understood.",
    },
    {
      question: "Will I own the code?",
      answer:
        "Code ownership, access and any third-party licences will be set out in the proposal before work begins.",
    },
    {
      question: "Is support available after launch?",
      answer:
        "We can discuss handover and ongoing support as part of the scope.",
    },
    {
      question: "What are the payment terms?",
      answer:
        "Payment schedule, currency and milestones will be agreed in writing before work starts.",
    },
  ],
  policies: {
    ownership: "TODO_REPLACE: ownership terms",
    support: "TODO_REPLACE: support terms",
    payment: "TODO_REPLACE: payment terms",
  },
  skills: [
    {
      group: "Interfaces",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    { group: "Backend", items: ["Node.js", "Express", "REST APIs"] },
    { group: "Data", items: ["PostgreSQL", "Prisma", "SQLite"] },
  ],
  experience: [
    {
      company: "Rex Official",
      role: "Web Developer",
      period: "May 2025 – Present",
      text: "Building and maintaining the brand’s website and e-commerce platform.",
    },
    {
      company: "TechThree",
      role: "Frontend Developer → Backend Developer → Software Engineer",
      period: "Jun 2023 – Mar 2025",
      text: "React interfaces, Node.js APIs and PostgreSQL-backed applications.",
    },
    {
      company: "LaunchBox Pakistan",
      role: "MERN Stack Developer",
      period: "May 2023 – Jul 2023",
      text: "Full-stack web applications and prototypes for startups.",
    },
    {
      company: "QF Network",
      role: "MERN Stack Developer",
      period: "Nov 2022 – May 2023",
      text: "E-commerce and community platforms.",
    },
  ],
  featuredSlugs: [
    "e-commerce-platform-rex-official",
    "restaurant-pos-system",
    "baloch-builder",
  ],
  testimonialsEnabled: false,
  testimonials: [] as { quote: string; name: string; context: string }[],
  testimonialTodo:
    "TODO_REPLACE: approved testimonial, attribution and permission before enabling",
  projectProof: {
    "e-commerce-platform-rex-official": {
      results: "TODO_REPLACE: verified Rex results",
      testimonial: "TODO_REPLACE: approved Rex testimonial with attribution",
    },
    "restaurant-pos-system": {
      results: "TODO_REPLACE: verified POS results",
      testimonial: "TODO_REPLACE: approved POS testimonial with attribution",
    },
    "baloch-builder": {
      results: "TODO_REPLACE: verified Baloch Builder results",
      testimonial:
        "TODO_REPLACE: approved Baloch Builder testimonial with attribution",
    },
  } as Record<string, { results: string; testimonial: string }>,
  projectProofTodo:
    "TODO_REPLACE: add verified results and approved testimonials keyed by project slug",
};
export function whatsappUrl() {
  return `https://wa.me/${business.contact.whatsapp}?text=${encodeURIComponent(business.contact.whatsappMessage)}`;
}
