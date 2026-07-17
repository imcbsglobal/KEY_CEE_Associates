import './HeroSection.css';

const heroBg = '/hero.png';

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 56, behavior: 'smooth' });
}

export default function HeroSection() {
  return (
    <section id="hero" className="hero" aria-label="Hero — Samsung Store">
      <div className="hero__grid" aria-hidden="true" />

      <div className="container hero__inner">
        {/* Left — Text */}
        <div className="hero__text">
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-dot" aria-hidden="true" />
            Authorised Samsung Store · Kozhikode
          </div>

          <h1 className="hero__h1">
            Everything <em>Samsung</em><br />
            One Trusted Destination
          </h1>

          <p className="hero__sub">
            Whether you&rsquo;re upgrading your smartphone, exploring the Galaxy ecosystem,
            or looking for genuine accessories and expert support, we&rsquo;re here to deliver
            the complete Samsung experience at HiLITE Mall, Calicut.
          </p>

          <div className="hero__btns">
            <button className="btn btn-white" onClick={() => scrollToId('gadgets')}>
              Explore Galaxy
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
            <button className="btn btn-outline-white" onClick={() => scrollToId('location')}>
              Visit Our Store
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

        {/* Right — Image */}
        <div className="hero__image-wrap">
          <img
            className="hero__store-img"
            src={heroBg}
            alt="Key Cee Associates Samsung Experience Store interior"
          />
          <div className="hero__img-fade" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}