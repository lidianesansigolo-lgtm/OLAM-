import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/atlas')({
  component: Atlas,
  head: () => ({
    meta: [{ title: 'Atlas Mineral — OLAM' }],
  }),
})

type MineralEntry = {
  code: string
  latinName: string
  commonName: string
  origin: string
  weight: string
  series: string
  year: number
  mineralClass: string
  notes: string
}

const minerals: MineralEntry[] = [
  { code: 'ESTRUTURA-001', latinName: 'Adamas Purissimus', commonName: 'Diamond', origin: 'Golconda, India', weight: '3.21 ct', series: 'ESTRUTURA', year: 2019, mineralClass: 'mineral-estrutura', notes: 'Type IIa. Exceptional transparency. Historical provenance.' },
  { code: 'ESTRUTURA-007', latinName: 'Adamas Crystallus', commonName: 'Diamond', origin: 'Mirny, Russia', weight: '2.84 ct', series: 'ESTRUTURA', year: 2021, mineralClass: 'mineral-estrutura', notes: 'Octahedral crystal. Minimal inclusions. High dispersion.' },
  { code: 'ESTRUTURA-014', latinName: 'Adamas Geometricus', commonName: 'Diamond', origin: 'Jwaneng, Botswana', weight: '4.10 ct', series: 'ESTRUTURA', year: 2023, mineralClass: 'mineral-estrutura', notes: 'D color. IF clarity. Natural crystal faces retained.' },
  { code: 'ABISSAL-003', latinName: 'Tanzanitus Obscurus', commonName: 'Tanzanite', origin: 'Merelani, Tanzania', weight: '5.60 ct', series: 'ABISSAL', year: 2020, mineralClass: 'mineral-abissal', notes: 'Deep saturation. Strong trichroism across blue, violet, burgundy.' },
  { code: 'ABISSAL-009', latinName: 'Tanzanitus Profundus', commonName: 'Tanzanite', origin: 'Merelani, Tanzania', weight: '7.14 ct', series: 'ABISSAL', year: 2022, mineralClass: 'mineral-abissal', notes: 'Vivid violet-blue. Minimal heat treatment. Block D origin.' },
  { code: 'HORIZONTE-002', latinName: 'Aquamarina Caelestis', commonName: 'Aquamarine', origin: 'Santa Maria, Brazil', weight: '8.32 ct', series: 'HORIZONTE', year: 2019, mineralClass: 'mineral-horizonte', notes: 'Santa Maria hue. High clarity. Elongated hexagonal prism.' },
  { code: 'HORIZONTE-011', latinName: 'Aquamarina Glacialis', commonName: 'Aquamarine', origin: 'Gilgit, Pakistan', weight: '6.45 ct', series: 'HORIZONTE', year: 2023, mineralClass: 'mineral-horizonte', notes: 'Pale icy blue. Near-flawless. Natural crystal termination.' },
  { code: 'ION-001', latinName: 'Tourmalis Neonatus', commonName: 'Paraíba Tourmaline', origin: 'Paraíba, Brazil', weight: '1.04 ct', series: 'ÍON', year: 2018, mineralClass: 'mineral-ion', notes: 'Copper-bearing. Neon teal. Brazilian origin confirmed by trace analysis.' },
  { code: 'ION-004', latinName: 'Tourmalis Cupricius', commonName: 'Paraíba Tourmaline', origin: 'Paraíba, Brazil', weight: '0.78 ct', series: 'ÍON', year: 2020, mineralClass: 'mineral-ion', notes: 'Electric blue-green. High copper content. Extremely rare.' },
  { code: 'DESVIO-005', latinName: 'Adamas Flavus', commonName: 'Fancy Yellow Diamond', origin: 'Argyle, Australia', weight: '2.10 ct', series: 'DESVIO', year: 2021, mineralClass: 'mineral-desvio', notes: 'Fancy Intense Yellow. Nitrogen aggregates (IaAB type). Natural color.' },
  { code: 'DESVIO-008', latinName: 'Adamas Citrinus', commonName: 'Fancy Yellow Diamond', origin: 'Kimberley, S. Africa', weight: '3.44 ct', series: 'DESVIO', year: 2022, mineralClass: 'mineral-desvio', notes: 'Fancy Vivid Yellow. Historical Kimberley provenance. VS1 clarity.' },
  { code: 'VEIO-012', latinName: 'Smaragdus Antiquus', commonName: 'Emerald', origin: 'Muzo, Colombia', weight: '6.18 ct', series: 'VEIO', year: 2020, mineralClass: 'mineral-veio', notes: 'Muzo green. Minor oil treatment. Jardin confirms Colombian origin.' },
  { code: 'VEIO-021', latinName: 'Smaragdus Rarus', commonName: 'Emerald', origin: 'Muzo, Colombia', weight: '4.72 ct', series: 'VEIO', year: 2023, mineralClass: 'mineral-veio', notes: 'Deep Muzo green. Minimal inclusions. Cedar oil only.' },
  { code: 'VOTO-003', latinName: 'Adamas Purus', commonName: 'Diamond', origin: 'Jwaneng, Botswana', weight: '2.54 ct', series: 'VOTO', year: 2021, mineralClass: 'mineral-voto', notes: 'G color. VS2. Cut to emphasize depth over brilliance.' },
  { code: 'PACTO-001', latinName: 'Rubinus Sacrus', commonName: 'Ruby', origin: 'Mogok, Myanmar', weight: '3.76 ct', series: 'PACTO', year: 2019, mineralClass: 'mineral-pacto', notes: 'Pigeon blood. Mogok valley. Minor heat treatment.' },
  { code: 'PACTO-004', latinName: 'Beryllus Sanctus', commonName: 'Emerald', origin: 'Panjshir, Afghanistan', weight: '4.28 ct', series: 'PACTO', year: 2022, mineralClass: 'mineral-pacto', notes: 'Panjshir green. High transparency. No treatment confirmed.' },
]

const allSeries = ['All', 'ESTRUTURA', 'ABISSAL', 'HORIZONTE', 'ÍON', 'DESVIO', 'VEIO', 'VOTO', 'PACTO']

export default function Atlas() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState<MineralEntry | null>(null)

  const filtered = active === 'All' ? minerals : minerals.filter((m) => m.series === active)

  return (
    <>
      {/* ── HEADER ───────────────────────────────────────────── */}
      <section className="pad-section bg-deep">
        <div className="container">
          <div className="t-label t-gold" style={{ marginBottom: '1.5rem' }}>
            OLAM · Atlas Mineral
          </div>
          <h1
            className="t-display"
            style={{ fontSize: 'clamp(2.5rem,6vw,5rem)', color: 'var(--beige)', marginBottom: '1rem' }}
          >
            Geological archive.
          </h1>
          <p className="t-body t-muted" style={{ maxWidth: '480px', marginBottom: '3rem' }}>
            {minerals.length} stones catalogued. Origin, weight, series, geological year. Not a
            catalogue of commerce — a record of matter.
          </p>

          {/* Filter */}
          <div className="filter-pills">
            {allSeries.map((s) => (
              <button
                key={s}
                className={`filter-pill ${active === s ? 'active' : ''}`}
                onClick={() => setActive(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRID ─────────────────────────────────────────────── */}
      <section className="bg-deep">
        <div className="atlas-grid">
          {filtered.map((entry) => (
            <div
              key={entry.code}
              className="atlas-entry"
              onClick={() => setSelected(selected?.code === entry.code ? null : entry)}
            >
              <div className="atlas-code">{entry.code}</div>
              <div className="atlas-latin">{entry.latinName}</div>
              <div className="atlas-detail">
                {entry.origin}<br />
                {entry.series} series · {entry.year}
              </div>
              <div className="atlas-weight">{entry.weight}</div>

              {selected?.code === entry.code && (
                <div
                  style={{
                    marginTop: '1.25rem',
                    paddingTop: '1.25rem',
                    borderTop: '1px solid rgba(199,168,109,0.12)',
                  }}
                >
                  <div
                    className={entry.mineralClass}
                    style={{
                      height: '80px',
                      borderRadius: '2px',
                      marginBottom: '1rem',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  />
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.72rem',
                      fontWeight: 300,
                      letterSpacing: '0.05em',
                      color: 'rgba(244,231,211,0.55)',
                      lineHeight: 1.8,
                    }}
                  >
                    {entry.notes}
                  </p>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.58rem',
                      letterSpacing: '0.12em',
                      color: 'rgba(244,231,211,0.25)',
                      marginTop: '0.75rem',
                    }}
                  >
                    {entry.commonName}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER NOTE ──────────────────────────────────────── */}
      <section className="pad-section bg-deep">
        <div className="container-mid" style={{ textAlign: 'center' }}>
          <div className="line-gold" style={{ width: '32px', margin: '0 auto 2.5rem' }} />
          <p className="t-body t-muted" style={{ maxWidth: '420px', margin: '0 auto' }}>
            The Atlas is updated as new stones enter the archive. All weights are in carats.
            All origins are verified by gemological laboratory.
          </p>
        </div>
      </section>
    </>
  )
}
