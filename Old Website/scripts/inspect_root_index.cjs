const fs = require('fs');

const p = fs.readFileSync('index.html', 'utf8');
const h1s = p.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi) || [];
const h2s = p.match(/<h2[^>]*>[\s\S]*?<\/h2>/gi) || [];
console.log('Root index.html H1:');
h1s.forEach(h => console.log(' - ' + h.replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ')));
console.log('Root index.html H2 (first 25):');
h2s.slice(0, 25).forEach(h => console.log(' - ' + h.replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ')));

const ctas = p.match(/<(a|button)[^>]*>(.*?)<\/(a|button)>/gi) || [];
console.log('Root index.html CTAs:');
const uniqueCtas = [...new Set(ctas.map(c => c.replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ')))];
console.log(uniqueCtas.filter(c => /audit|contact|consult|start|book|call|quote|free|pricing|service|grow|reach|talk|whatsapp/i.test(c)).slice(0, 20));

