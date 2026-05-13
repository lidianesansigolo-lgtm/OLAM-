# AGENTS.md

Project architecture and conventions for AI agents working on this codebase.

## Project Overview

OLAM is an institutional luxury website for a high jewelry maison. It is not an e-commerce store. The site presents gemstones, objects, and brand philosophy through an archival/institutional visual language. Built with TanStack Start, deployed on Netlify.

## Directory Structure

```
src/
  components/
    Nav.tsx          # Fixed top nav with scroll detection + full-screen overlay menu
    Footer.tsx       # Multi-column footer
  routes/
    __root.tsx       # Root layout: Google Fonts, grain overlay, Nav, Footer wrapper
    index.tsx        # Home page: hero, selected objects, teasers
    manifesto.tsx    # Brand manifesto — editorial typography, museum feel
    objects.tsx      # 8 series: ESTRUTURA, ABISSAL, HORIZONTE, ÍON, DESVIO, VEIO, VOTO, PACTO
    atlas.tsx        # Interactive filterable mineral archive (16 entries)
    dia-da-pedra.tsx # Annual exceptional stone ritual — single stone, minimal
    process.tsx      # 6-stage craftsmanship process
    voto.tsx         # Engagement objects — anti-bridal language
    continuum.tsx    # Private members form (Netlify Forms: "continuum")
    contact.tsx      # Contact form (Netlify Forms: "contact")
  styles.css         # All CSS: Tailwind 4, CSS variables, custom classes, animations
public/
  contact-form.html  # Netlify Forms static skeleton (required for build-time detection)
```

## Key Architecture Decisions

### CSS Strategy
All custom CSS lives in `src/styles.css` alongside the Tailwind 4 import. Custom class names (`.atlas-entry`, `.t-display`, `.mineral-veio`, etc.) are defined there. Components use a mix of these custom classes and inline styles — not Tailwind utility classes — for the complex luxury design system.

### Mineral Texture Backgrounds
Gemstone textures are created entirely in CSS using layered `radial-gradient` and `linear-gradient`. Each series has a `.mineral-*` class (e.g. `.mineral-veio` for emerald, `.mineral-abissal` for tanzanite). These are augmented with SVG `feTurbulence` noise overlays applied as `background-image` inline.

### Navigation
The nav uses a two-layer system:
1. Fixed top bar with scroll detection (transparent → dark blur)
2. Full-screen overlay menu (toggled by hamburger, hidden on desktop) stored in Nav.tsx state

The overlay uses opacity + pointer-events for the open/close transition — not display toggling — to allow CSS transitions.

### Netlify Forms
Two forms exist: `contact` and `continuum`. Both POST to `/contact-form.html` (the static skeleton file in `public/`) with `application/x-www-form-urlencoded` encoding. The `form-name` hidden field maps to the registered form name. Do not change the fetch URL to `/` — that breaks SSR interception.

### Root Layout
`__root.tsx` uses TanStack Router's `shellComponent` (not `component`) to render the full HTML document. The `children` prop receives the entire route tree output. Nav and Footer are rendered inside `shellComponent`'s body.

### Hero Overlap
The hero on the home page uses `margin-top: calc(-1 * var(--nav-h))` to overlap with the fixed nav (which is transparent on scroll-top), creating the full-viewport effect. The `.page-wrap` div provides `padding-top: var(--nav-h)` for all other pages.

## CSS Variable Naming

```css
--moss       /* #2F3A34 — primary brand green */
--moss-deep  /* #1A2220 — darker backgrounds */
--mineral    /* #3E4A43 — secondary green */
--beige      /* #F4E7D3 — primary light/warm tone */
--grey       /* #EAE8E3 — light neutral */
--gold       /* #C7A86D — accent, labels, links */
--ink        /* #0f1412 — dark text on light backgrounds */
```

## Coding Conventions

- **TypeScript strict mode** — all route components are default exports
- **No product/shop language** — "Objects", "Series", "Archive" only
- **Gemstone data** — fictional but geologically accurate (Latin names, real origins, realistic carats)
- **Form encoding** — always `application/x-www-form-urlencoded` for Netlify Forms
- **Animations** — CSS only, `transform` and `opacity` only, slow (600ms–1200ms)
- **Images** — no external image URLs; all visuals are CSS gradient compositions

## Adding New Series

1. Add a `.mineral-{name}` class to `src/styles.css` with layered gradients matching the stone's color
2. Add the series entry to the `series` array in `src/routes/objects.tsx`
3. Add relevant Atlas entries to the `minerals` array in `src/routes/atlas.tsx`
4. Add the series name to `allSeries` filter array in `atlas.tsx`
