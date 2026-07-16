import './MapSection.css';

const INFO_TILES = [
  {
    label: 'Address', val: 'Key Cee Associates',
    sub: 'First Floor, HiLITE Mall, Poovangal, Kozhikode 673014, Kerala, India',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  },
  {
    label: 'Phone', val: '7034119944 / 8078225300',
    sub: 'Mon–Sun · 10:30 AM – 10 PM',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.17h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.65a16 16 0 0 0 5.92 5.92l1.25-1.25a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.05z"/></svg>,
  },
  {
    label: 'Hours', val: 'Mon–Sun: 10:30 AM – 10 PM',
    sub: 'Open all days',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  },
  {
    label: 'Email', val: 'smgcafeclt@gmail.com',
    sub: 'We reply within 24 hours',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  },
];

const SOCIALS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/hilitemall_samsung_store?utm_source=qr&igsh=NDU0dWpiZnRtcjl6',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/917034119944',
    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/hilitemallsamsungstore',
    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  },
];

export default function MapSection() {
  return (
    <section id="location" className="mapsec" aria-labelledby="location-heading">
      <div className="container">
        <div className="mapsec__inner">

          {/* ── info ── */}
          <div className="mapsec__info sr-left on-dark">
            <div>
              <p className="section-eyebrow">Visit Us</p>
              <h2 id="location-heading" className="section-heading">Find Our Store</h2>
              <p className="section-body">
                Walk in, explore the full Galaxy lineup, and get hands-on help from our certified team.
              </p>
            </div>

            <div className="mapsec__info-cards">
              {INFO_TILES.map(t => (
                <div key={t.label} className="info-tile">
                  <div className="info-tile__icon" aria-hidden="true">{t.icon}</div>
                  <div className="info-tile__text">
                    <span className="info-tile__label">{t.label}</span>
                    <span className="info-tile__val">{t.val}</span>
                    <span className="info-tile__sub">{t.sub}</span>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="section-eyebrow" style={{ marginBottom: 10 }}>Follow Us</p>
              <div className="mapsec__social" role="list" aria-label="Social media links">
                {SOCIALS.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="soc-btn" aria-label={s.label} role="listitem">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Google Maps embed ── */}
          <div className="map-wrap sr-right">
            <a
              href="https://www.google.com/maps/place/KEY+CEE+ASSOCIATES/@11.2480098,75.8332075,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba65b08ad36c631:0xb495be5ed7176d02!8m2!3d11.2480098!4d75.8332075!16s%2Fg%2F11y_c_90_g?entry=ttu&g_ep=EgoyMDI2MDcxMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Key Cee Associates on Google Maps"
              className="map-frame map-frame--link"
            >
              <iframe
                className="map-iframe"
                title="Key Cee Associates Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.4!2d75.8332075!3d11.2480098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65b08ad36c631%3A0xb495be5ed7176d02!2sKEY%20CEE%20ASSOCIATES!5e0!3m2!1sen!2sin!4v1689000000000!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                tabIndex="-1"
              />
              <div className="map-bar" aria-hidden="true">
                <span className="map-bar__addr">HiLITE Mall, Kozhikode</span>
                <span className="map-bar__open">● Open Now</span>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
