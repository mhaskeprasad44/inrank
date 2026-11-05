const fs = require('fs');
let css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');

const newStyles = `
/* ══════════════════════════════════════════════════════════════
   INTERACTIVE PRICING TABS & CARDS ARCHITECTURE (LIVE WEBSITE IMPORT)
   ══════════════════════════════════════════════════════════════ */
.pricing-tabs-wrap {
  display: flex !important;
  justify-content: center !important;
  margin: 2rem 0 2.5rem !important;
}

.pricing-tabs-bar {
  display: inline-flex !important;
  background: #f1f5f9 !important;
  padding: 6px !important;
  border-radius: 14px !important;
  gap: 6px !important;
  border: 1px solid #e2e8f0 !important;
  max-width: 100% !important;
  overflow-x: auto !important;
}

.pricing-tab-btn {
  padding: 10px 24px !important;
  border-radius: 10px !important;
  font-size: 0.88rem !important;
  font-weight: 750 !important;
  color: #64748b !important;
  background: transparent !important;
  border: none !important;
  cursor: pointer !important;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1) !important;
  white-space: nowrap !important;
  font-family: inherit !important;
}

.pricing-tab-btn:hover {
  color: #081424 !important;
}

.pricing-tab-btn.active {
  background: #ffffff !important;
  color: #081424 !important;
  box-shadow: 0 4px 12px rgba(8, 20, 36, 0.08) !important;
}

.pricing-content-panel {
  display: grid !important;
  grid-template-columns: repeat(3, 1fr) !important;
  gap: 1.75rem !important;
  align-items: stretch !important;
}

.pricing-content-panel.is-hidden {
  display: none !important;
}

/* Plan Kicker: Pure Clean Text (Strict Rule: NO PILLS, NO GREEN DOTS) */
.tier-kicker {
  font-size: 0.72rem !important;
  font-weight: 850 !important;
  letter-spacing: 0.12em !important;
  color: #009d49 !important;
  background: none !important;
  border: none !important;
  border-radius: 0 !important;
  padding: 0 !important;
  text-transform: uppercase !important;
  margin-bottom: 0.75rem !important;
  display: block !important;
}

.pricing-card.featured .tier-kicker {
  color: #00bf5d !important;
}

/* Value Guarantee & Transparent Add-Ons Bar */
.pricing-guarantee-bar {
  margin-top: 3.5rem !important;
  background: #f8fafc !important;
  border: 1px solid #e2e8f0 !important;
  border-radius: 18px !important;
  padding: 2rem 2.5rem !important;
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  gap: 2rem !important;
  flex-wrap: wrap !important;
}

.pricing-guarantee-bar h4 {
  font-size: 1.2rem !important;
  font-weight: 850 !important;
  color: #081424 !important;
  margin: 0 0 0.4rem !important;
  letter-spacing: -0.01em !important;
}

.pricing-guarantee-bar p {
  font-size: 0.92rem !important;
  color: #64748b !important;
  margin: 0 !important;
  line-height: 1.5 !important;
}

.pricing-guarantee-bar strong {
  color: #081424 !important;
}

.pricing-guarantee-actions {
  display: flex !important;
  align-items: center !important;
  gap: 1rem !important;
  flex-shrink: 0 !important;
}

/* ══════════════════════════════════════════════════════════════
   4 GROWTH PILLARS REDESIGN (IMAGE 5 SPECIFICATION)
   ══════════════════════════════════════════════════════════════ */
.pillars-grid-4 {
  display: grid !important;
  grid-template-columns: repeat(4, 1fr) !important;
  gap: 1.25rem !important;
  margin: 2rem 0 !important;
}

.pillar-card-4 {
  background: #ffffff !important;
  border: 1px solid #e2e8f0 !important;
  border-radius: 16px !important;
  padding: 1.75rem 1.5rem !important;
  display: flex !important;
  flex-direction: column !important;
  box-shadow: 0 2px 6px rgba(8, 20, 36, 0.03) !important;
  transition: transform 0.2s ease, box-shadow 0.2s ease !important;
}

.pillar-card-4:hover {
  transform: translateY(-3px) !important;
  box-shadow: 0 10px 24px rgba(8, 20, 36, 0.07) !important;
}

.pillar-card-4.featured {
  border: 1.5px solid #009d49 !important;
  box-shadow: 0 6px 18px rgba(0, 157, 73, 0.1) !important;
}

.pillar-card-4-header {
  display: flex !important;
  align-items: baseline !important;
  justify-content: space-between !important;
  margin-bottom: 0.85rem !important;
}

.pillar-card-4-kicker {
  font-size: 0.72rem !important;
  font-weight: 850 !important;
  letter-spacing: 0.12em !important;
  text-transform: uppercase !important;
  color: #64748b !important;
}

.pillar-card-4.featured .pillar-card-4-kicker {
  color: #009d49 !important;
}

.pillar-card-4-stat {
  font-size: 1.65rem !important;
  font-weight: 850 !important;
  color: #081424 !important;
  letter-spacing: -0.02em !important;
}

.pillar-card-4.featured .pillar-card-4-stat {
  color: #009d49 !important;
}

.pillar-card-4-title {
  font-size: 1.05rem !important;
  font-weight: 800 !important;
  color: #081424 !important;
  margin: 0 0 0.3rem !important;
  letter-spacing: -0.01em !important;
}

.pillar-card-4-sub {
  font-size: 0.84rem !important;
  color: #64748b !important;
  margin: 0 !important;
}

@media (max-width: 991px) {
  .pricing-content-panel {
    grid-template-columns: 1fr !important;
  }
  .pricing-card.featured {
    transform: none !important;
  }
  .pillars-grid-4 {
    grid-template-columns: repeat(2, 1fr) !important;
  }
  .pricing-guarantee-bar {
    flex-direction: column !important;
    align-items: flex-start !important;
  }
}

@media (max-width: 576px) {
  .pillars-grid-4 {
    grid-template-columns: 1fr !important;
  }
}
`;

// Append to corporate.css
css += '\n' + newStyles;
fs.writeFileSync('inrank2.0/css/corporate.css', css, 'utf8');
console.log('Successfully appended pricing and pillar styles to inrank2.0/css/corporate.css');

