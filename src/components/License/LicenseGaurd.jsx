import { useEffect, useState } from 'react';
import './LicenseGaurd.css';

const API_URL =
  'https://activate.imcbs.com/mobileapp/api/project/customdev';

/**
 * LicenseGuard
 *
 * Checks the activation API on mount.
 *
 * Logic:
 *  - API returns status:"Active" AND is_expired:false → show the site
 *  - API returns status !== "Active" OR is_expired:true → show inactive screen
 *  - Network/CORS error (can't reach API) → fail OPEN, show the site
 *    (we don't block a legitimately licensed customer due to a network issue)
 */
export default function LicenseGuard({ children }) {
  const [status, setStatus] = useState('loading'); // 'loading' | 'active' | 'inactive'
  const [info, setInfo]     = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function checkLicense() {
      try {
        const res = await fetch(API_URL, {
          method: 'GET',
          headers: { 'Accept': 'application/json' },
        });

        if (!res.ok) {
          // HTTP error (4xx/5xx) — can't confirm status, fail open
          if (!cancelled) setStatus('active');
          return;
        }

        const data = await res.json();
        if (cancelled) return;

        // Guard against unexpected response shape
        if (!data.success || !Array.isArray(data.customers) || data.customers.length === 0) {
          setStatus('active'); // unknown shape — fail open
          return;
        }

        const customer = data.customers[0];
        const validity = customer.license_validity ?? {};

        const isActive  = customer.status === 'Active';
        const isExpired = validity.is_expired === true || (validity.remaining_days ?? 1) <= 0;

        if (!isActive || isExpired) {
          // API explicitly says inactive or expired — block
          setInfo({
            name:      customer.customer_name ?? '',
            expiry:    validity.expiry_date   ?? 'N/A',
            remaining: validity.remaining_days ?? 0,
          });
          setStatus('inactive');
        } else {
          setStatus('active');
        }
      } catch {
        // Network/CORS error — cannot reach API.
        // Fail open: don't block a valid customer because of a connectivity issue.
        if (!cancelled) setStatus('active');
      }
    }

    checkLicense();
    return () => { cancelled = true; };
  }, []);

  /* ── Loading ── */
  if (status === 'loading') {
    return (
      <div className="lg-loading" role="status" aria-label="Verifying license">
        <div className="lg-loading__spinner" aria-hidden="true" />
        <p>Verifying license…</p>
      </div>
    );
  }

  /* ── Inactive / Expired ── */
  if (status === 'inactive') {
    return (
      <div className="lg-inactive" role="alert">
        <div className="lg-inactive__card">
          <div className="lg-inactive__icon" aria-hidden="true">
            <svg
              viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.8"
              strokeLinecap="round" strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>

          <h1 className="lg-inactive__title">License Inactive</h1>
          <p className="lg-inactive__subtitle">
            Your license has expired or is no longer active.
            <br />
            Please renew to continue using this application.
          </p>

          {info && (
            <dl className="lg-inactive__meta">
              <div className="lg-inactive__meta-row">
                <dt>Customer</dt>
                <dd>{info.name}</dd>
              </div>
              <div className="lg-inactive__meta-row">
                <dt>Expiry Date</dt>
                <dd>{info.expiry}</dd>
              </div>
              <div className="lg-inactive__meta-row">
                <dt>Days Remaining</dt>
                <dd className="lg-inactive__meta-dd--warn">{info.remaining}</dd>
              </div>
            </dl>
          )}
        </div>
      </div>
    );
  }

  /* ── Active ── */
  return children;
}
