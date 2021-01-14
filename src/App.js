import { useState, useEffect } from 'react';
import { Header } from './components/header';
import { Game } from './components/game';
function App() {
  const [score, setScore] = useState(0);
  const [highScore, sethighScore] = useState(0);

  const increaseScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const bestScore = (v) => {
    if (highScore < v) {
      sethighScore(v);
    }
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <>
      <Header />
      <Game
        increaseScore={increaseScore}
        bestScore={bestScore}
        resetScore={resetScore}
        score={score}
        highScore={highScore}
      />
    </>
  );
}

export default App;
