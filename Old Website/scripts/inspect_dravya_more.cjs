const fs = require('fs');

const txt = fs.readFileSync('our-work/dravyafinancial.html', 'utf8');
const clientInfoStart = txt.indexOf('Client Overview') !== -1 ? txt.indexOf('Client Overview') : txt.indexOf('About the Client');
if (clientInfoStart !== -1) {
  console.log(txt.slice(clientInfoStart - 50, clientInfoStart + 800));
} else {
  console.log('Main snippet:');
  console.log(txt.slice(txt.indexOf('<main'), txt.indexOf('<main') + 1500));
}

