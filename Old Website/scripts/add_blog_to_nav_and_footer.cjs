const fs = require('fs');
const path = require('path');

function getAllHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllHtmlFiles(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  });
  return results;
}

const allHtmls = getAllHtmlFiles('inrank2.0');
let updatedCount = 0;

allHtmls.forEach(file => {
  let html = fs.readFileSync(file, 'utf8');
  let changed = false;

  // 1. Add Blog to Desktop Nav Dock (after About or before Contact)
  if (!html.includes('href="/blog.html"') && html.includes('<nav class="nav-dock"')) {
    // Look for Contact link or About link in nav-dock
    if (html.includes('<a href="/about.html" class="nav-link">About</a>')) {
      html = html.replace(
        '<a href="/about.html" class="nav-link">About</a>',
        '<a href="/about.html" class="nav-link">About</a>\n          <a href="/blog.html" class="nav-link">Blog</a>'
      );
      changed = true;
    } else if (html.includes('<a href="/contact.html" class="nav-link">Contact</a>')) {
      html = html.replace(
        '<a href="/contact.html" class="nav-link">Contact</a>',
        '<a href="/blog.html" class="nav-link">Blog</a>\n          <a href="/contact.html" class="nav-link">Contact</a>'
      );
      changed = true;
    }
  }

  // 2. Add Blog to Mobile Drawer (#mob)
  if (!html.includes('class="mob-link">Blog</a>') && html.includes('id="mob"')) {
    if (html.includes('<a href="/about.html" class="mob-link">About Us</a>')) {
      html = html.replace(
        '<a href="/about.html" class="mob-link">About Us</a>',
        '<a href="/about.html" class="mob-link">About Us</a>\n      <a href="/blog.html" class="mob-link">Blog &amp; Playbooks</a>'
      );
      changed = true;
    } else if (html.includes('<a href="/contact.html" class="mob-link">Contact</a>')) {
      html = html.replace(
        '<a href="/contact.html" class="mob-link">Contact</a>',
        '<a href="/blog.html" class="mob-link">Blog &amp; Playbooks</a>\n      <a href="/contact.html" class="mob-link">Contact</a>'
      );
      changed = true;
    }
  }

  // 3. Add Blog to Footer Links
  if (!html.includes('href="/blog.html"') && html.includes('class="site-footer"')) {
    if (html.includes('<li><a href="/about.html">About Us</a></li>')) {
      html = html.replace(
        '<li><a href="/about.html">About Us</a></li>',
        '<li><a href="/about.html">About Us</a></li>\n            <li><a href="/blog.html">Engineering Blog</a></li>'
      );
      changed = true;
    } else if (html.includes('<li><a href="/our-work.html">Case Studies</a></li>')) {
      html = html.replace(
        '<li><a href="/our-work.html">Case Studies</a></li>',
        '<li><a href="/our-work.html">Case Studies</a></li>\n            <li><a href="/blog.html">Engineering Blog</a></li>'
      );
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(file, html, 'utf8');
    updatedCount++;
  }
});

console.log(`Successfully added Blog link to nav and footer in ${updatedCount} HTML files!`);

