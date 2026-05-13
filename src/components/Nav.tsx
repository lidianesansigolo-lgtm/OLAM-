import { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'

const navLinks = [
  { to: '/objects', label: 'Objects' },
  { to: '/atlas', label: 'Atlas Mineral' },
  { to: '/manifesto', label: 'Manifesto' },
  { to: '/process', label: 'Process' },
  { to: '/voto', label: 'Voto' },
  { to: '/continuum', label: 'Continuum' },
  { to: '/contact', label: 'Contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav className={`nav-bar ${scrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
          OLAM
        </Link>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className="nav-link">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className="nav-hamburger"
          onClick={() => setOpen(true)}
          aria-label="Open navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`nav-overlay ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="nav-overlay-top">
          <Link to="/" className="nav-overlay-wordmark" onClick={() => setOpen(false)}>
            OLAM
          </Link>
          <button className="nav-overlay-close" onClick={() => setOpen(false)}>
            Close
          </button>
        </div>

        <ul className="nav-overlay-links">
          {navLinks.map((link, i) => (
            <li key={link.to} style={{ animationDelay: `${i * 0.05}s` }}>
              <Link
                to={link.to}
                className="nav-overlay-link"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-overlay-footer">
          <Link to="/dia-da-pedra" onClick={() => setOpen(false)}>
            Dia da Pedra
          </Link>
          <a href="mailto:atelier@olam.com">atelier@olam.com</a>
          <span style={{ color: 'rgba(244,231,211,0.2)', fontSize: '0.58rem', letterSpacing: '0.1em' }}>
            By appointment only
          </span>
        </div>
      </div>
    </>
  )
}
