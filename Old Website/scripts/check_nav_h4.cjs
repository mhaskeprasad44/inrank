const fs = require('fs');

const content = fs.readFileSync('inrank2.0/services/ai-seo-services.html', 'utf8');
const lines = content.split('\n');
lines.slice(0, 300).forEach((l, i) => {
  if (l.includes('<h4') || l.includes('Full-Stack Growth Engineering') || l.includes('Greytothegreen')) {
    console.log(i + 1, l.trim());
  }
});

