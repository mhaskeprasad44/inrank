const fs = require('fs');

const path = 'inrank2.0/index.html';
let html = fs.readFileSync(path, 'utf8');

const sec5Start = '<!-- 5. CAPABILITIES SECTION';
const sec6Start = '<!-- 6. INDUSTRY NICHES';

const startIndex = html.indexOf(sec5Start);
const endIndex = html.indexOf(sec6Start);

if (startIndex === -1 || endIndex === -1) {
  console.error('Could not find Section 5 start or Section 6 start!');
  process.exit(1);
}

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
    </section>

    `;

html = html.substring(0, startIndex) + sec5New + html.substring(endIndex);

fs.writeFileSync(path, html, 'utf8');
console.log('Section 5 successfully updated with 8 Services Cards Grid, 4 Pillars strip, and CTA banner!');

