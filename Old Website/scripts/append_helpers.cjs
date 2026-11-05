const fs = require('fs');
let css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');

const extras = `
/* ── Additional Structural Helpers ── */
.people-meta {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  text-align: center !important;
}

.people-quote-wrap {
  display: flex !important;
  flex-direction: column !important;
}

.section-head {
  margin-bottom: 2.5rem !important;
}

.theme-corporate {
  color-scheme: light;
}
`;

if (!css.includes('.people-quote-wrap')) {
  css += extras;
  fs.writeFileSync('inrank2.0/css/corporate.css', css, 'utf8');
  console.log('Appended additional helpers to corporate.css');
}

