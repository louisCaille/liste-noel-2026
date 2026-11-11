/* =========================================================
   LA LISTE — ajoutez / modifiez vos cadeaux ici.
   - un objet seul        → un grand cadeau, un écran entier
   - { divider: "..." }   → un écran de transition
   - { group: [ ... ] }   → petits cadeaux, 2 par écran
   visual : "watch" | "earbuds" | "kettle" | "cards" | "box" | "pouch"
            | "bottle" | "battery" | "giftcard" | ou un emoji (ex : "📚")
   ========================================================= */
const ITEMS = [
  {
    emoji: "⌚",
    visual: "watch",
    tag: "Pour courir",
    title: "Une montre de <em>sport</em>",
    desc: "GPS, cardio, et ma musique au poignet pour courir sans téléphone. Par exemple la <strong>Garmin Forerunner 165 Music</strong>.",
    specs: ["GPS intégré", "Écran AMOLED", "Musique embarquée", "Suivi du sommeil"],
    link: "https://www.google.com/search?q=Garmin+Forerunner+165+Music",
    accent: "#3ee6a8", accent2: "#36b3ff",
  },
  {
    emoji: "🎧",
    visual: "earbuds",
    tag: "Pour la motivation",
    title: "Des écouteurs <em>de sport</em>",
    desc: "À <strong>conduction osseuse</strong> ou <strong>open-ear</strong> : les oreilles restent libres pour entendre ce qui se passe autour en courant.",
    specs: ["Conduction osseuse", "Open-ear", "Résistants à la sueur", "Bon maintien"],
    link: "https://www.google.com/search?q=%C3%A9couteurs+sport+conduction+osseuse+open-ear",
    accent: "#8b7bff", accent2: "#ff6bd6",
  },
  {
    emoji: "🫖",
    visual: "kettle",
    tag: "Pour le thé & le café",
    title: "Une petite <em>bouilloire</em>",
    desc: "Avec <strong>température réglable</strong> et un <strong>bec col de cygne</strong> pour verser avec précision.",
    specs: ["Température réglable", "Bec col de cygne", "Format compact", "Maintien au chaud"],
    link: "https://www.google.com/search?q=bouilloire+col+de+cygne+temp%C3%A9rature+r%C3%A9glable",
    accent: "#ff9b54", accent2: "#ffd36b",
  },
  { group: [
    {
      emoji: "✨",
      visual: "cards",
      tag: "Pour collectionner",
      title: "Des cartes <em>Pokémon</em>",
      desc: "Des boosters, un coffret… <strong>tout me fait plaisir</strong>.",
      link: "https://www.google.com/search?q=cartes+Pok%C3%A9mon+booster",
      accent: "#ffd84d", accent2: "#ff5ec4",
    },
    {
      emoji: "🗃️",
      visual: "box",
      tag: "Pour mes cartes Pokémon",
      title: "Une boîte de rangement <em>Pokémon</em>",
      desc: "<strong>Compartimentée</strong>, si possible avec <strong>séparateurs</strong>, pour protéger et classer mes cartes Pokémon.",
      link: "https://www.google.com/search?q=bo%C3%AEte+rangement+cartes+Pok%C3%A9mon+s%C3%A9parateurs",
      accent: "#ff5ec4", accent2: "#ffd84d",
    },
  ] },
  { group: [
    {
      emoji: "👝",
      visual: "pouch",
      tag: "Pour les week-ends",
      title: "Une trousse de <em>toilette</em>",
      desc: "<strong>Compacte</strong>, mais avec assez de place pour les produits d'un week-end.",
      link: "https://www.google.com/search?q=trousse+de+toilette+compacte",
      accent: "#5ee0c8", accent2: "#7bb8ff",
    },
    {
      emoji: "💧",
      visual: "bottle",
      tag: "Pour tous les jours",
      title: "Une <em>gourde</em>",
      desc: "<strong>Légère</strong>, <strong>étanche</strong> et facile à glisser dans un sac.",
      link: "https://www.google.com/search?q=gourde+l%C3%A9g%C3%A8re+%C3%A9tanche",
      accent: "#4cc3ff", accent2: "#5ee0c8",
    },
  ] },
  { group: [
    {
      emoji: "🔋",
      visual: "battery",
      tag: "Pour ne jamais être à plat",
      title: "Une batterie <em>externe</em>",
      desc: "<strong>10 000 à 20 000 mAh</strong>, en <strong>USB-C</strong> avec <strong>recharge rapide</strong>.",
      link: "https://www.google.com/search?q=batterie+externe+20000mAh+USB-C+charge+rapide",
      accent: "#b6ff5e", accent2: "#3ee6a8",
    },
    {
      emoji: "🎟️",
      visual: "giftcard",
      tag: "Pour me faire plaisir",
      title: "Une carte <em>cadeau</em>",
      desc: "<strong>Decathlon</strong> ou <strong>Uniqlo</strong> (ou les deux 😉).",
      links: [
        ["Decathlon →", "https://www.google.com/search?q=carte+cadeau+Decathlon"],
        ["Uniqlo →", "https://www.google.com/search?q=carte+cadeau+Uniqlo"],
      ],
      accent: "#ff6b6b", accent2: "#4c9bff",
    },
  ] },
];
