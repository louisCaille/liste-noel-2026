/* ---------- Visuels SVG ---------- */
const VISUALS = {
  watch: () => `
  <svg viewBox="0 0 300 420" aria-hidden="true">
    <defs>
      <linearGradient id="strap" x1="0" x2="1"><stop offset="0" stop-color="#15171c"/><stop offset=".5" stop-color="#2a2e36"/><stop offset="1" stop-color="#15171c"/></linearGradient>
      <linearGradient id="bezel" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5a5f69"/><stop offset=".5" stop-color="#1d2026"/><stop offset="1" stop-color="#3b3f47"/></linearGradient>
    </defs>
    <rect x="100" y="0" width="100" height="150" rx="22" fill="url(#strap)"/>
    <rect x="100" y="270" width="100" height="150" rx="22" fill="url(#strap)"/>
    <g fill="#2a2e36">${[30,60,330,360].map(y=>`<rect x="138" y="${y}" width="24" height="8" rx="4" fill="#0d0f12"/>`).join("")}</g>
    <rect x="252" y="160" width="12" height="30" rx="5" fill="#444"/>
    <rect x="252" y="225" width="12" height="30" rx="5" fill="#444"/>
    <rect x="36" y="160" width="12" height="30" rx="5" fill="#444"/>
    <rect x="36" y="225" width="12" height="30" rx="5" fill="#444"/>
    <circle cx="150" cy="210" r="110" fill="url(#bezel)"/>
    <circle cx="150" cy="210" r="94" fill="#000"/>
    <circle cx="150" cy="210" r="80" fill="none" stroke="rgba(255,255,255,.08)" stroke-width="7"/>
    <circle class="ring" cx="150" cy="210" r="80" fill="none" stroke="var(--accent)" stroke-width="7" stroke-linecap="round" transform="rotate(-90 150 210)"/>
    <text x="150" y="196" text-anchor="middle" fill="#9aa" font-size="13" font-weight="600" letter-spacing="2">RUN</text>
    <text x="150" y="232" text-anchor="middle" fill="#fff" font-size="40" font-weight="800">10.2</text>
    <text x="150" y="252" text-anchor="middle" fill="#9aa" font-size="12">km</text>
    <g transform="translate(132 262)"><path class="pulse" d="M9 15 L2 8 a4 4 0 0 1 7-5 a4 4 0 0 1 7 5 Z" fill="#ff4d6d"/></g>
    <text x="154" y="275" fill="#fff" font-size="13" font-weight="700">148</text>
  </svg>`,

  earbuds: () => `
  <svg viewBox="0 0 400 420" aria-hidden="true">
    <defs>
      <linearGradient id="bud" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3a3d47"/><stop offset="1" stop-color="#0e0f13"/></linearGradient>
      <linearGradient id="case" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2b2e36"/><stop offset="1" stop-color="#121318"/></linearGradient>
    </defs>
    <!-- Arceau qui passe derrière la nuque -->
    <path d="M88 270 C 80 420, 320 420, 312 270" fill="none" stroke="#1a1c22" stroke-width="16" stroke-linecap="round"/>
    <path class="band" pathLength="1" d="M88 270 C 80 420, 320 420, 312 270" fill="none" stroke="var(--accent)" stroke-width="3" stroke-linecap="round"/>
    ${["bud-l", "bud-r"].map(cls => `
    <g class="${cls}"><g ${cls === "bud-r" ? 'transform="translate(400 0) scale(-1 1)"' : ""}>
      <!-- Crochet d'oreille -->
      <path d="M88 240 C 40 190, 45 80, 118 78" fill="none" stroke="#1a1c22" stroke-width="14" stroke-linecap="round"/>
      <path d="M88 240 C 40 190, 45 80, 118 78" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" opacity=".6"/>
      <!-- Module batterie -->
      <rect x="66" y="215" width="44" height="80" rx="22" fill="url(#bud)"/>
      <rect x="104" y="240" width="6" height="22" rx="3" fill="#444"/>
      <!-- Transducteur posé devant l'oreille -->
      <rect x="108" y="70" width="52" height="74" rx="24" fill="url(#bud)" transform="rotate(12 134 107)"/>
      <rect x="118" y="82" width="32" height="50" rx="16" fill="#0a0a0d" transform="rotate(12 134 107)"/>
      <ellipse cx="124" cy="96" rx="6" ry="14" fill="rgba(255,255,255,.1)" transform="rotate(12 134 107)"/>
      <!-- Vibrations -->
      <g class="waves" fill="none" stroke="var(--accent)" stroke-width="3" stroke-linecap="round">
        <path d="M166 92 q 8 16 0 32"/>
        <path d="M176 84 q 12 24 0 48"/>
        <path d="M186 76 q 16 32 0 64"/>
      </g>
    </g></g>`).join("")}
    <circle cx="200" cy="384" r="4" fill="var(--accent)"><animate attributeName="opacity" values="1;.2;1" dur="2s" repeatCount="indefinite"/></circle>
  </svg>`,

  kettle: () => `
  <svg viewBox="0 0 400 440" aria-hidden="true">
    <defs>
      <linearGradient id="kbody" x1="0" x2="1"><stop offset="0" stop-color="#1b1c20"/><stop offset=".35" stop-color="#3d3f46"/><stop offset=".55" stop-color="#22242a"/><stop offset="1" stop-color="#121317"/></linearGradient>
      <linearGradient id="kbase" x1="0" x2="1"><stop offset="0" stop-color="#0c0d10"/><stop offset=".5" stop-color="#25272d"/><stop offset="1" stop-color="#0c0d10"/></linearGradient>
    </defs>
    <g class="steam" fill="none" stroke="rgba(255,255,255,.5)" stroke-width="4" stroke-linecap="round">
      <path d="M40 90 c -12 -14, 12 -24, 0 -40"/>
      <path d="M58 96 c -12 -14, 12 -24, 0 -40"/>
      <path d="M22 98 c -12 -14, 12 -24, 0 -40"/>
    </g>
    <path d="M130 320 C 70 320, 80 170, 40 118" fill="none" stroke="#2a2c32" stroke-width="16" stroke-linecap="round"/>
    <path d="M130 320 C 70 320, 80 170, 40 118" fill="none" stroke="rgba(255,255,255,.12)" stroke-width="4" stroke-linecap="round"/>
    <path d="M300 200 C 380 200, 380 330, 300 330" fill="none" stroke="#1a1b1f" stroke-width="22" stroke-linecap="round"/>
    <path d="M145 175 L 285 175 L 312 345 Q 315 365 295 365 L 135 365 Q 115 365 118 345 Z" fill="url(#kbody)"/>
    <rect x="150" y="160" width="130" height="20" rx="8" fill="#2f3137"/>
    <rect x="200" y="132" width="30" height="30" rx="10" fill="var(--accent)"/>
    <rect x="95" y="362" width="240" height="48" rx="16" fill="url(#kbase)"/>
    <text x="215" y="394" text-anchor="middle" fill="var(--accent)" font-size="22" font-weight="800" font-family="Inter, sans-serif">93°C</text>
  </svg>`,

  frother: () => `
  <svg viewBox="0 0 400 440" aria-hidden="true">
    <defs>
      <linearGradient id="fjug" x1="0" x2="1"><stop offset="0" stop-color="#1b1c20"/><stop offset=".35" stop-color="#3d3f46"/><stop offset=".55" stop-color="#22242a"/><stop offset="1" stop-color="#121317"/></linearGradient>
      <linearGradient id="fbase" x1="0" x2="1"><stop offset="0" stop-color="#0c0d10"/><stop offset=".5" stop-color="#25272d"/><stop offset="1" stop-color="#0c0d10"/></linearGradient>
      <clipPath id="fwindow"><rect x="176" y="176" width="48" height="172" rx="24"/></clipPath>
    </defs>
    <g class="steam" fill="none" stroke="rgba(255,255,255,.5)" stroke-width="4" stroke-linecap="round">
      <path d="M180 92 c -12 -14, 12 -24, 0 -40"/>
      <path d="M200 86 c -12 -14, 12 -24, 0 -40"/>
      <path d="M220 92 c -12 -14, 12 -24, 0 -40"/>
    </g>
    <path d="M266 180 C 330 180, 330 320, 262 320" fill="none" stroke="#1a1b1f" stroke-width="20" stroke-linecap="round"/>
    <path d="M132 140 L 268 140 L 260 356 Q 259 372 244 372 L 156 372 Q 141 372 140 356 Z" fill="url(#fjug)"/>
    <path d="M134 146 L 110 140 L 136 172 Z" fill="#2a2c32"/>
    <rect x="176" y="176" width="48" height="172" rx="24" fill="#0b0c0f"/>
    <g clip-path="url(#fwindow)">
      <rect x="176" y="300" width="48" height="60" fill="#f3e6d3"/>
      <g class="foam">
        <rect x="176" y="250" width="48" height="56" fill="#fbf4ea"/>
        ${[[184, 250, 10], [200, 244, 12], [216, 250, 10]].map(([x, y, r]) =>
          `<circle cx="${x}" cy="${y}" r="${r}" fill="#fbf4ea"/>`).join("")}
      </g>
      <g class="bubbles" fill="#fbf4ea">
        <circle cx="190" cy="232" r="4"/><circle cx="210" cy="226" r="3"/><circle cx="200" cy="220" r="3"/>
      </g>
      <g class="whisk" fill="none" stroke="#9aa0aa" stroke-width="3">
        <ellipse cx="200" cy="336" rx="14" ry="5"/>
      </g>
    </g>
    <rect x="182" y="186" width="5" height="150" rx="2.5" fill="rgba(255,255,255,.08)"/>
    <rect x="124" y="114" width="152" height="32" rx="12" fill="#2f3137"/>
    <rect x="182" y="98" width="36" height="20" rx="8" fill="#3d3f46"/>
    <rect x="100" y="368" width="200" height="44" rx="16" fill="url(#fbase)"/>
    <circle class="pulse" cx="200" cy="390" r="8" fill="var(--accent2)"/>
  </svg>`,

  cards: () => `
  <div class="fan">
    ${[
      { i: -1, c: ["#cfe8ff", "#8fc1ff", "#9ef", "#36f"], e: "💧" },
      { i: 1, c: ["#ffd9c9", "#ff9b7a", "#fd8", "#e43"], e: "🔥" },
      { i: 0, c: ["#fff6c9", "#ffe17a", "#ffe", "#fb0"], e: "⚡", front: true },
    ].map(c => `
      <div class="tcard ${c.front ? "front" : ""}" style="--i:${c.i};--c1:${c.c[0]};--c2:${c.c[1]};--c3:${c.c[2]};--c4:${c.c[3]}">
        <div class="inner">
          <div class="top"><span>Mystère</span><span>PV 120</span></div>
          <div class="art">${c.e}</div>
          <div class="line"></div><div class="line s"></div><div class="line"></div><div class="line s"></div>
        </div>
        ${c.front ? '<div class="holo"></div>' : ""}
      </div>`).join("")}
  </div>`,

  box: () => `
  <svg viewBox="0 0 220 200" aria-hidden="true">
    <defs><linearGradient id="boxg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#363844"/><stop offset="1" stop-color="#15161b"/></linearGradient></defs>
    <path d="M28 92 L 42 38 L 178 38 L 192 92 Z" fill="#202229"/>
    <g class="rise">
      ${Array.from({ length: 8 }, (_, k) => k === 2 || k === 5
        ? `<rect x="${42 + k * 17}" y="44" width="14" height="60" rx="2" fill="var(--accent)"/><rect x="${42 + k * 17}" y="38" width="10" height="10" rx="2" fill="var(--accent)"/>`
        : `<rect x="${42 + k * 17}" y="${56 + (k % 3) * 5}" width="14" height="50" rx="2" fill="${["#ffe17a", "#8fc1ff", "#ff9b7a", "#b6ff5e"][k % 4]}"/>`).join("")}
    </g>
    <rect x="22" y="90" width="176" height="90" rx="12" fill="url(#boxg)"/>
    <rect x="22" y="90" width="176" height="5" rx="2.5" fill="rgba(255,255,255,.12)"/>
    <rect x="86" y="124" width="48" height="22" rx="6" fill="none" stroke="var(--accent)" stroke-width="2"/>
    <rect x="96" y="133" width="28" height="4" rx="2" fill="var(--accent)" opacity=".6"/>
  </svg>`,

  pouch: () => `
  <svg viewBox="0 0 220 200" aria-hidden="true">
    <defs><linearGradient id="pouchg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2f4146"/><stop offset="1" stop-color="#11181b"/></linearGradient></defs>
    <g class="rise">
      <rect x="66" y="20" width="10" height="90" rx="5" fill="var(--accent2)" transform="rotate(-14 71 65)"/>
      <rect x="64" y="12" width="14" height="20" rx="4" fill="#f5f5f7" transform="rotate(-14 71 65)"/>
      <rect x="104" y="34" width="22" height="70" rx="6" fill="#f5f5f7" transform="rotate(8 115 69)"/>
      <rect x="106" y="26" width="18" height="12" rx="3" fill="var(--accent)" transform="rotate(8 115 69)"/>
    </g>
    <path d="M196 98 q 20 0 20 20 q 0 20 -20 20" fill="none" stroke="#1d2427" stroke-width="8" stroke-linecap="round"/>
    <path d="M28 88 Q28 64 52 64 L168 64 Q192 64 192 88 L186 160 Q184 180 164 180 L56 180 Q36 180 34 160 Z" fill="url(#pouchg)"/>
    <path d="M40 76 L180 76" stroke="#0b0e10" stroke-width="6" stroke-linecap="round"/>
    <path d="M40 76 L180 76" stroke="rgba(255,255,255,.3)" stroke-width="3" stroke-dasharray="2 3"/>
    <circle cx="152" cy="76" r="5" fill="var(--accent)"/>
    <rect x="148" y="80" width="8" height="22" rx="4" fill="var(--accent)"/>
    <rect x="44" y="92" width="132" height="76" rx="14" fill="none" stroke="rgba(255,255,255,.08)" stroke-width="2" stroke-dasharray="5 5"/>
  </svg>`,

  bottle: () => `
  <svg viewBox="0 0 200 220" aria-hidden="true">
    <defs>
      <clipPath id="bottleclip"><rect x="60" y="64" width="80" height="146" rx="26"/></clipPath>
      <linearGradient id="waterg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--accent)"/><stop offset="1" stop-color="var(--accent2)"/></linearGradient>
    </defs>
    <path d="M110 26 C 110 2, 150 2, 144 34" fill="none" stroke="#1b1d23" stroke-width="7" stroke-linecap="round"/>
    <rect x="72" y="22" width="56" height="30" rx="10" fill="#1b1d23"/>
    <rect x="80" y="48" width="40" height="20" rx="6" fill="#2a2d35"/>
    <rect x="60" y="64" width="80" height="146" rx="26" fill="rgba(255,255,255,.06)"/>
    <g clip-path="url(#bottleclip)"><rect class="fill" x="60" y="64" width="80" height="146" fill="url(#waterg)" opacity=".85"/></g>
    <rect x="60" y="64" width="80" height="146" rx="26" fill="none" stroke="rgba(255,255,255,.3)" stroke-width="2"/>
    <rect x="70" y="84" width="8" height="100" rx="4" fill="rgba(255,255,255,.25)"/>
  </svg>`,

  battery: () => `
  <svg viewBox="0 0 200 220" aria-hidden="true">
    <defs><linearGradient id="battg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3a3d47"/><stop offset="1" stop-color="#101116"/></linearGradient></defs>
    <rect x="50" y="24" width="100" height="180" rx="24" fill="url(#battg)"/>
    <rect x="56" y="40" width="6" height="150" rx="3" fill="rgba(255,255,255,.07)"/>
    <rect x="84" y="31" width="32" height="8" rx="4" fill="#050506"/>
    <path class="pulse" d="M108 74 L 82 122 L 99 122 L 92 156 L 120 104 L 102 104 Z" fill="var(--accent)"/>
    ${[0, 1, 2, 3].map(k => `<circle cx="${79 + k * 14}" cy="182" r="4.5" fill="var(--accent)" style="opacity: clamp(.15, calc((var(--in, 0) - ${k * 0.2}) * 5), 1)"/>`).join("")}
  </svg>`,

  giftcard: () => `
  <svg viewBox="0 0 240 200" aria-hidden="true">
    <defs>
      <linearGradient id="gcr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f0525e"/><stop offset="1" stop-color="#9c1428"/></linearGradient>
      <linearGradient id="gcb" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4c8dff"/><stop offset="1" stop-color="#1640a8"/></linearGradient>
    </defs>
    ${[["gc1", "gcr", "UNIQLO"], ["gc2", "gcb", "DECATHLON"]].map(([cls, grad, name]) => `
    <g transform="translate(45 52)"><g class="${cls}">
      <rect width="150" height="96" rx="12" fill="url(#${grad})"/>
      <text x="16" y="32" fill="#fff" font-size="17" font-weight="800" font-family="Inter, sans-serif" letter-spacing="1">${name}</text>
      <text x="16" y="80" fill="rgba(255,255,255,.75)" font-size="11" font-family="Inter, sans-serif">Carte cadeau</text>
      <rect x="112" y="64" width="24" height="18" rx="4" fill="rgba(255,255,255,.35)"/>
    </g></g>`).join("")}
  </svg>`,
};
