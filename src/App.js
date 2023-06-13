import logo from './logo.svg';
import ryanBabyPic from './assets/ryan_two_years_old_imp.jpg';
import samPic from './assets/sam_drinking_bottle.jpg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo-container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>

      <section className="App-content">
        <p>
          yerrrrrrrrr
        </p>
        <img src={ryanBabyPic} className="ryan-img" alt="ryan" style={{ width: '50%', margin: 'auto' }} />
        <hr></hr>
        <img src={samPic} className="sam-img" alt="sam" style={{ width: '50%', margin: 'auto'}} />
        <h2 className='text'>
          SAM | ORION | RYAN
        </h2>
        <h4 className='text'>EST. 2022</h4>
      </section>
    </div>
  );
}

export default App;
