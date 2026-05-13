import { Link } from '@tanstack/react-router'

export function Footer() {
  return (
    <footer className="footer-wrap">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">OLAM</div>
          <p className="footer-tagline">
            An archive of objects in gold<br />
            and precious stones.<br />
            Guided by time, matter, and permanence.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <div className="line-gold" style={{ width: '32px' }} />
          </div>
        </div>

        <div>
          <div className="footer-col-label">Archive</div>
          <Link to="/objects" className="footer-col-link">Objects</Link>
          <Link to="/atlas" className="footer-col-link">Atlas Mineral</Link>
          <Link to="/dia-da-pedra" className="footer-col-link">Dia da Pedra</Link>
        </div>

        <div>
          <div className="footer-col-label">Maison</div>
          <Link to="/manifesto" className="footer-col-link">Manifesto</Link>
          <Link to="/process" className="footer-col-link">Process</Link>
          <Link to="/voto" className="footer-col-link">Voto</Link>
          <Link to="/continuum" className="footer-col-link">Continuum</Link>
        </div>

        <div>
          <div className="footer-col-label">Access</div>
          <Link to="/contact" className="footer-col-link">Private Appointments</Link>
          <a href="mailto:atelier@olam.com" className="footer-col-link">atelier@olam.com</a>
          <span
            className="footer-col-link"
            style={{ display: 'block', cursor: 'default', marginTop: '1.5rem', fontSize: '0.6rem', letterSpacing: '0.06em' }}
          >
            Made to order.
          </span>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">
          © OLAM {new Date().getFullYear()}. All rights reserved.
        </span>
        <span className="footer-copy" style={{ letterSpacing: '0.1em' }}>
          Maison de Haute Joaillerie
        </span>
      </div>
    </footer>
  )
}
