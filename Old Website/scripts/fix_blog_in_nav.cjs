const fs = require('fs');
const path = require('path');

function getAllHtmlFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist') {
        results = results.concat(getAllHtmlFiles(fullPath));
      }
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  });
  return results;
}

const allFiles = [
  ...getAllHtmlFiles('inrank2.0'),
  ...fs.readdirSync('.').filter(f => f.endsWith('.html')).map(f => path.resolve(f))
];

console.log(`Inspecting ${allFiles.length} HTML files for desktop nav Blog link...`);

let fixedNavCount = 0;
let fixedMobCount = 0;

allFiles.forEach(file => {
  let html = fs.readFileSync(file, 'utf8');
  let changed = false;

  // 1. Desktop Nav: Check inside <nav class="nav-links"
  const navLinksRegex = /<nav class="nav-links"[\s\S]*?<\/nav>/;
  const navMatch = html.match(navLinksRegex);
  if (navMatch) {
    const navContent = navMatch[0];
    if (!navContent.includes('href="/blog.html"') && !navContent.includes('href="/blog"')) {
      // Add Blog right before Contact
      if (navContent.includes('<a href="/contact.html" class="nav-link" data-nav="contact">Contact</a>')) {
        const updatedNav = navContent.replace(
          '<a href="/contact.html" class="nav-link" data-nav="contact">Contact</a>',
          '<a href="/blog.html" class="nav-link" data-nav="blog">Blog</a>\n        <a href="/contact.html" class="nav-link" data-nav="contact">Contact</a>'
        );
        html = html.replace(navContent, updatedNav);
        changed = true;
        fixedNavCount++;
      } else if (navContent.includes('<a href="/contact.html" class="nav-link">Contact</a>')) {
        const updatedNav = navContent.replace(
          '<a href="/contact.html" class="nav-link">Contact</a>',
          '<a href="/blog.html" class="nav-link" data-nav="blog">Blog</a>\n        <a href="/contact.html" class="nav-link">Contact</a>'
        );
        html = html.replace(navContent, updatedNav);
        changed = true;
        fixedNavCount++;
      }
    }
  }

  // 2. Mobile Drawer (#mob)
  const mobRegex = /<div\s+(?:class="[^"]*"\s+)?id="mob"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;
  const mobMatch = html.match(mobRegex) || html.match(/<div id="mob"[\s\S]*?<\/div>\s*<\/div>/);
  if (mobMatch) {
    const mobContent = mobMatch[0];
    if (!mobContent.includes('href="/blog.html"') && !mobContent.includes('href="/blog"')) {
      if (mobContent.includes('<a href="/contact.html" class="mob-link">Contact</a>')) {
        const updatedMob = mobContent.replace(
          '<a href="/contact.html" class="mob-link">Contact</a>',
          '<a href="/blog.html" class="mob-link">Blog &amp; Playbooks</a>\n      <a href="/contact.html" class="mob-link">Contact</a>'
        );
        html = html.replace(mobContent, updatedMob);
        changed = true;
        fixedMobCount++;
      }
    }
  }

  if (changed) {
    fs.writeFileSync(file, html, 'utf8');
  }
});

console.log(`[OK] Successfully added visible Blog link to Desktop Navigation in ${fixedNavCount} files!`);
console.log(`[OK] Successfully added visible Blog link to Mobile Drawer in ${fixedMobCount} files!`);

