const fs = require('fs');
const path = 'inrank2.0/index.html';
let html = fs.readFileSync(path, 'utf8');

// 1. SECTION 5: Replace Capabilities / Add Services Cards Grid
const sec5OldRegex = /<!-- 5\. CAPABILITIES SECTION[\s\S]*?<!-- 6\. NICHES/;

const sec5New = `<!-- 5. CAPABILITIES & SERVICES CARDS SECTION (INRANK'S 4 PILLARS & 8 CORE GROWTH SERVICES) -->
    <section class="capabilities-section" id="services">
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

          <!-- Service Card 04: Social Media Marketing -->
          <article class="service-card" data-reveal>
            <div class="service-card-head">
              <div class="service-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </div>
              <span class="service-idx">04 / SOCIAL</span>
            </div>
            <h3 class="service-card-title">Social Media Marketing</h3>
            <p class="service-card-text">High-retention content strategy, Reels creation, and community building that positions your brand as an industry leader across Maharashtra.</p>
            <div class="service-card-chips">
              <span class="service-chip">Reels Production</span>
              <span class="service-chip">Brand Positioning</span>
              <span class="service-chip">LinkedIn Growth</span>
            </div>
            <a href="/services/social-media-marketing-services.html" class="service-card-link">
              <span>View Service Details</span>
              <svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </a>
          </article>

          <!-- Service Card 05: UI/UX & Design Systems -->
          <article class="service-card" data-reveal>
            <div class="service-card-head">
              <div class="service-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <span class="service-idx">05 / UI·UX</span>
            </div>
            <h3 class="service-card-title">UI/UX &amp; Conversion Optimization</h3>
            <p class="service-card-text">High-converting UI/UX layouts, wireframes, and design systems crafted for user engagement, clear pricing clarity, and commercial intent.</p>
            <div class="service-card-chips">
              <span class="service-chip">UI/UX Design</span>
              <span class="service-chip">CRO Audits</span>
              <span class="service-chip">Design Systems</span>
            </div>
            <a href="/services/ui-ux-design-services.html" class="service-card-link">
              <span>View Service Details</span>
              <svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </a>
          </article>

          <!-- Service Card 06: AI SEO & GEO -->
          <article class="service-card" data-reveal>
            <div class="service-card-head">
              <div class="service-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
              </div>
              <span class="service-idx">06 / AI·GEO</span>
            </div>
            <h3 class="service-card-title">AI SEO &amp; Generative Engine (GEO)</h3>
            <p class="service-card-text">Position your digital assets as the authoritative reference across generative AI engines including ChatGPT, Perplexity, Gemini, and Claude.</p>
            <div class="service-card-chips">
              <span class="service-chip">AI Citations</span>
              <span class="service-chip">ChatGPT Visibility</span>
              <span class="service-chip">GEO Audits</span>
            </div>
            <a href="/services/ai-seo-services.html" class="service-card-link">
              <span>View Service Details</span>
              <svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </a>
          </article>

          <!-- Service Card 07: E-Commerce -->
          <article class="service-card" data-reveal>
            <div class="service-card-head">
              <div class="service-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
              </div>
              <span class="service-idx">07 / E-COM</span>
            </div>
            <h3 class="service-card-title">E-Commerce Store Engineering</h3>
            <p class="service-card-text">High-velocity Shopify and WooCommerce stores optimized for micro-interactions, frictionless mobile checkout, and high average order value.</p>
            <div class="service-card-chips">
              <span class="service-chip">Shopify Stores</span>
              <span class="service-chip">WooCommerce</span>
              <span class="service-chip">Cart Recovery</span>
            </div>
            <a href="/services/ecommerce-website-development-company.html" class="service-card-link">
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
              <span class="service-idx">08 / GMB</span>
            </div>
            <h3 class="service-card-title">Google 3-Pack &amp; Local Maps</h3>
            <p class="service-card-text">Local 3-Pack domination in Pune. Rank in top map positions for "near me" high-intent commercial queries across Baner, PCMC, Kothrud &amp; Camp.</p>
            <div class="service-card-chips">
              <span class="service-chip">GMB Top 3</span>
              <span class="service-chip">Local Citations</span>
              <span class="service-chip">Review Velocity</span>
            </div>
            <a href="/services/google-my-business-services.html" class="service-card-link">
              <span>View Service Details</span>
              <svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </a>
          </article>

        </div>

        <!-- Specialized Banner CTA -->
        <div class="services-banner">
          <p>Looking for a specialized requirement? Inrank engineers 27 custom capabilities from corporate logo design to enterprise web applications.</p>
          <a href="/services.html" class="button">Explore All 27 Services &rarr;</a>
        </div>

      </div>
    </section>

    <!-- 6. NICHES`;

html = html.replace(sec5OldRegex, sec5New);
console.log('Section 5 replaced with Services Grid!');

// 2. SECTION 6: Add icons with hover effects to Niches
const sec6OldRegex = /<div class="niche-grid">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/;

const sec6New = `<div class="niche-grid">
          
          <!-- Sector 01: Manufacturing -->
          <div class="niche-card" data-reveal>
            <div class="niche-card-top">
              <div class="niche-icon-wrap">
                <svg viewBox="0 0 24 24"><path d="M2 20h20M5 20V8l5 4V8l5 4V4h4v16"/><path d="M18 9h1M18 13h1M18 17h1"/></svg>
              </div>
              <span class="niche-num">SECTOR 01</span>
            </div>
            <h3>B2B Manufacturing &amp; Industrial</h3>
            <p>Quotation funnels, technical product catalogs, and global export search visibility for Bhosari, Chakan &amp; PCMC manufacturers.</p>
          </div>

          <!-- Sector 02: Healthcare -->
          <div class="niche-card" data-reveal>
            <div class="niche-card-top">
              <div class="niche-icon-wrap">
                <svg viewBox="0 0 24 24"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5v14M5 12h14"/></svg>
              </div>
              <span class="niche-num">SECTOR 02</span>
            </div>
            <h3>Clinics &amp; Healthcare Providers</h3>
            <p>Google Maps 3-Pack dominance, direct WhatsApp appointment booking, and local medical schema for Pune specialists.</p>
          </div>

          <!-- Sector 03: Professional Advisory -->
          <div class="niche-card" data-reveal>
            <div class="niche-card-top">
              <div class="niche-icon-wrap">
                <svg viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              </div>
              <span class="niche-num">SECTOR 03</span>
            </div>
            <h3>Professional Services &amp; Advisory</h3>
            <p>Authority-building content architectures and Google Search lead pipelines for legal, financial, and corporate firms.</p>
          </div>

          <!-- Sector 04: Real Estate -->
          <div class="niche-card" data-reveal>
            <div class="niche-card-top">
              <div class="niche-icon-wrap">
                <svg viewBox="0 0 24 24"><path d="M3 21h18M5 21V5l7-3 7 3v16M9 9h1M9 13h1M9 17h1M14 9h1M14 13h1M14 17h1"/></svg>
              </div>
              <span class="niche-num">SECTOR 04</span>
            </div>
            <h3>Real Estate &amp; Developers</h3>
            <p>High-converting project micro-sites, floorplan showcases, and targeted NRI / Pune buyer Google Ads campaigns.</p>
          </div>

          <!-- Sector 05: E-Commerce -->
          <div class="niche-card" data-reveal>
            <div class="niche-card-top">
              <div class="niche-icon-wrap">
                <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/></svg>
              </div>
              <span class="niche-num">SECTOR 05</span>
            </div>
            <h3>E-Commerce &amp; D2C Brands</h3>
            <p>Lightning-fast Shopify setups, cart recovery funnels, and profitable Meta catalog advertising scaling.</p>
          </div>

          <!-- Sector 06: Local Pune Retail -->
          <div class="niche-card" data-reveal>
            <div class="niche-card-top">
              <div class="niche-icon-wrap">
                <svg viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <span class="niche-num">SECTOR 06</span>
            </div>
            <h3>Local Pune Retail &amp; Commercial</h3>
            <p>Hyper-local SEO, Google Business Profile acceleration, and foot-traffic growth across Baner, Kothrud &amp; FC Road.</p>
          </div>

        </div>
      </div>
    </section>`;

html = html.replace(sec6OldRegex, sec6New);
console.log('Section 6 replaced with icons and hover structure!');

// 3. SECTION 7: Align Proof & Numbers Section
const sec7OldRegex = /<!-- 7\. PROOF & BIG NUMBERS[\s\S]*?<!-- 8\. WORK SHOWCASE/;

const sec7New = `<!-- 7. PROOF & BIG NUMBERS (INRANK REAL NUMBERS) -->
    <section class="proof" id="proof">
      <div class="shell">
        <div class="proof-grid">
          <div class="proof-left">
            <span class="eyebrow-pill">PROVABLE IMPACT</span>
            <h2 class="section-title">Numbers that move P&amp;Ls, not just dashboards.</h2>
            <p class="section-sub">Measured commercial outcomes achieved for ambitious brands across Pune, Mumbai, and national markets.</p>
            <div class="badge-row">
              <div class="badge-item">
                <strong class="badge-num">50+</strong>
                <span class="badge-label">Pune Deployments</span>
                <span class="badge-sub">Live Production Portals</span>
              </div>
              <div class="badge-item">
                <strong class="badge-num badge-star">4.9★</strong>
                <span class="badge-label">Client Rating</span>
                <span class="badge-sub">Google &amp; Justdial Verified</span>
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
    </section>

    <!-- 8. WORK SHOWCASE`;

html = html.replace(sec7OldRegex, sec7New);
console.log('Section 7 replaced with aligned proof cards!');

fs.writeFileSync(path, html, 'utf8');
console.log('index.html successfully updated!');

