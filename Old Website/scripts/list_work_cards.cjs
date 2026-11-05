const fs = require('fs');
const html = fs.readFileSync('inrank2.0/our-work.html', 'utf8');
const cardMatches = html.match(/<!-- Work Card: [^>]+>[\s\S]*?<\/article>/g);
console.log('Found cards in our-work.html:', cardMatches ? cardMatches.length : 0);
if (cardMatches) {
  cardMatches.forEach((c, i) => {
    const titleMatch = c.match(/<h3[^>]*>([\s\S]*?)<\/h3>/);
    const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : 'No title';
    const filterMatch = c.match(/data-filter="([^"]+)"/);
    const filter = filterMatch ? filterMatch[1] : 'No filter';
    console.log((i + 1) + '. [' + filter + '] ' + title);
  });
}

