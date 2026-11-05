const fs = require('fs');
const css = fs.readFileSync('inrank2.0/css/nav.css', 'utf8');

const start = css.indexOf('#mob');
if (start !== -1) {
  console.log(css.slice(start, start + 3000));
} else {
  console.log('No #mob in nav.css');
}

