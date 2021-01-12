import React from "react";
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Lobby from "./pages/Lobby";

function App() {
  return (
   <BrowserRouter>
   <Switch>
     <Route exact path="/" component={Home}/>
     <Route exact path="/lobby" component={Lobby}/>
   </Switch>
   </BrowserRouter>
  );
}

export default App;
