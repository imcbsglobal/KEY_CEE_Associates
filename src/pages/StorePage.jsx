import { useState, useEffect } from 'react';
import '../App.css';

import Navbar          from '../components/Navbar/Navbar';
import HeroSection     from '../components/HeroSection/HeroSection';
import GadgetsSection  from '../components/GadgetsSection/GadgetsSection';
import MapSection      from '../components/MapSection/MapSection';
import Footer          from '../components/Footer/Footer';
import useScrollReveal from '../hooks/useScrollReveal';

/* ── Loading screen ── */
function LoadingScreen({ done }) {
  return (
    <div
      className={`store-loader${done ? ' store-loader--out' : ''}`}
      aria-hidden={done}
      role="status"
      aria-label="Loading"
    >
      <div className="store-loader__logo">KEY CEE Associates</div>
      <div className="store-loader__bar">
        <div className="store-loader__fill" />
      </div>
    </div>
  );
}

/* ── Back-to-top button ── */
function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const h = () => setShow(window.scrollY > 420);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <button
      id="back-to-top"
      className={show ? 'show' : ''}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      <svg
        width="18" height="18" viewBox="0 0 24 24"
        fill="none" stroke="currentColor"
        strokeWidth="2.5" strokeLinecap="round"
        aria-hidden="true"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}

/* ── Page ── */
export default function StorePage() {
  const [loaded, setLoaded] = useState(false);

  /* activate scroll-reveal observers */
  useScrollReveal();

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <LoadingScreen done={loaded} />

      <Navbar />

      <main id="main-content">
        <HeroSection />
        <GadgetsSection />
        <MapSection />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}

{/* <BackToTop /> */}
