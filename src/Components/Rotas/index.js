import Home from "../Home";
import { Switch, Route } from "react-router-dom";

function Rotas() {
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Resumo" />
        </Switch>
    );
}

export default Rotas;