/**
 * scripts/enhance_pune_pages.cjs
 * Enhances website-design-company-in-pune.html and digital-marketing-agency-in-pune.html
 * with rich, high-converting, user-focused sections while strictly preserving the current UI,
 * colors, typography, and styling.
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

// =========================================================================
// 1. CONTENT BLOCKS FOR website-design-company-in-pune.html
// =========================================================================

const WEB_DESIGN_HEAD_FAQS = [
  {
    q: "How much does a website design cost in Pune?",
    a: "At Inrank Technologies, website design packages start at ₹11,999 for a 5-page responsive Starter business site. Complete Business Growth websites with CMS and Schema are ₹16,999, and full-featured E-Commerce stores are ₹21,999 with zero hidden charges and 365 days of technical support."
  },
  {
    q: "How long does it take to develop a business website in Pune?",
    a: "Standard corporate websites are typically launched within 5 to 7 business days once initial requirements and content are aligned. Complex e-commerce portals take approximately 10 to 14 days."
  },
  {
    q: "Do I own 100% of my website code, domain, and hosting?",
    a: "Yes, 100%. Unlike legacy agencies that lock clients into proprietary systems, Inrank transfers full source code, domain ownership, and hosting control to you immediately upon launch. You have zero vendor lock-in."
  },
  {
    q: "Can you redesign our existing outdated website without losing Google rankings?",
    a: "Yes. We execute a comprehensive 1-to-1 301 redirect map, preserve existing high-ranking URL slugs, upgrade page speed to sub-1.2s Core Web Vitals, and enhance on-page Schema.org entity markup to protect and boost your organic rankings."
  },
  {
    q: "What is the difference between custom code and a generic template?",
    a: "Generic templates are bloated with unused plugins and code, resulting in slow 4+ second load times and poor Google rankings. Inrank builds with clean, bespoke semantic HTML5, Vite, Tailwind, or lightweight custom WordPress, guaranteeing sub-second page loads and 90+ Lighthouse mobile scores."
  },
  {
    q: "Do you provide web design services across Baner, Hinjewadi, and PCMC?",
    a: "Yes, we work with businesses across all Pune IT and industrial corridors including Baner, Hinjewadi (Phase 1, 2, 3), Wakad, Balewadi High Street, Kharadi EON zone, Viman Nagar, Hadapsar Magarpatta, Kothrud, and the PCMC industrial belt."
  },
  {
    q: "Do you provide ongoing maintenance and technical support after launch?",
    a: "Every Inrank website package includes 365 days of free technical warranty and support covering SSL monitoring, security hardening, automated backups, and bug fixes."
  },
  {
    q: "Can we meet in person at your Pune office before starting?",
    a: "Yes! You are welcome to visit our engineering office or schedule an in-person consultation across Baner, Balewadi High Street, FC Road, Hinjewadi, or PCMC."
  }
];

const WEB_DESIGN_STANDARDS_SECTION = `
        <!-- The 6 Non-Negotiable Standards in Every Inrank Website -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-border">
          <div class="text-center max-w-3xl mx-auto mb-14">
            <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 inline-block">The Inrank Engineering Standard</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-foreground mt-3 tracking-tight">What Every Inrank Website Includes by Default</h2>
            <p class="text-muted-foreground text-sm mt-2">We don't sell bloated templates or charge extra for essentials. Every web platform is engineered with enterprise performance standards.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Feature 1 -->
            <div class="p-7 rounded-2xl bg-card border border-border hover:border-emerald-500 shadow-sm transition-all tilt-card">
              <div class="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-5">
                <i data-lucide="zap" class="w-6 h-6"></i>
              </div>
              <h3 class="text-lg font-bold text-foreground mb-2">Sub-1.2s Core Web Vitals Guarantee</h3>
              <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Slow websites lose customers. We optimize Largest Contentful Paint (LCP), CLS, and INP to achieve 90+ Google PageSpeed mobile scores, keeping bounce rates under 25%.
              </p>
            </div>

            <!-- Feature 2 -->
            <div class="p-7 rounded-2xl bg-card border border-border hover:border-emerald-500 shadow-sm transition-all tilt-card">
              <div class="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-5">
                <i data-lucide="message-circle" class="w-6 h-6"></i>
              </div>
              <h3 class="text-lg font-bold text-foreground mb-2">1-Tap WhatsApp Conversion Funnels</h3>
              <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                90% of Pune buyers prefer WhatsApp over email forms. Every page features frictionless, pre-filled WhatsApp inquiry triggers that deliver leads directly to your sales phone in real time.
              </p>
            </div>

            <!-- Feature 3 -->
            <div class="p-7 rounded-2xl bg-card border border-border hover:border-emerald-500 shadow-sm transition-all tilt-card">
              <div class="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-5">
                <i data-lucide="search" class="w-6 h-6"></i>
              </div>
              <h3 class="text-lg font-bold text-foreground mb-2">Schema.org &amp; GEO Entity Markup</h3>
              <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Deep JSON-LD structured data (LocalBusiness, ProfessionalService, FAQPage, Breadcrumbs) engineered so Google Maps 3-Pack, Google AI Overviews, and ChatGPT accurately cite your business.
              </p>
            </div>

            <!-- Feature 4 -->
            <div class="p-7 rounded-2xl bg-card border border-border hover:border-emerald-500 shadow-sm transition-all tilt-card">
              <div class="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-5">
                <i data-lucide="unlock" class="w-6 h-6"></i>
              </div>
              <h3 class="text-lg font-bold text-foreground mb-2">100% Client Ownership (No Lock-In)</h3>
              <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                You own 100% of your source code, domain name, and hosting infrastructure. Zero proprietary software lock-ins, zero exit fees, and complete administrative control transferred upon launch.
              </p>
            </div>

            <!-- Feature 5 -->
            <div class="p-7 rounded-2xl bg-card border border-border hover:border-emerald-500 shadow-sm transition-all tilt-card">
              <div class="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-5">
                <i data-lucide="smartphone" class="w-6 h-6"></i>
              </div>
              <h3 class="text-lg font-bold text-foreground mb-2">Fluid Mobile &amp; Tablet Ergonomics</h3>
              <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Over 78% of Pune web visits occur on mobile screens. We design mobile-first with sticky bottom conversion action bars, thumb-friendly tap targets, and crisp retina typography.
              </p>
            </div>

            <!-- Feature 6 -->
            <div class="p-7 rounded-2xl bg-card border border-border hover:border-emerald-500 shadow-sm transition-all tilt-card">
              <div class="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-5">
                <i data-lucide="shield-check" class="w-6 h-6"></i>
              </div>
              <h3 class="text-lg font-bold text-foreground mb-2">365 Days Extended Technical Warranty</h3>
              <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                We stand firmly behind our work. Includes 1 full year of SSL certificate renewals, security scans, automated off-site backups, and fast bug resolution at zero additional cost.
              </p>
            </div>
          </div>
        </section>
`;

const WEB_DESIGN_PROCESS_SECTION = `
        <!-- Our 4-Step 5-7 Day Launch Protocol -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-border">
          <div class="text-center max-w-3xl mx-auto mb-14">
            <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 inline-block">Agile Delivery Timeline</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-foreground mt-3 tracking-tight">From Initial Brief to Live Website in 5-7 Days</h2>
            <p class="text-muted-foreground text-sm mt-2">Our streamlined 4-stage sprint eliminates agency bureaucracy and gets your high-converting website in front of customers fast.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <!-- Step 1 -->
            <div class="p-6 rounded-2xl bg-card border border-border shadow-sm flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-4">
                  <span class="text-xs font-extrabold uppercase px-2.5 py-1 rounded bg-emerald-100 text-emerald-800">Day 1</span>
                  <span class="text-2xl font-black text-emerald-600/25">01</span>
                </div>
                <h3 class="text-base font-bold text-foreground mb-2">Strategy &amp; Wireframing</h3>
                <p class="text-xs text-muted-foreground leading-relaxed">
                  We analyze your Pune competitors, clarify your unique commercial differentiators, map user conversion funnels, and draft mobile wireframes.
                </p>
              </div>
              <div class="text-[11px] font-semibold text-emerald-600 mt-4 flex items-center gap-1.5">
                <i data-lucide="check-circle" class="w-3.5 h-3.5"></i>
                <span>Sitemap &amp; Wireframe Signed Off</span>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="p-6 rounded-2xl bg-card border border-border shadow-sm flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-4">
                  <span class="text-xs font-extrabold uppercase px-2.5 py-1 rounded bg-emerald-100 text-emerald-800">Days 2-3</span>
                  <span class="text-2xl font-black text-emerald-600/25">02</span>
                </div>
                <h3 class="text-base font-bold text-foreground mb-2">Custom UI/UX in Figma</h3>
                <p class="text-xs text-muted-foreground leading-relaxed">
                  Our UI team crafts pixel-perfect, modern responsive layouts with bespoke typography palettes, brand color schemes, and high-impact visual mockups.
                </p>
              </div>
              <div class="text-[11px] font-semibold text-emerald-600 mt-4 flex items-center gap-1.5">
                <i data-lucide="check-circle" class="w-3.5 h-3.5"></i>
                <span>Figma Prototype Approved</span>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="p-6 rounded-2xl bg-card border border-border shadow-sm flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-4">
                  <span class="text-xs font-extrabold uppercase px-2.5 py-1 rounded bg-emerald-100 text-emerald-800">Days 4-5</span>
                  <span class="text-2xl font-black text-emerald-600/25">03</span>
                </div>
                <h3 class="text-base font-bold text-foreground mb-2">High-Speed Code Sprint</h3>
                <p class="text-xs text-muted-foreground leading-relaxed">
                  Senior engineers build clean, bloat-free HTML5/Vite/Tailwind or custom WordPress code with zero render-blocking scripts, ensuring sub-1.2s LCP speeds.
                </p>
              </div>
              <div class="text-[11px] font-semibold text-emerald-600 mt-4 flex items-center gap-1.5">
                <i data-lucide="check-circle" class="w-3.5 h-3.5"></i>
                <span>Staging Review &amp; Client Feedback</span>
              </div>
            </div>

            <!-- Step 4 -->
            <div class="p-6 rounded-2xl bg-card border border-border shadow-sm flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-4">
                  <span class="text-xs font-extrabold uppercase px-2.5 py-1 rounded bg-emerald-100 text-emerald-800">Days 6-7</span>
                  <span class="text-2xl font-black text-emerald-600/25">04</span>
                </div>
                <h3 class="text-base font-bold text-foreground mb-2">SEO, Schema &amp; Launch</h3>
                <p class="text-xs text-muted-foreground leading-relaxed">
                  Rigorous cross-device testing, Schema.org injection, Google Search Console indexing, domain DNS point, and live production deployment.
                </p>
              </div>
              <div class="text-[11px] font-semibold text-emerald-600 mt-4 flex items-center gap-1.5">
                <i data-lucide="check-circle" class="w-3.5 h-3.5"></i>
                <span>100% Live &amp; Handover Complete</span>
              </div>
            </div>
          </div>
        </section>
`;

const WEB_DESIGN_INDUSTRIES_SECTION = `
        <!-- Industry-Tailored Web Architecture in Pune -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-border">
          <div class="text-center max-w-3xl mx-auto mb-14">
            <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 inline-block">Industry-Specific Web Solutions</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-foreground mt-3 tracking-tight">Engineered for Pune's Leading Business Sectors</h2>
            <p class="text-muted-foreground text-sm mt-2">Every industry requires distinct conversion funnels. We tailor user journeys specifically to how your target buyers make decisions.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Sector 1 -->
            <div class="p-6 rounded-2xl bg-card border border-border hover:border-emerald-500 shadow-sm transition-all tilt-card">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <i data-lucide="cog" class="w-5 h-5"></i>
                </div>
                <div>
                  <h3 class="text-base font-bold text-foreground">B2B Manufacturing &amp; Engineering</h3>
                  <span class="text-[11px] text-muted-foreground">PCMC, Bhosari, Chakan &amp; Talawade</span>
                </div>
              </div>
              <p class="text-xs text-muted-foreground leading-relaxed mb-4">
                Technical spec sheet downloads, interactive machinery 3D galleries, ISO/CE certification showcases, and 1-tap WhatsApp RFQ intake systems for global and domestic buyers.
              </p>
              <span class="text-xs font-bold text-emerald-600 inline-flex items-center gap-1">
                <span>Featured Client: CyTOS Machines (+340% RFQs)</span>
              </span>
            </div>

            <!-- Sector 2 -->
            <div class="p-6 rounded-2xl bg-card border border-border hover:border-emerald-500 shadow-sm transition-all tilt-card">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <i data-lucide="activity" class="w-5 h-5"></i>
                </div>
                <div>
                  <h3 class="text-base font-bold text-foreground">Healthcare &amp; Specialty Clinics</h3>
                  <span class="text-[11px] text-muted-foreground">Kothrud, Baner, Aundh &amp; Camp</span>
                </div>
              </div>
              <p class="text-xs text-muted-foreground leading-relaxed mb-4">
                HIPAA-conscious appointment booking funnels, doctor credentials schema, patient video testimonials, and hyperlocal Google Maps 3-Pack optimization for high surgical search visibility.
              </p>
              <span class="text-xs font-bold text-emerald-600 inline-flex items-center gap-1">
                <span>Featured Client: Dr. Shyam Thakkar Clinic (Top-3 Ranks)</span>
              </span>
            </div>

            <!-- Sector 3 -->
            <div class="p-6 rounded-2xl bg-card border border-border hover:border-emerald-500 shadow-sm transition-all tilt-card">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <i data-lucide="shopping-bag" class="w-5 h-5"></i>
                </div>
                <div>
                  <h3 class="text-base font-bold text-foreground">D2C Brands &amp; E-Commerce</h3>
                  <span class="text-[11px] text-muted-foreground">Balewadi, Viman Nagar &amp; FC Road</span>
                </div>
              </div>
              <p class="text-xs text-muted-foreground leading-relaxed mb-4">
                Sub-second Shopify &amp; WooCommerce storefronts with Razorpay/UPI gateways, 1-click WhatsApp orders, abandoned cart recovery, and mobile checkout optimized for 5%+ conversion rates.
              </p>
              <span class="text-xs font-bold text-emerald-600 inline-flex items-center gap-1">
                <span>Featured Client: Greytothegreen (5.2x ROAS)</span>
              </span>
            </div>

            <!-- Sector 4 -->
            <div class="p-6 rounded-2xl bg-card border border-border hover:border-emerald-500 shadow-sm transition-all tilt-card">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <i data-lucide="home" class="w-5 h-5"></i>
                </div>
                <div>
                  <h3 class="text-base font-bold text-foreground">Real Estate &amp; Construction</h3>
                  <span class="text-[11px] text-muted-foreground">Wakad, Kharadi, Baner &amp; Ravet</span>
                </div>
              </div>
              <p class="text-xs text-muted-foreground leading-relaxed mb-4">
                Floor plan viewers, downloadable brochures with phone verification, interactive location maps, and high-converting paid ad landing pages for Pune residential and commercial projects.
              </p>
              <span class="text-xs font-bold text-emerald-600 inline-flex items-center gap-1">
                <span>Optimized for High-Ticket Lead Capture</span>
              </span>
            </div>

            <!-- Sector 5 -->
            <div class="p-6 rounded-2xl bg-card border border-border hover:border-emerald-500 shadow-sm transition-all tilt-card">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <i data-lucide="briefcase" class="w-5 h-5"></i>
                </div>
                <div>
                  <h3 class="text-base font-bold text-foreground">Corporate &amp; Financial Services</h3>
                  <span class="text-[11px] text-muted-foreground">Hinjewadi, Magarpatta &amp; Senapati Bapat Rd</span>
                </div>
              </div>
              <p class="text-xs text-muted-foreground leading-relaxed mb-4">
                Institutional credibility layouts, financial calculator integrations, secure lead capture, and executive profile schema for wealth management, debt syndication, and IT consultancies.
              </p>
              <span class="text-xs font-bold text-emerald-600 inline-flex items-center gap-1">
                <span>Featured Client: Dravya Financial (₹45Cr+ Deals)</span>
              </span>
            </div>

            <!-- Sector 6 -->
            <div class="p-6 rounded-2xl bg-card border border-border hover:border-emerald-500 shadow-sm transition-all tilt-card">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <i data-lucide="graduation-cap" class="w-5 h-5"></i>
                </div>
                <div>
                  <h3 class="text-base font-bold text-foreground">Education &amp; Professional Coaching</h3>
                  <span class="text-[11px] text-muted-foreground">FC Road, Sadashiv Peth &amp; Kothrud</span>
                </div>
              </div>
              <p class="text-xs text-muted-foreground leading-relaxed mb-4">
                Syllabus downloads, student result showcases, fee inquiry funnels, and test preparation admission portals with rapid mobile enrollment forms.
              </p>
              <span class="text-xs font-bold text-emerald-600 inline-flex items-center gap-1">
                <span>Featured Client: Riitu Institution (12k+ Inquiries)</span>
              </span>
            </div>
          </div>
        </section>
`;

const WEB_DESIGN_TECH_STACK_SECTION = `
        <!-- Modern Tech Stack & Performance Guarantee Callout -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div class="rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 via-card to-emerald-500/5 p-8 sm:p-10 shadow-sm">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div class="lg:col-span-7">
                <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 inline-block mb-2">Modern Web Stack</span>
                <h3 class="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">Zero Slow Plugins. Zero Bloat. Pure Speed.</h3>
                <p class="text-xs sm:text-sm text-muted-foreground mt-3 leading-relaxed">
                  While ordinary agencies install 40+ third-party WordPress plugins that slow your site down to a crawl, Inrank builds with modern, lightweight architecture. Every codebase is hand-crafted with semantic HTML5, modern CSS, lightweight React/Vite, or optimized custom WordPress without page-builder bloat.
                </p>
                <div class="flex flex-wrap gap-2.5 mt-5">
                  <span class="px-3 py-1 rounded-lg bg-card border border-border text-xs font-bold text-foreground">HTML5 &amp; Vanilla JS</span>
                  <span class="px-3 py-1 rounded-lg bg-card border border-border text-xs font-bold text-foreground">Tailwind CSS</span>
                  <span class="px-3 py-1 rounded-lg bg-card border border-border text-xs font-bold text-foreground">React 18 / 19</span>
                  <span class="px-3 py-1 rounded-lg bg-card border border-border text-xs font-bold text-foreground">Next.js 15</span>
                  <span class="px-3 py-1 rounded-lg bg-card border border-border text-xs font-bold text-foreground">WordPress ACF Pro</span>
                  <span class="px-3 py-1 rounded-lg bg-card border border-border text-xs font-bold text-foreground">Shopify Liquid</span>
                  <span class="px-3 py-1 rounded-lg bg-card border border-border text-xs font-bold text-foreground">Cloudflare Edge CDN</span>
                </div>
              </div>
              <div class="lg:col-span-5 bg-card/90 rounded-2xl p-6 border border-border shadow-sm text-center">
                <div class="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-3">
                  <i data-lucide="shield" class="w-6 h-6"></i>
                </div>
                <h4 class="text-lg font-bold text-foreground">The Inrank SLA Guarantee</h4>
                <p class="text-xs text-muted-foreground mt-2 leading-relaxed">
                  If your website does not achieve a sub-1.5s mobile speed benchmark upon milestone review, we optimize and recode it until it does—at zero extra cost.
                </p>
                <div class="mt-4 pt-4 border-t border-border flex justify-around text-xs">
                  <div><strong class="text-foreground block font-bold">95+</strong><span class="text-muted-foreground">Mobile Score</span></div>
                  <div><strong class="text-foreground block font-bold">&lt; 1.2s</strong><span class="text-muted-foreground">LCP Speed</span></div>
                  <div><strong class="text-foreground block font-bold">365 Days</strong><span class="text-muted-foreground">Free Warranty</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>
`;

// =========================================================================
// 2. CONTENT BLOCKS FOR digital-marketing-agency-in-pune.html
// =========================================================================

const DM_HEAD_FAQS = [
  {
    q: "How much do digital marketing services cost in Pune with Inrank?",
    a: "Inrank provides transparent monthly retainers starting from ₹11,999/month for Starter SEO (up to 15 keywords + Google 3-Pack), ₹18,999/month for Growth Engine (up to 30 keywords + Google Ads management), and ₹27,999/month for Enterprise Domination with Generative Engine Optimization (GEO) and Meta Ads. We do not enforce long-term lock-in contracts."
  },
  {
    q: "How soon can we expect measurable leads and revenue?",
    a: "Paid advertising campaigns (Google Ads and Meta Ads) begin generating verified inquiries within 48 to 72 hours of launch. Organic Local SEO and Google Maps 3-Pack ranking typically exhibit significant ranking movement and call volume increases within 45 to 90 days."
  },
  {
    q: "Do we have to sign a long-term 6 or 12-month lock-in contract?",
    a: "No. Inrank operates strictly on month-to-month retainers. We believe in earning your partnership every single month through transparent revenue attribution, verified lead generation, and continuous ROI improvements."
  },
  {
    q: "What is Generative Engine Optimization (GEO) and why is it essential?",
    a: "GEO is next-generation search engine optimization engineered for AI answer engines including Google AI Overviews, ChatGPT Search, and Perplexity. Inrank structures your entity schema and authoritative citations so your brand is directly recommended when potential buyers ask AI queries like 'best B2B manufacturers in Pune' or 'top clinics in Baner'."
  },
  {
    q: "Do you provide digital marketing for industrial and B2B companies in PCMC and Chakan?",
    a: "Yes. A significant portion of our portfolio consists of precision CNC manufacturers, engineering export firms, auto ancillary suppliers, and industrial automation brands across Bhosari MIDC, Chakan Industrial Area, Talawade, and Hinjewadi."
  },
  {
    q: "Which platform drives better ROI for Pune businesses: Google Ads or Meta Ads?",
    a: "Google Ads captures high-intent, immediate buyers actively searching for solutions (ideal for B2B engineering, corporate services, clinics, and real estate). Meta Ads (Instagram & Facebook) excels at demand generation, visual brand storytelling, retargeting, and D2C scale. For maximum ROI, Inrank integrates both into a unified acquisition funnel."
  },
  {
    q: "How do you track whether leads from ads are actually turning into paying customers?",
    a: "We configure end-to-end conversion tracking using Google Analytics 4 (GA4), Meta Conversions API (CAPI), and direct WhatsApp CRM event tagging. You receive a live 24/7 dashboard showing exact cost per lead, inquiry source, and revenue generated."
  },
  {
    q: "Can you manage our ad spend directly inside our Google and Meta ad accounts?",
    a: "Yes. All ad campaigns are configured inside your own Google Ads and Meta Business Manager accounts. You retain 100% ownership of your audience data, billing, and campaign history."
  },
  {
    q: "What daily or monthly ad budget do we need to start running ads?",
    a: "For Google Search Ads in Pune, we typically recommend an initial test ad spend of ₹15,000 to ₹30,000/month. For Meta Ads, ₹10,000 to ₹25,000/month is sufficient to test creative variations and capture qualified buyers."
  },
  {
    q: "Why choose Inrank over other digital marketing agencies in Pune?",
    a: "Unlike traditional Pune agencies that charge opaque retainers, assign junior interns, and report on vanity impressions, Inrank pairs you directly with senior growth engineers. We provide transparent upfront pricing, real conversion attribution, sub-second landing page speeds, and weekly WhatsApp communication."
  }
];

const DM_CHANNEL_GUIDE_SECTION = `
        <!-- Channel Selection Guide: Google Ads vs Meta Ads vs SEO vs GEO -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-border">
          <div class="text-center max-w-3xl mx-auto mb-14">
            <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 inline-block">Strategic Capital Allocation</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-foreground mt-3 tracking-tight">Which Channel Will Drive Revenue for Your Pune Business?</h2>
            <p class="text-muted-foreground text-sm mt-2">Stop guessing where to spend your marketing budget. Here is how our growth engineers deploy acquisition capital across Pune commercial sectors.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Channel 1: Google Ads -->
            <div class="p-6 rounded-2xl bg-card border border-border hover:border-emerald-500 shadow-sm transition-all tilt-card flex flex-col justify-between">
              <div>
                <div class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  <i data-lucide="target" class="w-5 h-5"></i>
                </div>
                <div class="flex items-center justify-between mb-2">
                  <h3 class="text-base font-bold text-foreground">Google Search &amp; PMax</h3>
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">Immediate</span>
                </div>
                <p class="text-xs text-muted-foreground leading-relaxed mb-4">
                  Captures prospects with urgent commercial intent actively searching for your service right now.
                </p>
                <div class="space-y-1.5 text-xs border-t border-border pt-3 text-muted-foreground">
                  <div><strong>Best for:</strong> B2B, Clinics, Industrial &amp; Corporate</div>
                  <div><strong>Speed:</strong> Inquiries within 48-72 hours</div>
                  <div><strong>Intent Level:</strong> Very High (Ready to Buy)</div>
                </div>
              </div>
              <div class="mt-4 pt-3 border-t border-border text-[11px] font-semibold text-emerald-600">
                Managed from ₹18,999/mo retainer
              </div>
            </div>

            <!-- Channel 2: Meta Ads -->
            <div class="p-6 rounded-2xl bg-card border border-border hover:border-emerald-500 shadow-sm transition-all tilt-card flex flex-col justify-between">
              <div>
                <div class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  <i data-lucide="share-2" class="w-5 h-5"></i>
                </div>
                <div class="flex items-center justify-between mb-2">
                  <h3 class="text-base font-bold text-foreground">Meta (Instagram/FB)</h3>
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-secondary text-foreground">Fast Scale</span>
                </div>
                <p class="text-xs text-muted-foreground leading-relaxed mb-4">
                  Stimulates visual demand and creates desire through short-form video reels and product showcases.
                </p>
                <div class="space-y-1.5 text-xs border-t border-border pt-3 text-muted-foreground">
                  <div><strong>Best for:</strong> D2C, Fashion, Real Estate &amp; Retail</div>
                  <div><strong>Speed:</strong> Inquiries within 3-5 days</div>
                  <div><strong>Intent Level:</strong> Discovery &amp; Retargeting</div>
                </div>
              </div>
              <div class="mt-4 pt-3 border-t border-border text-[11px] font-semibold text-emerald-600">
                Integrated with CAPI Server Tracking
              </div>
            </div>

            <!-- Channel 3: Google 3-Pack SEO -->
            <div class="p-6 rounded-2xl bg-card border border-border hover:border-emerald-500 shadow-sm transition-all tilt-card flex flex-col justify-between">
              <div>
                <div class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  <i data-lucide="map-pin" class="w-5 h-5"></i>
                </div>
                <div class="flex items-center justify-between mb-2">
                  <h3 class="text-base font-bold text-foreground">Google Maps 3-Pack</h3>
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">Compounding</span>
                </div>
                <p class="text-xs text-muted-foreground leading-relaxed mb-4">
                  Dominates local search results across Baner, Hinjewadi, Wakad, and PCMC corridors with zero ad click costs.
                </p>
                <div class="space-y-1.5 text-xs border-t border-border pt-3 text-muted-foreground">
                  <div><strong>Best for:</strong> Local Clinics, Stores, Law &amp; Tech</div>
                  <div><strong>Speed:</strong> Ranks build over 30-60 days</div>
                  <div><strong>Intent Level:</strong> High Local Intent</div>
                </div>
              </div>
              <div class="mt-4 pt-3 border-t border-border text-[11px] font-semibold text-emerald-600">
                Included in ₹11,999/mo Starter
              </div>
            </div>

            <!-- Channel 4: GEO & AI Citations -->
            <div class="p-6 rounded-2xl bg-card border border-border hover:border-emerald-500 shadow-sm transition-all tilt-card flex flex-col justify-between">
              <div>
                <div class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  <i data-lucide="sparkles" class="w-5 h-5"></i>
                </div>
                <div class="flex items-center justify-between mb-2">
                  <h3 class="text-base font-bold text-foreground">GEO &amp; AI Citations</h3>
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-secondary text-foreground">Future-Proof</span>
                </div>
                <p class="text-xs text-muted-foreground leading-relaxed mb-4">
                  Gets your brand cited when decision-makers ask ChatGPT, Perplexity, or Google AI Overviews for recommendations.
                </p>
                <div class="space-y-1.5 text-xs border-t border-border pt-3 text-muted-foreground">
                  <div><strong>Best for:</strong> B2B Brands, Founders, High-Ticket</div>
                  <div><strong>Speed:</strong> Ingestion within 14-30 days</div>
                  <div><strong>Intent Level:</strong> High Trust &amp; Authority</div>
                </div>
              </div>
              <div class="mt-4 pt-3 border-t border-border text-[11px] font-semibold text-emerald-600">
                llms.txt &amp; Entity Graphs Built-in
              </div>
            </div>
          </div>
        </section>
`;

const DM_90_DAY_MILESTONES_SECTION = `
        <!-- 90-Day Expected Growth Milestones -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-border">
          <div class="text-center max-w-3xl mx-auto mb-14">
            <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 inline-block">Predictable Revenue Trajectory</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-foreground mt-3 tracking-tight">Your 90-Day Digital Growth Roadmap</h2>
            <p class="text-muted-foreground text-sm mt-2">Here is the exact progression you will observe from the day we launch your digital growth campaigns in Pune.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Month 1 -->
            <div class="p-7 rounded-2xl bg-card border border-border shadow-sm flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-4">
                  <span class="text-xs font-extrabold uppercase px-2.5 py-1 rounded bg-emerald-100 text-emerald-800">Days 1 - 30</span>
                  <span class="text-2xl font-black text-emerald-600/25">M1</span>
                </div>
                <h3 class="text-lg font-bold text-foreground mb-2">Foundation, Tracking &amp; First Leads</h3>
                <p class="text-xs text-muted-foreground leading-relaxed mb-4">
                  Complete technical audit of your website and competitors. Setup of GA4 event tracking, negative keyword lists, and landing page optimization. Google &amp; Meta ad campaigns launch, generating verified inquiries within the first 72 hours.
                </p>
                <ul class="space-y-2 text-xs text-muted-foreground">
                  <li class="flex items-center gap-2"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600"></i> GA4 &amp; WhatsApp CRM attribution active</li>
                  <li class="flex items-center gap-2"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600"></i> Google Business Profile audit &amp; geotags</li>
                  <li class="flex items-center gap-2"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600"></i> First batch of paid inquiries generated</li>
                </ul>
              </div>
              <div class="mt-6 pt-4 border-t border-border text-xs font-semibold text-emerald-600">
                Primary Goal: Establish Baseline Cost Per Lead (CPA)
              </div>
            </div>

            <!-- Month 2 -->
            <div class="p-7 rounded-2xl bg-card border border-border shadow-sm flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-4">
                  <span class="text-xs font-extrabold uppercase px-2.5 py-1 rounded bg-emerald-100 text-emerald-800">Days 31 - 60</span>
                  <span class="text-2xl font-black text-emerald-600/25">M2</span>
                </div>
                <h3 class="text-lg font-bold text-foreground mb-2">Optimization, CPA Reduction &amp; 3-Pack Growth</h3>
                <p class="text-xs text-muted-foreground leading-relaxed mb-4">
                  We prune underperforming ad keywords and scale top-converting search queries. A/B testing on landing page CTAs lowers acquisition costs by 20-35%. Local Google 3-Pack rankings begin climbing into top-5 positions across Pune.
                </p>
                <ul class="space-y-2 text-xs text-muted-foreground">
                  <li class="flex items-center gap-2"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600"></i> 20-35% reduction in cost per lead</li>
                  <li class="flex items-center gap-2"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600"></i> 10+ local Pune citation directories indexed</li>
                  <li class="flex items-center gap-2"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600"></i> Organic search impressions double</li>
                </ul>
              </div>
              <div class="mt-6 pt-4 border-t border-border text-xs font-semibold text-emerald-600">
                Primary Goal: Maximize Inquiry Quality &amp; Lower Ad Costs
              </div>
            </div>

            <!-- Month 3 -->
            <div class="p-7 rounded-2xl bg-card border border-border shadow-sm flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-4">
                  <span class="text-xs font-extrabold uppercase px-2.5 py-1 rounded bg-emerald-100 text-emerald-800">Days 61 - 90+</span>
                  <span class="text-2xl font-black text-emerald-600/25">M3</span>
                </div>
                <h3 class="text-lg font-bold text-foreground mb-2">Scale, Organic Monopoly &amp; GEO Citations</h3>
                <p class="text-xs text-muted-foreground leading-relaxed mb-4">
                  Your organic Google 3-Pack rankings solidify in top-3 spots across Baner, Hinjewadi, and target Pune corridors. Generative Engine Optimization begins earning brand citations in ChatGPT Search and Google AI Overviews.
                </p>
                <ul class="space-y-2 text-xs text-muted-foreground">
                  <li class="flex items-center gap-2"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600"></i> Top-3 Google Maps 3-Pack ranking achieved</li>
                  <li class="flex items-center gap-2"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600"></i> Consistent stream of zero-ad-cost organic leads</li>
                  <li class="flex items-center gap-2"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600"></i> Predictable monthly revenue scaling</li>
                </ul>
              </div>
              <div class="mt-6 pt-4 border-t border-border text-xs font-semibold text-emerald-600">
                Primary Goal: High ROAS &amp; Organic Inbound Dominance
              </div>
            </div>
          </div>
        </section>
`;

const DM_ATTRIBUTION_GUARANTEE_SECTION = `
        <!-- 100% Transparent Attribution & Reporting Guarantee -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div class="rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 via-card to-emerald-500/5 p-8 sm:p-10 shadow-sm">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div class="lg:col-span-7">
                <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 inline-block mb-2">Accountability Standards</span>
                <h3 class="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">Zero Vanity Metrics. 100% Revenue Attribution.</h3>
                <p class="text-xs sm:text-sm text-muted-foreground mt-3 leading-relaxed">
                  We don't send confusing 40-page PDF reports filled with vanity impressions and meaningless clicks. Inrank builds a customized, live Google Looker Studio dashboard that connects directly to your Google Ads, Meta Ads, and GA4 accounts. You see every single rupee spent, exact cost per inquiry, and which keywords are generating paying customers.
                </p>
                <div class="flex flex-wrap gap-2.5 mt-5">
                  <span class="px-3 py-1 rounded-lg bg-card border border-border text-xs font-bold text-foreground">Live 24/7 Looker Studio Dashboard</span>
                  <span class="px-3 py-1 rounded-lg bg-card border border-border text-xs font-bold text-foreground">Weekly WhatsApp Performance Recaps</span>
                  <span class="px-3 py-1 rounded-lg bg-card border border-border text-xs font-bold text-foreground">Bi-Weekly Strategy Calls with Senior Engineers</span>
                  <span class="px-3 py-1 rounded-lg bg-card border border-border text-xs font-bold text-foreground">Month-to-Month Contracts (Zero Lock-in)</span>
                </div>
              </div>
              <div class="lg:col-span-5 bg-card/90 rounded-2xl p-6 border border-border shadow-sm text-center">
                <div class="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-3">
                  <i data-lucide="award" class="w-6 h-6"></i>
                </div>
                <h4 class="text-lg font-bold text-foreground">The Inrank Growth Promise</h4>
                <p class="text-xs text-muted-foreground mt-2 leading-relaxed">
                  Direct WhatsApp access to senior strategists with a 15-minute response SLA. No ticket queues, no junior interns, and complete transparency into every campaign setting.
                </p>
                <div class="mt-4 pt-4 border-t border-border flex justify-around text-xs">
                  <div><strong class="text-foreground block font-bold">15 Min</strong><span class="text-muted-foreground">WhatsApp SLA</span></div>
                  <div><strong class="text-foreground block font-bold">4.8x</strong><span class="text-muted-foreground">Avg Client ROAS</span></div>
                  <div><strong class="text-foreground block font-bold">0 Days</strong><span class="text-muted-foreground">Contract Lock-in</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>
`;

// =========================================================================
// HELPER TO GENERATE ACCORDION FAQS HTML
// =========================================================================

function generateAccordionFaqs(faqsList) {
  let html = '<div class="space-y-4">\n';
  faqsList.forEach((faq, index) => {
    const isOpen = index === 0 ? ' open' : '';
    html += `            <details class="group bg-card rounded-2xl border border-border p-5 sm:p-6 shadow-sm hover:border-border/80 transition-all [&_summary::-webkit-details-marker]:hidden cursor-pointer"${isOpen}>
              <summary class="flex justify-between items-center text-foreground font-bold text-sm sm:text-base">
                <span>${faq.q}</span>
                <span class="transition group-open:rotate-180"><i data-lucide="chevron-down" class="w-4 h-4 text-muted-foreground"></i></span>
              </summary>
              <p class="text-xs sm:text-sm text-muted-foreground mt-3 leading-relaxed">
                ${faq.a}
              </p>
            </details>\n`;
  });
  html += '          </div>';
  return html;
}

function generateSchemaFaqs(faqsList) {
  const mainEntities = faqsList.map(faq => {
    return `            {
              "@type": "Question",
              "name": ${JSON.stringify(faq.q)},
              "acceptedAnswer": {
                "@type": "Answer",
                "text": ${JSON.stringify(faq.a)}
              }
            }`;
  }).join(',\n');

  return `        {
          "@type": "FAQPage",
          "@id": "CURRENT_PAGE_URL#faq",
          "mainEntity": [
${mainEntities}
          ]
        }`;
}

// =========================================================================
// MAIN UPDATE EXECUTION
// =========================================================================

function updateWebDesignPage() {
  const filePath = path.join(ROOT_DIR, 'website-design-company-in-pune.html');
  let content = fs.readFileSync(filePath, 'utf8');

  console.log("Updating website-design-company-in-pune.html...");

  // 1. Update Schema FAQPage in <head>
  const faqSchemaStr = generateSchemaFaqs(WEB_DESIGN_HEAD_FAQS)
    .replace('CURRENT_PAGE_URL', 'https://inranktech.com/website-design-company-in-pune.html');
  
  const faqSchemaRegex = /\{\s*"@type":\s*"FAQPage"[\s\S]*?mainEntity":\s*\[[\s\S]*?\]\s*\}/;
  if (faqSchemaRegex.test(content)) {
    content = content.replace(faqSchemaRegex, faqSchemaStr);
    console.log("-> Replaced Schema FAQPage");
  } else {
    console.warn("-> Could not match Schema FAQPage regex");
  }

  // 2. Insert Standards Section before "Pune Client Success Proof"
  if (!content.includes("The 6 Non-Negotiable Standards in Every Inrank Website")) {
    const proofTarget = '<!-- Pune Client Success Proof & Live Case Studies -->';
    if (content.includes(proofTarget)) {
      content = content.replace(proofTarget, WEB_DESIGN_STANDARDS_SECTION + '\n' + proofTarget);
      console.log("-> Inserted Standards Section");
    } else {
      console.warn("-> Could not find proof target in web design page");
    }
  }

  // 3. Insert Process Section before Pricing Section
  if (!content.includes("Our 4-Step 5-7 Day Launch Protocol")) {
    const pricingTarget = '<!-- Transparent Pricing Grid (Light Mode) -->';
    if (content.includes(pricingTarget)) {
      content = content.replace(pricingTarget, WEB_DESIGN_PROCESS_SECTION + '\n' + pricingTarget);
      console.log("-> Inserted Process Section");
    } else {
      console.warn("-> Could not find pricing target in web design page");
    }
  }

  // 4. Insert Industries & Tech Stack after Pricing Section (before Comparison Table)
  if (!content.includes("Industry-Tailored Web Architecture in Pune")) {
    const compareTarget = '<!-- Why Inrank Outperforms Competitors (Light Mode Table) -->';
    if (content.includes(compareTarget)) {
      content = content.replace(compareTarget, WEB_DESIGN_INDUSTRIES_SECTION + '\n' + WEB_DESIGN_TECH_STACK_SECTION + '\n' + compareTarget);
      console.log("-> Inserted Industries and Tech Stack Sections");
    } else {
      console.warn("-> Could not find comparison target in web design page");
    }
  }

  // 5. Replace FAQs Accordion
  const faqsAccordionRegex = /<div class="space-y-4">[\s\S]*?<\/div>\s*<\/section>\s*<\/main>/;
  if (faqsAccordionRegex.test(content)) {
    const newFaqsHtml = generateAccordionFaqs(WEB_DESIGN_HEAD_FAQS) + '\n        </section>\n      </main>';
    content = content.replace(faqsAccordionRegex, newFaqsHtml);
    console.log("-> Replaced on-page FAQs with 8 expanded FAQs");
  } else {
    console.warn("-> Could not match FAQs Accordion regex in web design page");
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log("Saved website-design-company-in-pune.html successfully.");
}

function updateDigitalMarketingPage() {
  const filePath = path.join(ROOT_DIR, 'digital-marketing-agency-in-pune.html');
  let content = fs.readFileSync(filePath, 'utf8');

  console.log("Updating digital-marketing-agency-in-pune.html...");

  // 1. Update Schema FAQPage in <head>
  const faqSchemaStr = generateSchemaFaqs(DM_HEAD_FAQS)
    .replace('CURRENT_PAGE_URL', 'https://inranktech.com/digital-marketing-agency-in-pune.html');
  
  const faqSchemaRegex = /\{\s*"@type":\s*"FAQPage"[\s\S]*?mainEntity":\s*\[[\s\S]*?\]\s*\}/;
  if (faqSchemaRegex.test(content)) {
    content = content.replace(faqSchemaRegex, faqSchemaStr);
    console.log("-> Replaced Schema FAQPage");
  } else {
    console.warn("-> Could not match Schema FAQPage regex in DM page");
  }

  // 2. Insert Channel Guide Section before Pune Corridors & Locality Coverage Grid
  if (!content.includes("Channel Selection Guide: Google Ads vs Meta Ads vs SEO vs GEO")) {
    const corridorsTarget = '<!-- Pune Corridors & Locality Coverage Grid -->';
    if (content.includes(corridorsTarget)) {
      content = content.replace(corridorsTarget, DM_CHANNEL_GUIDE_SECTION + '\n' + corridorsTarget);
      console.log("-> Inserted Channel Guide Section");
    } else {
      console.warn("-> Could not find corridors target in DM page");
    }
  }

  // 3. Insert 90-Day Milestones Section after 5-Stage Framework (before Pricing Retainers)
  if (!content.includes("90-Day Expected Growth Milestones")) {
    const retainersTarget = '<!-- Transparent Retainers Section (Light Mode) -->';
    if (content.includes(retainersTarget)) {
      content = content.replace(retainersTarget, DM_90_DAY_MILESTONES_SECTION + '\n' + retainersTarget);
      console.log("-> Inserted 90-Day Milestones Section");
    } else {
      console.warn("-> Could not find retainers target in DM page");
    }
  }

  // 4. Insert Attribution Guarantee Section after Comparison Table (before Cross-Links)
  if (!content.includes("100% Transparent Attribution & Reporting Guarantee")) {
    const crossLinksTarget = '<!-- Strategic Cross-Link Silos Section -->';
    if (content.includes(crossLinksTarget)) {
      content = content.replace(crossLinksTarget, DM_ATTRIBUTION_GUARANTEE_SECTION + '\n' + crossLinksTarget);
      console.log("-> Inserted Attribution Guarantee Section");
    } else {
      console.warn("-> Could not find cross-links target in DM page");
    }
  }

  // 5. Replace FAQs Accordion
  const faqsAccordionRegex = /<div class="space-y-4">[\s\S]*?<\/div>\s*<\/section>\s*<!-- Form Section/;
  if (faqsAccordionRegex.test(content)) {
    const newFaqsHtml = generateAccordionFaqs(DM_HEAD_FAQS) + '\n        </section>\n\n        <!-- Form Section';
    content = content.replace(faqsAccordionRegex, newFaqsHtml);
    console.log("-> Replaced on-page FAQs with 10 expanded FAQs");
  } else {
    console.warn("-> Could not match FAQs Accordion regex in DM page");
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log("Saved digital-marketing-agency-in-pune.html successfully.");
}

function main() {
  updateWebDesignPage();
  updateDigitalMarketingPage();
  console.log("Enhancement complete!");
}

main();
