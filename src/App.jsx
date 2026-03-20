import { useState, useCallback } from 'react';
import PasswordScreen from './components/PasswordScreen';
import WelcomeScreen from './components/WelcomeScreen';
import Game from './components/Game';
import Awning from './components/Awning';
import { startCafeAudio } from './audio/cafeAudio';

function App() {
  const [screen, setScreen] = useState('password');
  const [gameKey, setGameKey] = useState(0);

  const handleUnlock = useCallback(() => {
    startCafeAudio();
    setScreen('welcome');
  }, []);

  const handleStart = useCallback(() => setScreen('game'), []);

  const handleRestart = useCallback(() => {
    setGameKey((k) => k + 1);
    setScreen('welcome');
  }, []);

  const expanded = screen !== 'password';

  return (
    <Awning expanded={expanded}>
      {screen === 'password' && <PasswordScreen onUnlock={handleUnlock} />}
      {screen === 'welcome' && <WelcomeScreen onStart={handleStart} />}
      {screen === 'game' && <Game key={gameKey} onRestart={handleRestart} />}
    </Awning>
  );
}

export default App;
