const fs = require('fs');

const html = fs.readFileSync('services.html', 'utf8');

// Find all service cards/links
const serviceRegex = /<h3[^>]*>([\s\S]*?)<\/h3>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/gi;
const services = [];
let m;
while ((m = serviceRegex.exec(html)) !== null) {
  services.push({
    title: m[1].replace(/<[^>]+>/g, '').trim(),
    desc: m[2].replace(/<[^>]+>/g, '').trim()
  });
}

console.log('Total h3+p extracted from services.html:', services.length);
services.forEach((s, idx) => console.log(`${idx + 1}. ${s.title}: ${s.desc.slice(0, 80)}...`));

fs.writeFileSync('scripts/extracted_services.json', JSON.stringify(services, null, 2));

