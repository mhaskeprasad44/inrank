const fs = require('fs');

const pillar1 = [
  {
    idx: '01 / 07',
    file: 'seo-company-pune.html',
    title: 'SEO Company Pune',
    desc: 'Technical search engineering, Core Web Vitals speed optimization, and commercial ranking dominance for high-intent queries in Pune.',
    chips: ['Local SEO Pune', 'Core Web Vitals', 'High-Intent Rank'],
    icon: '<path d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"/><path d="m21 21-4.35-4.35"/>'
  },
  {
    idx: '02 / 07',
    file: 'ai-seo-services.html',
    title: 'AI SEO Services',
    desc: 'Optimize your brand to be cited and recommended by ChatGPT, Google AI Overviews, Gemini, and Perplexity with verified entity graphs.',
    chips: ['AI Overviews', 'Entity Authority', 'Generative Search'],
    icon: '<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/>'
  },
  {
    idx: '03 / 07',
    file: 'geo-seo-agency.html',
    title: 'GEO & Answer Engines',
    desc: 'Specialized Generative Engine Optimization (GEO) engineering structured entity schemas and citations to lead conversational answers.',
    chips: ['Perplexity AI', 'Knowledge Graphs', 'Zero-Click Answers'],
    icon: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>'
  },
  {
    idx: '04 / 07',
    file: 'google-my-business-services.html',
    title: 'Google 3-Pack & Maps',
    desc: 'Dominate Google Maps and local 3-Pack rankings in Baner, Hinjewadi, and Pune to drive direct phone calls, footfall, and inquiries.',
    chips: ['GMB Optimization', 'Local 3-Pack', 'Pune Citations'],
    icon: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>'
  },
  {
    idx: '05 / 07',
    file: 'link-building-services.html',
    title: 'Authority Link Building',
    desc: 'Secure high-authority, editorial backlinks that permanently boost your domain rating with zero spam, zero toxic networks, and zero PBN risk.',
    chips: ['Editorial Backlinks', 'Domain Authority', 'Digital PR'],
    icon: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>'
  },
  {
    idx: '06 / 07',
    file: 'ai-ranking-citations.html',
    title: 'AI Citations & Entity Graphs',
    desc: 'Build authoritative AI ranking citations and structured entity schemas that feed LLM knowledge bases and answer engine discovery.',
    chips: ['Entity Graphs', 'Schema.org', 'LLM Ingestion'],
    icon: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>'
  },
  {
    idx: '07 / 07',
    file: 'content-marketing-services.html',
    title: 'Content Marketing',
    desc: 'Authoritative B2B whitepapers, technical articles, and SEO content that establish industry authority and convert readers into buyers.',
    chips: ['Technical Whitepapers', 'Commercial Copy', 'B2B Thought Leadership'],
    icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>'
  }
];

const pillar2 = [
  {
    idx: '01 / 07',
    file: 'custom-website-development.html',
    title: 'Custom Web Development',
    desc: 'Sub-second Next.js and modern React web architecture engineered for speed, clean security, and 90+ Google Lighthouse performance.',
    chips: ['Next.js / React', '90+ Lighthouse', 'API Integration'],
    icon: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>'
  },
  {
    idx: '02 / 07',
    file: 'wordpress-development-services.html',
    title: 'WordPress Development',
    desc: 'Fast, secure enterprise WordPress portals built with lightweight custom themes, zero page-builder bloat, and hardened architectures.',
    chips: ['Custom Themes', 'Zero Bloat', 'Enterprise Security'],
    icon: '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>'
  },
  {
    idx: '03 / 07',
    file: 'ecommerce-website-development-company.html',
    title: 'E-Commerce Development',
    desc: 'High-conversion online stores engineered for scale, instant search, frictionless checkout funnels, and multi-currency global sales.',
    chips: ['Custom Checkout', 'Payment Gateways', 'High GMV Scale'],
    icon: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>'
  },
  {
    idx: '04 / 07',
    file: 'shopify-store-development.html',
    title: 'Shopify Store Development',
    desc: 'Shopify & Shopify Plus storefronts optimized for mobile conversion speed, custom Liquid engineering, and maximum Average Order Value.',
    chips: ['Shopify Plus', 'Liquid Architecture', 'AOV Lift'],
    icon: '<path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/>'
  },
  {
    idx: '05 / 07',
    file: 'mobile-app-development.html',
    title: 'Mobile App Engineering',
    desc: 'Fluid cross-platform iOS and Android mobile applications built with Flutter, offline caching, and clean microservice backends.',
    chips: ['Flutter iOS & Android', 'Offline First', 'Sub-Second Native'],
    icon: '<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>'
  },
  {
    idx: '06 / 07',
    file: 'website-maintenance-services.html',
    title: 'Website Maintenance',
    desc: 'Proactive 24/7 security monitoring, daily automated cloud backups, Core Web Vitals speed tuning, and SLA-backed engineering updates.',
    chips: ['24/7 Monitoring', 'Core Web Vitals SLA', 'Daily Backups'],
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'
  },
  {
    idx: '07 / 07',
    file: 'landing-page-design-services.html',
    title: 'Landing Page Sprints',
    desc: 'Rapid high-conversion landing page sprints engineered specifically for Google Ads and Meta campaigns with sub-second LCP speed.',
    chips: ['Ad Lead Sprints', 'A/B Split Testing', 'Sub-Second LCP'],
    icon: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>'
  }
];

const pillar3 = [
  {
    idx: '01 / 06',
    file: 'ppc-services.html',
    title: 'PPC Management',
    desc: 'High-ROI pay-per-click advertising across Google Search, Meta Ads, and LinkedIn with profit-first budget allocation and zero waste.',
    chips: ['Multi-Channel PPC', 'Server-Side Tracking', 'Profit-First ROI'],
    icon: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>'
  },
  {
    idx: '02 / 06',
    file: 'google-ads-agency.html',
    title: 'Google Ads Agency',
    desc: 'Precision Google Search, Performance Max, and YouTube Ads management engineered to eliminate junk clicks and harvest buyer intent.',
    chips: ['Google Search Ads', 'Performance Max', 'Negative Keywords'],
    icon: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>'
  },
  {
    idx: '03 / 06',
    file: 'meta-ads-agency.html',
    title: 'Meta & Instagram Ads',
    desc: 'High-converting visual ad creatives, lookalike audiences, and Conversions API (CAPI) tracking for Instagram & Facebook lead funnels.',
    chips: ['Instagram Lead Gen', 'Meta CAPI Tracking', 'Creative Velocity'],
    icon: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>'
  },
  {
    idx: '04 / 06',
    file: 'linkedin-marketing-agency.html',
    title: 'LinkedIn B2B Marketing',
    desc: 'Account-based marketing (ABM) and thought leadership ads reaching verified enterprise directors and corporate decision-makers.',
    chips: ['B2B Lead Generation', 'Account-Based Marketing', 'C-Suite Targeting'],
    icon: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'
  },
  {
    idx: '05 / 06',
    file: 'social-media-marketing-services.html',
    title: 'Social Media Growth',
    desc: 'Consistent, high-impact brand visual storytelling, video reels, and organic audience engagement across LinkedIn and Instagram.',
    chips: ['Brand Storytelling', 'Organic Reach', 'Reels Production'],
    icon: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>'
  },
  {
    idx: '06 / 06',
    file: 'influencer-marketing-agency.html',
    title: 'Influencer Campaigns',
    desc: 'Vetted B2B industry voices and niche creator partnerships managed end-to-end for authentic brand endorsement and high attribution.',
    chips: ['Creator Partnerships', 'Niche Whitelisting', 'Attribution Tracking'],
    icon: '<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>'
  }
];

const pillar4 = [
  {
    idx: '01 / 07',
    file: 'ui-ux-design-services.html',
    title: 'UI/UX Design Systems',
    desc: 'User-tested Figma design systems, interactive prototypes, and high-converting wireframes built for enterprise applications.',
    chips: ['Figma Design Systems', 'Wireframing', 'User Research'],
    icon: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>'
  },
  {
    idx: '02 / 07',
    file: 'conversion-rate-optimization-services.html',
    title: 'Conversion Optimization (CRO)',
    desc: 'Data-driven CRO audits, heatmap session recordings, and rigorous multivariate A/B testing that lift leads without increasing ad spend.',
    chips: ['A/B Testing', 'Heatmap Diagnostics', 'Form Friction Fixes'],
    icon: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>'
  },
  {
    idx: '03 / 07',
    file: 'corporate-logo-design.html',
    title: 'Corporate Logo Design',
    desc: 'Distinctive vector logos, typographic systems, and comprehensive corporate brand guideline books that command immediate market trust.',
    chips: ['Vector Brand Marks', 'Color Systems', 'Brand Guidelines'],
    icon: '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>'
  },
  {
    idx: '04 / 07',
    file: 'brand-naming-agency.html',
    title: 'Brand Naming Agency',
    desc: 'Strategic corporate naming, domain acquisition vetting, linguistic screening, and Indian trademark clearance readiness.',
    chips: ['Trademark Screening', 'Domain Acquisition', 'Brand Positioning'],
    icon: '<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>'
  },
  {
    idx: '05 / 07',
    file: 'brochure-design-services.html',
    title: 'Brochure & Collateral',
    desc: 'High-impact corporate capability profiles, product catalog architectures, and executive sales pitchbooks engineered to close high-ticket deals.',
    chips: ['Corporate Profiles', 'Sales Pitchbooks', 'Product Catalogs'],
    icon: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>'
  },
  {
    idx: '06 / 07',
    file: 'letterhead-stationery-design.html',
    title: 'Letterhead & Stationery',
    desc: 'Professional executive letterheads, digital Microsoft Word templates, invoicing suites, and branded corporate envelopes.',
    chips: ['Executive Stationery', 'Digital Word Templates', 'Invoice Design'],
    icon: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>'
  },
  {
    idx: '07 / 07',
    file: 'luxury-business-card-design.html',
    title: 'Luxury Business Cards',
    desc: 'Tactile, ultra-premium executive visiting cards crafted with 450+ GSM stocks, metallic foil stamping, embossing, and spot UV finishes.',
    chips: ['450+ GSM Stocks', 'Foil Stamping', 'Tactile Finishes'],
    icon: '<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>'
  }
];

function renderServiceCard(s) {
  const chipsHtml = s.chips.map(c => `<span class="service-chip">${c}</span>`).join('');
  return `
            <!-- Service Card: ${s.file} -->
            <article class="service-card" data-reveal>
              <div class="service-card-head">
                <div class="service-icon-wrap" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    ${s.icon}
                  </svg>
                </div>
                <span class="service-idx">${s.idx}</span>
              </div>
              <h3 class="service-card-title">
                <a href="/services/${s.file}" style="text-decoration:none;color:inherit;">${s.title}</a>
              </h3>
              <p class="service-card-text">${s.desc}</p>
              <div class="service-card-chips">
                ${chipsHtml}
              </div>
              <a href="/services/${s.file}" class="service-card-link" aria-label="Explore ${s.title} service">
                <span>Explore Service</span>
                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3H5M13 3V11"/></svg>
              </a>
            </article>`;
}

function renderPillar(id, kicker, stat, title, desc, services) {
  const cardsHtml = services.map(renderServiceCard).join('\n');
  return `
        <!-- ${kicker}: ${title} -->
        <div id="${id}" style="background:#ffffff;border:1px solid var(--line);border-radius:24px;padding:3rem 2.5rem;margin-bottom:3rem;">
          <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:1rem;">
            <div style="display:flex;align-items:center;gap:12px;">
              <span class="section-kicker">${kicker}</span>
              <span style="font-size:0.85rem;font-weight:800;color:var(--terra);">${stat}</span>
            </div>
            <span style="font-size:0.8rem;font-weight:750;color:#64748b;background:var(--paper);padding:4px 12px;border-radius:999px;border:1px solid var(--line);">${services.length} Specialized Services</span>
          </div>
          <h2 style="font-size:2rem;font-weight:850;color:var(--text-strong);margin:0 0 1rem;letter-spacing:-0.02em;">${title}</h2>
          <p style="font-size:1rem;color:#475569;line-height:1.6;margin-bottom:2.25rem;max-width:860px;">
            ${desc}
          </p>
          <div class="services-grid" style="display:grid;grid-template-columns:repeat(auto-fill, minmax(280px, 1fr));gap:1.5rem;">
${cardsHtml}
          </div>
        </div>`;
}

let file = fs.readFileSync('inrank2.0/services.html', 'utf8');

const p1Start = file.indexOf('<!-- Pillar 1 -->');
const closeCta = file.indexOf('<!-- Closing Dual Action Cards -->');

if (p1Start === -1 || closeCta === -1) {
  console.error('Markers not found in services.html');
  process.exit(1);
}

const p1Html = renderPillar(
  'pillar-1',
  'PILLAR 01',
  '+318% Average Organic Traffic Surge',
  'Search Engine &amp; AI Discovery Engineering',
  'Dominate Google search results and emerging generative AI answer engines. We execute high-authority local SEO in Pune, Generative Engine Optimization (GEO), Google Business Profile 3-Pack optimization, and technical backlink acquisition.',
  pillar1
);

const p2Html = renderPillar(
  'pillar-2',
  'PILLAR 02',
  '< 1.2s Average Page Load Speed',
  'High-Performance Web Architecture &amp; Engineering',
  'Sub-second web architectures built with semantic HTML5, modern Next.js/React, and lightweight WordPress. Engineered to convert casual traffic into qualified buyers with zero layout shift and 90+ Lighthouse scores.',
  pillar2
);

const p3Html = renderPillar(
  'pillar-3',
  'PILLAR 03',
  '4.8x Average Return on Ad Spend',
  'Performance Marketing &amp; Paid Acquisition',
  'High-intent paid ad funnels engineered for profitable customer acquisition across Google Search, Performance Max, Meta Ads, and LinkedIn with end-to-end CRM attribution and zero wasted ad spend.',
  pillar3
);

const p4Html = renderPillar(
  'pillar-4',
  'PILLAR 04',
  '+42% Average Conversion Rate Lift',
  'Brand Identity &amp; Conversion Rate Optimization (CRO)',
  'Eliminating bounce rates and friction points with high-fidelity Figma user journey prototypes, strategic copywriting, and brand identity systems that establish immediate commercial trust and premium market positioning.',
  pillar4
);

const fullPillarsHtml = `${p1Html}\n${p2Html}\n${p3Html}\n${p4Html}\n\n      </div>\n    </section>\n\n  `;

file = file.slice(0, p1Start) + fullPillarsHtml + file.slice(closeCta);

fs.writeFileSync('inrank2.0/services.html', file, 'utf8');
console.log('Successfully updated inrank2.0/services.html with all 27 services and links across all 4 pillars!');

