import { Switch, Route } from "react-router-dom";
import Register from "../pages/Register";
import Home from "../pages/Home";

function Rotas() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Register />
        </Route>
        <Route path="/home/:name">
          <Home />
        </Route>
      </Switch>
    </>
  );
}
export default Rotas;
