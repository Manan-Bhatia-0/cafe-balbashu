import './Awning.css';

const STRIPE_COUNT = 24;

export default function Awning({ children, expanded }) {
  return (
    <div className={`awning-frame ${expanded ? 'awning-expanded' : ''}`}>
      {/* Top awning with scalloped bottoms */}
      <div className="awning-top">
        {Array.from({ length: STRIPE_COUNT }).map((_, i) => {
          const isEdge = i <= 1 || i >= STRIPE_COUNT - 3;
          const isWine = i % 2 === 0;
          return (
            <div key={i} className={`awning-tab ${isWine ? 'tab-wine' : 'tab-cream'}`}>
              <div className="tab-rect" />
              {expanded && !isEdge && (
                <div className="tab-dome" />
              )}
            </div>
          );
        })}
      </div>

      {/* Sides */}
      <div className="awning-side awning-side-left">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="awning-stripe-v" />
        ))}
      </div>
      <div className="awning-side awning-side-right">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="awning-stripe-v" />
        ))}
      </div>

      {/* Content */}
      <div className="awning-inner">
        {children}
      </div>

      {/* Bottom */}
      <div className="awning-bottom">
        {Array.from({ length: STRIPE_COUNT }).map((_, i) => (
          <div key={i} className="awning-stripe-h" />
        ))}
      </div>
    </div>
  );
}
