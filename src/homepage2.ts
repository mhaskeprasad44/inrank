// Inrank Technologies — Homepage-2 (High-Converting Advertising & AI Growth Engine)
// Inspired by the modern editorial UI, metal-fx accents, and high-conversion mechanics of AdAnt.ai

export function renderHomepage2View() {
  // Update document metadata tags for advertising & search
  document.title = "Inrank Technologies | Your Complete Digital Growth & Advertising Team";
  const metaDescEl = document.querySelector('meta[name="description"]');
  if (metaDescEl) {
    metaDescEl.setAttribute(
      "content",
      "Scale your brand with Inrank Technologies' dedicated growth engineering pod. We build high-conversion landing pages, manage high-ROAS paid ads (Google & Meta), and dominate AI search."
    );
  }

  const container = document.getElementById("homepage-2-view");
  if (!container) return;

  container.innerHTML = `
    <!-- Top Global Scroll Progress Bar -->
    <div id="hp2-progress-bar" class="fixed top-0 left-0 h-1 bg-gradient-to-r from-emerald-500 via-sky-400 to-emerald-600 z-50 transition-all duration-75" style="width: 0%;"></div>

    <!-- MAIN HOMEPAGE-2 ADVERTISING EXPERIENCE -->
    <div class="relative overflow-x-hidden font-sans text-foreground bg-[#ffffff] selection:bg-emerald-500/20 selection:text-emerald-700">

      <!-- Ambient Background Glow (AdAnt signature light aesthetic) -->
      <div class="ambient-glow-hero"></div>
      <div class="absolute inset-0 opacity-40 pointer-events-none" style="background-image: radial-gradient(circle, #cbd5e1 1.1px, transparent 1.1px); background-size: 28px 28px;"></div>

      <!-- =========================================================================
           1. HERO SECTION: Platform Stickers + Metal-FX AI Diagnostic Composer + 3D Deck
           ========================================================================= -->
      <section class="relative pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-24 px-5 sm:px-8 max-w-7xl mx-auto">
        
        <!-- Platform Stickers Bar (AdAnt inspired tilted logos) -->
        <div class="flex flex-col items-center text-center space-y-4 mb-6">
          <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-1">
            
            <div class="platform-sticker" style="--tilt: -3deg;">
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
              </svg>
              <span>Google Ads & Search</span>
            </div>

            <div class="platform-sticker" style="--tilt: 4deg;">
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="#0081FB">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Meta & Instagram</span>
            </div>

            <div class="platform-sticker" style="--tilt: -4deg;">
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="#FF0000">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>YouTube Video</span>
            </div>

            <div class="platform-sticker" style="--tilt: 5deg;">
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="#0A66C2">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>LinkedIn B2B</span>
            </div>

            <div class="platform-sticker" style="--tilt: -2deg;">
              <span class="h-4 w-4 flex items-center justify-center text-emerald-600 font-bold text-xs">
                <i data-lucide="map-pin" class="h-4 w-4"></i>
              </span>
              <span>Google Maps 3-Pack</span>
            </div>

            <div class="platform-sticker" style="--tilt: 3deg;">
              <span class="h-4 w-4 flex items-center justify-center text-purple-600 font-bold text-xs">
                <i data-lucide="sparkles" class="h-4 w-4"></i>
              </span>
              <span>ChatGPT & Perplexity</span>
            </div>

          </div>

          <!-- Highlight pill -->
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-bold uppercase tracking-wider text-emerald-700">
            <span class="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping"></span>
            <span>Live Multi-Channel Delivery Across 6 High-Intent Networks</span>
          </div>
        </div>

        <!-- Master Headline -->
        <div class="text-center max-w-4xl mx-auto space-y-4 mb-8">
          <h1 class="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight text-stone-950 leading-[1.08] text-balance">
            Your Complete Digital Growth &amp; Advertising Team
          </h1>
          <p class="text-base sm:text-xl text-stone-600 font-normal leading-relaxed max-w-2xl mx-auto font-sans">
            Hire Pune's premier performance marketing &amp; web growth engineering pod. We craft sub-second conversion landing pages, scale high-ROAS paid ads, and engineer dual-engine search dominance with measurable ROI.
          </p>
        </div>

        <!-- =========================================================================
             INTERACTIVE AI GROWTH COMPOSER ("METAL-FX" SIGNATURE INPUT)
             Connected directly to /api/seo-url-analyze with Live Diagnostics
             ========================================================================= -->
        <div class="max-w-3xl mx-auto mb-16 relative z-10">
          <div class="metal-fx-box p-3 sm:p-4 bg-white/95 backdrop-blur-md">
            
            <!-- Category Quick-Selectors -->
            <div class="flex items-center gap-2 overflow-x-auto pb-2 mb-2 text-[11px] text-stone-500 border-b border-stone-100">
              <span class="font-bold text-stone-700 shrink-0 uppercase tracking-wider text-[10px]">Test Quick Industry:</span>
              <button type="button" class="hp2-quick-tag px-2.5 py-1 rounded-md bg-stone-100 hover:bg-emerald-50 hover:text-emerald-700 transition-colors shrink-0 font-medium" data-val="https://punerealestate.com">Real Estate Pune</button>
              <button type="button" class="hp2-quick-tag px-2.5 py-1 rounded-md bg-stone-100 hover:bg-emerald-50 hover:text-emerald-700 transition-colors shrink-0 font-medium" data-val="https://drpatildentalclinic.com">Dental / Healthcare</button>
              <button type="button" class="hp2-quick-tag px-2.5 py-1 rounded-md bg-stone-100 hover:bg-emerald-50 hover:text-emerald-700 transition-colors shrink-0 font-medium" data-val="https://urbanthreads-d2c.in">D2C E-Commerce</button>
              <button type="button" class="hp2-quick-tag px-2.5 py-1 rounded-md bg-stone-100 hover:bg-emerald-50 hover:text-emerald-700 transition-colors shrink-0 font-medium" data-val="https://techscale-solutions.io">B2B SaaS / IT</button>
            </div>

            <!-- Input bar -->
            <form id="hp2-audit-form" class="flex flex-col sm:flex-row items-stretch gap-2.5">
              <div class="relative flex-grow flex items-center">
                <i data-lucide="globe" class="absolute left-3.5 h-5 w-5 text-stone-400"></i>
                <input 
                  type="text" 
                  id="hp2-url-input" 
                  placeholder="Enter your website URL (e.g. yourcompany.com) for instant growth scan..."
                  class="w-full pl-11 pr-4 py-3.5 text-xs sm:text-sm font-sans bg-stone-50/70 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-stone-900 placeholder:text-stone-400 transition-all"
                  required
                />
              </div>

              <button 
                type="submit" 
                id="hp2-audit-submit-btn"
                class="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-stone-950 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg hover:shadow-emerald-600/20 active:scale-[0.98] transition-all cursor-pointer shrink-0"
              >
                <i data-lucide="sparkles" class="h-4 w-4 text-emerald-400"></i>
                <span>Run Instant AI Scan</span>
              </button>
            </form>

            <!-- Scanning State UI (Hidden by default) -->
            <div id="hp2-scanning-state" class="hidden mt-4 pt-4 border-t border-stone-100 space-y-3">
              <div class="flex items-center justify-between text-xs font-semibold text-stone-600">
                <span class="flex items-center gap-2">
                  <span class="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
                  <span id="hp2-scan-label">Crawling domain footprints and paid ad visibility...</span>
                </span>
                <span id="hp2-scan-pct" class="font-mono text-emerald-600">42%</span>
              </div>
              <div class="w-full bg-stone-100 rounded-full h-1.5 overflow-hidden">
                <div id="hp2-scan-bar" class="bg-gradient-to-r from-emerald-500 to-sky-500 h-1.5 rounded-full transition-all duration-300" style="width: 42%;"></div>
              </div>
            </div>

            <!-- Live Diagnostic Output Modal / Result Box -->
            <div id="hp2-scan-result-card" class="hidden mt-4 pt-4 border-t border-stone-100 space-y-4 text-left">
              <div class="p-4 sm:p-5 rounded-xl bg-stone-50 border border-stone-200 space-y-3">
                <div class="flex items-center justify-between">
                  <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800">
                    <i data-lucide="check-circle" class="h-3.5 w-3.5 text-emerald-600"></i>
                    AI Audit Assessment Completed
                  </span>
                  <span id="hp2-result-timestamp" class="text-[10px] text-stone-400 font-mono">Live Inrank Crawler</span>
                </div>
                
                <div id="hp2-result-content" class="text-xs sm:text-sm text-stone-700 font-sans space-y-2 leading-relaxed">
                  <!-- Populated by server -->
                </div>

                <!-- Instant Action Button inside result -->
                <div class="pt-3 border-t border-stone-200/60 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span class="text-xs text-stone-500">Want our Senior Pod to implement these 3 quick wins?</span>
                  <a href="#hp2-contact-section" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow transition-all cursor-pointer">
                    <span>Claim Free 30-Day Growth Roadmap</span>
                    <i data-lucide="arrow-right" class="h-3.5 w-3.5"></i>
                  </a>
                </div>
              </div>
            </div>

            <!-- Footer trust notes -->
            <div class="mt-2.5 flex items-center justify-between text-[11px] text-stone-400 px-1 font-mono">
              <span class="flex items-center gap-1">
                <i data-lucide="lock" class="h-3 w-3 text-emerald-500"></i> Zero Spam · 100% Strict NDA
              </span>
              <span>Direct Senior Partner Analysis</span>
            </div>

          </div>
        </div>

        <!-- =========================================================================
             3D FANNED GROWTH CARDS SHOWCASE (AdAnt 3D Deck Concept)
             6 Interactive Layered Cards representing real Inrank Deliverables
             ========================================================================= -->
        <div class="relative max-w-6xl mx-auto pt-4 pb-12">
          
          <div class="text-center mb-8 space-y-1">
            <span class="text-[11px] font-bold uppercase tracking-widest text-emerald-600 font-mono">Interactive Proof Deck</span>
            <h3 class="font-display font-bold text-xl sm:text-2xl text-stone-900">Explore Real Deliverables from Our Growth Pod</h3>
            <p class="text-xs sm:text-sm text-stone-500">Hover or click any card to inspect active campaign setups, conversion funnels and verified ROI.</p>
          </div>

          <!-- Cards Stage Container -->
          <div class="deck-stage grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
            
            <!-- Card 1: Multi-Channel Paid Ads (Google & Meta) -->
            <div class="fanned-card rounded-2xl bg-white border border-stone-200/90 p-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] hover:border-emerald-500/50 cursor-pointer flex flex-col justify-between space-y-4">
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/60 flex items-center gap-1">
                    <i data-lucide="target" class="h-3 w-3"></i> Paid Media
                  </span>
                  <span class="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">4.82x ROAS</span>
                </div>
                <div class="relative h-40 rounded-xl overflow-hidden bg-stone-100 mb-3 border border-stone-100">
                  <img src="/images/proof-ecommerce-roas.jpg" alt="Meta and Google Ads High ROAS Performance" class="w-full h-full object-cover" />
                  <div class="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent flex items-end p-3">
                    <span class="text-white text-xs font-bold font-mono">₹14.8L Monthly Revenue Scaled</span>
                  </div>
                </div>
                <h4 class="font-display font-bold text-base text-stone-900 mb-1">Google &amp; Meta High-ROAS Paid Ads</h4>
                <p class="text-xs text-stone-500 leading-relaxed">
                  Conversions API (CAPI) server tracking, negative keyword scrubbing and high-converting dynamic creatives that cut cost-per-lead by 42%.
                </p>
              </div>
              <div class="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400">
                <span class="font-medium text-stone-600">Avg Quality Score: 9/10</span>
                <span class="text-emerald-600 font-bold flex items-center gap-0.5">Verified Case <i data-lucide="chevron-right" class="h-3 w-3"></i></span>
              </div>
            </div>

            <!-- Card 2: Google Maps Local 3-Pack Dominance -->
            <div class="fanned-card rounded-2xl bg-white border border-stone-200/90 p-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] hover:border-emerald-500/50 cursor-pointer flex flex-col justify-between space-y-4">
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200/60 flex items-center gap-1">
                    <i data-lucide="map-pin" class="h-3 w-3"></i> Local SEO
                  </span>
                  <span class="text-xs font-mono font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">#1 Map Pack</span>
                </div>
                <div class="relative h-40 rounded-xl overflow-hidden bg-stone-100 mb-3 border border-stone-100">
                  <img src="/images/service-gmb-optimization.jpg" alt="Google My Business Maps 3-Pack Ranking Dominance" class="w-full h-full object-cover" />
                  <div class="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent flex items-end p-3">
                    <span class="text-white text-xs font-bold font-mono">+238% Direct Inbound Calls</span>
                  </div>
                </div>
                <h4 class="font-display font-bold text-base text-stone-900 mb-1">Google Maps 3-Pack Dominance</h4>
                <p class="text-xs text-stone-500 leading-relaxed">
                  Local citation networks and geo-grid rank tracking targeting high-intent commercial corridors in Pune (FC Road, Baner, Hinjewadi, Viman Nagar).
                </p>
              </div>
              <div class="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400">
                <span class="font-medium text-stone-600">Review Velocity: +48/mo</span>
                <span class="text-emerald-600 font-bold flex items-center gap-0.5">Verified Case <i data-lucide="chevron-right" class="h-3 w-3"></i></span>
              </div>
            </div>

            <!-- Card 3: Dual-Engine Generative AI Search (GEO) -->
            <div class="fanned-card rounded-2xl bg-white border border-stone-200/90 p-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] hover:border-emerald-500/50 cursor-pointer flex flex-col justify-between space-y-4">
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-purple-50 text-purple-700 border border-purple-200/60 flex items-center gap-1">
                    <i data-lucide="sparkles" class="h-3 w-3"></i> AI Engine SEO
                  </span>
                  <span class="text-xs font-mono font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded">SearchGPT Ready</span>
                </div>
                <div class="relative h-40 rounded-xl overflow-hidden bg-stone-100 mb-3 border border-stone-100">
                  <img src="/images/service-ai-seo-agency.jpg" alt="Perplexity and ChatGPT AI Search Optimization" class="w-full h-full object-cover" />
                  <div class="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent flex items-end p-3">
                    <span class="text-white text-xs font-bold font-mono">Entity Citation Node 94.2%</span>
                  </div>
                </div>
                <h4 class="font-display font-bold text-base text-stone-900 mb-1">Perplexity &amp; ChatGPT Citations</h4>
                <p class="text-xs text-stone-500 leading-relaxed">
                  JSON-LD Knowledge Graph schemas and structured answer engines engineered to position your brand as the #1 recommended answer in generative searches.
                </p>
              </div>
              <div class="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400">
                <span class="font-medium text-stone-600">AI Citation Reach: High</span>
                <span class="text-emerald-600 font-bold flex items-center gap-0.5">Verified Case <i data-lucide="chevron-right" class="h-3 w-3"></i></span>
              </div>
            </div>

            <!-- Card 4: Sub-Second High-Conversion Websites -->
            <div class="fanned-card rounded-2xl bg-white border border-stone-200/90 p-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] hover:border-emerald-500/50 cursor-pointer flex flex-col justify-between space-y-4">
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200/60 flex items-center gap-1">
                    <i data-lucide="code-xml" class="h-3 w-3"></i> Web Engineering
                  </span>
                  <span class="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">100/100 CWV</span>
                </div>
                <div class="relative h-40 rounded-xl overflow-hidden bg-stone-100 mb-3 border border-stone-100">
                  <img src="/images/service-website-development.jpg" alt="Sub-second Speed Web Development" class="w-full h-full object-cover" />
                  <div class="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent flex items-end p-3">
                    <span class="text-white text-xs font-bold font-mono">0.4s First Contentful Paint</span>
                  </div>
                </div>
                <h4 class="font-display font-bold text-base text-stone-900 mb-1">Sub-Second Conversion Webpages</h4>
                <p class="text-xs text-stone-500 leading-relaxed">
                  Custom engineered with Vite, React, Shopify Plus or lightweight headless WordPress. Zero bloat, zero layout shift (CLS), converting traffic into revenue.
                </p>
              </div>
              <div class="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400">
                <span class="font-medium text-stone-600">Lighthouse Score: 98+</span>
                <span class="text-emerald-600 font-bold flex items-center gap-0.5">Verified Case <i data-lucide="chevron-right" class="h-3 w-3"></i></span>
              </div>
            </div>

            <!-- Card 5: Direct WhatsApp & Call Funnels -->
            <div class="fanned-card rounded-2xl bg-white border border-stone-200/90 p-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] hover:border-emerald-500/50 cursor-pointer flex flex-col justify-between space-y-4">
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-green-50 text-green-700 border border-green-200/60 flex items-center gap-1">
                    <i data-lucide="message-circle" class="h-3 w-3"></i> Lead Funnel
                  </span>
                  <span class="text-xs font-mono font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">+184% Leads</span>
                </div>
                <div class="relative h-40 rounded-xl overflow-hidden bg-stone-100 mb-3 border border-stone-100">
                  <img src="/images/proof-lead-generation.jpg" alt="Direct WhatsApp & Inbound Call Lead Generation" class="w-full h-full object-cover" />
                  <div class="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent flex items-end p-3">
                    <span class="text-white text-xs font-bold font-mono">1-Click WhatsApp Attribution</span>
                  </div>
                </div>
                <h4 class="font-display font-bold text-base text-stone-900 mb-1">Closed-Loop WhatsApp Funnels</h4>
                <p class="text-xs text-stone-500 leading-relaxed">
                  Direct WhatsApp click-to-chat triggers, automated lead pre-qualification, and call analytics tying every buyer enquiry to its ad campaign.
                </p>
              </div>
              <div class="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400">
                <span class="font-medium text-stone-600">Lead Response Time: &lt;2 min</span>
                <span class="text-emerald-600 font-bold flex items-center gap-0.5">Verified Case <i data-lucide="chevron-right" class="h-3 w-3"></i></span>
              </div>
            </div>

            <!-- Card 6: E-Commerce / D2C Scaling Machine -->
            <div class="fanned-card rounded-2xl bg-white border border-stone-200/90 p-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] hover:border-emerald-500/50 cursor-pointer flex flex-col justify-between space-y-4">
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-200/60 flex items-center gap-1">
                    <i data-lucide="shopping-bag" class="h-3 w-3"></i> D2C Scale
                  </span>
                  <span class="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">+38% Checkout</span>
                </div>
                <div class="relative h-40 rounded-xl overflow-hidden bg-stone-100 mb-3 border border-stone-100">
                  <img src="/images/service-shopify-development.jpg" alt="Shopify D2C Conversion Funnel" class="w-full h-full object-cover" />
                  <div class="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent flex items-end p-3">
                    <span class="text-white text-xs font-bold font-mono">Cart Abandonment -31%</span>
                  </div>
                </div>
                <h4 class="font-display font-bold text-base text-stone-900 mb-1">D2C Storefront Scaling Funnels</h4>
                <p class="text-xs text-stone-500 leading-relaxed">
                  Liquid architecture, one-page frictionless checkouts, bundle upsells and multi-pixel attribution scaling Shopify stores without third-party app bloat.
                </p>
              </div>
              <div class="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400">
                <span class="font-medium text-stone-600">Repeat Purchase: +24%</span>
                <span class="text-emerald-600 font-bold flex items-center gap-0.5">Verified Case <i data-lucide="chevron-right" class="h-3 w-3"></i></span>
              </div>
            </div>

          </div>

        </div>

      </section>

      <!-- =========================================================================
           2. LIVE METRICS & SOCIAL PROOF TICKER
           ========================================================================= -->
      <section class="border-y border-stone-200/80 bg-stone-50/70 py-10 px-5 sm:px-8">
        <div class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 text-center">
          
          <div class="space-y-1">
            <div class="font-display font-black text-2xl sm:text-4xl text-stone-950">
              <span class="counter-num" data-target="48" data-prefix="₹" data-suffix="Cr+">₹48Cr+</span>
            </div>
            <p class="text-xs text-stone-500 font-medium">Tracked Pipeline Revenue</p>
          </div>

          <div class="space-y-1">
            <div class="font-display font-black text-2xl sm:text-4xl text-emerald-600">
              <span class="counter-num" data-target="4.8" data-suffix="x" data-decimal="1">4.8x</span>
            </div>
            <p class="text-xs text-stone-500 font-medium">Average 90-Day Paid ROAS</p>
          </div>

          <div class="space-y-1">
            <div class="font-display font-black text-2xl sm:text-4xl text-stone-950">
              <span class="counter-num" data-target="98" data-suffix="+">98+</span>
            </div>
            <p class="text-xs text-stone-500 font-medium">Mobile Performance Score</p>
          </div>

          <div class="space-y-1">
            <div class="font-display font-black text-2xl sm:text-4xl text-stone-950">
              <span class="counter-num" data-target="27" data-suffix=" Services">27 Services</span>
            </div>
            <p class="text-xs text-stone-500 font-medium">Full Growth Capabilities</p>
          </div>

          <div class="space-y-1 col-span-2 md:col-span-1">
            <div class="font-display font-black text-2xl sm:text-4xl text-emerald-600">
              <span class="counter-num" data-target="100" data-suffix="%">100%</span>
            </div>
            <p class="text-xs text-stone-500 font-medium">Strict NDA &amp; Transparency</p>
          </div>

        </div>
      </section>

      <!-- =========================================================================
           3. MEET YOUR INRANK GROWTH POD (AdAnt Agent Pod Adaptation)
           4 Specialist Roles Working directly on the Client's Growth
           ========================================================================= -->
      <section class="py-20 sm:py-28 px-5 sm:px-8 max-w-7xl mx-auto">
        <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 font-mono">
            Dedicated Partner Pod
          </span>
          <h2 class="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-stone-950">
            Meet Your Inrank Growth Pod
          </h2>
          <p class="text-sm sm:text-base text-stone-600 leading-relaxed font-sans">
            Forget generic agencies where junior interns run your budget. At Inrank Technologies, every campaign is engineered directly by a dedicated 4-specialist pod with 8+ years experience.
          </p>
        </div>

        <!-- Pod Interactive Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <!-- Specialist 1 -->
          <div class="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-5">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div class="h-12 w-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-lg border border-purple-200">
                  <i data-lucide="sparkles" class="h-6 w-6"></i>
                </div>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-100 text-stone-600 font-bold">Pod Lead 01</span>
              </div>
              <div>
                <h3 class="font-display font-bold text-lg text-stone-950">Search &amp; AI Discovery Lead</h3>
                <p class="text-xs text-emerald-600 font-semibold mb-2">Technical SEO &amp; Generative Engine Expert</p>
                <p class="text-xs text-stone-500 leading-relaxed">
                  Controls Google Search rankings, Google 3-Pack Maps prominence and SearchGPT/Perplexity knowledge citations.
                </p>
              </div>
              <div class="space-y-1.5 pt-2 border-t border-stone-100 text-[11px] text-stone-600">
                <div class="flex items-center gap-1.5"><i data-lucide="check" class="h-3.5 w-3.5 text-emerald-500"></i> Entity &amp; Schema Architecture</div>
                <div class="flex items-center gap-1.5"><i data-lucide="check" class="h-3.5 w-3.5 text-emerald-500"></i> Google Maps Geo-Grid Ranking</div>
                <div class="flex items-center gap-1.5"><i data-lucide="check" class="h-3.5 w-3.5 text-emerald-500"></i> Zero-Penalty Backlink PR</div>
              </div>
            </div>
            <div class="pt-3 border-t border-stone-100 text-[10px] font-mono text-stone-400">
              8+ Yrs Technical SEO Depth
            </div>
          </div>

          <!-- Specialist 2 -->
          <div class="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-5">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div class="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg border border-blue-200">
                  <i data-lucide="target" class="h-6 w-6"></i>
                </div>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-100 text-stone-600 font-bold">Pod Lead 02</span>
              </div>
              <div>
                <h3 class="font-display font-bold text-lg text-stone-950">Performance Media Architect</h3>
                <p class="text-xs text-blue-600 font-semibold mb-2">Paid Search &amp; Social Campaign Director</p>
                <p class="text-xs text-stone-500 leading-relaxed">
                  Architects high-yielding Google Search, PMax and Meta Ads funnels with ruthless budget efficiency and server tracking.
                </p>
              </div>
              <div class="space-y-1.5 pt-2 border-t border-stone-100 text-[11px] text-stone-600">
                <div class="flex items-center gap-1.5"><i data-lucide="check" class="h-3.5 w-3.5 text-emerald-500"></i> Meta Conversions API (CAPI)</div>
                <div class="flex items-center gap-1.5"><i data-lucide="check" class="h-3.5 w-3.5 text-emerald-500"></i> PMax Negative Keyword Scrubbing</div>
                <div class="flex items-center gap-1.5"><i data-lucide="check" class="h-3.5 w-3.5 text-emerald-500"></i> Quality Score Optimization 9+</div>
              </div>
            </div>
            <div class="pt-3 border-t border-stone-100 text-[10px] font-mono text-stone-400">
              Google &amp; Meta Certified Partner
            </div>
          </div>

          <!-- Specialist 3 -->
          <div class="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-5">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div class="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-lg border border-emerald-200">
                  <i data-lucide="code-xml" class="h-6 w-6"></i>
                </div>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-100 text-stone-600 font-bold">Pod Lead 03</span>
              </div>
              <div>
                <h3 class="font-display font-bold text-lg text-stone-950">Conversion Web &amp; Code Engineer</h3>
                <p class="text-xs text-emerald-600 font-semibold mb-2">Full-Stack UX &amp; PageSpeed Specialist</p>
                <p class="text-xs text-stone-500 leading-relaxed">
                  Codes high-speed landing pages, bespoke Figma systems, and e-commerce checkouts designed to convert ad clicks into revenue.
                </p>
              </div>
              <div class="space-y-1.5 pt-2 border-t border-stone-100 text-[11px] text-stone-600">
                <div class="flex items-center gap-1.5"><i data-lucide="check" class="h-3.5 w-3.5 text-emerald-500"></i> Sub-Second DOM &amp; Zero CLS</div>
                <div class="flex items-center gap-1.5"><i data-lucide="check" class="h-3.5 w-3.5 text-emerald-500"></i> Mobile Touch &amp; Click-to-Call CRO</div>
                <div class="flex items-center gap-1.5"><i data-lucide="check" class="h-3.5 w-3.5 text-emerald-500"></i> Shopify Plus &amp; Custom WordPress</div>
              </div>
            </div>
            <div class="pt-3 border-t border-stone-100 text-[10px] font-mono text-stone-400">
              Core Web Vitals 99/100 Benchmark
            </div>
          </div>

          <!-- Specialist 4 -->
          <div class="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-5">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div class="h-12 w-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-lg border border-amber-200">
                  <i data-lucide="trending-up" class="h-6 w-6"></i>
                </div>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-100 text-stone-600 font-bold">Pod Lead 04</span>
              </div>
              <div>
                <h3 class="font-display font-bold text-lg text-stone-950">Direct Response &amp; Funnel Strategist</h3>
                <p class="text-xs text-amber-600 font-semibold mb-2">Copywriting &amp; WhatsApp Lead Funnels</p>
                <p class="text-xs text-stone-500 leading-relaxed">
                  Crafts compelling ad hooks, direct-response landing copy, and 1-click WhatsApp conversion funnels that pre-qualify buyer intent.
                </p>
              </div>
              <div class="space-y-1.5 pt-2 border-t border-stone-100 text-[11px] text-stone-600">
                <div class="flex items-center gap-1.5"><i data-lucide="check" class="h-3.5 w-3.5 text-emerald-500"></i> High-Converting Ad Hooks</div>
                <div class="flex items-center gap-1.5"><i data-lucide="check" class="h-3.5 w-3.5 text-emerald-500"></i> WhatsApp Lead Pre-Qualification</div>
                <div class="flex items-center gap-1.5"><i data-lucide="check" class="h-3.5 w-3.5 text-emerald-500"></i> Full Tag Manager &amp; GA4 Sync</div>
              </div>
            </div>
            <div class="pt-3 border-t border-stone-100 text-[10px] font-mono text-stone-400">
              100% Closed-Loop Attribution
            </div>
          </div>

        </div>

      </section>

      <!-- =========================================================================
           4. ADVERTISING SELLING POINTS & DEEP DIVES (AdAnt Radar / Breakdown Concept)
           ========================================================================= -->
      <section class="py-20 bg-stone-50/60 border-t border-stone-200/80 px-5 sm:px-8">
        <div class="max-w-7xl mx-auto space-y-20">
          
          <!-- Pillar 1 -->
          <div class="grid lg:grid-cols-12 gap-10 items-center">
            <div class="lg:col-span-6 space-y-4">
              <span class="text-xs font-bold uppercase tracking-widest text-emerald-600 font-mono">01 · Paid Media Mastery</span>
              <h3 class="font-display font-bold text-2xl sm:text-4xl text-stone-950">
                Stop Burning Ad Budget. Engineer High-ROAS Google &amp; Meta Campaigns.
              </h3>
              <p class="text-sm text-stone-600 leading-relaxed font-sans">
                Most agencies run basic ads and blame the algorithm. Inrank deploys server-side Conversions API (CAPI) to bypass iOS privacy blocks, scrubs negative search terms daily to prevent wasted clicks, and tests dynamic hooks to keep your blended ROAS above 4.0x.
              </p>
              <div class="grid grid-cols-2 gap-3 pt-2">
                <div class="p-3 bg-white rounded-xl border border-stone-200">
                  <div class="font-bold text-stone-900 text-sm">Server-Side CAPI</div>
                  <div class="text-xs text-stone-500">100% accurate conversion signals</div>
                </div>
                <div class="p-3 bg-white rounded-xl border border-stone-200">
                  <div class="font-bold text-stone-900 text-sm">Negative Keyword Vault</div>
                  <div class="text-xs text-stone-500">Eliminates 35%+ junk search spend</div>
                </div>
              </div>
            </div>

            <div class="lg:col-span-6">
              <div class="rounded-2xl bg-white border border-stone-200 p-6 shadow-md space-y-4">
                <div class="flex items-center justify-between pb-3 border-b border-stone-100">
                  <span class="font-bold text-sm text-stone-900">Campaign ROAS Acceleration Curve</span>
                  <span class="text-xs font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">90-Day Sprint</span>
                </div>
                <div class="space-y-3 text-xs font-sans">
                  <div>
                    <div class="flex justify-between mb-1 text-stone-600"><span>Month 1: Tracking &amp; Setup Baseline</span><span class="font-bold">2.1x ROAS</span></div>
                    <div class="w-full bg-stone-100 h-2 rounded-full overflow-hidden"><div class="bg-stone-400 h-2 rounded-full" style="width: 40%;"></div></div>
                  </div>
                  <div>
                    <div class="flex justify-between mb-1 text-stone-600"><span>Month 2: Hook Testing &amp; CAPI Optimization</span><span class="font-bold">3.4x ROAS</span></div>
                    <div class="w-full bg-stone-100 h-2 rounded-full overflow-hidden"><div class="bg-blue-500 h-2 rounded-full" style="width: 68%;"></div></div>
                  </div>
                  <div>
                    <div class="flex justify-between mb-1 text-emerald-700 font-semibold"><span>Month 3: Scaled Winning Creative Pod</span><span class="font-bold text-emerald-600">4.8x ROAS</span></div>
                    <div class="w-full bg-stone-100 h-2 rounded-full overflow-hidden"><div class="bg-emerald-500 h-2 rounded-full" style="width: 96%;"></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Pillar 2 -->
          <div class="grid lg:grid-cols-12 gap-10 items-center">
            <div class="lg:col-span-6 order-2 lg:order-1">
              <div class="rounded-2xl bg-white border border-stone-200 p-6 shadow-md space-y-4">
                <div class="flex items-center justify-between pb-3 border-b border-stone-100">
                  <span class="font-bold text-sm text-stone-900">AI Knowledge Engine Citation Radar</span>
                  <span class="text-xs font-mono text-purple-600 font-bold bg-purple-50 px-2 py-0.5 rounded">Perplexity + SearchGPT</span>
                </div>
                <div class="p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs space-y-2">
                  <div class="text-stone-400">// Generative Engine Citation Index</div>
                  <div class="text-emerald-400">&gt; Entity: Inrank Client Brand</div>
                  <div>&gt; Google Knowledge Graph: Verified</div>
                  <div>&gt; Perplexity Consensus Score: 94.6% (Top Cited)</div>
                  <div>&gt; ChatGPT Search Snippet: #1 Recommended Service</div>
                </div>
              </div>
            </div>

            <div class="lg:col-span-6 order-1 lg:order-2 space-y-4">
              <span class="text-xs font-bold uppercase tracking-widest text-purple-600 font-mono">02 · Dual-Engine Search</span>
              <h3 class="font-display font-bold text-2xl sm:text-4xl text-stone-950">
                Rank on Google Top 3 and Dominate AI Search Answers.
              </h3>
              <p class="text-sm text-stone-600 leading-relaxed font-sans">
                Search has split into two engines: traditional Google and generative AI bots (ChatGPT Search, Perplexity, Claude, Gemini Overviews). Our Generative Engine Optimization (GEO) ensures your brand is indexed and recommended in both worlds.
              </p>
              <div class="grid grid-cols-2 gap-3 pt-2">
                <div class="p-3 bg-white rounded-xl border border-stone-200">
                  <div class="font-bold text-stone-900 text-sm">Google 3-Pack Maps</div>
                  <div class="text-xs text-stone-500">Capture nearby mobile calls</div>
                </div>
                <div class="p-3 bg-white rounded-xl border border-stone-200">
                  <div class="font-bold text-stone-900 text-sm">AI Citations</div>
                  <div class="text-xs text-stone-500">Win conversational answers</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Pillar 3 -->
          <div class="grid lg:grid-cols-12 gap-10 items-center">
            <div class="lg:col-span-6 space-y-4">
              <span class="text-xs font-bold uppercase tracking-widest text-emerald-600 font-mono">03 · Conversion Web Engineering</span>
              <h3 class="font-display font-bold text-2xl sm:text-4xl text-stone-950">
                Sub-Second Speed. Zero Layout Shift. Built for Ad Conversion.
              </h3>
              <p class="text-sm text-stone-600 leading-relaxed font-sans">
                Every second a mobile page takes to load cuts conversions by 20%. Inrank builds ultra-lean, modern web systems with Core Web Vitals scores above 98. When your ad traffic lands, it loads instantly and guides the buyer straight to conversion.
              </p>
              <div class="grid grid-cols-2 gap-3 pt-2">
                <div class="p-3 bg-white rounded-xl border border-stone-200">
                  <div class="font-bold text-stone-900 text-sm">0.4s DOM Paint</div>
                  <div class="text-xs text-stone-500">Zero bounce from slow mobile</div>
                </div>
                <div class="p-3 bg-white rounded-xl border border-stone-200">
                  <div class="font-bold text-stone-900 text-sm">WhatsApp Conversion UX</div>
                  <div class="text-xs text-stone-500">1-click direct sales desk link</div>
                </div>
              </div>
            </div>

            <div class="lg:col-span-6">
              <div class="rounded-2xl bg-white border border-stone-200 p-6 shadow-md space-y-3">
                <div class="flex items-center justify-between pb-3 border-b border-stone-100">
                  <span class="font-bold text-sm text-stone-900">Google Lighthouse Audit Benchmark</span>
                  <span class="text-xs font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">Mobile Checked</span>
                </div>
                <div class="grid grid-cols-4 gap-2 text-center">
                  <div class="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                    <div class="text-2xl font-black text-emerald-600">99</div>
                    <div class="text-[10px] text-stone-600 font-bold uppercase mt-1">Performance</div>
                  </div>
                  <div class="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                    <div class="text-2xl font-black text-emerald-600">100</div>
                    <div class="text-[10px] text-stone-600 font-bold uppercase mt-1">Accessibility</div>
                  </div>
                  <div class="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                    <div class="text-2xl font-black text-emerald-600">100</div>
                    <div class="text-[10px] text-stone-600 font-bold uppercase mt-1">Best Practice</div>
                  </div>
                  <div class="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                    <div class="text-2xl font-black text-emerald-600">100</div>
                    <div class="text-[10px] text-stone-600 font-bold uppercase mt-1">SEO Structure</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- =========================================================================
           5. INTERACTIVE AD ROI & LEAD FORECASTER
           ========================================================================= -->
      <section class="py-20 px-5 sm:px-8 max-w-5xl mx-auto">
        <div class="metal-fx-box p-6 sm:p-10 bg-white">
          
          <div class="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <span class="text-xs font-bold uppercase tracking-widest text-emerald-600 font-mono">Interactive Forecaster</span>
            <h2 class="font-display font-extrabold text-2xl sm:text-4xl text-stone-950">
              Calculate Your Growth &amp; ROI Projection
            </h2>
            <p class="text-xs sm:text-sm text-stone-500">
              Select your monthly budget and target industry to forecast estimated leads and revenue.
            </p>
          </div>

          <div class="grid md:grid-cols-12 gap-8 items-center">
            
            <!-- Left Controls -->
            <div class="md:col-span-6 space-y-6">
              
              <!-- Spend Slider -->
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <label for="hp2-spend-slider" class="text-xs font-bold text-stone-700 uppercase tracking-wider">Monthly Ad Spend:</label>
                  <span id="hp2-spend-display" class="font-display font-black text-lg text-emerald-600 font-mono">₹75,000 / mo</span>
                </div>
                <input 
                  type="range" 
                  id="hp2-spend-slider" 
                  class="adant-slider" 
                  min="25000" 
                  max="500000" 
                  step="5000" 
                  value="75000" 
                />
                <div class="flex justify-between text-[10px] font-mono text-stone-400">
                  <span>₹25K</span>
                  <span>₹150K</span>
                  <span>₹300K</span>
                  <span>₹500K+</span>
                </div>
              </div>

              <!-- Industry Selector -->
              <div class="space-y-2">
                <label for="hp2-industry-select" class="text-xs font-bold text-stone-700 uppercase tracking-wider">Target Industry Profile:</label>
                <select 
                  id="hp2-industry-select" 
                  class="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-xs sm:text-sm font-sans focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-stone-900"
                >
                  <option value="realestate">Pune Real Estate &amp; Construction (High Ticket)</option>
                  <option value="healthcare">Healthcare, Dental &amp; Specialty Clinics</option>
                  <option value="d2c">D2C &amp; E-Commerce Brands</option>
                  <option value="b2b" selected>B2B SaaS, IT &amp; Professional Services</option>
                  <option value="local">Local Commercial Retail &amp; Restaurants</option>
                </select>
              </div>

            </div>

            <!-- Right Results Display Card -->
            <div class="md:col-span-6 p-6 rounded-2xl bg-stone-900 text-white space-y-5 shadow-lg">
              <div class="flex items-center justify-between pb-3 border-b border-stone-800">
                <span class="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">Estimated 90-Day Output</span>
                <span class="text-[10px] bg-stone-800 text-stone-300 px-2 py-0.5 rounded font-mono">Engineered Model</span>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div class="space-y-1">
                  <div class="text-[11px] text-stone-400 font-medium">Estimated Leads:</div>
                  <div id="hp2-leads-result" class="font-display font-black text-2xl sm:text-3xl text-emerald-400 font-mono">68 - 84</div>
                </div>

                <div class="space-y-1">
                  <div class="text-[11px] text-stone-400 font-medium">Projected ROAS:</div>
                  <div id="hp2-roas-result" class="font-display font-black text-2xl sm:text-3xl text-sky-400 font-mono">4.2x</div>
                </div>

                <div class="space-y-1 col-span-2 pt-2 border-t border-stone-800">
                  <div class="text-[11px] text-stone-400 font-medium">Projected Sales Pipeline Generated:</div>
                  <div id="hp2-pipeline-result" class="font-display font-black text-xl sm:text-2xl text-white font-mono">₹14.2L - ₹21.5L</div>
                </div>
              </div>

              <div class="pt-2">
                <a href="#hp2-contact-section" class="flex w-full items-center justify-center gap-2 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-stone-950 font-bold text-xs shadow-md transition-all">
                  <span>Lock in this Growth Model</span>
                  <i data-lucide="arrow-right" class="h-3.5 w-3.5"></i>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      <!-- =========================================================================
           6. COMPETITIVE COMPARISON MATRIX (AdAnt Comparison Table Adaptation)
           ========================================================================= -->
      <section class="py-20 px-5 sm:px-8 max-w-6xl mx-auto border-t border-stone-200">
        <div class="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span class="text-xs font-bold uppercase tracking-widest text-emerald-600 font-mono">Direct Comparison</span>
          <h2 class="font-display font-extrabold text-2xl sm:text-4xl text-stone-950">
            Why High-Growth Brands Switch to Inrank
          </h2>
          <p class="text-xs sm:text-sm text-stone-500">
            See how Inrank Technologies compares to traditional slow agencies and fragmented freelancers.
          </p>
        </div>

        <div class="overflow-x-auto rounded-2xl border border-stone-200 shadow-sm bg-white">
          <table class="w-full text-left text-xs sm:text-sm font-sans">
            <thead class="bg-stone-50 border-b border-stone-200 text-stone-700">
              <tr>
                <th class="p-4 sm:p-5 font-bold">Capabilities &amp; Execution Criteria</th>
                <th class="p-4 sm:p-5 font-bold text-emerald-700 bg-emerald-50/50">Inrank Dedicated Growth Pod</th>
                <th class="p-4 sm:p-5 font-bold text-stone-500">Generic Local Freelancer</th>
                <th class="p-4 sm:p-5 font-bold text-stone-500">Bloated Legacy Agency</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100 text-stone-600">
              
              <tr class="hover:bg-stone-50/50">
                <td class="p-4 sm:p-5 font-semibold text-stone-900">Senior Partners Execute Directly</td>
                <td class="p-4 sm:p-5 text-emerald-600 font-bold bg-emerald-50/30 flex items-center gap-1.5"><i data-lucide="check" class="h-4 w-4"></i> Yes (8+ Yrs Technical Depth)</td>
                <td class="p-4 sm:p-5 text-stone-400">Depends on availability</td>
                <td class="p-4 sm:p-5 text-red-500 flex items-center gap-1.5"><i data-lucide="x" class="h-4 w-4"></i> No (Handed to junior interns)</td>
              </tr>

              <tr class="hover:bg-stone-50/50">
                <td class="p-4 sm:p-5 font-semibold text-stone-900">Campaign Go-Live Speed</td>
                <td class="p-4 sm:p-5 text-emerald-600 font-bold bg-emerald-50/30 flex items-center gap-1.5"><i data-lucide="check" class="h-4 w-4"></i> Under 5 Working Days</td>
                <td class="p-4 sm:p-5 text-stone-400">2-3 Weeks</td>
                <td class="p-4 sm:p-5 text-red-500 flex items-center gap-1.5"><i data-lucide="x" class="h-4 w-4"></i> 4-6 Weeks (Endless slide decks)</td>
              </tr>

              <tr class="hover:bg-stone-50/50">
                <td class="p-4 sm:p-5 font-semibold text-stone-900">Sub-Second Conversion Webpages</td>
                <td class="p-4 sm:p-5 text-emerald-600 font-bold bg-emerald-50/30 flex items-center gap-1.5"><i data-lucide="check" class="h-4 w-4"></i> Custom Vite/React &amp; CWV 98+</td>
                <td class="p-4 sm:p-5 text-red-500 flex items-center gap-1.5"><i data-lucide="x" class="h-4 w-4"></i> Bloated shared templates</td>
                <td class="p-4 sm:p-5 text-red-500 flex items-center gap-1.5"><i data-lucide="x" class="h-4 w-4"></i> Extra ₹1.5L+ upcharge for web</td>
              </tr>

              <tr class="hover:bg-stone-50/50">
                <td class="p-4 sm:p-5 font-semibold text-stone-900">AI Search Optimization (GEO)</td>
                <td class="p-4 sm:p-5 text-emerald-600 font-bold bg-emerald-50/30 flex items-center gap-1.5"><i data-lucide="check" class="h-4 w-4"></i> Included (SearchGPT &amp; Perplexity)</td>
                <td class="p-4 sm:p-5 text-red-500 flex items-center gap-1.5"><i data-lucide="x" class="h-4 w-4"></i> No capability</td>
                <td class="p-4 sm:p-5 text-red-500 flex items-center gap-1.5"><i data-lucide="x" class="h-4 w-4"></i> Outdated 2018 keyword stuffing</td>
              </tr>

              <tr class="hover:bg-stone-50/50">
                <td class="p-4 sm:p-5 font-semibold text-stone-900">100% Closed-Loop WhatsApp Tracking</td>
                <td class="p-4 sm:p-5 text-emerald-600 font-bold bg-emerald-50/30 flex items-center gap-1.5"><i data-lucide="check" class="h-4 w-4"></i> Full GA4 + CAPI attribution</td>
                <td class="p-4 sm:p-5 text-red-500 flex items-center gap-1.5"><i data-lucide="x" class="h-4 w-4"></i> No tracking</td>
                <td class="p-4 sm:p-5 text-stone-400">Reports impressions only</td>
              </tr>

              <tr class="hover:bg-stone-50/50">
                <td class="p-4 sm:p-5 font-semibold text-stone-900">Strict NDA &amp; Asset Ownership</td>
                <td class="p-4 sm:p-5 text-emerald-600 font-bold bg-emerald-50/30 flex items-center gap-1.5"><i data-lucide="check" class="h-4 w-4"></i> Client owns 100% ad accounts</td>
                <td class="p-4 sm:p-5 text-stone-400">Vague ownership</td>
                <td class="p-4 sm:p-5 text-red-500 flex items-center gap-1.5"><i data-lucide="x" class="h-4 w-4"></i> Agency holds accounts hostage</td>
              </tr>

            </tbody>
          </table>
        </div>
      </section>

      <!-- =========================================================================
           7. TRANSPARENT ADVERTISING RETAINERS & PRICING PACKAGES
           ========================================================================= -->
      <section class="py-20 px-5 sm:px-8 max-w-7xl mx-auto bg-stone-50/50 border-t border-stone-200">
        <div class="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span class="text-xs font-bold uppercase tracking-widest text-emerald-600 font-mono">Transparent Retainers</span>
          <h2 class="font-display font-extrabold text-3xl sm:text-5xl text-stone-950">
            Fixed Retainer. Zero Hidden Fees.
          </h2>
          <p class="text-sm text-stone-600 font-sans">
            Choose the speed of your growth pod. All plans include direct partner access, weekly sprint reports, and strict confidentiality.
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8 items-stretch">
          
          <!-- Plan 1: Starter Acceleration -->
          <div class="rounded-2xl border border-stone-200 bg-white p-7 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm hover:border-emerald-500/30 transition-all">
            <div class="space-y-4">
              <span class="text-xs font-bold font-mono uppercase tracking-wider text-stone-400">Foundation</span>
              <h3 class="font-display font-bold text-2xl text-stone-900">Starter Acceleration</h3>
              <p class="text-xs text-stone-500 leading-relaxed">
                Ideal for growing SMEs launching 1-2 primary advertising channels with verified lead tracking.
              </p>
              <div class="py-2">
                <span class="font-display font-extrabold text-4xl text-stone-950 font-mono">₹35,000</span>
                <span class="text-xs text-stone-400 font-medium"> / month</span>
              </div>
              <ul class="space-y-2.5 text-xs text-stone-600 pt-2 border-t border-stone-100">
                <li class="flex items-center gap-2"><i data-lucide="check" class="h-4 w-4 text-emerald-500"></i> Google Ads OR Meta Ads Management</li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="h-4 w-4 text-emerald-500"></i> Local SEO &amp; Google 3-Pack Optimization</li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="h-4 w-4 text-emerald-500"></i> 1 High-Converting Landing Page Setup</li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="h-4 w-4 text-emerald-500"></i> Direct WhatsApp Lead Funnel</li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="h-4 w-4 text-emerald-500"></i> Bi-Weekly Sprint Reporting</li>
              </ul>
            </div>
            <a href="#hp2-contact-section" class="w-full py-3 rounded-xl border border-stone-300 text-stone-800 hover:bg-stone-900 hover:text-white font-bold text-xs text-center transition-all cursor-pointer">
              Get Started with Starter
            </a>
          </div>

          <!-- Plan 2: Scale Pro (Featured - AdAnt Silver-Sky Metal Flow) -->
          <div class="relative rounded-2xl border-2 border-emerald-500 bg-white p-7 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl">
            <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-600 text-white font-bold text-[10px] uppercase tracking-wider shadow">
              Most Popular Pod
            </div>
            <div class="space-y-4">
              <span class="text-xs font-bold font-mono uppercase tracking-wider text-emerald-600">Full Velocity</span>
              <h3 class="font-display font-bold text-2xl text-stone-900">Scale Pro Engine</h3>
              <p class="text-xs text-stone-500 leading-relaxed">
                Full multi-channel advertising, AI search dominance, and sub-second web engineering.
              </p>
              <div class="py-2">
                <span class="font-display font-extrabold text-4xl text-stone-950 font-mono">₹65,000</span>
                <span class="text-xs text-stone-400 font-medium"> / month</span>
              </div>
              <ul class="space-y-2.5 text-xs text-stone-700 pt-2 border-t border-stone-100 font-medium">
                <li class="flex items-center gap-2"><i data-lucide="check" class="h-4 w-4 text-emerald-500"></i> Both Google Ads AND Meta Ads Management</li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="h-4 w-4 text-emerald-500"></i> Complete Technical SEO &amp; Perplexity AI Citations</li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="h-4 w-4 text-emerald-500"></i> 3 Sub-Second Fast Landing Pages (A/B Tested)</li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="h-4 w-4 text-emerald-500"></i> Conversions API (CAPI) Server Tracking</li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="h-4 w-4 text-emerald-500"></i> Automated WhatsApp Lead Routing</li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="h-4 w-4 text-emerald-500"></i> Direct Senior Lead Slack / WhatsApp Channel</li>
              </ul>
            </div>
            <a href="#hp2-contact-section" class="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs text-center shadow-md hover:shadow-lg hover:shadow-emerald-600/25 transition-all cursor-pointer">
              Deploy Scale Pro Pod
            </a>
          </div>

          <!-- Plan 3: Enterprise & White-Label Domination -->
          <div class="rounded-2xl border border-stone-200 bg-white p-7 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm hover:border-emerald-500/30 transition-all">
            <div class="space-y-4">
              <span class="text-xs font-bold font-mono uppercase tracking-wider text-purple-600">Enterprise</span>
              <h3 class="font-display font-bold text-2xl text-stone-900">Enterprise &amp; White-Label</h3>
              <p class="text-xs text-stone-500 leading-relaxed">
                Dedicated technical pod for high-volume brands and agencies seeking confidential fulfillment.
              </p>
              <div class="py-2">
                <span class="font-display font-extrabold text-4xl text-stone-950 font-mono">₹1,25,000</span>
                <span class="text-xs text-stone-400 font-medium"> / month</span>
              </div>
              <ul class="space-y-2.5 text-xs text-stone-600 pt-2 border-t border-stone-100">
                <li class="flex items-center gap-2"><i data-lucide="check" class="h-4 w-4 text-emerald-500"></i> Unlimited Ad Creative Generation &amp; Testing</li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="h-4 w-4 text-emerald-500"></i> Full Custom Web App or Shopify Overhaul</li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="h-4 w-4 text-emerald-500"></i> Omni-Channel Paid Ads (Google, Meta, LinkedIn, YouTube)</li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="h-4 w-4 text-emerald-500"></i> 100% Unbranded White-Label Reports for Agencies</li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="h-4 w-4 text-emerald-500"></i> Dedicated Growth Engineering Lead On-Call</li>
              </ul>
            </div>
            <a href="https://wa.me/918788823182?text=Hi%20Inrank,%20I%20am%20interested%20in%20Enterprise%20White-Label%20Growth%20Pod" target="_blank" rel="noopener noreferrer" class="w-full py-3 rounded-xl border border-stone-300 text-stone-800 hover:bg-stone-900 hover:text-white font-bold text-xs text-center transition-all cursor-pointer">
              Talk to Lead Engineer
            </a>
          </div>

        </div>
      </section>

      <!-- =========================================================================
           8. ADVERTISER FAQ ACCORDION DIRECTORY
           ========================================================================= -->
      <section class="py-20 px-5 sm:px-8 max-w-4xl mx-auto border-t border-stone-200">
        <div class="text-center space-y-3 mb-14">
          <span class="text-xs font-bold uppercase tracking-widest text-emerald-600 font-mono">Frequently Asked Questions</span>
          <h2 class="font-display font-extrabold text-2xl sm:text-4xl text-stone-950">
            Everything You Need to Know Before Launching
          </h2>
        </div>

        <div class="space-y-3">
          
          <div class="hp2-faq-item border border-stone-200 rounded-xl p-4 sm:p-5 bg-white shadow-sm">
            <button type="button" class="hp2-faq-trigger flex w-full items-center justify-between text-left font-display font-bold text-sm sm:text-base text-stone-900 cursor-pointer">
              <span>How fast does the Inrank Growth Pod launch our campaigns?</span>
              <i data-lucide="chevron-down" class="hp2-faq-chevron h-4 w-4 text-stone-400 transition-transform"></i>
            </button>
            <div class="hp2-faq-body overflow-hidden max-h-0 opacity-0 transition-all duration-300">
              <p class="pt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                Once onboarding is completed, our engineering team fixes your tracking pixels (CAPI), builds your dedicated landing pages, and launches paid search &amp; Meta campaigns within 5 business days.
              </p>
            </div>
          </div>

          <div class="hp2-faq-item border border-stone-200 rounded-xl p-4 sm:p-5 bg-white shadow-sm">
            <button type="button" class="hp2-faq-trigger flex w-full items-center justify-between text-left font-display font-bold text-sm sm:text-base text-stone-900 cursor-pointer">
              <span>Do you manage our ad accounts directly or do you bill spend through Inrank?</span>
              <i data-lucide="chevron-down" class="hp2-faq-chevron h-4 w-4 text-stone-400 transition-transform"></i>
            </button>
            <div class="hp2-faq-body overflow-hidden max-h-0 opacity-0 transition-all duration-300">
              <p class="pt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                You retain 100% direct ownership of your Google Ads and Meta Business Manager accounts. Ad spend is billed directly by Google and Meta to your credit card. Inrank never marks up your ad spend.
              </p>
            </div>
          </div>

          <div class="hp2-faq-item border border-stone-200 rounded-xl p-4 sm:p-5 bg-white shadow-sm">
            <button type="button" class="hp2-faq-trigger flex w-full items-center justify-between text-left font-display font-bold text-sm sm:text-base text-stone-900 cursor-pointer">
              <span>What is the difference between Homepage-1 and Homepage-2?</span>
              <i data-lucide="chevron-down" class="hp2-faq-chevron h-4 w-4 text-stone-400 transition-transform"></i>
            </button>
            <div class="hp2-faq-body overflow-hidden max-h-0 opacity-0 transition-all duration-300">
              <p class="pt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                Homepage-1 is our organic full-service directory covering all 27 capabilities. Homepage-2 is our specialized, direct-response advertising page built for paid ad campaigns (PPC &amp; Meta), featuring our interactive live AI audit scanner, productized growth pod, and rapid lead conversion funnels.
              </p>
            </div>
          </div>

          <div class="hp2-faq-item border border-stone-200 rounded-xl p-4 sm:p-5 bg-white shadow-sm">
            <button type="button" class="hp2-faq-trigger flex w-full items-center justify-between text-left font-display font-bold text-sm sm:text-base text-stone-900 cursor-pointer">
              <span>Can we partner with Inrank under a 100% white-label agency arrangement?</span>
              <i data-lucide="chevron-down" class="hp2-faq-chevron h-4 w-4 text-stone-400 transition-transform"></i>
            </button>
            <div class="hp2-faq-body overflow-hidden max-h-0 opacity-0 transition-all duration-300">
              <p class="pt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                Yes. Many digital agencies and consultancies in India, the US, UK, and Australia partner with Inrank Technologies as their confidential technical fulfillment pod under strict non-disclosure agreements (NDAs) with unbranded reporting.
              </p>
            </div>
          </div>

        </div>
      </section>

      <!-- =========================================================================
           9. HIGH-CONTRAST CLOSING SCENE & DIRECT CONVERSION BAND (AdAnt Dark Footer Concept)
           ========================================================================= -->
      <section id="hp2-contact-section" class="bg-stone-950 text-white py-20 px-5 sm:px-8 relative overflow-hidden">
        
        <div class="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"></div>
        <div class="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-sky-500/10 blur-3xl pointer-events-none"></div>

        <div class="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <!-- Left side pitch -->
          <div class="lg:col-span-6 space-y-6">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider font-mono">
              <span class="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Sprint Consultations Open
            </div>
            <h2 class="font-display font-extrabold text-3xl sm:text-5xl tracking-tight leading-tight">
              Ready to Turn Clicks Into Verified Revenue?
            </h2>
            <p class="text-sm sm:text-base text-stone-400 leading-relaxed">
              Book a 20-minute growth diagnostic directly with our Senior Growth Engineering Lead. We will audit your current website, ad campaigns, and competitor leaks — no generic sales rep talk.
            </p>

            <div class="space-y-3 pt-2 text-xs sm:text-sm text-stone-300">
              <div class="flex items-center gap-2">
                <i data-lucide="shield-check" class="h-4 w-4 text-emerald-400"></i>
                <span>100% Strict NDA Protection Guaranteed</span>
              </div>
              <div class="flex items-center gap-2">
                <i data-lucide="clock" class="h-4 w-4 text-emerald-400"></i>
                <span>Response within 2 hours during Pune IST business hours</span>
              </div>
              <div class="flex items-center gap-2">
                <i data-lucide="map-pin" class="h-4 w-4 text-emerald-400"></i>
                <span>Headquartered at FC Road, Shivaji Nagar, Pune, India</span>
              </div>
            </div>

            <!-- Direct Contact links -->
            <div class="pt-4 flex flex-wrap gap-4">
              <a 
                href="https://wa.me/918788823182?text=Hi%20Inrank,%20I%20want%20to%20discuss%20our%20advertising%20and%20growth%20roadmap" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wide shadow-md transition-all cursor-pointer"
              >
                <i data-lucide="message-circle" class="h-4 w-4"></i>
                <span>WhatsApp Partner Desk (+91 87888 23182)</span>
              </a>

              <a 
                href="tel:+918788823182" 
                class="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-stone-800 bg-stone-900 hover:bg-stone-800 text-stone-200 font-semibold text-xs tracking-wide transition-all cursor-pointer"
              >
                <i data-lucide="phone" class="h-4 w-4 text-emerald-400"></i>
                <span>Direct Hotline</span>
              </a>
            </div>
          </div>

          <!-- Right side direct enquiry form -->
          <div class="lg:col-span-6">
            <div class="p-6 sm:p-8 rounded-2xl bg-stone-900/90 border border-stone-800 shadow-2xl backdrop-blur-md">
              <h3 class="font-display font-bold text-xl text-white mb-2">Request Growth Roadmap</h3>
              <p class="text-xs text-stone-400 mb-6">Receive your personalized 12-page audit and advertising action plan.</p>

              <form id="hp2-closing-form" class="space-y-4">
                <div>
                  <label for="hp2-form-name" class="block text-xs font-medium text-stone-300 mb-1">Your Full Name:</label>
                  <input type="text" id="hp2-form-name" required placeholder="Aditya Patil" class="w-full px-3.5 py-2.5 rounded-lg bg-stone-950 border border-stone-800 text-white text-xs focus:outline-none focus:border-emerald-500" />
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label for="hp2-form-email" class="block text-xs font-medium text-stone-300 mb-1">Work Email:</label>
                    <input type="email" id="hp2-form-email" required placeholder="aditya@mycompany.com" class="w-full px-3.5 py-2.5 rounded-lg bg-stone-950 border border-stone-800 text-white text-xs focus:outline-none focus:border-emerald-500" />
                  </div>
                  <div>
                    <label for="hp2-form-phone" class="block text-xs font-medium text-stone-300 mb-1">WhatsApp / Phone:</label>
                    <input type="tel" id="hp2-form-phone" required placeholder="+91 98765 43210" class="w-full px-3.5 py-2.5 rounded-lg bg-stone-950 border border-stone-800 text-white text-xs focus:outline-none focus:border-emerald-500" />
                  </div>
                </div>

                <div>
                  <label for="hp2-form-website" class="block text-xs font-medium text-stone-300 mb-1">Website URL or Brand Name:</label>
                  <input type="text" id="hp2-form-website" required placeholder="https://mycompany.com" class="w-full px-3.5 py-2.5 rounded-lg bg-stone-950 border border-stone-800 text-white text-xs focus:outline-none focus:border-emerald-500" />
                </div>

                <div>
                  <label for="hp2-form-goal" class="block text-xs font-medium text-stone-300 mb-1">Primary Growth Focus:</label>
                  <select id="hp2-form-goal" class="w-full px-3.5 py-2.5 rounded-lg bg-stone-950 border border-stone-800 text-white text-xs focus:outline-none focus:border-emerald-500">
                    <option value="Paid Ads ROAS Scaling">Scale Google &amp; Meta Paid Ads (ROAS)</option>
                    <option value="Google & AI Search Domination">Dual-Engine Search &amp; Google 3-Pack SEO</option>
                    <option value="High-Converting Web Development">Sub-Second Website / Landing Pages</option>
                    <option value="White-Label Agency Fulfillment">100% White-Label Agency Partnership</option>
                  </select>
                </div>

                <button type="submit" id="hp2-closing-submit-btn" class="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg transition-all cursor-pointer">
                  Submit Strategy Request
                </button>

                <p id="hp2-closing-success-msg" class="hidden text-xs text-emerald-400 text-center font-medium">
                  Thank you! Your request has been transmitted. Our Senior Growth Lead will review your domain within 2 hours.
                </p>
              </form>
            </div>
          </div>

        </div>

        <!-- Inrank bottom footer strip -->
        <div class="mt-16 pt-8 border-t border-stone-900 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 font-mono gap-4">
          <div>
            &copy; 2026 Inrank Technologies. All rights reserved.
          </div>
          <div class="flex items-center gap-4">
            <a href="#" class="hover:text-emerald-400 transition-colors">Organic Home (v1)</a>
            <span>·</span>
            <a href="#/services" class="hover:text-emerald-400 transition-colors">All 27 Services</a>
            <span>·</span>
            <a href="#/about-us" class="hover:text-emerald-400 transition-colors">About Us</a>
            <span>·</span>
            <a href="#/blog" class="hover:text-emerald-400 transition-colors">Blog Hub</a>
          </div>
        </div>

      </section>

    </div>
  `;

  // Hydrate Lucide icons immediately
  if (typeof (window as any).lucide !== "undefined") {
    (window as any).lucide.createIcons();
  }

  // Bind interactive elements for Homepage-2
  initHomepage2Interactions(container);
}

// Binds all interactive event handlers for Homepage-2
function initHomepage2Interactions(container: HTMLElement) {
  // 1. Scroll progress bar tracker
  const handleScroll = () => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;
    const scrollTop = window.scrollY;
    const pct = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
    const pBar = document.getElementById("hp2-progress-bar");
    if (pBar) pBar.style.width = `${pct}%`;
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
  setTimeout(handleScroll, 100);

  // 2. Quick industry tag clickers in the Hero Composer
  const quickTags = container.querySelectorAll<HTMLButtonElement>(".hp2-quick-tag");
  const urlInput = container.querySelector<HTMLInputElement>("#hp2-url-input");
  quickTags.forEach((tag) => {
    tag.addEventListener("click", () => {
      const val = tag.getAttribute("data-val") || "";
      if (urlInput) {
        urlInput.value = val;
        urlInput.focus();
      }
    });
  });

  // 3. Live AI Audit Scanner in the Hero Composer
  const auditForm = container.querySelector<HTMLFormElement>("#hp2-audit-form");
  const scanState = container.querySelector<HTMLDivElement>("#hp2-scanning-state");
  const scanBar = container.querySelector<HTMLDivElement>("#hp2-scan-bar");
  const scanLabel = container.querySelector<HTMLSpanElement>("#hp2-scan-label");
  const scanPct = container.querySelector<HTMLSpanElement>("#hp2-scan-pct");
  const resultCard = container.querySelector<HTMLDivElement>("#hp2-scan-result-card");
  const resultContent = container.querySelector<HTMLDivElement>("#hp2-result-content");
  const submitBtn = container.querySelector<HTMLButtonElement>("#hp2-audit-submit-btn");

  if (auditForm && urlInput && scanState && scanBar && scanLabel && scanPct && resultCard && resultContent && submitBtn) {
    auditForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const targetUrl = urlInput.value.trim();
      if (!targetUrl) return;

      submitBtn.disabled = true;
      submitBtn.classList.add("opacity-60", "cursor-not-allowed");
      scanState.classList.remove("hidden");
      resultCard.classList.add("hidden");

      // Progress simulation steps
      const steps = [
        { pct: 25, label: `Connecting to ${targetUrl} & measuring mobile TTFB...` },
        { pct: 55, label: `Evaluating competitor keyword footprint & paid ad leaks...` },
        { pct: 85, label: `Compiling AI search citations and Core Web Vitals...` },
        { pct: 98, label: `Generating executive growth scorecard...` }
      ];

      let stepIndex = 0;
      const interval = setInterval(() => {
        if (stepIndex < steps.length) {
          scanBar.style.width = `${steps[stepIndex].pct}%`;
          scanPct.textContent = `${steps[stepIndex].pct}%`;
          scanLabel.textContent = steps[stepIndex].label;
          stepIndex++;
        }
      }, 500);

      try {
        const response = await fetch("/api/seo-url-analyze", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: targetUrl })
        });

        const data = await response.json();
        clearInterval(interval);
        scanBar.style.width = "100%";
        scanPct.textContent = "100%";
        scanLabel.textContent = "Analysis complete!";

        setTimeout(() => {
          scanState.classList.add("hidden");
          resultCard.classList.remove("hidden");

          // Format markdown bullets into HTML
          const reportRaw = data.report || "Audit generated successfully.";
          const formatted = reportRaw
            .replace(/^###\s+(.*$)/gm, '<h4 class="font-bold text-stone-900 text-sm">$1</h4>')
            .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-stone-950">$1</strong>')
            .replace(/\*(.*?)\*/g, '<em class="text-stone-800">$1</em>')
            .replace(/^- (.*$)/gm, '<li class="ml-4 list-disc text-stone-600 my-1">$1</li>');

          resultContent.innerHTML = formatted;

          submitBtn.disabled = false;
          submitBtn.classList.remove("opacity-60", "cursor-not-allowed");

          if (typeof (window as any).lucide !== "undefined") {
            (window as any).lucide.createIcons();
          }
        }, 600);
      } catch (err) {
        clearInterval(interval);
        scanState.classList.add("hidden");
        resultCard.classList.remove("hidden");
        resultContent.innerHTML = `
          <p class="text-stone-700"><strong>Preliminary Audit for ${targetUrl}:</strong></p>
          <ul class="list-disc ml-4 space-y-1 text-stone-600">
            <li>High commercial opportunity detected for local search & paid search terms.</li>
            <li>Recommended: Deploy Conversions API (CAPI) and reduce mobile Cumulative Layout Shift (CLS).</li>
            <li>Target 3 quick wins to capture 35%+ more enquiries within 30 days.</li>
          </ul>
        `;
        submitBtn.disabled = false;
        submitBtn.classList.remove("opacity-60", "cursor-not-allowed");
      }
    });
  }

  // 4. Interactive ROI & Lead Forecaster Slider
  const spendSlider = container.querySelector<HTMLInputElement>("#hp2-spend-slider");
  const spendDisplay = container.querySelector<HTMLSpanElement>("#hp2-spend-display");
  const industrySelect = container.querySelector<HTMLSelectElement>("#hp2-industry-select");
  const leadsResult = container.querySelector<HTMLDivElement>("#hp2-leads-result");
  const roasResult = container.querySelector<HTMLDivElement>("#hp2-roas-result");
  const pipelineResult = container.querySelector<HTMLDivElement>("#hp2-pipeline-result");

  const updateForecast = () => {
    if (!spendSlider || !spendDisplay || !leadsResult || !roasResult || !pipelineResult) return;
    const spend = parseInt(spendSlider.value, 10);
    const ind = industrySelect ? industrySelect.value : "b2b";

    // Format currency
    spendDisplay.textContent = `₹${spend.toLocaleString("en-IN")} / mo`;

    // Multipliers by industry
    let leadMultiplier = 0.001;
    let avgRoas = 4.2;
    let avgTicketValue = 25000;

    if (ind === "realestate") {
      leadMultiplier = 0.00045;
      avgRoas = 5.4;
      avgTicketValue = 180000;
    } else if (ind === "healthcare") {
      leadMultiplier = 0.0014;
      avgRoas = 4.6;
      avgTicketValue = 12000;
    } else if (ind === "d2c") {
      leadMultiplier = 0.0035;
      avgRoas = 3.8;
      avgTicketValue = 3500;
    } else if (ind === "b2b") {
      leadMultiplier = 0.00095;
      avgRoas = 4.5;
      avgTicketValue = 65000;
    } else if (ind === "local") {
      leadMultiplier = 0.0022;
      avgRoas = 3.9;
      avgTicketValue = 6000;
    }

    const baseLeads = Math.round(spend * leadMultiplier);
    const minLeads = Math.max(8, Math.round(baseLeads * 0.88));
    const maxLeads = Math.max(12, Math.round(baseLeads * 1.18));

    leadsResult.textContent = `${minLeads} - ${maxLeads}`;
    roasResult.textContent = `${avgRoas.toFixed(1)}x`;

    const minPipeline = Math.round((minLeads * avgTicketValue) / 100000);
    const maxPipeline = Math.round((maxLeads * avgTicketValue) / 100000);

    pipelineResult.textContent = `₹${minPipeline}L - ₹${maxPipeline}L`;
  };

  if (spendSlider) spendSlider.addEventListener("input", updateForecast);
  if (industrySelect) industrySelect.addEventListener("change", updateForecast);
  updateForecast();

  // 5. Accordion FAQs
  const faqItems = container.querySelectorAll(".hp2-faq-item");
  faqItems.forEach((item) => {
    const trigger = item.querySelector<HTMLButtonElement>(".hp2-faq-trigger");
    const body = item.querySelector<HTMLDivElement>(".hp2-faq-body");
    const chevron = item.querySelector<SVGElement>(".hp2-faq-chevron");

    if (trigger && body) {
      trigger.addEventListener("click", () => {
        const isOpen = !body.classList.contains("max-h-0");

        // Close all other FAQs
        faqItems.forEach((other) => {
          const oBody = other.querySelector<HTMLDivElement>(".hp2-faq-body");
          const oChevron = other.querySelector<SVGElement>(".hp2-faq-chevron");
          if (oBody) {
            oBody.classList.remove("max-h-[350px]", "opacity-100");
            oBody.classList.add("max-h-0", "opacity-0");
          }
          if (oChevron) oChevron.classList.remove("rotate-180", "text-emerald-600");
        });

        if (!isOpen) {
          body.classList.remove("max-h-0", "opacity-0");
          body.classList.add("max-h-[350px]", "opacity-100");
          if (chevron) chevron.classList.add("rotate-180", "text-emerald-600");
        }
      });
    }
  });

  // 6. Direct closing inquiry form submission
  const closingForm = container.querySelector<HTMLFormElement>("#hp2-closing-form");
  const successMsg = container.querySelector<HTMLParagraphElement>("#hp2-closing-success-msg");
  const closingBtn = container.querySelector<HTMLButtonElement>("#hp2-closing-submit-btn");

  if (closingForm && successMsg && closingBtn) {
    closingForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      closingBtn.disabled = true;
      closingBtn.textContent = "Transmitting to Senior Pod...";

      const name = (container.querySelector<HTMLInputElement>("#hp2-form-name")?.value || "").trim();
      const email = (container.querySelector<HTMLInputElement>("#hp2-form-email")?.value || "").trim();
      const phone = (container.querySelector<HTMLInputElement>("#hp2-form-phone")?.value || "").trim();
      const website = (container.querySelector<HTMLInputElement>("#hp2-form-website")?.value || "").trim();
      const goal = container.querySelector<HTMLSelectElement>("#hp2-form-goal")?.value || "General Growth";

      try {
        await fetch("/api/submit-seo-report", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            websiteUrl: website,
            leadName: name,
            leadEmail: email,
            leadPhone: phone,
            leadMessage: `Homepage-2 Advertising Lead. Target Goal: ${goal}`,
            auditReport: `Submission from Inrank Homepage-2 Advertising Pod funnel.`
          })
        });

        closingForm.reset();
        successMsg.classList.remove("hidden");
        closingBtn.textContent = "Audit Requested Successfully!";

        // Redirect to WhatsApp desk after short delay
        setTimeout(() => {
          const waUrl = `https://wa.me/918788823182?text=${encodeURIComponent(
            `Hi Inrank team! I am ${name} from ${website}. I submitted a strategy audit request on Homepage-2 for ${goal}.`
          )}`;
          window.open(waUrl, "_blank");
        }, 1200);
      } catch (err) {
        console.error("Submission error:", err);
        successMsg.classList.remove("hidden");
        closingBtn.textContent = "Submitted!";
      }
    });
  }
}
