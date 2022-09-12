import React from "react";
import "./App.css";

import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="cointainer">
        <header className="App-header">
          <h1>D i c t i o n a r y</h1>
          <Dictionary />
        </header>
      </div>
    </div>
  );
}

export default App;
