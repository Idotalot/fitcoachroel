import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/home';
import Admin from './pages/wp-admin';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/wp-admin" element={<Admin />} />
        <Route path='*' element={<Homepage />} />
      </Routes>
      <Analytics />
      <SpeedInsights />
    </Router>
  );
}

export default App;