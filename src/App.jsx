import React from 'react';
import AppMirror from './AppMirror';

import './App.css';

function App() {
  const isApp = false;
  return (
    <div className="App">
      {/* <h1>Vite + React</h1>
      <div className="card">
        <p>hello</p>
      </div> */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {isApp ? '' : <AppMirror />}
    </div>
  );
}

export default App;
