import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StorePage     from './pages/StorePage';
import LicenseGuard  from './components/License/LicenseGaurd';

/**
 * App.jsx — routing only.
 * LicenseGuard verifies the activation API before showing any page.
 * Add new <Route> entries here as the site grows.
 */
export default function App() {
  return (
    <LicenseGuard>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StorePage />} />
        </Routes>
      </BrowserRouter>
    </LicenseGuard>
  );
}
