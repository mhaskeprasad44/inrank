const fs = require('fs');

const content = fs.readFileSync('inrank2.0/services.html', 'utf8');
console.log('File length:', content.length);

// Extract main section headings and services listed
const h2s = content.match(/<h2[^>]*>.*?<\/h2>/gis) || [];
console.log('H2 headings:', h2s);

const links = content.match(/href="\/services\/[^"]+"/g) || [];
console.log('Service links count:', links.length);
console.log('Unique service links count:', new Set(links).size);

// Print out the structure inside <main>
const mainMatch = content.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
if (mainMatch) {
  const mainContent = mainMatch[1];
  console.log('Main sections count:', (mainContent.match(/<section/g) || []).length);
  const sectionIds = (mainContent.match(/<section[^>]*id="([^"]+)"/g) || []);
  console.log('Section IDs:', sectionIds);
}

