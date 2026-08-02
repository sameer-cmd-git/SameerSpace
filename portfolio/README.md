# Sameer Kulkarni — Portfolio

A Vite + React portfolio site.

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Build for production

```bash
npm run build
```

Outputs to `dist/`. Preview the production build with `npm run preview`.

## Deploy

Works out of the box on Vercel or Netlify — just connect the repo,
both platforms auto-detect Vite and build correctly with no extra config.

## Editing your content

Every section component lives in `src/components/`. Look for
`EDIT HERE` comments — they mark the spots meant for you to update:

- `Hero.jsx` — name, role
- `About.jsx` — bio, location
- **`src/projects.js`** — add your projects here. This is a plain data file
  (no component code) — just copy the example object, fill in your details,
  and add a comma. See the comments at the top of the file for all
  available fields (name, description, tags, repo link, and an optional
  second link for a demo/write-up/video). Delete a project by deleting its
  `{ ... }` block. The "Projects coming soon" placeholder disappears
  automatically once this file has at least one project in it.
- `Skills.jsx` — update the `rows` array at the top
- `Contact.jsx` — your real email, and wiring the form to a real backend
  (Formspree, EmailJS, etc.) when you're ready
- `Footer.jsx` — GitHub/LinkedIn links

The hero background image is `src/assets/jet-hero.jpg`. The section
divider (between About and Work) is now a plain CSS gradient — no image —
and the Contact section uses `src/assets/jet-tail.jpg` as a subtle
low-opacity background. Swap `jet-hero.jpg` or `jet-tail.jpg` (keep the
same filename, or update the import in the relevant component) to change
them.

## Type & visual style

Fonts are Geist (display/body) and Geist Mono (labels), both free and
hosted on Google Fonts — matches the typography used across most modern
React/Vercel-style sites and reactbits.dev.

A few lightweight, CSS-only motion effects (no extra dependencies) are
included in `src/index.css`, inspired by reactbits.dev's lighter-weight
components:
- `.aurora-card` — a soft ambient glow that drifts behind a card on hover
- `.tilt-card` — a subtle 3D-feeling lift on hover
- `.magnetic-btn` — a soft scale/lift on buttons
- `SplitText.jsx` — animates text in letter-by-letter (used in the hero).
  Pass `gradient` as a prop to apply a continuous metallic-blue gradient
  fill across the text instead of a flat color (used for the hero name).
- `.gradient-text` (in `index.css`) — a standalone gradient-fill utility
  class for any heading that isn't using `SplitText`.

These are deliberately CSS/JS-only, not WebGL/Three.js, to keep the install
light. If you want true 3D/WebGL effects later, reactbits.dev has Three.js
components — that would mean adding `three` as a dependency.

## Ambient background

`AmbientBackdrop.jsx` renders a fixed, full-page layer of three large,
blurred, softly colored gradient blobs that drift slowly behind all
content — inspired by the floating-gradient look of the Google Antigravity
site, done in pure CSS (no canvas/WebGL). It shows through on sections that
don't have their own photo background (About, Work, Skills, Footer). To
adjust colors or speed, edit the `.blob-a/b/c` rules and `@keyframes` in
that file.

