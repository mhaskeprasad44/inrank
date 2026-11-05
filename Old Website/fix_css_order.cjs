const fs = require('fs');
const p = 'src/index.css';
let content = fs.readFileSync(p, 'utf8');

// Normalize line breaks
content = content.replace(/\r\n/g, '\n');

const import1 = "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');";
const import2 = '@import "tailwindcss";';

content = content.replace(import1, '').replace(import2, '');

const rule = `/* Strict Universal Inter Font Enforcement */
*, html, body, h1, h2, h3, h4, h5, h6, p, span, a, div, button, input, textarea, select, blockquote, label, li, ul, ol, td, th, .font-display, .font-sans, .font-serif {
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
}`;

content = content.replace(rule, '');

content = import1 + '\n' + import2 + '\n\n' + rule + '\n\n' + content.trimStart();

fs.writeFileSync(p, content, 'utf8');
console.log('Fixed imports order in src/index.css');
