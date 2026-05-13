# OLAM — Maison de Haute Joaillerie

An institutional luxury website for OLAM, a high jewelry maison guided by time, matter, and permanence. The site functions as an archival institution — not an e-commerce store — presenting objects, gemstones, and the philosophy of the maison.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start (SSR) |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + custom CSS variables |
| Fonts | Cormorant (serif) + Jost (sans) via Google Fonts |
| Forms | Netlify Forms |
| Deployment | Netlify |

## Running Locally

```bash
npm install
npm run dev
```

Development server runs at `http://localhost:3000`. Netlify dev proxy (port 8888) is available via the Netlify CLI.

> Note: Netlify Forms submissions require a deployed Netlify environment — they will not work in local development.

## Pages

| Route | Page |
|-------|------|
| `/` | Home — hero, selected objects, archive teasers |
| `/objects` | Objects — all 8 series in editorial layout |
| `/atlas` | Atlas Mineral — interactive filterable gemstone archive |
| `/manifesto` | Manifesto — brand philosophy |
| `/process` | Process — 6 stages of craftsmanship |
| `/voto` | Voto — engagement/commitment objects |
| `/dia-da-pedra` | Dia da Pedra — annual exceptional stone ritual |
| `/continuum` | Continuum — private archive council access |
| `/contact` | Contact — private appointment requests |

## Brand

- **Colors**: Deep Moss Green (#2F3A34), Mineral Beige (#F4E7D3), Muted Gold (#C7A86D)
- **Typography**: Cormorant (editorial serif), Jost (architectural sans)
- **Tone**: Restrained, intellectual, mineral, archival
