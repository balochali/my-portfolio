# Ali Baloch — Portfolio

A responsive Next.js portfolio with a Three.js waving portrait, project filters, individual case studies, screenshot galleries, career timeline, and server-side email contact form.

## Local development

1. Run `npm install`.
2. Copy `.env.example` to `.env.local` and configure your SMTP provider.
3. Run `npm run dev` and open http://localhost:3000.

Run `npm run build` for a production build, then `npm start`. `npm run typecheck` checks TypeScript and `npm run lint` runs ESLint.

## Content

- Hero copy, services, featured projects, skills and contact details: `src/data/offerData.ts`
- Projects (case studies, screenshots, links): `src/data/projectData.ts`
- Experience: `src/data/aboutData.ts`
- Home page sections: `src/components/` (Hero, FeaturedProjects, Services, SkillsMatrix, WorkExperience, ContactSection)
- Tokens, header and footer styles: `src/app/globals.css`; each section's styles sit next to its component
- Share image used by LinkedIn and other link previews: `public/og.png` (1200x630)
- Featured project covers (small WebP files): `public/project-images/covers/<slug>.webp`
- Resume: `public/resume/ali_baloch.pdf`

Set `NEXT_PUBLIC_SITE_URL` to the live domain so canonical, sitemap and share tags use the right address.

Project "Live link" buttons appear only for HTTPS `demoUrl` values. Add one to a project in `projectData.ts` and the button shows up on the home page and the case study.

## Contact form

The server action uses SMTP_PASS, SMTP_FROM, and CONTACT_EMAIL. Legacy SMTP_PASSWORD, EMAIL_FROM, and EMAIL_TO are also supported. It validates fields on the server, uses a verified sender plus reply-to, and sends plain-text email. Errors never expose SMTP details. A honeypot and a per-email, per-process one-minute cooldown provide basic abuse resistance. For multi-instance public deployment, add shared rate limiting or a bot challenge through your hosting provider.
