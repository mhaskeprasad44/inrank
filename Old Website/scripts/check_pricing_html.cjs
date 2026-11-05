const fs = require('fs');
const html = fs.readFileSync('c:/Users/PrasadMhaske/Downloads/Anti Websites/Web/Inrank/inrank2.0/pricing.html', 'utf8');
console.log('pricing.html lines:', html.split('\n').length);
console.log(html.substring(0, 1500));

