const fs = require('fs');
const path = require('path');

const baseDir = path.resolve('inrank2.0');

function getHtmlFiles(dir) {
  let res = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      res = res.concat(getHtmlFiles(full));
    } else if (entry.name.endsWith('.html')) {
      res.push(full);
    }
  }
  return res;
}

const htmlFiles = getHtmlFiles(baseDir);

const brokenLinks = [];
const brokenAssets = [];
const consoleOrSyntaxErrors = [];

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const relFile = path.relative(baseDir, file).replace(/\\/g, '/');

  // Check <a> links
  const linkRegex = /href=["']([^"']+)["']/g;
  let match;
  while ((match = linkRegex.exec(content)) !== null) {
    let href = match[1].trim();
    if (!href || href.startsWith('#') || href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('javascript:') || href.startsWith('http://') || href.startsWith('https://')) {
      continue;
    }

    // Strip query string and anchor
    let cleanHref = href.split('?')[0].split('#')[0];
    if (!cleanHref) continue;

    let targetPath;
    if (cleanHref.startsWith('/')) {
      targetPath = path.join(baseDir, cleanHref);
    } else {
      targetPath = path.join(path.dirname(file), cleanHref);
    }

    // Check targetPath or targetPath.html or targetPath/index.html
    let exists = false;
    if (fs.existsSync(targetPath)) {
      if (fs.statSync(targetPath).isDirectory()) {
        exists = fs.existsSync(path.join(targetPath, 'index.html'));
      } else {
        exists = true;
      }
    } else if (fs.existsSync(targetPath + '.html')) {
      exists = true;
    } else if (fs.existsSync(targetPath.replace(/\/$/, '') + '.html')) {
      exists = true;
    }

    if (!exists) {
      brokenLinks.push({
        from: relFile,
        href: href,
        resolved: path.relative(baseDir, targetPath).replace(/\\/g, '/')
      });
    }
  }

  // Check <img>, <script>, <link> src and href
  const srcRegex = /(?:src|href)=["']([^"']+\.(?:png|jpg|jpeg|svg|webp|gif|css|js|woff2|woff|ttf))["']/gi;
  while ((match = srcRegex.exec(content)) !== null) {
    let src = match[1].trim();
    if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('//')) {
      continue;
    }

    let cleanSrc = src.split('?')[0].split('#')[0];
    let targetPath;
    if (cleanSrc.startsWith('/')) {
      // In web servers, root could be inrank2.0 or project root
      targetPath = path.join(baseDir, cleanSrc);
      if (!fs.existsSync(targetPath)) {
        // Check root project dir
        const rootPath = path.resolve('.', cleanSrc.replace(/^\//, ''));
        if (fs.existsSync(rootPath)) {
          targetPath = rootPath;
        }
      }
    } else {
      targetPath = path.join(path.dirname(file), cleanSrc);
    }

    if (!fs.existsSync(targetPath)) {
      brokenAssets.push({
        from: relFile,
        asset: src
      });
    }
  }
}

console.log('--- AUDIT: BROKEN LINKS ---');
console.log('Total broken link references found:', brokenLinks.length);
// Group by unique broken link
const uniqueLinks = {};
brokenLinks.forEach(b => {
  if (!uniqueLinks[b.href]) uniqueLinks[b.href] = [];
  uniqueLinks[b.href].push(b.from);
});
console.log('Unique broken link targets:', Object.keys(uniqueLinks).length);
for (const [target, froms] of Object.entries(uniqueLinks)) {
  console.log(`- Target "${target}" linked from ${froms.length} files (e.g. ${froms.slice(0, 3).join(', ')})`);
}

console.log('\n--- AUDIT: BROKEN ASSETS (Images / CSS / JS) ---');
console.log('Total broken asset references:', brokenAssets.length);
const uniqueAssets = {};
brokenAssets.forEach(b => {
  if (!uniqueAssets[b.asset]) uniqueAssets[b.asset] = [];
  uniqueAssets[b.asset].push(b.from);
});
for (const [asset, froms] of Object.entries(uniqueAssets)) {
  console.log(`- Missing Asset "${asset}" referenced in ${froms.length} files (e.g. ${froms.slice(0, 3).join(', ')})`);
}

