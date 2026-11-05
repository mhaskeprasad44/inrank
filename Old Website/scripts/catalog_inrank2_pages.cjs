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

const pages = htmlFiles.map(f => {
  const rel = path.relative(baseDir, f).replace(/\\/g, '/');
  // Determine canonical URL path
  let urlPath;
  if (rel === 'index.html') {
    urlPath = '/';
  } else if (rel.endsWith('/index.html')) {
    urlPath = '/' + rel.replace(/\/index\.html$/, '');
  } else {
    urlPath = '/' + rel;
  }
  return {
    relFile: rel,
    url: 'https://inranktech.com' + urlPath,
    fullPath: f
  };
});

console.log('Total HTML pages in inrank2.0:', pages.length);

// Group by category
const categories = {
  core: [],
  services: [],
  work: [],
  caseStudies: [],
  blog: [],
  legal: [],
  landingPages: []
};

pages.forEach(p => {
  const r = p.relFile;
  if (r.startsWith('services/')) categories.services.push(p);
  else if (r.startsWith('our-work/')) categories.work.push(p);
  else if (r.startsWith('case-studies/')) categories.caseStudies.push(p);
  else if (r.startsWith('blog/')) categories.blog.push(p);
  else if (r === 'privacy-policy.html' || r === 'terms-and-conditions.html') categories.legal.push(p);
  else if (r.includes('agency-in-pune') || r.includes('company-in-pune')) categories.landingPages.push(p);
  else categories.core.push(p);
});

console.log('Breakdown by category:');
for (const [k, v] of Object.entries(categories)) {
  console.log(`- ${k}: ${v.length} pages`);
}

fs.writeFileSync('scripts/inrank2_inventory.json', JSON.stringify(pages, null, 2), 'utf8');

