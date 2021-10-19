import './App.css';
import React from 'react';
import ButtonAppBar from './Components/Navegacao';
import DescricaoWrite from './Components/DescricaoWrite';
import Rotas from './Components/Rotas';

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Rotas />
    </div>
  );
}

export default App;
