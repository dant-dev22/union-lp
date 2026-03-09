# Union BJJ & MMA — Team Website

Modern, high-performance single-page application (SPA) for a Brazilian Jiu Jitsu and MMA team. Built with React, TailwindCSS, React Router, Headless UI, and Framer Motion. Mobile-first, dark theme, accessible, and SEO-friendly.

## Tech Stack

- **React 18** (latest stable)
- **Vite** — build tool and dev server
- **TailwindCSS** — utility-first styling
- **React Router v6** — client-side routing
- **Headless UI** — accessible modals and disclosure (accordions)
- **Framer Motion** — subtle animations
- **react-helmet-async** — dynamic meta tags and SEO

## Folder Structure

```
union-lp-2026/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── athletes/
│   │   │   ├── AthleteCard.jsx      # Athlete grid card
│   │   │   └── AthleteModal.jsx     # Athlete popup modal
│   │   ├── events/
│   │   │   └── EventItem.jsx        # Event row + accordion
│   │   ├── layout/
│   │   │   └── Navbar.jsx           # Fixed nav + mobile menu
│   │   ├── seo/
│   │   │   └── DocumentHead.jsx     # Helmet wrapper for meta tags
│   │   └── ui/
│   │       ├── LazyImage.jsx        # Lazy-loaded image
│   │       └── Modal.jsx            # Reusable modal (Headless UI)
│   ├── data/
│   │   └── mockData.js              # Athletes, events, rankings
│   ├── hooks/
│   │   └── useSEO.js                # SEO meta helper
│   ├── pages/
│   │   ├── Home.jsx                 # Hero + CTAs
│   │   ├── Athletes.jsx             # Athletes grid + modal
│   │   ├── AthleteDetail.jsx        # Full athlete profile
│   │   ├── Events.jsx               # Events list (accordion)
│   │   └── Rankings.jsx             # Rankings by division
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## How to Run Locally

### Prerequisites

- **Node.js** 18+ (recommended: 20 LTS)
- **npm**, **yarn**, or **pnpm**

### 1. Install dependencies

From the project root:

```bash
npm install
```

Or with yarn:

```bash
yarn install
```

Or with pnpm:

```bash
pnpm install
```

### 2. Start the development server

```bash
npm run dev
```

Then open **http://localhost:5173** in your browser. The dev server supports hot module replacement (HMR).

### 3. Build for production

```bash
npm run build
```

Output is written to the `dist/` folder.

### 4. Preview production build locally

```bash
npm run preview
```

Serves the `dist/` build locally (e.g. http://localhost:4173).

## Scripts Reference

| Command        | Description                    |
|----------------|--------------------------------|
| `npm run dev`  | Start Vite dev server          |
| `npm run build`| Production build into `dist/`  |
| `npm run preview` | Serve production build locally |

## Features

- **SPA** with client-side routing (React Router).
- **Dark theme** (charcoal + accent orange), athletic aesthetic.
- **Mobile-first** layout; responsive navbar with hamburger menu.
- **Semantic HTML** and heading hierarchy for SEO.
- **Dynamic meta tags** per page via `react-helmet-async` and `useSEO`.
- **Lazy-loaded images** via custom `LazyImage` component.
- **Accessible** modals and disclosure (Headless UI), focus management, ARIA where needed.
- **Subtle animations** with Framer Motion (hero, cards, lists).
- **Mock data** for athletes, events, and rankings in `src/data/mockData.js`.

## Component Breakdown

| Component | Role |
|-----------|------|
| `Navbar` | Fixed top nav, logo, desktop links, mobile hamburger (Headless UI `Dialog`), scroll blur |
| `DocumentHead` | Wraps `react-helmet-async`; renders title, description, canonical, Open Graph, Twitter, optional JSON-LD |
| `useSEO` | Hook that returns meta object for current route (title, description, image, canonical, etc.) |
| `LazyImage` | `loading="lazy"` img with fade-in and optional placeholder |
| `Modal` | Headless UI `Dialog` wrapper with overlay and panel; used for athlete popup |
| `AthleteCard` | Grid card: thumb, name, weight class, record; click opens modal |
| `AthleteModal` | Full athlete popup: image, bio, social links, upcoming fights, “Ver perfil completo” → detail page |
| `EventItem` | One event row: date, title, location, price, avatars; Headless UI `Disclosure` for accordion body (description, CTA) |
| Pages | `Home` (hero + CTAs), `Athletes` (grid + modal), `AthleteDetail` (hero, bio, stats, fight history, titles, videos), `Events` (list of `EventItem`), `Rankings` (sections by division with table rows) |

## SEO Setup Example

- **Default meta:** `index.html` has `title`, `description`, `theme-color`.
- **Per-page meta:** Each page uses `useSEO({ title, description, image?, type? })` and passes the result to `<DocumentHead {...seo} />`. Optional `structuredData` (e.g. `SportsOrganization` on Home) is passed as `structuredData={structuredData}` for JSON-LD.
- **Dynamic athlete pages:** `AthleteDetail` sets title to athlete name and description to bio; image uses athlete image URL (full URL supported in `useSEO`).

## Customization

- **Site name / SEO:** Edit `siteMeta` in `src/data/mockData.js` and meta in `index.html`.
- **Theme colors:** Adjust `charcoal` and `accent` in `tailwind.config.js`.
- **Content:** Replace or extend arrays in `src/data/mockData.js` and wire to real APIs as needed.

## License

Private / project-specific. Adjust as needed.
