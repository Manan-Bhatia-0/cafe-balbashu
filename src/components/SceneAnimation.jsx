import './SceneAnimation.css';

/*
  Storybook-style animations inspired by Amelia Bedelia illustrations.
  Hand-drawn feel using SVG with wobbly lines and playful motion.
*/

function EggBoxing() {
  return (
    <div className="anim-stage">
      <div className="anim-figure">
        <svg viewBox="0 0 200 180" width="200" height="180">
          {/* Boxing glove coming from left */}
          <g className="anim-punch">
            <rect x="10" y="70" width="40" height="30" rx="8" fill="#C4756B" />
            <rect x="45" y="65" width="35" height="40" rx="12" fill="#D4756B" />
            <text x="58" y="90" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">POW</text>
          </g>
          {/* Egg */}
          <g className="anim-wobble">
            <ellipse cx="130" cy="90" rx="28" ry="38" fill="#FFF8EC" stroke="#E0D5C0" strokeWidth="2.5" strokeDasharray="3,2"/>
            <ellipse cx="125" cy="80" rx="4" ry="5" fill="#2A2A2A"/>
            <ellipse cx="138" cy="80" rx="4" ry="5" fill="#2A2A2A"/>
            <path d="M122,95 Q130,102 138,95" fill="none" stroke="#2A2A2A" strokeWidth="2" strokeLinecap="round"/>
          </g>
          {/* Impact lines */}
          <g className="anim-impact">
            <line x1="88" y1="70" x2="98" y2="65" stroke="#C8A96E" strokeWidth="2" strokeLinecap="round"/>
            <line x1="85" y1="85" x2="95" y2="85" stroke="#C8A96E" strokeWidth="2" strokeLinecap="round"/>
            <line x1="88" y1="100" x2="98" y2="105" stroke="#C8A96E" strokeWidth="2" strokeLinecap="round"/>
          </g>
        </svg>
      </div>
    </div>
  );
}

function EggWhisk() {
  return (
    <div className="anim-stage">
      <div className="anim-figure">
        <svg viewBox="0 0 200 180" width="200" height="180">
          {/* Bowl */}
          <path d="M40,100 Q40,160 100,160 Q160,160 160,100" fill="#F8F4EE" stroke="#D4C4A0" strokeWidth="2.5" strokeDasharray="4,2"/>
          {/* Swirl inside bowl */}
          <g className="anim-spin-slow">
            <path d="M80,120 Q100,105 120,120 Q100,135 80,120" fill="none" stroke="#E8D5A3" strokeWidth="2" strokeLinecap="round"/>
            <path d="M85,125 Q100,115 115,125" fill="none" stroke="#C8A96E" strokeWidth="1.5" strokeLinecap="round"/>
          </g>
          {/* Whisk */}
          <g className="anim-whisk-motion">
            <rect x="97" y="30" width="6" height="55" rx="3" fill="#8B7355"/>
            <ellipse cx="100" cy="95" rx="14" ry="18" fill="none" stroke="#8B7355" strokeWidth="2"/>
            <ellipse cx="100" cy="95" rx="7" ry="18" fill="none" stroke="#8B7355" strokeWidth="1.5"/>
          </g>
          {/* Steam/sparkle */}
          <g className="anim-float-up">
            <circle cx="80" cy="88" r="2" fill="#C8A96E" opacity="0.5"/>
            <circle cx="110" cy="82" r="1.5" fill="#C8A96E" opacity="0.4"/>
            <circle cx="95" cy="78" r="2.5" fill="#C8A96E" opacity="0.3"/>
          </g>
        </svg>
      </div>
    </div>
  );
}

function SaladBeret() {
  return (
    <div className="anim-stage">
      <div className="anim-figure">
        <svg viewBox="0 0 200 180" width="200" height="180">
          {/* Salad bowl */}
          <path d="M45,100 Q45,155 100,155 Q155,155 155,100" fill="#E8F0E4" stroke="#8DB580" strokeWidth="2.5" strokeDasharray="4,2"/>
          {/* Lettuce leaves poking out */}
          <path d="M60,100 Q65,80 80,95" fill="#8DB580" stroke="#6B9960" strokeWidth="1.5"/>
          <path d="M120,95 Q135,78 140,100" fill="#8DB580" stroke="#6B9960" strokeWidth="1.5"/>
          {/* Beret floating down */}
          <g className="anim-beret-drop">
            <ellipse cx="100" cy="75" rx="30" ry="10" fill="#1A1A1A"/>
            <ellipse cx="100" cy="70" rx="22" ry="16" fill="#2A2A2A"/>
            <circle cx="100" cy="56" r="5" fill="#2A2A2A"/>
          </g>
          {/* Tiny scarf */}
          <g className="anim-scarf-wave">
            <path d="M72,110 Q85,105 98,110 Q85,115 72,110" fill="#C4756B" stroke="#B06055" strokeWidth="1"/>
            <path d="M75,115 L72,130" stroke="#C4756B" strokeWidth="3" strokeLinecap="round"/>
            <path d="M95,115 L98,130" stroke="#C4756B" strokeWidth="3" strokeLinecap="round"/>
          </g>
        </svg>
      </div>
    </div>
  );
}

function SaladDressing() {
  return (
    <div className="anim-stage">
      <div className="anim-figure">
        <svg viewBox="0 0 200 180" width="200" height="180">
          {/* Salad bowl */}
          <path d="M45,100 Q45,155 100,155 Q155,155 155,100" fill="#E8F0E4" stroke="#8DB580" strokeWidth="2.5" strokeDasharray="4,2"/>
          <path d="M60,100 Q65,80 80,95" fill="#8DB580" stroke="#6B9960" strokeWidth="1.5"/>
          <path d="M120,95 Q135,78 140,100" fill="#8DB580" stroke="#6B9960" strokeWidth="1.5"/>
          {/* Vinaigrette drizzle */}
          <g className="anim-drizzle">
            <path d="M85,50 Q90,75 88,95" fill="none" stroke="#C8A96E" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="6,4"/>
            <path d="M105,45 Q108,70 103,90" fill="none" stroke="#C8A96E" strokeWidth="2" strokeLinecap="round" strokeDasharray="5,4"/>
            <path d="M115,55 Q118,78 112,95" fill="none" stroke="#C8A96E" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4,3"/>
          </g>
          {/* Glow */}
          <circle cx="100" cy="120" r="25" fill="rgba(200,169,110,0.08)" className="anim-pulse-soft"/>
        </svg>
      </div>
    </div>
  );
}

function IceCubesOnCake() {
  return (
    <div className="anim-stage">
      <div className="anim-figure">
        <svg viewBox="0 0 200 180" width="200" height="180">
          {/* Cake */}
          <rect x="50" y="100" width="100" height="55" rx="6" fill="#F5E6C8" stroke="#D4C4A0" strokeWidth="2" strokeDasharray="4,2"/>
          <rect x="45" y="95" width="110" height="12" rx="6" fill="#FFF8EC" stroke="#D4C4A0" strokeWidth="1.5"/>
          {/* Ice cubes falling */}
          <g className="anim-fall-bounce">
            <rect x="65" y="30" width="18" height="18" rx="3" fill="#D4E8F0" stroke="#A0C4D4" strokeWidth="1.5" opacity="0.8" className="ice-1"/>
            <rect x="95" y="15" width="18" height="18" rx="3" fill="#D4E8F0" stroke="#A0C4D4" strokeWidth="1.5" opacity="0.8" className="ice-2"/>
            <rect x="120" y="25" width="18" height="18" rx="3" fill="#D4E8F0" stroke="#A0C4D4" strokeWidth="1.5" opacity="0.8" className="ice-3"/>
          </g>
          {/* Splash drops */}
          <g className="anim-splash">
            <circle cx="75" cy="92" r="2" fill="#A0C4D4"/>
            <circle cx="105" cy="88" r="2.5" fill="#A0C4D4"/>
            <circle cx="130" cy="91" r="2" fill="#A0C4D4"/>
          </g>
        </svg>
      </div>
    </div>
  );
}

function FrostCake() {
  return (
    <div className="anim-stage">
      <div className="anim-figure">
        <svg viewBox="0 0 200 180" width="200" height="180">
          {/* Cake */}
          <rect x="50" y="100" width="100" height="55" rx="6" fill="#F5E6C8" stroke="#D4C4A0" strokeWidth="2" strokeDasharray="4,2"/>
          {/* Frosting spreading */}
          <g className="anim-spread">
            <path d="M45,100 Q55,88 75,92 Q100,85 125,92 Q145,88 155,100" fill="#FFF0F0" stroke="#E8C8C8" strokeWidth="2" strokeLinecap="round"/>
            <path d="M55,97 Q70,92 85,95 Q100,90 115,95 Q130,92 145,97" fill="#FFF0F0" stroke="#E8C8C8" strokeWidth="1.5"/>
          </g>
          {/* Rosettes */}
          <g className="anim-pop-in">
            <circle cx="70" cy="94" r="5" fill="#F0D4D4" stroke="#E8C0C0" strokeWidth="1"/>
            <circle cx="100" cy="90" r="6" fill="#F0D4D4" stroke="#E8C0C0" strokeWidth="1"/>
            <circle cx="130" cy="94" r="5" fill="#F0D4D4" stroke="#E8C0C0" strokeWidth="1"/>
          </g>
        </svg>
      </div>
    </div>
  );
}

function ScoldCream() {
  return (
    <div className="anim-stage">
      <div className="anim-figure">
        <svg viewBox="0 0 200 180" width="200" height="180">
          {/* Cream carton */}
          <g className="anim-tremble">
            <rect x="110" y="60" width="45" height="70" rx="4" fill="#FFF8EC" stroke="#D4C4A0" strokeWidth="2"/>
            <text x="132" y="100" textAnchor="middle" fontSize="8" fill="#8B7355" fontWeight="600">CREAM</text>
            {/* Worried face on carton */}
            <circle cx="122" cy="82" r="2.5" fill="#2A2A2A"/>
            <circle cx="142" cy="82" r="2.5" fill="#2A2A2A"/>
            <path d="M125,92 Q132,88 140,92" fill="none" stroke="#2A2A2A" strokeWidth="1.5" strokeLinecap="round"/>
            {/* Sweat drop */}
            <path d="M150,75 Q152,80 150,85" fill="#A0C4D4" className="anim-sweat"/>
          </g>
          {/* Pointing hand */}
          <g className="anim-point">
            <path d="M30,95 L90,95" stroke="#2A2A2A" strokeWidth="3" strokeLinecap="round"/>
            <polygon points="90,88 105,95 90,102" fill="#2A2A2A"/>
          </g>
          {/* Speech bubble */}
          <g className="anim-pop-speech">
            <rect x="20" y="40" width="75" height="35" rx="12" fill="white" stroke="#E0D5C0" strokeWidth="1.5"/>
            <polygon points="70,75 78,65 85,72" fill="white" stroke="#E0D5C0" strokeWidth="1.5"/>
            <text x="57" y="62" textAnchor="middle" fontSize="9" fill="#C4756B" fontWeight="600">YOU'RE LIGHT</text>
            <text x="57" y="72" textAnchor="middle" fontSize="9" fill="#C4756B" fontWeight="600">AT BEST!</text>
          </g>
        </svg>
      </div>
    </div>
  );
}

function WhipCream() {
  return (
    <div className="anim-stage">
      <div className="anim-figure">
        <svg viewBox="0 0 200 180" width="200" height="180">
          {/* Bowl */}
          <path d="M50,110 Q50,155 100,155 Q150,155 150,110" fill="#F8F4EE" stroke="#D4C4A0" strokeWidth="2.5" strokeDasharray="4,2"/>
          {/* Whipped cream peaks forming */}
          <g className="anim-peaks-rise">
            <path d="M60,110 Q70,85 80,110" fill="white" stroke="#E8E0D4" strokeWidth="1.5"/>
            <path d="M78,110 Q90,75 102,110" fill="white" stroke="#E8E0D4" strokeWidth="1.5"/>
            <path d="M100,110 Q112,80 124,110" fill="white" stroke="#E8E0D4" strokeWidth="1.5"/>
            <path d="M122,110 Q132,88 142,110" fill="white" stroke="#E8E0D4" strokeWidth="1.5"/>
          </g>
          {/* Cloud sparkle */}
          <g className="anim-float-up">
            <circle cx="85" cy="75" r="2" fill="#C8A96E" opacity="0.4"/>
            <circle cx="108" cy="68" r="2.5" fill="#C8A96E" opacity="0.3"/>
            <circle cx="120" cy="78" r="1.5" fill="#C8A96E" opacity="0.5"/>
          </g>
        </svg>
      </div>
    </div>
  );
}

function GrateCheese() {
  return (
    <div className="anim-stage">
      <div className="anim-figure">
        <svg viewBox="0 0 200 180" width="200" height="180">
          {/* Cheese block with face */}
          <g className="anim-cheese-happy">
            <rect x="100" y="60" width="60" height="50" rx="6" fill="#F5D86E" stroke="#D4B84C" strokeWidth="2"/>
            {/* Cheese holes */}
            <circle cx="115" cy="80" r="4" fill="#E8C84C"/>
            <circle cx="140" cy="90" r="3" fill="#E8C84C"/>
            {/* Happy face */}
            <circle cx="118" cy="75" r="2" fill="#8B6914"/>
            <circle cx="138" cy="75" r="2" fill="#8B6914"/>
            <path d="M120,88 Q130,96 140,88" fill="none" stroke="#8B6914" strokeWidth="2" strokeLinecap="round"/>
          </g>
          {/* Speech bubble with kind words */}
          <g className="anim-pop-speech">
            <rect x="15" y="35" width="80" height="40" rx="14" fill="white" stroke="#E0D5C0" strokeWidth="1.5"/>
            <polygon points="80,65 88,55 95,68" fill="white" stroke="#E0D5C0" strokeWidth="1.5"/>
            <text x="55" y="53" textAnchor="middle" fontSize="8" fill="#8DB580" fontWeight="600">YOU ARE SO</text>
            <text x="55" y="65" textAnchor="middle" fontSize="8" fill="#8DB580" fontWeight="600">VALID</text>
          </g>
          {/* Hearts */}
          <g className="anim-hearts">
            <text x="85" y="55" fontSize="14" className="heart-1">♥</text>
            <text x="165" y="65" fontSize="11" className="heart-2">♥</text>
            <text x="95" y="120" fontSize="12" className="heart-3">♥</text>
          </g>
        </svg>
      </div>
    </div>
  );
}

function ShredCheese() {
  return (
    <div className="anim-stage">
      <div className="anim-figure">
        <svg viewBox="0 0 200 180" width="200" height="180">
          {/* Grater */}
          <rect x="80" y="30" width="40" height="90" rx="4" fill="#D4D4D4" stroke="#A0A0A0" strokeWidth="2"/>
          <g>
            <circle cx="92" cy="50" r="2" fill="#B0B0B0"/>
            <circle cx="108" cy="50" r="2" fill="#B0B0B0"/>
            <circle cx="92" cy="65" r="2" fill="#B0B0B0"/>
            <circle cx="108" cy="65" r="2" fill="#B0B0B0"/>
            <circle cx="92" cy="80" r="2" fill="#B0B0B0"/>
            <circle cx="108" cy="80" r="2" fill="#B0B0B0"/>
            <circle cx="100" cy="95" r="2" fill="#B0B0B0"/>
          </g>
          {/* Falling shreds */}
          <g className="anim-shred-fall">
            <rect x="85" y="125" width="12" height="3" rx="1" fill="#F5D86E" className="shred-1"/>
            <rect x="100" y="130" width="10" height="2.5" rx="1" fill="#F5D86E" className="shred-2"/>
            <rect x="90" y="140" width="14" height="3" rx="1" fill="#F5D86E" className="shred-3"/>
            <rect x="105" y="145" width="11" height="2.5" rx="1" fill="#F5D86E" className="shred-4"/>
            <rect x="88" y="155" width="13" height="3" rx="1" fill="#F5D86E" className="shred-5"/>
          </g>
        </svg>
      </div>
    </div>
  );
}

function OrigamiFlour() {
  return (
    <div className="anim-stage">
      <div className="anim-figure">
        <svg viewBox="0 0 200 180" width="200" height="180">
          {/* Paper crane made from flour bag */}
          <g className="anim-crane-fold">
            <polygon points="100,30 60,90 100,75 140,90" fill="#FFF8EC" stroke="#D4C4A0" strokeWidth="2"/>
            <polygon points="100,75 60,90 100,130 140,90" fill="#F5ECD8" stroke="#D4C4A0" strokeWidth="2"/>
            {/* Wing */}
            <polygon points="60,90 20,70 50,95" fill="#FFF8EC" stroke="#D4C4A0" strokeWidth="1.5" className="anim-wing-flap"/>
            {/* Tail */}
            <polygon points="140,90 170,80 150,95" fill="#F5ECD8" stroke="#D4C4A0" strokeWidth="1.5"/>
            {/* FLOUR text on body */}
            <text x="100" y="100" textAnchor="middle" fontSize="9" fill="#8B7355" fontWeight="600">FLOUR</text>
          </g>
          {/* Flour dust */}
          <g className="anim-dust">
            <circle cx="70" cy="120" r="3" fill="#F5ECD8" opacity="0.6"/>
            <circle cx="130" cy="115" r="4" fill="#F5ECD8" opacity="0.4"/>
            <circle cx="90" cy="135" r="2.5" fill="#F5ECD8" opacity="0.5"/>
          </g>
        </svg>
      </div>
    </div>
  );
}

function FoldFlour() {
  return (
    <div className="anim-stage">
      <div className="anim-figure">
        <svg viewBox="0 0 200 180" width="200" height="180">
          {/* Bowl with batter */}
          <path d="M45,95 Q45,150 100,150 Q155,150 155,95" fill="#F8F4EE" stroke="#D4C4A0" strokeWidth="2.5" strokeDasharray="4,2"/>
          {/* Folding motion - spatula */}
          <g className="anim-fold-motion">
            <rect x="95" y="30" width="8" height="50" rx="4" fill="#8B7355"/>
            <rect x="85" y="75" width="28" height="8" rx="4" fill="#A08560"/>
          </g>
          {/* Flour cloud gently merging */}
          <g className="anim-merge">
            <ellipse cx="85" cy="105" rx="18" ry="12" fill="white" opacity="0.6"/>
            <ellipse cx="115" cy="108" rx="15" ry="10" fill="white" opacity="0.5"/>
            <ellipse cx="100" cy="115" rx="20" ry="8" fill="#F5ECD8" opacity="0.4"/>
          </g>
        </svg>
      </div>
    </div>
  );
}

function PlumberFrosting() {
  return (
    <div className="anim-stage">
      <div className="anim-figure">
        <svg viewBox="0 0 200 180" width="200" height="180">
          {/* Plumber wrench */}
          <g className="anim-wrench-turn">
            <rect x="40" y="80" width="60" height="12" rx="3" fill="#808080" stroke="#606060" strokeWidth="1.5"/>
            <path d="M95,74 Q110,86 95,98" fill="none" stroke="#808080" strokeWidth="8" strokeLinecap="round"/>
          </g>
          {/* Cake with pipe attached */}
          <rect x="120" y="90" width="55" height="50" rx="6" fill="#F5E6C8" stroke="#D4C4A0" strokeWidth="2"/>
          {/* Pipe going into cake */}
          <g className="anim-pipe-shake">
            <rect x="105" y="100" width="20" height="8" rx="2" fill="#A0A0A0"/>
            <rect x="95" y="96" width="14" height="16" rx="3" fill="#808080"/>
          </g>
          {/* Frosting oozing from pipe */}
          <g className="anim-ooze">
            <ellipse cx="130" cy="105" rx="8" ry="5" fill="#F0D4D4"/>
            <ellipse cx="140" cy="108" rx="6" ry="4" fill="#F0D4D4"/>
          </g>
          {/* Question mark */}
          <text x="148" y="85" fontSize="20" fill="#C4756B" className="anim-bob">?</text>
        </svg>
      </div>
    </div>
  );
}

function PipeFrosting() {
  return (
    <div className="anim-stage">
      <div className="anim-figure">
        <svg viewBox="0 0 200 180" width="200" height="180">
          {/* Pastry with rosettes */}
          <rect x="40" y="100" width="120" height="45" rx="8" fill="#F5E6C8" stroke="#D4C4A0" strokeWidth="2" strokeDasharray="4,2"/>
          {/* Piping bag */}
          <g className="anim-pipe-squeeze">
            <polygon points="100,20 85,70 115,70" fill="#E8E0D4" stroke="#D4C4A0" strokeWidth="1.5"/>
            <rect x="94" y="68" width="12" height="15" rx="2" fill="#D4C4A0"/>
          </g>
          {/* Rosettes appearing */}
          <g className="anim-rosettes">
            <circle cx="65" cy="100" r="8" fill="#F0D4D4" stroke="#E8C0C0" strokeWidth="1" className="rosette-1"/>
            <circle cx="90" cy="98" r="9" fill="#F0D4D4" stroke="#E8C0C0" strokeWidth="1" className="rosette-2"/>
            <circle cx="115" cy="100" r="8" fill="#F0D4D4" stroke="#E8C0C0" strokeWidth="1" className="rosette-3"/>
            <circle cx="140" cy="99" r="7" fill="#F0D4D4" stroke="#E8C0C0" strokeWidth="1" className="rosette-4"/>
          </g>
        </svg>
      </div>
    </div>
  );
}

function TeaWorkout() {
  return (
    <div className="anim-stage">
      <div className="anim-figure">
        <svg viewBox="0 0 200 180" width="200" height="180">
          {/* Treadmill */}
          <rect x="30" y="130" width="140" height="8" rx="4" fill="#D4D4D4" stroke="#A0A0A0" strokeWidth="1.5"/>
          <rect x="25" y="125" width="8" height="20" rx="2" fill="#A0A0A0"/>
          <rect x="167" y="125" width="8" height="20" rx="2" fill="#A0A0A0"/>
          {/* Moving belt lines */}
          <g className="anim-belt-move">
            <line x1="50" y1="134" x2="65" y2="134" stroke="#B0B0B0" strokeWidth="1.5"/>
            <line x1="85" y1="134" x2="100" y2="134" stroke="#B0B0B0" strokeWidth="1.5"/>
            <line x1="120" y1="134" x2="135" y2="134" stroke="#B0B0B0" strokeWidth="1.5"/>
          </g>
          {/* Tea cup running */}
          <g className="anim-tea-run">
            <path d="M85,95 L85,120 L115,120 L115,95 Q100,90 85,95" fill="#C8A96E" stroke="#A08545" strokeWidth="2"/>
            {/* Handle */}
            <path d="M115,100 Q130,100 130,110 Q130,118 115,118" fill="none" stroke="#A08545" strokeWidth="2.5"/>
            {/* Tiny legs */}
            <line x1="90" y1="120" x2="85" y2="130" stroke="#A08545" strokeWidth="2.5" strokeLinecap="round" className="leg-left"/>
            <line x1="110" y1="120" x2="115" y2="130" stroke="#A08545" strokeWidth="2.5" strokeLinecap="round" className="leg-right"/>
            {/* Sweat drops */}
            <circle cx="80" cy="100" r="2" fill="#A0C4D4" className="anim-sweat"/>
          </g>
          {/* Steam */}
          <g className="anim-steam">
            <path d="M92,88 Q90,78 95,70" fill="none" stroke="#D4C4A0" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M100,86 Q102,74 98,65" fill="none" stroke="#D4C4A0" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M108,88 Q110,78 105,70" fill="none" stroke="#D4C4A0" strokeWidth="1.5" strokeLinecap="round"/>
          </g>
        </svg>
      </div>
    </div>
  );
}

function TeaStrain() {
  return (
    <div className="anim-stage">
      <div className="anim-figure">
        <svg viewBox="0 0 200 180" width="200" height="180">
          {/* Cup below */}
          <path d="M65,120 L65,155 L135,155 L135,120" fill="none" stroke="#D4C4A0" strokeWidth="2.5" strokeDasharray="4,2"/>
          {/* Strainer */}
          <g className="anim-pour-tilt">
            <path d="M60,85 L60,105 Q100,115 140,105 L140,85 Q100,80 60,85" fill="#E8E0D4" stroke="#C4B898" strokeWidth="2"/>
            {/* Holes */}
            <circle cx="85" cy="100" r="2" fill="#C4B898"/>
            <circle cx="100" cy="102" r="2" fill="#C4B898"/>
            <circle cx="115" cy="100" r="2" fill="#C4B898"/>
            <circle cx="92" cy="95" r="1.5" fill="#C4B898"/>
            <circle cx="108" cy="95" r="1.5" fill="#C4B898"/>
          </g>
          {/* Golden tea flowing through */}
          <g className="anim-tea-flow">
            <line x1="88" y1="108" x2="88" y2="125" stroke="#C8A96E" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="100" y1="110" x2="100" y2="128" stroke="#C8A96E" strokeWidth="2" strokeLinecap="round"/>
            <line x1="112" y1="108" x2="112" y2="125" stroke="#C8A96E" strokeWidth="1.5" strokeLinecap="round"/>
          </g>
          {/* Saffron color filling cup */}
          <rect x="68" y="135" width="64" height="18" rx="2" fill="rgba(200,169,110,0.2)" className="anim-fill-up"/>
        </svg>
      </div>
    </div>
  );
}

function CaramelOnion() {
  return (
    <div className="anim-stage">
      <div className="anim-figure">
        <svg viewBox="0 0 200 180" width="200" height="180">
          {/* Stick */}
          <rect x="96" y="20" width="8" height="60" rx="3" fill="#8B7355"/>
          {/* Onion on stick */}
          <g className="anim-dip-motion">
            <circle cx="100" cy="95" r="28" fill="#E8D5C0" stroke="#C4A080" strokeWidth="2"/>
            <path d="M80,95 Q100,75 120,95" fill="none" stroke="#D4B898" strokeWidth="1.5"/>
            <path d="M85,90 Q100,80 115,90" fill="none" stroke="#D4B898" strokeWidth="1"/>
          </g>
          {/* Caramel pool */}
          <ellipse cx="100" cy="150" rx="50" ry="15" fill="#C8A050" stroke="#A08030" strokeWidth="2"/>
          {/* Caramel drip */}
          <g className="anim-drip">
            <path d="M88,120 Q86,135 90,145" fill="none" stroke="#C8A050" strokeWidth="3" strokeLinecap="round"/>
            <path d="M112,118 Q114,133 110,145" fill="none" stroke="#C8A050" strokeWidth="2.5" strokeLinecap="round"/>
          </g>
        </svg>
      </div>
    </div>
  );
}

function CaramelizeOnion() {
  return (
    <div className="anim-stage">
      <div className="anim-figure">
        <svg viewBox="0 0 200 180" width="200" height="180">
          {/* Pan */}
          <ellipse cx="100" cy="130" rx="60" ry="15" fill="#808080" stroke="#606060" strokeWidth="2"/>
          <path d="M40,125 L40,130" stroke="#606060" strokeWidth="2"/>
          <path d="M160,125 L160,130" stroke="#606060" strokeWidth="2"/>
          {/* Handle */}
          <rect x="155" y="122" width="35" height="8" rx="4" fill="#606060"/>
          {/* Onion slices in pan turning golden */}
          <g className="anim-caramelize">
            <ellipse cx="75" cy="122" rx="12" ry="5" fill="#C8A050" stroke="#A08030" strokeWidth="1"/>
            <ellipse cx="100" cy="120" rx="14" ry="6" fill="#D4B060" stroke="#B09040" strokeWidth="1"/>
            <ellipse cx="125" cy="122" rx="11" ry="5" fill="#C8A050" stroke="#A08030" strokeWidth="1"/>
          </g>
          {/* Steam wisps */}
          <g className="anim-steam">
            <path d="M75,110 Q73,98 78,88" fill="none" stroke="#D4C4A0" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
            <path d="M100,108 Q102,95 98,85" fill="none" stroke="#D4C4A0" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
            <path d="M125,110 Q123,98 128,88" fill="none" stroke="#D4C4A0" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
          </g>
        </svg>
      </div>
    </div>
  );
}

function GarlicTherapy() {
  return (
    <div className="anim-stage">
      <div className="anim-figure">
        <svg viewBox="0 0 200 180" width="200" height="180">
          {/* Garlic on therapy couch */}
          <path d="M30,130 Q30,115 50,115 L150,115 Q170,115 170,130 L170,145 L30,145 Z" fill="#E8E0D4" stroke="#D4C4A0" strokeWidth="2"/>
          {/* Garlic bulb */}
          <g className="anim-garlic-sad">
            <ellipse cx="110" cy="95" rx="22" ry="28" fill="#FFF8EC" stroke="#E0D5C0" strokeWidth="2"/>
            <path d="M110,67 Q112,58 108,55" fill="none" stroke="#8DB580" strokeWidth="2" strokeLinecap="round"/>
            {/* Sad face */}
            <circle cx="103" cy="88" r="2" fill="#2A2A2A"/>
            <circle cx="118" cy="88" r="2" fill="#2A2A2A"/>
            <path d="M105,102 Q110,98 116,102" fill="none" stroke="#2A2A2A" strokeWidth="1.5" strokeLinecap="round"/>
            {/* Tear */}
            <path d="M103,92 Q101,97 103,100" fill="#A0C4D4" className="anim-tear"/>
          </g>
          {/* Speech bubble from offscreen */}
          <g className="anim-pop-speech">
            <rect x="10" y="30" width="85" height="35" rx="12" fill="white" stroke="#E0D5C0" strokeWidth="1.5"/>
            <polygon points="70,65 60,55 80,58" fill="white" stroke="#E0D5C0" strokeWidth="1.5"/>
            <text x="52" y="48" textAnchor="middle" fontSize="7.5" fill="#6B6B6B">nobody asks</text>
            <text x="52" y="58" textAnchor="middle" fontSize="7.5" fill="#6B6B6B">how YOU'RE doing</text>
          </g>
        </svg>
      </div>
    </div>
  );
}

function CrushGarlic() {
  return (
    <div className="anim-stage">
      <div className="anim-figure">
        <svg viewBox="0 0 200 180" width="200" height="180">
          {/* Garlic press */}
          <g className="anim-press-down">
            <rect x="70" y="50" width="60" height="14" rx="4" fill="#C0C0C0" stroke="#A0A0A0" strokeWidth="1.5"/>
            <rect x="125" y="45" width="40" height="8" rx="4" fill="#A0A0A0"/>
          </g>
          {/* Bottom plate */}
          <rect x="70" y="80" width="60" height="14" rx="4" fill="#C0C0C0" stroke="#A0A0A0" strokeWidth="1.5"/>
          <rect x="125" y="83" width="40" height="8" rx="4" fill="#A0A0A0"/>
          {/* Dots coming through holes */}
          <g className="anim-squeeze-out">
            <circle cx="80" cy="98" r="2" fill="#FFF8EC"/>
            <circle cx="90" cy="100" r="2.5" fill="#FFF8EC"/>
            <circle cx="100" cy="99" r="2" fill="#FFF8EC"/>
            <circle cx="110" cy="101" r="2.5" fill="#FFF8EC"/>
            <circle cx="120" cy="98" r="2" fill="#FFF8EC"/>
          </g>
          {/* Aroma lines */}
          <g className="anim-steam">
            <path d="M85,110 Q83,100 88,92" fill="none" stroke="#8DB580" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
            <path d="M100,112 Q102,100 98,92" fill="none" stroke="#8DB580" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
            <path d="M115,110 Q113,100 118,92" fill="none" stroke="#8DB580" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
          </g>
        </svg>
      </div>
    </div>
  );
}

/* ========== Second correct answer animations ========== */

function EggTrashTalk() {
  return (
    <div className="anim-stage">
      <div className="anim-figure">
        <svg viewBox="0 0 200 180" width="200" height="180">
          {/* Egg looking sad */}
          <g className="anim-tremble">
            <ellipse cx="130" cy="100" rx="24" ry="32" fill="#FFF8EC" stroke="#E0D5C0" strokeWidth="2" strokeDasharray="3,2"/>
            <circle cx="122" cy="92" r="2.5" fill="#2A2A2A"/>
            <circle cx="138" cy="92" r="2.5" fill="#2A2A2A"/>
            <path d="M125,108 Q130,104 136,108" fill="none" stroke="#2A2A2A" strokeWidth="1.5" strokeLinecap="round"/>
            {/* Tear */}
            <path d="M122,96 Q120,102 122,106" fill="#A0C4D4" className="anim-tear"/>
          </g>
          {/* Speech bubble with mean words */}
          <g className="anim-pop-speech">
            <rect x="15" y="40" width="85" height="40" rx="14" fill="white" stroke="#E0D5C0" strokeWidth="1.5"/>
            <polygon points="85,70 95,60 100,75" fill="white" stroke="#E0D5C0" strokeWidth="1.5"/>
            <text x="57" y="57" textAnchor="middle" fontSize="7.5" fill="#C4756B" fontWeight="600">YOU'LL NEVER</text>
            <text x="57" y="68" textAnchor="middle" fontSize="7.5" fill="#C4756B" fontWeight="600">BE AN OMELETTE</text>
          </g>
          {/* Egg rolling off */}
          <ellipse cx="165" cy="145" rx="12" ry="16" fill="#FFF8EC" stroke="#E0D5C0" strokeWidth="1.5" className="anim-roll-away" opacity="0.6"/>
        </svg>
      </div>
    </div>
  );
}

function SaladShopping() {
  return (
    <div className="anim-stage">
      <div className="anim-figure">
        <svg viewBox="0 0 200 180" width="200" height="180">
          {/* Shopping bag */}
          <rect x="70" y="60" width="60" height="70" rx="4" fill="#F5ECD8" stroke="#D4C4A0" strokeWidth="2"/>
          <path d="M85,60 Q85,40 100,40 Q115,40 115,60" fill="none" stroke="#D4C4A0" strokeWidth="2.5"/>
          {/* Lettuce poking out */}
          <g className="anim-wobble">
            <path d="M80,65 Q90,45 100,60" fill="#8DB580" stroke="#6B9960" strokeWidth="1"/>
            <path d="M100,58 Q110,42 120,62" fill="#8DB580" stroke="#6B9960" strokeWidth="1"/>
          </g>
          {/* Tiny dress held up */}
          <g className="anim-sway-gentle">
            <path d="M40,50 L50,45 L60,50 L58,80 L42,80 Z" fill="#F0D4D4" stroke="#C4756B" strokeWidth="1"/>
            <path d="M42,55 L58,55" stroke="#C4756B" strokeWidth="0.8"/>
          </g>
          {/* Hanger */}
          <path d="M44,42 Q50,35 56,42" fill="none" stroke="#A0A0A0" strokeWidth="1.5"/>
          <line x1="50" y1="35" x2="50" y2="30" stroke="#A0A0A0" strokeWidth="1.5"/>
          {/* Heart */}
          <text x="35" y="38" fontSize="12" fill="#C4756B" className="anim-bob" opacity="0.6">♥</text>
        </svg>
      </div>
    </div>
  );
}

function CakeColdShoulder() {
  return (
    <div className="anim-stage">
      <div className="anim-figure">
        <svg viewBox="0 0 200 180" width="200" height="180">
          {/* Cake looking lonely */}
          <rect x="110" y="90" width="60" height="50" rx="6" fill="#F5E6C8" stroke="#D4C4A0" strokeWidth="2" strokeDasharray="4,2"/>
          <rect x="105" y="85" width="70" height="12" rx="6" fill="#FFF8EC" stroke="#D4C4A0" strokeWidth="1.5"/>
          {/* Sad face on cake */}
          <circle cx="130" cy="110" r="2" fill="#2A2A2A"/>
          <circle cx="150" cy="110" r="2" fill="#2A2A2A"/>
          <path d="M133,122 Q140,118 147,122" fill="none" stroke="#2A2A2A" strokeWidth="1.5" strokeLinecap="round"/>
          {/* Person turned away with crossed arms */}
          <g>
            <circle cx="55" cy="60" r="14" fill="#F5DEB3" stroke="#D4C4A0" strokeWidth="1"/>
            <path d="M42,55 Q35,50 32,42" fill="#2A2A2A" stroke="#1A1A1A" strokeWidth="1"/>
            <path d="M55,74 L50,110 L60,110 Z" fill="var(--wine)" opacity="0.7"/>
            {/* Crossed arms */}
            <path d="M45,85 Q55,90 65,85" fill="none" stroke="#F5DEB3" strokeWidth="4" strokeLinecap="round"/>
          </g>
          {/* Cold wind lines */}
          <g className="anim-impact">
            <line x1="78" y1="85" x2="90" y2="85" stroke="#A0C4D4" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="80" y1="95" x2="92" y2="95" stroke="#A0C4D4" strokeWidth="1" strokeLinecap="round"/>
            <line x1="78" y1="105" x2="90" y2="105" stroke="#A0C4D4" strokeWidth="1.5" strokeLinecap="round"/>
          </g>
        </svg>
      </div>
    </div>
  );
}

function CreamWhipCrack() {
  return (
    <div className="anim-stage">
      <div className="anim-figure">
        <svg viewBox="0 0 200 180" width="200" height="180">
          {/* Cream carton */}
          <g className="anim-tremble">
            <rect x="120" y="60" width="40" height="65" rx="4" fill="#FFF8EC" stroke="#D4C4A0" strokeWidth="2"/>
            <text x="140" y="98" textAnchor="middle" fontSize="8" fill="#8B7355" fontWeight="600">CREAM</text>
            <circle cx="130" cy="82" r="2.5" fill="#2A2A2A"/>
            <circle cx="150" cy="82" r="2.5" fill="#2A2A2A"/>
            <path d="M133,92 Q140,88 147,92" fill="none" stroke="#2A2A2A" strokeWidth="1.5" strokeLinecap="round"/>
          </g>
          {/* Tiny whip */}
          <g className="anim-whip-crack">
            <line x1="30" y1="100" x2="70" y2="85" stroke="#8B7355" strokeWidth="3" strokeLinecap="round"/>
            <path d="M70,85 Q85,75 95,82 Q105,90 110,80" fill="none" stroke="#8B7355" strokeWidth="2" strokeLinecap="round"/>
          </g>
          {/* Crack effect */}
          <g className="anim-impact">
            <line x1="100" y1="72" x2="108" y2="68" stroke="#C8A96E" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="102" y1="80" x2="112" y2="78" stroke="#C8A96E" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="98" y1="88" x2="106" y2="90" stroke="#C8A96E" strokeWidth="1.5" strokeLinecap="round"/>
          </g>
        </svg>
      </div>
    </div>
  );
}

function CheeseRating() {
  return (
    <div className="anim-stage">
      <div className="anim-figure">
        <svg viewBox="0 0 200 180" width="200" height="180">
          {/* Cheese block */}
          <rect x="100" y="80" width="55" height="45" rx="6" fill="#F5D86E" stroke="#D4B84C" strokeWidth="2"/>
          <circle cx="115" cy="98" r="4" fill="#E8C84C"/>
          <circle cx="138" cy="105" r="3" fill="#E8C84C"/>
          {/* Nervous face */}
          <circle cx="118" cy="93" r="2" fill="#8B6914"/>
          <circle cx="138" cy="93" r="2" fill="#8B6914"/>
          <path d="M122,108 Q128,104 134,108" fill="none" stroke="#8B6914" strokeWidth="1.5" strokeLinecap="round"/>
          {/* Scorecard */}
          <g className="anim-pop-speech">
            <rect x="20" y="40" width="65" height="50" rx="4" fill="white" stroke="#E0D5C0" strokeWidth="1.5"/>
            <text x="52" y="62" textAnchor="middle" fontFamily="'Playfair Display', serif" fontSize="28" fill="var(--wine)" fontWeight="600">7.5</text>
            <text x="52" y="78" textAnchor="middle" fontSize="7" fill="#6B6B6B">out of 10</text>
          </g>
          {/* Sweat */}
          <path d="M155,85 Q157,92 155,97" fill="#A0C4D4" className="anim-sweat"/>
        </svg>
      </div>
    </div>
  );
}

function GarlicCrush() {
  return (
    <div className="anim-stage">
      <div className="anim-figure">
        <svg viewBox="0 0 200 180" width="200" height="180">
          {/* Garlic with blush */}
          <g className="anim-cheese-happy">
            <ellipse cx="130" cy="90" rx="22" ry="28" fill="#FFF8EC" stroke="#E0D5C0" strokeWidth="2"/>
            <path d="M130,62 Q132,54 128,50" fill="none" stroke="#8DB580" strokeWidth="2" strokeLinecap="round"/>
            {/* Heart eyes */}
            <text x="121" y="86" fontSize="10" fill="#C4756B">♥</text>
            <text x="134" y="86" fontSize="10" fill="#C4756B">♥</text>
            <path d="M125,100 Q130,105 136,100" fill="none" stroke="#2A2A2A" strokeWidth="1.5" strokeLinecap="round"/>
            {/* Blush */}
            <ellipse cx="120" cy="94" rx="5" ry="3" fill="#F0D4D4" opacity="0.5"/>
            <ellipse cx="140" cy="94" rx="5" ry="3" fill="#F0D4D4" opacity="0.5"/>
          </g>
          {/* Hearts floating */}
          <g className="anim-hearts">
            <text x="100" y="50" fontSize="14" className="heart-1">♥</text>
            <text x="155" y="55" fontSize="11" className="heart-2">♥</text>
            <text x="110" y="130" fontSize="12" className="heart-3">♥</text>
          </g>
          {/* Person looking at garlic */}
          <g className="anim-sway-gentle">
            <circle cx="55" cy="70" r="12" fill="#F5DEB3" stroke="#D4C4A0" strokeWidth="1"/>
            <circle cx="60" cy="68" r="2" fill="#C4756B"/>
            <circle cx="52" cy="68" r="2" fill="#C4756B"/>
          </g>
        </svg>
      </div>
    </div>
  );
}

function FlourBedtime() {
  return (
    <div className="anim-stage">
      <div className="anim-figure">
        <svg viewBox="0 0 200 180" width="200" height="180">
          {/* Bed/blanket */}
          <rect x="50" y="95" width="100" height="50" rx="6" fill="#E8E0D4" stroke="#D4C4A0" strokeWidth="2"/>
          {/* Pillow */}
          <ellipse cx="80" cy="98" rx="22" ry="10" fill="white" stroke="#E8E0D4" strokeWidth="1.5"/>
          {/* Flour bag tucked in */}
          <rect x="65" y="78" width="35" height="25" rx="4" fill="#FFF8EC" stroke="#D4C4A0" strokeWidth="1.5"/>
          <text x="82" y="94" textAnchor="middle" fontSize="7" fill="#8B7355" fontWeight="600">FLOUR</text>
          {/* Blanket pulled up */}
          <path d="M50,105 Q100,95 150,105" fill="#E8D5C8" stroke="#D4C4A0" strokeWidth="1"/>
          {/* Little book */}
          <g className="anim-bob">
            <rect x="130" y="60" width="30" height="22" rx="2" fill="#A0C4D4" stroke="#80A4B4" strokeWidth="1"/>
            <text x="145" y="73" textAnchor="middle" fontSize="5" fill="white" fontWeight="600">GOODNIGHT</text>
            <text x="145" y="79" textAnchor="middle" fontSize="5" fill="white">MOON</text>
          </g>
          {/* Zzz */}
          <g className="anim-float-up">
            <text x="108" y="72" fontSize="10" fill="var(--text-muted)" opacity="0.5">z</text>
            <text x="116" y="62" fontSize="12" fill="var(--text-muted)" opacity="0.4">z</text>
            <text x="125" y="50" fontSize="14" fill="var(--text-muted)" opacity="0.3">z</text>
          </g>
        </svg>
      </div>
    </div>
  );
}

function FrostingBagpipe() {
  return (
    <div className="anim-stage">
      <div className="anim-figure">
        <svg viewBox="0 0 200 180" width="200" height="180">
          {/* Person marching */}
          <g className="anim-runnerBob">
            <circle cx="70" cy="50" r="12" fill="#F5DEB3" stroke="#D4C4A0" strokeWidth="1"/>
            <path d="M70,62 L66,95 L74,95 Z" fill="var(--wine)" opacity="0.7"/>
            {/* Legs marching */}
            <g className="keemya-leg-left">
              <line x1="68" y1="95" x2="62" y2="115" stroke="#F5DEB3" strokeWidth="3" strokeLinecap="round"/>
            </g>
            <g className="keemya-leg-right">
              <line x1="72" y1="95" x2="78" y2="115" stroke="#F5DEB3" strokeWidth="3" strokeLinecap="round"/>
            </g>
          </g>
          {/* Piping bag under arm like bagpipe */}
          <g className="anim-squeeze">
            <polygon points="82,60 95,55 110,70 95,80" fill="#E8E0D4" stroke="#D4C4A0" strokeWidth="1.5"/>
            <rect x="106" y="65" width="8" height="18" rx="2" fill="#D4C4A0"/>
          </g>
          {/* Sound waves */}
          <g className="anim-impact">
            <path d="M120,68 Q128,65 130,72" fill="none" stroke="#C8A96E" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M132,62 Q142,58 144,68" fill="none" stroke="#C8A96E" strokeWidth="1.2" strokeLinecap="round"/>
            <path d="M146,56 Q158,50 160,62" fill="none" stroke="#C8A96E" strokeWidth="1" strokeLinecap="round"/>
          </g>
          {/* Frosting splatters */}
          <g className="anim-splash">
            <circle cx="118" cy="85" r="3" fill="#F0D4D4"/>
            <circle cx="130" cy="90" r="4" fill="#F0D4D4"/>
            <circle cx="125" cy="100" r="2.5" fill="#F0D4D4"/>
          </g>
        </svg>
      </div>
    </div>
  );
}

function TeaGroceryBags() {
  return (
    <div className="anim-stage">
      <div className="anim-figure">
        <svg viewBox="0 0 200 180" width="200" height="180">
          {/* Tea cup struggling */}
          <g className="anim-tremble">
            <path d="M75,80 L75,110 L115,110 L115,80 Q95,75 75,80" fill="#C8A96E" stroke="#A08545" strokeWidth="2"/>
            <path d="M115,88 Q128,88 128,98 Q128,106 115,106" fill="none" stroke="#A08545" strokeWidth="2.5"/>
            {/* Strained face */}
            <circle cx="88" cy="90" r="2" fill="#5A3A1A"/>
            <circle cx="102" cy="90" r="2" fill="#5A3A1A"/>
            <path d="M90,100 Q95,96 100,100" fill="none" stroke="#5A3A1A" strokeWidth="1.5" strokeLinecap="round"/>
          </g>
          {/* Many grocery bags */}
          <g className="anim-wobble">
            <rect x="55" y="45" width="16" height="25" rx="2" fill="#8DB580" stroke="#6B9960" strokeWidth="1"/>
            <rect x="68" y="40" width="14" height="28" rx="2" fill="#C8A96E" stroke="#A08545" strokeWidth="1"/>
            <rect x="80" y="42" width="16" height="26" rx="2" fill="#F0D4D4" stroke="#D4A0A0" strokeWidth="1"/>
            <rect x="94" y="38" width="14" height="30" rx="2" fill="#A0C4D4" stroke="#80A4B4" strokeWidth="1"/>
            <rect x="106" y="44" width="16" height="24" rx="2" fill="#E8D5A3" stroke="#C8A96E" strokeWidth="1"/>
            <rect x="120" y="40" width="14" height="28" rx="2" fill="#D4C4A0" stroke="#B4A480" strokeWidth="1"/>
          </g>
          {/* Sweat */}
          <circle cx="70" cy="78" r="2" fill="#A0C4D4" className="anim-sweat"/>
          {/* Stairs */}
          <line x1="40" y1="140" x2="160" y2="140" stroke="#D4C4A0" strokeWidth="2"/>
          <line x1="50" y1="130" x2="150" y2="130" stroke="#D4C4A0" strokeWidth="1.5" opacity="0.6"/>
          <line x1="60" y1="120" x2="140" y2="120" stroke="#D4C4A0" strokeWidth="1" opacity="0.3"/>
        </svg>
      </div>
    </div>
  );
}

function OnionCaraMel() {
  return (
    <div className="anim-stage">
      <div className="anim-figure">
        <svg viewBox="0 0 200 180" width="200" height="180">
          {/* Two onions with name tags */}
          <g className="anim-cheese-happy">
            {/* Onion 1: Cara */}
            <circle cx="70" cy="90" r="24" fill="#E8D5C0" stroke="#C4A080" strokeWidth="2"/>
            <path d="M55,90 Q70,72 85,90" fill="none" stroke="#D4B898" strokeWidth="1.5"/>
            <circle cx="63" cy="86" r="2" fill="#2A2A2A"/>
            <circle cx="77" cy="86" r="2" fill="#2A2A2A"/>
            <path d="M65,96 Q70,100 75,96" fill="none" stroke="#2A2A2A" strokeWidth="1.5" strokeLinecap="round"/>
            {/* Name tag */}
            <rect x="52" y="112" width="36" height="16" rx="3" fill="white" stroke="#D4C4A0" strokeWidth="1"/>
            <text x="70" y="124" textAnchor="middle" fontSize="8" fill="var(--wine)" fontWeight="600">CARA</text>
          </g>
          <g className="anim-cheese-happy" style={{animationDelay: '0.3s'}}>
            {/* Onion 2: Mel */}
            <circle cx="140" cy="90" r="24" fill="#E8D5C0" stroke="#C4A080" strokeWidth="2"/>
            <path d="M125,90 Q140,72 155,90" fill="none" stroke="#D4B898" strokeWidth="1.5"/>
            <circle cx="133" cy="86" r="2" fill="#2A2A2A"/>
            <circle cx="147" cy="86" r="2" fill="#2A2A2A"/>
            <path d="M135,96 Q140,100 145,96" fill="none" stroke="#2A2A2A" strokeWidth="1.5" strokeLinecap="round"/>
            {/* Name tag */}
            <rect x="124" y="112" width="32" height="16" rx="3" fill="white" stroke="#D4C4A0" strokeWidth="1"/>
            <text x="140" y="124" textAnchor="middle" fontSize="8" fill="var(--wine)" fontWeight="600">MEL</text>
          </g>
          {/* Plus/equals sign */}
          <text x="105" y="95" textAnchor="middle" fontSize="18" fill="var(--text-muted)" opacity="0.4">+</text>
          {/* Lightbulb moment */}
          <text x="105" y="55" textAnchor="middle" fontSize="14" fill="#C8A96E" className="anim-bob" opacity="0.6">!</text>
        </svg>
      </div>
    </div>
  );
}

const animationMap = {
  'Beat the eggs': [EggBoxing, EggTrashTalk],
  'Dress the salad': [SaladBeret, SaladShopping],
  'Ice the cake': [IceCubesOnCake, CakeColdShoulder],
  'Whip the cream': [ScoldCream, CreamWhipCrack],
  'Grate the cheese': [GrateCheese, CheeseRating],
  'Crush the garlic': [GarlicTherapy, GarlicCrush],
  'Fold in the flour': [OrigamiFlour, FlourBedtime],
  'Pipe the frosting': [PlumberFrosting, FrostingBagpipe],
  'Strain the tea': [TeaWorkout, TeaGroceryBags],
  'Caramelize the onions': [CaramelOnion, OnionCaraMel],
};

export default function SceneAnimation({ instruction, type, id = 0 }) {
  const entry = animationMap[instruction];
  if (entry) {
    const Component = entry[id] || entry[0];
    return <Component />;
  }
  return <EggBoxing />;
}
