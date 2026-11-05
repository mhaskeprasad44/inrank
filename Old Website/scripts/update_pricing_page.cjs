const fs = require('fs');
const { getPricingSectionHtml } = require('./pricing_template.cjs');

let content = fs.readFileSync('inrank2.0/pricing.html', 'utf8');

const pkgStart = content.indexOf('<section class="pricing-section" id="packages"');
const pkgEnd = content.indexOf('</section>', pkgStart) + 10;

const faqSectionHtml = `
    <!-- FAQ SECTION (FROM LIVE WEBSITE) -->
    <section class="faq-section" id="faq" style="padding:5rem 0 6rem;background:#ffffff;border-top:1px solid #e2e8f0;">
      <div class="shell" style="max-width:960px;margin:0 auto;">
        
        <div class="section-head" style="margin-bottom:3rem;">
          <span class="section-kicker">FREQUENTLY ASKED QUESTIONS</span>
          <h2 class="section-title">Quick answers before the call.</h2>
          <p class="section-sub">Everything you need to know about our fixed pricing, delivery timelines, code ownership, and technical retainer models.</p>
        </div>

        <div class="faq-list">
          
          <div class="faq-item">
            <button type="button" class="faq-trigger" aria-expanded="false">
              <span>How fast can you launch our website?</span>
              <svg class="faq-chevron" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6l4 4 4-4"/></svg>
            </button>
            <div class="faq-body">
              <p>Our standard performance-first conversion landing pages go live in 5-7 days. Robust custom marketing websites or Shopify stores are typically completed and launched within 10-14 days with zero quality compromise.</p>
            </div>
          </div>

          <div class="faq-item">
            <button type="button" class="faq-trigger" aria-expanded="false">
              <span>Do you handle ads, SEO and the website together?</span>
              <svg class="faq-chevron" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6l4 4 4-4"/></svg>
            </button>
            <div class="faq-body">
              <p>Yes. By coordinating search advertising, on-page technical SEO, and conversion optimization under one unified development architecture, we eliminate disconnected handoffs so that your entire funnel compounds faster.</p>
            </div>
          </div>

          <div class="faq-item">
            <button type="button" class="faq-trigger" aria-expanded="false">
              <span>What is the minimum engagement for SEO and Social Retainers?</span>
              <svg class="faq-chevron" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6l4 4 4-4"/></svg>
            </button>
            <div class="faq-body">
              <p>We work on simple 30-day rolling monthly retainers. We do not lock you into rigid annual commitments. We earn your business month-over-month through transparent reporting and measurable ranking gains.</p>
            </div>
          </div>

          <div class="faq-item">
            <button type="button" class="faq-trigger" aria-expanded="false">
              <span>Do I own the source code, design, and domain?</span>
              <svg class="faq-chevron" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6l4 4 4-4"/></svg>
            </button>
            <div class="faq-body">
              <p>100% yes. You retain full intellectual property ownership of all custom code, assets, graphics, and domain registrations from day one. We never hold your digital assets hostage.</p>
            </div>
          </div>

          <div class="faq-item">
            <button type="button" class="faq-trigger" aria-expanded="false">
              <span>Are there any hidden costs, hosting renewals, or extra fees?</span>
              <svg class="faq-chevron" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6l4 4 4-4"/></svg>
            </button>
            <div class="faq-body">
              <p>Zero hidden fees. Every website package includes free 1st-year high-speed cloud hosting and SSL. Renewal after year one is a flat, transparent ₹3,999/year. Additional custom pages are ₹999/page.</p>
            </div>
          </div>

          <div class="faq-item">
            <button type="button" class="faq-trigger" aria-expanded="false">
              <span>Who will actually build and manage my project?</span>
              <svg class="faq-chevron" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6l4 4 4-4"/></svg>
            </button>
            <div class="faq-body">
              <p>Your project is engineered directly by our senior team in Pune led by Prasad Mhaske. We do not outsource to junior freelancers or non-technical account managers.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
`;

const newPricingSection = getPricingSectionHtml(false);

content = content.substring(0, pkgStart) + newPricingSection + '\n' + faqSectionHtml + '\n' + content.substring(pkgEnd);

fs.writeFileSync('inrank2.0/pricing.html', content, 'utf8');
console.log('Successfully updated inrank2.0/pricing.html with 3-tab pricing architecture and FAQs');

