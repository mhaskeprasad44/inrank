const fs = require('fs');

let file = fs.readFileSync('inrank2.0/case-studies.html', 'utf8');

// Replace the 3 placeholder boxes in case-studies.html
const startMarker = '<!-- Case Studies List -->';
const endMarker = '<!-- Closing Dual Action Cards -->';

const startIndex = file.indexOf(startMarker);
const endIndex = file.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error('Markers not found in case-studies.html');
  process.exit(1);
}

const filterStripAndGrid = `<!-- Case Studies Filter Strip -->
    <section id="cases" style="background:#ffffff;border-bottom:1px solid var(--line);padding:1.25rem 0;position:sticky;top:var(--nav-h);z-index:90;backdrop-filter:blur(16px);background:rgba(255,255,255,0.95);">
      <div class="shell" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">
        <span style="font-size:0.8rem;font-weight:800;color:#64748b;text-transform:uppercase;letter-spacing:0.06em;">Filter Sectors:</span>
        <div class="work-filter-pills" style="display:flex;flex-wrap:wrap;gap:8px;">
          <button class="filter-btn is-active" data-target="all">All (10)</button>
          <button class="filter-btn" data-target="healthcare">Healthcare &amp; Clinical</button>
          <button class="filter-btn" data-target="ecommerce">E-Commerce &amp; Export</button>
          <button class="filter-btn" data-target="manufacturing">Manufacturing &amp; Packaging</button>
          <button class="filter-btn" data-target="architecture">Real Estate &amp; Architecture</button>
          <button class="filter-btn" data-target="professional">Wealth &amp; Advisory</button>
          <button class="filter-btn" data-target="education">Education</button>
        </div>
      </div>
    </section>

    <!-- Case Studies Grid Section -->
    <section class="work-section" aria-labelledby="cases-title" style="padding:4rem 0 6rem;background:var(--paper);">
      <div class="shell">
        <div class="section-head" style="margin-bottom:3rem;">
          <span class="section-kicker">PROVEN REVENUE IMPACT</span>
          <h2 class="section-title" id="cases-title">Verified Case Studies &amp; Documented Deliverables</h2>
          <p class="section-sub">Inspect how Inrank approaches technical diagnosis, execution standards, and measurable commercial outcomes for industry leaders.</p>
        </div>

        <div class="work-grid">
          
          <!-- Case Study Card 1: greytothegreen -->
          <article class="work-card" data-filter="architecture" data-reveal>
            <div class="work-card-media">
              <img src="/portfolio/screenshots/greytothegreen.webp" alt="Greytothegreen Sustainable Architecture Platform Hero Screenshot" loading="lazy" />
              <span class="work-card-pill">+340% Inquiries</span>
            </div>
            <div class="work-card-body">
              <span class="work-card-category">Landscape Architecture &amp; Botanical D2C</span>
              <h3 class="work-card-title"><a href="/case-studies/greytothegreen.html">Greytothegreen — Sustainable Architecture Platform</a></h3>
              <p class="work-card-desc">Tripled organic search inquiries in 60 days with sub-second Next.js architecture, 99 Lighthouse score, and automated WhatsApp lead routing.</p>
            </div>
            <div class="work-card-footer">
              <span class="work-card-metric">+340% Inquiries</span>
              <div class="work-card-actions">
                <a href="https://greytothegreen.com/" target="_blank" rel="noopener noreferrer" class="work-live-link" title="View Live Website">
                  <span>Live Site</span>
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
                </a>
                <a href="/case-studies/greytothegreen.html" class="work-card-link">
                  <span>Case Study</span>
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3H5M13 3V11"/></svg>
                </a>
              </div>
            </div>
          </article>

          <!-- Case Study Card 2: shetkarifoodstuff -->
          <article class="work-card" data-filter="ecommerce" data-reveal>
            <div class="work-card-media">
              <img src="/portfolio/screenshots/shetkarifoodstuff.webp" alt="Shetkari Foodstuff LLC Agro-Export E-Commerce Hero Screenshot" loading="lazy" />
              <span class="work-card-pill">₹18L+ Export GMV</span>
            </div>
            <div class="work-card-body">
              <span class="work-card-category">Agro-Export &amp; E-Commerce</span>
              <h3 class="work-card-title"><a href="/case-studies/shetkarifoodstuff.html">Shetkari Foodstuff — Export E-Commerce Infrastructure</a></h3>
              <p class="work-card-desc">Multi-currency export e-commerce infrastructure with targeted GCC search ads generating over ₹18L+ monthly export GMV.</p>
            </div>
            <div class="work-card-footer">
              <span class="work-card-metric">₹18L+ Export GMV</span>
              <div class="work-card-actions">
                <a href="https://shetkarifoodstuff.com/" target="_blank" rel="noopener noreferrer" class="work-live-link" title="View Live Website">
                  <span>Live Site</span>
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3H5M13 3V11"/></svg>
                </a>
                <a href="/case-studies/shetkarifoodstuff.html" class="work-card-link">
                  <span>Case Study</span>
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3H5M13 3V11"/></svg>
                </a>
              </div>
            </div>
          </article>

          <!-- Case Study Card 3: cytos -->
          <article class="work-card" data-filter="manufacturing" data-reveal>
            <div class="work-card-media">
              <img src="/portfolio/screenshots/cytos.webp" alt="CyTOS Machines — Chemical-Free Laboratory PCB CNC Milling Systems Hero Screenshot" loading="lazy" />
              <span class="work-card-pill">+314% Industrial RFQs</span>
            </div>
            <div class="work-card-body">
              <span class="work-card-category">Precision CNC Machinery &amp; SPMs</span>
              <h3 class="work-card-title"><a href="/case-studies/cytos.html">CyTOS Machines — Laboratory PCB CNC Milling Systems</a></h3>
              <p class="work-card-desc">Chemical-free laboratory PCB milling machines &amp; turnkey SPMs with sub-second React architecture, interactive machine finder, and technical B2B SEO ranking dominance.</p>
            </div>
            <div class="work-card-footer">
              <span class="work-card-metric">+314% Industrial RFQs</span>
              <div class="work-card-actions">
                <a href="https://cytos.in/" target="_blank" rel="noopener noreferrer" class="work-live-link" title="View Live Website">
                  <span>Live Site</span>
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
                </a>
                <a href="/case-studies/cytos.html" class="work-card-link">
                  <span>Case Study</span>
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3H5M13 3V11"/></svg>
                </a>
              </div>
            </div>
          </article>

          <!-- Case Study Card 4: fludio -->
          <article class="work-card" data-filter="manufacturing" data-reveal>
            <div class="work-card-media">
              <img src="/portfolio/screenshots/fludio.webp" alt="Fludio Water Solutions Industrial Filtration Systems Hero Screenshot" loading="lazy" />
              <span class="work-card-pill">99 Lighthouse Score</span>
            </div>
            <div class="work-card-body">
              <span class="work-card-category">Industrial Water Filtration &amp; Engineering</span>
              <h3 class="work-card-title"><a href="/case-studies/fludio.html">Fludio Water Solutions — Industrial Filtration Systems</a></h3>
              <p class="work-card-desc">High-speed industrial filtration catalog with B2B quotation builder and technical Google 3-Pack rank across Maharashtra industrial corridors.</p>
            </div>
            <div class="work-card-footer">
              <span class="work-card-metric">99 Lighthouse Score</span>
              <div class="work-card-actions">
                <a href="https://fludio.in/" target="_blank" rel="noopener noreferrer" class="work-live-link" title="View Live Website">
                  <span>Live Site</span>
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3H5M13 3V11"/></svg>
                </a>
                <a href="/case-studies/fludio.html" class="work-card-link">
                  <span>Case Study</span>
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3H5M13 3V11"/></svg>
                </a>
              </div>
            </div>
          </article>

          <!-- Case Study Card 5: hcpnest -->
          <article class="work-card" data-filter="healthcare" data-reveal>
            <div class="work-card-media">
              <img src="/portfolio/screenshots/hcpnest.webp" alt="HCPNest Medical Staffing Platform Hero Screenshot" loading="lazy" />
              <span class="work-card-pill">4.8x Lead Flow</span>
            </div>
            <div class="work-card-body">
              <span class="work-card-category">Healthcare Staffing &amp; Talent Network</span>
              <h3 class="work-card-title"><a href="/case-studies/hcpnest.html">HCPNest — Medical Staffing &amp; Healthcare Talent Network</a></h3>
              <p class="work-card-desc">Healthcare professional hiring portal with candidate onboarding automation, HIPAA-ready candidate intake, and 4.8x qualified doctor/nurse applicants.</p>
            </div>
            <div class="work-card-footer">
              <span class="work-card-metric">4.8x Lead Flow</span>
              <div class="work-card-actions">
                <a href="https://hcpnest.com/" target="_blank" rel="noopener noreferrer" class="work-live-link" title="View Live Website">
                  <span>Live Site</span>
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3H5M13 3V11"/></svg>
                </a>
                <a href="/case-studies/hcpnest.html" class="work-card-link">
                  <span>Case Study</span>
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3H5M13 3V11"/></svg>
                </a>
              </div>
            </div>
          </article>

          <!-- Case Study Card 6: hiragrafix -->
          <article class="work-card" data-filter="manufacturing" data-reveal>
            <div class="work-card-media">
              <img src="/portfolio/screenshots/hiragrafix.webp" alt="HIRAGRAFIX Luxury Packaging & Commercial Printing Hero Screenshot" loading="lazy" />
              <span class="work-card-pill">98/100 Core Web Vitals</span>
            </div>
            <div class="work-card-body">
              <span class="work-card-category">Luxury Rigid Packaging &amp; Printing</span>
              <h3 class="work-card-title"><a href="/case-studies/hiragrafix.html">HIRAGRAFIX™ — Luxury Packaging &amp; Commercial Printing</a></h3>
              <p class="work-card-desc">Luxury rigid box &amp; mono carton packaging portfolio with custom 3D finish previews and B2B corporate procurement lead funnels.</p>
            </div>
            <div class="work-card-footer">
              <span class="work-card-metric">98/100 Core Web Vitals</span>
              <div class="work-card-actions">
                <a href="https://hiragrafix.com/" target="_blank" rel="noopener noreferrer" class="work-live-link" title="View Live Website">
                  <span>Live Site</span>
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3H5M13 3V11"/></svg>
                </a>
                <a href="/case-studies/hiragrafix.html" class="work-card-link">
                  <span>Case Study</span>
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3H5M13 3V11"/></svg>
                </a>
              </div>
            </div>
          </article>

          <!-- Case Study Card 7: orthopedicanklefootspecialist -->
          <article class="work-card" data-filter="healthcare" data-reveal>
            <div class="work-card-media">
              <img src="/portfolio/screenshots/orthopedicanklefootspecialist.webp" alt="Dr. Shyam Thakkar Orthopedic Foot & Ankle Clinic Hero Screenshot" loading="lazy" />
              <span class="work-card-pill">Top 3 Google Rankings</span>
            </div>
            <div class="work-card-body">
              <span class="work-card-category">Orthopedic Foot &amp; Ankle Surgical Practice</span>
              <h3 class="work-card-title"><a href="/case-studies/orthopedicanklefootspecialist.html">Dr. Shyam Thakkar — Orthopedic Foot &amp; Ankle Clinic</a></h3>
              <p class="work-card-desc">Clinical authority portal with surgical schema markup, direct patient WhatsApp appointment booking, and top 3 local rankings in Pune.</p>
            </div>
            <div class="work-card-footer">
              <span class="work-card-metric">Top 3 Google Rankings</span>
              <div class="work-card-actions">
                <a href="https://orthopedicanklefootspecialist.com/" target="_blank" rel="noopener noreferrer" class="work-live-link" title="View Live Website">
                  <span>Live Site</span>
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3H5M13 3V11"/></svg>
                </a>
                <a href="/case-studies/orthopedicanklefootspecialist.html" class="work-card-link">
                  <span>Case Study</span>
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3H5M13 3V11"/></svg>
                </a>
              </div>
            </div>
          </article>

          <!-- Case Study Card 8: riituinstitution -->
          <article class="work-card" data-filter="education" data-reveal>
            <div class="work-card-media">
              <img src="/portfolio/screenshots/riituinstitution.webp" alt="Riitu Institution Student Admissions Coaching Hero Screenshot" loading="lazy" />
              <span class="work-card-pill">12,000+ Enrolment Inquiries</span>
            </div>
            <div class="work-card-body">
              <span class="work-card-category">Admissions Coaching &amp; Learning LMS</span>
              <h3 class="work-card-title"><a href="/case-studies/riituinstitution.html">Riitu Institution — Student Admissions &amp; Coaching Platform</a></h3>
              <p class="work-card-desc">Scalable education portal with course discovery, entrance exam prep landing funnels, and 12,000+ verified student inquiries.</p>
            </div>
            <div class="work-card-footer">
              <span class="work-card-metric">12,000+ Enrolment Inquiries</span>
              <div class="work-card-actions">
                <a href="https://riituinstitution.com/" target="_blank" rel="noopener noreferrer" class="work-live-link" title="View Live Website">
                  <span>Live Site</span>
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3H5M13 3V11"/></svg>
                </a>
                <a href="/case-studies/riituinstitution.html" class="work-card-link">
                  <span>Case Study</span>
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3H5M13 3V11"/></svg>
                </a>
              </div>
            </div>
          </article>

          <!-- Case Study Card 9: vasroventures -->
          <article class="work-card" data-filter="architecture" data-reveal>
            <div class="work-card-media">
              <img src="/portfolio/screenshots/vasroventures.webp" alt="Vasro Ventures Commercial Real Estate Hero Screenshot" loading="lazy" />
              <span class="work-card-pill">₹120Cr Inventory Scaled</span>
            </div>
            <div class="work-card-body">
              <span class="work-card-category">Commercial Real Estate Advisory</span>
              <h3 class="work-card-title"><a href="/case-studies/vasroventures.html">Vasro Ventures — Commercial Real Estate Platform</a></h3>
              <p class="work-card-desc">Commercial property listing engine with interactive floor plan viewers, virtual tour routing, and HNWI investor lead pipelines.</p>
            </div>
            <div class="work-card-footer">
              <span class="work-card-metric">₹120Cr Inventory Scaled</span>
              <div class="work-card-actions">
                <a href="https://vasroventures.com/" target="_blank" rel="noopener noreferrer" class="work-live-link" title="View Live Website">
                  <span>Live Site</span>
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3H5M13 3V11"/></svg>
                </a>
                <a href="/case-studies/vasroventures.html" class="work-card-link">
                  <span>Case Study</span>
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3H5M13 3V11"/></svg>
                </a>
              </div>
            </div>
          </article>

          <!-- Case Study Card 10: dravyafinancial -->
          <article class="work-card" data-filter="professional" data-reveal>
            <div class="work-card-media">
              <img src="/portfolio/screenshots/dravyafinancial.webp" alt="Dravya Financial Solutions — Enterprise Wealth Advisory Portal Hero Screenshot" loading="lazy" />
              <span class="work-card-pill">₹45Cr+ Inquiries</span>
            </div>
            <div class="work-card-body">
              <span class="work-card-category">Wealth &amp; Advisory</span>
              <h3 class="work-card-title"><a href="/case-studies/dravyafinancial.html">Dravya Financial Solutions — Enterprise Wealth Advisory Portal</a></h3>
              <p class="work-card-desc">High-trust financial architecture with client portal integration, compliance-first lead funnels, and targeted Pune HNWI investment search visibility.</p>
            </div>
            <div class="work-card-footer">
              <span class="work-card-metric">₹45Cr+ Portfolio Inquiries</span>
              <div class="work-card-actions">
                <a href="https://dravyafinancial.com/" target="_blank" rel="noopener noreferrer" class="work-live-link" title="View Live Website">
                  <span>Live Site</span>
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3H5M13 3V11"/></svg>
                </a>
                <a href="/case-studies/dravyafinancial.html" class="work-card-link">
                  <span>Case Study</span>
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3H5M13 3V11"/></svg>
                </a>
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>

  `;

file = file.slice(0, startIndex) + filterStripAndGrid + file.slice(endIndex);

// Add the filter script before </body>
const scriptTag = `  <script>
    // Client-side instant filtering with !important support
    function initCaseFilter() {
      const buttons = document.querySelectorAll('.filter-btn');
      const cards = document.querySelectorAll('.work-card');
      if (!buttons.length || !cards.length) return;

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
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initCaseFilter);
    } else {
      initCaseFilter();
    }
  </script>
`;

if (!file.includes('initCaseFilter')) {
  file = file.replace('</body>', `${scriptTag}\n</body>`);
}

fs.writeFileSync('inrank2.0/case-studies.html', file, 'utf8');
console.log('Successfully updated inrank2.0/case-studies.html with all 10 verified case studies and filtering!');

