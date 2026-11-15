# CLIENT MISSING INPUTS — ShelveysWork

Only items that truly block completeness or need owner confirmation.

## 1. Additional portfolio / e-commerce samples (R04) — BLOCKED for content

Client requested: `+Add More Samples Like ecommerce , etc etc …`

**Missing from client package and local assets:**

- Exact project names  
- Live URLs  
- Screenshots / mockups owned by Shelvey  
- Approved challenge / solution / result copy  
- Permission to name clients publicly  

**Action taken:** Kept verified RNB Shipping + GSL Export LTD only. Data model is ready (`src/data/projects.ts`). No placeholder or invented projects shown.

**Needed from client:** list of real projects with media + approved text.

## 2. Technical Skills removal confirmation (R08) — implemented, confirm preferred

Document page 4 places a large orange X immediately above the Technical Skills screenshot (less explicit than Certifications).

**Action taken:** Technical Skills is **hidden** via `siteConfig.sections.skills = false` (reversible; data retained).

**Needed from owner:** confirm Skills should stay removed, or set `skills: true` to restore.

## 3. CV PDF (pre-existing gap)

Hero “CV” links to `/files/shelvey-dias-cv.pdf`, which was **not** in the cPanel backup.

**Needed:** supply the PDF to place at `public/files/shelvey-dias-cv.pdf`, or approve removing/hiding the CV button.

## 4. Email spelling confirmation (optional)

In-app / contact uses `shelveyedias@gmail.com` (as in previous production UI). HTML JSON-LD previously also had a variant spelling in older builds.

**Needed only if wrong:** correct canonical email for all contact surfaces.

## 5. Optional design assets

- Official booking calendar URL (if CTA should open booking instead of `#contact`) — **not invented**.  
- Dedicated icons/brand guidelines for the reference light service cards beyond current implementation.
