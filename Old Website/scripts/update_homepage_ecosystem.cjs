const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'inrank2.0', 'index.html');
let content = fs.readFileSync(indexPath, 'utf8');

const startMarker = '    <!-- 2. MARQUEE STRIP (INRANK TRUSTED BRANDS) -->';
const endMarker = '    </section>\n\n  </main>';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex === -1) {
  console.error("Start marker not found!");
  process.exit(1);
}
if (endIndex === -1) {
  console.error("End marker not found!");
  process.exit(1);
}

const replacement = `    <!-- 2. MARQUEE STRIP (INRANK TRUSTED BRANDS) -->
    <section class="eco-marquee-band" aria-label="Trusted Clients">
      <div class="eco-shell">
        <p class="marquee-title">TRUSTED BY AMBITIOUS BRANDS SCALING REAL REVENUE &amp; HIGH ROAS ACROSS PUNE &amp; INDIA</p>
      </div>
      <div class="marquee-track-wrap">
        <div class="marquee-track">
          <div class="client-logo-item"><img src="/client-logos/greytothegreen.png" alt="Greytothegreen" /></div>
          <div class="client-logo-item"><img src="/client-logos/shetkari.webp" alt="Shetkari Foodstuff" /></div>
          <div class="client-logo-item"><img src="/client-logos/cytos.png" alt="Cytos Healthcare" /></div>
          <div class="client-logo-item"><img src="/client-logos/orthopedicanklefootspecialist.png" alt="Orthopedic &amp; Ankle Foot Specialist Clinic" /></div>
          <div class="client-logo-item"><img src="/client-logos/hiragrafix.png" alt="Hira Grafix" /></div>
          <div class="client-logo-item"><img src="/client-logos/hcpnest.png" alt="HCP Nest" /></div>
          <div class="client-logo-item"><img src="/client-logos/fludio.png" alt="Fludio Design" /></div>
          <div class="client-logo-item"><img src="/client-logos/vasro.webp" alt="Vasro Ventures" /></div>
          <!-- Repeat for smooth infinite scroll -->
          <div class="client-logo-item"><img src="/client-logos/greytothegreen.png" alt="Greytothegreen" /></div>
          <div class="client-logo-item"><img src="/client-logos/shetkari.webp" alt="Shetkari Foodstuff" /></div>
          <div class="client-logo-item"><img src="/client-logos/cytos.png" alt="Cytos Healthcare" /></div>
          <div class="client-logo-item"><img src="/client-logos/orthopedicanklefootspecialist.png" alt="Orthopedic &amp; Ankle Foot Specialist Clinic" /></div>
          <div class="client-logo-item"><img src="/client-logos/hiragrafix.png" alt="Hira Grafix" /></div>
          <div class="client-logo-item"><img src="/client-logos/hcpnest.png" alt="HCP Nest" /></div>
          <div class="client-logo-item"><img src="/client-logos/fludio.png" alt="Fludio Design" /></div>
          <div class="client-logo-item"><img src="/client-logos/vasro.webp" alt="Vasro Ventures" /></div>
        </div>
      </div>
    </section>

    <!-- 3. SERVICES & CAPABILITIES (INRANK 27 SERVICES) -->
    <section class="eco-section" id="services" aria-labelledby="services-heading">
      <div class="eco-shell">
        <div class="eco-intro-head">
          <div>
            <span class="eco-kicker">END-TO-END EXECUTION</span>
            <h2 class="eco-heading" id="services-heading">Digital Marketing &amp; Web Development in Pune.</h2>
          </div>
          <p class="eco-copy">Four core architectural pillars. 27 specialized services. Delivered by senior engineers with direct accountability for timelines, rankings, and measurable commercial growth.</p>
        </div>

        <!-- 4 Accountable Growth Pillars -->
        <div class="eco-pillars-grid">
          
          <!-- Pillar 1: Search Dominance (Featured) -->
          <a href="/services.html#pillar-1" class="eco-pillar-card featured">
            <div class="eco-pillar-header">
              <span class="eco-pillar-kicker">PILLAR 01</span>
              <span class="eco-pillar-stat">+318%</span>
            </div>
            <h3 class="eco-pillar-title">Search Dominance</h3>
            <p class="eco-pillar-sub">Organic Reach Surge</p>
          </a>

          <!-- Pillar 2: High-Performance Web -->
          <a href="/services.html#pillar-2" class="eco-pillar-card">
            <div class="eco-pillar-header">
              <span class="eco-pillar-kicker">PILLAR 02</span>
              <span class="eco-pillar-stat">&lt; 1.2s</span>
            </div>
            <h3 class="eco-pillar-title">High-Performance Web</h3>
            <p class="eco-pillar-sub">Core Web Vitals Speed</p>
          </a>

          <!-- Pillar 3: Paid Acquisition -->
          <a href="/services.html#pillar-3" class="eco-pillar-card">
            <div class="eco-pillar-header">
              <span class="eco-pillar-kicker">PILLAR 03</span>
              <span class="eco-pillar-stat">4.8x</span>
            </div>
            <h3 class="eco-pillar-title">Paid Acquisition</h3>
            <p class="eco-pillar-sub">Average Campaign ROAS</p>
          </a>

          <!-- Pillar 4: Brand & CRO -->
          <a href="/services.html#pillar-4" class="eco-pillar-card">
            <div class="eco-pillar-header">
              <span class="eco-pillar-kicker">PILLAR 04</span>
              <span class="eco-pillar-stat">+42%</span>
            </div>
            <h3 class="eco-pillar-title">Brand &amp; CRO</h3>
            <p class="eco-pillar-sub">Lead Conversion Lift</p>
          </a>

        </div>

        <!-- 8 Core Growth Services Grid -->
        <div class="eco-services-grid">
          
          <!-- Card 01: SEO -->
          <article class="eco-service-card">
            <div>
              <div class="eco-service-head">
                <div class="eco-service-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                </div>
                <span class="eco-service-idx">01 / SEO</span>
              </div>
              <h3 class="eco-service-title">Search Engine Optimization (SEO)</h3>
              <p class="eco-service-desc">Rank #1 on Google for high-intent search queries with technical Core Web Vitals, semantic keyword architecture, and high-authority Pune backlinks.</p>
            </div>
            <div>
              <div class="eco-service-chips">
                <span class="eco-service-chip">SEO Company Pune</span>
                <span class="eco-service-chip">Technical Audits</span>
                <span class="eco-service-chip">Rank #1 Focus</span>
              </div>
              <a href="/services/seo-company-pune.html" class="eco-service-link">
                <span>View Service Details</span>
                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              </a>
            </div>
          </article>

          <!-- Card 02: Web Development -->
          <article class="eco-service-card">
            <div>
              <div class="eco-service-head">
                <div class="eco-service-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                </div>
                <span class="eco-service-idx">02 / WEB</span>
              </div>
              <h3 class="eco-service-title">Custom Website Development</h3>
              <p class="eco-service-desc">Fast, custom-coded web architectures that load in under 1.2s, communicate premium positioning, and convert visitors into qualified commercial buyers.</p>
            </div>
            <div>
              <div class="eco-service-chips">
                <span class="eco-service-chip">Next.js &amp; React</span>
                <span class="eco-service-chip">WordPress Engineering</span>
                <span class="eco-service-chip">Sub-Second Speed</span>
              </div>
              <a href="/services/custom-website-development.html" class="eco-service-link">
                <span>View Service Details</span>
                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              </a>
            </div>
          </article>

          <!-- Card 03: Paid Ads (PPC) -->
          <article class="eco-service-card">
            <div>
              <div class="eco-service-head">
                <div class="eco-service-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <span class="eco-service-idx">03 / ADS</span>
              </div>
              <h3 class="eco-service-title">Google &amp; Meta Ads Management</h3>
              <p class="eco-service-desc">Scalable, high-ROAS paid acquisition across Google Search, Performance Max, Meta Ads, and LinkedIn with end-to-end CRM attribution.</p>
            </div>
            <div>
              <div class="eco-service-chips">
                <span class="eco-service-chip">Google Ads PPC</span>
                <span class="eco-service-chip">Meta Retargeting</span>
                <span class="eco-service-chip">4.8x ROAS Goal</span>
              </div>
              <a href="/services/ppc-services.html" class="eco-service-link">
                <span>View Service Details</span>
                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              </a>
            </div>
          </article>

          <!-- Card 04: Social Media -->
          <article class="eco-service-card">
            <div>
              <div class="eco-service-head">
                <div class="eco-service-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </div>
                <span class="eco-service-idx">04 / SOCIAL</span>
              </div>
              <h3 class="eco-service-title">Social Media Marketing (SMM)</h3>
              <p class="eco-service-desc">High-impact visual storytelling, creative campaigns, and community engagement engineered to build brand equity and organic customer trust.</p>
            </div>
            <div>
              <div class="eco-service-chips">
                <span class="eco-service-chip">Content Creation</span>
                <span class="eco-service-chip">Community Growth</span>
                <span class="eco-service-chip">Brand Authority</span>
              </div>
              <a href="/services/social-media-marketing-services.html" class="eco-service-link">
                <span>View Service Details</span>
                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              </a>
            </div>
          </article>

          <!-- Card 05: UI/UX & CRO -->
          <article class="eco-service-card">
            <div>
              <div class="eco-service-head">
                <div class="eco-service-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                </div>
                <span class="eco-service-idx">05 / DESIGN</span>
              </div>
              <h3 class="eco-service-title">UI/UX Design &amp; Conversion (CRO)</h3>
              <p class="eco-service-desc">Systematic behavioral audits, high-fidelity wireframing, and data-driven A/B testing designed to eliminate bounce and lift checkout rates.</p>
            </div>
            <div>
              <div class="eco-service-chips">
                <span class="eco-service-chip">Figma Wireframes</span>
                <span class="eco-service-chip">A/B Testing</span>
                <span class="eco-service-chip">Conversion Lift</span>
              </div>
              <a href="/services/ui-ux-design-services.html" class="eco-service-link">
                <span>View Service Details</span>
                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              </a>
            </div>
          </article>

          <!-- Card 06: AI SEO & GEO -->
          <article class="eco-service-card">
            <div>
              <div class="eco-service-head">
                <div class="eco-service-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3Z"/></svg>
                </div>
                <span class="eco-service-idx">06 / AI SEO</span>
              </div>
              <h3 class="eco-service-title">AI SEO &amp; Generative Engine (GEO)</h3>
              <p class="eco-service-desc">Optimizing your brand for generative AI answer engines like ChatGPT, Google AI Overviews, and Perplexity with semantic entities and knowledge graphs.</p>
            </div>
            <div>
              <div class="eco-service-chips">
                <span class="eco-service-chip">ChatGPT Citations</span>
                <span class="eco-service-chip">Google AI Overviews</span>
                <span class="eco-service-chip">Knowledge Graphs</span>
              </div>
              <a href="/services/ai-seo-services.html" class="eco-service-link">
                <span>View Service Details</span>
                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              </a>
            </div>
          </article>

          <!-- Card 07: E-Commerce -->
          <article class="eco-service-card">
            <div>
              <div class="eco-service-head">
                <div class="eco-service-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                </div>
                <span class="eco-service-idx">07 / E-COM</span>
              </div>
              <h3 class="eco-service-title">E-Commerce Store &amp; Export Systems</h3>
              <p class="eco-service-desc">High-velocity Shopify and WooCommerce digital storefronts with multi-currency pricing, automated WhatsApp lead routing, and frictionless 1-page checkouts.</p>
            </div>
            <div>
              <div class="eco-service-chips">
                <span class="eco-service-chip">Shopify &amp; Woo</span>
                <span class="eco-service-chip">Export Funnels</span>
                <span class="eco-service-chip">WhatsApp Checkout</span>
              </div>
              <a href="/services/ecommerce-website-development-company.html" class="eco-service-link">
                <span>View Service Details</span>
                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              </a>
            </div>
          </article>

          <!-- Card 08: Google 3-Pack -->
          <article class="eco-service-card">
            <div>
              <div class="eco-service-head">
                <div class="eco-service-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <span class="eco-service-idx">08 / LOCAL 3-PACK</span>
              </div>
              <h3 class="eco-service-title">Google 3-Pack &amp; Local Pune Domination</h3>
              <p class="eco-service-desc">Hyperlocal Google Business Profile dominance across Baner, Hinjewadi, Shivaji Nagar, and PCMC to capture 80% of local phone calls and direct visits.</p>
            </div>
            <div>
              <div class="eco-service-chips">
                <span class="eco-service-chip">GMB Optimization</span>
                <span class="eco-service-chip">Pune Citations</span>
                <span class="eco-service-chip">Phone Call Velocity</span>
              </div>
              <a href="/services/google-my-business-services.html" class="eco-service-link">
                <span>View Service Details</span>
                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              </a>
            </div>
          </article>

        </div>

        <!-- Section 3 Bottom CTA Strip -->
        <div class="eco-footer-banner">
          <div>
            <strong>Need a bespoke combination of services?</strong>
            <p>We configure custom multi-disciplinary sprints with transparent fixed pricing and zero lock-in contracts.</p>
          </div>
          <div class="eco-footer-actions">
            <a href="/services.html" class="eco-text-link" style="color:var(--eco-ink); border-color:var(--eco-line);">
              <span>Explore All 27 Services</span>
            </a>
            <a href="/contact.html" class="eco-button">
              <span>Request Service Proposal</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

      </div>
    </section>

    <!-- 4. OPERATING PHILOSOPHY / MANIFESTO (INRANK'S CORE IDENTITY) -->
    <section class="eco-section eco-dark" id="philosophy" aria-labelledby="philosophy-heading">
      <div class="eco-shell">
        <div class="eco-manifesto-grid">
          <div>
            <span class="eco-kicker" style="color:var(--eco-signal);">OUR OPERATING PHILOSOPHY</span>
            <h2 class="eco-heading" id="philosophy-heading">
              Built like an internal growth team.<br />
              <em style="color:var(--eco-signal);font-style:italic;">Priced like an agile agency.</em>
            </h2>
            <p class="eco-copy" style="margin-top:1.5rem;color:#cbd5e1;">
              Most Pune agencies hand client accounts to junior interns after signing the contract. We eliminated account managers, interns, and agency markups entirely.
            </p>
            <p class="eco-copy" style="margin-top:1rem;color:#94a3b8;font-size:0.95rem;">
              At Inrank, you collaborate directly with senior growth architects and full-stack software engineers based at our Baner lab. We measure success by bottom-line commercial impact: qualified sales leads, inbound phone inquiries, Google 3-pack prominence, and verified revenue growth.
            </p>
          </div>

          <div class="eco-manifesto-points">
            <div class="eco-manifesto-point">
              <span class="eco-manifesto-idx">01</span>
              <div>
                <h3>Direct Senior Ownership</h3>
                <p>Zero junior account managers. You speak directly with the engineers shipping your code and tuning your search rankings.</p>
              </div>
            </div>
            <div class="eco-manifesto-point">
              <span class="eco-manifesto-idx">02</span>
              <div>
                <h3>100% Code &amp; Asset Ownership</h3>
                <p>You own every line of code, domain asset, analytics tracking setup, and ad account from Day 1. No hosting hostage or vendor lock-in.</p>
              </div>
            </div>
            <div class="eco-manifesto-point">
              <span class="eco-manifesto-idx">03</span>
              <div>
                <h3>Engineered for Conversion Speed</h3>
                <p>We don't build sluggish theme templates. Every website is engineered for sub-second load times and 90+ Google Lighthouse scores.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. 4-STAGE OPERATING MODEL (INRANK'S PROVEN 4-STEP ENGAGEMENT) -->
    <section class="eco-section product-tour" id="process" aria-labelledby="process-heading">
      <div class="eco-shell">
        <div class="tour-heading">
          <div>
            <span class="eco-kicker">PROVEN METHODOLOGY</span>
            <h2 class="eco-heading" id="process-heading">A simple, proven 4-step engagement.</h2>
          </div>
          <p class="eco-copy">From initial technical audit to revenue scaling, our sprint cycle delivers measurable outcomes within 7 to 14 days.</p>
        </div>

        <div class="eco-stages-grid">
          <div class="eco-stage-card">
            <div>
              <span class="eco-stage-kicker">STAGE 01</span>
              <h3 class="eco-stage-title">Deep Technical Audit &amp; Competitor Teardown</h3>
              <p class="eco-stage-desc">We audit existing Core Web Vitals, Google Maps 3-Pack prominence, competitor backlink profiles, and missed commercial keyword gaps across Pune.</p>
            </div>
            <ul class="eco-stage-list">
              <li>Lighthouse speed diagnostic</li>
              <li>Google 3-pack ranking teardown</li>
              <li>Competitor ad spend intelligence</li>
            </ul>
          </div>

          <div class="eco-stage-card">
            <div>
              <span class="eco-stage-kicker">STAGE 02</span>
              <h3 class="eco-stage-title">Rapid Deployment Sprint (5-7 Days)</h3>
              <p class="eco-stage-desc">Clean-slate website engineering or overhaul built with mobile-first semantic HTML, Schema JSON-LD markup, and high-conversion wireframes.</p>
            </div>
            <ul class="eco-stage-list">
              <li>Sub-second mobile performance</li>
              <li>Complete on-page SEO meta tags</li>
              <li>WhatsApp &amp; CRM lead integration</li>
            </ul>
          </div>

          <div class="eco-stage-card">
            <div>
              <span class="eco-stage-kicker">STAGE 03</span>
              <h3 class="eco-stage-title">Multi-Channel Conversion Tuning &amp; Ads Launch</h3>
              <p class="eco-stage-desc">High-intent Google Search and Meta advertising campaigns launched with server-side conversion tracking, call forwarding, and automated lead routing.</p>
            </div>
            <ul class="eco-stage-list">
              <li>Negative keyword filtering</li>
              <li>High-ROAS audience segmenting</li>
              <li>Dynamic call tracking setup</li>
            </ul>
          </div>

          <div class="eco-stage-card">
            <div>
              <span class="eco-stage-kicker">STAGE 04</span>
              <h3 class="eco-stage-title">Scaled Dominance &amp; Revenue Engineering</h3>
              <p class="eco-stage-desc">Continuous A/B testing, authoritative Pune citation building, Generative Engine Optimization (GEO) for AI search, and weekly revenue reporting.</p>
            </div>
            <ul class="eco-stage-list">
              <li>ChatGPT &amp; Perplexity AI citations</li>
              <li>Google 3-Pack authority expansion</li>
              <li>Weekly commercial P&amp;L review</li>
            </ul>
          </div>
        </div>

        <!-- Growth Tech Stack Strip inside Proven Methodology -->
        <div class="hero-stack-marquee-wrap" style="margin-top:3.5rem;">
          <div class="hero-stack-marquee-box">
            
            <div class="hero-stack-label">
              <span class="hero-stack-label-dot"></span>
              <span>Growth Tech Stack:</span>
            </div>

            <!-- Continuous Infinite Scrolling Track -->
            <div class="hero-stack-marquee-mask">
              <div class="hero-stack-track">

                <!-- 1. Google Ads -->
                <div class="hero-tool-pill">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.784 16.924L8.71 8.391a2.846 2.846 0 013.889-1.042 2.846 2.846 0 011.042 3.889l-4.927 8.533a2.846 2.846 0 01-3.889 1.042 2.846 2.846 0 01-1.041-3.889z" fill="#FBBC04"/>
                    <path d="M20.216 16.924a2.846 2.846 0 01-1.042 3.889 2.846 2.846 0 01-3.889-1.042L10.358 11.24a2.846 2.846 0 011.042-3.889 2.846 2.846 0 013.889 1.042l4.927 8.532z" fill="#4285F4"/>
                    <circle cx="5.32" cy="18.68" r="2.846" fill="#34A853"/>
                  </svg>
                  <span>Google Ads</span>
                </div>

                <!-- 2. GA4 Analytics -->
                <div class="hero-tool-pill">
                  <img src="/tech-stack/google-analytics.webp" alt="GA4 Analytics" height="20" loading="eager" />
                  <span>GA4 Analytics</span>
                </div>

                <!-- 4. Tag Manager -->
                <div class="hero-tool-pill">
                  <img src="/tech-stack/gtm.webp" alt="Tag Manager" height="20" loading="eager" />
                  <span>Tag Manager</span>
                </div>

                <!-- 5. Search Console -->
                <div class="hero-tool-pill">
                  <img src="/tech-stack/google-search-console.webp" alt="Search Console" height="20" loading="eager" />
                  <span>Search Console</span>
                </div>

                <!-- 6. Meta Ads -->
                <div class="hero-tool-pill">
                  <img src="/tech-stack/meta.png" alt="Meta Ads" height="20" loading="eager" />
                  <span>Meta Ads</span>
                </div>

                <!-- 7. Semrush -->
                <div class="hero-tool-pill">
                  <img src="/tech-stack/semrush.png" alt="Semrush" height="20" loading="eager" />
                  <span>Semrush</span>
                </div>

                <!-- 8. Ahrefs -->
                <div class="hero-tool-pill">
                  <img src="/tech-stack/ahrefs.webp" alt="Ahrefs" height="20" loading="eager" />
                  <span>Ahrefs</span>
                </div>

                <!-- 9. WordPress -->
                <div class="hero-tool-pill">
                  <img src="/tech-stack/wordpress.webp" alt="WordPress" height="20" loading="eager" />
                  <span>WordPress</span>
                </div>

                <!-- 10. Shopify -->
                <div class="hero-tool-pill">
                  <img src="/tech-stack/shopify.webp" alt="Shopify" height="20" loading="eager" />
                  <span>Shopify</span>
                </div>

                <!-- 11. ChatGPT -->
                <div class="hero-tool-pill">
                  <img src="/tech-stack/chatgpt.png" alt="ChatGPT" height="20" loading="eager" />
                  <span>ChatGPT</span>
                </div>

                <!-- 12. Perplexity AI -->
                <div class="hero-tool-pill">
                  <img src="/tech-stack/perplexity.png" alt="Perplexity AI" height="20" loading="eager" />
                  <span>Perplexity AI</span>
                </div>

                <!-- 13. HubSpot -->
                <div class="hero-tool-pill">
                  <img src="/tech-stack/hubspot.png" alt="HubSpot" height="20" loading="eager" />
                  <span>HubSpot</span>
                </div>

                <!-- 14. Screaming Frog -->
                <div class="hero-tool-pill">
                  <img src="/tech-stack/screaming-frog.png" alt="Screaming Frog" height="20" loading="eager" />
                  <span>Screaming Frog</span>
                </div>

                <!-- 15. Cloudflare -->
                <div class="hero-tool-pill">
                  <img src="/tech-stack/cloudflare.png" alt="Cloudflare" height="20" loading="eager" />
                  <span>Cloudflare</span>
                </div>

                <!-- 16. Tailwind CSS -->
                <div class="hero-tool-pill">
                  <img src="/tech-stack/tailwind.png" alt="Tailwind CSS" height="20" loading="eager" />
                  <span>Tailwind CSS</span>
                </div>

                <!-- 17. Rank Math -->
                <div class="hero-tool-pill">
                  <img src="/tech-stack/rankmath.png" alt="Rank Math" height="20" loading="eager" />
                  <span>Rank Math</span>
                </div>

                <!-- REPETITION FOR INFINITE SEAMLESS LOOP -->
                <div class="hero-tool-pill">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.784 16.924L8.71 8.391a2.846 2.846 0 013.889-1.042 2.846 2.846 0 011.042 3.889l-4.927 8.533a2.846 2.846 0 01-3.889 1.042 2.846 2.846 0 01-1.041-3.889z" fill="#FBBC04"/>
                    <path d="M20.216 16.924a2.846 2.846 0 01-1.042 3.889 2.846 2.846 0 01-3.889-1.042L10.358 11.24a2.846 2.846 0 011.042-3.889 2.846 2.846 0 013.889 1.042l4.927 8.532z" fill="#4285F4"/>
                    <circle cx="5.32" cy="18.68" r="2.846" fill="#34A853"/>
                  </svg>
                  <span>Google Ads</span>
                </div>
                <div class="hero-tool-pill">
                  <img src="/tech-stack/google-analytics.webp" alt="GA4 Analytics" height="20" loading="eager" />
                  <span>GA4 Analytics</span>
                </div>
                <div class="hero-tool-pill">
                  <img src="/tech-stack/gtm.webp" alt="Tag Manager" height="20" loading="eager" />
                  <span>Tag Manager</span>
                </div>
                <div class="hero-tool-pill">
                  <img src="/tech-stack/google-search-console.webp" alt="Search Console" height="20" loading="eager" />
                  <span>Search Console</span>
                </div>
                <div class="hero-tool-pill">
                  <img src="/tech-stack/meta.png" alt="Meta Ads" height="20" loading="eager" />
                  <span>Meta Ads</span>
                </div>
                <div class="hero-tool-pill">
                  <img src="/tech-stack/semrush.png" alt="Semrush" height="20" loading="eager" />
                  <span>Semrush</span>
                </div>
                <div class="hero-tool-pill">
                  <img src="/tech-stack/ahrefs.webp" alt="Ahrefs" height="20" loading="eager" />
                  <span>Ahrefs</span>
                </div>
                <div class="hero-tool-pill">
                  <img src="/tech-stack/wordpress.webp" alt="WordPress" height="20" loading="eager" />
                  <span>WordPress</span>
                </div>
                <div class="hero-tool-pill">
                  <img src="/tech-stack/shopify.webp" alt="Shopify" height="20" loading="eager" />
                  <span>Shopify</span>
                </div>
                <div class="hero-tool-pill">
                  <img src="/tech-stack/chatgpt.png" alt="ChatGPT" height="20" loading="eager" />
                  <span>ChatGPT</span>
                </div>
                <div class="hero-tool-pill">
                  <img src="/tech-stack/perplexity.png" alt="Perplexity AI" height="20" loading="eager" />
                  <span>Perplexity AI</span>
                </div>
                <div class="hero-tool-pill">
                  <img src="/tech-stack/hubspot.png" alt="HubSpot" height="20" loading="eager" />
                  <span>HubSpot</span>
                </div>
                <div class="hero-tool-pill">
                  <img src="/tech-stack/screaming-frog.png" alt="Screaming Frog" height="20" loading="eager" />
                  <span>Screaming Frog</span>
                </div>
                <div class="hero-tool-pill">
                  <img src="/tech-stack/cloudflare.png" alt="Cloudflare" height="20" loading="eager" />
                  <span>Cloudflare</span>
                </div>
                <div class="hero-tool-pill">
                  <img src="/tech-stack/tailwind.png" alt="Tailwind CSS" height="20" loading="eager" />
                  <span>Tailwind CSS</span>
                </div>
                <div class="hero-tool-pill">
                  <img src="/tech-stack/rankmath.png" alt="Rank Math" height="20" loading="eager" />
                  <span>Rank Math</span>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>

    <!-- 6. INDUSTRY NICHES (INRANK NICHES WE KNOW INSIDE-OUT) -->
    <section class="eco-section" id="niches" aria-labelledby="niches-heading">
      <div class="eco-shell">
        <div class="eco-intro-head">
          <div>
            <span class="eco-kicker">INDUSTRY EXPERTISE</span>
            <h2 class="eco-heading" id="niches-heading">Niches we know inside-out.</h2>
          </div>
          <p class="eco-copy">Tailored growth playbooks designed for the commercial dynamics of Pune's leading sectors.</p>
        </div>

        <div class="eco-niches-grid">
          <div class="eco-niche-card">
            <div class="eco-niche-top">
              <div class="eco-niche-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M3 7l6-4 6 4 6-4v14H3V7zm6 3v4m6-4v4"/></svg>
              </div>
              <span class="eco-niche-sector">SECTOR 01</span>
            </div>
            <h3 class="eco-niche-title">B2B Manufacturing &amp; Industrial</h3>
            <p class="eco-niche-desc">Quotation funnels, technical product catalogs, and global export search visibility for Bhosari, Chakan &amp; PCMC manufacturers.</p>
          </div>

          <div class="eco-niche-card">
            <div class="eco-niche-top">
              <div class="eco-niche-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5v16"/></svg>
              </div>
              <span class="eco-niche-sector">SECTOR 02</span>
            </div>
            <h3 class="eco-niche-title">Clinics &amp; Healthcare Providers</h3>
            <p class="eco-niche-desc">Google Maps 3-Pack dominance, direct WhatsApp appointment booking, and local medical schema for Pune specialists.</p>
          </div>

          <div class="eco-niche-card">
            <div class="eco-niche-top">
              <div class="eco-niche-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              </div>
              <span class="eco-niche-sector">SECTOR 03</span>
            </div>
            <h3 class="eco-niche-title">Professional Services &amp; Advisory</h3>
            <p class="eco-niche-desc">Authority-building content architectures and Google Search lead pipelines for legal, financial, and corporate firms.</p>
          </div>

          <div class="eco-niche-card">
            <div class="eco-niche-top">
              <div class="eco-niche-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>
              </div>
              <span class="eco-niche-sector">SECTOR 04</span>
            </div>
            <h3 class="eco-niche-title">Real Estate Developers &amp; Architecture</h3>
            <p class="eco-niche-desc">High-conversion project landing pages, luxury presentation, and targeted NRI buyer lead campaigns across Pune corridors.</p>
          </div>

          <div class="eco-niche-card">
            <div class="eco-niche-top">
              <div class="eco-niche-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              </div>
              <span class="eco-niche-sector">SECTOR 05</span>
            </div>
            <h3 class="eco-niche-title">Consumer Brands &amp; E-Commerce</h3>
            <p class="eco-niche-desc">Sub-second store architectures, Meta &amp; Google catalog ads, and retention funnels built to scale repeat orders.</p>
          </div>

          <div class="eco-niche-card">
            <div class="eco-niche-top">
              <div class="eco-niche-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/><circle cx="12" cy="12" r="4"/></svg>
              </div>
              <span class="eco-niche-sector">SECTOR 06</span>
            </div>
            <h3 class="eco-niche-title">High-Ticket Local Services</h3>
            <p class="eco-niche-desc">Dominating high-intent local search queries to capture customers actively seeking immediate, high-value assistance.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. PROOF & BIG NUMBERS (INRANK REAL NUMBERS) -->
    <section class="eco-section eco-dark" id="proof" aria-labelledby="proof-heading">
      <div class="eco-shell">
        <div class="eco-proof-wrap">
          <div class="eco-proof-left">
            <span class="eco-kicker" style="color:var(--eco-signal);">PROVABLE IMPACT</span>
            <h2 class="eco-heading" id="proof-heading">Numbers that move P&amp;Ls, not just dashboards.</h2>
            <p class="eco-copy" style="color:#cbd5e1; margin-top:1.25rem;">Measured commercial outcomes achieved for ambitious brands across Pune, Mumbai, and national markets.</p>
            
            <div class="eco-proof-highlights">
              <div class="eco-highlight-box">
                <strong class="eco-highlight-val">50+</strong>
                <span class="eco-highlight-lbl">Pune Deployments</span>
                <small class="eco-highlight-sub">Live Production Portals</small>
              </div>
              <div class="eco-highlight-box">
                <strong class="eco-highlight-val">4.9★</strong>
                <span class="eco-highlight-lbl">Client Rating</span>
                <small class="eco-highlight-sub">Google &amp; Justdial Verified</small>
              </div>
            </div>
          </div>

          <div class="eco-proof-facts">
            <div class="eco-fact-card">
              <div class="eco-fact-head">
                <strong class="eco-fact-stat">₹14.2M+</strong>
                <span class="eco-fact-tag">REVENUE</span>
              </div>
              <span class="eco-fact-title">Client Revenue Influenced</span>
              <p class="eco-fact-desc">Direct commercial revenue generated through high-intent search rankings, conversion web platforms, and paid ad campaigns.</p>
            </div>
            <div class="eco-fact-card">
              <div class="eco-fact-head">
                <strong class="eco-fact-stat">+318%</strong>
                <span class="eco-fact-tag">ORGANIC</span>
              </div>
              <span class="eco-fact-title">Average Organic Traffic Surge</span>
              <p class="eco-fact-desc">Average organic search impression and click growth delivered within 90 days of technical deployment.</p>
            </div>
            <div class="eco-fact-card">
              <div class="eco-fact-head">
                <strong class="eco-fact-stat">&lt; 1.2s</strong>
                <span class="eco-fact-tag">SPEED</span>
              </div>
              <span class="eco-fact-title">Page Load Speed</span>
              <p class="eco-fact-desc">Sub-second average mobile render speed across our client portfolio, maintaining Google Lighthouse 90+.</p>
            </div>
            <div class="eco-fact-card">
              <div class="eco-fact-head">
                <strong class="eco-fact-stat">4.8x</strong>
                <span class="eco-fact-tag">ROAS</span>
              </div>
              <span class="eco-fact-title">Average Return on Ad Spend</span>
              <p class="eco-fact-desc">High-intent Google and Meta ad funnels engineered for profitable customer acquisition.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 8. WORK SHOWCASE & CASE STUDIES (INRANK REAL CASE STUDIES) -->
    <section class="eco-section" id="our-work" aria-labelledby="work-heading">
      <div class="eco-shell">
        <div class="eco-intro-head">
          <div>
            <span class="eco-kicker">COMMERCIAL PORTFOLIO</span>
            <h2 class="eco-heading" id="work-heading">Real websites. Engineered for commercial dominance.</h2>
          </div>
          <p class="eco-copy">Substantiated outcomes. Not empty marketing adjectives. Explore our recent deployments.</p>
        </div>

        <div class="eco-work-grid">
          <!-- Work Card 1: Greytothegreen -->
          <article class="eco-work-card">
            <div class="eco-work-media">
              <img src="/portfolio/screenshots/greytothegreen.webp" alt="Greytothegreen Case Study" loading="lazy" />
              <span class="eco-work-pill">SEO &amp; WEB</span>
            </div>
            <div class="eco-work-body">
              <div>
                <span class="eco-work-category">LANDSCAPE ARCHITECTURE · PUNE</span>
                <h3 class="eco-work-title">Greytothegreen Environmental Platform</h3>
                <p class="eco-work-desc">Engineered sub-second web architecture and dominated competitive Pune landscaping search rankings.</p>
              </div>
              <div class="eco-work-footer">
                <span class="eco-work-metric">+340% Organic Reach</span>
                <a href="/our-work/greytothegreen.html" class="eco-work-link">
                  <span>View Record</span>
                  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
                </a>
              </div>
            </div>
          </article>

          <!-- Work Card 2: Shetkari Foodstuff -->
          <article class="eco-work-card">
            <div class="eco-work-media">
              <img src="/portfolio/screenshots/shetkarifoodstuff.webp" alt="Shetkari Foodstuff Case Study" loading="lazy" />
              <span class="eco-work-pill">E-COMMERCE &amp; ADS</span>
            </div>
            <div class="eco-work-body">
              <div>
                <span class="eco-work-category">AGRI-EXPORT &amp; D2C · MAHARASHTRA</span>
                <h3 class="eco-work-title">Shetkari Foodstuff Direct Storefront</h3>
                <p class="eco-work-desc">Turned wholesale agro products into a thriving direct-to-consumer digital ordering channel with high-ROAS ads.</p>
              </div>
              <div class="eco-work-footer">
                <span class="eco-work-metric">₹4.2L New Sales / Mo</span>
                <a href="/our-work/shetkarifoodstuff.html" class="eco-work-link">
                  <span>View Record</span>
                  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
                </a>
              </div>
            </div>
          </article>

          <!-- Work Card 3: Cytos Health -->
          <article class="eco-work-card">
            <div class="eco-work-media">
              <img src="/portfolio/screenshots/cytos.webp" alt="Cytos Health Case Study" loading="lazy" />
              <span class="eco-work-pill">LOCAL SEO &amp; CRO</span>
            </div>
            <div class="eco-work-body">
              <div>
                <span class="eco-work-category">CLINICAL HEALTHCARE · PUNE</span>
                <h3 class="eco-work-title">Cytos Diagnostic &amp; Patient Portal</h3>
                <p class="eco-work-desc">Deployed Google Maps 3-Pack authority system and WhatsApp appointment booking infrastructure across Pune.</p>
              </div>
              <div class="eco-work-footer">
                <span class="eco-work-metric">Top 3 Google 3-Pack</span>
                <a href="/our-work/cytos.html" class="eco-work-link">
                  <span>View Record</span>
                  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
                </a>
              </div>
            </div>
          </article>

          <!-- Work Card 4: Fludio Design -->
          <article class="eco-work-card">
            <div class="eco-work-media">
              <img src="/portfolio/screenshots/fludio.webp" alt="Fludio Design Waterscapes Case Study" loading="lazy" />
              <span class="eco-work-pill">HIGH-PERFORMANCE WEB</span>
            </div>
            <div class="eco-work-body">
              <div>
                <span class="eco-work-category">ARCHITECTURAL DESIGN · PUNE</span>
                <h3 class="eco-work-title">Fludio Architectural Waterscapes</h3>
                <p class="eco-work-desc">Architectural musical fountains and water choreography portfolio engineered for high-ticket commercial inquiries.</p>
              </div>
              <div class="eco-work-footer">
                <span class="eco-work-metric">+240% Inbound Inquiries</span>
                <a href="/our-work/fludio.html" class="eco-work-link">
                  <span>View Record</span>
                  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- 9. COMPARISON MATRIX (INRANK VS LEGACY PUNE AGENCIES) -->
    <section class="eco-section product-tour" id="comparison" aria-labelledby="comparison-heading">
      <div class="eco-shell">
        <div class="tour-heading">
          <div>
            <span class="eco-kicker">THE INRANK DIFFERENCE</span>
            <h2 class="eco-heading" id="comparison-heading">How Inrank outperforms legacy Pune agencies.</h2>
          </div>
          <p class="eco-copy">A clear, objective look at how our direct engineering model delivers higher ROI than traditional retainers.</p>
        </div>

        <div class="eco-comparison-card">
          <table class="eco-comparison-table">
            <thead>
              <tr>
                <th>Evaluation Metric</th>
                <th class="col-highlight">Inrank Technologies</th>
                <th>Traditional Agencies</th>
                <th>Freelancers / Solo Devs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Code &amp; Asset Ownership</strong></td>
                <td class="col-highlight"><span class="eco-badge-good">100% Client Owned</span></td>
                <td>Held hostage on proprietary CMS / lock-in</td>
                <td>Scattered across personal accounts</td>
              </tr>
              <tr>
                <td><strong>Account Accountability</strong></td>
                <td class="col-highlight"><span class="eco-badge-good">Direct Senior Engineers</span></td>
                <td>Handed to junior interns / account reps</td>
                <td>Solo operator with limited scope</td>
              </tr>
              <tr>
                <td><strong>Speed &amp; Performance</strong></td>
                <td class="col-highlight"><span class="eco-badge-good">Sub-second / 90+ Lighthouse</span></td>
                <td>Heavy, bloated WordPress templates</td>
                <td>Inconsistent code quality</td>
              </tr>
              <tr>
                <td><strong>Search &amp; AI Dominance</strong></td>
                <td class="col-highlight"><span class="eco-badge-good">Technical SEO + GMB 3-Pack + GEO</span></td>
                <td>Basic keyword stuffing in meta tags</td>
                <td>Rarely addressed</td>
              </tr>
              <tr>
                <td><strong>Deployment Turnaround</strong></td>
                <td class="col-highlight"><span class="eco-badge-good">5 - 7 Days Guaranteed Sprint</span></td>
                <td>6 to 12 weeks of committee meetings</td>
                <td>Unpredictable delays &amp; ghosting</td>
              </tr>
              <tr>
                <td><strong>Pricing Model</strong></td>
                <td class="col-highlight"><span class="eco-badge-good">Fixed Transparent Sprints (from ₹11,999)</span></td>
                <td>Expensive recurring retainers + markups</td>
                <td>Cheap upfront, expensive to rewrite</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- 10. PEOPLE & BANER LAB (INRANK FOUNDER & ENGINEERING TEAM) -->
    <section class="eco-section" id="about" aria-labelledby="about-heading">
      <div class="eco-shell">
        <div class="eco-founder-card">
          <div class="eco-founder-profile">
            <img src="/images/lead-growth-engineer.jpg" alt="Prasad Mhaske - Founder & Lead Growth Architect, Inrank Technologies" class="eco-founder-avatar" />
            <h3 class="eco-founder-name">Prasad Mhaske</h3>
            <span class="eco-founder-role">Founder &amp; Lead Growth Architect</span>
            <span class="eco-founder-location">Baner Engineering Lab, Pune</span>
          </div>
          <div class="eco-founder-quote-wrap">
            <blockquote class="eco-founder-quote">
              "When you hire Inrank, you don't get passed to an account manager who learned marketing last month. With 8+ years executing high-performance technical SEO, custom web architectures, and full-funnel CRO across Maharashtra, our engineering leadership directly directs strategy, reviews code, and optimizes campaigns for every client."
            </blockquote>
            <div class="eco-founder-actions">
              <a href="https://wa.me/918788823182" target="_blank" rel="noopener noreferrer" class="eco-button">
                <span>Message Lead Architect on WhatsApp</span>
                <span aria-hidden="true">↗</span>
              </a>
              <a href="/about.html" class="eco-text-link" style="color:var(--eco-ink); border-color:var(--eco-line);">
                <span>Read About Our Baner Lab</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 11. TESTIMONIALS (VERBATIM CLIENT QUOTES) -->
    <section class="eco-section eco-dark" id="testimonials" aria-labelledby="testimonials-heading">
      <div class="eco-shell">
        <div class="eco-intro-head">
          <div>
            <span class="eco-kicker" style="color:var(--eco-signal);">CLIENT REVIEWS</span>
            <h2 class="eco-heading" id="testimonials-heading" style="color:#ffffff;">What founders actually say.</h2>
          </div>
          <p class="eco-copy" style="color:#cbd5e1;">Feedback from business owners and marketing heads who scaled their digital revenue with Inrank.</p>
        </div>

        <div class="eco-testi-grid">
          <figure class="eco-testi-card">
            <div class="eco-testi-stars">★★★★★</div>
            <blockquote class="eco-testi-body">
              "Finally an agency that ships fast and reports honestly. The SEO work alone brought us 38 buyer-intent keywords into the top 3 of Google for our Pune landscape architecture firm."
            </blockquote>
            <figcaption class="eco-testi-author">
              <img src="/images/client-neha-patil.jpg" alt="Dr. Neha Patil" class="eco-testi-avatar" />
              <div>
                <strong class="eco-testi-name">Dr. Neha Patil</strong>
                <span class="eco-testi-role">Co-Founder, Greytothegreen</span>
              </div>
            </figcaption>
          </figure>

          <figure class="eco-testi-card">
            <div class="eco-testi-stars">★★★★★</div>
            <blockquote class="eco-testi-body">
              "Inrank transformed our web presence completely. Within 60 days of launching the new site, our inbound inquiries from Pune and Mumbai tripled. The speed difference alone is night and day."
            </blockquote>
            <figcaption class="eco-testi-author">
              <img src="/images/client-aditya-shah.jpg" alt="Aditya Shah" class="eco-testi-avatar" />
              <div>
                <strong class="eco-testi-name">Aditya Shah</strong>
                <span class="eco-testi-role">Marketing Head, Real Estate Developer</span>
              </div>
            </figcaption>
          </figure>

          <figure class="eco-testi-card">
            <div class="eco-testi-stars">★★★★★</div>
            <blockquote class="eco-testi-body">
              "Their fixed pricing and 7-day turnaround are unheard of in Pune. Prasad and his team delivered an e-commerce platform that generated sales in its very first month."
            </blockquote>
            <figcaption class="eco-testi-author">
              <img src="/images/client-rhea-kulkarni.jpg" alt="Rhea Kulkarni" class="eco-testi-avatar" />
              <div>
                <strong class="eco-testi-name">Rhea Kulkarni</strong>
                <span class="eco-testi-role">Director, E-Commerce Brand</span>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- 12. LEAD MAGNET (INRANK 2026 CHECKLIST) -->
    <section class="eco-section" id="lead-magnet" style="padding-top:0;" aria-labelledby="lead-magnet-heading">
      <div class="eco-shell">
        <div class="eco-lead-magnet-card">
          <span class="eco-kicker" style="color:var(--eco-signal); margin-bottom:0.75rem;">FREE PUNE AGENCY RESOURCE</span>
          <h2 class="eco-heading" id="lead-magnet-heading" style="color:#ffffff; margin:0 auto; max-width:800px;">Download the 2026 Pune SEO &amp; AI Search Growth Checklist.</h2>
          <p class="eco-copy" style="color:#94a3b8; max-width:620px; margin:1rem auto 0; font-size:1rem;">The exact 45-point checklist we use to audit Core Web Vitals, Google Maps 3-Pack prominence, entity schemas and ChatGPT / Perplexity search citations. No generic fluff.</p>

          <form onsubmit="event.preventDefault(); alert('Checklist sent to your inbox! Thank you for connecting with Inrank Technologies.');" class="eco-lead-magnet-form">
            <input type="email" placeholder="Enter your business email" required class="eco-lead-magnet-input" />
            <button type="submit" class="eco-button" style="border:none; cursor:pointer;">
              <span>Get Free Checklist</span>
              <span aria-hidden="true">↗</span>
            </button>
          </form>
          <p class="eco-lead-magnet-sub">100% Free · Instant PDF Access · Zero Spam Guarantee</p>
        </div>
      </div>
    </section>

    <!-- 13. PRICING ARCHITECTURE (INRANK FIXED-PRICE PACKAGES) -->
    <section class="eco-section" id="pricing" aria-labelledby="pricing-heading">
      <div class="eco-shell">
        <div style="text-align:center; max-width:820px; margin:0 auto 3rem;">
          <span class="eco-kicker">TRANSPARENT PACKAGES &amp; PRICING</span>
          <h2 class="eco-heading" id="pricing-heading" style="max-width:100%; margin:0 auto 1rem;">Fixed-Price Websites &amp; Growth Retainers. <em style="color:var(--eco-terra);font-style:italic;">No Surprises.</em></h2>
          <p class="eco-copy" style="max-width:680px; margin:0 auto;">Every website includes free cloud hosting, SSL, domain, business emails, and 365 days of post-launch support. SEO and social media plans are simple monthly retainers with zero lock-in contracts.</p>
        </div>

        <!-- Category Switcher Tabs -->
        <div class="eco-pricing-tabs-wrap">
          <div class="eco-pricing-tabs-bar" id="pricing-tabs" role="tablist">
            <button type="button" class="pricing-tab-btn active eco-pricing-tab-btn" data-tab="tab-web" role="tab" aria-selected="true">Website Development</button>
            <button type="button" class="pricing-tab-btn eco-pricing-tab-btn" data-tab="tab-seo" role="tab" aria-selected="false">SEO Retainers</button>
            <button type="button" class="pricing-tab-btn eco-pricing-tab-btn" data-tab="tab-social" role="tab" aria-selected="false">Social Media &amp; Reels</button>
          </div>
        </div>

        <!-- ══════════════ TAB 1: WEBSITE DEVELOPMENT ══════════════ -->
        <div id="tab-web" class="pricing-content-panel" role="tabpanel">
          <div class="eco-pricing-grid">
            
            <!-- Starter Website -->
            <div class="eco-pricing-card">
              <div>
                <span class="eco-tier-kicker">STARTER WEBSITE</span>
                <h3 class="eco-tier-name">Starter Website</h3>
                <p class="eco-tier-desc">Ideal for new and local service businesses needing a professional, Google-ready online presence quickly.</p>
                <div class="eco-tier-price-row">
                  <span class="eco-tier-price">₹11,999</span>
                  <span class="eco-tier-period">/ one-time · 5-7 days</span>
                </div>
                <ul class="eco-tier-features">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>Up to <strong>10 custom mobile-first pages</strong></span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span><strong>Free 1st-year NVMe Cloud Hosting</strong> &amp; SSL</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span><strong>2 Business Email Addresses</strong> included</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>Google Business Profile local map sync</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>WhatsApp chat &amp; click-to-call buttons</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>Speed-optimized build (<strong>95+ PageSpeed</strong>)</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span><strong>365 Days of Post-Launch Support</strong></span>
                  </li>
                </ul>
              </div>
              <a href="/contact.html?plan=Starter-Website" class="eco-text-link" style="color:var(--eco-ink); border-color:var(--eco-line); justify-content:center; width:100%; box-sizing:border-box;">Choose Starter Website</a>
            </div>

            <!-- Growth Business Website (Featured) -->
            <div class="eco-pricing-card featured">
              <div>
                <span class="eco-tier-kicker">MOST POPULAR IN PUNE</span>
                <h3 class="eco-tier-name">Growth Business</h3>
                <p class="eco-tier-desc">For established businesses, doctors, and consultancies wanting to generate inbound inquiries from Pune searchers.</p>
                <div class="eco-tier-price-row">
                  <span class="eco-tier-price">₹16,999</span>
                  <span class="eco-tier-period">/ one-time · 7-10 days</span>
                </div>
                <ul class="eco-tier-features">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>Up to <strong>20 custom responsive pages</strong></span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span><strong>Free 1st-year NVMe Cloud Hosting</strong> &amp; SSL</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span><strong>5 Business Email Addresses</strong> included</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>On-page Technical SEO &amp; Pune Schema Markup</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>Dynamic Blog / News management CMS</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>Google Analytics 4 &amp; Conversion Event tracking</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span><strong>365 Days Dedicated Senior Support</strong></span>
                  </li>
                </ul>
              </div>
              <a href="/contact.html?plan=Growth-Business" class="eco-button" style="justify-content:center; width:100%; box-sizing:border-box;">Choose Growth Business ↗</a>
            </div>

            <!-- Custom / E-Commerce -->
            <div class="eco-pricing-card">
              <div>
                <span class="eco-tier-kicker">COMMERCIAL SCALE</span>
                <h3 class="eco-tier-name">Custom E-Commerce</h3>
                <p class="eco-tier-desc">Full-featured online stores, catalog portals, or custom platforms with complete payment integration.</p>
                <div class="eco-tier-price-row">
                  <span class="eco-tier-price">₹21,999</span>
                  <span class="eco-tier-period">/ one-time · 10-15 days</span>
                </div>
                <ul class="eco-tier-features">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>Unlimited Products &amp; Category layout</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>Razorpay, Stripe, UPI &amp; COD payment gateways</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>Customer Accounts, Cart &amp; Order tracking</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>E-commerce SEO Architecture &amp; Product Schema</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>Abandoned Cart recovery via WhatsApp</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>Inventory Management &amp; Invoicing setup</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span><strong>365 Days Post-Launch SLA Support</strong></span>
                  </li>
                </ul>
              </div>
              <a href="/contact.html?plan=Custom-Ecommerce" class="eco-text-link" style="color:var(--eco-ink); border-color:var(--eco-line); justify-content:center; width:100%; box-sizing:border-box;">Choose Custom E-Commerce</a>
            </div>

          </div>
        </div>

        <!-- ══════════════ TAB 2: SEO RETAINERS ══════════════ -->
        <div id="tab-seo" class="pricing-content-panel is-hidden" role="tabpanel">
          <div class="eco-pricing-grid">
            
            <!-- Local SEO -->
            <div class="eco-pricing-card">
              <div>
                <span class="eco-tier-kicker">LOCAL DOMINANCE</span>
                <h3 class="eco-tier-name">Local SEO</h3>
                <p class="eco-tier-desc">For clinics, retail stores, and service companies looking to dominate local Google Maps &amp; "near me" searches.</p>
                <div class="eco-tier-price-row">
                  <span class="eco-tier-price">₹11,999</span>
                  <span class="eco-tier-period">/ month · zero lock-in</span>
                </div>
                <ul class="eco-tier-features">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>Google Business Profile (GBP) 3-Pack Optimization</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>15 Target local keywords tracked &amp; optimized</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>25+ High-authority Pune directory citations</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>Monthly Google Maps reviews &amp; citation building</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>On-page technical SEO tune-ups</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>Monthly Rankings &amp; Direct Call Report</span>
                  </li>
                </ul>
              </div>
              <a href="/contact.html?plan=Local-SEO" class="eco-text-link" style="color:var(--eco-ink); border-color:var(--eco-line); justify-content:center; width:100%; box-sizing:border-box;">Start Local SEO</a>
            </div>

            <!-- Growth SEO (Featured) -->
            <div class="eco-pricing-card featured">
              <div>
                <span class="eco-tier-kicker">MOST POPULAR RETAINER</span>
                <h3 class="eco-tier-name">Growth SEO</h3>
                <p class="eco-tier-desc">Scaling organic traffic, inbound leads, and commercial search queries across Pune &amp; Maharashtra.</p>
                <div class="eco-tier-price-row">
                  <span class="eco-tier-price">₹18,999</span>
                  <span class="eco-tier-period">/ month · zero lock-in</span>
                </div>
                <ul class="eco-tier-features">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>Everything in Local SEO Plan included</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>35 Target commercial &amp; long-tail keywords</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>2 High-Authority Long-Form SEO Articles (1,500+ w) / mo</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>Technical Core Web Vitals maintenance &amp; schema</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>Competitor backlink gap analysis &amp; outreach</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>AI Search &amp; GEO optimization (ChatGPT, Perplexity citations)</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>Bi-weekly ranking reports &amp; strategist check-ins</span>
                  </li>
                </ul>
              </div>
              <a href="/contact.html?plan=Growth-SEO" class="eco-button" style="justify-content:center; width:100%; box-sizing:border-box;">Start Growth SEO ↗</a>
            </div>

            <!-- Market Authority SEO -->
            <div class="eco-pricing-card">
              <div>
                <span class="eco-tier-kicker">PAN-INDIA DOMINANCE</span>
                <h3 class="eco-tier-name">Market Authority SEO</h3>
                <p class="eco-tier-desc">State-wide or pan-India market share across high-volume search queries and competitive verticals.</p>
                <div class="eco-tier-price-row">
                  <span class="eco-tier-price">₹27,999</span>
                  <span class="eco-tier-period">/ month · zero lock-in</span>
                </div>
                <ul class="eco-tier-features">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>Everything in Growth SEO Plan included</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>75+ Pan-India &amp; high-difficulty keywords</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>4 Premium Long-Form Articles + Case Studies / mo</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>High-authority PR &amp; contextual editorial backlinks</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>Full Schema Graph (Org, Article, LocalBusiness, FAQ)</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>Answer Engine Optimization (AEO) for AI engines</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>Dedicated Senior Growth Lead &amp; weekly sprints</span>
                  </li>
                </ul>
              </div>
              <a href="/contact.html?plan=Market-Authority-SEO" class="eco-text-link" style="color:var(--eco-ink); border-color:var(--eco-line); justify-content:center; width:100%; box-sizing:border-box;">Start Market Authority</a>
            </div>

          </div>
        </div>

        <!-- ══════════════ TAB 3: SOCIAL MEDIA & REELS ══════════════ -->
        <div id="tab-social" class="pricing-content-panel is-hidden" role="tabpanel">
          <div class="eco-pricing-grid">
            
            <!-- Social Starter -->
            <div class="eco-pricing-card">
              <div>
                <span class="eco-tier-kicker">ORGANIC LAUNCH</span>
                <h3 class="eco-tier-name">Social Launch</h3>
                <p class="eco-tier-desc">For businesses wanting an active, professional presence across Instagram and Facebook.</p>
                <div class="eco-tier-price-row">
                  <span class="eco-tier-price">₹11,499</span>
                  <span class="eco-tier-period">/ month · zero lock-in</span>
                </div>
                <ul class="eco-tier-features">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span><strong>12 Custom On-Brand Creatives</strong> / month</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>Monthly Content Calendar &amp; Researched Hashtags</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>Profile &amp; Bio Conversion Audit</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>Caption copywriting &amp; comment monitoring</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>Monthly Performance &amp; Engagement Report</span>
                  </li>
                </ul>
              </div>
              <a href="/contact.html?plan=Social-Launch" class="eco-text-link" style="color:var(--eco-ink); border-color:var(--eco-line); justify-content:center; width:100%; box-sizing:border-box;">Start Social Launch</a>
            </div>

            <!-- Social & Reels Growth (Featured) -->
            <div class="eco-pricing-card featured">
              <div>
                <span class="eco-tier-kicker">MOST POPULAR RETAINER</span>
                <h3 class="eco-tier-name">Social &amp; Reels Growth</h3>
                <p class="eco-tier-desc">For brands wanting consistent organic customer inquiries and high-reach Instagram Reels.</p>
                <div class="eco-tier-price-row">
                  <span class="eco-tier-price">₹16,999</span>
                  <span class="eco-tier-period">/ month · zero lock-in</span>
                </div>
                <ul class="eco-tier-features">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span><strong>15 Custom Posts + 6 Trending Reels</strong> / mo</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>Hook Writing, Video Editing &amp; Audio Selection</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>Google Business Profile SEO updates</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>Community DM &amp; Lead Comment Engagement</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>Paid Ad Campaign Setup &amp; A/B testing (Ad spend extra)</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>Bi-weekly content review &amp; performance check-ins</span>
                  </li>
                </ul>
              </div>
              <a href="/contact.html?plan=Social-Reels-Growth" class="eco-button" style="justify-content:center; width:100%; box-sizing:border-box;">Start Social &amp; Reels ↗</a>
            </div>

            <!-- Brand Scale -->
            <div class="eco-pricing-card">
              <div>
                <span class="eco-tier-kicker">MULTI-CHANNEL DOMINANCE</span>
                <h3 class="eco-tier-name">Brand Scale</h3>
                <p class="eco-tier-desc">Full multi-channel management across Instagram, LinkedIn, Facebook, and YouTube Shorts.</p>
                <div class="eco-tier-price-row">
                  <span class="eco-tier-price">₹26,999</span>
                  <span class="eco-tier-period">/ month · zero lock-in</span>
                </div>
                <ul class="eco-tier-features">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span><strong>22 Custom Posts + 10 High-Retention Reels</strong> / mo</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>Multi-channel posting (Instagram, LinkedIn, FB, Shorts)</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>Full Meta &amp; LinkedIn Ad Strategy Execution</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>High-converting sales funnel creatives</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#009d49" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                    <span>Fortnightly Growth &amp; Creative Strategy Call</span>
                  </li>
                </ul>
              </div>
              <a href="/contact.html?plan=Brand-Scale" class="eco-text-link" style="color:var(--eco-ink); border-color:var(--eco-line); justify-content:center; width:100%; box-sizing:border-box;">Start Brand Scale</a>
            </div>

          </div>
        </div>

        <!-- Value Guarantee & Add-Ons Bar -->
        <div class="eco-pricing-guarantee">
          <div>
            <h4>Transparent Add-Ons &amp; Renewals</h4>
            <p>
              Extra pages: <strong>₹999/page</strong> · Hosting &amp; SSL renewal after year 1: <strong>₹3,999/year</strong> · 100% Client Code &amp; Domain Ownership.
            </p>
          </div>
          <div class="eco-footer-actions">
            <a href="tel:+918788823182" class="eco-text-link" style="color:var(--eco-ink); border-color:var(--eco-line);">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#009d49" stroke-width="2.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>+91 87888 23182</span>
            </a>
            <a href="/contact.html" class="eco-button">
              <span>Request Custom Proposal</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

      </div>
    </section>

    <!-- 14. FAQ ACCORDION (INRANK REAL FAQS) -->
    <section class="eco-section eco-answer-section" id="faq" aria-labelledby="faq-heading">
      <div class="eco-shell answer-grid">
        <div>
          <span class="eco-kicker">COMMON QUESTIONS</span>
          <h2 class="eco-heading" id="faq-heading">Quick answers before the call.</h2>
          <p class="eco-copy">
            Transparent answers about our fixed-price sprints, code ownership, and Pune engineering process.
          </p>
        </div>

        <div class="answer-list">
          <details open>
            <summary>How quickly can Inrank launch our new website?<span aria-hidden="true">+</span></summary>
            <p>Our Starter Sprint is deployed within 5 to 7 business days. Complex custom builds with e-commerce or dynamic CMS integrations take between 10 and 14 days. We work in dedicated, uninterrupted sprints to meet every launch deadline guaranteed.</p>
          </details>

          <details>
            <summary>Do we own the website source code and ad accounts?<span aria-hidden="true">+</span></summary>
            <p>100% yes. From Day 1, you own every line of HTML, CSS, JavaScript, media assets, domain DNS, and advertising accounts. We never hold your digital assets hostage or use proprietary lock-in platforms.</p>
          </details>

          <details>
            <summary>How does Inrank help our business rank #1 on Google in Pune?<span aria-hidden="true">+</span></summary>
            <p>We combine sub-second page performance (90+ Core Web Vitals) with Google Business Profile 3-Pack optimization, high-authority localized Pune citation building, and structured schema graphs. This dual-engine approach ensures Google and generative AI engines (ChatGPT, Perplexity) reward your site over slow competitor templates.</p>
          </details>

          <details>
            <summary>What is included in the ₹11,999 Starter Sprint?<span aria-hidden="true">+</span></summary>
            <p>It includes up to 5 custom-engineered pages, responsive mobile architecture, 90+ Lighthouse speed score, complete technical on-page SEO tags, WhatsApp chat integration, contact form routing, and 30 days of post-launch engineering support.</p>
          </details>

          <details>
            <summary>Can you manage our Google Ads and Meta campaigns too?<span aria-hidden="true">+</span></summary>
            <p>Yes. We build high-converting dedicated landing pages and manage paid ad campaigns with strict focus on ROAS and cost-per-qualified-lead. We filter out junk search terms and tune conversion funnels to maximize sales efficiency.</p>
          </details>

          <details>
            <summary>Where is Inrank located, and can we meet in person?<span aria-hidden="true">+</span></summary>
            <p>Our primary engineering lab is in Baner, Pune, with client meeting desks at FC Road, Shivaji Nagar. We welcome in-person consultations or rapid Google Meet strategy calls at your convenience.</p>
          </details>
        </div>
      </div>
    </section>

    <!-- 15. DUAL CLOSING CARDS (INRANK CLOSING CTAs) -->
    <section class="eco-section eco-closing" id="contact" aria-labelledby="closing-heading">
      <div class="eco-shell">
        <span class="eco-kicker" style="color:var(--eco-signal); margin-bottom:1.5rem;">TAKE THE NEXT STEP</span>
        <div class="closing-grid">
          
          <!-- Card 1: Dark Glass Navy Card -->
          <div class="eco-close-card dark">
            <div>
              <h3 id="closing-heading">Ready to turn search traffic into predictable revenue?</h3>
              <p>Talk directly to our senior growth engineering pod about your business goals, target keywords, and market expansion across Pune.</p>
            </div>
            <a href="/contact.html" class="btn">
              <span>Book a Free 30-Min Strategy Call</span>
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
            </a>
          </div>

          <!-- Card 2: Light Clean Card -->
          <div class="eco-close-card light">
            <div>
              <h3>Speak directly with an engineer, not a salesperson.</h3>
              <p>Schedule a 30-minute direct technical consultation with Prasad Mhaske at our Baner lab or over Google Meet.</p>
            </div>
            <div style="display:flex; flex-direction:column; gap:12px;">
              <a href="https://wa.me/918788823182" target="_blank" rel="noopener noreferrer" class="btn">
                <span>Message on WhatsApp (+91 87888 23182)</span>
                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
              </a>
              <a href="tel:+918788823182" style="font-size:0.9rem; color:var(--eco-ink); text-decoration:none; font-weight:600; display:inline-flex; align-items:center; gap:6px; margin-top:4px;">
                <span>Or call directly: <strong>+91 87888 23182</strong></span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
`;

const updatedContent = content.slice(0, startIndex) + replacement + content.slice(endIndex + '    </section>'.length);
fs.writeFileSync(indexPath, updatedContent, 'utf8');
console.log("Successfully updated inrank2.0/index.html with modern Vinove Prism ecosystem sections!");

