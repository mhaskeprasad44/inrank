const fs = require('fs');
fs.readdirSync('inrank2.0').filter(f => f.endsWith('.html')).forEach(f => {
  const c = fs.readFileSync('inrank2.0/' + f, 'utf8');
  const hasBurger = c.includes('nav-burger') || c.includes('burger');
  const hasMob = c.includes('id="mob"') || c.includes('id=\'mob\'');
  console.log(`${f}: hasBurger=${hasBurger}, hasMob=${hasMob}`);
});

