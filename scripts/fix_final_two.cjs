const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

// 1. justdial-profile.html
const jdPath = path.join(rootDir, 'justdial-profile.html');
let jd = fs.readFileSync(jdPath, 'utf8');
jd = jd.replace('bg-emerald-50/80 border border-emerald-200', 'bg-slate-50 border border-slate-200');
fs.writeFileSync(jdPath, jd, 'utf8');
console.log('Fixed justdial-profile.html');

// 2. generate_portfolio_system.ts
const gpPath = path.join(rootDir, 'generate_portfolio_system.ts');
if (fs.existsSync(gpPath)) {
  let gp = fs.readFileSync(gpPath, 'utf8');
  gp = gp.replace(
    "${isCollab ? 'bg-amber-50 text-amber-700 border border-amber-200' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'}",
    "bg-slate-100 text-slate-700 border border-slate-200"
  );
  fs.writeFileSync(gpPath, gp, 'utf8');
  console.log('Fixed generate_portfolio_system.ts');
}
