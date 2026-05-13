import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/process')({
  component: Process,
  head: () => ({
    meta: [{ title: 'Process — OLAM' }],
  }),
})

const stages = [
  {
    number: '01',
    title: 'Stone selection',
    text: 'Every commission begins with stones. The gemologist selects from a curated set held in the archive — verified provenance, documented weight, geological notes. No stone enters the archive without a traceable history.',
    mineralClass: 'mineral-veio',
  },
  {
    number: '02',
    title: 'Metal preparation',
    text: 'Gold is refined to 18k or 22k depending on the object. It is melted, cast, and worked cold — hammered, drawn, filed. The surface memory of the working process is preserved, not erased.',
    mineralClass: 'mineral-voto',
  },
  {
    number: '03',
    title: 'Setting design',
    text: "The setting is drawn from the geometry of the stone. Not imposed upon it. Each OLAM setting is conceived for a specific stone — it cannot be standardized or repeated without altering the object's integrity.",
    mineralClass: 'mineral-estrutura',
  },
  {
    number: '04',
    title: 'Hand setting',
    text: 'Stone is set by a single artisan from start to completion. No division of labor. The relationship between maker and stone is direct — there is accountability in the unbroken continuity of making.',
    mineralClass: 'mineral-abissal',
  },
  {
    number: '05',
    title: 'Surface finishing',
    text: 'Surfaces are finished to a controlled matte — not the high-gloss of commercial jewelry. Light should be absorbed, not reflected. Presence over brilliance.',
    mineralClass: 'mineral-horizonte',
  },
  {
    number: '06',
    title: 'Documentation',
    text: 'Each completed object is photographed, weighed, and entered into the archive with its stone code. It receives a permanent object code. It exists as a record before it exists as a possession.',
    mineralClass: 'mineral-ion',
  },
]

export default function Process() {
  return (
    <>
      {/* ── HEADER ───────────────────────────────────────────── */}
      <section className="pad-section bg-deep">
        <div className="container">
          <div className="t-label t-gold" style={{ marginBottom: '1.5rem' }}>
            OLAM · Craftsmanship
          </div>
          <h1
            className="t-display"
            style={{ fontSize: 'clamp(2.5rem,6vw,5.5rem)', color: 'var(--beige)', maxWidth: '700px' }}
          >
            Before form,<br />there is labor.
          </h1>
        </div>
      </section>

      {/* ── STAGES ───────────────────────────────────────────── */}
      <section className="bg-moss">
        {stages.map((stage, i) => (
          <div
            key={stage.number}
            style={{
              display: 'grid',
              gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
              minHeight: '480px',
              borderBottom: '1px solid rgba(199,168,109,0.05)',
            }}
          >
            {/* Media */}
            <div
              className={`${stage.mineralClass} ${i % 2 !== 0 ? '' : ''}`}
              style={{
                order: i % 2 === 0 ? 0 : 1,
                position: 'relative',
                overflow: 'hidden',
                minHeight: '360px',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage:
                    'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.7\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.12\'/%3E%3C/svg%3E")',
                  backgroundSize: '400px 400px',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(8,14,11,0.15)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '2rem',
                  left: '2.5rem',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '5rem',
                  fontWeight: 300,
                  color: 'rgba(199,168,109,0.12)',
                  lineHeight: 1,
                }}
              >
                {stage.number}
              </div>
            </div>

            {/* Content */}
            <div
              style={{
                order: i % 2 === 0 ? 1 : 0,
                padding: '4rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                background: 'var(--moss)',
              }}
            >
              <div className="t-label t-gold" style={{ marginBottom: '1.5rem' }}>
                {stage.number}
              </div>
              <h2
                className="t-display"
                style={{ fontSize: 'clamp(1.5rem,3vw,2.5rem)', color: 'var(--beige)', marginBottom: '1.5rem' }}
              >
                {stage.title}
              </h2>
              <p className="t-body t-muted" style={{ maxWidth: '420px' }}>
                {stage.text}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* ── PHILOSOPHY ───────────────────────────────────────── */}
      <section className="pad-section-lg bg-beige">
        <div className="container-narrow">
          <div
            className="t-display"
            style={{
              fontSize: 'clamp(1.75rem,4vw,3.5rem)',
              color: 'var(--ink)',
              lineHeight: 1.45,
              marginBottom: '3rem',
            }}
          >
            We do not move quickly.<br />
            An OLAM object takes between<br />
            three and nine months to complete.
          </div>
          <div className="line-ink" style={{ width: '32px', marginBottom: '2.5rem' }} />
          <p
            className="t-body"
            style={{ color: 'rgba(15,20,18,0.5)', maxWidth: '480px' }}
          >
            There is no production schedule. Each object is completed when it is correct.
            The artisan — not a deadline — determines when the object is ready.
          </p>
        </div>
      </section>
    </>
  )
}
