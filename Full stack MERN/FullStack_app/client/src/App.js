import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import { Link } from 'react-router-dom';
import './App.css';
import Dashboard from './views/Dashboard';
import Add from './views/Add';
import Display from './views/Display';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>

        <Route exact path="/new">
          <Add />
        </Route>

        <Route exact path="/pirates/:id" >
          <Display />
        </Route>

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
