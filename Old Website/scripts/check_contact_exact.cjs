const fs = require('fs');
const v2 = fs.readFileSync('inrank2.0/contact.html', 'utf8');
console.log('Includes No Sales Gimmicks?', v2.includes('No Sales Gimmicks'));
console.log('Includes 15-Minute Response SLA?', v2.includes('15-Minute Response SLA'));
console.log('Includes Transparent Fixed Pricing Guarantee?', v2.includes('Transparent Fixed Pricing Guarantee'));
console.log('Includes 365-Day Comprehensive Support?', v2.includes('365-Day Comprehensive Support'));
console.log('Includes Pune Local Service Coverage?', v2.includes('Pune Local Service Coverage'));

