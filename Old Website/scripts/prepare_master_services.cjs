const fs = require('fs');
const path = require('path');

// 1. Load services from build_complete_27_services_ecosystem.cjs
const c27Code = fs.readFileSync('scripts/build_complete_27_services_ecosystem.cjs', 'utf8');
// 2. Load services from build_final_11_services.cjs
const f11Code = fs.readFileSync('scripts/build_final_11_services.cjs', 'utf8');
// 3. Load services from build_all_service_pages_ecosystem.cjs
const a5Code = fs.readFileSync('scripts/build_all_service_pages_ecosystem.cjs', 'utf8');

console.log('Files read successfully. Preparing master builder...');

