import React from "react";
import "./App.css";

import { Game } from "./Game";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Black Hole Game</h1>
        <p class="credit">
          Black Hole is originally{" "}
          <a href="https://nestorgames.com/#blackhole_detail" target="_blank">
            a game for two players by Wal Joris.
          </a>
        </p>
      </header>
      <main>
        <Game />
      </main>
      <footer>
        <p>
          This digital game is created by{" "}
          <a href="https://hamatti.org" target="_blank">
            Juha-Matti Santala
          </a>{" "}
          and{" "}
          <a href="https://github.com/hamatti/" target="_blank">
            the code is MIT licensed
          </a>
          .
        </p>
        <p>
          Creation of this open source project has been supported by{" "}
          <img
            src="/chilicorn.svg"
            style={{ height: "20px", paddingRight: "0.5em" }}
          />
          <a href="https://spiceprogram.org">Spice Program</a>.
        </p>
        <p>
          This website is not produced, endorsed, supported, or affiliated with
          Wal Joris or nestorgames.
        </p>
      </footer>
    </div>
  );
}

export default App;
