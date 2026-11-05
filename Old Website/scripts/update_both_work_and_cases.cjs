const fs = require('fs');

const works = [
  {
    id: 'greytothegreen',
    filter: 'ecommerce',
    media: '/portfolio/screenshots/greytothegreen.webp',
    pill: '+340% Inquiries',
    category: 'Plant-Powered Biotech &amp; Eco Care',
    title: 'Grey To The Green — Plant-Powered Home Care &amp; Biotech Formulations',
    desc: 'Translating cutting-edge molecular biology (US EPA-registered neem dust-mite eliminator Checkmite) into high-converting eco-luxury D2C storefront and B2B distributor portal.',
    metric: '+340% Inquiries',
    liveUrl: 'https://greytothegreen.com/'
  },
  {
    id: 'vasroventures',
    filter: 'ecommerce',
    media: '/portfolio/screenshots/vasroventures.webp',
    pill: '₹120Cr Inventory Scaled',
    category: 'Contemporary Fashion &amp; Lifestyle Apparel',
    title: 'Vasro Ventures — Contemporary Fashion &amp; Apparel Storefront',
    desc: 'Chic editorial fashion lookbook & digital apparel storefront with fluid category transitions, responsive silhouette guides, and Instagram shopping funnels.',
    metric: '₹120Cr Inventory Scaled',
    liveUrl: 'https://vasroventures.com/'
  },
  {
    id: 'shetkarifoodstuff',
    filter: 'ecommerce',
    media: '/portfolio/screenshots/shetkarifoodstuff.webp',
    pill: '₹18L+ Export GMV',
    category: 'Agro Commodity Export &amp; International Trade',
    title: 'Shetkari Foodstuff — Export E-Commerce Infrastructure',
    desc: 'Multi-currency farm-fresh produce export infrastructure with targeted GCC search ads and Generative Engine Optimization (GEO) across UAE, Saudi Arabia, and Oman.',
    metric: '₹18L+ Export GMV',
    liveUrl: 'https://shetkarifoodstuff.com/'
  },
  {
    id: 'cytos',
    filter: 'manufacturing',
    media: '/portfolio/screenshots/cytos.webp',
    pill: '+314% Industrial RFQs',
    category: 'Precision CNC Machinery &amp; Turnkey SPMs',
    title: 'CyTOS Machines — Laboratory PCB CNC Milling Systems',
    desc: 'Chemical-free laboratory PCB milling machines & turnkey SPMs with sub-second React architecture, interactive machine recommendation wizard, and technical B2B SEO ranking dominance.',
    metric: '+314% Industrial RFQs',
    liveUrl: 'https://cytos.in/'
  },
  {
    id: 'fludio',
    filter: 'manufacturing',
    media: '/portfolio/screenshots/fludio.webp',
    pill: '99 Lighthouse Score',
    category: 'Architectural Fountains &amp; Aquatic Engineering',
    title: 'Fludio Water Solutions — Architectural Fountains &amp; Aquatic Systems',
    desc: 'High-speed architectural fountain catalog with automated DMX 512 dancing water showcases, B2B quotation builder, and municipal engineering credibility.',
    metric: '99 Lighthouse Score',
    liveUrl: 'https://fludio.in/'
  },
  {
    id: 'hiragrafix',
    filter: 'manufacturing',
    media: '/portfolio/screenshots/hiragrafix.webp',
    pill: '98/100 Core Web Vitals',
    category: 'Luxury Packaging &amp; Commercial Printing',
    title: 'HIRAGRAFIX™ — Luxury Packaging &amp; Commercial Printing',
    desc: 'Luxury rigid box & mono carton packaging portfolio with custom finish previews and B2B corporate procurement lead funnels (Est. 1970 Mumbai).',
    metric: '98/100 Core Web Vitals',
    liveUrl: 'https://hiragrafix.com/'
  },
  {
    id: 'hcpnest',
    filter: 'healthcare',
    media: '/portfolio/screenshots/hcpnest.webp',
    pill: '4.8x Lead Flow',
    category: 'Healthcare Staffing &amp; Medical Recruitment',
    title: 'HCPNest — Medical Staffing &amp; Healthcare Talent Network',
    desc: 'Dual-sided clinical staffing portal with verified credential intake, candidate onboarding automation, and 4-day placement turnaround for hospitals.',
    metric: '4.8x Lead Flow',
    liveUrl: 'https://hcpnest.com/'
  },
  {
    id: 'orthopedicanklefootspecialist',
    filter: 'healthcare',
    media: '/portfolio/screenshots/orthopedicanklefootspecialist.webp',
    pill: 'Top 3 Google Rankings',
    category: 'Orthopedic Foot &amp; Ankle Surgical Practice',
    title: 'Dr. Shyam Thakkar — Orthopedic Foot &amp; Ankle Clinic',
    desc: 'Clinical authority portal with surgical schema markup, direct patient WhatsApp appointment booking, and top 3 local rankings across Pune & Mumbai.',
    metric: 'Top 3 Google Rankings',
    liveUrl: 'https://orthopedicanklefootspecialist.com/'
  },
  {
    id: 'dravyafinancial',
    filter: 'finance',
    media: '/portfolio/screenshots/dravyafinancial.webp',
    pill: '₹45Cr+ Inquiries',
    category: 'Corporate Capital &amp; Structured Debt Advisory',
    title: 'Dravya Financial Solutions — Enterprise Capital Advisory Portal',
    desc: 'Institutional financial architecture for corporate debt syndication, JDA funding, and working capital advisory with automated deal qualification filters.',
    metric: '₹45Cr+ Inquiries',
    liveUrl: 'https://dravyafinancial.com/'
  },
  {
    id: 'riituinstitution',
    filter: 'education',
    media: '/portfolio/screenshots/riituinstitution.webp',
    pill: '12,000+ Enrolment Inquiries',
    category: 'CA, Commerce &amp; Academic Coaching Academy',
    title: 'Riitu Institution — Student Admissions &amp; Coaching Academy',
    desc: 'Scalable education portal for CA Foundation, CS, and commerce coaching with course discovery, entrance exam prep funnels, and 12,000+ student inquiries.',
    metric: '12,000+ Enrolment Inquiries',
    liveUrl: 'https://riituinstitution.com/'
  }
];

function buildFilterStrip(idPrefix = '') {
  return `<!-- Modern Segmented Filter Strip -->
    <section class="work-filter-strip" id="${idPrefix}filter-bar">
      <div class="shell work-filter-wrap">
        <div class="work-filter-label">
          <span class="work-filter-label-dot" aria-hidden="true"></span>
          <span>Filter Sectors</span>
        </div>
        <div class="work-filter-pills" role="tablist" aria-label="Work category filters">
          <button class="filter-btn is-active" data-target="all" role="tab" aria-selected="true">
            <span>All Projects</span>
            <span class="filter-count">10</span>
          </button>
          <button class="filter-btn" data-target="healthcare" role="tab" aria-selected="false">
            <span>Healthcare &amp; Medical</span>
            <span class="filter-count">2</span>
          </button>
          <button class="filter-btn" data-target="manufacturing" role="tab" aria-selected="false">
            <span>Manufacturing &amp; Engineering</span>
            <span class="filter-count">3</span>
          </button>
          <button class="filter-btn" data-target="ecommerce" role="tab" aria-selected="false">
            <span>E-Commerce &amp; D2C</span>
            <span class="filter-count">3</span>
          </button>
          <button class="filter-btn" data-target="finance" role="tab" aria-selected="false">
            <span>Corporate Finance</span>
            <span class="filter-count">1</span>
          </button>
          <button class="filter-btn" data-target="education" role="tab" aria-selected="false">
            <span>Education &amp; Academics</span>
            <span class="filter-count">1</span>
          </button>
        </div>
      </div>
    </section>`;
}

function buildCards(type = 'work') {
  return works.map(w => {
    const detailUrl = type === 'work' ? `/our-work/${w.id}.html` : `/case-studies/${w.id}.html`;
    const btnLabel = type === 'work' ? 'Explore Work' : 'Case Study';
    return `
          <!-- Work Card: ${w.id} -->
          <article class="work-card" data-filter="${w.filter}" data-reveal>
            <div class="work-card-media">
              <img src="${w.media}" alt="${w.title} Screenshot" loading="lazy" />
              <span class="work-card-pill">${w.pill}</span>
            </div>
            <div class="work-card-body">
              <span class="work-card-category">${w.category}</span>
              <h3 class="work-card-title"><a href="${detailUrl}">${w.title}</a></h3>
              <p class="work-card-desc">${w.desc}</p>
            </div>
            <div class="work-card-footer">
              <span class="work-card-metric">${w.metric}</span>
              <div class="work-card-actions">
                <a href="${w.liveUrl}" target="_blank" rel="noopener noreferrer" class="work-live-link" title="View Live Website">
                  <span>Live Site</span>
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
                </a>
                <a href="${detailUrl}" class="work-card-link">
                  <span>${btnLabel}</span>
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3H5M13 3V11"/></svg>
                </a>
              </div>
            </div>
          </article>`;
  }).join('\n');
}

const filterScript = `
  <script>
    // Robust Instant Filtering for Work & Case Studies
    (function() {
      function initPortfolioFilter() {
        const buttons = document.querySelectorAll('.filter-btn');
        const cards = document.querySelectorAll('.work-card');
        if (!buttons.length || !cards.length) return;

        buttons.forEach(btn => {
          btn.addEventListener('click', () => {
            buttons.forEach(b => {
              b.classList.remove('is-active');
              b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('is-active');
            btn.setAttribute('aria-selected', 'true');

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
        document.addEventListener('DOMContentLoaded', initPortfolioFilter);
      } else {
        initPortfolioFilter();
      }
    })();
  </script>
`;

// 1. Update inrank2.0/our-work.html
{
  let html = fs.readFileSync('inrank2.0/our-work.html', 'utf8');
  const stripStart = html.indexOf('<!-- Work Filter Strip -->') !== -1 ? html.indexOf('<!-- Work Filter Strip -->') : html.indexOf('<section style="background:#ffffff;border-bottom:1px solid var(--line);');
  const closeSection = html.indexOf('<!-- Closing Dual Action Cards -->');
  
  if (stripStart !== -1 && closeSection !== -1) {
    const newSection = `${buildFilterStrip('')}

    <!-- Work Grid Section -->
    <section class="work-section" aria-labelledby="cases-title" style="padding:4rem 0 6rem;background:var(--paper);">
      <div class="shell">
        <div class="section-head" style="margin-bottom:3rem;">
          <span class="section-kicker">PROVEN REVENUE IMPACT</span>
          <h2 class="section-title" id="cases-title">Verified Deployments &amp; Production Web Work</h2>
          <p class="section-sub">Inspect how Inrank approaches technical diagnosis, execution standards, and measurable commercial outcomes for industry leaders.</p>
        </div>

        <div class="work-grid">
${buildCards('work')}
        </div>
      </div>
    </section>

  `;
    html = html.slice(0, stripStart) + newSection + html.slice(closeSection);
    
    // Replace script before </body>
    const oldScriptIdx = html.indexOf('<script>\n    // Client-side instant filtering');
    if (oldScriptIdx !== -1) {
      const oldScriptEnd = html.indexOf('</script>', oldScriptIdx) + 9;
      html = html.slice(0, oldScriptIdx) + filterScript + html.slice(oldScriptEnd);
    } else if (!html.includes('initPortfolioFilter')) {
      html = html.replace('</body>', `${filterScript}\n</body>`);
    }

    fs.writeFileSync('inrank2.0/our-work.html', html, 'utf8');
    console.log('Successfully updated inrank2.0/our-work.html with new filter design and exact relevant works!');
  } else {
    console.error('Could not find markers in our-work.html');
  }
}

// 2. Update inrank2.0/case-studies.html
{
  let html = fs.readFileSync('inrank2.0/case-studies.html', 'utf8');
  const stripStart = html.indexOf('<!-- Case Studies Filter Strip -->') !== -1 ? html.indexOf('<!-- Case Studies Filter Strip -->') : html.indexOf('<section id="cases"');
  const closeSection = html.indexOf('<!-- Closing Dual Action Cards -->');
  
  if (stripStart !== -1 && closeSection !== -1) {
    const newSection = `${buildFilterStrip('cases-')}

    <!-- Case Studies Grid Section -->
    <section class="work-section" aria-labelledby="cases-title" style="padding:4rem 0 6rem;background:var(--paper);">
      <div class="shell">
        <div class="section-head" style="margin-bottom:3rem;">
          <span class="section-kicker">PROVEN REVENUE IMPACT</span>
          <h2 class="section-title" id="cases-title">Verified Case Studies &amp; Documented Deliverables</h2>
          <p class="section-sub">Inspect how Inrank approaches technical diagnosis, execution standards, and measurable commercial outcomes for industry leaders.</p>
        </div>

        <div class="work-grid">
${buildCards('case-study')}
        </div>
      </div>
    </section>

  `;
    html = html.slice(0, stripStart) + newSection + html.slice(closeSection);
    
    // Replace script before </body>
    const oldScriptIdx = html.indexOf('<script>\n    // Client-side instant filtering');
    if (oldScriptIdx !== -1) {
      const oldScriptEnd = html.indexOf('</script>', oldScriptIdx) + 9;
      html = html.slice(0, oldScriptIdx) + filterScript + html.slice(oldScriptEnd);
    } else if (!html.includes('initPortfolioFilter')) {
      html = html.replace('</body>', `${filterScript}\n</body>`);
    }

    fs.writeFileSync('inrank2.0/case-studies.html', html, 'utf8');
    console.log('Successfully updated inrank2.0/case-studies.html with new filter design and exact relevant works!');
  } else {
    console.error('Could not find markers in case-studies.html');
  }
}

