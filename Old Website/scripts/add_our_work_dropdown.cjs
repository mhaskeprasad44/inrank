const fs = require('fs');
const path = require('path');

// 1. ADD CSS TO inrank2.0/css/nav.css
const workNavCss = `
/* ══════════════════════════════════════════════════════════
   OUR WORK DROPDOWN (Vinove 3x2 Grid System)
   Matching User Reference Screenshot (Client Logo + Web Name)
   ══════════════════════════════════════════════════════════ */
@media (min-width: 992px) {
  .nav-item[data-dropdown="work"] {
    position: static !important;
  }
}

.drop-work {
  position: absolute !important;
  top: calc(100% + 12px) !important;
  left: 50% !important;
  transform: translateX(-50%) translateY(8px) !important;
  width: min(900px, calc(100vw - 40px)) !important;
  max-width: 900px !important;
  background: #ffffff !important;
  border: 1px solid rgba(8, 20, 36, 0.10) !important;
  border-radius: 20px !important;
  box-shadow: 0 28px 72px rgba(8, 20, 36, 0.18) !important;
  z-index: 1000 !important;
  overflow: hidden !important;
  padding: 16px !important;
  opacity: 0 !important;
  visibility: hidden !important;
  pointer-events: none !important;
  transition: opacity .25s cubic-bezier(.22, 1, .36, 1), transform .25s cubic-bezier(.22, 1, .36, 1), visibility .25s !important;
}

.drop-work::before {
  content: '' !important;
  position: absolute !important;
  top: -16px !important;
  left: 0 !important;
  right: 0 !important;
  height: 16px !important;
  background: transparent !important;
}

@media (hover: hover) and (min-width: 992px) {
  .nav-item[data-dropdown="work"]:hover > .drop-work,
  .nav-item[data-dropdown="work"]:focus-within > .drop-work,
  .nav-item[data-dropdown="work"][data-open] > .drop-work {
    transform: translateX(-50%) translateY(0) !important;
    opacity: 1 !important;
    visibility: visible !important;
    pointer-events: auto !important;
  }
}

.nav-item[data-dropdown="work"][data-open] > .drop-work {
  transform: translateX(-50%) translateY(0) !important;
  opacity: 1 !important;
  visibility: visible !important;
  pointer-events: auto !important;
}

.work-dropdown-grid {
  display: grid !important;
  grid-template-columns: repeat(3, 1fr) !important;
  gap: 12px !important;
}

.work-dropdown-card {
  padding: 24px 22px !important;
  background: #ffffff !important;
  border: 1px solid rgba(8, 20, 36, 0.08) !important;
  border-radius: 16px !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: space-between !important;
  min-height: 145px !important;
  text-decoration: none !important;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.work-dropdown-card:hover {
  background: #f8fafc !important;
  border-color: #009d49 !important;
  box-shadow: 0 10px 24px rgba(0, 157, 73, 0.08) !important;
  transform: translateY(-2px) !important;
}

.work-drop-logo-wrap {
  height: 38px !important;
  display: flex !important;
  align-items: center !important;
  margin-bottom: 1.5rem !important;
}

.work-drop-logo {
  max-height: 36px !important;
  max-width: 145px !important;
  width: auto !important;
  object-fit: contain !important;
  object-position: left center !important;
}

.work-drop-info {
  display: flex !important;
  flex-direction: column !important;
  gap: 4px !important;
}

.work-drop-name {
  font-size: 1.1rem !important;
  font-weight: 850 !important;
  color: #081424 !important;
  margin: 0 !important;
  line-height: 1.2 !important;
  letter-spacing: -0.015em !important;
}

.work-drop-desc {
  font-size: 0.84rem !important;
  color: #64748b !important;
  line-height: 1.4 !important;
}

/* Box 6: Dark Card (All companies) */
.work-dropdown-card--all {
  background: #081424 !important;
  border-color: rgba(255, 255, 255, 0.12) !important;
  color: #ffffff !important;
}

.work-dropdown-card--all:hover {
  background: #0f223a !important;
  border-color: #00bf5d !important;
  box-shadow: 0 14px 36px rgba(8, 20, 36, 0.4) !important;
  transform: translateY(-2px) !important;
}

.work-drop-all-head {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  margin-bottom: 1.5rem !important;
  height: 38px !important;
}

.work-drop-all-brand {
  display: flex !important;
  align-items: center !important;
  gap: 10px !important;
}

.work-drop-all-title {
  font-size: 1.15rem !important;
  font-weight: 900 !important;
  letter-spacing: 0.04em !important;
  color: #ffffff !important;
  line-height: 1 !important;
}

.work-drop-all-arrow {
  color: #94a3b8 !important;
  transition: transform 0.25s ease, color 0.25s ease !important;
}

.work-dropdown-card--all:hover .work-drop-all-arrow {
  color: #00bf5d !important;
  transform: translateX(4px) !important;
}

.work-dropdown-card--all .work-drop-name {
  color: #ffffff !important;
}

.work-dropdown-card--all .work-drop-desc {
  color: #94a3b8 !important;
}
`;

let navCss = fs.readFileSync('inrank2.0/css/nav.css', 'utf8');
if (!navCss.includes('.drop-work')) {
  navCss += '\n' + workNavCss;
  fs.writeFileSync('inrank2.0/css/nav.css', navCss, 'utf8');
  console.log('Appended Our Work Dropdown CSS to nav.css');
}

// 2. DEFINE THE HTML SNIPPET FOR OUR WORK DROPDOWN
const ourWorkDropdownHtml = `
        <!-- Our Work with 3x2 Client Dropdown -->
        <div class="nav-item" data-dropdown="work">
          <a href="/our-work.html" class="nav-link nav-link--drop" aria-expanded="false" aria-haspopup="true">
            <span>Our Work</span>
            <svg class="nav-chev" viewBox="0 0 12 12" width="12" height="12" aria-hidden="true">
              <path d="M2.5 4.5L6 8L9.5 4.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>

          <!-- Floating Our Work Dropdown Menu -->
          <div class="nav-drop drop-work" role="region" aria-label="Our Work Submenu">
            <div class="work-dropdown-grid">
              
              <!-- Box 1: Dravya Financial -->
              <a href="/our-work/dravyafinancial.html" class="work-dropdown-card">
                <div class="work-drop-logo-wrap">
                  <img src="/client-logos/dravya.png" alt="Dravya Financial" class="work-drop-logo" />
                </div>
                <div class="work-drop-info">
                  <h4 class="work-drop-name">Dravya Financial</h4>
                  <span class="work-drop-desc">Wealth management platform</span>
                </div>
              </a>

              <!-- Box 2: Greytothegreen -->
              <a href="/our-work/greytothegreen.html" class="work-dropdown-card">
                <div class="work-drop-logo-wrap">
                  <img src="/client-logos/greytothegreen.png" alt="Greytothegreen" class="work-drop-logo" />
                </div>
                <div class="work-drop-info">
                  <h4 class="work-drop-name">Greytothegreen</h4>
                  <span class="work-drop-desc">Landscape architecture portal</span>
                </div>
              </a>

              <!-- Box 3: Cytos Healthcare -->
              <a href="/our-work/cytos.html" class="work-dropdown-card">
                <div class="work-drop-logo-wrap">
                  <img src="/client-logos/cytos.png" alt="Cytos Healthcare" class="work-drop-logo" />
                </div>
                <div class="work-drop-info">
                  <h4 class="work-drop-name">Cytos Diagnostics</h4>
                  <span class="work-drop-desc">Clinical pathology &amp; lab network</span>
                </div>
              </a>

              <!-- Box 4: Shetkari Foodstuff -->
              <a href="/our-work/shetkarifoodstuff.html" class="work-dropdown-card">
                <div class="work-drop-logo-wrap">
                  <img src="/client-logos/shetkari.webp" alt="Shetkari Foodstuff" class="work-drop-logo" />
                </div>
                <div class="work-drop-info">
                  <h4 class="work-drop-name">Shetkari Foodstuff</h4>
                  <span class="work-drop-desc">Agri-export &amp; D2C storefront</span>
                </div>
              </a>

              <!-- Box 5: Fludio Design -->
              <a href="/our-work/fludio.html" class="work-dropdown-card">
                <div class="work-drop-logo-wrap">
                  <img src="/client-logos/fludio.png" alt="Fludio Design" class="work-drop-logo" />
                </div>
                <div class="work-drop-info">
                  <h4 class="work-drop-name">Fludio Design</h4>
                  <span class="work-drop-desc">Luxury acoustic architecture</span>
                </div>
              </a>

              <!-- Box 6: All companies / Explore the full portfolio (Featured Dark Card) -->
              <a href="/our-work.html" class="work-dropdown-card work-dropdown-card--all">
                <div class="work-drop-all-head">
                  <div class="work-drop-all-brand">
                    <img src="/img/inrank-white-logo.svg" alt="Inrank Technologies" width="28" height="28" />
                    <span class="work-drop-all-title">INRANK™</span>
                  </div>
                  <svg class="work-drop-all-arrow" viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 10h12M10 4l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="work-drop-info">
                  <h4 class="work-drop-name">All companies</h4>
                  <span class="work-drop-desc">Explore the full portfolio</span>
                </div>
              </a>

            </div>
          </div>
        </div>`;

// 3. APPLY TO ALL HTML FILES
function updateHtmlFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace <a href="/our-work.html" class="nav-link" data-nav="work">Our Work</a>
  // or <a href="/our-work.html" class="nav-link is-current" data-nav="work">Our Work</a>
  // or existing <div class="nav-item" data-dropdown="work">...</div>
  const simpleWorkRegex = /<a\s+href="\/our-work\.html"\s+class="nav-link[^"]*"\s*(?:data-nav="work")?[^>]*>[\s\S]*?<\/a>/;
  const existingWorkDropRegex = /<div class="nav-item"\s+data-dropdown="work">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;

  if (existingWorkDropRegex.test(content)) {
    content = content.replace(existingWorkDropRegex, ourWorkDropdownHtml.trim());
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated existing dropdown in:', filePath);
  } else if (simpleWorkRegex.test(content)) {
    content = content.replace(simpleWorkRegex, ourWorkDropdownHtml.trim());
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Replaced simple link with dropdown in:', filePath);
  } else {
    console.log('No Our Work nav link match in:', filePath);
  }
}

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f !== 'node_modules' && f !== '.git') processDir(full);
    } else if (f.endsWith('.html')) {
      updateHtmlFile(full);
    }
  }
}

processDir('inrank2.0');
console.log('Finished updating all HTML files!');

