const fs = require('fs');
const h = fs.readFileSync('inrank2.0/index.html', 'utf8').match(/<header id="nav"[\s\S]*?<\/header>/)[0];
const a = fs.readFileSync('inrank2.0/about.html', 'utf8').match(/<header id="nav"[\s\S]*?<\/header>/)[0];
console.log('h len:', h.length, 'a len:', a.length);
console.log('h header tag:', h.slice(0, 80));
console.log('a header tag:', a.slice(0, 80));
for (let i = 0; i < Math.min(h.length, a.length); i++) {
  if (h[i] !== a[i]) {
    console.log('Mismatch at index', i);
    console.log('h:', JSON.stringify(h.slice(i, i + 50)));
    console.log('a:', JSON.stringify(a.slice(i, i + 50)));
    break;
  }
}

