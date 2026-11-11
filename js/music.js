/* ---------- Musique : « All I Want for Christmas Is You » ---------- */
const audio = new Audio("audio/all-i-want-for-christmas-is-you.mp3");
audio.loop = true;
audio.preload = "none";
const MAX_VOLUME = 0.8;
let playing = false, fadeTimer;

// Fondu de volume (ignoré sur iOS, où le volume n'est pas modifiable)
function fadeTo(target, ms, done) {
  clearInterval(fadeTimer);
  const step = (target - audio.volume) / (ms / 50);
  fadeTimer = setInterval(() => {
    const v = audio.volume + step;
    if ((step >= 0 && v >= target) || (step < 0 && v <= target)) {
      audio.volume = target;
      clearInterval(fadeTimer);
      done && done();
    } else audio.volume = v;
  }, 50);
}

const musicBtn = document.getElementById("music");
function setMusic(on) {
  playing = on;
  if (on) {
    audio.volume = 0;
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
