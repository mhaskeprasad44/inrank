const fs = require('fs');

// 1. Update corporate.css
let css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');

const faqBodyTarget = `.faq-body {
  padding: 0 1.75rem 1.5rem !important;
  font-size: 0.92rem !important;
  color: #64748b !important;
  line-height: 1.65 !important;
}`;

const faqBodyReplacement = `.faq-body {
  display: none !important;
  padding: 0 1.75rem 1.5rem !important;
  font-size: 0.92rem !important;
  color: #64748b !important;
  line-height: 1.65 !important;
}

.faq-item.active .faq-body {
  display: block !important;
}

.pricing-guarantee-phone {
  padding: 10px 20px !important;
  font-size: 0.88rem !important;
  font-weight: 700 !important;
  color: #081424 !important;
  background: #ffffff !important;
  border: 1.5px solid #cbd5e1 !important;
  border-radius: 10px !important;
  text-decoration: none !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 8px !important;
  transition: all 0.2s ease !important;
}

.pricing-guarantee-phone:hover {
  background: #f1f5f9 !important;
  border-color: #94a3b8 !important;
}`;

css = css.replace(faqBodyTarget, faqBodyReplacement);
fs.writeFileSync('inrank2.0/css/corporate.css', css, 'utf8');
console.log('Updated corporate.css for FAQ accordion and guarantee phone button');

// 2. Update pricing.html FAQ section and phone button
let pricingHtml = fs.readFileSync('inrank2.0/pricing.html', 'utf8');

// Replace phone button in guarantee bar
pricingHtml = pricingHtml.replace(
  /<a href="tel:\+918788823182" class="button secondary"[^>]*>([\s\S]*?)<\/a>/,
  `<a href="tel:+918788823182" class="pricing-guarantee-phone">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#009d49" stroke-width="2.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
    <span>+91 87888 23182</span>
  </a>`
);

// Replace FAQ section in pricingHtml
const faqStart = pricingHtml.indexOf('<section class="faq-section" id="faq"');
const faqEnd = pricingHtml.indexOf('</section>', faqStart) + 10;

const refinedFaqHtml = `
    <!-- FAQ SECTION (FROM LIVE WEBSITE) -->
    <section class="faq-section" id="faq">
      <div class="shell">
        
        <div class="section-head text-center" style="text-align:center;max-width:820px;margin:0 auto 2.5rem;">
          <span class="section-kicker">FREQUENTLY ASKED QUESTIONS</span>
          <h2 class="section-title">Quick answers before the call.</h2>
          <p class="section-sub">Everything you need to know about our fixed pricing, delivery timelines, code ownership, and technical retainer models.</p>
        </div>

        <div class="faq-accordion">
          
          <div class="faq-item">
            <button type="button" class="faq-btn" aria-expanded="false">
              <span>How fast can you launch our website?</span>
              <svg class="faq-icon" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <div class="faq-body">
              <p>Our standard performance-first conversion landing pages go live in 5-7 days. Robust custom marketing websites or Shopify stores are typically completed and launched within 10-14 days with zero quality compromise.</p>
            </div>
          </div>

          <div class="faq-item">
            <button type="button" class="faq-btn" aria-expanded="false">
              <span>Do you handle ads, SEO and the website together?</span>
              <svg class="faq-icon" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <div class="faq-body">
              <p>Yes. By coordinating search advertising, on-page technical SEO, and conversion optimization under one unified development architecture, we eliminate disconnected handoffs so that your entire funnel compounds faster.</p>
            </div>
          </div>

          <div class="faq-item">
            <button type="button" class="faq-btn" aria-expanded="false">
              <span>What is the minimum engagement for SEO and Social Retainers?</span>
              <svg class="faq-icon" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <div class="faq-body">
              <p>We work on simple 30-day rolling monthly retainers. We do not lock you into rigid annual commitments. We earn your business month-over-month through transparent reporting and measurable ranking gains.</p>
            </div>
          </div>

          <div class="faq-item">
            <button type="button" class="faq-btn" aria-expanded="false">
              <span>Do I own the source code, design, and domain?</span>
              <svg class="faq-icon" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <div class="faq-body">
              <p>100% yes. You retain full intellectual property ownership of all custom code, assets, graphics, and domain registrations from day one. We never hold your digital assets hostage.</p>
            </div>
          </div>

          <div class="faq-item">
            <button type="button" class="faq-btn" aria-expanded="false">
              <span>Are there any hidden costs, hosting renewals, or extra fees?</span>
              <svg class="faq-icon" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <div class="faq-body">
              <p>Zero hidden fees. Every website package includes free 1st-year high-speed cloud hosting and SSL. Renewal after year one is a flat, transparent ₹3,999/year. Additional custom pages are ₹999/page.</p>
            </div>
          </div>

          <div class="faq-item">
            <button type="button" class="faq-btn" aria-expanded="false">
              <span>Who will actually build and manage my project?</span>
              <svg class="faq-icon" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <div class="faq-body">
              <p>Your project is engineered directly by our senior team in Pune led by Prasad Mhaske. We do not outsource to junior freelancers or non-technical account managers.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
`;

pricingHtml = pricingHtml.substring(0, faqStart) + refinedFaqHtml + pricingHtml.substring(faqEnd);
fs.writeFileSync('inrank2.0/pricing.html', pricingHtml, 'utf8');
console.log('Updated pricing.html with refined FAQ accordion');

// Also update phone button in index.html guarantee bar
let indexHtml = fs.readFileSync('inrank2.0/index.html', 'utf8');
indexHtml = indexHtml.replace(
  /<a href="tel:\+918788823182" class="button secondary"[^>]*>([\s\S]*?)<\/a>/,
  `<a href="tel:+918788823182" class="pricing-guarantee-phone">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#009d49" stroke-width="2.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
    <span>+91 87888 23182</span>
  </a>`
);
fs.writeFileSync('inrank2.0/index.html', indexHtml, 'utf8');
console.log('Updated index.html guarantee bar phone button');

