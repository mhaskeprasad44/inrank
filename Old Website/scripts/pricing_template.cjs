const fs = require('fs');

function getPricingSectionHtml(isHomepage = false) {
  return `
    <section class="pricing-section" id="pricing">
      <div class="shell">
        <div class="section-head text-center" style="text-align:center;max-width:820px;margin:0 auto 2.5rem;">
          <span class="section-kicker">TRANSPARENT PACKAGES &amp; PRICING</span>
          <h2 class="section-title">Fixed-Price Websites &amp; Growth Retainers. <span style="color:#009d49;">No Surprises.</span></h2>
          <p class="section-sub">Every website includes free cloud hosting, SSL, domain, business emails, and 365 days of post-launch support. SEO and social media plans are simple monthly retainers with zero lock-in contracts.</p>
        </div>

        <!-- Category Switcher Tabs -->
        <div class="pricing-tabs-wrap">
          <div class="pricing-tabs-bar" id="pricing-tabs" role="tablist">
            <button type="button" class="pricing-tab-btn active" data-tab="tab-web" role="tab" aria-selected="true">Website Development</button>
            <button type="button" class="pricing-tab-btn" data-tab="tab-seo" role="tab" aria-selected="false">SEO Retainers</button>
            <button type="button" class="pricing-tab-btn" data-tab="tab-social" role="tab" aria-selected="false">Social Media &amp; Reels</button>
          </div>
        </div>

        <!-- ══════════════ TAB 1: WEBSITE DEVELOPMENT ══════════════ -->
        <div id="tab-web" class="pricing-content-panel" role="tabpanel">
          
          <!-- Starter Website -->
          <div class="pricing-card">
            <span class="tier-kicker">STARTER WEBSITE</span>
            <h3 class="tier-name">Starter Website</h3>
            <p class="tier-desc">Ideal for new and local service businesses needing a professional, Google-ready online presence quickly.</p>
            <div class="tier-price-row">
              <span class="tier-price">₹11,999</span>
              <span class="tier-period">/ one-time · 5-7 days</span>
            </div>
            <ul class="tier-features">
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
            <a href="/contact.html?plan=Starter-Website" class="button secondary full">Choose Starter Website</a>
          </div>

          <!-- Growth Business Website (Featured) -->
          <div class="pricing-card featured">
            <span class="tier-kicker">MOST POPULAR IN PUNE</span>
            <h3 class="tier-name">Growth Business</h3>
            <p class="tier-desc">For established businesses, doctors, and consultancies wanting to generate inbound inquiries from Pune searchers.</p>
            <div class="tier-price-row">
              <span class="tier-price">₹16,999</span>
              <span class="tier-period">/ one-time · 7-10 days</span>
            </div>
            <ul class="tier-features">
              <li>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#00bf5d" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                <span>Up to <strong>20 custom responsive pages</strong></span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#00bf5d" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                <span><strong>Free 1st-year NVMe Cloud Hosting</strong> &amp; SSL</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#00bf5d" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                <span><strong>5 Business Email Addresses</strong> included</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#00bf5d" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                <span>On-page Technical SEO &amp; Pune Schema Markup</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#00bf5d" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                <span>Dynamic Blog / News management CMS</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#00bf5d" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                <span>Google Analytics 4 &amp; Conversion Event tracking</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#00bf5d" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                <span><strong>365 Days Dedicated Senior Support</strong></span>
              </li>
            </ul>
            <a href="/contact.html?plan=Growth-Business" class="button primary full">Choose Growth Business</a>
          </div>

          <!-- Custom / E-Commerce -->
          <div class="pricing-card">
            <span class="tier-kicker">COMMERCIAL SCALE</span>
            <h3 class="tier-name">Custom E-Commerce</h3>
            <p class="tier-desc">Full-featured online stores, catalog portals, or custom platforms with complete payment integration.</p>
            <div class="tier-price-row">
              <span class="tier-price">₹21,999</span>
              <span class="tier-period">/ one-time · 10-15 days</span>
            </div>
            <ul class="tier-features">
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
            <a href="/contact.html?plan=Custom-Ecommerce" class="button secondary full">Choose Custom E-Commerce</a>
          </div>

        </div>

        <!-- ══════════════ TAB 2: SEO RETAINERS ══════════════ -->
        <div id="tab-seo" class="pricing-content-panel is-hidden" role="tabpanel">
          
          <!-- Local SEO -->
          <div class="pricing-card">
            <span class="tier-kicker">LOCAL DOMINANCE</span>
            <h3 class="tier-name">Local SEO</h3>
            <p class="tier-desc">For clinics, retail stores, and service companies looking to dominate local Google Maps &amp; "near me" searches.</p>
            <div class="tier-price-row">
              <span class="tier-price">₹11,999</span>
              <span class="tier-period">/ month · zero lock-in</span>
            </div>
            <ul class="tier-features">
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
            <a href="/contact.html?plan=Local-SEO" class="button secondary full">Start Local SEO</a>
          </div>

          <!-- Growth SEO (Featured) -->
          <div class="pricing-card featured">
            <span class="tier-kicker">MOST POPULAR RETAINER</span>
            <h3 class="tier-name">Growth SEO</h3>
            <p class="tier-desc">Scaling organic traffic, inbound leads, and commercial search queries across Pune &amp; Maharashtra.</p>
            <div class="tier-price-row">
              <span class="tier-price">₹18,999</span>
              <span class="tier-period">/ month · zero lock-in</span>
            </div>
            <ul class="tier-features">
              <li>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#00bf5d" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                <span>Everything in Local SEO Plan included</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#00bf5d" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                <span>35 Target commercial &amp; long-tail keywords</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#00bf5d" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                <span>2 High-Authority Long-Form SEO Articles (1,500+ w) / mo</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#00bf5d" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                <span>Technical Core Web Vitals maintenance &amp; schema</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#00bf5d" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                <span>Competitor backlink gap analysis &amp; outreach</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#00bf5d" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                <span>AI Search &amp; GEO optimization (ChatGPT, Perplexity citations)</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#00bf5d" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                <span>Bi-weekly ranking reports &amp; strategist check-ins</span>
              </li>
            </ul>
            <a href="/contact.html?plan=Growth-SEO" class="button primary full">Start Growth SEO</a>
          </div>

          <!-- Market Authority SEO -->
          <div class="pricing-card">
            <span class="tier-kicker">PAN-INDIA DOMINANCE</span>
            <h3 class="tier-name">Market Authority SEO</h3>
            <p class="tier-desc">State-wide or pan-India market share across high-volume search queries and competitive verticals.</p>
            <div class="tier-price-row">
              <span class="tier-price">₹27,999</span>
              <span class="tier-period">/ month · zero lock-in</span>
            </div>
            <ul class="tier-features">
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
            <a href="/contact.html?plan=Market-Authority-SEO" class="button secondary full">Start Market Authority</a>
          </div>

        </div>

        <!-- ══════════════ TAB 3: SOCIAL MEDIA & REELS ══════════════ -->
        <div id="tab-social" class="pricing-content-panel is-hidden" role="tabpanel">
          
          <!-- Social Starter -->
          <div class="pricing-card">
            <span class="tier-kicker">ORGANIC LAUNCH</span>
            <h3 class="tier-name">Social Launch</h3>
            <p class="tier-desc">For businesses wanting an active, professional presence across Instagram and Facebook.</p>
            <div class="tier-price-row">
              <span class="tier-price">₹11,499</span>
              <span class="tier-period">/ month · zero lock-in</span>
            </div>
            <ul class="tier-features">
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
            <a href="/contact.html?plan=Social-Launch" class="button secondary full">Start Social Launch</a>
          </div>

          <!-- Social & Reels Growth (Featured) -->
          <div class="pricing-card featured">
            <span class="tier-kicker">MOST POPULAR RETAINER</span>
            <h3 class="tier-name">Social &amp; Reels Growth</h3>
            <p class="tier-desc">For brands wanting consistent organic customer inquiries and high-reach Instagram Reels.</p>
            <div class="tier-price-row">
              <span class="tier-price">₹16,999</span>
              <span class="tier-period">/ month · zero lock-in</span>
            </div>
            <ul class="tier-features">
              <li>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#00bf5d" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                <span><strong>15 Custom Posts + 6 Trending Reels</strong> / mo</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#00bf5d" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                <span>Hook Writing, Video Editing &amp; Audio Selection</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#00bf5d" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                <span>Google Business Profile SEO updates</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#00bf5d" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                <span>Community DM &amp; Lead Comment Engagement</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#00bf5d" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                <span>Paid Ad Campaign Setup &amp; A/B testing (Ad spend extra)</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#00bf5d" stroke-width="2.5"><polyline points="4 11 8 15 16 6"/></svg>
                <span>Bi-weekly content review &amp; performance check-ins</span>
              </li>
            </ul>
            <a href="/contact.html?plan=Social-Reels-Growth" class="button primary full">Start Social &amp; Reels</a>
          </div>

          <!-- Brand Scale -->
          <div class="pricing-card">
            <span class="tier-kicker">MULTI-CHANNEL DOMINANCE</span>
            <h3 class="tier-name">Brand Scale</h3>
            <p class="tier-desc">Full multi-channel management across Instagram, LinkedIn, Facebook, and YouTube Shorts.</p>
            <div class="tier-price-row">
              <span class="tier-price">₹26,999</span>
              <span class="tier-period">/ month · zero lock-in</span>
            </div>
            <ul class="tier-features">
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
            <a href="/contact.html?plan=Brand-Scale" class="button secondary full">Start Brand Scale</a>
          </div>

        </div>

        <!-- Value Guarantee & Add-Ons Bar -->
        <div class="pricing-guarantee-bar">
          <div>
            <h4>Transparent Add-Ons &amp; Renewals</h4>
            <p>
              Extra pages: <strong>₹999/page</strong> · Hosting &amp; SSL renewal after year 1: <strong>₹3,999/year</strong> · 100% Client Code &amp; Domain Ownership.
            </p>
          </div>
          <div class="pricing-guarantee-actions">
            <a href="tel:+918788823182" class="button secondary" style="padding:10px 20px;font-size:0.85rem;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>+91 87888 23182</span>
            </a>
            <a href="/contact.html" class="button primary" style="padding:10px 22px;font-size:0.85rem;">
              <span>Request Custom Proposal</span>
              <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  `;
}

module.exports = { getPricingSectionHtml };

