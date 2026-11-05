const fs = require('fs');
const html = fs.readFileSync('inrank2.0/our-work.html', 'utf8');
console.log('Length:', html.length);
console.log('Has filter-btn?:', html.includes('filter-btn'));
console.log('Work cards count:', (html.match(/class="work-card"/g) || []).length);
console.log('Has greytothegreen screenshot?:', html.includes('/portfolio/screenshots/greytothegreen.webp'));

