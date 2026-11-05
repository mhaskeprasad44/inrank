const fs = require('fs');

let html = fs.readFileSync('inrank2.0/index.html', 'utf8');
const jsonLd = JSON.parse(fs.readFileSync('scripts/index_json_ld.json', 'utf8'))[0];

// Insert JSON-LD right before </head>
if (!html.includes('application/ld+json')) {
  html = html.replace('</head>', `  ${jsonLd}\n</head>`);
  fs.writeFileSync('inrank2.0/index.html', html, 'utf8');
  console.log('✓ Added JSON-LD schema to inrank2.0/index.html');
} else {
  console.log('JSON-LD already present in inrank2.0/index.html');
}

