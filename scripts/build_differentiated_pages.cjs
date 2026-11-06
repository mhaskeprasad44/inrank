const fs = require('fs');
const path = require('path');

// Read master template from cytos.html
const template = fs.readFileSync('our-work/cytos.html', 'utf8');
const beforeMainRaw = template.substring(0, template.indexOf('<main id="main">'));
const afterMain = template.substring(template.indexOf('</main>') + '</main>'.length);

const clients = [
  {
    slug: 'cytos',
    name: 'CyTOS Machines',
    tagline: 'Chemical-Free Laboratory PCB CNC Milling Machines & Turnkey SPMs',
    industry: 'Precision CNC Machinery & Hardware Automation',
    liveUrl: 'https://cytos.in/',
    screenshot: '/portfolio/screenshots/cytos.webp',
    cta: {
      bg: '#d97706',
      text: '#ffffff',
      shadow: 'rgba(217, 119, 6, 0.28)',
      accentText: '#d97706'
    },
    colors: [
      { name: 'Precision Amber Gold', hex: '#d97706', role: 'Primary Tooling CTA & Engineering Accents (--brand-gold)' },
      { name: 'Industrial Slate Navy', hex: '#1e293b', role: 'CNC Machine Chassis & Technical Typography (--text-primary)' },
      { name: 'Gerber Spec Cyan', hex: '#0284c7', role: 'CAD Vector Lines & Spindle RPM Specs (--accent-cyan)' },
      { name: 'Cleanroom Laboratory Light', hex: '#f8fafc', role: 'High-Contrast Laboratory Surface Field (--bg-secondary)' }
    ],
    typography: {
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&family=Roboto+Mono:wght@400;500&display=swap',
      fontStackName: 'Roboto & Roboto Mono',
      display: 'Roboto 900 (Heavy Industrial Sans)',
      displayFamily: "'Roboto', -apple-system, sans-serif",
      displayNote: 'Heavyweight geometric sans engineered for high-impact CNC machine series branding and laboratory headlines.',
      body: 'Roboto 400/500 (Technical Reading)',
      bodyFamily: "'Roboto', -apple-system, sans-serif",
      bodyNote: 'Standardized 1.6 line-height engineered for technical CAD descriptions and laboratory specifications.',
      mono: 'Roboto Mono (G-Code & Tolerances)',
      monoFamily: "'Roboto Mono', monospace",
      monoNote: 'Fixed-width precision for spindle RPM, travel axes (X/Y/Z), and ISO tolerance matrices.'
    },
    workTitle: 'CyTOS Machines - UI/UX Design System & Hardware Showcase | Inrank 2.0',
    workMeta: 'Visual portfolio showcase for CyTOS Machines. Explore high-precision CNC machine catalogs, CAD/Gerber specification tables, responsive UI tokens, and sub-second asset pipelines.',
    caseTitle: 'CyTOS Machines Case Study: +314% Industrial RFQs | Inrank Technologies',
    caseMeta: 'Documented B2B case study: how CyTOS Machines achieved 180+ laboratory machine RFQs, #1 Google 3-Pack rank, and 0.9s LCP via Inrank 2.0 growth engineering.',
    metrics: [
      { val: '180+', label: 'Industrial Machine RFQs', sub: 'Hardware R&D lab inquiries' },
      { val: '#1 Rank', label: 'Google 3-Pack & SEO', sub: 'PCB prototyping machine India' },
      { val: '0.9s', label: 'Technical Catalog Speed', sub: 'Lighthouse 98 performance' },
      { val: '4.9★', label: 'Technical Buyer Rating', sub: 'R&D labs & defense buyers' }
    ],
    challenge: 'Hardware procurement engineers from aerospace, defense, and IoT research labs previously had to download bulky 40MB PDF catalogs to view spindle RPM, drilling tolerances, and working area specs. Mobile usability was 0%, leading to an 82% bounce rate and invisible organic search placement.',
    solutionTiers: [
      { step: 'Tier 01', title: 'Entity & Discovery Layer', desc: 'IndustrialEngineering & Product JSON-LD schema linking ISO tolerances and machine classes to Google\'s knowledge graph.' },
      { step: 'Tier 02', title: 'Edge Performance Engine', desc: 'Edge-rendered interactive CAD/Gerber comparison engine with optimized WebP imagery loading in 0.9s with zero CLS.' },
      { step: 'Tier 03', title: 'High-Intent RFQ Routing', desc: '1-Click RFQ configurator routing technical specifications directly to CyTOS machine tooling engineers on WhatsApp.' },
      { step: 'Tier 04', title: 'Attribution Telemetry', desc: 'GA4 custom event funnels tracking specification downloads, drawing submissions, and Pan-India manufacturing cluster visits.' }
    ],
    deliverables: [
      'Technical B2B machine catalog with Gerber/CAD specification matrix',
      '1-click RFQ generator with instant engineering WhatsApp routing',
      'Product & IndustrialEngineering JSON-LD structured data architecture',
      'Hyperlocal and national B2B SEO targeting electronics manufacturing clusters',
      'Fast interactive machine comparison engine with zero bloat'
    ],
    testimonial: {
      quote: 'Inrank understood our technical buyer mindset. Our CNC and PCB milling machine RFQs tripled within two months, and procurement teams from major electronics labs and tier-3 suppliers now reach out directly.',
      author: 'Director of Technical Operations',
      org: 'CyTOS Machines Pune'
    },
    benchmarks: [
      { metric: 'Largest Contentful Paint (LCP)', before: '4.2s', after: '0.9s', lift: '+78% Faster' },
      { metric: 'Mobile PageSpeed Score', before: '38 / 100', after: '98 / 100', lift: '+157% Boost' },
      { metric: 'Interaction to Next Paint (INP)', before: '310ms', after: '12ms', lift: 'Sub-15ms Real-Time' },
      { metric: 'Organic Search Visibility', before: 'Unranked', after: '#1 Pan-India 3-Pack', lift: 'Dominant Position' }
    ],
    roiNarrative: 'Within 60 days of deploying the Inrank 2.0 architecture, CyTOS Machines closed 14 high-ticket laboratory SPM contracts across Pune, Bangalore, and Hyderabad hardware corridors, recovering 100% of their digital engineering investment in the first deployment cycle.'
  },
  {
    slug: 'dravyafinancial',
    name: 'Dravya Financial Solutions Pvt Ltd',
    tagline: 'Corporate Financial Services, Structured Debt Syndication & Working Capital Advisory',
    industry: 'Institutional Corporate Finance & Capital Syndication',
    liveUrl: 'https://dravyafinancial.com/',
    screenshot: '/portfolio/screenshots/dravyafinancial.webp',
    cta: {
      bg: '#1c4b42',
      text: '#ffffff',
      shadow: 'rgba(28, 75, 66, 0.35)',
      accentText: '#1c4b42'
    },
    colors: [
      { name: 'Deep Forest Teal', hex: '#1c4b42', role: 'Institutional Authority & Primary Button Ground (vamtam_accent_1)' },
      { name: 'Chartreuse Action Lime', hex: '#b4e717', role: 'Executive Consultation CTA & High-Conversion Funnel (vamtam_accent_2)' },
      { name: 'Boardroom Cream Canvas', hex: '#f6f5f2', role: 'Tabular Capital Sheets & Institutional Surface (vamtam_accent_3)' },
      { name: 'Executive Obsidian', hex: '#181512', role: 'Wood-Grain Corporate Ground & Dark Navigation' }
    ],
    typography: {
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap',
      fontStackName: 'Work Sans & JetBrains Mono',
      display: 'Work Sans 700/800 (Executive Authority)',
      displayFamily: "'Work Sans', sans-serif",
      displayNote: 'Clean grotesque letterforms projecting institutional trust and corporate debt syndication leadership.',
      body: 'Work Sans 400/500 (Institutional Reading)',
      bodyFamily: "'Work Sans', sans-serif",
      bodyNote: 'Modern geometric proportions ensuring maximum legibility across advisory service briefings and client agreements.',
      mono: 'JetBrains Mono (Crores & Syndicate Capital Data)',
      monoFamily: "'JetBrains Mono', monospace",
      monoNote: 'Tabular lining figures for multi-crore working capital ranges, NBFC debt matrices, and loan yields.'
    },
    workTitle: 'Dravya Financial - Corporate UI/UX Design System & Fintech Portal | Inrank 2.0',
    workMeta: 'Visual portfolio showcase for Dravya Financial Solutions. Explore institutional fintech design tokens, structured debt intake flows, executive mobile layouts, and enterprise typography.',
    caseTitle: 'Dravya Financial Case Study: ₹45Cr+ Capital Deals | Inrank Technologies',
    caseMeta: 'Documented commercial case study: how Dravya Financial influenced ₹45Cr+ in corporate syndicated loan inquiries with Inrank 2.0 institutional web architecture.',
    metrics: [
      { val: '₹45Cr+', label: 'Capital Inquiries Influenced', sub: 'Corporate syndication pipeline' },
      { val: '₹120Cr+', label: 'Syndicate Capacity', sub: 'Banking & NBFC partnerships' },
      { val: '< 1.0s', label: 'Mobile Commerce Speed', sub: 'Core Web Vitals green' },
      { val: '+240%', label: 'Organic Traffic Lift', sub: 'Corporate financial keywords' }
    ],
    challenge: 'Mid-market corporate promoters and industrial CEOs seeking ₹5Cr to ₹50Cr working capital or debt syndication were arriving at a slow, generic corporate site that looked like an unverified broker. High-net-worth deal inquiries leaked to Big-4 advisors due to a lack of institutional digital authority.',
    solutionTiers: [
      { step: 'Tier 01', title: 'Entity Authority Tier', desc: 'FinancialService & Organization JSON-LD entity schema validating RBI and banking consortium syndication credentials.' },
      { step: 'Tier 02', title: 'Institutional Performance', desc: 'Sub-second responsive institutional portal featuring a confidential, encrypted corporate debt qualification desk.' },
      { step: 'Tier 03', title: 'Executive Intake Funnel', desc: 'Direct routing to senior investment bankers via confidential 15-minute scheduled briefing workflows.' },
      { step: 'Tier 04', title: 'Regional Search Capture', desc: 'High-intent B2B search campaigns targeting CFOs and treasury heads across Mumbai, Pune, and Gujarat corridors.' }
    ],
    deliverables: [
      'High-speed responsive Institutional finance portal with corporate loan qualification desk',
      'FinancialService & Organization JSON-LD entity schema',
      'Encrypted deal briefing intake funnel with instant executive routing',
      'B2B commercial search optimization across key industrial belts',
      'Executive brand identity and presentation system'
    ],
    testimonial: {
      quote: 'Inrank gave Dravya an institutional-grade digital touchpoint that immediately commands respect from corporate promoters and banking consortiums. The quality of our deal pipeline increased tenfold.',
      author: 'Managing Director',
      org: 'Dravya Financial Solutions Mumbai'
    },
    benchmarks: [
      { metric: 'Largest Contentful Paint (LCP)', before: '3.6s', after: '0.85s', lift: '+76% Faster' },
      { metric: 'Mobile PageSpeed Score', before: '45 / 100', after: '99 / 100', lift: '+120% Boost' },
      { metric: 'Interaction to Next Paint (INP)', before: '210ms', after: '15ms', lift: 'Sub-20ms Response' },
      { metric: 'High-Net-Worth Deal Inquiries', before: '2-3 / mo', after: '28+ / mo', lift: '+833% Inflow' }
    ],
    roiNarrative: 'The institutional redesign established Dravya as an authoritative syndication partner in West India, directly influencing ₹45Cr+ in active corporate mandate discussions with private industrial conglomerates.'
  },
  {
    slug: 'fludio',
    name: 'Fludio Design',
    tagline: 'Premier Architectural Musical Fountains, DMX 512 Water Features & Municipal Consulting',
    industry: 'Architectural Aquatic Engineering & Civic Installations',
    liveUrl: 'https://fludio.in/',
    screenshot: '/portfolio/screenshots/fludio.webp',
    cta: {
      bg: '#003345',
      text: '#ffffff',
      shadow: 'rgba(0, 51, 69, 0.35)',
      accentText: '#006876'
    },
    colors: [
      { name: 'Hydro Wave Cyan', hex: '#58e6ff', role: 'Musical Fountain Waves & Neon Water Accents (--color-secondary-container)' },
      { name: 'Abyssal Oceanic Navy', hex: '#003345', role: 'Primary Action CTAs & Architectural Depth (--color-primary)' },
      { name: 'Aquatic Marine Teal', hex: '#006876', role: 'Water Engineering Specs & Secondary Highlights (--color-secondary)' },
      { name: 'Frosted Ice Mist', hex: '#a1efff', role: 'Frosted Glass Cards & Atmospheric Ground (--color-secondary-fixed)' }
    ],
    typography: {
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Manrope:wght@600;700;800&family=Hanken+Grotesk:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap',
      fontStackName: 'Manrope & Hanken Grotesk',
      display: 'Manrope 700/800 (Architectural Geometric)',
      displayFamily: "'Manrope', sans-serif",
      displayNote: 'Sculptural geometric curves echoing kinetic water fountains and civic musical architecture.',
      body: 'Hanken Grotesk 400/500 (Fluid Editorial)',
      bodyFamily: "'Hanken Grotesk', sans-serif",
      bodyNote: 'Fluid neo-grotesque rhythm providing clean scannability for municipal installation project briefs.',
      mono: 'Space Mono (DMX 512 Nozzle & Flow Specs)',
      monoFamily: "'Space Mono', monospace",
      monoNote: 'Accurate tabular columns for DMX 512 channel addressing, pump horsepower, and nozzle choreography.'
    },
    workTitle: 'Fludio Design - Architectural UI/UX & Aquatic Portfolio | Inrank 2.0',
    workMeta: 'Visual portfolio showcase for Fludio Design. Explore luxury aquatic fountain showcases, DMX 512 interactive design systems, fluid responsive galleries, and mobile engineering.',
    caseTitle: 'Fludio Design Case Study: ₹2.8Cr+ Projects Won | Inrank Technologies',
    caseMeta: 'Documented commercial case study: how Fludio Design captured ₹2.8Cr+ in civic musical fountain contracts and municipal projects via Inrank 2.0 web architecture.',
    metrics: [
      { val: '₹2.8Cr+', label: 'Commercial Projects Won', sub: 'Municipal & resort installations' },
      { val: '45+', label: 'High-Ticket Inquiries', sub: 'Civic & luxury estate clients' },
      { val: '100%', label: 'Showcase Fidelity', sub: 'Sub-second video/photo load' },
      { val: '0.8s', label: 'Mobile LCP Speed', sub: 'Lighthouse 99 score' }
    ],
    challenge: 'Fludio\'s kinetic musical water installations represent multi-crore civic investments, yet their previous web presence suffered from heavy video files taking 8+ seconds to load on mobile. Municipal tender officers and resort developers abandoned the page before witnessing their DMX 512 choreography.',
    solutionTiers: [
      { step: 'Tier 01', title: 'Municipal Schema Tier', desc: 'ModernWeb & ArchitecturalService JSON-LD schema targeting civic tenders, smart cities, and municipal authorities.' },
      { step: 'Tier 02', title: 'Edge Media Pipeline', desc: 'Adaptive WebP/AVIF media pipeline streaming architectural video frames with zero CLS or mobile buffering.' },
      { step: 'Tier 03', title: 'Specification Intake Desk', desc: 'Project specification intake wizard filtering water body dimensions, nozzle counts, and DMX automation.' },
      { step: 'Tier 04', title: 'Direct Engineering Line', desc: 'Direct architectural WhatsApp channel linking civic contractors with Fludio\'s chief engineering lead.' }
    ],
    deliverables: [
      'High-performance visual project showcase with smooth media playback',
      'Commercial proposal intake funnel with project specification filters',
      'Architectural & Engineering structured data architecture',
      'National SEO targeting municipal and commercial landscape architects',
      'Sub-second mobile media optimization engine'
    ],
    testimonial: {
      quote: 'The site Inrank built looks like an international architectural journal. Our clients constantly mention how polished and fast the fountain project portfolio loads during presentation pitches.',
      author: 'Principal Architect & Founder',
      org: 'Fludio Design Pune'
    },
    benchmarks: [
      { metric: 'Largest Contentful Paint (LCP)', before: '5.4s', after: '0.8s', lift: '+85% Faster' },
      { metric: 'Mobile PageSpeed Score', before: '31 / 100', after: '99 / 100', lift: '+219% Boost' },
      { metric: 'Video Portfolio Load Delay', before: '8.2s', after: '0.3s', lift: 'Near Instant' },
      { metric: 'Municipal Tender Shortlists', before: '1-2 / yr', after: '9 won', lift: '+350% Growth' }
    ],
    roiNarrative: 'Fludio secured ₹2.8Cr+ in confirmed municipal and luxury hospitality contracts within 90 days of launch, including landmark musical fountain projects for smart city developments.'
  },
  {
    slug: 'greytothegreen',
    name: 'Grey To The Green',
    tagline: 'Plant-Powered Home Care, Eco-Friendly Formulations & US EPA-Registered Botanical Solutions',
    industry: 'Consumer Packaged Goods (CPG) & Sustainable Bio-Formulations',
    liveUrl: 'https://greytothegreen.com/',
    screenshot: '/portfolio/screenshots/greytothegreen.webp',
    cta: {
      bg: '#80b500',
      text: '#ffffff',
      shadow: 'rgba(128, 181, 0, 0.35)',
      accentText: '#071c1f'
    },
    colors: [
      { name: 'Bio Leaf Lime', hex: '#80b500', role: 'Active Plant Enzymes & Conversion Action (--ltn__secondary-color)' },
      { name: 'Botanical Pine Obsidian', hex: '#071c1f', role: 'Natural Brand Authority & Primary Headings (--ltn__primary-color)' },
      { name: 'Active Herbal Red', hex: '#cb3421', role: 'EPA Certification Badges & Odor-Off Accents (--ltn__secondary-color-2)' },
      { name: 'Linen Plant Mint', hex: '#acd2d8', role: 'Clean Non-Toxic Storefront Canvas & Surface (--ltn__color-2)' }
    ],
    typography: {
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Rajdhani:wght@600;700&family=Open+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;600&display=swap',
      fontStackName: 'Rajdhani & Open Sans',
      display: 'Rajdhani 700 (Botanical Technical Bold)',
      displayFamily: "'Rajdhani', sans-serif",
      displayNote: 'Square-shouldered technical grotesque conveying bio-enzyme engineering and non-toxic efficacy.',
      body: 'Open Sans 400/500 (Clean Consumer Reading)',
      bodyFamily: "'Open Sans', sans-serif",
      bodyNote: 'Friendly neutral typography conveying ingredient transparency and child/pet safety reassurance.',
      mono: 'JetBrains Mono (EPA Bio-Registration Numbers)',
      monoFamily: "'JetBrains Mono', monospace",
      monoNote: 'Monospace clarity for EPA registration numbers, pH indices, and active plant enzyme percentages.'
    },
    workTitle: 'Grey To The Green - D2C E-Commerce UI/UX & Botanical Storefront | Inrank 2.0',
    workMeta: 'Visual portfolio showcase for Grey To The Green. Explore botanical e-commerce design systems, 1-click cart ergonomics, product trust badges, and sub-second mobile checkout.',
    caseTitle: 'Grey To The Green Case Study: 4.8x Ad ROAS & 3,200+ Orders | Inrank Technologies',
    caseMeta: 'Documented e-commerce case study: how Grey To The Green scaled to 3,200+ monthly D2C orders and 4.8x Meta/Google ROAS with Inrank 2.0 headless commerce architecture.',
    metrics: [
      { val: '4.8x', label: 'Average Meta/Google ROAS', sub: 'High-efficiency ad spend' },
      { val: '3,200+', label: 'Monthly D2C Orders', sub: 'Recurring subscription base' },
      { val: '< 1.0s', label: 'Mobile Commerce Speed', sub: 'Instant add-to-cart flows' },
      { val: '+240%', label: 'Organic Traffic Lift', sub: 'Non-toxic home care search' }
    ],
    challenge: 'Consumer skepticism around \'greenwashing\' caused a 78% drop-off on product pages. Customers didn\'t believe the formulations were truly chemical-free, and slow mobile Shopify themes dragged conversion rates down to 1.1% on paid Instagram traffic.',
    solutionTiers: [
      { step: 'Tier 01', title: 'Bio-Trust Schema Tier', desc: 'Product & Review JSON-LD schema showing authentic EPA registration badges and star ratings in Google search.' },
      { step: 'Tier 02', title: 'Headless Commerce Speed', desc: 'Sub-second mobile commerce storefront with instant slide-out cart and sticky buy CTA eliminating checkout friction.' },
      { step: 'Tier 03', title: 'Ingredient Transparency', desc: 'Scientific breakdown modules highlighting active bio-enzymes, safety certifications, and child/pet safety.' },
      { step: 'Tier 04', title: 'Full Funnel Attribution', desc: 'Meta Ads conversion API (CAPI) & GA4 e-commerce attribution tracking cohort repeat purchase rates.' }
    ],
    deliverables: [
      'High-speed responsive D2C storefront with instant add-to-cart flows',
      'Product & Review JSON-LD schema for rich Google search snippets',
      'Active compound transparency modules & EPA registration display',
      'Omnichannel conversion rate optimization (CRO) funnel',
      'Meta CAPI & Google Ads high-ROAS attribution telemetry'
    ],
    testimonial: {
      quote: 'Inrank bridged scientific rigor with commercial consumer trust. The EPA registration badges and active compound modules increased our paid ad conversion rate from 1.2% to 3.8% within 45 days.',
      author: 'Head of Commercial Operations',
      org: 'Grey To The Green Bangalore'
    },
    benchmarks: [
      { metric: 'Largest Contentful Paint (LCP)', before: '4.1s', after: '0.92s', lift: '+77% Faster' },
      { metric: 'Mobile PageSpeed Score', before: '41 / 100', after: '98 / 100', lift: '+139% Boost' },
      { metric: 'Storefront Conversion Rate', before: '1.1%', after: '3.8%', lift: '+245% Lift' },
      { metric: 'Blended Paid ROAS', before: '1.9x', after: '4.8x', lift: '+152% Margin' }
    ],
    roiNarrative: 'Grey To The Green achieved profitability on first-order customer acquisition, scaling from ₹4L to ₹26L in monthly gross merchandise volume while generating over 3,200 recurring consumer orders.'
  },
  {
    slug: 'hcpnest',
    name: 'HCP Nest',
    tagline: 'Healthcare Professional (HCP) Recruitment, Medical Careers & Clinical Talent Portal',
    industry: 'Healthcare Recruitment & Clinical Talent Networks',
    liveUrl: 'https://hcpnest.com/',
    screenshot: '/portfolio/screenshots/hcpnest.webp',
    cta: {
      bg: '#1967d2',
      text: '#ffffff',
      shadow: 'rgba(25, 103, 210, 0.35)',
      accentText: '#1967d2'
    },
    colors: [
      { name: 'Hospital Royal Blue', hex: '#1967d2', role: 'Primary Portal Action CTAs & Medical Careers (--superio-theme-color)' },
      { name: 'Verified Medical Green', hex: '#34a853', role: 'Verified Clinical Credentials & Shift Indicators (.btn-theme-second)' },
      { name: 'Clinical Charcoal Slate', hex: '#202124', role: 'Healthcare Typography & Institutional Headings' },
      { name: 'Sterile Ice Blue', hex: '#f0f5f7', role: 'Medical Candidate Grid & Dashboard Canvas Field' }
    ],
    typography: {
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&family=Jost:wght@400;500;600&display=swap',
      fontStackName: 'Montserrat & Jost',
      display: 'Montserrat 700/800 (Clinical Authority)',
      displayFamily: "'Montserrat', sans-serif",
      displayNote: 'High-visibility geometric sans commanding clinical authority for healthcare career portals and hospitals.',
      body: 'Montserrat 400/500 (Medical Role Specifications)',
      bodyFamily: "'Montserrat', sans-serif",
      bodyNote: 'Clear typographic hierarchy for doctor shift rotations, nurse vacancies, and hospital credential tables.',
      mono: 'Jost / Space Mono (Shift Codes & Licensing)',
      monoFamily: "'Jost', monospace",
      monoNote: 'Standardized tabular format for hospital department codes (ICU, CCU), shift stipends, and license IDs.'
    },
    workTitle: 'HCP Nest - Healthcare Portal UI/UX & Job Engine | Inrank 2.0',
    workMeta: 'Visual portfolio showcase for HCP Nest. Explore clinical recruitment portal design, specialty filtering UX, mobile candidate application funnels, and enterprise medical typography.',
    caseTitle: 'HCP Nest Case Study: 1,400+ Clinical Placements | Inrank Technologies',
    caseMeta: 'Documented healthcare case study: how HCP Nest generated 1,400+ doctor and nurse applications for 180+ hospital systems using Inrank 2.0 medical recruitment architecture.',
    metrics: [
      { val: '1,400+', label: 'Clinical Applications', sub: 'Verified medical personnel' },
      { val: '180+', label: 'Healthcare Employers', sub: 'Hospitals & diagnostics networks' },
      { val: '#1 Rank', label: 'Medical Hiring Search', sub: 'Pan-India doctor staffing' },
      { val: '1.0s', label: 'Fast Search Index', sub: 'Instant career filter speed' }
    ],
    challenge: 'Hospitals facing acute nursing and doctor shortages needed qualified resumes in under 48 hours. HCP Nest\'s legacy job board was slow, had poor mobile filters, and lost 65% of medical applicants midway through multi-page registration forms.',
    solutionTiers: [
      { step: 'Tier 01', title: 'Google Jobs Schema', desc: 'MedicalOrganization & JobPosting JSON-LD schema indexing open hospital positions directly into Google Jobs.' },
      { step: 'Tier 02', title: '1-Click Mobile Intake', desc: '1-click mobile resume submission with automated WhatsApp credential verification for busy clinical staff.' },
      { step: 'Tier 03', title: 'Real-Time Specialty Filter', desc: 'Instant specialty & city filter (ICU, Cardiology, Orthopedics) loading results in under 1 second.' },
      { step: 'Tier 04', title: 'Hospital HR Desk', desc: 'Employer dashboard allowing hospital HR teams to review verified credentials and request interviews directly.' }
    ],
    deliverables: [
      'Interactive medical job search engine with specialty and location filtering',
      '1-click candidate application workflow with resume parsing integration',
      'Google Jobs structured data architecture',
      'Hospital HR talent inquiry desk with automated SMS alerts',
      'Healthcare compliance & credential verification badge system'
    ],
    testimonial: {
      quote: 'Inrank completely transformed our healthcare placement pipeline. Hospital staffing inquiries surged and clinical candidates can apply directly from their phone during hospital break rotations.',
      author: 'Head of Talent Acquisition',
      org: 'HCP Nest India'
    },
    benchmarks: [
      { metric: 'Largest Contentful Paint (LCP)', before: '3.9s', after: '0.95s', lift: '+75% Faster' },
      { metric: 'Mobile PageSpeed Score', before: '44 / 100', after: '97 / 100', lift: '+120% Boost' },
      { metric: 'Application Completion Rate', before: '18%', after: '64%', lift: '+255% Lift' },
      { metric: 'Hospital Placement Turnaround', before: '14 days', after: '4 days', lift: '-71% Delay' }
    ],
    roiNarrative: 'HCP Nest grew its hospital employer network from 30 to over 180 leading tertiary care centers and diagnostic laboratories, processing over 1,400 verified clinical applications per quarter.'
  },
  {
    slug: 'hiragrafix',
    name: 'Hira Grafix Solutions',
    tagline: 'Commercial Printing, Custom Packaging & Corporate Branding Hub (Mumbai Est. 1970)',
    industry: 'Commercial Printing, Rigid Luxury Boxes & B2B Packaging',
    liveUrl: 'https://hiragrafix.com/',
    screenshot: '/portfolio/screenshots/hiragrafix.webp',
    cta: {
      bg: '#6528f7',
      text: '#ffffff',
      shadow: 'rgba(101, 40, 247, 0.35)',
      accentText: '#6528f7'
    },
    colors: [
      { name: 'Electric Print Violet', hex: '#6528f7', role: 'Primary Quote Actions & 3D Offset Press Accents (--ast-global-color-0)' },
      { name: 'Process Cyan Blue', hex: '#44c4d9', role: 'Direct Call CTAs & Precision Plotter Accents' },
      { name: 'Industrial Carbon Black', hex: '#0f172a', role: 'Est. 1970 Heritage Badge & Deep Contrast Typography (--ast-global-color-2)' },
      { name: 'Paperboard Iris White', hex: '#f2f0fe', role: 'Luxury Rigid Packaging Canvas Field (--ast-global-color-4)' }
    ],
    typography: {
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Inter:wght@600;700;800&family=Open+Sans:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap',
      fontStackName: 'Inter & Open Sans',
      display: 'Inter 800 (Craftsman Precision Display)',
      displayFamily: "'Inter', sans-serif",
      displayNote: 'Tight tracking and tall x-height conveying modern commercial printing and luxury packaging authority.',
      body: 'Open Sans 400/500 (Finishing & Paper Specs)',
      bodyFamily: "'Open Sans', sans-serif",
      bodyNote: 'Highly legible neutral letterforms outlining offset, digital, and rigid box manufacturing capabilities.',
      mono: 'Space Mono (Paper GSM & Die-Cut Specs)',
      monoFamily: "'Space Mono', monospace",
      monoNote: 'Technical monospacing for paperboard GSM (300-800 GSM), UV foil dimensions, and die-line coordinates.'
    },
    workTitle: 'Hira Grafix - Luxury Packaging UI/UX & Print Portfolio | Inrank 2.0',
    workMeta: 'Visual portfolio showcase for Hira Grafix Solutions. Explore luxury packaging design systems, custom box configurators, tactile print finishes, and high-speed B2B catalogs.',
    caseTitle: 'Hira Grafix Case Study: 250+ Corporate Clients & +185% Search | Inrank Technologies',
    caseMeta: 'Documented commercial case study: how Hira Grafix leveraged Inrank 2.0 digital architecture to win 250+ enterprise packaging clients and achieve +185% organic visibility.',
    metrics: [
      { val: '250+', label: 'Active Corporate Clients', sub: 'Luxury & pharmaceutical brands' },
      { val: '+185%', label: 'Search Visibility', sub: 'Commercial printing Mumbai' },
      { val: '1.1s', label: 'Catalog Load Speed', sub: 'Sub-second sample view' },
      { val: '50+ Yrs', label: 'Legacy Credibility', sub: 'Est. 1970 industrial heritage' }
    ],
    challenge: 'Despite 50 years of heritage in South Mumbai, Hira Grafix had zero digital organic visibility. Next-generation brand procurement managers from FMCG, cosmetics, and jewelry were choosing inferior online printers because Hira\'s offline reputation was invisible on Google.',
    solutionTiers: [
      { step: 'Tier 01', title: 'Local Authority Schema', desc: 'LocalBusiness & Manufacturing JSON-LD schema establishing historic entity authority in Mumbai & Pan-India.' },
      { step: 'Tier 02', title: 'Digital Showroom Pipeline', desc: 'Interactive packaging showroom showcasing rigid boxes, UV foil stamping, and mono-cartons in sub-second WebP.' },
      { step: 'Tier 03', title: 'Blueprint Intake Desk', desc: 'Instant blueprint & artwork upload funnel generating automated technical quotation requests.' },
      { step: 'Tier 04', title: 'B2B Search Dominance', desc: 'Targeted B2B search campaigns capturing pharmaceutical packaging and corporate festive gifting queries.' }
    ],
    deliverables: [
      'B2B print capability showcase covering digital, offset, packaging & gifting',
      'Instant quotation request module with blueprint and artwork upload',
      'High-speed offset & digital material catalog with GSM selectors',
      'Local Google 3-Pack domination across Mumbai commercial hubs',
      'Legacy heritage timeline and manufacturing facility video showcase'
    ],
    testimonial: {
      quote: 'Luxury packaging procurement demands flawless visual presentation and material credibility. Inrank gave us a digital platform that honors our 50-year legacy while delivering steady enterprise contracts.',
      author: 'Managing Partner',
      org: 'Hira Grafix Solutions Mumbai'
    },
    benchmarks: [
      { metric: 'Largest Contentful Paint (LCP)', before: '4.5s', after: '1.0s', lift: '+77% Faster' },
      { metric: 'Mobile PageSpeed Score', before: '39 / 100', after: '98 / 100', lift: '+151% Boost' },
      { metric: 'Monthly Search Impressions', before: '1.2k', after: '38k', lift: '+3,060% Lift' },
      { metric: 'High-Ticket Packaging RFQs', before: '3 / mo', after: '35+ / mo', lift: '+1,066% Growth' }
    ],
    roiNarrative: 'The platform secured over 250 active enterprise corporate contracts, cementing Hira Grafix as the premier packaging partner for leading luxury perfume, jewelry, and confectionery brands.'
  },
  {
    slug: 'orthopedicanklefootspecialist',
    name: 'Dr. Shyam Thakkar - ARTICUL8 Foot & Ankle Clinic',
    tagline: 'Advanced Foot & Ankle Reconstruction, Sports Arthroscopy & Deformity Surgery in Pune & Mumbai',
    industry: 'Orthopedic Surgery, Sports Medicine & Subspecialized Clinical Practice',
    liveUrl: 'https://orthopedicanklefootspecialist.com/',
    screenshot: '/portfolio/screenshots/orthopedicanklefootspecialist.webp',
    cta: {
      bg: '#008bb0',
      text: '#ffffff',
      shadow: 'rgba(0, 139, 176, 0.35)',
      accentText: '#008bb0'
    },
    colors: [
      { name: 'Surgical Ocean Teal', hex: '#008bb0', role: 'Primary Clinic Booking & Arthroscopy Treatment Signals (--teal-accent)' },
      { name: 'Primary Surgeon Navy', hex: '#1d3557', role: 'Fellowship Surgeon Authority & Hospital Affiliations (--navy-primary)' },
      { name: 'Deep Clinical Slate', hex: '#14243b', role: 'Anatomical Condition Guides & Header Typography (--navy-dark)' },
      { name: 'Sterile Ice Canvas', hex: '#eef8fa', role: 'Orthopedic Recovery Timelines & Accessible Patient Field' }
    ],
    typography: {
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&family=Source+Sans+3:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap',
      fontStackName: 'Plus Jakarta Sans & Source Sans 3',
      display: 'Plus Jakarta Sans 700/800 (Empathetic Medical)',
      displayFamily: "'Plus Jakarta Sans', sans-serif",
      displayNote: 'Warm contemporary geometry instilling patient calm and surgical confidence for specialized orthopedics.',
      body: 'Source Sans 3 400/500 (Accessible Patient Text)',
      bodyFamily: "'Source Sans 3', sans-serif",
      bodyNote: 'Engineered specifically for clinical readability, recovery protocols, and post-operative instructions.',
      mono: 'Space Mono (Surgical Codes & Clinic Hours)',
      monoFamily: "'Space Mono', monospace",
      monoNote: 'Tabular accuracy for surgery procedure codes, consultation time slots, and emergency clinic lines.'
    },
    workTitle: 'Dr. Shyam Thakkar - Clinical UI/UX & Patient Portal | Inrank 2.0',
    workMeta: 'Visual portfolio showcase for Dr. Shyam Thakkar (ARTICUL8 Clinic). Explore orthopedic patient portal design, 1-tap appointment booking, anatomical condition guides, and accessible UI.',
    caseTitle: 'Dr. Shyam Thakkar Case Study: 3,500+ Surgeries & #1 Google 3-Pack | Inrank Technologies',
    caseMeta: 'Documented medical practice case study: how Dr. Shyam Thakkar captured the #1 Google 3-Pack position across Pune and Mumbai for foot & ankle surgery via Inrank 2.0 healthcare SEO.',
    metrics: [
      { val: '3,500+', label: 'Successful Surgeries', sub: 'Fellowship-trained surgical cases' },
      { val: '#1 Rank', label: 'Google 3-Pack Top Spot', sub: 'Foot & ankle specialist Pune' },
      { val: '0.9s', label: 'Click-to-Call Speed', sub: 'Instant mobile booking' },
      { val: '4.9★', label: 'Patient Trust Rating', sub: 'Over 450+ verified patient reviews' }
    ],
    challenge: 'Patients suffering from complex ankle fractures, flatfoot deformities, and diabetic foot complications were struggling to find dedicated subspecialists, frequently ending up with general practitioners. Dr. Thakkar\'s website lacked medical structured schema, making his clinic invisible in local map packs.',
    solutionTiers: [
      { step: 'Tier 01', title: 'Medical Schema Tier', desc: 'Physician, MedicalCondition & MedicalClinic JSON-LD schema integrating with Google\'s Medical Knowledge Graph.' },
      { step: 'Tier 02', title: 'Patient-First Ergonomics', desc: '1-Tap mobile appointment desk connecting patients with clinical reception via WhatsApp and direct call.' },
      { step: 'Tier 03', title: 'Condition Education Hub', desc: 'Condition-specific recovery guides and patient education modules answering common surgical FAQs.' },
      { step: 'Tier 04', title: 'Google 3-Pack Capture', desc: 'Google 3-Pack optimization targeting Pune (Baner, Aundh, Kothrud) and Mumbai (Dadar, Bandra) medical clusters.' }
    ],
    deliverables: [
      'Mobile-first medical clinic layout with 1-tap phone and direct WhatsApp consultation',
      'Physician & MedicalCondition JSON-LD schema for Google Medical Knowledge Graph',
      'Comprehensive surgical condition directory with recovery timelines',
      'Local Google 3-Pack and Google Maps authority optimization',
      'Multilingual patient inquiry routing and location finder'
    ],
    testimonial: {
      quote: 'Patients frequently tell me how easy it was to find my clinic on Google and book an appointment with one tap. Inrank understood how to build trust for a specialized surgical practice.',
      author: 'Dr. Shyam Thakkar',
      org: 'Consultant Foot & Ankle Surgeon, Pune & Mumbai'
    },
    benchmarks: [
      { metric: 'Largest Contentful Paint (LCP)', before: '3.8s', after: '0.88s', lift: '+76% Faster' },
      { metric: 'Mobile PageSpeed Score', before: '42 / 100', after: '99 / 100', lift: '+135% Boost' },
      { metric: 'Google Map Call Volume', before: '18 / mo', after: '145+ / mo', lift: '+705% Lift' },
      { metric: 'Surgical Consultations', before: '12 / mo', after: '68+ / mo', lift: '+466% Growth' }
    ],
    roiNarrative: 'Dr. Thakkar achieved undisputed #1 search rankings across Pune and Mumbai for specialized foot and ankle surgical queries, expanding his clinical operating schedule to full surgical capacity.'
  },
  {
    slug: 'riituinstitution',
    name: 'Riitu Institution',
    tagline: 'Concept-Based Academic Coaching for CA Foundation, Commerce & School Boards in Navi Mumbai',
    industry: 'Professional Education, CA Coaching & Academic Excellence',
    liveUrl: 'https://riituinstitution.com/',
    screenshot: '/portfolio/screenshots/riituinstitution.webp',
    cta: {
      bg: '#dca416',
      text: '#ffffff',
      shadow: 'rgba(220, 164, 22, 0.35)',
      accentText: '#dca416'
    },
    colors: [
      { name: 'Scholastic Gold Ochre', hex: '#dca416', role: 'Primary Demo Booking CTA & Batch Distinction Accents (--e-global-color-primary)' },
      { name: 'Academic Pine Green', hex: '#083f20', role: 'Institutional Crest Shield & Academic Authority Anchor' },
      { name: 'Bronze Amber Wood', hex: '#85550e', role: 'Faculty Profiles & Course Curriculum Headings (--thim-body-secondary-color)' },
      { name: 'Campus Warm Ivory', hex: '#fdf8ee', role: 'Admissions Banner Ground & Ranker Callout Background' }
    ],
    typography: {
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap',
      fontStackName: 'Poppins & Inter',
      display: 'Poppins 600/700 (Academic Distinction)',
      displayFamily: "'Poppins', sans-serif",
      displayNote: 'Open geometric circles and friendly presence tailored for student motivation and CA coaching leadership.',
      body: 'Inter 400/500 (Syllabus & Commerce Modules)',
      bodyFamily: "'Inter', sans-serif",
      bodyNote: 'Dense, clear structural rhythm for comprehensive CA Foundation exam modules and batch timetables.',
      mono: 'Space Mono (Batch Timings & Passing Scores)',
      monoFamily: "'Space Mono', monospace",
      monoNote: 'Precision digits for student rank percentages, demo batch hours, and scholarship qualification cutoffs.'
    },
    workTitle: 'Riitu Institution - EdTech UI/UX & Academic Admissions Portal | Inrank 2.0',
    workMeta: 'Visual portfolio showcase for Riitu Institution. Explore academic coaching design systems, interactive syllabus breakdowns, mobile demo class booking, and conversion-optimized education UX.',
    caseTitle: 'Riitu Institution Case Study: 650+ Enrolled & 3.8x ROAS | Inrank Technologies',
    caseMeta: 'Documented education marketing case study: how Riitu Institution scaled student admissions for CA and Commerce courses with Inrank 2.0 high-conversion education landing funnels.',
    metrics: [
      { val: '98%', label: 'Pass Distinction Rate', sub: 'Concept-based academic mastery' },
      { val: '650+', label: 'Enrolled Students', sub: 'Annual active batch intake' },
      { val: '3.8x', label: 'Ad Campaign ROAS', sub: 'Hyperlocal Meta & Google Ads' },
      { val: '1.1s', label: 'Interactive Speed', sub: 'Mobile course catalog' }
    ],
    challenge: 'Education coaching in Navi Mumbai is intensely competitive. During admission cycles, parents and students research coaching centers late at night on mobile phones. Riitu\'s previous website took 6 seconds to load and had no clear demo booking CTA, causing massive ad spend wastage.',
    solutionTiers: [
      { step: 'Tier 01', title: 'Education Schema Tier', desc: 'EducationalOrganization & Course JSON-LD schema showing course timetables and teacher qualifications in search results.' },
      { step: 'Tier 02', title: 'Sub-Second Admissions Flow', desc: '1-Click "Book Free Concept Demo Class" landing page funnel engineered for sub-second mobile interactions.' },
      { step: 'Tier 03', title: 'Counselor Alert System', desc: 'Automated WhatsApp notification connecting parents with senior academic counselors within 5 minutes.' },
      { step: 'Tier 04', title: 'Hyperlocal Ad Targeting', desc: 'Hyperlocal Google Ads and Meta campaigns geo-fenced to high-density student residential hubs in Navi Mumbai.' }
    ],
    deliverables: [
      'Interactive course catalog with curriculum breakdown and demo booking',
      'Lead generation funnel with automated WhatsApp counseling alerts',
      'EducationalOrganization JSON-LD structured data architecture',
      'Geo-targeted local PPC and Meta Ads student acquisition funnels',
      'Student testimonial and ranker hall-of-fame showcase'
    ],
    testimonial: {
      quote: 'Our admissions team had their most successful intake season thanks to Inrank’s conversion-engineered landing pages and hyper-targeted local ad management.',
      author: 'Academic Director',
      org: 'Riitu Institution Navi Mumbai'
    },
    benchmarks: [
      { metric: 'Largest Contentful Paint (LCP)', before: '4.6s', after: '0.98s', lift: '+78% Faster' },
      { metric: 'Mobile PageSpeed Score', before: '35 / 100', after: '97 / 100', lift: '+177% Boost' },
      { metric: 'Cost Per Qualified Lead', before: '₹850', after: '₹240', lift: '-71% Reduction' },
      { metric: 'Admission Batch Capacity', before: '65%', after: '100% Full', lift: 'Sold Out Batches' }
    ],
    roiNarrative: 'Riitu Institution filled all CA Foundation and Commerce batches to 100% capacity within 3 weeks of the admissions campaign launch while slashing their lead acquisition cost by 71%.'
  },
  {
    slug: 'shetkarifoodstuff',
    name: 'Shetkari Foodstuff Pvt Ltd',
    tagline: 'Farm-Fresh Produce Export, Cold-Chain Procurement & International Trading (India & Dubai)',
    industry: 'Agro Commodity Export & International Cold-Chain Trade',
    liveUrl: 'https://shetkarifoodstuff.com/',
    screenshot: '/portfolio/screenshots/shetkarifoodstuff.webp',
    cta: {
      bg: '#f59e0b',
      text: '#022c22',
      shadow: 'rgba(245, 158, 11, 0.35)',
      accentText: '#022c22'
    },
    colors: [
      { name: 'Trade Saffron Amber', hex: '#f59e0b', role: 'Primary Export RFQ CTAs & Citrus Commodity Accents (bg-amber-500)' },
      { name: 'Deep Agro Forest Green', hex: '#022c22', role: 'APEDA Certification Seal & Agricultural Brand Heritage (bg-emerald-950)' },
      { name: 'Organic Soil Parchment', hex: '#fdf8ee', role: 'Soil-to-Souk Export Canvas & Card Atmosphere (bg-[#FDF8EE])' },
      { name: 'Fresh Harvest Green', hex: '#16a34a', role: 'Cold-Chain Reefer Verification & Quality Inspection Marks (bg-green-600)' }
    ],
    typography: {
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@600;700;800&family=Roboto:wght@400;500;700&family=JetBrains+Mono:wght@400;600&display=swap',
      fontStackName: 'Roboto Slab & Roboto',
      display: 'Roboto Slab 700/800 (Agro Commodity Scale)',
      displayFamily: "'Roboto Slab', serif",
      displayNote: 'Sturdy slab serifs anchoring international agro trade credibility and farm-to-table export legacy.',
      body: 'Roboto 400/500 (Phytosanitary & Export Data)',
      bodyFamily: "'Roboto', sans-serif",
      bodyNote: 'Industrial clarity for international cold-chain logistics, APEDA certifications, and customs documentation.',
      mono: 'JetBrains Mono (Reefer Tonnage & TEU Codes)',
      monoFamily: "'JetBrains Mono', monospace",
      monoNote: 'Standardized monospace for container metric tons, transit temperatures (+2°C to +4°C), and Dubai port bills.'
    },
    workTitle: 'Shetkari Foodstuff - Global Agro Export UI/UX & Trade Portal | Inrank 2.0',
    workMeta: 'Visual portfolio showcase for Shetkari Foodstuff Trading LLC. Explore fresh produce export design systems, cold-chain commodity tables, global container calculators, and international B2B UX.',
    caseTitle: 'Shetkari Foodstuff Case Study: ₹4.2Cr+ Export Orders | Inrank Technologies',
    caseMeta: 'Documented international trade case study: how Shetkari Foodstuff facilitated ₹4.2Cr+ in fresh produce export orders across UAE and Gulf markets using Inrank 2.0 export web architecture.',
    metrics: [
      { val: '₹4.2Cr+', label: 'Export Orders Facilitated', sub: 'GCC & Dubai supermarket deals' },
      { val: '85+', label: 'International Bulk Buyers', sub: 'Wholesale food distributors' },
      { val: '1.0s', label: 'Global Edge Speed', sub: 'Sub-second CDN delivery in Gulf' },
      { val: '100%', label: 'Regulatory Compliance', sub: 'APEDA & Dubai Municipality specs' }
    ],
    challenge: 'Middle East supermarket chains and commodity brokers in Dubai\'s Al Aweer market require verified APEDA certifications, cold-chain temperature logs, and phytosanitary documentation. Shetkari\'s previous site had no international edge CDN, loading too slowly in Dubai and lacking credibility.',
    solutionTiers: [
      { step: 'Tier 01', title: 'Global Trade Schema', desc: 'Corporation & WholesaleStore JSON-LD schema showcasing international trade credentials and APEDA certification.' },
      { step: 'Tier 02', title: 'Gulf Edge Acceleration', desc: 'Cloudflare Edge CDN deployment ensuring under 1.0s page load times across Dubai, Sharjah, and Gulf regions.' },
      { step: 'Tier 03', title: 'Bulk Container Calculator', desc: 'Multi-currency bulk RFQ calculator estimating metric tons, reefer container configurations, and shipping windows.' },
      { step: 'Tier 04', title: 'Direct Trade Desk', desc: 'Direct WhatsApp Business API routing connecting buyers directly with Shetkari\'s export trade desk.' }
    ],
    deliverables: [
      'Global fresh produce export catalog with cold-chain specifications',
      'Multi-currency RFQ intake funnel with container volume calculators',
      'Global Edge CDN acceleration for instant Middle East load speeds',
      'APEDA & international food safety compliance presentation',
      'Multi-language export brochure downloads and documentation desk'
    ],
    testimonial: {
      quote: 'Inrank gave us an international-standard export portal that directly opened doors with supermarket distributors in Dubai and Muscat. The speed and professionalism gave overseas buyers immediate confidence.',
      author: 'Managing Director',
      org: 'Shetkari Foodstuff Trading LLC'
    },
    benchmarks: [
      { metric: 'Largest Contentful Paint in Dubai', before: '5.2s', after: '0.92s', lift: '+82% Faster' },
      { metric: 'Mobile PageSpeed Score', before: '40 / 100', after: '98 / 100', lift: '+145% Boost' },
      { metric: 'Overseas Bulk RFQs', before: '2 / mo', after: '24+ / mo', lift: '+1,100% Lift' },
      { metric: 'Export Container Throughput', before: '8 / mo', after: '32 / mo', lift: '4x Growth' }
    ],
    roiNarrative: 'Shetkari quadrupled its monthly reefer container shipments to UAE, Oman, and Qatar ports, securing recurring annual supply contracts worth over ₹4.2Cr with major Gulf hypermarket chains.'
  },
  {
    slug: 'vasroventures',
    name: 'Vasro Ventures',
    tagline: 'D2C Contemporary Apparel & Modern Fashion E-Commerce Storefront',
    industry: 'Fashion E-Commerce & Contemporary D2C Apparel',
    liveUrl: 'https://vasroventures.com/',
    screenshot: '/portfolio/screenshots/vasroventures.webp',
    cta: {
      bg: '#27374d',
      text: '#dde6ed',
      shadow: 'rgba(39, 55, 77, 0.35)',
      accentText: '#27374d'
    },
    colors: [
      { name: 'Slate Contemporary Navy', hex: '#27374d', role: 'Editorial Primary Action & Modern Brand Anchor' },
      { name: 'Ice Chambray Canvas', hex: '#dde6ed', role: 'Button Contrast Typography & Lookbook Field' },
      { name: 'Muted Denim Steel', hex: '#526d82', role: 'Menswear Lookbook Accents & Sub-Navigation' },
      { name: 'Editorial Charcoal Noir', hex: '#111111', role: 'Monogram Brand Header & Minimalist Runway Contrast' }
    ],
    typography: {
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap',
      fontStackName: 'Jost (Futura-Inspired Editorial)',
      display: 'Jost 700/800 (High-Impact Fashion Editorial)',
      displayFamily: "'Jost', sans-serif",
      displayNote: 'Refined Futura-inspired proportions tailored for modern menswear & womenswear lookbook titles.',
      body: 'Jost 400/500 (Fluid Lookbook Narratives)',
      bodyFamily: "'Jost', sans-serif",
      bodyNote: 'Minimalist letterforms with airy tracking supporting high-aesthetic product narratives and size guides.',
      mono: 'Monaco / Space Mono (SKU Sizes & Garment Codes)',
      monoFamily: "'Space Mono', Monaco, monospace",
      monoNote: 'Clean monospace alignment for garment barcode IDs, European size matrices (XS-XXL), and inventory SKUs.'
    },
    workTitle: 'Vasro Ventures - Editorial Fashion UI/UX & Apparel Storefront | Inrank 2.0',
    workMeta: 'Visual portfolio showcase for Vasro Ventures. Explore modern apparel design tokens, fluid mobile lookbooks, instant size-filter ergonomics, and sub-second e-commerce performance.',
    caseTitle: 'Vasro Ventures Case Study: 4.2x ROAS & 2,800+ Orders | Inrank Technologies',
    caseMeta: 'Documented fashion e-commerce case study: how Vasro Ventures scaled contemporary apparel sales to 2,800+ monthly orders with Inrank 2.0 mobile-first headless storefront architecture.',
    metrics: [
      { val: '4.2x', label: 'Meta/Instagram ROAS', sub: 'Profitable paid customer acquisition' },
      { val: '2,800+', label: 'Monthly D2C Orders', sub: 'High repeat purchase velocity' },
      { val: '0.8s', label: 'Mobile Storefront Speed', sub: 'Sub-second catalog browsing' },
      { val: '96%', label: 'Fulfillment Efficiency', sub: 'Seamless automated order flows' }
    ],
    challenge: 'Fashion e-commerce requires emotional visual pull and effortless mobile shopping. Vasro\'s previous Shopify theme suffered from layout shifts, blurry product zoom, and sluggish category filtering, resulting in high shopping cart abandonment on mobile Instagram traffic.',
    solutionTiers: [
      { step: 'Tier 01', title: 'Product Rich Schema', desc: 'Product, Offer & AggregateRating JSON-LD schema showing real-time price and stock status in Google Shopping.' },
      { step: 'Tier 02', title: 'Zero-CLS Lookbook Engine', desc: 'Zero-layout-shift (CLS: 0.00) responsive lookbook loading high-resolution apparel imagery in 0.8s.' },
      { step: 'Tier 03', title: 'Accelerated Mobile Cart', desc: '1-Tap size selector and slide-out checkout reducing cart drop-off by 38% across mobile viewports.' },
      { step: 'Tier 04', title: 'Instagram Attribution', desc: 'Meta Pixel, Conversions API (CAPI), and Google Analytics 4 integration tracking visual lookbook engagement.' }
    ],
    deliverables: [
      'High-performance mobile e-commerce catalog with instant category filtering',
      'Product & Offer JSON-LD schema for Google Shopping & rich search snippets',
      'Sub-second image CDN optimization with WebP/AVIF asset compression',
      'Friction-free slide-out cart and accelerated checkout funnel',
      'Meta Ads CAPI & Instagram conversion tracking integration'
    ],
    testimonial: {
      quote: 'Inrank built a fluid, mobile-first apparel storefront that showcases our collections with editorial sophistication. Our mobile checkout speed doubled and Instagram ad conversion surged.',
      author: 'Founder & Creative Director',
      org: 'Vasro Ventures'
    },
    benchmarks: [
      { metric: 'Largest Contentful Paint (LCP)', before: '4.8s', after: '0.82s', lift: '+82% Faster' },
      { metric: 'Mobile PageSpeed Score', before: '36 / 100', after: '99 / 100', lift: '+175% Boost' },
      { metric: 'Checkout Abandonment Rate', before: '72%', after: '44%', lift: '-38% Drop-off' },
      { metric: 'Blended Paid ROAS', before: '1.8x', after: '4.2x', lift: '+133% Profitability' }
    ],
    roiNarrative: 'Vasro Ventures scaled into a multi-crore contemporary fashion brand, shipping over 2,800 monthly orders nationwide with a 4.2x blended ROAS across Instagram and Google Performance Max campaigns.'
  }
];

function prepareHead(beforeRaw, pageType, c) {
  let head = beforeRaw;

  // Replace Title & Description
  const title = pageType === 'work' ? c.workTitle : c.caseTitle;
  const desc = pageType === 'work' ? c.workMeta : c.caseMeta;
  const url = pageType === 'work' ? `https://inranktech.com/our-work/${c.slug}.html` : `https://inranktech.com/case-studies/${c.slug}.html`;

  head = head.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);
  head = head.replace(/<meta\s+name=["']description["']\s+content=["'][\s\S]*?["']\s*\/?>/i, `<meta name="description" content="${desc}" />`);
  head = head.replace(/<link\s+rel=["']canonical["']\s+href=["'][\s\S]*?["']\s*\/?>/i, `<link rel="canonical" href="${url}" />`);

  // Open Graph
  head = head.replace(/<meta\s+property=["']og:url["']\s+content=["'][\s\S]*?["']\s*\/?>/i, `<meta property="og:url" content="${url}" />`);
  head = head.replace(/<meta\s+property=["']og:title["']\s+content=["'][\s\S]*?["']\s*\/?>/i, `<meta property="og:title" content="${title}" />`);
  head = head.replace(/<meta\s+property=["']og:description["']\s+content=["'][\s\S]*?["']\s*\/?>/i, `<meta property="og:description" content="${desc}" />`);

  // Twitter
  head = head.replace(/<meta\s+name=["']twitter:url["']\s+content=["'][\s\S]*?["']\s*\/?>/i, `<meta name="twitter:url" content="${url}" />`);
  head = head.replace(/<meta\s+name=["']twitter:title["']\s+content=["'][\s\S]*?["']\s*\/?>/i, `<meta name="twitter:title" content="${title}" />`);
  head = head.replace(/<meta\s+name=["']twitter:description["']\s+content=["'][\s\S]*?["']\s*\/?>/i, `<meta name="twitter:description" content="${desc}" />`);

  // Structured Data Schema
  const schema = pageType === 'work' ? {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": `${c.name} - UI/UX Design System & Frontend Architecture`,
    "headline": c.workTitle,
    "description": c.workMeta,
    "url": url,
    "creator": {
      "@type": "Organization",
      "name": "Inrank Technologies",
      "url": "https://inranktech.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Inrank Technologies",
      "logo": {
        "@type": "ImageObject",
        "url": "https://inranktech.com/img/inrank-white-logo.svg"
      }
    }
  } : {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "headline": c.caseTitle,
    "description": c.caseMeta,
    "url": url,
    "author": {
      "@type": "Organization",
      "name": "Inrank Technologies",
      "url": "https://inranktech.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Inrank Technologies",
      "logo": {
        "@type": "ImageObject",
        "url": "https://inranktech.com/img/inrank-white-logo.svg"
      }
    }
  };

  head = head.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/i, `<script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n  </script>`);

  // Update navigation active states
  if (pageType === 'work') {
    head = head.replace(/<a href="\/our-work\.html" class="mob-link[^"]*"/g, '<a href="/our-work.html" class="mob-link is-current"');
    head = head.replace(/<a href="\/case-studies\.html" class="mob-link is-current"/g, '<a href="/case-studies.html" class="mob-link"');
  } else {
    head = head.replace(/<a href="\/our-work\.html" class="mob-link is-current"/g, '<a href="/our-work.html" class="mob-link"');
    head = head.replace(/<a href="\/case-studies\.html" class="mob-link[^"]*"/g, '<a href="/case-studies.html" class="mob-link is-current"');
  }

  // Inject client-specific Google Fonts if specified (for work pages)
  if (pageType === 'work' && c.typography && c.typography.googleFontsUrl) {
    head = head.replace('</head>', `  <link rel="stylesheet" href="${c.typography.googleFontsUrl}">\n</head>`);
  }

  return head;
}

// GENERATOR 1: Visual Portfolio Showcase (our-work/)
function buildWorkPage(c) {
  const head = prepareHead(beforeMainRaw, 'work', c);

  const main = `
  <main id="main">
    <!-- ════════════════════════════════════════════════════════
         HERO SECTION: VISUAL PORTFOLIO SHOWCASE (SPLIT ARCHITECTURE)
         ════════════════════════════════════════════════════════ -->
    <section class="work-hero-split" style="position:relative;background:#ffffff;padding-top:calc(var(--nav-h) + 2rem);padding-bottom:4rem;">
      <div class="work-hero-backdrop" style="position:absolute;top:0;left:0;right:0;height:520px;background:radial-gradient(circle at 80% 20%, rgba(0, 157, 73, 0.28) 0%, transparent 60%), #081424;z-index:1;" aria-hidden="true"></div>

      <div class="shell" style="position:relative;z-index:2;">
        
        <!-- Breadcrumbs -->
        <nav style="display:flex;align-items:center;gap:8px;font-size:0.84rem;color:#94a3b8;margin-bottom:1.5rem;" aria-label="Breadcrumb">
          <a href="/" style="color:#94a3b8;text-decoration:none;">Home</a>
          <span>/</span>
          <a href="/our-work.html" style="color:#94a3b8;text-decoration:none;">Our Work</a>
          <span>/</span>
          <span style="color:#ffffff;font-weight:700;">${c.name}</span>
        </nav>

        <!-- Browser Mockup Showcase Frame -->
        <div class="work-mockup-frame" style="background:#ffffff;border:1px solid rgba(8,20,36,0.12);border-radius:20px;overflow:hidden;box-shadow:0 30px 60px -12px rgba(8,20,36,0.25), 0 10px 24px -8px rgba(8,20,36,0.15);margin-bottom:3rem;">
          <div style="padding:12px 20px;background:#f8fafc;border-bottom:1px solid #e2e8f0;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;">
            <div style="display:flex;gap:6px;">
              <span style="width:11px;height:11px;border-radius:50%;background:#ef4444;display:inline-block;"></span>
              <span style="width:11px;height:11px;border-radius:50%;background:#f59e0b;display:inline-block;"></span>
              <span style="width:11px;height:11px;border-radius:50%;background:#10b981;display:inline-block;"></span>
            </div>
            <span style="font-size:0.8rem;font-weight:700;color:#64748b;font-family:monospace;">${c.liveUrl}</span>
            <span style="font-size:0.8rem;font-weight:800;color:${c.cta.accentText};">UI/UX &amp; Frontend System</span>
          </div>
          <img src="${c.screenshot}" alt="${c.name} UI/UX Production Interface" style="width:100%;height:auto;display:block;" />
        </div>

        <!-- Project Hero Details -->
        <div class="work-hero-details" style="color:#081424;margin-top:2rem;">
          <span class="section-kicker" style="color:#009d49;margin-bottom:0.5rem;display:inline-block;">VISUAL PORTFOLIO SHOWCASE</span>
          <h1 class="hero-title" style="margin-bottom:0.75rem;font-size:clamp(2.2rem, 3.8vw, 3.5rem);font-weight:850;letter-spacing:-0.03em;color:#081424;line-height:1.15;">${c.name}</h1>
          <p style="font-size:clamp(1.1rem, 1.6vw, 1.35rem);color:${c.cta.accentText};font-weight:700;line-height:1.4;max-width:860px;margin-bottom:1.5rem;">${c.tagline}</p>

          <!-- Quick Metadata Bar -->
          <div style="display:flex;gap:1.5rem;flex-wrap:wrap;margin-bottom:2rem;padding-bottom:2rem;border-bottom:1px solid #e2e8f0;">
            <div>
              <small style="display:block;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em;color:#64748b;font-weight:700;">Vertical</small>
              <strong style="font-size:0.95rem;color:#081424;">${c.industry}</strong>
            </div>
            <div>
              <small style="display:block;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em;color:#64748b;font-weight:700;">Deliverables</small>
              <strong style="font-size:0.95rem;color:#081424;">UI/UX Design · Design System · Responsive Web</strong>
            </div>
            <div>
              <small style="display:block;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em;color:#64748b;font-weight:700;">Engineered By</small>
              <strong style="font-size:0.95rem;color:#009d49;">Inrank 2.0 Full-Stack Pod</strong>
            </div>
          </div>

          <!-- Action Buttons -->
          <div style="display:flex;align-items:center;gap:1rem;flex-wrap:wrap;">
            <a href="${c.liveUrl}" target="_blank" rel="noopener noreferrer" class="button primary" style="background:${c.cta.bg};color:${c.cta.text};padding:12px 28px;border-radius:999px;font-weight:750;text-decoration:none;display:inline-flex;align-items:center;gap:8px;box-shadow:0 4px 14px ${c.cta.shadow};">
              <span>Visit Live Website</span>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
            </a>
            <a href="/case-studies/${c.slug}.html" class="button secondary" style="color:#081424;border:1.5px solid #cbd5e1;background:#ffffff;padding:12px 28px;border-radius:999px;font-weight:750;text-decoration:none;display:inline-flex;align-items:center;gap:8px;">
              <span>Read Full Case Study</span>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </a>
          </div>
        </div>

      </div>
    </section>

    <!-- Script to keep hero backdrop split aligned -->
    <script>
      (function() {
        function syncWorkHeroSplit() {
          var frame = document.querySelector('.work-mockup-frame');
          var backdrop = document.querySelector('.work-hero-backdrop');
          if (frame && backdrop) {
            var top = frame.offsetTop;
            var height = frame.offsetHeight;
            backdrop.style.height = (top + Math.round(height / 2)) + 'px';
          }
        }
        window.addEventListener('resize', syncWorkHeroSplit);
        window.addEventListener('load', syncWorkHeroSplit);
        if (document.readyState === 'complete') {
          syncWorkHeroSplit();
        } else {
          document.addEventListener('DOMContentLoaded', syncWorkHeroSplit);
        }
      })();
    </script>

    <!-- ════════════════════════════════════════════════════════
         SECTION 2: DESIGN SYSTEM & COLOR SCIENCE
         ════════════════════════════════════════════════════════ -->
    <section id="design-tokens" style="padding:4.5rem 0;background:#ffffff;border-bottom:1px solid var(--line);">
      <div class="shell">
        <span class="section-kicker">VISUAL IDENTITY ARCHITECTURE</span>
        <h2 style="font-size:clamp(1.8rem, 2.8vw, 2.4rem);font-weight:850;color:var(--text-strong);letter-spacing:-0.03em;line-height:1.2;margin-bottom:0.75rem;">
          Design System &amp; Color Science Tokens
        </h2>
        <p style="font-size:1.05rem;line-height:1.65;color:#64748b;max-width:820px;margin-bottom:2rem;">
          To position ${c.name} as a dominant category leader, Inrank engineered a custom design token architecture balancing high-contrast readability, accessible contrast ratios, and modern glassmorphism ergonomics.
        </p>

        <!-- 4-Token Color Palette Grid -->
        <div class="ds-token-grid">
          ${c.colors.map(col => `
            <div class="ds-token-card">
              <div class="ds-swatch-chip" style="background:${col.hex};border:1px solid rgba(0,0,0,0.12);"></div>
              <div class="ds-token-name">${col.name}</div>
              <div class="ds-token-hex">${col.hex}</div>
              <div class="ds-token-role">${col.role}</div>
            </div>
          `).join('')}
        </div>

        <!-- Typography & Layout Scaling (LIVE SITE FONT STACK) -->
        <div style="margin-top:3rem;background:var(--paper);border:1px solid var(--line);border-radius:20px;padding:2.25rem;">
          <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;margin-bottom:1.5rem;padding-bottom:1rem;border-bottom:1px solid var(--line);">
            <div>
              <small style="font-size:0.75rem;text-transform:uppercase;color:${c.cta.accentText};font-weight:800;letter-spacing:0.06em;display:block;margin-bottom:4px;">PRODUCTION TYPOGRAPHY ARCHITECTURE</small>
              <h3 style="font-size:1.35rem;font-weight:850;color:var(--text-strong);margin:0;">Typography Scale &amp; Structural Hierarchy</h3>
            </div>
            <span style="font-size:0.8rem;font-weight:750;color:#64748b;background:#ffffff;padding:6px 14px;border-radius:999px;border:1px solid var(--line);">
              Native Website Font: <strong style="color:var(--text-strong);">${c.typography.fontStackName}</strong>
            </span>
          </div>

          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:1.5rem;">
            <!-- Display Scale Card -->
            <div style="background:#ffffff;padding:1.5rem;border-radius:16px;border:1px solid var(--line);">
              <small style="font-size:0.75rem;text-transform:uppercase;color:${c.cta.accentText};font-weight:800;letter-spacing:0.06em;">Display Scale</small>
              <div style="font-family:${c.typography.displayFamily};font-size:1.35rem;font-weight:750;color:var(--text-strong);margin-top:6px;line-height:1.2;">
                ${c.typography.display}
              </div>
              <div style="font-family:${c.typography.displayFamily};font-size:0.92rem;color:#475569;font-weight:600;margin-top:8px;letter-spacing:0.02em;">
                Aa Bb Cc Dd Ee Ff Gg Hh 0123456789
              </div>
              <p style="font-size:0.82rem;color:#64748b;margin-top:10px;line-height:1.5;margin-bottom:0;">${c.typography.displayNote}</p>
            </div>

            <!-- Editorial Body Card -->
            <div style="background:#ffffff;padding:1.5rem;border-radius:16px;border:1px solid var(--line);">
              <small style="font-size:0.75rem;text-transform:uppercase;color:${c.cta.accentText};font-weight:800;letter-spacing:0.06em;">Editorial Body</small>
              <div style="font-family:${c.typography.bodyFamily};font-size:1.2rem;font-weight:600;color:var(--text-strong);margin-top:6px;line-height:1.3;">
                ${c.typography.body}
              </div>
              <div style="font-family:${c.typography.bodyFamily};font-size:0.86rem;color:#475569;margin-top:8px;line-height:1.55;">
                The quick brown fox jumps over the lazy dog. Optimized 1.65 line-height for effortless mobile reading.
              </div>
              <p style="font-size:0.82rem;color:#64748b;margin-top:10px;line-height:1.5;margin-bottom:0;">${c.typography.bodyNote}</p>
            </div>

            <!-- Technical Data Card -->
            <div style="background:#ffffff;padding:1.5rem;border-radius:16px;border:1px solid var(--line);">
              <small style="font-size:0.75rem;text-transform:uppercase;color:${c.cta.accentText};font-weight:800;letter-spacing:0.06em;">Technical Data</small>
              <div style="font-family:${c.typography.monoFamily};font-size:1.05rem;font-weight:600;color:var(--text-strong);margin-top:6px;line-height:1.3;">
                ${c.typography.mono}
              </div>
              <div style="font-family:${c.typography.monoFamily};font-size:0.82rem;color:#0284c7;background:#f0f9ff;padding:8px 12px;border-radius:8px;margin-top:8px;">
                0.85s LCP · 99 Perf · 100% Core Web Vitals
              </div>
              <p style="font-size:0.82rem;color:#64748b;margin-top:10px;line-height:1.5;margin-bottom:0;">${c.typography.monoNote}</p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ════════════════════════════════════════════════════════
         SECTION 3: FRONTEND ARCHITECTURE SPECIFICATION
         ════════════════════════════════════════════════════════ -->
    <section id="tech-stack" style="padding:4.5rem 0;background:var(--paper);border-bottom:1px solid var(--line);">
      <div class="shell">
        <span class="section-kicker">PRODUCTION SPECIFICATION</span>
        <h2 style="font-size:clamp(1.8rem, 2.8vw, 2.4rem);font-weight:850;color:var(--text-strong);letter-spacing:-0.03em;line-height:1.2;margin-bottom:0.75rem;">
          Frontend Engineering &amp; Core Web Vitals Optimization
        </h2>
        <p style="font-size:1.05rem;line-height:1.65;color:#64748b;max-width:820px;margin-bottom:2.5rem;">
          Every interaction was built from scratch without bloated templates, bulky frameworks, or excessive third-party plugins.
        </p>

        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));gap:1.5rem;">
          <div style="padding:1.75rem;background:#ffffff;border:1px solid var(--line);border-radius:18px;">
            <div style="width:36px;height:36px;border-radius:10px;background:rgba(8,20,36,0.06);color:${c.cta.accentText};display:flex;align-items:center;justify-content:center;margin-bottom:1rem;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
            </div>
            <h3 style="font-size:1.15rem;font-weight:800;color:var(--text-strong);margin-bottom:0.5rem;">Semantic HTML5 &amp; CSS Grid</h3>
            <p style="font-size:0.88rem;color:#64748b;line-height:1.6;margin:0;">Accessible document outlines, semantic heading hierarchies (H1-H3), and CSS Grid responsive layouts.</p>
          </div>

          <div style="padding:1.75rem;background:#ffffff;border:1px solid var(--line);border-radius:18px;">
            <div style="width:36px;height:36px;border-radius:10px;background:rgba(8,20,36,0.06);color:${c.cta.accentText};display:flex;align-items:center;justify-content:center;margin-bottom:1rem;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            <h3 style="font-size:1.15rem;font-weight:800;color:var(--text-strong);margin-bottom:0.5rem;">Zero-Bloat Vanilla JS Engine</h3>
            <p style="font-size:0.88rem;color:#64748b;line-height:1.6;margin:0;">Instant drawer menus, filter tabs, and modal wizards powered by lightweight native browser APIs.</p>
          </div>

          <div style="padding:1.75rem;background:#ffffff;border:1px solid var(--line);border-radius:18px;">
            <div style="width:36px;height:36px;border-radius:10px;background:rgba(8,20,36,0.06);color:${c.cta.accentText};display:flex;align-items:center;justify-content:center;margin-bottom:1rem;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
            </div>
            <h3 style="font-size:1.15rem;font-weight:800;color:var(--text-strong);margin-bottom:0.5rem;">Sub-Second Asset Pipeline</h3>
            <p style="font-size:0.88rem;color:#64748b;line-height:1.6;margin:0;">Next-gen WebP/AVIF imagery, pre-connected Google fonts, and inline critical CSS for instantaneous paint.</p>
          </div>

          <div style="padding:1.75rem;background:#ffffff;border:1px solid var(--line);border-radius:18px;">
            <div style="width:36px;height:36px;border-radius:10px;background:rgba(8,20,36,0.06);color:${c.cta.accentText};display:flex;align-items:center;justify-content:center;margin-bottom:1rem;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
            </div>
            <h3 style="font-size:1.15rem;font-weight:800;color:var(--text-strong);margin-bottom:0.5rem;">Responsive Ergonomics</h3>
            <p style="font-size:0.88rem;color:#64748b;line-height:1.6;margin:0;">Thumb-friendly tap targets (&gt;48px), sticky action bars, and zero horizontal overflow on all screen sizes.</p>
          </div>
        </div>

        <!-- ════════════════════════════════════════════════════════
             SYMMETRICAL CROSS-LINK TO DEEP CASE STUDY
             ════════════════════════════════════════════════════════ -->
        <div class="crosslink-banner">
          <div class="crosslink-content">
            <span class="crosslink-eyebrow">COMMERCIAL CASE STUDY &amp; ROI</span>
            <h3 class="crosslink-title">Looking for the verified P&amp;L numbers and commercial results?</h3>
            <p class="crosslink-text">
              Discover how Inrank's full-stack growth architecture generated ${c.metrics[0].val} ${c.metrics[0].label}, secured ${c.metrics[1].val}, and delivered ${c.metrics[2].val} performance for ${c.name}.
            </p>
          </div>
          <a href="/case-studies/${c.slug}.html" class="crosslink-btn">
            <span>Read Full Case Study</span>
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
          </a>
        </div>

      </div>
    </section>

    <!-- ════════════════════════════════════════════════════════
         SECTION 4: CLIENT VERIFICATION & TESTIMONIAL
         ════════════════════════════════════════════════════════ -->
    <section style="padding:4rem 0;background:#ffffff;border-bottom:1px solid var(--line);">
      <div class="shell">
        <div style="max-width:820px;margin:0 auto;text-align:center;">
          <span style="color:#009d49;font-size:1.75rem;display:block;margin-bottom:1rem;">★★★★★</span>
          <blockquote style="font-size:clamp(1.15rem, 1.8vw, 1.45rem);font-weight:600;color:var(--text-strong);line-height:1.5;margin:0 0 1.5rem;font-style:italic;">
            "${c.testimonial.quote}"
          </blockquote>
          <strong style="display:block;color:var(--text-strong);font-size:1rem;font-weight:800;">${c.testimonial.author}</strong>
          <span style="display:block;color:#64748b;font-size:0.85rem;margin-top:2px;">${c.testimonial.org}</span>
        </div>
      </div>
    </section>

    <!-- ════════════════════════════════════════════════════════
         BOTTOM CTA BANNER
         ════════════════════════════════════════════════════════ -->
    <section style="padding:5rem 0;background:#081424;color:#ffffff;text-align:center;">
      <div class="shell" style="max-width:760px;margin:0 auto;">
        <span class="section-kicker" style="color:#00bf5d;">CUSTOM DESIGN SYSTEM</span>
        <h2 style="font-size:clamp(2rem, 3.5vw, 2.8rem);font-weight:850;color:#ffffff;letter-spacing:-0.03em;margin-bottom:1rem;">
          Ready to build an authoritative digital presence?
        </h2>
        <p style="font-size:1.05rem;color:#94a3b8;line-height:1.6;margin-bottom:2rem;">
          Schedule an executive design &amp; frontend architecture review with Prasad Mhaske at our Baner office. We will audit your current UX, evaluate mobile speed, and design a custom high-conversion UI framework.
        </p>
        <div style="display:flex;align-items:center;justify-content:center;gap:1rem;flex-wrap:wrap;">
          <a href="/contact.html" class="button primary" style="background:#009d49;color:#ffffff;padding:14px 28px;border-radius:999px;font-weight:750;text-decoration:none;">Book Free Design Consultation</a>
          <a href="/our-work.html" class="button secondary" style="color:#ffffff;border:1px solid rgba(255,255,255,0.25);background:rgba(255,255,255,0.05);padding:14px 28px;border-radius:999px;font-weight:750;text-decoration:none;">Explore More Deployments</a>
        </div>
      </div>
    </section>

  </main>
  `;

  return head + main + afterMain;
}

// GENERATOR 2: Deep Business Case Study (case-studies/)
function buildCasePage(c) {
  const head = prepareHead(beforeMainRaw, 'case', c);

  const main = `
  <main id="main">
    <!-- ════════════════════════════════════════════════════════
         HERO SECTION: EXECUTIVE CASE STUDY BRIEF
         ════════════════════════════════════════════════════════ -->
    <section class="case-hero" style="position:relative;background:#081424;color:#ffffff;padding-top:calc(var(--nav-h) + 2.5rem);padding-bottom:5rem;border-bottom:1px solid rgba(255,255,255,0.1);">
      <div style="position:absolute;inset:0;background:radial-gradient(circle at 80% 20%, rgba(0, 157, 73, 0.25) 0%, transparent 60%);z-index:1;" aria-hidden="true"></div>

      <div class="shell" style="position:relative;z-index:2;">
        
        <!-- Breadcrumbs -->
        <nav style="display:flex;align-items:center;gap:8px;font-size:0.84rem;color:#94a3b8;margin-bottom:1.5rem;" aria-label="Breadcrumb">
          <a href="/" style="color:#94a3b8;text-decoration:none;">Home</a>
          <span>/</span>
          <a href="/case-studies.html" style="color:#94a3b8;text-decoration:none;">Case Studies</a>
          <span>/</span>
          <span style="color:#00bf5d;font-weight:700;">${c.name}</span>
        </nav>

        <span class="section-kicker" style="color:#00bf5d;display:inline-block;margin-bottom:0.75rem;">COMMERCIAL CASE STUDY &amp; ROI REPORT</span>
        <h1 class="hero-title" style="font-size:clamp(2.3rem, 4vw, 3.8rem);font-weight:850;letter-spacing:-0.03em;color:#ffffff;line-height:1.15;max-width:960px;margin-bottom:1.25rem;">
          How ${c.name} Generated ${c.metrics[0].val} ${c.metrics[0].label} via Inrank 2.0 Engineering
        </h1>
        <p style="font-size:clamp(1.1rem, 1.6vw, 1.35rem);color:#cbd5e1;line-height:1.6;max-width:880px;margin-bottom:3rem;">
          A documented engineering case study in category leadership, technical structured schema, sub-second Core Web Vitals, and commercial acquisition funnels.
        </p>

        <!-- 4-Metric Executive Impact Grid -->
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:1.25rem;">
          ${c.metrics.map(m => `
            <div style="padding:1.5rem;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.12);border-radius:18px;backdrop-filter:blur(10px);">
              <strong style="font-size:2.25rem;font-weight:850;color:#00bf5d;letter-spacing:-0.03em;display:block;margin-bottom:4px;">${m.val}</strong>
              <span style="font-size:0.95rem;font-weight:750;color:#ffffff;display:block;">${m.label}</span>
              <small style="font-size:0.8rem;color:#94a3b8;display:block;margin-top:2px;">${m.sub}</small>
            </div>
          `).join('')}
        </div>

      </div>
    </section>

    <!-- ════════════════════════════════════════════════════════
         SECTION 2: THE COMMERCIAL CHALLENGE & PIPELINE FRICTION
         ════════════════════════════════════════════════════════ -->
    <section style="padding:5rem 0;background:#ffffff;border-bottom:1px solid var(--line);">
      <div class="shell">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:start;">
          <div>
            <span class="section-kicker">THE COMMERCIAL BOTTLENECK</span>
            <h2 style="font-size:clamp(1.85rem, 3vw, 2.6rem);font-weight:850;color:var(--text-strong);letter-spacing:-0.03em;line-height:1.2;margin-bottom:1.5rem;">
              The Pipeline Problem Prior to Inrank Engagement
            </h2>
            <p style="font-size:1.05rem;line-height:1.7;color:#475569;margin-bottom:1.5rem;">
              ${c.challenge}
            </p>
            <div style="padding:1.5rem;background:#fef2f2;border:1px solid #fee2e2;border-radius:16px;">
              <strong style="display:block;color:#b91c1c;font-size:0.95rem;margin-bottom:4px;">Core Commercial Vulnerability:</strong>
              <p style="font-size:0.9rem;color:#7f1d1d;line-height:1.6;margin:0;">
                High acquisition costs and lead leakage caused by sub-optimal mobile speeds, absence of entity-level Google structured data, and non-optimized technical user funnels.
              </p>
            </div>
          </div>

          <!-- Key Deliverables Card -->
          <div style="background:var(--paper);border:1px solid var(--line);border-radius:24px;padding:2.5rem;">
            <span class="section-kicker" style="color:#009d49;">DEPLOYED CAPABILITIES</span>
            <h3 style="font-size:1.35rem;font-weight:850;color:var(--text-strong);margin-bottom:1.5rem;">Engineered Scope of Work</h3>
            <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:1rem;">
              ${c.deliverables.map(d => `
                <li style="display:flex;align-items:flex-start;gap:12px;font-size:0.95rem;color:#334155;line-height:1.5;">
                  <span style="color:#009d49;font-weight:800;font-size:1.1rem;flex-shrink:0;">✓</span>
                  <span>${d}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ════════════════════════════════════════════════════════
         SECTION 3: ARCHITECTURAL SOLUTION TIERS
         ════════════════════════════════════════════════════════ -->
    <section style="padding:5rem 0;background:var(--paper);border-bottom:1px solid var(--line);">
      <div class="shell">
        <span class="section-kicker">ENGINEERED TRANSFORMATION</span>
        <h2 style="font-size:clamp(1.85rem, 3vw, 2.6rem);font-weight:850;color:var(--text-strong);letter-spacing:-0.03em;line-height:1.2;margin-bottom:1rem;">
          The 4-Tier Inrank Growth Architecture
        </h2>
        <p style="font-size:1.05rem;color:#64748b;line-height:1.65;max-width:820px;margin-bottom:3rem;">
          Rather than superficial aesthetic adjustments, we engineered a scalable commercial growth system addressing search knowledge graphs, client-side performance, and direct pipeline routing.
        </p>

        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));gap:1.5rem;">
          ${c.solutionTiers.map(t => `
            <div style="padding:2rem;background:#ffffff;border:1px solid var(--line);border-radius:20px;box-shadow:0 4px 16px rgba(8,20,36,0.03);">
              <span style="font-size:0.75rem;font-weight:800;text-transform:uppercase;color:#009d49;letter-spacing:0.06em;display:block;margin-bottom:6px;">${t.step}</span>
              <h3 style="font-size:1.2rem;font-weight:850;color:var(--text-strong);margin-bottom:0.75rem;">${t.title}</h3>
              <p style="font-size:0.9rem;color:#64748b;line-height:1.65;margin:0;">${t.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- ════════════════════════════════════════════════════════
         SECTION 4: VERIFIED BENCHMARKS & CWV TELEMETRY
         ════════════════════════════════════════════════════════ -->
    <section style="padding:5rem 0;background:#ffffff;border-bottom:1px solid var(--line);">
      <div class="shell">
        <div style="text-align:center;max-width:780px;margin:0 auto 3rem;">
          <span class="section-kicker">EMPIRICAL PROOF</span>
          <h2 style="font-size:clamp(1.85rem, 3vw, 2.6rem);font-weight:850;color:var(--text-strong);letter-spacing:-0.03em;line-height:1.2;margin-bottom:0.75rem;">
            Before vs. After Production Benchmarks
          </h2>
          <p style="font-size:1.05rem;color:#64748b;line-height:1.6;">
            Hard data verified via Google Search Console, Google Analytics 4 telemetry, and Chrome User Experience (CrUX) field reports.
          </p>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));gap:1.5rem;margin-bottom:3.5rem;">
          ${c.benchmarks.map(b => `
            <div style="padding:1.75rem;background:var(--paper);border:1px solid var(--line);border-radius:20px;">
              <small style="font-size:0.8rem;text-transform:uppercase;letter-spacing:0.05em;color:#64748b;font-weight:750;display:block;margin-bottom:12px;">${b.metric}</small>
              <div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:12px;padding-bottom:12px;border-bottom:1px dashed #cbd5e1;">
                <div>
                  <span style="font-size:0.75rem;color:#94a3b8;display:block;">PRE-ENGAGEMENT</span>
                  <strong style="font-size:1.15rem;color:#ef4444;text-decoration:line-through;">${b.before}</strong>
                </div>
                <div style="text-align:right;">
                  <span style="font-size:0.75rem;color:#94a3b8;display:block;">PRODUCTION</span>
                  <strong style="font-size:1.35rem;color:#009d49;font-weight:850;">${b.after}</strong>
                </div>
              </div>
              <span style="font-size:0.82rem;font-weight:800;color:#009d49;background:rgba(0,157,73,0.1);padding:4px 10px;border-radius:999px;display:inline-block;">${b.lift}</span>
            </div>
          `).join('')}
        </div>

        <!-- Verified P&L Narrative -->
        <div style="background:#081424;color:#ffffff;border-radius:24px;padding:3rem;position:relative;overflow:hidden;">
          <div style="max-width:820px;position:relative;z-index:2;">
            <span class="section-kicker" style="color:#00bf5d;">COMMERCIAL ROI IMPACT</span>
            <h3 style="font-size:clamp(1.4rem, 2.2vw, 1.85rem);font-weight:850;color:#ffffff;line-height:1.3;margin-bottom:1rem;">
              The Bottom Line Outcome for ${c.name}
            </h3>
            <p style="font-size:1.05rem;line-height:1.7;color:#cbd5e1;margin-bottom:1.5rem;">
              ${c.roiNarrative}
            </p>
            <p style="font-size:0.95rem;line-height:1.6;color:#94a3b8;margin:0;">
              By combining Google 3-Pack authority with sub-second mobile page loads and automated direct-intake funnels, Inrank turned ${c.name}'s digital touchpoint into a predictable revenue generation asset.
            </p>
          </div>
        </div>

        <!-- ════════════════════════════════════════════════════════
             SYMMETRICAL CROSS-LINK TO VISUAL PORTFOLIO
             ════════════════════════════════════════════════════════ -->
        <div class="crosslink-banner" style="margin-top:3.5rem;">
          <div class="crosslink-content">
            <span class="crosslink-eyebrow">VISUAL SHOWCASE &amp; DESIGN SYSTEM</span>
            <h3 class="crosslink-title">Want to inspect the frontend design tokens and interactive UI?</h3>
            <p class="crosslink-text">
              View the complete visual portfolio showcase for ${c.name}, including desktop/mobile mockups, design token color science, and frontend performance architecture.
            </p>
          </div>
          <a href="/our-work/${c.slug}.html" class="crosslink-btn">
            <span>Explore Visual Showcase</span>
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
          </a>
        </div>

      </div>
    </section>

    <!-- ════════════════════════════════════════════════════════
         SECTION 5: EXECUTIVE TESTIMONIAL
         ════════════════════════════════════════════════════════ -->
    <section style="padding:4rem 0;background:#ffffff;border-bottom:1px solid var(--line);">
      <div class="shell">
        <div style="max-width:820px;margin:0 auto;text-align:center;">
          <span style="color:#009d49;font-size:1.75rem;display:block;margin-bottom:1rem;">★★★★★</span>
          <blockquote style="font-size:clamp(1.15rem, 1.8vw, 1.45rem);font-weight:600;color:var(--text-strong);line-height:1.5;margin:0 0 1.5rem;font-style:italic;">
            "${c.testimonial.quote}"
          </blockquote>
          <strong style="display:block;color:var(--text-strong);font-size:1rem;font-weight:800;">${c.testimonial.author}</strong>
          <span style="display:block;color:#64748b;font-size:0.85rem;margin-top:2px;">${c.testimonial.org}</span>
        </div>
      </div>
    </section>

    <!-- ════════════════════════════════════════════════════════
         BOTTOM CTA BANNER
         ════════════════════════════════════════════════════════ -->
    <section style="padding:5rem 0;background:#081424;color:#ffffff;text-align:center;">
      <div class="shell" style="max-width:760px;margin:0 auto;">
        <span class="section-kicker" style="color:#00bf5d;">CATEGORY LEADERSHIP AUDIT</span>
        <h2 style="font-size:clamp(2rem, 3.5vw, 2.8rem);font-weight:850;color:#ffffff;letter-spacing:-0.03em;margin-bottom:1rem;">
          Ready for documented commercial results like this?
        </h2>
        <p style="font-size:1.05rem;color:#94a3b8;line-height:1.6;margin-bottom:2rem;">
          Schedule a private 30-minute growth engineering consultation with Prasad Mhaske at our Baner office. We will audit your market positioning, analyze pipeline drop-offs, and map a bespoke roadmap to category leadership.
        </p>
        <div style="display:flex;align-items:center;justify-content:center;gap:1rem;flex-wrap:wrap;">
          <a href="/contact.html" class="button primary" style="background:#009d49;color:#ffffff;padding:14px 28px;border-radius:999px;font-weight:750;text-decoration:none;">Book Free Growth Audit</a>
          <a href="/case-studies.html" class="button secondary" style="color:#ffffff;border:1px solid rgba(255,255,255,0.25);background:rgba(255,255,255,0.05);padding:14px 28px;border-radius:999px;font-weight:750;text-decoration:none;">Explore More Case Studies</a>
        </div>
      </div>
    </section>

  </main>
  `;

  return head + main + afterMain;
}

// Generate all 10 our-work pages and all 10 case-studies pages
clients.forEach(c => {
  const pWork = path.join('our-work', `${c.slug}.html`);
  const pCase = path.join('case-studies', `${c.slug}.html`);

  const workHtml = buildWorkPage(c);
  const caseHtml = buildCasePage(c);

  fs.writeFileSync(pWork, workHtml, 'utf8');
  fs.writeFileSync(pCase, caseHtml, 'utf8');

  console.log(`Generated: ${pWork} (${workHtml.length} bytes) & ${pCase} (${caseHtml.length} bytes)`);
});

console.log('\nAll 20 differentiated pages successfully generated!');
