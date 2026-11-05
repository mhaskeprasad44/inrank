const fs = require('fs');

let html = fs.readFileSync('inrank2.0/index.html', 'utf8');

// Replace /case-studies/{slug}.html with /our-work/{slug}.html in work cards if present
const updated = html.replace(/href="\/case-studies\/(greytothegreen|shetkarifoodstuff|cytos|dravyafinancial|fludio|hcpnest|hiragrafix|orthopedicanklefootspecialist|riituinstitution|vasroventures)\.html"/g, 'href="/our-work/$1.html"');

if (updated !== html) {
  fs.writeFileSync('inrank2.0/index.html', updated, 'utf8');
  console.log('Updated index.html work links to /our-work/{slug}.html');
} else {
  console.log('No replacement needed or already pointing to /our-work/');
}

