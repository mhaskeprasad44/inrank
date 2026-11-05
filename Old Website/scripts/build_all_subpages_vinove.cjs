/**
 * Build all Inrank 2.0 Subpages adhering 100% to Vinove UI Architecture.
 * Inter font, Emerald Green branding, Slate Navy neutrals, and full Inrank content.
 */
const fs = require('fs');
const path = require('path');

const targetDir = 'c:/Users/PrasadMhaske/Downloads/Anti Websites/Web/Inrank/inrank2.0';

// Read common components from index.html
const homeHtml = fs.readFileSync(path.join(targetDir, 'index.html'), 'utf8');

const navHtml = homeHtml.match(/<!-- ══════════════════════════════════════════\s+VINOVE FLOATING DOCK NAVIGATION[\s\S]*?<\/div>\s*<\/div>/i)[0];
const footerHtml = homeHtml.match(/<!-- ══════════════════════════════════════════\s+VINOVE CORPORATE FOOTER[\s\S]*?<\/footer>/i)[0];
const closingHtml = homeHtml.match(/<!-- 13\. VINOVE CLOSING DUAL ACTION CARDS -->[\s\S]*?<\/section>/i)[0];

function pageShell(title, description, canonical, activeNav, bodyContent) {
  // Mark active nav
  let pageNav = navHtml;
  if (activeNav) {
    pageNav = pageNav.replace(`data-nav="${activeNav}"`, `data-nav="${activeNav}" class="is-current"`);
  }

  return `<!doctype html>
<html lang="en">
<head>
  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-WLZ75BS8');</script>
  <!-- End Google Tag Manager -->

  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <link rel="canonical" href="${canonical}" />
  <link rel="icon" type="image/png" href="/img/logo.png" />
  <link rel="shortcut icon" type="image/png" href="/img/logo.png" />
  <link rel="apple-touch-icon" href="/img/logo.png" />

  <!-- Google Fonts: Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700;14..32,800&display=swap" rel="stylesheet">

  <!-- Vinove-Engineered Master CSS -->
  <link rel="stylesheet" href="/css/corporate.css" />
  <link rel="stylesheet" href="/css/nav.css" />
  <link rel="stylesheet" href="/css/footer-social.css" />
</head>
<body>
  <!-- Top Scroll Progress Bar -->
  <div id="scroll-bar" role="progressbar" aria-label="Page reading progress" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>

  <!-- Skip Link -->
  <a class="skip-link" href="#main">Skip to main content</a>

  <!-- Header / Navigation -->
  ${pageNav}

  <!-- Main Content -->
  <main id="main">
    ${bodyContent}
  </main>

  <!-- Footer -->
  ${footerHtml}

  <!-- Vinove Core Scripts -->
  <script src="/js/core.js"></script>
</body>
</html>
`;
}

// ─────────────────────────────────────────────────────────────
// 1. PRICING.HTML
// ─────────────────────────────────────────────────────────────
const pricingBody = `
    <!-- Subpage Hero -->
    <section class="hero image-hero" style="min-height:55vh;padding-top:calc(var(--nav-h) + 4rem);padding-bottom:4rem;background: radial-gradient(circle at 75% 30%, rgba(0, 157, 73, 0.35) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(16, 33, 56, 0.8) 0%, transparent 60%), #081424;">
      <div class="hero-shade" aria-hidden="true"></div>
      <div class="shell hero-content">
        <div class="hero-copy">
          <p class="eyebrow" data-reveal>Transparent Fixed-Price Architecture</p>
          <h1 class="display" data-reveal>Website &amp; SEO Packages in <em>Pune.</em></h1>
          <p class="lede" data-reveal>Fixed-price agile sprints starting from ₹11,999. High-performance engineering, guaranteed sub-second speed, 100% code ownership, and zero recurring lock-in retainers.</p>
        </div>
      </div>
    </section>

    <!-- Pricing Grid Section -->
    <section class="pricing-section" aria-labelledby="pricing-title">
      <div class="shell">
        <div style="text-align:center;max-width:760px;margin:0 auto;">
          <p class="section-kicker">Transparent Pricing Architecture</p>
          <h2 class="section-title" id="pricing-title">Fixed-price sprints. Zero lock-in retainers.</h2>
          <p class="section-copy" style="margin:0 auto;">Every package includes 100% source code ownership, mobile-first design, speed optimization, technical SEO tags, and direct senior engineering support in Baner, Pune.</p>
        </div>

        <div class="pricing-grid">
          <!-- Tier 1 -->
          <article class="pricing-card" data-reveal>
            <span class="pricing-tag">Speed Sprint</span>
            <h3>Starter Sprint</h3>
            <p class="pricing-sub">For local businesses, clinics &amp; consultancies needing an immediate, high-ranking professional digital footprint.</p>
            <div class="pricing-price-wrap">
              <span class="pricing-price">₹11,999</span>
              <span class="pricing-period">/ fixed one-time</span>
            </div>
            <ul class="pricing-features">
              <li class="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>5-7 Day Guaranteed Turnaround</span>
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Up to 5 Custom Engineered Pages</span>
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Google Lighthouse 90+ Score</span>
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Full Technical SEO &amp; Schema Meta</span>
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>WhatsApp Instant Inquiry Routing</span>
              </li>
            </ul>
            <a class="button secondary" href="/contact.html?plan=starter">Select Starter Sprint</a>
          </article>

          <!-- Tier 2 (Featured) -->
          <article class="pricing-card featured" data-reveal>
            <span class="pricing-tag">Most Popular in Pune</span>
            <h3>Growth Scale</h3>
            <p class="pricing-sub">Our flagship deployment for ambitious SMEs and service companies ready to outrank direct competitors.</p>
            <div class="pricing-price-wrap">
              <span class="pricing-price">₹18,999</span>
              <span class="pricing-period">/ fixed one-time</span>
            </div>
            <ul class="pricing-features">
              <li class="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Up to 10 Custom Speed-Engineered Pages</span>
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Full Local SEO &amp; Google 3-Pack Audit</span>
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Dynamic Blog / CMS Publishing System</span>
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Google Analytics 4 &amp; Heatmap Telemetry</span>
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Sub-Second Google Core Web Vitals Guarantee</span>
              </li>
            </ul>
            <a class="button primary" href="/contact.html?plan=growth">Deploy Growth Scale</a>
          </article>

          <!-- Tier 3 -->
          <article class="pricing-card" data-reveal>
            <span class="pricing-tag">Complete Domination</span>
            <h3>Market Domination</h3>
            <p class="pricing-sub">Full-stack web platform engineering + comprehensive 90-day search ranking &amp; advertising acceleration sprint.</p>
            <div class="pricing-price-wrap">
              <span class="pricing-price">₹34,999</span>
              <span class="pricing-period">/ fixed one-time</span>
            </div>
            <ul class="pricing-features">
              <li class="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Unlimited Pages &amp; Full E-Commerce Stack</span>
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>GEO, AI Citations &amp; Knowledge Graph Setup</span>
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Complete Google Ads &amp; Meta Funnel Architecture</span>
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Bi-Weekly Direct Strategy Sessions with Prasad</span>
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>1 Year VIP Infrastructure &amp; Security Support</span>
              </li>
            </ul>
            <a class="button secondary" href="/contact.html?plan=domination">Scale Market Domination</a>
          </article>
        </div>

        <!-- Add-ons Matrix -->
        <div class="addons-wrap" id="addons" data-reveal>
          <h4>Modular Capabilities &amp; Specialized Add-ons</h4>
          <div class="addons-grid">
            <div class="addon-card">
              <div><strong>Google 3-Pack Map Domination</strong><span>Complete GBP verification, citation sync &amp; local ranking</span></div>
              <span class="addon-price">₹4,999</span>
            </div>
            <div class="addon-card">
              <div><strong>Generative Engine Optimization (GEO)</strong><span>AI search citations in ChatGPT, Perplexity &amp; Google AI Overviews</span></div>
              <span class="addon-price">₹6,999</span>
            </div>
            <div class="addon-card">
              <div><strong>High-Authority Backlink Sprint</strong><span>15 contextual PR &amp; industry editorial mentions</span></div>
              <span class="addon-price">₹8,999</span>
            </div>
            <div class="addon-card">
              <div><strong>Speed Optimization &amp; LCP Fix</strong><span>Sub-second Core Web Vitals remediation for existing sites</span></div>
              <span class="addon-price">₹3,999</span>
            </div>
            <div class="addon-card">
              <div><strong>Google &amp; Meta Ads Funnel Setup</strong><span>Pixel tracking, conversion events &amp; high-intent ad creative</span></div>
              <span class="addon-price">₹5,999</span>
            </div>
            <div class="addon-card">
              <div><strong>Executive Brand Identity Kit</strong><span>Vector logo, typography rules, letterhead &amp; social assets</span></div>
              <span class="addon-price">₹4,499</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison Matrix -->
    <section class="comparison-section" aria-labelledby="comp-title">
      <div class="shell">
        <div style="max-width:760px;">
          <p class="section-kicker">Comparative Analysis</p>
          <h2 class="section-title" id="comp-title">How Inrank outperforms legacy Pune agencies.</h2>
          <p class="section-copy">Most agencies sell vague hours and retainers. We deliver fixed outcomes, clean code ownership, and measurable ranking accountability.</p>
        </div>

        <div class="comp-table-box" data-reveal>
          <table class="inrank-compare-table">
            <thead>
              <tr>
                <th>Engineering Standard</th>
                <th class="highlight-col">Inrank Technologies</th>
                <th>Traditional Pune Agencies</th>
                <th>Freelance Web Designers</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Delivery Timeline</strong></td>
                <td class="highlight-col"><span class="comp-badge-good">✓ 5-7 Days Guaranteed</span></td>
                <td><span class="comp-badge-bad">✕ 6 to 12 Weeks</span></td>
                <td><span class="comp-badge-bad">✕ Unpredictable (Ghosting)</span></td>
              </tr>
              <tr>
                <td><strong>Pricing Transparency</strong></td>
                <td class="highlight-col"><span class="comp-badge-good">✓ Fixed From ₹11,999 (No Hidden Fees)</span></td>
                <td><span class="comp-badge-bad">✕ Opaque Quotes &amp; Monthly Lock-ins</span></td>
                <td><span class="comp-badge-bad">✕ Scope Creep Upcharges</span></td>
              </tr>
              <tr>
                <td><strong>Core Web Vitals Speed</strong></td>
                <td class="highlight-col"><span class="comp-badge-good">✓ Sub-Second (&lt; 0.8s LCP, 95+ Score)</span></td>
                <td><span class="comp-badge-bad">✕ 3.5s+ (Bloated Themes)</span></td>
                <td><span class="comp-badge-bad">✕ Not measured or understood</span></td>
              </tr>
              <tr>
                <td><strong>Code &amp; Asset Ownership</strong></td>
                <td class="highlight-col"><span class="comp-badge-good">✓ 100% Client Ownership (No Lock-in)</span></td>
                <td><span class="comp-badge-bad">✕ Proprietary Host Lock-in</span></td>
                <td><span class="comp-badge-bad">✕ Scattered / Lost Passwords</span></td>
              </tr>
              <tr>
                <td><strong>SEO &amp; GEO Architecture</strong></td>
                <td class="highlight-col"><span class="comp-badge-good">✓ Built-in Schema, Local 3-Pack &amp; AI Meta</span></td>
                <td><span class="comp-badge-bad">✕ Paid Extra as Separate Retainer</span></td>
                <td><span class="comp-badge-bad">✕ Basic Yoast Defaults Only</span></td>
              </tr>
              <tr>
                <td><strong>Direct Senior Access</strong></td>
                <td class="highlight-col"><span class="comp-badge-good">✓ Direct Contact with Lead Engineer</span></td>
                <td><span class="comp-badge-bad">✕ Account Manager Telephone Game</span></td>
                <td><span class="comp-badge-bad">✕ Inconsistent Single Person</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Pricing FAQs -->
    <section class="faq-section" id="faq" aria-labelledby="faq-title">
      <div class="shell">
        <div style="text-align:center;max-width:760px;margin:0 auto;">
          <p class="section-kicker">Transparent Standards</p>
          <h2 class="section-title" id="faq-title">Pricing &amp; Contract FAQs</h2>
          <p class="section-copy" style="margin:0 auto;">Direct answers on payment terms, domain &amp; hosting inclusion, and project milestones.</p>
        </div>

        <div class="faq-accordion" data-reveal>
          <div class="faq-item">
            <button class="faq-question">
              <span>What are the payment terms and milestones?</span>
              <svg class="faq-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="faq-answer">
              <p>We work on a transparent 50/50 model: 50% initial advance to start sprint architecture and reserve engineering slots, and 50% only after full client sign-off, live deployment, and Lighthouse performance verification.</p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question">
              <span>Are hosting and custom domain included in the packages?</span>
              <svg class="faq-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="faq-answer">
              <p>Yes. Every package includes 1 year of ultra-fast Cloudflare-accelerated hosting, free SSL certificate setup, and configuration of your custom domain with business email addresses at no additional charge.</p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question">
              <span>Can we upgrade our plan later as our business expands?</span>
              <svg class="faq-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="faq-answer">
              <p>Absolutely. You can start with the ₹11,999 Starter Sprint and later upgrade to Growth Scale or add individual modular add-ons as your marketing requirements expand. You only pay the difference.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Closing -->
    ${closingHtml}
`;

fs.writeFileSync(path.join(targetDir, 'pricing.html'), pageShell(
  'Website & SEO Packages in Pune | Transparent Fixed Pricing - Inrank',
  'Transparent, fixed-price website development and SEO packages in Pune starting from ₹11,999. Free hosting, SSL, domain, business emails, and 365 days support included. Zero lock-in contracts.',
  'https://www.inranktech.com/pricing.html',
  'pricing',
  pricingBody
));
console.log('[OK] pricing.html built with Vinove architecture');

// ─────────────────────────────────────────────────────────────
// 2. SERVICES.HTML
// ─────────────────────────────────────────────────────────────
const servicesBody = `
    <!-- Subpage Hero -->
    <section class="hero image-hero" style="min-height:55vh;padding-top:calc(var(--nav-h) + 4rem);padding-bottom:4rem;background: radial-gradient(circle at 75% 30%, rgba(0, 157, 73, 0.35) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(16, 33, 56, 0.8) 0%, transparent 60%), #081424;">
      <div class="hero-shade" aria-hidden="true"></div>
      <div class="shell hero-content">
        <div class="hero-copy">
          <p class="eyebrow" data-reveal>Four Core Pillars · 27 Specialized Capabilities</p>
          <h1 class="display" data-reveal>Digital Marketing &amp; Web <em>Engineering</em> Services.</h1>
          <p class="lede" data-reveal>Engineered to outrank local competition, acquire commercial high-intent leads, and turn web visitors into predictable revenue across Pune and national markets.</p>
        </div>
      </div>
    </section>

    <!-- Services Directory (Vinove Company Rows) -->
    <section class="capabilities-section" aria-labelledby="services-title">
      <div class="shell">
        <div style="max-width:760px;">
          <p class="section-kicker">Capabilities Directory</p>
          <h2 class="section-title" id="services-title">Start with the business outcome.</h2>
          <p class="section-copy">Each pillar is operated by senior technical specialists with direct accountability for timelines, rankings and commercial outcomes.</p>
        </div>

        <div class="cap-rows">
          <!-- Pillar 1 -->
          <article class="cap-row" id="pillar-1" data-reveal>
            <div class="cap-outcome">
              <span>Outcome</span>
              <strong>+318%</strong>
            </div>
            <div class="cap-badge">
              <div class="cap-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </div>
              <div>
                <strong style="font-size:0.875rem;color:var(--text-strong);">Pillar 01</strong>
                <span style="font-size:0.75rem;color:var(--muted);display:block;">Search Dominance</span>
              </div>
            </div>
            <div class="cap-body">
              <h3>Search Engine &amp; AI Discovery Engineering</h3>
              <p>Rank #1 on Google for high-intent commercial keywords. Full-stack execution covering Pune SEO, Generative Engine Optimization (GEO), Google Business Profile 3-Pack, technical audits, and link building.</p>
              <div class="cap-chips">
                <a href="/services/seo-company-pune.html" class="cap-chip">SEO Company in Pune</a>
                <a href="/services/ai-seo-services.html" class="cap-chip">AI SEO &amp; Generative Optimization</a>
                <a href="/services/google-my-business-services.html" class="cap-chip">Google Business Profile (GMB 3-Pack)</a>
                <a href="/services/link-building-services.html" class="cap-chip">High-Authority Link Building</a>
                <a href="/services/ai-ranking-citations.html" class="cap-chip">AI Ranking Citations</a>
                <a href="/services/geo-seo-agency.html" class="cap-chip">GEO SEO Agency</a>
              </div>
            </div>
            <a href="/contact.html?service=seo" class="cap-action" aria-label="Inquire about Search & AI Discovery">→</a>
          </article>

          <!-- Pillar 2 -->
          <article class="cap-row" id="pillar-2" data-reveal>
            <div class="cap-outcome">
              <span>Speed SLA</span>
              <strong>&lt; 0.8s</strong>
            </div>
            <div class="cap-badge">
              <div class="cap-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <div>
                <strong style="font-size:0.875rem;color:var(--text-strong);">Pillar 02</strong>
                <span style="font-size:0.75rem;color:var(--muted);display:block;">Web Engineering</span>
              </div>
            </div>
            <div class="cap-body">
              <h3>High-Performance Web &amp; E-Commerce Engineering</h3>
              <p>Hand-crafted web applications, custom business portals, and digital storefronts engineered for raw speed, security, and sub-second Core Web Vitals compliance.</p>
              <div class="cap-chips">
                <a href="/services/custom-website-development.html" class="cap-chip">Custom Website Development</a>
                <a href="/services/ecommerce-website-development-company.html" class="cap-chip">E-Commerce Development</a>
                <a href="/services/wordpress-development-services.html" class="cap-chip">WordPress Development</a>
                <a href="/services/shopify-store-development.html" class="cap-chip">Shopify Store Development</a>
                <a href="/services/landing-page-design-services.html" class="cap-chip">High-Converting Landing Pages</a>
                <a href="/services/website-maintenance-services.html" class="cap-chip">Website Maintenance</a>
                <a href="/services/mobile-app-development.html" class="cap-chip">Mobile App Development</a>
              </div>
            </div>
            <a href="/contact.html?service=web" class="cap-action" aria-label="Inquire about Web Engineering">→</a>
          </article>

          <!-- Pillar 3 -->
          <article class="cap-row" id="pillar-3" data-reveal>
            <div class="cap-outcome">
              <span>Return</span>
              <strong>4.8x ROAS</strong>
            </div>
            <div class="cap-badge">
              <div class="cap-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <div>
                <strong style="font-size:0.875rem;color:var(--text-strong);">Pillar 03</strong>
                <span style="font-size:0.75rem;color:var(--muted);display:block;">Paid Acquisition</span>
              </div>
            </div>
            <div class="cap-body">
              <h3>Performance Marketing &amp; Paid Acquisition</h3>
              <p>Precision-targeted paid advertising campaigns engineered to acquire commercial B2B and consumer inquiries at the lowest customer acquisition cost (CAC).</p>
              <div class="cap-chips">
                <a href="/services/google-ads-agency.html" class="cap-chip">Google Ads (Search &amp; Display)</a>
                <a href="/services/meta-ads-agency.html" class="cap-chip">Meta Ads (Facebook &amp; Instagram)</a>
                <a href="/services/linkedin-marketing-agency.html" class="cap-chip">LinkedIn B2B Advertising</a>
                <a href="/services/ppc-services.html" class="cap-chip">PPC Services in Pune</a>
                <a href="/services/social-media-marketing-services.html" class="cap-chip">Social Media Marketing</a>
                <a href="/services/influencer-marketing-agency.html" class="cap-chip">Influencer Marketing</a>
              </div>
            </div>
            <a href="/contact.html?service=ads" class="cap-action" aria-label="Inquire about Performance Marketing">→</a>
          </article>

          <!-- Pillar 4 -->
          <article class="cap-row" id="pillar-4" data-reveal>
            <div class="cap-outcome">
              <span>Conversion</span>
              <strong>+142%</strong>
            </div>
            <div class="cap-badge">
              <div class="cap-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg>
              </div>
              <div>
                <strong style="font-size:0.875rem;color:var(--text-strong);">Pillar 04</strong>
                <span style="font-size:0.75rem;color:var(--muted);display:block;">Brand &amp; CRO</span>
              </div>
            </div>
            <div class="cap-body">
              <h3>Brand Architecture &amp; Conversion Rate Optimization</h3>
              <p>Executive UI/UX design, visual identities, corporate logos, and high-converting landing pages that transform traffic into revenue.</p>
              <div class="cap-chips">
                <a href="/services/ui-ux-design-services.html" class="cap-chip">UI/UX Design Services</a>
                <a href="/services/corporate-logo-design.html" class="cap-chip">Corporate Logo Design</a>
                <a href="/services/brand-naming-agency.html" class="cap-chip">Brand Naming Agency</a>
                <a href="/services/brochure-design-services.html" class="cap-chip">Brochure Design</a>
                <a href="/services/letterhead-stationery-design.html" class="cap-chip">Corporate Stationery Design</a>
                <a href="/services/luxury-business-card-design.html" class="cap-chip">Luxury Business Card Design</a>
                <a href="/services/content-marketing-services.html" class="cap-chip">Content Marketing</a>
                <a href="/services/conversion-rate-optimization-services.html" class="cap-chip">Conversion Rate Optimization (CRO)</a>
              </div>
            </div>
            <a href="/contact.html?service=brand" class="cap-action" aria-label="Inquire about Brand & CRO">→</a>
          </article>
        </div>
      </div>
    </section>

    <!-- Closing -->
    ${closingHtml}
`;

fs.writeFileSync(path.join(targetDir, 'services.html'), pageShell(
  'Digital Marketing & Web Development Services in Pune | Inrank',
  'Explore all 27 specialized digital marketing, SEO, custom web engineering, PPC advertising, and brand design capabilities delivered by Inrank Technologies in Baner, Pune.',
  'https://www.inranktech.com/services.html',
  'services',
  servicesBody
));
console.log('[OK] services.html built with Vinove architecture');

// ─────────────────────────────────────────────────────────────
// 3. ABOUT.HTML
// ─────────────────────────────────────────────────────────────
const aboutBody = `
    <!-- Subpage Hero -->
    <section class="hero image-hero" style="min-height:55vh;padding-top:calc(var(--nav-h) + 4rem);padding-bottom:4rem;background: radial-gradient(circle at 75% 30%, rgba(0, 157, 73, 0.35) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(16, 33, 56, 0.8) 0%, transparent 60%), #081424;">
      <div class="hero-shade" aria-hidden="true"></div>
      <div class="shell hero-content">
        <div class="hero-copy">
          <p class="eyebrow" data-reveal>Engineering Growth Through Technical Precision</p>
          <h1 class="display" data-reveal>One team. Senior engineers. <em>Shared ambition.</em></h1>
          <p class="lede" data-reveal>Inrank is a digital growth engineering firm in Baner, Pune. We bridge the gap between creative design and technical search dominance for ambitious Indian and global brands.</p>
        </div>
      </div>
    </section>

    <!-- Manifesto / Purpose -->
    <section class="manifesto" aria-labelledby="about-purpose">
      <div class="shell manifesto-grid">
        <div>
          <p class="section-kicker">Our Founding Conviction</p>
          <h2 class="section-title" id="about-purpose">Ambition moves faster than capability.</h2>
        </div>
        <div>
          <p class="statement" data-reveal>Growth creates a gap between what organisations want to achieve and what traditional agencies can reliably build, rank and convert. <span>Inrank closes that gap with senior engineering.</span></p>
          <div class="manifesto-copy" data-reveal>
            <p>We started Inrank because we saw business owners across Pune paying exorbitant monthly retainers to agencies that subcontracted work to inexperienced juniors. Websites loaded in 4 seconds. Rankings dropped after core updates. Nobody answered for ROI.</p>
            <p>We built our laboratory in Baner to operate with engineering discipline: clean modular code, sub-second Google Core Web Vitals, transparent fixed prices, and direct consultation with senior practitioners.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Operating Model -->
    <section class="operating" id="operating-model" aria-labelledby="about-model">
      <div class="shell">
        <div class="operating-head">
          <div>
            <p class="section-kicker">The Value-Creation Model</p>
            <h2 class="section-title" id="about-model">The Inrank Operating Standard.</h2>
          </div>
          <p class="section-copy">Four non-negotiable principles that govern every web platform and search campaign we engineer.</p>
        </div>
        <div class="operating-model">
          <article class="model-step" data-reveal><span class="num">01</span><h3>Zero Bloat</h3><p>No multi-megabyte visual page builders. We write semantic HTML and modern CSS that scores 90+ on Google PageSpeed.</p></article>
          <article class="model-step" data-reveal><span class="num">02</span><h3>100% Ownership</h3><p>You own all code, repositories, domains, and assets from day one. Zero lock-in contracts or hostage hosting.</p></article>
          <article class="model-step" data-reveal><span class="num">03</span><h3>5-7 Day Sprints</h3><p>We work in rapid dedicated engineering blocks rather than dragging simple websites across months.</p></article>
          <article class="model-step" data-reveal><span class="num">04</span><h3>Direct Senior Access</h3><p>Direct communication with lead engineers and search architects. No account executive telephone games.</p></article>
        </div>
      </div>
    </section>

    <!-- People & Baner Lab -->
    <section class="people-section" id="baner-lab" aria-labelledby="about-people">
      <div class="shell people-grid">
        <div class="people-portraits" aria-label="Inrank Baner Lab">
          <div style="background:var(--navy);border-radius:20px;padding:2.5rem;color:#fff;display:flex;flex-direction:column;gap:1.5rem;border:1px solid rgba(255,255,255,0.1);">
            <div style="display:flex;align-items:center;gap:16px;">
              <div style="width:64px;height:64px;border-radius:50%;background:var(--terra);display:flex;align-items:center;justify-content:center;font-size:1.5rem;font-weight:800;color:#fff;">PM</div>
              <div>
                <strong style="font-size:1.25rem;color:#fff;display:block;">Prasad Mhaske</strong>
                <span style="font-size:0.8125rem;color:rgba(255,255,255,0.7);">Founder &amp; Principal Search Architect</span>
              </div>
            </div>
            <p style="font-size:0.9375rem;line-height:1.65;color:rgba(255,255,255,0.85);font-style:italic;">
              "Our mission is simple: provide Pune founders with world-class engineering quality and first-page Google domination without the enterprise price tag."
            </p>
            <div style="padding-top:1rem;border-top:1px solid rgba(255,255,255,0.1);font-size:0.8125rem;color:rgba(255,255,255,0.6);">
              📍 Baner Engineering Lab · Shivaji Nagar / FC Road · Pune, Maharashtra
            </div>
          </div>
        </div>

        <div>
          <p class="section-kicker">Local Leadership &amp; Presence</p>
          <h2 class="section-title" id="about-people">Built in Baner. Trusted across Pune &amp; India.</h2>
          <p class="section-copy">Whether you run a manufacturing firm in Bhosari, a real estate firm in Baner, or a healthcare clinic in Shivaji Nagar, you can meet directly with our engineering team.</p>
          <div class="pathways">
            <a class="pathway" href="/contact.html">
              <small>Partner</small>
              <span>Bring a web engineering, search ranking or paid customer acquisition challenge.</span>
              <b>↗</b>
            </a>
            <a class="pathway" href="https://wa.me/918788823182" target="_blank" rel="noopener noreferrer">
              <small>Direct WhatsApp Consultation</small>
              <span>Message Prasad directly at +91 87888 23182 for an immediate assessment.</span>
              <b>↗</b>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Closing -->
    ${closingHtml}
`;

fs.writeFileSync(path.join(targetDir, 'about.html'), pageShell(
  'About Inrank Technologies | Leadership, Baner Lab & Engineering Culture',
  'Learn about Inrank Technologies, our founder Prasad Mhaske, our Baner engineering lab, and how we deliver transparent, performance-driven digital marketing in Pune.',
  'https://www.inranktech.com/about.html',
  'about',
  aboutBody
));
console.log('[OK] about.html built with Vinove architecture');

// ─────────────────────────────────────────────────────────────
// 4. CONTACT.HTML
// ─────────────────────────────────────────────────────────────
const contactBody = `
    <!-- Subpage Hero -->
    <section class="hero image-hero" style="min-height:55vh;padding-top:calc(var(--nav-h) + 4rem);padding-bottom:4rem;background: radial-gradient(circle at 75% 30%, rgba(0, 157, 73, 0.35) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(16, 33, 56, 0.8) 0%, transparent 60%), #081424;">
      <div class="hero-shade" aria-hidden="true"></div>
      <div class="shell hero-content">
        <div class="hero-copy">
          <p class="eyebrow" data-reveal>Direct Senior Engineering &amp; Search Consultation</p>
          <h1 class="display" data-reveal>Let's talk <em>growth.</em></h1>
          <p class="lede" data-reveal>Connect directly with our lead architect in Baner, Pune. Receive an objective technical audit of your existing site and an actionable 90-day search ranking roadmap.</p>
        </div>
      </div>
    </section>

    <!-- Contact Grid Section -->
    <section class="contact-section" aria-labelledby="contact-heading">
      <div class="shell contact-grid">
        <!-- Direct Channels -->
        <div>
          <p class="section-kicker">Direct Senior Channels</p>
          <h2 class="section-title" id="contact-heading">Speak directly with an engineer, not a salesperson.</h2>
          <p class="section-copy">We respond to inquiries within 2 hours during business hours. For urgent deployment needs, WhatsApp is our fastest channel.</p>

          <div style="display:flex;flex-direction:column;gap:1.5rem;margin-top:2.5rem;">
            <div style="background:var(--white);border:1px solid var(--line);border-radius:16px;padding:1.5rem;display:flex;align-items:center;gap:16px;">
              <div style="width:48px;height:48px;border-radius:12px;background:rgba(0,157,73,0.12);color:var(--terra);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <small style="font-size:0.6875rem;font-weight:700;letter-spacing:0.08em;color:var(--muted);text-transform:uppercase;">Phone &amp; WhatsApp</small>
                <a href="https://wa.me/918788823182" style="font-size:1.1rem;font-weight:800;color:var(--text-strong);display:block;">+91 87888 23182</a>
              </div>
            </div>

            <div style="background:var(--white);border:1px solid var(--line);border-radius:16px;padding:1.5rem;display:flex;align-items:center;gap:16px;">
              <div style="width:48px;height:48px;border-radius:12px;background:rgba(0,157,73,0.12);color:var(--terra);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div>
                <small style="font-size:0.6875rem;font-weight:700;letter-spacing:0.08em;color:var(--muted);text-transform:uppercase;">Direct Inquiries Email</small>
                <a href="mailto:contact@inranktech.com" style="font-size:1.1rem;font-weight:800;color:var(--text-strong);display:block;">contact@inranktech.com</a>
              </div>
            </div>

            <div style="background:var(--white);border:1px solid var(--line);border-radius:16px;padding:1.5rem;display:flex;align-items:center;gap:16px;">
              <div style="width:48px;height:48px;border-radius:12px;background:rgba(0,157,73,0.12);color:var(--terra);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <small style="font-size:0.6875rem;font-weight:700;letter-spacing:0.08em;color:var(--muted);text-transform:uppercase;">Engineering Laboratory</small>
                <span style="font-size:1rem;font-weight:700;color:var(--text-strong);display:block;">Baner · Shivaji Nagar / FC Road, Pune</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form Card -->
        <div>
          <form class="contact-form-card" id="contact-form" action="/contact.php" method="POST" data-reveal>
            <h3 style="font-size:1.5rem;font-weight:800;color:var(--text-strong);margin-bottom:0.5rem;">Request Consultation</h3>
            <p style="font-size:0.875rem;color:var(--muted);margin-bottom:2rem;">Fill in your details for an immediate quote and free technical audit.</p>

            <div class="form-group">
              <label class="form-label" for="form-name">Your Full Name</label>
              <input class="form-input" id="form-name" name="name" type="text" placeholder="e.g. Vikram Shinde" required />
            </div>

            <div class="form-group">
              <label class="form-label" for="form-phone">Phone / WhatsApp Number</label>
              <input class="form-input" id="form-phone" name="phone" type="tel" placeholder="+91 98765 43210" required />
            </div>

            <div class="form-group">
              <label class="form-label" for="form-email">Work Email</label>
              <input class="form-input" id="form-email" name="email" type="email" placeholder="name@company.com" required />
            </div>

            <div class="form-group">
              <label class="form-label" for="form-service">Required Capability</label>
              <select class="form-select" id="form-service" name="service" required>
                <option value="Custom Website Development">Custom Website Development</option>
                <option value="Local SEO & Google 3-Pack">Local SEO &amp; Google 3-Pack</option>
                <option value="Google Ads & Meta Advertising">Google Ads &amp; Meta Advertising</option>
                <option value="AI SEO & Generative Optimization (GEO)">AI SEO &amp; GEO Optimization</option>
                <option value="E-Commerce Store Engineering">E-Commerce Store Engineering</option>
                <option value="Full Market Domination Package">Full Market Domination Package</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label" for="form-package">Package of Interest</label>
              <select class="form-select" id="form-package" name="package">
                <option value="Starter Sprint (₹11,999)">Starter Sprint (₹11,999)</option>
                <option value="Growth Scale (₹18,999)" selected>Growth Scale (₹18,999) — Featured</option>
                <option value="Market Domination (₹34,999)">Market Domination (₹34,999)</option>
                <option value="Custom Requirement">Custom Requirement</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label" for="form-message">Project Goals or Current Website URL</label>
              <textarea class="form-textarea" id="form-message" name="message" placeholder="Tell us about your project, target audience, or current URL..."></textarea>
            </div>

            <button type="submit" class="button primary" style="width:100%;margin-top:1rem;">Submit Consultation Request</button>
            <p style="font-size:0.75rem;color:var(--muted);text-align:center;margin-top:1rem;">🔒 100% confidential. No spam. Direct response from Baner, Pune.</p>
          </form>
        </div>
      </div>
    </section>

    <!-- Closing -->
    ${closingHtml}
`;

fs.writeFileSync(path.join(targetDir, 'contact.html'), pageShell(
  'Contact Inrank Technologies | Baner, Pune Engineering Lab',
  'Contact Inrank Technologies in Baner, Pune for custom website development, local SEO, PPC advertising, and free technical audits. Call or WhatsApp +91 87888 23182.',
  'https://www.inranktech.com/contact.html',
  'contact',
  contactBody
));
console.log('[OK] contact.html built with Vinove architecture');

// ─────────────────────────────────────────────────────────────
// 5. CASE-STUDIES.HTML
// ─────────────────────────────────────────────────────────────
const caseStudiesBody = `
    <!-- Subpage Hero -->
    <section class="hero image-hero" style="min-height:55vh;padding-top:calc(var(--nav-h) + 4rem);padding-bottom:4rem;background: radial-gradient(circle at 75% 30%, rgba(0, 157, 73, 0.35) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(16, 33, 56, 0.8) 0%, transparent 60%), #081424;">
      <div class="hero-shade" aria-hidden="true"></div>
      <div class="shell hero-content">
        <div class="hero-copy">
          <p class="eyebrow" data-reveal>Evidence, Not the Headline</p>
          <h1 class="display" data-reveal>Case Studies &amp; Client <em>Growth.</em></h1>
          <p class="lede" data-reveal>Documented search ranking breakthroughs, e-commerce revenue growth, and sub-second web platforms engineered for Pune and national market leaders.</p>
        </div>
      </div>
    </section>

    <!-- Work Grid Section -->
    <section class="work-section" aria-labelledby="cases-title">
      <div class="shell">
        <div style="max-width:760px;">
          <p class="section-kicker">Documented Outcomes</p>
          <h2 class="section-title" id="cases-title">Selected Client Growth Records.</h2>
          <p class="section-copy">Inspect our live client deployments across Pune, Mumbai and global export markets.</p>
        </div>

        <div class="work-grid">
          <article class="work-card" id="greytothegreen" data-reveal>
            <div class="work-card-media"><img src="/img/client-logos/greytothegreen.png" alt="Greytothegreen"><span class="work-card-pill">99 PageSpeed Score</span></div>
            <div class="work-card-body">
              <span style="font-size:0.6875rem;font-weight:700;color:var(--terra);text-transform:uppercase;letter-spacing:0.08em;">Real Estate &amp; Architecture</span>
              <h3>Greytothegreen — Sustainable Architecture Portal</h3>
              <p>Engineered a minimalist, high-speed corporate portfolio. Organically outranks competitive Pune design firms for landscape architecture with sub-second performance.</p>
            </div>
            <div class="work-card-footer"><span style="font-size:0.8125rem;font-weight:700;color:var(--text-strong);">+340% Inquiries in 60 Days</span><a href="https://greytothegreen.com/" target="_blank" rel="noopener noreferrer" class="arrow-link">Live Portal ↗</a></div>
          </article>

          <article class="work-card" id="shetkarifoodstuff" data-reveal>
            <div class="work-card-media"><img src="/img/client-logos/shetkarifoodstuff.png" alt="Shetkari Foodstuff"><span class="work-card-pill">0.7s LCP Load Time</span></div>
            <div class="work-card-body">
              <span style="font-size:0.6875rem;font-weight:700;color:var(--terra);text-transform:uppercase;letter-spacing:0.08em;">Agro-Export &amp; E-Commerce</span>
              <h3>Shetkari Foodstuff — Export E-Commerce Infrastructure</h3>
              <p>Replaced a legacy slow WordPress portal with a high-speed e-commerce solution with international currency conversion and automated WhatsApp inquiry routing.</p>
            </div>
            <div class="work-card-footer"><span style="font-size:0.8125rem;font-weight:700;color:var(--text-strong);">₹18L+ Export GMV</span><a href="https://shetkarifoodstuff.com/" target="_blank" rel="noopener noreferrer" class="arrow-link">Live Portal ↗</a></div>
          </article>

          <article class="work-card" id="riituinstitution" data-reveal>
            <div class="work-card-media"><img src="/img/client-logos/riituinstitution.png" alt="Riitu Institution"><span class="work-card-pill">#1 Local Rank</span></div>
            <div class="work-card-body">
              <span style="font-size:0.6875rem;font-weight:700;color:var(--terra);text-transform:uppercase;letter-spacing:0.08em;">Education &amp; Training</span>
              <h3>Riitu Institution — Student Admissions Platform</h3>
              <p>Structured local SEO citations and GEO indexing across Pune educational hubs. Tripled organic enrollment applications across Kothrud, Baner and PCMC.</p>
            </div>
            <div class="work-card-footer"><span style="font-size:0.8125rem;font-weight:700;color:var(--text-strong);">14 Top-3 Pune Rankings</span><a href="https://riituinstitution.com/" target="_blank" rel="noopener noreferrer" class="arrow-link">Live Portal ↗</a></div>
          </article>

          <article class="work-card" id="cytos" data-reveal>
            <div class="work-card-media"><img src="/img/client-logos/cytos.png" alt="Cytos Diagnostics"><span class="work-card-pill">4.2x Appointment Booking</span></div>
            <div class="work-card-body">
              <span style="font-size:0.6875rem;font-weight:700;color:var(--terra);text-transform:uppercase;letter-spacing:0.08em;">Healthcare &amp; Clinical</span>
              <h3>Cytos Diagnostics — Pathology &amp; Test Booking Portal</h3>
              <p>Clean HIPAA-conscious healthcare UI with automated test selection, WhatsApp appointment confirmation, and Google 3-Pack domination in Shivaji Nagar.</p>
            </div>
            <div class="work-card-footer"><span style="font-size:0.8125rem;font-weight:700;color:var(--text-strong);">4.2x Patient Inquiries</span><a href="https://cytosdiagnostics.com/" target="_blank" rel="noopener noreferrer" class="arrow-link">Live Portal ↗</a></div>
          </article>

          <article class="work-card" id="vasroventures" data-reveal>
            <div class="work-card-media"><img src="/img/client-logos/vasroventures.png" alt="Vasro Ventures"><span class="work-card-pill">₹16,999 Fixed Price</span></div>
            <div class="work-card-body">
              <span style="font-size:0.6875rem;font-weight:700;color:var(--terra);text-transform:uppercase;letter-spacing:0.08em;">Corporate Real Estate</span>
              <h3>Vasro Ventures — Commercial Real Estate Platform</h3>
              <p>Corporate real estate showcase featuring high-resolution property tours, fast brochure downloads, and high-conversion lead generation forms.</p>
            </div>
            <div class="work-card-footer"><span style="font-size:0.8125rem;font-weight:700;color:var(--text-strong);">Delivered in 6 Days</span><a href="https://vasroventures.com/" target="_blank" rel="noopener noreferrer" class="arrow-link">Live Portal ↗</a></div>
          </article>

          <article class="work-card" id="fludio" data-reveal>
            <div class="work-card-media"><img src="/img/client-logos/fludio.png" alt="Fludio Visual Production"><span class="work-card-pill">Sub-Second Video Streaming</span></div>
            <div class="work-card-body">
              <span style="font-size:0.6875rem;font-weight:700;color:var(--terra);text-transform:uppercase;letter-spacing:0.08em;">Creative Production</span>
              <h3>Fludio — Commercial Video Production Showcase</h3>
              <p>Minimalist dark aesthetic with fluid video background reels, client showcase carousels, and instant quote inquiry architecture.</p>
            </div>
            <div class="work-card-footer"><span style="font-size:0.8125rem;font-weight:700;color:var(--text-strong);">98 Mobile Performance</span><a href="https://fludio.in/" target="_blank" rel="noopener noreferrer" class="arrow-link">Live Portal ↗</a></div>
          </article>
        </div>
      </div>
    </section>

    <!-- Closing -->
    ${closingHtml}
`;

fs.writeFileSync(path.join(targetDir, 'case-studies.html'), pageShell(
  'Case Studies & Client Growth Records | Inrank Technologies Pune',
  'Documented search ranking breakthroughs, e-commerce revenue growth, and sub-second web platforms engineered for Pune and national market leaders.',
  'https://www.inranktech.com/case-studies.html',
  'cases',
  caseStudiesBody
));
console.log('[OK] case-studies.html built with Vinove architecture');

// ─────────────────────────────────────────────────────────────
// 6. OUR-WORK.HTML & PORTFOLIO.HTML
// ─────────────────────────────────────────────────────────────
fs.writeFileSync(path.join(targetDir, 'our-work.html'), pageShell(
  'Our Work & Production Web Deployments | Inrank Technologies',
  'Inspect live websites, custom web applications, and e-commerce platforms engineered by Inrank Technologies in Baner, Pune.',
  'https://www.inranktech.com/our-work.html',
  'work',
  caseStudiesBody
));
fs.writeFileSync(path.join(targetDir, 'portfolio.html'), pageShell(
  'Our Work & Production Web Deployments | Inrank Technologies',
  'Inspect live websites, custom web applications, and e-commerce platforms engineered by Inrank Technologies in Baner, Pune.',
  'https://www.inranktech.com/portfolio.html',
  'work',
  caseStudiesBody
));
console.log('[OK] our-work.html & portfolio.html built with Vinove architecture');

console.log('\nAll Inrank 2.0 Subpages successfully built conforming to Vinove UI Design!');

