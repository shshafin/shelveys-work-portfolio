# CURSOR AGENT — SHELVEYSWORK CLIENT REQUIREMENTS IMPLEMENTATION

You are the lead React / frontend engineer implementing approved changes on ShelveysWork's RECOVERED, EDITABLE project (not on the cPanel production build).

## SOURCES OF TRUTH (READ FIRST)

1. The RECOVERED React project currently open in this Cursor workspace.
2. `client-handoff/requirements/WEBSITE_UPDAATE_SHELVEYSWORK_COM.docx` — the CLIENT'S original five-page requirement document, including embedded OLD/NEW UI screenshots and visual X marks. **Open/read the screenshots, not merely the extracted plain text.**
3. `client-handoff/assets/shelvey-portrait-updated.png` — the NEW, client-supplied portrait. Use its actual pixels; do not regenerate or alter the person's face.
4. The current site's running behavior and UI — baseline for preserving existing functionality.

The client wants the existing site UPDATED, NOT replaced with a completely different website. Preserve legitimate existing content/functionality except for explicitly requested removals or changes. Do not add invented clients, projects, testimonials, addresses, contact methods, or experience claims.

## STAGE 0 — SAFETY AND BASELINE

- Inspect `package.json`, source tree, routing, assets, current content, and existing build/deployment conventions.
- Confirm the recovered project is runnable/buildable locally, or establish precisely why not. Run available lint/typecheck/test/build scripts; capture baseline failures before edits.
- If Git exists, inspect status and avoid overwriting uncommitted work. Make a safe local snapshot/branch if appropriate; never use destructive reset/clean/force.
- No production cPanel changes, hosting uploads, DNS changes, or deployment. No external form submissions without authorization.
- The original backup and all `client-handoff` source files must remain intact.

## STAGE 1 — IMPLEMENT CLIENT'S REQUIREMENTS

### R01 — HERO PHOTO (PRIORITY)
- Replace the existing old hero/profile portrait with `client-handoff/assets/shelvey-portrait-updated.png` (copy the file into the project's appropriate public/source assets directory first).
- Keep the subject's face and appearance EXACTLY as supplied; do not apply AI retouching or facial edits.
- Implement responsive crop/fit/position so face and upper body remain well-framed on desktop/tablet/mobile, with no distortion; optimize delivery responsibly if the tooling supports lossless or high-quality derived assets. Keep original file available.
- Update descriptive alt text to accurately identify this as Shelvey Dias's portrait, given the document identifies the subject in the hero.

### R02 — HEADER AND NAVIGATION (DOC PAGE 1, OLD/NEW)
- The NEW visual reference shows a bright/white header, `SHELVEYSWORK` branding, dark navigation text and blue CTA, contrasted with the OLD dark header.
- Provide navigation with these reference labels, mapping them to real sections/routes on THIS actual project: `Services`, `App Development`, `ERP Solutions`, `Digital Marketing`, `Our Work`, `Contact`.
- Main CTA: EXACT text `Get a Free Consultation` and a working, relevant contact destination (existing real contact section/form or verified booking link). Do not invent a booking URL.
- Make mobile header accessible, keyboard-operable and usable at narrow widths. Avoid dead links. If no dedicated page exists for a category, link to a relevant service card/section rather than inventing a blank route.
- Remove outdated header menu items not in the NEW header reference, but do NOT treat a removed navigation item as permission to delete the corresponding content section unless separately requested.
- Match the screenshot's design direction while maintaining a cohesive overall site, not an exact pixel clone from a low-resolution reference.

### R03 — SERVICES (DOC PAGE 1)
- PRESERVE all relevant original services and their truthful existing content. The requirement explicitly says `+Add Highlighted Services along with previous…`.
- Add these FIVE highlighted-in-document service categories, without duplicating items already in the codebase:
  1. Mobile App Development
  2. ERP & Business Systems
  3. SaaS & Custom Software
  4. Business Automation
  5. Data & Dashboards
- The NEW screenshot also contains `Website Development`, `Digital Marketing & SEO`, `Social Media & Creative`, and `Support & Improvement` as reference examples. These are NOT all necessarily mandated new additions: use them to guide grouping and presentation; retain useful original services unless explicitly superseded.
- Adapt the card/grid layout to handle the combined original + new services cleanly across all devices; keep copy accurate and modest, no exaggerated capabilities. Service descriptions should be succinct and consistent with the client's stated positioning.
- Yellow highlighting inside the Word screenshot marks which service NAMES were called out for addition; it does NOT mean the live site needs yellow highlighter backgrounds.

### R04 — CASE STUDIES AND PROJECTS (DOC PAGE 2)
- Preserve the existing showcased real projects, including references to `RNB Shipping` and `GSL Export LTD` if they are present in the recovered project.
- The client says `+Add More Samples Like ecommerce , etc etc …` but provides NO exact project names, website URLs, screenshots, ownership details or approved copy.
- Search local project assets/data for genuinely existing, verifiable additional projects. If real e-commerce projects have verifiable names/media/details, add them via a clean reusable project data model and consistent cards.
- DO NOT invent projects, screenshots, URLs, client partnerships, outcomes or claim random e-commerce samples as Shelvey's work.
- If no verified new-project data exists, implement a scalable project collection/card structure and report the missing materials. Do not display blank/fake projects or generic placeholders on the user-facing live view.
- Ensure each new project card's interactions, images, links, and responsiveness work.

### R05 — CONTACT LOCATION (DOC PAGE 2)
- Change displayed contact/location address to EXACT: `Chattogram, Bangladesh`.
- Check all visible repeats and metadata where applicable. Preserve existing phone/email unless client has explicitly supplied different ones.
- Preserve existing contact form logic, validation and messaging integration; do not submit real messages during QA.

### R06 — HERO TEXT / POSITIONING (DOC PAGE 3)
Use the client's specified copy, preserving wording and punctuation:

POSITIONING / TITLE:
`Digital Solutions Strategist & Technology Growth Architect`

INTRO:
`Hi, I'm Shelvey Dias`

DESCRIPTION:
`I help businesses grow, innovate and operate smarter through technology and digital strategy. From website and mobile app development to ERP, SaaS solutions, business automation and performance-driven digital marketing, I turn business challenges into practical digital solutions.`

- Apply this to the correct hero content, preserving semantic heading structure and visual hierarchy.
- The example website text `ShelveysWork | Websites, ERP & SaaS Solutions` is an inspiration/reference title in the DOC, not a command to swap all brand text or invent a new site URL.

### R07 — EXPERIENCE METRICS (DOC PAGES 3 AND 5)
- Client explicitly specifies `Years of Experience: 10` and the screenshot marks an OLD `5+` years stat with `10Years`.
- Update the appropriate experience displays consistently to `10 Years` (or a visually equivalent expression of ten years); avoid contradictory old `5+ Years` or `10+` values unless an existing field clearly requires the plus sign and can be justified.
- Do not change unrelated truthful project counts, satisfaction rates or support numbers.

### R08 — REMOVALS (DOC PAGES 3 AND 4)
- The large orange X over `Academic & Professional Certifications` on page 3 clearly indicates REMOVE that section, plus its associated dead navigation/anchor links if necessary.
- Page 4 presents another large orange X directly above a `Technical Skills` screenshot. This strongly suggests Technical Skills should also be REMOVED, though the X is not directly over the screenshot, so the instruction is visually less explicit.
- Implement removal of the Certifications section. For Technical Skills, make a careful evidence-based judgment from the full document and current site, and treat this as a likely requested removal. If uncertainty remains material, isolate its visibility behind a safe reversible implementation and list this item for owner confirmation in the handoff. Do NOT delete source assets/data for either section, so removal is reversible.
- Do NOT automatically delete `Why Trust Me`, testimonials, process or other site sections merely because their header links no longer appear in the new navigation reference.

### R09 — VISUAL REFINEMENTS
- Follow the CLIENT'S NEW screenshots as intended design direction: clean professional layout, balanced white/blue sections for highlighted areas where shown, polished typography, responsive service cards, clear CTAs.
- Avoid an unrequested full-site redesign; retain existing branding coherence, content integrity, animations and performance where compatible with the client's new references.
- Keep contact and case study presentation professional and responsive; respect reduced-motion and keyboard accessibility.

## STAGE 2 — VERIFICATION (MANDATORY)

- Run build, lint/type-check, and relevant tests, fixing regressions introduced by edits.
- Verify desktop (1440x900), tablet (~768px wide), mobile (390x844 and ~375px wide) with available browser automation/browser preview; inspect nav, service grid, hero portrait positioning, project cards, contact, forms, anchors and footer.
- Check for JS console errors, image 404s, invalid navigation targets, horizontal overflow, cropped faces, awkward text overflow, layout shifts, inaccessible controls and broken deep links.
- Compare implemented sections with the embedded OLD/NEW screenshots and report intentional differences. Screenshots are low-resolution references, not direct copy-ready design assets.
- If browser verification is not available, mark it NOT VERIFIED; do not claim a full QA pass.

## STAGE 3 — REQUIRED HANDOFF

Create or update the following in a non-destructive way:
- `CLIENT_CHANGELOG.md` — checklist R01-R09: DONE / PARTIAL / BLOCKED, precise files changed.
- `CLIENT_QA_REPORT.md` — commands run, build/lint results, viewport checks, runtime/console/interaction findings, known risks.
- `CLIENT_MISSING_INPUTS.md` — only truly missing inputs, especially real e-commerce projects and any unresolved Technical Skills removal interpretation.
- `DEPLOYMENT_HANDOFF.md` — exact commands to build, which output folder to upload to cPanel, notes about `.htaccess` and SPA routing, rollback procedure. DOCUMENT ONLY; do not deploy.

## EXECUTION PRINCIPLES

Begin NOW. Inspect the recovered project and requirement DOCX, establish a local baseline, then implement the unambiguous changes end-to-end. Do not stop after an audit or produce only a plan. Work independently through source edits, local build and QA. Do not claim completion of project additions for which the client has supplied no verifiable content. Preserve existing working functionality, avoid unjustified redesigns and never touch live production. Conclude with a short factual report: completed, blocked, QA status, and deployment readiness.
