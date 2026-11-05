const fs = require('fs');

let navCss = fs.readFileSync('c:/Users/PrasadMhaske/Downloads/Anti Websites/Web/Inrank/inrank2.0/css/nav.css', 'utf8');

// Replace any .nav-logo img sizing rules with clean, proper dimensions
const logoFix = `
/* ── Inrank Brand Identity in Nav ── */
.nav-logo {
  display: flex !important;
  align-items: center !important;
  gap: 10px !important;
  text-decoration: none !important;
  flex-shrink: 0 !important;
  z-index: 10 !important;
}

.nav-logo img,
.nav-logo .logo-icon {
  width: 34px !important;
  height: 34px !important;
  max-width: 34px !important;
  max-height: 34px !important;
  object-fit: contain !important;
  display: block !important;
  filter: none !important;
}

.nav-logo-brand {
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  line-height: 1 !important;
}

.nav-logo-name {
  font-family: var(--font) !important;
  font-size: 1.15rem !important;
  font-weight: 800 !important;
  letter-spacing: -0.025em !important;
  color: #ffffff !important;
  transition: color 0.3s var(--ease) !important;
  line-height: 1 !important;
}

#nav.is-light .nav-logo-name,
#nav.nav-open .nav-logo-name {
  color: #081424 !important;
}

.nav-logo-sub {
  font-family: var(--font) !important;
  font-size: 0.52rem !important;
  font-weight: 800 !important;
  letter-spacing: 0.14em !important;
  text-transform: uppercase !important;
  color: var(--terra) !important;
  margin-top: 3px !important;
  line-height: 1 !important;
}

/* Ensure nav items are clearly styled and aligned */
.nav-links {
  margin: 0 !important;
  padding: 0 !important;
}

.nav-bar {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
}
`;

navCss += '\n' + logoFix;
fs.writeFileSync('c:/Users/PrasadMhaske/Downloads/Anti Websites/Web/Inrank/inrank2.0/css/nav.css', navCss);
console.log('Added Inrank brand logo styles to nav.css!');

