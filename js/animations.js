/* ---------- Scroll-driven animations ---------- */
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const ease = t => 1 - Math.pow(1 - t, 3);
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const hero = document.getElementById("hero");
const progress = document.getElementById("progress");
const sections = [...document.querySelectorAll(".item, .group, .divider")];

function onScroll() {
  const vh = innerHeight;
  hero.style.setProperty("--h", clamp(scrollY / vh));
  progress.style.transform = `scaleX(${clamp(scrollY / (document.documentElement.scrollHeight - vh))})`;

  for (const s of sections) {
    const r = s.getBoundingClientRect();
    if (r.bottom < -vh || r.top > vh * 2) continue;
    const p = clamp((vh - r.top) / r.height);
    const inn = reduced ? 1 : ease(clamp((p - 0.12) / 0.38));
    const out = reduced ? 0 : clamp((p - 0.85) / 0.15);
    // N'écrit que si la valeur change : chaque écriture relance le calcul de style de la section
    const vin = inn.toFixed(3), vout = out.toFixed(3);
    if (s._in !== vin) { s.style.setProperty("--in", vin); s._in = vin; }
    if (s._out !== vout) { s.style.setProperty("--out", vout); s._out = vout; }
  }
}
let ticking = false;
addEventListener("scroll", () => {
  if (!ticking) { requestAnimationFrame(() => { onScroll(); ticking = false; }); ticking = true; }
}, { passive: true });
addEventListener("resize", onScroll);
onScroll();

/* Tuiles du récap qui apparaissent */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => e.isIntersecting && e.target.classList.add("on"));
}, { threshold: 0.2 });
document.querySelectorAll(".tile").forEach(t => io.observe(t));

/* Carte holographique qui suit la souris / le doigt */
const front = document.querySelector(".tcard.front");
if (front) {
  const move = (x, y) => {
    const r = front.getBoundingClientRect();
    const px = clamp((x - r.left) / r.width), py = clamp((y - r.top) / r.height);
    front.style.setProperty("--ry", `${(px - 0.5) * 30}deg`);
    front.style.setProperty("--rx", `${(0.5 - py) * 30}deg`);
    front.style.setProperty("--mx", `${px * 100}%`);
    front.style.setProperty("--my", `${py * 100}%`);
  };
  const reset = () => ["--ry", "--rx"].forEach(k => front.style.setProperty(k, "0deg"));
  front.addEventListener("pointermove", e => move(e.clientX, e.clientY));
  front.addEventListener("pointerleave", reset);
}
