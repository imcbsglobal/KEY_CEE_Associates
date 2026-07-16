import './Footer.css';

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 56, behavior: 'smooth' });
}

const FOOTER_LINKS = {
  Products: [
    { label: 'Galaxy S Series',    id: 'gadgets' },
    { label: 'Galaxy Z Series',    id: 'gadgets' },
    { label: 'Galaxy Watch',       id: 'gadgets' },
    { label: 'Galaxy Buds',        id: 'gadgets' },
    { label: 'Galaxy Tab & Book',  id: 'gadgets' },
  ],
  Store: [
    { label: 'Find Us',            id: 'location' },
    { label: 'Contact',            id: 'location' },
    { label: 'Service & Repair',   id: 'location' },
    { label: 'Samsung Care+',      id: 'location' },
    { label: 'Trade-In',           id: 'location' },
  ],
};

export default function Footer() {
  return (
    <footer id="footer" className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-wordmark">
                <span className="footer__logo-samsung">SAMSUNG</span>
                <span className="footer__logo-experience">EXPERIENCE</span>
                <div className="footer__logo-divider">
                  <span className="footer__logo-line"></span>
                  <span className="footer__logo-store">STORE</span>
                </div>
              </div>
              <img src="/logo.jpeg" alt="Samsung Experience Store" className="footer__logo-img" />
            </div>
            <p className="footer__tagline">
              
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([col, links]) => (
            <nav key={col} className="footer__col" aria-label={`${col} links`}>
              <h5>{col}</h5>
              <ul>
                {links.map(l => (
                  <li key={l.label}>
                    <a
                      href={`#${l.id}`}
                      onClick={e => { e.preventDefault(); scrollToId(l.id); }}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} KEY CEE Associates. Samsung Experience Store. All rights reserved.
          </p>
          <p className="footer__disclaimer">
            <a
              href="https://imcbs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__powered-link"
            >
              Powered by IMCB Solutions LLP
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
