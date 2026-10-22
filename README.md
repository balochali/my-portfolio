# Ali Baloch — Portfolio

A responsive Next.js portfolio with a Three.js waving portrait, project filters, individual case studies, screenshot galleries, career timeline, and server-side email contact form.

## Local development

1. Run `npm install`.
2. Copy `.env.example` to `.env.local` and configure your SMTP provider.
3. Run `npm run dev` and open http://localhost:3000.

Run `npm run build` for a production build, then `npm start`. `npm run typecheck` checks TypeScript and `npm run lint` runs ESLint.

## Content

- Projects: `src/data/projectData.ts`
- Experience and education: `src/data/aboutData.ts`
- Social profiles: `src/data/portfolioData.ts`
- Main page and skills: `src/components/Portfolio.tsx`
- Design and responsive styles: `src/app/globals.css`
- Resume: `public/resume/ali_baloch.pdf`

Project demo links are shown only for HTTPS URLs. Replace placeholders with genuine public URLs when available. Existing career dates and project descriptions are preserved; review them before publishing.

## Contact form

The server action uses SMTP_PASS, SMTP_FROM, and CONTACT_EMAIL. Legacy SMTP_PASSWORD, EMAIL_FROM, and EMAIL_TO are also supported. It validates fields on the server, uses a verified sender plus reply-to, and sends plain-text email. Errors never expose SMTP details. A honeypot and a per-email, per-process one-minute cooldown provide basic abuse resistance. For multi-instance public deployment, add shared rate limiting or a bot challenge through your hosting provider.

## Motion and accessibility

Three.js loads separately from the page, caps pixel density, pauses outside the viewport or hidden tabs, and disposes GPU resources on unmount. Reduced-motion preferences disable continuous animation. If WebGL is unavailable, the original SVG portrait remains. Native links, labeled form fields, keyboard navigation, and manual gallery controls keep the content accessible.

## Personal avatar

The illustrated portrait is drawn from Ali's graduation photo. The editable SVG body and arm are in public/avatar/. WavingAvatar.tsx renders these as separate Three.js layers and rotates the shoulder joint for a short greeting on arrival. The Say hello button replays the wave. Reduced-motion visitors see a stationary greeting. Plus Jakarta Sans is hosted locally with its OFL license in public/fonts/.

