const https = require('https');
const fs = require('fs');

const subpages = ['about', 'companies', 'contact'];

subpages.forEach(sp => {
  https.get(`https://www.vinove.com/${sp}/`, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      fs.writeFileSync(`scripts/vinove_${sp}.html`, data);
      console.log(`Saved vinove_${sp}.html, size: ${data.length}`);
    });
  });
});

