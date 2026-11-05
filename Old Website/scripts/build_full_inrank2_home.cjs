const fs = require('fs');
const path = require('path');

// Read current index.html to extract any specific verbatim blocks if needed
const currentIndexHtml = fs.readFileSync('index.html', 'utf8');

// Build the complete Inrank 2.0 index.html with 100% exact content
const html = `<!doctype html>
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
  <meta name="description" content="Inrank Technologies is Pune's leading digital marketing agency & web development company. We deliver SEO services in Pune, website development, PPC, social media and AI SEO to outrank local competitors." />
  <meta name="keywords" content="Digital marketing in Pune, Digital marketing services in Pune, Web development services in Pune, Website development in Pune, SEO services in Pune, Digital marketing agency in Pune, Best website development company in Pune, Social media marketing in Pune, PPC agency Pune, AI SEO agency Pune" />
  <meta name="author" content="Inrank Technologies Pune" />
  <link rel="canonical" href="https://www.inranktech.com/" />
  <link rel="icon" type="image/png" href="/logo.png" />
  <link rel="shortcut icon" type="image/png" href="/logo.png" />
  <link rel="apple-touch-icon" href="/logo.png" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.inranktech.com/" />
  <meta property="og:title" content="Inrank Technologies | Digital Marketing & Web Development Services in Pune" />
  <meta property="og:description" content="Inrank Technologies is Pune's leading digital marketing agency & web development company. We deliver SEO in Pune, website development, PPC and AI SEO." />
  <meta property="og:image" content="https://www.inranktech.com/images/service-seo.jpg" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://www.inranktech.com/" />
  <meta property="twitter:title" content="Inrank Technologies | Digital Marketing & Web Development Services in Pune" />
  <meta property="twitter:description" content="Inrank Technologies is Pune's leading digital marketing agency & web development company. We deliver SEO in Pune, website development, PPC and AI SEO." />
  <meta property="twitter:image" content="https://www.inranktech.com/images/service-seo.jpg" />

  <!-- Google Fonts: Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

  <!-- Core & Vinove-Inspired Corporate CSS -->
  <link rel="stylesheet" href="/css/core.css" />
  <link rel="stylesheet" href="/css/nav.css" />
  <link rel="stylesheet" href="/css/corporate.css" />

  <!-- Lucide Icons -->
  <script src="/js/lucide.min.js"></script>
</head>
<body class="bg-body text-slate-900 font-sans antialiased selection:bg-emerald-500 selection:text-white">

  <!-- VINOVE 2026 FLOATING DOCK HEADER -->
  <header class="nav-wrap" id="nav-wrap">
    <nav class="nav is-dark" id="nav" aria-label="Main Navigation">
      <div class="nav-inner">
        <!-- Logo -->
        <a href="/" class="nav-brand" aria-label="Inrank Technologies Home">
          <img src="/img/logo.png" alt="Inrank Technologies" class="nav-logo" />
        </a>

        <!-- Desktop Navigation Items -->
        <div class="nav-links">
          <!-- Services Mega Dropdown -->
          <div class="nav-item has-drop">
            <a href="/services.html" class="nav-link" aria-expanded="false" aria-haspopup="true">
              <span>Services</span>
              <svg class="drop-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
            <div class="drop-mega" role="menu">
              <div class="mega-rail">
                <div class="mega-rail-badge">Core Pillars</div>
                <h4 class="mega-rail-title">Full-Stack Digital Growth Engineering</h4>
                <p class="mega-rail-desc">We replace fragmented agencies with an accountable, high-performance growth engineering partner.</p>
                <div class="mega-rail-stats">
                  <div class="rail-stat">
                    <strong>+318%</strong>
                    <span>Organic Traffic</span>
                  </div>
                  <div class="rail-stat">
                    <strong>&lt; 0.8s</strong>
                    <span>Core Web Vitals</span>
                  </div>
                </div>
                <a href="/services.html" class="mega-rail-cta">
                  <span>Explore All 27 Services</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
              <div class="mega-cards">
                <a href="/services.html#pillar-1" class="mega-card" role="menuitem">
                  <div class="mega-card-icon search-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                  </div>
                  <div class="mega-card-body">
                    <div class="mega-card-title">Search &amp; AI Discovery</div>
                    <div class="mega-card-desc">SEO Company in Pune, GEO, AI Ranking Citations, GMB 3-Pack Domination.</div>
                  </div>
                </a>
                <a href="/services.html#pillar-2" class="mega-card" role="menuitem">
                  <div class="mega-card-icon web-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                  </div>
                  <div class="mega-card-body">
                    <div class="mega-card-title">Web &amp; E-Commerce</div>
                    <div class="mega-card-desc">Custom Website Development, Shopify Stores, UI/UX Systems &amp; Web Apps.</div>
                  </div>
                </a>
                <a href="/services.html#pillar-3" class="mega-card" role="menuitem">
                  <div class="mega-card-icon ads-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </div>
                  <div class="mega-card-body">
                    <div class="mega-card-title">Paid Media &amp; Performance</div>
                    <div class="mega-card-desc">High-ROAS Google Ads, Meta Ads, LinkedIn B2B funnels, and Conversion Rate Optimization.</div>
                  </div>
                </a>
                <a href="/services.html#pillar-4" class="mega-card" role="menuitem">
                  <div class="mega-card-icon brand-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg>
                  </div>
                  <div class="mega-card-body">
                    <div class="mega-card-title">Brand Identity &amp; Creative</div>
                    <div class="mega-card-desc">Corporate Logo Design, Strategic Brand Naming, Luxury Collateral &amp; Content Authority.</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <a href="/pricing.html" class="nav-link">Pricing</a>
          <a href="/our-work.html" class="nav-link">Our Work</a>
          <a href="/case-studies.html" class="nav-link">Case Studies</a>

          <!-- About Dropdown -->
          <div class="nav-item has-drop">
            <a href="/about.html" class="nav-link" aria-expanded="false" aria-haspopup="true">
              <span>About</span>
              <svg class="drop-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
            <div class="drop-simple" role="menu">
              <a href="/about.html" class="simple-link" role="menuitem">
                <div class="simple-title">About Inrank</div>
                <div class="simple-desc">Our senior model, operating philosophy &amp; Baner tech lab.</div>
              </a>
              <a href="/index.html#comparison" class="simple-link" role="menuitem">
                <div class="simple-title">Why We Beat Legacy Agencies</div>
                <div class="simple-desc">Direct comparison matrix against traditional Pune firms.</div>
              </a>
              <a href="/index.html#process" class="simple-link" role="menuitem">
                <div class="simple-title">Our 4-Stage Operating Model</div>
                <div class="simple-desc">Audit, Strategy, Launch, and Continuous Optimization.</div>
              </a>
            </div>
          </div>

          <a href="/contact.html" class="nav-link">Contact</a>
        </div>

        <!-- Right Side: Phone Hotline & CTA Button -->
        <div class="nav-actions">
          <a href="tel:+918788823182" class="nav-phone" title="Call Senior Engineer Desk">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>+91 87888 23182</span>
          </a>
          <a href="/contact.html" class="nav-cta">
            <span>Get Free Audit</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>

          <!-- Mobile Toggle Button -->
          <button class="nav-burger" id="nav-burger" aria-label="Toggle Navigation Menu" aria-expanded="false">
            <span class="burger-bar"></span>
            <span class="burger-bar"></span>
            <span class="burger-bar"></span>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div class="nav-drawer" id="nav-drawer">
        <div class="drawer-inner">
          <a href="/" class="drawer-link active">Home</a>
          <a href="/services.html" class="drawer-link">Services (All 27)</a>
          <a href="/pricing.html" class="drawer-link">Packages &amp; Pricing</a>
          <a href="/our-work.html" class="drawer-link">Selected Work</a>
          <a href="/case-studies.html" class="drawer-link">Case Studies &amp; Proof</a>
          <a href="/about.html" class="drawer-link">About &amp; Senior Model</a>
          <a href="/contact.html" class="drawer-link">Contact &amp; Baner Lab</a>
          <div class="drawer-foot">
            <a href="tel:+918788823182" class="drawer-phone">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>+91 87888 23182 / +91 70386 12280</span>
            </a>
            <a href="/contact.html" class="btn btn-primary w-full">Request 30-Min Strategy Call</a>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <!-- MAIN WRAPPER -->
  <main id="main-content">

    <!-- [01] HERO SECTION (VINOVE CORPORATE RE-ENGINEERED) -->
    <section id="top" class="hero" aria-labelledby="hero-title">
      <div class="hero-media" aria-hidden="true">
        <div class="hero-grid-pattern"></div>
        <div class="hero-shade"></div>
      </div>

      <div class="shell hero-content">
        <div class="hero-grid">
          
          <!-- Hero Left Copy -->
          <div class="hero-copy" data-reveal="fade-up">
            <div class="hero-eyebrow-wrap">
              <span class="eyebrow">DIRECT SENIOR ENGINEERING &amp; SEARCH CONSULTATION · BANER, PUNE</span>
              <span class="eyebrow-badge">Pune's Premier Digital Growth &amp; Performance Web Partner</span>
            </div>

            <h1 id="hero-title" class="display">
              Websites, SEO &amp; Ads that
              <span class="text-gradient">turn traffic into revenue.</span>
            </h1>

            <p class="lede">
              Inrank Technologies is a performance-first digital growth partner. We build conversion-engineered websites, run profitable Google &amp; Meta Ads and rank you on Google: all under one roof.
            </p>

            <div class="hero-cta-group">
              <a href="/contact.html" class="btn btn-primary btn-lg">
                <span>Book Free Consultation</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
              </a>
              <a href="/services.html" class="btn btn-secondary btn-lg">
                <span>Explore Our Services</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>

            <!-- Social Proof Rating & Trust Bar -->
            <div class="hero-proof-bar">
              <div class="client-monograms">
                <span class="mono-badge mono-navy" title="CyTOS Machines">CY</span>
                <span class="mono-badge mono-green" title="Fludio Water Solutions">FL</span>
                <span class="mono-badge mono-blue" title="Vasro Ventures">VV</span>
                <span class="mono-badge mono-purple" title="Hira Grafix">HG</span>
                <span class="mono-badge mono-emerald" title="50+ Verified Clients">50+</span>
              </div>
              <div class="proof-meta">
                <div class="stars-row">
                  <div class="stars-visual">★★★★★</div>
                  <strong class="rating-text">4.9 / 5.0</strong>
                  <span class="reviews-count">(50+ Client Reviews)</span>
                </div>
                <p class="proof-sub">
                  Trusted by <strong class="text-slate-900">50+ high-growth brands</strong> across India &amp; worldwide · <span class="sla-text">15-Minute Response SLA</span>
                </p>
              </div>
            </div>
          </div>

          <!-- Hero Right 3D Visualizer & Cockpit -->
          <div class="hero-visual" data-reveal="fade-up" data-delay="150">
            <!-- IDE / Performance Floating Cockpit -->
            <div class="cockpit-card">
              <!-- Window Bar -->
              <div class="cockpit-bar">
                <div class="window-dots">
                  <span class="dot dot-red"></span>
                  <span class="dot dot-yellow"></span>
                  <span class="dot dot-green"></span>
                </div>
                <span class="cockpit-title">inrank-seo // dev // baner-lab</span>
                <span class="badge-live"><span class="pulse-dot"></span> 100/100 Core Vitals</span>
              </div>
              <!-- Code Snippet -->
              <div class="cockpit-code">
                <div class="code-line"><span class="line-num">01</span><span class="kw">import</span> { <span class="fn">SEO</span>, <span class="fn">Growth</span> } <span class="kw">from</span> <span class="str">"inrank"</span>;</div>
                <div class="code-line"><span class="line-num">02</span><span class="kw">const</span> <span class="var">site</span> = <span class="kw">new</span> <span class="type">WebBuilder</span>({</div>
                <div class="code-line"><span class="line-num">03</span>  <span class="prop">performance</span>: <span class="val">"100/100"</span>,</div>
                <div class="code-line"><span class="line-num">04</span>  <span class="prop">stack</span>: [<span class="str">"React"</span>, <span class="str">"Tailwind"</span>, <span class="str">"Meta-CAPI"</span>],</div>
                <div class="code-line"><span class="line-num">05</span>  <span class="prop">seoOptimized</span>: <span class="bool">true</span>,</div>
                <div class="code-line"><span class="line-num">06</span>  <span class="prop">turnaround</span>: <span class="val">"14 Days Guaranteed"</span></div>
                <div class="code-line"><span class="line-num">07</span>});</div>
                <div class="code-line"><span class="line-num">08</span><span class="var">site</span>.<span class="fn">rankNumberOne</span>(); <span class="cursor">|</span></div>
              </div>
              <!-- Floating Metric Pill 1 -->
              <div class="float-pill pill-top-right">
                <div class="pill-head">
                  <span class="pill-dot green"></span>
                  <span class="pill-label">Live Traffic Pulse</span>
                </div>
                <div class="pill-val">+318% Qualified Leads</div>
                <div class="pill-sub">8.4k Visitors · Sub-Second TTFB</div>
              </div>
              <!-- Floating Metric Pill 2 -->
              <div class="float-pill pill-bottom-left">
                <div class="score-circle">
                  <span class="score-num">100</span>
                </div>
                <div class="score-meta">
                  <div class="score-label">SEO &amp; Performance</div>
                  <div class="score-sub">Google Core Web Vitals Pass</div>
                </div>
              </div>
            </div>

            <!-- Hero Live Work Micro-Cards -->
            <div class="hero-work-strip">
              <div class="work-strip-label">Recent Client Deployments:</div>
              <div class="work-strip-grid">
                <a href="/case-studies/fludio.html" class="strip-card">
                  <div class="strip-card-title">Fludio Interiors</div>
                  <div class="strip-card-metric">+318% Leads</div>
                </a>
                <a href="/case-studies/cytos.html" class="strip-card">
                  <div class="strip-card-title">CyTOS Biosciences</div>
                  <div class="strip-card-metric">#1 Google Rank</div>
                </a>
                <a href="/case-studies/dravyafinancial.html" class="strip-card">
                  <div class="strip-card-title">Dravya Financial</div>
                  <div class="strip-card-metric">₹1.4L Saved</div>
                </a>
                <a href="/case-studies/greytothegreen.html" class="strip-card">
                  <div class="strip-card-title">Grey to Green</div>
                  <div class="strip-card-metric">3.4x ROAS</div>
                </a>
                <a href="/case-studies/hiragrafix.html" class="strip-card">
                  <div class="strip-card-title">Hira Grafix</div>
                  <div class="strip-card-metric">140+ RFQs/mo</div>
                </a>
              </div>
            </div>
          </div>

        </div>

        <!-- HERO GROWTH TECH STACK MARQUEE STRIP -->
        <div class="tech-stack-strip" data-reveal="fade-up" data-delay="200">
          <div class="strip-header">
            <span class="strip-dot"></span>
            <span>Enterprise Growth Tech Stack:</span>
          </div>
          <div class="strip-marquee-wrap">
            <div class="strip-marquee-track">
              <div class="tech-badge"><img src="/tech-stack/google-analytics.webp" alt="GA4" /><span>GA4 Analytics</span></div>
              <div class="tech-badge"><img src="/tech-stack/google-search-console.webp" alt="GSC" /><span>Search Console</span></div>
              <div class="tech-badge"><img src="/tech-stack/semrush.png" alt="Semrush" /><span>Semrush Pro</span></div>
              <div class="tech-badge"><img src="/tech-stack/ahrefs.webp" alt="Ahrefs" /><span>Ahrefs Enterprise</span></div>
              <div class="tech-badge"><img src="/tech-stack/meta.png" alt="Meta Ads" /><span>Meta CAPI</span></div>
              <div class="tech-badge"><img src="/tech-stack/gtm.webp" alt="Tag Manager" /><span>Google Tag Manager</span></div>
              <div class="tech-badge"><img src="/tech-stack/shopify.webp" alt="Shopify" /><span>Shopify Plus</span></div>
              <div class="tech-badge"><img src="/tech-stack/wordpress.webp" alt="WordPress" /><span>WordPress VIP</span></div>
              <div class="tech-badge"><img src="/tech-stack/chatgpt.png" alt="ChatGPT" /><span>ChatGPT AI SEO</span></div>
              <div class="tech-badge"><img src="/tech-stack/perplexity.png" alt="Perplexity" /><span>Perplexity Engine</span></div>
              <div class="tech-badge"><img src="/tech-stack/cloudflare-logo-png_seeklogo-294318.png" alt="Cloudflare" /><span>Cloudflare Edge</span></div>
              <div class="tech-badge"><img src="/tech-stack/Tailwind.png" alt="Tailwind" /><span>Tailwind CSS</span></div>
              <!-- Duplicate for seamless infinite loop -->
              <div class="tech-badge"><img src="/tech-stack/google-analytics.webp" alt="GA4" /><span>GA4 Analytics</span></div>
              <div class="tech-badge"><img src="/tech-stack/google-search-console.webp" alt="GSC" /><span>Search Console</span></div>
              <div class="tech-badge"><img src="/tech-stack/semrush.png" alt="Semrush" /><span>Semrush Pro</span></div>
              <div class="tech-badge"><img src="/tech-stack/ahrefs.webp" alt="Ahrefs" /><span>Ahrefs Enterprise</span></div>
              <div class="tech-badge"><img src="/tech-stack/meta.png" alt="Meta Ads" /><span>Meta CAPI</span></div>
              <div class="tech-badge"><img src="/tech-stack/gtm.webp" alt="Tag Manager" /><span>Google Tag Manager</span></div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- [02] TRUSTED BY SECTION -->
    <section id="trusted-by" class="section bg-slate-50 border-y border-slate-200/60" aria-labelledby="trusted-title">
      <div class="shell">
        <div class="section-head text-center max-w-3xl mx-auto" data-reveal="fade-up">
          <span class="eyebrow">PROVEN TRACK RECORD</span>
          <h2 id="trusted-title" class="title">Trusted by Ambitious Brands Scaling Real Revenue &amp; High ROAS</h2>
          <p class="subtitle">
            From precision CNC automation to architectural aquatics, luxury packaging, and healthcare, explore the high-growth businesses that replaced generic agencies with Inrank’s dedicated performance growth pod.
          </p>
        </div>

        <!-- Infinite Logo Carousel -->
        <div class="logo-carousel-wrap mt-10" data-reveal="fade-up" data-delay="100">
          <div class="logo-carousel-track">
            <div class="logo-item"><img src="/client-logos/CyTOS New Logo.png" alt="CyTOS Machines Pune" /></div>
            <div class="logo-item"><img src="/client-logos/Fludio-Logo-Color.webp" alt="Fludio Water Solutions" /></div>
            <div class="logo-item"><img src="/client-logos/Untitled-design-64-300x75.png" alt="HIRAGRAFIX" /></div>
            <div class="logo-item"><img src="/client-logos/Untitled-design-23.webp" alt="Grey To The Green" /></div>
            <div class="logo-item"><img src="/client-logos/Dravya-R-1.png" alt="Dravya Financial Solutions" /></div>
            <div class="logo-item"><img src="/client-logos/Quantum-logo-v.A0.2-230707_1@2x.webp" alt="Quantum Innovation" /></div>
            <div class="logo-item"><img src="/client-logos/Riitu-Institution-Logo.webp" alt="Riitu Institution" /></div>
            <div class="logo-item"><img src="/client-logos/ShetkarI-Foodstuff-Logo.webp" alt="Shetkari Foodstuff" /></div>
            <!-- Repeat for marquee loop -->
            <div class="logo-item"><img src="/client-logos/CyTOS New Logo.png" alt="CyTOS Machines Pune" /></div>
            <div class="logo-item"><img src="/client-logos/Fludio-Logo-Color.webp" alt="Fludio Water Solutions" /></div>
            <div class="logo-item"><img src="/client-logos/Untitled-design-64-300x75.png" alt="HIRAGRAFIX" /></div>
            <div class="logo-item"><img src="/client-logos/Untitled-design-23.webp" alt="Grey To The Green" /></div>
          </div>
        </div>
      </div>
    </section>

    <!-- [03] CORE GROWTH SERVICES (ALL 8 CARDS + BOTTOM BANNER) -->
    <section id="services" class="section" aria-labelledby="services-title">
      <div class="shell">
        <div class="section-head text-center max-w-3xl mx-auto" data-reveal="fade-up">
          <span class="eyebrow">[01] : CORE GROWTH SERVICES</span>
          <h2 id="services-title" class="title">Digital Marketing &amp; Web Development in Pune</h2>
          <p class="subtitle">
            We focus on high-impact core services engineered to drive local Pune search visibility, sub-second load speeds and measurable revenue.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          
          <!-- 01: SEO Services -->
          <div class="service-card" data-reveal="fade-up">
            <div class="service-idx">01</div>
            <div class="service-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </div>
            <h3 class="service-card-title">SEO Services</h3>
            <p class="service-card-text">
              Rank #1 on Google for high-intent search queries with technical Core Web Vitals, keyword architecture, and authority backlinks.
            </p>
            <a href="/services.html#pillar-1" class="service-card-link">
              <span>View Service Details</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          <!-- 02: Website Development -->
          <div class="service-card" data-reveal="fade-up" data-delay="50">
            <div class="service-idx">02</div>
            <div class="service-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            <h3 class="service-card-title">Website Development</h3>
            <p class="service-card-text">
              Fast, custom-coded web architectures that load in under 1 second, communicate premium positioning, and convert visitors into buyers.
            </p>
            <a href="/services.html#pillar-2" class="service-card-link">
              <span>View Service Details</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          <!-- 03: Pay Per Click (PPC) -->
          <div class="service-card" data-reveal="fade-up" data-delay="100">
            <div class="service-idx">03</div>
            <div class="service-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <h3 class="service-card-title">Pay Per Click (PPC)</h3>
            <p class="service-card-text">
              Scalable, high-ROAS paid acquisition across Google Search, Performance Max, Meta Ads, and LinkedIn with end-to-end attribution.
            </p>
            <a href="/services.html#pillar-3" class="service-card-link">
              <span>View Service Details</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          <!-- 04: Social Media Marketing -->
          <div class="service-card" data-reveal="fade-up" data-delay="150">
            <div class="service-idx">04</div>
            <div class="service-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </div>
            <h3 class="service-card-title">Social Media Marketing</h3>
            <p class="service-card-text">
              High-retention content strategy, Reels creation, and community building that positions your brand as an industry leader.
            </p>
            <a href="/services.html#pillar-3" class="service-card-link">
              <span>View Service Details</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          <!-- 05: Custom Website Design -->
          <div class="service-card" data-reveal="fade-up">
            <div class="service-idx">05</div>
            <div class="service-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
            </div>
            <h3 class="service-card-title">Custom Website Design</h3>
            <p class="service-card-text">
              High-converting UI/UX layouts, wireframes, and design systems crafted for user engagement and commercial intent.
            </p>
            <a href="/services.html#pillar-2" class="service-card-link">
              <span>View Service Details</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          <!-- 06: AI SEO & GEO Agency -->
          <div class="service-card" data-reveal="fade-up" data-delay="50">
            <div class="service-idx">06</div>
            <div class="service-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
            </div>
            <h3 class="service-card-title">AI SEO &amp; GEO Agency</h3>
            <p class="service-card-text">
              Optimize your digital presence for generative AI search engines including ChatGPT, Perplexity, Google Gemini, and Claude.
            </p>
            <a href="/services.html#pillar-1" class="service-card-link">
              <span>View Service Details</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          <!-- 07: E-Commerce Development -->
          <div class="service-card" data-reveal="fade-up" data-delay="100">
            <div class="service-idx">07</div>
            <div class="service-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
            </div>
            <h3 class="service-card-title">E-Commerce Development</h3>
            <p class="service-card-text">
              High-velocity Shopify and WooCommerce stores optimized for micro-interactions, frictionless checkout, and high average order value.
            </p>
            <a href="/services.html#pillar-2" class="service-card-link">
              <span>View Service Details</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          <!-- 08: Google My Business / Google Map -->
          <div class="service-card" data-reveal="fade-up" data-delay="150">
            <div class="service-idx">08</div>
            <div class="service-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <h3 class="service-card-title">Google My Business / Google Map</h3>
            <p class="service-card-text">
              Local 3-Pack domination in Pune. Rank in top map positions for "near me" high-intent commercial queries.
            </p>
            <a href="/services.html#pillar-1" class="service-card-link">
              <span>View Service Details</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

        </div>

        <!-- Specialized Banner CTA -->
        <div class="service-banner-cta mt-12" data-reveal="fade-up">
          <div class="banner-left">
            <h4 class="banner-title">Need specialized branding, AI SEO, or content marketing?</h4>
            <p class="banner-sub">Explore all 27 specialized services across search, engineering, performance paid ads and brand identity.</p>
          </div>
          <div class="banner-right">
            <a href="/services.html" class="btn btn-primary">
              <span>Explore All 27 Services</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- [04] WHY INRANK / VALUES (ALL 6 PILLARS) -->
    <section id="why-us" class="section bg-slate-900 text-white" aria-labelledby="why-title">
      <div class="shell">
        <div class="section-head text-center max-w-3xl mx-auto" data-reveal="fade-up">
          <span class="eyebrow text-emerald-400">[02] : WHY INRANK</span>
          <h2 id="why-title" class="title text-white">Built like a growth team. Priced like an agency.</h2>
          <p class="subtitle text-slate-300">
            We replace the chaos of juggling freelancers and disconnected vendors with a single, accountable performance partner.
          </p>
          <div class="inline-flex items-center gap-2 px-3 py-1 mt-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
            <span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            <span>Remote First · Worldwide · A small senior team. Zero account-manager fluff.</span>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          
          <div class="value-card-dark" data-reveal="fade-up">
            <div class="value-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
            <h3 class="value-title">Fast delivery</h3>
            <p class="value-text">Most websites live in 14 days. Active ad accounts set up and optimized in 72 hours.</p>
          </div>

          <div class="value-card-dark" data-reveal="fade-up" data-delay="50">
            <div class="value-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
            <h3 class="value-title">Performance-first</h3>
            <p class="value-text">We obsess over Core Web Vitals, sub-second TTFB, and conversion paths, not bloated templates.</p>
          </div>

          <div class="value-card-dark" data-reveal="fade-up" data-delay="100">
            <div class="value-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
            <h3 class="value-title">ROI mindset</h3>
            <p class="value-text">Every spend line is tied to pipeline, booked consultations, or tracked e-commerce sales.</p>
          </div>

          <div class="value-card-dark" data-reveal="fade-up">
            <div class="value-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
            <h3 class="value-title">One partner</h3>
            <p class="value-text">Web engineering, technical SEO, and paid performance orchestrated together under unified leadership.</p>
          </div>

          <div class="value-card-dark" data-reveal="fade-up" data-delay="50">
            <div class="value-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></div>
            <h3 class="value-title">Local market depth</h3>
            <p class="value-text">Deep pattern recognition across Pune’s competitive commercial corridors from Baner to Hinjewadi.</p>
          </div>

          <div class="value-card-dark" data-reveal="fade-up" data-delay="100">
            <div class="value-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg></div>
            <h3 class="value-title">Data-backed iteration</h3>
            <p class="value-text">Weekly performance sprints and monthly strategy reviews with direct senior engineers.</p>
          </div>

        </div>
      </div>
    </section>

    <!-- [05] PROCESS (A SIMPLE, PROVEN 4-STEP ENGAGEMENT) -->
    <section id="process" class="section bg-slate-50 border-b border-slate-200/60" aria-labelledby="process-title">
      <div class="shell">
        <div class="section-head text-center max-w-3xl mx-auto" data-reveal="fade-up">
          <span class="eyebrow">[03] : PROCESS</span>
          <h2 id="process-title" class="title">A simple, proven 4-step engagement.</h2>
          <p class="subtitle">Clear milestones, predictable timelines, and relentless technical execution from day one.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          
          <div class="process-card" data-reveal="fade-up">
            <div class="process-step-num">01</div>
            <h3 class="process-step-title">SEO Audit</h3>
            <p class="process-step-desc">
              Full crawl of your website, speed benchmarks, tracking validation and exhaustive keyword gap discovery.
            </p>
          </div>

          <div class="process-card" data-reveal="fade-up" data-delay="50">
            <div class="process-step-num">02</div>
            <h3 class="process-step-title">Strategy</h3>
            <p class="process-step-desc">
              Construct a customized 90-day execution framework mapping exact keyword clusters, content pipelines and paid ad strategies.
            </p>
          </div>

          <div class="process-card" data-reveal="fade-up" data-delay="100">
            <div class="process-step-num">03</div>
            <h3 class="process-step-title">Launch</h3>
            <p class="process-step-desc">
              Rapid deployment of optimized page structures, keyword-focused metadata adjustments and high-intent PPC campaigns.
            </p>
          </div>

          <div class="process-card" data-reveal="fade-up" data-delay="150">
            <div class="process-step-num">04</div>
            <h3 class="process-step-title">Optimize</h3>
            <p class="process-step-desc">
              Continuous weekly A/B testing of ad creatives, landing page copy, schema enhancements and conversion rate levers.
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- [06] INDUSTRIES / NICHES (ALL 6) -->
    <section id="industries" class="section" aria-labelledby="niche-title">
      <div class="shell">
        <div class="section-head text-center max-w-3xl mx-auto" data-reveal="fade-up">
          <span class="eyebrow">[04] : INDUSTRIES</span>
          <h2 id="niche-title" class="title">Niches we know inside-out.</h2>
          <p class="subtitle">
            We don't do everything for everyone. We go deep on a few verticals so your campaigns benefit from years of pattern recognition.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          
          <div class="niche-card" data-reveal="fade-up">
            <div class="niche-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg></div>
            <h3 class="niche-title">D2C Brands</h3>
            <p class="niche-desc">Shopify design, speed optimization, high ROAS ad campaign integrations and customer retention systems.</p>
          </div>

          <div class="niche-card" data-reveal="fade-up" data-delay="50">
            <div class="niche-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg></div>
            <h3 class="niche-title">Dental &amp; Healthcare</h3>
            <p class="niche-desc">Local SEO solutions, medical lead generation, Google map pack placements and patient bookings.</p>
          </div>

          <div class="niche-card" data-reveal="fade-up" data-delay="100">
            <div class="niche-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
            <h3 class="niche-title">Real Estate</h3>
            <p class="niche-desc">High-converting lead landing pages, hyper-local Meta ad funnels and automated CRM lead capture.</p>
          </div>

          <div class="niche-card" data-reveal="fade-up">
            <div class="niche-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10M6 10h10"/></svg></div>
            <h3 class="niche-title">Education &amp; Coaching</h3>
            <p class="niche-desc">Course enrollment funnels, Google Search ad dominance, webinar registration pages and local academy SEO.</p>
          </div>

          <div class="niche-card" data-reveal="fade-up" data-delay="50">
            <div class="niche-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></div>
            <h3 class="niche-title">Local Services</h3>
            <p class="niche-desc">Google My Business 3-Pack rank acceleration, high-intent local landing pages and call tracking.</p>
          </div>

          <div class="niche-card" data-reveal="fade-up" data-delay="100">
            <div class="niche-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg></div>
            <h3 class="niche-title">B2B Enterprises</h3>
            <p class="niche-desc">Account-based LinkedIn campaigns, technical whitepaper funnels, custom web portals and organic pipeline SEO.</p>
          </div>

        </div>
      </div>
    </section>

    <!-- [07] RESULTS NUMBERS -->
    <section id="results" class="section bg-slate-50 border-y border-slate-200/60" aria-labelledby="results-title">
      <div class="shell">
        <div class="section-head text-center max-w-3xl mx-auto" data-reveal="fade-up">
          <span class="eyebrow">[05] : RESULTS</span>
          <h2 id="results-title" class="title">Numbers that move P&amp;Ls, not just dashboards.</h2>
          <p class="subtitle">A snapshot of recent client outcomes. Case studies available on request after our first call.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          
          <div class="metric-card" data-reveal="fade-up">
            <div class="metric-val">+318%</div>
            <p class="metric-desc">Qualified Leads for a leading dental clinic in 4 months of local SEO &amp; ads.</p>
          </div>

          <div class="metric-card" data-reveal="fade-up" data-delay="50">
            <div class="metric-val">-47%</div>
            <p class="metric-desc">Cost Per Lead for a luxury real estate developer on Meta funnel ads.</p>
          </div>

          <div class="metric-card" data-reveal="fade-up" data-delay="100">
            <div class="metric-val">2.9x</div>
            <p class="metric-desc">ROAS Return for an e-commerce wellness brand scaling on Shopify.</p>
          </div>

          <div class="metric-card" data-reveal="fade-up" data-delay="150">
            <div class="metric-val">Top 3</div>
            <p class="metric-desc">Google Ranking across 14 high-volume commercial keywords in under 90 days.</p>
          </div>

        </div>
      </div>
    </section>

    <!-- [08] SELECTED WORK & PORTFOLIO -->
    <section id="our-work" class="section" aria-labelledby="work-title">
      <div class="shell">
        <div class="section-head text-center max-w-3xl mx-auto" data-reveal="fade-up">
          <span class="eyebrow">[05A] : SELECTED WORK &amp; PORTFOLIO</span>
          <h2 id="work-title" class="title">Real websites. Engineered for commercial dominance.</h2>
          <p class="subtitle">
            Explore verified production web applications and growth systems engineered by Inrank Technologies for Pune, India and international clients.
          </p>
          <div class="mt-4">
            <a href="/our-work.html" class="btn btn-secondary">
              <span>Explore All 10 Projects</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          
          <!-- Project 1: CyTOS Machines Pune -->
          <div class="portfolio-showcase-card" data-reveal="fade-up">
            <div class="showcase-img-wrap">
              <img src="/portfolio/screenshots/cytos.webp" alt="CyTOS Machines Pune" class="showcase-img" />
              <div class="showcase-badge">Industrial CNC Machinery</div>
            </div>
            <div class="showcase-body">
              <div class="showcase-domain">cytos.in</div>
              <h3 class="showcase-title">CyTOS Machines Pune - High-Speed Industrial Machinery &amp; CNC Portal</h3>
              <p class="showcase-text">Custom full-stack web portal, technical SEO architecture, server-side speed optimization, and B2B RFQ quotation funnel.</p>
              <div class="showcase-metrics">
                <div class="metric-pill">0.6s Load Speed</div>
                <div class="metric-pill">#1 Google Rank</div>
                <div class="metric-pill">4.2x RFQs</div>
              </div>
              <a href="/case-studies/cytos.html" class="showcase-link">
                <span>View Full Case Study</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>

          <!-- Project 2: Fludio Water Solutions -->
          <div class="portfolio-showcase-card" data-reveal="fade-up" data-delay="50">
            <div class="showcase-img-wrap">
              <img src="/portfolio/screenshots/fludio.webp" alt="Fludio Water Solutions" class="showcase-img" />
              <div class="showcase-badge">Luxury Architecture</div>
            </div>
            <div class="showcase-body">
              <div class="showcase-domain">fludio.in</div>
              <h3 class="showcase-title">Fludio Water Solutions - Architectural Fountains &amp; Aquatic Engineering</h3>
              <p class="showcase-text">Luxury portfolio showcase, responsive mobile catalog, local Pune SEO, and automated lead capture funnels.</p>
              <div class="showcase-metrics">
                <div class="metric-pill">98/100 Core Vitals</div>
                <div class="metric-pill">3.1x Bookings</div>
                <div class="metric-pill">+318% Leads</div>
              </div>
              <a href="/case-studies/fludio.html" class="showcase-link">
                <span>View Full Case Study</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>

          <!-- Project 3: HIRAGRAFIX™ -->
          <div class="portfolio-showcase-card" data-reveal="fade-up" data-delay="100">
            <div class="showcase-img-wrap">
              <img src="/portfolio/screenshots/hiragrafix.webp" alt="HIRAGRAFIX" class="showcase-img" />
              <div class="showcase-badge">Packaging &amp; Print</div>
            </div>
            <div class="showcase-body">
              <div class="showcase-domain">hiragrafix.com</div>
              <h3 class="showcase-title">HIRAGRAFIX™ - Corporate Printing, Packaging &amp; Merchandising</h3>
              <p class="showcase-text">Enterprise B2B product catalog, multi-tier quotation funnel, and commercial B2B search optimization.</p>
              <div class="showcase-metrics">
                <div class="metric-pill">140+ RFQs/mo</div>
                <div class="metric-pill">-65% Bounce Rate</div>
                <div class="metric-pill">+520% Leads</div>
              </div>
              <a href="/case-studies/hiragrafix.html" class="showcase-link">
                <span>View Full Case Study</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- [09] CASE STUDIES (SUBSTANTIATED OUTCOMES - ALL 3) -->
    <section id="case-studies" class="section bg-slate-50 border-y border-slate-200/60" aria-labelledby="cases-title">
      <div class="shell">
        <div class="section-head text-center max-w-3xl mx-auto" data-reveal="fade-up">
          <span class="eyebrow">[05B] : EVIDENCE &amp; PROOF</span>
          <h2 id="cases-title" class="title">Substantiated outcomes. Not empty marketing adjectives.</h2>
          <p class="subtitle">
            In accordance with Inrank's Pune Growth Strategy, we replace vague superlatives with measured baselines, concrete work delivered, duration and verifiable data snapshots.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          
          <!-- Case 1 -->
          <div class="case-card" data-reveal="fade-up">
            <div class="case-tag">Local SEO · Pune Healthcare &amp; Dental Clinic · 4 Months</div>
            <h3 class="case-title">+318% Qualified Patient Leads &amp; 47% Lower Acquisition Cost</h3>
            <div class="case-block">
              <div class="case-label">Baseline:</div>
              <div class="case-desc">18 monthly inquiries, ₹1,420 CPL, poor Map 3-pack visibility.</div>
            </div>
            <div class="case-block">
              <div class="case-label">Work Delivered:</div>
              <div class="case-desc">Optimized Google Business Profile, rebuilt medical service schemas, local citation syndication, and high-intent Google Search ad funnel.</div>
            </div>
            <div class="case-outcome">
              <span class="outcome-badge">Outcome:</span>
              <span class="outcome-text">84 verified monthly patient inquiries, ₹752 CPL, #1 rank in 3-Pack across 12 Pune pincodes.</span>
            </div>
          </div>

          <!-- Case 2 -->
          <div class="case-card" data-reveal="fade-up" data-delay="50">
            <div class="case-tag">E-Commerce &amp; Paid Ads · D2C Wellness &amp; Nutrition · 3 Months</div>
            <h3 class="case-title">Scaled Blended ROAS from 1.6x to 3.4x with Sub-Second Storefront</h3>
            <div class="case-block">
              <div class="case-label">Baseline:</div>
              <div class="case-desc">1.6x blended ROAS, 4.2s store load time, high cart abandonment.</div>
            </div>
            <div class="case-block">
              <div class="case-label">Work Delivered:</div>
              <div class="case-desc">Migrated to headless Shopify architecture, sub-second TTFB, implemented Meta CAPI server-side tracking, and creative retention sprints.</div>
            </div>
            <div class="case-outcome">
              <span class="outcome-badge">Outcome:</span>
              <span class="outcome-text">3.4x blended ROAS, 0.8s mobile load time, 42% increase in checkout completions.</span>
            </div>
          </div>

          <!-- Case 3 -->
          <div class="case-card" data-reveal="fade-up" data-delay="100">
            <div class="case-tag">B2B Growth &amp; Lead Gen · Industrial Automation &amp; Logistics · 90 Days</div>
            <h3 class="case-title">2.9x Pipeline Return &amp; Elimination of ₹1.4L Wasted Clicks</h3>
            <div class="case-block">
              <div class="case-label">Baseline:</div>
              <div class="case-desc">High ad spend with zero qualified sales pipeline, unqualified clicks.</div>
            </div>
            <div class="case-block">
              <div class="case-label">Work Delivered:</div>
              <div class="case-desc">Negative keyword scrub, account restructuring, dedicated high-converting landing pages, and automated WhatsApp CRM webhook.</div>
            </div>
            <div class="case-outcome">
              <span class="outcome-badge">Outcome:</span>
              <span class="outcome-text">2.9x qualified pipeline return, ₹1,40,000 wasted ad spend eliminated, 38 enterprise RFQs generated.</span>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- [10] COMPARISON MATRIX TABLE -->
    <section id="comparison" class="section" aria-labelledby="compare-title">
      <div class="shell">
        <div class="section-head text-center max-w-3xl mx-auto" data-reveal="fade-up">
          <span class="eyebrow">[05C] : COMPETITIVE TRANSPARENCY</span>
          <h2 id="compare-title" class="title">How Inrank outperforms legacy Pune agencies.</h2>
          <p class="subtitle">
            Based on our Pune digital agency landscape benchmark (comparing architectures across Awrange, Webvantik, Ad2Brand and Opstech). Here is how our engineering-first model protects your capital:
          </p>
        </div>

        <div class="comparison-table-wrap mt-12" data-reveal="fade-up">
          <table class="comparison-table">
            <thead>
              <tr>
                <th class="th-feat">Growth Capability</th>
                <th class="th-other">Traditional Pune Agencies</th>
                <th class="th-other">Freelance Contractors</th>
                <th class="th-inrank">Inrank Technologies</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="td-feat">
                  <strong>Web Architecture &amp; Speed</strong>
                  <span>Performance, load times, Core Web Vitals</span>
                </td>
                <td class="td-other"><span class="cross-icon">✕</span> WordPress theme bloat, 3.5s+ load times, 30-40 plugins.</td>
                <td class="td-other"><span class="cross-icon">✕</span> Inconsistent code quality, lack of security &amp; scalability.</td>
                <td class="td-inrank"><span class="check-icon">✓</span> <strong>Sub-second static / headless builds, 95+ Core Web Vitals, zero bloat.</strong></td>
              </tr>
              <tr>
                <td class="td-feat">
                  <strong>Search &amp; AI Visibility (GEO)</strong>
                  <span>Rankings on Google + ChatGPT &amp; Perplexity</span>
                </td>
                <td class="td-other"><span class="cross-icon">✕</span> Keyword stuffing, outdated meta tags, no AI/LLM readiness.</td>
                <td class="td-other"><span class="cross-icon">✕</span> Basic on-page SEO without structured data or entities.</td>
                <td class="td-inrank"><span class="check-icon">✓</span> <strong>Dual Google &amp; AI Engine Optimization (Perplexity, ChatGPT, Gemini, Claude).</strong></td>
              </tr>
              <tr>
                <td class="td-feat">
                  <strong>Accountability &amp; Team</strong>
                  <span>Who actually manages your account</span>
                </td>
                <td class="td-other"><span class="cross-icon">✕</span> Account managers acting as middlemen between you and junior interns.</td>
                <td class="td-other"><span class="cross-icon">✕</span> High single-point-of-failure risk, communication drops.</td>
                <td class="td-inrank"><span class="check-icon">✓</span> <strong>Senior growth engineers doing the actual work. Direct WhatsApp line.</strong></td>
              </tr>
              <tr>
                <td class="td-feat">
                  <strong>Paid Media &amp; ROAS Tracking</strong>
                  <span>Attribution, CAPI &amp; conversion setup</span>
                </td>
                <td class="td-other"><span class="cross-icon">✕</span> Vanishing agency fees, vanity impressions, no CAPI tracking.</td>
                <td class="td-other"><span class="cross-icon">✕</span> Boost post mindset, lacking full-funnel attribution.</td>
                <td class="td-inrank"><span class="check-icon">✓</span> <strong>First-party server-side tracking (Meta CAPI + GTM), P&amp;L-first reporting.</strong></td>
              </tr>
              <tr>
                <td class="td-feat">
                  <strong>Turnaround Time</strong>
                  <span>Delivery SLA &amp; launch speed</span>
                </td>
                <td class="td-other"><span class="cross-icon">✕</span> 6 to 12 weeks for standard informational websites.</td>
                <td class="td-other"><span class="cross-icon">✕</span> Unpredictable delays and timeline drift.</td>
                <td class="td-inrank"><span class="check-icon">✓</span> <strong>7-day landing pages, 14-day production websites. Guaranteed SLA.</strong></td>
              </tr>
              <tr>
                <td class="td-feat">
                  <strong>IP &amp; Asset Ownership</strong>
                  <span>Source code, accounts &amp; hosting</span>
                </td>
                <td class="td-other"><span class="cross-icon">✕</span> Proprietary CMS lock-in or hostage code.</td>
                <td class="td-other"><span class="cross-icon">✕</span> Disorganized assets, lost credentials.</td>
                <td class="td-inrank"><span class="check-icon">✓</span> <strong>100% client ownership from day one. Full Git repository and ad account access.</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- [11] ABOUT & SENIOR MODEL -->
    <section id="about" class="section bg-slate-900 text-white" aria-labelledby="about-title">
      <div class="shell">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-7" data-reveal="fade-up">
            <span class="eyebrow text-emerald-400">[06] : ABOUT</span>
            <h2 id="about-title" class="title text-white">We're a small, senior growth team focused on performance.</h2>
            <p class="subtitle text-slate-300 mt-4">
              Inrank Technologies was built on a simple idea: most agencies talk about activity, very few are accountable for outcomes. We do the opposite. Every engagement starts with the business metric you actually care about and ends with the work that moves it.
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div class="about-pill-card">
                <div class="pill-check">✓</div>
                <div>
                  <strong>Senior strategists on every account</strong>
                  <p>Zero junior hand-offs. You talk to who writes your code.</p>
                </div>
              </div>
              <div class="about-pill-card">
                <div class="pill-check">✓</div>
                <div>
                  <strong>Weekly performance syncs, monthly reviews</strong>
                  <p>Actionable pipeline reports, not 40-page PDFs.</p>
                </div>
              </div>
              <div class="about-pill-card">
                <div class="pill-check">✓</div>
                <div>
                  <strong>100% asset &amp; account ownership</strong>
                  <p>You own all code, domains, analytics &amp; ad accounts.</p>
                </div>
              </div>
              <div class="about-pill-card">
                <div class="pill-check">✓</div>
                <div>
                  <strong>No lock-in contracts after month one</strong>
                  <p>Month-to-month retainers. We earn our keep every 30 days.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-5" data-reveal="fade-up" data-delay="100">
            <div class="founder-card">
              <div class="founder-avatar-wrap">
                <img src="/images/lead-growth-engineer.webp" alt="Senior Growth Engineer" class="founder-img" />
                <div class="founder-badge">Senior Growth Engineer</div>
              </div>
              <blockquote class="founder-quote">
                “When you hire Inrank, you don't get passed to an account manager who learned marketing last month. You work directly with the senior engineer who writes your code and optimizes your campaigns.”
              </blockquote>
              <div class="founder-info">
                <strong>Senior Growth Engineer &amp; Technical Founder</strong>
                <span>Inrank Technologies · Baner, Pune</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- [12] TESTIMONIALS (WHAT FOUNDERS ACTUALLY SAY - ALL 4) -->
    <section class="section bg-slate-50 border-b border-slate-200/60" aria-labelledby="testimonial-title">
      <div class="shell">
        <div class="section-head text-center max-w-3xl mx-auto" data-reveal="fade-up">
          <span class="eyebrow">[07] : SOCIAL PROOF</span>
          <h2 id="testimonial-title" class="title">What founders actually say.</h2>
          <p class="subtitle">Direct feedback from founders and managing directors who rely on Inrank Technologies for predictable digital growth.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          
          <!-- Testimonial 1 -->
          <div class="testimonial-card" data-reveal="fade-up">
            <div class="testi-stars">★★★★★</div>
            <p class="testi-text">
              “Inrank rebuilt our Shopify store and rewired our Meta Ads in three weeks. Our ROAS went from 1.6x to 3.4x in the next quarter. They're now our default growth team.”
            </p>
            <div class="testi-author">
              <div class="author-avatar mono-green">RK</div>
              <div>
                <strong class="author-name">Rhea Kulkarni</strong>
                <span class="author-role">Founder, Wellness D2C Brand</span>
              </div>
            </div>
          </div>

          <!-- Testimonial 2 -->
          <div class="testimonial-card" data-reveal="fade-up" data-delay="50">
            <div class="testi-stars">★★★★★</div>
            <p class="testi-text">
              “We went from 18 monthly leads to 84 in four months at a 47% lower cost per lead. The dashboards are sharp and the team is responsive on WhatsApp. Easily the best agency decision we've made.”
            </p>
            <div class="testi-author">
              <div class="author-avatar mono-navy">SK</div>
              <div>
                <strong class="author-name">Dr. Snehal Kulkarni</strong>
                <span class="author-role">Medical Director, Pune Healthcare Clinic</span>
              </div>
            </div>
          </div>

          <!-- Testimonial 3 -->
          <div class="testimonial-card" data-reveal="fade-up">
            <div class="testi-stars">★★★★★</div>
            <p class="testi-text">
              “Inrank engineered a custom industrial machinery portal that instantly gave us category authority. We went from zero organic B2B inquiries to ranking #1 for CNC router manufacturing in Pune. The lead quality is phenomenal.”
            </p>
            <div class="testi-author">
              <div class="author-avatar mono-blue">VS</div>
              <div>
                <strong class="author-name">Vikram Shinde</strong>
                <span class="author-role">Managing Director, CyTOS Machines Pune</span>
              </div>
            </div>
          </div>

          <!-- Testimonial 4 -->
          <div class="testimonial-card" data-reveal="fade-up" data-delay="50">
            <div class="testi-stars">★★★★★</div>
            <p class="testi-text">
              “Unlike other Pune agencies that throw buzzwords at you, Inrank's technical approach to Google Ads eliminated ₹1.4L in wasted spend within 30 days. Their engineering rigor is unmatched.”
            </p>
            <div class="testi-author">
              <div class="author-avatar mono-purple">RP</div>
              <div>
                <strong class="author-name">Rajesh Patel</strong>
                <span class="author-role">COO, Logistics &amp; Enterprise Solutions</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- [13] LEAD MAGNET -->
    <section class="section" aria-labelledby="magnet-title">
      <div class="shell">
        <div class="lead-magnet-card" data-reveal="fade-up">
          <div class="magnet-body">
            <span class="magnet-badge">Free Pune Agency Lead Magnet</span>
            <h2 id="magnet-title" class="magnet-title">Download the 2026 Pune SEO &amp; AI Search Growth Checklist</h2>
            <p class="magnet-desc">
              The exact 45-point checklist we use to audit Core Web Vitals, Google Maps 3-Pack prominence, entity schemas and ChatGPT / Perplexity search citations. No generic fluff.
            </p>
            <form class="magnet-form" onsubmit="event.preventDefault(); alert('Checklist dispatched to your email! (Preview mode)');">
              <input type="email" placeholder="Enter your business email" required class="magnet-input" />
              <button type="submit" class="btn btn-primary">Get Free Checklist</button>
            </form>
            <div class="magnet-guarantee">
              <span>100% Free</span> · <span>Instant PDF Access</span> · <span>Zero Spam Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- [14] PRICING & ADD-ONS (ALL 3 TIERS + ADD-ONS TABLE) -->
    <section id="pricing" class="section bg-slate-50 border-y border-slate-200/60" aria-labelledby="pricing-title">
      <div class="shell">
        <div class="section-head text-center max-w-3xl mx-auto" data-reveal="fade-up">
          <span class="eyebrow">[08] : TRANSPARENT PACKAGES &amp; PRICING</span>
          <h2 id="pricing-title" class="title">Fixed-Price Websites &amp; Growth Retainers. No Surprises.</h2>
          <p class="subtitle">
            Every website includes free cloud hosting, SSL, domain, business emails, and 365 days of post-launch support. SEO and social media plans are simple monthly retainers with zero lock-in contracts.
          </p>
        </div>

        <!-- 3 Packages Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 items-stretch">
          
          <!-- Starter Tier -->
          <div class="pricing-card" data-reveal="fade-up">
            <div class="pricing-header">
              <h3 class="tier-name">Starter Website</h3>
              <div class="tier-price">₹11,999 <span class="price-cycle">one-time</span></div>
              <p class="tier-desc">Live in about 7 days. High-speed custom landing page or 5-page business site.</p>
            </div>
            <ul class="tier-features">
              <li><span class="check">✓</span> 5 Custom-Engineered Web Pages</li>
              <li><span class="check">✓</span> Sub-Second Mobile Load Speed Guarantee</li>
              <li><span class="check">✓</span> Free Domain, SSL &amp; Business Email Setup</li>
              <li><span class="check">✓</span> Basic On-Page SEO &amp; Search Console Ingestion</li>
              <li><span class="check">✓</span> WhatsApp Chat &amp; Lead Capture Integration</li>
              <li><span class="check">✓</span> 365 Days Technical Support &amp; Updates</li>
            </ul>
            <div class="pricing-foot">
              <a href="/contact.html?plan=starter" class="btn btn-secondary w-full">Choose Starter</a>
            </div>
          </div>

          <!-- Growth Tier (Featured) -->
          <div class="pricing-card is-featured" data-reveal="fade-up" data-delay="50">
            <div class="featured-ribbon">Most Popular</div>
            <div class="pricing-header">
              <h3 class="tier-name">Business Growth</h3>
              <div class="tier-price">₹16,999 <span class="price-cycle">one-time</span></div>
              <p class="tier-desc">Live in about 14 days. Complete commercial conversion engine with SEO.</p>
            </div>
            <ul class="tier-features">
              <li><span class="check">✓</span> Up to 10 Custom Performance Pages</li>
              <li><span class="check">✓</span> Advanced Technical SEO &amp; Local Schema Markup</li>
              <li><span class="check">✓</span> Google Maps / GBP 3-Pack Optimization</li>
              <li><span class="check">✓</span> 95+ PageSpeed Guarantee on Mobile &amp; Desktop</li>
              <li><span class="check">✓</span> Blog Architecture with 2 Sample Articles</li>
              <li><span class="check">✓</span> GA4 Analytics &amp; Meta Pixel Conversion Events</li>
              <li><span class="check">✓</span> Priority WhatsApp Desk &amp; 365-Day Warranty</li>
            </ul>
            <div class="pricing-foot">
              <a href="/contact.html?plan=growth" class="btn btn-primary w-full">Choose Business Growth</a>
            </div>
          </div>

          <!-- Enterprise Tier -->
          <div class="pricing-card" data-reveal="fade-up" data-delay="100">
            <div class="pricing-header">
              <h3 class="tier-name">Enterprise Scale</h3>
              <div class="tier-price">₹24,999 <span class="price-cycle">one-time</span></div>
              <p class="tier-desc">Live in 14-21 days. Full web portal, custom Shopify store, or SaaS app.</p>
            </div>
            <ul class="tier-features">
              <li><span class="check">✓</span> Unlimited Custom Pages or Shopify Store Setup</li>
              <li><span class="check">✓</span> Generative Engine Optimization (GEO) Ingestion</li>
              <li><span class="check">✓</span> Meta CAPI Server-Side Tracking Pipeline</li>
              <li><span class="check">✓</span> Custom CRM Webhook &amp; Instant Email/SMS Leads</li>
              <li><span class="check">✓</span> High-Intent Landing Page A/B Testing Setup</li>
              <li><span class="check">✓</span> Dedicated Senior Growth Engineer &amp; 24/7 SLA</li>
              <li><span class="check">✓</span> 100% Full Codebase &amp; Intellectual Property Ownership</li>
            </ul>
            <div class="pricing-foot">
              <a href="/contact.html?plan=enterprise" class="btn btn-secondary w-full">Choose Enterprise</a>
            </div>
          </div>

        </div>

        <!-- Transparent Add-Ons & Renewals Table -->
        <div class="mt-16" data-reveal="fade-up">
          <div class="text-center max-w-xl mx-auto mb-8">
            <h4 class="text-xl font-bold text-slate-900">Transparent Add-Ons &amp; Renewals</h4>
            <p class="text-sm text-slate-600 mt-1">Clear à la carte pricing for ongoing maintenance, retainers, and specialized speed boosts.</p>
          </div>
          <div class="addons-grid">
            <div class="addon-item">
              <div class="addon-info">
                <strong>Annual Hosting, Domain &amp; SSL Maintenance</strong>
                <span>High-performance Cloudflare CDN, daily backups, uptime SLA</span>
              </div>
              <div class="addon-price">₹4,999 / year</div>
            </div>
            <div class="addon-item">
              <div class="addon-info">
                <strong>Monthly SEO Growth Retainer</strong>
                <span>Weekly sprints, content cluster pipelines, technical fixes, zero lock-in</span>
              </div>
              <div class="addon-price">₹14,999 / month</div>
            </div>
            <div class="addon-item">
              <div class="addon-info">
                <strong>Meta &amp; Instagram Ads Retainer</strong>
                <span>CAPI tracking, ad creative testing, conversion optimization (+ ad spend)</span>
              </div>
              <div class="addon-price">₹12,999 / month</div>
            </div>
            <div class="addon-item">
              <div class="addon-info">
                <strong>Google Search &amp; Performance Max Retainer</strong>
                <span>Negative keyword audits, high-intent bidding, landing page testing (+ ad spend)</span>
              </div>
              <div class="addon-price">₹14,999 / month</div>
            </div>
            <div class="addon-item">
              <div class="addon-info">
                <strong>High-Authority SEO Content Writing</strong>
                <span>1,200+ word technical articles, semantic entity optimization, original research</span>
              </div>
              <div class="addon-price">₹1,200 / article</div>
            </div>
            <div class="addon-item">
              <div class="addon-info">
                <strong>Speed &amp; Core Web Vitals SLA (Existing Sites)</strong>
                <span>One-time performance re-architecture to guarantee 90+ PageSpeed</span>
              </div>
              <div class="addon-price">₹4,999 one-time</div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- [15] FAQ (ALL 6 QUESTIONS & DETAILED ANSWERS) -->
    <section id="faq" class="section" aria-labelledby="faq-title">
      <div class="shell max-w-4xl mx-auto">
        <div class="section-head text-center" data-reveal="fade-up">
          <span class="eyebrow">[08] : FAQ</span>
          <h2 id="faq-title" class="title">Quick answers before the call.</h2>
          <p class="subtitle">Direct answers to the most common questions Pune business owners ask us.</p>
        </div>

        <div class="faq-accordion mt-12" data-reveal="fade-up">
          
          <details class="faq-item" open>
            <summary class="faq-question">
              <span>How fast can you launch our website?</span>
              <svg class="faq-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
            </summary>
            <div class="faq-answer">
              <p>Our standard performance-first conversion landing pages go live in 7 days and robust custom marketing websites or Shopify store setups are typically completed and launched within 14 trading days.</p>
            </div>
          </details>

          <details class="faq-item">
            <summary class="faq-question">
              <span>Do you handle ads, SEO and the website together?</span>
              <svg class="faq-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
            </summary>
            <div class="faq-answer">
              <p>Yes. By coordinating search advertising, on-page technical SEO and conversion-focused web architecture under one roof, we eliminate cross-vendor friction and ensure your messaging, landing page and ad spend are 100% aligned.</p>
            </div>
          </details>

          <details class="faq-item">
            <summary class="faq-question">
              <span>What is the minimum engagement?</span>
              <svg class="faq-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
            </summary>
            <div class="faq-answer">
              <p>For websites, there is a one-time fixed price with zero recurring lock-in. For monthly growth retainers (SEO or Paid Ads), our agreements run month-to-month after an initial 90-day execution period.</p>
            </div>
          </details>

          <details class="faq-item">
            <summary class="faq-question">
              <span>How soon will we see results from SEO?</span>
              <svg class="faq-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
            </summary>
            <div class="faq-answer">
              <p>While full competitive organic ranking typically takes 90 to 120 days, our local Google Maps 3-pack optimization and technical schema fixes often produce measurable ranking improvements within the first 30 days.</p>
            </div>
          </details>

          <details class="faq-item">
            <summary class="faq-question">
              <span>Will I own my ad accounts, analytics and code?</span>
              <svg class="faq-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
            </summary>
            <div class="faq-answer">
              <p>Absolutely. From day one, all ad accounts, Google Analytics properties, domain registrations and codebase repositories remain 100% your commercial property. We operate as administrative partners with zero hostage clauses.</p>
            </div>
          </details>

          <details class="faq-item">
            <summary class="faq-question">
              <span>Do you work with businesses globally?</span>
              <svg class="faq-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
            </summary>
            <div class="faq-answer">
              <p>Yes. While our engineering lab is headquartered in Baner, Pune, we actively manage web development, international SEO and paid performance campaigns for clients across the United States, Europe, Australia, and the Middle East.</p>
            </div>
          </details>

        </div>
      </div>
    </section>

    <!-- [16] CONTACT & BANER LAB -->
    <section id="contact" class="section bg-slate-900 text-white" aria-labelledby="contact-title">
      <div class="shell">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <!-- Contact Left: Office & Info -->
          <div class="lg:col-span-5" data-reveal="fade-up">
            <span class="eyebrow text-emerald-400">[09] : LET'S TALK</span>
            <h2 id="contact-title" class="title text-white">Book your free 30-minute growth call.</h2>
            <p class="subtitle text-slate-300 mt-4">
              No pitch deck. We'll audit your funnel live, share two or three opportunities you can act on this week, whether you hire us or not.
            </p>

            <div class="contact-channels mt-8">
              <a href="https://wa.me/918788823182" target="_blank" rel="noopener" class="channel-card">
                <div class="channel-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
                <div>
                  <div class="channel-label">WhatsApp Desk</div>
                  <strong class="channel-val">+91 87888 23182</strong>
                </div>
              </a>

              <a href="tel:+917038612280" class="channel-card">
                <div class="channel-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
                <div>
                  <div class="channel-label">Call Direct</div>
                  <strong class="channel-val">+91 70386 12280</strong>
                </div>
              </a>

              <a href="mailto:inranktech@gmail.com" class="channel-card">
                <div class="channel-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></div>
                <div>
                  <div class="channel-label">Email Desk</div>
                  <strong class="channel-val">inranktech@gmail.com</strong>
                </div>
              </a>
            </div>

            <!-- Baner Map Iframe Embed -->
            <div class="mt-8 rounded-xl overflow-hidden border border-slate-800 shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121058.9283659223!2d73.78056545!3d18.5516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2becdc400b875%3A0xe4d830b53c155d88!2sBaner%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="180" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                title="Inrank Technologies Baner Pune Office">
              </iframe>
              <div class="p-3 bg-slate-950 text-xs text-slate-400 flex items-center justify-between">
                <span>📍 Baner Engineering Lab · Pune 411045</span>
                <span class="text-emerald-400 font-semibold">15-Min Response SLA</span>
              </div>
            </div>
          </div>

          <!-- Contact Right: Live Form -->
          <div class="lg:col-span-7" data-reveal="fade-up" data-delay="100">
            <div class="contact-form-card">
              <div class="form-head">
                <h3 class="form-title">Start a Project Consultation</h3>
                <p class="form-subtitle">Fill in the parameters below. A senior growth engineer will review your site and respond within 15 minutes.</p>
              </div>

              <form id="inrank-contact-form" action="/contact.php" method="POST" class="space-y-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="form-group">
                    <label for="name" class="form-label">Full Name *</label>
                    <input type="text" id="name" name="name" required placeholder="e.g. Vikram Shinde" class="form-input" />
                  </div>
                  <div class="form-group">
                    <label for="company" class="form-label">Business / Brand Name *</label>
                    <input type="text" id="company" name="company" required placeholder="e.g. CyTOS Machines" class="form-input" />
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="form-group">
                    <label for="email" class="form-label">Business Email *</label>
                    <input type="email" id="email" name="email" required placeholder="name@company.com" class="form-input" />
                  </div>
                  <div class="form-group">
                    <label for="phone" class="form-label">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" required placeholder="+91 98765 43210" class="form-input" />
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="form-group">
                    <label for="service" class="form-label">Primary Service Required *</label>
                    <select id="service" name="service" required class="form-select">
                      <option value="">Select a growth service</option>
                      <option value="Website Development">Website Development (₹11,999 - ₹24,999)</option>
                      <option value="SEO Services in Pune">SEO Services &amp; Google Map 3-Pack</option>
                      <option value="Google & Meta Ads PPC">Google Ads &amp; Meta Ads Management</option>
                      <option value="Shopify E-Commerce">Shopify / E-Commerce Development</option>
                      <option value="Generative Engine Optimization">Generative Engine Optimization (GEO / AI SEO)</option>
                      <option value="Full-Funnel Growth Retainer">Full-Funnel Digital Growth Retainer</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="budget" class="form-label">Estimated Budget</label>
                    <select id="budget" name="budget" class="form-select">
                      <option value="Under ₹25,000">Starter (Under ₹25,000)</option>
                      <option value="₹25,000 - ₹50,000">Growth (₹25,000 - ₹50,000)</option>
                      <option value="₹50,000 - ₹1,00,000">Scale (₹50,000 - ₹1,00,000)</option>
                      <option value="₹1,00,000+">Enterprise (₹1,00,000+)</option>
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <label for="message" class="form-label">Project Details / Goals</label>
                  <textarea id="message" name="message" rows="3" placeholder="Tell us about your current website, traffic numbers, or specific growth bottlenecks..." class="form-textarea"></textarea>
                </div>

                <button type="submit" id="submit-btn" class="btn btn-primary w-full btn-lg">
                  <span>Request Free Strategy Plan</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>

                <div class="form-footer-terms text-xs text-slate-400 text-center">
                  🔒 We respect your privacy. Zero spam guarantee. Direct senior engineer callback within 15 minutes.
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>

  </main>

  <!-- MULTI-COLUMN CORPORATE FOOTER -->
  <footer class="footer bg-slate-950 text-slate-400 border-t border-slate-800/80">
    <div class="shell py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        
        <!-- Brand Info -->
        <div class="lg:col-span-2">
          <a href="/" class="inline-block mb-4">
            <img src="/img/logo.png" alt="Inrank Technologies" class="h-9 w-auto" />
          </a>
          <p class="text-sm text-slate-400 leading-relaxed max-w-sm">
            Inrank Technologies is Pune’s premier performance-first digital growth partner. We engineer high-converting web applications, execute dominant SEO strategies, and scale profitable paid media campaigns.
          </p>
          <div class="mt-6 flex items-center gap-3">
            <a href="https://wa.me/918788823182" target="_blank" rel="noopener" class="social-icon-btn" aria-label="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </a>
            <a href="mailto:inranktech@gmail.com" class="social-icon-btn" aria-label="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
            <a href="tel:+918788823182" class="social-icon-btn" aria-label="Phone">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </a>
          </div>
        </div>

        <!-- Col 1: Engineering -->
        <div>
          <h5 class="footer-col-title">Engineering</h5>
          <ul class="footer-links">
            <li><a href="/services.html#pillar-2">Custom Web Development</a></li>
            <li><a href="/services.html#pillar-2">UI/UX Web Design</a></li>
            <li><a href="/services.html#pillar-2">Shopify Stores</a></li>
            <li><a href="/services.html#pillar-2">WordPress VIP</a></li>
            <li><a href="/services.html#pillar-2">Landing Pages</a></li>
          </ul>
        </div>

        <!-- Col 2: Search & Growth -->
        <div>
          <h5 class="footer-col-title">Search &amp; Growth</h5>
          <ul class="footer-links">
            <li><a href="/services.html#pillar-1">SEO Company in Pune</a></li>
            <li><a href="/services.html#pillar-1">Generative Engine (GEO)</a></li>
            <li><a href="/services.html#pillar-1">Google Maps 3-Pack</a></li>
            <li><a href="/services.html#pillar-3">Google Ads PPC</a></li>
            <li><a href="/services.html#pillar-3">Meta &amp; Instagram Ads</a></li>
          </ul>
        </div>

        <!-- Col 3: Company & Hubs -->
        <div>
          <h5 class="footer-col-title">Pune Service Hubs</h5>
          <ul class="footer-links">
            <li><a href="/contact.html">Baner Technical Lab</a></li>
            <li><a href="/contact.html">Hinjewadi IT Corridor</a></li>
            <li><a href="/contact.html">Wakad &amp; Pimple Saudagar</a></li>
            <li><a href="/contact.html">Kothrud &amp; Shivajinagar</a></li>
            <li><a href="/contact.html">Viman Nagar &amp; Kharadi</a></li>
          </ul>
        </div>

      </div>

      <div class="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <div>
          © 2026 Inrank Technologies. All rights reserved. 100% intellectual property &amp; source code ownership.
        </div>
        <div class="flex items-center gap-6">
          <a href="/privacy-policy.html" class="hover:text-slate-300">Privacy Policy</a>
          <a href="/terms-and-conditions.html" class="hover:text-slate-300">Terms of Service</a>
          <a href="/sitemap.xml" class="hover:text-slate-300">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Scripts -->
  <script src="/js/core.js"></script>
  <script src="/js/contact.js"></script>
  <script>
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  </script>
</body>
</html>`;

fs.writeFileSync('inrank2.0/index.html', html, 'utf8');
console.log('✓ inrank2.0/index.html successfully updated with complete 16 sections!');
