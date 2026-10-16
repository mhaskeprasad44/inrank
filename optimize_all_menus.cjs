const fs = require('fs');

const optimizedHeader = `<header id="site-header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-border bg-background/80 backdrop-blur-md">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16 sm:h-20">
            
            <!-- Site Identity Logo -->
            <a href="/" class="flex items-center gap-2.5 group">
              <div class="h-9 w-9 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-400 text-slate-950 flex items-center justify-center font-black text-base shadow-sm group-hover:scale-105 transition-transform">
                IN
              </div>
              <div class="flex flex-col leading-none">
                <span class="font-display font-bold text-[15px] tracking-tight">Inrank</span>
                <span class="font-display font-medium text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Technologies</span>
              </div>
            </a>

            <!-- Compact Desktop Navigation (6 Focused Links) -->
            <nav class="hidden md:flex items-center gap-6 lg:gap-8">
              
              <!-- Services with Compact Dropdown Panel -->
              <div class="relative group" id="services-nav-group">
                <button id="services-dropdown-trigger" class="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground hover:text-amber-600 transition-colors py-2 focus:outline-none cursor-pointer">
                  <span>Services</span>
                  <i data-lucide="chevron-down" id="services-dropdown-chevron" class="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:rotate-180"></i>
                </button>
                
                <!-- Compact 4-Pillar Dropdown Menu -->
                <div id="services-dropdown-menu" class="fixed md:absolute left-1/2 -translate-x-1/2 top-16 md:top-full md:pt-2 w-[94vw] md:w-[720px] max-w-4xl opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50">
                  <div class="rounded-2xl border border-border bg-white dark:bg-zinc-950 p-6 shadow-2xl">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
                      
                      <!-- Pillar 1: Web & E-Commerce -->
                      <div class="space-y-1.5">
                        <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 pb-1 border-b border-border/50">
                          <i data-lucide="code-xml" class="w-4 h-4"></i>
                          <span>Web &amp; E-Commerce</span>
                        </div>
                        <div class="space-y-0.5">
                          <a href="#/service/website-development" class="block p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors">
                            <div class="text-xs font-bold text-foreground">Custom Website Development</div>
                            <div class="text-[11px] text-muted-foreground">High-speed React/Vite/HTML5 websites</div>
                          </a>
                          <a href="#/service/shopify-development" class="block p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors">
                            <div class="text-xs font-bold text-foreground">Shopify &amp; E-Commerce Stores</div>
                            <div class="text-[11px] text-muted-foreground">0% transaction commission, WhatsApp cart</div>
                          </a>
                          <a href="#/service/wordpress-development" class="block p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors">
                            <div class="text-xs font-bold text-foreground">WordPress Development</div>
                            <div class="text-[11px] text-muted-foreground">Custom themes &amp; speed optimization</div>
                          </a>
                        </div>
                      </div>

                      <!-- Pillar 2: AI Search & SEO -->
                      <div class="space-y-1.5">
                        <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 pb-1 border-b border-border/50">
                          <i data-lucide="search" class="w-4 h-4"></i>
                          <span>AI Search &amp; SEO</span>
                        </div>
                        <div class="space-y-0.5">
                          <a href="#/service/seo" class="block p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors">
                            <div class="text-xs font-bold text-foreground">Local SEO &amp; Google Rankings</div>
                            <div class="text-[11px] text-muted-foreground">Top Google 3-Pack rankings in Pune</div>
                          </a>
                          <a href="#/service/geo-seo-agency" class="block p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors">
                            <div class="text-xs font-bold text-foreground">Generative Engine Optimization (GEO)</div>
                            <div class="text-[11px] text-muted-foreground">Get cited in ChatGPT &amp; AI Overviews</div>
                          </a>
                          <a href="#/service/gmb-optimization" class="block p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors">
                            <div class="text-xs font-bold text-foreground">Google My Business (GMB)</div>
                            <div class="text-[11px] text-muted-foreground">Direct customer calls &amp; inquiries</div>
                          </a>
                        </div>
                      </div>

                      <!-- Pillar 3: Paid Media & Ads -->
                      <div class="space-y-1.5">
                        <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 pb-1 border-b border-border/50">
                          <i data-lucide="target" class="w-4 h-4"></i>
                          <span>Paid Ads &amp; Growth</span>
                        </div>
                        <div class="space-y-0.5">
                          <a href="#/service/google-ads" class="block p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors">
                            <div class="text-xs font-bold text-foreground">Google Ads Management (PPC)</div>
                            <div class="text-[11px] text-muted-foreground">High-ROAS search &amp; Performance Max</div>
                          </a>
                          <a href="#/service/meta-ads" class="block p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors">
                            <div class="text-xs font-bold text-foreground">Meta &amp; Instagram Ads Funnels</div>
                            <div class="text-[11px] text-muted-foreground">Laser-targeted customer acquisition</div>
                          </a>
                        </div>
                      </div>

                      <!-- Pillar 4: Brand & Identity -->
                      <div class="space-y-1.5">
                        <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600 pb-1 border-b border-border/50">
                          <i data-lucide="palette" class="w-4 h-4"></i>
                          <span>Brand &amp; Creative</span>
                        </div>
                        <div class="space-y-0.5">
                          <a href="#/service/logo-design" class="block p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors">
                            <div class="text-xs font-bold text-foreground">Corporate Logo &amp; Identity</div>
                            <div class="text-[11px] text-muted-foreground">Trademark-ready vector brand kits</div>
                          </a>
                          <a href="#/service/brochure-designing" class="block p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors">
                            <div class="text-xs font-bold text-foreground">Brochure &amp; Sales Collaterals</div>
                            <div class="text-[11px] text-muted-foreground">Corporate profiles &amp; catalogues</div>
                          </a>
                        </div>
                      </div>

                    </div>

                    <!-- Bottom strip -->
                    <div class="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                      <span><strong>27 Growth Disciplines</strong> · 365 Days Support</span>
                      <a href="#/services" class="font-bold text-amber-600 hover:text-amber-500 inline-flex items-center gap-1">
                        <span>Explore Complete 27 Services Directory</span>
                        <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Pricing with Highlight Badge -->
              <a href="/pricing.html" class="flex items-center gap-1.5 text-sm font-bold text-foreground hover:text-amber-600 transition-colors">
                <span>Pricing</span>
                <span class="px-1.5 py-0.5 rounded text-[10px] font-black bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">from ₹11k</span>
              </a>

              <!-- Results / Work -->
              <a href="#results" class="text-sm font-medium text-muted-foreground hover:text-foreground hover:text-amber-600 transition-colors">Results</a>

              <!-- About Dropdown -->
              <div class="relative group" id="about-nav-group">
                <button class="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground hover:text-amber-600 transition-colors py-2 focus:outline-none cursor-pointer">
                  <span>About</span>
                  <i data-lucide="chevron-down" class="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:rotate-180"></i>
                </button>
                <div class="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-64 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50">
                  <div class="rounded-xl border border-border bg-white dark:bg-zinc-950 p-2 shadow-xl space-y-1 text-xs">
                    <a href="#/about-us" class="block p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-zinc-900 font-semibold text-foreground">About Inrank Overview</a>
                    <a href="/website-design-company-in-pune.html" class="block p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-zinc-900 text-muted-foreground hover:text-foreground">&bull; Web Designing in Pune</a>
                    <a href="/digital-marketing-agency-in-pune.html" class="block p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-zinc-900 text-muted-foreground hover:text-foreground">&bull; Digital Marketing in Pune</a>
                    <a href="#faq" class="block p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-zinc-900 text-muted-foreground hover:text-foreground">FAQ Directory</a>
                  </div>
                </div>
              </div>

              <!-- Blog -->
              <a href="#/blog" class="text-sm font-medium text-muted-foreground hover:text-foreground hover:text-amber-600 transition-colors font-semibold text-primary">Blog</a>

              <!-- Contact -->
              <a href="/contact.html" class="text-sm font-medium text-muted-foreground hover:text-foreground hover:text-amber-600 transition-colors">Contact</a>
            </nav>

            <!-- Right Action CTA Buttons -->
            <div class="flex items-center gap-2 sm:gap-3">
              <!-- Call Link -->
              <a href="tel:+918788823182" class="hidden lg:inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-amber-600 transition-colors">
                <i data-lucide="phone" class="w-3.5 h-3.5 text-amber-500"></i>
                <span>+91 87888 23182</span>
              </a>

              <!-- WhatsApp Quick Button -->
              <a href="https://wa.me/918788823182" target="_blank" rel="noopener noreferrer" class="h-9 w-9 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200 hover:bg-emerald-600 hover:text-white transition-all flex items-center justify-center" aria-label="WhatsApp">
                <i data-lucide="message-circle" class="w-4 h-4"></i>
              </a>

              <!-- Primary CTA Button -->
              <a href="/contact.html" class="inline-flex h-9 sm:h-10 items-center justify-center font-bold text-xs bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl px-4 sm:px-5 transition-all shadow-sm shadow-amber-500/20 active:scale-[0.98]">
                Get Free Audit
              </a>

              <!-- Mobile Menu Toggle Button -->
              <button id="mobile-menu-toggle" class="md:hidden h-9 w-9 border border-border bg-white dark:bg-card rounded-lg flex items-center justify-center text-foreground transition-all cursor-pointer shadow-sm active:scale-95" aria-label="Toggle mobile menu">
                <svg id="menu-icon-open" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
                <svg id="menu-icon-close" class="h-5 w-5 hidden" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

          </div>
        </div>

        <!-- Mobile Drawer Menu (Fast, Compact & 1-Screen) -->
        <div id="mobile-menu-drawer" class="hidden md:hidden border-t border-border bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl w-full absolute top-full left-0 p-5 shadow-2xl space-y-3">
          <div class="space-y-1 text-sm font-semibold">
            <a href="/" class="block py-2.5 px-3 rounded-lg hover:bg-muted text-foreground">Home</a>
            
            <a href="#/services" class="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-muted text-foreground">
              <span>Services Directory (27 Services)</span>
              <i data-lucide="chevron-right" class="w-4 h-4 text-muted-foreground"></i>
            </a>

            <!-- Pricing with Highlight Badge -->
            <a href="/pricing.html" class="flex items-center justify-between py-2.5 px-3 rounded-lg bg-amber-50/60 dark:bg-amber-950/20 text-amber-700 dark:text-amber-400 font-bold">
              <span>Pricing Packages</span>
              <span class="text-xs bg-amber-500 text-slate-950 px-2 py-0.5 rounded font-black">from ₹11,999</span>
            </a>

            <!-- Local Pune Hubs -->
            <div class="py-1 px-3 space-y-1 text-xs">
              <a href="/website-design-company-in-pune.html" class="block py-1.5 text-muted-foreground hover:text-foreground">&bull; Web Designing in Pune</a>
              <a href="/digital-marketing-agency-in-pune.html" class="block py-1.5 text-muted-foreground hover:text-foreground">&bull; Digital Marketing in Pune</a>
            </div>

            <a href="#results" class="block py-2.5 px-3 rounded-lg hover:bg-muted text-foreground">Results &amp; Case Studies</a>
            <a href="#/about-us" class="block py-2.5 px-3 rounded-lg hover:bg-muted text-foreground">About Inrank</a>
            <a href="#/blog" class="block py-2.5 px-3 rounded-lg hover:bg-muted text-foreground">Growth Blog</a>
            <a href="/contact.html" class="block py-2.5 px-3 rounded-lg hover:bg-muted text-foreground">Contact Us</a>
          </div>

          <!-- Quick Actions -->
          <div class="pt-3 border-t border-border/60 grid grid-cols-2 gap-2">
            <a href="tel:+918788823182" class="flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 text-xs font-bold text-slate-800 dark:text-slate-200 hover:bg-muted transition-all">
              <i data-lucide="phone" class="w-3.5 h-3.5 text-amber-500"></i>
              <span>Call Now</span>
            </a>
            <a href="https://wa.me/918788823182" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-500 transition-all shadow-sm">
              <i data-lucide="message-circle" class="w-3.5 h-3.5"></i>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </header>`;

const targetFiles = [
  'index.html',
  'pricing.html',
  'contact.html',
  'website-design-company-in-pune.html',
  'digital-marketing-agency-in-pune.html'
];

targetFiles.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace from <header id="site-header" ... to </header>
  const headerRegex = /<header id="site-header"[\s\S]*?<\/header>/i;
  if (headerRegex.test(content)) {
    content = content.replace(headerRegex, optimizedHeader);
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Optimized menu in ${file}`);
  } else {
    console.log(`Header not found in ${file}`);
  }
});

console.log('All menus successfully optimized!');
