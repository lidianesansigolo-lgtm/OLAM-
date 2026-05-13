import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/manifesto')({
  component: Manifesto,
  head: () => ({
    meta: [{ title: 'Manifesto — OLAM' }],
  }),
})

export default function Manifesto() {
  return (
    <>
      {/* ── HEADER ───────────────────────────────────────────── */}
      <section
        className="pad-section-xl bg-beige"
        style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}
      >
        <div className="container-narrow">
          <div className="t-label" style={{ color: 'var(--moss)', marginBottom: '5rem', opacity: 0.5 }}>
            OLAM · Manifesto
          </div>

          <div className="line-ink" style={{ width: '32px', marginBottom: '4rem' }} />

          <div
            className="t-display"
            style={{
              fontSize: 'clamp(2.25rem,5.5vw,5rem)',
              color: 'var(--ink)',
              lineHeight: 1.35,
              marginBottom: '5rem',
            }}
          >
            Some objects adorn.<br />
            Others remain.
          </div>

          <div
            className="t-body"
            style={{
              color: 'rgba(15,20,18,0.55)',
              fontSize: '1rem',
              lineHeight: 2,
              maxWidth: '560px',
              marginBottom: '4rem',
            }}
          >
            OLAM exists between matter and permanence.
          </div>

          <div
            className="t-display"
            style={{
              fontSize: 'clamp(1.5rem,3vw,2.75rem)',
              color: 'var(--ink)',
              lineHeight: 1.5,
              marginBottom: '5rem',
              opacity: 0.8,
            }}
          >
            Every stone carries origin.<br />
            Every object carries time.
          </div>

          <div className="line-ink" style={{ width: '32px', marginBottom: '4rem' }} />

          <div
            className="t-body"
            style={{ color: 'rgba(15,20,18,0.5)', maxWidth: '480px', fontSize: '0.875rem' }}
          >
            We do not create jewelry.
            <br />
            We create objects that will outlast the language that describes them.
          </div>
        </div>
      </section>

      {/* ── PRINCIPLES ───────────────────────────────────────── */}
      <section className="pad-section bg-moss">
        <div className="container-mid">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1px',
              background: 'rgba(199,168,109,0.08)',
            }}
          >
            {[
              {
                principle: 'Time',
                text: 'Gold was liquid three billion years ago. The stone in your hand crystallized before the continents. We do not sell objects — we relocate fragments of deep time into human scale.',
              },
              {
                principle: 'Matter',
                text: 'Each gemstone has a geological identity more specific than any name we assign it. Origin, formation conditions, trace elements — these are not marketing data. They are biography.',
              },
              {
                principle: 'Permanence',
                text: 'An object made correctly will exist long after the civilization that made it. This is not ambition. This is the only honest relationship with materials that have already survived billions of years.',
              },
            ].map(({ principle, text }) => (
              <div key={principle} style={{ background: 'var(--moss)', padding: '3.5rem 3rem' }}>
                <div className="t-label t-gold" style={{ marginBottom: '2rem' }}>
                  {principle}
                </div>
                <p className="t-body t-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXTENDED TEXT ────────────────────────────────────── */}
      <section className="pad-section-lg bg-beige">
        <div className="container-narrow">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: '6rem',
              alignItems: 'start',
            }}
          >
            <div>
              <div className="t-label" style={{ color: 'var(--moss)', opacity: 0.4 }}>
                On making
              </div>
            </div>
            <div>
              <p
                className="t-body"
                style={{ color: 'rgba(15,20,18,0.65)', fontSize: '1rem', lineHeight: 2.1, marginBottom: '2rem' }}
              >
                The hands that make OLAM objects are not decorators. They are translators — between
                the properties of a stone and the properties of a setting that will hold it for
                centuries.
              </p>
              <p
                className="t-body"
                style={{ color: 'rgba(15,20,18,0.45)', fontSize: '0.875rem', lineHeight: 2 }}
              >
                Gold is worked cold, annealed, refined. Stone is selected not for its perfect
                appearance but for the particularity of its origin. Objects are numbered. Not
                named. The archive grows slowly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLOSING ──────────────────────────────────────────── */}
      <section
        className="pad-section-xl bg-deep"
        style={{ textAlign: 'center' }}
      >
        <div
          className="t-display"
          style={{
            fontSize: 'clamp(2rem,5vw,4.5rem)',
            color: 'var(--beige)',
            opacity: 0.9,
            maxWidth: '700px',
            margin: '0 auto',
          }}
        >
          Made to order.<br />
          <span style={{ color: 'var(--gold)', opacity: 0.7 }}>One object at a time.</span>
        </div>
      </section>
    </>
  )
}
