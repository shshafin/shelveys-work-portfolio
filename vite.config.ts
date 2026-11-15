import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages project site needs the repo base path; cPanel/root stays '/'.
const base = process.env.GITHUB_PAGES === 'true' ? '/shelveys-work-portfolio/' : '/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
