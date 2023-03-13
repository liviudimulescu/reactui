import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from 'react';

function App() {
    const [count, setCount] = useState(0);
    const [timp, setTimp] = useState(new Date("11/03/2022"));
    const lala = "doom2";
    useEffect(() =>{
        console.log("msmsasa");
    }, []);

  return (
    <div className="App">
      <header className="App-header">
      <p> mark is time {timp.toLocaleString()} </p>
      <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
              Click me
            </button>
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {lala}
        </a>
      </header>
    </div>
  );
}

export default App;
