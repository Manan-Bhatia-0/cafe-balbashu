/*
  Café audio atmosphere using Web Audio API.
  - Jazz: café-style piano with walking bass and brushed rhythm
  - Ambience: voice murmur, plates/cups clinking, espresso machine hiss
  All synthesized, no external files needed.
*/

let audioCtx = null;
let jazzGain = null;
let ambienceGain = null;
let masterGain = null;
let isPlaying = false;
let jazzTimeout = null;
let clinkTimeout = null;
let plateTimeout = null;
let espressoTimeout = null;

const JAZZ_VOLUME = 0.09;
const AMBIENCE_VOLUME = 0.045;

// Jazz chord voicings (rootless, café style)
const chordProg = [
  // ii-V-I in C, then vi, then ii-V-I in F
  { piano: [293.7, 349.2, 440.0, 523.3], bass: 146.8 },   // Dm7
  { piano: [392.0, 493.9, 554.4, 698.5], bass: 196.0 },   // G7
  { piano: [261.6, 329.6, 392.0, 493.9], bass: 130.8 },   // Cmaj7
  { piano: [261.6, 329.6, 392.0, 493.9], bass: 130.8 },   // Cmaj7 (linger)
  { piano: [440.0, 523.3, 659.3, 784.0], bass: 220.0 },   // Am7
  { piano: [440.0, 523.3, 659.3, 784.0], bass: 220.0 },   // Am7 (linger)
  { piano: [293.7, 349.2, 440.0, 523.3], bass: 146.8 },   // Dm7
  { piano: [392.0, 493.9, 554.4, 698.5], bass: 196.0 },   // G7
  { piano: [349.2, 440.0, 523.3, 659.3], bass: 174.6 },   // Fmaj7
  { piano: [349.2, 440.0, 523.3, 659.3], bass: 174.6 },   // Fmaj7 (linger)
  { piano: [329.6, 415.3, 493.9, 622.3], bass: 164.8 },   // Em7
  { piano: [440.0, 523.3, 659.3, 784.0], bass: 220.0 },   // Am7
];

function createContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    masterGain = audioCtx.createGain();
    masterGain.gain.value = 1;
    masterGain.connect(audioCtx.destination);
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

// Warm piano note with quick attack and slow decay
function playPianoNote(freq, time, duration, gain) {
  if (!audioCtx || !jazzGain) return;
  const osc1 = audioCtx.createOscillator();
  const osc2 = audioCtx.createOscillator();
  const noteGain = audioCtx.createGain();
  const filter = audioCtx.createBiquadFilter();

  // Detuned pair for warmth
  osc1.type = 'triangle';
  osc1.frequency.value = freq;
  osc2.type = 'sine';
  osc2.frequency.value = freq * 1.002;

  filter.type = 'lowpass';
  filter.frequency.value = 600 + Math.random() * 300;
  filter.Q.value = 0.7;

  // Piano-like envelope: quick attack, gentle decay
  const vol = gain || (0.04 + Math.random() * 0.02);
  noteGain.gain.setValueAtTime(0, time);
  noteGain.gain.linearRampToValueAtTime(vol, time + 0.02);
  noteGain.gain.exponentialRampToValueAtTime(vol * 0.5, time + duration * 0.3);
  noteGain.gain.exponentialRampToValueAtTime(0.001, time + duration);

  osc1.connect(filter);
  osc2.connect(filter);
  filter.connect(noteGain);
  noteGain.connect(jazzGain);

  osc1.start(time);
  osc2.start(time);
  osc1.stop(time + duration + 0.1);
  osc2.stop(time + duration + 0.1);
}

// Walking bass note
function playBassNote(freq, time, duration) {
  if (!audioCtx || !jazzGain) return;
  const osc = audioCtx.createOscillator();
  const noteGain = audioCtx.createGain();
  const filter = audioCtx.createBiquadFilter();

  osc.type = 'sine';
  osc.frequency.value = freq;

  filter.type = 'lowpass';
  filter.frequency.value = 300;
  filter.Q.value = 0.5;

  noteGain.gain.setValueAtTime(0, time);
  noteGain.gain.linearRampToValueAtTime(0.06, time + 0.02);
  noteGain.gain.exponentialRampToValueAtTime(0.02, time + duration * 0.6);
  noteGain.gain.exponentialRampToValueAtTime(0.001, time + duration);

  osc.connect(filter);
  filter.connect(noteGain);
  noteGain.connect(jazzGain);

  osc.start(time);
  osc.stop(time + duration + 0.05);
}

// Brushed hi-hat / ride shimmer
function playBrush(time) {
  if (!audioCtx || !jazzGain) return;
  const bufLen = audioCtx.sampleRate * 0.08;
  const buf = audioCtx.createBuffer(1, bufLen, audioCtx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < bufLen; i++) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / bufLen);
  }
  const src = audioCtx.createBufferSource();
  src.buffer = buf;
  const g = audioCtx.createGain();
  const f = audioCtx.createBiquadFilter();
  f.type = 'bandpass';
  f.frequency.value = 6000 + Math.random() * 2000;
  f.Q.value = 1.5;
  g.gain.setValueAtTime(0.015 + Math.random() * 0.008, time);
  g.gain.exponentialRampToValueAtTime(0.001, time + 0.08);
  src.connect(f);
  f.connect(g);
  g.connect(jazzGain);
  src.start(time);
}

function startJazz() {
  if (!audioCtx) return;

  jazzGain = audioCtx.createGain();
  jazzGain.gain.value = JAZZ_VOLUME;

  // Warm reverb-like effect
  const convGain = audioCtx.createGain();
  convGain.gain.value = 0.3;
  const delay = audioCtx.createDelay(0.5);
  delay.delayTime.value = 0.15;
  const fbGain = audioCtx.createGain();
  fbGain.gain.value = 0.2;
  const reverbFilter = audioCtx.createBiquadFilter();
  reverbFilter.type = 'lowpass';
  reverbFilter.frequency.value = 2000;

  jazzGain.connect(masterGain);
  jazzGain.connect(delay);
  delay.connect(reverbFilter);
  reverbFilter.connect(fbGain);
  fbGain.connect(delay);
  reverbFilter.connect(convGain);
  convGain.connect(masterGain);

  let chordIdx = 0;
  const beatDuration = 0.55 + Math.random() * 0.1; // ~110 BPM swing feel

  const playBar = () => {
    if (!isPlaying) return;
    const chord = chordProg[chordIdx % chordProg.length];
    const now = audioCtx.currentTime;
    const barLen = beatDuration * 4;

    // Piano: play chord on beat 1, sometimes comp on beat 2.5 or 4
    playPianoNote(chord.piano[0], now, barLen * 0.8);
    playPianoNote(chord.piano[1], now + 0.01, barLen * 0.75);
    playPianoNote(chord.piano[2], now + 0.02, barLen * 0.7);
    playPianoNote(chord.piano[3], now + 0.015, barLen * 0.65);

    // Random comping hits
    if (Math.random() > 0.4) {
      const compTime = now + beatDuration * (2 + Math.random() * 0.5);
      playPianoNote(chord.piano[1], compTime, beatDuration * 1.5, 0.025);
      playPianoNote(chord.piano[3], compTime + 0.01, beatDuration * 1.2, 0.02);
    }

    // Walking bass: 4 notes per bar
    const bassNotes = [
      chord.bass,
      chord.bass * (Math.random() > 0.5 ? 1.125 : 1.2), // walk up
      chord.bass * (Math.random() > 0.5 ? 1.25 : 1.333),
      chord.bass * (Math.random() > 0.5 ? 1.5 : 0.9),    // approach next
    ];
    bassNotes.forEach((f, i) => {
      playBassNote(f, now + beatDuration * i, beatDuration * 0.85);
    });

    // Brush pattern: swing feel
    for (let i = 0; i < 4; i++) {
      playBrush(now + beatDuration * i);
      if (Math.random() > 0.3) {
        playBrush(now + beatDuration * (i + 0.6)); // swing upbeat
      }
    }

    chordIdx++;
    jazzTimeout = setTimeout(playBar, barLen * 1000);
  };

  playBar();
}

function createAmbienceNoise() {
  if (!audioCtx) return;

  ambienceGain = audioCtx.createGain();
  ambienceGain.gain.value = AMBIENCE_VOLUME;
  ambienceGain.connect(masterGain);

  // === Voice murmur (layered filtered noise) ===
  const bufferSize = audioCtx.sampleRate * 6;
  const buffer = audioCtx.createBuffer(2, bufferSize, audioCtx.sampleRate);
  for (let ch = 0; ch < 2; ch++) {
    const data = buffer.getChannelData(ch);
    let lastOut = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      data[i] = (lastOut + (0.02 * white)) / 1.02;
      lastOut = data[i];
      data[i] *= 4;
    }
  }

  const noiseSource = audioCtx.createBufferSource();
  noiseSource.buffer = buffer;
  noiseSource.loop = true;

  // Two bandpass filters for more realistic murmur
  const murmurLow = audioCtx.createBiquadFilter();
  murmurLow.type = 'bandpass';
  murmurLow.frequency.value = 350;
  murmurLow.Q.value = 0.6;

  const murmurHigh = audioCtx.createBiquadFilter();
  murmurHigh.type = 'bandpass';
  murmurHigh.frequency.value = 800;
  murmurHigh.Q.value = 0.5;

  const murmurGainLow = audioCtx.createGain();
  murmurGainLow.gain.value = 0.7;
  const murmurGainHigh = audioCtx.createGain();
  murmurGainHigh.gain.value = 0.3;

  noiseSource.connect(murmurLow);
  noiseSource.connect(murmurHigh);
  murmurLow.connect(murmurGainLow);
  murmurHigh.connect(murmurGainHigh);
  murmurGainLow.connect(ambienceGain);
  murmurGainHigh.connect(ambienceGain);
  noiseSource.start();

  // === Cup/plate clinks (more frequent, varied) ===
  const playClink = () => {
    if (!isPlaying || !audioCtx) return;

    const now = audioCtx.currentTime;
    // Layer 2 quick tones for a realistic clink
    [0, 0.015].forEach((offset) => {
      const osc = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      const f = audioCtx.createBiquadFilter();

      const baseFreq = 2500 + Math.random() * 3000;
      osc.type = 'sine';
      osc.frequency.setValueAtTime(baseFreq, now + offset);
      osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.7, now + offset + 0.1);

      f.type = 'highpass';
      f.frequency.value = 2000;

      const vol = 0.02 + Math.random() * 0.015;
      g.gain.setValueAtTime(0, now + offset);
      g.gain.linearRampToValueAtTime(vol, now + offset + 0.003);
      g.gain.exponentialRampToValueAtTime(0.001, now + offset + 0.12);

      osc.connect(f);
      f.connect(g);
      g.connect(ambienceGain);
      osc.start(now + offset);
      osc.stop(now + offset + 0.15);
    });

    clinkTimeout = setTimeout(playClink, 1500 + Math.random() * 3500);
  };

  // === Plate set-down (lower, duller thud) ===
  const playPlate = () => {
    if (!isPlaying || !audioCtx) return;

    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    const f = audioCtx.createBiquadFilter();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(800 + Math.random() * 400, now);
    osc.frequency.exponentialRampToValueAtTime(200, now + 0.08);

    f.type = 'lowpass';
    f.frequency.value = 1200;

    g.gain.setValueAtTime(0, now);
    g.gain.linearRampToValueAtTime(0.025, now + 0.005);
    g.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

    osc.connect(f);
    f.connect(g);
    g.connect(ambienceGain);
    osc.start(now);
    osc.stop(now + 0.15);

    plateTimeout = setTimeout(playPlate, 4000 + Math.random() * 6000);
  };

  // === Espresso machine hiss (occasional) ===
  const playEspresso = () => {
    if (!isPlaying || !audioCtx) return;

    const now = audioCtx.currentTime;
    const duration = 1.5 + Math.random();
    const bufLen = audioCtx.sampleRate * duration;
    const buf = audioCtx.createBuffer(1, bufLen, audioCtx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < bufLen; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - (i / bufLen) * 0.6);
    }
    const src = audioCtx.createBufferSource();
    src.buffer = buf;
    const g = audioCtx.createGain();
    const f = audioCtx.createBiquadFilter();
    f.type = 'bandpass';
    f.frequency.value = 3000 + Math.random() * 1000;
    f.Q.value = 2;

    g.gain.setValueAtTime(0, now);
    g.gain.linearRampToValueAtTime(0.012, now + 0.3);
    g.gain.linearRampToValueAtTime(0.008, now + duration * 0.7);
    g.gain.exponentialRampToValueAtTime(0.001, now + duration);

    src.connect(f);
    f.connect(g);
    g.connect(ambienceGain);
    src.start(now);

    espressoTimeout = setTimeout(playEspresso, 15000 + Math.random() * 20000);
  };

  setTimeout(playClink, 800 + Math.random() * 1500);
  setTimeout(playPlate, 2000 + Math.random() * 3000);
  setTimeout(playEspresso, 5000 + Math.random() * 5000);
}

export function startCafeAudio() {
  if (isPlaying) return;
  createContext();
  isPlaying = true;
  startJazz();
  createAmbienceNoise();
}

export function stopCafeAudio() {
  isPlaying = false;
  clearTimeout(jazzTimeout);
  clearTimeout(clinkTimeout);
  clearTimeout(plateTimeout);
  clearTimeout(espressoTimeout);
  if (masterGain && audioCtx) {
    masterGain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.5);
  }
}

export function setVolume(vol) {
  if (masterGain && audioCtx) {
    masterGain.gain.linearRampToValueAtTime(vol, audioCtx.currentTime + 0.1);
  }
}
