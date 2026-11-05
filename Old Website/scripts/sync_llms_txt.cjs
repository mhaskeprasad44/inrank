const fs = require('fs');

let llms = fs.readFileSync('llms.txt', 'utf8');
let llmsFull = fs.readFileSync('llms-full.txt', 'utf8');

// Ensure non-www
llms = llms.replace(/https:\/\/www\.inranktech\.com/g, 'https://inranktech.com');
llmsFull = llmsFull.replace(/https:\/\/www\.inranktech\.com/g, 'https://inranktech.com');

// Write to inrank2.0, root, and public
fs.writeFileSync('inrank2.0/llms.txt', llms, 'utf8');
fs.writeFileSync('inrank2.0/llms-full.txt', llmsFull, 'utf8');
fs.writeFileSync('llms.txt', llms, 'utf8');
fs.writeFileSync('llms-full.txt', llmsFull, 'utf8');
if (fs.existsSync('public')) {
  fs.writeFileSync('public/llms.txt', llms, 'utf8');
  fs.writeFileSync('public/llms-full.txt', llmsFull, 'utf8');
}
if (fs.existsSync('dist')) {
  fs.writeFileSync('dist/llms.txt', llms, 'utf8');
  fs.writeFileSync('dist/llms-full.txt', llmsFull, 'utf8');
}

console.log('Successfully synced non-www llms.txt and llms-full.txt into inrank2.0/ and other directories.');

