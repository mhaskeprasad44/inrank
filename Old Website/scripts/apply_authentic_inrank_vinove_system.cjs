const fs = require('fs');
const path = require('path');

const corpCssPath = path.join(__dirname, '..', 'inrank2.0', 'css', 'corporate.css');
const indexHtmlPath = path.join(__dirname, '..', 'inrank2.0', 'index.html');

// 1. Update corporate.css
let corpCss = fs.readFileSync(corpCssPath, 'utf8');

// Ensure work-card-media displays portfolio screenshot properly
corpCss = corpCss.replace(
  /\.work-card-media img \{[\s\S]*?\}/,
  `.work-card-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: transform var(--dur-base) var(--ease);
}
.work-card:hover .work-card-media img {
  transform: scale(1.04);
}`
);

// Ensure hero-content grid and hero-copy styling
if (!corpCss.includes('.hero-copy .hero-actions')) {
  corpCss += `
.hero-copy .hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2.25rem;
}
`;
}

fs.writeFileSync(corpCssPath, corpCss, 'utf8');
console.log('Updated corporate.css with clean styles');

// 2. Write updated index.html
const indexHtml = `<!doctype html>
<html lang="en">
<head>
  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-WLZ75BS8');</script>
  <!-- End Google Tag Manager -->

  <meta name="google-site-verification" content="OV4vHry3XgRxPGKhc-ZJ6G6ADfoSzO8su1DP0aXnjGs" />

  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-1PH0J0ZGNS"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-1PH0J0ZGNS');
  </script>

  <!-- Microsoft Clarity -->
  <script type="text/javascript">
      (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "z3pquyiiy2");
  </script>

  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Inrank Technologies | Top-Ranked Digital Marketing & Web Development Services in Pune</title>
  <meta name="description" content="Inrank Technologies is Pune's leading performance digital marketing agency & web development company. We deliver SEO services in Pune, custom high-speed websites, PPC ads, and AI SEO to outrank local competitors." />
  <meta name="keywords" content="Digital marketing in Pune, Web development services in Pune, SEO services in Pune, Digital marketing agency in Pune, Best website development company in Pune, PPC agency Pune, AI SEO agency Pune" />
  <meta name="author" content="Inrank Technologies Pune" />
  <link rel="canonical" href="https://www.inranktech.com/" />
  <link rel="icon" type="image/png" href="/img/logo.png" />
  <link rel="shortcut icon" type="image/png" href="/img/logo.png" />
  <link rel="apple-touch-icon" href="/img/logo.png" />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.inranktech.com/" />
  <meta property="og:title" content="Inrank Technologies | Websites, SEO & Ads That Turn Traffic Into Revenue" />
  <meta property="og:description" content="Pune's dedicated performance digital marketing agency & web development company. High-speed websites, Google 3-Pack SEO, and high-ROAS paid ads." />
  <meta property="og:image" content="https://www.inranktech.com/images/service-seo.jpg" />

  <!-- Google Fonts: Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

  <!-- Vinove Architecture Core & Nav CSS -->
  <link rel="stylesheet" href="/css/nav.css" />
  <link rel="stylesheet" href="/css/corporate.css" />

  <!-- Schema.org JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://www.inranktech.com/#organization",
        "name": "Inrank Technologies",
        "url": "https://www.inranktech.com/",
        "logo": "https://www.inranktech.com/img/logo.png",
        "telephone": "+91 87888 23182",
        "email": "inranktech@gmail.com",
        "priceRange": "₹11,999 - ₹34,999",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Baner Road, Baner",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411045",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "18.5590",
          "longitude": "73.7868"
        },
        "sameAs": [
          "https://www.linkedin.com/company/inranktech",
          "https://www.instagram.com/inranktech"
        ]
      }
    ]
  }
  </script>
</head>
<body class="theme-corporate">
  <!-- Skip Link -->
  <a href="#main" class="skip-link">Skip to main content</a>

  <!-- ============================================================
       VINOVE-STYLE FLOATING CAPSULE HEADER DOCK
       ============================================================ -->
  <header id="nav" class="nav-dock" data-dock="default">
    <div class="nav-bar">
      <!-- Brand Logo -->
      <a href="/" class="nav-logo" aria-label="Inrank Technologies Home">
        <img src="/img/logo.png" alt="Inrank Technologies" width="36" height="36" class="logo-icon" />
        <div class="nav-logo-brand">
          <span class="nav-logo-name">Inrank</span>
          <span class="nav-logo-sub">Technologies</span>
        </div>
      </a>

      <!-- Desktop Navigation Links -->
      <nav class="nav-links" aria-label="Main Navigation">
        <!-- Services with Mega Dropdown -->
        <div class="nav-item" data-dropdown="services">
          <button class="nav-link nav-link--drop" aria-expanded="false" aria-haspopup="true">
            <span>Services</span>
            <svg class="nav-chev" viewBox="0 0 12 12" width="12" height="12" aria-hidden="true">
              <path d="M2.5 4.5L6 8L9.5 4.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>

          <!-- Floating Mega Dropdown Menu -->
          <div class="nav-drop" role="region" aria-label="Services Submenu">
            <div class="drop-grid">
              <!-- Left Column: Growth Capabilities Overview -->
              <div class="drop-brand-card">
                <span class="drop-kicker">GROWTH CAPABILITIES</span>
                <h4 class="drop-title">Digital Marketing &amp; Web Engineering</h4>
                <p class="drop-desc">We replace sluggish agencies with an accountable, senior growth team focused on measurable revenue.</p>
                <a href="/services.html" class="drop-cta">
                  <span>Explore all 27 services</span>
                  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 13L13 3M13 3H5M13 3V11" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              </div>

              <!-- Right Column: 4 Core Pillars -->
              <div class="drop-nav-grid">
                <a href="/services/seo-company-pune/" class="drop-service-item">
                  <div class="drop-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                    </svg>
                  </div>
                  <div class="drop-text">
                    <div class="drop-head">
                      <span class="drop-label">Search &amp; AI Discovery</span>
                      <svg class="drop-arrow" viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M2 10L10 2M10 2H4M10 2V8"/>
                      </svg>
                    </div>
                    <span class="drop-sub">SEO in Pune, GEO &amp; Google 3-Pack</span>
                  </div>
                </a>

                <a href="/services/website-maintenance-services/" class="drop-service-item">
                  <div class="drop-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                    </svg>
                  </div>
                  <div class="drop-text">
                    <div class="drop-head">
                      <span class="drop-label">High-Performance Web</span>
                      <svg class="drop-arrow" viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M2 10L10 2M10 2H4M10 2V8"/>
                      </svg>
                    </div>
                    <span class="drop-sub">Custom Next.js, WordPress &amp; E-Commerce</span>
                  </div>
                </a>

                <a href="/services/ppc-services/" class="drop-service-item">
                  <div class="drop-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                      <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                  </div>
                  <div class="drop-text">
                    <div class="drop-head">
                      <span class="drop-label">Performance Marketing</span>
                      <svg class="drop-arrow" viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M2 10L10 2M10 2H4M10 2V8"/>
                      </svg>
                    </div>
                    <span class="drop-sub">Google Ads, Meta &amp; High-ROI Funnels</span>
                  </div>
                </a>

                <a href="/services/ui-ux-design-services/" class="drop-service-item">
                  <div class="drop-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div class="drop-text">
                    <div class="drop-head">
                      <span class="drop-label">Brand &amp; CRO Optimization</span>
                      <svg class="drop-arrow" viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M2 10L10 2M10 2H4M10 2V8"/>
                      </svg>
                    </div>
                    <span class="drop-sub">UI/UX, Brand Identity &amp; High-Conversion</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Direct Navigation Items -->
        <a href="/pricing.html" class="nav-link">Pricing</a>
        <a href="/our-work.html" class="nav-link">Our Work</a>
        <a href="/case-studies.html" class="nav-link">Case Studies</a>

        <!-- About Dropdown -->
        <div class="nav-item" data-dropdown="about">
          <button class="nav-link nav-link--drop" aria-expanded="false" aria-haspopup="true">
            <span>About</span>
            <svg class="nav-chev" viewBox="0 0 12 12" width="12" height="12" aria-hidden="true">
              <path d="M2.5 4.5L6 8L9.5 4.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="nav-drop nav-drop--sm" role="region" aria-label="About Submenu">
            <div class="drop-list">
              <a href="/about.html" class="drop-link-card">
                <strong>About Inrank</strong>
                <span>Our story, Baner engineering lab &amp; mission</span>
              </a>
              <a href="/about.html#prasad-mhaske" class="drop-link-card">
                <strong>Leadership Profile</strong>
                <span>Prasad Mhaske, Founder &amp; Lead Architect</span>
              </a>
            </div>
          </div>
        </div>

        <a href="/contact.html" class="nav-link">Contact</a>
      </nav>

      <!-- CTA Button -->
      <a href="/contact.html" class="nav-cta">Book Consultation</a>

      <!-- Mobile Hamburger Button -->
      <button id="nav-burger" class="nav-burger" aria-label="Open mobile menu" aria-expanded="false" aria-controls="mob">
        <span class="nav-burger-box" aria-hidden="true"><span></span><span></span><span></span></span>
      </button>
    </div>
  </header>

  <!-- Navigation Scrim Backdrop -->
  <div id="nav-scrim" aria-hidden="true"></div>

  <!-- Mobile Drawer Menu (#mob) -->
  <div id="mob" aria-hidden="true">
    <div class="mob-hd">
      <a href="/" class="mob-logo" aria-label="Inrank Technologies">
        <img src="/img/logo.png" alt="Inrank Technologies" width="32" height="32" class="logo-icon" />
        <div class="nav-logo-brand">
          <span class="nav-logo-name">Inrank</span>
          <span class="nav-logo-sub">Technologies</span>
        </div>
      </a>
      <button id="mob-x" class="mob-x" aria-label="Close menu">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
    </div>

    <div class="mob-body">
      <!-- Services Accordion -->
      <div class="mob-acc">
        <button class="mob-acc-btn" aria-expanded="true" aria-controls="mob-acc-services">
          <span>Services</span>
          <svg class="mob-acc-chev" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div id="mob-acc-services" class="mob-acc-body">
          <a href="/services/seo-company-pune/" class="mob-co">
            <span class="mob-co-name">Search &amp; AI Discovery</span>
            <span class="mob-co-cat">SEO &amp; GEO</span>
          </a>
          <a href="/services/website-maintenance-services/" class="mob-co">
            <span class="mob-co-name">High-Performance Web</span>
            <span class="mob-co-cat">Web Development</span>
          </a>
          <a href="/services/ppc-services/" class="mob-co">
            <span class="mob-co-name">Performance Marketing</span>
            <span class="mob-co-cat">Google &amp; Meta Ads</span>
          </a>
          <a href="/services/ui-ux-design-services/" class="mob-co">
            <span class="mob-co-name">Brand &amp; CRO</span>
            <span class="mob-co-cat">UI/UX &amp; Conversions</span>
          </a>
          <a href="/services.html" class="mob-co">
            <span class="mob-co-name" style="color:var(--terra-hero)">View All 27 Services →</span>
            <span class="mob-co-cat">All Tracks</span>
          </a>
        </div>
      </div>

      <a href="/pricing.html" class="mob-link">Pricing</a>
      <a href="/our-work.html" class="mob-link">Our Work</a>
      <a href="/case-studies.html" class="mob-link">Case Studies</a>

      <!-- About Accordion -->
      <div class="mob-acc">
        <button class="mob-acc-btn" aria-expanded="false" aria-controls="mob-acc-about">
          <span>About</span>
          <svg class="mob-acc-chev" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div id="mob-acc-about" class="mob-acc-body" style="display:none">
          <a href="/about.html" class="mob-co">
            <span class="mob-co-name">About Inrank</span>
            <span class="mob-co-cat">Baner Lab</span>
          </a>
          <a href="/about.html#prasad-mhaske" class="mob-co">
            <span class="mob-co-name">Leadership Profile</span>
            <span class="mob-co-cat">Founder</span>
          </a>
        </div>
      </div>

      <a href="/contact.html" class="mob-link">Contact</a>

      <a href="/contact.html" class="mob-cta">Book Free Consultation</a>
    </div>
  </div>

  <!-- ============================================================
       MAIN CONTENT CONTAINER
       ============================================================ -->
  <main id="main">

    <!-- 1. HERO SECTION (INRANK CONTENT IN VINOVE SLEEK HERO UI) -->
    <section class="hero image-hero" id="top">
      <div class="hero-shade"></div>
      <div class="shell">
        <div class="hero-content">
          <!-- Left Column: Copy & Actions -->
          <div class="hero-copy">
            <span class="eyebrow">PUNE'S PREMIER DIGITAL GROWTH &amp; PERFORMANCE WEB PARTNER</span>
            <h1 class="hero-title display">
              Websites, SEO &amp; Ads that<br />
              <span class="hero-accent">turn traffic into revenue.</span>
            </h1>
            <p class="lede">
              Inrank Technologies is a performance-first digital growth partner. We build conversion-engineered websites, run profitable Google &amp; Meta Ads, and rank you on Google — all under one roof in Baner, Pune.
            </p>

            <div class="hero-actions">
              <a href="/contact.html" class="button primary">
                <span>Book Free Consultation</span>
                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 13L13 3M13 3H5M13 3V11" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
              <a href="/services.html" class="button secondary">
                <span>Explore All 27 Services</span>
              </a>
            </div>
          </div>

          <!-- Right Column: Operating Metrics Box -->
          <div class="hero-note">
            <span class="hero-note-label">OPERATING METRICS</span>
            <p>Direct senior engineers. Transparent fixed pricing from ₹11,999. 4.8x avg ROAS &amp; sub-second Core Web Vitals.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. MARQUEE STRIP (INRANK TRUSTED BRANDS) -->
    <section class="marquee-band" aria-label="Trusted Clients">
      <div class="shell">
        <p class="marquee-title">TRUSTED BY AMBITIOUS BRANDS SCALING REAL REVENUE &amp; HIGH ROAS ACROSS PUNE &amp; INDIA</p>
      </div>
      <div class="marquee-track-wrap">
        <div class="marquee-track">
          <div class="client-logo-item"><img src="/client-logos/greytothegreen.png" alt="Greytothegreen" /></div>
          <div class="client-logo-item"><img src="/client-logos/shetkari.webp" alt="Shetkari Foodstuff" /></div>
          <div class="client-logo-item"><img src="/client-logos/cytos.png" alt="Cytos Healthcare" /></div>
          <div class="client-logo-item"><img src="/client-logos/dravya.png" alt="Dravya Financial" /></div>
          <div class="client-logo-item"><img src="/client-logos/hiragrafix.png" alt="Hira Grafix" /></div>
          <div class="client-logo-item"><img src="/client-logos/hcpnest.png" alt="HCP Nest" /></div>
          <div class="client-logo-item"><img src="/client-logos/fludio.png" alt="Fludio Design" /></div>
          <div class="client-logo-item"><img src="/client-logos/vasro.webp" alt="Vasro Ventures" /></div>
          <!-- Repeat for smooth infinite scroll -->
          <div class="client-logo-item"><img src="/client-logos/greytothegreen.png" alt="Greytothegreen" /></div>
          <div class="client-logo-item"><img src="/client-logos/shetkari.webp" alt="Shetkari Foodstuff" /></div>
          <div class="client-logo-item"><img src="/client-logos/cytos.png" alt="Cytos Healthcare" /></div>
          <div class="client-logo-item"><img src="/client-logos/dravya.png" alt="Dravya Financial" /></div>
          <div class="client-logo-item"><img src="/client-logos/hiragrafix.png" alt="Hira Grafix" /></div>
          <div class="client-logo-item"><img src="/client-logos/hcpnest.png" alt="HCP Nest" /></div>
          <div class="client-logo-item"><img src="/client-logos/fludio.png" alt="Fludio Design" /></div>
          <div class="client-logo-item"><img src="/client-logos/vasro.webp" alt="Vasro Ventures" /></div>
        </div>
      </div>
    </section>

    <!-- 3. OPERATING PHILOSOPHY / MANIFESTO (INRANK'S CORE IDENTITY) -->
    <section class="manifesto-section" id="philosophy">
      <div class="shell">
        <span class="eyebrow-pill">OUR OPERATING PHILOSOPHY</span>
        <div class="manifesto-split">
          <div class="manifesto-left">
            <h2 class="manifesto-h2">
              Built like an internal growth team.<br />
              <span class="manifesto-accent">Priced like an agile agency.</span>
            </h2>
            <p class="manifesto-lede">
              Most Pune agencies hand client accounts to junior interns after signing the contract. We eliminated account managers, interns, and agency markups entirely.
            </p>
            <p class="manifesto-body">
              At Inrank, you collaborate directly with senior growth architects and full-stack software engineers based at our Baner lab. We measure success by bottom-line commercial impact: qualified sales leads, inbound phone inquiries, Google 3-pack prominence, and verified revenue growth.
            </p>
          </div>

          <div class="manifesto-right">
            <div class="manifesto-point">
              <span class="point-num">01</span>
              <div>
                <h3 class="point-title">Direct Senior Ownership</h3>
                <p class="point-desc">Zero junior account managers. You speak directly with the engineers shipping your code and tuning your search rankings.</p>
              </div>
            </div>
            <div class="manifesto-point">
              <span class="point-num">02</span>
              <div>
                <h3 class="point-title">100% Code &amp; Asset Ownership</h3>
                <p class="point-desc">You own every line of code, domain asset, analytics tracking setup, and ad account from Day 1. No hosting hostage or vendor lock-in.</p>
              </div>
            </div>
            <div class="manifesto-point">
              <span class="point-num">03</span>
              <div>
                <h3 class="point-title">Engineered for Conversion Speed</h3>
                <p class="point-desc">We don't build sluggish theme templates. Every website is engineered for sub-second load times and 90+ Google Lighthouse scores.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. 4-STAGE OPERATING MODEL (INRANK'S PROVEN 4-STEP ENGAGEMENT) -->
    <section class="operating" id="process">
      <div class="shell">
        <div class="operating-head">
          <div>
            <span class="section-kicker">PROVEN METHODOLOGY</span>
            <h2 class="section-title">A simple, proven 4-step engagement.</h2>
          </div>
          <p class="section-copy">From initial technical audit to revenue scaling, our sprint cycle delivers measurable outcomes within 7 to 14 days.</p>
        </div>

        <div class="operating-model">
          <div class="model-step">
            <span class="num">STAGE 01</span>
            <h3>Deep Technical Audit &amp; Competitor Teardown</h3>
            <p>We audit existing Core Web Vitals, Google Maps 3-Pack prominence, competitor backlink profiles, and missed commercial keyword gaps across Pune.</p>
            <ul class="stage-deliverables">
              <li>Lighthouse speed diagnostic</li>
              <li>Google 3-pack ranking teardown</li>
              <li>Competitor ad spend intelligence</li>
            </ul>
          </div>

          <div class="model-step">
            <span class="num">STAGE 02</span>
            <h3>Rapid Deployment Sprint (5-7 Days)</h3>
            <p>Clean-slate website engineering or overhaul built with mobile-first semantic HTML, Schema JSON-LD markup, and high-conversion wireframes.</p>
            <ul class="stage-deliverables">
              <li>Sub-second mobile performance</li>
              <li>Complete on-page SEO meta tags</li>
              <li>WhatsApp &amp; CRM lead integration</li>
            </ul>
          </div>

          <div class="model-step">
            <span class="num">STAGE 03</span>
            <h3>Multi-Channel Conversion Tuning &amp; Ads Launch</h3>
            <p>High-intent Google Search and Meta advertising campaigns launched with server-side conversion tracking, call forwarding, and automated lead routing.</p>
            <ul class="stage-deliverables">
              <li>Negative keyword filtering</li>
              <li>High-ROAS audience segmenting</li>
              <li>Dynamic call tracking setup</li>
            </ul>
          </div>

          <div class="model-step">
            <span class="num">STAGE 04</span>
            <h3>Scaled Dominance &amp; Revenue Engineering</h3>
            <p>Continuous A/B testing, authoritative Pune citation building, Generative Engine Optimization (GEO) for AI search, and weekly revenue reporting.</p>
            <ul class="stage-deliverables">
              <li>ChatGPT &amp; Perplexity AI citations</li>
              <li>Google 3-Pack authority expansion</li>
              <li>Weekly commercial P&amp;L review</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. CAPABILITIES SECTION (INRANK'S 4 PILLARS & 27 SERVICES) -->
    <section class="capabilities-section" id="services">
      <div class="shell">
        <div class="section-head">
          <span class="eyebrow-pill">END-TO-END EXECUTION</span>
          <h2 class="section-title">Digital Marketing &amp; Web Development in Pune.</h2>
          <p class="section-sub">Four core pillars. 27 specialized services. Delivered by senior engineers with direct accountability for timelines and rankings.</p>
        </div>

        <div class="capabilities-list">
          <!-- Pillar 1 -->
          <div class="capability-row">
            <div class="cap-metric">
              <span class="cap-metric-label">OUTCOME</span>
              <span class="cap-metric-value">+318%</span>
            </div>
            <div class="cap-badge-wrap">
              <div class="cap-icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              </div>
              <div>
                <span class="cap-pillar-tag">Pillar 01</span>
                <span class="cap-pillar-name">Search Dominance</span>
              </div>
            </div>
            <div class="cap-content">
              <h3 class="cap-title">Search Engine &amp; AI Discovery Engineering</h3>
              <p class="cap-desc">Dominate Google search results and AI answer engines. We execute high-authority local SEO in Pune, Generative Engine Optimization (GEO), Google Business Profile 3-pack optimization, and authoritative backlink building.</p>
              <div class="cap-chips">
                <a href="/services/seo-company-pune/" class="chip">SEO Company Pune</a>
                <a href="/digital-marketing-agency-in-pune.html" class="chip">AI SEO &amp; GEO</a>
                <a href="/google-business-profile-top3.html" class="chip">GMB 3-Pack</a>
                <span class="chip">Technical Audits</span>
                <span class="chip">AI Citations</span>
              </div>
            </div>
            <a href="/services/seo-company-pune/" class="round-arrow" aria-label="Learn about Search Engine Engineering">
              <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </a>
          </div>

          <!-- Pillar 2 -->
          <div class="capability-row">
            <div class="cap-metric">
              <span class="cap-metric-label">OUTCOME</span>
              <span class="cap-metric-value">&lt; 1.2s</span>
            </div>
            <div class="cap-badge-wrap">
              <div class="cap-icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <div>
                <span class="cap-pillar-tag">Pillar 02</span>
                <span class="cap-pillar-name">Engineering</span>
              </div>
            </div>
            <div class="cap-content">
              <h3 class="cap-title">High-Performance Web &amp; E-Commerce Development</h3>
              <p class="cap-desc">Hand-crafted web applications and digital storefronts engineered for raw speed, 90+ Lighthouse scores, clean structured data, and frictionless mobile checkouts.</p>
              <div class="cap-chips">
                <a href="/website-design-company-in-pune.html" class="chip">Website Design Pune</a>
                <a href="/services/wordpress-development-services/" class="chip">WordPress Development</a>
                <a href="/services/shopify-store-development/" class="chip">Shopify Stores</a>
                <span class="chip">Next.js &amp; React</span>
                <span class="chip">E-Commerce Platforms</span>
              </div>
            </div>
            <a href="/website-design-company-in-pune.html" class="round-arrow" aria-label="Learn about Web Development">
              <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </a>
          </div>

          <!-- Pillar 3 -->
          <div class="capability-row">
            <div class="cap-metric">
              <span class="cap-metric-label">OUTCOME</span>
              <span class="cap-metric-value">4.8x ROI</span>
            </div>
            <div class="cap-badge-wrap">
              <div class="cap-icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <div>
                <span class="cap-pillar-tag">Pillar 03</span>
                <span class="cap-pillar-name">Acquisition</span>
              </div>
            </div>
            <div class="cap-content">
              <h3 class="cap-title">Performance Marketing &amp; Paid Ads</h3>
              <p class="cap-desc">Stop burning budget on clicks that don't buy. We build high-intent Google Search, Meta (Instagram &amp; Facebook), and retargeting campaigns with rigorous conversion tracking and lead qualification.</p>
              <div class="cap-chips">
                <a href="/services/ppc-services/" class="chip">Google Ads PPC</a>
                <a href="/services/meta-ads-agency/" class="chip">Meta Ads Agency</a>
                <a href="/services/social-media-marketing-services/" class="chip">Social Media Marketing</a>
                <span class="chip">High-Intent B2B Leads</span>
                <span class="chip">ROAS Scaling</span>
              </div>
            </div>
            <a href="/services/ppc-services/" class="round-arrow" aria-label="Learn about Performance Marketing">
              <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </a>
          </div>

          <!-- Pillar 4 -->
          <div class="capability-row">
            <div class="cap-metric">
              <span class="cap-metric-label">OUTCOME</span>
              <span class="cap-metric-value">42% Lift</span>
            </div>
            <div class="cap-badge-wrap">
              <div class="cap-icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <div>
                <span class="cap-pillar-tag">Pillar 04</span>
                <span class="cap-pillar-name">Conversion</span>
              </div>
            </div>
            <div class="cap-content">
              <h3 class="cap-title">Brand Identity &amp; Conversion Rate Optimization</h3>
              <p class="cap-desc">Transform casual visitors into high-ticket inquiries. We refine design systems, conversion wireframes, luxury corporate collateral, and user journeys based on behavioral analytics.</p>
              <div class="cap-chips">
                <a href="/services/ui-ux-design-services/" class="chip">UI/UX Design Pune</a>
                <a href="/services/luxury-business-card-design/" class="chip">Luxury Visiting Cards</a>
                <span class="chip">CRO Audits</span>
                <span class="chip">Brand Design Systems</span>
                <span class="chip">Funnel Wireframes</span>
              </div>
            </div>
            <a href="/services/ui-ux-design-services/" class="round-arrow" aria-label="Learn about Brand &amp; CRO">
              <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. INDUSTRY NICHES (INRANK NICHES WE KNOW INSIDE-OUT) -->
    <section class="niches-section" id="niches">
      <div class="shell">
        <div class="section-head">
          <span class="eyebrow-pill">INDUSTRY EXPERTISE</span>
          <h2 class="section-title">Niches we know inside-out.</h2>
          <p class="section-sub">Tailored growth playbooks designed for the commercial dynamics of Pune's leading sectors.</p>
        </div>

        <div class="niche-grid">
          <div class="niche-card">
            <span class="niche-num">SECTOR 01</span>
            <h3>B2B Manufacturing &amp; Industrial</h3>
            <p>Quotation funnels, technical product catalogs, and global export search visibility for Bhosari, Chakan &amp; PCMC manufacturers.</p>
          </div>
          <div class="niche-card">
            <span class="niche-num">SECTOR 02</span>
            <h3>Clinics &amp; Healthcare Providers</h3>
            <p>Google Maps 3-Pack dominance, direct WhatsApp appointment booking, and local medical schema for Pune specialists.</p>
          </div>
          <div class="niche-card">
            <span class="niche-num">SECTOR 03</span>
            <h3>Professional Services &amp; Advisory</h3>
            <p>Authority-building content architectures and Google Search lead pipelines for legal, financial, and corporate firms.</p>
          </div>
          <div class="niche-card">
            <span class="niche-num">SECTOR 04</span>
            <h3>Real Estate &amp; Developers</h3>
            <p>High-converting project micro-sites, floorplan showcases, and targeted NRI / Pune buyer Google Ads campaigns.</p>
          </div>
          <div class="niche-card">
            <span class="niche-num">SECTOR 05</span>
            <h3>E-Commerce &amp; D2C Brands</h3>
            <p>Lightning-fast Shopify setups, cart recovery funnels, and profitable Meta catalog advertising scaling.</p>
          </div>
          <div class="niche-card">
            <span class="niche-num">SECTOR 06</span>
            <h3>Local Pune Retail &amp; Commercial</h3>
            <p>Hyper-local SEO, Google Business Profile acceleration, and foot-traffic growth across Baner, Kothrud &amp; FC Road.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. PROOF & BIG NUMBERS (INRANK REAL NUMBERS) -->
    <section class="proof-section" id="proof">
      <div class="shell">
        <div class="section-head">
          <span class="eyebrow-pill">PROVABLE IMPACT</span>
          <h2 class="section-title">Numbers that move P&amp;Ls, not just dashboards.</h2>
          <p class="section-sub">Measured commercial outcomes achieved for ambitious brands across Pune, Mumbai, and national markets.</p>
        </div>

        <div class="proof-grid">
          <div class="proof-card">
            <span class="proof-num">₹14.2M+</span>
            <span class="proof-label">Client Revenue Influenced</span>
            <p class="proof-desc">Direct revenue generated and tracked through search rankings, conversion websites, and paid ad campaigns.</p>
          </div>
          <div class="proof-card">
            <span class="proof-num">+318%</span>
            <span class="proof-label">Average Organic Traffic Surge</span>
            <p class="proof-desc">Average organic search impression and click growth delivered within 90 days of technical deployment.</p>
          </div>
          <div class="proof-card">
            <span class="proof-num">&lt; 1.2s</span>
            <span class="proof-label">Page Load Speed</span>
            <p class="proof-desc">Sub-second average mobile render speed across our client portfolio, maintaining Google Lighthouse 90+.</p>
          </div>
          <div class="proof-card">
            <span class="proof-num">4.8x</span>
            <span class="proof-label">Average Return on Ad Spend</span>
            <p class="proof-desc">High-intent Google and Meta ad funnels engineered for profitable customer acquisition.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 8. WORK SHOWCASE & CASE STUDIES (INRANK REAL CASE STUDIES) -->
    <section class="work-section" id="our-work">
      <div class="shell">
        <div class="section-head">
          <span class="eyebrow-pill">COMMERCIAL PORTFOLIO</span>
          <h2 class="section-title">Real websites. Engineered for commercial dominance.</h2>
          <p class="section-sub">Substantiated outcomes. Not empty marketing adjectives. Explore our recent deployments.</p>
        </div>

        <div class="work-grid">
          <!-- Work Card 1: Greytothegreen -->
          <article class="work-card">
            <div class="work-card-media">
              <img src="/portfolio/screenshots/greytothegreen.webp" alt="Greytothegreen Case Study" loading="lazy" />
              <span class="work-card-pill">SEO &amp; WEB</span>
            </div>
            <div class="work-card-body">
              <span class="work-card-category">LANDSCAPE ARCHITECTURE · PUNE</span>
              <h3>Greytothegreen Environmental Platform</h3>
              <p>Engineered sub-second web architecture and dominated competitive Pune landscaping search rankings.</p>
            </div>
            <div class="work-card-footer">
              <span class="work-card-metric">+340% Organic Reach</span>
              <a href="/case-studies/greytothegreen.html" class="work-card-link">
                <span>View Record</span>
                <svg viewBox="0 0 16 16"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
              </a>
            </div>
          </article>

          <!-- Work Card 2: Shetkari Foodstuff -->
          <article class="work-card">
            <div class="work-card-media">
              <img src="/portfolio/screenshots/shetkarifoodstuff.webp" alt="Shetkari Foodstuff Case Study" loading="lazy" />
              <span class="work-card-pill">E-COMMERCE &amp; ADS</span>
            </div>
            <div class="work-card-body">
              <span class="work-card-category">AGRI-EXPORT &amp; D2C · MAHARASHTRA</span>
              <h3>Shetkari Foodstuff Direct Storefront</h3>
              <p>Turned wholesale agro products into a thriving direct-to-consumer digital ordering channel with high-ROAS ads.</p>
            </div>
            <div class="work-card-footer">
              <span class="work-card-metric">₹4.2L New Sales / Mo</span>
              <a href="/case-studies/shetkarifoodstuff.html" class="work-card-link">
                <span>View Record</span>
                <svg viewBox="0 0 16 16"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
              </a>
            </div>
          </article>

          <!-- Work Card 3: Cytos Health -->
          <article class="work-card">
            <div class="work-card-media">
              <img src="/portfolio/screenshots/cytos.webp" alt="Cytos Health Case Study" loading="lazy" />
              <span class="work-card-pill">LOCAL SEO &amp; CRO</span>
            </div>
            <div class="work-card-body">
              <span class="work-card-category">CLINICAL HEALTHCARE · PUNE</span>
              <h3>Cytos Diagnostic &amp; Patient Portal</h3>
              <p>Deployed Google Maps 3-Pack authority system and WhatsApp appointment booking infrastructure across Pune.</p>
            </div>
            <div class="work-card-footer">
              <span class="work-card-metric">Top 3 Google 3-Pack</span>
              <a href="/case-studies/cytos.html" class="work-card-link">
                <span>View Record</span>
                <svg viewBox="0 0 16 16"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
              </a>
            </div>
          </article>

          <!-- Work Card 4: Dravya Financial -->
          <article class="work-card">
            <div class="work-card-media">
              <img src="/portfolio/screenshots/dravyafinancial.webp" alt="Dravya Financial Case Study" loading="lazy" />
              <span class="work-card-pill">WEB ENGINEERING &amp; CRO</span>
            </div>
            <div class="work-card-body">
              <span class="work-card-category">WEALTH ADVISORY · PUNE</span>
              <h3>Dravya Financial Advisory Portal</h3>
              <p>Replaced generic WordPress theme with custom, lightning-fast wealth advisory platform engineered for high-net-worth leads.</p>
            </div>
            <div class="work-card-footer">
              <span class="work-card-metric">3.8x Conversion Lift</span>
              <a href="/case-studies/dravyafinancial.html" class="work-card-link">
                <span>View Record</span>
                <svg viewBox="0 0 16 16"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- 9. COMPARISON MATRIX (INRANK VS LEGACY PUNE AGENCIES) -->
    <section class="comparison-section" id="comparison">
      <div class="shell">
        <div class="section-head">
          <span class="eyebrow-pill">THE INRANK DIFFERENCE</span>
          <h2 class="section-title">How Inrank outperforms legacy Pune agencies.</h2>
          <p class="section-sub">A clear, objective look at how our direct engineering model delivers higher ROI than traditional retainers.</p>
        </div>

        <div class="comparison-table-wrap">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>Evaluation Metric</th>
                <th class="col-highlight">Inrank Technologies</th>
                <th>Traditional Pune Agencies</th>
                <th>Freelancers / Solo Devs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Code &amp; Asset Ownership</strong></td>
                <td class="col-highlight"><span class="badge-good">100% Client Owned</span></td>
                <td>Held hostage on proprietary CMS / lock-in</td>
                <td>Scattered across personal accounts</td>
              </tr>
              <tr>
                <td><strong>Account Accountability</strong></td>
                <td class="col-highlight"><span class="badge-good">Direct Senior Engineers</span></td>
                <td>Handed to junior interns / account reps</td>
                <td>Solo operator with limited scope</td>
              </tr>
              <tr>
                <td><strong>Speed &amp; Performance</strong></td>
                <td class="col-highlight"><span class="badge-good">Sub-second / 90+ Lighthouse</span></td>
                <td>Heavy, bloated WordPress templates</td>
                <td>Inconsistent code quality</td>
              </tr>
              <tr>
                <td><strong>Search &amp; AI Dominance</strong></td>
                <td class="col-highlight"><span class="badge-good">Technical SEO + GMB 3-Pack + GEO</span></td>
                <td>Basic keyword stuffing in meta tags</td>
                <td>Rarely addressed</td>
              </tr>
              <tr>
                <td><strong>Deployment Turnaround</strong></td>
                <td class="col-highlight"><span class="badge-good">5 - 7 Days Guaranteed Sprint</span></td>
                <td>6 to 12 weeks of committee meetings</td>
                <td>Unpredictable delays &amp; ghosting</td>
              </tr>
              <tr>
                <td><strong>Pricing Model</strong></td>
                <td class="col-highlight"><span class="badge-good">Fixed Transparent Sprints (from ₹11,999)</span></td>
                <td>Expensive recurring retainers + markups</td>
                <td>Cheap upfront, expensive to rewrite</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- 10. PEOPLE & BANER LAB (INRANK FOUNDER & ENGINEERING TEAM) -->
    <section class="people-section" id="about">
      <div class="shell">
        <div class="people-card">
          <div class="people-profile">
            <img src="/images/lead-growth-engineer.jpg" alt="Senior Growth Engineer - Inrank Technologies" class="people-avatar" />
            <div class="people-meta">
              <h3 class="people-name">Senior Growth Engineer</h3>
              <span class="people-role">Technical Lead &amp; Growth Architect</span>
              <span class="people-location">Baner Engineering Lab, Pune</span>
            </div>
          </div>
          <div class="people-quote-wrap">
            <blockquote class="people-quote">
              "When you hire Inrank, you don't get passed to an account manager who learned marketing last month. With 8+ years executing high-performance technical SEO, custom web architectures, and full-funnel CRO across Maharashtra, our engineering leadership directly directs strategy, reviews code, and optimizes campaigns for every client."
            </blockquote>
            <div class="people-actions">
              <a href="https://wa.me/918788823182" target="_blank" rel="noopener" class="button primary">
                <span>Message Lead Architect on WhatsApp</span>
              </a>
              <a href="/about.html" class="button secondary">
                <span>Read About Our Baner Lab</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 11. TESTIMONIALS (VERBATIM CLIENT QUOTES) -->
    <section class="testi-section" id="testimonials">
      <div class="shell">
        <div class="section-head">
          <span class="eyebrow-pill">CLIENT REVIEWS</span>
          <h2 class="section-title">What founders actually say.</h2>
          <p class="section-sub">Feedback from business owners and marketing heads who scaled their digital revenue with Inrank.</p>
        </div>

        <div class="testi-grid">
          <figure class="testi-card">
            <div class="testi-stars">★★★★★</div>
            <blockquote class="testi-body">
              "Finally an agency that ships fast and reports honestly. The SEO work alone brought us 38 buyer-intent keywords into the top 3 of Google for our Pune landscape architecture firm."
            </blockquote>
            <figcaption class="testi-author">
              <img src="/images/client-neha-patil.jpg" alt="Dr. Neha Patil" class="testi-avatar" />
              <div>
                <strong class="testi-name">Dr. Neha Patil</strong>
                <span class="testi-role">Co-Founder, Greytothegreen</span>
              </div>
            </figcaption>
          </figure>

          <figure class="testi-card">
            <div class="testi-stars">★★★★★</div>
            <blockquote class="testi-body">
              "Inrank transformed our web presence completely. Within 60 days of launching the new site, our inbound inquiries from Pune and Mumbai tripled. The speed difference alone is night and day."
            </blockquote>
            <figcaption class="testi-author">
              <img src="/images/client-aditya-shah.jpg" alt="Aditya Shah" class="testi-avatar" />
              <div>
                <strong class="testi-name">Aditya Shah</strong>
                <span class="testi-role">Marketing Head, Real Estate Developer</span>
              </div>
            </figcaption>
          </figure>

          <figure class="testi-card">
            <div class="testi-stars">★★★★★</div>
            <blockquote class="testi-body">
              "Their fixed pricing and 7-day turnaround are unheard of in Pune. Prasad and his team delivered an e-commerce platform that generated sales in its very first month."
            </blockquote>
            <figcaption class="testi-author">
              <img src="/images/client-rhea-kulkarni.jpg" alt="Rhea Kulkarni" class="testi-avatar" />
              <div>
                <strong class="testi-name">Rhea Kulkarni</strong>
                <span class="testi-role">Director, E-Commerce Brand</span>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- 12. LEAD MAGNET (INRANK 2026 CHECKLIST) -->
    <section class="lead-magnet-section" id="lead-magnet">
      <div class="shell">
        <div class="lead-magnet-box">
          <span class="eyebrow-pill" style="background:rgba(255,255,255,0.08); color:var(--terra-hero); border:1px solid rgba(255,255,255,0.12);">FREE PUNE AGENCY RESOURCE</span>
          <h2 class="section-title" style="color:#ffffff; margin-top:1.25rem;">Download the 2026 Pune SEO &amp; AI Search Growth Checklist.</h2>
          <p class="section-sub" style="color:#94a3b8; max-width:620px; margin:0.75rem auto 0;">The exact 45-point checklist we use to audit Core Web Vitals, Google Maps 3-Pack prominence, entity schemas and ChatGPT / Perplexity search citations. No generic fluff.</p>

          <form onsubmit="event.preventDefault(); alert('Checklist sent to your inbox! Thank you for connecting with Inrank Technologies.');" class="lead-magnet-form">
            <input type="email" placeholder="Enter your business email" required class="lead-magnet-input" />
            <button type="submit" class="button primary" style="height:50px; border-radius:12px;">Get Free Checklist</button>
          </form>
          <p class="lead-magnet-sub">100% Free · Instant PDF Access · Zero Spam Guarantee</p>
        </div>
      </div>
    </section>

    <!-- 13. PRICING ARCHITECTURE (INRANK FIXED-PRICE PACKAGES) -->
    <section class="pricing-section" id="pricing">
      <div class="shell">
        <div class="section-head">
          <span class="eyebrow-pill">TRANSPARENT PRICING ARCHITECTURE</span>
          <h2 class="section-title">Fixed-price sprints. Zero lock-in retainers.</h2>
          <p class="section-sub">Every package includes 100% source code ownership, mobile-first design, speed optimization, technical SEO tags, and direct senior engineering support in Baner, Pune.</p>
        </div>

        <div class="pricing-grid">
          <!-- Tier 1: Starter Sprint -->
          <div class="pricing-card">
            <span class="tier-pill">SPEED SPRINT</span>
            <h3 class="tier-name">Starter Sprint</h3>
            <p class="tier-desc">For local businesses, clinics &amp; consultancies needing an immediate, high-ranking professional digital footprint.</p>
            <div class="tier-price-row">
              <span class="tier-price">₹11,999</span>
              <span class="tier-period">/ fixed one-time</span>
            </div>
            <ul class="tier-features">
              <li>5-7 Day Guaranteed Turnaround</li>
              <li>Up to 5 Custom Engineered Pages</li>
              <li>Google Lighthouse 90+ Score</li>
              <li>Full Technical SEO &amp; Schema Meta</li>
              <li>WhatsApp Chat &amp; Lead Form Routing</li>
              <li>100% Source Code &amp; Asset Ownership</li>
              <li>30 Days Post-Launch Support</li>
            </ul>
            <a href="/contact.html" class="button primary full">Choose Starter Sprint</a>
          </div>

          <!-- Tier 2: Growth Scale (Featured Navy Card) -->
          <div class="pricing-card featured">
            <span class="tier-pill featured-pill">MOST POPULAR IN PUNE</span>
            <h3 class="tier-name">Growth Scale</h3>
            <p class="tier-desc">Our flagship deployment for ambitious SMEs and service companies ready to outrank direct competitors in Pune.</p>
            <div class="tier-price-row">
              <span class="tier-price">₹18,999</span>
              <span class="tier-period">/ fixed one-time</span>
            </div>
            <ul class="tier-features">
              <li>Up to 10 Custom Speed-Engineered Pages</li>
              <li>Full Local SEO &amp; Google 3-Pack Audit</li>
              <li>Dynamic Blog / CMS Publishing System</li>
              <li>Google Analytics 4 &amp; Conversion Tracking</li>
              <li>High-Conversion Wireframes &amp; Copy Polish</li>
              <li>Sub-second Mobile Speed Architecture</li>
              <li>Direct Priority Support with Prasad Mhaske</li>
            </ul>
            <a href="/contact.html" class="button primary full">Choose Growth Scale</a>
          </div>

          <!-- Tier 3: Market Domination -->
          <div class="pricing-card">
            <span class="tier-pill">COMPLETE DOMINATION</span>
            <h3 class="tier-name">Market Domination</h3>
            <p class="tier-desc">Full-stack web platform engineering + comprehensive 90-day search ranking &amp; advertising acceleration sprint.</p>
            <div class="tier-price-row">
              <span class="tier-price">₹34,999</span>
              <span class="tier-period">/ fixed one-time</span>
            </div>
            <ul class="tier-features">
              <li>Unlimited Pages &amp; Full E-Commerce Stack</li>
              <li>GEO, AI Citations &amp; Knowledge Graph Setup</li>
              <li>Complete Google Ads &amp; Meta Funnel Architecture</li>
              <li>Advanced Custom Web App &amp; API Integrations</li>
              <li>Conversion Rate Optimization (CRO) Sprint</li>
              <li>Bi-Weekly Commercial Growth Reviews</li>
              <li>90 Days High-Touch Senior Engineering</li>
            </ul>
            <a href="/contact.html" class="button primary full">Choose Market Domination</a>
          </div>
        </div>

        <!-- Addons Grid -->
        <div class="addons-wrap">
          <h3 class="section-title" style="font-size:1.5rem; text-align:center;">Specialized Engineering &amp; Growth Add-Ons</h3>
          <div class="addons-grid">
            <div class="addon-card">
              <h4>Google Ads (PPC) Campaign Setup</h4>
              <p>High-intent keyword architecture, negative lists &amp; conversion tracking.</p>
              <span class="addon-price">₹6,999</span>
            </div>
            <div class="addon-card">
              <h4>Meta (Instagram &amp; FB) Ad Funnel</h4>
              <p>Pixel CAPI setup, creative copywriting &amp; retargeting funnels.</p>
              <span class="addon-price">₹6,999</span>
            </div>
            <div class="addon-card">
              <h4>Monthly High-Authority SEO Sprint</h4>
              <p>Local citation building, technical fixes, and ranking expansion.</p>
              <span class="addon-price">₹8,999 / mo</span>
            </div>
            <div class="addon-card">
              <h4>Core Web Vitals Speed Sprint</h4>
              <p>Existing slow site speed optimization to guarantee 90+ Lighthouse.</p>
              <span class="addon-price">₹2,999</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 14. FAQ ACCORDION (INRANK REAL FAQS) -->
    <section class="faq-section" id="faq">
      <div class="shell">
        <div class="section-head">
          <span class="eyebrow-pill">COMMON QUESTIONS</span>
          <h2 class="section-title">Quick answers before the call.</h2>
          <p class="section-sub">Transparent answers about our fixed-price sprints, code ownership, and Pune engineering process.</p>
        </div>

        <div class="faq-accordion">
          <div class="faq-item">
            <button class="faq-btn" aria-expanded="false">
              <span>How quickly can Inrank launch our new website?</span>
              <svg class="faq-icon" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="faq-body">
              <p>Our Starter Sprint is deployed within 5 to 7 business days. Complex custom builds with e-commerce or dynamic CMS integrations take between 10 and 14 days. We work in dedicated, uninterrupted sprints to meet every launch deadline guaranteed.</p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-btn" aria-expanded="false">
              <span>Do we own the website source code and ad accounts?</span>
              <svg class="faq-icon" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="faq-body">
              <p>100% yes. From Day 1, you own every line of HTML, CSS, JavaScript, media assets, domain DNS, and advertising accounts. We never hold your digital assets hostage or use proprietary lock-in platforms.</p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-btn" aria-expanded="false">
              <span>How does Inrank help our business rank #1 on Google in Pune?</span>
              <svg class="faq-icon" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="faq-body">
              <p>We combine sub-second page performance (90+ Core Web Vitals) with Google Business Profile 3-Pack optimization, high-authority localized Pune citation building, and structured schema graphs. This dual-engine approach ensures Google and generative AI engines (ChatGPT, Perplexity) reward your site over slow competitor templates.</p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-btn" aria-expanded="false">
              <span>What is included in the ₹11,999 Starter Sprint?</span>
              <svg class="faq-icon" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="faq-body">
              <p>It includes up to 5 custom-engineered pages, responsive mobile architecture, 90+ Lighthouse speed score, complete technical on-page SEO tags, WhatsApp chat integration, contact form routing, and 30 days of post-launch engineering support.</p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-btn" aria-expanded="false">
              <span>Can you manage our Google Ads and Meta campaigns too?</span>
              <svg class="faq-icon" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="faq-body">
              <p>Yes. We build high-converting dedicated landing pages and manage paid ad campaigns with strict focus on ROAS and cost-per-qualified-lead. We filter out junk search terms and tune conversion funnels to maximize sales efficiency.</p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-btn" aria-expanded="false">
              <span>Where is Inrank located, and can we meet in person?</span>
              <svg class="faq-icon" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="faq-body">
              <p>Our primary engineering lab is in Baner, Pune, with client meeting desks at FC Road, Shivaji Nagar. We welcome in-person consultations or rapid Google Meet strategy calls at your convenience.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 15. DUAL CLOSING CARDS (INRANK CLOSING CTAs) -->
    <section class="closing-section" id="contact">
      <div class="shell">
        <span class="eyebrow-pill">TAKE THE NEXT STEP</span>
        <div class="closing-grid">
          <!-- Card 1: Dark Glass Navy Card -->
          <div class="closing-card card-dark">
            <h2 class="closing-title">Ready to turn search traffic into predictable revenue?</h2>
            <p class="closing-desc">Talk directly to our senior growth engineering pod about your business goals, target keywords, and market expansion across Pune.</p>
            <a href="/contact.html" class="closing-cta-link">
              <span>Book a Free 30-Min Strategy Call</span>
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
            </a>
          </div>

          <!-- Card 2: Light Clean Card -->
          <div class="closing-card card-light">
            <h2 class="closing-title">Speak directly with an engineer, not a salesperson.</h2>
            <p class="closing-desc">Schedule a 30-minute direct technical consultation with Prasad Mhaske at our Baner lab or over Google Meet.</p>
            <div style="display:flex; flex-direction:column; gap:8px;">
              <a href="https://wa.me/918788823182" target="_blank" rel="noopener" class="closing-contact-link">
                <strong>Message on WhatsApp (+91 87888 23182)</strong>
              </a>
              <a href="tel:+918788823182" class="closing-contact-link" style="color:#081424;">
                <span>Or call directly: <strong>+91 87888 23182</strong></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>

  <!-- ============================================================
       CORPORATE 5-COLUMN FOOTER
       ============================================================ -->
  <footer class="site-footer">
    <div class="shell">
      <div class="footer-grid">
        <!-- Col 1: Brand & Pune Bio -->
        <div class="footer-col brand-col">
          <a href="/" class="footer-logo">
            <img src="/img/logo.png" alt="Inrank Technologies" width="32" height="32" />
            <div class="nav-logo-brand">
              <span class="nav-logo-name">Inrank</span>
              <span class="nav-logo-sub">Technologies</span>
            </div>
          </a>
          <p class="footer-bio">
            Inrank Technologies is Pune's leading performance digital marketing agency &amp; web development company. Engineering search dominance, ultra-fast web platforms, and measurable commercial growth.
          </p>
          <div class="footer-connect">
            <span class="connect-label">Connect</span>
            <div class="connect-icons">
              <a href="https://wa.me/918788823182" target="_blank" rel="noopener" aria-label="WhatsApp" class="icon-circle">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              </a>
              <a href="tel:+918788823182" aria-label="Phone" class="icon-circle">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </a>
              <a href="mailto:inranktech@gmail.com" aria-label="Email" class="icon-circle">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Col 2: Capabilities -->
        <div class="footer-col">
          <h4 class="col-title">Capabilities</h4>
          <ul class="col-links">
            <li><a href="/services/seo-company-pune/">Search &amp; AI Discovery</a></li>
            <li><a href="/website-design-company-in-pune.html">High-Performance Web</a></li>
            <li><a href="/services/ppc-services/">Performance Marketing</a></li>
            <li><a href="/services/ui-ux-design-services/">Brand Identity &amp; CRO</a></li>
            <li><a href="/services.html">All 27 Services</a></li>
          </ul>
        </div>

        <!-- Col 3: Packages -->
        <div class="footer-col">
          <h4 class="col-title">Packages</h4>
          <ul class="col-links">
            <li><a href="/pricing.html">Starter Sprint (₹11,999)</a></li>
            <li><a href="/pricing.html">Growth Scale (₹18,999)</a></li>
            <li><a href="/pricing.html">Market Domination</a></li>
            <li><a href="/pricing.html#addons">Specialized Add-ons</a></li>
            <li><a href="/pricing.html#faq">Pricing FAQ</a></li>
          </ul>
        </div>

        <!-- Col 4: Proof & Work -->
        <div class="footer-col">
          <h4 class="col-title">Proof &amp; Work</h4>
          <ul class="col-links">
            <li><a href="/our-work.html">Featured Portals</a></li>
            <li><a href="/case-studies.html">Client Case Studies</a></li>
            <li><a href="/case-studies/greytothegreen.html">Greytothegreen Record</a></li>
            <li><a href="/case-studies/shetkarifoodstuff.html">Shetkari Foodstuff Record</a></li>
            <li><a href="/about.html">About Inrank</a></li>
          </ul>
        </div>

        <!-- Col 5: Pune Service Hubs -->
        <div class="footer-col">
          <h4 class="col-title">Pune Service Hubs</h4>
          <ul class="col-links">
            <li><a href="/digital-marketing-agency-in-pune.html">Baner &amp; Balewadi</a></li>
            <li><a href="/digital-marketing-agency-in-pune.html">Hinjewadi Tech Hub</a></li>
            <li><a href="/digital-marketing-agency-in-pune.html">Wakad &amp; PCMC</a></li>
            <li><a href="/digital-marketing-agency-in-pune.html">Shivaji Nagar / FC Rd</a></li>
            <li><a href="/digital-marketing-agency-in-pune.html">Kharadi &amp; Viman Nagar</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© 2026 Inrank Technologies Pune. All rights reserved. Baner Engineering Lab.</p>
        <div class="legal-links">
          <a href="/privacy-policy.html">Privacy Policy</a>
          <a href="/terms-and-conditions.html">Terms &amp; Conditions</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Core JavaScript -->
  <script src="/js/core.js"></script>
</body>
</html>
`;

fs.writeFileSync(indexHtmlPath, indexHtml, 'utf8');
console.log('Successfully written index.html with wrapped hero copy and portfolio screenshots');
