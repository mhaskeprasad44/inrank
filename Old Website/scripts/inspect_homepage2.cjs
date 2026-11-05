const fs = require('fs');

const p2 = fs.readFileSync('homepage-2.html', 'utf8');
const h1s = p2.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi) || [];
const h2s = p2.match(/<h2[^>]*>[\s\S]*?<\/h2>/gi) || [];
console.log('Homepage-2 H1:');
h1s.forEach(h => console.log(' - ' + h.replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ')));
console.log('Homepage-2 H2:');
h2s.forEach(h => console.log(' - ' + h.replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ')));

const ctas = p2.match(/<(a|button)[^>]*>(.*?)<\/(a|button)>/gi) || [];
console.log('Sample CTAs:');
ctas.filter(c => /audit|contact|consult|start|book|call|quote|free|pricing/i.test(c))
    .slice(0, 10)
    .forEach(c => console.log(' - ' + c.replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ')));

