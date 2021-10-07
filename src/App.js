import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './Components/Navegacao';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
