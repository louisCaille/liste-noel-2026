/* ---------- Musique : « Douce nuit » en boîte à musique (Web Audio, aucun fichier) ---------- */
// Mélodie en 6/8 : [note, durée en croches]
const MELODY = [
  ["G4",3],["A4",1],["G4",2], ["E4",6], ["G4",3],["A4",1],["G4",2], ["E4",6],
  ["D5",4],["D5",2], ["B4",6], ["C5",4],["C5",2], ["G4",6],
  ["A4",4],["A4",2], ["C5",3],["B4",1],["A4",2], ["G4",3],["A4",1],["G4",2], ["E4",6],
  ["A4",4],["A4",2], ["C5",3],["B4",1],["A4",2], ["G4",3],["A4",1],["G4",2], ["E4",6],
  ["D5",4],["D5",2], ["F5",3],["D5",1],["B4",2], ["C5",6], ["E5",6],
  ["C5",3],["G4",1],["E4",2], ["G4",3],["F4",1],["D4",2], ["C4",12],
];
// Un accord par mesure (fondamentale, quinte, tierce)
const CHORDS = "C C C C G G C C F F C C F F C C G G C C C G C C".split(" ");
const CHORD_NOTES = { C: ["C3", "G3", "E4"], F: ["F2", "C3", "A3"], G: ["G2", "D3", "B3"] };
const EIGHTH = 0.3; // secondes

const freq = name => {
  const [, l, o] = name.match(/([A-G])(\d)/);
  const semis = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 }[l];
  return 440 * Math.pow(2, (semis + (+o + 1) * 12 - 69) / 12);
};

let actx, master, bus, loopTimer, playing = false;

function setupAudio() {
  actx = new (window.AudioContext || window.webkitAudioContext)();
  master = actx.createGain();
  master.gain.value = 0;
  // Petite réverbération générée (bruit qui décroît)
  const reverb = actx.createConvolver();
  const len = actx.sampleRate * 2.5;
  const impulse = actx.createBuffer(2, len, actx.sampleRate);
  for (let c = 0; c < 2; c++) {
    const d = impulse.getChannelData(c);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3);
  }
  reverb.buffer = impulse;
  const wet = actx.createGain(); wet.gain.value = 0.35;
  master.connect(actx.destination);
  master.connect(reverb); reverb.connect(wet); wet.connect(actx.destination);
}

function bell(t, f, vel, dest, decay = 2.2) {
  const env = actx.createGain();
  env.gain.setValueAtTime(0, t);
  env.gain.linearRampToValueAtTime(vel, t + 0.005);
  env.gain.exponentialRampToValueAtTime(0.0001, t + decay);
  env.connect(dest);
  [[1, 1], [2, 0.25], [3.01, 0.06]].forEach(([mult, g]) => {
    const o = actx.createOscillator(), og = actx.createGain();
    o.frequency.value = f * mult; og.gain.value = g;
    o.connect(og); og.connect(env);
    o.start(t); o.stop(t + decay + 0.1);
  });
}

let nextStart = 0;
function scheduleLoop(start) {
  let pos = 0;
  for (const [note, dur] of MELODY) {
    bell(start + pos * EIGHTH, freq(note), 0.22, bus);
    pos += dur;
  }
  CHORDS.forEach((ch, m) => {
    CHORD_NOTES[ch].forEach((note, k) => bell(start + (m * 6 + k * 2) * EIGHTH, freq(note), 0.08, bus, 1.8));
  });
  nextStart = start + (pos + 6) * EIGHTH;
}

const musicBtn = document.getElementById("music");
function setMusic(on) {
  if (!actx) setupAudio();
  playing = on;
  const now = actx.currentTime;
  master.gain.cancelScheduledValues(now);
  master.gain.setValueAtTime(master.gain.value, now);
  if (on) {
    actx.resume();
    // Un bus par lecture, qu'on débranche pour tout couper
    bus = actx.createGain(); bus.connect(master);
    scheduleLoop(now + 0.1);
    // Relance la boucle d'après en se calant sur l'horloge audio (robuste aux pauses d'onglet)
    loopTimer = setInterval(() => { if (actx.currentTime > nextStart - 1) scheduleLoop(nextStart); }, 500);
    master.gain.linearRampToValueAtTime(0.9, now + 1.5);
  } else {
    clearInterval(loopTimer);
    master.gain.linearRampToValueAtTime(0, now + 0.6);
    const old = bus;
    setTimeout(() => old && old.disconnect(), 700);
  }
  musicBtn.classList.toggle("on", on);
  musicBtn.classList.add("played");
  musicBtn.setAttribute("aria-pressed", on);
  musicBtn.setAttribute("aria-label", on ? "Couper la musique" : "Jouer la musique de Noël");
}
musicBtn.addEventListener("click", () => setMusic(!playing));
// Pause quand l'onglet est caché
document.addEventListener("visibilitychange", () => {
  if (!actx || !playing) return;
  document.hidden ? actx.suspend() : actx.resume();
});
