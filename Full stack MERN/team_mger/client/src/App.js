import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import { Link } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import AddForm from './components/AddForm';
import Status from './views/Status';
import Game2 from './components/Game2';
import Game3 from './components/Game3';
import Update from "./views/Update"

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <div style={{backgroundColor:"whitesmoke", padding:"30px"}}>
            <p className="d-flex justify-content-start"><Link to="/list">Manage Players</Link>&nbsp;|&nbsp;<Link to="/status/game"> Manage Player Status</Link></p>
      <Switch>
        <Route exact path = "/list">
          <Dashboard />
        </Route>

        <Route exact path="/addplayer">
          <AddForm />
        </Route>

        <Route exact path="/status/game">
          <Status />
        </Route>

        <Route exact path="/status/game/2">
        <Game2 />
        </Route>

        <Route exact path="/status/game/3">
        <Game3 />
        </Route>

        <Route exact path="/edit/:id">
        <Update />
        </Route>

      </Switch>

      </div>
      </BrowserRouter>
      </div>
   
  );
}

export default App;
