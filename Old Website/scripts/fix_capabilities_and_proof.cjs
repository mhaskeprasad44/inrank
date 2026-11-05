const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, '..', 'inrank2.0', 'index.html');
let html = fs.readFileSync(indexHtmlPath, 'utf8');

// 1. Replace capabilities section
const oldCapRegex = /<section class="capabilities-section" id="services">[\s\S]*?<\/section>/;

const newCapSection = `<section class="capabilities-section" id="services">
      <div class="shell">
        <div class="section-head">
          <span class="eyebrow-pill">END-TO-END EXECUTION</span>
          <h2 class="section-title">Digital Marketing &amp; Web Development in Pune.</h2>
          <p class="section-sub">Four core pillars. 27 specialized services. Delivered by senior engineers with direct accountability for timelines and rankings.</p>
        </div>

        <div class="cap-rows">
          <!-- Pillar 1 -->
          <div class="cap-row">
            <div class="cap-outcome">
              <span>OUTCOME</span>
              <strong>+318%</strong>
            </div>
            <div class="cap-badge-wrap">
              <div class="cap-icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              </div>
              <div>
                <span class="cap-pillar-tag">Pillar 01</span>
                <span class="cap-pillar-name">Search Dominance</span>
              </div>
            </div>
            <div class="cap-content">
              <h3 class="cap-title">Search Engine &amp; AI Discovery Engineering</h3>
              <p class="cap-desc">Dominate Google search results and AI answer engines. We execute high-authority local SEO in Pune, Generative Engine Optimization (GEO), Google Business Profile 3-pack optimization, and authoritative backlink building.</p>
              <div class="cap-chips">
                <a href="/services/seo-company-pune/" class="chip">SEO Company Pune</a>
                <a href="/digital-marketing-agency-in-pune.html" class="chip">AI SEO &amp; GEO</a>
                <a href="/google-business-profile-top3.html" class="chip">GMB 3-Pack</a>
                <span class="chip">Technical Audits</span>
                <span class="chip">AI Citations</span>
              </div>
            </div>
            <a href="/services/seo-company-pune/" class="cap-action" aria-label="Learn about Search Engine Engineering">
              <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </a>
          </div>

          <!-- Pillar 2 -->
          <div class="cap-row">
            <div class="cap-outcome">
              <span>OUTCOME</span>
              <strong>&lt; 1.2s</strong>
            </div>
            <div class="cap-badge-wrap">
              <div class="cap-icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <div>
                <span class="cap-pillar-tag">Pillar 02</span>
                <span class="cap-pillar-name">Engineering</span>
              </div>
            </div>
            <div class="cap-content">
              <h3 class="cap-title">High-Performance Web &amp; E-Commerce Development</h3>
              <p class="cap-desc">Hand-crafted web applications and digital storefronts engineered for raw speed, 90+ Lighthouse scores, clean structured data, and frictionless mobile checkouts.</p>
              <div class="cap-chips">
                <a href="/website-design-company-in-pune.html" class="chip">Website Design Pune</a>
                <a href="/services/wordpress-development-services/" class="chip">WordPress Development</a>
                <a href="/services/shopify-store-development/" class="chip">Shopify Stores</a>
                <span class="chip">Next.js &amp; React</span>
                <span class="chip">E-Commerce Platforms</span>
              </div>
            </div>
            <a href="/website-design-company-in-pune.html" class="cap-action" aria-label="Learn about Web Development">
              <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </a>
          </div>

          <!-- Pillar 3 -->
          <div class="cap-row">
            <div class="cap-outcome">
              <span>OUTCOME</span>
              <strong>4.8x ROI</strong>
            </div>
            <div class="cap-badge-wrap">
              <div class="cap-icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <div>
                <span class="cap-pillar-tag">Pillar 03</span>
                <span class="cap-pillar-name">Acquisition</span>
              </div>
            </div>
            <div class="cap-content">
              <h3 class="cap-title">Performance Marketing &amp; Paid Ads</h3>
              <p class="cap-desc">Stop burning budget on clicks that don't buy. We build high-intent Google Search, Meta (Instagram &amp; Facebook), and retargeting campaigns with rigorous conversion tracking and lead qualification.</p>
              <div class="cap-chips">
                <a href="/services/ppc-services/" class="chip">Google Ads PPC</a>
                <a href="/services/meta-ads-agency/" class="chip">Meta Ads Agency</a>
                <a href="/services/social-media-marketing-services/" class="chip">Social Media Marketing</a>
                <span class="chip">High-Intent B2B Leads</span>
                <span class="chip">ROAS Scaling</span>
              </div>
            </div>
            <a href="/services/ppc-services/" class="cap-action" aria-label="Learn about Performance Marketing">
              <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </a>
          </div>

          <!-- Pillar 4 -->
          <div class="cap-row">
            <div class="cap-outcome">
              <span>OUTCOME</span>
              <strong>42% Lift</strong>
            </div>
            <div class="cap-badge-wrap">
              <div class="cap-icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <div>
                <span class="cap-pillar-tag">Pillar 04</span>
                <span class="cap-pillar-name">Conversion</span>
              </div>
            </div>
            <div class="cap-content">
              <h3 class="cap-title">Brand Identity &amp; Conversion Rate Optimization</h3>
              <p class="cap-desc">Transform casual visitors into high-ticket inquiries. We refine design systems, conversion wireframes, luxury corporate collateral, and user journeys based on behavioral analytics.</p>
              <div class="cap-chips">
                <a href="/services/ui-ux-design-services/" class="chip">UI/UX Design Pune</a>
                <a href="/services/luxury-business-card-design/" class="chip">Luxury Visiting Cards</a>
                <span class="chip">CRO Audits</span>
                <span class="chip">Brand Design Systems</span>
                <span class="chip">Funnel Wireframes</span>
              </div>
            </div>
            <a href="/services/ui-ux-design-services/" class="cap-action" aria-label="Learn about Brand &amp; CRO">
              <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>`;

// 2. Replace proof section
const oldProofRegex = /<section class="proof-section" id="proof">[\s\S]*?<\/section>/;

const newProofSection = `<section class="proof" id="proof">
      <div class="shell">
        <div class="proof-grid">
          <div>
            <span class="eyebrow-pill">PROVABLE IMPACT</span>
            <h2 class="section-title">Numbers that move P&amp;Ls, not just dashboards.</h2>
            <p class="section-sub">Measured commercial outcomes achieved for ambitious brands across Pune, Mumbai, and national markets.</p>
            <div class="badge-row">
              <div class="badge-item">
                <strong style="font-size:1.75rem; font-weight:800; color:var(--text-strong);">50+</strong>
                <span style="font-size:0.875rem; color:#64748b;">Pune Deployments</span>
              </div>
              <div class="badge-item">
                <strong style="font-size:1.75rem; font-weight:800; color:var(--terra);">4.9★</strong>
                <span style="font-size:0.875rem; color:#64748b;">Google &amp; Justdial Rating</span>
              </div>
            </div>
          </div>

          <div class="proof-facts">
            <div class="fact-item">
              <span class="fact-num">₹14.2M+</span>
              <span class="fact-label">Client Revenue Influenced</span>
              <p class="fact-desc">Direct revenue generated through search rankings, conversion websites, and paid ad campaigns.</p>
            </div>
            <div class="fact-item">
              <span class="fact-num">+318%</span>
              <span class="fact-label">Average Organic Traffic Surge</span>
              <p class="fact-desc">Average organic search impression and click growth delivered within 90 days of technical deployment.</p>
            </div>
            <div class="fact-item">
              <span class="fact-num">&lt; 1.2s</span>
              <span class="fact-label">Page Load Speed</span>
              <p class="fact-desc">Sub-second average mobile render speed across our client portfolio, maintaining Google Lighthouse 90+.</p>
            </div>
            <div class="fact-item">
              <span class="fact-num">4.8x</span>
              <span class="fact-label">Average Return on Ad Spend</span>
              <p class="fact-desc">High-intent Google and Meta ad funnels engineered for profitable customer acquisition.</p>
            </div>
          </div>
        </div>
      </div>
    </section>`;

html = html.replace(oldCapRegex, newCapSection);
html = html.replace(oldProofRegex, newProofSection);

fs.writeFileSync(indexHtmlPath, html, 'utf8');
console.log('Successfully updated capabilities and proof sections');

