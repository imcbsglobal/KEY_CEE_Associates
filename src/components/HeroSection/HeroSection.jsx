import './HeroSection.css';

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 56, behavior: 'smooth' });
}

export default function HeroSection() {
  return (
    <section id="hero" className="hero" aria-label="Hero — Samsung Store">
      {/* fullscreen background video */}
      <video
        className="hero__video-bg"
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <div className="hero__video-overlay" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />

      <div className="container hero__inner">
        {/* Text */}
        <div className="hero__text">
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-dot" aria-hidden="true" />
            Authorised Samsung Store · Kozhikode
          </div>

          <h1 className="hero__h1">
            Your City's<br />
            <em>Samsung</em><br />
            Destination
          </h1>

          <p className="hero__sub">
            Galaxy smartphones, wearables, tablets, and smart home tech —
            all under one roof with live demos and certified after-sales care.
          </p>

          <div className="hero__btns">
            <button className="btn btn-white" onClick={() => scrollToId('gadgets')}>
              Explore Gadgets
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
            <button className="btn btn-outline-white" onClick={() => scrollToId('location')}>
              Find Our Store
            </button>
          </div>

          <div className="hero__stats" aria-label="Store highlights">
            {[
              { num: '500+', label: 'Products In-Store' },
              { num: '5★',   label: 'Customer Rating'  },
              { num: '10+',  label: 'Years of Service'  },
              { num: '24h',  label: 'Support'           },
            ].map(s => (
              <div key={s.label} className="hero__stat">
                <span className="hero__stat-num">{s.num}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>



      </div>
    </section>
  );
}
