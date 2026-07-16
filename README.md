# GeneScope

Single-page marketing site for GeneScope — "Transforming genomic data into
scientific and clinical insights." Sections are reachable both by clicking
the nav and by scrolling.

Stack: React + TypeScript + Tailwind CSS + lucide-react (Vite).

## Local development

```bash
npm install
npm run dev
```

## Project structure

```
src/
  components/
    Nav.tsx        fixed liquid-glass nav bar, links scroll to section anchors
    Footer.tsx      shared footer (phone / email / contact anchor)
    Section.tsx     shared heading + layout wrapper for content sections
    Figure.tsx      liquid-glass image frame with optional caption
  lib/
    asset.ts        path helper — always use this for anything in public/,
                     never a hardcoded "/..." string (see note below)
  pages/
    Home.tsx        full-bleed video hero, id="home"
  sections/
    QualityControl.tsx      id="qc"
    SixteenSRrna.tsx        id="16s-rrna"
    WholeGenomeSequencing.tsx id="wgs"
    RnaSeq.tsx               id="rna-seq"
    Contact.tsx              id="contact", posts to Google Sheets
  App.tsx           renders Nav + Home + all sections + Footer, in order
  index.css         font import, .liquid-glass, .font-heading, smooth scroll
public/
  hero.mp4          background video for the Home hero
  images/
    qc/              images for the Quality Control section
    16s-rrna/         images for the 16S rRNA section
    wgs/              images for the Whole Genome Sequencing section
    rnaseq/           images for the RNA-seq section
```

### Why `asset.ts` matters

Anything referenced with a hardcoded `/path` (e.g. `src="/hero.mp4"`) breaks
once the site is deployed under `https://<user>.github.io/genescope/` —
`/hero.mp4` resolves to the domain root, not `/genescope/hero.mp4`, and
404s. This bit us twice already (favicon, hero video). `asset('images/...')`
always prepends the correct base path, so use it for every image, video, or
other file under `public/`.

## Where to put your pictures

Each section already has an `<img>` slot wired up and waiting — just drop
files into the matching folder using these exact names (or edit the `src`
prop in the section file if you'd rather use different filenames):

| Section | File to add | Used in |
|---|---|---|
| Quality Control | `public/images/qc/fastqc-before.jpeg` (raw reads) | `src/sections/QualityControl.tsx` |
| Quality Control | `public/images/qc/fastqc-after.jpeg` (trimmed reads) | `src/sections/QualityControl.tsx` |
| 16S rRNA | `public/images/16s-rrna/pcoa-plot.png` | `src/sections/SixteenSRrna.tsx` |
| 16S rRNA | `public/images/16s-rrna/alpha-diversity.png` | `src/sections/SixteenSRrna.tsx` |
| Whole Genome Sequencing | `public/images/wgs/phylogenomic-heatmap.png` | `src/sections/WholeGenomeSequencing.tsx` |
| RNA-seq | `public/images/rnaseq/volcano-plot.jpeg` | `src/sections/RnaSeq.tsx` |
| RNA-seq | `public/images/rnaseq/pca-plot.jpeg` | `src/sections/RnaSeq.tsx` |

Until a file exists at that path, the browser just shows a broken-image icon
with the `alt` text — harmless, and it'll fix itself the moment you add the
file. No code changes needed; `npm run dev` picks up new files in `public/`
immediately, and pushing to `main` redeploys automatically.

If you want to swap an image's expected filename, or add more images to a
section, just edit the `<Figure src="..." />` calls in that section's file.

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

Every submission appends a new row to that Sheet — no server to maintain,
and the data lives in your own Google Drive so it's trivially exportable /
shareable.

## Adding a new section

Follow the pattern in `src/sections/`:

```tsx
import Section from '../components/Section'
import Figure from '../components/Figure'

function YourSection() {
  return (
    <Section id="your-section" title="Your Section">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <p className="text-white/70 text-sm leading-relaxed">Content goes here.</p>
        <Figure src="images/your-section/chart.png" alt="Description" />
      </div>
    </Section>
  )
}

export default YourSection
```

Then register it in `src/App.tsx` (add the import + render it in the order
you want it to appear), and add a link to `NAV_LINKS` in
`src/components/Nav.tsx` if it should be clickable from the nav bar
(`href` should be `#your-section` to match the `id`).

## Publishing to GitHub Pages

Already wired up via `.github/workflows/deploy.yml` — every push to `main`
rebuilds and redeploys automatically. See git history for how the repo was
first connected, or:

```bash
git add .
git commit -m "..."
git push
```

Live at: https://nmorajaramillo99-wq.github.io/genescope/
