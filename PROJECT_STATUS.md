# Project Status — Naomi Mora Portfolio

Holistic handoff notes for picking this project back up (human or a fresh
Claude session). For "how do I add a page / where do images go / how does
deploy work" — see `README.md`, which stays current with the code. This file
is the history + environment gotchas + what's-real-vs-placeholder snapshot
that don't belong in a normal README.

## What this is

A personal academic portfolio for **Naomi Mora** — biotechnology engineer,
MSc in Bioinformatics, researcher in genomics / molecular epidemiology / One
Health / pathogen surveillance (Ecuador-based, works with INSPI, USFQ,
BioElite). Built with React + TypeScript + Tailwind + React Router + Lenis,
deployed as a static site on GitHub Pages.

**Live:** https://nmorajaramillo99-wq.github.io/genescope/
**Repo:** https://github.com/nmorajaramillo99-wq/genescope (owner account:
`nmorajaramillo99-wq`, git identity: `nandan26` / `nmorajaramillo99@gmail.com`)

The repo is still named/hosted under `genescope` from an earlier iteration
(see History below) — nobody has asked to rename it yet. Renaming would
change the live URL, so don't do it without asking.

## History (why the code looks like it does)

1. **Started as "Janus Studio"** — a generic cinematic hero spec (video bg,
   liquid-glass nav/buttons, Instrument Serif font).
2. **Pivoted to "GeneScope"** — a bioinformatics-services company site, using
   real content from a PDF/Canva export of "G&M Bioinformatic Solutions"
   (QC, 16S rRNA, WGS, RNA-seq service sections). Single-page, anchor-nav,
   Lenis smooth scroll, Podium-style numbered glass-panel sections added
   later, fonts swapped to Geist Pixel (headings) / Lato (body).
3. **Pivoted again to Naomi's personal portfolio** (current state) — full
   sitemap with real routes (`react-router-dom` reintroduced), the old
   QC/16S/WGS/RNA-seq sections deleted. Kept the established visual system
   (liquid-glass, numbered sections, Lenis, fonts, grayscale-hover images)
   and reused it across the new page set.
4. Added an ambient background video (`sections-bg.mp4`, a "liquid glass DNA
   ribbon" clip) behind every non-Home page, dimmed with a scrim for
   legibility.

Two unrelated hero videos exist in `public/`:
- `hero.mp4` — the original DNA/holographic clip, full-bleed on Home only.
- `sections-bg.mp4` — the ribbon clip, fixed ambient background on every
  other route (see `src/components/AmbientBackground.tsx`).

## Environment gotchas (sandboxed Linux/WSL2 dev box)

These cost real time to work around — worth knowing before hitting them
again:

- **System Node is v12.22.9** (too old for Vite 5+/6+). Node 20 is installed
  via `nvm` (`~/.nvm`). Any shell needs `nvm use 20` (or a fresh terminal
  that sources `~/.bashrc`) before `npm run dev` / `npm run build` work.
- **`gh` CLI wasn't installed and there's no passwordless sudo.** Installed
  the binary directly to `~/.local/bin/gh` (no root needed). Authenticated
  via `gh auth login` (device code flow, user completed in their own
  browser). Needed `gh auth refresh -s workflow` once to get the `workflow`
  scope (pushing `.github/workflows/*.yml` requires it).
- **No headless browser available for screenshots**, and `playwright
  install --with-deps` fails (needs sudo for system libs). Workaround that
  worked: `apt-get download` the specific `.deb`s Chromium needs
  (`libgbm1`, `libasound2`, `libwayland-server0`, etc. — `ldd` on the
  chromium-headless-shell binary shows exactly which are missing), extract
  them with `dpkg-deb -x` into a scratch dir (no root needed), then set
  `LD_LIBRARY_PATH` to that dir before launching Playwright. This is
  session-scoped (lives in the scratchpad tmp dir) — a new session will need
  to redo it if screenshot verification is needed again.
- **Vite's dependency pre-bundle cache goes stale** when you `npm install`
  a new package while the dev server is already running (504 "Outdated
  Optimize Dep" errors, or worse, silently serves broken JS). Fix: kill the
  server, `rm -rf node_modules/.vite`, restart.
- Backgrounding the dev server with a compound `cmd && nohup ... &` in one
  Bash call sometimes exits 144 without actually starting the process in
  this sandbox — more reliable as its own single `nohup ... & disown`
  invocation.

## Deployment

- `.github/workflows/deploy.yml` builds and deploys on every push to `main`.
  Auto-detects the Vite `base` path from the repo name, copies
  `dist/index.html` → `dist/404.html` (GitHub Pages has no server-side
  rewrites, so this is what makes client-side routes like
  `/research/projects` survive a hard refresh — a real visitor gets a 404
  HTTP status but the SPA shell loads and React Router renders the right
  page; confirmed this works, don't be alarmed by `curl` showing 404s on
  sub-routes, that's expected).
- Contact form posts to a Google Apps Script Web App (see README for setup).
  A Google Sheet **"GeneScope Contact Submissions"** already exists at
  `https://docs.google.com/spreadsheets/d/1av7cVGCiWvj4J56i43Bta0mSZfM8gIgrOB6GZRQG620/edit`
  under `nmorajaramillo99@gmail.com`, with the header row in place. The
  Apps Script deployment step itself needs a human in a browser (OAuth
  consent can't be automated) — as of this writing it's unclear whether
  Naomi finished that step and set the `VITE_CONTACT_SHEET_URL` secret; if
  the live Contact form doesn't seem to be recording anything, check that
  first.

## Content status: real vs. placeholder

Keep this in sync with the table in README.md if it changes. As of the last
session:

- **Real, confirmed by Naomi:** Research Interests categories, Experience
  timeline (INSPI/BioElite/USFQ), Home page metrics, About page story text
  and lab photo (she wrote/added these herself directly, committed as
  "Complete About section[picture]").
- **Still placeholder:** Publications (only 1 unverified entry seeded),
  Projects (3 titles, but objective/methodology/collaborators fields are
  all placeholder text), Resources (6 placeholder download links), Teaching
  (empty category cards), Scientific Talks (2 dummy entries), Blog (topic
  ideas, not written posts), News (empty), Gallery (no photos), Footer
  profile links (LinkedIn/GitHub/ORCID/Google Scholar/ResearchGate all
  point to `#`), Collaborations (text pills, not real logos).

## Possible next steps (not started)

- Interactive world map of collaborations/conferences (Naomi's original
  spec mentioned this as a "nice to have" extra; skipped so far as scope
  creep — would need a mapping library).
- Renaming the repo away from `genescope` if desired.
- Filling in the placeholder content above.
