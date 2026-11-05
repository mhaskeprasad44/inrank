const fs = require('fs');
const path = require('path');

const canonicalFooter = `  <!-- ============================================================
       OACER-STYLE MASTER FOOTER (INRANK ARCHITECTURE)
       ============================================================ -->
  <footer data-nosnippet="true" class="ft">
    <div class="ft-glow" aria-hidden="true"></div>

    <!-- Top CTA Block -->
    <div class="ft-wrap ft-cta">
      <div>
        <p class="ft-label">Start a project</p>
        <h2 class="ft-title">
          Tell us what you’re building.
          <span>We’ll show you how we’d build it.</span>
        </h2>
      </div>

      <div class="ft-cta-side">
        <ul class="ft-points">
          <li>A reply within one business day</li>
          <li>Direct consultation with senior pod, no junior interns</li>
          <li>Full technical audit &amp; fixed milestone estimate</li>
        </ul>
        <div class="ft-btns">
          <a class="ft-btn" href="/contact.html">
            Start a project
            <svg stroke="currentColor" fill="none" stroke-width="2.2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" height="14" width="14">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
          <a href="https://wa.me/918788823182" class="ft-btn ft-btn--ghost" target="_blank" rel="noopener noreferrer">
            WhatsApp us
            <svg stroke="currentColor" fill="none" stroke-width="2.2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" height="14" width="14">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- 4-Column Grid -->
    <div class="ft-wrap ft-grid">
      <!-- Col 1: Brand & Pune Bio -->
      <div class="ft-brand">
        <a href="/" class="ft-brand-logo" aria-label="Inrank Technologies Home">
          <img src="/img/inrank-white-logo.svg" alt="Inrank Technologies" width="36" height="36" />
          <div style="display:flex;flex-direction:column;line-height:1.1;">
            <span style="font-size:1.25rem;font-weight:850;color:#ffffff;letter-spacing:-0.03em;">Inrank</span>
            <span style="font-size:0.65rem;font-weight:750;color:var(--green-hi);letter-spacing:0.12em;text-transform:uppercase;">Technologies</span>
          </div>
        </a>
        <p>Performance-first digital growth engineering, conversion-engineered web platforms, and authoritative search dominance. Built by senior engineers in Baner, Pune since 2018.</p>
        
        <div class="ft-social">
          <a href="https://wa.me/918788823182" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="16" width="16"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          </a>
          <a href="https://www.linkedin.com/company/inranktech/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="16" width="16"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="https://www.instagram.com/inranktech/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="16" width="16"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="mailto:contact@inranktech.com" aria-label="Email">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="16" width="16"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </a>
          <a href="tel:+918788823182" aria-label="Phone">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="16" width="16"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </a>
        </div>
      </div>

      <!-- Col 2: Company -->
      <nav aria-labelledby="ft-company">
        <h3 id="ft-company">Company</h3>
        <ul>
          <li><a href="/about.html">About Inrank</a></li>
          <li><a href="/about.html#prasad-mhaske">Leadership Profile</a></li>
          <li><a href="/our-work.html">Our Work &amp; Portfolio</a></li>
          <li><a href="/case-studies.html">Case Studies</a></li>
          <li><a href="/pricing.html">Pricing Architecture</a></li>
          <li><a href="/contact.html">Baner Engineering Lab</a></li>
        </ul>
      </nav>

      <!-- Col 3: Expertise -->
      <nav aria-labelledby="ft-expertise">
        <h3 id="ft-expertise">Expertise</h3>
        <ul>
          <li><a href="/services/seo-company-pune.html">SEO Company Pune</a></li>
          <li><a href="/services/custom-website-development.html">Custom Web Development</a></li>
          <li><a href="/services/ppc-services.html">Google Ads &amp; PPC</a></li>
          <li><a href="/services/meta-ads-agency.html">Meta &amp; Instagram Ads</a></li>
          <li><a href="/services/ui-ux-design-services.html">Brand Identity &amp; CRO</a></li>
          <li><a href="/services.html">All 27 Services</a></li>
        </ul>
      </nav>

      <!-- Col 4: Pune HQ & Contact -->
      <div class="ft-hq">
        <h3>Pune HQ &amp; Lab</h3>
        <address>Baner Road, Near Balewadi High Street, Baner, Pune, Maharashtra 411045, India</address>
        <p>
          <a href="tel:+918788823182">Direct: (+91) 87888 23182</a>
          <a href="https://wa.me/918788823182">WhatsApp: (+91) 87888 23182</a>
          <a href="mailto:contact@inranktech.com">contact@inranktech.com</a>
        </p>
        <span class="ft-hq-corridors">Serving Baner · Balewadi · Hinjewadi · Aundh · Kothrud · PCMC Belt</span>
      </div>
    </div>

    <!-- Bottom Legal Bar -->
    <div class="ft-wrap ft-bar">
      <p>© 2026 Inrank Technologies Pvt Ltd · Baner, Pune, India. All rights reserved.</p>
      <nav aria-label="Legal">
        <a href="/privacy-policy.html">Privacy Policy</a>
        <a href="/terms-and-conditions.html">Terms of Service</a>
        <a href="/contact.html">Contact Us</a>
        <a href="https://wa.me/918788823182">Direct WhatsApp</a>
      </nav>
    </div>

    <!-- Giant Watermark Wordmark -->
    <p class="ft-mark" aria-hidden="true">INRANK</p>
  </footer>`;

function walk(dir) {
  let res = [];
  fs.readdirSync(dir).forEach(file => {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) res = res.concat(walk(full));
    else if (file.endsWith('.html') && !file.includes('test_footer.html')) res.push(full);
  });
  return res;
}

const allHtml = walk('inrank2.0');
let updatedCount = 0;

allHtml.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');

  // Replace footer
  const footerRegex = /<!--\s*={5,}[\s\S]*?FOOTER[\s\S]*?-->\s*<footer[\s\S]*?<\/footer>|<footer[\s\S]*?<\/footer>/i;
  if (footerRegex.test(content)) {
    content = content.replace(footerRegex, canonicalFooter);
    
    // Ensure corporate.css is linked
    if (!content.includes('corporate.css')) {
      content = content.replace('</head>', '  <link rel="stylesheet" href="/css/corporate.css" />\n</head>');
    }

    fs.writeFileSync(f, content, 'utf8');
    updatedCount++;
  } else {
    console.warn('No footer found in:', f);
  }
});

console.log(`Successfully deployed Oacer-style Inrank master footer across ${updatedCount} HTML files!`);

