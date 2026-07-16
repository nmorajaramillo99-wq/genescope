# Naomi Mora — Personal Portfolio

Academic portfolio site: biotech engineer / bioinformatics researcher working
on genomics, molecular epidemiology, One Health, and pathogen surveillance.

Stack: React + TypeScript + Tailwind CSS + React Router + Lenis + lucide-react (Vite).

## Local development

```bash
npm install
npm run dev
```

## Site map

```
/                        Home — hero, name/title/tagline, metrics
/about                   Story, Skills, Collaborations
/research                Research Interests, links to the three pages below
/research/projects       Current Projects
/research/publications   Publications
/research/resources      Protocols, scripts, pipelines, datasets
/experience              Career timeline + Scientific Talks
/teaching                Teaching & Mentoring
/blog                    Blog post list
/news                    Announcements
/gallery                 Photo grid
/contact                 Contact form (posts to a Google Sheet)
```

## Project structure

```
src/
  components/
    Nav.tsx          fixed liquid-glass nav pill + full-screen menu overlay
                       (Research expands inline to Projects/Publications/Resources)
    Footer.tsx        shared footer (profile links, phone, email)
    PageIntro.tsx      big title block used at the top of every non-Home page
    Section.tsx        numbered glass-panel content block (used within pages)
    Figure.tsx         liquid-glass image frame, grayscale by default, color on hover
    Reveal.tsx         scroll-triggered fade-up wrapper (IntersectionObserver)
    ScrollToTop.tsx    resets scroll position on route change (via Lenis)
  lib/
    asset.ts          path helper — always use this for anything in public/,
                       never a hardcoded "/..." string (see note below)
  pages/               one file per route, see site map above
  App.tsx              BrowserRouter + Routes + Nav/Footer shell
  index.css            font import, .liquid-glass, .font-heading, smooth scroll
public/
  hero.mp4             background video for the Home hero
  images/
    about/              lab photo for the About page
    gallery/            gallery photos
    collaborations/     (unused for now — Collaborations renders as text
                          pills; swap in logos here if you want images instead)
```

### Why `asset.ts` matters

Anything referenced with a hardcoded `/path` (e.g. `src="/hero.mp4"`) breaks
once the site is deployed under `https://<user>.github.io/<repo>/` —
`/hero.mp4` resolves to the domain root, not `/<repo>/hero.mp4`, and 404s.
`asset('images/...')` always prepends the correct base path, so use it for
every image, video, or other file under `public/`.

## What's real content vs. placeholder

Filled in as real content (from what you provided): Research Interests
categories, the Experience timeline (INSPI / BioElite / USFQ), and the Home
page metrics (15 publications, 9 projects, etc.).

Still placeholder — replace before this is truly done:

| Page | What's missing |
|---|---|
| About | Your personal story (currently just guiding prompts), a lab photo at `public/images/about/lab-photo.jpg` |
| Research → Publications | Only one seeded entry (Histoplasma paper) — verify its title/DOI, then add the rest of your bibliography |
| Research → Projects | Objective/methodology/collaborators/related publications are placeholder text on all three cards |
| Research → Resources | All six resource links are placeholders — attach real files or repo URLs |
| Experience | Scientific Talks section has two placeholder entries |
| Teaching | No real content yet — five empty category cards |
| Blog | Post titles are draft ideas, not written posts |
| News | Empty |
| Gallery | No photos yet — drop files into `public/images/gallery/` using the filenames listed in `src/pages/Gallery.tsx` |
| Footer | LinkedIn / GitHub / ORCID / Google Scholar / ResearchGate links all point to `#` — add your real profile URLs |

## Contact form → Google Sheet

The Contact form posts to a Google Apps Script Web App URL, which appends a
row to a Google Sheet. Setup (one-time, in your own Google account):

1. Create a new Google Sheet. Add a header row: `Timestamp | Name | Email | Message`.
2. **Extensions → Apps Script**, and replace the default code with:

   ```js
   function doPost(e) {
     const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
     sheet.appendRow([
       new Date(),
       e.parameter.name,
       e.parameter.email,
       e.parameter.message,
     ]);
     return ContentService
       .createTextOutput(JSON.stringify({ result: 'success' }))
       .setMimeType(ContentService.MimeType.JSON);
   }
   ```

3. **Deploy → New deployment → type: Web app.** Set "Execute as" to yourself
   and "Who has access" to **Anyone**. Deploy, and authorize when prompted.
4. Copy the Web app URL it gives you (ends in `/exec`).
5. For local dev: copy `.env.example` to `.env` and paste the URL into
   `VITE_CONTACT_SHEET_URL`.
6. For the deployed site: in the GitHub repo, go to **Settings → Secrets and
   variables → Actions**, add a repository secret named
   `VITE_CONTACT_SHEET_URL` with the same URL. The deploy workflow already
   passes it into the build.

## Adding a new page

1. Create `src/pages/YourPage.tsx`:

   ```tsx
   import PageIntro from '../components/PageIntro'
   import Section from '../components/Section'

   function YourPage() {
     return (
       <div className="min-h-screen bg-black">
         <PageIntro eyebrow="Eyebrow" title="Your Page" />
         <Section id="content" index={1} title="Section Title">
           <p className="text-white/70 text-sm leading-relaxed">Content goes here.</p>
         </Section>
       </div>
     )
   }

   export default YourPage
   ```

2. Register the route in `src/App.tsx`.
3. Add it to `NAV_LINKS` (or `RESEARCH_LINKS` for a Research sub-page) in
   `src/components/Nav.tsx` if it should appear in the menu.

## Publishing to GitHub Pages

Already wired up via `.github/workflows/deploy.yml` — every push to `main`
rebuilds and redeploys automatically, including the 404.html fallback that
makes client-side routes (e.g. `/research/projects`) survive a hard refresh.

```bash
git add .
git commit -m "..."
git push
```

Live at: https://nmorajaramillo99-wq.github.io/genescope/
