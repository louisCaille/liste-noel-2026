/* ---------- Musique : « All I Want for Christmas Is You » ---------- */
const audio = new Audio("audio/all-i-want-for-christmas-is-you.mp3");
audio.loop = true;
audio.preload = "none";
const MAX_VOLUME = 0.8;
let playing = false, fadeTimer, volume = 0;

// Fondu de volume. Sur iOS, audio.volume est en lecture seule (toujours 1) :
// on suit donc notre propre volume et on s'arrête au bout d'un nombre fixe d'étapes.
function fadeTo(target, ms, done) {
  clearInterval(fadeTimer);
  const steps = Math.max(1, Math.round(ms / 50));
  const from = volume;
  let k = 0;
  fadeTimer = setInterval(() => {
    k++;
    volume = from + (target - from) * (k / steps);
    audio.volume = volume;
    if (k >= steps) {
      clearInterval(fadeTimer);
      done && done();
    }
  }, 50);
}

const musicBtn = document.getElementById("music");
function setMusic(on) {
  playing = on;
  if (on) {
    audio.volume = volume;
    audio.play().catch(() => setMusic(false));
    fadeTo(MAX_VOLUME, 1500);
  } else {
    fadeTo(0, 600, () => audio.pause());
  }
  musicBtn.classList.toggle("on", on);
  musicBtn.classList.add("played");
  musicBtn.setAttribute("aria-pressed", on);
  musicBtn.setAttribute("aria-label", on ? "Couper la musique" : "Jouer la musique de Noël");
}
musicBtn.addEventListener("click", () => setMusic(!playing));
// Pause quand l'onglet est caché
document.addEventListener("visibilitychange", () => {
  if (!playing) return;
  document.hidden ? audio.pause() : audio.play();
});
