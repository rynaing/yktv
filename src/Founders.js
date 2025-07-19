
import React from 'react';
import ryanBabyPic from './assets/ryan_two_years_old_imp.jpg';
import samPic from './assets/sam_drinking_bottle.jpg';
import './App.css';

function Founders() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meet the Founders</h1>
        <p>We’ve been hustling since day one—literally.</p>
      </header>

      <section className="App-section" style={{ textAlign: 'center' }}>
        <h2>Ryan</h2>
        <img src={ryanBabyPic} alt="Baby Ryan" className="baby-pic" />
        <p>A future CEO with snack time energy.</p>

        <h2>Sam</h2>
        <img src={samPic} alt="Baby Sam" className="baby-pic" />
        <p>Destined to lead… right after this bottle.</p>
      </section>
    </div>
  );
}

export default Founders;
