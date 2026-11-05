const fs = require('fs');
const path = require('path');

// 1. Prepare CSS additions for corporate.css
const heroStyles = `
/* ============================================================
   HOMEPAGE-2 HERO SECTION ADAPTATION (VINOVE + INRANK 2.0)
   ============================================================ */

.hero-hp2-section {
  position: relative;
  overflow: hidden;
  background-color: #ffffff;
  padding-top: clamp(7.5rem, 14vw, 11rem);
  padding-bottom: clamp(3.5rem, 6vw, 6rem);
  padding-left: clamp(1.25rem, 3vw, 2rem);
  padding-right: clamp(1.25rem, 3vw, 2rem);
}

.hero-dot-grid {
  position: absolute;
  inset: 0;
  opacity: 0.45;
  pointer-events: none;
  background-image: radial-gradient(circle, #cbd5e1 1.1px, transparent 1.1px);
  background-size: 28px 28px;
  z-index: 0;
}

.ambient-glow-hero {
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  max-width: 950px;
  height: 400px;
  background: radial-gradient(ellipse at center, rgba(102, 176, 255, 0.18) 0%, rgba(0, 183, 85, 0.12) 45%, transparent 75%);
  filter: blur(65px);
  pointer-events: none;
  z-index: 0;
}

.hero-hp2-container {
  position: relative;
  z-index: 1;
  max-width: 1240px;
  margin: 0 auto;
}

/* Platform Stickers */
.hero-stickers-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  margin-bottom: 1.75rem;
}

.hero-stickers-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem 0.75rem;
  padding: 0.25rem 0;
}

.platform-sticker {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 0.95rem;
  background: #ffffff;
  border: 1.5px solid #ffffff;
  border-radius: 9999px;
  box-shadow: 0 4px 14px -2px rgba(15, 23, 42, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04);
  font-size: 0.76rem;
  font-weight: 600;
  color: #1e293b;
  transform: rotate(var(--tilt, 0deg));
  transition: all 0.25s cubic-bezier(0.22, 1, 0.36, 1);
  cursor: default;
  user-select: none;
}

.platform-sticker:hover {
  transform: rotate(0deg) scale(1.08) translateY(-2px);
  box-shadow: 0 12px 24px -4px rgba(15, 23, 42, 0.12), 0 0 0 2px rgba(0, 183, 85, 0.2);
  z-index: 10;
}

.platform-sticker img,
.platform-sticker svg {
  height: 16px;
  width: auto;
  max-width: 20px;
  flex-shrink: 0;
  display: block;
}

/* Delivery indicator kicker */
.hero-hp2-kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #059669;
}

.hero-hp2-ping {
  position: relative;
  display: inline-flex;
  width: 7px;
  height: 7px;
  border-radius: 9999px;
  background-color: #10b981;
}

.hero-hp2-ping::after {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: 9999px;
  background-color: #10b981;
  animation: heroPingAnim 1.6s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes heroPingAnim {
  0% { transform: scale(1); opacity: 0.9; }
  75%, 100% { transform: scale(2.8); opacity: 0; }
}

/* Headline & Text */
.hero-hp2-header {
  text-align: center;
  max-width: 980px;
  margin: 0 auto 2rem auto;
}

.hero-hp2-title {
  font-family: var(--font, 'Inter', sans-serif);
  font-weight: 900;
  font-size: clamp(2.25rem, 5.2vw, 4.25rem);
  line-height: 1.08;
  letter-spacing: -0.035em;
  color: #0c0a09;
  margin: 0 0 1.25rem 0;
  text-wrap: balance;
}

.hero-gradient-text {
  background: linear-gradient(135deg, #009d49 0%, #00b755 50%, #10b981 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.hero-hp2-sub {
  font-size: clamp(1rem, 1.8vw, 1.22rem);
  line-height: 1.6;
  color: #475569;
  font-weight: 400;
  max-width: 820px;
  margin: 0 auto;
}

/* CTAs */
.hero-hp2-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 2rem auto 2.5rem auto;
}

.hero-hp2-btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.95rem 1.85rem;
  border-radius: 14px;
  background: #081424;
  color: #ffffff;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  box-shadow: 0 10px 25px -5px rgba(8, 20, 36, 0.25);
  transition: all 0.28s cubic-bezier(0.22, 1, 0.36, 1);
}

.hero-hp2-btn-primary:hover {
  background: #009d49;
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 14px 30px -5px rgba(0, 157, 73, 0.35);
}

.hero-hp2-btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.95rem 1.85rem;
  border-radius: 14px;
  background: #ffffff;
  color: #0f172a;
  border: 1.5px solid #cbd5e1;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  box-shadow: 0 2px 6px rgba(15, 23, 42, 0.04);
  transition: all 0.28s cubic-bezier(0.22, 1, 0.36, 1);
}

.hero-hp2-btn-secondary:hover {
  border-color: #081424;
  background: #f8fafc;
  transform: translateY(-2px);
}

/* Proof Metrics Row */
.hero-hp2-metrics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  max-width: 860px;
  margin: 0 auto 2.5rem auto;
}

.hero-metric-card {
  padding: 1rem 1.25rem;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(226, 232, 240, 0.9);
  border-radius: 14px;
  text-align: center;
  box-shadow: 0 4px 16px -2px rgba(15, 23, 42, 0.04);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.hero-metric-num {
  font-family: var(--font, 'Inter', sans-serif);
  font-weight: 900;
  font-size: clamp(1.6rem, 2.8vw, 2.2rem);
  letter-spacing: -0.03em;
  color: #0c0a09;
  line-height: 1.1;
}

.hero-metric-label {
  font-size: 0.78rem;
  color: #64748b;
  font-weight: 500;
  margin-top: 0.3rem;
  line-height: 1.35;
}

@media (max-width: 767px) {
  .hero-hp2-metrics {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
}

/* HERO TECH STACK MARQUEE STRIP */
.hero-stack-marquee-wrap {
  max-width: 1040px;
  margin: 2rem auto 0 auto;
}

.hero-stack-marquee-box {
  border-radius: 16px;
  border: 1px solid rgba(226, 232, 240, 0.95);
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 0.65rem 1.15rem;
  box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.05);
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.hero-stack-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono, monospace);
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #475569;
  white-space: nowrap;
  flex-shrink: 0;
}

.hero-stack-label-dot {
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  background-color: #10b981;
  animation: pulseDot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulseDot {
  0%, 100% { opacity: 1; }
  50% { opacity: .4; }
}

.hero-stack-marquee-mask {
  flex: 1;
  overflow: hidden;
  position: relative;
  width: 100%;
  mask-image: linear-gradient(to right, transparent, black 6%, black 94%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 6%, black 94%, transparent);
}

.hero-stack-track {
  display: flex;
  width: max-content;
  align-items: center;
  gap: 1.25rem;
  animation: heroStackScroll 40s linear infinite;
}

.hero-stack-track:hover {
  animation-play-state: paused;
}

@keyframes heroStackScroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.hero-tool-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.45rem 0.85rem;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  background: #ffffff;
  color: #1e293b;
  font-size: 0.78rem;
  font-weight: 600;
  white-space: nowrap;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
  transition: all 0.2s ease;
}

.hero-tool-pill:hover {
  border-color: #009d49;
  transform: translateY(-1px);
}

.hero-tool-pill img,
.hero-tool-pill svg {
  height: 20px;
  width: auto;
  max-width: 24px;
  max-height: 20px;
  object-fit: contain;
  flex-shrink: 0;
  display: block;
}
`;

// Append heroStyles to inrank2.0/css/corporate.css and css/corporate.css if not present
['inrank2.0/css/corporate.css', 'css/corporate.css'].forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (!content.includes('hero-hp2-section')) {
      content += '\n' + heroStyles;
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Appended hero styles to', filePath);
    } else {
      console.log('Hero styles already present in', filePath);
    }
  }
});

// 2. Prepare nav.css updates for light hero unscrolled state
const navLightHeroStyles = `
/* Light hero unscrolled adaptive nav state */
body.light-hero-page #nav:not(.is-scrolled) .nav-logo-name {
  color: #081424 !important;
}
body.light-hero-page #nav:not(.is-scrolled) .nav-logo-sub {
  color: #009d49 !important;
}
body.light-hero-page #nav:not(.is-scrolled) .nav-link {
  color: #334155 !important;
}
body.light-hero-page #nav:not(.is-scrolled) .nav-link:hover,
body.light-hero-page #nav:not(.is-scrolled) .nav-link[aria-expanded="true"] {
  color: #081424 !important;
  background: rgba(8, 20, 36, 0.06) !important;
}
body.light-hero-page #nav:not(.is-scrolled) .nav-chev {
  stroke: #475569 !important;
}
body.light-hero-page #nav:not(.is-scrolled) .nav-cta {
  background: #081424 !important;
  color: #ffffff !important;
  border: none !important;
}
body.light-hero-page #nav:not(.is-scrolled) .nav-cta:hover {
  background: #009d49 !important;
}
body.light-hero-page #nav:not(.is-scrolled) .nav-burger-bar {
  background: #081424 !important;
}
`;

['inrank2.0/css/nav.css', 'css/nav.css'].forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (!content.includes('body.light-hero-page')) {
      content += '\n' + navLightHeroStyles;
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Appended light hero nav styles to', filePath);
    } else {
      console.log('Light hero nav styles already present in', filePath);
    }
  }
});

// 3. New Hero HTML Markup
const newHeroHtml = `    <!-- 1. HERO SECTION: Homepage-2 Architecture with Inrank 2.0 Content -->
    <section class="hero-hp2-section" id="top">
      
      <!-- Dot grid texture & Ambient radial glow -->
      <div class="hero-dot-grid"></div>
      <div class="ambient-glow-hero"></div>

      <div class="hero-hp2-container">

        <!-- Platform Stickers Bar (Interactive tilted logos from homepage-2) -->
        <div class="hero-stickers-wrap">
          <div class="hero-stickers-row">
            
            <!-- 1. Google Ads -->
            <div class="platform-sticker" style="--tilt: -3deg;">
              <svg class="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.784 16.924L8.71 8.391a2.846 2.846 0 013.889-1.042 2.846 2.846 0 011.042 3.889l-4.927 8.533a2.846 2.846 0 01-3.889 1.042 2.846 2.846 0 01-1.041-3.889z" fill="#FBBC04"/>
                <path d="M20.216 16.924a2.846 2.846 0 01-1.042 3.889 2.846 2.846 0 01-3.889-1.042L10.358 11.24a2.846 2.846 0 011.042-3.889 2.846 2.846 0 013.889 1.042l4.927 8.532z" fill="#4285F4"/>
                <circle cx="5.32" cy="18.68" r="2.846" fill="#34A853"/>
              </svg>
              <span>Google Ads (PPC)</span>
            </div>

            <!-- 2. Moz Pro -->
            <div class="platform-sticker" style="--tilt: 3deg;">
              <svg class="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="5" fill="#008299"/>
                <path d="M5.5 17.5V6.5h2.8l2.6 4.9 2.6-4.9h2.8v11h-2.5v-6.3l-2.4 4.5h-1l-2.4-4.5v6.3H5.5z" fill="#FFFFFF"/>
                <circle cx="18.5" cy="16" r="1.5" fill="#5EEAD4"/>
              </svg>
              <span>Moz Pro DA</span>
            </div>

            <!-- 3. Meta Ads -->
            <div class="platform-sticker" style="--tilt: -2deg;">
              <img src="/tech-stack/meta.png" alt="Meta Ads" class="h-4 w-auto object-contain flex-shrink-0" />
              <span>Meta &amp; Instagram</span>
            </div>

            <!-- 4. YouTube Video -->
            <div class="platform-sticker" style="--tilt: 4deg;">
              <svg class="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="#FF0000">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>YouTube Video</span>
            </div>

            <!-- 5. LinkedIn B2B -->
            <div class="platform-sticker" style="--tilt: -3deg;">
              <svg class="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="#0A66C2">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>LinkedIn B2B</span>
            </div>

            <!-- 6. Google Maps 3-Pack -->
            <div class="platform-sticker" style="--tilt: 2deg;">
              <svg class="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#EA4335"/>
                <circle cx="12" cy="9" r="2.5" fill="#FFFFFF"/>
                <path d="M12 2C10.14 2 8.44 2.76 7.21 4L12 9V2z" fill="#4285F4"/>
                <path d="M7.21 4C5.84 5.37 5 7.08 5 9c0 2.16 1.25 4.96 3.12 8.16L12 9 7.21 4z" fill="#FBBC04"/>
                <path d="M12 22s4.8-5.32 6.32-9.68L12 9v13z" fill="#34A853"/>
              </svg>
              <span>Google Maps 3-Pack</span>
            </div>

            <!-- 7. ChatGPT & Perplexity -->
            <div class="platform-sticker" style="--tilt: -4deg;">
              <svg class="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="#10A37F" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zm-1.04-9.822a4.48 4.48 0 0 1 2.36-1.973v.166l4.78 2.758a.795.795 0 0 0 .785 0l5.843-3.37-2.02-1.168a.08.08 0 0 1-.038-.052L9.74 2.05a4.5 4.5 0 0 0-7.18 6.432zm14.664 3.75l-5.843 3.37-5.843-3.37 5.843-3.369 5.843 3.37zm2.41 6.432a4.48 4.48 0 0 1-2.36 1.973v-.166l-4.78-2.758a.795.795 0 0 0-.785 0l-5.843 3.37 2.02 1.168a.08.08 0 0 1 .038.052l4.84 2.792a4.5 4.5 0 0 0 7.18-6.432zm1.04-5.26a4.47 4.47 0 0 1 .535 3.014l-.142-.085-4.783-2.759a.771.771 0 0 0-.78 0l-5.843 3.369v-2.332a.08.08 0 0 1 .033-.062l4.84-2.792a4.5 4.5 0 0 1 6.14 1.646z"/>
              </svg>
              <span>ChatGPT &amp; Perplexity AI</span>
            </div>

            <!-- 8. Shopify E-Com -->
            <div class="platform-sticker" style="--tilt: 3deg;">
              <svg class="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#95BF47" d="M19.78 6.22c-.08-.5-.54-.74-.9-.77-.35-.03-6.6-.48-6.6-.48s-1.8-1.81-2.02-2.03c-.22-.22-.65-.16-.83-.11-.04.01-.76.24-1.95.62C7.03 2.14 6.55 1.5 6.13 1.5c-.75 0-1.12 1.07-1.12 2.05 0 .5.09 1.07.24 1.7L2.4 6.12c-.44.14-.46.19-.52.54-.42 2.73-2.08 14.54-2.08 14.8 0 .42.3.54.55.54h.06c.44 0 9.77-.73 11.6-.87 1.84.14 11.17.87 11.6.87h.06c.25 0 .55-.12.55-.54 0-.26-1.66-12.07-2.08-14.8-.06-.35-.08-.4-.52-.54l-1.92-.62zM8.34 3.52c.64-.2 1.34-.42 2.07-.64.24.46.52 1.02.82 1.63-1.66.52-3.48 1.09-4.82 1.51.38-.85.9-1.74 1.93-2.5zm-.31 3.23c1.37-.43 3.19-1 4.88-1.52.26.54.51 1.09.73 1.63-2.08.65-4.4 1.38-6.4 2 .18-.76.47-1.46.79-2.11zm4.07 14.73l-9.03.71C3.39 18.9 4.8 7.9 4.8 7.7l4.47-1.4c-.1.35-.18.72-.25 1.11-.37 2.1-.2 4.09.43 5.37.58 1.18 1.53 1.78 2.65 1.78 1.45 0 2.27-.92 2.27-2.16 0-.32-.07-.67-.2-1.03l-1.98.62c.1.28.14.53.14.74 0 .54-.34.92-.93.92-.66 0-1.16-.6-1.5-1.78-.39-1.37-.38-3.32.02-4.9.04-.15.08-.29.13-.44l2.05-.64c.59 1.18 1.35 2.76 1.35 4.38 0 2.05-1.28 3.54-3.52 3.54-1.84 0-3.34-1-4.22-2.8-.75-1.53-.94-3.83-.5-6.31l1.83-.57 1.45 13.06z"/>
              </svg>
              <span>Shopify Plus D2C</span>
            </div>

          </div>

          <!-- Live Multi-Channel Delivery Kicker -->
          <div class="hero-hp2-kicker">
            <span class="hero-hp2-ping"></span>
            <span>PUNE'S PREMIER DIGITAL GROWTH &amp; PERFORMANCE WEB PARTNER</span>
          </div>
        </div>

        <!-- Master Headline (Inrank 2.0 Content) -->
        <div class="hero-hp2-header">
          <h1 class="hero-hp2-title">
            Websites, SEO &amp; Ads that <br class="hidden sm:inline" />
            <span class="hero-gradient-text">turn traffic into revenue.</span>
          </h1>
          <p class="hero-hp2-sub">
            Inrank Technologies is a performance-first digital growth partner. We build conversion-engineered websites, run profitable Google &amp; Meta Ads, and rank you on Google — all under one roof in Baner, Pune.
          </p>
        </div>

        <!-- CTAs Row (Inrank 2.0 CTAs) -->
        <div class="hero-hp2-actions">
          <a href="/contact.html" class="hero-hp2-btn-primary">
            <span>Book Free Consultation</span>
            <svg viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M3 13L13 3M13 3H5M13 3V11" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          <a href="/services.html" class="hero-hp2-btn-secondary">
            <span>Explore All 27 Services</span>
          </a>
        </div>

        <!-- Operating Metrics Row (Inrank 2.0 Proof Points) -->
        <div class="hero-hp2-metrics">
          <div class="hero-metric-card">
            <div class="hero-metric-num">4.8x</div>
            <div class="hero-metric-label">Average ROAS Across ₹3.2Cr+ Managed Spend</div>
          </div>
          <div class="hero-metric-card">
            <div class="hero-metric-num">&lt; 1.2s</div>
            <div class="hero-metric-label">Core Web Vitals Pass Rate (90+ Mobile Speed)</div>
          </div>
          <div class="hero-metric-card">
            <div class="hero-metric-num">50+</div>
            <div class="hero-metric-label">Active Portals Scaled in Baner, Pune</div>
          </div>
        </div>

        <!-- HERO TECH STACK MARQUEE STRIP (Continuous 17-Tool Infini-Track) -->
        <div class="hero-stack-marquee-wrap">
          <div class="hero-stack-marquee-box">
            
            <div class="hero-stack-label">
              <span class="hero-stack-label-dot"></span>
              <span>Growth Tech Stack:</span>
            </div>

            <!-- Continuous Infinite Scrolling Track -->
            <div class="hero-stack-marquee-mask">
              <div class="hero-stack-track">

                <!-- 1. Google Ads -->
                <div class="hero-tool-pill">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.784 16.924L8.71 8.391a2.846 2.846 0 013.889-1.042 2.846 2.846 0 011.042 3.889l-4.927 8.533a2.846 2.846 0 01-3.889 1.042 2.846 2.846 0 01-1.041-3.889z" fill="#FBBC04"/>
                    <path d="M20.216 16.924a2.846 2.846 0 01-1.042 3.889 2.846 2.846 0 01-3.889-1.042L10.358 11.24a2.846 2.846 0 011.042-3.889 2.846 2.846 0 013.889 1.042l4.927 8.532z" fill="#4285F4"/>
                    <circle cx="5.32" cy="18.68" r="2.846" fill="#34A853"/>
                  </svg>
                  <span>Google Ads</span>
                </div>

                <!-- 2. Moz Pro -->
                <div class="hero-tool-pill">
                  <img src="/tech-stack/moz.png" alt="Moz Pro" height="20" loading="eager" />
                  <span>Moz Pro</span>
                </div>

                <!-- 3. GA4 Analytics -->
                <div class="hero-tool-pill">
                  <img src="/tech-stack/google-analytics.webp" alt="GA4 Analytics" height="20" loading="eager" />
                  <span>GA4 Analytics</span>
                </div>

                <!-- 4. Tag Manager -->
                <div class="hero-tool-pill">
                  <img src="/tech-stack/gtm.webp" alt="Tag Manager" height="20" loading="eager" />
                  <span>Tag Manager</span>
                </div>

                <!-- 5. Search Console -->
                <div class="hero-tool-pill">
                  <img src="/tech-stack/google-search-console.webp" alt="Search Console" height="20" loading="eager" />
                  <span>Search Console</span>
                </div>

                <!-- 6. Meta Ads -->
                <div class="hero-tool-pill">
                  <img src="/tech-stack/meta.png" alt="Meta Ads" height="20" loading="eager" />
                  <span>Meta Ads</span>
                </div>

                <!-- 7. Semrush -->
                <div class="hero-tool-pill">
                  <img src="/tech-stack/semrush.png" alt="Semrush" height="20" loading="eager" />
                  <span>Semrush</span>
                </div>

                <!-- 8. Ahrefs -->
                <div class="hero-tool-pill">
                  <img src="/tech-stack/ahrefs.webp" alt="Ahrefs" height="20" loading="eager" />
                  <span>Ahrefs</span>
                </div>

                <!-- 9. WordPress -->
                <div class="hero-tool-pill">
                  <img src="/tech-stack/wordpress.webp" alt="WordPress" height="20" loading="eager" />
                  <span>WordPress</span>
                </div>

                <!-- 10. Shopify -->
                <div class="hero-tool-pill">
                  <img src="/tech-stack/shopify.webp" alt="Shopify" height="20" loading="eager" />
                  <span>Shopify</span>
                </div>

                <!-- 11. ChatGPT -->
                <div class="hero-tool-pill">
                  <img src="/tech-stack/chatgpt.png" alt="ChatGPT" height="20" loading="eager" />
                  <span>ChatGPT</span>
                </div>

                <!-- 12. Perplexity AI -->
                <div class="hero-tool-pill">
                  <img src="/tech-stack/perplexity.png" alt="Perplexity AI" height="20" loading="eager" />
                  <span>Perplexity AI</span>
                </div>

                <!-- 13. HubSpot -->
                <div class="hero-tool-pill">
                  <img src="/tech-stack/hubspot.png" alt="HubSpot" height="20" loading="eager" />
                  <span>HubSpot</span>
                </div>

                <!-- 14. Screaming Frog -->
                <div class="hero-tool-pill">
                  <img src="/tech-stack/screaming-frog.png" alt="Screaming Frog" height="20" loading="eager" />
                  <span>Screaming Frog</span>
                </div>

                <!-- 15. Cloudflare -->
                <div class="hero-tool-pill">
                  <img src="/tech-stack/cloudflare.png" alt="Cloudflare" height="20" loading="eager" />
                  <span>Cloudflare</span>
                </div>

                <!-- 16. Tailwind CSS -->
                <div class="hero-tool-pill">
                  <img src="/tech-stack/tailwind.png" alt="Tailwind CSS" height="20" loading="eager" />
                  <span>Tailwind CSS</span>
                </div>

                <!-- 17. Rank Math -->
                <div class="hero-tool-pill">
                  <img src="/tech-stack/rankmath.png" alt="Rank Math" height="20" loading="eager" />
                  <span>Rank Math</span>
                </div>

                <!-- REPETITION FOR INFINITE SEAMLESS LOOP -->
                <div class="hero-tool-pill">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.784 16.924L8.71 8.391a2.846 2.846 0 013.889-1.042 2.846 2.846 0 011.042 3.889l-4.927 8.533a2.846 2.846 0 01-3.889 1.042 2.846 2.846 0 01-1.041-3.889z" fill="#FBBC04"/>
                    <path d="M20.216 16.924a2.846 2.846 0 01-1.042 3.889 2.846 2.846 0 01-3.889-1.042L10.358 11.24a2.846 2.846 0 011.042-3.889 2.846 2.846 0 013.889 1.042l4.927 8.532z" fill="#4285F4"/>
                    <circle cx="5.32" cy="18.68" r="2.846" fill="#34A853"/>
                  </svg>
                  <span>Google Ads</span>
                </div>
                <div class="hero-tool-pill">
                  <img src="/tech-stack/moz.png" alt="Moz Pro" height="20" loading="eager" />
                  <span>Moz Pro</span>
                </div>
                <div class="hero-tool-pill">
                  <img src="/tech-stack/google-analytics.webp" alt="GA4 Analytics" height="20" loading="eager" />
                  <span>GA4 Analytics</span>
                </div>
                <div class="hero-tool-pill">
                  <img src="/tech-stack/gtm.webp" alt="Tag Manager" height="20" loading="eager" />
                  <span>Tag Manager</span>
                </div>
                <div class="hero-tool-pill">
                  <img src="/tech-stack/google-search-console.webp" alt="Search Console" height="20" loading="eager" />
                  <span>Search Console</span>
                </div>
                <div class="hero-tool-pill">
                  <img src="/tech-stack/meta.png" alt="Meta Ads" height="20" loading="eager" />
                  <span>Meta Ads</span>
                </div>
                <div class="hero-tool-pill">
                  <img src="/tech-stack/semrush.png" alt="Semrush" height="20" loading="eager" />
                  <span>Semrush</span>
                </div>
                <div class="hero-tool-pill">
                  <img src="/tech-stack/ahrefs.webp" alt="Ahrefs" height="20" loading="eager" />
                  <span>Ahrefs</span>
                </div>
                <div class="hero-tool-pill">
                  <img src="/tech-stack/wordpress.webp" alt="WordPress" height="20" loading="eager" />
                  <span>WordPress</span>
                </div>
                <div class="hero-tool-pill">
                  <img src="/tech-stack/shopify.webp" alt="Shopify" height="20" loading="eager" />
                  <span>Shopify</span>
                </div>
                <div class="hero-tool-pill">
                  <img src="/tech-stack/chatgpt.png" alt="ChatGPT" height="20" loading="eager" />
                  <span>ChatGPT</span>
                </div>
                <div class="hero-tool-pill">
                  <img src="/tech-stack/perplexity.png" alt="Perplexity AI" height="20" loading="eager" />
                  <span>Perplexity AI</span>
                </div>
                <div class="hero-tool-pill">
                  <img src="/tech-stack/hubspot.png" alt="HubSpot" height="20" loading="eager" />
                  <span>HubSpot</span>
                </div>
                <div class="hero-tool-pill">
                  <img src="/tech-stack/screaming-frog.png" alt="Screaming Frog" height="20" loading="eager" />
                  <span>Screaming Frog</span>
                </div>
                <div class="hero-tool-pill">
                  <img src="/tech-stack/cloudflare.png" alt="Cloudflare" height="20" loading="eager" />
                  <span>Cloudflare</span>
                </div>
                <div class="hero-tool-pill">
                  <img src="/tech-stack/tailwind.png" alt="Tailwind CSS" height="20" loading="eager" />
                  <span>Tailwind CSS</span>
                </div>
                <div class="hero-tool-pill">
                  <img src="/tech-stack/rankmath.png" alt="Rank Math" height="20" loading="eager" />
                  <span>Rank Math</span>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>`;

// Replace hero section in index.html and inrank2.0/index.html
['inrank2.0/index.html', 'index.html'].forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Ensure body tag has class="light-hero-page"
    content = content.replace(/<body([^>]*)>/, (match, p1) => {
      if (p1.includes('class=')) {
        if (!p1.includes('light-hero-page')) {
          return match.replace(/class="([^"]*)"/, 'class="$1 light-hero-page"');
        }
        return match;
      }
      return `<body class="light-hero-page"${p1}>`;
    });

    // Replace the hero section: from <!-- 1. HERO SECTION or <section class="hero ... to </section>
    const heroRegex = /(?:<!--\s*1\.\s*HERO SECTION[^>]*-->\s*)?<section class="hero[^>]*id="top"[\s\S]*?<\/section>/;
    if (heroRegex.test(content)) {
      content = content.replace(heroRegex, newHeroHtml);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Replaced hero section in', filePath);
    } else {
      console.log('Could not find existing hero section in', filePath);
    }
  }
});

