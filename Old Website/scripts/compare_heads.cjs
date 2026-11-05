const fs = require('fs');

const caseStudiesHtml = fs.readFileSync('inrank2.0/case-studies.html', 'utf8');
const ourWorkHtml = fs.readFileSync('inrank2.0/our-work.html', 'utf8');

function getStylesheets(html) {
  const matches = html.match(/<link[^>]*rel="stylesheet"[^>]*>/g) || [];
  return matches;
}

console.log('case-studies.html stylesheets:\n', getStylesheets(caseStudiesHtml).join('\n'));
console.log('\nour-work.html stylesheets:\n', getStylesheets(ourWorkHtml).join('\n'));

