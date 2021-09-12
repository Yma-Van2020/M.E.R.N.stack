import React from 'react';
import Main from './views/Main';
import Detail from './views/Detail';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import { useState } from 'react';
import Update from './views/Update';

function App() {
  const [state, setState] = useState({})

  const removeFromDom = productId =>{
    setState(state.filter(product => product._id !== productId))
}

  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/product">
          <Main />
        </Route>

        <Route exact path="/product/:id">
          <Detail removeFromDom={removeFromDom} setState={setState}/>
        </Route>

        <Route exact path="/product/:id/edit">
          <Update state={state}/>
        </Route>
        </Switch>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
