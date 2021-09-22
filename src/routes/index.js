import { Switch, Route } from "react-router-dom";
import Register from "../pages/Register";
import Home from "../pages/Home";
import { useState } from "react";

function Rotas() {
  const [name, setName] = useState("");
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Register setName={setName} />
        </Route>
        <Route path={"/home/:params"}>
          <Home name={name} />
        </Route>
      </Switch>
    </>
  );
}
export default Rotas;
