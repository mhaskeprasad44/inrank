const fs = require('fs');

['inrank2.0/css/core.css', 'inrank2.0/css/corporate.css'].forEach(f => {
  const css = fs.readFileSync(f, 'utf8');
  css.split('\n').forEach((l, idx) => {
    if (l.includes('#nav') || l.includes('nav-bar') || l.includes('header')) {
      console.log(`${f}:${idx+1}: ${l.trim()}`);
    }
  });
});

