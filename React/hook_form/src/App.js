import React, { useState } from "react";
import './App.css';
import Form from "./components/Form"
import Results from "./components/Results"

function App() {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    cpassword: ""
  });

  return (
    <div className="App">
      <Form inp = {state} setinp={setState}/>
      <Results data = {state}/>
    </div>
  );
}

export default App;
