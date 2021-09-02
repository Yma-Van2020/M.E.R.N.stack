import React, { useState } from "react";
import Form from './components/Form';
import './App.css';
import Display from './components/Display';

function App() {
  const [state, setState] = useState([])
  
  const addColor = (color) =>{
    const colorArr = [...state, color]
    setState(colorArr)
  }

  return (
    <div className="App">
      <Form setColor={addColor} />
      <Display colors={state} />
    </div>
  );
}

export default App;
