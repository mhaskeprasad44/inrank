const fs = require('fs');
['index.html', 'services.html', 'pricing.html', 'our-work.html', 'about.html', 'case-studies.html', 'contact.html'].forEach(f => {
  const html = fs.readFileSync('inrank2.0/' + f, 'utf8');
  const count = (html.match(/<header/g) || []).length;
  const mobCount = (html.match(/id="mob"/g) || []).length;
  console.log(f, 'headers:', count, 'mobMenus:', mobCount);
});

