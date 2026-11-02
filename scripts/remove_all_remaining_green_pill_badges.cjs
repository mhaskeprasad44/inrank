const fs = require('fs');
const path = require('path');

let modifiedCount = 0;

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // 1. "Verified" badge across all service pages
  content = content.replace(
    /class="text-\[10px\] font-mono px-2 py-0\.5 rounded-full bg-emerald-500\/10 text-emerald-600 font-bold border border-emerald-500\/20"/g,
    'class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-muted text-muted-foreground font-semibold border border-border/80"'
  );

  // 2. Lead magnet badge in index.html / other pages
  content = content.replace(
    /px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500\/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500\/20/g,
    'px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-muted text-muted-foreground border border-border/80'
  );

  // 3. Image tag on healthcare case study in index.html
  content = content.replace(
    /absolute top-3 left-3 px-3 py-1 rounded-full text-\[10px\] font-bold uppercase tracking-wider bg-emerald-500\/90 text-black/g,
    'absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-background/90 text-foreground border border-border/80 shadow-xs'
  );

  // 4. Delivery time badge in pricing cards in index.html
  content = content.replace(
    /inline-flex items-center gap-1\.5 text-xs text-emerald-700 dark:text-emerald-400 bg-emerald-500\/10 px-2\.5 py-1 rounded-md mb-5 font-semibold/g,
    'inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/60 px-2.5 py-1 rounded-md mb-5 font-medium border border-border/60'
  );

  // 5. HP2 / homepage-2 badge
  content = content.replace(
    /inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500\/10 border border-emerald-500\/30 text-emerald-400 text-xs font-bold uppercase tracking-wider/g,
    'inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-100 border border-stone-300 text-stone-700 text-xs font-semibold uppercase tracking-wider'
  );

  // 6. Quick tag buttons in homepage-2
  content = content.replace(
    /hover:bg-emerald-50 hover:text-emerald-700/g,
    'hover:bg-stone-200 hover:text-stone-900'
  );

  // 7. General generate_services badges
  content = content.replace(
    /inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500\/10 border border-emerald-500\/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider/g,
    'inline-flex items-center gap-2 px-3 py-1 rounded-md bg-muted border border-border/80 text-muted-foreground text-xs font-semibold uppercase tracking-wider'
  );

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    modifiedCount++;
    console.log(`Updated: ${filePath}`);
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    if (['node_modules', '.git', 'dist'].includes(f)) continue;
    const p = path.join(dir, f);
    const stat = fs.statSync(p);
    if (stat.isDirectory()) {
      walk(p);
    } else if (/\.(html|js|ts|tsx)$/.test(f)) {
      processFile(p);
    }
  }
}

walk('.');
console.log(`Finished! Total files updated: ${modifiedCount}`);
