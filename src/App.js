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
      <Box className="tablero flex-grid">
        <Box className="cuadrado flex-grid">
          <Box className="celda">1</Box>
          <Box className="celda">2</Box>
          <Box className="celda">3</Box>
          <Box className="celda">4</Box>
          <Box className="celda">5</Box>
          <Box className="celda">6</Box>
          <Box className="celda">7</Box>
          <Box className="celda">8</Box>
          <Box className="celda">9</Box>
        </Box>
        <Box className="cuadrado flex-grid">
          <Box className="celda">1</Box>
          <Box className="celda">2</Box>
          <Box className="celda">3</Box>
          <Box className="celda">4</Box>
          <Box className="celda">5</Box>
          <Box className="celda">6</Box>
          <Box className="celda">7</Box>
          <Box className="celda">8</Box>
          <Box className="celda">9</Box>
        </Box>
        <Box className="cuadrado flex-grid">
          <Box className="celda">1</Box>
          <Box className="celda">2</Box>
          <Box className="celda">3</Box>
          <Box className="celda">4</Box>
          <Box className="celda">5</Box>
          <Box className="celda">6</Box>
          <Box className="celda">7</Box>
          <Box className="celda">8</Box>
          <Box className="celda">9</Box>
        </Box>
        <Box className="cuadrado flex-grid">
          <Box className="celda">1</Box>
          <Box className="celda">2</Box>
          <Box className="celda">3</Box>
          <Box className="celda">4</Box>
          <Box className="celda">5</Box>
          <Box className="celda">6</Box>
          <Box className="celda">7</Box>
          <Box className="celda">8</Box>
          <Box className="celda">9</Box>
        </Box>
        <Box className="cuadrado flex-grid">
          <Box className="celda">1</Box>
          <Box className="celda">2</Box>
          <Box className="celda">3</Box>
          <Box className="celda">4</Box>
          <Box className="celda">5</Box>
          <Box className="celda">6</Box>
          <Box className="celda">7</Box>
          <Box className="celda">8</Box>
          <Box className="celda">9</Box>
        </Box>
        <Box className="cuadrado flex-grid">
          <Box className="celda">1</Box>
          <Box className="celda">2</Box>
          <Box className="celda">3</Box>
          <Box className="celda">4</Box>
          <Box className="celda">5</Box>
          <Box className="celda">6</Box>
          <Box className="celda">7</Box>
          <Box className="celda">8</Box>
          <Box className="celda">9</Box>
        </Box>
        <Box className="cuadrado flex-grid">
          <Box className="celda">1</Box>
          <Box className="celda">2</Box>
          <Box className="celda">3</Box>
          <Box className="celda">4</Box>
          <Box className="celda">5</Box>
          <Box className="celda">6</Box>
          <Box className="celda">7</Box>
          <Box className="celda">8</Box>
          <Box className="celda">9</Box>
        </Box>
        <Box className="cuadrado flex-grid">
          <Box className="celda">1</Box>
          <Box className="celda">2</Box>
          <Box className="celda">3</Box>
          <Box className="celda">4</Box>
          <Box className="celda">5</Box>
          <Box className="celda">6</Box>
          <Box className="celda">7</Box>
          <Box className="celda">8</Box>
          <Box className="celda">9</Box>
        </Box>
        <Box className="cuadrado flex-grid">
          <Box className="celda">1</Box>
          <Box className="celda">2</Box>
          <Box className="celda">3</Box>
          <Box className="celda">4</Box>
          <Box className="celda">5</Box>
          <Box className="celda">6</Box>
          <Box className="celda">7</Box>
          <Box className="celda">8</Box>
          <Box className="celda">9</Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;
