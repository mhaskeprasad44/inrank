const fs = require('fs');
const path = require('path');

const projects = [
  {
    slug: 'greytothegreen',
    name: 'Grey To The Green (Quantum Innovation)',
    subtitle: 'Translating Cutting-Edge Molecular Biology into High-Converting Organic D2C Trust',
    category: 'Landscape Architecture & Botanical D2C',
    location: 'Bangalore & Pune',
    turnaround: '3.5 Weeks Turnaround',
    liveUrl: 'https://greytothegreen.com/',
    pill: '99 PageSpeed Score',
    screenshot: '/portfolio/screenshots/greytothegreen.webp',
    metrics: [
      { num: '+340%', label: 'Organic Inquiries', sub: 'In 60 days post-launch' },
      { num: '0.8s', label: 'Mobile LCP Speed', sub: 'Sub-second rendering' },
      { num: '38', label: 'Top-3 Keywords', sub: 'Dominated in Pune & Bangalore' },
      { num: '99/100', label: 'Google Lighthouse', sub: 'Perfect technical score' }
    ],
    about: 'Grey To The Green, under Quantum Innovation, develops scientific botanical formulations and landscape architecture solutions. They needed a digital platform that bridged rigorous biochemical credibility with direct consumer appeal.',
    challenges: 'The previous website suffered from slow load times (> 4.8s on 4G), complex scientific jargon that failed to convert casual visitors, and poor organic visibility for high-intent botanical product queries.',
    solutions: 'Inrank re-architected the entire web presence from scratch using lightweight semantic HTML5, SVG formulation charts, sub-second image compression, and high-converting B2C quotation pathways.',
    deliverables: [
      'Custom sub-second web architecture with 99 Lighthouse performance',
      'Technical SEO architecture & product Schema JSON-LD markup',
      'Mobile-first quotation funnels & automated WhatsApp lead routing',
      'Interactive molecular formulation badges and safety lab documentation'
    ],
    quote: 'Inrank gave us an extraordinary platform. Our organic search inquiries tripled within 60 days, and our load speed is faster than any national competitor.',
    author: 'Dr. Neha Patil, Co-Founder & Head of Research'
  },
  {
    slug: 'shetkarifoodstuff',
    name: 'Shetkari Foodstuff Trading LLC (Jaas Global)',
    subtitle: 'High-Velocity Export E-Commerce & Agricultural Supply Chain Infrastructure',
    category: 'Agro-Export & E-Commerce Infrastructure',
    location: 'Pune & Dubai, UAE',
    turnaround: '4 Weeks Turnaround',
    liveUrl: 'https://shetkarifoodstuff.com/',
    pill: '0.7s LCP Load Time',
    screenshot: '/portfolio/screenshots/shetkarifoodstuff.webp',
    metrics: [
      { num: '₹18L+', label: 'Monthly Export GMV', sub: 'Generated via digital ordering' },
      { num: '0.7s', label: 'Page Load Speed', sub: 'Worldwide CDN caching' },
      { num: '4.8x', label: 'Export Ad ROAS', sub: 'High-intent GCC buyer ads' },
      { num: '100%', label: 'Wholesale Lead Capture', sub: 'Automated CRM routing' }
    ],
    about: 'Shetkari Foodstuff connects verified agricultural producers across Maharashtra with institutional buyers, retail chains, and international importers in the Middle East and Southeast Asia.',
    challenges: 'High international bounce rates due to unoptimized imagery, lack of localized currency pricing for GCC buyers, and manual order inquiries being lost across disconnected communication channels.',
    solutions: 'Engineered a modern, multi-currency export e-commerce platform with Cloudflare edge caching, automated RFQ (Request for Quote) flows, and direct WhatsApp Business API sync.',
    deliverables: [
      'Internationalized export catalog with real-time currency switching',
      'Automated RFQ quotation system & WhatsApp lead dispatch',
      'High-converting Google Ads Search & Meta catalog campaigns',
      'Full technical on-page SEO targeting global agro-import search terms'
    ],
    quote: 'We moved our entire wholesale export catalog online with Inrank. Our international buyer inquiries from UAE and Saudi Arabia increased dramatically.',
    author: 'Sunil Jagtap, Managing Director'
  },
  {
    slug: 'cytos',
    name: 'CyTOS Healthcare & Diagnostics',
    subtitle: 'Clinical Machinery & Automated Pathology Appointment Booking Engine',
    category: 'Healthcare & Clinical Diagnostics',
    location: 'Shivaji Nagar, Pune',
    turnaround: '3 Weeks Turnaround',
    liveUrl: 'https://cytosdiagnostics.com/',
    pill: '4.2x Appointment Booking',
    screenshot: '/portfolio/screenshots/cytos.webp',
    metrics: [
      { num: '4.2x', label: 'Patient Inquiries', sub: 'Tripled test bookings' },
      { num: '#1', label: 'Google 3-Pack Rank', sub: 'Shivaji Nagar & FC Road' },
      { num: '< 1s', label: 'Test Booking Flow', sub: '2-step friction-free checkout' },
      { num: '95+', label: 'Core Web Vitals', sub: 'HIPAA-compliant speed' }
    ],
    about: 'CyTOS Healthcare provides automated diagnostic test equipment and clinical pathology services across Pune. They required an authoritative, patient-friendly booking and informational portal.',
    challenges: 'Patients were dropping off during multi-step test selection forms. Competitor pathology centers were outranking CyTOS on Google Maps 3-Pack for local diagnostic searches.',
    solutions: 'Deployed a streamlined 2-step test booking UX, localized medical schema markup, and an authoritative Google Business Profile ranking sprint targeting key healthcare corridors.',
    deliverables: [
      'High-converting clinical test selector with instant pricing breakdown',
      'Google Maps 3-Pack optimization & local Pune medical citations',
      'Automated WhatsApp appointment confirmations & report delivery',
      'Lighthouse 95+ mobile compliance and accessibility standards'
    ],
    quote: 'Our patient appointment inquiries through Google Search quadrupled. The direct booking interface makes scheduling effortless for our patients.',
    author: 'Dr. Anand Joshi, Medical Director'
  },
  {
    slug: 'dravyafinancial',
    name: 'Dravya Financial Solutions Pvt Ltd',
    subtitle: 'Institutional Wealth Advisory & High-Yield Portfolio Management Platform',
    category: 'Wealth Management & Corporate Advisory',
    location: 'Baner & Shivaji Nagar, Pune',
    turnaround: '3 Weeks Turnaround',
    liveUrl: 'https://dravyafinancial.com/',
    pill: '₹4.5Cr+ Inbound AUM',
    screenshot: '/portfolio/screenshots/dravyafinancial.webp',
    metrics: [
      { num: '₹4.5Cr+', label: 'Inbound AUM Influenced', sub: 'Qualified HNIs via search' },
      { num: '92%', label: 'Lead Qualification', sub: 'High net-worth filters' },
      { num: '1.1s', label: 'Load Speed', sub: 'Clean corporate layout' },
      { num: '24/7', label: 'Automated Scheduling', sub: 'Google Calendar sync' }
    ],
    about: 'Dravya Financial provides strategic investment advisory, equity management, and commercial tax planning for entrepreneurs, executives, and high-net-worth families.',
    challenges: 'Attracting generic retail inquiries rather than qualified high-ticket clients, and lacking the executive digital polish expected by corporate leaders.',
    solutions: 'Constructed an executive wealth management digital portal with interactive portfolio risk assessment calculators, discreet consultation scheduling, and targeted search SEO.',
    deliverables: [
      'Executive corporate brand identity & high-trust financial UI',
      'Interactive portfolio risk diagnostic calculator',
      'Targeted high-intent Google Search campaigns for wealth management',
      'Direct CRM integration with lead qualification scoring'
    ],
    quote: 'Inrank repositioned our digital presence to speak to high-net-worth clients. The quality of our consultation inquiries shifted dramatically.',
    author: 'Rajesh Kulkarni, Chief Investment Officer'
  },
  {
    slug: 'fludio',
    name: 'Fludio Water Solutions & Studio',
    subtitle: 'Industrial Water Purification Systems & Architectural Media Showcase',
    category: 'Industrial Engineering & Media',
    location: 'PCMC, Pune',
    turnaround: '3.5 Weeks Turnaround',
    liveUrl: 'https://fludio.in/',
    pill: '3.8x B2B Quotations',
    screenshot: '/portfolio/screenshots/fludio.webp',
    metrics: [
      { num: '3.8x', label: 'B2B Quotations', sub: 'Industrial buyers in Bhosari' },
      { num: '< 0.9s', label: 'Video Showcase Load', sub: 'Optimized WebM streaming' },
      { num: '100%', label: 'Product Spec Coverage', sub: 'Complete technical datasheets' },
      { num: '96/100', label: 'Performance Score', sub: 'Zero bloat architecture' }
    ],
    about: 'Fludio manufactures high-capacity commercial water treatment systems, RO plants, and industrial filtration solutions for factories, hotels, and corporate complexes.',
    challenges: 'Industrial clients struggled to navigate technical specifications, and slow video demonstrations were causing high mobile bounce rates.',
    solutions: 'Engineered a technical product spec browser with fast PDF datasheet downloads, instant quotation requests, and video streaming with zero layout shift.',
    deliverables: [
      'Comprehensive industrial product catalog with parametric filtering',
      'Instant RFQ quotation builder with capacity selector',
      'Technical SEO targeting Pune & Maharashtra industrial manufacturing',
      'Mobile-optimized technical documentation library'
    ],
    quote: 'Our factory clients can now find exact equipment specifications in seconds and request a quote. Inbound inquiries from PCMC manufacturing units are at an all-time high.',
    author: 'Amitabh Deshmukh, Technical Sales Head'
  },
  {
    slug: 'hcpnest',
    name: 'HCPNest (Healthcare Professional Network)',
    subtitle: 'Global Medical Staffing & Healthcare Talent Recruitment Ecosystem',
    category: 'Healthcare Staffing & Enterprise SaaS',
    location: 'Pune & National',
    turnaround: '4 Weeks Turnaround',
    liveUrl: 'https://hcpnest.com/',
    pill: '5,000+ Verified HCPs',
    screenshot: '/portfolio/screenshots/hcpnest.webp',
    metrics: [
      { num: '5,000+', label: 'Registered Doctors', sub: 'Onboarded across India' },
      { num: '65%', label: 'Lower Acquisition Cost', sub: 'Via organic search funnels' },
      { num: '0.9s', label: 'Portal Speed', sub: 'Fast job application flow' },
      { num: '98/100', label: 'Security & SEO Score', sub: 'Protected credential storage' }
    ],
    about: 'HCPNest bridges top-tier hospitals and clinics with credentialed doctors, specialized surgeons, and senior nursing professionals across India and abroad.',
    challenges: 'Candidate onboarding friction on mobile devices was driving drop-offs, while competitor job boards dominated doctor recruitment search terms.',
    solutions: 'Built a sleek candidate portal with 1-click CV upload, automated credential verification, and targeted programmatic SEO for healthcare staffing.',
    deliverables: [
      'Streamlined doctor onboarding & credential verification workflow',
      'Programmatic medical job board SEO across 40+ medical specialties',
      'Hospital inquiry portal with instant candidate shortlist requests',
      'Sub-second mobile interface with WhatsApp applicant tracking'
    ],
    quote: 'The talent portal Inrank developed streamlined our entire doctor acquisition pipeline. We scaled to over 5,000 verified medical professionals smoothly.',
    author: 'Pooja Nair, Head of Talent Acquisition'
  },
  {
    slug: 'hiragrafix',
    name: 'HIRAGRAFIX™ (Hira Printers)',
    subtitle: 'Industrial Commercial Printing & Luxury Packaging Manufacturing Platform',
    category: 'Packaging & Industrial Printing',
    location: 'Baner & Narhe, Pune',
    turnaround: '3 Weeks Turnaround',
    liveUrl: 'https://hiragrafix.com/',
    pill: '120+ Corporate Clients',
    screenshot: '/portfolio/screenshots/hiragrafix.webp',
    metrics: [
      { num: '120+', label: 'Corporate Accounts', sub: 'Regular print procurement' },
      { num: '4.2x', label: 'Commercial Print RFQs', sub: 'Via targeted search rankings' },
      { num: '< 1.1s', label: 'Catalog Render Speed', sub: 'High-res sample gallery' },
      { num: 'Top 3', label: 'Pune Print Rankings', sub: 'For corporate packaging' }
    ],
    about: 'HIRAGRAFIX delivers precision packaging, luxury mono cartons, brochures, and corporate printing infrastructure for top FMCG, pharmaceutical, and retail enterprises.',
    challenges: 'A dated brochure-style site failed to communicate their state-of-the-art offset and digital printing machinery, losing corporate contracts to Mumbai printers.',
    solutions: 'Designed a modern industrial manufacturing showcase featuring paper GSM calculators, finishes visualizer (UV, foil, embossing), and direct B2B quote dispatch.',
    deliverables: [
      'Interactive packaging finishes gallery with zoomable textures',
      'B2B quotation request calculator with volume tiers',
      'Local PCMC & Pune print manufacturing SEO domination',
      'High-conversion corporate client case study portfolio'
    ],
    quote: 'Corporate buyers now evaluate our production capabilities online before even visiting our factory. It has shortened our sales cycle by 70%.',
    author: 'Vikas Hira, Managing Partner'
  },
  {
    slug: 'orthopedicanklefootspecialist',
    name: 'Dr. Shyam Thakkar (ARTICUL8 Clinic)',
    subtitle: 'Sub-Specialized Orthopedic Surgery & Ankle-Foot Rehabilitation Portal',
    category: 'Clinical Orthopedics & Surgery',
    location: 'Baner, Aundh & PCMC, Pune',
    turnaround: '2.5 Weeks Turnaround',
    liveUrl: 'https://orthopedicanklefootspecialist.com/',
    pill: '#1 Google Rank Pune',
    screenshot: '/portfolio/screenshots/orthopedicanklefootspecialist.webp',
    metrics: [
      { num: '#1', label: 'Ankle Specialist Rank', sub: 'Dominating Google Maps & Search' },
      { num: '150+', label: 'Monthly Patient Calls', sub: 'Direct phone & WhatsApp leads' },
      { num: '0.8s', label: 'Mobile Page Speed', sub: 'Instant consultation booking' },
      { num: '4.9★', label: 'Patient Review Velocity', sub: 'Automated post-care reviews' }
    ],
    about: 'Dr. Shyam Thakkar is Pune’s premier orthopedic foot and ankle surgeon, specializing in arthroscopy, sports injuries, and complex reconstructive surgeries.',
    challenges: 'Generalist orthopedic doctors were monopolizing local search rankings, leaving highly specialized foot and ankle surgical patients underserved.',
    solutions: 'Executed a precision hyper-local SEO and GMB 3-Pack campaign paired with an accessible, high-trust surgical consultation web portal.',
    deliverables: [
      'Comprehensive orthopedic condition & procedure library with diagrams',
      'Google 3-Pack #1 local search dominance across Baner & Aundh',
      '1-tap emergency WhatsApp consultation booking channel',
      'Structured medical procedure Schema for rich Google search snippets'
    ],
    quote: 'Inrank positioned my specialized surgical practice as the top choice in Pune. Patients regularly find me through Google for complex ligament and ankle surgeries.',
    author: 'Dr. Shyam Thakkar, MS Ortho, DNB'
  },
  {
    slug: 'riituinstitution',
    name: 'Riitu Institution (Ritu Academy)',
    subtitle: 'Competitive Exam Training & Higher Education Student Admissions Portal',
    category: 'Higher Education & Coaching',
    location: 'Kothrud, Baner & PCMC, Pune',
    turnaround: '3 Weeks Turnaround',
    liveUrl: 'https://riituinstitution.com/',
    pill: '14 Top-3 Pune Rankings',
    screenshot: '/portfolio/screenshots/riituinstitution.webp',
    metrics: [
      { num: '14', label: 'Top-3 Pune Rankings', sub: 'For competitive exam coaching' },
      { num: '3.4x', label: 'Student Inquiries', sub: 'Direct admissions walk-ins' },
      { num: '1.0s', label: 'Mobile Speed', sub: 'Fast syllabus downloads' },
      { num: '95+', label: 'Lighthouse Score', sub: 'Optimized student portal' }
    ],
    about: 'Riitu Institution provides premier coaching for competitive exams, engineering entrance, and academic excellence with specialized batches across Pune.',
    challenges: 'Heavy competition from national ed-tech giants bidding aggressively on local coaching keywords in Pune.',
    solutions: 'Built an organic local SEO moat targeting neighborhood searches, course curriculum previews, scholarship test registration, and automated student lead capture.',
    deliverables: [
      'Course selector and downloadable syllabus curriculum system',
      'Online scholarship mock test registration and score portal',
      'Neighborhood SEO dominance across Kothrud, Baner, and PCMC',
      'Automated parent WhatsApp counseling callback scheduling'
    ],
    quote: 'Our student batch enrollments filled up weeks in advance of the academic year. Inrank made us the go-to academy for Pune parents.',
    author: 'Ritu Sharma, Founder & Academic Director'
  },
  {
    slug: 'vasroventures',
    name: 'Vasro Ventures Pvt Ltd',
    subtitle: 'Premium Commercial Land Development & Corporate Real Estate Investment',
    category: 'Real Estate & Infrastructure',
    location: 'Baner & Hinjewadi Tech Hub, Pune',
    turnaround: '3.5 Weeks Turnaround',
    liveUrl: 'https://vasroventures.com/',
    pill: '₹12Cr+ Land Inquiries',
    screenshot: '/portfolio/screenshots/vasroventures.webp',
    metrics: [
      { num: '₹12Cr+', label: 'Commercial Land Deals', sub: 'Inbound investor inquiries' },
      { num: '4.6x', label: 'NRI Buyer Leads', sub: 'Targeted Google Ads funnels' },
      { num: '< 1s', label: 'Plot Map Viewer Speed', sub: 'Interactive masterplans' },
      { num: '98/100', label: 'Performance Score', sub: 'Corporate luxury presentation' }
    ],
    about: 'Vasro Ventures develops prime commercial plots, industrial parks, and high-yield real estate assets strategically situated near Hinjewadi and the Mumbai-Pune Expressway.',
    challenges: 'High reliance on traditional brokers with unpredictable deal pipelines and lack of transparent digital plot masterplans for remote and NRI investors.',
    solutions: 'Engineered an interactive masterplan viewer with zoning data, automated investor brochure downloads, and high-precision Google Search campaigns.',
    deliverables: [
      'Interactive plot availability masterplan with drone aerial views',
      'Instant investor brochure download with lead verification gating',
      'Targeted NRI Google Search campaigns for commercial Pune real estate',
      'Sub-second corporate platform communicating institutional stability'
    ],
    quote: 'Inrank gave our land development projects the digital prestige they deserved. We closed two major institutional plots directly through the web portal.',
    author: 'Sanjay Deshmukh, Executive Director'
  }
];

// Helper to generate individual 2.0 work page
function generateWorkPage(p) {
  return `<!doctype html>
<html lang="en">
<head>
  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-WLZ75BS8');</script>
  <!-- End Google Tag Manager -->

  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${p.name} — Inrank Technologies Case Study</title>
  <meta name="description" content="${p.subtitle}. Documented outcomes, performance metrics, and technical architecture by Inrank Technologies Pune." />
  <link rel="canonical" href="https://www.inranktech.com/our-work/${p.slug}.html" />
  <link rel="icon" type="image/svg+xml" href="/img/inrank-white-logo.svg" />

  <!-- Fonts & Stylesheets -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/nav.css" />
  <link rel="stylesheet" href="/css/corporate.css" />
</head>
<body class="theme-corporate">
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WLZ75BS8" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

  <!-- Navigation -->
  <header id="nav" class="nav-dock" role="banner">
    <div class="nav-bar">
      <a href="/" class="nav-logo" aria-label="Inrank Technologies Home">
        <img src="/img/inrank-white-logo.svg" alt="Inrank Technologies" width="36" height="36" class="logo-icon" />
        <div class="nav-logo-brand">
          <span class="nav-logo-name">Inrank</span>
          <span class="nav-logo-sub">Technologies</span>
        </div>
      </a>
      <nav class="nav-links" aria-label="Main Navigation">
        <div class="nav-item" data-dropdown="services">
          <button class="nav-link nav-link--drop" aria-expanded="false" aria-haspopup="true">
            <span>Services</span>
            <svg class="nav-chev" viewBox="0 0 12 12" width="12" height="12"><path d="M2.5 4.5L6 8L9.5 4.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
          </button>
        </div>
        <a href="/pricing.html" class="nav-link">Pricing</a>
        <a href="/our-work.html" class="nav-link is-current" aria-current="page">Our Work</a>
        <a href="/case-studies.html" class="nav-link">Case Studies</a>
        <div class="nav-item" data-dropdown="about">
          <button class="nav-link nav-link--drop" aria-expanded="false">
            <span>About</span>
            <svg class="nav-chev" viewBox="0 0 12 12" width="12" height="12"><path d="M2.5 4.5L6 8L9.5 4.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
          </button>
        </div>
        <a href="/contact.html" class="nav-link">Contact</a>
      </nav>
      <a href="/contact.html" class="nav-cta">Book Consultation</a>
      <button id="nav-burger" class="nav-burger" aria-label="Open mobile menu"><span class="nav-burger-box"><span></span><span></span><span></span></span></button>
    </div>
  </header>

  <main id="main">
    
    <!-- Hero / Header Section -->
    <section class="hero image-hero" style="min-height:50vh;padding-top:calc(var(--nav-h) + 4rem);padding-bottom:3.5rem;background: radial-gradient(circle at 80% 25%, rgba(0, 157, 73, 0.35) 0%, transparent 60%), #081424;">
      <div class="shell">
        <nav style="display:flex;align-items:center;gap:8px;font-size:0.84rem;color:#94a3b8;margin-bottom:1.5rem;" aria-label="Breadcrumb">
          <a href="/" style="color:#94a3b8;text-decoration:none;">Home</a>
          <span>/</span>
          <a href="/our-work.html" style="color:#94a3b8;text-decoration:none;">Our Work</a>
          <span>/</span>
          <span style="color:#ffffff;font-weight:700;">${p.name}</span>
        </nav>

        <div style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:1.5rem;">
          <span class="eyebrow-pill">${p.category}</span>
          <span style="display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:999px;background:rgba(255,255,255,0.08);color:#ffffff;font-size:0.75rem;font-weight:700;">📍 ${p.location}</span>
          <span style="display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:999px;background:rgba(255,255,255,0.08);color:#ffffff;font-size:0.75rem;font-weight:700;">⏱️ ${p.turnaround}</span>
        </div>

        <h1 class="hero-title" style="margin-bottom:1rem;font-size:clamp(2.2rem, 3.8vw, 3.5rem);">${p.name}</h1>
        <p style="font-size:clamp(1.1rem, 1.6vw, 1.35rem);color:var(--terra-hero);font-weight:700;line-height:1.4;max-width:820px;margin-bottom:2rem;">${p.subtitle}</p>

        <div style="display:flex;align-items:center;gap:1rem;flex-wrap:wrap;">
          <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="button primary" style="background:var(--terra);color:#ffffff;padding:12px 24px;border-radius:999px;font-weight:750;text-decoration:none;display:inline-flex;align-items:center;gap:8px;">
            <span>Visit Live Portal</span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
          </a>
          <a href="/contact.html" class="button secondary" style="color:#ffffff;border:1px solid rgba(255,255,255,0.25);padding:12px 24px;border-radius:999px;font-weight:750;text-decoration:none;">Book Similar Project</a>
        </div>
      </div>
    </section>

    <!-- Hero Screenshot Showcase -->
    <section style="background:var(--paper);padding:2.5rem 0 4rem;border-bottom:1px solid var(--line);">
      <div class="shell">
        <div style="background:#ffffff;border:1px solid var(--line);border-radius:24px;overflow:hidden;box-shadow:0 24px 64px rgba(8,20,36,0.08);margin-top:-3rem;position:relative;z-index:10;">
          <div style="padding:12px 20px;background:#f8fafc;border-bottom:1px solid var(--line);display:flex;align-items:center;justify-content:space-between;">
            <div style="display:flex;gap:6px;">
              <span style="width:10px;height:10px;border-radius:50%;background:#ef4444;display:inline-block;"></span>
              <span style="width:10px;height:10px;border-radius:50%;background:#f59e0b;display:inline-block;"></span>
              <span style="width:10px;height:10px;border-radius:50%;background:#10b981;display:inline-block;"></span>
            </div>
            <span style="font-size:0.75rem;font-weight:700;color:#64748b;">${p.liveUrl}</span>
            <span style="font-size:0.75rem;font-weight:800;color:var(--terra);background:#e6f7ef;padding:3px 10px;border-radius:999px;">${p.pill}</span>
          </div>
          <img src="${p.screenshot}" alt="${p.name} Interface" style="width:100%;height:auto;display:block;" />
        </div>
      </div>
    </section>

    <!-- Key Metrics Strip -->
    <section style="padding:4rem 0;background:#ffffff;border-bottom:1px solid var(--line);">
      <div class="shell">
        <div style="display:grid;grid-template-columns:repeat(4, 1fr);gap:1.5rem;">
          ${p.metrics.map(m => `
            <div style="padding:1.75rem 1.5rem;background:var(--paper);border:1px solid var(--line);border-radius:18px;">
              <strong style="font-size:2.25rem;font-weight:850;color:var(--text-strong);letter-spacing:-0.03em;display:block;margin-bottom:4px;">${m.num}</strong>
              <span style="font-size:0.95rem;font-weight:750;color:var(--terra);display:block;">${m.label}</span>
              <small style="font-size:0.8rem;color:#64748b;display:block;margin-top:2px;">${m.sub}</small>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Narrative & Details -->
    <section style="padding:5rem 0;background:var(--paper);">
      <div class="shell" style="display:grid;grid-template-columns:1.2fr 1fr;gap:4rem;align-items:flex-start;">
        
        <div>
          <span class="eyebrow-pill">PROJECT BACKGROUND</span>
          <h2 class="section-title" style="margin-bottom:1rem;">About The Project</h2>
          <p style="font-size:1.05rem;line-height:1.7;color:#334155;margin-bottom:2.5rem;">${p.about}</p>

          <span class="eyebrow-pill" style="color:#d97706;border-color:rgba(217,119,6,0.3);background:rgba(217,119,6,0.08);">CHALLENGES SOLVED</span>
          <h3 style="font-size:1.5rem;font-weight:800;color:var(--text-strong);margin:0.5rem 0 1rem;">Core Engineering Hurdles</h3>
          <p style="font-size:0.95rem;line-height:1.65;color:#475569;margin-bottom:2.5rem;">${p.challenges}</p>

          <span class="eyebrow-pill">SOLUTION &amp; ARCHITECTURE</span>
          <h3 style="font-size:1.5rem;font-weight:800;color:var(--text-strong);margin:0.5rem 0 1rem;">Strategic Inrank Deployment</h3>
          <p style="font-size:0.95rem;line-height:1.65;color:#475569;margin-bottom:2.5rem;">${p.solutions}</p>
        </div>

        <div>
          <!-- Deliverables Card -->
          <div style="background:#ffffff;border:1px solid var(--line);border-radius:20px;padding:2.25rem 2rem;box-shadow:0 12px 36px rgba(8,20,36,0.04);margin-bottom:2rem;">
            <h4 style="font-size:1.15rem;font-weight:800;color:var(--text-strong);margin:0 0 1.25rem;">Verified Deliverables</h4>
            <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:12px;">
              ${p.deliverables.map(d => `
                <li style="display:flex;align-items:flex-start;gap:10px;font-size:0.9rem;color:#334155;line-height:1.5;">
                  <span style="color:var(--terra);font-weight:900;">✓</span>
                  <span>${d}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- Client Testimonial Card -->
          <div style="background:linear-gradient(145deg, #0f2138 0%, #081424 100%);color:#ffffff;border-radius:20px;padding:2.25rem 2rem;border:1px solid rgba(255,255,255,0.1);">
            <div style="font-size:2rem;line-height:1;color:var(--terra);margin-bottom:1rem;font-family:Georgia,serif;">“</div>
            <p style="font-size:1.02rem;line-height:1.65;color:#e2e8f0;font-style:italic;margin-bottom:1.5rem;">${p.quote}</p>
            <strong style="display:block;font-size:0.95rem;color:#ffffff;">${p.author}</strong>
            <span style="font-size:0.75rem;color:var(--terra-hero);text-transform:uppercase;letter-spacing:0.08em;margin-top:2px;display:block;">Verified Client Feedback</span>
          </div>
        </div>

      </div>
    </section>

    <!-- Closing Dual CTA -->
    <section class="closing-section" id="contact">
      <div class="shell">
        <span class="eyebrow-pill">TAKE THE NEXT STEP</span>
        <div class="closing-grid">
          <div class="closing-card card-dark">
            <h2 class="closing-title">Ready to engineer similar growth for your brand?</h2>
            <p class="closing-desc">Talk directly to our senior growth engineering pod about your business goals, target keywords, and market expansion.</p>
            <a href="/contact.html" class="closing-cta-link">
              <span>Book a Free Strategy Consultation</span>
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
            </a>
          </div>
          <div class="closing-card card-light">
            <h2 class="closing-title">Speak directly with an engineer, not a salesperson.</h2>
            <p class="closing-desc">Schedule a 30-minute direct technical consultation with Prasad Mhaske at our Baner lab or over Google Meet.</p>
            <div style="display:flex; flex-direction:column; gap:8px;">
              <a href="https://wa.me/918788823182" target="_blank" rel="noopener" class="closing-contact-link">
                <strong>Message on WhatsApp (+91 87888 23182)</strong>
              </a>
              <a href="tel:+918788823182" class="closing-contact-link" style="color:#081424;">
                <span>Or call directly: <strong>+91 87888 23182</strong></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="shell">
      <div class="footer-grid">
        <div class="footer-col brand-col">
          <a href="/" class="footer-logo">
            <img src="/img/inrank-white-logo.svg" alt="Inrank Technologies" width="36" height="36" />
            <div class="nav-logo-brand">
              <span class="nav-logo-name">Inrank</span>
              <span class="nav-logo-sub">Technologies</span>
            </div>
          </a>
          <p class="footer-bio">
            Inrank Technologies is Pune's leading performance digital marketing agency &amp; web development company. Engineering search dominance, ultra-fast web platforms, and measurable commercial growth.
          </p>
        </div>
        <div class="footer-col">
          <h4 class="col-title">Capabilities</h4>
          <ul class="col-links">
            <li><a href="/services/seo-company-pune.html">Search &amp; AI Discovery</a></li>
            <li><a href="/services/custom-website-development.html">High-Performance Web</a></li>
            <li><a href="/services/ppc-services.html">Performance Marketing</a></li>
            <li><a href="/services.html">All 27 Services</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4 class="col-title">Packages</h4>
          <ul class="col-links">
            <li><a href="/pricing.html">Starter Sprint (₹11,999)</a></li>
            <li><a href="/pricing.html">Growth Scale (₹18,999)</a></li>
            <li><a href="/pricing.html">Market Domination</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4 class="col-title">Proof &amp; Work</h4>
          <ul class="col-links">
            <li><a href="/our-work.html">Featured Portals</a></li>
            <li><a href="/case-studies.html">Client Case Studies</a></li>
            <li><a href="/about.html">About Inrank</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4 class="col-title">Pune Service Hubs</h4>
          <ul class="col-links">
            <li><span>Baner &amp; Balewadi</span></li>
            <li><span>Hinjewadi Tech Hub</span></li>
            <li><span>Shivaji Nagar / FC Rd</span></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="footer-copyright">&copy; 2026 Inrank Technologies Pune. All rights reserved. Baner Engineering Lab.</p>
        <div class="site-footer-legal">
          <a href="/privacy-policy.html">Privacy Policy</a>
          <a href="/terms-and-conditions.html">Terms &amp; Conditions</a>
        </div>
      </div>
    </div>
  </footer>

  <script src="/js/core.js"></script>
</body>
</html>`;
}

// Generate all 10 individual work pages
if (!fs.existsSync('inrank2.0/our-work')) {
  fs.mkdirSync('inrank2.0/our-work', { recursive: true });
}

projects.forEach(p => {
  const filePath = path.join('inrank2.0/our-work', `${p.slug}.html`);
  fs.writeFileSync(filePath, generateWorkPage(p), 'utf8');
  console.log(`Generated: ${filePath}`);
});

console.log('All 10 individual work pages generated successfully!');

