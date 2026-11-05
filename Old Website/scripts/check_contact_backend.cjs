const fs = require('fs');

if (fs.existsSync('contact.php')) {
  console.log('=== contact.php ===');
  console.log(fs.readFileSync('contact.php', 'utf8').slice(0, 1000));
} else {
  console.log('contact.php does not exist');
}

if (fs.existsSync('inrank2.0/contact.php')) {
  console.log('inrank2.0/contact.php exists');
} else {
  console.log('inrank2.0/contact.php does not exist');
}

if (fs.existsSync('server.js')) {
  const s = fs.readFileSync('server.js', 'utf8');
  console.log('=== server.js contact routes ===');
  const lines = s.split('\n');
  lines.forEach((l, i) => {
    if (l.includes('contact') || l.includes('form') || l.includes('mail')) {
      console.log(i + 1, l);
    }
  });
}

