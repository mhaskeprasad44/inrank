const fs = require('fs');

function inspect(file) {
  if (!fs.existsSync(file)) return [];
  const content = fs.readFileSync(file, 'utf8');
  const matches = [...content.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
  return matches;
}

const s1 = inspect('scripts/build_complete_27_services_ecosystem.cjs');
const s2 = inspect('scripts/build_final_11_services.cjs');
const s3 = inspect('scripts/build_all_service_pages_ecosystem.cjs');
const s4 = inspect('scripts/build_flagship_service_page.cjs');

console.log('complete_27:', s1);
console.log('final_11:', s2);
console.log('all_service_pages:', s3);
console.log('flagship:', s4);

const set = new Set([...s1, ...s2, ...s3, ...s4]);
console.log('Total unique defined:', set.size);

const catalog = JSON.parse(fs.readFileSync('scripts/service_catalog.json', 'utf8')).map(s => s.slug);
console.log('Missing from definitions:', catalog.filter(s => !set.has(s)));

