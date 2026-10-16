const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

// Extract Header from index.html
const headerMatch = indexHtml.match(/(<!-- Navigation \/ Header -->[\s\S]*?<!-- \/Navigation \/ Header -->|<header[\s\S]*?<\/header>)/i);
const headerHtml = headerMatch ? headerMatch[0] : '';

// Extract Footer from index.html
const footerMatch = indexHtml.match(/(<!-- Site Footer -->[\s\S]*?<\/footer>|<footer[\s\S]*?<\/footer>)/i);
const footerHtml = footerMatch ? footerMatch[0] : '';

// Extract Mobile Action Bar
const mobileBarMatch = indexHtml.match(/<!-- Mobile Sticky Action Bar -->[\s\S]*?<\/div>\s*<\/div>/i);
const mobileBarHtml = mobileBarMatch ? mobileBarMatch[0] : '';

const htmlContent = `<!DOCTYPE html>
<html lang="en-IN" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Digital Marketing Agency in Pune | Performance SEO &amp; Paid Ads | Inrank</title>
    <meta name="description" content="Inrank is a leading digital marketing agency in Pune delivering measurable ROI. Local SEO, Google & Meta Ads, Generative Engine Optimization (GEO), and social growth from ₹11,999/mo." />
    <meta name="keywords" content="digital marketing agency in pune, digital marketing company in pune, best digital marketing agency pune, seo agency in pune, performance marketing agency pune, google ads agency pune, social media marketing pune" />
    <link rel="canonical" href="https://inranktech.com/digital-marketing-agency-in-pune.html" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://inranktech.com/digital-marketing-agency-in-pune.html" />
    <meta property="og:title" content="Digital Marketing Agency in Pune | Performance SEO &amp; Paid Ads | Inrank" />
    <meta property="og:description" content="Pune's top ROI digital marketing agency. Data-backed SEO, GEO search citations, and laser-targeted paid ad campaigns." />
    <meta property="og:image" content="/images/service-seo.jpg" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://inranktech.com/digital-marketing-agency-in-pune.html" />
    <meta property="twitter:title" content="Digital Marketing Agency in Pune | Inrank Technologies" />
    <meta property="twitter:description" content="Grow revenue with Pune's premier performance digital marketing company." />
    <meta property="twitter:image" content="/images/service-seo.jpg" />

    <!-- Schema.org / LocalBusiness & WebPage JSON-LD -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["LocalBusiness", "ProfessionalService"],
          "@id": "https://inranktech.com/#organization",
          "name": "Inrank Technologies Pune",
          "alternateName": "Inrank Digital Marketing Agency Pune",
          "image": "https://inranktech.com/logo.png",
          "url": "https://inranktech.com/digital-marketing-agency-in-pune.html",
          "telephone": "+91 87888 23182",
          "priceRange": "₹11,999 - ₹35,000",
          "description": "Leading digital marketing agency in Pune specializing in data-driven SEO, Google Ads management, Meta Ads, Generative Engine Optimization (GEO), and ROI-driven customer acquisition.",
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
            "bestRating": "5"
          }
        },
        {
          "@type": "WebPage",
          "@id": "https://inranktech.com/digital-marketing-agency-in-pune.html#webpage",
          "url": "https://inranktech.com/digital-marketing-agency-in-pune.html",
          "name": "Digital Marketing Agency in Pune | Performance SEO & Paid Ads",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://inranktech.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Digital Marketing Agency in Pune",
                "item": "https://inranktech.com/digital-marketing-agency-in-pune.html"
              }
            ]
          }
        },
        {
          "@type": "FAQPage",
          "@id": "https://inranktech.com/digital-marketing-agency-in-pune.html#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How much do digital marketing services cost in Pune?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Inrank provides transparent monthly digital marketing and SEO retainers starting from ₹11,999/month for Starter SEO (up to 15 keywords), ₹18,999/month for Growth SEO (up to 30 keywords + Google Ads), and ₹27,999/month for Enterprise Domination with Generative Engine Optimization (GEO)."
              }
            },
            {
              "@type": "Question",
              "name": "How soon can we expect results from digital marketing in Pune?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Paid advertising campaigns (Google Ads and Meta Ads) begin generating verified inquiries within 48 to 72 hours of launch. Organic SEO and Google Maps ranking typically exhibit significant ranking movement and call volume increases within 60 to 90 days."
              }
            },
            {
              "@type": "Question",
              "name": "What is Generative Engine Optimization (GEO)?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "GEO is modern search engine optimization engineered for AI answer engines such as Google AI Overviews, ChatGPT Search, and Perplexity. Inrank structures your entity data and authoritative citations so your brand is directly recommended in AI responses."
              }
            }
          ]
        }
      ]
    }
    </script>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
    <script src="https://unpkg.com/lucide@latest"></script>
  </head>
  <body class="bg-slate-50 text-slate-800 antialiased selection:bg-amber-500 selection:text-white pb-20 md:pb-0">

    ${headerHtml}

    <main class="min-h-screen">
      <!-- Breadcrumb Bar -->
      <nav class="bg-slate-900 border-b border-slate-800 pt-24 pb-3 px-4 sm:px-6 lg:px-8 text-xs text-slate-400">
        <div class="max-w-7xl mx-auto flex items-center gap-2">
          <a href="/" class="hover:text-amber-400 transition-colors">Home</a>
          <span>/</span>
          <a href="/pricing.html" class="hover:text-amber-400 transition-colors">Pricing</a>
          <span>/</span>
          <span class="text-amber-400 font-medium">Digital Marketing Agency in Pune</span>
        </div>
      </nav>

      <!-- Hero Section -->
      <section class="relative py-20 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white overflow-hidden">
        <div class="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="max-w-3xl">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              ROI-Focused Digital Growth Partner in Pune
            </div>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Digital Marketing Agency in Pune That <span class="bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">Drives Verified Revenue</span>
            </h1>
            <p class="text-lg text-slate-300 leading-relaxed mb-8">
              No vanity metrics or inflated impressions. We build high-intent search engines, Google Maps dominance, and profitable paid acquisition funnels for ambitious Pune enterprises. Transparent monthly retainers from <strong>₹11,999/mo</strong>.
            </p>

            <div class="flex flex-wrap items-center gap-4 mb-10">
              <a href="#consult-form" class="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm transition-all shadow-xl shadow-amber-500/25">
                <span>Request Free Growth Audit</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </a>
              <a href="https://wa.me/918788823182?text=Hello%20Inrank,%20I%20need%20digital%20marketing%20services%20in%20Pune" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-lg shadow-emerald-600/20">
                <i data-lucide="message-circle" class="w-4 h-4"></i>
                WhatsApp (+91 87888 23182)
              </a>
              <a href="tel:+918788823182" class="inline-flex items-center gap-2 px-5 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition-all">
                <i data-lucide="phone-call" class="w-4 h-4 text-amber-400"></i>
                Call Strategist
              </a>
            </div>

            <!-- Trust Bar Pills -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800 text-center">
              <div>
                <div class="text-2xl font-black text-amber-400">₹4.2 Cr+</div>
                <div class="text-xs text-slate-400 mt-0.5">Client Revenue Influenced</div>
              </div>
              <div>
                <div class="text-2xl font-black text-white">4.8x</div>
                <div class="text-xs text-slate-400 mt-0.5">Average Return on Ad Spend</div>
              </div>
              <div>
                <div class="text-2xl font-black text-emerald-400">#1 Rank</div>
                <div class="text-xs text-slate-400 mt-0.5">In 20+ Pune Niches</div>
              </div>
              <div>
                <div class="text-2xl font-black text-white">4.9 ★</div>
                <div class="text-xs text-slate-400 mt-0.5">214 Google Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Core Capabilities Grid -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-md border border-amber-200">Growth Architecture</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">Full-Stack Digital Marketing Services in Pune</h2>
          <p class="text-slate-600 text-sm mt-2">Every campaign is custom engineered to capture high-intent buyers at the exact moment they search for your offerings.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Card 1 -->
          <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-400 transition-all">
            <div class="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-6">
              <i data-lucide="search" class="w-6 h-6"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Local SEO &amp; Maps Domination</h3>
            <p class="text-xs text-slate-600 leading-relaxed mb-4">
              Dominate the Google 3-Pack across Baner, Hinjewadi, Wakad, and PCMC. High-authority local citations, review automation, and technical on-page architecture.
            </p>
            <span class="text-xs font-semibold text-amber-600">From ₹11,999/mo &rarr;</span>
          </div>

          <!-- Card 2 -->
          <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-400 transition-all">
            <div class="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-6">
              <i data-lucide="cpu" class="w-6 h-6"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Generative Engine Optimization (GEO)</h3>
            <p class="text-xs text-slate-600 leading-relaxed mb-4">
              Get cited and recommended by AI engines like Google AI Overviews, ChatGPT, and Perplexity when potential clients ask AI for recommendations in Pune.
            </p>
            <span class="text-xs font-semibold text-emerald-600">AI-Ready Citations &rarr;</span>
          </div>

          <!-- Card 3 -->
          <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-400 transition-all">
            <div class="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 mb-6">
              <i data-lucide="target" class="w-6 h-6"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">High-ROAS Google &amp; Meta Ads</h3>
            <p class="text-xs text-slate-600 leading-relaxed mb-4">
              Performance Max campaigns, search intent keyword bidding, and high-converting Instagram/Facebook reels funnels configured with Server-Side Conversions API.
            </p>
            <span class="text-xs font-semibold text-indigo-600">Targeted Lead Funnels &rarr;</span>
          </div>
        </div>
      </section>

      <!-- Transparent Retainers Section -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white rounded-3xl border border-slate-200 shadow-sm">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">No Hidden Costs</span>
          <h2 class="text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">Transparent Monthly Retainers for Pune Brands</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="rounded-2xl p-6 border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between">
            <div>
              <div class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Starter Local SEO</div>
              <div class="text-3xl font-extrabold text-slate-900 mb-2">₹11,999 <span class="text-xs font-normal text-slate-500">/month</span></div>
              <p class="text-xs text-slate-500 mb-6">Perfect for single-location clinics, retail shops, and consultants in Pune.</p>
              <ul class="space-y-3 text-xs text-slate-600 mb-8">
                <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-500"></i> Up to 15 High-Intent Keywords</li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-500"></i> Google My Business (GMB) Weekly Updates</li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-500"></i> 10 Local Pune Directory Citations/mo</li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-500"></i> Monthly Transparent Performance Report</li>
              </ul>
            </div>
            <a href="https://wa.me/918788823182?text=Hi%20Inrank,%20I%20want%20the%20Starter%20SEO%20Retainer%20(₹11,999/mo)" target="_blank" rel="noopener noreferrer" class="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs text-center transition-all">
              Start Local SEO
            </a>
          </div>

          <div class="rounded-2xl p-6 border-2 border-amber-500 shadow-xl shadow-amber-500/10 flex flex-col justify-between relative bg-amber-50/20">
            <div class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-amber-500 text-slate-950 font-black text-[10px] uppercase tracking-wider rounded-full">
              Most Selected in Pune
            </div>
            <div>
              <div class="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">Growth Engine Retainer</div>
              <div class="text-3xl font-extrabold text-slate-900 mb-2">₹18,999 <span class="text-xs font-normal text-slate-500">/month</span></div>
              <p class="text-xs text-slate-600 mb-6">Comprehensive SEO + Google Ads management for established Pune companies.</p>
              <ul class="space-y-3 text-xs text-slate-700 mb-8">
                <li class="flex items-center gap-2 font-semibold text-slate-900"><i data-lucide="check" class="w-4 h-4 text-amber-600"></i> Up to 30 Focus Target Keywords</li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-amber-600"></i> 2 High-Authority SEO Blog Articles/mo</li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-amber-600"></i> Google Ads Setup &amp; Weekly Negative Keyword Tuning</li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-amber-600"></i> Generative Engine Optimization (GEO) Citations</li>
              </ul>
            </div>
            <a href="https://wa.me/918788823182?text=Hi%20Inrank,%20I%20want%20the%20Growth%20Engine%20Retainer%20(₹18,999/mo)" target="_blank" rel="noopener noreferrer" class="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs text-center transition-all shadow-md shadow-amber-500/20">
              Start Growth Engine
            </a>
          </div>

          <div class="rounded-2xl p-6 border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between">
            <div>
              <div class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Market Domination</div>
              <div class="text-3xl font-extrabold text-slate-900 mb-2">₹27,999 <span class="text-xs font-normal text-slate-500">/month</span></div>
              <p class="text-xs text-slate-500 mb-6">Omnichannel search + Meta Reels paid funnels for multi-city expansion.</p>
              <ul class="space-y-3 text-xs text-slate-600 mb-8">
                <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-500"></i> Unlimited Search Keyword Tracking</li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-500"></i> Google Ads + Meta Ads Integrated Management</li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-500"></i> 4 High-Authority Articles + Digital PR</li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-500"></i> Bi-Weekly Video Strategy Consultations</li>
              </ul>
            </div>
            <a href="https://wa.me/918788823182?text=Hi%20Inrank,%20I%20want%20the%20Market%20Domination%20Retainer%20(₹27,999/mo)" target="_blank" rel="noopener noreferrer" class="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs text-center transition-all">
              Dominate Your Market
            </a>
          </div>
        </div>
      </section>

      <!-- Form Section -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="consult-form-section">
        <div class="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div class="max-w-2xl">
            <span class="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded border border-amber-500/20 inline-block mb-3">Instant Consultation</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">Get Your Free Pune Search &amp; Ad Audit</h2>
            <p class="text-slate-300 text-sm mb-8">Submit your details below. We'll run a preliminary competitive audit against Awrange and other competitors and send you the report on WhatsApp within 15 minutes.</p>
          </div>

          <form id="consult-form" class="space-y-6 max-w-3xl">
            <input type="text" name="_hp_company_field" style="display:none;" tabindex="-1" autocomplete="off" />

            <!-- Service Chips -->
            <div>
              <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                Primary Objective <span class="text-amber-400">*</span>
              </label>
              <div class="flex flex-wrap gap-2" id="service-chips-container">
                <button type="button" class="chip-item px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-700 bg-slate-800 text-slate-200 hover:border-amber-400 hover:bg-slate-700 transition-all cursor-pointer active-chip" data-value="Local SEO in Pune">
                  Local SEO in Pune
                </button>
                <button type="button" class="chip-item px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-700 bg-slate-800 text-slate-200 hover:border-amber-400 hover:bg-slate-700 transition-all cursor-pointer" data-value="Google Ads Management">
                  Google Ads (PPC)
                </button>
                <button type="button" class="chip-item px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-700 bg-slate-800 text-slate-200 hover:border-amber-400 hover:bg-slate-700 transition-all cursor-pointer" data-value="Meta &amp; Instagram Ads">
                  Meta &amp; Instagram Ads
                </button>
                <button type="button" class="chip-item px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-700 bg-slate-800 text-slate-200 hover:border-amber-400 hover:bg-slate-700 transition-all cursor-pointer" data-value="GEO &amp; AI Citations">
                  GEO &amp; AI Citations
                </button>
              </div>
            </div>

            <!-- Budget Chips -->
            <div>
              <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                Monthly Marketing Budget <span class="text-amber-400">*</span>
              </label>
              <div class="flex flex-wrap gap-2" id="budget-chips-container">
                <button type="button" class="chip-item px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-700 bg-slate-800 text-slate-200 hover:border-amber-400 hover:bg-slate-700 transition-all cursor-pointer" data-value="₹11,999/mo (Starter)">
                  ₹11,999/mo (Starter)
                </button>
                <button type="button" class="chip-item px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-700 bg-slate-800 text-slate-200 hover:border-amber-400 hover:bg-slate-700 transition-all cursor-pointer active-chip" data-value="₹18,999/mo (Growth)">
                  ₹18,999/mo (Growth)
                </button>
                <button type="button" class="chip-item px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-700 bg-slate-800 text-slate-200 hover:border-amber-400 hover:bg-slate-700 transition-all cursor-pointer" data-value="₹27,999/mo+ (Domination)">
                  ₹27,999/mo+ (Domination)
                </button>
              </div>
            </div>

            <!-- Fields Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="dm-name" class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Your Name *</label>
                <input type="text" id="dm-name" name="name" required placeholder="e.g. Rahul Sharma" class="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-slate-800 transition-all" />
              </div>
              <div>
                <label for="dm-phone" class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">WhatsApp Mobile *</label>
                <input type="tel" id="dm-phone" name="phone" required placeholder="e.g. +91 87888 23182" class="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-slate-800 transition-all" />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="dm-email" class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Business Email *</label>
                <input type="email" id="dm-email" name="email" required placeholder="e.g. rahul@company.com" class="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-slate-800 transition-all" />
              </div>
              <div>
                <label for="dm-website" class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Current Website URL</label>
                <input type="url" id="dm-website" name="website" placeholder="e.g. https://mybrand.com" class="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-slate-800 transition-all" />
              </div>
            </div>

            <button type="submit" id="consult-submit-btn" class="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-base transition-all shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 cursor-pointer">
              <span>Send Requirement &amp; Connect On WhatsApp</span>
              <i data-lucide="arrow-right" class="w-5 h-5"></i>
            </button>
          </form>
        </div>
      </section>
    </main>

    ${footerHtml}

    ${mobileBarHtml}

    <script type="module" src="/src/main.ts"></script>
    <script>
      if (window.lucide) {
        window.lucide.createIcons();
      }
    </script>
  </body>
</html>`;

fs.writeFileSync('digital-marketing-agency-in-pune.html', htmlContent, 'utf8');
console.log('Successfully generated digital-marketing-agency-in-pune.html!');
