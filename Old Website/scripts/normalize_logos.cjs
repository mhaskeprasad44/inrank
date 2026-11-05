const fs = require('fs');
const path = require('path');

const srcDir = 'c:/Users/PrasadMhaske/Downloads/Anti Websites/Web/Inrank/inrank2.0/client-logos';
const destDir = 'c:/Users/PrasadMhaske/Downloads/Anti Websites/Web/Inrank/inrank2.0/img/client-logos';

fs.mkdirSync(destDir, { recursive: true });

// Read existing files in client-logos
const files = fs.readdirSync(srcDir);
files.forEach(f => {
  fs.copyFileSync(path.join(srcDir, f), path.join(destDir, f));
});

console.log(`Copied ${files.length} client logos to img/client-logos/`);

// Also create normalized names if needed
const map = {
  'greytothegreen.png': 'greytothegreen.webp',
  'shetkarifoodstuff.png': 'shetkari.webp',
  'riituinstitution.png': 'riitu.webp',
  'fludio.png': 'fludio.webp',
  'vasroventures.png': 'vasro.webp',
  'cytos.png': 'cytos.png',
  'hiragrafix.png': 'hiragrafix.png',
  'dravyafinancial.png': 'dravya.png',
  'hcpnest.png': 'Untitled-design-23.webp',
  'orthopedicanklefootspecialist.png': 'Untitled-design-64-300x75.png'
};

Object.entries(map).forEach(([target, source]) => {
  const sourcePath = path.join(srcDir, source);
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, path.join(destDir, target));
    fs.copyFileSync(sourcePath, path.join(srcDir, target));
    console.log(`Normalized: ${target} <- ${source}`);
  }
});

