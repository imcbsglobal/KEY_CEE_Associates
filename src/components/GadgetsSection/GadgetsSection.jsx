import { useEffect, useRef } from 'react';
import './GadgetsSection.css';

/* ── Product images from /public ── */
const GADGETS = [
  {
    cat: 'Smartphones', name: 'Galaxy S Series',
    desc: 'Flagship phones with pro-grade cameras, built-in S Pen and Galaxy AI.',
    img: '/Galaxy%20S%20Series.png',
  },
  {
    cat: 'Foldables', name: 'Galaxy Z Fold Series',
    desc: 'Book-fold smartphones that open into a full tablet canvas.',
    img: '/Galaxy%20Z%20Fold%20Series.png',
  },
  {
    cat: 'Flip Phones', name: 'Galaxy Z Flip Series',
    desc: 'Pocket-sized when closed. Full screen and FlexCam modes when open.',
    img: '/Galaxy%20Z%20Flip%20Series.png',
  },
  {
    cat: 'Smartwatches', name: 'Galaxy Watch Series',
    desc: 'Health sensors, ECG, BioActive monitoring and stylish aluminium cases.',
    img: '/Galaxy%20Watch%20Series.png',
  },
  {
    cat: 'Earbuds', name: 'Galaxy Buds Series',
    desc: 'Adaptive ANC, Hi-Fi audio and seamless device switching.',
    img: '/Galaxy%20Buds%20Series.png',
  },
  {
    cat: 'Tablets & Laptops', name: 'Galaxy Tab & Book',
    desc: 'AMOLED tablets with S Pen support and ultra-thin Intel laptops.',
    img: '/Galaxy%20Tab%20and%20Book.png',
  },
];

function GCard({ item, index }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => el.classList.add('in'), index * 85);
        io.unobserve(el);
      }
    }, { threshold: 0.08 });
    io.observe(el);
    return () => io.disconnect();
  }, [index]);

  return (
    <article ref={ref} className="gcard sr-up" aria-label={item.name}>
      <img src={item.img} alt={item.name} className="gcard__img" />
      <div className="gcard__overlay">
        <div className="gcard__cat">{item.cat}</div>
        <div className="gcard__name">{item.name}</div>
        <div className="gcard__desc">{item.desc}</div>
      </div>
    </article>
  );
}

export default function GadgetsSection() {
  return (
    <section id="gadgets" className="gadgets" aria-labelledby="gadgets-heading">
      <div className="container">
        <div className="gadgets__head on-light">
          <div className="sr-up">
            <p className="section-eyebrow">What We Carry</p>
            <h2 id="gadgets-heading" className="section-heading">Gadgets In Store</h2>
            <p className="section-body">
              Every Samsung series on display. Try them live, get expert advice, and walk out with the right device.
            </p>
          </div>
        </div>

        <div className="gadgets__grid">
          {GADGETS.map((g, i) => <GCard key={g.name} item={g} index={i} />)}
        </div>
      </div>
    </section>
  );
}
