const fs = require('fs');
const path = require('path');

function getAllWorkFiles() {
  const dirs = [
    'inrank2.0/our-work',
    'inrank2.0/case-studies',
    'our-work',
    'case-studies'
  ];
  let files = [];
  dirs.forEach(d => {
    if (fs.existsSync(d)) {
      fs.readdirSync(d).forEach(f => {
        if (f.endsWith('.html')) {
          files.push(path.join(d, f));
        }
      });
    }
  });
  return files;
}

const workFiles = getAllWorkFiles();
console.log(`Found ${workFiles.length} individual work/case-study files to inspect.`);

let cleanedCount = 0;

workFiles.forEach(file => {
  let html = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Check if .work-hero-details appears multiple times in the hero section
  const heroMatch = html.match(/<section class="work-hero-(?:top|split)"[\s\S]*?<\/section>/);
  if (!heroMatch) return;

  let hero = heroMatch[0];

  // Check how many times work-hero-details appears in hero
  const detailsMatches = [...hero.matchAll(/<div class="work-hero-details"[\s\S]*?<\/div>\s*<\/div>/g)];
  
  // Or check if h1 appears multiple times in hero
  const h1Matches = [...hero.matchAll(/<h1 class="hero-title"[^>]*>[\s\S]*?<\/h1>/g)];

  if (h1Matches.length > 1 || detailsMatches.length > 1) {
    console.log(`Detected duplicate in ${file} (H1 count: ${h1Matches.length})`);

    // Clean up: find the mockup frame cleanly
    // The mockup frame starts with <div class="work-mockup-frame" and ends after the <img> tag and its closing </div>
    const mockupRegex = /(<div class="work-mockup-frame"[\s\S]*?<img[^>]+>[\s\S]*?<\/div>)/;
    const mMatch = hero.match(mockupRegex);

    if (mMatch) {
      const cleanMockup = mMatch[1];
      
      // Extract breadcrumbs
      const bMatch = hero.match(/<nav[^>]*aria-label="Breadcrumb"[^>]*>[\s\S]*?<\/nav>/);
      const breadcrumb = bMatch ? bMatch[0] : '';

      // Extract title
      const tMatch = hero.match(/<h1 class="hero-title"[^>]*>([\s\S]*?)<\/h1>/);
      const title = tMatch ? tMatch[1].trim() : '';

      // Extract subtitle
      const sMatch = hero.match(/<h1 class="hero-title"[^>]*>[\s\S]*?<\/h1>\s*<p[^>]*>([\s\S]*?)<\/p>/);
      const subtitle = sMatch ? sMatch[1].trim() : '';

      // Extract live URL
      const uMatch = hero.match(/href="([^"]+)"[^>]*class="button primary"/);
      const liveUrl = uMatch ? uMatch[1] : '#';

      // Reconstruct the clean hero with EXACTLY ONE title and details block
      const cleanHero = `<!-- ==========================================================================
         HERO SECTION: HALF DARK / HALF LIGHT SPLIT (IMAGE FIRST, THEN TITLE & DETAILS)
         ========================================================================== -->
    <section class="work-hero-split" style="position:relative;background:#ffffff;padding-top:calc(var(--nav-h) + 2rem);padding-bottom:4rem;">
      <!-- Dark backdrop: covers top down to exactly half of the mockup frame -->
      <div class="work-hero-backdrop" style="position:absolute;top:0;left:0;right:0;height:520px;background:radial-gradient(circle at 80% 20%, rgba(0, 157, 73, 0.28) 0%, transparent 60%), #081424;z-index:1;" aria-hidden="true"></div>

      <div class="shell" style="position:relative;z-index:2;">
        
        <!-- Breadcrumb Navigation on Dark Background -->
        ${breadcrumb}

        <!-- 1. IMAGE FIRST: Prominent Browser Mockup Showcase (Top half on dark, bottom half on light) -->
        ${cleanMockup}

        <!-- 2. TITLE AND DETAILS ON LIGHT BACKGROUND (Single Instance, Zero Duplication) -->
        <div class="work-hero-details" style="color:#081424;margin-top:2rem;">
          <h1 class="hero-title" style="margin-bottom:0.75rem;font-size:clamp(2.2rem, 3.8vw, 3.5rem);font-weight:850;letter-spacing:-0.03em;color:#081424;line-height:1.15;">${title}</h1>
          <p style="font-size:clamp(1.1rem, 1.6vw, 1.35rem);color:#009d49;font-weight:700;line-height:1.4;max-width:860px;margin-bottom:2rem;">${subtitle}</p>

          <div style="display:flex;align-items:center;gap:1rem;flex-wrap:wrap;">
            <a href="${liveUrl}" target="_blank" rel="noopener noreferrer" class="button primary" style="background:#009d49;color:#ffffff;padding:12px 28px;border-radius:999px;font-weight:750;text-decoration:none;display:inline-flex;align-items:center;gap:8px;box-shadow:0 4px 14px rgba(0,157,73,0.28);">
              <span>Visit Live Portal</span>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
            </a>
            <a href="/contact.html" class="button secondary" style="color:#081424;border:1.5px solid #cbd5e1;background:#ffffff;padding:12px 28px;border-radius:999px;font-weight:750;text-decoration:none;">Book Similar Project</a>
          </div>
        </div>

      </div>
    </section>`;

      html = html.replace(hero, cleanHero);
      fs.writeFileSync(file, html, 'utf8');
      changed = true;
      cleanedCount++;
    }
  }
});

console.log(`[DONE] Fixed duplicate titles in ${cleanedCount} work files!`);

