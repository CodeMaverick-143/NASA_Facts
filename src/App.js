// src/App.js
import React from 'react';
import APOD from './components/APOD';
import RandomSpaceFact from './components/RandomSpaceFact';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Space Facts App</h1>
      </header>
      <main>
        <div className="container">
          <APOD />
        </div>
        <div className="container">
          <RandomSpaceFact />
        </div>
      </main>
      <footer>
        <p>Powered by NASA Open API</p>
      </footer>
    </div>
  );
}

export default App;
