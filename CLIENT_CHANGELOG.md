# CLIENT CHANGELOG — ShelveysWork Requirements (R01–R09)

Project path: `shelveyswork-app/`  
Implementation date: 2026-11-15  
Live cPanel: **not modified**

| ID | Requirement | Status | Notes / files |
|----|-------------|--------|---------------|
| **R01** | Replace hero portrait with client-supplied image | **DONE** | Copied `client-handoff/assets/shelvey-portrait-updated.png` to `public/`. Delivery uses lossless-intent WebP + high-quality JPEG derivatives; original PNG retained. Face not AI-edited. Alt text identifies Shelvey Dias. Files: `src/data/profile.ts`, `src/components/sections/Hero.tsx`, `public/shelvey-portrait-*` |
| **R02** | White/blue header + new nav + CTA | **DONE** | Nav: Services, App Development, ERP Solutions, Digital Marketing, Our Work, Contact. CTA exact: `Get a Free Consultation` → `#contact`. Mobile menu with aria attributes. Files: `src/data/navigation.ts`, `src/components/layout/Header.tsx`, `src/index.css` |
| **R03** | Keep prior services + add 5 highlighted | **DONE** | Added Mobile App Development, ERP & Business Systems, SaaS & Custom Software, Business Automation, Data & Dashboards. Preserved original services; avoided duplicate “Website Development” card (mapped to existing Web Development). File: `src/data/services.ts`, `src/components/sections/Services.tsx` |
| **R04** | Case studies + more samples | **PARTIAL** | Preserved RNB Shipping + GSL Export LTD. Scalable `caseStudies` data model ready. **No verified e-commerce projects found** in assets/data — none invented. File: `src/data/projects.ts`, `src/components/sections/Portfolio.tsx` |
| **R05** | Address → Chattogram, Bangladesh | **DONE** | Contact UI, footer, JSON-LD. Phone/email preserved. Files: `src/data/profile.ts`, `src/components/sections/Contact.tsx`, `src/components/layout/Footer.tsx`, `index.html` |
| **R06** | Hero positioning / intro / description | **DONE** | Exact client copy applied. Files: `src/data/profile.ts`, `src/components/sections/Hero.tsx` |
| **R07** | Years of Experience → 10 | **DONE** | Hero stats + Trust stats updated to 10 Years. Other metrics unchanged. Files: `src/data/profile.ts`, `src/data/trust.ts` |
| **R08** | Remove Certifications; Skills likely | **DONE** (reversible) | Certifications **hidden**. Technical Skills **hidden** based on X-mark evidence. Data/components retained; toggled via `siteConfig.sections`. File: `src/data/siteConfig.ts`, `src/pages/Home.tsx` |
| **R09** | Visual refinements | **DONE** | Light header + blue CTA; highlighted service cards use white/blue treatment; rest retains existing dark gold brand system (no full redesign). |

## Reconstruction note

No editable React source existed in the backup workspace. A maintainable Vite + React + TypeScript + Tailwind project was established under `shelveyswork-app/` from production content evidence, then client requirements were applied. This is a reconstruction, not recovered original source.

## Primary files touched

- `src/data/*` — centralized content & feature flags  
- `src/components/layout/Header.tsx`, `Footer.tsx`  
- `src/components/sections/*`  
- `src/pages/Home.tsx`, `NotFound.tsx`  
- `src/App.tsx`, `src/main.tsx`, `src/index.css`  
- `index.html`, `vite.config.ts`, `public/.htaccess`  
- `public/shelvey-portrait-updated.png` (+ `.webp`, `-hero.jpg`)  
