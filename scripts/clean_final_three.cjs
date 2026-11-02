const fs = require('fs');

// 1. Update scripts/generate_services.ts
let gen = fs.readFileSync('scripts/generate_services.ts', 'utf8');
gen = gen.replace(
  'inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold',
  'inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium'
);
fs.writeFileSync('scripts/generate_services.ts', gen, 'utf8');

// 2. Update scripts/redesign_services_page.ts
let red = fs.readFileSync('scripts/redesign_services_page.ts', 'utf8');
red = red.replace(
  'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1.5 rounded-lg border border-emerald-200/80 dark:border-emerald-800/80',
  'text-foreground bg-muted px-3 py-1.5 rounded-lg border border-border/80'
);
fs.writeFileSync('scripts/redesign_services_page.ts', red, 'utf8');

// 3. Update src/main.ts
let main = fs.readFileSync('src/main.ts', 'utf8');
main = main.replace(
  'bg-emerald-500/10 hover:bg-emerald-600 text-emerald-600 dark:text-emerald-400 hover:text-white',
  'bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground'
);
fs.writeFileSync('src/main.ts', main, 'utf8');

console.log('Updated remaining 3 files successfully!');
