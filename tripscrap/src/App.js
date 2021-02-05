import { useState } from 'react';
import './App.css';
import TripScrap from './components/tripScrap'
import destination from './components/destination'



function App() {
  return (
    <div className="App">

      <header>
        <h1>
          TripScrap
        </h1>
      </header>

      <div class="grid-container">
      <div class="side_bar"></div>
      <div class="main_card">

      <TripScrap/>

      </div>
      
      </div>

      <destination/>

    </div>
    
  );
}

export default App;
