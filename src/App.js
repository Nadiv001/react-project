import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import MenuBar from "./components/menu/Menu.jsx";
import Header from "./components/header/Header.jsx";
import Home from "./layouts/Home";
import Artists from "./layouts/Artists";
import Paints from "./layouts/Paints";
import NotFound from "./layouts/NotFound";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <MenuBar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
          <Route path="/Home" component={Home} />
          <Route path="/Artists" component={Artists} />
          <Route path="/Paints" component={Paints} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
