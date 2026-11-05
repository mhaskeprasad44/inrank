const fs = require('fs');
const path = require('path');

// 1. UPDATE index.html
let html = fs.readFileSync('inrank2.0/index.html', 'utf8');

// Ensure Section 10 has Prasad Mhaske
html = html.replace(
  /<h3 class="people-name">Senior Growth Engineer<\/h3>[\s\S]*?<span class="people-role">Technical Lead &amp; Growth Architect<\/span>/,
  '<h3 class="people-name">Prasad Mhaske</h3>\n              <span class="people-role">Founder &amp; Lead Growth Architect</span>'
);

html = html.replace(
  /alt="Senior Growth Engineer - Inrank Technologies"/,
  'alt="Prasad Mhaske - Founder & Lead Growth Architect, Inrank Technologies"'
);

// Ensure Section 9 Comparison table header has TRADITIONAL AGENCIES without Pune
html = html.replace(/Traditional Pune Agencies/gi, 'Traditional Agencies');

fs.writeFileSync('inrank2.0/index.html', html, 'utf8');
console.log('Updated inrank2.0/index.html');

// 2. MASTER HOMEPAGE CSS RULES
const masterHomepageCss = `
/* ============================================================
   MASTER HOMEPAGE ARCHITECTURE & ALIGNMENTS (Vinove 2.0 System)
   Cohesive, pixel-perfect layout for all 15 homepage sections
   ============================================================ */

/* Global Shell & Container Standards */
.shell {
  width: min(100%, 1200px) !important;
  margin-inline: auto !important;
  padding-inline: clamp(1.2rem, 3vw, 2.5rem) !important;
  box-sizing: border-box !important;
}

/* ══════════════════════════════════════════════════════════
   SECTION 2: MARQUEE BAND (Trusted Clients)
   ══════════════════════════════════════════════════════════ */
.marquee-band {
  padding: 2.5rem 0 2rem !important;
  background: #ffffff !important;
  border-bottom: 1px solid rgba(8, 20, 36, 0.08) !important;
  overflow: hidden !important;
}

.marquee-title {
  text-align: center !important;
  font-size: 0.72rem !important;
  font-weight: 800 !important;
  letter-spacing: 0.15em !important;
  text-transform: uppercase !important;
  color: #64748b !important;
  margin: 0 0 1.5rem !important;
}

.marquee-track-wrap {
  position: relative !important;
  width: 100% !important;
  overflow: hidden !important;
  mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent) !important;
  -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent) !important;
}

.marquee-track {
  display: flex !important;
  align-items: center !important;
  gap: 3.5rem !important;
  width: max-content !important;
  animation: marqueeScroll 28s linear infinite !important;
}

.client-logo-item img {
  height: 32px !important;
  width: auto !important;
  max-width: 140px !important;
  object-fit: contain !important;
  filter: grayscale(100%) opacity(0.65) !important;
  transition: filter 0.25s ease, transform 0.25s ease !important;
}

.client-logo-item:hover img {
  filter: grayscale(0%) opacity(1) !important;
  transform: scale(1.06) !important;
}

@keyframes marqueeScroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* ══════════════════════════════════════════════════════════
   SECTION 3: OPERATING PHILOSOPHY (Manifesto)
   ══════════════════════════════════════════════════════════ */
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

/* ══════════════════════════════════════════════════════════
   SECTION 4: 4-STAGE OPERATING METHODOLOGY
   ══════════════════════════════════════════════════════════ */
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

/* ══════════════════════════════════════════════════════════
   SECTION 5: CAPABILITIES & SERVICES ECOSYSTEM
   ══════════════════════════════════════════════════════════ */
.capabilities-section {
  padding: clamp(5rem, 8vw, 7rem) 0 !important;
  background: #ffffff !important;
}

.pillars-strip {
  display: grid !important;
  grid-template-columns: repeat(4, 1fr) !important;
  gap: 1.25rem !important;
  margin: 2.25rem 0 3rem !important;
}

.pillar-pill {
  padding: 1.1rem 1.25rem !important;
  background: #f8fafc !important;
  border: 1px solid rgba(8, 20, 36, 0.08) !important;
  border-radius: 14px !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 4px !important;
  transition: all 0.2s ease !important;
}

.pillar-pill.active,
.pillar-pill:hover {
  background: #f0fdf4 !important;
  border-color: #009d49 !important;
  box-shadow: 0 6px 18px rgba(0, 157, 73, 0.08) !important;
}

.pillar-pill strong {
  font-size: 0.88rem !important;
  font-weight: 800 !important;
  color: #081424 !important;
}

.pillar-pill small {
  font-size: 0.78rem !important;
  font-weight: 750 !important;
  color: #009d49 !important;
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

/* ══════════════════════════════════════════════════════════
   SECTION 6: NICHES WE KNOW INSIDE-OUT
   ══════════════════════════════════════════════════════════ */
.niches-section {
  padding: clamp(5rem, 8vw, 7rem) 0 !important;
  background: #f8fafc !important;
  border-top: 1px solid rgba(8, 20, 36, 0.06) !important;
  border-bottom: 1px solid rgba(8, 20, 36, 0.06) !important;
}

.niches-grid {
  display: grid !important;
  grid-template-columns: repeat(3, 1fr) !important;
  gap: 1.5rem !important;
  margin-top: 3rem !important;
}

.niche-card {
  padding: 2.25rem 2rem !important;
  background: #ffffff !important;
  border: 1px solid rgba(8, 20, 36, 0.08) !important;
  border-radius: 20px !important;
  display: flex !important;
  flex-direction: column !important;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02) !important;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
  cursor: pointer !important;
}

.niche-card:hover {
  transform: translateY(-6px) !important;
  border-color: #009d49 !important;
  box-shadow: 0 16px 36px rgba(0, 157, 73, 0.12) !important;
}

.niche-top {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  margin-bottom: 1.5rem !important;
}

.niche-icon-badge {
  width: 52px !important;
  height: 52px !important;
  border-radius: 14px !important;
  background: rgba(0, 157, 73, 0.08) !important;
  color: #009d49 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  flex-shrink: 0 !important;
  transition: all 0.3s ease !important;
}

.niche-card:hover .niche-icon-badge {
  background: #009d49 !important;
  color: #ffffff !important;
  transform: scale(1.08) rotate(4deg) !important;
}

.niche-sector {
  font-size: 0.72rem !important;
  font-weight: 850 !important;
  letter-spacing: 0.1em !important;
  color: #64748b !important;
  background: #f1f5f9 !important;
  padding: 4px 12px !important;
  border-radius: 999px !important;
  text-transform: uppercase !important;
}

.niche-card h3 {
  font-size: 1.25rem !important;
  font-weight: 800 !important;
  color: #081424 !important;
  margin: 0 0 0.75rem !important;
  letter-spacing: -0.02em !important;
  line-height: 1.25 !important;
}

.niche-card p {
  font-size: 0.88rem !important;
  color: #64748b !important;
  line-height: 1.6 !important;
  margin: 0 !important;
}

/* ══════════════════════════════════════════════════════════
   SECTION 7: PROVABLE IMPACT (Numbers that move P&Ls)
   ══════════════════════════════════════════════════════════ */
.proof {
  padding: clamp(5rem, 8vw, 7rem) 0 !important;
  background: #ffffff !important;
  border-bottom: 1px solid rgba(8, 20, 36, 0.07) !important;
}

.proof-grid {
  display: grid !important;
  grid-template-columns: 1fr 1.2fr !important;
  gap: 3.5rem !important;
  align-items: center !important;
  max-width: 100% !important;
}

.proof-left {
  display: flex !important;
  flex-direction: column !important;
}

.proof-highlights-strip {
  display: grid !important;
  grid-template-columns: 1fr 1fr !important;
  gap: 1.25rem !important;
  margin-top: 2rem !important;
}

.highlight-box {
  padding: 1.5rem 1.4rem !important;
  background: #f8fafc !important;
  border: 1px solid rgba(8, 20, 36, 0.08) !important;
  border-radius: 16px !important;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02) !important;
  display: flex !important;
  flex-direction: column !important;
}

.highlight-val {
  font-size: 2.25rem !important;
  font-weight: 850 !important;
  color: #009d49 !important;
  letter-spacing: -0.03em !important;
  line-height: 1 !important;
}

.highlight-lbl {
  font-size: 0.92rem !important;
  font-weight: 800 !important;
  color: #081424 !important;
  margin-top: 8px !important;
}

.highlight-sub {
  font-size: 0.78rem !important;
  color: #64748b !important;
  margin-top: 2px !important;
}

.proof-facts {
  display: grid !important;
  grid-template-columns: repeat(2, 1fr) !important;
  gap: 1.25rem !important;
}

.fact-item {
  padding: 1.75rem 1.5rem !important;
  background: #ffffff !important;
  border: 1px solid rgba(8, 20, 36, 0.08) !important;
  border-radius: 18px !important;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03) !important;
  display: flex !important;
  flex-direction: column !important;
  transition: all 0.25s ease !important;
}

.fact-item:hover {
  transform: translateY(-3px) !important;
  border-color: #009d49 !important;
  box-shadow: 0 12px 28px rgba(0, 157, 73, 0.08) !important;
}

.fact-head {
  display: flex !important;
  align-items: baseline !important;
  justify-content: space-between !important;
  margin-bottom: 0.5rem !important;
}

.fact-head strong {
  font-size: 2rem !important;
  font-weight: 850 !important;
  color: #081424 !important;
  letter-spacing: -0.03em !important;
}

.fact-tag {
  font-size: 0.68rem !important;
  font-weight: 850 !important;
  color: #009d49 !important;
  background: rgba(0, 157, 73, 0.08) !important;
  padding: 3px 8px !important;
  border-radius: 6px !important;
  letter-spacing: 0.08em !important;
}

.fact-title {
  font-size: 0.95rem !important;
  font-weight: 750 !important;
  color: #081424 !important;
  margin-bottom: 6px !important;
}

.fact-desc {
  font-size: 0.82rem !important;
  color: #64748b !important;
  line-height: 1.5 !important;
  margin: 0 !important;
}

/* ══════════════════════════════════════════════════════════
   SECTION 8: COMMERCIAL PORTFOLIO
   ══════════════════════════════════════════════════════════ */
.work-section {
  padding: clamp(5rem, 8vw, 7rem) 0 !important;
  background: #f8fafc !important;
}

.work-grid {
  display: grid !important;
  grid-template-columns: repeat(2, 1fr) !important;
  gap: 2rem !important;
  margin-top: 3rem !important;
}

.work-card {
  background: #ffffff !important;
  border: 1px solid rgba(8, 20, 36, 0.08) !important;
  border-radius: 20px !important;
  overflow: hidden !important;
  display: flex !important;
  flex-direction: column !important;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.03) !important;
  transition: all 0.3s ease !important;
}

.work-card:hover {
  transform: translateY(-5px) !important;
  border-color: #009d49 !important;
  box-shadow: 0 16px 40px rgba(0, 157, 73, 0.1) !important;
}

.work-card-media {
  position: relative !important;
  width: 100% !important;
  aspect-ratio: 16/9 !important;
  background: #e2e8f0 !important;
  overflow: hidden !important;
}

.work-card-media img {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  object-position: top center !important;
  transition: transform 0.4s ease !important;
}

.work-card:hover .work-card-media img {
  transform: scale(1.03) !important;
}

.work-card-pill {
  position: absolute !important;
  top: 14px !important;
  right: 14px !important;
  padding: 5px 12px !important;
  border-radius: 999px !important;
  background: rgba(8, 20, 36, 0.85) !important;
  backdrop-filter: blur(12px) !important;
  color: #00bf5d !important;
  font-size: 0.72rem !important;
  font-weight: 800 !important;
  letter-spacing: 0.08em !important;
}

.work-card-body {
  padding: 1.75rem 1.75rem 1.25rem !important;
  display: flex !important;
  flex-direction: column !important;
  flex: 1 !important;
}

.work-card-category {
  font-size: 0.72rem !important;
  font-weight: 800 !important;
  color: #009d49 !important;
  letter-spacing: 0.08em !important;
  text-transform: uppercase !important;
  margin-bottom: 0.5rem !important;
}

.work-card-body h3 {
  font-size: 1.3rem !important;
  font-weight: 800 !important;
  color: #081424 !important;
  margin: 0 0 0.6rem !important;
  letter-spacing: -0.02em !important;
}

.work-card-body p {
  font-size: 0.88rem !important;
  color: #64748b !important;
  line-height: 1.55 !important;
  margin: 0 !important;
}

.work-card-footer {
  padding: 1rem 1.75rem 1.5rem !important;
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  border-top: 1px solid rgba(8, 20, 36, 0.06) !important;
  margin-top: auto !important;
}

.work-card-metric {
  font-size: 0.85rem !important;
  font-weight: 800 !important;
  color: #081424 !important;
}

.work-card-link {
  display: inline-flex !important;
  align-items: center !important;
  gap: 6px !important;
  font-size: 0.82rem !important;
  font-weight: 750 !important;
  color: #ffffff !important;
  background: #009d49 !important;
  padding: 6px 14px !important;
  border-radius: 999px !important;
  text-decoration: none !important;
  transition: all 0.2s ease !important;
}

.work-card-link:hover {
  background: #00b755 !important;
  transform: translateX(3px) !important;
}

.work-card-link svg {
  width: 12px !important;
  height: 12px !important;
  stroke: currentColor !important;
  stroke-width: 2.2 !important;
  fill: none !important;
}

/* ══════════════════════════════════════════════════════════
   SECTION 9: THE INRANK DIFFERENCE (Comparison Table)
   ══════════════════════════════════════════════════════════ */
.comparison-section {
  padding: clamp(5rem, 8vw, 7rem) 0 !important;
  background: #ffffff !important;
}

.comparison-table-wrap {
  margin-top: 3rem !important;
  overflow-x: auto !important;
  border: 1px solid #cbd5e1 !important;
  border-radius: 20px !important;
  box-shadow: 0 12px 36px rgba(8, 20, 36, 0.06) !important;
}

.comparison-table {
  width: 100% !important;
  border-collapse: collapse !important;
  text-align: left !important;
  min-width: 760px !important;
}

.comparison-table th,
.comparison-table td {
  padding: 1.25rem 1.5rem !important;
  border-bottom: 1px solid #e2e8f0 !important;
  border-right: 1px solid #e2e8f0 !important;
  font-size: 0.9rem !important;
  color: #334155 !important;
  line-height: 1.5 !important;
}

.comparison-table th:last-child,
.comparison-table td:last-child {
  border-right: none !important;
}

.comparison-table th {
  background: #f8fafc !important;
  font-size: 0.78rem !important;
  font-weight: 850 !important;
  letter-spacing: 0.08em !important;
  text-transform: uppercase !important;
  color: #081424 !important;
}

.comparison-table th.col-highlight {
  background: #081424 !important;
  color: #00bf5d !important;
  font-size: 0.88rem !important;
  font-weight: 850 !important;
}

.comparison-table td.col-highlight {
  background: #f0fdf4 !important;
  border-left: 2px solid #009d49 !important;
  border-right: 2px solid #009d49 !important;
}

.badge-good {
  display: inline-flex !important;
  align-items: center !important;
  gap: 6px !important;
  padding: 6px 14px !important;
  background: #ffffff !important;
  border: 1.5px solid #009d49 !important;
  border-radius: 999px !important;
  color: #009d49 !important;
  font-weight: 800 !important;
  font-size: 0.85rem !important;
}

.badge-good::before {
  content: '✓' !important;
  font-weight: 900 !important;
}

/* ══════════════════════════════════════════════════════════
   SECTION 10: PEOPLE / LEADERSHIP PROFILE
   ══════════════════════════════════════════════════════════ */
.people-section {
  padding: clamp(5rem, 8vw, 7rem) 0 !important;
  background: #f8fafc !important;
}

.people-card {
  display: grid !important;
  grid-template-columns: 340px 1fr !important;
  gap: 3.5rem !important;
  background: #ffffff !important;
  border: 1px solid rgba(8, 20, 36, 0.08) !important;
  border-radius: 24px !important;
  padding: clamp(2.5rem, 5vw, 4rem) !important;
  box-shadow: 0 16px 48px rgba(8, 20, 36, 0.05) !important;
  align-items: center !important;
}

.people-profile {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  text-align: center !important;
}

.people-avatar {
  width: 140px !important;
  height: 140px !important;
  border-radius: 50% !important;
  object-fit: cover !important;
  border: 4px solid #009d49 !important;
  box-shadow: 0 12px 32px rgba(0, 157, 73, 0.2) !important;
  margin-bottom: 1.25rem !important;
}

.people-name {
  font-size: 1.4rem !important;
  font-weight: 850 !important;
  color: #081424 !important;
  margin: 0 0 4px !important;
}

.people-role {
  font-size: 0.78rem !important;
  font-weight: 800 !important;
  letter-spacing: 0.08em !important;
  text-transform: uppercase !important;
  color: #009d49 !important;
  margin-bottom: 4px !important;
}

.people-location {
  font-size: 0.82rem !important;
  color: #64748b !important;
}

.people-quote {
  font-size: 1.15rem !important;
  font-style: italic !important;
  color: #334155 !important;
  line-height: 1.65 !important;
  margin: 0 0 2rem !important;
}

.people-actions {
  display: flex !important;
  align-items: center !important;
  gap: 12px !important;
  flex-wrap: wrap !important;
}

/* ══════════════════════════════════════════════════════════
   SECTION 11: CLIENT REVIEWS (Testimonials)
   ══════════════════════════════════════════════════════════ */
.testi-section {
  padding: clamp(5rem, 8vw, 7rem) 0 !important;
  background: #ffffff !important;
}

.testi-grid {
  display: grid !important;
  grid-template-columns: repeat(3, 1fr) !important;
  gap: 1.75rem !important;
  margin-top: 3rem !important;
}

.testi-card {
  padding: 2.25rem 2rem !important;
  background: #ffffff !important;
  border: 1px solid rgba(8, 20, 36, 0.08) !important;
  border-radius: 20px !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: space-between !important;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03) !important;
  transition: all 0.3s ease !important;
  margin: 0 !important;
}

.testi-card:hover {
  transform: translateY(-4px) !important;
  border-color: #009d49 !important;
  box-shadow: 0 16px 36px rgba(0, 157, 73, 0.08) !important;
}

.testi-stars {
  color: #f59e0b !important;
  font-size: 1.15rem !important;
  letter-spacing: 2px !important;
  margin-bottom: 1.25rem !important;
}

.testi-body {
  font-size: 0.95rem !important;
  color: #334155 !important;
  line-height: 1.65 !important;
  margin: 0 0 1.75rem !important;
  font-style: normal !important;
}

.testi-author {
  display: flex !important;
  align-items: center !important;
  gap: 12px !important;
  margin-top: auto !important;
}

.testi-avatar {
  width: 46px !important;
  height: 46px !important;
  border-radius: 50% !important;
  object-fit: cover !important;
  border: 2px solid #009d49 !important;
  flex-shrink: 0 !important;
}

.testi-name {
  font-size: 0.92rem !important;
  font-weight: 800 !important;
  color: #081424 !important;
  display: block !important;
}

.testi-role {
  font-size: 0.78rem !important;
  color: #64748b !important;
  display: block !important;
}

/* ══════════════════════════════════════════════════════════
   SECTION 12: LEAD MAGNET
   ══════════════════════════════════════════════════════════ */
.lead-magnet-section {
  padding: clamp(5rem, 8vw, 7rem) 0 !important;
  background: #081424 !important;
}

.lead-magnet-box {
  max-width: 860px !important;
  margin: 0 auto !important;
  text-align: center !important;
}

.lead-magnet-form {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 10px !important;
  max-width: 520px !important;
  margin: 2rem auto 1rem !important;
  flex-wrap: wrap !important;
}

.lead-magnet-input {
  flex: 1 !important;
  min-width: 260px !important;
  height: 50px !important;
  padding: 0 18px !important;
  border-radius: 12px !important;
  border: 1px solid rgba(255, 255, 255, 0.15) !important;
  background: rgba(255, 255, 255, 0.06) !important;
  color: #ffffff !important;
  font-size: 0.92rem !important;
  font-family: inherit !important;
  outline: none !important;
}

.lead-magnet-input:focus {
  border-color: #00bf5d !important;
  background: rgba(255, 255, 255, 0.1) !important;
}

.lead-magnet-sub {
  font-size: 0.78rem !important;
  color: #94a3b8 !important;
  margin-top: 1rem !important;
}

/* ══════════════════════════════════════════════════════════
   SECTION 13: TRANSPARENT PRICING ARCHITECTURE
   ══════════════════════════════════════════════════════════ */
.pricing-section {
  padding: clamp(5rem, 8vw, 7rem) 0 !important;
  background: #ffffff !important;
}

.pricing-grid {
  display: grid !important;
  grid-template-columns: repeat(3, 1fr) !important;
  gap: 1.75rem !important;
  margin-top: 3.5rem !important;
  align-items: stretch !important;
}

.pricing-card {
  padding: 2.75rem 2.25rem !important;
  background: #ffffff !important;
  border: 1px solid rgba(8, 20, 36, 0.08) !important;
  border-radius: 22px !important;
  display: flex !important;
  flex-direction: column !important;
  position: relative !important;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.pricing-card:hover {
  transform: translateY(-6px) !important;
  box-shadow: 0 20px 48px rgba(8, 20, 36, 0.08) !important;
  border-color: #009d49 !important;
}

.pricing-card.featured {
  background: #081424 !important;
  color: #ffffff !important;
  border-color: #009d49 !important;
  box-shadow: 0 20px 52px rgba(8, 20, 36, 0.25) !important;
  transform: scale(1.03) !important;
}

.pricing-card.featured:hover {
  transform: scale(1.03) translateY(-6px) !important;
}

.tier-pill {
  font-size: 0.7rem !important;
  font-weight: 850 !important;
  letter-spacing: 0.1em !important;
  color: #009d49 !important;
  background: rgba(0, 157, 73, 0.1) !important;
  padding: 5px 12px !important;
  border-radius: 999px !important;
  text-transform: uppercase !important;
  align-self: flex-start !important;
  margin-bottom: 1.25rem !important;
}

.featured-pill {
  color: #00bf5d !important;
  background: rgba(0, 191, 93, 0.15) !important;
  border: 1px solid rgba(0, 191, 93, 0.3) !important;
}

.tier-name {
  font-size: 1.5rem !important;
  font-weight: 850 !important;
  color: #081424 !important;
  margin: 0 0 0.5rem !important;
  letter-spacing: -0.02em !important;
}

.pricing-card.featured .tier-name {
  color: #ffffff !important;
}

.tier-desc {
  font-size: 0.88rem !important;
  color: #64748b !important;
  line-height: 1.55 !important;
  margin: 0 0 1.5rem !important;
  min-height: 48px !important;
}

.pricing-card.featured .tier-desc {
  color: #94a3b8 !important;
}

.tier-price-row {
  display: flex !important;
  align-items: baseline !important;
  gap: 8px !important;
  margin-bottom: 2rem !important;
  padding-bottom: 1.5rem !important;
  border-bottom: 1px solid rgba(8, 20, 36, 0.08) !important;
}

.pricing-card.featured .tier-price-row {
  border-bottom-color: rgba(255, 255, 255, 0.1) !important;
}

.tier-price {
  font-size: 2.5rem !important;
  font-weight: 850 !important;
  color: #081424 !important;
  letter-spacing: -0.03em !important;
}

.pricing-card.featured .tier-price {
  color: #ffffff !important;
}

.tier-period {
  font-size: 0.85rem !important;
  color: #64748b !important;
  font-weight: 600 !important;
}

.pricing-card.featured .tier-period {
  color: #94a3b8 !important;
}

.tier-features {
  list-style: none !important;
  padding: 0 !important;
  margin: 0 0 2.5rem !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 12px !important;
  flex: 1 !important;
}

.tier-features li {
  font-size: 0.88rem !important;
  color: #334155 !important;
  display: flex !important;
  align-items: flex-start !important;
  gap: 10px !important;
  line-height: 1.4 !important;
}

.pricing-card.featured .tier-features li {
  color: #cbd5e1 !important;
}

.tier-features li::before {
  content: '✓' !important;
  color: #009d49 !important;
  font-weight: 850 !important;
  font-size: 0.95rem !important;
  line-height: 1 !important;
}

.pricing-card.featured .tier-features li::before {
  color: #00bf5d !important;
}

.button.full {
  width: 100% !important;
  text-align: center !important;
  justify-content: center !important;
}

.addons-wrap {
  margin-top: 5rem !important;
  padding-top: 3.5rem !important;
  border-top: 1px solid rgba(8, 20, 36, 0.08) !important;
}

.addons-grid {
  display: grid !important;
  grid-template-columns: repeat(4, 1fr) !important;
  gap: 1.25rem !important;
  margin-top: 2rem !important;
}

.addon-card {
  padding: 1.5rem !important;
  background: #f8fafc !important;
  border: 1px solid rgba(8, 20, 36, 0.08) !important;
  border-radius: 16px !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: space-between !important;
  transition: all 0.25s ease !important;
}

.addon-card:hover {
  transform: translateY(-3px) !important;
  border-color: #009d49 !important;
  background: #ffffff !important;
  box-shadow: 0 10px 24px rgba(0, 157, 73, 0.08) !important;
}

.addon-card h4 {
  font-size: 0.95rem !important;
  font-weight: 800 !important;
  color: #081424 !important;
  margin: 0 0 6px !important;
}

.addon-card p {
  font-size: 0.8rem !important;
  color: #64748b !important;
  line-height: 1.45 !important;
  margin: 0 0 1rem !important;
}

.addon-price {
  font-size: 1.15rem !important;
  font-weight: 850 !important;
  color: #009d49 !important;
  font-family: monospace !important;
}

/* ══════════════════════════════════════════════════════════
   SECTION 14: COMMON QUESTIONS (FAQ)
   ══════════════════════════════════════════════════════════ */
.faq-section {
  padding: clamp(5rem, 8vw, 7rem) 0 !important;
  background: #f8fafc !important;
}

.faq-accordion {
  max-width: 860px !important;
  margin: 3.5rem auto 0 !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 12px !important;
}

.faq-item {
  background: #ffffff !important;
  border: 1px solid rgba(8, 20, 36, 0.08) !important;
  border-radius: 16px !important;
  overflow: hidden !important;
  transition: all 0.25s ease !important;
}

.faq-item:hover {
  border-color: #009d49 !important;
}

.faq-btn {
  width: 100% !important;
  padding: 1.4rem 1.75rem !important;
  background: transparent !important;
  border: none !important;
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  gap: 1rem !important;
  text-align: left !important;
  cursor: pointer !important;
  font-size: 1.05rem !important;
  font-weight: 750 !important;
  color: #081424 !important;
}

.faq-icon {
  width: 20px !important;
  height: 20px !important;
  stroke: #009d49 !important;
  stroke-width: 2.2 !important;
  fill: none !important;
  transition: transform 0.3s ease !important;
  flex-shrink: 0 !important;
}

.faq-item.active .faq-icon,
.faq-btn[aria-expanded="true"] .faq-icon {
  transform: rotate(180deg) !important;
}

.faq-body {
  padding: 0 1.75rem 1.5rem !important;
  font-size: 0.92rem !important;
  color: #64748b !important;
  line-height: 1.65 !important;
}

/* ══════════════════════════════════════════════════════════
   SECTION 15: TAKE THE NEXT STEP (Closing)
   ══════════════════════════════════════════════════════════ */
.closing-section {
  padding: clamp(5rem, 8vw, 7rem) 0 !important;
  background: #ffffff !important;
}

.closing-grid {
  display: grid !important;
  grid-template-columns: 1fr 1fr !important;
  gap: 2rem !important;
  margin-top: 2rem !important;
}

.closing-card {
  padding: clamp(2.5rem, 5vw, 3.5rem) !important;
  border-radius: 24px !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: space-between !important;
}

.closing-card.card-dark {
  background: #081424 !important;
  color: #ffffff !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  box-shadow: 0 20px 48px rgba(8, 20, 36, 0.2) !important;
}

.closing-card.card-dark .closing-title {
  color: #ffffff !important;
  font-size: clamp(1.6rem, 2.6vw, 2.2rem) !important;
  font-weight: 850 !important;
  line-height: 1.2 !important;
  margin-bottom: 1rem !important;
}

.closing-card.card-dark .closing-desc {
  color: #94a3b8 !important;
  font-size: 0.95rem !important;
  line-height: 1.6 !important;
  margin-bottom: 2rem !important;
}

.closing-card.card-light {
  background: #f8fafc !important;
  color: #081424 !important;
  border: 1px solid rgba(8, 20, 36, 0.08) !important;
}

.closing-card.card-light .closing-title {
  color: #081424 !important;
  font-size: clamp(1.6rem, 2.6vw, 2.2rem) !important;
  font-weight: 850 !important;
  line-height: 1.2 !important;
  margin-bottom: 1rem !important;
}

.closing-card.card-light .closing-desc {
  color: #64748b !important;
  font-size: 0.95rem !important;
  line-height: 1.6 !important;
  margin-bottom: 2rem !important;
}

.closing-cta-link {
  display: inline-flex !important;
  align-items: center !important;
  gap: 8px !important;
  padding: 14px 28px !important;
  background: #009d49 !important;
  color: #ffffff !important;
  border-radius: 999px !important;
  font-weight: 750 !important;
  font-size: 0.95rem !important;
  text-decoration: none !important;
  align-self: flex-start !important;
  transition: all 0.25s ease !important;
}

.closing-cta-link:hover {
  background: #00b755 !important;
  transform: translateX(4px) !important;
}

.closing-contact-link {
  display: inline-flex !important;
  align-items: center !important;
  gap: 8px !important;
  padding: 12px 20px !important;
  background: #ffffff !important;
  border: 1px solid rgba(8, 20, 36, 0.1) !important;
  border-radius: 12px !important;
  font-size: 0.9rem !important;
  text-decoration: none !important;
  color: #009d49 !important;
  transition: all 0.2s ease !important;
}

.closing-contact-link:hover {
  border-color: #009d49 !important;
  background: #f0fdf4 !important;
}

/* ══════════════════════════════════════════════════════════
   RESPONSIVE OVERRIDES (Tablets & Mobile)
   ══════════════════════════════════════════════════════════ */
@media (max-width: 991px) {
  .manifesto-split {
    grid-template-columns: 1fr !important;
    gap: 2.5rem !important;
  }
  .operating-head {
    grid-template-columns: 1fr !important;
    gap: 1.5rem !important;
  }
  .operating-model {
    grid-template-columns: repeat(2, 1fr) !important;
  }
  .pillars-strip {
    grid-template-columns: repeat(2, 1fr) !important;
  }
  .niches-grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
  .proof-grid {
    grid-template-columns: 1fr !important;
    gap: 3rem !important;
  }
  .people-card {
    grid-template-columns: 1fr !important;
    gap: 2rem !important;
  }
  .testi-grid {
    grid-template-columns: 1fr !important;
  }
  .pricing-grid {
    grid-template-columns: 1fr !important;
  }
  .pricing-card.featured {
    transform: none !important;
  }
  .pricing-card.featured:hover {
    transform: translateY(-6px) !important;
  }
  .addons-grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
  .closing-grid {
    grid-template-columns: 1fr !important;
  }
}

@media (max-width: 640px) {
  .operating-model {
    grid-template-columns: 1fr !important;
  }
  .pillars-strip {
    grid-template-columns: 1fr !important;
  }
  .niches-grid {
    grid-template-columns: 1fr !important;
  }
  .work-grid {
    grid-template-columns: 1fr !important;
  }
  .proof-facts {
    grid-template-columns: 1fr !important;
  }
  .proof-highlights-strip {
    grid-template-columns: 1fr !important;
  }
  .addons-grid {
    grid-template-columns: 1fr !important;
  }
}
`;

// Append master rules to corporate.css
let corpCss = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');
corpCss += '\n' + masterHomepageCss;
fs.writeFileSync('inrank2.0/css/corporate.css', corpCss, 'utf8');
console.log('Appended Master Homepage CSS to inrank2.0/css/corporate.css');

