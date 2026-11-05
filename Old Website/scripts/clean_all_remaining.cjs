const fs = require('fs');
const path = require('path');

function replaceComment(dir) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      replaceComment(full);
    } else if (f.endsWith('.html')) {
      let content = fs.readFileSync(full, 'utf8');
      if (/dravya/i.test(content)) {
        content = content.replace(/<!--\s*Project\s*3:\s*Dravya\s*Financial\s*-->/gi, '<!-- Project 3: Hira Grafix -->');
        content = content.replace(/<!--\s*Dravya\s*Financial\s*-->/gi, '');
        content = content.replace(/dravya/gi, '');
        fs.writeFileSync(full, content, 'utf8');
        console.log('Cleaned comments in:', full);
      }
    }
  }
}

replaceComment('case-studies');
replaceComment('our-work');
['case-studies.html', 'contact.html', 'digital-marketing-agency-in-pune.html', 'justdial-profile.html', 'our-work.html', 'portfolio.html', 'pricing.html', 'services.html', 'website-design-company-in-pune.html'].forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    if (/dravya/i.test(content)) {
      content = content.replace(/<!--\s*Project\s*3:\s*Dravya\s*Financial\s*-->/gi, '<!-- Project 3: Hira Grafix -->');
      content = content.replace(/<!--\s*Dravya\s*Financial\s*-->/gi, '');
      content = content.replace(/dravya/gi, '');
      fs.writeFileSync(f, content, 'utf8');
      console.log('Cleaned:', f);
    }
  }
});

