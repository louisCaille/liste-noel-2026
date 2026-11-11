/* ---------- Neige ---------- */
const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");
let flakes = [];
function resize() {
  const dpr = Math.min(devicePixelRatio || 1, 2);
  canvas.width = innerWidth * dpr; canvas.height = innerHeight * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const count = Math.round(innerWidth * innerHeight / 9000);
  flakes = Array.from({ length: count }, () => ({
    x: Math.random() * innerWidth, y: Math.random() * innerHeight,
    r: Math.random() * 2 + 0.5, s: Math.random() * 0.6 + 0.2, w: Math.random() * Math.PI * 2,
  }));
}
let lastY = scrollY;
function snow() {
  const dy = scrollY - lastY; lastY = scrollY;
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  ctx.fillStyle = "rgba(255,255,255,.8)";
  for (const f of flakes) {
    f.w += 0.01;
    f.y += f.s * (1 + f.r) - dy * f.r * 0.15;
    f.x += Math.sin(f.w) * 0.3;
    if (f.y > innerHeight + 5) { f.y = -5; f.x = Math.random() * innerWidth; }
    if (f.y < -5) { f.y = innerHeight + 5; }
    ctx.globalAlpha = f.r / 2.5;
    ctx.beginPath(); ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2); ctx.fill();
  }
  requestAnimationFrame(snow);
}
if (!reduced) { resize(); addEventListener("resize", resize); snow(); }
