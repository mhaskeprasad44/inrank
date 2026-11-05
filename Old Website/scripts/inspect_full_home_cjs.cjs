const fs = require('fs');

const code = fs.readFileSync('scripts/build_full_inrank2_home.cjs', 'utf8');
const h1s = code.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi) || [];
const h2s = code.match(/<h2[^>]*>[\s\S]*?<\/h2>/gi) || [];

console.log('build_full_inrank2_home.cjs H1:');
h1s.forEach(h => console.log(' - ' + h.replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ')));

console.log('\nbuild_full_inrank2_home.cjs H2 (first 25):');
h2s.slice(0, 25).forEach(h => console.log(' - ' + h.replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ')));

