import React from 'react';
import { Fragment } from 'react';
import './App.css';
import Home from './Components/Home';
//import NavBar from './Components/NavegacaoSuperior';
import SearchAppBar from './Components/NavegacaoSuperior';


function App() {
  return (
    <Fragment>
      <div className="App">
        <Home></Home>
      </div>

    </Fragment>

  );
}

export default App;
