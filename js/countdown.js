/* ---------- Compte à rebours ---------- */
const cd = document.getElementById("countdown");
function tick() {
  const now = new Date();
  let xmas = new Date(now.getFullYear(), 11, 25);
  if (now > new Date(now.getFullYear(), 11, 26)) xmas = new Date(now.getFullYear() + 1, 11, 25);
  const diff = Math.max(0, xmas - now);
  const d = Math.floor(diff / 864e5), h = Math.floor(diff / 36e5) % 24, m = Math.floor(diff / 6e4) % 60, s = Math.floor(diff / 1e3) % 60;
  cd.innerHTML = [[d, "jours"], [h, "heures"], [m, "min"], [s, "sec"]]
    .map(([v, l]) => `<div><b>${String(v).padStart(2, "0")}</b><small>${l}</small></div>`).join("");
}
tick(); setInterval(tick, 1000);
