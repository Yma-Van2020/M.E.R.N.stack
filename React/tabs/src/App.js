import { useState } from 'react';
import './App.css';
import Tabs from './components/Tabs';

const arr = [
  {label: "Tab1", content:"Tab1 content"},
  {label: "Tab2", content:"Tab2 content"},
  {label: "Tab3", content:"Tab3 content"},
]

function App() {
  const [selectedTab, setselectedTab] =useState(0)

  return (
    <div className="App">
      <Tabs arr={arr} setselectedTab={setselectedTab}/>
     <div className="d-flex justify-content-center m-2">
      <div style={{width:"200px", height:"200px", border:"1px black solid"}}>
       { arr[selectedTab].content}
      </div>
     </div>
    </div>
  );
}

export default App;
