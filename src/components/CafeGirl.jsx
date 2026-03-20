import { useState, useEffect } from 'react';
import './CafeGirl.css';

function RunningGirl() {
  return (
    <div className="cg-runner">
      <div className="cg-runner-figure">
        <svg viewBox="0 0 70 100" width="52" height="75">
          {/* Hair flowing back */}
          <path d="M30,14 Q22,10 20,22 Q18,30 22,28" fill="var(--wine)" opacity="0.6"/>
          <path d="M28,12 Q20,16 18,28" fill="none" stroke="var(--wine)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
          {/* Head */}
          <circle cx="35" cy="18" r="10" fill="none" stroke="var(--wine)" strokeWidth="1.2" opacity="0.5"/>
          {/* Hair top */}
          <path d="M27,14 Q25,6 35,3 Q45,0 44,12" fill="none" stroke="var(--wine)" strokeWidth="1.2" opacity="0.5"/>
          {/* Eyes */}
          <circle cx="32" cy="16" r="1.2" fill="var(--wine)" opacity="0.4"/>
          <circle cx="39" cy="16" r="1.2" fill="var(--wine)" opacity="0.4"/>
          {/* Smile */}
          <path d="M33,22 Q35,24 38,22" fill="none" stroke="var(--wine)" strokeWidth="0.8" strokeLinecap="round" opacity="0.4"/>
          {/* Body */}
          <path d="M35,28 L32,52 L38,52 Z" fill="none" stroke="var(--wine)" strokeWidth="1.2" opacity="0.4"/>
          {/* Arms */}
          <g className="cg-arm-l">
            <line x1="33" y1="32" x2="24" y2="42" stroke="var(--wine)" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
          </g>
          <g className="cg-arm-r">
            <line x1="37" y1="32" x2="46" y2="42" stroke="var(--wine)" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
          </g>
          {/* Legs */}
          <g className="cg-leg-l">
            <line x1="33" y1="52" x2="26" y2="70" stroke="var(--wine)" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
            <line x1="26" y1="70" x2="22" y2="78" stroke="var(--wine)" strokeWidth="1" strokeLinecap="round" opacity="0.35"/>
          </g>
          <g className="cg-leg-r">
            <line x1="37" y1="52" x2="44" y2="70" stroke="var(--wine)" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
            <line x1="44" y1="70" x2="48" y2="78" stroke="var(--wine)" strokeWidth="1" strokeLinecap="round" opacity="0.35"/>
          </g>
        </svg>
      </div>
      {/* Speech bubble appears at ~75% across */}
      <div className="cg-speech">
        <p>Hey you, just took a break from running, hitting the nox now</p>
      </div>
    </div>
  );
}

function JazzGirl() {
  return (
    <div className="cg-jazz">
      <svg viewBox="0 0 70 100" width="44" height="63">
        {/* Hair */}
        <path d="M28,14 Q24,6 35,3 Q46,0 44,14" fill="none" stroke="var(--wine)" strokeWidth="1.2" opacity="0.45"/>
        <path d="M28,12 Q22,16 20,26" fill="none" stroke="var(--wine)" strokeWidth="1.2" strokeLinecap="round" opacity="0.35"/>
        {/* Head */}
        <circle cx="35" cy="18" r="10" fill="none" stroke="var(--wine)" strokeWidth="1.2" opacity="0.45"/>
        {/* Headphones */}
        <path d="M25,14 Q25,4 35,3 Q45,4 45,14" fill="none" stroke="var(--wine)" strokeWidth="1.5" strokeLinecap="round" opacity="0.35"/>
        <rect x="22" y="12" width="5" height="7" rx="2.5" fill="none" stroke="var(--wine)" strokeWidth="1" opacity="0.35"/>
        <rect x="43" y="12" width="5" height="7" rx="2.5" fill="none" stroke="var(--wine)" strokeWidth="1" opacity="0.35"/>
        {/* Eyes closed */}
        <path d="M30,16 Q32,18 34,16" fill="none" stroke="var(--wine)" strokeWidth="0.8" strokeLinecap="round" opacity="0.4"/>
        <path d="M37,16 Q39,18 41,16" fill="none" stroke="var(--wine)" strokeWidth="0.8" strokeLinecap="round" opacity="0.4"/>
        {/* Smile */}
        <path d="M32,23 Q35,26 38,23" fill="none" stroke="var(--wine)" strokeWidth="0.8" strokeLinecap="round" opacity="0.4"/>
        {/* Body */}
        <path d="M35,28 L32,60 L38,60 Z" fill="none" stroke="var(--wine)" strokeWidth="1.2" opacity="0.35"/>
        {/* Arms swaying */}
        <g className="cg-sway-l">
          <line x1="33" y1="34" x2="22" y2="48" stroke="var(--wine)" strokeWidth="1.2" strokeLinecap="round" opacity="0.35"/>
        </g>
        <g className="cg-sway-r">
          <line x1="37" y1="34" x2="48" y2="46" stroke="var(--wine)" strokeWidth="1.2" strokeLinecap="round" opacity="0.35"/>
        </g>
        {/* Legs */}
        <line x1="33" y1="60" x2="31" y2="80" stroke="var(--wine)" strokeWidth="1.2" strokeLinecap="round" opacity="0.35"/>
        <line x1="37" y1="60" x2="39" y2="80" stroke="var(--wine)" strokeWidth="1.2" strokeLinecap="round" opacity="0.35"/>
      </svg>
      <div className="cg-notes">
        <span className="cg-note cg-n1">&#9835;</span>
        <span className="cg-note cg-n2">&#9833;</span>
        <span className="cg-note cg-n3">&#9834;</span>
      </div>
    </div>
  );
}

export default function CafeGirl({ page }) {
  const [show, setShow] = useState(false);
  const [type, setType] = useState(null);

  useEffect(() => {
    const delay = 3000 + Math.random() * 8000;
    const timer = setTimeout(() => {
      setType(page === 'welcome' || page === 'password'
        ? (Math.random() > 0.5 ? 'jazz' : 'run')
        : (Math.random() > 0.4 ? 'run' : 'jazz'));
      setShow(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [page]);

  useEffect(() => {
    if (!show) return;
    const duration = type === 'run' ? 6000 : 8000;
    const timer = setTimeout(() => setShow(false), duration);
    return () => clearTimeout(timer);
  }, [show, type]);

  if (!show || !type) return null;

  return (
    <div className={`cafe-girl cafe-girl-${type}`}>
      {type === 'run' ? <RunningGirl /> : <JazzGirl />}
    </div>
  );
}
