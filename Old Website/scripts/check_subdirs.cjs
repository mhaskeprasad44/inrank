const fs = require('fs');
const path = require('path');

const servicesDir = path.resolve('inrank2.0/services');
const dirs = fs.readdirSync(servicesDir).filter(f => fs.statSync(path.join(servicesDir, f)).isDirectory());

console.log(`Checking ${dirs.length} service directories...`);

dirs.forEach(d => {
  const indexPath = path.join(servicesDir, d, 'index.html');
  const exists = fs.existsSync(indexPath);
  const size = exists ? fs.statSync(indexPath).size : 0;
  console.log(`${d}: exists=${exists}, size=${size}`);
});

