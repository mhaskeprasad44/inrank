const fs = require('fs');
let c = fs.readFileSync('vite.config.ts', 'utf8');
c = c.replace(
  "pricing: path.resolve(__dirname, 'pricing.html'),",
  "pricing: path.resolve(__dirname, 'pricing.html'),\n          contact: path.resolve(__dirname, 'contact.html'),"
);
fs.writeFileSync('vite.config.ts', c, 'utf8');
console.log('Successfully updated vite.config.ts');
