const fs = require('fs');

const files = ['llms.txt', 'llms-full.txt', 'inrank2.0/llms.txt', 'inrank2.0/llms-full.txt', 'public/llms.txt', 'public/llms-full.txt'];

files.forEach(f => {
  if (fs.existsSync(f)) {
    const stats = fs.statSync(f);
    console.log(`File: ${f} (${stats.size} bytes)`);
  } else {
    console.log(`File: ${f} (MISSING)`);
  }
});

