# Cybersnitch — Device Recovery Website

A premium, fully static marketing website for **Cybersnitch**, a cybersecurity company
that tracks and locates missing devices. Built with React, Vite, TypeScript, and
Tailwind CSS v4. No backend, no database, no API keys required.

## Features

- Dark "signal room" design with a full light mode (persisted in localStorage)
- Animated hero with a live-feeling radar/telemetry panel (pure CSS/SVG)
- Services with expandable technical details
- Scroll-driven 5-step recovery process
- Technology architecture diagram
- Filterable project showcase (all client-side)
- Animated stat counters
- Testimonial carousel (auto-advances, pauses on hover)
- Searchable FAQ accordion
- Contact form that opens the visitor's email app (mailto) — or posts to an
  external form endpoint if you configure one
- Ctrl/⌘+K command palette for quick navigation
- Loading screen, cursor glow (desktop only), back-to-top button
- Legal pages: Privacy, Terms, Cookies (placeholder content, marked for legal review)
- Themed 404 page
- Full SEO metadata, robots.txt, sitemap.xml, social preview image
- Responsive from 320px to 1920px; respects `prefers-reduced-motion`

## Tech stack

React 19 · Vite 7 · TypeScript · Tailwind CSS v4 · TanStack Router · lucide-react icons

## Folder structure

```
src/
├── components/        # Navbar, Hero, Services, Showcase, Footer, …
├── config/site.ts     # ← company name, email, phone, socials, contact mode
├── data/              # ← services, projects, testimonials, faq, stats, process
├── hooks/             # useTheme, useReveal, useCountUp
├── routes/            # index, privacy, terms, cookies (+ 404 in __root)
├── styles.css         # design tokens (colors, fonts, animations)
public/
├── images/            # hero / projects / team / backgrounds / icons
├── images/social-preview.jpg
├── robots.txt
└── sitemap.xml
```

## Editing content

Almost everything editable lives in two places:

- **`src/config/site.ts`** — company name, tagline, email, phone, address, social
  links, contact form mode, logo toggle.
- **`src/data/*.ts`** — services, projects, testimonials, FAQ, stats, process steps.

No component edits needed for ordinary content changes.

### Logo

Drop a file at `public/images/logo.png` and set `logoImage: true` in
`src/config/site.ts`. Replace `public/favicon.ico` for the browser tab icon.

### Images

Demo images live in `public/images/projects/`. Replace them with your own
(same filenames, or update `src/data/projects.ts`). The social share image is
`public/images/social-preview.jpg` (1200×630).

### Contact form

Default mode is `mailto` — it opens the visitor's email app with the message
pre-filled. To use a form service (Formspree, Getform, …) instead, set in
`src/config/site.ts`:

```ts
contactMode: "endpoint",
contactEndpoint: "https://formspree.io/f/your-id",
```

### Theme colors

All colors are CSS variables in `src/styles.css` (`:root` for light, `.dark` for
dark). Change `--signal` / `--signal2` to re-theme the accent.

## Local development

```bash
bun install   # or npm install
bun run dev   # or npm run dev
```

## HOW TO DEPLOY TO GITHUB PAGES

1. **Create a GitHub repository** (e.g. `cybersnitch`) and push this project:
   ```bash
   git init
   git add .
   git commit -m "Cybersnitch website"
   git remote add origin https://github.com/YOUR-USERNAME/cybersnitch.git
   git push -u origin main
   ```

2. **Build with your repository name as the base path** (this is the one step
   people forget — asset paths must include the repo name):
   ```bash
   VITE_BASE_PATH=/cybersnitch/ bun run build
   ```
   Replace `cybersnitch` with your actual repository name. If you use a custom
   domain or `username.github.io` as the repo name, just run `bun run build`.

3. **Publish the build output.** The easiest beginner-friendly way:
   - Install the `gh-pages` package: `bun add -d gh-pages`
   - Run: `bunx gh-pages -d dist` (or `npx gh-pages -d dist`)
   - This pushes the built site to a `gh-pages` branch.

   Alternative: in your repo on GitHub go to **Settings → Pages**, choose
   "Deploy from a branch", and select the branch/folder where your build output
   lives.

4. **Enable Pages** (if not already): **Settings → Pages → Source → gh-pages
   branch → Save**. Your site appears at
   `https://YOUR-USERNAME.github.io/cybersnitch/` within a minute or two.

5. **After deployment**, update `src/config/site.ts` (`url`) and
   `public/sitemap.xml` with your real URL, then rebuild and redeploy.

### Custom domain

Add a `CNAME` file containing your domain to the `public/` folder, point your
DNS at GitHub (`A` records to GitHub's IPs or a `CNAME` to
`YOUR-USERNAME.github.io`), and set the domain in **Settings → Pages**. With a
custom domain you can build without `VITE_BASE_PATH`.

### Troubleshooting

- **Blank page / broken styles:** you forgot `VITE_BASE_PATH=/REPO-NAME/` at
  build time. Rebuild with it set.
- **404 on refresh of /privacy etc.:** GitHub Pages serves `404.html` for
  unknown paths; copy `dist/index.html` to `dist/404.html` after building so
  client-side routes load:
  ```bash
  cp dist/index.html dist/404.html
  ```
- **Images not loading:** keep image paths relative (`images/...`, no leading
  slash) — the project already does this.

## Notes

- Statistics and testimonials are clearly marked demo data — replace them with
  real, verifiable figures before going live.
- Legal pages are placeholder templates, not legal advice.
- No secrets, keys, or credentials belong in this codebase — it is a public
  static site.
