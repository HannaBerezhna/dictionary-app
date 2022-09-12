import React from "react";
import "./App.css";

import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="cointainer">
        <header className="App-header">
          <h1>D i c t i o n a r y</h1>
        </header>
        <Dictionary />
        <footer>
          This project was coded by Hanna Berezhna
          <br />
          <div className="d-flex justify-content-center">
            <a
              href="https://www.instagram.com/gannaberezhna/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/hanna-berezhna-88277a234/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/HannaBerezhna/dictionary-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github-square"></i>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
