import './App.css';
import React from 'react';
import ButtonAppBar from './Components/Navegacao';
import DescricaoWrite from './Components/DescricaoWrite';

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <DescricaoWrite />
    </div>
  );
}

export default App;
