const fs = require('fs');

const current = fs.readFileSync('services.html', 'utf8');
const v2 = fs.readFileSync('inrank2.0/services.html', 'utf8');

console.log('Current services.html length:', current.length);
console.log('Inrank 2.0 services.html length:', v2.length);

// Check all 27 service names in v2
const extractedServices = JSON.parse(fs.readFileSync('scripts/extracted_services.json', 'utf8'));

let missingInV2 = [];
extractedServices.forEach((s, idx) => {
  if (idx < 27) { // first 27 are the services
    if (!v2.toLowerCase().includes(s.title.toLowerCase())) {
      missingInV2.push(s.title);
    }
  }
});

console.log(`Missing services in v2: ${missingInV2.length} out of 27`);
if (missingInV2.length > 0) {
  console.log('Missing list:', missingInV2);
}

