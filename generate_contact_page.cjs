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

const contactHtml = `<!DOCTYPE html>
<html lang="en-IN" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact Inrank Technologies Pune | Free Consultation &amp; Growth Audit</title>
    <meta name="description" content="Contact Inrank Technologies in Pune. Call +91 76204 14165 or WhatsApp +91 70386 12280. 15-minute response guarantee for custom websites, SEO, and performance marketing." />
    <meta name="keywords" content="contact Inrank Technologies, digital marketing agency Pune contact, web development company in Pune phone number, SEO agency Pune address, website cost consultation Pune" />
    <link rel="canonical" href="https://inranktech.com/contact.html" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://inranktech.com/contact.html" />
    <meta property="og:title" content="Contact Inrank Technologies Pune | Free Consultation &amp; Growth Audit" />
    <meta property="og:description" content="Talk directly to Pune's leading performance web &amp; SEO team. Transparent pricing, no aggressive sales pitches, 15-minute response." />
    <meta property="og:image" content="/images/service-seo.jpg" />

    <!-- Schema.org / LocalBusiness & ContactPage JSON-LD -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["LocalBusiness", "ProfessionalService"],
          "@id": "https://inranktech.com/#organization",
          "name": "Inrank Technologies",
          "alternateName": "Inrank Tech Pune",
          "image": "https://inranktech.com/logo.png",
          "url": "https://inranktech.com/contact.html",
          "telephone": "+91 76204 14165",
          "priceRange": "₹11,999 - ₹35,000",
          "description": "Leading Digital Marketing Agency & Web Development Company in Pune. Fixed-price websites from ₹11,999, data-driven SEO, Generative Engine Optimization (GEO).",
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
          "@type": "ContactPage",
          "@id": "https://inranktech.com/contact.html#contactpage",
          "url": "https://inranktech.com/contact.html",
          "name": "Contact Inrank Technologies",
          "isPartOf": { "@id": "https://inranktech.com/#website" }
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
      <!-- Contact Hero Section -->
      <section class="relative pt-32 pb-16 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white overflow-hidden">
        <div class="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            15-Minute Guaranteed Response Time
          </div>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Let's Scale Your Business In <span class="bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">Pune &amp; Beyond</span>
          </h1>
          <p class="max-w-2xl mx-auto text-lg text-slate-300 leading-relaxed mb-8">
            Skip bureaucratic agency account managers. Speak directly with senior engineers and search strategists. Fixed transparent pricing, clear timelines, zero spam.
          </p>

          <!-- Quick Action Buttons -->
          <div class="flex flex-wrap justify-center items-center gap-4">
            <a href="tel:+917620414165" class="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-amber-500/20">
              <i data-lucide="phone-call" class="w-4 h-4"></i>
              Call +91 76204 14165
            </a>
            <a href="https://wa.me/917038612280?text=Hello%20Inrank,%20I%20would%20like%20to%20discuss%20a%20project" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-lg shadow-emerald-600/20">
              <i data-lucide="message-circle" class="w-4 h-4"></i>
              WhatsApp Direct (+91 70386 12280)
            </a>
            <a href="#consult-form" class="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition-all">
              <i data-lucide="sparkles" class="w-4 h-4 text-amber-400"></i>
              Request Project Quote
            </a>
          </div>
        </div>
      </section>

      <!-- Contact Info Cards Grid -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div class="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-md hover:shadow-lg transition-all">
            <div class="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-600 mb-4">
              <i data-lucide="map-pin" class="w-6 h-6"></i>
            </div>
            <h2 class="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Pune Office</h2>
            <p class="text-xs text-slate-600 mb-2">FC Road, Shivaji Nagar, Pune, MH 411005</p>
            <span class="text-xs font-semibold text-amber-600">Heart of Pune</span>
          </div>

          <div class="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-md hover:shadow-lg transition-all">
            <div class="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-600 mb-4">
              <i data-lucide="message-circle" class="w-6 h-6"></i>
            </div>
            <h2 class="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">WhatsApp Fast Track</h2>
            <p class="text-xs text-slate-600 mb-2">+91 70386 12280</p>
            <span class="text-xs font-semibold text-emerald-600">Active &amp; Available Now</span>
          </div>

          <div class="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-md hover:shadow-lg transition-all">
            <div class="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200/60 flex items-center justify-center text-blue-600 mb-4">
              <i data-lucide="phone" class="w-6 h-6"></i>
            </div>
            <h2 class="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Direct Call</h2>
            <p class="text-xs text-slate-600 mb-2">+91 76204 14165</p>
            <span class="text-xs font-semibold text-blue-600">Mon - Sat: 9am - 8pm IST</span>
          </div>

          <div class="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-md hover:shadow-lg transition-all">
            <div class="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200/60 flex items-center justify-center text-indigo-600 mb-4">
              <i data-lucide="mail" class="w-6 h-6"></i>
            </div>
            <h2 class="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Email Inquiries</h2>
            <p class="text-xs text-slate-600 mb-2">inranktech@gmail.com</p>
            <span class="text-xs font-semibold text-indigo-600">Response within 2 hours</span>
          </div>
        </div>
      </section>

      <!-- Main Form & Value Section -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <!-- Left: Value Prop, Service Coverage & SLA -->
          <div class="lg:col-span-5 space-y-8">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
                Why Work With Inrank
              </div>
              <h2 class="text-3xl font-extrabold text-slate-900 tracking-tight">
                No Sales Gimmicks. <br /><span class="text-amber-600">Just Engineering &amp; Search Domination.</span>
              </h2>
              <p class="mt-4 text-slate-600 text-sm leading-relaxed">
                Traditional agencies in Pune keep pricing hidden behind lengthy discovery meetings and charge ₹35,000+ for basic templates. Inrank operates with complete transparency: fixed packages from ₹11,999, rapid 5-7 day turnarounds, and direct WhatsApp engineering access.
              </p>
            </div>

            <!-- 3 Commitments -->
            <div class="space-y-4">
              <div class="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                <div class="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600 flex-shrink-0 mt-0.5">
                  <i data-lucide="clock" class="w-5 h-5"></i>
                </div>
                <div>
                  <h3 class="text-sm font-bold text-slate-900">15-Minute Response SLA</h3>
                  <p class="text-xs text-slate-600 mt-1">Submit your requirement and get a preliminary technical assessment on WhatsApp within 15 minutes during business hours.</p>
                </div>
              </div>

              <div class="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                <div class="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 flex-shrink-0 mt-0.5">
                  <i data-lucide="badge-percent" class="w-5 h-5"></i>
                </div>
                <div>
                  <h3 class="text-sm font-bold text-slate-900">Transparent Pricing Guarantee</h3>
                  <p class="text-xs text-slate-600 mt-1">Zero hidden costs, zero surprise maintenance bills. What we quote on our website is exactly what you invest.</p>
                </div>
              </div>

              <div class="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                <div class="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-600 flex-shrink-0 mt-0.5">
                  <i data-lucide="shield-check" class="w-5 h-5"></i>
                </div>
                <div>
                  <h3 class="text-sm font-bold text-slate-900">365-Day Extended Support</h3>
                  <p class="text-xs text-slate-600 mt-1">Unlike competitors who leave after 30 days, we support your domain, security patches, and hosting for a full calendar year.</p>
                </div>
              </div>
            </div>

            <!-- Areas Served in Pune -->
            <div class="p-5 rounded-2xl bg-slate-900 text-white">
              <div class="flex items-center gap-2 mb-3">
                <i data-lucide="compass" class="w-4 h-4 text-amber-400"></i>
                <h3 class="text-xs font-bold uppercase tracking-wider text-amber-400">Pune Local Coverage Hubs</h3>
              </div>
              <p class="text-xs text-slate-300 mb-3">We provide on-site consultations and rapid deployment for businesses across:</p>
              <div class="flex flex-wrap gap-1.5 text-[11px]">
                <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700">Baner</span>
                <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700">Hinjewadi (Ph 1-3)</span>
                <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700">Wakad</span>
                <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700">Kharadi</span>
                <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700">Viman Nagar</span>
                <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700">Hadapsar</span>
                <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700">Kothrud</span>
                <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700">Aundh</span>
                <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700">Shivajinagar</span>
                <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700">PCMC / Pimpri</span>
              </div>
            </div>
          </div>

          <!-- Right: Interactive Consultation Form -->
          <div class="lg:col-span-7">
            <div class="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden">
              <div class="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full pointer-events-none"></div>
              
              <div class="mb-8">
                <span class="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-md border border-amber-200/60 inline-block mb-2">Interactive Project Estimator</span>
                <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Request Your Free Strategy Plan</h2>
                <p class="text-slate-500 text-sm mt-1">Select the services you need. We'll automatically route your blueprint to WhatsApp.</p>
              </div>

              <form id="consult-form" class="space-y-6">
                <!-- Honeypot -->
                <input type="text" name="_hp_company_field" style="display:none;" tabindex="-1" autocomplete="off" />

                <!-- Service Selector Chips -->
                <div>
                  <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                    1. Select Services Needed <span class="text-amber-500">*</span>
                  </label>
                  <div class="flex flex-wrap gap-2" id="service-chips-container">
                    <button type="button" class="chip-item px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-200 bg-slate-50 text-slate-700 hover:border-amber-400 hover:bg-amber-50/50 transition-all cursor-pointer active-chip" data-value="Custom Website Development">
                      Custom Website
                    </button>
                    <button type="button" class="chip-item px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-200 bg-slate-50 text-slate-700 hover:border-amber-400 hover:bg-amber-50/50 transition-all cursor-pointer" data-value="E-Commerce Store Setup">
                      E-Commerce Store
                    </button>
                    <button type="button" class="chip-item px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-200 bg-slate-50 text-slate-700 hover:border-amber-400 hover:bg-amber-50/50 transition-all cursor-pointer" data-value="Local SEO &amp; Google Maps">
                      Local SEO &amp; Maps
                    </button>
                    <button type="button" class="chip-item px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-200 bg-slate-50 text-slate-700 hover:border-amber-400 hover:bg-amber-50/50 transition-all cursor-pointer" data-value="GEO &amp; AI Search Citations">
                      GEO &amp; AI Citations
                    </button>
                    <button type="button" class="chip-item px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-200 bg-slate-50 text-slate-700 hover:border-amber-400 hover:bg-amber-50/50 transition-all cursor-pointer" data-value="Google &amp; Meta Paid Ads">
                      Google / Meta Ads
                    </button>
                    <button type="button" class="chip-item px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-200 bg-slate-50 text-slate-700 hover:border-amber-400 hover:bg-amber-50/50 transition-all cursor-pointer" data-value="Social Media &amp; Reels">
                      Social Media &amp; Reels
                    </button>
                    <button type="button" class="chip-item px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-200 bg-slate-50 text-slate-700 hover:border-amber-400 hover:bg-amber-50/50 transition-all cursor-pointer" data-value="Corporate Logo &amp; Branding">
                      Branding &amp; Collaterals
                    </button>
                  </div>
                </div>

                <!-- Budget Range Chips -->
                <div>
                  <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                    2. Estimated Project Budget <span class="text-amber-500">*</span>
                  </label>
                  <div class="flex flex-wrap gap-2" id="budget-chips-container">
                    <button type="button" class="chip-item px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-200 bg-slate-50 text-slate-700 hover:border-amber-400 hover:bg-amber-50/50 transition-all cursor-pointer" data-value="Under ₹15,000">
                      Under ₹15,000 (Starter)
                    </button>
                    <button type="button" class="chip-item px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-200 bg-slate-50 text-slate-700 hover:border-amber-400 hover:bg-amber-50/50 transition-all cursor-pointer active-chip" data-value="₹15,000 - ₹30,000">
                      ₹15,000 - ₹30,000 (Growth)
                    </button>
                    <button type="button" class="chip-item px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-200 bg-slate-50 text-slate-700 hover:border-amber-400 hover:bg-amber-50/50 transition-all cursor-pointer" data-value="₹30,000 - ₹60,000">
                      ₹30,000 - ₹60,000 (Scale)
                    </button>
                    <button type="button" class="chip-item px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-200 bg-slate-50 text-slate-700 hover:border-amber-400 hover:bg-amber-50/50 transition-all cursor-pointer" data-value="₹60,000+ Enterprise">
                      ₹60,000+ (Enterprise)
                    </button>
                  </div>
                </div>

                <!-- Input Fields Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label for="contact-name" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Name <span class="text-amber-500">*</span>
                    </label>
                    <input type="text" id="contact-name" name="name" required placeholder="e.g. Rahul Sharma" class="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all" />
                  </div>

                  <div>
                    <label for="contact-phone" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      WhatsApp Mobile Number <span class="text-amber-500">*</span>
                    </label>
                    <input type="tel" id="contact-phone" name="phone" required placeholder="e.g. +91 98765 43210" class="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all" />
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label for="contact-email" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Business Email <span class="text-amber-500">*</span>
                    </label>
                    <input type="email" id="contact-email" name="email" required placeholder="e.g. rahul@company.com" class="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all" />
                  </div>

                  <div>
                    <label for="contact-website" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Current Website (Optional)
                    </label>
                    <input type="url" id="contact-website" name="website" placeholder="e.g. https://mybrand.com" class="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all" />
                  </div>
                </div>

                <div>
                  <label for="contact-message" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Project Details / Goals
                  </label>
                  <textarea id="contact-message" name="message" rows="3" placeholder="Briefly describe your business, timeline, or key objectives..." class="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"></textarea>
                </div>

                <!-- Submit Button -->
                <button type="submit" id="consult-submit-btn" class="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-base transition-all shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 cursor-pointer">
                  <span>Send Inquiry &amp; Launch On WhatsApp</span>
                  <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </button>

                <p class="text-center text-xs text-slate-400 flex items-center justify-center gap-1.5">
                  <i data-lucide="lock" class="w-3.5 h-3.5 text-slate-400"></i>
                  Zero Spam Guarantee. Your information is 100% confidential.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <!-- Google Map & Address Section -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div class="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-lg grid grid-cols-1 md:grid-cols-12">
          <div class="p-8 md:col-span-5 flex flex-col justify-between bg-slate-900 text-white">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-amber-400">Physical Location</span>
              <h3 class="text-2xl font-extrabold mt-1 text-white">Visit Our Pune Headquarters</h3>
              <p class="text-xs text-slate-300 mt-3 leading-relaxed">
                Located centrally on FC Road, Shivaji Nagar. Conveniently accessible for clients visiting from Baner, Kothrud, Aundh, and Camp.
              </p>
              
              <div class="mt-6 space-y-3 text-xs">
                <div class="flex items-center gap-3">
                  <i data-lucide="map-pin" class="w-4 h-4 text-amber-400"></i>
                  <span>FC Road, Shivaji Nagar, Pune, Maharashtra 411005</span>
                </div>
                <div class="flex items-center gap-3">
                  <i data-lucide="clock" class="w-4 h-4 text-amber-400"></i>
                  <span>Monday - Saturday: 9:00 AM - 8:00 PM IST</span>
                </div>
                <div class="flex items-center gap-3">
                  <i data-lucide="phone" class="w-4 h-4 text-amber-400"></i>
                  <span>+91 76204 14165 / +91 70386 12280</span>
                </div>
              </div>
            </div>

            <div class="pt-8">
              <a href="https://maps.google.com/?q=FC+Road+Shivaji+Nagar+Pune" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-all">
                <i data-lucide="navigation" class="w-4 h-4"></i>
                Get Directions on Google Maps
              </a>
            </div>
          </div>

          <div class="md:col-span-7 h-80 md:h-auto min-h-[300px] relative bg-slate-100">
            <!-- Map Placeholder / Embed -->
            <iframe 
              title="Inrank Pune Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15132.84365738605!2d73.83988636181971!3d18.520430299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf8542c3c6f3%3A0xb36b5ec6ef8767e7!2sFergusson%20College%20Rd%2C%20Shivajinagar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              class="w-full h-full border-0" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
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

fs.writeFileSync('contact.html', contactHtml, 'utf8');
console.log('Successfully generated contact.html!');
