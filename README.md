# The Forte Project

**Music Education Without Borders** — the official website for The Forte
Project, a youth-led music education initiative connecting talented high school
musicians with underprivileged students around the world through free virtual
lessons.

Built to feel like a polished nonprofit / university initiative: minimal,
elegant, and inspiring, with subtle musical elements and a restrained palette of
white, navy, charcoal, and gold.

## Tech stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for smooth, tasteful animation
- **Lucide React** for icons
- Fully responsive, accessible (skip links, focus rings, reduced-motion
  support), SEO-optimized (metadata, Open Graph, JSON-LD, sitemap, robots), and
  ready to deploy on **Vercel**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # lint
```

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata, nav + footer
│   ├── page.tsx            # Home
│   ├── volunteer/page.tsx  # Volunteer
│   ├── apply/page.tsx      # Student application
│   ├── sitemap.ts, robots.ts, manifest.ts, icon.svg
│   └── globals.css
├── components/
│   ├── Navbar.tsx, Footer.tsx
│   ├── ui/                 # Reusable primitives (Button, Card, Section, …)
│   ├── decor/              # Music-themed SVG illustrations
│   ├── home/               # Home page sections
│   ├── volunteer/          # Volunteer page sections
│   └── apply/              # Apply page sections
└── lib/
    ├── site.ts             # Site + form configuration (single source of truth)
    └── motion.ts           # Shared Framer Motion variants
```

## Replacing the placeholder Google Forms

Every form is a placeholder until you connect a real Google Form. All form
configuration lives in **one file**: [`src/lib/site.ts`](src/lib/site.ts).

For each form (`volunteer`, `performance`, `theory`):

1. Open your Google Form → **Send** → the **`< >`** (embed) tab.
2. Copy the URL inside the iframe's `src="..."` attribute → paste as `embedUrl`.
3. Copy the normal shareable link → paste as `shareUrl`.

The moment `embedUrl` is set, the embedded form renders in place of the
placeholder — no component changes required. `shareUrl` powers the CTA buttons.

## Editing copy & contact details

- Site name, tagline, email, and social links: `src/lib/site.ts` → `siteConfig`.
- Social links are placeholders (`#`) — replace with real URLs when ready.

## Deploying to Vercel

1. Push this repository to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no configuration needed. Deploy.

> Set `siteConfig.url` in `src/lib/site.ts` to your production domain so
> canonical URLs, Open Graph tags, and the sitemap point to the right place.
