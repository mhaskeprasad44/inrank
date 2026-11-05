const fs = require('fs');
['services.html', 'pricing.html', 'about.html'].forEach(f => {
  const c = fs.readFileSync('inrank2.0/' + f, 'utf8');
  console.log('=== ' + f + ' ===');
  const navIdx = c.indexOf('<nav id="nav"');
  if (navIdx !== -1) {
    console.log(c.substring(navIdx, navIdx + 600));
  } else {
    console.log('NO <nav id="nav">! Searching for <header:');
    const hIdx = c.indexOf('<header');
    if (hIdx !== -1) {
      console.log(c.substring(hIdx, hIdx + 600));
    } else {
      console.log('NO HEADER OR NAV FOUND!');
    }
  }
});

