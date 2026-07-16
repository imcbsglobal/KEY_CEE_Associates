import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StorePage from './pages/StorePage';

/**
 * App.jsx — routing only.
 * Add new <Route> entries here as the site grows.
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StorePage />} />
      </Routes>
    </BrowserRouter>
  );
}
