import React, { useState } from 'react';
import './App.css';

import Display from './components/Display';
import DashBoard from './components/DashBoard';

function App() {
  const [strikes, setStrikes] = useState(0)
  const [balls, setBalls] = useState(0)

  const handleStrike = () => {
    if(strikes === 2){
      setStrikes(0)
    } else {
      setStrikes(strikes + 1)
    }
  }

  const handleBall = () => {
    if(balls === 3){
      setBalls(0)
    } else {
      setBalls(balls + 1)
    }
  }

  const handleFoul = () => {
    if(strikes === 0 || strikes === 1){
      setStrikes(strikes + 1)
    } 
  }

  const handleHit = () => {
    setStrikes(0)
    setBalls(0)
  }

  return (
    <div className="App">
    <h1>Baseball Tracking App</h1>
      <Display strikes={strikes} balls={balls} />
      <DashBoard 
      strike={handleStrike}
      ball={handleBall}
      foul={handleFoul}
      hit={handleHit} 
      />
    </div>
  );
}

export default App;
