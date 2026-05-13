import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/dia-da-pedra')({
  component: DiaDaPedra,
  head: () => ({
    meta: [{ title: 'Dia da Pedra — OLAM' }],
  }),
})

const thisYear = {
  code: 'DIA-2024',
  latinName: 'Adamas Imperium',
  commonName: 'Diamond',
  origin: 'Golconda, India',
  weight: '8.14 ct',
  color: 'D',
  clarity: 'IF',
  type: 'IIa',
  year: 2024,
  notes:
    'Type IIa diamond of historical Golconda provenance. Exceptional transparency. No detectable nitrogen. Formed between 1 and 3.3 billion years ago.',
  mineralClass: 'mineral-estrutura',
}

export default function DiaDaPedra() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="bg-deep"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '6rem 2rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse at center, rgba(199,168,109,0.03) 0%, transparent 65%)',
          }}
          aria-hidden="true"
        />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="t-label t-gold" style={{ marginBottom: '3rem', letterSpacing: '0.35em' }}>
            Dia da Pedra · {thisYear.year}
          </div>

          <div className="t-label t-muted" style={{ marginBottom: '5rem', fontSize: '0.55rem' }}>
            Annual ritual — one exceptional gemstone
          </div>

          {/* Stone display */}
          <div
            style={{
              width: 'clamp(200px,40vw,340px)',
              aspectRatio: '1',
              borderRadius: '50%',
              margin: '0 auto 4rem',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(199,168,109,0.15)',
            }}
          >
            <div
              className={thisYear.mineralClass}
              style={{ position: 'absolute', inset: 0 }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage:
                  'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.7\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.08\'/%3E%3C/svg%3E")',
                backgroundSize: '400px 400px',
              }}
            />
            {/* Radial highlight */}
            <div
              style={{
                position: 'absolute',
                top: '20%',
                left: '30%',
                width: '30%',
                height: '20%',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '50%',
                filter: 'blur(8px)',
              }}
            />
          </div>

          <div className="atlas-code" style={{ fontSize: '0.6rem', marginBottom: '0.75rem' }}>
            {thisYear.code}
          </div>

          <h1
            className="t-display"
            style={{ fontSize: 'clamp(2rem,5vw,4rem)', color: 'var(--beige)', marginBottom: '0.5rem' }}
          >
            {thisYear.latinName}
          </h1>

          <div className="t-body t-muted" style={{ fontSize: '0.78rem', marginBottom: '3rem' }}>
            {thisYear.origin}
          </div>

          {/* Specifications */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '2rem',
              maxWidth: '560px',
              margin: '0 auto 4rem',
              paddingTop: '3rem',
              borderTop: '1px solid rgba(199,168,109,0.1)',
            }}
          >
            {[
              { label: 'Weight', value: thisYear.weight },
              { label: 'Color', value: thisYear.color },
              { label: 'Clarity', value: thisYear.clarity },
              { label: 'Type', value: thisYear.type },
            ].map(({ label, value }) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div className="t-label t-gold" style={{ marginBottom: '0.5rem', fontSize: '0.5rem' }}>
                  {label}
                </div>
                <div
                  className="t-heading"
                  style={{ color: 'var(--beige)', fontSize: '1.25rem' }}
                >
                  {value}
                </div>
              </div>
            ))}
          </div>

          <p
            className="t-body t-muted"
            style={{ maxWidth: '460px', margin: '0 auto 4rem', fontSize: '0.8rem', lineHeight: 2 }}
          >
            {thisYear.notes}
          </p>

          <div className="line-gold" style={{ width: '32px', margin: '0 auto 3rem' }} />

          <div
            className="t-label t-muted"
            style={{ fontSize: '0.55rem', letterSpacing: '0.2em' }}
          >
            Not for sale. Not a product. A record of matter.
          </div>
        </div>
      </section>

      {/* ── ARCHIVE ──────────────────────────────────────────── */}
      <section className="pad-section bg-moss">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <div className="t-label t-gold" style={{ marginBottom: '2rem' }}>
            Archive — Previous Years
          </div>
          {[
            { year: 2023, name: 'Rubinus Maximus', origin: 'Mogok, Myanmar', weight: '6.34 ct' },
            { year: 2022, name: 'Smaragdus Veteris', origin: 'Muzo, Colombia', weight: '9.18 ct' },
            { year: 2021, name: 'Tanzanitus Primus', origin: 'Merelani, Tanzania', weight: '11.40 ct' },
          ].map((prev) => (
            <div
              key={prev.year}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1.5rem 0',
                borderBottom: '1px solid rgba(199,168,109,0.06)',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div className="t-label t-gold" style={{ fontSize: '0.55rem' }}>
                {prev.year}
              </div>
              <div
                className="t-display"
                style={{ fontSize: '1.1rem', color: 'var(--beige)', fontStyle: 'italic' }}
              >
                {prev.name}
              </div>
              <div className="t-body t-muted" style={{ fontSize: '0.72rem' }}>
                {prev.origin} · {prev.weight}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CLOSING ──────────────────────────────────────────── */}
      <section className="pad-section-lg bg-deep" style={{ textAlign: 'center' }}>
        <p
          className="t-display"
          style={{ fontSize: 'clamp(1.5rem,3vw,2.5rem)', color: 'var(--beige)', opacity: 0.7 }}
        >
          One stone.<br />
          One year.<br />
          One record.
        </p>
      </section>
    </>
  )
}
