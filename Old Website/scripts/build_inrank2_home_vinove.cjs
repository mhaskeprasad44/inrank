/**
 * Build Inrank 2.0 Homepage adhering 100% to Vinove UI Architecture.
 * Inter font, Emerald Green branding, Slate Navy neutrals, and full Inrank content.
 */
const fs = require('fs');
const path = require('path');

const targetPath = 'c:/Users/PrasadMhaske/Downloads/Anti Websites/Web/Inrank/inrank2.0/index.html';

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
  <link rel="icon" type="image/png" href="/img/logo.png" />
  <link rel="shortcut icon" type="image/png" href="/img/logo.png" />
  <link rel="apple-touch-icon" href="/img/logo.png" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.inranktech.com/" />
  <meta property="og:title" content="Inrank Technologies | Digital Marketing & Web Development Services in Pune" />
  <meta property="og:description" content="Inrank Technologies is Pune's leading digital marketing agency & web development company. We deliver SEO in Pune, website development, PPC and AI SEO." />
  <meta property="og:image" content="https://www.inranktech.com/images/service-seo.jpg" />

  <!-- Google Fonts: Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700;14..32,800&display=swap" rel="stylesheet">

  <!-- Vinove-Engineered Master CSS -->
  <link rel="stylesheet" href="/css/corporate.css" />
  <link rel="stylesheet" href="/css/nav.css" />
  <link rel="stylesheet" href="/css/footer-social.css" />

  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["LocalBusiness", "ProfessionalService"],
          "@id": "https://www.inranktech.com/#organization",
          "name": "Inrank Technologies",
          "alternateName": "Inrank Tech Pune",
          "image": "https://www.inranktech.com/img/logo.png",
          "url": "https://www.inranktech.com",
          "telephone": "+91 87888 23182",
          "priceRange": "₹11,999 - ₹35,000",
          "description": "Pune's Top-Ranked Performance Digital Marketing Agency & Web Development Company. Transparent fixed-price websites from ₹11,999, data-driven SEO, Generative Engine Optimization (GEO), and ROI-driven paid ads.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "FC Road, Shivaji Nagar",
            "addressLocality": "Pune",
            "addressRegion": "Maharashtra",
            "postalCode": "411005",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 18.5204,
            "longitude": 73.8567
          },
          "areaServed": [
            { "@type": "City", "name": "Pune" },
            { "@type": "Place", "name": "Baner, Pune" },
            { "@type": "Place", "name": "Hinjewadi, Pune" },
            { "@type": "Place", "name": "Wakad, Pune" },
            { "@type": "Place", "name": "Kharadi, Pune" },
            { "@type": "Place", "name": "Hadapsar, Pune" },
            { "@type": "Place", "name": "Viman Nagar, Pune" },
            { "@type": "Place", "name": "Kothrud, Pune" },
            { "@type": "Place", "name": "Pimpri-Chinchwad, Pune" },
            { "@type": "State", "name": "Maharashtra" }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "214",
            "bestRating": "5",
            "worstRating": "1"
          }
        }
      ]
    }
  </script>
</head>
<body>
  <!-- Top Scroll Progress Bar -->
  <div id="scroll-bar" role="progressbar" aria-label="Page reading progress" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>

  <!-- Skip Link for Accessibility -->
  <a class="skip-link" href="#main">Skip to main content</a>

  <!-- ══════════════════════════════════════════
       VINOVE FLOATING DOCK NAVIGATION
       ══════════════════════════════════════════ -->
  <nav id="nav" class="is-dark" aria-label="Main navigation">
    <div class="nav-bar">
      <!-- Inrank Brand Logo -->
      <a href="/" class="nav-logo" aria-label="Inrank Technologies home">
        <img loading="eager" fetchpriority="high" src="/img/logo.png" class="logo-white" alt="Inrank Technologies" width="160" height="36" style="filter: brightness(0) invert(1);">
        <img loading="eager" fetchpriority="high" src="/img/logo.png" class="logo-black" alt="Inrank Technologies" width="160" height="36">
      </a>

      <!-- Desktop Links -->
      <ul class="nav-links" role="list">
        <!-- Services Mega Dropdown -->
        <li class="nav-item" data-dropdown data-nav="services">
          <button class="nav-link" aria-expanded="false" aria-controls="drop-services" aria-haspopup="true">Services
            <svg class="nav-chev" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 4.5l4 3.5 4-3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <div class="nav-drop drop-mega" id="drop-services" role="region" aria-label="Services Directory">
            <div class="mega-grid-wrap">
              <div class="mega-rail">
                <span class="mega-rail-eyebrow">Digital Capabilities</span>
                <p class="mega-rail-title">Full-Stack Growth Engineering</p>
                <p class="mega-rail-text">We replace fragmented agencies with an accountable, high-performance growth engineering partner.</p>
                <a href="/services.html" class="mega-rail-cta">
                  <span>Explore all 27 services</span>
                  <svg viewBox="0 0 12 12" aria-hidden="true"><path d="M1 11L11 1M11 1H4M11 1V8"/></svg>
                </a>
              </div>
              <div class="mega-cards">
                <a href="/services.html#pillar-1" class="mega-co" style="--co:#009d49">
                  <span class="mega-co-logo">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                  </span>
                  <span class="mega-co-text">
                    <span class="mega-co-name">Search &amp; AI Discovery</span>
                    <span class="mega-co-tag">SEO in Pune, GEO &amp; Google 3-Pack</span>
                  </span>
                  <svg class="mega-co-arr" viewBox="0 0 12 12" aria-hidden="true"><path d="M1 11L11 1M11 1H4M11 1V8"/></svg>
                </a>
                <a href="/services.html#pillar-2" class="mega-co" style="--co:#102138">
                  <span class="mega-co-logo">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                  </span>
                  <span class="mega-co-text">
                    <span class="mega-co-name">High-Performance Web</span>
                    <span class="mega-co-tag">Custom Next.js, WordPress &amp; E-Commerce</span>
                  </span>
                  <svg class="mega-co-arr" viewBox="0 0 12 12" aria-hidden="true"><path d="M1 11L11 1M11 1H4M11 1V8"/></svg>
                </a>
                <a href="/services.html#pillar-3" class="mega-co" style="--co:#047857">
                  <span class="mega-co-logo">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </span>
                  <span class="mega-co-text">
                    <span class="mega-co-name">Performance Marketing</span>
                    <span class="mega-co-tag">Google Ads, Meta &amp; High-ROI Funnels</span>
                  </span>
                  <svg class="mega-co-arr" viewBox="0 0 12 12" aria-hidden="true"><path d="M1 11L11 1M11 1H4M11 1V8"/></svg>
                </a>
                <a href="/services.html#pillar-4" class="mega-co" style="--co:#081424">
                  <span class="mega-co-logo">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg>
                  </span>
                  <span class="mega-co-text">
                    <span class="mega-co-name">Brand &amp; CRO Optimization</span>
                    <span class="mega-co-tag">UI/UX, Brand Identity &amp; High-Conversion</span>
                  </span>
                  <svg class="mega-co-arr" viewBox="0 0 12 12" aria-hidden="true"><path d="M1 11L11 1M11 1H4M11 1V8"/></svg>
                </a>
              </div>
            </div>
          </div>
        </li>

        <!-- Pricing -->
        <li class="nav-item">
          <a href="/pricing.html" class="nav-link" data-nav="pricing">Pricing</a>
        </li>

        <!-- Our Work -->
        <li class="nav-item">
          <a href="/our-work.html" class="nav-link" data-nav="work">Our Work</a>
        </li>

        <!-- Case Studies -->
        <li class="nav-item">
          <a href="/case-studies.html" class="nav-link" data-nav="cases">Case Studies</a>
        </li>

        <!-- About Dropdown -->
        <li class="nav-item" data-dropdown data-nav="about">
          <button class="nav-link" aria-expanded="false" aria-controls="drop-about" aria-haspopup="true">About
            <svg class="nav-chev" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 4.5l4 3.5 4-3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <div class="nav-drop drop-simple" id="drop-about" role="region" aria-label="About Inrank">
            <div class="mega-grid-wrap">
              <div class="simple-cards">
                <a href="/about.html" class="drop-row">
                  <span class="drop-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </span>
                  <span class="drop-row-text">
                    <span class="drop-name">Leadership &amp; Founder</span>
                    <span class="drop-desc">Prasad Mhaske and our Baner Engineering Lab.</span>
                  </span>
                </a>
                <a href="/about.html#operating-model" class="drop-row">
                  <span class="drop-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m10 15 5-3-5-3v6Z"/></svg>
                  </span>
                  <span class="drop-row-text">
                    <span class="drop-name">The Inrank Standard</span>
                    <span class="drop-desc">5-7 day sprints, transparent fixed pricing.</span>
                  </span>
                </a>
                <a href="/about.html#baner-lab" class="drop-row">
                  <span class="drop-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  </span>
                  <span class="drop-row-text">
                    <span class="drop-name">Baner, Pune Office</span>
                    <span class="drop-desc">Direct technical consultation on FC Road / Baner.</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </li>

        <!-- Contact -->
        <li class="nav-item">
          <a href="/contact.html" class="nav-link" data-nav="contact">Contact</a>
        </li>
      </ul>

      <!-- CTA -->
      <a href="/contact.html" class="nav-cta">Get Free Audit</a>

      <!-- Mobile Hamburger -->
      <button id="nav-burger" class="nav-burger" aria-label="Open mobile menu" aria-expanded="false" aria-controls="mob">
        <span class="nav-burger-box"></span>
      </button>
    </div>
  </nav>

  <!-- Navigation Scrim Backdrop -->
  <div id="nav-scrim" aria-hidden="true"></div>

  <!-- Mobile Drawer Menu -->
  <div id="mob" aria-hidden="true">
    <div class="mob-hd">
      <a href="/" class="mob-logo" aria-label="Inrank Technologies">
        <img src="/img/logo.png" alt="Inrank Technologies" width="140" height="32" style="filter: brightness(0) invert(1);">
      </a>
      <button id="mob-x" class="mob-x" aria-label="Close menu">✕</button>
    </div>
    <nav class="mob-body">
      <button class="mob-acc-btn" aria-expanded="false" aria-controls="mob-services">
        Services <span>▾</span>
      </button>
      <div id="mob-services" class="mob-acc-body">
        <a href="/services.html#pillar-1" class="mob-co"><span class="mob-co-name">Search &amp; AI Discovery</span><span class="mob-co-cat">SEO &amp; GEO</span></a>
        <a href="/services.html#pillar-2" class="mob-co"><span class="mob-co-name">High-Performance Web</span><span class="mob-co-cat">Web Development</span></a>
        <a href="/services.html#pillar-3" class="mob-co"><span class="mob-co-name">Performance Marketing</span><span class="mob-co-cat">Google &amp; Meta Ads</span></a>
        <a href="/services.html#pillar-4" class="mob-co"><span class="mob-co-name">Brand &amp; CRO</span><span class="mob-co-cat">UI/UX &amp; Conversions</span></a>
        <a href="/services.html" class="mob-co" style="color:var(--terra);"><span class="mob-co-name">View All 27 Services →</span></a>
      </div>

      <a href="/pricing.html" class="mob-link">Pricing</a>
      <a href="/our-work.html" class="mob-link">Our Work</a>
      <a href="/case-studies.html" class="mob-link">Case Studies</a>

      <button class="mob-acc-btn" aria-expanded="false" aria-controls="mob-about">
        About <span>▾</span>
      </button>
      <div id="mob-about" class="mob-acc-body">
        <a href="/about.html" class="mob-co"><span class="mob-co-name">Leadership Profile</span></a>
        <a href="/about.html#baner-lab" class="mob-co"><span class="mob-co-name">Baner, Pune Lab</span></a>
      </div>

      <a href="/contact.html" class="mob-link">Contact</a>
      <a href="/contact.html" class="mob-cta">Request Strategy Consultation</a>
    </nav>
  </div>

  <!-- ══════════════════════════════════════════
       MAIN CONTENT
       ══════════════════════════════════════════ -->
  <main id="main">
    <!-- 1. VINOVE IMAGE HERO SECTION -->
    <section class="hero image-hero home-image-hero" aria-labelledby="home-title">
      <div class="hero-media" aria-hidden="true" style="background: radial-gradient(circle at 75% 30%, rgba(0, 157, 73, 0.38) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(16, 33, 56, 0.8) 0%, transparent 60%), #081424;">
        <div style="position:absolute;inset:0;background-image:linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);background-size:40px 40px;opacity:0.4;"></div>
      </div>
      <div class="hero-shade" aria-hidden="true"></div>
      <div class="shell hero-content">
        <div class="hero-copy">
          <p class="eyebrow" data-reveal>Pune's Top-Ranked Performance Digital Marketing &amp; Web Agency</p>
          <h1 class="display" id="home-title" data-reveal>Building what ambitious businesses need <em>next.</em></h1>
          <p class="lede" data-reveal>Inrank creates, grows and operates digital capabilities that help Pune organisations dominate search rankings, convert high-value customers, build ultra-fast web platforms and scale revenue.</p>
          <div class="button-row" data-reveal>
            <a class="button primary" href="/services.html">Explore All 27 Services</a>
            <a class="button secondary" href="/contact.html">Request Strategy Consultation</a>
          </div>
        </div>
        <p class="hero-note" data-reveal><span>Operating idea</span> Technical precision. Transparent pricing from ₹11,999. Measurable organic rank dominance.</p>
      </div>
    </section>

    <!-- 2. CLIENT LOGO MARQUEE SCROLLER -->
    <section class="marquee-band" aria-label="Clients and Brands Built by Inrank">
      <div class="marquee-band-header">
        <p>Trusted by ambitious brands &amp; enterprises across Pune, Mumbai &amp; India</p>
      </div>
      <div class="marquee-container">
        <div class="marquee-track">
          <!-- 10 Client Logos -->
          <div class="client-logo-item"><img src="/img/client-logos/greytothegreen.png" alt="Greytothegreen Landscape Architecture" loading="lazy"></div>
          <div class="client-logo-item"><img src="/img/client-logos/shetkarifoodstuff.png" alt="Shetkari Foodstuff Exports" loading="lazy"></div>
          <div class="client-logo-item"><img src="/img/client-logos/riituinstitution.png" alt="Riitu Institution" loading="lazy"></div>
          <div class="client-logo-item"><img src="/img/client-logos/fludio.png" alt="Fludio Visual Production" loading="lazy"></div>
          <div class="client-logo-item"><img src="/img/client-logos/vasroventures.png" alt="Vasro Ventures Real Estate" loading="lazy"></div>
          <div class="client-logo-item"><img src="/img/client-logos/cytos.png" alt="Cytos Diagnostics" loading="lazy"></div>
          <div class="client-logo-item"><img src="/img/client-logos/hcpnest.png" alt="HCP Nest Healthcare" loading="lazy"></div>
          <div class="client-logo-item"><img src="/img/client-logos/hiragrafix.png" alt="Hira Grafix" loading="lazy"></div>
          <div class="client-logo-item"><img src="/img/client-logos/dravyafinancial.png" alt="Dravya Financial Services" loading="lazy"></div>
          <div class="client-logo-item"><img src="/img/client-logos/orthopedicanklefootspecialist.png" alt="Dr. Amit Patil Orthopedic" loading="lazy"></div>
          <!-- Duplicate for seamless infinite marquee loop -->
          <div class="client-logo-item"><img src="/img/client-logos/greytothegreen.png" alt="Greytothegreen Landscape Architecture" loading="lazy"></div>
          <div class="client-logo-item"><img src="/img/client-logos/shetkarifoodstuff.png" alt="Shetkari Foodstuff Exports" loading="lazy"></div>
          <div class="client-logo-item"><img src="/img/client-logos/riituinstitution.png" alt="Riitu Institution" loading="lazy"></div>
          <div class="client-logo-item"><img src="/img/client-logos/fludio.png" alt="Fludio Visual Production" loading="lazy"></div>
          <div class="client-logo-item"><img src="/img/client-logos/vasroventures.png" alt="Vasro Ventures Real Estate" loading="lazy"></div>
          <div class="client-logo-item"><img src="/img/client-logos/cytos.png" alt="Cytos Diagnostics" loading="lazy"></div>
          <div class="client-logo-item"><img src="/img/client-logos/hcpnest.png" alt="HCP Nest Healthcare" loading="lazy"></div>
          <div class="client-logo-item"><img src="/img/client-logos/hiragrafix.png" alt="Hira Grafix" loading="lazy"></div>
          <div class="client-logo-item"><img src="/img/client-logos/dravyafinancial.png" alt="Dravya Financial Services" loading="lazy"></div>
          <div class="client-logo-item"><img src="/img/client-logos/orthopedicanklefootspecialist.png" alt="Dr. Amit Patil Orthopedic" loading="lazy"></div>
        </div>
      </div>
    </section>

    <!-- 3. VINOVE MANIFESTO SECTION -->
    <section class="manifesto" aria-labelledby="relevance-title">
      <div class="shell manifesto-grid">
        <div>
          <p class="section-kicker">Why Inrank matters</p>
          <h2 class="section-title" id="relevance-title">Ambition moves faster than capability.</h2>
        </div>
        <div>
          <p class="statement" data-reveal>Growth creates a gap between what organisations want to achieve and what traditional agencies can reliably build, rank and convert. <span>Inrank closes that gap with senior engineering.</span></p>
          <div class="manifesto-copy" data-reveal>
            <p>Most Pune businesses get trapped between freelance web designers who don't understand SEO and traditional marketing agencies that charge bloated ₹40,000/mo retainers with zero ranking accountability or transparent timelines.</p>
            <p>Inrank operates differently. We pair senior search architects with full-stack developers in Baner, delivering fixed-price web deployments in 5-7 days and data-backed organic rankings that actually bring phone calls and qualified pipeline.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. VINOVE OPERATING FRAMEWORK -->
    <section class="operating" aria-labelledby="model-title">
      <div class="shell">
        <div class="operating-head">
          <div>
            <p class="section-kicker">The value-creation model</p>
            <h2 class="section-title" id="model-title">From search intent to predictable business revenue.</h2>
          </div>
          <p class="section-copy">Inrank combines technical SEO rigor with web engineering discipline. Every client deployment is built for sub-second speed, indexed for AI search, and tuned for commercial inquiry conversion.</p>
        </div>
        <div class="operating-model" aria-label="Four-stage growth engineering framework">
          <article class="model-step" data-reveal>
            <span class="num">01</span>
            <h3>Sense</h3>
            <p>Technical SEO audits, keyword gap analysis, and user commercial intent mapping across Pune and national target markets.</p>
          </article>
          <article class="model-step" data-reveal>
            <span class="num">02</span>
            <h3>Build</h3>
            <p>High-speed, custom web engineering scoring 95+ on Google Lighthouse with sub-second LCP load times and structured schema.</p>
          </article>
          <article class="model-step" data-reveal>
            <span class="num">03</span>
            <h3>Rank</h3>
            <p>Dominant Google 3-Pack local SEO, AI citation networks, and high-ROI Google Ads that place you at the top of high-intent search.</p>
          </article>
          <article class="model-step" data-reveal>
            <span class="num">04</span>
            <h3>Compound</h3>
            <p>Conversion rate optimization (CRO), analytics telemetry, and continuous authority building that scales organic customer acquisition.</p>
          </article>
        </div>
        <div class="button-row" style="margin-top:3rem;">
          <a class="button secondary" href="/pricing.html" style="color:var(--text-strong);border-color:var(--line);">View Fixed-Price Packages (From ₹11,999)</a>
        </div>
      </div>
    </section>

    <!-- 5. CAPABILITIES DIRECTORY (VINOVE COMPANY ROW ARCHITECTURE) -->
    <section class="capabilities-section" aria-labelledby="cap-title">
      <div class="shell">
        <div>
          <p class="section-kicker">End-to-End Execution</p>
          <h2 class="section-title" id="cap-title">Four core pillars. 27 specialised services.</h2>
          <p class="section-copy">Each service is delivered by senior engineers and search specialists with direct accountability for timelines, rankings and measurable business outcomes.</p>
        </div>

        <div class="cap-rows">
          <!-- Pillar 1 -->
          <article class="cap-row" data-reveal>
            <div class="cap-outcome">
              <span>Outcome</span>
              <strong>+318%</strong>
            </div>
            <div class="cap-badge">
              <div class="cap-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </div>
              <div>
                <strong style="font-size:0.875rem;color:var(--text-strong);">Pillar 01</strong>
                <span style="font-size:0.75rem;color:var(--muted);display:block;">Search Dominance</span>
              </div>
            </div>
            <div class="cap-body">
              <h3>Search Engine &amp; AI Discovery Engineering</h3>
              <p>Dominate Google search results and AI answer engines. We execute high-authority local SEO in Pune, Generative Engine Optimization (GEO), Google Business Profile 3-pack optimization, and authoritative backlink building.</p>
              <div class="cap-chips">
                <span class="cap-chip">SEO Company Pune</span>
                <span class="cap-chip">AI SEO &amp; GEO</span>
                <span class="cap-chip">GMB 3-Pack</span>
                <span class="cap-chip">Technical Audits</span>
                <span class="cap-chip">AI Citations</span>
              </div>
            </div>
            <a href="/services.html#pillar-1" class="cap-action" aria-label="Explore Search & AI Discovery Services">→</a>
          </article>

          <!-- Pillar 2 -->
          <article class="cap-row" data-reveal>
            <div class="cap-outcome">
              <span>Speed SLA</span>
              <strong>&lt; 0.8s</strong>
            </div>
            <div class="cap-badge">
              <div class="cap-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <div>
                <strong style="font-size:0.875rem;color:var(--text-strong);">Pillar 02</strong>
                <span style="font-size:0.75rem;color:var(--muted);display:block;">Web Engineering</span>
              </div>
            </div>
            <div class="cap-body">
              <h3>High-Performance Web &amp; E-Commerce Development</h3>
              <p>Hand-crafted web applications and digital storefronts engineered for raw speed, security and 100% Core Web Vitals compliance. No sluggish multi-megabyte page builders or vulnerable bloated plugins.</p>
              <div class="cap-chips">
                <span class="cap-chip">Custom Website Dev</span>
                <span class="cap-chip">E-Commerce Stores</span>
                <span class="cap-chip">WordPress Engineering</span>
                <span class="cap-chip">Landing Page Design</span>
                <span class="cap-chip">Web Maintenance</span>
              </div>
            </div>
            <a href="/services.html#pillar-2" class="cap-action" aria-label="Explore Web Development Services">→</a>
          </article>

          <!-- Pillar 3 -->
          <article class="cap-row" data-reveal>
            <div class="cap-outcome">
              <span>Return</span>
              <strong>4.8x ROAS</strong>
            </div>
            <div class="cap-badge">
              <div class="cap-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <div>
                <strong style="font-size:0.875rem;color:var(--text-strong);">Pillar 03</strong>
                <span style="font-size:0.75rem;color:var(--muted);display:block;">Paid Acquisition</span>
              </div>
            </div>
            <div class="cap-body">
              <h3>Performance Marketing &amp; Paid Acquisition</h3>
              <p>Precision-targeted paid advertising campaigns engineered to acquire commercial B2B and consumer inquiries at the lowest customer acquisition cost (CAC). Built with negative keyword filtering and automated bid management.</p>
              <div class="cap-chips">
                <span class="cap-chip">Google Search Ads</span>
                <span class="cap-chip">Meta Ads (FB/Insta)</span>
                <span class="cap-chip">LinkedIn B2B Ads</span>
                <span class="cap-chip">Retargeting Funnels</span>
                <span class="cap-chip">Conversion Tracking</span>
              </div>
            </div>
            <a href="/services.html#pillar-3" class="cap-action" aria-label="Explore Performance Marketing Services">→</a>
          </article>

          <!-- Pillar 4 -->
          <article class="cap-row" data-reveal>
            <div class="cap-outcome">
              <span>Conversion</span>
              <strong>+142%</strong>
            </div>
            <div class="cap-badge">
              <div class="cap-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg>
              </div>
              <div>
                <strong style="font-size:0.875rem;color:var(--text-strong);">Pillar 04</strong>
                <span style="font-size:0.75rem;color:var(--muted);display:block;">Brand &amp; CRO</span>
              </div>
            </div>
            <div class="cap-body">
              <h3>Brand Architecture &amp; Conversion Rate Optimization</h3>
              <p>Executive UI/UX design, visual identities, corporate logos, and high-converting landing pages that transform traffic into revenue. Every element is tested to remove cognitive friction and drive immediate action.</p>
              <div class="cap-chips">
                <span class="cap-chip">UI/UX Design</span>
                <span class="cap-chip">Corporate Logo Design</span>
                <span class="cap-chip">Brand Identity</span>
                <span class="cap-chip">CRO Testing</span>
                <span class="cap-chip">Content Strategy</span>
              </div>
            </div>
            <a href="/services.html#pillar-4" class="cap-action" aria-label="Explore Brand & CRO Services">→</a>
          </article>
        </div>
      </div>
    </section>

    <!-- 6. VINOVE PROOF SECTION (Evidence, Not Headlines) -->
    <section class="proof" aria-labelledby="proof-title">
      <div class="shell proof-grid">
        <div>
          <p class="section-kicker">Evidence, not the headline</p>
          <h2 class="section-title" id="proof-title">A record of building and operating.</h2>
          <p class="section-copy">Longevity and tangible client outcomes test engineering judgement. Inrank has helped over 200+ Pune businesses scale their organic reach, replace bloated retainers, and dominate local commercial search.</p>
          
          <div class="badge-row" aria-label="Selected recognitions and credentials">
            <div class="badge-item"><span style="font-weight:800;color:var(--terra);font-size:1.1rem;">Google</span><span>Certified Partner</span></div>
            <div class="badge-item"><span style="font-weight:800;color:#1877f2;font-size:1.1rem;">Meta</span><span>Certified Business</span></div>
            <div class="badge-item"><span style="font-weight:800;color:var(--text-strong);font-size:1.1rem;">4.9 / 5.0</span><span>Google Reviews</span></div>
            <div class="badge-item badge-item--text"><strong>Baner Engineering Lab</strong><span>FC Road &amp; Baner, Pune</span></div>
          </div>
          <p class="credential-link" style="margin-top:2rem;"><a class="arrow-link" href="/case-studies.html">View our complete client case study record</a></p>
        </div>

        <div class="proof-facts" data-reveal>
          <div class="proof-fact">
            <strong>+318%</strong>
            <span>Average Organic Traffic Growth in 90 Days</span>
          </div>
          <div class="proof-fact">
            <strong>&lt; 0.8s</strong>
            <span>Google Core Web Vitals Sub-Second LCP Load Time</span>
          </div>
          <div class="proof-fact">
            <strong>214+</strong>
            <span>Verified Client Reviews &amp; Direct Commercial Leads</span>
          </div>
          <div class="proof-fact">
            <strong>₹11,999</strong>
            <span>Transparent Starting Price with Zero Lock-in Retainers</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. FEATURED LIVE CLIENT PORTALS (WORK SHOWCASE) -->
    <section class="work-section" aria-labelledby="work-title">
      <div class="shell">
        <div style="display:flex;flex-direction:column;gap:1rem;">
          <p class="section-kicker">Case Records</p>
          <h2 class="section-title" id="work-title">Live platforms engineered to outrank.</h2>
          <p class="section-copy">Inspect our live client deployments across Pune and national markets. Every platform is custom-built with zero bloat and optimized for search ranking from day one.</p>
        </div>

        <div class="work-grid">
          <!-- Project 1 -->
          <article class="work-card" data-reveal>
            <div class="work-card-media">
              <img src="/img/client-logos/greytothegreen.png" alt="Greytothegreen Landscape Architecture">
              <span class="work-card-pill">99 PageSpeed Score</span>
            </div>
            <div class="work-card-body">
              <span style="font-size:0.6875rem;font-weight:700;color:var(--terra);text-transform:uppercase;letter-spacing:0.08em;">Real Estate &amp; Architecture</span>
              <h3>Greytothegreen — Sustainable Architecture Portal</h3>
              <p>Engineered a minimalist, high-speed corporate portfolio. Organically outranks competitive Pune design firms for landscape architecture with sub-second performance.</p>
            </div>
            <div class="work-card-footer">
              <span style="font-size:0.8125rem;font-weight:700;color:var(--text-strong);">+340% Inquiries in 60 Days</span>
              <a href="/case-studies.html#greytothegreen" class="arrow-link">View Case Study</a>
            </div>
          </article>

          <!-- Project 2 -->
          <article class="work-card" data-reveal>
            <div class="work-card-media">
              <img src="/img/client-logos/shetkarifoodstuff.png" alt="Shetkari Foodstuff Agro Exports">
              <span class="work-card-pill">0.7s LCP Load Time</span>
            </div>
            <div class="work-card-body">
              <span style="font-size:0.6875rem;font-weight:700;color:var(--terra);text-transform:uppercase;letter-spacing:0.08em;">Agro-Export &amp; E-Commerce</span>
              <h3>Shetkari Foodstuff — Export E-Commerce Infrastructure</h3>
              <p>Replaced a legacy slow WordPress portal with a high-speed e-commerce solution with international currency conversion and automated WhatsApp inquiry routing.</p>
            </div>
            <div class="work-card-footer">
              <span style="font-size:0.8125rem;font-weight:700;color:var(--text-strong);">₹18L+ Export GMV</span>
              <a href="/case-studies.html#shetkarifoodstuff" class="arrow-link">View Case Study</a>
            </div>
          </article>

          <!-- Project 3 -->
          <article class="work-card" data-reveal>
            <div class="work-card-media">
              <img src="/img/client-logos/riituinstitution.png" alt="Riitu Institution">
              <span class="work-card-pill">#1 Local Rank</span>
            </div>
            <div class="work-card-body">
              <span style="font-size:0.6875rem;font-weight:700;color:var(--terra);text-transform:uppercase;letter-spacing:0.08em;">Education &amp; Training</span>
              <h3>Riitu Institution — Student Admissions Platform</h3>
              <p>Structured local SEO citations and GEO indexing across Pune educational hubs. Tripled organic enrollment applications across Kothrud, Baner and PCMC.</p>
            </div>
            <div class="work-card-footer">
              <span style="font-size:0.8125rem;font-weight:700;color:var(--text-strong);">14 Top-3 Pune Rankings</span>
              <a href="/case-studies.html#riituinstitution" class="arrow-link">View Case Study</a>
            </div>
          </article>

          <!-- Project 4 -->
          <article class="work-card" data-reveal>
            <div class="work-card-media">
              <img src="/img/client-logos/cytos.png" alt="Cytos Diagnostics">
              <span class="work-card-pill">4.2x Appointment Booking</span>
            </div>
            <div class="work-card-body">
              <span style="font-size:0.6875rem;font-weight:700;color:var(--terra);text-transform:uppercase;letter-spacing:0.08em;">Healthcare &amp; Clinical</span>
              <h3>Cytos Diagnostics — Pathology &amp; Test Booking Portal</h3>
              <p>Clean HIPAA-conscious healthcare UI with automated test selection, WhatsApp appointment confirmation, and Google 3-Pack domination in Shivaji Nagar.</p>
            </div>
            <div class="work-card-footer">
              <span style="font-size:0.8125rem;font-weight:700;color:var(--text-strong);">4.2x Direct Patient Inquiries</span>
              <a href="/case-studies.html#cytos" class="arrow-link">View Case Study</a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- 8. TRANSPARENT PRICING ARCHITECTURE -->
    <section class="pricing-section" aria-labelledby="pricing-title">
      <div class="shell">
        <div style="text-align:center;max-width:760px;margin:0 auto;">
          <p class="section-kicker">Transparent Pricing Architecture</p>
          <h2 class="section-title" id="pricing-title">Fixed-price sprints. Zero lock-in retainers.</h2>
          <p class="section-copy" style="margin:0 auto;">Every package includes 100% source code ownership, mobile-first design, speed optimization, technical SEO tags, and direct senior engineering support in Baner, Pune.</p>
        </div>

        <div class="pricing-grid">
          <!-- Tier 1 -->
          <article class="pricing-card" data-reveal>
            <span class="pricing-tag">Speed Sprint</span>
            <h3>Starter Sprint</h3>
            <p class="pricing-sub">For local businesses, clinics &amp; consultancies needing an immediate, high-ranking professional digital footprint.</p>
            <div class="pricing-price-wrap">
              <span class="pricing-price">₹11,999</span>
              <span class="pricing-period">/ fixed one-time</span>
            </div>
            <ul class="pricing-features">
              <li class="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>5-7 Day Guaranteed Turnaround</span>
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Up to 5 Custom Engineered Pages</span>
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Google Lighthouse 90+ Score</span>
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Full Technical SEO &amp; Schema Meta</span>
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>WhatsApp Instant Inquiry Routing</span>
              </li>
            </ul>
            <a class="button secondary" href="/contact.html?plan=starter">Select Starter Sprint</a>
          </article>

          <!-- Tier 2 (Featured) -->
          <article class="pricing-card featured" data-reveal>
            <span class="pricing-tag">Most Popular in Pune</span>
            <h3>Growth Scale</h3>
            <p class="pricing-sub">Our flagship deployment for ambitious SMEs and service companies ready to outrank direct competitors.</p>
            <div class="pricing-price-wrap">
              <span class="pricing-price">₹18,999</span>
              <span class="pricing-period">/ fixed one-time</span>
            </div>
            <ul class="pricing-features">
              <li class="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Up to 10 Custom Speed-Engineered Pages</span>
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Full Local SEO &amp; Google 3-Pack Audit</span>
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Dynamic Blog / CMS Publishing System</span>
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Google Analytics 4 &amp; Heatmap Telemetry</span>
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Sub-Second Google Core Web Vitals Guarantee</span>
              </li>
            </ul>
            <a class="button primary" href="/contact.html?plan=growth">Deploy Growth Scale</a>
          </article>

          <!-- Tier 3 -->
          <article class="pricing-card" data-reveal>
            <span class="pricing-tag">Complete Domination</span>
            <h3>Market Domination</h3>
            <p class="pricing-sub">Full-stack web platform engineering + comprehensive 90-day search ranking &amp; advertising acceleration sprint.</p>
            <div class="pricing-price-wrap">
              <span class="pricing-price">₹34,999</span>
              <span class="pricing-period">/ fixed one-time</span>
            </div>
            <ul class="pricing-features">
              <li class="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Unlimited Pages &amp; Full E-Commerce Stack</span>
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>GEO, AI Citations &amp; Knowledge Graph Setup</span>
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Complete Google Ads &amp; Meta Funnel Architecture</span>
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Bi-Weekly Direct Strategy Sessions with Prasad</span>
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>1 Year VIP Infrastructure &amp; Security Support</span>
              </li>
            </ul>
            <a class="button secondary" href="/contact.html?plan=domination">Scale Market Domination</a>
          </article>
        </div>

        <!-- Add-ons Matrix -->
        <div class="addons-wrap" data-reveal>
          <h4>Modular Capabilities &amp; Specialized Add-ons</h4>
          <div class="addons-grid">
            <div class="addon-card">
              <div><strong>Google 3-Pack Map Domination</strong><span>Complete GBP verification, citation sync &amp; local ranking</span></div>
              <span class="addon-price">₹4,999</span>
            </div>
            <div class="addon-card">
              <div><strong>Generative Engine Optimization (GEO)</strong><span>AI search citations in ChatGPT, Perplexity &amp; Google AI Overviews</span></div>
              <span class="addon-price">₹6,999</span>
            </div>
            <div class="addon-card">
              <div><strong>High-Authority Backlink Sprint</strong><span>15 contextual PR &amp; industry editorial mentions</span></div>
              <span class="addon-price">₹8,999</span>
            </div>
            <div class="addon-card">
              <div><strong>Speed Optimization &amp; LCP Fix</strong><span>Sub-second Core Web Vitals remediation for existing sites</span></div>
              <span class="addon-price">₹3,999</span>
            </div>
            <div class="addon-card">
              <div><strong>Google &amp; Meta Ads Funnel Setup</strong><span>Pixel tracking, conversion events &amp; high-intent ad creative</span></div>
              <span class="addon-price">₹5,999</span>
            </div>
            <div class="addon-card">
              <div><strong>Executive Brand Identity Kit</strong><span>Vector logo, typography rules, letterhead &amp; social assets</span></div>
              <span class="addon-price">₹4,499</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 9. COMPARISON MATRIX (Inrank vs Legacy Agencies) -->
    <section class="comparison-section" aria-labelledby="comp-title">
      <div class="shell">
        <div style="max-width:760px;">
          <p class="section-kicker">Comparative Analysis</p>
          <h2 class="section-title" id="comp-title">How Inrank outperforms legacy Pune agencies.</h2>
          <p class="section-copy">Most agencies sell vague hours and retainers. We deliver fixed outcomes, clean code ownership, and measurable ranking accountability.</p>
        </div>

        <div class="comp-table-box" data-reveal>
          <table class="inrank-compare-table">
            <thead>
              <tr>
                <th>Engineering Standard</th>
                <th class="highlight-col">Inrank Technologies</th>
                <th>Traditional Pune Agencies</th>
                <th>Freelance Web Designers</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Delivery Timeline</strong></td>
                <td class="highlight-col"><span class="comp-badge-good">✓ 5-7 Days Guaranteed</span></td>
                <td><span class="comp-badge-bad">✕ 6 to 12 Weeks</span></td>
                <td><span class="comp-badge-bad">✕ Unpredictable (Ghosting)</span></td>
              </tr>
              <tr>
                <td><strong>Pricing Transparency</strong></td>
                <td class="highlight-col"><span class="comp-badge-good">✓ Fixed From ₹11,999 (No Hidden Fees)</span></td>
                <td><span class="comp-badge-bad">✕ Opaque Quotes &amp; Monthly Lock-ins</span></td>
                <td><span class="comp-badge-bad">✕ Scope Creep Upcharges</span></td>
              </tr>
              <tr>
                <td><strong>Core Web Vitals Speed</strong></td>
                <td class="highlight-col"><span class="comp-badge-good">✓ Sub-Second (&lt; 0.8s LCP, 95+ Score)</span></td>
                <td><span class="comp-badge-bad">✕ 3.5s+ (Bloated Themes)</span></td>
                <td><span class="comp-badge-bad">✕ Not measured or understood</span></td>
              </tr>
              <tr>
                <td><strong>Code &amp; Asset Ownership</strong></td>
                <td class="highlight-col"><span class="comp-badge-good">✓ 100% Client Ownership (No Lock-in)</span></td>
                <td><span class="comp-badge-bad">✕ Proprietary Host Lock-in</span></td>
                <td><span class="comp-badge-bad">✕ Scattered / Lost Passwords</span></td>
              </tr>
              <tr>
                <td><strong>SEO &amp; GEO Architecture</strong></td>
                <td class="highlight-col"><span class="comp-badge-good">✓ Built-in Schema, Local 3-Pack &amp; AI Meta</span></td>
                <td><span class="comp-badge-bad">✕ Paid Extra as Separate Retainer</span></td>
                <td><span class="comp-badge-bad">✕ Basic Yoast Defaults Only</span></td>
              </tr>
              <tr>
                <td><strong>Direct Senior Access</strong></td>
                <td class="highlight-col"><span class="comp-badge-good">✓ Direct Contact with Lead Engineer</span></td>
                <td><span class="comp-badge-bad">✕ Account Manager Telephone Game</span></td>
                <td><span class="comp-badge-bad">✕ Inconsistent Single Person</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- 10. VINOVE PEOPLE & LOCAL BANER PRESENCE -->
    <section class="people-section" aria-labelledby="people-title">
      <div class="shell people-grid">
        <div class="people-portraits" aria-label="Inrank Technologies Baner Lab">
          <div style="background:var(--navy);border-radius:20px;padding:2.5rem;color:#fff;display:flex;flex-direction:column;gap:1.5rem;border:1px solid rgba(255,255,255,0.1);">
            <div style="display:flex;align-items:center;gap:16px;">
              <div style="width:64px;height:64px;border-radius:50%;background:var(--terra);display:flex;align-items:center;justify-content:center;font-size:1.5rem;font-weight:800;color:#fff;">PM</div>
              <div>
                <strong style="font-size:1.25rem;color:#fff;display:block;">Prasad Mhaske</strong>
                <span style="font-size:0.8125rem;color:rgba(255,255,255,0.7);">Founder &amp; Principal Search Architect</span>
              </div>
            </div>
            <p style="font-size:0.9375rem;line-height:1.65;color:rgba(255,255,255,0.85);font-style:italic;">
              "We built Inrank because Pune business owners were tired of paying agencies ₹40,000 every month for zero ranking accountability. We deliver fast code, transparent pricing, and measurable first-page Google domination."
            </p>
            <div style="padding-top:1rem;border-top:1px solid rgba(255,255,255,0.1);font-size:0.8125rem;color:rgba(255,255,255,0.6);">
              📍 Baner Engineering Lab · Shivaji Nagar · Pune, Maharashtra
            </div>
          </div>
        </div>

        <div>
          <p class="section-kicker">People who make the model real</p>
          <h2 class="section-title" id="people-title">Built by operators, senior engineers and search specialists.</h2>
          <p class="section-copy">Inrank creates room for Pune founders to work directly with hands-on technical leaders. No junior interns. No outsourced teams in tier-3 cities. Partners get accountable execution and measurable revenue progress.</p>
          <div class="pathways">
            <a class="pathway" href="/contact.html">
              <small>Partner</small>
              <span>Bring a web engineering, search ranking or paid customer acquisition challenge.</span>
              <b>↗</b>
            </a>
            <a class="pathway" href="https://wa.me/918788823182" target="_blank" rel="noopener noreferrer">
              <small>Direct WhatsApp Consultation</small>
              <span>Message Prasad directly at +91 87888 23182 for an immediate 15-min assessment.</span>
              <b>↗</b>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 11. VERIFIED TESTIMONIALS -->
    <section class="testi-section" aria-labelledby="testi-title">
      <div class="shell">
        <div style="max-width:760px;">
          <p class="section-kicker">Client Outcomes</p>
          <h2 class="section-title" id="testi-title">What founders actually say.</h2>
          <p class="section-copy">Independent feedback from managing directors, clinic heads and business owners across Pune who trusted Inrank with their digital growth.</p>
        </div>

        <div class="testi-grid">
          <!-- Review 1 -->
          <article class="testi-card" data-reveal>
            <div class="testi-stars">
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <p class="testi-quote">"Inrank built our corporate real estate portal in 6 days flat for ₹16,999. In two months our Google organic inquiries tripled across Baner and Wakad. Incomparable ROI compared to traditional Pune agencies."</p>
            <div class="testi-author">
              <div class="testi-avatar">VS</div>
              <div>
                <strong class="testi-name">Vikram Shinde</strong>
                <span class="testi-role">Managing Director, Vasro Real Estate</span>
              </div>
            </div>
          </article>

          <!-- Review 2 -->
          <article class="testi-card" data-reveal>
            <div class="testi-stars">
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <p class="testi-quote">"Most clinical websites in Pune are generic templates that load slowly. Inrank delivered a high-speed platform with automated patient appointment booking and Google 3-Pack rank 1 within 45 days."</p>
            <div class="testi-author">
              <div class="testi-avatar">AP</div>
              <div>
                <strong class="testi-name">Dr. Amit Patil</strong>
                <span class="testi-role">Chief Orthopedic Surgeon, Pune</span>
              </div>
            </div>
          </article>

          <!-- Review 3 -->
          <article class="testi-card" data-reveal>
            <div class="testi-stars">
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <p class="testi-quote">"We were struggling with low conversion from international food distributors. Inrank restructured our agro-export portal with clear catalog schema and localized keywords. Export leads are up 280%."</p>
            <div class="testi-author">
              <div class="testi-avatar">SR</div>
              <div>
                <strong class="testi-name">Santosh Rao</strong>
                <span class="testi-role">Director, Shetkari Foodstuff Exports</span>
              </div>
            </div>
          </article>

          <!-- Review 4 -->
          <article class="testi-card" data-reveal>
            <div class="testi-stars">
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <p class="testi-quote">"Working directly with Prasad rather than an account executive meant every feedback was implemented overnight. Our educational academy now dominates local searches in Pune."</p>
            <div class="testi-author">
              <div class="testi-avatar">NK</div>
              <div>
                <strong class="testi-name">Neeta Kulkarni</strong>
                <span class="testi-role">Academic Head, Riitu Institution</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- 12. FREQUENTLY ASKED QUESTIONS -->
    <section class="faq-section" aria-labelledby="faq-title">
      <div class="shell">
        <div style="text-align:center;max-width:760px;margin:0 auto;">
          <p class="section-kicker">Operational Clarity</p>
          <h2 class="section-title" id="faq-title">Frequently Asked Questions</h2>
          <p class="section-copy" style="margin:0 auto;">Direct answers on timelines, pricing, code ownership and our Pune engineering standards.</p>
        </div>

        <div class="faq-accordion" data-reveal>
          <div class="faq-item">
            <button class="faq-question">
              <span>How quickly can Inrank launch our custom website in Pune?</span>
              <svg class="faq-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="faq-answer">
              <p>Our standard Starter Sprint websites launch within 5 to 7 business days from asset handoff. Complex e-commerce platforms or custom Next.js web applications are delivered within 10 to 14 days. We work in dedicated agile sprints rather than dragging projects out across months.</p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question">
              <span>Do I own the full website code and assets, or am I locked in?</span>
              <svg class="faq-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="faq-answer">
              <p>You own 100% of your code, design assets, domain, and hosting accounts from day one. Inrank believes in zero client lock-in. If you ever choose to migrate or manage the platform in-house, everything is fully documented and cleanly transferred.</p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question">
              <span>How do you guarantee sub-second page speed and high Lighthouse scores?</span>
              <svg class="faq-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="faq-answer">
              <p>We build without bloated page-builders (like Elementor or Divi) that inject megabytes of unnecessary CSS and JS scripts. We use lean semantic HTML, modern responsive CSS, optimized WebP/AVIF imagery, and edge-cached Cloudflare infrastructure.</p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question">
              <span>What is Generative Engine Optimization (GEO) and why does it matter?</span>
              <svg class="faq-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="faq-answer">
              <p>GEO prepares your business for the shift toward AI-generated search results in ChatGPT, Google AI Overviews, and Perplexity. By structuring entity schemas, citation networks, and high-confidence data, we ensure AI engines cite your company when answering user queries.</p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question">
              <span>Are there any hidden monthly fees or recurring maintenance contracts?</span>
              <svg class="faq-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="faq-answer">
              <p>No. Our web development packages are fixed-price one-time investments. Ongoing SEO sprints, Google Ads management, or monthly support are completely optional and scoped transparently with zero long-term cancellation penalties.</p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question">
              <span>Can we meet in person at your Pune office?</span>
              <svg class="faq-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="faq-answer">
              <p>Yes. Our engineering laboratory is based in Baner / FC Road, Shivaji Nagar, Pune. You can schedule a direct technical strategy meeting with our principal architect Prasad Mhaske by submitting our contact form or calling +91 87888 23182.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 13. VINOVE CLOSING DUAL ACTION CARDS -->
    <section class="closing" aria-label="Next steps">
      <div class="shell closing-grid">
        <article class="closing-card">
          <span>For growing businesses</span>
          <h2>Build the capability your next stage needs.</h2>
          <p>Talk to Inrank about the right search ranking, web engineering or paid acquisition strategy for your commercial goals.</p>
          <a class="arrow-link" href="/contact.html">Start a conversation</a>
        </article>
        <article class="closing-card">
          <span>Direct Senior Consultation</span>
          <h2>Talk directly with our lead growth architect.</h2>
          <p>Schedule a 30-minute direct technical consultation with Prasad Mhaske at our Baner lab or over Google Meet.</p>
          <a class="arrow-link" href="https://wa.me/918788823182" target="_blank" rel="noopener noreferrer">Message on WhatsApp (+91 87888 23182)</a>
        </article>
      </div>
    </section>
  </main>

  <!-- ══════════════════════════════════════════
       VINOVE CORPORATE FOOTER
       ══════════════════════════════════════════ -->
  <footer class="site-footer">
    <div class="shell">
      <div class="footer-grid">
        <!-- Brand Summary -->
        <div class="footer-brand">
          <img src="/img/logo.png" alt="Inrank Technologies" width="160" height="36" style="filter: brightness(0) invert(1);">
          <p>Inrank Technologies is Pune's leading performance digital marketing agency &amp; web development company. Engineering search dominance, ultra-fast web platforms, and measurable commercial growth.</p>
          <div class="footer-social">
            <span class="footer-social-label">Connect</span>
            <a href="https://wa.me/918788823182" class="footer-social-link" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2M12.05 20.15C10.57 20.15 9.12 19.75 7.85 19L7.55 18.82L4.43 19.64L5.26 16.6L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.68 12.05 3.68C14.25 3.68 16.32 4.54 17.88 6.1C19.44 7.66 20.3 9.72 20.3 11.92C20.28 16.46 16.59 20.15 12.05 20.15Z"/></svg></a>
            <a href="tel:+918788823182" class="footer-social-link" aria-label="Phone"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></a>
            <a href="mailto:contact@inranktech.com" class="footer-social-link" aria-label="Email"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></a>
          </div>
        </div>

        <!-- Col 1: Capabilities -->
        <div class="footer-col">
          <p class="footer-col-title">Capabilities</p>
          <ul>
            <li><a href="/services.html#pillar-1">Search &amp; AI Discovery</a></li>
            <li><a href="/services.html#pillar-2">High-Performance Web</a></li>
            <li><a href="/services.html#pillar-3">Performance Marketing</a></li>
            <li><a href="/services.html#pillar-4">Brand Identity &amp; CRO</a></li>
            <li><a href="/services.html">All 27 Services</a></li>
          </ul>
        </div>

        <!-- Col 2: Packages -->
        <div class="footer-col">
          <p class="footer-col-title">Packages</p>
          <ul>
            <li><a href="/pricing.html">Starter Sprint (₹11,999)</a></li>
            <li><a href="/pricing.html">Growth Scale (₹18,999)</a></li>
            <li><a href="/pricing.html">Market Domination</a></li>
            <li><a href="/pricing.html#addons">Specialized Add-ons</a></li>
            <li><a href="/pricing.html#faq">Pricing FAQ</a></li>
          </ul>
        </div>

        <!-- Col 3: Proof -->
        <div class="footer-col">
          <p class="footer-col-title">Proof &amp; Work</p>
          <ul>
            <li><a href="/our-work.html">Featured Portals</a></li>
            <li><a href="/case-studies.html">Client Case Studies</a></li>
            <li><a href="/case-studies.html#greytothegreen">Greytothegreen Record</a></li>
            <li><a href="/case-studies.html#shetkarifoodstuff">Shetkari Foodstuff Record</a></li>
            <li><a href="/about.html">About Inrank</a></li>
          </ul>
        </div>

        <!-- Col 4: Pune Hubs -->
        <div class="footer-col">
          <p class="footer-col-title">Pune Service Hubs</p>
          <ul>
            <li><a href="/digital-marketing-agency-in-pune.html">Baner &amp; Balewadi</a></li>
            <li><a href="/website-design-company-in-pune.html">Hinjewadi Tech Hub</a></li>
            <li><a href="/digital-marketing-agency-in-pune.html">Wakad &amp; PCMC</a></li>
            <li><a href="/digital-marketing-agency-in-pune.html">Shivaji Nagar / FC Rd</a></li>
            <li><a href="/digital-marketing-agency-in-pune.html">Kharadi &amp; Viman Nagar</a></li>
          </ul>
        </div>
      </div>

      <!-- Bottom Legal Row -->
      <div class="footer-bottom">
        <p>&copy; <span id="footer-year">2026</span> Inrank Technologies Pune. All rights reserved.</p>
        <nav class="site-footer-legal" aria-label="Legal navigation">
          <a href="/privacy-policy.html">Privacy Policy</a>
          <span aria-hidden="true">·</span>
          <a href="/terms-and-conditions.html">Terms &amp; Conditions</a>
          <span aria-hidden="true">·</span>
          <a href="/contact.html">Contact</a>
        </nav>
      </div>
    </div>
  </footer>

  <!-- Vinove Core Scripts -->
  <script src="/js/core.js"></script>
</body>
</html>
`;

fs.writeFileSync(targetPath, html, 'utf8');
console.log('Successfully generated Inrank 2.0 Homepage adhering 100% to Vinove UI Architecture!');

