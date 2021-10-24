import Home from "../Home";
import { Switch, Route } from "react-router-dom";
import Cursos from "../Cursos";

function Rotas() {
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Cursos" component={Cursos} />
        </Switch>
    );
}

export default Rotas;