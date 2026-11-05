const fs = require('fs');
const path = require('path');

const ROOT = 'c:/Users/Prasad/Downloads/Webwork/Inrank';

const INTER_CSS_BLOCK = `
/* Strict Universal Inter Font Enforcement */
*, html, body, h1, h2, h3, h4, h5, h6, p, span, a, div, button, input, textarea, select, blockquote, label, li, ul, ol, td, th, .font-display, .font-sans, .font-serif {
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
}
`;

// 1. Update src/index.css
const indexCssPath = path.join(ROOT, 'src/index.css');
let indexCss = fs.readFileSync(indexCssPath, 'utf8');
if (!indexCss.includes('Strict Universal Inter Font Enforcement')) {
  // Inject right after line 1 or right before body
  indexCss = INTER_CSS_BLOCK + '\n' + indexCss;
  fs.writeFileSync(indexCssPath, indexCss, 'utf8');
  console.log('Updated src/index.css');
} else {
  console.log('src/index.css already updated');
}

// 2. Update justdial-profile.html
const jdPath = path.join(ROOT, 'justdial-profile.html');
let jdHtml = fs.readFileSync(jdPath, 'utf8');
if (!jdHtml.includes('Strict Universal Inter Font Enforcement')) {
  jdHtml = jdHtml.replace('<style>', '<style>\n' + INTER_CSS_BLOCK);
  jdHtml = jdHtml.replace(
    "sans: ['Inter', 'sans-serif'],",
    "sans: ['Inter', 'sans-serif'],\n              serif: ['Inter', 'sans-serif'],\n              display: ['Inter', 'sans-serif'],"
  );
  fs.writeFileSync(jdPath, jdHtml, 'utf8');
  console.log('Updated justdial-profile.html');
}

// 3. Update homepage-3.html
const hp3Path = path.join(ROOT, 'homepage-3.html');
let hp3Html = fs.readFileSync(hp3Path, 'utf8');
if (!hp3Html.includes('Strict Universal Inter Font Enforcement')) {
  hp3Html = hp3Html.replace('<style>', '<style>\n' + INTER_CSS_BLOCK);
  hp3Html = hp3Html.replace(
    'display: ["Inter", "system-ui", "-apple-system", "sans-serif"],',
    'display: ["Inter", "system-ui", "-apple-system", "sans-serif"],\n              serif: ["Inter", "system-ui", "-apple-system", "sans-serif"],'
  );
  // Also replace font-serif with font-sans
  hp3Html = hp3Html.replaceAll('font-serif', 'font-sans');
  fs.writeFileSync(hp3Path, hp3Html, 'utf8');
  console.log('Updated homepage-3.html');
}

// 4. Update src/homepage3.ts
const hp3TsPath = path.join(ROOT, 'src/homepage3.ts');
let hp3Ts = fs.readFileSync(hp3TsPath, 'utf8');
if (hp3Ts.includes('font-serif')) {
  hp3Ts = hp3Ts.replaceAll('font-serif', 'font-sans');
  fs.writeFileSync(hp3TsPath, hp3Ts, 'utf8');
  console.log('Updated src/homepage3.ts (replaced font-serif)');
}

// 5. Update homepage-2.html
const hp2Path = path.join(ROOT, 'homepage-2.html');
let hp2Html = fs.readFileSync(hp2Path, 'utf8');
if (!hp2Html.includes('Strict Universal Inter Font Enforcement')) {
  hp2Html = hp2Html.replace('<style>', '<style>\n' + INTER_CSS_BLOCK);
  hp2Html = hp2Html.replace(
    "display: ['Inter', 'system-ui', 'sans-serif'],",
    "display: ['Inter', 'system-ui', 'sans-serif'],\n              serif: ['Inter', 'system-ui', 'sans-serif'],"
  );
  fs.writeFileSync(hp2Path, hp2Html, 'utf8');
  console.log('Updated homepage-2.html');
}

// 6. Update index.html
const indexPath = path.join(ROOT, 'index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf8');
if (!indexHtml.includes('Strict Universal Inter Font Enforcement')) {
  indexHtml = indexHtml.replace('<style>', '<style>\n' + INTER_CSS_BLOCK);
  fs.writeFileSync(indexPath, indexHtml, 'utf8');
  console.log('Updated index.html');
}

// 7. Update pricing.html
const pricingPath = path.join(ROOT, 'pricing.html');
let pricingHtml = fs.readFileSync(pricingPath, 'utf8');
if (!pricingHtml.includes('Strict Universal Inter Font Enforcement')) {
  pricingHtml = pricingHtml.replace('<style>', '<style>\n' + INTER_CSS_BLOCK);
  fs.writeFileSync(pricingPath, pricingHtml, 'utf8');
  console.log('Updated pricing.html');
}

// 8. Update contact.html
const contactPath = path.join(ROOT, 'contact.html');
let contactHtml = fs.readFileSync(contactPath, 'utf8');
if (!contactHtml.includes('Strict Universal Inter Font Enforcement')) {
  contactHtml = contactHtml.replace('</head>', '  <style>' + INTER_CSS_BLOCK + '  </style>\n  </head>');
  fs.writeFileSync(contactPath, contactHtml, 'utf8');
  console.log('Updated contact.html');
}

// 9. Update website-design-company-in-pune.html
const webPunePath = path.join(ROOT, 'website-design-company-in-pune.html');
let webPuneHtml = fs.readFileSync(webPunePath, 'utf8');
if (!webPuneHtml.includes('Strict Universal Inter Font Enforcement')) {
  webPuneHtml = webPuneHtml.replace('<style>', '<style>\n' + INTER_CSS_BLOCK);
  fs.writeFileSync(webPunePath, webPuneHtml, 'utf8');
  console.log('Updated website-design-company-in-pune.html');
}

// 10. Update digital-marketing-agency-in-pune.html
const dmPunePath = path.join(ROOT, 'digital-marketing-agency-in-pune.html');
let dmPuneHtml = fs.readFileSync(dmPunePath, 'utf8');
if (!dmPuneHtml.includes('Strict Universal Inter Font Enforcement')) {
  dmPuneHtml = dmPuneHtml.replace('<style>', '<style>\n' + INTER_CSS_BLOCK);
  fs.writeFileSync(dmPunePath, dmPuneHtml, 'utf8');
  console.log('Updated digital-marketing-agency-in-pune.html');
}

// 11. Update generate_portfolio_system.ts
const genPortPath = path.join(ROOT, 'generate_portfolio_system.ts');
let genPortTs = fs.readFileSync(genPortPath, 'utf8');
genPortTs = genPortTs.replace(
  `      *, html, body, h1, h2, h3, h4, h5, h6, p, span, a, div, button, input, textarea, select, blockquote, .font-display, .font-sans, .font-serif {
        font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
      }`,
  `      *, html, body, h1, h2, h3, h4, h5, h6, p, span, a, div, button, input, textarea, select, blockquote, label, li, ul, ol, td, th, .font-display, .font-sans, .font-serif {
        font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
      }`
);
fs.writeFileSync(genPortPath, genPortTs, 'utf8');
console.log('Updated generate_portfolio_system.ts');
