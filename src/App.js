import './App.css';
import React from 'react';
import ButtonAppBar from './Components/Navegacao';
import Rotas from './Components/Rotas';
import { Container, Grid} from "@mui/material"

function App() {
  return (
    <Container maxWidth="xl"  className="App">
      <ButtonAppBar />
      <Rotas />
    </Container>
  );
}

export default App;
