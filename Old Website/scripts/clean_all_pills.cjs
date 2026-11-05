const fs = require('fs');
const path = require('path');

// 1. Clean inrank2.0/portfolio.html
let portHtml = fs.readFileSync('inrank2.0/portfolio.html', 'utf8');
// Replace the floating pill with domain
portHtml = portHtml.replace(/<span class="inline-flex items-center gap-2 px-3\.5 sm:px-4 py-1\.5 rounded-full bg-slate-900\/95 backdrop-blur-md text-xs sm:text-\[13px\] font-bold text-white border border-slate-700\/80 shadow-md">\s*<span class="w-2\.5 h-2\.5 rounded-full bg-emerald-400 shrink-0"><\/span>\s*<span>(.*?)<\/span>\s*<\/span>/g, '<span style="font-family:monospace;font-size:0.85rem;font-weight:700;color:#ffffff;background:rgba(8,20,36,0.85);padding:4px 10px;border-radius:6px;">$1</span>');

fs.writeFileSync('inrank2.0/portfolio.html', portHtml, 'utf8');
console.log('Cleaned portfolio.html pills');

// 2. Clean inrank2.0/services/*
const sDir = 'inrank2.0/services';
if (fs.existsSync(sDir)) {
  const sFiles = fs.readdirSync(sDir, { withFileTypes: true });
  for (const f of sFiles) {
    if (f.isDirectory()) {
      const idxPath = path.join(sDir, f.name, 'index.html');
      if (fs.existsSync(idxPath)) {
        cleanServicePills(idxPath);
      }
    } else if (f.name.endsWith('.html')) {
      cleanServicePills(path.join(sDir, f.name));
    }
  }
}

function cleanServicePills(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Replace pills with pulse dots in hero
  // Pattern: <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full ..."><span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>(.*?)</span>
  const pillRegex = /<span class="inline-flex items-center gap-2 px-3 py-1 rounded-full[^"]*">\s*<span class="[^"]*rounded-full bg-emerald-500[^"]*"><\/span>\s*([\s\S]*?)<\/span>/g;
  if (pillRegex.test(content)) {
    content = content.replace(pillRegex, '<span class="section-kicker">$1</span>');
    changed = true;
  }

  // Also check other variations of rounded-full hero badges
  const pillRegex2 = /<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full[^"]*">\s*<span class="[^"]*rounded-full bg-emerald-500[^"]*"><\/span>\s*([\s\S]*?)<\/div>/g;
  if (pillRegex2.test(content)) {
    content = content.replace(pillRegex2, '<span class="section-kicker">$1</span>');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Cleaned pills in ${filePath}`);
  }
}

