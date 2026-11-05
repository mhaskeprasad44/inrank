const fs = require('fs');

let html = fs.readFileSync('inrank2.0/index.html', 'utf8');

const sec7OldRegex = /<section class="proof-section" id="proof">[\s\S]*?<\/section>/;
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

if (sec7OldRegex.test(html)) {
  html = html.replace(sec7OldRegex, sec7New);
  fs.writeFileSync('inrank2.0/index.html', html, 'utf8');
  console.log('Section 7 successfully replaced with aligned 2-column layout in index.html!');
} else {
  console.error('Could not match sec7OldRegex in index.html');
}

