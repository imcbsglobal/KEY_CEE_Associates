import { useState, useEffect, useCallback } from 'react';
import './Navbar.css';

const LINKS = [
  { label: 'Home',    id: 'hero' },
  { label: 'Gadgets', id: 'gadgets' },
  { label: 'Find Us', id: 'location' },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 56, behavior: 'smooth' });
}

export default function Navbar() {
  const [solid,    setSolid]    = useState(false);
  const [active,   setActive]   = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  const onScroll = useCallback(() => {
    setSolid(window.scrollY > 50);
    const y = window.scrollY + 100;
    for (let i = LINKS.length - 1; i >= 0; i--) {
      const el = document.getElementById(LINKS[i].id);
      if (el && y >= el.offsetTop) { setActive(LINKS[i].id); break; }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const go = (id) => { scrollToId(id); setMenuOpen(false); };

  return (
    <>
      <nav className={`navbar${solid ? ' solid' : ''}`} aria-label="Main navigation">
        <div className="navbar__cta">
          <div className="navbar__associate">
            <span className="navbar__assoc-key">KEY CEE</span>
            <div className="navbar__assoc-row2">
              <span className="navbar__assoc-associates">ASSOCIATES</span>
            </div>
          </div>
        </div>

        <div className="navbar__links" role="menubar">
          {LINKS.map(l => (
            <span
              key={l.id}
              role="menuitem"
              tabIndex={0}
              className={`navbar__link${ active === l.id ? ' active' : ''}`}
              onClick={() => go(l.id)}
              onKeyDown={e => e.key === 'Enter' && go(l.id)}
            >
              {l.label}
            </span>
          ))}
        </div>

        <div
          className="navbar__logo"
          onClick={() => go('hero')}
          tabIndex={0} role="button"
          onKeyDown={e => e.key === 'Enter' && go('hero')}
          aria-label="Samsung Experience Store — back to top"
        >
          <span className="navbar__logo-samsung">SAMSUNG</span>
          <div className="navbar__logo-row2">
            <span className="navbar__logo-experience">EXPERIENCE</span>
          </div>
          <div className="navbar__logo-row3">
            <span className="navbar__logo-line"></span>
            <span className="navbar__logo-store">STORE</span>
          </div>
        </div>

        <button
          className={`navbar__ham${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(p => !p)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* mobile drawer */}
      <div className={`navbar__drawer${menuOpen ? ' open' : ''}`} role="dialog" aria-label="Mobile navigation">
        {LINKS.map(l => (
          <span
            key={l.id}
            className="navbar__drawer-link"
            onClick={() => go(l.id)}
            tabIndex={0} role="button"
            onKeyDown={e => e.key === 'Enter' && go(l.id)}
          >
            {l.label}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </span>
        ))}
      </div>
      {menuOpen && <div className="navbar__overlay" onClick={() => setMenuOpen(false)} aria-hidden="true" />}
    </>
  );
}
