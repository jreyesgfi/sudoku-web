import logo from './logo.svg';
import './App.css';
import {
  Grid
} from '@mui/material';
import { Box } from '@mui/system';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Sudokus
        </h1>
      </header>
      <div className="flex-grid" className="tablero">
        <div className="col">1</div>
        <div className="col">2</div>
        <div className="col">3</div>
        <div className="col">4</div>
        <div className="col">5</div>
        <div className="col">6</div>
        <div className="col">7</div>
        <div className="col">8</div>
        <div className="col">9</div>
      </div>
    </div>
  );
}

export default App;
