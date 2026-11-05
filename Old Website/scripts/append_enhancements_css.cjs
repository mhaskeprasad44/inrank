const fs = require('fs');
const path = 'inrank2.0/css/corporate.css';
let css = fs.readFileSync(path, 'utf8');

const newStyles = `

/* ══════════════════════════════════════════
   ARCHITECTURAL PILLARS STRIP
══════════════════════════════════════════ */
.pillars-strip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-top: 2rem;
  margin-bottom: 2.5rem;
}

@media (max-width: 900px) {
  .pillars-strip {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 520px) {
  .pillars-strip {
    grid-template-columns: 1fr;
  }
}

.pillar-pill {
  padding: 14px 18px;
  background: #ffffff;
  border: 1px solid var(--line);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  position: relative;
  transition: all 0.25s ease;
}

.pillar-pill:hover,
.pillar-pill.active {
  border-color: rgba(0, 157, 73, 0.4);
  background: #fcfdfd;
  box-shadow: 0 4px 16px rgba(0, 157, 73, 0.06);
}

.pillar-pill strong {
  font-size: 0.88rem;
  font-weight: 800;
  color: var(--text-strong);
}

.pillar-pill small {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--terra);
}

/* ══════════════════════════════════════════
   OUR SERVICES GRID & CARDS (VINOVE 2.0 AESTHETIC)
══════════════════════════════════════════ */
.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

@media (max-width: 1200px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 680px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}

.service-card {
  background: #ffffff;
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 2rem 1.75rem;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 16px rgba(8, 20, 36, 0.03);
}

.service-card:hover {
  border-color: var(--terra);
  transform: translateY(-5px);
  box-shadow: 0 18px 44px rgba(8, 20, 36, 0.08);
}

.service-card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}

.service-icon-wrap {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(0, 157, 73, 0.08);
  border: 1px solid rgba(0, 157, 73, 0.16);
  color: var(--terra);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.service-card:hover .service-icon-wrap {
  background: var(--terra);
  color: #ffffff;
  border-color: var(--terra);
  transform: scale(1.05);
}

.service-idx {
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  color: #94a3b8;
}

.service-card-title {
  font-size: 1.18rem;
  font-weight: 800;
  color: var(--text-strong);
  letter-spacing: -0.02em;
  margin: 0 0 0.75rem;
  line-height: 1.25;
}

.service-card-text {
  font-size: 0.88rem;
  line-height: 1.6;
  color: #64748b;
  margin: 0 0 1.25rem;
  flex: 1;
}

.service-card-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 1.5rem;
}

.service-chip {
  font-size: 0.72rem;
  font-weight: 650;
  padding: 4px 10px;
  border-radius: 999px;
  background: var(--surface-2);
  color: #475569;
  border: 1px solid var(--line);
}

.service-card-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.84rem;
  font-weight: 750;
  color: var(--terra);
  text-decoration: none;
  margin-top: auto;
  transition: all 0.2s ease;
}

.service-card-link svg {
  width: 14px;
  height: 14px;
  stroke: currentColor;
  stroke-width: 2.2;
  fill: none;
  transition: transform 0.2s ease;
}

.service-card:hover .service-card-link {
  color: var(--terra-hover);
}

.service-card:hover .service-card-link svg {
  transform: translateX(4px);
}

.services-banner {
  margin-top: 3.5rem;
  padding: 2rem 2.5rem;
  background: linear-gradient(135deg, #0f2138 0%, #081424 100%);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.services-banner p {
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  max-width: 650px;
  line-height: 1.5;
}

.services-banner .button {
  background: var(--terra);
  color: #ffffff !important;
  border: none;
  padding: 12px 24px;
  border-radius: 999px;
  font-weight: 750;
  text-decoration: none;
  transition: all 0.2s ease;
}

.services-banner .button:hover {
  background: var(--terra-hover);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 157, 73, 0.35);
}

/* ══════════════════════════════════════════
   NICHE SECTION & INTERACTIVE HOVER ICONS
══════════════════════════════════════════ */
.niches-section {
  padding: clamp(5rem, 8vw, 8rem) 0;
  background: #ffffff;
  border-top: 1px solid var(--line);
}

.niche-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2.5rem;
}

@media (max-width: 1024px) {
  .niche-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .niche-grid {
    grid-template-columns: 1fr;
  }
}

.niche-card {
  padding: 2.25rem 2rem;
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.niche-card:hover {
  background: #ffffff;
  border-color: var(--terra);
  transform: translateY(-6px);
  box-shadow: 0 20px 48px rgba(8, 20, 36, 0.08);
}

.niche-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}

.niche-icon-wrap {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: rgba(0, 157, 73, 0.08);
  border: 1px solid rgba(0, 157, 73, 0.18);
  color: var(--terra);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.niche-icon-wrap svg {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  stroke-width: 2;
  fill: none;
  transition: transform 0.3s ease;
}

.niche-card:hover .niche-icon-wrap {
  background: var(--terra);
  color: #ffffff;
  border-color: var(--terra);
  transform: scale(1.1) rotate(-3deg);
  box-shadow: 0 8px 24px rgba(0, 157, 73, 0.28);
}

.niche-card:hover .niche-icon-wrap svg {
  transform: scale(1.05);
}

.niche-num {
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #94a3b8;
  transition: color 0.3s ease;
}

.niche-card:hover .niche-num {
  color: var(--terra);
}

.niche-card h3 {
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--text-strong);
  margin: 0 0 0.75rem;
  line-height: 1.3;
}

.niche-card p {
  font-size: 0.88rem;
  line-height: 1.6;
  color: #64748b;
  margin: 0;
}

/* ══════════════════════════════════════════
   PROPER ALIGNMENT: PROOF & NUMBERS SECTION
══════════════════════════════════════════ */
.proof {
  padding: clamp(5rem, 8vw, 8rem) 0;
  background: var(--paper);
  border-top: 1px solid var(--line);
}

.proof-grid {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 3.5rem;
  align-items: center;
}

@media (max-width: 992px) {
  .proof-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

.proof-left {
  display: flex;
  flex-direction: column;
}

.badge-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin-top: 2.5rem;
}

.badge-item {
  padding: 1.75rem 1.5rem;
  background: #ffffff;
  border: 1px solid var(--line);
  border-radius: 18px;
  box-shadow: 0 4px 20px rgba(8, 20, 36, 0.04);
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
}

.badge-item:hover {
  border-color: var(--terra);
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(8, 20, 36, 0.06);
}

.badge-num {
  font-size: clamp(2rem, 3vw, 2.75rem);
  font-weight: 850;
  letter-spacing: -0.04em;
  color: var(--text-strong);
  line-height: 1;
  margin-bottom: 0.5rem;
}

.badge-star {
  color: var(--terra);
}

.badge-label {
  font-size: 0.9375rem;
  font-weight: 750;
  color: var(--text-strong);
}

.badge-sub {
  font-size: 0.78rem;
  color: #64748b;
  margin-top: 2px;
}

.proof-facts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  background: transparent;
  border: none;
  border-radius: 0;
}

@media (max-width: 580px) {
  .proof-facts {
    grid-template-columns: 1fr;
  }
}

.fact-item {
  padding: 2rem 1.75rem;
  background: #ffffff;
  border: 1px solid var(--line);
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(8, 20, 36, 0.04);
  display: flex;
  flex-direction: column;
  min-height: 220px;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.fact-item:hover {
  border-color: var(--terra);
  transform: translateY(-4px);
  box-shadow: 0 20px 48px rgba(8, 20, 36, 0.08);
}

.fact-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.fact-item strong {
  font-size: clamp(2.2rem, 3.2vw, 2.85rem);
  font-weight: 850;
  letter-spacing: -0.04em;
  color: var(--text-strong);
  line-height: 1;
  margin: 0;
}

.fact-tag {
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  padding: 3px 8px;
  border-radius: 999px;
  background: rgba(0, 157, 73, 0.08);
  color: var(--terra);
  border: 1px solid rgba(0, 157, 73, 0.16);
}

.fact-title {
  font-size: 0.95rem;
  font-weight: 750;
  color: var(--text-strong);
  margin-bottom: 0.4rem;
  line-height: 1.35;
}

.fact-desc {
  font-size: 0.84rem;
  line-height: 1.55;
  color: #64748b;
  margin: 0;
}
`;

css += newStyles;
fs.writeFileSync(path, css, 'utf8');
console.log('Appended corporate.css styles successfully!');

