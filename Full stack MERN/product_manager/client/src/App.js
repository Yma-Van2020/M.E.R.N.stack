import React from 'react';
import Main from './views/Main';
import Detail from './views/Detail';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/product">
          <Main />
        </Route>

        <Route exact path="/product/:id">
          <Detail />
        </Route>
        </Switch>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
