import './Help.css';

const helpItems = [
  {
    img: '/demo_21.jpg',
    title: 'Book A Demo',
    desc: 'Get a personalized hands-on demonstration of our latest Galaxy devices.',
  },
  {
    img: '/help_21.jpg',
    title: 'Software Help',
    desc: 'Get help on data transfer, software upgrades or any software related issues.',
  },
  {
    img: '/consultation_21.jpg',
    title: '1:1 Consultation',
    desc: 'Receive tailored product recommendation and helpful tips from our Galaxy Consultants.',
  },
];

export default function Help() {
  return (
    <section className="help" aria-labelledby="help-heading">
      <div className="container">
        {/* ── Header ── */}
        <div className="help__header on-light">
          <p className="section-eyebrow">How We Help</p>
          <h2 id="help-heading" className="section-heading">
            We&rsquo;re here to help you
          </h2>
          <p className="section-body">
            At Samsung Experience Store, everything is easier.
            Come talk to our certified experts and get instant solutions.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="help__grid">
          {helpItems.map(({ img, title, desc }) => (
            <article key={title} className="help__card">
              <div className="help__card-img-wrap">
                <img
                  src={img}
                  alt={title}
                  className="help__card-img"
                  loading="lazy"
                />
              </div>
              <h3 className="help__card-title">{title}</h3>
              <p className="help__card-desc">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
