import { useState } from 'react';
import CafeGirl from './CafeGirl';
import './WelcomeScreen.css';

export default function WelcomeScreen({ onStart }) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    setOpening(true);
    setTimeout(onStart, 2700);
  };

  return (
    <div className={`welcome-screen ${opening ? 'doors-opening' : ''}`}>
      {/* French door panels */}
      <div className="door-left">
        <div className="door-handle" style={{ right: '12%' }} />
        {/* Ornamental arch in top panel */}
        <svg className="door-ornament door-ornament-left" viewBox="0 0 100 60" preserveAspectRatio="xMidYMid meet">
          <path d="M20,55 Q20,15 50,10 Q80,15 80,55" fill="none" stroke="rgba(245,235,218,0.12)" strokeWidth="1"/>
          <path d="M30,55 Q30,25 50,20 Q70,25 70,55" fill="none" stroke="rgba(245,235,218,0.08)" strokeWidth="0.8"/>
          <circle cx="50" cy="35" r="4" fill="none" stroke="rgba(245,235,218,0.1)" strokeWidth="0.8"/>
        </svg>
      </div>
      <div className="door-right">
        <div className="door-handle" style={{ left: '12%' }} />
        <svg className="door-ornament door-ornament-right" viewBox="0 0 100 60" preserveAspectRatio="xMidYMid meet">
          <path d="M20,55 Q20,15 50,10 Q80,15 80,55" fill="none" stroke="rgba(245,235,218,0.12)" strokeWidth="1"/>
          <path d="M30,55 Q30,25 50,20 Q70,25 70,55" fill="none" stroke="rgba(245,235,218,0.08)" strokeWidth="0.8"/>
          <circle cx="50" cy="35" r="4" fill="none" stroke="rgba(245,235,218,0.1)" strokeWidth="0.8"/>
        </svg>
      </div>

      <div className="welcome-border-top" />

      <div className="welcome-content">
        {/* Ornamental crest */}
        <div className="welcome-crest">
          <svg viewBox="0 0 160 80" width="140" height="70">
            {/* Outer frame */}
            <path d="M80,5 Q120,5 135,30 Q145,50 130,65 Q110,78 80,78 Q50,78 30,65 Q15,50 25,30 Q40,5 80,5Z" fill="none" stroke="var(--wine)" strokeWidth="0.8" opacity="0.25"/>
            {/* Inner frame */}
            <path d="M80,14 Q110,14 122,33 Q130,48 120,58 Q105,68 80,68 Q55,68 40,58 Q30,48 38,33 Q50,14 80,14Z" fill="none" stroke="var(--wine)" strokeWidth="0.5" opacity="0.15"/>
            {/* Monogram KB */}
            <text x="80" y="38" textAnchor="middle" fontFamily="'Playfair Display', serif" fontSize="13" fill="var(--wine)" fontWeight="600" opacity="0.5" letterSpacing="0.03em">KB's Café</text>
            <text x="80" y="56" textAnchor="middle" fontSize="14" fill="var(--wine)" fontWeight="400" opacity="0.4"><title>Balbashu — chaos, pandemonium</title>بلبشو</text>
            {/* Leaf accents */}
            <path d="M30,40 Q20,35 15,25" fill="none" stroke="var(--wine)" strokeWidth="0.5" opacity="0.15" strokeLinecap="round"/>
            <path d="M130,40 Q140,35 145,25" fill="none" stroke="var(--wine)" strokeWidth="0.5" opacity="0.15" strokeLinecap="round"/>
          </svg>
        </div>

        {/* Member's Only badge with shh */}
        <div className="welcome-badge">
          <svg viewBox="0 0 16 16" width="13" height="13" className="shh-icon">
            <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1"/>
            <line x1="8" y1="4" x2="8" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="8" cy="12" r="1" fill="currentColor"/>
          </svg>
          Member's Only
        </div>
        <h1 className="welcome-title">Café <span className="farsi-hover" title="Balbashu — chaos, pandemonium">بلبشو</span></h1>

        <div className="welcome-menu-card">
          <div className="menu-divider">
            <svg viewBox="0 0 120 8" width="120" height="8">
              <line x1="0" y1="4" x2="45" y2="4" stroke="var(--wine)" strokeWidth="0.5" opacity="0.3"/>
              <circle cx="60" cy="4" r="2" fill="var(--wine)" opacity="0.2"/>
              <line x1="75" y1="4" x2="120" y2="4" stroke="var(--wine)" strokeWidth="0.5" opacity="0.3"/>
            </svg>
          </div>
          <p className="welcome-subtitle">
            Welcome, member. You've entered the French-Persian café
            of <strong>Keemya Bedelia</strong>, who takes every
            instruction <em>very</em> literally.
          </p>
          <p className="welcome-subtitle-small">
            Your job: figure out what she'd actually do.
          </p>
        </div>

        <div className="welcome-preview">
          <div className="preview-item">
            <span className="preview-number">i.</span>
            <span>10 rounds, 4 choices each</span>
          </div>
          <div className="preview-item">
            <span className="preview-number">ii.</span>
            <span>Only one answer is the Bedelia answer</span>
          </div>
          <div className="preview-item">
            <span className="preview-number">iii.</span>
            <span>Distractions will try to throw you off</span>
          </div>
        </div>

        <button className="start-btn" onClick={handleOpen} disabled={opening}>
          {opening ? 'Opening...' : 'Open the Café'}
        </button>

        <p className="welcome-footer">
          est. SoHo, New York
        </p>
      </div>

      <div className="welcome-border-bottom" />
      <CafeGirl page="welcome" />
    </div>
  );
}
