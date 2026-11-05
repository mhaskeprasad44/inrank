const fs = require('fs');

// We will construct the master corporate.css
const baseHead = `/* ============================================================
   INRANK 2.0 — Corporate Stylesheet
   Architecture derived from Vinove.com (Inter, Emerald Green, Slate Navy)
   ============================================================ */

:root {
  --terra: #009d49;
  --terra-hover: #00b755;
  --terra-hero: #00b755;
  --ink: #081424;
  --paper: #faf9f5;
  --stone: #f0eee6;
  --line: rgba(14, 19, 32, 0.09);
  --muted: #556980;
  --surface-2: #f4f6f8;
  --white: #ffffff;
  --navy: #081424;
  --navy-2: #102138;
  --navy-3: #182d4b;
  --text-strong: #081424;
  --text-body: #334155;
  --border-subtle: rgba(14, 19, 32, 0.08);

  --max: 1400px;
  --gutter: clamp(1.2rem, 3vw, 2.5rem);
  --nav-h: 80px;

  --r-full: 9999px;
  --font: Inter, system-ui, -apple-system, sans-serif;
  --ease: cubic-bezier(.22, 1, .36, 1);
  --ease-back: cubic-bezier(.34, 1.4, .64, 1);
  --dur-fast: 160ms;
  --dur-base: 260ms;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  padding: 0;
  color: var(--ink);
  background: var(--paper);
  font-family: var(--font);
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
body.menu-open { overflow: hidden; }
a { color: inherit; text-decoration: none; }
img { display: block; max-width: 100%; }
button { font: inherit; }
h1, h2, h3, h4 { text-wrap: balance; margin: 0; }
p { text-wrap: pretty; margin: 0; }

.skip-link {
  position: fixed;
  left: 1rem;
  top: -4rem;
  z-index: 1000;
  padding: .75rem 1rem;
  background: var(--white);
  color: var(--ink);
  border-radius: 8px;
  font-weight: 700;
  box-shadow: 0 4px 14px rgba(0,0,0,0.2);
  transition: top .2s;
}
.skip-link:focus { top: 1rem; }

.shell {
  width: min(100%, 1400px) !important;
  max-width: 1400px !important;
  margin-inline: auto;
  padding-inline: var(--gutter);
}

main { overflow: clip; }

/* ── Typography standards (Strict Lifetime Rule: NO PILLS, NO GREEN DOTS) ── */
.section-kicker,
.eyebrow,
.eyebrow-pill,
.kicker,
.cap-badge,
.cap-badge-wrap,
.eyebrow-badge {
  display: inline-block !important;
  background: none !important;
  border: none !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  padding: 0 !important;
  margin: 0 0 1rem !important;
  color: #009d49 !important;
  font-size: 0.75rem !important;
  font-weight: 800 !important;
  letter-spacing: 0.15em !important;
  text-transform: uppercase !important;
  line-height: 1.2 !important;
}

.section-kicker::before,
.section-kicker::after,
.eyebrow::before,
.eyebrow::after,
.eyebrow-pill::before,
.eyebrow-pill::after,
.kicker::before,
.kicker::after {
  display: none !important;
  content: none !important;
}

.section-title {
  font-size: clamp(2rem, 3.8vw, 3.5rem);
  font-weight: 750;
  line-height: 1.1;
  letter-spacing: -0.04em;
  color: var(--text-strong);
  margin-bottom: 1rem;
}

.section-sub,
.section-copy {
  font-size: 1.05rem;
  line-height: 1.6;
  color: #64748b;
  max-width: 38rem;
  margin: 0;
}

/* ══════════════════════════════════════════
   SECTION 1: HERO SECTION (.image-hero)
══════════════════════════════════════════ */
.hero.image-hero {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 90vh;
  padding-top: calc(var(--nav-h) + 2rem);
  padding-bottom: clamp(4rem, 8vh, 6rem);
  color: #ffffff;
  background: #081424;
  overflow: hidden;
  isolation: isolate;
}

.hero-media {
  position: absolute;
  inset: 0;
  z-index: -2;
  overflow: hidden;
  background: radial-gradient(circle at 75% 25%, rgba(0, 157, 73, 0.35) 0%, transparent 55%),
              radial-gradient(circle at 20% 80%, rgba(16, 33, 56, 0.85) 0%, transparent 60%),
              #081424;
}

.hero-shade {
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(90deg, rgba(8,20,36,0.92) 0%, rgba(8,20,36,0.70) 50%, rgba(8,20,36,0.25) 100%),
              linear-gradient(0deg, rgba(8,20,36,0.7) 0%, transparent 50%);
}

.hero-content {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(360px, 520px);
  gap: clamp(2.5rem, 5vw, 5rem);
  align-items: center;
}

@media (max-width: 991px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

.hero-copy {
  max-width: 860px;
  min-width: 0;
}

.hero-copy .eyebrow {
  color: #00bf5d !important;
  margin-bottom: 1.25rem !important;
}

.hero-title.display {
  margin: 0;
  font-size: clamp(2.6rem, 5vw, 4.8rem);
  font-weight: 850;
  letter-spacing: -0.045em;
  line-height: 1.05;
  color: #ffffff;
}

.hero-accent {
  color: #00bf5d;
}

.hero-copy .lede {
  margin: 1.5rem 0 0;
  max-width: 38rem;
  font-size: clamp(1.05rem, 1.25vw, 1.18rem);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.82);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2.25rem;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0.8rem 1.6rem;
  border-radius: 12px;
  font-size: 0.9375rem;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: all var(--dur-fast) var(--ease);
}

.button.primary {
  color: var(--ink);
  background: #ffffff;
  border: 1px solid #ffffff;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
}

.button.primary:hover {
  background: var(--terra);
  border-color: var(--terra);
  color: #ffffff;
  transform: translateY(-2px);
}

.button.secondary {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.24);
  backdrop-filter: blur(8px);
}

.button.secondary:hover {
  background: rgba(255, 255, 255, 0.16);
  border-color: #ffffff;
  transform: translateY(-2px);
}

/* Hero Right Visual Showcase & Live Badges */
.hero-visual-card {
  position: relative !important;
  width: 100% !important;
  max-width: 520px !important;
  border-radius: 28px !important;
  padding: 10px !important;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05)) !important;
  border: 1px solid rgba(255, 255, 255, 0.18) !important;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35) !important;
  margin-left: auto !important;
}

.hero-visual-frame {
  position: relative !important;
  width: 100% !important;
  height: 420px !important;
  border-radius: 20px !important;
  overflow: hidden !important;
}

.hero-visual-img {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  object-position: center !important;
  display: block !important;
}

.hero-visual-overlay {
  position: absolute !important;
  inset: 0 !important;
  background: linear-gradient(180deg, rgba(8, 20, 36, 0.08) 0%, rgba(8, 20, 36, 0.65) 100%) !important;
  pointer-events: none !important;
}

.hero-stat-badge {
  position: absolute !important;
  display: flex !important;
  align-items: center !important;
  gap: 12px !important;
  padding: 12px 18px !important;
  border-radius: 16px !important;
  background: rgba(8, 20, 36, 0.90) !important;
  backdrop-filter: blur(20px) !important;
  -webkit-backdrop-filter: blur(20px) !important;
  border: 1px solid rgba(255, 255, 255, 0.18) !important;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.4) !important;
  color: #ffffff !important;
  z-index: 5 !important;
  animation: floatBadge 4s ease-in-out infinite alternate !important;
}

.hero-stat-badge strong {
  display: block !important;
  font-size: 0.95rem !important;
  font-weight: 800 !important;
  color: #ffffff !important;
  line-height: 1.2 !important;
}

.hero-stat-badge small {
  display: block !important;
  font-size: 0.72rem !important;
  color: #94a3b8 !important;
  margin-top: 2px !important;
}

.stat-badge-dot {
  width: 10px !important;
  height: 10px !important;
  border-radius: 50% !important;
  background: #00bf5d !important;
  box-shadow: 0 0 12px #00bf5d !important;
  flex-shrink: 0 !important;
}

.stat-badge-dot--blue {
  background: #38bdf8 !important;
  box-shadow: 0 0 12px #38bdf8 !important;
}

.stat-badge-dot--amber {
  background: #fbbf24 !important;
  box-shadow: 0 0 12px #fbbf24 !important;
}

.hero-stat-badge--top {
  top: 24px !important;
  left: -24px !important;
}

.hero-stat-badge--mid {
  top: 48% !important;
  right: -24px !important;
  animation-delay: -2s !important;
}

.hero-stat-badge--bot {
  bottom: 24px !important;
  left: -16px !important;
  animation-delay: -1s !important;
}

@keyframes floatBadge {
  0% { transform: translateY(0); }
  100% { transform: translateY(-8px); }
}

@media (max-width: 991px) {
  .hero-visual-card {
    max-width: 100% !important;
    margin-top: 2rem !important;
  }
  .hero-stat-badge--top { left: 10px !important; }
  .hero-stat-badge--mid { right: 10px !important; }
  .hero-stat-badge--bot { left: 10px !important; }
}

/* ══════════════════════════════════════════
   SECTION 2: MARQUEE BAND (CLIENT LOGOS)
══════════════════════════════════════════ */
.marquee-band {
  padding: 3rem 0 !important;
  background: #ffffff !important;
  border-bottom: 1px solid rgba(8, 20, 36, 0.08) !important;
  overflow: hidden !important;
}

.marquee-title {
  text-align: center !important;
  font-size: 0.75rem !important;
  font-weight: 800 !important;
  letter-spacing: 0.16em !important;
  text-transform: uppercase !important;
  color: #94a3b8 !important;
  margin: 0 0 2rem !important;
}

.marquee-track-wrap {
  overflow: hidden !important;
  display: flex !important;
  width: 100% !important;
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent) !important;
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent) !important;
}

.marquee-track {
  display: flex !important;
  align-items: center !important;
  gap: 3.5rem !important;
  animation: marqueeScroll 28s linear infinite !important;
  width: max-content !important;
}

.marquee-track:hover {
  animation-play-state: paused !important;
}

.client-logo-item {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  flex-shrink: 0 !important;
  height: 48px !important;
  width: 140px !important;
}

.client-logo-item img {
  max-height: 38px !important;
  max-width: 135px !important;
  width: auto !important;
  height: auto !important;
  object-fit: contain !important;
  filter: grayscale(100%) opacity(0.7) !important;
  transition: all 0.25s ease !important;
}

.client-logo-item:hover img {
  filter: grayscale(0%) opacity(1) !important;
  transform: scale(1.05) !important;
}

@keyframes marqueeScroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* ══════════════════════════════════════════
   SECTION 3: OPERATING PHILOSOPHY (MANIFESTO)
══════════════════════════════════════════ */
.manifesto-section {
  padding: clamp(4.5rem, 7vw, 6.5rem) 0 !important;
  background: #f8fafc !important;
  border-bottom: 1px solid rgba(8, 20, 36, 0.07) !important;
}

.manifesto-split {
  display: grid !important;
  grid-template-columns: 1fr 1fr !important;
  gap: 4rem !important;
  align-items: start !important;
  margin-top: 1.75rem !important;
}

@media (max-width: 960px) {
  .manifesto-split {
    grid-template-columns: 1fr !important;
    gap: 2.5rem !important;
  }
}

.manifesto-left {
  max-width: 520px !important;
}

.manifesto-h2 {
  font-size: clamp(2rem, 3.4vw, 2.85rem) !important;
  font-weight: 850 !important;
  letter-spacing: -0.035em !important;
  line-height: 1.15 !important;
  color: #081424 !important;
  margin: 0.75rem 0 1.25rem !important;
}

.manifesto-accent {
  color: #009d49 !important;
}

.manifesto-lede {
  font-size: 1.05rem !important;
  font-weight: 550 !important;
  color: #334155 !important;
  line-height: 1.6 !important;
  margin-bottom: 1rem !important;
}

.manifesto-body {
  font-size: 0.92rem !important;
  color: #64748b !important;
  line-height: 1.65 !important;
  margin: 0 !important;
}

.manifesto-right {
  display: flex !important;
  flex-direction: column !important;
  gap: 1.25rem !important;
}

.manifesto-point {
  display: flex !important;
  align-items: flex-start !important;
  gap: 1.25rem !important;
  padding: 1.6rem 1.5rem !important;
  background: #ffffff !important;
  border: 1px solid rgba(8, 20, 36, 0.08) !important;
  border-radius: 18px !important;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.03) !important;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease !important;
}

.manifesto-point:hover {
  transform: translateY(-3px) !important;
  border-color: #009d49 !important;
  box-shadow: 0 12px 32px rgba(0, 157, 73, 0.08) !important;
}

.point-num {
  width: 44px !important;
  height: 44px !important;
  border-radius: 12px !important;
  background: rgba(0, 157, 73, 0.09) !important;
  color: #009d49 !important;
  font-family: monospace !important;
  font-size: 1.1rem !important;
  font-weight: 850 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  flex-shrink: 0 !important;
}

.point-title {
  font-size: 1.1rem !important;
  font-weight: 800 !important;
  color: #081424 !important;
  letter-spacing: -0.015em !important;
  margin: 0 0 6px !important;
}

.point-desc {
  font-size: 0.86rem !important;
  color: #64748b !important;
  line-height: 1.55 !important;
  margin: 0 !important;
}

/* ══════════════════════════════════════════
   SECTION 4: 4-STAGE OPERATING METHODOLOGY
   ══════════════════════════════════════════ */
.operating {
  padding: clamp(5rem, 8vw, 7rem) 0 !important;
  background: #081424 !important;
  color: #ffffff !important;
  position: relative !important;
}

.operating-head {
  display: grid !important;
  grid-template-columns: 1.3fr 1fr !important;
  gap: 3rem !important;
  align-items: flex-end !important;
  margin-bottom: 3.5rem !important;
}

@media (max-width: 960px) {
  .operating-head {
    grid-template-columns: 1fr !important;
    gap: 1.5rem !important;
  }
}

.operating .section-kicker {
  color: #00bf5d !important;
  margin-bottom: 0.75rem !important;
  display: block !important;
}

.operating .section-title {
  color: #ffffff !important;
  margin-bottom: 0 !important;
}

.operating .section-copy {
  color: #94a3b8 !important;
  font-size: 1.05rem !important;
  line-height: 1.6 !important;
  margin: 0 !important;
}

.operating-model {
  display: grid !important;
  grid-template-columns: repeat(4, 1fr) !important;
  gap: 1.25rem !important;
}

@media (max-width: 1024px) {
  .operating-model {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

@media (max-width: 640px) {
  .operating-model {
    grid-template-columns: 1fr !important;
  }
}

.model-step {
  padding: 2rem 1.6rem !important;
  background: rgba(255, 255, 255, 0.04) !important;
  border: 1px solid rgba(255, 255, 255, 0.08) !important;
  border-radius: 18px !important;
  display: flex !important;
  flex-direction: column !important;
  transition: all 0.3s ease !important;
}

.model-step:hover {
  transform: translateY(-4px) !important;
  background: rgba(255, 255, 255, 0.07) !important;
  border-color: #009d49 !important;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.35) !important;
}

.model-step .num {
  font-size: 0.72rem !important;
  font-weight: 850 !important;
  letter-spacing: 0.12em !important;
  text-transform: uppercase !important;
  color: #00bf5d !important;
  margin-bottom: 1rem !important;
  display: block !important;
}

.model-step h3 {
  font-size: 1.15rem !important;
  font-weight: 800 !important;
  color: #ffffff !important;
  line-height: 1.3 !important;
  letter-spacing: -0.015em !important;
  margin: 0 0 0.85rem !important;
}

.model-step p {
  font-size: 0.85rem !important;
  color: #94a3b8 !important;
  line-height: 1.55 !important;
  margin: 0 0 1.25rem !important;
}

.stage-deliverables {
  list-style: none !important;
  padding: 0 !important;
  margin: auto 0 0 !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 8px !important;
  padding-top: 1rem !important;
  border-top: 1px solid rgba(255, 255, 255, 0.08) !important;
}

.stage-deliverables li {
  font-size: 0.78rem !important;
  color: #cbd5e1 !important;
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
  margin: 0 !important;
}

.stage-deliverables li::before {
  content: '✓' !important;
  color: #00bf5d !important;
  font-weight: 850 !important;
  font-size: 0.85rem !important;
}

/* ══════════════════════════════════════════
   SECTION 5: CAPABILITIES & 27 SERVICES ECOSYSTEM
══════════════════════════════════════════ */
.capabilities-section {
  padding: clamp(5rem, 8vw, 7rem) 0 !important;
  background: #ffffff !important;
}

/* 4-Pillar Architectural Benchmark Strip (Ultra Clean Enterprise Cards - NO GREEN DOTS, NO PILLS) */
.pillars-strip {
  display: grid !important;
  grid-template-columns: repeat(4, 1fr) !important;
  gap: 1.25rem !important;
  margin: 2.5rem 0 3.5rem !important;
}

@media (max-width: 1024px) {
  .pillars-strip {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 1rem !important;
  }
}

@media (max-width: 640px) {
  .pillars-strip {
    grid-template-columns: 1fr !important;
  }
}

.pillar-tab {
  position: relative !important;
  padding: 1.75rem 1.6rem !important;
  background: #ffffff !important;
  border: 1px solid rgba(8, 20, 36, 0.08) !important;
  border-radius: 16px !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: space-between !important;
  box-shadow: 0 4px 18px rgba(8, 20, 36, 0.03) !important;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
  cursor: pointer !important;
  overflow: hidden !important;
  text-decoration: none !important;
}

.pillar-tab::before {
  content: '' !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  height: 3px !important;
  background: transparent !important;
  transition: background 0.3s ease !important;
}

.pillar-tab::after {
  display: none !important;
  content: none !important;
}

.pillar-tab:hover {
  transform: translateY(-4px) !important;
  border-color: rgba(0, 157, 73, 0.35) !important;
  box-shadow: 0 16px 36px rgba(8, 20, 36, 0.07) !important;
}

.pillar-tab:hover::before {
  background: rgba(0, 157, 73, 0.5) !important;
}

.pillar-tab.active {
  background: #ffffff !important;
  border-color: rgba(0, 157, 73, 0.4) !important;
  box-shadow: 0 12px 32px rgba(0, 157, 73, 0.08) !important;
}

.pillar-tab.active::before {
  background: #009d49 !important;
}

.pillar-tab-head {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  margin-bottom: 1.25rem !important;
}

.pillar-tab-tag {
  font-size: 0.72rem !important;
  font-weight: 800 !important;
  letter-spacing: 0.14em !important;
  text-transform: uppercase !important;
  color: #64748b !important;
}

.pillar-tab.active .pillar-tab-tag {
  color: #009d49 !important;
}

.pillar-tab-stat {
  font-size: 1.65rem !important;
  font-weight: 900 !important;
  color: #081424 !important;
  letter-spacing: -0.03em !important;
  font-variant-numeric: tabular-nums !important;
  line-height: 1 !important;
}

.pillar-tab.active .pillar-tab-stat {
  color: #009d49 !important;
}

.pillar-tab-name {
  font-size: 1.12rem !important;
  font-weight: 800 !important;
  color: #081424 !important;
  letter-spacing: -0.02em !important;
  margin: 0 0 0.4rem !important;
  line-height: 1.3 !important;
}

.pillar-tab-sub {
  font-size: 0.85rem !important;
  color: #64748b !important;
  margin: 0 !important;
  line-height: 1.4 !important;
  font-weight: 500 !important;
}

/* 8 Core Services Grid & Cards */
.services-grid {
  display: grid !important;
  grid-template-columns: repeat(4, 1fr) !important;
  gap: 1.5rem !important;
}

@media (max-width: 1200px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

@media (max-width: 680px) {
  .services-grid {
    grid-template-columns: 1fr !important;
  }
}

.service-card {
  background: #ffffff !important;
  border: 1px solid rgba(8, 20, 36, 0.08) !important;
  border-radius: 20px !important;
  padding: 2rem 1.75rem !important;
  display: flex !important;
  flex-direction: column !important;
  position: relative !important;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
  box-shadow: 0 4px 16px rgba(8, 20, 36, 0.03) !important;
}

.service-card:hover {
  border-color: #009d49 !important;
  transform: translateY(-5px) !important;
  box-shadow: 0 18px 44px rgba(8, 20, 36, 0.08) !important;
}

.service-card-head {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  margin-bottom: 1.25rem !important;
}

.service-icon-wrap {
  width: 48px !important;
  height: 48px !important;
  border-radius: 12px !important;
  background: rgba(0, 157, 73, 0.08) !important;
  border: 1px solid rgba(0, 157, 73, 0.16) !important;
  color: #009d49 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  transition: all 0.3s ease !important;
}

.service-card:hover .service-icon-wrap {
  background: #009d49 !important;
  color: #ffffff !important;
  border-color: #009d49 !important;
  transform: scale(1.05) !important;
}

.service-idx {
  font-size: 0.72rem !important;
  font-weight: 800 !important;
  letter-spacing: 0.1em !important;
  color: #94a3b8 !important;
}

.service-card-title {
  font-size: 1.18rem !important;
  font-weight: 800 !important;
  color: #081424 !important;
  letter-spacing: -0.02em !important;
  margin: 0 0 0.75rem !important;
  line-height: 1.25 !important;
}

.service-card-text {
  font-size: 0.88rem !important;
  line-height: 1.6 !important;
  color: #64748b !important;
  margin: 0 0 1.25rem !important;
  flex: 1 !important;
}

.service-card-chips {
  display: flex !important;
  flex-wrap: wrap !important;
  gap: 6px !important;
  margin-bottom: 1.5rem !important;
}

.service-chip {
  font-size: 0.72rem !important;
  font-weight: 650 !important;
  padding: 4px 10px !important;
  border-radius: 999px !important;
  background: #f8fafc !important;
  color: #475569 !important;
  border: 1px solid rgba(8, 20, 36, 0.08) !important;
}

.service-card-link {
  display: inline-flex !important;
  align-items: center !important;
  gap: 6px !important;
  font-size: 0.84rem !important;
  font-weight: 750 !important;
  color: #009d49 !important;
  text-decoration: none !important;
  margin-top: auto !important;
  transition: all 0.2s ease !important;
}

.service-card-link svg {
  width: 14px !important;
  height: 14px !important;
  stroke: currentColor !important;
  stroke-width: 2.2 !important;
  fill: none !important;
  transition: transform 0.2s ease !important;
}

.service-card:hover .service-card-link {
  color: #00bf5d !important;
}

.service-card:hover .service-card-link svg {
  transform: translateX(4px) !important;
}

.services-footer-banner {
  margin-top: 3.5rem !important;
  padding: 2.25rem 2.5rem !important;
  background: #f8fafc !important;
  border: 1px solid rgba(8, 20, 36, 0.08) !important;
  border-radius: 20px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  gap: 2rem !important;
  flex-wrap: wrap !important;
}

.services-footer-banner strong {
  font-size: 1.2rem !important;
  font-weight: 850 !important;
  color: #081424 !important;
  display: block !important;
  margin-bottom: 4px !important;
}

.services-footer-banner p {
  font-size: 0.9rem !important;
  color: #64748b !important;
  margin: 0 !important;
}

.services-footer-actions {
  display: flex !important;
  align-items: center !important;
  gap: 12px !important;
  flex-wrap: wrap !important;
}

.services-footer-actions .button.secondary {
  background: #ffffff !important;
  color: #081424 !important;
  border: 1px solid rgba(8, 20, 36, 0.15) !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04) !important;
}

.services-footer-actions .button.secondary:hover {
  border-color: #009d49 !important;
  color: #009d49 !important;
}
`;

// Now read the rest of corporate.css starting from Section 6 Niches (around line 2880)
const currentCss = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');
const nichesIdx = currentCss.indexOf('SECTION 6: NICHES WE KNOW INSIDE-OUT');

if (nichesIdx === -1) {
  console.error('Could not find Section 6 anchor in corporate.css!');
  process.exit(1);
}

// Extract everything from Section 6 comment to the end of corporate.css
// The comment line starts right before SECTION 6
const cutStart = currentCss.lastIndexOf('/* ═══', nichesIdx);
const remainingCss = currentCss.substring(cutStart);

console.log('Base head length:', baseHead.length);
console.log('Remaining CSS length:', remainingCss.length);

const fullNewCss = baseHead + '\n\n' + remainingCss;

fs.writeFileSync('inrank2.0/css/corporate.css', fullNewCss, 'utf8');
console.log('Successfully wrote inrank2.0/css/corporate.css. Total length:', fullNewCss.length);
