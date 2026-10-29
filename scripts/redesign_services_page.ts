import fs from 'fs';
import path from 'path';

// Read case-studies.html for shared Header and Footer
const caseStudiesHtml = fs.readFileSync('case-studies.html', 'utf8');

const headerStart = caseStudiesHtml.indexOf('<!-- HEADER SECTION -->');
const headerEnd = caseStudiesHtml.indexOf('</header>') + '</header>'.length;
let headerHtml = caseStudiesHtml.substring(headerStart, headerEnd);

// In header, ensure Services link is highlighted
headerHtml = headerHtml.replace(
  'href="/services.html" id="services-dropdown-trigger" class="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground hover:text-emerald-600 transition-colors py-2 focus:outline-none cursor-pointer"',
  'href="/services.html" id="services-dropdown-trigger" class="flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors py-2 focus:outline-none cursor-pointer"'
);
headerHtml = headerHtml.replace(
  'href="/case-studies.html" class="text-sm font-semibold text-emerald-600 font-bold transition-colors">Case Studies</a>',
  'href="/case-studies.html" class="text-sm font-semibold text-muted-foreground hover:text-foreground hover:text-emerald-600 transition-colors">Case Studies</a>'
);

const footerStart = caseStudiesHtml.indexOf('<!-- FOOTER SECTION -->');
const footerEnd = caseStudiesHtml.indexOf('</footer>') + '</footer>'.length;
const footerHtml = caseStudiesHtml.substring(footerStart, footerEnd);

interface ServiceCardData {
  num: string;
  slug: string;
  title: string;
  desc: string;
  icon: string;
  tag: string;
  badge: string;
  pillar: string;
  pillarId: string;
}

const SERVICES_CATALOG: ServiceCardData[] = [
  // Pillar 1: Search & AI Discovery
  {
    num: "01",
    slug: "seo-company-pune",
    title: "SEO Company in Pune",
    desc: "Rank #1 on Google for high-intent commercial queries with technical Core Web Vitals fixes, keyword mapping, and authority backlinks.",
    icon: "search",
    tag: "ORGANIC SEARCH",
    badge: "TOP-1 RANK",
    pillar: "Search & AI Discovery",
    pillarId: "pillar-1"
  },
  {
    num: "02",
    slug: "geo-seo-agency",
    title: "Generative Engine Optimization (GEO)",
    desc: "Get your brand cited and recommended directly inside ChatGPT Search, Perplexity, and Google AI Overviews with structured knowledge graphs.",
    icon: "zap",
    tag: "AI ANSWER ENGINES",
    badge: "GEO CITATIONS",
    pillar: "Search & AI Discovery",
    pillarId: "pillar-1"
  },
  {
    num: "03",
    slug: "ai-seo-services",
    title: "AI SEO Services",
    desc: "Next-gen semantic entity optimization, vector search indexing, and prompt-engineered brand authority for LLM search crawlers.",
    icon: "cpu",
    tag: "LLM SEARCH",
    badge: "VECTOR ENTITIES",
    pillar: "Search & AI Discovery",
    pillarId: "pillar-1"
  },
  {
    num: "04",
    slug: "google-my-business-services",
    title: "Google My Business / Google Map",
    desc: "Dominate Google Maps 3-Pack rankings for local Pune customer searches, driving high-intent phone calls, directions, and storefront visits.",
    icon: "map-pin",
    tag: "LOCAL 3-PACK",
    badge: "+420% CALLS",
    pillar: "Search & AI Discovery",
    pillarId: "pillar-1"
  },
  {
    num: "05",
    slug: "ai-ranking-citations",
    title: "AI Ranking Citations",
    desc: "Build entity nodes and verified corporate citations across high-authority indexes queried by OpenAI, Anthropic, and Google crawlers.",
    icon: "network",
    tag: "ENTITY NODES",
    badge: "HIGH AUTHORITY",
    pillar: "Search & AI Discovery",
    pillarId: "pillar-1"
  },
  {
    num: "06",
    slug: "link-building-services",
    title: "Link Building Services",
    desc: "Earn high DR editorial backlinks, founder podcast features, and digital PR placements with 100% white-hat outreach and zero PBN risks.",
    icon: "link-2",
    tag: "EDITORIAL PR",
    badge: "DR 60+ SITES",
    pillar: "Search & AI Discovery",
    pillarId: "pillar-1"
  },
  {
    num: "07",
    slug: "website-maintenance-services",
    title: "Website Maintenance & Speed SLA",
    desc: "24/7 uptime monitoring, sub-second Core Web Vitals speed tuning, security hardening, and guaranteed 4-hour SLA emergency fixes.",
    icon: "wrench",
    tag: "SPEED & UPTIME",
    badge: "Sub-0.8s LCP",
    pillar: "Search & AI Discovery",
    pillarId: "pillar-1"
  },

  // Pillar 2: Web & E-Commerce Engineering
  {
    num: "08",
    slug: "custom-website-development",
    title: "Custom Website Development",
    desc: "Ultra-fast custom websites built with React, Vite, and Tailwind CSS. Clean hand-written code, sub-second load times, and zero WordPress bloat.",
    icon: "code-xml",
    tag: "CUSTOM CODE",
    badge: "SUB-SECOND",
    pillar: "Web & E-Commerce",
    pillarId: "pillar-2"
  },
  {
    num: "09",
    slug: "ui-ux-design-services",
    title: "Custom UI/UX Website Design",
    desc: "Human-centric Figma prototypes, conversion-rate engineered wireframes, and distinctive design systems crafted to elevate premium brands.",
    icon: "pen-tool",
    tag: "FIGMA ARCHITECTURE",
    badge: "DESIGN SYSTEMS",
    pillar: "Web & E-Commerce",
    pillarId: "pillar-2"
  },
  {
    num: "10",
    slug: "ecommerce-website-development-company",
    title: "E-Commerce Website Development",
    desc: "High-volume digital storefronts with 0% transaction commission, instant WhatsApp checkout, and seamless payment gateway integrations.",
    icon: "shopping-cart",
    tag: "CUSTOM COMMERCE",
    badge: "0% COMMISSION",
    pillar: "Web & E-Commerce",
    pillarId: "pillar-2"
  },
  {
    num: "11",
    slug: "shopify-store-development",
    title: "Shopify Store Engineering",
    desc: "Custom Shopify Liquid & headless storefronts engineered for high conversions, fast mobile checkout, and automated multi-currency sales.",
    icon: "shopping-bag",
    tag: "SHOPIFY PLUS",
    badge: "HIGH CONVERSION",
    pillar: "Web & E-Commerce",
    pillarId: "pillar-2"
  },
  {
    num: "12",
    slug: "wordpress-development-services",
    title: "WordPress Development Services",
    desc: "Custom Gutenberg block themes, WooCommerce portals, and enterprise security configurations engineered with clean, bloat-free code.",
    icon: "layout-grid",
    tag: "CLEAN WP",
    badge: "NO BLOAT",
    pillar: "Web & E-Commerce",
    pillarId: "pillar-2"
  },
  {
    num: "13",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    desc: "Native-quality cross-platform Flutter and React Native mobile applications engineered for iOS and Android with sub-second API sync.",
    icon: "smartphone",
    tag: "FLUTTER & REACT NATIVE",
    badge: "IOS & ANDROID",
    pillar: "Web & E-Commerce",
    pillarId: "pillar-2"
  },
  {
    num: "14",
    slug: "landing-page-design-services",
    title: "High-Converting Landing Pages",
    desc: "Laser-targeted sales and lead generation landing pages optimized for Google Ads & Meta campaigns with sub-second mobile load times.",
    icon: "layers",
    tag: "PERFORMANCE FUNNELS",
    badge: "3X CONVERSION",
    pillar: "Web & E-Commerce",
    pillarId: "pillar-2"
  },

  // Pillar 3: Paid Media & Performance Growth
  {
    num: "15",
    slug: "conversion-rate-optimization-services",
    title: "Conversion Rate Optimization (CRO)",
    desc: "Scientific A/B testing, user session recording audits, and form friction removal to turn existing website traffic into paying clients.",
    icon: "mouse-pointer-click",
    tag: "A/B TESTING",
    badge: "+48% CONVERSION",
    pillar: "Paid Media & Ads",
    pillarId: "pillar-3"
  },
  {
    num: "16",
    slug: "google-ads-agency",
    title: "Google Ads Management",
    desc: "High-intent Search, Performance Max, and YouTube ad campaigns with negative keyword waste elimination and full server-side tracking.",
    icon: "target",
    tag: "PMAX & SEARCH",
    badge: "HIGH INTENT",
    pillar: "Paid Media & Ads",
    pillarId: "pillar-3"
  },
  {
    num: "17",
    slug: "ppc-services",
    title: "Pay Per Click (PPC) Management",
    desc: "Full-funnel paid search management engineered to lower Customer Acquisition Cost (CAC) while scaling qualified commercial inquiries.",
    icon: "trending-up",
    tag: "PPC CAMPAIGNS",
    badge: "LOW CPL",
    pillar: "Paid Media & Ads",
    pillarId: "pillar-3"
  },
  {
    num: "18",
    slug: "meta-ads-agency",
    title: "Meta & Instagram Ads Agency",
    desc: "High-converting visual ad funnels, scroll-stopping Instagram Reels, and direct WhatsApp lead generation campaigns on Facebook & Instagram.",
    icon: "share-2",
    tag: "INSTAGRAM & FB",
    badge: "4.2X ROAS",
    pillar: "Paid Media & Ads",
    pillarId: "pillar-3"
  },
  {
    num: "19",
    slug: "social-media-marketing-services",
    title: "Social Media Marketing Services",
    desc: "End-to-end organic social media strategy, high-retention short-form video content, and audience engagement built for brand authority.",
    icon: "megaphone",
    tag: "VIRAL SOCIAL",
    badge: "COMMUNITY GROWTH",
    pillar: "Paid Media & Ads",
    pillarId: "pillar-3"
  },
  {
    num: "20",
    slug: "linkedin-marketing-agency",
    title: "LinkedIn B2B Marketing Agency",
    desc: "B2B thought leadership, executive founder ghostwriting, and laser-targeted Account-Based Marketing (ABM) for high-ticket corporate clients.",
    icon: "briefcase",
    tag: "B2B LEAD GEN",
    badge: "DECISION MAKERS",
    pillar: "Paid Media & Ads",
    pillarId: "pillar-3"
  },

  // Pillar 4: Brand Identity & Creative Collateral
  {
    num: "21",
    slug: "influencer-marketing-agency",
    title: "Influencer Marketing Agency",
    desc: "Vetted micro and macro creator partnerships with transparent ROI tracking, performance contracts, and authentic audience engagement.",
    icon: "users",
    tag: "CREATOR OUTREACH",
    badge: "AUTHENTIC REACH",
    pillar: "Brand & Creative",
    pillarId: "pillar-4"
  },
  {
    num: "22",
    slug: "corporate-logo-design",
    title: "Corporate Logo Design",
    desc: "Timeless vector identity marks, typography lockups, and comprehensive brand guideline kits that leave an indelible corporate impression.",
    icon: "palette",
    tag: "VECTOR IDENTITY",
    badge: "TIMELESS BRAND",
    pillar: "Brand & Creative",
    pillarId: "pillar-4"
  },
  {
    num: "23",
    slug: "brand-naming-agency",
    title: "Strategic Brand Naming Agency",
    desc: "Memorable, phonetically balanced corporate brand names verified with trademark screening and available .com domain clearances.",
    icon: "lightbulb",
    tag: "NAME CREATION",
    badge: "TRADEMARK READY",
    pillar: "Brand & Creative",
    pillarId: "pillar-4"
  },
  {
    num: "24",
    slug: "brochure-design-services",
    title: "High-Impact Brochure Designing",
    desc: "Corporate capability brochures, B2B product catalogs, and luxury tri-fold marketing decks engineered for high-stake sales presentations.",
    icon: "file-text",
    tag: "SALES DECKS",
    badge: "PRINT & DIGITAL",
    pillar: "Brand & Creative",
    pillarId: "pillar-4"
  },
  {
    num: "25",
    slug: "luxury-business-card-design",
    title: "Luxury Business Card Design",
    desc: "Bespoke executive visiting cards featuring gold foil, spot UV, letterpress embossing, and digital NFC smart contact chips.",
    icon: "credit-card",
    tag: "LUXURY STATIONERY",
    badge: "NFC & FOIL",
    pillar: "Brand & Creative",
    pillarId: "pillar-4"
  },
  {
    num: "26",
    slug: "letterhead-stationery-design",
    title: "Executive Letterhead & Stationery",
    desc: "Unified corporate stationery suites including official letterheads, custom envelopes, presentation folders, and digital invoices.",
    icon: "mail",
    tag: "CORPORATE SUITE",
    badge: "FULL IDENTITY",
    pillar: "Brand & Creative",
    pillarId: "pillar-4"
  },
  {
    num: "27",
    slug: "content-marketing-services",
    title: "Content Marketing & Authority",
    desc: "Data-driven B2B whitepapers, high-intent technical pillar articles, and AI search-ready editorial content that establishes industry authority.",
    icon: "book-open",
    tag: "EDITORIAL AUTHORITY",
    badge: "HIGH RETENTION",
    pillar: "Brand & Creative",
    pillarId: "pillar-4"
  }
];

function generateCardHtml(s: ServiceCardData): string {
  return `
    <a href="/services/${s.slug}/" class="service-card group p-6 sm:p-7 rounded-2xl border-2 border-stone-300 dark:border-stone-700 bg-white dark:bg-zinc-950 hover:border-emerald-600 dark:hover:border-emerald-500 transition-all duration-200 flex flex-col justify-between shadow-xs" data-pillar="${s.pillarId}" data-keywords="${s.title.toLowerCase()} ${s.desc.toLowerCase()}">
      <div>
        <div class="flex items-center justify-between mb-5">
          <i data-lucide="${s.icon}" class="w-6 h-6 text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform duration-200"></i>
          <span class="font-mono text-xs text-muted-foreground/60 font-medium">${s.num}</span>
        </div>
        <h3 class="font-display text-lg font-bold text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors tracking-tight">
          ${s.title}
        </h3>
        <p class="text-xs sm:text-sm text-muted-foreground mt-2.5 leading-relaxed font-normal min-h-[4.25rem]">
          ${s.desc}
        </p>
      </div>
      <div class="mt-6 pt-4 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
        <span>View Service Details</span>
        <i data-lucide="arrow-right" class="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform"></i>
      </div>
    </a>
  `;
}

// Group into Pillars
const p1Cards = SERVICES_CATALOG.filter(s => s.pillarId === 'pillar-1').map(generateCardHtml).join('\n');
const p2Cards = SERVICES_CATALOG.filter(s => s.pillarId === 'pillar-2').map(generateCardHtml).join('\n');
const p3Cards = SERVICES_CATALOG.filter(s => s.pillarId === 'pillar-3').map(generateCardHtml).join('\n');
const p4Cards = SERVICES_CATALOG.filter(s => s.pillarId === 'pillar-4').map(generateCardHtml).join('\n');

const newServicesHtml = `<!doctype html>
<html lang="en" class="scroll-smooth">
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
    <title>All Digital Marketing &amp; Web Development Services in Pune | Inrank</title>
    <meta name="description" content="Explore all 27 specialized growth services by Inrank Technologies in Pune: SEO, Custom Web Development, AI SEO &amp; GEO, Google Ads, Meta Ads, Shopify, UI/UX, and Corporate Branding." />
    <meta name="keywords" content="digital marketing services Pune, web development company in Pune, SEO services Pune, AI SEO agency Pune, Google ads agency Pune, website design Pune, branding agency Pune" />
    <meta name="author" content="Inrank Technologies Pune" />
    <link rel="canonical" href="https://inranktech.com/services.html" />
    <link rel="icon" type="image/png" href="/logo.png" />
    <link rel="shortcut icon" type="image/png" href="/logo.png" />
    <link rel="apple-touch-icon" href="/logo.png" />

    <!-- Open Graph / Social -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://inranktech.com/services.html" />
    <meta property="og:title" content="All Digital Marketing &amp; Web Development Services in Pune | Inrank" />
    <meta property="og:description" content="Explore all 27 specialized growth services by Inrank Technologies in Pune: SEO, Custom Web Development, AI SEO &amp; GEO, Google Ads, Meta Ads, Shopify, UI/UX, and Corporate Branding." />
    <meta property="og:image" content="https://inranktech.com/images/service-seo.jpg" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://inranktech.com/services.html" />
    <meta property="twitter:title" content="All Digital Marketing &amp; Web Development Services in Pune | Inrank" />
    <meta property="twitter:description" content="Explore all 27 specialized growth services by Inrank Technologies in Pune: SEO, Custom Web Development, AI SEO &amp; GEO, Google Ads, Meta Ads, Shopify, UI/UX, and Corporate Branding." />
    <meta property="twitter:image" content="https://inranktech.com/images/service-seo.jpg" />

    <!-- Google Fonts & Lucide Icons -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
    <script src="/lucide.min.js" defer></script>

    <!-- Compiled Unified Stylesheet -->
    <link rel="stylesheet" href="/css/inrank-services.css" />

    <!-- Permanent Light Theme Initializer -->
    <script>
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    </script>

    <!-- Strict Inter Font Global Enforcement -->
    <style>
      *, html, body, h1, h2, h3, h4, h5, h6, p, span, a, div, button, input, textarea, select, blockquote, label, li, ul, ol, td, th, .font-display, .font-sans, .font-serif {
        font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
      }
    </style>
  </head>
  <body class="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary font-sans">
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WLZ75BS8"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->

    <!-- Top Viewport Global Reading Progress Bar -->
    <div id="global-scroll-progress"></div>

    <!-- GLOBAL MULTI-LAYERED AMBIENT BACKGROUND CANVAS -->
    <div id="site-ambient-canvas" class="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <div class="absolute -top-[10%] left-[5%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-br from-emerald-500/15 via-teal-400/10 to-transparent blur-[130px] animate-aurora-1"></div>
      <div class="absolute top-[25%] -right-[15%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-bl from-emerald-600/12 via-emerald-400/8 to-transparent blur-[140px] animate-aurora-2"></div>
      <div class="absolute top-[55%] -left-[15%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-tr from-cyan-500/10 via-emerald-500/8 to-transparent blur-[120px] animate-aurora-1"></div>
      <div class="absolute top-[80%] right-[0%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-tl from-emerald-500/12 via-teal-500/8 to-transparent blur-[140px] animate-aurora-2"></div>
      <div class="absolute inset-0 bg-site-pattern"></div>
      <div class="absolute inset-0 bg-noise-subtle opacity-40 mix-blend-multiply"></div>
    </div>

    ${headerHtml}

    <!-- MAIN HERO SECTION -->
    <main class="relative pt-24 sm:pt-28 md:pt-36 pb-24 overflow-hidden font-sans">
      
      <!-- Top Breadcrumb Bar -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
        <nav class="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground" aria-label="Breadcrumb">
          <a href="/" class="hover:text-foreground transition-colors flex items-center gap-1">
            <i data-lucide="home" class="h-3.5 w-3.5"></i>
            <span>Home</span>
          </a>
          <span>/</span>
          <span class="text-foreground font-semibold">All Services</span>
        </nav>
      </div>

      <!-- HERO SECTION -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        

        <h1 class="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-foreground tracking-tight max-w-4xl mx-auto leading-[1.08]">
          Digital Marketing &amp; Web Engineering <span class="text-emerald-600">Services</span>
        </h1>

        <p class="text-lg sm:text-2xl font-bold text-emerald-700 dark:text-emerald-400 max-w-3xl mx-auto leading-snug">
          Performance custom websites from ₹11,999, sub-second speed, AI search (GEO), and high-ROI ad funnels.
        </p>

        <p class="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-normal">
          Explore all 27 specialized capabilities engineered by Inrank Technologies in Pune. Every service is built on verified commercial outcomes, clean hand-crafted code, and complete IP ownership.
        </p>

        <!-- AT-A-GLANCE EXECUTIVE KPI STRIP -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-4 text-left">
          <div class="p-5 rounded-2xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-zinc-950 shadow-xs">
            <div class="text-xs font-bold uppercase tracking-wider text-emerald-600">Core Capabilities</div>
            <div class="text-2xl sm:text-3xl font-black text-foreground font-mono mt-1">27 Services</div>
            <div class="text-xs text-muted-foreground mt-0.5">Across 4 growth pillars</div>
          </div>
          <div class="p-5 rounded-2xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-zinc-950 shadow-xs">
            <div class="text-xs font-bold uppercase tracking-wider text-emerald-600">Starting Price</div>
            <div class="text-2xl sm:text-3xl font-black text-foreground font-mono mt-1">₹11,999</div>
            <div class="text-xs text-muted-foreground mt-0.5">100% Transparent fixed fees</div>
          </div>
          <div class="p-5 rounded-2xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-zinc-950 shadow-xs">
            <div class="text-xs font-bold uppercase tracking-wider text-emerald-600">PageSpeed Benchmark</div>
            <div class="text-2xl sm:text-3xl font-black text-foreground font-mono mt-1">&lt;0.8s</div>
            <div class="text-xs text-muted-foreground mt-0.5">Sub-second mobile LCP</div>
          </div>
          <div class="p-5 rounded-2xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-zinc-950 shadow-xs">
            <div class="text-xs font-bold uppercase tracking-wider text-emerald-600">Google SEO Authority</div>
            <div class="text-2xl sm:text-3xl font-black text-foreground font-mono mt-1">Top 3</div>
            <div class="text-xs text-muted-foreground mt-0.5">Maps 3-Pack rankings</div>
          </div>
        </div>

        <!-- Hero Action Buttons -->
        <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a href="#services-grid" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/25 transition-all">
            <span>Explore All 27 Services</span>
            <i data-lucide="arrow-down" class="w-4 h-4"></i>
          </a>
          <a href="/contact.html" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-zinc-900 hover:bg-stone-50 text-foreground font-bold text-sm transition-all shadow-xs">
            <span>Book Free 30-Min Growth Audit</span>
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </a>
        </div>
      </section>

      <!-- INTERACTIVE SEARCH & CATEGORY FILTER CONTROL BAR -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16" id="services-grid">
        <div class="p-6 rounded-2xl border-2 border-stone-300 dark:border-stone-700 bg-white dark:bg-zinc-950 shadow-sm space-y-5">
          
          <div class="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            <!-- Live Search Bar -->
            <div class="relative flex-1 max-w-md">
              <i data-lucide="search" class="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2"></i>
              <input 
                type="text" 
                id="service-search-input" 
                placeholder="Search capabilities (e.g. SEO, Shopify, Google Ads, Logo...)" 
                class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-zinc-900 text-foreground text-xs sm:text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition-all"
              />
            </div>

            <!-- Dynamic Counter -->
            <div class="flex items-center gap-2 shrink-0">
              <span id="services-counter" class="text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1.5 rounded-lg border border-emerald-200 dark:border-emerald-800">
                Showing 27 of 27 Capabilities
              </span>
            </div>

          </div>

          <!-- Pillar Filter Tabs -->
          <div class="flex flex-wrap items-center gap-2 pt-2 border-t border-stone-200 dark:border-stone-800" id="services-filter-tabs">
            <button type="button" data-filter="all" class="svc-tab-btn px-4 py-2 rounded-xl text-xs font-bold transition-all bg-emerald-600 text-white shadow-xs cursor-pointer">
              All Capabilities (27)
            </button>
            <button type="button" data-filter="pillar-1" class="svc-tab-btn px-4 py-2 rounded-xl text-xs font-bold transition-all bg-white dark:bg-zinc-900 border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:border-emerald-500 hover:text-emerald-600 shadow-2xs cursor-pointer flex items-center gap-1.5">
              <i data-lucide="search" class="w-3.5 h-3.5 text-emerald-600"></i>
              <span>01. Search &amp; AI (7)</span>
            </button>
            <button type="button" data-filter="pillar-2" class="svc-tab-btn px-4 py-2 rounded-xl text-xs font-bold transition-all bg-white dark:bg-zinc-900 border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:border-emerald-500 hover:text-emerald-600 shadow-2xs cursor-pointer flex items-center gap-1.5">
              <i data-lucide="code-xml" class="w-3.5 h-3.5 text-emerald-600"></i>
              <span>02. Web &amp; E-Commerce (7)</span>
            </button>
            <button type="button" data-filter="pillar-3" class="svc-tab-btn px-4 py-2 rounded-xl text-xs font-bold transition-all bg-white dark:bg-zinc-900 border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:border-emerald-500 hover:text-emerald-600 shadow-2xs cursor-pointer flex items-center gap-1.5">
              <i data-lucide="target" class="w-3.5 h-3.5 text-emerald-600"></i>
              <span>03. Paid Media &amp; Ads (6)</span>
            </button>
            <button type="button" data-filter="pillar-4" class="svc-tab-btn px-4 py-2 rounded-xl text-xs font-bold transition-all bg-white dark:bg-zinc-900 border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:border-emerald-500 hover:text-emerald-600 shadow-2xs cursor-pointer flex items-center gap-1.5">
              <i data-lucide="palette" class="w-3.5 h-3.5 text-emerald-600"></i>
              <span>04. Brand &amp; Creative (7)</span>
            </button>
          </div>

        </div>
      </section>

      <!-- 4 SERVICE PILLARS SECTIONS -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pt-14">
        
        <!-- Pillar 1: Search & AI Discovery -->
        <section class="pillar-section space-y-8" id="pillar-1">
          <div class="border-b border-border pb-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-600 mb-1">
                <i data-lucide="search" class="w-4 h-4"></i>
                <span>Pillar [01] &bull; 7 Capabilities</span>
              </div>
              <h2 class="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                Search &amp; AI Discovery
              </h2>
              <p class="text-sm text-muted-foreground mt-1 max-w-2xl font-normal">
                Dominate Google organic search, local Google Maps 3-Pack, and emerging AI answer engines (ChatGPT, Perplexity, Google AI Overviews).
              </p>
            </div>
            <a href="/case-studies/cytos.html" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:bg-emerald-100 transition-colors shrink-0 group">
              <span>Verified Proof: CyTOS (+280% Organic SEO)</span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"></i>
            </a>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            ${p1Cards}
          </div>
        </section>

        <!-- Pillar 2: Web & E-Commerce Engineering -->
        <section class="pillar-section space-y-8" id="pillar-2">
          <div class="border-b border-border pb-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-600 mb-1">
                <i data-lucide="code-xml" class="w-4 h-4"></i>
                <span>Pillar [02] &bull; 7 Capabilities</span>
              </div>
              <h2 class="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                Web &amp; E-Commerce Engineering
              </h2>
              <p class="text-sm text-muted-foreground mt-1 max-w-2xl font-normal">
                Custom, sub-second conversion websites, Shopify stores, and web applications built with clean code and zero template bloat.
              </p>
            </div>
            <a href="/case-studies/fludio.html" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:bg-emerald-100 transition-colors shrink-0 group">
              <span>Verified Proof: Fludio (&lt;0.8s LCP Web)</span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"></i>
            </a>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            ${p2Cards}
          </div>
        </section>

        <!-- Pillar 3: Paid Media & Performance Growth -->
        <section class="pillar-section space-y-8" id="pillar-3">
          <div class="border-b border-border pb-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-600 mb-1">
                <i data-lucide="target" class="w-4 h-4"></i>
                <span>Pillar [03] &bull; 6 Capabilities</span>
              </div>
              <h2 class="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                Paid Media &amp; Performance Growth
              </h2>
              <p class="text-sm text-muted-foreground mt-1 max-w-2xl font-normal">
                Scalable Google &amp; Meta ad funnels engineered with server-side CAPI tracking, negative keyword waste elimination, and low CPL.
              </p>
            </div>
            <a href="/case-studies/dravyafinancial.html" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:bg-emerald-100 transition-colors shrink-0 group">
              <span>Verified Proof: Dravya (4.2x ROAS)</span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"></i>
            </a>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            ${p3Cards}
          </div>
        </section>

        <!-- Pillar 4: Brand Identity & Creative Collateral -->
        <section class="pillar-section space-y-8" id="pillar-4">
          <div class="border-b border-border pb-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-600 mb-1">
                <i data-lucide="palette" class="w-4 h-4"></i>
                <span>Pillar [04] &bull; 7 Capabilities</span>
              </div>
              <h2 class="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                Brand Identity &amp; Creative Collateral
              </h2>
              <p class="text-sm text-muted-foreground mt-1 max-w-2xl font-normal">
                Distinctive corporate branding, vector logo systems, sales brochures, and luxury executive business stationery.
              </p>
            </div>
            <a href="/case-studies/hiragrafix.html" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:bg-emerald-100 transition-colors shrink-0 group">
              <span>Verified Proof: Hira Grafix (#1 Map 3-Pack)</span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"></i>
            </a>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            ${p4Cards}
          </div>
        </section>

      </div>

      <!-- WHY INRANK ADVANTAGE COMPARISON SECTION -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div class="rounded-3xl border-2 border-stone-300 dark:border-stone-700 bg-white dark:bg-zinc-950 p-8 sm:p-12 shadow-sm space-y-8">
          <div class="text-center max-w-2xl mx-auto space-y-2">
            <span class="text-xs font-bold uppercase tracking-wider text-emerald-600">The Inrank Technical Advantage</span>
            <h2 class="font-display font-black text-2xl sm:text-4xl text-foreground">
              Why Ambitious Brands Choose Inrank
            </h2>
            <p class="text-sm text-muted-foreground font-normal">
              Compare our engineering-first delivery model against traditional digital marketing agencies:
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-left">
            <div class="p-6 rounded-2xl border-2 border-stone-300 dark:border-stone-700 bg-stone-50/60 dark:bg-zinc-900/40 space-y-3">
              <i data-lucide="zap" class="w-7 h-7 text-emerald-600"></i>
              <h3 class="text-base font-bold text-foreground">Sub-Second Speed Guarantee</h3>
              <p class="text-xs text-muted-foreground leading-relaxed">
                Traditional agencies build bloated WordPress themes that take 4-7 seconds to load. Inrank engineers hand-coded React, Vite &amp; HTML5 platforms passing Google Core Web Vitals under 0.8 seconds.
              </p>
            </div>

            <div class="p-6 rounded-2xl border-2 border-stone-300 dark:border-stone-700 bg-stone-50/60 dark:bg-zinc-900/40 space-y-3">
              <i data-lucide="shield-check" class="w-7 h-7 text-emerald-600"></i>
              <h3 class="text-base font-bold text-foreground">100% Fixed Pricing &amp; IP Ownership</h3>
              <p class="text-xs text-muted-foreground leading-relaxed">
                No endless monthly retainer traps. All our web packages start transparently at ₹11,999 with zero hidden costs, 365-day technical warranty, and complete client ownership of code and domains.
              </p>
            </div>

            <div class="p-6 rounded-2xl border-2 border-stone-300 dark:border-stone-700 bg-stone-50/60 dark:bg-zinc-900/40 space-y-3">
              <i data-lucide="cpu" class="w-7 h-7 text-emerald-600"></i>
              <h3 class="text-base font-bold text-foreground">Dual Google &amp; AI Search Engine</h3>
              <p class="text-xs text-muted-foreground leading-relaxed">
                We optimize your presence for traditional Google Search, Google Maps 3-Pack, and emerging generative answer engines like ChatGPT Search and Perplexity with verified Schema.org entity graphs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- BOTTOM CONVERSION CTA BANNER -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div class="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 text-white border border-emerald-500/30 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left shadow-2xl">
          <div class="max-w-2xl space-y-2">
            
            <h3 class="font-display text-2xl sm:text-4xl font-black">
              Need a unified web &amp; growth campaign?
            </h3>
            <p class="text-sm sm:text-base text-emerald-100/80 leading-relaxed font-normal">
              Speak directly with our technical growth leads in Baner, Pune. Fixed-price custom websites from ₹11,999, data-driven SEO, and zero long-term lock-in.
            </p>
          </div>
          <div class="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <a href="/contact.html" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-lg shadow-emerald-500/30 transition-all">
              <span>Book Free Strategy Consultation</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>
            <a href="https://wa.me/918788823182" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-all">
              <i data-lucide="message-circle" class="w-4 h-4 text-emerald-400"></i>
              <span>WhatsApp Desk</span>
            </a>
          </div>
        </div>
      </section>

    </main>

    ${footerHtml}

    <!-- STICKY MOBILE CONVERSION BAR -->
    <div class="block md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-border px-4 py-2.5 shadow-2xl">
      <div class="flex items-center gap-2.5">
        <a href="tel:+918788823182" class="flex-1 inline-flex items-center justify-center gap-2 h-11 rounded-lg bg-card border border-border text-foreground font-semibold text-xs shadow-sm hover:bg-secondary transition-colors">
          <i data-lucide="phone" class="h-4 w-4 text-emerald-600"></i>
          <span>Call Desk</span>
        </a>
        <a href="https://wa.me/918788823182?text=Hi%20Inrank%2C%20I%20am%20reviewing%20your%20services." target="_blank" rel="noopener noreferrer" class="flex-1 inline-flex items-center justify-center gap-2 h-11 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-md transition-colors">
          <i data-lucide="message-circle" class="h-4 w-4"></i>
          <span>WhatsApp</span>
        </a>
        <a href="/contact.html" class="inline-flex items-center justify-center h-11 px-3.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold shadow-sm">
          Free Audit
        </a>
      </div>
    </div>

    <!-- Client-Side Instant Search & Filter Logic -->
    <script>
      document.addEventListener('DOMContentLoaded', function() {
        const tabBtns = document.querySelectorAll('.svc-tab-btn');
        const cards = document.querySelectorAll('.service-card');
        const searchInput = document.getElementById('service-search-input');
        const counter = document.getElementById('services-counter');
        const pillarSections = document.querySelectorAll('.pillar-section');

        let currentFilter = 'all';
        let currentSearch = '';

        function updateVisibility() {
          let visibleCount = 0;

          cards.forEach(card => {
            const pillar = card.getAttribute('data-pillar');
            const keywords = (card.getAttribute('data-keywords') || '').toLowerCase();

            const matchesPillar = (currentFilter === 'all' || pillar === currentFilter);
            const matchesSearch = !currentSearch || keywords.includes(currentSearch);

            if (matchesPillar && matchesSearch) {
              card.style.display = 'flex';
              visibleCount++;
            } else {
              card.style.display = 'none';
            }
          });

          // Show or hide pillar sections if empty
          pillarSections.forEach(section => {
            const sectionCards = section.querySelectorAll('.service-card');
            let hasVisible = false;
            sectionCards.forEach(c => {
              if (c.style.display !== 'none') hasVisible = true;
            });
            section.style.display = hasVisible ? 'block' : 'none';
          });

          if (counter) {
            counter.textContent = 'Showing ' + visibleCount + ' of 27 Capabilities';
          }
        }

        tabBtns.forEach(btn => {
          btn.addEventListener('click', function() {
            currentFilter = btn.getAttribute('data-filter') || 'all';

            tabBtns.forEach(b => {
              b.className = 'svc-tab-btn px-4 py-2 rounded-xl text-xs font-bold transition-all bg-white dark:bg-zinc-900 border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:border-emerald-500 hover:text-emerald-600 shadow-2xs cursor-pointer flex items-center gap-1.5';
            });
            btn.className = 'svc-tab-btn px-4 py-2 rounded-xl text-xs font-bold transition-all bg-emerald-600 text-white shadow-xs cursor-pointer flex items-center gap-1.5';

            updateVisibility();
          });
        });

        if (searchInput) {
          searchInput.addEventListener('input', function(e) {
            currentSearch = e.target.value.toLowerCase().trim();
            updateVisibility();
          });
        }

        // Hydrate Lucide Icons
        if (typeof lucide !== 'undefined') {
          lucide.createIcons();
        }
      });
    </script>
  </body>
</html>`;

fs.writeFileSync('services.html', newServicesHtml, 'utf8');
console.log('Successfully re-engineered services.html with modern elevated design!');
