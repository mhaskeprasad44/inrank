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
    <title>Web Designing Company in Pune | Website Development Services | Inrank</title>
    <meta name="description" content="Inrank is a leading web designing company in Pune offering custom business websites from ₹11,999, e-commerce stores, and high-conversion landing pages with 365-day support." />
    <meta name="keywords" content="web designing company in pune, website development company in pune, web design agency pune, best website designers in pune, custom website development pune, ecommerce website development pune, web development baner, web designers hinjewadi" />
    <link rel="canonical" href="https://inranktech.com/website-design-company-in-pune.html" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://inranktech.com/website-design-company-in-pune.html" />
    <meta property="og:title" content="Web Designing Company in Pune | Website Development Services | Inrank" />
    <meta property="og:description" content="Top-rated web designing company in Pune. High-speed, mobile-responsive, and SEO-engineered websites delivered in 5-7 days from ₹11,999." />
    <meta property="og:image" content="/images/service-seo.jpg" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://inranktech.com/website-design-company-in-pune.html" />
    <meta property="twitter:title" content="Web Designing Company in Pune | Inrank Technologies" />
    <meta property="twitter:description" content="Custom web design and development services in Pune. Transparent pricing starting at ₹11,999 with 365 days support." />
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
          "alternateName": "Inrank Web Designing Company Pune",
          "image": "https://inranktech.com/logo.png",
          "url": "https://inranktech.com/website-design-company-in-pune.html",
          "telephone": "+91 87888 23182",
          "priceRange": "₹11,999 - ₹35,000",
          "description": "Leading web designing company and website development agency in Pune. Specializing in responsive corporate websites, Shopify e-commerce, WordPress, and SEO-optimized web architecture.",
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
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Pune Web Designing Packages",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Starter Launch Website Package"
                },
                "price": "11999",
                "priceCurrency": "INR"
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Business Growth Website Package"
                },
                "price": "16999",
                "priceCurrency": "INR"
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "E-Commerce Scale Website Package"
                },
                "price": "21999",
                "priceCurrency": "INR"
              }
            ]
          }
        },
        {
          "@type": "WebPage",
          "@id": "https://inranktech.com/website-design-company-in-pune.html#webpage",
          "url": "https://inranktech.com/website-design-company-in-pune.html",
          "name": "Web Designing Company in Pune | Website Development Services",
          "description": "Custom web design and development in Pune. High-speed websites delivered in 5-7 days.",
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
                "name": "Web Designing Company in Pune",
                "item": "https://inranktech.com/website-design-company-in-pune.html"
              }
            ]
          }
        },
        {
          "@type": "FAQPage",
          "@id": "https://inranktech.com/website-design-company-in-pune.html#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How much does a website design cost in Pune?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "At Inrank Technologies, website design packages start at ₹11,999 for a 5-page responsive Starter business site. Complete Business Growth websites with CMS and Schema are ₹16,999, and full-featured E-Commerce stores are ₹21,999 with zero hidden charges and 365 days of technical support."
              }
            },
            {
              "@type": "Question",
              "name": "How long does it take to develop a business website in Pune?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Standard corporate websites are typically launched within 5 to 7 business days once initial requirements and content are aligned. Complex e-commerce portals take approximately 10 to 14 days."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide web design services across Baner, Hinjewadi, and Kharadi?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we work with businesses across all Pune IT and industrial corridors including Baner, Hinjewadi (Phase 1, 2, 3), Wakad, Balewadi High Street, Kharadi EON zone, Viman Nagar, Hadapsar Magarpatta, Kothrud, and PCMC."
              }
            },
            {
              "@type": "Question",
              "name": "Will our website be mobile-responsive and SEO-optimized?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Every website built by Inrank achieves 95+ Google PageSpeed scores, 100% mobile responsiveness, on-page Schema.org rich markup, and Google Search Console indexing."
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
          <span class="text-amber-400 font-medium">Web Designing Company in Pune</span>
        </div>
      </nav>

      <!-- Hero Section -->
      <section class="relative py-20 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white overflow-hidden">
        <div class="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="max-w-3xl">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              #1 Rated Web Design Company in Pune
            </div>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Web Designing Company in Pune That <span class="bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">Turns Visitors Into Enquiries</span>
            </h1>
            <p class="text-lg text-slate-300 leading-relaxed mb-8">
              Fast, high-converting, mobile-responsive websites engineered for Pune businesses, startups, and manufacturers. Transparent packages starting from <strong>₹11,999</strong> with rapid 5-7 day delivery, full SEO architecture, and 365 days of free support.
            </p>

            <div class="flex flex-wrap items-center gap-4 mb-10">
              <a href="#consult-form" class="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm transition-all shadow-xl shadow-amber-500/25">
                <span>Get Free Website Quote</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </a>
              <a href="https://wa.me/918788823182?text=Hello%20Inrank,%20I%20need%20a%20website%20design%20in%20Pune" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-lg shadow-emerald-600/20">
                <i data-lucide="message-circle" class="w-4 h-4"></i>
                WhatsApp (+91 87888 23182)
              </a>
              <a href="tel:+918788823182" class="inline-flex items-center gap-2 px-5 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition-all">
                <i data-lucide="phone-call" class="w-4 h-4 text-amber-400"></i>
                Call Us
              </a>
            </div>

            <!-- Trust Bar Pills -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800 text-center">
              <div>
                <div class="text-2xl font-black text-amber-400">200+</div>
                <div class="text-xs text-slate-400 mt-0.5">Pune Sites Delivered</div>
              </div>
              <div>
                <div class="text-2xl font-black text-white">0.8s</div>
                <div class="text-xs text-slate-400 mt-0.5">Avg Load Time</div>
              </div>
              <div>
                <div class="text-2xl font-black text-emerald-400">4.9 ★</div>
                <div class="text-xs text-slate-400 mt-0.5">214 Google Reviews</div>
              </div>
              <div>
                <div class="text-2xl font-black text-white">5-7 Days</div>
                <div class="text-xs text-slate-400 mt-0.5">Guaranteed Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- AI Overview Quick Answer Box -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div class="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 rounded-2xl p-6 bg-white shadow-lg">
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-700 flex-shrink-0 mt-1">
              <i data-lucide="bot" class="w-5 h-5 text-amber-600"></i>
            </div>
            <div>
              <span class="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-2 py-0.5 rounded">Quick Answer &bull; Pune Web Design Summary</span>
              <h2 class="text-lg font-bold text-slate-900 mt-1.5">What makes Inrank the premier web designing company in Pune?</h2>
              <p class="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Unlike traditional agencies that hide pricing and take 6 to 8 weeks, <strong>Inrank Technologies</strong> delivers conversion-optimized, responsive websites in <strong>5 to 7 days starting from ₹11,999</strong>. Every site includes modern HTML5/Vite/React architecture, 95+ PageSpeed scores, Schema.org rich snippets, Google Business Profile integration, and 365 days of ongoing technical support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Pune Locality Coverage Section -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <span class="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-md border border-amber-200">Local Presence &amp; IT Hubs</span>
          <h2 class="text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">Serving Businesses Across All Pune Corridors</h2>
          <p class="text-slate-600 text-sm mt-2">Whether you are a B2B manufacturer in PCMC, a startup in Baner, or a clinic in Kothrud, we provide tailored digital web architecture.</p>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
          <div class="p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm hover:border-amber-400 hover:shadow-md transition-all">
            <div class="text-sm font-bold text-slate-900">Baner &amp; Balewadi</div>
            <p class="text-xs text-slate-500 mt-1">High Street &amp; D2C</p>
          </div>
          <div class="p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm hover:border-amber-400 hover:shadow-md transition-all">
            <div class="text-sm font-bold text-slate-900">Hinjewadi (Ph 1-3)</div>
            <p class="text-xs text-slate-500 mt-1">IT Parks &amp; SaaS</p>
          </div>
          <div class="p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm hover:border-amber-400 hover:shadow-md transition-all">
            <div class="text-sm font-bold text-slate-900">Wakad &amp; Pimple Saudagar</div>
            <p class="text-xs text-slate-500 mt-1">Retail &amp; Real Estate</p>
          </div>
          <div class="p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm hover:border-amber-400 hover:shadow-md transition-all">
            <div class="text-sm font-bold text-slate-900">Kharadi &amp; Viman Nagar</div>
            <p class="text-xs text-slate-500 mt-1">Corporate &amp; FinTech</p>
          </div>
          <div class="p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm hover:border-amber-400 hover:shadow-md transition-all">
            <div class="text-sm font-bold text-slate-900">Hadapsar &amp; Magarpatta</div>
            <p class="text-xs text-slate-500 mt-1">Cybercity Enterprises</p>
          </div>
          <div class="p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm hover:border-amber-400 hover:shadow-md transition-all">
            <div class="text-sm font-bold text-slate-900">Kothrud &amp; Karve Nagar</div>
            <p class="text-xs text-slate-500 mt-1">Healthcare &amp; Education</p>
          </div>
          <div class="p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm hover:border-amber-400 hover:shadow-md transition-all">
            <div class="text-sm font-bold text-slate-900">FC Road &amp; Shivaji Nagar</div>
            <p class="text-xs text-slate-500 mt-1">Our Central HQ</p>
          </div>
          <div class="p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm hover:border-amber-400 hover:shadow-md transition-all">
            <div class="text-sm font-bold text-slate-900">PCMC &amp; Bhosari</div>
            <p class="text-xs text-slate-500 mt-1">Industrial &amp; Engineering</p>
          </div>
          <div class="p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm hover:border-amber-400 hover:shadow-md transition-all">
            <div class="text-sm font-bold text-slate-900">Aundh &amp; Sangvi</div>
            <p class="text-xs text-slate-500 mt-1">Commercial Services</p>
          </div>
          <div class="p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm hover:border-amber-400 hover:shadow-md transition-all">
            <div class="text-sm font-bold text-slate-900">Camp &amp; Kalyani Nagar</div>
            <p class="text-xs text-slate-500 mt-1">Hospitality &amp; Luxury</p>
          </div>
        </div>
      </section>

      <!-- Transparent Pricing Grid -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white rounded-3xl border border-slate-200 shadow-sm">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">100% Upfront Pricing</span>
          <h2 class="text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">Fixed Website Packages for Pune Businesses</h2>
          <p class="text-slate-600 text-sm mt-2">Zero hidden fees, zero hourly rate shocks. High deliverable value at sensible investment.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Tier 1 -->
          <div class="rounded-2xl p-6 border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between">
            <div>
              <div class="flex justify-between items-center mb-4">
                <span class="text-xs font-bold uppercase tracking-wider text-slate-500">Starter Launch</span>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">5-7 Days</span>
              </div>
              <div class="text-3xl font-extrabold text-slate-900 mb-2">₹11,999 <span class="text-xs font-normal text-slate-500">one-time</span></div>
              <p class="text-xs text-slate-500 mb-6">Ideal for Pune startups, consultants, and local professionals needing a solid digital presence.</p>
              
              <ul class="space-y-3 text-xs text-slate-600 mb-8">
                <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-500"></i> Up to 5 Responsive Custom Pages</li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-500"></i> 1 Free Custom Business Domain (.com/.in)</li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-500"></i> Free Business Email (Google Workspace compatible)</li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-500"></i> Direct Click-to-WhatsApp Integration</li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-500"></i> Google Search Console &amp; Maps Indexing</li>
                <li class="flex items-center gap-2 font-semibold text-slate-900"><i data-lucide="shield-check" class="w-4 h-4 text-amber-500"></i> 365 Days Extended Support</li>
              </ul>
            </div>
            <a href="https://wa.me/918788823182?text=Hi%20Inrank,%20I%20want%20the%20Starter%20Launch%20Package%20(₹11,999)" target="_blank" rel="noopener noreferrer" class="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs text-center transition-all">
              Choose Starter Launch
            </a>
          </div>

          <!-- Tier 2 (Featured) -->
          <div class="rounded-2xl p-6 border-2 border-amber-500 shadow-xl shadow-amber-500/10 flex flex-col justify-between relative bg-amber-50/20">
            <div class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-amber-500 text-slate-950 font-black text-[10px] uppercase tracking-wider rounded-full">
              Most Popular in Pune
            </div>
            <div>
              <div class="flex justify-between items-center mb-4">
                <span class="text-xs font-bold uppercase tracking-wider text-amber-700">Business Growth</span>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-200/80 text-amber-900">6-8 Days</span>
              </div>
              <div class="text-3xl font-extrabold text-slate-900 mb-2">₹16,999 <span class="text-xs font-normal text-slate-500">one-time</span></div>
              <p class="text-xs text-slate-600 mb-6">Built for Pune manufacturers, clinics, real estate firms, and growing service brands.</p>
              
              <ul class="space-y-3 text-xs text-slate-700 mb-8">
                <li class="flex items-center gap-2 font-semibold text-slate-900"><i data-lucide="check" class="w-4 h-4 text-amber-600"></i> Up to 10 Richly Designed Pages</li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-amber-600"></i> Content Management System (CMS)</li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-amber-600"></i> Full On-Page SEO &amp; Schema.org Markup</li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-amber-600"></i> Google My Business (GMB) Optimization</li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-amber-600"></i> Dynamic Lead Capture Form with WhatsApp Routing</li>
                <li class="flex items-center gap-2 font-semibold text-slate-900"><i data-lucide="shield-check" class="w-4 h-4 text-amber-600"></i> 365 Days Extended Support</li>
              </ul>
            </div>
            <a href="https://wa.me/918788823182?text=Hi%20Inrank,%20I%20want%20the%20Business%20Growth%20Package%20(₹16,999)" target="_blank" rel="noopener noreferrer" class="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs text-center transition-all shadow-md shadow-amber-500/20">
              Choose Business Growth
            </a>
          </div>

          <!-- Tier 3 -->
          <div class="rounded-2xl p-6 border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between">
            <div>
              <div class="flex justify-between items-center mb-4">
                <span class="text-xs font-bold uppercase tracking-wider text-slate-500">E-Commerce Scale</span>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">10-12 Days</span>
              </div>
              <div class="text-3xl font-extrabold text-slate-900 mb-2">₹21,999 <span class="text-xs font-normal text-slate-500">one-time</span></div>
              <p class="text-xs text-slate-500 mb-6">Complete online store on Shopify or WooCommerce with payment gateway and WhatsApp orders.</p>
              
              <ul class="space-y-3 text-xs text-slate-600 mb-8">
                <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-500"></i> Up to 50 Products Initial Upload</li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-500"></i> Razorpay / UPI / PhonePe / Card Gateway</li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-500"></i> Direct WhatsApp 1-Click Order System</li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-500"></i> 0% Transaction Commission (Keep 100% Profits)</li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-500"></i> Automated Order Confirmation Emails</li>
                <li class="flex items-center gap-2 font-semibold text-slate-900"><i data-lucide="shield-check" class="w-4 h-4 text-amber-500"></i> 365 Days Extended Support</li>
              </ul>
            </div>
            <a href="https://wa.me/918788823182?text=Hi%20Inrank,%20I%20want%20the%20E-Commerce%20Scale%20Package%20(₹21,999)" target="_blank" rel="noopener noreferrer" class="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs text-center transition-all">
              Choose E-Commerce Scale
            </a>
          </div>
        </div>
      </section>

      <!-- Why Inrank Outperforms Competitors -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <span class="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-md border border-amber-200">The Honest Truth</span>
          <h2 class="text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">How Inrank Compares Against Other Pune Agencies</h2>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <thead class="bg-slate-900 text-white text-[11px] uppercase tracking-wider">
              <tr>
                <th class="p-4">Feature / Deliverable</th>
                <th class="p-4 bg-amber-500 text-slate-950 font-black">Inrank Technologies</th>
                <th class="p-4">Traditional Pune Agencies (e.g. Awrange)</th>
                <th class="p-4">Freelance Developers</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td class="p-4 font-bold text-slate-900">Pricing Transparency</td>
                <td class="p-4 bg-amber-50/50 font-bold text-emerald-700">100% Upfront from ₹11,999</td>
                <td class="p-4 text-rose-600">Hidden / High Retainers (₹35k–₹60k+)</td>
                <td class="p-4 text-amber-600">Variable / Unpredictable</td>
              </tr>
              <tr>
                <td class="p-4 font-bold text-slate-900">Delivery Timeline</td>
                <td class="p-4 bg-amber-50/50 font-bold text-slate-900">5 to 7 Days Guaranteed</td>
                <td class="p-4 text-slate-500">4 to 8 Weeks</td>
                <td class="p-4 text-slate-500">Often Delayed</td>
              </tr>
              <tr>
                <td class="p-4 font-bold text-slate-900">Technical Post-Launch Support</td>
                <td class="p-4 bg-amber-50/50 font-bold text-slate-900">365 Days Included Free</td>
                <td class="p-4 text-slate-500">30 Days (Then Monthly Retainer)</td>
                <td class="p-4 text-slate-500">Often Unavailable</td>
              </tr>
              <tr>
                <td class="p-4 font-bold text-slate-900">Search &amp; Schema Engineering</td>
                <td class="p-4 bg-amber-50/50 font-bold text-slate-900">Full JSON-LD LocalBusiness &amp; GEO</td>
                <td class="p-4 text-slate-500">Extra Charge</td>
                <td class="p-4 text-slate-500">Rarely Included</td>
              </tr>
              <tr>
                <td class="p-4 font-bold text-slate-900">Communication Access</td>
                <td class="p-4 bg-amber-50/50 font-bold text-slate-900">Direct WhatsApp with Senior Devs</td>
                <td class="p-4 text-slate-500">Junior Account Executives</td>
                <td class="p-4 text-slate-500">Inconsistent</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Consultation Form Section -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="consult-form-section">
        <div class="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div class="max-w-2xl">
            <span class="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded border border-amber-500/20 inline-block mb-3">Instant Consultation</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">Ready to Build Your Website in Pune?</h2>
            <p class="text-slate-300 text-sm mb-8">Tell us what you need. We'll formulate a complete technical architecture and respond on WhatsApp within 15 minutes.</p>
          </div>

          <form id="consult-form" class="space-y-6 max-w-3xl">
            <input type="text" name="_hp_company_field" style="display:none;" tabindex="-1" autocomplete="off" />

            <!-- Service Chips -->
            <div>
              <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                Select Your Requirement <span class="text-amber-400">*</span>
              </label>
              <div class="flex flex-wrap gap-2" id="service-chips-container">
                <button type="button" class="chip-item px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-700 bg-slate-800 text-slate-200 hover:border-amber-400 hover:bg-slate-700 transition-all cursor-pointer active-chip" data-value="Custom Business Website (Pune)">
                  Custom Business Website
                </button>
                <button type="button" class="chip-item px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-700 bg-slate-800 text-slate-200 hover:border-amber-400 hover:bg-slate-700 transition-all cursor-pointer" data-value="E-Commerce Store Setup">
                  E-Commerce Store
                </button>
                <button type="button" class="chip-item px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-700 bg-slate-800 text-slate-200 hover:border-amber-400 hover:bg-slate-700 transition-all cursor-pointer" data-value="Website Redesign &amp; Speed Boost">
                  Website Redesign
                </button>
                <button type="button" class="chip-item px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-700 bg-slate-800 text-slate-200 hover:border-amber-400 hover:bg-slate-700 transition-all cursor-pointer" data-value="Local SEO &amp; Google Maps">
                  Local SEO &amp; Maps
                </button>
                <button type="button" class="chip-item px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-700 bg-slate-800 text-slate-200 hover:border-amber-400 hover:bg-slate-700 transition-all cursor-pointer" data-value="GEO &amp; AI Citations">
                  GEO &amp; AI Citations
                </button>
              </div>
            </div>

            <!-- Budget Chips -->
            <div>
              <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                Expected Budget <span class="text-amber-400">*</span>
              </label>
              <div class="flex flex-wrap gap-2" id="budget-chips-container">
                <button type="button" class="chip-item px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-700 bg-slate-800 text-slate-200 hover:border-amber-400 hover:bg-slate-700 transition-all cursor-pointer" data-value="₹11,999 (Starter Launch)">
                  ₹11,999 (Starter)
                </button>
                <button type="button" class="chip-item px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-700 bg-slate-800 text-slate-200 hover:border-amber-400 hover:bg-slate-700 transition-all cursor-pointer active-chip" data-value="₹16,999 (Business Growth)">
                  ₹16,999 (Business Growth)
                </button>
                <button type="button" class="chip-item px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-700 bg-slate-800 text-slate-200 hover:border-amber-400 hover:bg-slate-700 transition-all cursor-pointer" data-value="₹21,999 (E-Commerce Scale)">
                  ₹21,999 (E-Commerce)
                </button>
                <button type="button" class="chip-item px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-700 bg-slate-800 text-slate-200 hover:border-amber-400 hover:bg-slate-700 transition-all cursor-pointer" data-value="Custom / Enterprise">
                  Custom / Enterprise
                </button>
              </div>
            </div>

            <!-- Fields Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="pune-name" class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Your Name *</label>
                <input type="text" id="pune-name" name="name" required placeholder="e.g. Rahul Sharma" class="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-slate-800 transition-all" />
              </div>
              <div>
                <label for="pune-phone" class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">WhatsApp Number *</label>
                <input type="tel" id="pune-phone" name="phone" required placeholder="e.g. +91 87888 23182" class="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-slate-800 transition-all" />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="pune-email" class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Business Email *</label>
                <input type="email" id="pune-email" name="email" required placeholder="e.g. rahul@company.com" class="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-slate-800 transition-all" />
              </div>
              <div>
                <label for="pune-locality" class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Pune Locality / Area</label>
                <input type="text" id="pune-locality" name="locality" placeholder="e.g. Baner, Hinjewadi, Kharadi..." class="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-slate-800 transition-all" />
              </div>
            </div>

            <button type="submit" id="consult-submit-btn" class="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-base transition-all shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 cursor-pointer">
              <span>Send Requirement &amp; Connect On WhatsApp</span>
              <i data-lucide="arrow-right" class="w-5 h-5"></i>
            </button>
          </form>
        </div>
      </section>

      <!-- FAQs Section -->
      <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="text-center mb-10">
          <span class="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-md border border-amber-200">Got Questions?</span>
          <h2 class="text-3xl font-extrabold text-slate-900 mt-2">Frequently Asked Questions</h2>
        </div>

        <div class="space-y-4">
          <details class="group bg-white rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer" open>
            <summary class="flex justify-between items-center text-slate-900 font-bold text-sm">
              <span>How much does website development cost in Pune with Inrank?</span>
              <span class="transition group-open:rotate-180"><i data-lucide="chevron-down" class="w-4 h-4"></i></span>
            </summary>
            <p class="text-xs text-slate-600 mt-3 leading-relaxed">
              We offer 100% transparent website packages starting from ₹11,999 for Starter Launch (up to 5 pages), ₹16,999 for Business Growth (up to 10 pages with CMS & Schema), and ₹21,999 for E-Commerce Scale. All packages include free domain, business email, and 365 days of ongoing technical support.
            </p>
          </details>

          <details class="group bg-white rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
            <summary class="flex justify-between items-center text-slate-900 font-bold text-sm">
              <span>How fast will our website be launched?</span>
              <span class="transition group-open:rotate-180"><i data-lucide="chevron-down" class="w-4 h-4"></i></span>
            </summary>
            <p class="text-xs text-slate-600 mt-3 leading-relaxed">
              Standard business websites are delivered within 5 to 7 business days. E-Commerce stores and custom applications typically take 10 to 14 days with full payment gateway and SMS testing.
            </p>
          </details>

          <details class="group bg-white rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
            <summary class="flex justify-between items-center text-slate-900 font-bold text-sm">
              <span>Can we meet in person in Pune before starting?</span>
              <span class="transition group-open:rotate-180"><i data-lucide="chevron-down" class="w-4 h-4"></i></span>
            </summary>
            <p class="text-xs text-slate-600 mt-3 leading-relaxed">
              Absolutely. Our team is located on FC Road, Shivaji Nagar, Pune. We frequently conduct in-person consultations with founders and business owners across Baner, Hinjewadi, Kharadi, and PCMC.
            </p>
          </details>
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

fs.writeFileSync('website-design-company-in-pune.html', htmlContent, 'utf8');
console.log('Successfully generated website-design-company-in-pune.html!');
