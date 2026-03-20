import { useState } from 'react';
import CafeGirl from './CafeGirl';
import './PasswordScreen.css';

const PASSCODE = '01072001';

export default function PasswordScreen({ onUnlock }) {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === PASSCODE) {
      onUnlock();
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="password-screen">
      <div className="password-card-wrapper">
        {/* Address plaque */}
        <div className="address-plaque">
          <span>SoHo, New York</span>
        </div>

        {/* Storefront sign */}
        <div className="storefront-sign">
          <div className="sign-line" />
          <h1 className="cafe-sign">Café <span className="farsi-hover" title="Balbashu — chaos, pandemonium">بلبشو</span></h1>
          <p className="cafe-tagline">French-Persian Patisserie</p>
          <div className="sign-line" />
        </div>

        <div className={`password-card ${shake ? 'shake' : ''}`}>
          {/* Members only badge */}
          <div className="members-badge">
            <svg viewBox="0 0 120 120" width="72" height="72">
              <circle cx="60" cy="60" r="54" fill="none" stroke="var(--wine)" strokeWidth="1" opacity="0.3"/>
              <circle cx="60" cy="60" r="48" fill="none" stroke="var(--wine)" strokeWidth="0.5" opacity="0.2"/>
              <text x="60" y="50" textAnchor="middle" fontSize="7.5" fill="var(--wine)" fontWeight="600" letterSpacing="0.15em" opacity="0.6">MEMBER'S</text>
              <text x="60" y="76" textAnchor="middle" fontFamily="'Playfair Display', serif" fontSize="20" fill="var(--wine)" fontWeight="500" opacity="0.8">Only</text>
              {/* Decorative dots */}
              <circle cx="60" cy="56" r="0.8" fill="var(--wine)" opacity="0.3"/>
              <circle cx="34" cy="60" r="0.8" fill="var(--wine)" opacity="0.3"/>
              <circle cx="86" cy="60" r="0.8" fill="var(--wine)" opacity="0.3"/>
            </svg>
          </div>

          <h2>This café is <em>très exclusif</em></h2>
          <p className="password-hint">Members enter by passcode only</p>
          <form onSubmit={handleSubmit}>
            <input
              type="tel"
              inputMode="numeric"
              pattern="[0-9]*"
              value={input}
              onChange={(e) => setInput(e.target.value.replace(/\D/g, ''))}
              placeholder="--------"
              autoFocus
              autoComplete="off"
              maxLength={8}
            />
            <button type="submit">
              Enter
            </button>
          </form>
          {error && (
            <p className="error-msg">
              Wrong passcode. Try again.
            </p>
          )}
        </div>

        <p className="private-note">By invitation only</p>
      </div>

      <CafeGirl page="password" />
    </div>
  );
}
