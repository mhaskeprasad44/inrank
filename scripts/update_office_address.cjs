const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

const FULL_ADDRESS = 'Office No. 11, Shree Bhagwati Suvarna Complex, Pancard Club Rd, Baner Gaon, Baner, Pune, Maharashtra 411045';
const FULL_ADDRESS_INDIA = 'Office No. 11, Shree Bhagwati Suvarna Complex, Pancard Club Rd, Baner Gaon, Baner, Pune, Maharashtra 411045, India';
const STREET_ADDRESS = 'Office No. 11, Shree Bhagwati Suvarna Complex, Pancard Club Rd, Baner Gaon, Baner';

function scan(dir) {
  let files = [];
  fs.readdirSync(dir).forEach(f => {
    if (['node_modules', '.git', 'dist'].includes(f)) return;
    const fp = path.join(dir, f);
    if (fs.statSync(fp).isDirectory()) {
      files = files.concat(scan(fp));
    } else if (f.endsWith('.html') || f.endsWith('.apib') || f.endsWith('.txt') || f.endsWith('.md')) {
      files.push(fp);
    }
  });
  return files;
}

const files = scan(ROOT_DIR);
let updatedFiles = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // 1. Update <address> tags
  content = content.replace(/<address>[\s\S]*?<\/address>/gi, `<address>${FULL_ADDRESS_INDIA}</address>`);

  // 2. Update Schema.org streetAddress
  content = content.replace(/"streetAddress":\s*"[^"]*Baner[^"]*"/gi, `"streetAddress": "${STREET_ADDRESS}"`);
  content = content.replace(/"streetAddress":\s*"Baner"/gi, `"streetAddress": "${STREET_ADDRESS}"`);
  content = content.replace(/"streetAddress":\s*"FC Road, Shivaji Nagar"/gi, `"streetAddress": "${STREET_ADDRESS}"`);

  // 3. Update contact.html specific channel-val address
  content = content.replace(/Office No\. 11, Shree Bhagwati Suvarna Complex, Baner Road, Near Balewadi High Street, Pune 411045/gi, FULL_ADDRESS);
  content = content.replace(/Baner Road, Near Balewadi High Street, Pune 411045/gi, FULL_ADDRESS);

  // 4. Update blueprints .apib Office Address
  content = content.replace(/\* \*\*Office Address:\*\* [^\n]+/gi, `* **Office Address:** ${FULL_ADDRESS}`);
  content = content.replace(/\* \*\*Office:\*\* [^\n]+/gi, `* **Office:** ${FULL_ADDRESS}`);

  // 5. Update llms.txt & llms-full.txt
  content = content.replace(/Headquarters: Baner Road, Near Balewadi High Street, Pune, Maharashtra 411045/gi, `Headquarters: ${FULL_ADDRESS}`);
  content = content.replace(/Address: Baner Road, Near Balewadi High Street, Pune, Maharashtra 411045/gi, `Address: ${FULL_ADDRESS}`);
  content = content.replace(/Baner Road, Near Balewadi High Street, Pune, Maharashtra 411045/gi, FULL_ADDRESS);

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    updatedFiles++;
    console.log(`Updated address in: ${path.relative(ROOT_DIR, file).replace(/\\/g, '/')}`);
  }
});

console.log(`\nAddress update completed. Total files modified: ${updatedFiles}`);
