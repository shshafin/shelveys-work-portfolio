# ShelveysWork — maintainable React app

Vite + React + TypeScript + Tailwind reconstruction of shelveyswork.com with client-approved requirement updates applied locally.

## Quick start

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

Upload `dist/` contents to cPanel only after explicit approval. See `DEPLOYMENT_HANDOFF.md`.

## Key docs

- `CLIENT_CHANGELOG.md` — R01–R09 status  
- `CLIENT_QA_REPORT.md` — build / viewport / interaction results  
- `CLIENT_MISSING_INPUTS.md` — e-commerce samples, Skills confirmation, CV  
- `client-handoff/` — original client prompt, DOCX, portrait  

## Content editing

Centralized data lives in `src/data/`. Section visibility flags are in `src/data/siteConfig.ts`.
