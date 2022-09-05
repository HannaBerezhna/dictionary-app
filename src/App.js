import React from "react";
import "./App.css";

import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="cointainer">
        <header className="App-header">
          <h1>Dictionary</h1>
          <Dictionary />
        </header>
      </div>
    </div>
  );
}

export default App;
