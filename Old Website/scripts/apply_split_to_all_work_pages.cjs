const fs = require('fs');
const path = require('path');

const files = [
  'inrank2.0/our-work/cytos.html',
  'inrank2.0/our-work/dravyafinancial.html',
  'inrank2.0/our-work/fludio.html',
  'inrank2.0/our-work/greytothegreen.html',
  'inrank2.0/our-work/hcpnest.html',
  'inrank2.0/our-work/hiragrafix.html',
  'inrank2.0/our-work/orthopedicanklefootspecialist.html',
  'inrank2.0/our-work/riituinstitution.html',
  'inrank2.0/our-work/shetkarifoodstuff.html',
  'inrank2.0/our-work/vasroventures.html',
  'inrank2.0/case-studies/cytos.html',
  'inrank2.0/case-studies/dravyafinancial.html',
  'inrank2.0/case-studies/fludio.html',
  'inrank2.0/case-studies/greytothegreen.html',
  'inrank2.0/case-studies/hcpnest.html',
  'inrank2.0/case-studies/hiragrafix.html',
  'inrank2.0/case-studies/orthopedicanklefootspecialist.html',
  'inrank2.0/case-studies/riituinstitution.html',
  'inrank2.0/case-studies/shetkarifoodstuff.html',
  'inrank2.0/case-studies/vasroventures.html'
];

let updatedCount = 0;

files.forEach(filePath => {
  if (!fs.existsSync(filePath)) {
    console.warn('File not found:', filePath);
    return;
  }

  let html = fs.readFileSync(filePath, 'utf8');

  // Find the hero section - could be class="work-hero-top" or "work-hero-split"
  const heroMatch = html.match(/<section class="work-hero-(?:top|split)"[\s\S]*?<\/section>/);
  if (!heroMatch) {
    console.warn('Could not find hero in:', filePath);
    return;
  }

  const currentHero = heroMatch[0];

  // 1. Extract Breadcrumbs
  const breadcrumbMatch = currentHero.match(/<nav[^>]*aria-label="Breadcrumb"[^>]*>[\s\S]*?<\/nav>/);
  const breadcrumb = breadcrumbMatch ? breadcrumbMatch[0] : '';

  // 2. Extract Mockup Frame
  const mockupMatch = currentHero.match(/<div class="work-mockup-frame"[\s\S]*?<\/div>\s*<\/div>/);
  let mockupFrame = '';
  if (mockupMatch) {
    mockupFrame = mockupMatch[0];
  } else {
    // Fallback search
    const m2 = currentHero.match(/<div class="work-mockup-frame"[\s\S]*?<\/div>/);
    mockupFrame = m2 ? m2[0] : '';
  }

  // Ensure mockup styling is optimal for half/half split
  mockupFrame = mockupFrame.replace(
    /<div class="work-mockup-frame"[^>]*>/,
    `<div class="work-mockup-frame" style="background:#ffffff;border:1px solid rgba(8,20,36,0.12);border-radius:20px;overflow:hidden;box-shadow:0 30px 60px -12px rgba(8,20,36,0.25), 0 10px 24px -8px rgba(8,20,36,0.15);margin-bottom:3rem;">`
  );

  // 3. Extract Title
  const titleMatch = currentHero.match(/<h1 class="hero-title"[^>]*>([\s\S]*?)<\/h1>/);
  const titleText = titleMatch ? titleMatch[1].trim() : '';

  // 4. Extract Subtitle
  const subMatch = currentHero.match(/<h1 class="hero-title"[^>]*>[\s\S]*?<\/h1>\s*<p[^>]*>([\s\S]*?)<\/p>/);
  const subText = subMatch ? subMatch[1].trim() : '';

  // 5. Extract Live Portal URL
  const urlMatch = currentHero.match(/href="([^"]+)"[^>]*class="button primary"/);
  const liveUrl = urlMatch ? urlMatch[1] : '#';

  // Build the new clean hero section with NO pills and split background
  const newHeroHtml = `<!-- ════════════════════════════════════════════════════════
         HERO SECTION: HALF DARK / HALF LIGHT SPLIT (IMAGE FIRST, THEN TITLE & DETAILS)
         ════════════════════════════════════════════════════════ -->
    <section class="work-hero-split" style="position:relative;background:#ffffff;padding-top:calc(var(--nav-h) + 2rem);padding-bottom:4rem;">
      <!-- Dark backdrop: covers top down to exactly half of the mockup frame -->
      <div class="work-hero-backdrop" style="position:absolute;top:0;left:0;right:0;height:520px;background:radial-gradient(circle at 80% 20%, rgba(0, 157, 73, 0.28) 0%, transparent 60%), #081424;z-index:1;" aria-hidden="true"></div>

      <div class="shell" style="position:relative;z-index:2;">
        
        <!-- Breadcrumb Navigation on Dark Background -->
        ${breadcrumb}

        <!-- 1. IMAGE FIRST: Prominent Browser Mockup Showcase (Top half on dark, bottom half on light) -->
        ${mockupFrame}

        <!-- 2. TITLE AND DETAILS ON LIGHT BACKGROUND (Pills Removed) -->
        <div class="work-hero-details" style="color:#081424;">
          <h1 class="hero-title" style="margin-bottom:0.75rem;font-size:clamp(2.2rem, 3.8vw, 3.5rem);font-weight:850;letter-spacing:-0.03em;color:#081424;line-height:1.15;">${titleText}</h1>
          <p style="font-size:clamp(1.1rem, 1.6vw, 1.35rem);color:#009d49;font-weight:700;line-height:1.4;max-width:860px;margin-bottom:2rem;">${subText}</p>

          <div style="display:flex;align-items:center;gap:1rem;flex-wrap:wrap;">
            <a href="${liveUrl}" target="_blank" rel="noopener noreferrer" class="button primary" style="background:#009d49;color:#ffffff;padding:12px 28px;border-radius:999px;font-weight:750;text-decoration:none;display:inline-flex;align-items:center;gap:8px;box-shadow:0 4px 14px rgba(0,157,73,0.28);">
              <span>Visit Live Portal</span>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M3 13L13 3H5M13 3V11"/></svg>
            </a>
            <a href="/contact.html" class="button secondary" style="color:#081424;border:1.5px solid #cbd5e1;background:#ffffff;padding:12px 28px;border-radius:999px;font-weight:750;text-decoration:none;">Book Similar Project</a>
          </div>
        </div>

      </div>
    </section>

    <script>
      (function() {
        function syncWorkHeroSplit() {
          var frame = document.querySelector('.work-mockup-frame');
          var backdrop = document.querySelector('.work-hero-backdrop');
          if (frame && backdrop) {
            var top = frame.offsetTop;
            var height = frame.offsetHeight;
            backdrop.style.height = (top + Math.round(height / 2)) + 'px';
          }
        }
        window.addEventListener('resize', syncWorkHeroSplit);
        window.addEventListener('load', syncWorkHeroSplit);
        if (document.readyState === 'complete') {
          syncWorkHeroSplit();
        } else {
          document.addEventListener('DOMContentLoaded', syncWorkHeroSplit);
        }
      })();
    </script>`;

  // Clean out any leftover syncWorkHeroSplit scripts if re-running
  html = html.replace(/<script>\s*\(function\(\)\s*\{\s*function syncWorkHeroSplit[\s\S]*?<\/script>/g, '');

  html = html.replace(heroMatch[0], newHeroHtml);

  fs.writeFileSync(filePath, html, 'utf8');
  updatedCount++;
  console.log(`[OK] Updated ${filePath} (Title: ${titleText})`);
});

console.log(`\nDone! Successfully updated ${updatedCount} portfolio files.`);

