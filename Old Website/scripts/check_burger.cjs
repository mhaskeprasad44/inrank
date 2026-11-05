const fs = require('fs');
fs.readdirSync('inrank2.0').filter(f => f.endsWith('.html')).forEach(f => {
  const c = fs.readFileSync('inrank2.0/' + f, 'utf8');
  const m = c.match(/class=["']nav-burger-box["'][^>]*>([\s\S]*?)<\/span>/);
  if (m) {
    console.log(f + ' inner: ' + JSON.stringify(m[1].trim()));
  } else {
    console.log(f + ' NO MATCH');
  }
});

