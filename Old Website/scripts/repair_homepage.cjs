const fs = require('fs');

let html = fs.readFileSync('inrank2.0/index.html', 'utf8');

// 1. Logo replacement
html = html.replace(/src="\/img\/logo\.png"/g, 'src="/img/inrank-white-logo.svg"');
html = html.replace(/src="\/logo\.png"/g, 'src="/img/inrank-white-logo.svg"');
html = html.replace(/href="\/img\/logo\.png"/g, 'href="/img/inrank-white-logo.svg"');
html = html.replace(/href="\/logo\.png"/g, 'href="/img/inrank-white-logo.svg"');

// 2. Remove Pune from Traditional Pune Agencies
html = html.replace(/Traditional Pune Agencies/g, 'Traditional Agencies');

// 3. Section 5: End-to-End Execution + 8 Services Grid
const sec5OldRegex = /<section class="capabilities-section" id="services">[\s\S]*?<\/section>/;
const sec5New = `<section class="capabilities-section" id="services">
      <div class="shell">
        <div class="section-head">
          <span class="eyebrow-pill">END-TO-END EXECUTION</span>
          <h2 class="section-title">Digital Marketing &amp; Web Development in Pune.</h2>
          <p class="section-sub">Four core architectural pillars. 27 specialized services. Delivered by senior engineers with direct accountability for timelines, rankings, and measurable commercial growth.</p>
        </div>

        <!-- 4 Pillars Architecture Strip -->
        <div class="pillars-strip">
          <div class="pillar-pill active">
            <span class="pill-dot"></span>
            <strong>Pillar 01: Search Dominance</strong>
            <small>+318% Organic Reach</small>
          </div>
          <div class="pillar-pill">
            <span class="pill-dot"></span>
            <strong>Pillar 02: High-Performance Web</strong>
            <small>&lt; 1.2s Load Speed</small>
          </div>
          <div class="pillar-pill">
            <span class="pill-dot"></span>
            <strong>Pillar 03: Paid Acquisition</strong>
            <small>4.8x Average ROAS</small>
          </div>
          <div class="pillar-pill">
            <span class="pill-dot"></span>
            <strong>Pillar 04: Brand &amp; CRO</strong>
            <small>+42% Lead Conversion</small>
          </div>
        </div>

        <!-- 8 Core Growth Services Grid -->
        <div class="services-grid">
          
          <!-- Service Card 01: SEO -->
          <article class="service-card" data-reveal>
            <div class="service-card-head">
              <div class="service-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </div>
              <span class="service-idx">01 / SEO</span>
            </div>
            <h3 class="service-card-title">Search Engine Optimization (SEO)</h3>
            <p class="service-card-text">Rank #1 on Google for high-intent search queries with technical Core Web Vitals, keyword architecture, and high-authority Pune backlinks.</p>
            <div class="service-card-chips">
              <span class="service-chip">SEO Company Pune</span>
              <span class="service-chip">Technical Audits</span>
              <span class="service-chip">Rank #1 Focus</span>
            </div>
            <a href="/services/seo-company-pune.html" class="service-card-link">
              <span>View Service Details</span>
              <svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </a>
          </article>

          <!-- Service Card 02: Web Development -->
          <article class="service-card" data-reveal>
            <div class="service-card-head">
              <div class="service-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <span class="service-idx">02 / WEB</span>
            </div>
            <h3 class="service-card-title">Custom Website Development</h3>
            <p class="service-card-text">Fast, custom-coded web architectures that load in under 1.2s, communicate premium positioning, and convert visitors into qualified buyers.</p>
            <div class="service-card-chips">
              <span class="service-chip">Next.js &amp; React</span>
              <span class="service-chip">WordPress Engineering</span>
              <span class="service-chip">Sub-Second Speed</span>
            </div>
            <a href="/services/custom-website-development.html" class="service-card-link">
              <span>View Service Details</span>
              <svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </a>
          </article>

          <!-- Service Card 03: Pay Per Click (PPC) -->
          <article class="service-card" data-reveal>
            <div class="service-card-head">
              <div class="service-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <span class="service-idx">03 / ADS</span>
            </div>
            <h3 class="service-card-title">Google &amp; Meta Ads Management</h3>
            <p class="service-card-text">Scalable, high-ROAS paid acquisition across Google Search, Performance Max, Meta Ads, and LinkedIn with end-to-end CRM attribution.</p>
            <div class="service-card-chips">
              <span class="service-chip">Google Ads PPC</span>
              <span class="service-chip">Meta Retargeting</span>
              <span class="service-chip">4.8x ROAS Goal</span>
            </div>
            <a href="/services/ppc-services.html" class="service-card-link">
              <span>View Service Details</span>
              <svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </a>
          </article>

          <!-- Service Card 04: Social Media Marketing (SMM) -->
          <article class="service-card" data-reveal>
            <div class="service-card-head">
              <div class="service-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </div>
              <span class="service-idx">04 / SOCIAL</span>
            </div>
            <h3 class="service-card-title">Social Media Marketing (SMM)</h3>
            <p class="service-card-text">High-impact visual storytelling, creative campaigns, and community engagement engineered to build brand equity and organic customer trust.</p>
            <div class="service-card-chips">
              <span class="service-chip">Content Creation</span>
              <span class="service-chip">Community Growth</span>
              <span class="service-chip">Brand Authority</span>
            </div>
            <a href="/services/social-media-marketing.html" class="service-card-link">
              <span>View Service Details</span>
              <svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </a>
          </article>

          <!-- Service Card 05: UI/UX & CRO -->
          <article class="service-card" data-reveal>
            <div class="service-card-head">
              <div class="service-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <span class="service-idx">05 / DESIGN</span>
            </div>
            <h3 class="service-card-title">UI/UX Design &amp; Conversion Rate Optimization (CRO)</h3>
            <p class="service-card-text">Systematic behavioral audits, high-fidelity wireframing, and data-driven A/B testing designed to eliminate bounce and lift checkout rates.</p>
            <div class="service-card-chips">
              <span class="service-chip">Figma Wireframes</span>
              <span class="service-chip">A/B Testing</span>
              <span class="service-chip">Conversion Lift</span>
            </div>
            <a href="/services/ui-ux-design.html" class="service-card-link">
              <span>View Service Details</span>
              <svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </a>
          </article>

          <!-- Service Card 06: AI SEO & GEO -->
          <article class="service-card" data-reveal>
            <div class="service-card-head">
              <div class="service-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg>
              </div>
              <span class="service-idx">06 / AI SEO</span>
            </div>
            <h3 class="service-card-title">AI SEO &amp; Generative Engine Optimization (GEO)</h3>
            <p class="service-card-text">Optimizing your brand for generative AI answer engines like ChatGPT, Google AI Overviews, and Perplexity with semantic entities and knowledge graphs.</p>
            <div class="service-card-chips">
              <span class="service-chip">ChatGPT Citations</span>
              <span class="service-chip">Google AI Overviews</span>
              <span class="service-chip">Knowledge Graphs</span>
            </div>
            <a href="/services/ai-seo-geo.html" class="service-card-link">
              <span>View Service Details</span>
              <svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </a>
          </article>

          <!-- Service Card 07: E-Commerce -->
          <article class="service-card" data-reveal>
            <div class="service-card-head">
              <div class="service-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
              </div>
              <span class="service-idx">07 / E-COMMERCE</span>
            </div>
            <h3 class="service-card-title">E-Commerce Store &amp; Export Infrastructure</h3>
            <p class="service-card-text">High-velocity Shopify and WooCommerce digital storefronts with multi-currency pricing, automated WhatsApp lead routing, and frictionless 1-page checkouts.</p>
            <div class="service-card-chips">
              <span class="service-chip">Shopify &amp; Woo</span>
              <span class="service-chip">Export Funnels</span>
              <span class="service-chip">WhatsApp Checkout</span>
            </div>
            <a href="/services/ecommerce-development.html" class="service-card-link">
              <span>View Service Details</span>
              <svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </a>
          </article>

          <!-- Service Card 08: Google 3-Pack -->
          <article class="service-card" data-reveal>
            <div class="service-card-head">
              <div class="service-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <span class="service-idx">08 / LOCAL 3-PACK</span>
            </div>
            <h3 class="service-card-title">Google 3-Pack &amp; Local Pune Domination</h3>
            <p class="service-card-text">Hyperlocal Google Business Profile dominance across Baner, Hinjewadi, Shivaji Nagar, and PCMC to capture 80% of local phone calls and direct visits.</p>
            <div class="service-card-chips">
              <span class="service-chip">GMB Optimization</span>
              <span class="service-chip">Pune Citations</span>
              <span class="service-chip">Phone Call Velocity</span>
            </div>
            <a href="/services/local-seo-pune.html" class="service-card-link">
              <span>View Service Details</span>
              <svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </a>
          </article>

        </div>

        <!-- Section 5 Bottom CTA Strip -->
        <div class="services-footer-banner">
          <div>
            <strong>Need a bespoke combination of services?</strong>
            <p>We configure custom multi-disciplinary sprints with transparent fixed pricing and zero lock-in contracts.</p>
          </div>
          <div class="services-footer-actions">
            <a href="/services.html" class="button secondary">Explore All 27 Services</a>
            <a href="/contact.html" class="button primary">Request Service Proposal</a>
          </div>
        </div>

      </div>
    </section>`;

html = html.replace(sec5OldRegex, sec5New);

// 4. Section 6: Niches with dedicated icons
const sec6OldRegex = /<section class="niches-section" id="niches">[\s\S]*?<\/section>/;
const sec6New = `<section class="niches-section" id="niches">
      <div class="shell">
        <div class="section-head">
          <span class="eyebrow-pill">INDUSTRY EXPERTISE</span>
          <h2 class="section-title">Niches we know inside-out.</h2>
          <p class="section-sub">Tailored growth playbooks designed for the commercial dynamics of Pune's leading sectors.</p>
        </div>

        <div class="niches-grid">
          <div class="niche-card" data-reveal>
            <div class="niche-top">
              <div class="niche-icon-badge">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M3 7l6-4 6 4 6-4v14H3V7zm6 3v4m6-4v4"/></svg>
              </div>
              <span class="niche-sector">SECTOR 01</span>
            </div>
            <h3>B2B Manufacturing &amp; Industrial</h3>
            <p>Quotation funnels, technical product catalogs, and global export search visibility for Bhosari, Chakan &amp; PCMC manufacturers.</p>
          </div>

          <div class="niche-card" data-reveal>
            <div class="niche-top">
              <div class="niche-icon-badge">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5v16"/></svg>
              </div>
              <span class="niche-sector">SECTOR 02</span>
            </div>
            <h3>Clinics &amp; Healthcare Providers</h3>
            <p>Google Maps 3-Pack dominance, direct WhatsApp appointment booking, and local medical schema for Pune specialists.</p>
          </div>

          <div class="niche-card" data-reveal>
            <div class="niche-top">
              <div class="niche-icon-badge">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              </div>
              <span class="niche-sector">SECTOR 03</span>
            </div>
            <h3>Professional Services &amp; Advisory</h3>
            <p>Authority-building content architectures and Google Search lead pipelines for legal, financial, and corporate firms.</p>
          </div>

          <div class="niche-card" data-reveal>
            <div class="niche-top">
              <div class="niche-icon-badge">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>
              </div>
              <span class="niche-sector">SECTOR 04</span>
            </div>
            <h3>Real Estate Developers &amp; Architecture</h3>
            <p>High-conversion project landing pages, luxury presentation, and targeted NRI buyer lead campaigns across Pune corridors.</p>
          </div>

          <div class="niche-card" data-reveal>
            <div class="niche-top">
              <div class="niche-icon-badge">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              </div>
              <span class="niche-sector">SECTOR 05</span>
            </div>
            <h3>Consumer Brands &amp; E-Commerce</h3>
            <p>Sub-second store architectures, Meta &amp; Google catalog ads, and retention funnels built to scale repeat orders.</p>
          </div>

          <div class="niche-card" data-reveal>
            <div class="niche-top">
              <div class="niche-icon-badge">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/><circle cx="12" cy="12" r="4"/></svg>
              </div>
              <span class="niche-sector">SECTOR 06</span>
            </div>
            <h3>High-Ticket Local Services</h3>
            <p>Dominating high-intent local search queries to capture customers actively seeking immediate, high-value assistance.</p>
          </div>
        </div>
      </div>
    </section>`;

html = html.replace(sec6OldRegex, sec6New);

// 5. Section 7: Numbers that move P&Ls (Aligned)
const sec7OldRegex = /<section class="proof" id="proof">[\s\S]*?<\/section>/;
const sec7New = `<section class="proof" id="proof">
      <div class="shell">
        <div class="proof-grid">
          <div class="proof-left">
            <span class="eyebrow-pill">PROVABLE IMPACT</span>
            <h2 class="section-title">Numbers that move P&amp;Ls, not just dashboards.</h2>
            <p class="section-sub">Measured commercial outcomes achieved for ambitious brands across Pune, Mumbai, and national markets.</p>
            
            <div class="proof-highlights-strip">
              <div class="highlight-box">
                <strong class="highlight-val">50+</strong>
                <span class="highlight-lbl">Pune Deployments</span>
                <small class="highlight-sub">Live Production Portals</small>
              </div>
              <div class="highlight-box">
                <strong class="highlight-val">4.9★</strong>
                <span class="highlight-lbl">Client Rating</span>
                <small class="highlight-sub">Google &amp; Justdial Verified</small>
              </div>
            </div>
          </div>

          <div class="proof-facts">
            <div class="fact-item">
              <div class="fact-head">
                <strong>₹14.2M+</strong>
                <span class="fact-tag">REVENUE</span>
              </div>
              <span class="fact-title">Client Revenue Influenced</span>
              <p class="fact-desc">Direct commercial revenue generated through high-intent search rankings, conversion web platforms, and paid ad campaigns.</p>
            </div>
            <div class="fact-item">
              <div class="fact-head">
                <strong>+318%</strong>
                <span class="fact-tag">ORGANIC</span>
              </div>
              <span class="fact-title">Average Organic Traffic Surge</span>
              <p class="fact-desc">Average organic search impression and click growth delivered within 90 days of technical deployment.</p>
            </div>
            <div class="fact-item">
              <div class="fact-head">
                <strong>&lt; 1.2s</strong>
                <span class="fact-tag">SPEED</span>
              </div>
              <span class="fact-title">Page Load Speed</span>
              <p class="fact-desc">Sub-second average mobile render speed across our client portfolio, maintaining Google Lighthouse 90+.</p>
            </div>
            <div class="fact-item">
              <div class="fact-head">
                <strong>4.8x</strong>
                <span class="fact-tag">ROAS</span>
              </div>
              <span class="fact-title">Average Return on Ad Spend</span>
              <p class="fact-desc">High-intent Google and Meta ad funnels engineered for profitable customer acquisition.</p>
            </div>
          </div>
        </div>
      </div>
    </section>`;

html = html.replace(sec7OldRegex, sec7New);

// 6. Section 8 Work links update to /our-work/{slug}.html
html = html.replace(/href="\/case-studies\/(greytothegreen|shetkarifoodstuff|cytos|dravyafinancial|fludio|hcpnest|hiragrafix|orthopedicanklefootspecialist|riituinstitution|vasroventures)\.html"/g, 'href="/our-work/$1.html"');

fs.writeFileSync('inrank2.0/index.html', html, 'utf8');
console.log('Homepage (index.html) successfully repaired and updated!');

