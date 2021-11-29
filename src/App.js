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
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
        </Box>
        <Box className="cuadrado flex-grid">
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
        </Box>
        <Box className="cuadrado flex-grid">
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
        </Box>
        <Box className="cuadrado flex-grid">
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
        </Box>
        <Box className="cuadrado flex-grid">
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
        </Box>
        <Box className="cuadrado flex-grid">
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
        </Box>
        <Box className="cuadrado flex-grid">
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
        </Box>
        <Box className="cuadrado flex-grid">
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
        </Box>
        <Box className="cuadrado flex-grid">
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
          <Box className="celda"></Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;
