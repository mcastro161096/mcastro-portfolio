import Home from "../Home";
import { Switch, Route } from "react-router-dom";
import Cursos from "../Cursos";
import Tecnologias from "../Tecnologias";

function Rotas() {
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Cursos" component={Cursos} />
            <Route path="/Tecnologias" component={Tecnologias} />
        </Switch>
    );
}

export default Rotas;