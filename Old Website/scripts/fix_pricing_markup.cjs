const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, '..', 'inrank2.0', 'index.html');
let html = fs.readFileSync(indexHtmlPath, 'utf8');

// Replace pricing-grid with proper markup
const oldPricingGridRegex = /<div class="pricing-grid">[\s\S]*?<\/div>\s*<!-- Addons Grid -->/;

const newPricingGrid = `<div class="pricing-grid">
          <!-- Tier 1: Starter Sprint -->
          <div class="pricing-card">
            <span class="pricing-tag">SPEED SPRINT</span>
            <h3>Starter Sprint</h3>
            <p class="pricing-sub">For local businesses, clinics &amp; consultancies needing an immediate, high-ranking professional digital footprint.</p>
            <div class="pricing-price-wrap">
              <span class="pricing-price">₹11,999</span>
              <span class="pricing-period">/ fixed one-time</span>
            </div>
            <ul class="pricing-features">
              <li class="pricing-feature-item">
                <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 8.5l3.5 3.5 6.5-7.5"/></svg>
                <span>5-7 Day Guaranteed Turnaround</span>
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 8.5l3.5 3.5 6.5-7.5"/></svg>
                <span>Up to 5 Custom Engineered Pages</span>
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 8.5l3.5 3.5 6.5-7.5"/></svg>
                <span>Google Lighthouse 90+ Score</span>
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 8.5l3.5 3.5 6.5-7.5"/></svg>
                <span>Full Technical SEO &amp; Schema Meta</span>
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 8.5l3.5 3.5 6.5-7.5"/></svg>
                <span>WhatsApp Chat &amp; Lead Form Routing</span>
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 8.5l3.5 3.5 6.5-7.5"/></svg>
                <span>100% Source Code &amp; Asset Ownership</span>
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 8.5l3.5 3.5 6.5-7.5"/></svg>
                <span>30 Days Post-Launch Support</span>
              </li>
            </ul>
            <a href="/contact.html" class="pricing-btn button primary">Choose Starter Sprint</a>
          </div>

          <!-- Tier 2: Growth Scale (Featured Navy Card) -->
          <div class="pricing-card featured">
            <span class="pricing-tag">MOST POPULAR IN PUNE</span>
            <h3>Growth Scale</h3>
            <p class="pricing-sub">Our flagship deployment for ambitious SMEs and service companies ready to outrank direct competitors in Pune.</p>
            <div class="pricing-price-wrap">
              <span class="pricing-price">₹18,999</span>
              <span class="pricing-period">/ fixed one-time</span>
            </div>
            <ul class="pricing-features">
              <li class="pricing-feature-item">
                <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 8.5l3.5 3.5 6.5-7.5"/></svg>
                <span>Up to 10 Custom Speed-Engineered Pages</span>
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 8.5l3.5 3.5 6.5-7.5"/></svg>
                <span>Full Local SEO &amp; Google 3-Pack Audit</span>
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 8.5l3.5 3.5 6.5-7.5"/></svg>
                <span>Dynamic Blog / CMS Publishing System</span>
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 8.5l3.5 3.5 6.5-7.5"/></svg>
                <span>Google Analytics 4 &amp; Conversion Tracking</span>
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 8.5l3.5 3.5 6.5-7.5"/></svg>
                <span>High-Conversion Wireframes &amp; Copy Polish</span>
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 8.5l3.5 3.5 6.5-7.5"/></svg>
                <span>Sub-second Mobile Speed Architecture</span>
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 8.5l3.5 3.5 6.5-7.5"/></svg>
                <span>Direct Priority Support with Prasad Mhaske</span>
              </li>
            </ul>
            <a href="/contact.html" class="pricing-btn button primary">Choose Growth Scale</a>
          </div>

          <!-- Tier 3: Market Domination -->
          <div class="pricing-card">
            <span class="pricing-tag">COMPLETE DOMINATION</span>
            <h3>Market Domination</h3>
            <p class="pricing-sub">Full-stack web platform engineering + comprehensive 90-day search ranking &amp; advertising acceleration sprint.</p>
            <div class="pricing-price-wrap">
              <span class="pricing-price">₹34,999</span>
              <span class="pricing-period">/ fixed one-time</span>
            </div>
            <ul class="pricing-features">
              <li class="pricing-feature-item">
                <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 8.5l3.5 3.5 6.5-7.5"/></svg>
                <span>Unlimited Pages &amp; Full E-Commerce Stack</span>
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 8.5l3.5 3.5 6.5-7.5"/></svg>
                <span>GEO, AI Citations &amp; Knowledge Graph Setup</span>
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 8.5l3.5 3.5 6.5-7.5"/></svg>
                <span>Complete Google Ads &amp; Meta Funnel Architecture</span>
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 8.5l3.5 3.5 6.5-7.5"/></svg>
                <span>Advanced Custom Web App &amp; API Integrations</span>
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 8.5l3.5 3.5 6.5-7.5"/></svg>
                <span>Conversion Rate Optimization (CRO) Sprint</span>
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 8.5l3.5 3.5 6.5-7.5"/></svg>
                <span>Bi-Weekly Commercial Growth Reviews</span>
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 8.5l3.5 3.5 6.5-7.5"/></svg>
                <span>90 Days High-Touch Senior Engineering</span>
              </li>
            </ul>
            <a href="/contact.html" class="pricing-btn button primary">Choose Market Domination</a>
          </div>
        </div>

        <!-- Addons Grid -->`;

html = html.replace(oldPricingGridRegex, newPricingGrid);
fs.writeFileSync(indexHtmlPath, html, 'utf8');
console.log('Successfully updated pricing cards markup in index.html');

