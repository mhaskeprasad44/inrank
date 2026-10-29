import fs from 'fs';
import path from 'path';
import { SERVICES_DETAILS, ServiceDetail } from '../src/servicesData';
import { getServiceSidebarData } from '../src/sidebarConfig';

// Helper to convert Markdown to styled HTML
function renderMarkdownContent(content: string): string {
  if (!content) return '';
  const lines = content.split('\n');
  const htmlParts: string[] = [];
  let inList = false;

  const flushList = () => {
    if (inList) {
      htmlParts.push('</ul>');
      inList = false;
    }
  };

  const formatInline = (str: string): string => {
    // Bold
    let out = str.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>');
    // Markdown links
    out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, text, url) => {
      let cleanUrl = url;
      // Convert any legacy hash links to clean canonical URLs
      if (cleanUrl.startsWith('#/service/')) {
        cleanUrl = cleanUrl.replace('#/service/', '/services/') + '/';
      }
      return `<a href="${cleanUrl}" class="text-emerald-600 dark:text-emerald-400 underline font-semibold hover:text-emerald-700">${text}</a>`;
    });
    return out;
  };

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i].trim();
    if (!rawLine) {
      flushList();
      continue;
    }

    if (rawLine.startsWith('### ')) {
      flushList();
      const text = formatInline(rawLine.substring(4));
      htmlParts.push(`<h4 class="font-display text-lg sm:text-xl font-bold text-foreground mt-8 mb-3 tracking-tight border-b border-border/50 pb-2">${text}</h4>`);
    } else if (rawLine.startsWith('## ')) {
      flushList();
      const text = formatInline(rawLine.substring(3));
      htmlParts.push(`<h3 class="font-display text-xl sm:text-2xl font-bold text-foreground mt-10 mb-4 pt-6 border-t border-border tracking-tight">${text}</h3>`);
    } else if (rawLine.startsWith('> ')) {
      flushList();
      const text = formatInline(rawLine.substring(2));
      htmlParts.push(`<blockquote class="border-l-4 border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20 pl-4 pr-3 py-3 my-5 rounded-r-lg text-foreground italic text-sm sm:text-base leading-relaxed font-normal">${text}</blockquote>`);
    } else if (rawLine.startsWith('- ')) {
      if (!inList) {
        htmlParts.push('<ul class="space-y-2.5 my-4">');
        inList = true;
      }
      const text = formatInline(rawLine.substring(2));
      htmlParts.push(`<li class="flex items-start gap-2.5 text-sm sm:text-base text-muted-foreground font-normal"><span class="h-2 w-2 rounded-full bg-emerald-500 shrink-0 mt-2"></span><span>${text}</span></li>`);
    } else {
      flushList();
      const text = formatInline(rawLine);
      htmlParts.push(`<p class="text-muted-foreground text-sm sm:text-base leading-relaxed my-4 font-normal">${text}</p>`);
    }
  }
  flushList();
  return htmlParts.join('');
}

// Read case-studies.html for shared Header and Footer
const caseStudiesHtml = fs.readFileSync('case-studies.html', 'utf8');

const headerStart = caseStudiesHtml.indexOf('<!-- HEADER SECTION -->');
const headerEnd = caseStudiesHtml.indexOf('</header>') + '</header>'.length;
const headerHtml = caseStudiesHtml.substring(headerStart, headerEnd);

const footerStart = caseStudiesHtml.indexOf('<!-- FOOTER SECTION -->');
const footerEnd = caseStudiesHtml.indexOf('</footer>') + '</footer>'.length;
const footerHtml = caseStudiesHtml.substring(footerStart, footerEnd);

// Generate Page for each Service
SERVICES_DETAILS.forEach((service: ServiceDetail) => {
  const slug = service.slug || service.id;
  const canonicalUrl = `https://inranktech.com/services/${slug}/`;
  const sidebarData = getServiceSidebarData(service.id);

  // Sub-specialties chips
  const chipsHtml = service.serviceTypes.map(st => `
    <span class="inline-flex items-center gap-1.5 border border-border bg-card/60 hover:border-emerald-500/50 text-foreground text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors shadow-2xs">
      <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
      ${st}
    </span>
  `).join('');

  // Capabilities checkmarks list
  const capabilitiesHtml = service.detailedServices.map(serv => `
    <li class="flex items-start gap-3 p-3 rounded-xl border border-border bg-card/40">
      <div class="h-5 w-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
        <i data-lucide="check" class="h-3 w-3 text-emerald-600"></i>
      </div>
      <div>
        <h4 class="font-display font-semibold text-foreground text-sm leading-snug">${serv}</h4>
      </div>
    </li>
  `).join('');

  // Accordion FAQs
  const faqsHtml = service.faqs.map(faq => `
    <details class="group rounded-xl border border-border bg-card/40 p-4 transition-all open:bg-card open:shadow-xs">
      <summary class="flex items-center justify-between cursor-pointer list-none font-display text-base font-bold text-foreground hover:text-emerald-600 transition-colors">
        <span>${faq.q}</span>
        <i data-lucide="chevron-down" class="h-4 w-4 text-muted-foreground transition-transform duration-200 group-open:rotate-180 group-open:text-emerald-600"></i>
      </summary>
      <p class="mt-3 text-sm text-muted-foreground leading-relaxed font-normal pt-2 border-t border-border/40">
        ${faq.a}
      </p>
    </details>
  `).join('');

  // Benchmarks list in sidebar
  const benchmarksHtml = sidebarData.benchmarks.map(b => `
    <div class="p-3 rounded-xl bg-card border border-border/80">
      <div class="text-xl font-bold font-mono text-emerald-600">${b.value}</div>
      <div class="text-xs font-bold text-foreground mt-0.5">${b.label}</div>
      <div class="text-[10px] text-muted-foreground mt-0.5">${b.sub}</div>
    </div>
  `).join('');

  // Audit checklist in sidebar
  const checklistHtml = sidebarData.auditCta.checklist.map(item => `
    <div class="flex items-start gap-2 text-xs text-muted-foreground">
      <i data-lucide="check" class="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5"></i>
      <span>${item}</span>
    </div>
  `).join('');

  // JSON-LD Schema
  const schemaJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": service.metaTitle,
        "description": service.metaDesc,
        "breadcrumb": {
          "@id": `${canonicalUrl}#breadcrumb`
        }
      },
      {
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        "name": service.title,
        "serviceType": service.title,
        "description": service.shortDesc,
        "provider": {
          "@type": "Organization",
          "name": "Inrank Technologies",
          "url": "https://inranktech.com"
        },
        "areaServed": {
          "@type": "City",
          "name": "Pune"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        "mainEntity": service.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
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
            "name": "Services",
            "item": "https://inranktech.com/services.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": service.title,
            "item": canonicalUrl
          }
        ]
      }
    ]
  });

  const fullHtml = `<!doctype html>
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
    <title>${service.metaTitle}</title>
    <meta name="description" content="${service.metaDesc}" />
    <meta name="keywords" content="${service.keywords.map(k => k.phrase).join(', ')}" />
    <meta name="author" content="Inrank Technologies Pune" />
    <link rel="canonical" href="${canonicalUrl}" />
    <link rel="icon" type="image/png" href="/logo.png" />
    <link rel="shortcut icon" type="image/png" href="/logo.png" />
    <link rel="apple-touch-icon" href="/logo.png" />

    <!-- Open Graph / Social -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:title" content="${service.metaTitle}" />
    <meta property="og:description" content="${service.metaDesc}" />
    <meta property="og:image" content="https://inranktech.com${service.heroImage}" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="${canonicalUrl}" />
    <meta property="twitter:title" content="${service.metaTitle}" />
    <meta property="twitter:description" content="${service.metaDesc}" />
    <meta property="twitter:image" content="https://inranktech.com${service.heroImage}" />

    <!-- Schema.org Structured Data -->
    <script type="application/ld+json">
${schemaJsonLd}
    </script>

    <!-- Fonts & Icons -->
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

    <!-- GLOBAL AMBIENT BACKGROUND CANVAS -->
    <div id="site-ambient-canvas" class="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <div class="absolute -top-[10%] left-[5%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-br from-emerald-500/15 via-teal-400/10 to-transparent blur-[130px] animate-aurora-1"></div>
      <div class="absolute top-[25%] -right-[15%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-bl from-emerald-600/12 via-emerald-400/8 to-transparent blur-[140px] animate-aurora-2"></div>
      <div class="absolute inset-0 bg-site-pattern"></div>
      <div class="absolute inset-0 bg-noise-subtle opacity-40 mix-blend-multiply"></div>
    </div>

    ${headerHtml}

    <!-- MAIN SERVICE DETAIL VIEW -->
    <main class="relative pt-24 sm:pt-28 md:pt-36 pb-20 overflow-hidden font-sans">
      
      <!-- Breadcrumb Bar -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
        <nav class="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground" aria-label="Breadcrumb">
          <a href="/" class="hover:text-foreground transition-colors flex items-center gap-1">
            <i data-lucide="home" class="h-3.5 w-3.5"></i>
            <span>Home</span>
          </a>
          <span>/</span>
          <a href="/services.html" class="hover:text-foreground transition-colors">Services</a>
          <span>/</span>
          <span class="text-foreground font-semibold truncate max-w-[220px] sm:max-w-none">${service.title}</span>
        </nav>
      </div>

      <!-- Main Columns Grid Layout -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          <!-- Left Main Content Column (9 Cols) -->
          <article class="lg:col-span-8 space-y-8">
            
            <!-- Category Tag & Sub-Pillar -->
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>${service.category}</span>
            </div>

            <!-- Hero Headline & Subtitle -->
            <div class="space-y-3">
              <h1 class="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-foreground leading-[1.12] tracking-tight">
                ${service.heroHeadline}
              </h1>
              <p class="text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
                ${service.shortDesc}
              </p>
            </div>

            <!-- Hero Visual Media Banner -->
            <div class="relative aspect-[16/9] rounded-2xl overflow-hidden border border-border bg-card shadow-sm">
              <img
                src="${service.heroImage}"
                alt="${service.imageAlt}"
                class="w-full h-full object-cover"
                loading="eager"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
            </div>

            <!-- Scope & Technical Engineering Section -->
            <div class="pt-6 border-t border-border space-y-4">
              <h2 class="font-display text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                Engineering Blueprint &amp; Scope
              </h2>
              <div class="prose max-w-none text-muted-foreground">
                ${renderMarkdownContent(service.longDescMarkdown)}
              </div>
            </div>

            <!-- Sub-Specialties Chips -->
            <div class="pt-6 border-t border-border space-y-3">
              <h3 class="font-display text-lg sm:text-xl font-bold text-foreground">
                Specialized Service Focus Areas
              </h3>
              <div class="flex flex-wrap gap-2">
                ${chipsHtml}
              </div>
            </div>

            <!-- Detailed Capabilities 2-Column Grid -->
            <div class="pt-6 border-t border-border space-y-4">
              <h3 class="font-display text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                Detailed Functional Capabilities
              </h3>
              <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Comprehensive technical deliverables engineered for measurable commercial impact:
              </p>
              <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                ${capabilitiesHtml}
              </ul>
            </div>

            <!-- Frequently Asked Questions Accordion -->
            <div class="pt-6 border-t border-border space-y-4">
              <h3 class="font-display text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                Frequently Asked Questions
              </h3>
              <div class="space-y-3 pt-1">
                ${faqsHtml}
              </div>
            </div>

            <!-- In-Page Strategy Callout Banner -->
            <div class="rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/20 via-card to-slate-950/20 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-lg">
              <div class="space-y-1 max-w-md">
                <h4 class="font-display font-bold text-lg text-foreground">Ready to accelerate with this service?</h4>
                <p class="text-xs sm:text-sm text-muted-foreground">Get a free technical and competitor diagnostic audit for your Pune business.</p>
              </div>
              <a
                href="/contact.html"
                class="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/25 transition-all shrink-0"
              >
                <span>Request Free Audit</span>
                <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
              </a>
            </div>

          </article>

          <!-- Right Sidebar (4 Cols Sticky) -->
          <aside class="lg:col-span-4 space-y-6 sticky top-24">
            
            <!-- 1. Live Benchmarks & Performance SLA -->
            <div class="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm space-y-4">
              <div class="flex items-center justify-between border-b border-border pb-3">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span class="text-xs font-bold uppercase tracking-wider text-muted-foreground">Performance SLA</span>
                </div>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 font-bold border border-emerald-500/20">Verified</span>
              </div>
              <div class="space-y-2.5">
                ${benchmarksHtml}
              </div>
            </div>

            <!-- 2. Free Strategy Audit CTA Card -->
            <div class="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-card via-card to-emerald-500/5 p-5 sm:p-6 shadow-md space-y-4">
              <div class="flex items-center gap-2 border-b border-border pb-3">
                <i data-lucide="shield-check" class="w-4 h-4 text-emerald-600"></i>
                <h3 class="text-xs font-bold uppercase tracking-wider text-foreground">Inrank Strategy Audit</h3>
              </div>
              
              <div class="space-y-1.5">
                <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">${sidebarData.auditCta.tag}</span>
                <h4 class="text-sm font-bold text-foreground leading-snug">${sidebarData.auditCta.title}</h4>
                <p class="text-xs text-muted-foreground leading-relaxed">
                  ${sidebarData.auditCta.description}
                </p>
              </div>

              <div class="space-y-2 pt-1 border-t border-border/60">
                ${checklistHtml}
              </div>

              <div class="pt-2">
                <a 
                  href="/contact.html" 
                  class="flex w-full items-center justify-center gap-2 px-4 py-3 text-xs font-bold rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20 active:scale-[0.98] transition-all text-center"
                >
                  <span>${sidebarData.auditCta.buttonText}</span>
                  <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                </a>
              </div>
            </div>

            <!-- 3. Direct Contact Desk Card -->
            <div class="rounded-2xl border border-border bg-card p-5 space-y-3">
              <div class="text-xs font-bold uppercase tracking-wider text-muted-foreground">Direct Technical Desk</div>
              <div class="space-y-2 text-xs">
                <a href="tel:+918788823182" class="flex items-center gap-2 font-bold text-foreground hover:text-emerald-600 transition-colors">
                  <i data-lucide="phone" class="w-4 h-4 text-emerald-600 shrink-0"></i>
                  <span>+91 87888 23182</span>
                </a>
                <a href="https://wa.me/918788823182?text=Hi%20Inrank%2C%20I%20am%20inquiring%20about%20${encodeURIComponent(service.title)}." target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 font-semibold text-emerald-600 hover:underline">
                  <i data-lucide="message-circle" class="w-4 h-4 shrink-0"></i>
                  <span>WhatsApp Quick Consultation</span>
                </a>
              </div>
            </div>

          </aside>

        </div>
      </div>

    </main>

    ${footerHtml}

    <!-- STICKY MOBILE CONVERSION BAR -->
    <div class="block md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-border px-4 py-2.5 shadow-2xl">
      <div class="flex items-center gap-2.5">
        <a href="tel:+918788823182" class="flex-1 inline-flex items-center justify-center gap-2 h-11 rounded-lg bg-card border border-border text-foreground font-semibold text-xs shadow-sm hover:bg-secondary transition-colors">
          <i data-lucide="phone" class="h-4 w-4 text-emerald-600"></i>
          <span>Call Desk</span>
        </a>
        <a href="https://wa.me/918788823182?text=Hi%20Inrank%2C%20I%20am%20inquiring%20about%20${encodeURIComponent(service.title)}." target="_blank" rel="noopener noreferrer" class="flex-1 inline-flex items-center justify-center gap-2 h-11 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-md transition-colors">
          <i data-lucide="message-circle" class="h-4 w-4"></i>
          <span>WhatsApp</span>
        </a>
        <a href="/contact.html" class="inline-flex items-center justify-center h-11 px-3.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold shadow-sm">
          Free Audit
        </a>
      </div>
    </div>

    <!-- Lucide Icon Hydration -->
    <script>
      document.addEventListener('DOMContentLoaded', function() {
        if (typeof lucide !== 'undefined') {
          lucide.createIcons();
        }
      });
    </script>
  </body>
</html>`;

  // Write to public/services/<slug>/index.html
  const pubDir = path.join(process.cwd(), 'public', 'services', slug);
  fs.mkdirSync(pubDir, { recursive: true });
  fs.writeFileSync(path.join(pubDir, 'index.html'), fullHtml, 'utf8');

  // Write to public/services/<slug>.html
  fs.writeFileSync(path.join(process.cwd(), 'public', 'services', `${slug}.html`), fullHtml, 'utf8');

  // Write to inrank-27-service-pages/pages/<slug>.html
  const inrankPagesDir = path.join(process.cwd(), 'inrank-27-service-pages', 'pages');
  fs.mkdirSync(inrankPagesDir, { recursive: true });
  fs.writeFileSync(path.join(inrankPagesDir, `${slug}.html`), fullHtml, 'utf8');

  // Also write to dist/services/ if dist exists
  const distServicesDir = path.join(process.cwd(), 'dist', 'services', slug);
  fs.mkdirSync(distServicesDir, { recursive: true });
  fs.writeFileSync(path.join(distServicesDir, 'index.html'), fullHtml, 'utf8');
  fs.writeFileSync(path.join(process.cwd(), 'dist', 'services', `${slug}.html`), fullHtml, 'utf8');

  console.log(`Generated: /services/${slug}/ (${service.title})`);
});

console.log('Successfully generated all 27 individual service pages with complete Inrank styling!');
