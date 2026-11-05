const fs = require('fs');

const rootContact = fs.readFileSync('contact.html', 'utf8');
const scriptIdx = rootContact.indexOf('consult-form');
console.log('=== root contact.html scripts around consult-form ===');
const scripts = rootContact.match(/<script[\s\S]*?<\/script>/gi) || [];
scripts.forEach((s, i) => {
  if (s.includes('consult-form') || s.includes('inrank-contact-form') || s.includes('/api/send-email') || s.includes('contact.php')) {
    console.log(`Script ${i}:\n`, s);
  }
});

console.log('\n=== inrank2.0/contact.html scripts ===');
const c2 = fs.readFileSync('inrank2.0/contact.html', 'utf8');
const scripts2 = c2.match(/<script[\s\S]*?<\/script>/gi) || [];
scripts2.forEach((s, i) => {
  if (s.includes('form') || s.includes('contact')) {
    console.log(`Script2 ${i}:\n`, s);
  }
});

