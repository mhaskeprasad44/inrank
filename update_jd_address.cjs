const fs = require('fs');
const path = require('path');

const jdPath = path.join(__dirname, 'justdial-profile.html');
let html = fs.readFileSync(jdPath, 'utf8');

// 1. Header address
html = html.replace(
  'FC Road, Shivaji Nagar, Pune, Maharashtra 411005 · Serving Pune, Mumbai &amp; Global Brands',
  'Office No. 11, Shree Bhagwati Suvarna Complex, Pancard Club Rd, Baner Gaon, Baner, Pune 411045 · Serving Pune, Mumbai &amp; Global Brands'
);

// 2. Physical address row
html = html.replace(
  'FC Road, Shivaji Nagar, Pune, Maharashtra 411005 (Near Fergusson College / Shivaji Nagar Central Metro Station)',
  'Office No. 11, Shree Bhagwati Suvarna Complex, Pancard Club Rd, Baner Gaon, Baner, Pune, Maharashtra 411045 (Near Pancard Club / Baner Gaon, Off Baner Main Road)'
);

// 3. Local service hubs
html = html.replace(
  'Shivaji Nagar, FC Road, JM Road, Baner, Balewadi, Hinjewadi, Wakad, Kothrud',
  'Baner, Balewadi, Hinjewadi, Wakad, Aundh, Pashan, FC Road, Shivaji Nagar, Kothrud'
);

// 4. About description
html = html.replace(
  'headquartered on FC Road, Shivaji Nagar.',
  'headquartered at Office No. 11, Shree Bhagwati Suvarna Complex, Pancard Club Rd, Baner, Pune.'
);

fs.writeFileSync(jdPath, html, 'utf8');
console.log('✓ Updated justdial-profile.html with Baner address');

// Also copy to dist/
const distJd = path.join(__dirname, 'dist', 'justdial-profile.html');
fs.copyFileSync(jdPath, distJd);
console.log('✓ Copied updated justdial-profile.html to dist/');
