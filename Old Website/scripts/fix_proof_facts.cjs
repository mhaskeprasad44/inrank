const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, '..', 'inrank2.0', 'index.html');
let html = fs.readFileSync(indexHtmlPath, 'utf8');

const oldFactsRegex = /<div class="proof-facts">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/;

const newFacts = `<div class="proof-facts">
            <div class="fact-item">
              <strong>₹14.2M+</strong>
              <span style="font-weight:750; color:var(--text-strong); font-size:0.9375rem; margin-bottom:4px;">Client Revenue Influenced</span>
              <span>Direct revenue generated through search rankings, conversion websites, and paid ad campaigns.</span>
            </div>
            <div class="fact-item">
              <strong>+318%</strong>
              <span style="font-weight:750; color:var(--text-strong); font-size:0.9375rem; margin-bottom:4px;">Average Organic Traffic Surge</span>
              <span>Average organic search impression and click growth delivered within 90 days of technical deployment.</span>
            </div>
            <div class="fact-item">
              <strong>&lt; 1.2s</strong>
              <span style="font-weight:750; color:var(--text-strong); font-size:0.9375rem; margin-bottom:4px;">Page Load Speed</span>
              <span>Sub-second average mobile render speed across our client portfolio, maintaining Google Lighthouse 90+.</span>
            </div>
            <div class="fact-item">
              <strong>4.8x</strong>
              <span style="font-weight:750; color:var(--text-strong); font-size:0.9375rem; margin-bottom:4px;">Average Return on Ad Spend</span>
              <span>High-intent Google and Meta ad funnels engineered for profitable customer acquisition.</span>
            </div>
          </div>
        </div>
      </div>
    </section>`;

html = html.replace(oldFactsRegex, newFacts);
fs.writeFileSync(indexHtmlPath, html, 'utf8');
console.log('Successfully updated fact-item markup with <strong> tags');

