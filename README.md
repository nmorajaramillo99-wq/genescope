# GeneScope

Marketing site for GeneScope — "Transforming genomic data into scientific and clinical insights."

Stack: React + TypeScript + Tailwind CSS + React Router + lucide-react (Vite).

## Local development

```bash
npm install
npm run dev
```

## Project structure

```
src/
  components/
    Nav.tsx        shared liquid-glass nav bar (used on every page)
    Footer.tsx      shared footer
    PageShell.tsx   dark page wrapper (Nav + content + Footer) for non-home pages
  pages/
    Home.tsx        full-bleed video hero (the section you already saw)
    Platform.tsx
    Science.tsx
    Clinical.tsx
    Company.tsx
    Contact.tsx
    NotFound.tsx
  App.tsx           React Router routes
  index.css         font import + .liquid-glass + .font-heading
public/
  hero.mp4          background video for the Home hero
```

## Adding a new page

1. Create `src/pages/YourPage.tsx`. Simplest pattern — wrap content in `PageShell`,
   which already gives you the nav, footer, and dark background:

   ```tsx
   import PageShell from '../components/PageShell'

   function YourPage() {
     return (
       <PageShell>
         <h1 className="font-heading text-4xl md:text-5xl text-white tracking-tight mb-6">
           Your Page
         </h1>
         <p className="text-white/70 text-sm max-w-2xl leading-relaxed">
           Content goes here.
         </p>
       </PageShell>
     )
   }

   export default YourPage
   ```

2. Register the route in `src/App.tsx`:

   ```tsx
   import YourPage from './pages/YourPage'
   // ...
   <Route path="/your-page" element={<YourPage />} />
   ```

3. Add it to the nav links in `src/components/Nav.tsx` (`NAV_LINKS` array) if it
   should appear in the top bar.

Keep using `.liquid-glass` for any pill/card/button that should match the nav's
glass style, and `font-heading` for any serif display heading.

## Publishing to GitHub Pages

This repo already includes a GitHub Actions workflow at
`.github/workflows/deploy.yml` that builds and deploys automatically on every
push to `main`. It auto-detects the correct Vite `base` path from the repo
name, and adds a `404.html` fallback so client-side routes (e.g. `/platform`)
don't 404 on a hard refresh.

Steps:

1. Create a new **empty** repository on GitHub (don't initialize it with a
   README/.gitignore — this project already has them).
2. Push this project to it:

   ```bash
   git init
   git add .
   git commit -m "Initial GeneScope site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

3. In the GitHub repo, go to **Settings → Pages** and set **Source** to
   **GitHub Actions**.
4. Push (or re-run the workflow from the **Actions** tab). Once it finishes,
   your site is live at `https://<your-username>.github.io/<your-repo>/`.

If you later add a custom domain, add a `CNAME` file to `public/` with the
domain name, and the workflow will use `base: '/'` automatically once the repo
is renamed to `<username>.github.io`, or you can hardcode `base: '/'` in
`vite.config.ts` for a custom domain on a project repo too.
