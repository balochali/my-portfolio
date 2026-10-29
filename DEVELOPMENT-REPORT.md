# Portfolio refinement — development report

## Changes by requested task

1. **Client positioning:** Business-focused hero, project inquiry CTAs, configurable availability, persistent nav quote link and mobile CTA. Résumé is a low-priority About/footer link. Employer language and job inquiry option removed.
2. **Offers:** Three packages with audience, deliverables, timeline and starting-price slots. Unknown commercial details use neutral scope-based wording. Four-step process, secondary-capability line and five FAQs added.
3. **Proof:** Rex Official, Restaurant POS and Baloch Builder featured. All original project slugs retained, with `/projects` as the full catalogue. Every case study has overview, problem, implementation, stack, available links and a closing CTA; results and testimonials are gated. No project count or API-latency claim remains. Experience start date comes from the existing QF Network entry; no shipped-project count is inferred from portfolio entries.
4. **Credibility:** Unverified education hidden. Old certifications removed. Ten deduplicated skills and a compact, editable experience timeline replace the expanded capability lists.
5. **Contact:** Configured WhatsApp number and encoded message, optional booking/email/response-time fields, optional budget and timeline, hidden honeypot, client and server validation, pending/success/error states. Existing Nodemailer action and environment variable names preserved. No environment file changed.
6. **Structure:** Hero → offers → featured work → optional testimonials → process → About/skills/experience → FAQ → contact → footer.
7. **SEO:** Unique page titles, descriptions, OG/Twitter metadata, large-image cards, generated homepage/catalogue social images, case-study screenshots, conditional canonicals, sitemap, robots and Person/ProfessionalService JSON-LD.
8. **Design:** Cream/lime/dark-outline identity and system font retained. Unified spacing, card and button treatments; screenshot-led hero; responsive layouts and reduced-motion CSS.
9. **Quality:** Server-rendered main content, isolated interactive form/gallery, explicit image sizes, lazy-loaded gallery thumbnails/cards, optimized WebP screenshots. Removed unused animation/UI dependencies and unused font. Contact action tests use a mock SMTP transport.

## Business content checklist

All keys below are in `src/data/business.ts`. Values containing `TODO_REPLACE` or `TODO_VERIFY` are filtered out before visitor-facing rendering.

- [ ] `siteUrl`: confirmed public HTTPS origin. Until set, canonicals and sitemap entries are omitted; absolute social-image URLs cannot be verified. Rebuild after changing.
- [ ] `contact.email`: professional domain email. No Gmail address is rendered. SMTP delivery remains controlled by the existing environment variables.
- [ ] `contact.bookingUrl`: optional booking URL; hidden until set.
- [ ] `contact.responseTime`: confirm the 24-hour reply commitment or supply another accurate line; hidden until verified.
- [ ] `education`: verify degree, institution and graduation status/date; hidden until supplied.
- [ ] `stats[3].value`: verified shipped-project count; hidden until supplied.
- [ ] `packages[0].price` and `.timeline`: website/store starting price with currency and typical timeframe.
- [ ] `packages[1].price` and `.timeline`: POS/inventory starting price with currency and typical timeframe.
- [ ] `packages[2].price` and `.timeline`: custom app/dashboard starting price with currency and typical timeframe.
- [ ] `policies.ownership`, `policies.support`, `policies.payment`: decide commercial policies. These are editorial TODOs; update the corresponding `faq` answers when decided. No unconfirmed contractual promises appear on the site.
- [ ] `testimonialTodo`, `testimonials`: add approved quotes, names and contexts, then set `testimonialsEnabled` to `true`. Empty or placeholder entries remain hidden.
- [ ] `projectProof["e-commerce-platform-rex-official"].results` and `.testimonial`: verified outcomes and approved, attributed feedback.
- [ ] `projectProof["restaurant-pos-system"].results` and `.testimonial`: verified outcomes and approved, attributed feedback.
- [ ] `projectProof["baloch-builder"].results` and `.testimonial`: verified outcomes and approved, attributed feedback.
- [ ] `projectProofTodo`: add entries keyed by the other existing project slugs only when verified proof is available. Absent entries render nothing.

Also review the existing `contact.whatsapp`, `contact.whatsappMessage`, `availability`, `experience`, `stats`, package deliverables and proposed weekly-update process. These are editable in the same file. Project facts, screenshots and original URLs remain in `src/data/projectData.ts`.

## Local commands

```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
npm start
node --test tests/contact.test.mjs
```

The dev and production server use port 3000 by default. Run a build before `npm start`. Existing SMTP settings are required for real email delivery; no credentials or infrastructure settings were changed.

## Verification and limits

Contact tests cover success, optional fields, invalid inputs, honeypot rejection, duplicate throttling, missing SMTP configuration, and transport failures/retries. They send no email. Actual inbox delivery and external project links are not verified. Existing in-memory rate limiting is process-local and resets on restart.

Production checks and Lighthouse measurements are recorded below after the final QA pass.


### Final local checks

- `npm run lint`: passed.
- `npm run typecheck`: passed.
- `npm run build`: passed, generating 19 static entries including the project pages and metadata routes.
- `node --test tests/contact.test.mjs`: 5 tests passed.
- All 10 existing project URLs returned HTTP 200 with unique titles and `summary_large_image` metadata. Home, catalogue, robots, sitemap and both generated social images returned 200; an unknown route returned 404 with its own title.
- Browser checks: 360px, 768px, 1024px and 1366px homepage widths without horizontal overflow; catalogue and POS case study checked at 360px; mobile menu, keyboard gallery navigation and native required-field validation checked. Hidden honeypot and TODO values do not appear to visitors. No browser console errors were recorded.
- 31 WebP screenshot variants total 956,512 bytes versus 6,495,643 bytes for the source PNGs (about 85% smaller). Original image files remain available.
- No deployment, hosting, DNS, domain redirects, CI/CD or environment/infrastructure configuration was changed or executed.

### Lighthouse mobile

Final production homepage: **Performance 90 · Accessibility 100 · Best Practices 100 · SEO 100**, with cumulative layout shift **0**. Measured locally with Lighthouse 12.8.2, simulated mobile throttling and its default 412×823 mobile viewport. Scores vary with machine load and are not a guarantee of hosted performance.

Raw local reports: `work/lighthouse-final.report.html` and `.json`. Desktop/mobile screenshots: `work/portfolio-desktop.jpg` and `work/portfolio-mobile.jpg`. These QA files are local artifacts in the repository’s already-ignored `work` directory.

The build warns that `metadataBase` is unset because no confirmed public domain was supplied. Next.js currently resolves relative social URLs against localhost; set `business.siteUrl` and rebuild to produce production-ready absolute OG URLs, canonical tags and sitemap entries. The numerical Lighthouse SEO score does not validate that missing business setting.

Actual SMTP delivery, live external links, commercial terms and the accuracy of the carried-over employment dates were not independently verified. Screen-reader usability received semantic/automated checks, not a comprehensive assistive-technology audit. Form success/failure/loading behavior is implemented, with server success/failure tested through a mocked transport; no real inquiry was submitted.

The representative Restaurant POS case-study audit also scored **Performance 90 · Accessibility 100 · Best Practices 100 · SEO 100**, with CLS **0**. Reports: `work/lighthouse-case.report.html` and `.json`. Lighthouse still identifies potential savings from smaller responsive image variants and framework JavaScript; both audited pages meet the requested 90+ target.
