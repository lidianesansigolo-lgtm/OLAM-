import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

const selectedObjects = [
  {
    code: 'VEIO-021',
    series: 'VEIO',
    name: 'Smaragdus Rarus',
    origin: 'Muzo, Colombia',
    weight: '4.72 ct',
    mineralClass: 'mineral-veio',
    description: 'Colombian emerald of deep saturation. Jardin inclusions read as evidence of geological origin.',
  },
  {
    code: 'ABISSAL-009',
    series: 'ABISSAL',
    name: 'Tanzanitus Profundus',
    origin: 'Merelani, Tanzania',
    weight: '7.14 ct',
    mineralClass: 'mineral-abissal',
    description: 'Trichroic tanzanite that shifts between violet and indigo. Found only at the foot of Kilimanjaro.',
  },
  {
    code: 'ION-001',
    series: 'ÍON',
    name: 'Tourmalis Neonatus',
    origin: 'Paraíba, Brazil',
    weight: '1.04 ct',
    mineralClass: 'mineral-ion',
    description: 'Paraíba tourmaline. Copper-bearing. A chromatic impossibility that geology produced once.',
  },
]

function MineralDot({ className }: { className: string }) {
  return (
    <div
      className={className}
      style={{
        width: 40,
        height: 40,
        borderRadius: '50%',
        border: '1px solid rgba(199,168,109,0.2)',
        flexShrink: 0,
      }}
    />
  )
}

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-texture" aria-hidden="true" />
        <div className="hero-vignette" aria-hidden="true" />

        <div className="hero-content">
          <p className="hero-poem anim-1">
            Gold is solidified time.<br />
            Form precedes desire.<br />
            Matter precedes language.
          </p>
          <div className="hero-name anim-2">OLAM</div>
          <div className="hero-made anim-3">Made to order · Maison de Haute Joaillerie</div>
        </div>

        <div className="hero-scroll" aria-hidden="true">
          <div className="hero-scroll-line" />
          <span className="hero-scroll-text">Archive</span>
        </div>
      </section>

      {/* ── SELECTED OBJECTS ─────────────────────────────────── */}
      <section className="pad-section bg-moss">
        <div className="container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: '4rem',
              flexWrap: 'wrap',
              gap: '1.5rem',
            }}
          >
            <div>
              <div className="t-label t-gold" style={{ marginBottom: '1rem' }}>
                Selected Objects — 2024
              </div>
              <h2
                className="t-display"
                style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', color: 'var(--beige)' }}
              >
                From the archive
              </h2>
            </div>
            <Link to="/objects" className="olam-link">
              View all series
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1px',
              background: 'rgba(199,168,109,0.06)',
            }}
          >
            {selectedObjects.map((obj) => (
              <div
                key={obj.code}
                style={{ background: 'var(--moss)', padding: '0' }}
              >
                <div
                  className={obj.mineralClass}
                  style={{ aspectRatio: '3/4', position: 'relative', overflow: 'hidden' }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.12\'/%3E%3C/svg%3E")',
                      backgroundSize: '400px 400px',
                    }}
                  />
                </div>
                <div style={{ padding: '1.75rem' }}>
                  <div className="atlas-code">{obj.code}</div>
                  <div
                    className="t-display t-beige"
                    style={{ fontSize: '1.5rem', marginBottom: '0.625rem' }}
                  >
                    {obj.name}
                  </div>
                  <div className="t-label t-muted" style={{ marginBottom: '1rem', fontSize: '0.58rem' }}>
                    {obj.origin} · {obj.weight}
                  </div>
                  <p className="t-body t-muted" style={{ fontSize: '0.78rem' }}>
                    {obj.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ATLAS TEASER ─────────────────────────────────────── */}
      <section className="pad-section bg-deep">
        <div className="container-mid">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '6rem',
              alignItems: 'center',
            }}
          >
            <div>
              <div className="t-label t-gold" style={{ marginBottom: '1.5rem' }}>
                Atlas Mineral
              </div>
              <h2
                className="t-display"
                style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', color: 'var(--beige)', marginBottom: '2rem' }}
              >
                A geological institution
              </h2>
              <p className="t-body t-muted" style={{ marginBottom: '2.5rem' }}>
                Every stone in the OLAM archive is catalogued by origin, geological age, and chromatic
                properties. The Atlas Mineral is an ongoing record of matter — not of commerce.
              </p>
              <Link to="/atlas" className="olam-link">
                Enter the Atlas
              </Link>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1px',
                background: 'rgba(199,168,109,0.08)',
              }}
            >
              {[
                { code: 'VEIO-021', name: 'Smaragdus Rarus', cls: 'mineral-veio', weight: '4.72 ct' },
                { code: 'ESTRUTURA-007', name: 'Adamas Crystallus', cls: 'mineral-estrutura', weight: '2.84 ct' },
                { code: 'ABISSAL-003', name: 'Tanzanitus Obscurus', cls: 'mineral-abissal', weight: '5.60 ct' },
                { code: 'ION-004', name: 'Tourmalis Cupricius', cls: 'mineral-ion', weight: '0.78 ct' },
              ].map((m) => (
                <div
                  key={m.code}
                  className={m.cls}
                  style={{ aspectRatio: '1', position: 'relative', display: 'flex', alignItems: 'flex-end', padding: '1rem' }}
                >
                  <div>
                    <div className="atlas-code" style={{ fontSize: '0.5rem' }}>{m.code}</div>
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: '0.8rem', fontStyle: 'italic', color: 'rgba(244,231,211,0.7)' }}>
                      {m.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CRAFTSMANSHIP TEASER ─────────────────────────────── */}
      <section
        style={{
          background: 'var(--moss)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
        }}
      >
        <div
          className="mineral-veio"
          style={{
            minHeight: '500px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, transparent 40%, rgba(8,14,11,0.7) 100%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '2.5rem',
              left: '2.5rem',
              right: '2.5rem',
            }}
          >
            <div className="t-label t-gold" style={{ marginBottom: '0.75rem' }}>
              Process
            </div>
            <p
              className="t-display"
              style={{ fontSize: 'clamp(1.5rem,3vw,2.25rem)', color: 'var(--beige)' }}
            >
              Before form,<br />there is labor.
            </p>
          </div>
        </div>
        <div
          className="pad-section"
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <div className="t-label t-gold" style={{ marginBottom: '1.5rem' }}>
            Craftsmanship
          </div>
          <h3
            className="t-display"
            style={{ fontSize: 'clamp(1.75rem,3vw,2.75rem)', color: 'var(--beige)', marginBottom: '1.75rem' }}
          >
            Gold melted, stone set,<br />surface polished to silence.
          </h3>
          <p className="t-body t-muted" style={{ marginBottom: '2.5rem', maxWidth: '420px' }}>
            Every object begins as raw material. Stone selection, hand-forged settings, surface
            finishing — each stage is a form of translation between geological time and human scale.
          </p>
          <Link to="/process" className="olam-link">
            The process
          </Link>
        </div>
      </section>

      {/* ── MANIFESTO PULL ───────────────────────────────────── */}
      <section className="pad-section-lg bg-beige">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <div className="line-ink" style={{ width: '32px', margin: '0 auto 3rem' }} />
          <blockquote
            className="t-display"
            style={{
              fontSize: 'clamp(1.75rem,4vw,3.25rem)',
              color: 'var(--ink)',
              lineHeight: 1.5,
              marginBottom: '3rem',
            }}
          >
            Some objects adorn.<br />
            Others remain.
          </blockquote>
          <Link to="/manifesto" className="olam-link" style={{ color: 'var(--moss)', justifyContent: 'center' }}>
            Read the manifesto
          </Link>
        </div>
      </section>

      {/* ── DIA DA PEDRA TEASER ──────────────────────────────── */}
      <section
        className="pad-section-lg"
        style={{
          background: 'var(--moss-deep)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse at center, rgba(199,168,109,0.04) 0%, transparent 70%)',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="t-label t-gold" style={{ marginBottom: '2rem' }}>
            Annual Ritual
          </div>
          <h2
            className="t-display"
            style={{ fontSize: 'clamp(2rem,5vw,4.5rem)', color: 'var(--beige)', marginBottom: '1.5rem' }}
          >
            Dia da Pedra
          </h2>
          <p className="t-body t-muted" style={{ maxWidth: '480px', margin: '0 auto 3rem' }}>
            Each year, one exceptional gemstone. One object. Revealed without ceremony.
          </p>
          <Link to="/dia-da-pedra" className="olam-link" style={{ justifyContent: 'center' }}>
            View this year's stone
          </Link>
        </div>
      </section>
    </>
  )
}
