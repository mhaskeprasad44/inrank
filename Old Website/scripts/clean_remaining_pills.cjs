const fs = require('fs');
let css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');

const pillOverrides = `
/* ── Clean Tag Overrides (No Pills / No Borders / No Bubbles) ── */
.tier-pill,
.featured-pill,
.work-card-pill {
  display: inline-block !important;
  font-size: 0.72rem !important;
  font-weight: 800 !important;
  letter-spacing: 0.14em !important;
  text-transform: uppercase !important;
  padding: 0 !important;
  border: none !important;
  border-radius: 0 !important;
  background: transparent !important;
  box-shadow: none !important;
  margin-bottom: 0.85rem !important;
}

.tier-pill {
  color: #009d49 !important;
}

.pricing-card.featured .tier-pill,
.featured-pill {
  color: #00bf5d !important;
}

.work-card-pill {
  position: static !important;
  color: #009d49 !important;
}
`;

css += '\n\n' + pillOverrides;
fs.writeFileSync('inrank2.0/css/corporate.css', css, 'utf8');
console.log('Appended clean pill overrides to corporate.css');

