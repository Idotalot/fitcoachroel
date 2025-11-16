import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/home';
import Admin from './pages/wp-admin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/wp-admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;