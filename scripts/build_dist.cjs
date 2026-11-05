const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

console.log('Building dist/ directory for Inrank 2.0...');

if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

function copyRecursive(src, dest) {
  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach(child => {
      if (child === 'node_modules' || child === 'Old Website' || child === '.git' || child === 'dist') return;
      copyRecursive(path.join(src, child), path.join(dest, child));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Copy essential folders and files
const itemsToCopy = [
  'about.html',
  'blog.html',
  'case-studies.html',
  'contact.html',
  'contact.php',
  'cookie-consent.js',
  'digital-marketing-agency-in-pune.html',
  'index.html',
  'lucide.min.js',
  'our-work.html',
  'portfolio.html',
  'pricing.html',
  'privacy-policy.html',
  'terms-and-conditions.html',
  'website-design-company-in-pune.html',
  'robots.txt',
  'sitemap.xml',
  'llms.txt',
  'llms-full.txt',
  'favicon.ico',
  'favicon.png',
  'favicon.svg',
  'favicon-dark.png',
  'Inrank Dark logo.svg',
  'inrank-dark-logo.svg',
  'Inrank White Logo.svg',
  'inrank-white-logo.svg',
  'Logo.png',
  'google27965a1a30fcb004.html',
  '90f4a8ce98944c96bd03407379c73647.txt',
  '.htaccess',
  'css',
  'js',
  'img',
  'images',
  'client-logos',
  'tech-stack',
  'services',
  'blog',
  'case-studies',
  'our-work',
  'portfolio'
];

itemsToCopy.forEach(item => {
  const srcPath = path.join(rootDir, item);
  if (fs.existsSync(srcPath)) {
    copyRecursive(srcPath, path.join(distDir, item));
  }
});

// Copy server files into dist/
const serverSrc = path.join(rootDir, 'server.js');
if (fs.existsSync(serverSrc)) {
  fs.copyFileSync(serverSrc, path.join(distDir, 'server.js'));
  fs.copyFileSync(serverSrc, path.join(distDir, 'index.js'));
  fs.copyFileSync(serverSrc, path.join(distDir, 'server.cjs'));
}

console.log('Dist build complete! Total items in dist/:', fs.readdirSync(distDir).length);
