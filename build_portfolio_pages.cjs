const fs = require('fs');
const path = require('path');

// Common Header HTML
function getHeaderHTML(activeNav = 'portfolio') {
  return `
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

    <!-- HEADER SECTION -->
    <header id="site-header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-border bg-background/80 backdrop-blur-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 sm:h-20">
          
          <!-- Site Identity Logo -->
          <a href="/" class="flex items-center gap-2.5 group">
            <img src="/logo.png" class="h-8 w-8 sm:h-9 sm:w-9 object-contain group-hover:scale-105 transition-transform" alt="Inrank Technologies logo" />
            <div class="flex flex-col leading-none">
              <span class="font-display font-bold text-[15px] sm:text-[16px] tracking-tight text-foreground">Inrank</span>
              <span class="font-display font-semibold text-[9px] uppercase tracking-[0.22em] text-emerald-600">Technologies</span>
            </div>
          </a>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center gap-6 lg:gap-8">
            
            <!-- Services Dropdown -->
            <div class="relative group" id="services-nav-group">
              <button id="services-dropdown-trigger" class="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground hover:text-emerald-600 transition-colors py-2 focus:outline-none cursor-pointer">
                <span>Services</span>
                <i data-lucide="chevron-down" id="services-dropdown-chevron" class="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:rotate-180"></i>
              </button>
              
              <!-- Full-Width 4-Pillar Mega Dropdown Menu -->
              <div id="services-dropdown-menu" class="fixed left-0 right-0 top-16 sm:top-20 w-full bg-white dark:bg-zinc-950 border-b border-border shadow-2xl opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-8">
                  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-left">
                    
                    <!-- Pillar 1: Web & E-Commerce -->
                    <div class="space-y-2">
                      <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 pb-2 border-b border-border/60">
                        <i data-lucide="code-xml" class="w-4 h-4"></i>
                        <span>Web &amp; E-Commerce</span>
                      </div>
                      <div class="space-y-1">
                        <a href="/#/service/website-development" class="block p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors">
                          <div class="text-xs font-bold text-foreground">Custom Website Development</div>
                          <div class="text-[11px] text-muted-foreground">High-speed React/Vite/HTML5 websites</div>
                        </a>
                        <a href="/#/service/shopify-development" class="block p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors">
                          <div class="text-xs font-bold text-foreground">Shopify &amp; E-Commerce Stores</div>
                          <div class="text-[11px] text-muted-foreground">0% transaction commission, WhatsApp cart</div>
                        </a>
                        <a href="/#/service/wordpress-development" class="block p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors">
                          <div class="text-xs font-bold text-foreground">WordPress Development</div>
                          <div class="text-[11px] text-muted-foreground">Custom themes &amp; speed optimization</div>
                        </a>
                        <a href="/website-design-company-in-pune.html" class="block p-2 rounded-lg bg-emerald-50/50 dark:bg-emerald-950/20 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-colors border border-emerald-100 dark:border-emerald-900/30">
                          <div class="text-xs font-bold text-emerald-700 dark:text-emerald-400 flex items-center justify-between">
                            <span>Web Designing in Pune (Local Hub)</span>
                            <span class="text-[9px] uppercase px-1.5 py-0.2 bg-emerald-600 text-white rounded font-bold">Pune</span>
                          </div>
                          <div class="text-[11px] text-muted-foreground">Fixed pricing, 5-7 days turnaround</div>
                        </a>
                      </div>
                    </div>

                    <!-- Pillar 2: AI Search & SEO -->
                    <div class="space-y-2">
                      <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 pb-2 border-b border-border/60">
                        <i data-lucide="search" class="w-4 h-4"></i>
                        <span>AI Search &amp; SEO</span>
                      </div>
                      <div class="space-y-1">
                        <a href="/#/service/seo" class="block p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors">
                          <div class="text-xs font-bold text-foreground">Local SEO &amp; Google Rankings</div>
                          <div class="text-[11px] text-muted-foreground">Top Google 3-Pack rankings in Pune</div>
                        </a>
                        <a href="/#/service/geo-seo-agency" class="block p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors">
                          <div class="text-xs font-bold text-foreground">Generative Engine Optimization (GEO)</div>
                          <div class="text-[11px] text-muted-foreground">Get cited in ChatGPT &amp; AI Overviews</div>
                        </a>
                        <a href="/#/service/gmb-optimization" class="block p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors">
                          <div class="text-xs font-bold text-foreground">Google My Business (GMB)</div>
                          <div class="text-[11px] text-muted-foreground">Direct customer calls &amp; inquiries</div>
                        </a>
                        <a href="/#/service/backlink-building" class="block p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors">
                          <div class="text-xs font-bold text-foreground">Backlink &amp; Authority Building</div>
                          <div class="text-[11px] text-muted-foreground">High DA contextual editorial links</div>
                        </a>
                      </div>
                    </div>

                    <!-- Pillar 3: Paid Ads & Growth -->
                    <div class="space-y-2">
                      <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 pb-2 border-b border-border/60">
                        <i data-lucide="target" class="w-4 h-4"></i>
                        <span>Paid Ads &amp; Growth</span>
                      </div>
                      <div class="space-y-1">
                        <a href="/#/service/google-ads" class="block p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors">
                          <div class="text-xs font-bold text-foreground">Google Ads Management (PPC)</div>
                          <div class="text-[11px] text-muted-foreground">High-ROAS search &amp; Performance Max</div>
                        </a>
                        <a href="/#/service/meta-ads" class="block p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors">
                          <div class="text-xs font-bold text-foreground">Meta &amp; Instagram Ads Funnels</div>
                          <div class="text-[11px] text-muted-foreground">Laser-targeted customer acquisition</div>
                        </a>
                        <a href="/#/service/social-media-marketing" class="block p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors">
                          <div class="text-xs font-bold text-foreground">Social Media Marketing</div>
                          <div class="text-[11px] text-muted-foreground">Viral reels &amp; organic brand authority</div>
                        </a>
                        <a href="/digital-marketing-agency-in-pune.html" class="block p-2 rounded-lg bg-indigo-50/50 dark:bg-indigo-950/20 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-colors border border-indigo-100 dark:border-indigo-900/30">
                          <div class="text-xs font-bold text-indigo-700 dark:text-indigo-400 flex items-center justify-between">
                            <span>Digital Marketing in Pune (Local Hub)</span>
                            <span class="text-[9px] uppercase px-1.5 py-0.2 bg-indigo-600 text-white rounded font-bold">Pune</span>
                          </div>
                          <div class="text-[11px] text-muted-foreground">Multi-channel revenue generation</div>
                        </a>
                      </div>
                    </div>

                    <!-- Pillar 4: Brand & Creative -->
                    <div class="space-y-2">
                      <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600 pb-2 border-b border-border/60">
                        <i data-lucide="palette" class="w-4 h-4"></i>
                        <span>Brand &amp; Creative</span>
                      </div>
                      <div class="space-y-1">
                        <a href="/#/service/logo-design" class="block p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors">
                          <div class="text-xs font-bold text-foreground">Corporate Logo &amp; Identity</div>
                          <div class="text-[11px] text-muted-foreground">Trademark-ready vector brand kits</div>
                        </a>
                        <a href="/#/service/brand-name" class="block p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors">
                          <div class="text-xs font-bold text-foreground">Brand Strategy &amp; Naming</div>
                          <div class="text-[11px] text-muted-foreground">Linguistic checks &amp; .com acquisition</div>
                        </a>
                        <a href="/#/service/brochure-designing" class="block p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors">
                          <div class="text-xs font-bold text-foreground">Brochure &amp; Sales Collaterals</div>
                          <div class="text-[11px] text-muted-foreground">Corporate profiles &amp; catalogues</div>
                        </a>
                        <a href="/#/service/conversion-optimization" class="block p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors">
                          <div class="text-xs font-bold text-foreground">Conversion Rate Optimization (CRO)</div>
                          <div class="text-[11px] text-muted-foreground">A/B tested UX &amp; lead funnels</div>
                        </a>
                      </div>
                    </div>

                  </div>

                  <!-- Full-Width Bottom Bar -->
                  <div class="mt-6 pt-4 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
                    <span class="flex items-center gap-2">
                      <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span><strong class="text-foreground font-semibold">27 Growth Disciplines</strong> · Fixed-Fee Delivery · 365 Days Direct Support</span>
                    </span>
                    <a href="/#/services" class="font-bold text-emerald-600 hover:text-emerald-500 inline-flex items-center gap-1.5 transition-colors group/link">
                      <span>Explore Complete 27 Services Directory</span>
                      <i data-lucide="arrow-right" class="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform"></i>
                    </a>
                  </div>
                </div>
              </div>

                  <div class="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                    <span><strong>27 Growth Disciplines</strong> · 365 Days Support</span>
                    <a href="/#/services" class="font-bold text-emerald-600 hover:text-emerald-500 inline-flex items-center gap-1">
                      <span>Explore Complete 27 Services Directory</span>
                      <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Pricing -->
            <a href="/pricing.html" class="flex items-center gap-1.5 text-sm font-semibold ${activeNav === 'pricing' ? 'text-emerald-600 font-bold' : 'text-muted-foreground hover:text-foreground hover:text-emerald-600'} transition-colors">
              <span>Pricing</span>
              <span class="px-1.5 py-0.5 rounded text-[10px] font-black bg-emerald-100 text-emerald-800">from ₹11k</span>
            </a>

            <!-- Portfolio (Active Highlight) -->
            <a href="/portfolio.html" class="flex items-center gap-1.5 text-sm font-semibold ${activeNav === 'portfolio' ? 'text-emerald-600 font-bold' : 'text-muted-foreground hover:text-foreground hover:text-emerald-600'} transition-colors">
              <span>Portfolio &amp; Case Studies</span>
              <span class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-primary/10 text-primary border border-primary/20">10 Works</span>
            </a>

            <!-- Results -->
            <a href="/#results" class="text-sm font-medium text-muted-foreground hover:text-foreground hover:text-emerald-600 transition-colors">Results</a>

            <!-- Blog -->
            <a href="/#/blog" class="text-sm font-medium text-muted-foreground hover:text-foreground hover:text-emerald-600 transition-colors">Blog</a>

            <!-- Contact -->
            <a href="/contact.html" class="text-sm font-medium ${activeNav === 'contact' ? 'text-emerald-600 font-bold' : 'text-muted-foreground hover:text-foreground hover:text-emerald-600'} transition-colors">Contact</a>
          </nav>

          <!-- Right Action CTA Buttons -->
          <div class="flex items-center gap-2 sm:gap-3">
            <a href="tel:+918788823182" class="hidden lg:inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-emerald-600 transition-colors">
              <i data-lucide="phone" class="w-3.5 h-3.5 text-emerald-600"></i>
              <span>+91 87888 23182</span>
            </a>

            <a href="https://wa.me/918788823182?text=Hi%20Inrank%2C%20I%20am%20reviewing%20your%20portfolio%20and%20would%20like%20a%20free%20strategy%20audit." target="_blank" rel="noopener noreferrer" class="h-9 w-9 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200 hover:bg-emerald-600 hover:text-white transition-all flex items-center justify-center" aria-label="WhatsApp">
              <i data-lucide="message-circle" class="w-4 h-4"></i>
            </a>

            <a href="/contact.html" class="inline-flex items-center justify-center gap-1.5 h-9 sm:h-10 px-3.5 sm:px-4 rounded-xl bg-primary text-primary-foreground font-semibold text-xs sm:text-sm hover:bg-primary/90 transition-all shadow-md shadow-primary/20">
              <span>Free Audit</span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5 hidden sm:inline"></i>
            </a>

            <!-- Mobile Hamburger Toggle -->
            <button id="mobile-menu-toggle" type="button" class="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary focus:outline-none" aria-label="Toggle navigation menu">
              <i data-lucide="menu" id="menu-icon-open" class="h-5 w-5"></i>
              <i data-lucide="x" id="menu-icon-close" class="h-5 w-5 hidden"></i>
            </button>
          </div>

        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div id="mobile-menu-drawer" class="hidden md:hidden border-b border-border bg-background/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-4">
        <div class="space-y-1">
          <a href="/" class="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-secondary">Home</a>
          <a href="/portfolio.html" class="block px-3 py-2 rounded-lg text-sm font-bold bg-primary/10 text-primary">Portfolio &amp; Case Studies (10 Works)</a>
          <a href="/pricing.html" class="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-secondary">Pricing Packages (from ₹11,999)</a>
          <a href="/website-design-company-in-pune.html" class="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-secondary">Web Designing in Pune</a>
          <a href="/digital-marketing-agency-in-pune.html" class="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-secondary">Digital Marketing in Pune</a>
          <a href="/#/services" class="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-secondary">All 27 Services</a>
          <a href="/#/blog" class="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-secondary">Blog Hub</a>
          <a href="/contact.html" class="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-secondary">Contact Desk</a>
        </div>
        <div class="pt-2 border-t border-border flex flex-col gap-2">
          <a href="tel:+918788823182" class="flex items-center justify-center gap-2 h-10 rounded-lg border border-border text-xs font-semibold">
            <i data-lucide="phone" class="h-4 w-4 text-emerald-600"></i>
            <span>+91 87888 23182</span>
          </a>
          <a href="https://wa.me/918788823182" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2 h-10 rounded-lg bg-emerald-600 text-white text-xs font-semibold">
            <i data-lucide="message-circle" class="h-4 w-4"></i>
            <span>WhatsApp Quick Consultation</span>
          </a>
        </div>
      </div>
    </header>
  `;
}

// Common Footer HTML
function getFooterHTML() {
  return `
    <!-- FOOTER SECTION -->
    <footer class="border-t border-border bg-card/50 text-foreground pt-16 sm:pt-20 pb-24 md:pb-14 relative z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          <div class="lg:col-span-2 space-y-4">
            <a href="/" class="flex items-center gap-2.5">
              <img src="/logo.png" class="h-8 w-8 object-contain" alt="Inrank Technologies logo" />
              <div class="flex flex-col leading-none">
                <span class="font-display font-bold text-[16px] tracking-tight text-foreground">Inrank</span>
                <span class="font-display font-semibold text-[9px] uppercase tracking-[0.22em] text-emerald-600">Technologies</span>
              </div>
            </a>
            <p class="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Inrank Technologies is India's leading performance web engineering and search growth company. Fixed-price web development packages, sub-second load times, and data-backed SEO engineered for sustainable ROI.
            </p>
            <div class="pt-2 flex items-center gap-3">
              <a href="https://wa.me/918788823182" target="_blank" rel="noopener noreferrer" class="h-9 px-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white inline-flex items-center gap-2 text-xs font-semibold shadow-sm transition-colors">
                <i data-lucide="message-circle" class="h-4 w-4"></i>
                <span>Direct WhatsApp Consultation</span>
              </a>
            </div>
          </div>

          <div class="space-y-3">
            <div class="text-xs font-bold uppercase tracking-wider text-emerald-600">Client Works</div>
            <ul class="space-y-2 text-xs">
              <li><a href="/case-studies/cytos.html" class="text-muted-foreground hover:text-foreground">CyTOS Machines Pune (React SPA)</a></li>
              <li><a href="/case-studies/fludio.html" class="text-muted-foreground hover:text-foreground">Fludio Water Solutions (Luxury Showcase)</a></li>
              <li><a href="/case-studies/hiragrafix.html" class="text-muted-foreground hover:text-foreground">HIRAGRAFIX™ Mumbai (Print &amp; Packaging)</a></li>
              <li><a href="/case-studies/greytothegreen.html" class="text-muted-foreground hover:text-foreground">Grey To The Green (Eco-Biotech D2C)</a></li>
              <li><a href="/case-studies/vasroventures.html" class="text-muted-foreground hover:text-foreground">Vasro Ventures (Fashion Apparel)</a></li>
              <li><a href="/case-studies/hcpnest.html" class="text-muted-foreground hover:text-foreground">HCPNest (Healthcare Talent Portal)</a></li>
              <li><a href="/case-studies/riituinstitution.html" class="text-muted-foreground hover:text-foreground">Riitu Institution (CA &amp; Commerce)</a></li>
            </ul>
          </div>

          <div class="space-y-3">
            <div class="text-xs font-bold uppercase tracking-wider text-emerald-600">Collaborations &amp; SEO</div>
            <ul class="space-y-2 text-xs">
              <li><a href="/case-studies/shetkarifoodstuff.html" class="text-muted-foreground hover:text-foreground">Shetkari Foodstuff (GCC Agro SEO &amp; GEO)</a></li>
              <li><a href="/case-studies/orthopedicanklefootspecialist.html" class="text-muted-foreground hover:text-foreground">Dr. Shyam Thakkar (Clinical Orthopedic)</a></li>
              <li><a href="/case-studies/dravyafinancial.html" class="text-muted-foreground hover:text-foreground">Dravya Financial (Debt Syndication)</a></li>
              <li><a href="/website-design-company-in-pune.html" class="text-muted-foreground hover:text-foreground">Web Designing in Pune (Local Hub)</a></li>
              <li><a href="/digital-marketing-agency-in-pune.html" class="text-muted-foreground hover:text-foreground">Digital Marketing Agency in Pune</a></li>
              <li><a href="/pricing.html" class="text-muted-foreground hover:text-foreground">Transparent Fixed-Price Packages</a></li>
            </ul>
          </div>

          <div class="space-y-3">
            <div class="text-xs font-bold uppercase tracking-wider text-emerald-600">Contact &amp; Support</div>
            <ul class="space-y-2 text-xs text-muted-foreground">
              <li class="flex items-center gap-2">
                <i data-lucide="phone" class="h-3.5 w-3.5 text-primary"></i>
                <a href="tel:+918788823182" class="hover:text-foreground">+91 87888 23182</a>
              </li>
              <li class="flex items-center gap-2">
                <i data-lucide="mail" class="h-3.5 w-3.5 text-primary"></i>
                <span>inranktech@gmail.com</span>
              </li>
              <li class="flex items-start gap-2 pt-1">
                <i data-lucide="map-pin" class="h-3.5 w-3.5 text-primary shrink-0 mt-0.5"></i>
                <span>FC Road, Shivaji Nagar, Pune, Maharashtra 411005 (Serving Global Clients)</span>
              </li>
            </ul>
          </div>

        </div>

        <div class="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>
            &copy; 2026 Inrank Technologies. All rights reserved. Built for Category Dominance.
          </div>
          <div class="flex items-center gap-5">
            <a href="/portfolio.html" class="hover:text-foreground">Portfolio</a>
            <a href="/pricing.html" class="hover:text-foreground">Pricing</a>
            <a href="/contact.html" class="hover:text-foreground">Contact</a>
            <span>Performance Web &amp; AI SEO.</span>
          </div>
        </div>
      </div>
    </footer>

    <!-- STICKY MOBILE CONVERSION BAR -->
    <div class="block md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-border px-4 py-2.5 shadow-2xl">
      <div class="flex items-center gap-2.5">
        <a href="tel:+918788823182" class="flex-1 inline-flex items-center justify-center gap-2 h-11 rounded-lg bg-card border border-border text-foreground font-semibold text-xs shadow-sm hover:bg-secondary transition-colors">
          <i data-lucide="phone" class="h-4 w-4 text-primary"></i>
          <span>Call Desk</span>
        </a>
        <a href="https://wa.me/918788823182?text=Hi%20Inrank%2C%20I%20am%20reviewing%20your%20portfolio%20and%20case%20studies." target="_blank" rel="noopener noreferrer" class="flex-1 inline-flex items-center justify-center gap-2 h-11 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-md transition-colors">
          <i data-lucide="message-circle" class="h-4 w-4"></i>
          <span>WhatsApp</span>
        </a>
        <a href="/contact.html" class="inline-flex items-center justify-center h-11 px-3.5 rounded-lg bg-primary text-white text-xs font-semibold shadow-sm">
          Free Audit
        </a>
      </div>
    </div>
  `;
}

module.exports = {
  getHeaderHTML,
  getFooterHTML
};
