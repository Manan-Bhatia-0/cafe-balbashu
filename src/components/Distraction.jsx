import { useState, useEffect, useCallback } from 'react';
import './Distraction.css';

export default function Distraction({ text, onDismiss }) {
  const [visible, setVisible] = useState(false);
  const [position] = useState(() => ({
    top: Math.random() * 25 + 18,
  }));

  const dismiss = useCallback(() => {
    setVisible(false);
    setTimeout(onDismiss, 400);
  }, [onDismiss]);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
    const timer = setTimeout(dismiss, 6000);
    return () => clearTimeout(timer);
  }, [dismiss]);

  return (
    <div
      className={`distraction-bubble ${visible ? 'visible' : ''}`}
      style={{ top: `${position.top}%` }}
    >
      <div className="distraction-inner">
        <button className="distraction-close" onClick={dismiss} aria-label="Dismiss">
          <svg viewBox="0 0 14 14" width="14" height="14">
            <path d="M3,3 L11,11 M11,3 L3,11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
        <span className="distraction-text">{text}</span>
      </div>
    </div>
  );
}
