const fs = require('fs');

const html = fs.readFileSync('scripts/vinove_raw.html', 'utf8');

console.log('--- Body Tag ---');
const body = html.match(/<body[^>]*>/i);
console.log(body ? body[0] : 'no body');

console.log('\n--- Main / Section Tags ---');
const sections = [...html.matchAll(/<(section|header|footer|div\s+class="[^"]*(?:hero|manifesto|operating|record|people|cta|closing)[^"]*")[^>]*>/gi)];
sections.forEach(s => console.log(s[0]));

console.log('\n--- Section breakdown ---');
const secMatches = [...html.matchAll(/<section\s+class="([^"]+)"[^>]*>/gi)];
secMatches.forEach(m => console.log('section class:', m[1]));

console.log('\n--- Major Headings and their containers ---');
const headings = [...html.matchAll(/<(h[1-3])[^>]*class="([^"]*)"[^>]*>([\s\S]*?)<\/\1>/gi)];
headings.forEach(h => {
  const text = h[3].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
  console.log(`${h[1]} [${h[2]}]: "${text.substring(0, 60)}"`);
});

