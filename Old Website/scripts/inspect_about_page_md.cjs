const fs = require('fs');
const md = fs.readFileSync('inrank_web_details.md', 'utf8');

const sAbout = md.indexOf('### PAGE 2: About Us Page');
console.log(md.slice(sAbout, sAbout + 2500));

