const fs = require('fs');

const raw = fs.readFileSync('pricing.html', 'utf8');

// Extract JSON-LD
const jsonLdMatch = raw.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
const jsonLd = jsonLdMatch ? jsonLdMatch[0] : '';

const pricingHtml = `<!doctype html>
<html lang="en">
<head>
  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-WLZ75BS8');</script>
  <!-- End Google Tag Manager -->

  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Website & SEO Packages in Pune | Transparent Fixed Pricing - Inrank</title>
  <meta name="description" content="Transparent, fixed-price website development and SEO packages in Pune starting from ₹11,999. Free hosting, SSL, domain, business emails, and 365 days support included. Zero lock-in contracts." />
  <link rel="canonical" href="https://www.inranktech.com/pricing.html" />
  <link rel="icon" type="image/png" href="/logo.png" />
  
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

  ${jsonLd}
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

          <a href="/pricing.html" class="nav-link active">Pricing</a>
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
          <a href="/" class="drawer-link">Home</a>
          <a href="/services.html" class="drawer-link">Services (All 27)</a>
          <a href="/pricing.html" class="drawer-link active">Packages &amp; Pricing</a>
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

    <!-- PRICING HERO -->
    <section class="hero-subpage">
      <div class="shell text-center">
        <span class="eyebrow">TRANSPARENT VALUE-BASED PACKAGES</span>
        <h1 class="display">Website &amp; SEO Packages in Pune</h1>
        <p class="lede max-w-3xl mx-auto">
          No hidden fees. No hostage code. Complete intellectual property ownership from day one. Every website includes high-performance cloud hosting, free SSL, business emails, and 365 days of active support.
        </p>
      </div>
    </section>

    <!-- [08] : TRANSPARENT PACKAGES & PRICING -->
    <section id="pricing" class="section py-16">
      <div class="shell">
        <div class="section-head text-center max-w-3xl mx-auto" data-reveal="fade-up">
          <span class="eyebrow">[08] : TRANSPARENT PACKAGES &amp; PRICING</span>
          <h2 class="title">Fixed-Price Websites &amp; Growth Retainers. No Surprises.</h2>
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

    <!-- [08] : FAQ -->
    <section id="faq" class="section bg-slate-50 border-y border-slate-200/60" aria-labelledby="faq-title">
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

    <!-- [09] : CONTACT FORM -->
    <section id="contact" class="section bg-slate-900 text-white" aria-labelledby="contact-title">
      <div class="shell max-w-4xl mx-auto">
        <div class="section-head text-center" data-reveal="fade-up">
          <span class="eyebrow text-emerald-400">[09] : GET STARTED</span>
          <h2 id="contact-title" class="title text-white">Book your free 30-minute growth call.</h2>
          <p class="subtitle text-slate-300">
            Tell us about your brand and what you want to achieve. A senior growth engineer will respond within 15 minutes.
          </p>
        </div>

        <div class="contact-form-card mt-10" data-reveal="fade-up">
          <form id="pricing-contact-form" action="/contact.php" method="POST" class="space-y-4">
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
                <label for="service" class="form-label">Selected Package / Retainer *</label>
                <select id="service" name="service" required class="form-select">
                  <option value="Starter Website (₹11,999)">Starter Website (₹11,999 one-time)</option>
                  <option value="Business Growth (₹16,999)" selected>Business Growth (₹16,999 one-time)</option>
                  <option value="Enterprise Scale (₹24,999)">Enterprise Scale (₹24,999 one-time)</option>
                  <option value="SEO Retainer (₹14,999/mo)">Monthly SEO Growth Retainer (₹14,999/mo)</option>
                  <option value="Google & Meta Ads Retainer">Google &amp; Meta Ads Retainer (₹12,999 - ₹14,999/mo)</option>
                </select>
              </div>
              <div class="form-group">
                <label for="budget" class="form-label">Estimated Budget</label>
                <select id="budget" name="budget" class="form-select">
                  <option value="Under ₹25,000">Under ₹25,000</option>
                  <option value="₹25,000 - ₹50,000" selected>₹25,000 - ₹50,000</option>
                  <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                  <option value="₹1,00,000+">₹1,00,000+</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="message" class="form-label">Project Scope / Current URL</label>
              <textarea id="message" name="message" rows="3" placeholder="Share your current website link or goals..." class="form-textarea"></textarea>
            </div>

            <button type="submit" class="btn btn-primary w-full btn-lg">
              <span>Request Free Strategy Plan</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </form>
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

fs.writeFileSync('inrank2.0/pricing.html', pricingHtml, 'utf8');
console.log('✓ inrank2.0/pricing.html written with complete pricing data!');

