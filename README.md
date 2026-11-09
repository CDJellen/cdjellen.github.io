# cjellen.com (`cdjellen.github.io`)

Personal portfolio, research publications, and resume website for **Christopher Jellen**, built as a statically prerendered [SvelteKit](https://kit.svelte.dev/) application deployed to GitHub Pages (`cjellen.com`).

## Architecture & Paved Roads

The codebase follows a strict **Content-as-Typed-Data** architecture that separates domain content from presentation primitives:

```text
src/
├── app.css                         # Global design tokens, Tailwind layers, and typography utilities
├── app.html                        # HTML5 document shell
├── lib/
│   ├── assets/                     # Curated static media and Jellen_Resume.pdf
│   ├── data/
│   │   ├── types.ts                # Strict, immutable TypeScript domain interfaces
│   │   ├── icons.ts                # Centralized Devicon registry (ICONS)
│   │   └── content.ts              # Single source of truth for profile, experience, projects & publications
│   ├── components/
│   │   ├── Section.svelte          # Semantic <section> landmark with <h2> title & container layout
│   │   ├── Experience.svelte       # Experience card component (accepts ExperienceItem)
│   │   ├── Project.svelte          # Project card component (accepts ProjectItem)
│   │   ├── Publication.svelte      # Publication card component (accepts PublicationItem)
│   │   ├── Badge.svelte            # Technology icon badge primitive (accepts IconAsset)
│   │   └── Button.svelte           # External action link primitive (accepts ActionLink)
│   ├── Navbar.svelte               # Responsive fixed header and accessible navigation drawer
│   ├── Banner.svelte               # Hero banner section
│   ├── Experiences.svelte          # Experience section composition
│   ├── Projects.svelte             # Projects section composition
│   ├── Publications.svelte         # Publications section composition
│   ├── Resume.svelte               # Embedded PDF resume section & download action
│   └── Footer.svelte               # Site footer
└── routes/
    ├── +layout.ts                  # Enables full static prerendering (prerender = true)
    ├── +layout.svelte              # Root stylesheet boundary
    └── +page.svelte                # Declarative page composition and <svelte:head> metadata
```

## Updating Content

All portfolio content lives in [`src/lib/data/content.ts`](src/lib/data/content.ts) and is validated at compile time against [`src/lib/data/types.ts`](src/lib/data/types.ts):

- **Site Metadata & Navigation**: Edit `SITE_METADATA` in `src/lib/data/content.ts`.
- **Professional Experience**: Add or update entries in `EXPERIENCES` in `src/lib/data/content.ts`.
- **Projects**: Add or update entries in `PROJECTS` in `src/lib/data/content.ts` (referencing icons from `ICONS` in `src/lib/data/icons.ts`).
- **Publications**: Add or update entries in `PUBLICATIONS` in `src/lib/data/content.ts`.
- **Resume PDF**: Replace `src/lib/assets/Jellen_Resume.pdf`.

## Development & Quality Gates

```bash
# Start local development server with hot module replacement
npm run dev

# Run TypeScript and Svelte compiler diagnostics (0 errors, 0 warnings, 0 hints)
npm run check

# Verify formatting (Prettier) and static analysis (ESLint)
npm run lint

# Auto-format all files in the repository
npm run format

# Build static production output to ./web_dev
npm run build

# Preview production build locally
npm run preview
```

## Deployment

Running `npm run deploy` automatically executes the `predeploy` quality gate (`npm run check && npm run lint && npm run build`) before publishing the static `web_dev/` directory to the `docs` branch via [`gh-pages.js`](gh-pages.js):

```bash
npm run deploy
```
