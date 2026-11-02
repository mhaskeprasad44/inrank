const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

console.log('--- 1. Fixing public/cookie-consent.js ---');
const cookieJsPath = path.join(rootDir, 'public', 'cookie-consent.js');
if (fs.existsSync(cookieJsPath)) {
  let content = fs.readFileSync(cookieJsPath, 'utf8');

  // Replace CSS for inrank-cm-badge-req
  const oldCssRegex = /\.inrank-cm-badge-req\s*\{[^}]*\}/g;
  const newCss = `.inrank-cm-badge-req {
      font-size: 11px;
      font-weight: 500;
      color: #64748b;
    }`;
  content = content.replace(oldCssRegex, newCss);

  // Update HTML inside cookie-consent.js: change to simple neutral text without pill
  content = content.replace(
    /<span class="inrank-cm-badge-req">Always Active<\/span>/g,
    '<span class="inrank-cm-badge-req">(Always Active)</span>'
  );

  fs.writeFileSync(cookieJsPath, content, 'utf8');
  console.log('Updated public/cookie-consent.js');
}

console.log('--- 2. Fixing src/react/components/GrowthRoiCalculator.tsx ---');
const roiPath = path.join(rootDir, 'src', 'react', 'components', 'GrowthRoiCalculator.tsx');
if (fs.existsSync(roiPath)) {
  let content = fs.readFileSync(roiPath, 'utf8');
  content = content.replace(
    /<span className="inline-flex items-center gap-1\.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-emerald-100\/80 text-emerald-800">[\s\S]*?<\/span>/,
    '<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-600"><span className="w-1.5 h-1.5 rounded-full bg-slate-400" />Interactive ROI Model</span>'
  );
  fs.writeFileSync(roiPath, content, 'utf8');
  console.log('Updated GrowthRoiCalculator.tsx');
}

console.log('--- 3. Fixing HTML files & TS scripts ---');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Pattern A: Section title kickers
  // text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200/70 inline-block
  content = content.replace(
    /class="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200\/70 inline-block"/g,
    'class="text-xs font-bold uppercase tracking-wider text-emerald-600 inline-block"'
  );
  content = content.replace(
    /class="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded border border-emerald-200\/70 inline-block mb-3"/g,
    'class="text-xs font-bold uppercase tracking-wider text-emerald-600 inline-block mb-3"'
  );

  // Pattern B: Case study & portfolio category tags
  // font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/70
  content = content.replace(
    /class="font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2\.5 py-1 rounded-md border border-emerald-200\/70"/g,
    'class="font-semibold text-xs text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md"'
  );

  // Pattern C: Case studies counter
  // text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200
  content = content.replace(
    /class="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2\.5 py-1 rounded-md border border-emerald-200"/g,
    'class="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200"'
  );

  // Pattern D: Hero pill tags (rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200)
  content = content.replace(
    /class="inline-flex items-center gap-1\.5 px-3\.5 py-1\.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200"/g,
    'class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200"'
  );
  content = content.replace(
    /class="inline-flex items-center gap-1\.5 px-3\.5 py-1\.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500\/10 text-emerald-700 border border-emerald-500\/20"/g,
    'class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200"'
  );
  content = content.replace(
    /class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 mb-4"/g,
    'class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200 mb-4"'
  );
  content = content.replace(
    /class="px-2\.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold flex items-center gap-1\.5"/g,
    'class="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 font-medium flex items-center gap-1.5"'
  );
  content = content.replace(
    /class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500\/10 border border-emerald-500\/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold"/g,
    'class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium"'
  );
  content = content.replace(
    /class="inline-flex items-center gap-1\.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500\/10 text-emerald-700 border border-emerald-500\/20"/g,
    'class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200"'
  );
  content = content.replace(
    /class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500\/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500\/30"/g,
    'class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"'
  );
  content = content.replace(
    /class="inline-flex items-center gap-1\.5 rounded-full border border-emerald-500\/20 bg-emerald-500\/10 px-3\.5 py-1 text-xs font-semibold uppercase tracking-\[0\.18em\] text-emerald-600 dark:text-emerald-400 shadow-sm"/g,
    'class="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 dark:text-slate-300 shadow-sm"'
  );
  content = content.replace(
    /class="inline-flex items-center gap-2 px-3\.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500\/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500\/20 shadow-xs"/g,
    'class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-xs"'
  );
  content = content.replace(
    /class="inline-flex items-center gap-1\.5 px-2\.5 py-1 rounded-full text-\[11px\] font-bold uppercase tracking-wider bg-emerald-500\/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500\/20"/g,
    'class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"'
  );
  content = content.replace(
    /class="px-2\.5 py-1 rounded-md text-\[10px\] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200\/60 flex items-center gap-1"/g,
    'class="px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-slate-100 text-slate-600 border border-slate-200 flex items-center gap-1"'
  );
  content = content.replace(
    /class="px-2\.5 py-1 rounded-md text-\[10px\] font-bold uppercase tracking-wider bg-green-50 text-green-700 border border-green-200\/60 flex items-center gap-1"/g,
    'class="px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-slate-100 text-slate-600 border border-slate-200 flex items-center gap-1"'
  );
  content = content.replace(
    /class="text-\[11px\] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 dark:bg-emerald-950\/40 px-2\.5 py-0\.5 rounded"/g,
    'class="text-[11px] font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded"'
  );
  content = content.replace(
    /class="inline-flex items-center gap-1 text-\[11px\] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-500\/10 px-2\.5 py-0\.5 rounded-md mb-2"/g,
    'class="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-emerald-600 mb-2"'
  );
  content = content.replace(
    /class="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-500\/10 px-2\.5 py-0\.5 rounded-md inline-block"/g,
    'class="text-xs font-bold uppercase tracking-wider text-emerald-600 inline-block"'
  );
  content = content.replace(
    /class="text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950\/40 px-3 py-1\.5 rounded-lg border border-emerald-200 dark:border-emerald-800"/g,
    'class="text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700"'
  );
  content = content.replace(
    /class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950\/40 border border-emerald-200 dark:border-emerald-800 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:bg-emerald-100 transition-colors shrink-0 group"/g,
    'class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition-colors shrink-0 group"'
  );
  content = content.replace(
    /class="text-xs font-semibold text-emerald-700 bg-emerald-100\/70 px-1\.5 py-0\.2 rounded"/g,
    'class="text-xs font-medium text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded"'
  );
  content = content.replace(
    /class="rounded-xl bg-emerald-50\/70 border border-emerald-200\/80 p-4 space-y-1"/g,
    'class="rounded-xl bg-slate-50 border border-slate-200 p-4 space-y-1"'
  );
  content = content.replace(
    /class="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-medium"/g,
    'class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 font-medium"'
  );
  content = content.replace(
    /class="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 leading-relaxed font-medium"/g,
    'class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed font-medium"'
  );
  content = content.replace(
    /class="p-4 rounded-xl bg-emerald-50\/50 border border-emerald-200"/g,
    'class="p-4 rounded-xl bg-slate-50/50 border border-slate-200"'
  );

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  return false;
}

let modifiedCount = 0;
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['node_modules', '.git', 'dist', 'Adant', 'scripts'].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (/\.(html|ts|tsx|js)$/.test(entry.name)) {
      if (processFile(full)) {
        modifiedCount++;
        console.log(`Updated: ${path.relative(rootDir, full)}`);
      }
    }
  }
}

walk(rootDir);
console.log(`Done! Modified ${modifiedCount} files.`);

