import io from 'socket.io-client';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [socket] = useState(() => io(":8000"));

  useEffect(() => {
    console.log("Is this running?")
    socket.on("welcome", data => console.log(data))
    return () => socket.disconnect(true);
  }, [])

  return (
    <div className="App">
      <h1>Socket Test</h1>
    </div>
  );
}

export default App;
