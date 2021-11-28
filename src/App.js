import logo from './logo.svg';
import './App.css';
import {
  Grid
} from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Sudokus
        </h1>
      </header>
      <div className="tablero">
        <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
            <p>1</p>
          </Grid>
          <Grid item xs={6} md={4}>
            <p>2</p>
          </Grid>
          <Grid item xs={6} md={4}>
            <p>3</p>
          </Grid>
          <Grid item xs={6} md={8}>
            <p>4</p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
