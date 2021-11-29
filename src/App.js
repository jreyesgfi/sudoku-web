import logo from './logo.svg';
import './App.css';
import Tablero from './Views/Tablero';
import React from 'react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Sudokus
        </h1>
      </header>
      <Tablero>
      </Tablero>
    </div>
  );
}

export default App;
