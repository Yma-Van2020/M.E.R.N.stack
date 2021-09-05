import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Single from "./components/Single";
import Combine from "./components/Combine";



function App() {
  return (
  <div className="App">
   <BrowserRouter>
    <Switch>
      <Route exact path="/home">
        <Home />
      </Route>
 
     <Route exact path="/:input">
      <Single />
     </Route>

     <Route exact path="/:inp/:textColor/:bgColor">
      <Combine />
     </Route>

    </Switch>
   </BrowserRouter>
   </div>
  );
}

export default App;
