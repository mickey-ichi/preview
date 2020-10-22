import React, {useState} from 'react';

//import components
import {Toggle} from "./components/molecules/Toggle"

import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <div className="App">
      <Toggle checked={darkMode} onChange={setDarkMode}/>
    </div>
  );
}

export default App;
