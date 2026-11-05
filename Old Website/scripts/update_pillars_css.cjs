const fs = require('fs');

let css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');

// Replace the .pillar-card-4 rules with the exact pixel-perfect version matching the user uploaded image
const targetCss = `/* ==========================================================================
   Image 3 Authentic 4-Pillar Architectural Cards
   ========================================================================== */
.pillars-grid-4 {
  display: grid !important;
  grid-template-columns: repeat(4, 1fr) !important;
  gap: 1.25rem !important;
  margin: 2.25rem 0 !important;
}

.pillar-card-4 {
  background: #ffffff !important;
  border: 1px solid #eef2f6 !important;
  border-radius: 16px !important;
  padding: 1.65rem 1.5rem !important;
  display: flex !important;
  flex-direction: column !important;
  box-shadow: 0 1px 3px rgba(8, 20, 36, 0.02) !important;
  text-decoration: none !important;
  position: relative !important;
  overflow: hidden !important;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease !important;
}

.pillar-card-4:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 10px 24px rgba(8, 20, 36, 0.06) !important;
  border-color: #cbd5e1 !important;
}

.pillar-card-4.featured {
  border: 1px solid rgba(0, 157, 73, 0.3) !important;
  box-shadow: 0 4px 18px rgba(0, 157, 73, 0.06) !important;
}

.pillar-card-4.featured::before {
  content: "" !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  height: 3.5px !important;
  background: #009d49 !important;
}

.pillar-card-4-header {
  display: flex !important;
  align-items: baseline !important;
  justify-content: space-between !important;
  margin-bottom: 1.25rem !important;
}

.pillar-card-4-kicker {
  font-size: 0.72rem !important;
  font-weight: 800 !important;
  letter-spacing: 0.08em !important;
  text-transform: uppercase !important;
  color: #64748b !important;
}

.pillar-card-4.featured .pillar-card-4-kicker {
  color: #009d49 !important;
}

.pillar-card-4-stat {
  font-size: 1.75rem !important;
  font-weight: 850 !important;
  color: #081424 !important;
  letter-spacing: -0.02em !important;
  line-height: 1 !important;
}

.pillar-card-4.featured .pillar-card-4-stat {
  color: #009d49 !important;
}

.pillar-card-4-title {
  font-size: 1.1rem !important;
  font-weight: 800 !important;
  color: #081424 !important;
  margin: 0 0 0.35rem !important;
  letter-spacing: -0.02em !important;
  line-height: 1.25 !important;
}

.pillar-card-4-sub {
  font-size: 0.85rem !important;
  font-weight: 500 !important;
  color: #64748b !important;
  margin: 0 !important;
  line-height: 1.4 !important;
}`;

// Check if corporate.css has the section
if (css.includes('.pillar-card-4 {')) {
  // Replace from .pillars-grid-4 to .pillar-card-4-sub { ... }
  const regex = /\/\* ==========================================================================\s+Image 3 Authentic 4-Pillar Architectural Cards[\s\S]*?\.pillar-card-4-sub \{[\s\S]*?\}/;
  if (regex.test(css)) {
    css = css.replace(regex, targetCss);
    fs.writeFileSync('inrank2.0/css/corporate.css', css, 'utf8');
    console.log('Successfully updated corporate.css with pixel-perfect pillar cards!');
  } else {
    // If not matching exact comment, replace .pillars-grid-4 block
    const fallbackRegex = /\.pillars-grid-4\s*\{[\s\S]*?\.pillar-card-4-sub\s*\{[^}]*\}/;
    css = css.replace(fallbackRegex, targetCss);
    fs.writeFileSync('inrank2.0/css/corporate.css', css, 'utf8');
    console.log('Successfully updated corporate.css via fallback regex!');
  }
} else {
  css += '\n\n' + targetCss;
  fs.writeFileSync('inrank2.0/css/corporate.css', css, 'utf8');
  console.log('Appended targetCss to corporate.css');
}

