import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/continuum')({
  component: Continuum,
  head: () => ({
    meta: [{ title: 'Continuum — OLAM' }],
  }),
})

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&')
}

export default function Continuum() {
  const [fields, setFields] = useState({ name: '', email: '', inquiry: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch('/contact-form.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'continuum', ...fields }),
    })
    setSubmitted(true)
  }

  return (
    <>
      <section
        className="bg-deep"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          padding: '8rem 2.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background texture */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse at 30% 50%, rgba(199,168,109,0.03) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(47,58,52,0.4) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />

        <div className="container-mid" style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '8rem',
              alignItems: 'start',
            }}
          >
            {/* Left */}
            <div>
              <div className="t-label t-gold" style={{ marginBottom: '2rem' }}>
                Continuum
              </div>
              <h1
                className="t-display"
                style={{
                  fontSize: 'clamp(2.25rem,5vw,4rem)',
                  color: 'var(--beige)',
                  marginBottom: '2.5rem',
                  lineHeight: 1.15,
                }}
              >
                A private<br />archive council.
              </h1>
              <div className="line-gold" style={{ width: '32px', marginBottom: '2.5rem' }} />
              <p
                className="t-body"
                style={{ color: 'rgba(244,231,211,0.45)', maxWidth: '380px', marginBottom: '2rem' }}
              >
                Continuum is an invitation-only circle of collectors who follow the OLAM archive
                from its formation. Members receive direct correspondence on new commissions,
                stone acquisitions, and the Dia da Pedra.
              </p>
              <p
                className="t-body"
                style={{ color: 'rgba(244,231,211,0.28)', maxWidth: '360px', fontSize: '0.78rem' }}
              >
                Access is not granted by wealth. It is granted by demonstrated understanding
                of matter, time, and what it means to hold something permanent.
              </p>

              {/* Tenets */}
              <div style={{ marginTop: '4rem' }}>
                {[
                  'First access to new archive entries',
                  'Private stone viewings',
                  'Annual correspondence on the Dia da Pedra',
                  'Commission priority',
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      gap: '1rem',
                      alignItems: 'flex-start',
                      marginBottom: '1rem',
                    }}
                  >
                    <div
                      style={{
                        width: '4px',
                        height: '4px',
                        background: 'var(--gold)',
                        borderRadius: '50%',
                        marginTop: '6px',
                        flexShrink: 0,
                        opacity: 0.6,
                      }}
                    />
                    <div
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.72rem',
                        fontWeight: 300,
                        letterSpacing: '0.06em',
                        color: 'rgba(244,231,211,0.4)',
                      }}
                    >
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div>
              {submitted ? (
                <div style={{ padding: '4rem 0' }}>
                  <div className="t-label t-gold" style={{ marginBottom: '1.5rem' }}>
                    Request received
                  </div>
                  <p
                    className="t-display"
                    style={{ fontSize: '1.75rem', color: 'var(--beige)', lineHeight: 1.5 }}
                  >
                    Your inquiry has entered<br />the archive.
                  </p>
                  <p
                    className="t-body t-muted"
                    style={{ marginTop: '1.5rem', fontSize: '0.78rem' }}
                  >
                    Responses are not automated. You will hear from us personally.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <input type="hidden" name="form-name" value="continuum" />
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="bot-field"
                    style={{ display: 'none' }}
                    aria-hidden="true"
                    tabIndex={-1}
                    readOnly
                  />

                  <div className="t-label t-gold" style={{ marginBottom: '3rem' }}>
                    Request access
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                    <div>
                      <label
                        className="t-label t-muted"
                        style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.55rem' }}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="olam-input"
                        placeholder="Full name"
                        value={fields.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label
                        className="t-label t-muted"
                        style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.55rem' }}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="olam-input"
                        placeholder="Email address"
                        value={fields.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label
                        className="t-label t-muted"
                        style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.55rem' }}
                      >
                        On your relationship with objects
                      </label>
                      <textarea
                        name="inquiry"
                        className="olam-input"
                        placeholder="Brief. No need for credentials."
                        value={fields.inquiry}
                        onChange={handleChange}
                        rows={4}
                        style={{ resize: 'none' }}
                      />
                    </div>

                    <button type="submit" className="olam-btn" style={{ alignSelf: 'flex-start' }}>
                      Submit inquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
