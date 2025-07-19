import React from 'react';

function Products() {
  return (
    <div className="App-section">
      <h2>Our Products</h2>
      <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <div style={{ minWidth: 200, textAlign: 'center' }}>
          <span style={{ fontSize: '2rem' }}>🪻</span>
          <h3>Flower</h3>
          <p>Premium hydroponic cannabis flower, hand-trimmed and cured for maximum flavor and potency.</p>
        </div>
        <div style={{ minWidth: 200, textAlign: 'center' }}>
          <span style={{ fontSize: '2rem' }}>💨</span>
          <h3>Cartridges</h3>
          <p>High-purity vape cartridges filled with our clean, lab-tested cannabis extracts.</p>
        </div>
        <div style={{ minWidth: 200, textAlign: 'center' }}>
          <span style={{ fontSize: '2rem' }}>🧴</span>
          <h3>Oils</h3>
          <p>Versatile cannabis oils, perfect for tinctures, edibles, or your own creations.</p>
        </div>
      </div>
    </div>
  );
}

export default Products;