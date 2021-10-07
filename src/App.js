import './App.css';
import ButtonAppBar from './Components/Navegacao';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import Cursos from './Components/Cursos';

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cursos" component={Cursos} />
      </Switch>
    </div>
  );
}

export default App;
