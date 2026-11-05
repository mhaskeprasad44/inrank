const fs = require('fs');

let html = fs.readFileSync('inrank2.0/our-work/dravyafinancial.html', 'utf8');

// Replace the hero section
const oldHeroRegex = /<!-- ════════════════════════════════════════════════════════\s*HERO SECTION: IMAGE FIRST, THEN TITLE & DETAILS[\s\S]*?<\/section>/;

const newHero = `<!-- ════════════════════════════════════════════════════════
         HERO SECTION: HALF DARK / HALF LIGHT SPLIT (IMAGE FIRST, THEN TITLE & DETAILS)
         ════════════════════════════════════════════════════════ -->
    <section class="work-hero-split" style="position:relative;background:#ffffff;padding-top:calc(var(--nav-h) + 2rem);padding-bottom:4rem;">
      <!-- Dark backdrop: covers top down to exactly half of the mockup frame -->
      <div class="work-hero-backdrop" style="position:absolute;top:0;left:0;right:0;height:520px;background:radial-gradient(circle at 80% 20%, rgba(0, 157, 73, 0.28) 0%, transparent 60%), #081424;z-index:1;" aria-hidden="true"></div>

      <div class="shell" style="position:relative;z-index:2;">
        
        <!-- Breadcrumb Navigation on Dark Background -->
        <nav style="display:flex;align-items:center;gap:8px;font-size:0.84rem;color:#94a3b8;margin-bottom:1.5rem;" aria-label="Breadcrumb">
          <a href="/" style="color:#94a3b8;text-decoration:none;">Home</a>
          <span>/</span>
          <a href="/our-work.html" style="color:#94a3b8;text-decoration:none;">Our Work</a>
          <span>/</span>
          <span style="color:#ffffff;font-weight:700;">Dravya Financial Solutions Pvt Ltd</span>
        </nav>

        <!-- 1. IMAGE FIRST: Prominent Browser Mockup Showcase (Top half on dark, bottom half on light) -->
        <div class="work-mockup-frame" style="background:#ffffff;border:1px solid rgba(8,20,36,0.12);border-radius:20px;overflow:hidden;box-shadow:0 30px 60px -12px rgba(8,20,36,0.25), 0 10px 24px -8px rgba(8,20,36,0.15);margin-bottom:3rem;">
          <div style="padding:12px 20px;background:#f8fafc;border-bottom:1px solid #e2e8f0;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;">
            <div style="display:flex;gap:6px;">
              <span style="width:11px;height:11px;border-radius:50%;background:#ef4444;display:inline-block;"></span>
              <span style="width:11px;height:11px;border-radius:50%;background:#f59e0b;display:inline-block;"></span>
              <span style="width:11px;height:11px;border-radius:50%;background:#10b981;display:inline-block;"></span>
            </div>
            <span style="font-size:0.8rem;font-weight:700;color:#64748b;font-family:monospace;">https://dravyafinancial.com/</span>
            <span style="font-size:0.75rem;font-weight:800;color:#009d49;background:#e6f7ef;padding:4px 12px;border-radius:999px;">₹14.5Cr+ Inbound AUM</span>
          </div>
          <img src="/portfolio/screenshots/dravyafinancial.webp" alt="Dravya Financial Solutions Pvt Ltd Production Interface" style="width:100%;height:auto;display:block;" />
        </div>

        <!-- 2. TITLE AND DETAILS ON LIGHT BACKGROUND (Pills Removed) -->
        <div class="work-hero-details" style="color:#081424;">
          <h1 class="hero-title" style="margin-bottom:0.75rem;font-size:clamp(2.2rem, 3.8vw, 3.5rem);font-weight:850;letter-spacing:-0.03em;color:#081424;line-height:1.15;">Dravya Financial Solutions Pvt Ltd</h1>
          <p style="font-size:clamp(1.1rem, 1.6vw, 1.35rem);color:#009d49;font-weight:700;line-height:1.4;max-width:860px;margin-bottom:2rem;">Institutional Wealth Advisory & High-Yield Portfolio Management Platform</p>

          <div style="display:flex;align-items:center;gap:1rem;flex-wrap:wrap;">
            <a href="https://dravyafinancial.com/" target="_blank" rel="noopener noreferrer" class="button primary" style="background:#009d49;color:#ffffff;padding:12px 28px;border-radius:999px;font-weight:750;text-decoration:none;display:inline-flex;align-items:center;gap:8px;box-shadow:0 4px 14px rgba(0,157,73,0.28);">
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

if (!oldHeroRegex.test(html)) {
  console.log('Regex did not match old hero!');
  process.exit(1);
}

html = html.replace(oldHeroRegex, newHero);
fs.writeFileSync('inrank2.0/our-work/dravyafinancial.html', html, 'utf8');
console.log('Updated dravyafinancial.html successfully!');

