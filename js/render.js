/* ---------- Rendu ---------- */
const hexToRgba = (hex, a) => {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${n >> 16},${(n >> 8) & 255},${n & 255},${a})`;
};

const accentStyle = it => `--accent:${it.accent};--accent2:${it.accent2};--accent-soft:${hexToRgba(it.accent, .22)}`;
const visualOf = (it, size) => VISUALS[it.visual]
  ? VISUALS[it.visual]()
  : `<div style="font-size:${size};line-height:1">${it.visual || it.emoji}</div>`;
const linksOf = it => it.links || (it.link ? [["Voir des idées →", it.link]] : []);
const tiles = [];

const renderBig = (it, i) => {
  tiles.push({ ...it, href: `#s-${i}` });
  return `
  <section class="item" id="s-${i}" style="${accentStyle(it)};--gx:${i % 2 ? "70%" : "30%"}">
    <div class="sticky">
      <div class="bg"></div>
      <div class="visual">${visualOf(it, "min(40vh,60vw)")}</div>
      <div class="text">
        <span class="tag reveal" style="--d:.1">${it.tag}</span>
        <h2 class="reveal" style="--d:.2">${it.title}</h2>
        <p class="reveal" style="--d:.35">${it.desc}</p>
        ${it.specs ? `<ul class="specs reveal" style="--d:.5">${it.specs.map(s => `<li>${s}</li>`).join("")}</ul>` : ""}
        ${linksOf(it).map(([label, href]) => `<a class="cta reveal" style="--d:.6" href="${href}" target="_blank" rel="noopener">${label}</a>`).join(" ")}
      </div>
    </div>
  </section>`;
};

const renderMini = (it, i, j) => {
  tiles.push({ ...it, href: `#s-${i}` });
  return `
  <article class="mini reveal" style="${accentStyle(it)};--d:${j * 0.25}">
    <div class="mglow"></div>
    <div class="mv">${visualOf(it, "min(16vh,20vw)")}</div>
    <div class="mt">
      <span class="tag">${it.tag}</span>
      <h3>${it.title}</h3>
      <p>${it.desc}</p>
      <div class="mfoot">
        ${it.budget ? `<span class="budget">${it.budget}</span>` : ""}
        ${linksOf(it).map(([label, href]) => `<a href="${href}" target="_blank" rel="noopener">${label}</a>`).join("")}
      </div>
    </div>
  </article>`;
};

document.getElementById("items").innerHTML = ITEMS.map((it, i) => {
  if (it.divider) return `
  <section class="divider" id="s-${i}"><div class="sticky"><h2 class="reveal">${it.divider}</h2></div></section>`;
  if (it.group) return `
  <section class="group" id="s-${i}"><div class="sticky"><div class="pair">${it.group.map((g, j) => renderMini(g, i, j)).join("")}</div></div></section>`;
  return renderBig(it, i);
}).join("");

const strip = html => html.replace(/<[^>]+>/g, "");
document.getElementById("grid").innerHTML = tiles.map((it, i) => `
  <a class="tile" href="${it.href}" style="--accent:${it.accent};transition-delay:${i * 60}ms">
    <div class="e">${it.emoji}</div>
    <h3>${strip(it.title)}</h3>
    <p>${strip(it.desc)}</p>
    ${it.budget ? `<span class="tb">${it.budget}</span>` : ""}
  </a>`).join("");
