import { useState } from "react";
import "./App.css";
import tripScrap from "./components/tripScrap";
import destination from "./components/destination";

function App() {
  return (
    <div className="App">
      <header>
        <h1>TripScrap</h1>
      </header>

      <div class="grid-container">
        <div class="side_bar">
          {/* side bar components will go here... */}
        </div>
        <div class="main_card">
          <tripScrap />
        </div>
      </div>
    </div>
  );
}

export default App;
