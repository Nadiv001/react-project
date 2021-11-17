import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./layouts/Home";
import Artists from "./layouts/Artists";
import Paints from "./layouts/Paints";
import NotFound from "./layouts/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/Inicio" />
          </Route>
          <Route path="/Inicio" component={Home} />
          <Route path="/Artistas" component={Artists} />
          <Route path="/Pinturas" component={Paints} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
