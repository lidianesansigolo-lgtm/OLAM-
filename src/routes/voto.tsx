import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/voto')({
  component: Voto,
  head: () => ({
    meta: [{ title: 'Voto — OLAM' }],
  }),
})

export default function Voto() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="mineral-voto"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          padding: '8rem 2.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 512 512\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.55\' numOctaves=\'5\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.06\'/%3E%3C/svg%3E")',
            backgroundSize: '512px 512px',
          }}
          aria-hidden="true"
        />

        <div className="container-mid" style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '8rem',
              alignItems: 'center',
            }}
          >
            <div>
              <div className="t-label t-gold" style={{ marginBottom: '2rem' }}>
                VOTO · Engagement
              </div>
              <h1
                className="t-display"
                style={{
                  fontSize: 'clamp(2.5rem,5vw,4.5rem)',
                  color: 'var(--beige)',
                  marginBottom: '2.5rem',
                  lineHeight: 1.1,
                }}
              >
                Not an adornment.<br />
                A continuity.
              </h1>
              <p
                className="t-body"
                style={{ color: 'rgba(244,231,211,0.5)', maxWidth: '400px', marginBottom: '3rem' }}
              >
                VOTO is not bridal. It is not aspirational. It is an object made for a commitment
                that understands permanence — and is not afraid of it.
              </p>
              <div className="line-gold" style={{ width: '32px', marginBottom: '3rem' }} />
              <p
                className="t-body"
                style={{ color: 'rgba(244,231,211,0.35)', maxWidth: '360px', fontSize: '0.8rem' }}
              >
                Engagement objects are made entirely to order. A private consultation precedes
                every commission.
              </p>
            </div>

            {/* Stone display */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative' }}>
                <div
                  className="mineral-estrutura"
                  style={{
                    width: 'clamp(160px,25vw,260px)',
                    aspectRatio: '1',
                    borderRadius: '4px',
                    transform: 'rotate(-8deg)',
                    border: '1px solid rgba(199,168,109,0.1)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '25%',
                      left: '35%',
                      width: '25%',
                      height: '15%',
                      background: 'rgba(255,255,255,0.25)',
                      borderRadius: '50%',
                      filter: 'blur(6px)',
                    }}
                  />
                </div>
                <div
                  className="mineral-voto"
                  style={{
                    width: 'clamp(120px,18vw,180px)',
                    aspectRatio: '1',
                    borderRadius: '4px',
                    border: '1px solid rgba(199,168,109,0.15)',
                    position: 'absolute',
                    bottom: '-20%',
                    right: '-25%',
                    transform: 'rotate(12deg)',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '30%',
                      left: '30%',
                      width: '20%',
                      height: '10%',
                      background: 'rgba(199,168,109,0.15)',
                      borderRadius: '50%',
                      filter: 'blur(4px)',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LANGUAGE ─────────────────────────────────────────── */}
      <section className="pad-section bg-near-black">
        <div className="container-mid">
          <div className="t-label t-gold" style={{ marginBottom: '3rem' }}>
            The language of VOTO
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1px',
              background: 'rgba(199,168,109,0.06)',
            }}
          >
            {[
              {
                rejected: 'Engagement ring',
                preferred: 'Commitment object',
              },
              {
                rejected: 'Bridal',
                preferred: 'Permanence',
              },
              {
                rejected: 'Forever stone',
                preferred: 'Matter',
              },
              {
                rejected: 'Promise',
                preferred: 'Continuity',
              },
            ].map(({ rejected, preferred }) => (
              <div
                key={rejected}
                style={{
                  background: '#09100e',
                  padding: '2.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '2rem',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.08em',
                    color: 'rgba(244,231,211,0.2)',
                    textDecoration: 'line-through',
                    textDecorationColor: 'rgba(244,231,211,0.15)',
                  }}
                >
                  {rejected}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    fontStyle: 'italic',
                    color: 'var(--beige)',
                  }}
                >
                  {preferred}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SELECTED VOTO ─────────────────────────────────────── */}
      <section className="pad-section bg-deep">
        <div className="container-mid">
          <div className="t-label t-gold" style={{ marginBottom: '3rem' }}>
            From the archive
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1px',
              background: 'rgba(199,168,109,0.06)',
            }}
          >
            {[
              { code: 'VOTO-003', stone: 'Adamas Purus', origin: 'Botswana', weight: '2.54 ct', cls: 'mineral-estrutura' },
              { code: 'VOTO-007', stone: 'Corundum Caelestis', origin: 'Mogok', weight: '1.92 ct', cls: 'mineral-abissal' },
              { code: 'VOTO-011', stone: 'Smaragdus Quietus', origin: 'Muzo', weight: '3.18 ct', cls: 'mineral-veio' },
            ].map((obj) => (
              <div key={obj.code} style={{ background: 'var(--moss-deep)' }}>
                <div
                  className={obj.cls}
                  style={{ aspectRatio: '1', position: 'relative', overflow: 'hidden' }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(8,14,11,0.6) 0%, transparent 50%)',
                    }}
                  />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <div className="atlas-code" style={{ marginBottom: '0.5rem' }}>{obj.code}</div>
                  <div
                    className="t-display t-beige"
                    style={{ fontSize: '1.1rem', marginBottom: '0.4rem' }}
                  >
                    {obj.stone}
                  </div>
                  <div className="t-label t-muted" style={{ fontSize: '0.55rem' }}>
                    {obj.origin} · {obj.weight}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="pad-section-lg bg-near-black" style={{ textAlign: 'center' }}>
        <p
          className="t-display"
          style={{ fontSize: 'clamp(1.5rem,3vw,2.5rem)', color: 'var(--beige)', marginBottom: '3rem' }}
        >
          Made for two people<br />
          who understand permanence.
        </p>
        <Link to="/contact" className="olam-btn">
          Begin a consultation
        </Link>
      </section>
    </>
  )
}
