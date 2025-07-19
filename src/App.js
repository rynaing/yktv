import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Founders from './Founders';
import './App.css';
import nugImg from './assets/nug.jpg';


function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hydroponics.NYC</h1>
        <h2>Premium Hydroponic Cannabis from the NYC–NJ Region</h2>
        <p>Locally grown. Sustainably cultivated. Powered by clean hydroponic systems.</p>
        <a className="cta-button" href="mailto:info@hydroponics.nyc">Get in Touch</a>
      </header>

      <section className="App-section">
        <h2>About Us</h2>
        <p>
          We're a cannabis startup rooted in the heart of the NYC–NJ area, committed to producing top-tier cannabis using
          hydroponic methods. Our team believes in sustainability, transparency, and quality—delivering clean, pesticide-free
          cannabis to local communities.
        </p>
      </section>

      <section className="App-section">
        <h2>Our Method</h2>
        <p>
          Hydroponics means no soil, no runoff, and full control of nutrients—allowing us to grow healthier plants with lower
          environmental impact. We grow indoors year-round, using efficient systems that reduce waste and maximize purity.
        </p>
      </section>

      <section className="App-section">
        <h2>Contact</h2>
        <p>Have questions, ideas, or want to collaborate?</p>
        <p>Email us at: <a href="mailto:info@hydroponics.nyc">info@hydroponics.nyc</a></p>
      </section>

      <section className="App-section" style={{ textAlign: 'center' }}>
        <h2>Featured Nug: Wedding Cake</h2>
        <img src={nugImg} alt="Wedding Cake Nug" className="nug-pic" />
        <p>This frosty, potent indica-dominant hybrid is grown locally with care using our hydroponic system. Perfect for winding down.</p>
      </section>

      <footer className="App-footer">
        <p>&copy; 2025 Hydroponics.NYC – All rights reserved.</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav className="App-nav">
        <Link to="/">Home</Link>
        <Link to="/founders">Founders</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/founders" element={<Founders />} />
      </Routes>
    </Router>
  );
}

export default App;
