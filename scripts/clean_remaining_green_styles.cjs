const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

function replacePatternsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // 1. WhatsApp navbar icon button
  content = content.replace(
    /class="h-9 w-9 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200 hover:bg-emerald-600 hover:text-white transition-all flex items-center justify-center"/g,
    'class="h-9 w-9 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 hover:bg-emerald-600 hover:text-white transition-all flex items-center justify-center"'
  );

  // 2. Checkmark circles
  content = content.replace(
    /class="w-6 h-6 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0\.5 border border-emerald-200"/g,
    'class="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5"'
  );
  content = content.replace(
    /<i data-lucide="check" class="w-3\.5 h-3\.5 text-emerald-600"><\/i>/g,
    '<i data-lucide="check" class="w-3 h-3 text-white"></i>'
  );

  // 3. Highlighted testimonial/quote cards
  content = content.replace(
    /class="rounded-2xl border border-emerald-200 bg-emerald-50\/50 p-7 sm:p-8 space-y-5 shadow-sm"/g,
    'class="rounded-2xl border border-slate-200 bg-slate-50/70 p-7 sm:p-8 space-y-5 shadow-sm"'
  );
  content = content.replace(
    /border-t border-emerald-200\/80/g,
    'border-t border-slate-200'
  );

  // 4. WhatsApp callout buttons in case studies
  content = content.replace(
    /hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300/g,
    'hover:bg-slate-50 hover:text-emerald-600 hover:border-slate-300'
  );

  // 5. Numbered icon containers in homepage2.ts
  content = content.replace(
    /class="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-lg border border-emerald-200"/g,
    'class="h-12 w-12 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center font-bold text-lg border border-slate-200"'
  );
  content = content.replace(
    /class="p-3 rounded-xl bg-emerald-50 border border-emerald-200"/g,
    'class="p-3 rounded-xl bg-slate-50 border border-slate-200"'
  );

  // 6. Icon boxes in website-design-company-in-pune.html
  content = content.replace(
    /class="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950\/40 border border-emerald-200\/60 flex items-center justify-center text-emerald-700 flex-shrink-0 mt-0\.5"/g,
    'class="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300 flex-shrink-0 mt-0.5"'
  );

  // 7. Icon boxes in case studies
  content = content.replace(
    /class="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-6"/g,
    'class="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-emerald-600 mb-6"'
  );

  // 8. In homepage2.ts badges
  content = content.replace(
    /class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500\/10 border border-emerald-500\/20 text-\[11px\] font-bold uppercase tracking-wider text-emerald-700"/g,
    'class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-semibold uppercase tracking-wider text-slate-700"'
  );
  content = content.replace(
    /class="inline-flex items-center gap-1\.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500\/10 text-emerald-700 border border-emerald-500\/20 font-mono"/g,
    'class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 font-mono"'
  );

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  return false;
}

let count = 0;
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['node_modules', '.git', 'dist', 'Adant', 'scripts'].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (/\.(html|ts|tsx|js)$/.test(entry.name)) {
      if (replacePatternsInFile(full)) {
        count++;
        console.log(`Updated: ${path.relative(rootDir, full)}`);
      }
    }
  }
}

walk(rootDir);
console.log(`Finished step 2, updated ${count} files.`);
