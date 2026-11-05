const fs = require('fs');
const path = require('path');

const locations = ['robots.txt', 'inrank2.0/robots.txt', 'sitemap.xml', 'inrank2.0/sitemap.xml', 'llms.txt', 'inrank2.0/llms.txt'];

locations.forEach(loc => {
  if (fs.existsSync(loc)) {
    const stats = fs.statSync(loc);
    console.log(`[EXISTS] ${loc} (${stats.size} bytes)`);
  } else {
    console.log(`[MISSING] ${loc}`);
  }
});

