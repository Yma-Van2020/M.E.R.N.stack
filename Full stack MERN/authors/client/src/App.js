import React from 'react';
import './App.css';
import Main from "./views/Main"
import Update from "./views/Update"
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Add from './views/Add';

function App() {


  return (
    <div style={{padding:"150px"}} className="App">
      <h1>Favorite authors</h1>
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route exact path="/edit/:id">
          <Update />
        </Route>

        <Route exact path="/new"> 
         <Add/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
