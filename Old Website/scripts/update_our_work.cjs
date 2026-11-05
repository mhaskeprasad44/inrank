const fs = require('fs');

let file = fs.readFileSync('inrank2.0/our-work.html', 'utf8');

// 1. Replace CyTOS card
const oldCytosRegex = /<!-- Work Card: cytos -->[\s\S]*?<\/article>/;
const newCytos = `<!-- Work Card: cytos -->
          <article class="work-card" data-filter="manufacturing" data-reveal>
            <div class="work-card-media">
              <img src="/portfolio/screenshots/cytos.webp" alt="CyTOS Machines — Chemical-Free Laboratory PCB CNC Milling Systems Hero Screenshot" loading="lazy" />
              <span class="work-card-pill">+314% Industrial RFQs</span>
            </div>
            <div class="work-card-body">
              <span class="work-card-category">Precision CNC Machinery &amp; SPMs</span>
              <h3 class="work-card-title"><a href="/our-work/cytos.html">CyTOS Machines — Laboratory PCB CNC Milling Systems</a></h3>
              <p class="work-card-desc">Chemical-free laboratory PCB milling machines &amp; turnkey SPMs with sub-second React architecture, interactive machine finder, and technical B2B SEO ranking dominance.</p>
            </div>
            <div class="work-card-footer">
              <span class="work-card-metric">+314% Industrial RFQs</span>
              <div class="work-card-actions">
                <a href="https://cytos.in/" target="_blank" rel="noopener noreferrer" class="work-live-link" title="View Website">
                  <span>Live Site</span>
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
                </a>
                <a href="/our-work/cytos.html" class="work-card-link">
                  <span>Case Study</span>
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3H5M13 3V11"/></svg>
                </a>
              </div>
            </div>
          </article>`;

if (oldCytosRegex.test(file)) {
  file = file.replace(oldCytosRegex, newCytos);
  console.log('Replaced CyTOS card successfully');
} else {
  console.error('CyTOS regex not matched');
}

// 2. Add Dravya Financial Card if not present
if (!file.includes('data-filter="professional"')) {
  const dravyaCard = `

          <!-- Work Card: dravyafinancial -->
          <article class="work-card" data-filter="professional" data-reveal>
            <div class="work-card-media">
              <img src="/portfolio/screenshots/dravyafinancial.webp" alt="Dravya Financial Solutions — Enterprise Wealth Advisory Portal Hero Screenshot" loading="lazy" />
              <span class="work-card-pill">₹45Cr+ Inquiries</span>
            </div>
            <div class="work-card-body">
              <span class="work-card-category">Wealth &amp; Advisory</span>
              <h3 class="work-card-title"><a href="/our-work/dravyafinancial.html">Dravya Financial Solutions — Enterprise Wealth Advisory Portal</a></h3>
              <p class="work-card-desc">High-trust financial architecture with client portal integration, compliance-first lead funnels, and targeted Pune HNWI investment search visibility.</p>
            </div>
            <div class="work-card-footer">
              <span class="work-card-metric">₹45Cr+ Portfolio Inquiries</span>
              <div class="work-card-actions">
                <a href="https://dravyafinancial.com/" target="_blank" rel="noopener noreferrer" class="work-live-link" title="View Website">
                  <span>Live Site</span>
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
                </a>
                <a href="/our-work/dravyafinancial.html" class="work-card-link">
                  <span>Case Study</span>
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3H5M13 3V11"/></svg>
                </a>
              </div>
            </div>
          </article>
`;
  // Place right after vasroventures card
  const vasroRegex = /(<!-- Work Card: vasroventures -->[\s\S]*?<\/article>)/;
  if (vasroRegex.test(file)) {
    file = file.replace(vasroRegex, `$1${dravyaCard}`);
    console.log('Added Dravya Financial card successfully');
  } else {
    console.error('Vasro card not matched');
  }
}

// 3. Update the filter script
const oldScriptRegex = /<script>\s*\/\/\s*Client-side instant filtering[\s\S]*?<\/script>/;
const newScript = `<script>
    // Client-side instant filtering with !important support
    document.addEventListener('DOMContentLoaded', () => {
      const buttons = document.querySelectorAll('.filter-btn');
      const cards = document.querySelectorAll('.work-card');

      buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          buttons.forEach(b => b.classList.remove('is-active'));
          btn.classList.add('is-active');

          const target = btn.getAttribute('data-target');
          cards.forEach(card => {
            const cat = card.getAttribute('data-filter');
            if (target === 'all' || cat === target) {
              card.classList.remove('is-hidden');
              card.style.setProperty('display', 'flex', 'important');
            } else {
              card.classList.add('is-hidden');
              card.style.setProperty('display', 'none', 'important');
            }
          });
        });
      });
    });
  </script>`;

if (oldScriptRegex.test(file)) {
  file = file.replace(oldScriptRegex, newScript);
  console.log('Updated filter script successfully');
} else {
  console.error('Filter script regex not matched');
}

fs.writeFileSync('inrank2.0/our-work.html', file, 'utf8');
console.log('Saved inrank2.0/our-work.html');

