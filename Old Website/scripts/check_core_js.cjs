const fs = require('fs');

if (fs.existsSync('inrank2.0/js/core.js')) {
  const js = fs.readFileSync('inrank2.0/js/core.js', 'utf8');
  console.log('inrank2.0/js/core.js length:', js.length);
  console.log('Snippet from end of core.js:');
  console.log(js.slice(Math.max(0, js.length - 800)));
} else {
  console.log('inrank2.0/js/core.js not found');
}
