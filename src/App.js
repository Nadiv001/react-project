import React from "react";
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import MenuBar from './components/menu/Menu';
import Paints from './components/paints/Paints';
import Header from './components/Header/Header';
import Dibujos from "./components/Categories/dibujos/Dibujos";
import Artistas from "./components/Categories/artistas/Artistas";
import Pinturas from "./components/Categories/pinturas/Pinturas";


function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <MenuBar />
        <Switch>
        <Route path="/Dibujos" component ={Dibujos}/>
        <Route path="/Artistas" component ={Artistas}/>
        <Route path="/Pinturas" component ={Pinturas}/>
        </Switch>
      </BrowserRouter>
      <Paints />
    </>


  );
}

export default App;
