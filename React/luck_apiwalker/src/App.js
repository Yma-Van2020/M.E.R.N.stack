import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import './App.css';
import Search from "./components/Search";
import ApiFetch from "./components/ApiFetch";

function App() {
  const [state, setState] = useState({
    type:"",
    id:0
  }) 

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Search setState={setState}/>
          </Route>

          <Route path="/:type/:id">
            <ApiFetch state={state}/>
          </Route>

          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
