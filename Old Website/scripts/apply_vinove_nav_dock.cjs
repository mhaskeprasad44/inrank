const fs = require('fs');

console.log('Updating nav.css to exact Vinove shrinking floating dock...');

// 1. Update inrank2.0/css/nav.css
let navCss = fs.readFileSync('inrank2.0/css/nav.css', 'utf8');

// Replace the #nav and .nav-bar top block
const navStart = navCss.indexOf('#nav {');
const navBrandStart = navCss.indexOf('/* ══════════════════════════════════════════\n   BRAND LOGO');

const newNavDockBlock = `#nav {
  position: fixed;
  inset: 0 0 auto;
  z-index: 800;
  height: var(--nav-h, 80px);
  padding: 0;
  width: 100%;
  background: transparent !important;
  border: 0 !important;
  border-bottom: 1px solid transparent !important;
  box-shadow: none !important;
  pointer-events: none;
  transition: height 0.35s cubic-bezier(0.16, 1, 0.3, 1), padding 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.nav-bar {
  width: 100%;
  max-width: calc(var(--max, 1400px) + var(--gutter, 2rem) * 2);
  height: var(--nav-h, 80px);
  padding: 0 var(--gutter, clamp(20px, 4vw, 56px));
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0;
  border-bottom: 1px solid transparent;
  border-radius: 0;
  pointer-events: auto;
  background: transparent;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  box-shadow: none;
  transition:
    width 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    max-width 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    height 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    padding 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    background 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    border-radius 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

#nav.is-dark .nav-bar {
  background: transparent;
  border: 0;
  box-shadow: none;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
}

#nav.is-dark {
  background: transparent !important;
  border-bottom-color: transparent !important;
  box-shadow: none !important;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
}

/* Scrolled state: shrinks into the floating capsule dock with transparent surround */
#nav.is-scrolled,
#nav.is-light,
#nav.nav-open {
  height: 80px;
  padding: 10px clamp(12px, 2vw, 24px);
  background: transparent !important;
}

#nav.is-scrolled .nav-bar,
#nav.is-light .nav-bar,
#nav.nav-open .nav-bar {
  width: min(1180px, 100%);
  max-width: 1180px;
  height: 60px;
  padding: 0 9px 0 20px;
  background: linear-gradient(118deg, rgba(18, 36, 59, 0.78), rgba(8, 20, 36, 0.66));
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 18px;
  box-shadow:
    0 18px 50px rgba(5, 13, 24, 0.20),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(24px) saturate(150%);
  -webkit-backdrop-filter: blur(24px) saturate(150%);
}

#nav.nav-open .nav-bar {
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
}
`;

if (navStart !== -1 && navBrandStart !== -1) {
  navCss = navCss.substring(0, navStart) + newNavDockBlock + '\n\n' + navCss.substring(navBrandStart);
}

// Ensure @media (min-width: 1081px) centers nav links
if (!navCss.includes('.nav-links { position: absolute; left: 50%;')) {
  navCss += `\n
@media (min-width: 1081px) {
  .nav-bar { position: relative; }
  .nav-links { position: absolute; left: 50%; transform: translateX(-50%); }
}
`;
}

// Ensure active link indicator line matches Vinove
if (!navCss.includes('.nav-link.is-current::after')) {
  navCss += `\n
.nav-link::after,
.nav-link.is-current::after {
  content: '';
  position: absolute;
  left: 13px;
  right: calc(100% - 13px);
  bottom: 5px;
  width: auto;
  height: 2px;
  border-radius: 0;
  background: var(--terra, #009d49);
  transform: none;
  transition: right .25s var(--ease);
}
.nav-link:hover::after,
.nav-link[aria-expanded="true"]::after,
.nav-link.is-current::after {
  right: 13px;
}
`;
}

fs.writeFileSync('inrank2.0/css/nav.css', navCss);
console.log('[OK] inrank2.0/css/nav.css updated');

// Also update root css/nav.css if it exists
if (fs.existsSync('css/nav.css')) {
  fs.writeFileSync('css/nav.css', navCss);
  console.log('[OK] root css/nav.css updated');
}

// 2. Update components.css nav-inner aliases to match
if (fs.existsSync('inrank2.0/css/components.css')) {
  let compCss = fs.readFileSync('inrank2.0/css/components.css', 'utf8');
  compCss = compCss.replace(
    /width:\s*min\(1400px,\s*100%\);/g,
    'width: min(1180px, 100%);'
  ).replace(
    /max-width:\s*1400px;/g,
    'max-width: 1180px;'
  );
  fs.writeFileSync('inrank2.0/css/components.css', compCss);
  console.log('[OK] inrank2.0/css/components.css updated');
}

// 3. Update inrank2.0/js/core.js mapping to include blog
if (fs.existsSync('inrank2.0/js/core.js')) {
  let coreJs = fs.readFileSync('inrank2.0/js/core.js', 'utf8');
  if (!coreJs.includes("'blog': 'blog'")) {
    coreJs = coreJs.replace("contact: 'contact'", "contact: 'contact',\n      blog: 'blog'");
    fs.writeFileSync('inrank2.0/js/core.js', coreJs);
    console.log('[OK] inrank2.0/js/core.js active page map updated with blog');
  }
}
if (fs.existsSync('js/core.js')) {
  let rootCoreJs = fs.readFileSync('js/core.js', 'utf8');
  if (!rootCoreJs.includes("'blog': 'blog'")) {
    rootCoreJs = rootCoreJs.replace("contact: 'contact'", "contact: 'contact',\n      blog: 'blog'");
    fs.writeFileSync('js/core.js', rootCoreJs);
    console.log('[OK] root js/core.js updated');
  }
}

