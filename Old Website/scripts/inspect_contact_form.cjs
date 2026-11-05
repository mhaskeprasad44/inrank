const fs = require('fs');

console.log('=== inrank2.0/contact.html FORM ===');
const c2 = fs.readFileSync('inrank2.0/contact.html', 'utf8');
const formMatch2 = c2.match(/<form[\s\S]*?<\/form>/i);
console.log(formMatch2 ? formMatch2[0].slice(0, 1500) : 'NO FORM FOUND');

console.log('\n=== root contact.html FORM ===');
if (fs.existsSync('contact.html')) {
  const c1 = fs.readFileSync('contact.html', 'utf8');
  const formMatch1 = c1.match(/<form[\s\S]*?<\/form>/i);
  console.log(formMatch1 ? formMatch1[0].slice(0, 1500) : 'NO FORM IN ROOT');
}

console.log('\n=== server.js or package.json API check ===');
if (fs.existsSync('server.js')) {
  const s = fs.readFileSync('server.js', 'utf8');
  console.log('server.js has contact route:', s.includes('/api/contact') || s.includes('contact'));
}

