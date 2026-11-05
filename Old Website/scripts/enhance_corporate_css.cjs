const fs = require('fs');
const path = 'inrank2.0/css/corporate.css';
let css = fs.readFileSync(path, 'utf8');

// 1. Replace the comparison table section with the high-contrast version
const compTarget = `/* ══════════════════════════════════════════
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
}`;

const compReplacement = `/* ══════════════════════════════════════════
   COMPARISON TABLE (HIGH CONTRAST & CRISP VISIBILITY)
══════════════════════════════════════════ */
.comparison-section {
  padding: clamp(5rem, 8vw, 8rem) 0;
  background: var(--paper);
  border-top: 1px solid var(--line);
}

.comparison-table-wrap,
.comp-table-box {
  margin-top: 2.75rem;
  overflow-x: auto;
  border: 1px solid rgba(8, 20, 36, 0.14);
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 16px 40px rgba(8, 20, 36, 0.06);
}

.comparison-table,
.inrank-compare-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  min-width: 720px;
}

.comparison-table th,
.comparison-table td,
.inrank-compare-table th,
.inrank-compare-table td {
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid rgba(8, 20, 36, 0.10);
  border-right: 1px solid rgba(8, 20, 36, 0.08);
  font-size: 0.9375rem;
}

.comparison-table th:last-child,
.comparison-table td:last-child,
.inrank-compare-table th:last-child,
.inrank-compare-table td:last-child {
  border-right: none;
}

.comparison-table th,
.inrank-compare-table th {
  background: #f1f5f9;
  font-weight: 800;
  font-size: 0.8125rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #0f172a;
  border-bottom: 2px solid rgba(8, 20, 36, 0.16);
}

.comparison-table th.col-highlight,
.comparison-table th.highlight-col,
.inrank-compare-table th.col-highlight,
.inrank-compare-table th.highlight-col {
  background: #081424;
  color: #00bf5d !important;
  font-weight: 850;
  font-size: 0.9375rem;
  letter-spacing: 0.02em;
  text-transform: none;
  border-left: 2px solid #00bf5d;
  border-right: 2px solid #00bf5d;
  border-bottom: 2px solid #00bf5d;
}

.comparison-table td,
.inrank-compare-table td {
  color: #334155;
  background: #ffffff;
  line-height: 1.5;
}

.comparison-table tbody tr:nth-child(even) td:not(.col-highlight):not(.highlight-col),
.inrank-compare-table tbody tr:nth-child(even) td:not(.col-highlight):not(.highlight-col) {
  background: #f8fafc;
}

.comparison-table tbody tr:hover td:not(.col-highlight):not(.highlight-col),
.inrank-compare-table tbody tr:hover td:not(.col-highlight):not(.highlight-col) {
  background: #f1f5f9;
}

.comparison-table td:first-child,
.inrank-compare-table td:first-child {
  color: #081424;
  font-weight: 700;
}

.comparison-table td.col-highlight,
.comparison-table td.highlight-col,
.inrank-compare-table td.col-highlight,
.inrank-compare-table td.highlight-col {
  background: rgba(0, 191, 93, 0.06) !important;
  color: #064e3b;
  font-weight: 700;
  border-left: 2px solid #009d49;
  border-right: 2px solid #009d49;
}

.comparison-table tbody tr:hover td.col-highlight,
.comparison-table tbody tr:hover td.highlight-col,
.inrank-compare-table tbody tr:hover td.col-highlight,
.inrank-compare-table tbody tr:hover td.highlight-col {
  background: rgba(0, 191, 93, 0.12) !important;
}

.badge-good,
.comp-badge-good {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #e6f7ef;
  color: #007a38;
  border: 1px solid #a3e6be;
  padding: 5px 12px;
  border-radius: 999px;
  font-size: 0.84rem;
  font-weight: 750;
  letter-spacing: -0.01em;
}

.badge-good::before,
.comp-badge-good::before {
  content: '✓';
  font-weight: 900;
  color: #009d49;
}

.comp-badge-bad {
  color: #94a3b8;
}

.comparison-table tr:last-child td,
.inrank-compare-table tr:last-child td {
  border-bottom: none;
}`;

if (css.includes(compTarget)) {
  css = css.replace(compTarget, compReplacement);
  console.log('Comparison table updated in corporate.css');
} else {
  console.log('Warning: compTarget not found exact match');
}

// 2. Append all new/harmonized class definitions
const additionalStyles = `

/* ══════════════════════════════════════════
   HARMONIZED VINVOVE-INRANK 2.0 SYSTEM RULES
══════════════════════════════════════════ */

/* Eyebrow Pills & Section Headers */
.eyebrow-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  background: rgba(0, 157, 73, 0.08);
  border: 1px solid rgba(0, 157, 73, 0.22);
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--terra);
  margin-bottom: 1.25rem;
}

.eyebrow-pill::before {
  content: '';
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--terra);
}

.section-head {
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
  max-width: 760px;
}

.section-head.center {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.section-title {
  font-size: clamp(2rem, 3.5vw, 3rem);
  font-weight: 850;
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: var(--ink);
  margin-bottom: 1rem;
}

.section-sub {
  font-size: clamp(1rem, 1.4vw, 1.15rem);
  line-height: 1.6;
  color: #475569;
  max-width: 680px;
}

/* Hero Section Typography */
.hero-title {
  font-size: clamp(2.35rem, 4.4vw, 3.85rem);
  font-weight: 850;
  line-height: 1.08;
  letter-spacing: -0.035em;
  color: #ffffff;
  margin-bottom: 1.5rem;
}

.hero-accent {
  color: var(--terra-hero);
  background: linear-gradient(135deg, #00bf5d 0%, #34d399 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-note-label {
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
  display: block;
  margin-bottom: 0.35rem;
}

/* Marquee Scroller */
.marquee-title {
  text-align: center;
  font-size: 0.75rem;
  font-weight: 750;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #64748b;
  margin-bottom: 1.5rem;
}

.marquee-track-wrap {
  overflow: hidden;
  position: relative;
  mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
}

/* Capabilities 4-Pillar System */
.cap-rows {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.cap-row {
  display: grid;
  grid-template-columns: 140px 220px 1fr;
  align-items: center;
  gap: 2rem;
  padding: 2.25rem 2.5rem;
  background: #ffffff;
  border: 1px solid var(--line);
  border-radius: 20px;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

@media (max-width: 900px) {
  .cap-row {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    padding: 1.75rem 1.5rem;
  }
}

.cap-row:hover {
  border-color: var(--terra);
  transform: translateY(-3px);
  box-shadow: 0 16px 40px rgba(8, 20, 36, 0.08);
}

.cap-badge-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.cap-pillar-tag {
  display: block;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--terra);
}

.cap-pillar-name {
  display: block;
  font-size: 0.95rem;
  font-weight: 800;
  color: var(--text-strong);
}

.cap-content {
  flex: 1;
}

.cap-title {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--text-strong);
  letter-spacing: -0.02em;
  margin-bottom: 0.5rem;
}

.cap-desc {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: #64748b;
  margin-bottom: 1rem;
}

.chip, .cap-chip {
  display: inline-flex;
  align-items: center;
  font-size: 0.8125rem;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: var(--r-full);
  background: #ffffff;
  border: 1px solid var(--line);
  color: var(--text-strong);
  text-decoration: none;
  transition: all var(--dur-fast);
}

.chip:hover, .cap-chip:hover {
  border-color: var(--terra);
  color: var(--terra);
  background: var(--surface-2);
}

/* People & Baner Lab Card */
.people-card {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 2.5rem;
  background: #ffffff;
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: clamp(2rem, 4vw, 3.5rem);
  box-shadow: 0 16px 48px rgba(8, 20, 36, 0.05);
  align-items: center;
}

@media (max-width: 860px) {
  .people-card {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.people-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.25rem;
  border-right: 1px solid var(--line);
  padding-right: 2.5rem;
}

@media (max-width: 860px) {
  .people-profile {
    border-right: none;
    border-bottom: 1px solid var(--line);
    padding-right: 0;
    padding-bottom: 2rem;
  }
}

.people-avatar {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #ffffff;
  box-shadow: 0 8px 24px rgba(0, 157, 73, 0.18), 0 0 0 2px var(--terra);
}

.people-name {
  font-size: 1.35rem;
  font-weight: 850;
  color: var(--text-strong);
  margin: 0;
}

.people-role {
  display: block;
  font-size: 0.8125rem;
  font-weight: 750;
  color: var(--terra);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-top: 4px;
}

.people-location {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8125rem;
  color: #64748b;
  margin-top: 4px;
}

.people-quote-wrap {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.people-quote {
  font-size: clamp(1.02rem, 1.4vw, 1.2rem);
  line-height: 1.68;
  color: var(--text-strong);
  font-weight: 500;
  font-style: italic;
  margin: 0;
  position: relative;
}

.people-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

/* Testimonial Body */
.testi-body {
  font-size: 0.9375rem;
  line-height: 1.65;
  color: #334155;
  margin-bottom: 1.5rem;
  flex: 1;
}

/* FAQ Accordion */
.faq-section {
  padding: clamp(5rem, 8vw, 8rem) 0;
  background: var(--paper);
  border-top: 1px solid var(--line);
}

.faq-accordion {
  max-width: 860px;
  margin: 2.5rem auto 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.faq-item {
  border: 1px solid var(--line);
  border-radius: 16px;
  background: #ffffff;
  overflow: hidden;
  transition: all 0.25s ease;
}

.faq-item:hover {
  border-color: rgba(0, 157, 73, 0.3);
  box-shadow: 0 4px 16px rgba(8, 20, 36, 0.04);
}

.faq-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.35rem 1.75rem;
  background: transparent;
  border: none;
  font-family: var(--font);
  font-size: 1.05rem;
  font-weight: 750;
  color: var(--text-strong);
  text-align: left;
  cursor: pointer;
  gap: 1rem;
}

.faq-icon {
  width: 20px;
  height: 20px;
  stroke: var(--terra);
  stroke-width: 2.2;
  fill: none;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.faq-item.is-open .faq-icon,
.faq-item.active .faq-icon,
.faq-btn[aria-expanded="true"] .faq-icon {
  transform: rotate(180deg);
}

.faq-body {
  display: none;
  padding: 0 1.75rem 1.5rem;
  font-size: 0.9375rem;
  line-height: 1.65;
  color: #475569;
}

.faq-item.is-open .faq-body,
.faq-item.active .faq-body,
.faq-item[data-open] .faq-body {
  display: block;
}

/* Dual Closing Cards */
.closing-section {
  padding: clamp(5rem, 8vw, 8rem) 0;
  background: var(--surface-2);
  border-top: 1px solid var(--line);
}

.closing-title {
  font-size: clamp(1.8rem, 2.5vw, 2.35rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.03em;
  margin: 1.25rem 0 0.85rem;
}

.closing-desc {
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.closing-cta-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--terra);
  color: #ffffff !important;
  font-weight: 750;
  font-size: 0.9375rem;
  padding: 14px 24px;
  border-radius: 999px;
  text-decoration: none;
  width: fit-content;
  transition: all 0.25s ease;
}

.closing-cta-link:hover {
  background: var(--terra-hover);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 157, 73, 0.35);
}

.closing-contact-link {
  display: inline-flex;
  align-items: center;
  font-size: 0.95rem;
  color: var(--text-strong);
  text-decoration: none;
  padding: 8px 0;
  transition: color 0.2s ease;
}

.closing-contact-link:hover {
  color: var(--terra);
}

/* Corporate 5-Column Footer */
.footer-logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}

.footer-logo img {
  width: 36px !important;
  height: 36px !important;
  object-fit: contain;
}

.footer-bio {
  color: #94a3b8;
  font-size: 0.875rem;
  line-height: 1.65;
  margin: 1.25rem 0 1.5rem;
  max-width: 320px;
}

.footer-connect {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.connect-label {
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
}

.connect-icons {
  display: flex;
  align-items: center;
  gap: 10px;
}

.icon-circle {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  transition: all 0.25s ease;
}

.icon-circle:hover {
  background: var(--terra);
  border-color: var(--terra);
  transform: translateY(-2px);
}

.col-title {
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0 0 1.25rem;
}

.col-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.col-links a {
  color: #94a3b8;
  font-size: 0.875rem;
  text-decoration: none;
  transition: color 0.2s ease;
}

.col-links a:hover {
  color: #ffffff;
}

.legal-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.legal-links a {
  color: #64748b;
  font-size: 0.8125rem;
  text-decoration: none;
  transition: color 0.2s ease;
}

.legal-links a:hover {
  color: #ffffff;
}
`;

css += additionalStyles;
fs.writeFileSync(path, css, 'utf8');
console.log('corporate.css successfully enhanced!');

