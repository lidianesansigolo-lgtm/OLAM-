import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/objects')({
  component: Objects,
  head: () => ({
    meta: [{ title: 'Objects — OLAM' }],
  }),
})

const series = [
  {
    code: 'ESTRUTURA',
    stone: 'Diamond',
    mineralClass: 'mineral-estrutura',
    tagline: 'Architecture in carbon.',
    description:
      "Each piece in ESTRUTURA follows the geometry of the stone's crystalline structure — the setting becomes an extension of the mineral's own form. The diamond is not set. It is continued.",
    objects: ['ESTRUTURA-001', 'ESTRUTURA-007', 'ESTRUTURA-014'],
    year: '2019–',
  },
  {
    code: 'ABISSAL',
    stone: 'Tanzanite',
    mineralClass: 'mineral-abissal',
    tagline: 'Found at the foot of Kilimanjaro.',
    description:
      'Found only in a single square mile on Earth. The depth of blue-violet that has no analogue in nature. ABISSAL works with stones of rare trichroism — shifting between blue, violet, and burgundy in different light conditions.',
    objects: ['ABISSAL-003', 'ABISSAL-009', 'ABISSAL-016'],
    year: '2020–',
  },
  {
    code: 'HORIZONTE',
    stone: 'Aquamarine',
    mineralClass: 'mineral-horizonte',
    tagline: 'The line where matter meets sky.',
    description:
      'These pale blue stones — from the Santa Maria mines of Brazil — carry within them the color of open water at dawn. High clarity, no inclusions. HORIZONTE settings are drawn from coastal architecture: horizontal planes, restrained geometry.',
    objects: ['HORIZONTE-002', 'HORIZONTE-011', 'HORIZONTE-018'],
    year: '2019–',
  },
  {
    code: 'ÍON',
    stone: 'Paraíba Tourmaline',
    mineralClass: 'mineral-ion',
    tagline: 'A chromatic impossibility.',
    description:
      'Paraíba tourmaline achieves its neon teal through traces of copper — an element that should not exist in this mineral context. ÍON honors this geological accident. Stones under one carat, set in minimal gold.',
    objects: ['ÍON-001', 'ÍON-004', 'ÍON-008'],
    year: '2018–',
  },
  {
    code: 'DESVIO',
    stone: 'Fancy Yellow Diamond',
    mineralClass: 'mineral-desvio',
    tagline: 'Deviation from transparency.',
    description:
      'The yellowing of a diamond is caused by nitrogen atoms displacing carbon within the crystal lattice — a structural impurity that produces measured warmth. DESVIO treats this not as a deviation but as a destination.',
    objects: ['DESVIO-005', 'DESVIO-008', 'DESVIO-012'],
    year: '2021–',
  },
  {
    code: 'VEIO',
    stone: 'Emerald',
    mineralClass: 'mineral-veio',
    tagline: 'The vein. Mineral intrusion.',
    description:
      'Muzo emeralds carry their origin in their imperfections. Jardin — the garden of inclusions — is evidence of geological time compressed. VEIO settings are drawn from the veining patterns of the stones themselves.',
    objects: ['VEIO-012', 'VEIO-021', 'VEIO-029'],
    year: '2020–',
  },
  {
    code: 'VOTO',
    stone: 'Mixed Precious Stones',
    mineralClass: 'mineral-voto',
    tagline: 'Commitment mineralized.',
    description:
      'Not a ring. A commitment. An object that acknowledges permanence in a world of ephemerality. VOTO is made for those who understand that what endures matters more than what glistens.',
    objects: ['VOTO-003', 'VOTO-007', 'VOTO-011'],
    year: '2021–',
  },
  {
    code: 'PACTO',
    stone: 'Ruby · Sapphire · Emerald',
    mineralClass: 'mineral-pacto',
    tagline: 'Objects made to outlast their makers.',
    description:
      'Religious objects are among the oldest archives of craft. PACTO creates devotional pieces that honor this lineage — objects made to be held by hands yet unborn, passed through generations without language.',
    objects: ['PACTO-001', 'PACTO-004', 'PACTO-009'],
    year: '2019–',
  },
]

export default function Objects() {
  return (
    <>
      {/* ── HEADER ───────────────────────────────────────────── */}
      <section className="pad-section bg-deep">
        <div className="container">
          <div className="t-label t-gold" style={{ marginBottom: '1.5rem' }}>
            OLAM · Archive
          </div>
          <h1
            className="t-display"
            style={{
              fontSize: 'clamp(2.5rem,6vw,5.5rem)',
              color: 'var(--beige)',
              maxWidth: '700px',
              lineHeight: 1.1,
            }}
          >
            Eight series.<br />
            One archive.
          </h1>
          <div className="line-gold" style={{ width: '48px', marginTop: '3rem' }} />
        </div>
      </section>

      {/* ── SERIES LIST ──────────────────────────────────────── */}
      {series.map((s, i) => (
        <article key={s.code}>
          {/* Media block */}
          <div
            className={s.mineralClass}
            style={{
              minHeight: i % 3 === 0 ? '65vh' : '50vh',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'flex-end',
            }}
          >
            {/* Stone texture overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage:
                  'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.1\'/%3E%3C/svg%3E")',
                backgroundSize: '400px 400px',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to top, rgba(8,14,11,0.88) 0%, rgba(8,14,11,0.15) 60%, transparent 100%)',
              }}
            />

            <div style={{ position: 'relative', zIndex: 2, padding: '3.5rem' }}>
              <div className="t-label t-gold" style={{ marginBottom: '1rem' }}>
                {s.code} · {s.stone} · {s.year}
              </div>
              <h2
                className="t-display"
                style={{ fontSize: 'clamp(2rem,5vw,4.5rem)', color: 'var(--beige)', marginBottom: '0.5rem' }}
              >
                {s.tagline}
              </h2>
            </div>
          </div>

          {/* Content block */}
          <div
            className="bg-moss"
            style={{
              display: 'grid',
              gridTemplateColumns: i % 2 === 0 ? '2fr 1fr' : '1fr 2fr',
              gap: '0',
              borderBottom: '1px solid rgba(199,168,109,0.06)',
            }}
          >
            <div style={{ padding: '3.5rem' }}>
              <p className="t-body t-muted" style={{ maxWidth: '520px', fontSize: '0.9rem' }}>
                {s.description}
              </p>
            </div>

            <div
              style={{
                padding: '3.5rem',
                borderLeft: '1px solid rgba(199,168,109,0.06)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div className="t-label t-gold" style={{ marginBottom: '1.25rem' }}>
                  Object codes
                </div>
                {s.objects.map((code) => (
                  <div
                    key={code}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.72rem',
                      letterSpacing: '0.12em',
                      color: 'rgba(244,231,211,0.35)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {code}
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="olam-link"
                style={{ marginTop: '2.5rem' }}
              >
                Enquire
              </Link>
            </div>
          </div>
        </article>
      ))}

      {/* ── CLOSING ──────────────────────────────────────────── */}
      <section className="pad-section-lg bg-deep" style={{ textAlign: 'center' }}>
        <div className="t-label t-gold" style={{ marginBottom: '2rem' }}>
          Made to order
        </div>
        <p
          className="t-display"
          style={{ fontSize: 'clamp(1.5rem,3vw,2.75rem)', color: 'var(--beige)', marginBottom: '3rem' }}
        >
          All objects are made upon commission.<br />
          Private appointments upon request.
        </p>
        <Link to="/contact" className="olam-btn">
          Request an appointment
        </Link>
      </section>
    </>
  )
}
