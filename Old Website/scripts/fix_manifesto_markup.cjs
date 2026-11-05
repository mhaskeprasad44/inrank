const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, '..', 'inrank2.0', 'index.html');
let html = fs.readFileSync(indexHtmlPath, 'utf8');

const oldManifestoRegex = /<section class="manifesto-section" id="philosophy">[\s\S]*?<\/section>/;

const newManifesto = `<section class="manifesto" id="philosophy">
      <div class="shell">
        <span class="eyebrow-pill">OUR OPERATING PHILOSOPHY</span>
        <div class="manifesto-grid">
          <div>
            <h2 class="statement">
              Built like an internal growth team.<br />
              <span style="color:var(--terra)">Priced like an agile agency.</span>
            </h2>
            <p class="lede" style="color:#64748b; font-size:1.15rem; line-height:1.6;">
              Most Pune agencies hand client accounts to junior interns after signing the contract. We eliminated account managers, interns, and agency markups entirely.
            </p>
          </div>

          <div class="manifesto-copy">
            <p>
              At Inrank, you collaborate directly with senior growth architects and full-stack software engineers based at our Baner lab. We measure success by bottom-line commercial impact: qualified sales leads, inbound phone inquiries, Google 3-pack prominence, and verified revenue growth.
            </p>

            <div style="display:flex; flex-direction:column; gap:1.25rem; margin-top:1rem; border-top:1px solid rgba(8,20,36,0.08); padding-top:1.5rem;">
              <div style="display:flex; gap:1rem; align-items:flex-start;">
                <span style="font-weight:800; font-size:0.75rem; color:var(--terra); letter-spacing:0.1em; padding-top:2px;">01</span>
                <div>
                  <strong style="color:var(--text-strong); font-size:1.1rem; display:block; margin-bottom:4px;">Direct Senior Ownership</strong>
                  <p style="margin:0; font-size:0.9375rem; color:#64748b; line-height:1.5;">Zero junior account managers. You speak directly with the engineers shipping your code and tuning your search rankings.</p>
                </div>
              </div>

              <div style="display:flex; gap:1rem; align-items:flex-start;">
                <span style="font-weight:800; font-size:0.75rem; color:var(--terra); letter-spacing:0.1em; padding-top:2px;">02</span>
                <div>
                  <strong style="color:var(--text-strong); font-size:1.1rem; display:block; margin-bottom:4px;">100% Code &amp; Asset Ownership</strong>
                  <p style="margin:0; font-size:0.9375rem; color:#64748b; line-height:1.5;">You own every line of code, domain asset, analytics tracking setup, and ad account from Day 1. No hosting hostage or vendor lock-in.</p>
                </div>
              </div>

              <div style="display:flex; gap:1rem; align-items:flex-start;">
                <span style="font-weight:800; font-size:0.75rem; color:var(--terra); letter-spacing:0.1em; padding-top:2px;">03</span>
                <div>
                  <strong style="color:var(--text-strong); font-size:1.1rem; display:block; margin-bottom:4px;">Engineered for Conversion Speed</strong>
                  <p style="margin:0; font-size:0.9375rem; color:#64748b; line-height:1.5;">We don't build sluggish theme templates. Every website is engineered for sub-second load times and 90+ Google Lighthouse scores.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`;

html = html.replace(oldManifestoRegex, newManifesto);
fs.writeFileSync(indexHtmlPath, html, 'utf8');
console.log('Successfully updated manifesto section markup in index.html');

