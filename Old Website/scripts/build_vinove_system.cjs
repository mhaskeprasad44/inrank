const fs = require('fs');
const path = require('path');

// 1. Read Vinove's actual CSS
let navCss = fs.readFileSync('scripts/vinove_assets/css/nav.css', 'utf8');
let corpCss = fs.readFileSync('scripts/vinove_assets/css/pages/corporate.css', 'utf8');
let footerCss = fs.readFileSync('scripts/vinove_assets/css/footer-social.css', 'utf8');

// Function to replace Vinove terra/orange colors with Inrank emerald greens
function brandifyCss(css) {
  return css
    // Colors
    .replace(/#b94b36/gi, '#009d49')
    .replace(/#943b2b/gi, '#00b755')
    .replace(/#ff6848/gi, '#10b981')
    .replace(/#c8553d/gi, '#009d49')
    .replace(/rgba\(200,\s*85,\s*61,/gi, 'rgba(0, 157, 73,')
    .replace(/rgba\(185,\s*75,\s*54,/gi, 'rgba(0, 157, 73,')
    .replace(/rgba\(255,\s*104,\s*72,/gi, 'rgba(16, 185, 129,')
    // Backgrounds & neutrals
    .replace(/#fbfaf7/gi, '#ffffff')
    .replace(/#f4f2ed/gi, '#f8fafc')
    .replace(/#f1f0ef/gi, '#f1f5f9')
    .replace(/#f7f6f2/gi, '#f8fafc')
    .replace(/#d9d6cf/gi, '#e2e8f0');
}

navCss = brandifyCss(navCss);
corpCss = brandifyCss(corpCss);
footerCss = brandifyCss(footerCss);

// Let's add Inrank-specific components styled in Vinove's exact corporate language:
const inrankComponentsCss = `
/* ============================================================
   INRANK SPECIFIC CORPORATE COMPONENTS
   Crafted to match Vinove Design System (Inter + Emerald + Slate Navy)
   ============================================================ */

/* ── Client Logo Marquee ── */
.marquee-band {
  padding: 3.5rem 0;
  background-color: var(--white);
  border-bottom: 1px solid var(--line);
  overflow: hidden;
}

.marquee-band-header {
  text-align: center;
  margin-bottom: 2rem;
}

.marquee-band-header p {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}

.marquee-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
}

.marquee-track {
  display: flex;
  align-items: center;
  gap: 3.5rem;
  width: max-content;
  animation: marquee-scroll 32s linear infinite;
}

.marquee-track:hover {
  animation-play-state: paused;
}

@keyframes marquee-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.client-logo-item {
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  filter: grayscale(100%);
  opacity: 0.6;
  transition: all var(--dur-fast);
}

.client-logo-item:hover {
  filter: grayscale(0%);
  opacity: 1;
  transform: scale(1.06);
}

.client-logo-item img {
  max-height: 38px;
  max-width: 130px;
  object-fit: contain;
}

/* ── Capabilities / Services Rows (Vinove Companies style) ── */
.capabilities-section {
  padding: 7rem 0;
  background-color: var(--white);
}

.cap-rows {
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
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
    grid-template-columns: 140px 180px 1fr 60px;
    align-items: center;
    gap: 2.5rem;
  }
}

.cap-outcome {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.cap-outcome span {
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--terra);
}

.cap-outcome strong {
  font-size: 1.625rem;
  font-weight: 800;
  color: var(--text-strong);
  letter-spacing: -0.02em;
}

.cap-badge {
  display: flex;
  align-items: center;
  gap: 10px;
}

.cap-icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: var(--surface-2);
  border: 1px solid var(--line);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--terra);
  flex-shrink: 0;
}

.cap-icon svg {
  width: 24px;
  height: 24px;
}

.cap-body h3 {
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--text-strong);
  letter-spacing: -0.02em;
  margin-bottom: 0.5rem;
}

.cap-body p {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--text-body);
  margin-bottom: 1rem;
}

.cap-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.cap-chip {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: var(--r-full);
  background: var(--surface-2);
  border: 1px solid var(--line);
  color: var(--text-strong);
}

.cap-action {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: var(--text-strong);
  transition: all var(--dur-fast);
}

.cap-row:hover .cap-action {
  background: var(--terra);
  color: var(--white);
  border-color: var(--terra);
  transform: translate(2px, -2px);
}

/* ── Work / Case Studies Showcase (Vinove Card style) ── */
.work-section {
  padding: 7rem 0;
  background-color: var(--surface-2);
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
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all var(--dur-base) var(--ease);
}

.work-card:hover {
  border-color: var(--terra);
  transform: translateY(-5px);
  box-shadow: 0 20px 48px rgba(8, 20, 36, 0.08);
}

.work-card-media {
  height: 240px;
  background: linear-gradient(135deg, var(--navy) 0%, var(--navy-2) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.work-card-media img {
  max-height: 80px;
  max-width: 200px;
  object-fit: contain;
  filter: drop-shadow(0 4px 12px rgba(0,0,0,0.3));
}

.work-card-pill {
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 0.6875rem;
  font-weight: 700;
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

.work-card-body h3 {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--text-strong);
  letter-spacing: -0.015em;
}

.work-card-body p {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--text-body);
}

.work-card-footer {
  margin-top: auto;
  padding: 1.25rem 2rem;
  border-top: 1px solid var(--line);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--paper);
}

/* ── Transparent Corporate Pricing Cards ── */
.pricing-section {
  padding: 7rem 0;
  background-color: var(--white);
}

.pricing-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 4rem;
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
  padding: 2.75rem 2.25rem;
  background: var(--white);
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all var(--dur-base) var(--ease);
}

.pricing-card:hover {
  border-color: var(--terra);
  transform: translateY(-5px);
  box-shadow: 0 20px 48px rgba(8, 20, 36, 0.08);
}

.pricing-card.featured {
  background: var(--navy);
  color: var(--white);
  border-color: var(--navy-2);
  box-shadow: 0 24px 60px rgba(8, 20, 36, 0.22);
}

.pricing-card.featured h3,
.pricing-card.featured .pricing-price {
  color: var(--white);
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
  background: var(--terra);
  color: var(--white);
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
  color: var(--muted);
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

.pricing-price-wrap {
  display: flex;
  align-items: baseline;
  gap: 6px;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--line);
}

.pricing-card.featured .pricing-price-wrap {
  border-bottom-color: rgba(255, 255, 255, 0.12);
}

.pricing-price {
  font-size: 2.75rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--text-strong);
  line-height: 1;
}

.pricing-period {
  font-size: 0.875rem;
  color: var(--muted);
}

.pricing-features {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 2.5rem;
  list-style: none;
  padding: 0;
}

.pricing-feature-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.875rem;
  color: var(--text-body);
}

.pricing-feature-item svg {
  width: 18px;
  height: 18px;
  color: var(--terra);
  flex-shrink: 0;
  margin-top: 2px;
}

.pricing-card .button {
  margin-top: auto;
  width: 100%;
}

/* ── Addons Grid ── */
.addons-wrap {
  margin-top: 4rem;
  padding: 3rem;
  background: var(--surface-2);
  border: 1px solid var(--line);
  border-radius: 20px;
}

.addons-wrap h4 {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--text-strong);
  margin-bottom: 1.5rem;
}

.addons-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 640px) {
  .addons-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .addons-grid { grid-template-columns: repeat(3, 1fr); }
}

.addon-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: 12px;
}

.addon-card strong {
  font-size: 0.9375rem;
  font-weight: 700;
  color: var(--text-strong);
}

.addon-card span {
  font-size: 0.75rem;
  color: var(--muted);
  display: block;
}

.addon-card .addon-price {
  font-size: 1rem;
  font-weight: 800;
  color: var(--terra);
}

/* ── Comparison Table ── */
.comparison-section {
  padding: 7rem 0;
  background-color: var(--white);
  border-top: 1px solid var(--line);
}

.comp-table-box {
  margin-top: 3.5rem;
  overflow-x: auto;
  border: 1px solid var(--line);
  border-radius: 20px;
  box-shadow: 0 12px 36px rgba(8, 20, 36, 0.04);
  background: var(--white);
}

.inrank-compare-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 0.875rem;
  min-width: 680px;
}

.inrank-compare-table th,
.inrank-compare-table td {
  padding: 20px 24px;
  border-bottom: 1px solid var(--line);
}

.inrank-compare-table th {
  background: var(--surface-2);
  font-weight: 800;
  color: var(--text-strong);
  font-size: 0.9375rem;
}

.inrank-compare-table th.highlight-col,
.inrank-compare-table td.highlight-col {
  background: rgba(0, 157, 73, 0.04);
  border-left: 2px solid var(--terra);
  border-right: 2px solid var(--terra);
}

.inrank-compare-table th.highlight-col {
  background: rgba(0, 157, 73, 0.08);
  color: var(--terra);
}

.comp-badge-good {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 700;
  color: var(--terra);
}

.comp-badge-bad {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #991b1b;
}

/* ── Testimonials Grid ── */
.testi-section {
  padding: 7rem 0;
  background-color: var(--surface-2);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
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
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 2.5rem 2.25rem;
  display: flex;
  flex-direction: column;
  transition: all var(--dur-base) var(--ease);
}

.testi-card:hover {
  border-color: var(--terra);
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(8, 20, 36, 0.06);
}

.testi-stars {
  display: flex;
  gap: 3px;
  color: #f59e0b;
  margin-bottom: 1.25rem;
}

.testi-stars svg {
  width: 16px;
  height: 16px;
  fill: currentColor;
}

.testi-quote {
  font-size: 0.9375rem;
  line-height: 1.65;
  color: var(--text-body);
  margin-bottom: 1.75rem;
  font-style: italic;
}

.testi-author {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: auto;
}

.testi-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--terra);
  color: var(--white);
  font-size: 0.875rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.testi-name {
  font-size: 0.9375rem;
  font-weight: 800;
  color: var(--text-strong);
}

.testi-role {
  font-size: 0.75rem;
  color: var(--muted);
}

/* ── FAQ Accordion ── */
.faq-section {
  padding: 7rem 0;
  background-color: var(--white);
}

.faq-accordion {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 3.5rem;
  max-width: 860px;
  margin-left: auto;
  margin-right: auto;
}

.faq-item {
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: 14px;
  overflow: hidden;
  transition: border-color var(--dur-fast);
}

.faq-item.active {
  border-color: var(--terra);
}

.faq-question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 24px;
  font-family: var(--font);
  font-size: 1.0625rem;
  font-weight: 700;
  color: var(--text-strong);
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
  gap: 16px;
}

.faq-question:hover {
  background: var(--surface-2);
}

.faq-arrow {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: var(--muted);
  transition: transform var(--dur-base) var(--ease);
}

.faq-item.active .faq-arrow {
  transform: rotate(180deg);
  color: var(--terra);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s var(--ease), padding 0.3s;
}

.faq-item.active .faq-answer {
  max-height: 400px;
  padding: 0 24px 20px;
}

.faq-answer p {
  font-size: 0.9375rem;
  line-height: 1.65;
  color: var(--text-body);
}

/* ── Contact Form Section (Vinove style) ── */
.contact-section {
  padding: 7rem 0;
  background-color: var(--surface-2);
  border-top: 1px solid var(--line);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.5rem;
}

@media (min-width: 960px) {
  .contact-grid {
    grid-template-columns: 0.9fr 1.1fr;
  }
}

.contact-form-card {
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 3rem 2.5rem;
  box-shadow: 0 16px 40px rgba(8, 20, 36, 0.05);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 1.25rem;
}

.form-label {
  font-size: 0.8125rem;
  font-weight: 700;
  color: var(--text-strong);
}

.form-input,
.form-select,
.form-textarea {
  padding: 13px 16px;
  font-family: var(--font);
  font-size: 0.9375rem;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--white);
  color: var(--text-strong);
  outline: none;
  transition: border-color var(--dur-fast), box-shadow var(--dur-fast);
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  border-color: var(--terra);
  box-shadow: 0 0 0 3px rgba(0, 157, 73, 0.12);
}

.form-textarea {
  resize: vertical;
  min-height: 110px;
}

.form-select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  padding-right: 36px;
}
`;

// Save the compiled master corporate and nav CSS into inrank2.0/css
const targetDir = 'c:/Users/PrasadMhaske/Downloads/Anti Websites/Web/Inrank/inrank2.0/css';
fs.writeFileSync(path.join(targetDir, 'nav.css'), navCss);
fs.writeFileSync(path.join(targetDir, 'corporate.css'), corpCss + '\n' + inrankComponentsCss);
fs.writeFileSync(path.join(targetDir, 'footer-social.css'), footerCss);

// Copy vinove's core.js into inrank2.0/js/core.js
let coreJs = fs.readFileSync('scripts/vinove_assets/js/core.js', 'utf8');

// Add FAQ accordion logic to core.js
coreJs += `
/* ── FAQ Accordion Toggle ── */
;(function () {
  document.querySelectorAll('.faq-question').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var item = btn.closest('.faq-item');
      if (!item) return;
      var wasActive = item.classList.contains('active');
      var accordion = item.closest('.faq-accordion');
      if (accordion) {
        accordion.querySelectorAll('.faq-item.active').forEach(function(other) {
          other.classList.remove('active');
        });
      }
      if (!wasActive) item.classList.add('active');
    });
  });
})();
`;

fs.writeFileSync('c:/Users/PrasadMhaske/Downloads/Anti Websites/Web/Inrank/inrank2.0/js/core.js', coreJs);

console.log('Successfully generated Inrank 2.0 Vinove CSS & JS systems!');
