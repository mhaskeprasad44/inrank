import fs from "fs";
import path from "path";
import { PORTFOLIO_PROJECTS, PortfolioProject } from "./src/portfolioData";

function getCommonHead(title: string, description: string, canonicalPath: string, schemaJSON: string) {
  return `<!doctype html>
<html lang="en" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="keywords" content="Inrank our work, web development case studies, SEO case studies Pune, React 18 SPA, AI SEO, GEO search optimization, digital marketing portfolio" />
    <meta name="author" content="Inrank Technologies Pune" />
    <link rel="canonical" href="https://inranktech.com${canonicalPath}" />
    <link rel="icon" type="image/png" href="/logo.png" />
    <link rel="shortcut icon" type="image/png" href="/logo.png" />
    <link rel="apple-touch-icon" href="/logo.png" />

    <!-- Open Graph / Social -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://inranktech.com${canonicalPath}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="/images/service-website-development.jpg" />

    <!-- Twitter Card -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://inranktech.com${canonicalPath}" />
    <meta property="twitter:title" content="${title}" />
    <meta property="twitter:description" content="${description}" />
    <meta property="twitter:image" content="/images/service-website-development.jpg" />

    <!-- Structured Data Schema -->
    <script type="application/ld+json">
    ${schemaJSON}
    </script>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

    <!-- Lucide Icons Local Bundle (Fast, Non-blocking) -->
    <script src="/lucide.min.js" defer></script>

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
`;
}

function getHeaderHTML(activeNav: string = "our-work") {
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
          <nav class="hidden md:flex items-center gap-5 lg:gap-7">
            
            <!-- Services Dropdown (4 Pillars) -->
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
            </div>

            <!-- Pricing -->
            <a href="/pricing.html" class="text-sm font-semibold ${activeNav === 'pricing' ? 'text-emerald-600 font-bold' : 'text-muted-foreground hover:text-foreground hover:text-emerald-600'} transition-colors">
              Pricing
            </a>

            <!-- Our Work -->
            <a href="/our-work.html" class="text-sm font-semibold ${activeNav === 'our-work' ? 'text-emerald-600 font-bold' : 'text-muted-foreground hover:text-foreground hover:text-emerald-600'} transition-colors">
              Our Work
            </a>

            <!-- Case Studies -->
            <a href="/case-studies.html" class="text-sm font-semibold ${activeNav === 'case-studies' ? 'text-emerald-600 font-bold' : 'text-muted-foreground hover:text-foreground hover:text-emerald-600'} transition-colors">Case Studies</a>

            <!-- About Dropdown -->
            <div class="relative group" id="about-nav-group">
              <button class="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground hover:text-emerald-600 transition-colors py-2 focus:outline-none cursor-pointer">
                <span>About</span>
                <i data-lucide="chevron-down" class="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:rotate-180"></i>
              </button>
              <div class="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-64 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50">
                <div class="rounded-xl border border-border bg-white p-2 shadow-xl space-y-1 text-xs">
                  <a href="/#/about-us" class="block p-2 rounded-lg hover:bg-slate-50 font-semibold text-foreground">About Inrank Overview</a>
                  <a href="/website-design-company-in-pune.html" class="block p-2 rounded-lg hover:bg-slate-50 text-muted-foreground hover:text-foreground">&bull; Web Designing in Pune</a>
                  <a href="/digital-marketing-agency-in-pune.html" class="block p-2 rounded-lg hover:bg-slate-50 text-muted-foreground hover:text-foreground">&bull; Digital Marketing in Pune</a>
                  <a href="/#results" class="block p-2 rounded-lg hover:bg-slate-50 text-muted-foreground hover:text-foreground">Results &amp; Proof</a>
                  <a href="/#faq" class="block p-2 rounded-lg hover:bg-slate-50 text-muted-foreground hover:text-foreground">FAQ Directory</a>
                </div>
              </div>
            </div>

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

            <a href="https://wa.me/918788823182?text=Hi%20Inrank%2C%20I%20am%20reviewing%20your%20work%20and%20would%20like%20a%20free%20strategy%20audit." target="_blank" rel="noopener noreferrer" class="h-9 w-9 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200 hover:bg-emerald-600 hover:text-white transition-all flex items-center justify-center" aria-label="WhatsApp">
              <i data-lucide="message-circle" class="w-4 h-4"></i>
            </a>

            <a href="/contact.html" class="inline-flex h-9 sm:h-10 items-center justify-center font-bold text-xs bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl px-4 sm:px-5 transition-all shadow-sm shadow-emerald-600/20 active:scale-[0.98]">
              Get Free Audit
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
          <a href="/our-work.html" class="block px-3 py-2 rounded-lg text-sm font-semibold ${activeNav === 'our-work' ? 'bg-primary/10 text-primary' : 'hover:bg-secondary'}">Our Work</a>
          <a href="/case-studies.html" class="block px-3 py-2 rounded-lg text-sm font-semibold ${activeNav === 'case-studies' ? 'bg-primary/10 text-primary' : 'hover:bg-secondary'}">Case Studies</a>
          <a href="/pricing.html" class="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-secondary">Pricing</a>
          <a href="/website-design-company-in-pune.html" class="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-secondary">Web Designing in Pune</a>
          <a href="/digital-marketing-agency-in-pune.html" class="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-secondary">Digital Marketing in Pune</a>
          <a href="/#/services" class="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-secondary">All 27 Services</a>
          <a href="/#/about-us" class="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-secondary">About Inrank</a>
          <a href="/#results" class="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-secondary">Results &amp; Proof</a>
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
            <div class="text-xs font-bold uppercase tracking-wider text-emerald-600">Direct Client Works</div>
            <ul class="space-y-2 text-xs">
              <li><a href="/our-work/cytos.html" class="text-muted-foreground hover:text-foreground">CyTOS Machines Pune (React SPA)</a></li>
              <li><a href="/our-work/fludio.html" class="text-muted-foreground hover:text-foreground">Fludio Water Solutions (Luxury Showcase)</a></li>
              <li><a href="/our-work/hiragrafix.html" class="text-muted-foreground hover:text-foreground">HIRAGRAFIX™ Mumbai (Print &amp; Packaging)</a></li>
              <li><a href="/our-work/greytothegreen.html" class="text-muted-foreground hover:text-foreground">Grey To The Green (Eco-Biotech D2C)</a></li>
              <li><a href="/our-work/vasroventures.html" class="text-muted-foreground hover:text-foreground">Vasro Ventures (Fashion Apparel)</a></li>
              <li><a href="/our-work/hcpnest.html" class="text-muted-foreground hover:text-foreground">HCPNest (Healthcare Talent Portal)</a></li>
              <li><a href="/our-work/riituinstitution.html" class="text-muted-foreground hover:text-foreground">Riitu Institution (CA &amp; Commerce)</a></li>
            </ul>
          </div>

          <div class="space-y-3">
            <div class="text-xs font-bold uppercase tracking-wider text-emerald-600">Collaborations &amp; SEO</div>
            <ul class="space-y-2 text-xs">
              <li><a href="/our-work/shetkarifoodstuff.html" class="text-muted-foreground hover:text-foreground">Shetkari Foodstuff (GCC Agro SEO &amp; GEO)</a></li>
              <li><a href="/our-work/orthopedicanklefootspecialist.html" class="text-muted-foreground hover:text-foreground">Dr. Shyam Thakkar (Clinical Orthopedic)</a></li>
              <li><a href="/our-work/dravyafinancial.html" class="text-muted-foreground hover:text-foreground">Dravya Financial (Debt Syndication)</a></li>
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
            <a href="/our-work.html" class="hover:text-foreground font-semibold">Our Work</a>
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
        <a href="https://wa.me/918788823182?text=Hi%20Inrank%2C%20I%20am%20reviewing%20your%20work%20and%20case%20studies." target="_blank" rel="noopener noreferrer" class="flex-1 inline-flex items-center justify-center gap-2 h-11 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-md transition-colors">
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

// -------------------------------------------------------------
// 1. MASTER WORK PAGE GENERATOR (Ting.in inspired)
// -------------------------------------------------------------
function generateMasterWorkHTML(): string {
  const schemaJSON = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://inranktech.com/our-work.html#webpage",
        "url": "https://inranktech.com/our-work.html",
        "name": "Our Work | Inrank Technologies Web Engineering & Search Case Studies",
        "description": "Explore Inrank Technologies' client work: 10 production websites with hero section screenshots, performance metrics, and in-depth case studies.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://inranktech.com/#website",
          "name": "Inrank Technologies",
          "url": "https://inranktech.com"
        }
      },
      {
        "@type": "ItemList",
        "itemListElement": PORTFOLIO_PROJECTS.map((p, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": p.title,
          "url": `https://inranktech.com/our-work/${p.id}.html`
        }))
      }
    ]
  }, null, 2);

  const head = getCommonHead(
    "Our Work | Inrank Technologies Web Development & Digital Growth",
    "Explore 10 production deployments engineered by Inrank Technologies. High-speed React SPAs, luxury portals, agro export SEO & AI search optimization.",
    "/our-work.html",
    schemaJSON
  );

  const projectCardsHTML = PORTFOLIO_PROJECTS.map((project, idx) => {
    const isCollab = project.category === "collaboration";
    const categoryFilterClass = isCollab ? "filter-collaboration" : "filter-direct";
    const seoFilterClass = (project.services.some(s => s.toLowerCase().includes("seo") || s.toLowerCase().includes("geo")) || project.id === "shetkarifoodstuff") ? "filter-seo" : "";
    const techFilterClass = project.services.some(s => s.toLowerCase().includes("react") || s.toLowerCase().includes("portal") || s.toLowerCase().includes("web")) ? "filter-tech" : "";
    const caseNum = String(idx + 1).padStart(2, '0');

    return `
      <!-- Work Item Card: ${project.id} -->
      <article class="portfolio-item group relative flex flex-col justify-between rounded-2xl border border-border bg-card/90 backdrop-blur-sm shadow-sm hover:shadow-2xl hover:border-primary/40 transition-all duration-300 overflow-hidden ${categoryFilterClass} ${seoFilterClass} ${techFilterClass}" data-category="${project.category}" data-title="${project.title.toLowerCase()}" data-domain="${project.domain.toLowerCase()}" data-industry="${project.industry.toLowerCase()}">
        
        <div>
          <!-- Hero Section Screenshot Showcase (Edge-to-Edge Agency Design) -->
          <div class="relative bg-slate-950 overflow-hidden group/thumb aspect-[16/10] sm:aspect-[16/9] border-b border-border/70">
            <!-- Gradient Scrim for Guaranteed Tag Visibility -->
            <div class="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/65 via-black/25 to-transparent z-10 pointer-events-none"></div>

            <!-- Floating High-Contrast Domain & Case Study Badge (User-Requested Design) -->
            <div class="absolute top-3.5 left-3.5 z-20 flex items-center gap-2">
              <span class="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-slate-900/95 backdrop-blur-md text-xs sm:text-[13px] font-bold text-white border border-slate-700/80 shadow-md">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0"></span>
                <span>${project.domain}</span>
              </span>
            </div>

            <div class="absolute top-3.5 right-3.5 z-20 flex items-center">
              <span class="inline-flex items-center px-3.5 sm:px-4 py-1.5 rounded-full bg-emerald-600 text-white text-xs sm:text-[13px] font-extrabold uppercase tracking-wide shadow-md">
                PROJECT ${caseNum}
              </span>
            </div>

            <!-- Authentic Hero Section Screenshot -->
            <a href="/our-work/${project.id}.html" class="block w-full h-full relative overflow-hidden" title="View ${project.clientName} project details">
              <img 
                src="${project.screenshot}" 
                alt="${project.clientName} website hero section screenshot" 
                class="w-full h-full object-cover object-top group-hover/thumb:scale-105 transition-transform duration-500 ease-out" 
                loading="lazy" 
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <span class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-xl transform translate-y-2 group-hover/thumb:translate-y-0 transition-transform duration-300">
                  <span>View Project</span>
                  <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </span>
              </div>
            </a>
          </div>

          <!-- Card Content Body -->
          <div class="p-6 space-y-3">
            <!-- Metadata Row -->
            <div class="flex items-center justify-between text-xs text-muted-foreground pb-1">
              <span class="font-bold uppercase tracking-wider text-emerald-600 text-[11px] truncate max-w-[200px]">${project.sector || project.industry}</span>
              <span class="font-medium text-slate-500 text-xs">${project.clientName}</span>
            </div>

            <!-- Client & Title -->
            <h3 class="font-display font-bold text-lg sm:text-xl text-foreground leading-snug group-hover:text-emerald-600 transition-colors">
              <a href="/our-work/${project.id}.html">${project.title}</a>
            </h3>

            <!-- Summary -->
            <p class="text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">
              ${project.heroSummary}
            </p>
          </div>
        </div>

        <!-- Optimized Action Buttons (Clean spacing, matching heights, NO dividing line!) -->
        <div class="px-6 pb-6 pt-2 flex items-center gap-2.5">
          <a href="/our-work/${project.id}.html" class="flex-1 inline-flex items-center justify-center gap-1.5 h-11 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-sm hover:shadow-md transition-all text-center">
            <span>View Project</span>
            <i data-lucide="arrow-right" class="h-3.5 w-3.5"></i>
          </a>

          <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-1.5 h-11 px-4 rounded-xl border border-border bg-card text-foreground font-semibold text-xs hover:bg-secondary transition-colors text-center" title="Visit ${project.domain}">
            <span>Live Site</span>
            <i data-lucide="external-link" class="h-3.5 w-3.5 text-muted-foreground"></i>
          </a>
        </div>

      </article>
    `;
  }).join("\n");

  const bodyContent = `
    ${getHeaderHTML('our-work')}

    <main class="relative pt-24 sm:pt-28 md:pt-36 pb-24 overflow-hidden">
      
      <!-- HERO SECTION -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-border bg-secondary/80 text-foreground text-xs font-semibold shadow-xs">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>10 Verified Client Deployments</span>
        </div>

        <h1 class="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-foreground tracking-tight max-w-4xl mx-auto leading-[1.1]">
          Our Work
        </h1>

        <p class="text-lg sm:text-2xl font-bold text-emerald-700 max-w-3xl mx-auto leading-snug">
          Turning clicks into connections, brands into powerhouses, and visitors into loyal customers.
        </p>

        <p class="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Explore 10 production deployments engineered for revenue, sub-second speed, and category authority - from high-velocity React 18 single page applications and B2B industrial catalogs to international agro-export SEO and AI search (GEO) domination.
        </p>

        <!-- Telemetry Metrics Strip -->
        <div class="pt-6 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left">
          
          <div class="p-4 rounded-xl border border-border bg-card/80 backdrop-blur-sm shadow-sm space-y-1">
            <div class="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
              <i data-lucide="check-circle-2" class="h-4 w-4 text-emerald-600"></i>
              <span>Deployments</span>
            </div>
            <div class="text-2xl sm:text-3xl font-extrabold text-foreground font-display">10 Works</div>
            <div class="text-[11px] text-emerald-600 font-medium">100% On-Time Delivery</div>
          </div>

          <div class="p-4 rounded-xl border border-border bg-card/80 backdrop-blur-sm shadow-sm space-y-1">
            <div class="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
              <i data-lucide="zap" class="h-4 w-4 text-emerald-600"></i>
              <span>PageSpeed</span>
            </div>
            <div class="text-2xl sm:text-3xl font-extrabold text-foreground font-display">98+ Avg</div>
            <div class="text-[11px] text-emerald-600 font-medium">Sub-Second Mobile LCP</div>
          </div>

          <div class="p-4 rounded-xl border border-border bg-card/80 backdrop-blur-sm shadow-sm space-y-1">
            <div class="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
              <i data-lucide="trending-up" class="h-4 w-4 text-emerald-600"></i>
              <span>Leads Growth</span>
            </div>
            <div class="text-2xl sm:text-3xl font-extrabold text-foreground font-display">+310%</div>
            <div class="text-[11px] text-emerald-600 font-medium">Average Inquiries Lift</div>
          </div>

          <div class="p-4 rounded-xl border border-border bg-card/80 backdrop-blur-sm shadow-sm space-y-1">
            <div class="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
              <i data-lucide="cpu" class="h-4 w-4 text-emerald-600"></i>
              <span>AI Search GEO</span>
            </div>
            <div class="text-2xl sm:text-3xl font-extrabold text-foreground font-display">#1 Citations</div>
            <div class="text-[11px] text-emerald-600 font-medium">Google, Perplexity &amp; ChatGPT</div>
          </div>

        </div>

      </section>

      <!-- FILTER TABS & INSTANT SEARCH -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-6">
        
        <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-border pb-6">
          
          <!-- Category Filter Buttons -->
          <div class="flex flex-wrap items-center gap-2 w-full md:w-auto" role="tablist">
            <button type="button" class="portfolio-filter-btn active px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-primary text-primary-foreground shadow-sm transition-all" data-filter="all">
              All Work (10)
            </button>
            <button type="button" class="portfolio-filter-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-secondary transition-all" data-filter="direct">
              Direct Client Web &amp; Tech (7)
            </button>
            <button type="button" class="portfolio-filter-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-secondary transition-all" data-filter="collaboration">
              In Collaboration / Outsourcing (3)
            </button>
            <button type="button" class="portfolio-filter-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-secondary transition-all" data-filter="seo">
              Performance SEO &amp; AI Search (3)
            </button>
          </div>

          <!-- Realtime Search Input -->
          <div class="relative w-full md:w-72">
            <i data-lucide="search" class="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"></i>
            <input 
              type="text" 
              id="portfolio-search-input" 
              placeholder="Search by client, domain, industry..." 
              class="w-full h-10 pl-10 pr-4 rounded-xl border border-border bg-card text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

        </div>

        <!-- 10 PROJECTS GRID WITH REAL SCREENSHOTS -->
        <div id="portfolio-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${projectCardsHTML}
        </div>

        <!-- Empty Filter State -->
        <div id="portfolio-empty-state" class="hidden text-center py-16 space-y-3">
          <i data-lucide="filter-x" class="h-10 w-10 text-muted-foreground mx-auto"></i>
          <h3 class="font-display font-bold text-lg text-foreground">No matching projects found</h3>
          <p class="text-xs text-muted-foreground">Try adjusting your filter or search keywords to see our other client works.</p>
        </div>

      </section>

      <!-- 4-STAGE ENGINEERING FRAMEWORK -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 border-t border-border pt-16">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-secondary/80 text-foreground border border-border shadow-xs">
            <i data-lucide="layers" class="h-3.5 w-3.5 text-primary"></i>
            <span>The Inrank Methodology</span>
          </div>
          <h2 class="font-display font-bold text-2xl sm:text-3xl text-foreground">How We Build Category-Dominant Assets</h2>
          <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Every project in our portfolio follows a rigorous 4-stage engineering and growth framework designed to eliminate guesswork and deliver measurable commercial results.
          </p>
        </div>

        <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div class="p-6 rounded-2xl border border-border bg-card/60 space-y-3">
            <div class="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold font-mono text-sm">
              01
            </div>
            <h3 class="font-display font-bold text-base text-foreground">Audit &amp; Buyer Intent</h3>
            <p class="text-xs text-muted-foreground leading-relaxed">
              We deconstruct your top 3 competitors, search traffic gaps, and friction points before writing a single line of code.
            </p>
          </div>

          <div class="p-6 rounded-2xl border border-border bg-card/60 space-y-3">
            <div class="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold font-mono text-sm">
              02
            </div>
            <h3 class="font-display font-bold text-base text-foreground">Sub-Second Architecture</h3>
            <p class="text-xs text-muted-foreground leading-relaxed">
              Componentized React, Vite, or semantic HTML delivering 99/100 Core Web Vitals and zero layout shifts.
            </p>
          </div>

          <div class="p-6 rounded-2xl border border-border bg-card/60 space-y-3">
            <div class="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold font-mono text-sm">
              03
            </div>
            <h3 class="font-display font-bold text-base text-foreground">AI Search (GEO) Ingestion</h3>
            <p class="text-xs text-muted-foreground leading-relaxed">
              Rich JSON-LD entity schema, llms.txt, and semantic answer hubs ensuring citation inside Google, Perplexity, and ChatGPT Search.
            </p>
          </div>

          <div class="p-6 rounded-2xl border border-border bg-card/60 space-y-3">
            <div class="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold font-mono text-sm">
              04
            </div>
            <h3 class="font-display font-bold text-base text-foreground">High-Ticket Lead Funnels</h3>
            <p class="text-xs text-muted-foreground leading-relaxed">
              Interactive wizards, calculators, and WhatsApp priority desks converting passive visitors into paying business inquiries.
            </p>
          </div>

        </div>
      </section>

      <!-- AUDIT CONVERSION CTA BANNER -->
      <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div class="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-card via-card to-primary/5 p-8 sm:p-12 shadow-xl text-center space-y-6">
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-700 border border-emerald-500/20">
            <i data-lucide="zap" class="h-3.5 w-3.5 text-emerald-600"></i>
            <span>Ready for Growth?</span>
          </div>
          
          <h2 class="font-display font-extrabold text-2xl sm:text-4xl text-foreground max-w-2xl mx-auto leading-tight">
            Like Our Work? Let's Build Your Next Digital Growth Engine.
          </h2>

          <p class="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
            We will review your existing website, competitor search visibility, and mobile conversion bottlenecks - 100% free with zero sales talk.
          </p>

          <div class="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="/contact.html" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-md hover:bg-primary/95 transition-all">
              <span>Request Free Growth Audit</span>
              <i data-lucide="arrow-right" class="h-4 w-4"></i>
            </a>

            <a href="https://wa.me/918788823182?text=Hi%20Inrank%2C%20I%20reviewed%20your%20work%20and%20want%20to%20schedule%20a%20free%20consultation." target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl border border-border bg-card hover:bg-emerald-600 hover:text-white hover:border-emerald-600 text-foreground font-semibold text-sm transition-all shadow-sm">
              <i data-lucide="message-circle" class="h-4 w-4 text-emerald-600"></i>
              <span>WhatsApp Strategy Desk (+91 87888 23182)</span>
            </a>
          </div>

          <div class="text-[11px] text-muted-foreground flex items-center justify-center gap-4 pt-2">
            <span class="flex items-center gap-1"><i data-lucide="shield-check" class="h-3.5 w-3.5 text-emerald-600"></i> 100% Strict NDA</span>
            <span>&bull;</span>
            <span>48-Hour Turnaround</span>
            <span>&bull;</span>
            <span>Fixed-Price Roadmaps</span>
          </div>
        </div>
      </section>

    </main>

    ${getFooterHTML()}

    <!-- Client-Side Filter & Search Script -->
    <script>
      document.addEventListener('DOMContentLoaded', () => {
        const filterBtns = document.querySelectorAll('.portfolio-filter-btn');
        const items = document.querySelectorAll('.portfolio-item');
        const searchInput = document.getElementById('portfolio-search-input');
        const emptyState = document.getElementById('portfolio-empty-state');
        let currentFilter = 'all';
        let searchQuery = '';

        function updateGrid() {
          let visibleCount = 0;
          items.forEach(item => {
            const cat = item.getAttribute('data-category');
            const title = item.getAttribute('data-title') || '';
            const domain = item.getAttribute('data-domain') || '';
            const industry = item.getAttribute('data-industry') || '';

            let matchesFilter = false;
            if (currentFilter === 'all') matchesFilter = true;
            else if (currentFilter === 'direct' && cat === 'direct') matchesFilter = true;
            else if (currentFilter === 'collaboration' && cat === 'collaboration') matchesFilter = true;
            else if (currentFilter === 'seo' && item.classList.contains('filter-seo')) matchesFilter = true;
            else if (currentFilter === 'tech' && item.classList.contains('filter-tech')) matchesFilter = true;

            const textMatch = !searchQuery || title.includes(searchQuery) || domain.includes(searchQuery) || industry.includes(searchQuery);

            if (matchesFilter && textMatch) {
              item.classList.remove('hidden');
              visibleCount++;
            } else {
              item.classList.add('hidden');
            }
          });

          if (emptyState) {
            if (visibleCount === 0) emptyState.classList.remove('hidden');
            else emptyState.classList.add('hidden');
          }

          if (typeof window.lucide !== 'undefined') {
            window.lucide.createIcons();
          }
        }

        filterBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            filterBtns.forEach(b => {
              b.classList.remove('active', 'bg-primary', 'text-primary-foreground', 'shadow-sm');
              b.classList.add('text-muted-foreground');
            });
            btn.classList.add('active', 'bg-primary', 'text-primary-foreground', 'shadow-sm');
            btn.classList.remove('text-muted-foreground');
            currentFilter = btn.getAttribute('data-filter') || 'all';
            updateGrid();
          });
        });

        if (searchInput) {
          searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            updateGrid();
          });
        }
      });
    </script>

    <script type="module" src="/src/main.ts"></script>
  </body>
</html>`;

  return head + bodyContent;
}

// -------------------------------------------------------------
// 2. INDIVIDUAL WORK & CASE STUDY GENERATOR (Elementor Agency Style)
// -------------------------------------------------------------
function generateIndividualWorkHTML(
  project: PortfolioProject, 
  prevProject: PortfolioProject, 
  nextProject: PortfolioProject,
  moduleType: 'our-work' | 'case-studies' = 'our-work'
): string {
  const isCollab = project.category === "collaboration";
  const isCaseStudy = moduleType === "case-studies";
  const basePath = isCaseStudy ? "/case-studies" : "/our-work";
  const moduleLabel = isCaseStudy ? "Case Studies" : "Our Work";
  const moduleHubUrl = isCaseStudy ? "/case-studies.html" : "/our-work.html";

  const schemaJSON = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `https://inranktech.com${basePath}/${project.id}.html#article`,
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://inranktech.com/#website",
          "name": "Inrank Technologies",
          "url": "https://inranktech.com"
        },
        "headline": project.title,
        "description": project.metaDesc,
        "url": `https://inranktech.com${basePath}/${project.id}.html`,
        "datePublished": "2026-08-10",
        "author": {
          "@type": "Organization",
          "name": "Inrank Technologies",
          "url": "https://inranktech.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Inrank Technologies",
          "logo": {
            "@type": "ImageObject",
            "url": "https://inranktech.com/logo.png"
          }
        },
        "about": [
          {
            "@type": "Thing",
            "name": project.clientName,
            "url": project.liveUrl
          },
          {
            "@type": "Thing",
            "name": project.industry
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `https://inranktech.com${basePath}/${project.id}.html#faq`,
        "mainEntity": project.faqs.map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer
          }
        }))
      }
    ]
  }, null, 2);

  const head = getCommonHead(
    `${project.clientName} | ${moduleLabel} | Inrank Technologies`,
    project.metaDesc,
    `${basePath}/${project.id}.html`,
    schemaJSON
  );

  const relatedProjects = PORTFOLIO_PROJECTS
    .filter(p => p.id !== project.id)
    .slice(0, 3);

  const bodyContent = `
    ${getHeaderHTML(isCaseStudy ? 'case-studies' : 'our-work')}

    <main class="relative pt-24 sm:pt-28 md:pt-36 pb-24 overflow-hidden font-sans">
      
      <!-- 1. BREADCRUMBS BAR -->
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav class="flex items-center gap-2 text-sm font-medium text-slate-500" aria-label="Breadcrumb">
          <a href="/" class="hover:text-emerald-600 transition-colors">Home</a>
          <span class="text-slate-300">/</span>
          <a href="${moduleHubUrl}" class="hover:text-emerald-600 transition-colors">${moduleLabel}</a>
          <span class="text-slate-300">/</span>
          <span class="text-slate-900 font-semibold truncate max-w-xs sm:max-w-md">${project.clientName}</span>
        </nav>
      </div>

      <article class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
        
        <!-- 2. PROJECT HERO HEADER -->
        <header class="space-y-5">
          
          <!-- Category Badges & Metadata Chips -->
          <div class="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold ${isCollab ? 'bg-amber-50 text-amber-700 border border-amber-200' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'}">
              <i data-lucide="${isCollab ? 'handshake' : 'award'}" class="w-4 h-4 text-emerald-600"></i>
              <span>${project.categoryBadge}</span>
            </span>

            <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
              <i data-lucide="clock" class="w-3.5 h-3.5 text-slate-500"></i>
              <span>${project.timeline}</span>
            </span>

            <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
              <i data-lucide="map-pin" class="w-3.5 h-3.5 text-slate-500"></i>
              <span>${project.location}</span>
            </span>
          </div>

          <!-- Project Title & Subtitle -->
          <div class="space-y-3">
            <h1 class="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.12]">
              ${project.clientName}
            </h1>
            <p class="font-display font-bold text-xl sm:text-2xl text-emerald-700 leading-snug max-w-4xl">
              ${project.heroHeadline}
            </p>
          </div>

          <!-- 3. ELEMENTOR-STYLE PROJECT META SPEC BAR -->
          <div class="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 sm:p-8 mt-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-center">
              
              <!-- Meta 1: Client & Location -->
              <div class="space-y-1 sm:border-r border-slate-100 pr-4">
                <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 flex items-center gap-1.5">
                  <i data-lucide="building-2" class="w-4 h-4"></i>
                  <span>Client &amp; City</span>
                </span>
                <div class="text-base font-bold text-slate-900">${project.clientName}</div>
                <div class="text-sm text-slate-500">${project.location}</div>
              </div>

              <!-- Meta 2: Industry Sector -->
              <div class="space-y-1 lg:border-r border-slate-100 pr-4">
                <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 flex items-center gap-1.5">
                  <i data-lucide="briefcase" class="w-4 h-4"></i>
                  <span>Industry Sector</span>
                </span>
                <div class="text-base font-bold text-slate-900 line-clamp-1" title="${project.sector || project.industry}">
                  ${project.sector || project.industry}
                </div>
                <div class="text-sm text-slate-500">Turnaround: ${project.timeline}</div>
              </div>

              <!-- Meta 3: Core Scope of Work -->
              <div class="space-y-1 sm:border-r border-slate-100 pr-4">
                <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 flex items-center gap-1.5">
                  <i data-lucide="layers" class="w-4 h-4"></i>
                  <span>Services Scope</span>
                </span>
                <div class="text-base font-bold text-slate-900 line-clamp-1" title="${project.metaServices ? project.metaServices.join(', ') : project.services.join(', ')}">
                  ${project.metaServices ? project.metaServices.slice(0, 3).join(", ") : project.services.slice(0, 3).join(", ")}
                </div>
                <div class="text-sm text-slate-500">Full Production Build</div>
              </div>

              <!-- Meta 4: Live Website CTA Button -->
              <div class="flex flex-col items-stretch sm:items-start lg:items-center justify-center">
                <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="w-full inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all text-center">
                  <span>Visit Live Website</span>
                  <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
                </a>
                <span class="text-xs text-slate-400 mt-2 font-mono text-center">${project.domain}</span>
              </div>

            </div>
          </div>

        </header>

        <!-- 4. HIGH-RESOLUTION BROWSER SHOWCASE FRAME -->
        <section class="rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
          <!-- Browser Window Controls Bar -->
          <div class="h-11 bg-slate-100 border-b border-slate-200 px-4 sm:px-6 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-rose-400"></span>
              <span class="w-3 h-3 rounded-full bg-amber-400"></span>
              <span class="w-3 h-3 rounded-full bg-emerald-400"></span>
            </div>
            
            <div class="flex-1 max-w-md mx-auto hidden sm:flex items-center justify-center">
              <div class="w-full bg-white border border-slate-200 rounded-lg px-4 py-1 text-xs text-slate-500 font-mono text-center truncate shadow-xs">
                https://${project.domain}
              </div>
            </div>

            <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="text-xs font-bold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1.5 transition-colors">
              <span class="hidden sm:inline">Open Live URL</span>
              <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
            </a>
          </div>

          <!-- Screenshot Viewport -->
          <div class="bg-slate-50">
            <img 
              src="${project.screenshot}" 
              alt="${project.clientName} live website design by Inrank Technologies" 
              class="w-full h-auto block object-top" 
              loading="eager"
            />
          </div>
        </section>

        <!-- 5. ABOUT THE PROJECT & SCOPE (Balanced 2-Column Section) -->
        <section class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-2">
          
          <!-- Left Column: Context & Narrative (7 cols) -->
          <div class="lg:col-span-7 space-y-5">
            <div class="space-y-2">
              <span class="text-xs font-bold uppercase tracking-wider text-emerald-600">The Context</span>
              <h2 class="font-display font-bold text-2xl sm:text-3xl text-slate-900 leading-tight">
                About The Project &amp; Background
              </h2>
            </div>

            <p class="text-base sm:text-lg text-slate-600 leading-relaxed">
              ${project.clientBackground}
            </p>

            <p class="text-base sm:text-lg text-slate-600 leading-relaxed">
              ${project.strategicSolution.overview}
            </p>
          </div>

          <!-- Right Column: Project Scope & Bottlenecks Solved (5 cols) -->
          <div class="lg:col-span-5">
            <div class="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-5">
              <div class="space-y-1">
                <span class="text-xs font-bold uppercase tracking-wider text-emerald-600">Project Objectives</span>
                <h3 class="font-display font-bold text-xl text-slate-900">Challenges Solved</h3>
              </div>

              <div class="space-y-4">
                ${project.challenges.map(c => `
                  <div class="flex items-start gap-3">
                    <div class="w-6 h-6 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                      <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600"></i>
                    </div>
                    <p class="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                      ${c}
                    </p>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>

        </section>

        <!-- 6. STRATEGIC SOLUTIONS & KEY FEATURES DELIVERED -->
        <section class="space-y-8 pt-4">
          
          <div class="text-center max-w-3xl mx-auto space-y-3">
            <span class="text-xs font-bold uppercase tracking-wider text-emerald-600">What We Engineered</span>
            <h2 class="font-display font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
              Strategic Solutions &amp; Key Features
            </h2>
            <p class="text-base sm:text-lg text-slate-600 leading-relaxed">
              Engineered by Inrank Technologies to transform digital presence into high-converting commercial authority.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            ${(project.usps && project.usps.length ? project.usps : project.strategicSolution.pillars).map((usp, idx) => `
              <div class="rounded-2xl border border-slate-200 bg-white p-7 sm:p-8 shadow-sm hover:shadow-md hover:border-emerald-500/40 transition-all space-y-4">
                <div class="flex items-center justify-between">
                  <div class="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <i data-lucide="${usp.icon || 'check-circle'}" class="w-6 h-6"></i>
                  </div>
                  <span class="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">Feature 0${idx + 1}</span>
                </div>
                <h3 class="font-display font-bold text-xl text-slate-900 leading-snug">${usp.title}</h3>
                <p class="text-base text-slate-600 leading-relaxed">${usp.description}</p>
              </div>
            `).join("")}
          </div>

        </section>

        <!-- 7. DELIVERABLES & CLIENT TESTIMONIAL -->
        <section class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-4">
          
          <!-- Deliverables Checklist (7 cols) -->
          <div class="lg:col-span-7 space-y-6">
            <div class="space-y-2">
              <span class="text-xs font-bold uppercase tracking-wider text-emerald-600">Assets &amp; Handover</span>
              <h3 class="font-display font-bold text-2xl sm:text-3xl text-slate-900">Verified Project Deliverables</h3>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              ${project.deliverables.map(d => `
                <div class="rounded-xl border border-slate-200 bg-white p-5 space-y-2 shadow-xs hover:border-slate-300 transition-colors">
                  <div class="flex items-center gap-2.5 font-bold text-base text-slate-900">
                    <i data-lucide="${d.icon || 'check'}" class="w-4 h-4 text-emerald-600 shrink-0"></i>
                    <span>${d.title}</span>
                  </div>
                  <p class="text-sm text-slate-600 leading-relaxed pl-6">
                    ${d.description}
                  </p>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- Client Testimonial Box (5 cols) -->
          <div class="lg:col-span-5 space-y-6">
            <div class="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-7 sm:p-8 space-y-5 shadow-sm">
              <div class="flex items-center gap-1 text-amber-500">
                <i data-lucide="star" class="w-5 h-5 fill-amber-400"></i>
                <i data-lucide="star" class="w-5 h-5 fill-amber-400"></i>
                <i data-lucide="star" class="w-5 h-5 fill-amber-400"></i>
                <i data-lucide="star" class="w-5 h-5 fill-amber-400"></i>
                <i data-lucide="star" class="w-5 h-5 fill-amber-400"></i>
              </div>
              <p class="text-base sm:text-lg italic text-slate-800 leading-relaxed">
                "${project.testimonial.quote}"
              </p>
              <div class="pt-4 border-t border-emerald-200/80">
                <div class="font-bold text-base text-slate-900">${project.testimonial.author}</div>
                <div class="text-sm text-emerald-700 font-medium">${project.testimonial.role}, ${project.testimonial.company}</div>
              </div>
            </div>
          </div>

        </section>

        <!-- 8. FREQUENTLY ASKED QUESTIONS -->
        <section class="max-w-4xl mx-auto space-y-6 pt-6">
          <div class="text-center space-y-2">
            <span class="text-xs font-bold uppercase tracking-wider text-emerald-600">Got Questions?</span>
            <h3 class="font-display font-bold text-2xl sm:text-3xl text-slate-900">Frequently Asked Questions</h3>
            <p class="text-base text-slate-600">Details about the ${project.clientName} deployment and architecture.</p>
          </div>

          <div class="space-y-4 pt-2">
            ${project.faqs.map(faq => `
              <div class="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm space-y-2.5">
                <div class="font-bold text-lg text-slate-900 flex items-start gap-3">
                  <i data-lucide="help-circle" class="w-5 h-5 text-emerald-600 shrink-0 mt-0.5"></i>
                  <span>${faq.question}</span>
                </div>
                <p class="text-base text-slate-600 leading-relaxed pl-8">
                  ${faq.answer}
                </p>
              </div>
            `).join("")}
          </div>
        </section>

        <!-- 9. PREVIOUS & NEXT PROJECT NAVIGATION -->
        <section class="border-t border-slate-200 pt-10">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="${basePath}/${prevProject.id}.html" class="group rounded-2xl border border-slate-200 bg-white p-5 hover:border-emerald-500/40 hover:shadow-md transition-all flex items-center gap-4">
              <div class="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-emerald-50 text-slate-600 group-hover:text-emerald-600 flex items-center justify-center shrink-0 transition-colors">
                <i data-lucide="arrow-left" class="w-5 h-5"></i>
              </div>
              <div class="min-w-0">
                <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Previous Project</span>
                <div class="font-bold text-base text-slate-900 group-hover:text-emerald-600 truncate transition-colors">${prevProject.clientName}</div>
              </div>
            </a>

            <a href="${basePath}/${nextProject.id}.html" class="group rounded-2xl border border-slate-200 bg-white p-5 hover:border-emerald-500/40 hover:shadow-md transition-all flex items-center justify-end gap-4 text-right">
              <div class="min-w-0">
                <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Next Project</span>
                <div class="font-bold text-base text-slate-900 group-hover:text-emerald-600 truncate transition-colors">${nextProject.clientName}</div>
              </div>
              <div class="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-emerald-50 text-slate-600 group-hover:text-emerald-600 flex items-center justify-center shrink-0 transition-colors">
                <i data-lucide="arrow-right" class="w-5 h-5"></i>
              </div>
            </a>
          </div>
        </section>

        <!-- 10. RELATED PROJECTS GRID -->
        <section class="space-y-6 pt-4">
          <div class="flex items-center justify-between">
            <div class="space-y-1">
              <span class="text-xs font-bold uppercase tracking-wider text-emerald-600">More Client Stories</span>
              <h3 class="font-display font-bold text-2xl text-slate-900">Explore Other Production Works</h3>
            </div>
            <a href="${moduleHubUrl}" class="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors">
              <span>View All 10 Works</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
            ${relatedProjects.map(rel => `
              <a href="${basePath}/${rel.id}.html" class="group block rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-lg hover:border-emerald-500/40 transition-all">
                <div class="relative bg-slate-900 aspect-[16/10] overflow-hidden">
                  <img src="${rel.screenshot}" alt="${rel.clientName} screenshot" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  <div class="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-black/60 text-white text-xs font-mono">
                    ${rel.domain}
                  </div>
                </div>
                <div class="p-5 space-y-2">
                  <div class="text-xs font-bold uppercase tracking-wider text-emerald-600">${rel.sector || rel.industry}</div>
                  <div class="font-display font-bold text-base text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-1">${rel.clientName}</div>
                  <div class="text-xs text-slate-500 font-semibold pt-1 flex items-center gap-1 group-hover:text-emerald-600 transition-colors">
                    <span>View Project</span>
                    <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                  </div>
                </div>
              </a>
            `).join("")}
          </div>
        </section>

        <!-- 11. BOTTOM CONVERSION CTA BANNER -->
        <section class="rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-white via-white to-emerald-50/30 p-8 sm:p-14 shadow-xl text-center space-y-6">
          <div class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-700 border border-emerald-500/20">
            <i data-lucide="zap" class="h-4 w-4 text-emerald-600"></i>
            <span>Ready To Scale?</span>
          </div>
          
          <h2 class="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl text-slate-900 max-w-2xl mx-auto leading-tight">
            Like Our Work? Let's Build Your Next Digital Growth Engine.
          </h2>

          <p class="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Get a tailored technical, SEO, and conversion audit for your business. Sub-second speed and category dominance engineered from Day 1.
          </p>

          <div class="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a href="/contact.html" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-md hover:bg-emerald-700 transition-all">
              <span>Request Free Growth Audit</span>
              <i data-lucide="arrow-right" class="h-4 w-4"></i>
            </a>

            <a href="https://wa.me/918788823182?text=Hi%20Inrank%2C%20I%20reviewed%20the%20${encodeURIComponent(project.clientName)}%20showcase%20and%20want%20to%20discuss%20a%20similar%20project." target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl border border-slate-200 bg-white hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300 text-slate-800 font-bold text-sm transition-all shadow-sm">
              <i data-lucide="message-circle" class="h-4 w-4 text-emerald-600"></i>
              <span>WhatsApp Strategy Desk (+91 87888 23182)</span>
            </a>
          </div>

          <div class="text-xs text-slate-500 flex flex-wrap items-center justify-center gap-4 pt-2">
            <span class="flex items-center gap-1.5"><i data-lucide="shield-check" class="h-4 w-4 text-emerald-600"></i> 100% Strict NDA</span>
            <span>&bull;</span>
            <span>48-Hour Turnaround</span>
            <span>&bull;</span>
            <span>Fixed-Price Roadmaps</span>
          </div>
        </section>

      </article>

    </main>

    ${getFooterHTML()}

    <script type="module" src="/src/main.ts"></script>
  </body>
</html>`;

  return head + bodyContent;
}

// -------------------------------------------------------------
// EXECUTION PIPELINE
// -------------------------------------------------------------

function generateCaseStudiesHubHTML(): string {
  const schemaJSON = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://inranktech.com/case-studies.html#webpage",
        "url": "https://inranktech.com/case-studies.html",
        "name": "Case Studies & Client ROI Breakdowns | Inrank Technologies",
        "description": "Explore verified client case studies by Inrank Technologies. Data-driven growth, search rankings, CPL reduction, and commercial results.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://inranktech.com/#website",
          "name": "Inrank Technologies",
          "url": "https://inranktech.com"
        }
      }
    ]
  }, null, 2);

  const head = getCommonHead(
    "Case Studies & Verified Client Growth | Inrank Technologies",
    "Explore verified client case studies by Inrank Technologies: measurable conversion growth, SEO ranking leaps, and proven lead generation ROI.",
    "/case-studies.html",
    schemaJSON
  );

  const caseCardsHTML = PORTFOLIO_PROJECTS.map((project, idx) => {
    return `
      <!-- Case Study Card: ${project.id} -->
      <article class="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 overflow-hidden" data-category="${project.category}" data-industry="${project.industry}">
        <div>
          <!-- Screenshot Preview with High-Impact Browser Chrome -->
          <div class="relative bg-slate-950 overflow-hidden aspect-[16/9] border-b border-slate-200">
            <div class="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-black/75 via-black/35 to-transparent z-10 pointer-events-none"></div>
            
            <div class="absolute top-3.5 left-3.5 z-20 flex items-center gap-2">
              <span class="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-slate-900/95 backdrop-blur-md text-xs sm:text-[13px] font-bold text-white border border-slate-700/80 shadow-md">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0"></span>
                <span>${project.domain}</span>
              </span>
            </div>

            <div class="absolute top-3.5 right-3.5 z-20 flex items-center">
              <span class="inline-flex items-center px-3.5 sm:px-4 py-1.5 rounded-full bg-emerald-600 text-white text-xs sm:text-[13px] font-extrabold uppercase tracking-wide shadow-md">
                CASE STUDY ${String(idx + 1).padStart(2, '0')}
              </span>
            </div>

            <a href="/case-studies/${project.id}.html" class="block w-full h-full relative overflow-hidden group" title="Read ${project.clientName} case study">
              <img 
                src="${project.screenshot}" 
                alt="${project.clientName} case study screenshot" 
                class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out" 
                loading="lazy" 
              />
            </a>
          </div>

          <!-- Card Content Body with Short Case Study Details -->
          <div class="p-6 sm:p-7 space-y-4">
            
            <!-- Category Tag & Client Location -->
            <div class="flex flex-wrap items-center justify-between gap-2 text-xs">
              <span class="font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/70">
                ${project.sector || project.industry}
              </span>
              <span class="font-medium text-slate-500 flex items-center gap-1">
                <i data-lucide="map-pin" class="w-3.5 h-3.5 text-slate-400"></i>
                <span>${project.location}</span>
              </span>
            </div>

            <!-- Title & Core Headline -->
            <div class="space-y-1.5">
              <h2 class="font-display font-black text-xl sm:text-2xl text-slate-900 leading-snug group-hover:text-emerald-600 transition-colors">
                <a href="/case-studies/${project.id}.html">${project.clientName}</a>
              </h2>
              <p class="text-sm font-semibold text-emerald-700 leading-normal">
                ${project.heroHeadline}
              </p>
            </div>

            <!-- SHORT CASE STUDY DETAILS: Challenge & Solution -->
            <div class="space-y-3 pt-1">
              
              <!-- 1. The Challenge -->
              <div class="rounded-xl bg-slate-50 border border-slate-200/80 p-4 space-y-1">
                <div class="text-xs font-bold uppercase tracking-wider text-rose-600 flex items-center gap-1.5">
                  <i data-lucide="alert-circle" class="w-3.5 h-3.5"></i>
                  <span>The Challenge</span>
                </div>
                <p class="text-sm text-slate-700 leading-relaxed font-medium">
                  ${project.challenges[0]}
                </p>
              </div>

              <!-- 2. What Inrank Engineered -->
              <div class="rounded-xl bg-emerald-50/70 border border-emerald-200/80 p-4 space-y-1">
                <div class="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
                  <i data-lucide="check-circle" class="w-3.5 h-3.5 text-emerald-600"></i>
                  <span>What Inrank Engineered</span>
                </div>
                <p class="text-sm text-slate-700 leading-relaxed font-medium">
                  ${project.strategicSolution.overview}
                </p>
              </div>

            </div>

            <!-- 3. Key Results & Commercial Metrics Strip -->
            <div class="pt-2 border-t border-slate-100">
              <span class="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">Verified Commercial Outcomes</span>
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                ${project.results.metrics.slice(0, 3).map(m => `
                  <div class="p-3 rounded-xl bg-slate-50/90 border border-slate-200/70">
                    <div class="text-xs font-medium text-slate-500 truncate" title="${m.label}">${m.label}</div>
                    <div class="text-base font-extrabold text-slate-900 font-mono flex items-center gap-1.5 mt-0.5">
                      <span class="text-emerald-600">${m.after}</span>
                      <span class="text-xs font-semibold text-emerald-700 bg-emerald-100/70 px-1.5 py-0.2 rounded">${m.change}</span>
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>

            <!-- 4. Services Scope Tags -->
            <div class="flex flex-wrap items-center gap-1.5 pt-1">
              ${(project.metaServices ? project.metaServices.slice(0, 4) : project.services.slice(0, 4)).map(s => `
                <span class="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 border border-slate-200/60">
                  ${s}
                </span>
              `).join("")}
            </div>

          </div>
        </div>

        <!-- Card Bottom Action Buttons -->
        <div class="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center gap-3">
          <a href="/case-studies/${project.id}.html" class="flex-1 inline-flex items-center justify-center gap-2 h-12 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm hover:shadow-md transition-all text-center">
            <span>Read Full Case Study</span>
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </a>
          <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-1.5 h-12 px-5 rounded-xl border border-slate-200 bg-white text-slate-800 font-bold text-sm hover:bg-slate-50 transition-colors text-center shadow-xs" title="Visit live client website">
            <span>Live Site</span>
            <i data-lucide="external-link" class="w-4 h-4 text-slate-400"></i>
          </a>
        </div>
      </article>
    `;
  }).join("\n");

  const bodyContent = `
    ${getHeaderHTML('case-studies')}

    <main class="relative pt-24 sm:pt-28 md:pt-36 pb-24 overflow-hidden font-sans">
      
      <!-- HERO SECTION -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-800 text-xs font-semibold shadow-xs">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Verified Commercial Case Studies</span>
        </div>

        <h1 class="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-slate-900 tracking-tight max-w-4xl mx-auto leading-[1.1]">
          Case Studies &amp; Client Growth
        </h1>

        <p class="text-lg sm:text-2xl font-bold text-emerald-700 max-w-3xl mx-auto leading-snug">
          Data-driven commercial outcomes, substantiated ROI, and measurable business growth.
        </p>

        <p class="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Deconstruct how Inrank Technologies engineers performance websites, organic search authority, and high-conversion funnels for B2B industrial leaders, healthcare practices, and high-growth brands.
        </p>

        <!-- AT-A-GLANCE EXECUTIVE OUTCOMES METRIC BAR -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-4 text-left">
          <div class="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs">
            <div class="text-xs font-bold uppercase tracking-wider text-emerald-600">Production Studies</div>
            <div class="text-2xl sm:text-3xl font-black text-slate-900 font-mono mt-1">10 Verified</div>
            <div class="text-xs text-slate-500 mt-0.5">Real client businesses</div>
          </div>
          <div class="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs">
            <div class="text-xs font-bold uppercase tracking-wider text-emerald-600">Average Growth</div>
            <div class="text-2xl sm:text-3xl font-black text-slate-900 font-mono mt-1">+340%</div>
            <div class="text-xs text-slate-500 mt-0.5">Inquiry &amp; lead volume</div>
          </div>
          <div class="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs">
            <div class="text-xs font-bold uppercase tracking-wider text-emerald-600">PageSpeed Standard</div>
            <div class="text-2xl sm:text-3xl font-black text-slate-900 font-mono mt-1">&lt;0.8s</div>
            <div class="text-xs text-slate-500 mt-0.5">Sub-second LCP benchmark</div>
          </div>
          <div class="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs">
            <div class="text-xs font-bold uppercase tracking-wider text-emerald-600">Google SEO Ranks</div>
            <div class="text-2xl sm:text-3xl font-black text-slate-900 font-mono mt-1">Top 3</div>
            <div class="text-xs text-slate-500 mt-0.5">Local 3-Pack authority</div>
          </div>
        </div>

        <!-- 2-COLUMN BALANCED CASE STUDIES GRID WITH SHORT DETAILS -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 text-left pt-12">
          ${caseCardsHTML}
        </div>

        <!-- BOTTOM CONVERSION CTA BANNER -->
        <div class="mt-16 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-white via-white to-emerald-50/30 p-8 sm:p-14 shadow-xl text-center space-y-6">
          <div class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-700 border border-emerald-500/20">
            <i data-lucide="zap" class="h-4 w-4 text-emerald-600"></i>
            <span>Ready For Measurable Growth?</span>
          </div>
          
          <h2 class="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl text-slate-900 max-w-2xl mx-auto leading-tight">
            Want Results Like These for Your Business?
          </h2>

          <p class="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Get a tailored technical, SEO, and conversion audit for your business. Sub-second speed and category dominance engineered from Day 1.
          </p>

          <div class="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a href="/contact.html" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-md hover:bg-emerald-700 transition-all">
              <span>Request Free Growth Audit</span>
              <i data-lucide="arrow-right" class="h-4 w-4"></i>
            </a>

            <a href="https://wa.me/918788823182?text=Hi%20Inrank%2C%20I%20reviewed%20your%20case%20studies%20and%20want%20to%20discuss%20a%20strategy%20audit." target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl border border-slate-200 bg-white hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300 text-slate-800 font-bold text-sm transition-all shadow-sm">
              <i data-lucide="message-circle" class="h-4 w-4 text-emerald-600"></i>
              <span>WhatsApp Strategy Desk (+91 87888 23182)</span>
            </a>
          </div>

          <div class="text-xs text-slate-500 flex flex-wrap items-center justify-center gap-4 pt-2">
            <span class="flex items-center gap-1.5"><i data-lucide="shield-check" class="h-4 w-4 text-emerald-600"></i> 100% Strict NDA</span>
            <span>&bull;</span>
            <span>48-Hour Turnaround</span>
            <span>&bull;</span>
            <span>Fixed-Price Roadmaps</span>
          </div>
        </div>
      </section>
    </main>

    ${getFooterHTML()}

    <script type="module" src="/src/main.ts"></script>
  </body>
</html>`;

  return head + bodyContent;
}

function buildAll() {
  const rootDir = process.cwd();
  const ourWorkDir = path.join(rootDir, "our-work");
  const caseStudiesDir = path.join(rootDir, "case-studies");

  if (!fs.existsSync(ourWorkDir)) {
    fs.mkdirSync(ourWorkDir, { recursive: true });
  }
  if (!fs.existsSync(caseStudiesDir)) {
    fs.mkdirSync(caseStudiesDir, { recursive: true });
  }

  // 1. Generate master our-work.html and portfolio.html
  console.log("Generating master our-work.html and portfolio.html...");
  const masterHTML = generateMasterWorkHTML();
  fs.writeFileSync(path.join(rootDir, "our-work.html"), masterHTML, "utf-8");
  const caseStudiesHTML = generateCaseStudiesHubHTML();
  fs.writeFileSync(path.join(rootDir, "case-studies.html"), caseStudiesHTML, "utf-8");
  console.log("✓ case-studies.html successfully created!");
  fs.writeFileSync(path.join(rootDir, "portfolio.html"), masterHTML, "utf-8");
  console.log("✓ our-work.html & portfolio.html successfully created!");

  // 2. Generate all 10 individual project pages in both /our-work/ and /case-studies/
  console.log("Generating 10 detailed project pages in /our-work/ and /case-studies/...");
  PORTFOLIO_PROJECTS.forEach((project, idx) => {
    const prevProject = PORTFOLIO_PROJECTS[(idx - 1 + PORTFOLIO_PROJECTS.length) % PORTFOLIO_PROJECTS.length];
    const nextProject = PORTFOLIO_PROJECTS[(idx + 1) % PORTFOLIO_PROJECTS.length];

    const workHTML = generateIndividualWorkHTML(project, prevProject, nextProject, 'our-work');
    fs.writeFileSync(path.join(ourWorkDir, `${project.id}.html`), workHTML, "utf-8");

    const caseStudyHTML = generateIndividualWorkHTML(project, prevProject, nextProject, 'case-studies');
    fs.writeFileSync(path.join(caseStudiesDir, `${project.id}.html`), caseStudyHTML, "utf-8");

    console.log(`✓ Created: our-work/${project.id}.html & case-studies/${project.id}.html (${project.domain})`);
  });

  console.log("All 'Our Work' pages and case study pages generated successfully with live screenshots!");
}

buildAll();
