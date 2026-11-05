const fs = require('fs');

if (fs.existsSync('scripts/vinove_raw.html')) {
  const content = fs.readFileSync('scripts/vinove_raw.html', 'utf8');
  console.log('vinove_raw.html exists, length:', content.length);
  // Find mobile drawer or mobile nav in vinove_raw.html
  const mobMatches = content.match(/<nav[^>]*id="[^"]*mob[^"]*"[\s\S]*?<\/nav>/i) 
    || content.match(/class="[^"]*mob[^"]*"[\s\S]*?<\/div>/i)
    || content.match(/id="mob[^"]*"[\s\S]*?<\/div>/i);
  if (mobMatches) {
    console.log('Found mob element:', mobMatches[0].slice(0, 1500));
  } else {
    // search for 'drawer' or 'mobile'
    const lines = content.split('\n');
    lines.forEach((l, i) => {
      if (l.includes('mob-') || l.includes('drawer') || l.includes('mobile-menu')) {
        console.log(`L${i+1}: ${l.trim().slice(0, 120)}`);
      }
    });
  }
}

