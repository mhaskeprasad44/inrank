const fs = require('fs');

const compHtml = fs.readFileSync('scripts/vinove_companies.html', 'utf8');

const sections = [...compHtml.matchAll(/<section[^>]*class="([^"]*)"[^>]*>/gi)];
console.log('Companies sections:', sections.map(s => s[1]));

const h1 = compHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
console.log('H1:', h1 ? h1[1].replace(/<[^>]+>/g, '').trim() : 'none');

const h2s = [...compHtml.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
console.log('H2s:', h2s);

