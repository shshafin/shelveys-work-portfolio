# CLIENT QA REPORT — ShelveysWork

Date: 2026-11-15  
Preview URL used: `http://127.0.0.1:4173/` (`npm run preview`)  
Live production: **not tested against deploy; not modified**

## Commands run

```bash
cd shelveyswork-app
npm install
npm run build    # tsc -b && vite build — PASS
npm run lint     # oxlint — PASS (1 pre-existing-style purity warning avoided by fixing Footer Date usage)
npm run preview -- --host 127.0.0.1 --port 4173
```

### Build result

- **PASS** — `dist/index.html`, `dist/assets/index-*.js`, `dist/assets/index-*.css`, public assets, `.htaccess` present in `dist/`.

## Viewport checks (Cursor browser)

| Viewport | Result |
|----------|--------|
| Desktop (~default / 1440-class) | PASS — white header, new CTA, updated hero copy, new portrait, 10 Years stats, services grid, case studies, contact address |
| Tablet (~768 emulation) | PASS for contact layout / content; nav collapses per `lg` breakpoint (<1024 uses hamburger) |
| Mobile (390×844 emulation) | PASS — portrait framing usable; hero content stacks |

## Interaction checks

| Check | Result |
|-------|--------|
| Primary nav labels match R02 | PASS |
| `Get a Free Consultation` scrolls to `#contact` | PASS |
| App Development / ERP / Digital Marketing anchors to service cards | Implemented (`#service-*` ids) |
| Skills section absent from DOM when flag false | PASS |
| Certificates section absent from DOM when flag false | PASS |
| Contact shows `Chattogram, Bangladesh` | PASS |
| RNB + GSL case studies visible | PASS |
| Mailto form present (not submitted in QA) | PASS — no real message sent |
| Chat assistant opens | Present (FAB) |
| Console 404 route logging | NotFound route exists for `*` |

## Known risks / intentional differences vs screenshots

1. **Not a pixel clone** of low-res Word screenshots; design direction followed (white/blue header, highlighted service cards) while retaining existing dark gold site identity.  
2. **CV link** still points to `/files/shelvey-dias-cv.pdf` — file not present in backup (pre-existing gap).  
3. **Testimonial avatar image files** were missing in production backup; UI uses initials fallback (no broken 404 avatars).  
4. **E-commerce case studies** not added — no verified client materials.  
5. Large original PNG (~2.7MB) kept; hero uses optimized JPG/WebP for delivery.  
6. Browser CDP image decode can lag on first paint of large assets; subsequent frames showed correct portrait.

## Runtime / console

- No build-time errors.  
- No empty fake project cards.  
- Form submit not exercised end-to-end (would open mail client).
