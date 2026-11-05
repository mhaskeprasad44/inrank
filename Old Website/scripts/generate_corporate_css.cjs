const fs = require('fs');

const css = `/* ============================================================
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

  --max: 1200px;
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
  width: min(100%, var(--max));
  margin-inline: auto;
  padding-inline: var(--gutter);
}

main { overflow: clip; }

/* ── Typography standards ── */
.section-kicker,
.eyebrow {
  margin: 0 0 1.2rem;
  color: var(--terra);
  font-size: 0.74rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.section-title {
  font-size: clamp(2rem, 3.8vw, 3.5rem);
  font-weight: 750;
  line-height: 1.1;
  letter-spacing: -0.04em;
  color: var(--text-strong);
  margin-bottom: 1rem;
}

.section-copy {
  font-size: 1.05rem;
  line-height: 1.6;
  color: #64748b;
  max-width: 38rem;
}

/* ══════════════════════════════════════════
   HERO SECTION (.image-hero)
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
  grid-template-columns: minmax(0, 1fr) minmax(220px, 320px);
  gap: clamp(2.5rem, 6vw, 6rem);
  align-items: end;
}

@media (max-width: 960px) {
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
  color: var(--terra-hero);
  margin-bottom: 1.25rem;
}

.display {
  margin: 0;
  font-size: clamp(2.8rem, 5.5vw, 5.4rem);
  font-weight: 750;
  letter-spacing: -0.055em;
  line-height: 1.02;
  color: #ffffff;
}

.display em {
  font-style: normal;
  color: var(--terra-hero);
}

.lede {
  margin: 1.75rem 0 0;
  max-width: 36rem;
  font-size: clamp(1.05rem, 1.35vw, 1.2rem);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.82);
}

.button-row {
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

.hero-note {
  max-width: 19rem;
  margin: 0;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 0.82);
  font-size: 0.84rem;
  line-height: 1.55;
}

.hero-note span {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--terra-hero);
  font-size: 0.6875rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

/* ══════════════════════════════════════════
   CLIENT LOGO MARQUEE SCROLLER
══════════════════════════════════════════ */
.marquee-band {
  background: #ffffff;
  padding: 3rem 0;
  border-bottom: 1px solid var(--line);
  overflow: hidden;
}

.marquee-band-header {
  text-align: center;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #64748b;
  margin-bottom: 2rem;
}

.marquee-container {
  overflow: hidden;
  position: relative;
  mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
}

.marquee-track {
  display: flex;
  align-items: center;
  gap: 3.5rem;
  width: max-content;
  animation: marquee 35s linear infinite;
}

.marquee-track:hover {
  animation-play-state: paused;
}

.client-logo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 140px;
}

.client-logo-item img {
  max-height: 36px !important;
  max-width: 130px !important;
  width: auto !important;
  height: auto !important;
  object-fit: contain !important;
  filter: grayscale(100%) opacity(0.7);
  transition: filter var(--dur-fast), transform var(--dur-fast);
}

.client-logo-item:hover img {
  filter: grayscale(0%) opacity(1);
  transform: scale(1.05);
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* ══════════════════════════════════════════
   MANIFESTO SECTION
══════════════════════════════════════════ */
.manifesto {
  padding: clamp(5rem, 8vw, 8rem) 0;
  background: var(--paper);
}

.manifesto-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

@media (min-width: 960px) {
  .manifesto-grid {
    grid-template-columns: 1fr 1.35fr;
    gap: 5rem;
  }
}

.statement {
  font-size: clamp(1.8rem, 3.2vw, 3.2rem);
  font-weight: 750;
  line-height: 1.15;
  letter-spacing: -0.035em;
  color: var(--text-strong);
  margin-bottom: 2rem;
}

.statement span {
  color: var(--terra);
}

.manifesto-copy {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-size: 1rem;
  line-height: 1.65;
  color: #475569;
}

/* ══════════════════════════════════════════
   OPERATING MODEL (4-STAGE FRAMEWORK)
══════════════════════════════════════════ */
.operating {
  padding: clamp(5rem, 8vw, 8rem) 0;
  background: var(--navy);
  color: #ffffff;
}

.operating-head {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: flex-end;
  margin-bottom: 4rem;
}

@media (min-width: 960px) {
  .operating-head {
    grid-template-columns: 1.35fr 1fr;
  }
}

.operating-head .section-kicker {
  color: var(--terra-hero);
}

.operating-head .section-title {
  color: #ffffff;
}

.operating-head .section-copy {
  color: rgba(255, 255, 255, 0.75);
}

.operating-model {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding-top: 3rem;
}

@media (min-width: 640px) {
  .operating-model {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .operating-model {
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
  }
}

.model-step {
  padding: 1.5rem 2rem 1.5rem 0;
  border-right: 1px solid rgba(255, 255, 255, 0.10);
  display: flex;
  flex-direction: column;
}

@media (min-width: 1024px) {
  .model-step:not(:first-child) {
    padding-left: 2rem;
  }
  .model-step:last-child {
    border-right: none;
  }
}

.model-step .num {
  font-size: 0.75rem;
  font-weight: 800;
  color: var(--terra-hero);
  letter-spacing: 0.1em;
  margin-bottom: 1.75rem;
}

.model-step h3 {
  font-size: 1.45rem;
  font-weight: 750;
  color: #ffffff;
  letter-spacing: -0.02em;
  margin-bottom: 0.85rem;
}

.model-step p {
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.9375rem;
  line-height: 1.6;
}

/* ══════════════════════════════════════════
   CAPABILITIES / 4 PILLARS & 27 SERVICES
══════════════════════════════════════════ */
.capabilities-section {
  padding: clamp(5rem, 8vw, 8rem) 0;
  background: #ffffff;
}

.cap-rows {
  margin-top: 3.5rem;
  display: flex;
  flex-direction: column;
}

.cap-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding: 2.75rem 0;
  border-bottom: 1px solid var(--line);
  transition: background var(--dur-fast);
}

.cap-row:first-child {
  border-top: 1px solid var(--line);
}

@media (min-width: 960px) {
  .cap-row {
    grid-template-columns: 140px 200px 1fr 54px;
    align-items: center;
    gap: 2.5rem;
  }
}

.cap-outcome span {
  font-size: 0.6875rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--terra);
}

.cap-outcome strong {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--text-strong);
  letter-spacing: -0.02em;
}

.cap-badge {
  display: flex;
  align-items: center;
  gap: 12px;
}

.cap-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: var(--surface-2);
  border: 1px solid var(--line);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--terra);
  flex-shrink: 0;
}

.cap-icon svg {
  width: 22px;
  height: 22px;
}

.cap-badge strong {
  display: block;
  font-size: 0.9375rem;
  font-weight: 800;
  color: var(--text-strong);
}

.cap-badge span {
  display: block;
  font-size: 0.75rem;
  color: #64748b;
}

.cap-body h3 {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--text-strong);
  letter-spacing: -0.02em;
  margin-bottom: 0.5rem;
}

.cap-body p {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: #64748b;
  margin-bottom: 1rem;
}

.cap-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.cap-chip {
  font-size: 0.75rem;
  font-weight: 650;
  padding: 5px 13px;
  border-radius: var(--r-full);
  background: var(--surface-2);
  border: 1px solid var(--line);
  color: var(--text-strong);
}

.cap-action {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.15rem;
  color: var(--text-strong);
  text-decoration: none;
  transition: all var(--dur-fast);
}

.cap-row:hover .cap-action {
  background: var(--terra);
  color: #ffffff;
  border-color: var(--terra);
  transform: translate(2px, -2px);
}

/* ══════════════════════════════════════════
   PROOF & BIG STATS
══════════════════════════════════════════ */
.proof {
  padding: clamp(5rem, 8vw, 8rem) 0;
  background: var(--paper);
  border-top: 1px solid var(--line);
}

.proof-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.5rem;
}

@media (min-width: 960px) {
  .proof-grid {
    grid-template-columns: 1.2fr 1fr;
  }
}

.badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 2rem;
}

.badge-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  background: #ffffff;
  border: 1px solid var(--line);
  border-radius: 12px;
}

.badge-item--text strong {
  font-size: 0.875rem;
  color: var(--text-strong);
}

.badge-item--text span {
  font-size: 0.75rem;
  color: #64748b;
}

.proof-facts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
  border-radius: 16px;
  overflow: hidden;
}

.fact-item {
  padding: 2.25rem 2rem;
  background: #ffffff;
  display: flex;
  flex-direction: column;
}

.fact-item strong {
  font-size: clamp(2.2rem, 3.5vw, 3.2rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  color: var(--text-strong);
  line-height: 1.05;
  margin-bottom: 0.5rem;
}

.fact-item span {
  font-size: 0.875rem;
  line-height: 1.5;
  color: #64748b;
}

/* ══════════════════════════════════════════
   WORK SHOWCASE
══════════════════════════════════════════ */
.work-section {
  padding: clamp(5rem, 8vw, 8rem) 0;
  background: var(--surface-2);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.work-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 3.5rem;
}

@media (min-width: 768px) {
  .work-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.work-card {
  background: #ffffff;
  border: 1px solid var(--line);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform var(--dur-base) var(--ease), border-color var(--dur-base), box-shadow var(--dur-base);
}

.work-card:hover {
  border-color: var(--terra);
  transform: translateY(-4px);
  box-shadow: 0 20px 48px rgba(8, 20, 36, 0.08);
}

.work-card-media {
  height: 220px;
  background: linear-gradient(135deg, var(--navy) 0%, var(--navy-2) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.work-card-media img {
  max-height: 70px;
  max-width: 190px;
  object-fit: contain;
  filter: drop-shadow(0 4px 12px rgba(0,0,0,0.3));
}

.work-card-pill {
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 0.6875rem;
  font-weight: 750;
  padding: 4px 12px;
  border-radius: var(--r-full);
  background: rgba(0, 157, 73, 0.2);
  border: 1px solid rgba(0, 157, 73, 0.4);
  color: #34d399;
  backdrop-filter: blur(8px);
}

.work-card-body {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}

.work-card-category {
  font-size: 0.6875rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--terra);
  margin-bottom: 4px;
}

.work-card-body h3 {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--text-strong);
  letter-spacing: -0.015em;
}

.work-card-body p {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: #64748b;
}

.work-card-footer {
  margin-top: auto;
  padding: 1.2rem 2rem;
  border-top: 1px solid var(--line);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--paper);
}

.work-card-metric {
  font-size: 0.875rem;
  font-weight: 750;
  color: var(--text-strong);
}

.work-card-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8125rem;
  font-weight: 750;
  color: var(--terra);
  text-decoration: none;
}

.work-card-link svg {
  width: 12px;
  height: 12px;
  stroke: currentColor;
  stroke-width: 2.2;
}

/* ══════════════════════════════════════════
   TRANSPARENT CORPORATE PRICING
══════════════════════════════════════════ */
.pricing-section {
  padding: clamp(5rem, 8vw, 8rem) 0;
  background: #ffffff;
}

.pricing-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 3.5rem;
}

@media (min-width: 768px) {
  .pricing-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1100px) {
  .pricing-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.pricing-card {
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 2.5rem 2rem;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform var(--dur-base) var(--ease), border-color var(--dur-base), box-shadow var(--dur-base);
}

.pricing-card:hover {
  border-color: var(--terra);
  transform: translateY(-4px);
  box-shadow: 0 20px 48px rgba(8, 20, 36, 0.08);
}

.pricing-card.featured {
  background: var(--navy);
  color: #ffffff;
  border-color: var(--navy-2);
  box-shadow: 0 24px 60px rgba(8, 20, 36, 0.22);
}

.pricing-card.featured h3,
.pricing-card.featured .pricing-price {
  color: #ffffff;
}

.pricing-card.featured .pricing-sub,
.pricing-card.featured .pricing-feature-item {
  color: rgba(255, 255, 255, 0.75);
}

.pricing-tag {
  align-self: flex-start;
  font-size: 0.6875rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: var(--r-full);
  background: rgba(0, 157, 73, 0.12);
  color: var(--terra);
  margin-bottom: 1.5rem;
}

.pricing-card.featured .pricing-tag {
  background: var(--terra-hero);
  color: #ffffff;
}

.pricing-card h3 {
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--text-strong);
  margin-bottom: 0.5rem;
}

.pricing-sub {
  font-size: 0.875rem;
  color: #64748b;
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

.pricing-price-wrap {
  display: flex;
  align-items: baseline;
  gap: 6px;
  margin-bottom: 1.75rem;
}

.pricing-price {
  font-size: 2.5rem;
  font-weight: 850;
  letter-spacing: -0.04em;
  color: var(--text-strong);
  line-height: 1;
}

.pricing-period {
  font-size: 0.8125rem;
  color: #64748b;
  font-weight: 600;
}

.pricing-card.featured .pricing-period {
  color: rgba(255, 255, 255, 0.6);
}

.pricing-features {
  list-style: none;
  margin: 0 0 2rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
}

.pricing-feature-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.875rem;
  color: #334155;
  line-height: 1.4;
}

.pricing-feature-item svg {
  width: 16px;
  height: 16px;
  color: var(--terra);
  flex-shrink: 0;
}

.pricing-card.featured .pricing-feature-item svg {
  color: #34d399;
}

.pricing-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.9rem;
  border-radius: 12px;
  font-weight: 750;
  font-size: 0.9375rem;
  text-decoration: none;
  transition: all var(--dur-fast);
}

.pricing-btn-primary {
  background: var(--terra);
  color: #ffffff;
}

.pricing-btn-primary:hover {
  background: var(--terra-hover);
  transform: translateY(-2px);
}

.pricing-btn-outline {
  background: var(--surface-2);
  color: var(--text-strong);
  border: 1px solid var(--line);
}

.pricing-btn-outline:hover {
  border-color: var(--terra);
  color: var(--terra);
  transform: translateY(-2px);
}

/* ── Addons Grid ── */
.addons-wrap {
  margin-top: 5rem;
}

.addons-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 2rem;
}

@media (min-width: 640px) {
  .addons-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .addons-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.addon-card {
  padding: 1.75rem;
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.addon-card h4 {
  font-size: 1.05rem;
  font-weight: 750;
  color: var(--text-strong);
}

.addon-card p {
  font-size: 0.84rem;
  color: #64748b;
  line-height: 1.5;
}

.addon-price {
  margin-top: auto;
  padding-top: 1rem;
  font-size: 1.15rem;
  font-weight: 850;
  color: var(--terra);
}

/* ══════════════════════════════════════════
   COMPARISON TABLE
══════════════════════════════════════════ */
.comparison-section {
  padding: clamp(5rem, 8vw, 8rem) 0;
  background: var(--paper);
  border-top: 1px solid var(--line);
}

.comp-table-box {
  margin-top: 3.5rem;
  overflow-x: auto;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: #ffffff;
  box-shadow: 0 8px 30px rgba(8, 20, 36, 0.04);
}

.inrank-compare-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  min-width: 700px;
}

.inrank-compare-table th,
.inrank-compare-table td {
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid var(--line);
  font-size: 0.9375rem;
}

.inrank-compare-table th {
  background: #f8fafc;
  font-weight: 800;
  font-size: 0.8125rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #64748b;
}

.inrank-compare-table th.highlight-col,
.inrank-compare-table td.highlight-col {
  background: rgba(0, 157, 73, 0.04);
  color: var(--text-strong);
  font-weight: 750;
  border-left: 2px solid var(--terra);
  border-right: 1px solid var(--line);
}

.comp-badge-good {
  color: var(--terra);
  font-weight: 700;
}

.comp-badge-bad {
  color: #94a3b8;
}

.inrank-compare-table tr:last-child td {
  border-bottom: none;
}

/* ══════════════════════════════════════════
   PEOPLE & BANER ENGINEERING LAB
══════════════════════════════════════════ */
.people-section {
  padding: clamp(5rem, 8vw, 8rem) 0;
  background: #ffffff;
  border-top: 1px solid var(--line);
}

.people-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 3.5rem;
}

@media (min-width: 768px) {
  .people-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.pathways {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.pathway {
  padding: 1.75rem;
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 16px;
}

.pathway strong {
  display: block;
  font-size: 1.05rem;
  font-weight: 750;
  color: var(--text-strong);
  margin-bottom: 0.4rem;
}

.pathway p {
  font-size: 0.875rem;
  color: #64748b;
  line-height: 1.55;
}

/* ══════════════════════════════════════════
   TESTIMONIALS
══════════════════════════════════════════ */
.testi-section {
  padding: clamp(5rem, 8vw, 8rem) 0;
  background: var(--surface-2);
  border-top: 1px solid var(--line);
}

.testi-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 3.5rem;
}

@media (min-width: 768px) {
  .testi-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.testi-card {
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 2.5rem 2rem;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.testi-stars {
  color: #f59e0b;
  display: flex;
  gap: 4px;
}

.testi-stars svg {
  width: 18px;
  height: 18px;
  fill: currentColor;
}

.testi-quote {
  font-size: 1rem;
  line-height: 1.6;
  color: #334155;
  font-style: italic;
  margin: 0;
}

.testi-author {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: auto;
}

.testi-avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(0, 157, 73, 0.12);
  color: var(--terra);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 0.875rem;
  flex-shrink: 0;
}

.testi-name {
  font-size: 0.875rem;
  font-weight: 800;
  color: var(--text-strong);
}

.testi-role {
  font-size: 0.75rem;
  color: #64748b;
}

/* ══════════════════════════════════════════
   FAQ ACCORDION
══════════════════════════════════════════ */
.faq-section {
  padding: clamp(5rem, 8vw, 8rem) 0;
  background: #ffffff;
  border-top: 1px solid var(--line);
}

.faq-accordion {
  max-width: 800px;
  margin: 3.5rem auto 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.faq-item {
  border: 1px solid var(--line);
  border-radius: 14px;
  overflow: hidden;
  background: var(--paper);
  transition: border-color var(--dur-fast);
}

.faq-item.active {
  border-color: var(--terra);
}

.faq-question {
  width: 100%;
  padding: 1.35rem 1.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background: none;
  border: none;
  font-family: var(--font);
  font-size: 1.05rem;
  font-weight: 750;
  color: var(--text-strong);
  text-align: left;
  cursor: pointer;
}

.faq-arrow {
  width: 20px;
  height: 20px;
  stroke: #64748b;
  stroke-width: 2.2;
  fill: none;
  flex-shrink: 0;
  transition: transform var(--dur-fast);
}

.faq-item.active .faq-arrow {
  transform: rotate(180deg);
  stroke: var(--terra);
}

.faq-answer {
  display: none;
  padding: 0 1.75rem 1.5rem;
  font-size: 0.9375rem;
  line-height: 1.65;
  color: #64748b;
}

.faq-item.active .faq-answer {
  display: block;
}

/* ══════════════════════════════════════════
   DUAL CLOSING CARDS (HIGH CONTRAST)
══════════════════════════════════════════ */
.closing {
  padding: clamp(5rem, 8vw, 8rem) 0;
  background: var(--surface-2);
}

.closing-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 860px) {
  .closing-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.closing-card {
  min-height: 360px;
  padding: clamp(2.5rem, 4.5vw, 4rem);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform var(--dur-base) var(--ease), box-shadow var(--dur-base);
}

.closing-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 48px rgba(8, 20, 36, 0.12);
}

.closing-card.card-dark {
  background: var(--navy);
  color: #ffffff;
  border: 1px solid var(--navy-2);
}

.closing-card.card-dark span {
  color: var(--terra-hero);
}

.closing-card.card-dark h2 {
  color: #ffffff;
}

.closing-card.card-dark p {
  color: rgba(255, 255, 255, 0.75);
}

.closing-card.card-dark .arrow-link {
  color: #ffffff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

.closing-card.card-dark .arrow-link:hover {
  color: var(--terra-hero);
  border-color: var(--terra-hero);
}

.closing-card.card-light {
  background: #ffffff;
  color: var(--ink);
  border: 1px solid var(--line);
}

.closing-card.card-light span {
  color: var(--terra);
}

.closing-card.card-light h2 {
  color: var(--ink);
}

.closing-card.card-light p {
  color: #64748b;
}

.closing-card.card-light .arrow-link {
  color: var(--ink);
  border-bottom: 1px solid rgba(8, 20, 36, 0.2);
}

.closing-card.card-light .arrow-link:hover {
  color: var(--terra);
  border-color: var(--terra);
}

.closing-card span {
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.closing-card h2 {
  margin: 1.5rem 0 0.75rem;
  font-size: clamp(1.8rem, 2.5vw, 2.5rem);
  font-weight: 750;
  line-height: 1.15;
  letter-spacing: -0.03em;
}

.closing-card p {
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.arrow-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9375rem;
  font-weight: 750;
  text-decoration: none;
  padding-bottom: 4px;
  width: fit-content;
  transition: color var(--dur-fast), border-color var(--dur-fast);
}

/* ══════════════════════════════════════════
   CORPORATE 5-COLUMN FOOTER
══════════════════════════════════════════ */
.site-footer {
  padding: 5rem 0 2.5rem;
  color: #ffffff;
  background: #081424;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.35fr repeat(4, 1fr);
  gap: 2.5rem;
}

@media (max-width: 1080px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
  .footer-brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 640px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.footer-logo-lockup {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}

.footer-logo-lockup img {
  width: 34px !important;
  height: 34px !important;
  object-fit: contain;
}

.footer-logo-name {
  font-family: var(--font);
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: -0.025em;
  color: #ffffff;
  line-height: 1;
}

.footer-logo-sub {
  font-family: var(--font);
  font-size: 0.55rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--terra-hero);
  margin-top: 3px;
  line-height: 1;
}

.footer-brand p {
  color: #94a3b8;
  font-size: 0.875rem;
  line-height: 1.65;
  margin: 0;
  max-width: 320px;
}

.footer-social-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 0.5rem;
}

.footer-social-wrap a {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  transition: background var(--dur-fast), transform var(--dur-fast);
}

.footer-social-wrap a:hover {
  background: var(--terra);
  transform: translateY(-2px);
}

.footer-social-wrap svg {
  width: 16px;
  height: 16px;
  fill: currentColor;
}

.footer-col strong,
.footer-col-title {
  display: block;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 1.25rem;
}

.footer-col ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-col a {
  color: #94a3b8;
  font-size: 0.875rem;
  text-decoration: none;
  transition: color var(--dur-fast);
}

.footer-col a:hover {
  color: #ffffff;
}

.footer-bottom {
  margin-top: 4.5rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-copyright {
  color: #64748b;
  font-size: 0.8125rem;
  margin: 0;
}

.site-footer-legal {
  display: flex;
  gap: 1.5rem;
}

.site-footer-legal a {
  color: #64748b;
  font-size: 0.8125rem;
  text-decoration: none;
  transition: color var(--dur-fast);
}

.site-footer-legal a:hover {
  color: #ffffff;
}

/* ══════════════════════════════════════════
   SCROLL REVEALS (FAIL-SAFE: ALWAYS VISIBLE BY DEFAULT)
══════════════════════════════════════════ */
[data-reveal] {
  opacity: 1;
  transform: none;
}
`;

fs.writeFileSync('inrank2.0/css/corporate.css', css);
console.log('Complete corporate.css generated!');

