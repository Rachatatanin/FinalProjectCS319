import { createRoot } from 'react-dom/client';
import './globals.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Knowledge from './page/knowledge';
import Cafe from './page/cafe';
import Adopt from './page/adopt';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Knowledge />} />
      <Route path="/cafe" element={<Cafe />} />
      <Route path="/adopt" element={<Adopt />} />
    </Routes>
  </Router>
);
