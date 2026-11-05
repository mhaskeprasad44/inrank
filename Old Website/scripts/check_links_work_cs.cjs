const fs = require('fs');

const cs = fs.readFileSync('inrank2.0/case-studies.html', 'utf8');
const work = fs.readFileSync('inrank2.0/our-work.html', 'utf8');

const csLinks = cs.match(/href=["'](\/(?:case-studies|our-work)\/[^"']+)["']/g) || [];
const workLinks = work.match(/href=["'](\/(?:case-studies|our-work)\/[^"']+)["']/g) || [];

console.log('Links in case-studies.html:', [...new Set(csLinks)]);
console.log('Links in our-work.html:', [...new Set(workLinks)]);

