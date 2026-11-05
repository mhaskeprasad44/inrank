const fs = require('fs');

['index.html', 'dist/index.html'].forEach(p => {
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    const startIdx = content.indexOf('<!-- [07B] PUNE SEO & AI SEARCH AUDIT LEAD MAGNET -->');
    if (startIdx !== -1) {
      const endTag = '</section>';
      const endIdx = content.indexOf(endTag, startIdx);
      if (endIdx !== -1) {
        content = content.slice(0, startIdx) + content.slice(endIdx + endTag.length);
        fs.writeFileSync(p, content, 'utf8');
        console.log('Removed from:', p);
      }
    } else {
      console.log('Not found in:', p);
    }
  }
});

