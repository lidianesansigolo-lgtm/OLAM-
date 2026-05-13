import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/contact')({
  component: Contact,
  head: () => ({
    meta: [{ title: 'Contact — OLAM' }],
  }),
})

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&')
}

export default function Contact() {
  const [fields, setFields] = useState({ name: '', email: '', inquiry: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch('/contact-form.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...fields }),
    })
    setSubmitted(true)
  }

  return (
    <>
      <section
        className="bg-grey"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          padding: '8rem 2.5rem',
        }}
      >
        <div className="container-mid">
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
              <div
                className="t-label"
                style={{ color: 'var(--moss)', marginBottom: '2rem', opacity: 0.5 }}
              >
                OLAM · Contact
              </div>
              <h1
                className="t-display"
                style={{
                  fontSize: 'clamp(2.25rem,5vw,4rem)',
                  color: 'var(--ink)',
                  marginBottom: '2.5rem',
                  lineHeight: 1.15,
                }}
              >
                Private appointments<br />available upon request.
              </h1>
              <div className="line-ink" style={{ width: '32px', marginBottom: '2.5rem' }} />
              <p
                className="t-body"
                style={{ color: 'rgba(15,20,18,0.5)', maxWidth: '360px', marginBottom: '3rem' }}
              >
                All OLAM objects are made to order. There are no walk-in purchases.
                Every commission begins with a conversation.
              </p>

              {/* Contact details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <div
                    className="t-label"
                    style={{ color: 'var(--moss)', opacity: 0.4, marginBottom: '0.5rem', fontSize: '0.55rem' }}
                  >
                    Atelier
                  </div>
                  <a
                    href="mailto:atelier@olam.com"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8rem',
                      fontWeight: 300,
                      letterSpacing: '0.06em',
                      color: 'rgba(15,20,18,0.6)',
                      textDecoration: 'none',
                    }}
                  >
                    atelier@olam.com
                  </a>
                </div>
                <div>
                  <div
                    className="t-label"
                    style={{ color: 'var(--moss)', opacity: 0.4, marginBottom: '0.5rem', fontSize: '0.55rem' }}
                  >
                    Response time
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8rem',
                      fontWeight: 300,
                      letterSpacing: '0.06em',
                      color: 'rgba(15,20,18,0.45)',
                    }}
                  >
                    3 – 5 working days
                  </span>
                </div>
                <div>
                  <div
                    className="t-label"
                    style={{ color: 'var(--moss)', opacity: 0.4, marginBottom: '0.5rem', fontSize: '0.55rem' }}
                  >
                    Appointments
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8rem',
                      fontWeight: 300,
                      letterSpacing: '0.06em',
                      color: 'rgba(15,20,18,0.45)',
                    }}
                  >
                    By arrangement only
                  </span>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div>
              {submitted ? (
                <div style={{ paddingTop: '2rem' }}>
                  <div className="t-label" style={{ color: 'var(--moss)', marginBottom: '1.5rem' }}>
                    Received
                  </div>
                  <p
                    className="t-display"
                    style={{ fontSize: '1.75rem', color: 'var(--ink)', lineHeight: 1.5 }}
                  >
                    Your inquiry has been<br />noted in the archive.
                  </p>
                  <p
                    className="t-body"
                    style={{ color: 'rgba(15,20,18,0.45)', marginTop: '1.5rem', fontSize: '0.8rem' }}
                  >
                    We respond personally. No automated messages.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <input type="hidden" name="form-name" value="contact" />
                  <input
                    type="text"
                    name="bot-field"
                    style={{ display: 'none' }}
                    aria-hidden="true"
                    tabIndex={-1}
                    readOnly
                  />

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                    <div>
                      <label
                        className="t-label"
                        style={{
                          display: 'block',
                          marginBottom: '0.5rem',
                          fontSize: '0.55rem',
                          color: 'rgba(15,20,18,0.4)',
                          letterSpacing: '0.25em',
                          textTransform: 'uppercase',
                        }}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={fields.name}
                        onChange={handleChange}
                        required
                        style={{
                          background: 'transparent',
                          border: 'none',
                          borderBottom: '1px solid rgba(15,20,18,0.18)',
                          color: 'var(--ink)',
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.875rem',
                          fontWeight: 300,
                          letterSpacing: '0.05em',
                          padding: '1rem 0',
                          width: '100%',
                          outline: 'none',
                          transition: 'border-color 400ms ease',
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderBottomColor = 'var(--moss)')
                        }
                        onBlur={(e) =>
                          (e.target.style.borderBottomColor = 'rgba(15,20,18,0.18)')
                        }
                      />
                    </div>

                    <div>
                      <label
                        className="t-label"
                        style={{
                          display: 'block',
                          marginBottom: '0.5rem',
                          fontSize: '0.55rem',
                          color: 'rgba(15,20,18,0.4)',
                          letterSpacing: '0.25em',
                          textTransform: 'uppercase',
                        }}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={fields.email}
                        onChange={handleChange}
                        required
                        style={{
                          background: 'transparent',
                          border: 'none',
                          borderBottom: '1px solid rgba(15,20,18,0.18)',
                          color: 'var(--ink)',
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.875rem',
                          fontWeight: 300,
                          letterSpacing: '0.05em',
                          padding: '1rem 0',
                          width: '100%',
                          outline: 'none',
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderBottomColor = 'var(--moss)')
                        }
                        onBlur={(e) =>
                          (e.target.style.borderBottomColor = 'rgba(15,20,18,0.18)')
                        }
                      />
                    </div>

                    <div>
                      <label
                        className="t-label"
                        style={{
                          display: 'block',
                          marginBottom: '0.5rem',
                          fontSize: '0.55rem',
                          color: 'rgba(15,20,18,0.4)',
                          letterSpacing: '0.25em',
                          textTransform: 'uppercase',
                        }}
                      >
                        Inquiry
                      </label>
                      <textarea
                        name="inquiry"
                        placeholder="Describe your interest"
                        value={fields.inquiry}
                        onChange={handleChange}
                        rows={4}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          borderBottom: '1px solid rgba(15,20,18,0.18)',
                          color: 'var(--ink)',
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.875rem',
                          fontWeight: 300,
                          letterSpacing: '0.05em',
                          padding: '1rem 0',
                          width: '100%',
                          outline: 'none',
                          resize: 'none',
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderBottomColor = 'var(--moss)')
                        }
                        onBlur={(e) =>
                          (e.target.style.borderBottomColor = 'rgba(15,20,18,0.18)')
                        }
                      />
                    </div>

                    <button
                      type="submit"
                      style={{
                        alignSelf: 'flex-start',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.6rem',
                        fontWeight: 400,
                        letterSpacing: '0.28em',
                        textTransform: 'uppercase',
                        color: 'var(--moss)',
                        background: 'transparent',
                        border: '1px solid rgba(47,58,52,0.35)',
                        padding: '1rem 2.5rem',
                        cursor: 'pointer',
                        transition: 'all 500ms ease',
                      }}
                      onMouseOver={(e) => {
                        ;(e.target as HTMLButtonElement).style.background = 'var(--moss)'
                        ;(e.target as HTMLButtonElement).style.color = 'var(--beige)'
                      }}
                      onMouseOut={(e) => {
                        ;(e.target as HTMLButtonElement).style.background = 'transparent'
                        ;(e.target as HTMLButtonElement).style.color = 'var(--moss)'
                      }}
                    >
                      Send inquiry
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
