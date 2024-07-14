import React, { useState } from 'react';
import './App.css';

function App() {
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');

  const netPrice = (parseFloat(price) || 0) - (parseFloat(discount) || 0);
  const vat = netPrice * 0.07;
  const grossPrice = netPrice + vat;

  return (
    <div className="App">
      <header className="App-header">
        <h1>VAT Calculator</h1>
        <div className="input-group">
          <label>
            Price
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter price"
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            Discount
            <input
              type="number"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              placeholder="Enter discount"
            />
          </label>
        </div>
        <div className="results">
          <p>Net Price = {netPrice.toFixed(2)}</p>
          <p>VAT (7%) = {vat.toFixed(2)}</p>
          <p>Gross Price = {grossPrice.toFixed(2)}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
