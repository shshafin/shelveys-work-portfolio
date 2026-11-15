# DEPLOYMENT HANDOFF — ShelveysWork

**DOCUMENT ONLY — do not deploy until explicitly approved.**

## Build commands

```bash
cd shelveyswork-app
npm install
npm run build
```

Optional local verification of the production build:

```bash
npm run preview -- --host 127.0.0.1 --port 4173
```

## Upload package

Upload the **contents** of:

```text
shelveyswork-app/dist/
```

to the cPanel document root (typically `public_html/`), **replacing** the previous SPA files.

### Expected top-level items after upload

- `index.html`
- `.htaccess` (SPA fallback — corrected RewriteCond syntax included)
- `assets/` (hashed JS/CSS from this build)
- Image/media files (`shelvey-portrait-*`, `rnb.webp`, `gsl.webp`, `img*.jpeg`, logos, certificates if kept for future restore, etc.)
- `robots.txt`, `favicon.ico`

### Important

1. After uploading the new `index.html`, remove **old** hashed bundles under `assets/` that are no longer referenced (avoid leaving `index.html` pointing at deleted files).  
2. Keep a full backup of the current live `public_html` before replacing anything.  
3. Absolute paths (`/assets/...`, `/shelvey-portrait-hero.jpg`) require the site to be served from domain root.  
4. If adding the CV later: upload to `public_html/files/shelvey-dias-cv.pdf` (create `files/` folder).

## `.htaccess` / SPA routing

`public/.htaccess` (copied into `dist/`) uses:

```apache
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-l
RewriteRule . /index.html [L]
```

This fixes the broken spaced `% {REQUEST_FILENAME}` pattern found in the old backup.

## Rollback

1. Restore the pre-upload cPanel backup archive of `public_html`.  
2. Or re-upload the previous production set (`index.html` + previous `assets/index-Brx4jBy-.js` + `assets/index-DAby1__y.css` + prior images).  
3. Clear browser/CDN cache if used.

## Feature toggles (post-deploy content ops)

Edit `src/data/siteConfig.ts` then rebuild:

- `sections.certificates` — currently `false`  
- `sections.skills` — currently `false`  

## Approval gate

No production upload, DNS, or hosting change has been performed by this implementation pass.
