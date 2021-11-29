import logo from './logo.svg';
import './App.css';
import Tablero from './Views/Tablero';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Sudokus
        </h1>
      </header>
      {Tablero.construirTablero()}
    </div>
  );
}

export default App;
