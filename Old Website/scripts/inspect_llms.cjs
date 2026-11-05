const fs = require('fs');

const llms = fs.readFileSync('inrank2.0/llms.txt', 'utf8');
console.log('llms.txt length:', llms.length);
const urls = llms.match(/https:\/\/inranktech\.com[^\s\)]*/g) || [];
console.log('Total URLs cited in llms.txt:', urls.length);
console.log('Unique URLs in llms.txt:', [...new Set(urls)].length);
console.log('Sample content:\n', llms.slice(0, 800));

