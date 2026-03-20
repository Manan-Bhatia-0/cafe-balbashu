import { useState, useEffect, useCallback, useRef } from 'react';
import rounds from '../data/rounds';
import distractionData from '../data/distractions';
import Distraction from './Distraction';
import SceneAnimation from './SceneAnimation';
import CafeGirl from './CafeGirl';
import './Game.css';

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Game({ onRestart }) {
  const [shuffledRounds] = useState(() => shuffleArray(rounds));
  const [currentRound, setCurrentRound] = useState(0);
  const [score, setScore] = useState(0);
  const [literalCount, setLiteralCount] = useState(0);
  const [chosen, setChosen] = useState(null); // { type, index }
  const [showScene, setShowScene] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [distraction, setDistraction] = useState(null);
  const [shuffledChoices] = useState(() =>
    shuffledRounds.map((r) => shuffleArray(r.choices))
  );
  const distractionTimer = useRef(null);
  const usedDistractions = useRef(new Set());

  const round = shuffledRounds[currentRound];
  const choices = shuffledChoices[currentRound];
  const totalRounds = shuffledRounds.length;

  const triggerDistraction = useCallback(() => {
    if (gameOver) return;
    const available = distractionData.filter((_, i) => !usedDistractions.current.has(i));
    if (available.length === 0) {
      usedDistractions.current.clear();
      return;
    }
    const idx = Math.floor(Math.random() * available.length);
    const originalIdx = distractionData.indexOf(available[idx]);
    usedDistractions.current.add(originalIdx);
    setDistraction(available[idx]);
  }, [gameOver]);

  useEffect(() => {
    if (gameOver) return;
    // First distraction within 2s, then every 8-14s
    const firstDelay = 1000 + Math.random() * 1000;
    distractionTimer.current = setTimeout(() => {
      triggerDistraction();
      const scheduleNext = () => {
        const delay = 8000 + Math.random() * 6000;
        distractionTimer.current = setTimeout(() => {
          triggerDistraction();
          scheduleNext();
        }, delay);
      };
      scheduleNext();
    }, firstDelay);
    return () => clearTimeout(distractionTimer.current);
  }, [currentRound, gameOver, triggerDistraction]);

  const handleChoice = (choice, index) => {
    if (chosen) return;
    setChosen({ type: choice.type, index, id: choice.id });
    setShowScene(true);
    if (choice.type === 'correct') {
      setScore((s) => s + 1);
      setLiteralCount((c) => c + 1);
    }
  };

  const getSceneText = () => {
    if (!chosen) return '';
    if (chosen.type === 'correct') {
      return round.correctScenes[chosen.id] || round.correctScenes[0];
    }
    if (chosen.type === 'wrong-logical') return round.logicalScene;
    return round.wrongFunnyScene;
  };

  const handleNext = () => {
    if (currentRound + 1 >= totalRounds) {
      setGameOver(true);
    } else {
      setCurrentRound((r) => r + 1);
      setChosen(null);
      setShowScene(false);
      setDistraction(null);
    }
  };

  const getEndTitle = () => {
    if (score >= 7) return "Full Bedelia Mode";
    if (score >= 4) return "Chaotic and Wonderful";
    if (score <= 2) return "Too Sensible For This";
    return "Beautifully In Between";
  };

  const getEndMessage = () => {
    if (score >= 7)
      return "You went full Keemya Bedelia on every task. The health inspector is on their way, but the customers have never been more entertained. The SoHo art crowd thinks it's performance art.";
    if (score >= 4)
      return "Half chaos, half heart. The regulars love the unpredictability and honestly, it's what makes this the best café in SoHo.";
    if (score <= 2)
      return "You actually ran the café properly?! Where's the fun in that? Keemya Bedelia would be disappointed. But the Beli reviews are immaculate.";
    return "A beautiful balance of chaos and cuisine. The café is still standing, the customers are confused but delighted, and you only set the kitchen on fire once.";
  };

  if (gameOver) {
    return (
      <div className="game-container">
        <div className="end-screen">
          <div className="end-flourish">
            <svg viewBox="0 0 160 20" width="160" height="20">
              <line x1="0" y1="10" x2="55" y2="10" stroke="var(--wine)" strokeWidth="0.5" opacity="0.3"/>
              <circle cx="65" cy="10" r="2" fill="var(--wine)" opacity="0.25"/>
              <circle cx="80" cy="10" r="3" fill="none" stroke="var(--wine)" strokeWidth="1" opacity="0.35"/>
              <circle cx="95" cy="10" r="2" fill="var(--wine)" opacity="0.25"/>
              <line x1="105" y1="10" x2="160" y2="10" stroke="var(--wine)" strokeWidth="0.5" opacity="0.3"/>
            </svg>
          </div>

          <h1 className="end-title">{getEndTitle()}</h1>

          <div className="end-stats">
            <div className="stat">
              <span className="stat-number">{score}</span>
              <span className="stat-label">Bedelia Picks</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">{totalRounds - score}</span>
              <span className="stat-label">Other Choices</span>
            </div>
          </div>

          <p className="end-message">{getEndMessage()}</p>

          <button className="play-again-btn" onClick={onRestart}>
            Reopen the Café
          </button>

          <p className="end-footer">merci pour votre visite</p>
        </div>
        <CafeGirl page="end" />
      </div>
    );
  }

  const progress = ((currentRound) / totalRounds) * 100;

  const getSceneType = () => {
    if (!chosen) return '';
    if (chosen.type === 'correct') return 'literal';
    return 'correct';
  };

  return (
    <div className="game-container">
      {distraction && (
        <Distraction
          text={distraction.text}
          onDismiss={() => setDistraction(null)}
        />
      )}

      <header className="game-header">
        <div className="header-left">
          <span className="cafe-name">Café <span className="farsi-hover" title="Balbashu — chaos, pandemonium">بلبشو</span></span>
        </div>
        <div className="header-right">
          <div className="score-compact">
            <span className="score-compact-item">
              <span className="score-dot score-dot-literal" />
              {score}
            </span>
          </div>
          <span className="round-pill">
            {currentRound + 1} / {totalRounds}
          </span>
        </div>
      </header>

      <div className="progress-bar-track">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
      </div>

      <main className="game-main">
        <div className="setting-tag">{round.setting}</div>

        <div className="instruction-card">
          <div className="ticket-ornament">
            <svg viewBox="0 0 100 6" width="100" height="6" preserveAspectRatio="none">
              <line x1="0" y1="3" x2="35" y2="3" stroke="var(--wine)" strokeWidth="0.5" opacity="0.2"/>
              <circle cx="50" cy="3" r="1.5" fill="var(--wine)" opacity="0.2"/>
              <line x1="65" y1="3" x2="100" y2="3" stroke="var(--wine)" strokeWidth="0.5" opacity="0.2"/>
            </svg>
          </div>
          <p className="instruction-label">Order up</p>
          <h2 className="instruction-text">"{round.instruction}"</h2>
          <p className="instruction-sub">What does Keemya Bedelia do?</p>
        </div>

        {!showScene ? (
          <div className="choices">
            {choices.map((choice, i) => (
              <button
                key={i}
                className="choice-btn"
                onClick={() => handleChoice(choice, i)}
              >
                <span className="choice-text">{choice.text}</span>
                <span className="choice-arrow">
                  <svg viewBox="0 0 16 16" width="14" height="14">
                    <path d="M3,8 L11,8 M8,5 L11,8 L8,11" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
            ))}
          </div>
        ) : (
          <div className={`scene-card ${chosen.type === 'correct' ? 'scene-literal' : chosen.type === 'wrong-logical' ? 'scene-logical' : 'scene-wrong-funny'}`}>
            <div className="scene-label">
              {chosen.type === 'correct'
                ? 'The Bedelia Way'
                : chosen.type === 'wrong-logical'
                ? 'Too Sensible!'
                : 'Funny, But Not Bedelia Enough'}
            </div>
            {chosen.type === 'correct' && (
              <div className="scene-animation-wrapper">
                <SceneAnimation instruction={round.instruction} type="literal" id={chosen.id} />
              </div>
            )}
            <p className="scene-text">{getSceneText()}</p>
            {chosen.type === 'correct' && (
              <div className="scene-badge scene-badge-correct">Keemya Bedelia approves</div>
            )}
            {chosen.type !== 'correct' && (
              <div className="scene-badge scene-badge-wrong">Not what Bedelia would do</div>
            )}
            <button className="next-btn" onClick={handleNext}>
              {currentRound + 1 >= totalRounds ? 'See Results' : 'Next Order'}
            </button>
          </div>
        )}
      </main>
      {currentRound % 3 === 1 && <CafeGirl key={`game-${currentRound}`} page="game" />}
    </div>
  );
}
