export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  wide?: boolean;
};

export type ProjectSection = {
  heading: string;
  body?: string;
  images?: ProjectImage[];
};

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  index: string;
  year: string;
  category: string;
  client: string;
  tagline: string;
  description: string;
  accent: string;
  accentSoft: string;
  theme: "dark" | "light";
  cover: ProjectImage;
  thumbnail: ProjectImage;
  services: string[];
  overview: string;
  highlights: ProjectImage[];
  process?: ProjectSection;
  visualSystem: {
    heading: string;
    body: string;
    typography?: ProjectImage;
    colour?: ProjectImage;
    logo?: ProjectImage;
  };
  finalWork: ProjectImage[];
  takeaway: string;
};

export const projects: Project[] = [
  {
    slug: "vanta",
    title: "Vanta",
    shortTitle: "Vanta",
    index: "01",
    year: "2025",
    category: "Sportswear · Brand Identity",
    client: "Vanta",
    tagline: "Wear Your Ground.",
    description:
      "A full identity and product system for an urban-performance sportswear label — built for everyday motion, not the podium.",
    accent: "#c6ff00",
    accentSoft: "rgba(198,255,0,0.12)",
    theme: "dark",
    cover: {
      src: "/work/vanta/hero-black-sneaker.webp",
      alt: "Vanta black sneaker with electric lime V-mark against a black studio backdrop",
    },
    thumbnail: {
      src: "/work/vanta/hero-white-sneaker.webp",
      alt: "Vanta white sneaker, side profile, studio lighting",
    },
    services: [
      "Brand Identity",
      "Logo & Wordmark System",
      "Art Direction",
      "Packaging & Product Design",
      "Campaign Direction",
      "UI/UX — E-commerce",
    ],
    overview:
      "Vanta is an urban-performance sportswear brand built on one idea: strength doesn't need to shout. Loomie developed the full identity — wordmark, V symbol, colour system and typography — then carried it across footwear, apparel, packaging and a full digital storefront concept. The brief called for a bold, unapologetic voice built for students and everyday life, so every surface, from a shoebox to a homepage, had to feel like it belonged to the same confident, no-pretending brand.",
    highlights: [
      {
        src: "/work/vanta/lifestyle-bundle.webp",
        alt: "Vanta full product bundle — duffel bag, sneakers and hoodie styled together in black",
        wide: true,
      },
      {
        src: "/work/vanta/hero-white-sneaker.webp",
        alt: "Vanta white and black sneaker, 'Engineered for Motion' campaign line",
      },
      {
        src: "/work/vanta/hero-black-sneaker-2.webp",
        alt: "Vanta all-black sneaker with lime accent, 'Engineered for Motion' campaign line",
      },
      {
        src: "/work/vanta/duffel-bag.webp",
        alt: "Vanta black duffel bag with lime V-mark, 'Utility in Motion' campaign",
      },
      {
        src: "/work/vanta/hoodie.webp",
        alt: "Vanta black hoodie flat lay, 'Built for Daily Performance' campaign",
      },
      {
        src: "/work/vanta/joggers.webp",
        alt: "Vanta black joggers flat lay, 'Ready for Everyday Motion' campaign",
      },
    ],
    process: {
      heading: "Design & Creative Process",
      body: "Every silhouette began as a hand sketch — three-quarter, side and sole views — annotated for structure, brand placement and material. Logo refinements and colourway studies were run in parallel so the mark and the product could be resolved together, not bolted on afterward.",
      images: [
        {
          src: "/work/vanta/process-sketch-footwear.webp",
          alt: "Vanta footwear concept development sheet — sketches, logo refinements, silhouette and colourway studies",
          wide: true,
        },
      ],
    },
    visualSystem: {
      heading: "Visual System",
      body: "A single strong wordmark, a sharp V symbol that reads at any scale, and a disciplined palette: black and off-white lead, electric lime signs key moments, purple and orange stay reserved for seasonal drops.",
      typography: {
        src: "/work/vanta/typography-system.webp",
        alt: "Vanta typography system — League Gothic Extra Bold headline type and hierarchy",
      },
      logo: {
        src: "/work/vanta/logo-system.webp",
        alt: "Vanta logo system — primary wordmark, V symbol, lockup, reverse and monochrome variants",
      },
      colour: {
        src: "/work/vanta/colour-system.webp",
        alt: "Vanta colour system — black, off-white, electric lime core palette with purple and orange seasonal accents",
      },
    },
    finalWork: [
      {
        src: "/work/vanta/social-campaign-grid.webp",
        alt: "Vanta social campaign grid — six posts across footwear and apparel",
        wide: true,
      },
      {
        src: "/work/vanta/final-pair-grass.webp",
        alt: "Vanta black and white sneaker pair styled together outdoors on grass",
        wide: true,
      },
      {
        src: "/work/vanta/ecommerce-ui-mockup.webp",
        alt: "Vanta Online — e-commerce homepage UI concept with new arrivals grid",
        wide: true,
      },
      {
        src: "/work/vanta/closing-wordmark.webp",
        alt: "Vanta wordmark and V symbol on black, 'Wear Your Ground' tagline",
        wide: true,
      },
    ],
    takeaway:
      "Vanta proves a performance brand can be built on restraint — one mark, one voice, one ground rule: everything either moves with the body or gets cut.",
  },
  {
    slug: "mellow",
    title: "Mellow",
    shortTitle: "Mellow",
    index: "02",
    year: "2025",
    category: "Beverage · Packaging & Brand System",
    client: "Mellow",
    tagline: "Three States. One Brand.",
    description:
      "A functional sparkling drink built around mood, not just flavour — one wordmark stretched across three distinct emotional states.",
    accent: "#f4c430",
    accentSoft: "rgba(244,196,48,0.14)",
    theme: "light",
    cover: {
      src: "/work/mellow/three-states-hero.webp",
      alt: "Three Mellow cans — Focus, Reset and Unwind — lit in black, green and purple",
    },
    thumbnail: {
      src: "/work/mellow/five-cans-flying.webp",
      alt: "Five Mellow cans arranged mid-air on a black background",
    },
    services: [
      "Brand Strategy",
      "Naming & Verbal Identity",
      "Logo & Mark",
      "Packaging Design",
      "Visual System",
      "Product Photography Direction",
    ],
    overview:
      "Mellow is a functional sparkling drink built on a simple insight: people don't just want a flavour, they want a feeling. Loomie split the range into three states — Focus, Reset and Unwind — and gave each its own colour, botanical illustration and functional ingredient story, unified by a single lightning-mark wordmark. The result is one brand that can occupy a gym bag, a desk and a nightstand without ever feeling like three different products.",
    highlights: [
      {
        src: "/work/mellow/cans-on-ice-beach.webp",
        alt: "Mellow Focus, Reset and Unwind cans chilling on ice at a beach setting",
        wide: true,
      },
      {
        src: "/work/mellow/focus-yuzu-ginger.webp",
        alt: "Mellow Focus — yuzu and ginger illustration beside the black can, 'Clarity. Concentration.'",
      },
      {
        src: "/work/mellow/reset-lime-basil.webp",
        alt: "Mellow Reset — lime and basil can styled among fresh limes and basil leaves",
      },
      {
        src: "/work/mellow/unwind-blackberry-lavender.webp",
        alt: "Mellow Unwind — blackberry and lavender illustration beside the purple can, 'Calm. Relax. Let Go.'",
      },
      {
        src: "/work/mellow/hand-holding-cans.webp",
        alt: "Hand holding Mellow Focus and Reset cans outdoors on grass",
      },
      {
        src: "/work/mellow/function-with-purpose.webp",
        alt: "Mellow 'Function with Purpose' — can and packaging box on black",
      },
    ],
    process: {
      heading: "Design & Creative Process",
      body: "The can was drawn front, side and back before a single flavour was named — logo placement, the vertical wordmark for shelf visibility, and a clear information hierarchy for nutrition and ingredients were solved as one system, then applied across all three states.",
      images: [
        {
          src: "/work/mellow/process-sketch-can.webp",
          alt: "Mellow packaging concept development sheet — front, side and back can views with logo and layout studies",
          wide: true,
        },
      ],
    },
    visualSystem: {
      heading: "Visual System",
      body: "A lowercase wordmark carries a hand-drawn lightning motif — energy rendered calmly. Each state gets its own colour and botanical mark: gold for Focus, sage for Reset, violet for Unwind, all built on the same clean structure.",
      logo: {
        src: "/work/mellow/function-with-purpose.webp",
        alt: "Mellow wordmark and lightning motif on a can, black colourway",
      },
      colour: {
        src: "/work/mellow/five-cans-flying.webp",
        alt: "Mellow three-state colour system shown across five cans — black, sage and violet",
      },
    },
    finalWork: [
      {
        src: "/work/mellow/label-dieline.webp",
        alt: "Mellow Focus full label die-line — nutrition facts, ingredients and barcode panel",
        wide: true,
      },
      {
        src: "/work/mellow/cans-on-ice-beach.webp",
        alt: "Mellow cans on ice at the beach, full lifestyle campaign shot",
        wide: true,
      },
      {
        src: "/work/mellow/hand-holding-cans.webp",
        alt: "Mellow Focus and Reset held together outdoors",
        wide: true,
      },
    ],
    takeaway:
      "Mellow shows a single brand can hold three different moods without fracturing — the system does the work, so every can still feels unmistakably Mellow.",
  },
  {
    slug: "ping",
    title: "Ping",
    shortTitle: "Ping",
    index: "03",
    year: "2026",
    category: "Social App · Brand & Product Design",
    client: "Ping",
    tagline: "Getting Out of the Group Chat.",
    description:
      "A social-planning platform and full app identity — helping friends turn endless group-chat maybes into confirmed plans, in one shared space.",
    accent: "#ff3b30",
    accentSoft: "rgba(255,59,48,0.14)",
    theme: "dark",
    cover: {
      src: "/work/ping/hero-connect-share-discover.webp",
      alt: "Ping logo and app screens on two phones with the tagline Connect, Share, Discover",
    },
    thumbnail: {
      src: "/work/ping/brand-intro-out-of-group-chat.webp",
      alt: "Ping wordmark and 3D icon mark with the line Getting Out of the Group Chat",
    },
    services: [
      "Brand Strategy",
      "Logo & Icon System",
      "Product / UI Design",
      "Design System",
      "App Onboarding",
      "Marketing & Campaign Design",
    ],
    overview:
      "Ping is a social-planning platform built on a simple frustration: group chats make plans, they don't make them happen. Loomie designed the full brand — a coral-red speech-mark 'P' icon, type system and dark/light identity — then carried it into a working product: chat, community discovery, notifications and profile, plus the onboarding flow, marketing site and campaign graphics that get people to download it. Every surface, from the app icon to the landing page, had to make one promise feel true: stop planning, start going.",
    highlights: [
      {
        src: "/work/ping/problem-group-chats-dont-decide.webp",
        alt: "Dark slide showing scattered group-chat messages funnelling into the Ping mark, headlined Group Chats Make Plans, They Don't Make Them Happen",
        wide: true,
      },
      {
        src: "/work/ping/app-screens-social-made-simple.webp",
        alt: "Three Ping app screens — Explore, Chat and Notifications — under the line Social Made Simple",
      },
      {
        src: "/work/ping/dark-ui-app-screens.webp",
        alt: "Four dark-mode Ping app screens — feed, chat, explore and profile",
      },
      {
        src: "/work/ping/onboarding-five-steps.webp",
        alt: "Five-step Ping onboarding flow — discover communities, start conversations, share updates, stay in the loop, build your profile",
        wide: true,
      },
    ],
    process: {
      heading: "Design & Creative Process",
      body: "The product was mapped as five core jobs — discover, connect, share, stay updated, build a profile — before a single screen was drawn, so the icon system, navigation and onboarding copy could all point at the same five verbs. Screens were then built dark-first, with a light mode derived from the same tokens.",
      images: [
        {
          src: "/work/ping/onboarding-five-steps.webp",
          alt: "Ping onboarding concept sheet — five steps with icons, phone screens and supporting copy",
          wide: true,
        },
      ],
    },
    visualSystem: {
      heading: "Visual System",
      body: "A coral-red speech-mark 'P' carries the whole system — chat and connection, literally drawn into the logo. Deep navy and coral run across light and dark modes with a strict two-colour rule, set in Montserrat Bold for a voice that reads as fast and direct as the app itself.",
      logo: {
        src: "/work/ping/brand-system-overview.webp",
        alt: "Ping brand system sheet — primary logo, dark mode lockup, icon mark, colour system, typography and app-icon usage",
      },
      typography: {
        src: "/work/ping/icon-system.webp",
        alt: "Ping icon system — light and dark app icons, notification badge, splash screen and home-screen tile",
      },
      colour: {
        src: "/work/ping/brand-system-social-app.webp",
        alt: "Ping social app brand system — colour palette, core feature icons, phone UI and brand statement",
      },
    },
    finalWork: [
      {
        src: "/work/ping/campaign-social-grid.webp",
        alt: "Ping campaign grid — Connect Faster, app icon, Stay in the Loop, Share Better, Discover More social tiles",
        wide: true,
      },
      {
        src: "/work/ping/brand-system-social-app.webp",
        alt: "Ping social app brand system — full colour, UI and messaging overview",
        wide: true,
      },
      {
        src: "/work/ping/landing-page-connect-real-time.webp",
        alt: "Ping marketing website — Connect in Real Time hero with app-store download buttons and feature grid",
        wide: true,
      },
    ],
    takeaway:
      "Ping turns a scattered group chat into a single decision — one mark, one flow, one shared space where plans actually get made.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProject(slug: string): Project {
  const idx = projects.findIndex((p) => p.slug === slug);
  return projects[(idx + 1) % projects.length];
}
