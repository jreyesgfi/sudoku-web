import logo from './logo.svg';
import './App.css';
import Tablero from './Views/Tablero';
import React from 'react';
import PanelNumerico from './Views/PanelNumerico';
import { tecladoListener } from './TecladoListener';


function App() {

  // Usamos hook para crear un solo listener
  React.useEffect(() => {
    // Añadimos un listener al teclado
    tecladoListener();
  }, []);
  
  
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
      <PanelNumerico>
      </PanelNumerico>
    </div>
  );
}

export default App;
