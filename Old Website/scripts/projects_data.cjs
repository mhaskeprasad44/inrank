const fs = require('fs');
const path = require('path');

// 1. PROJECT METADATA FOR ALL 10 CASES
const projects = [
  {
    slug: 'dravyafinancial',
    name: 'Dravya Financial Solutions Pvt Ltd',
    domain: 'https://dravyafinancial.com/',
    liveUrl: 'https://dravyafinancial.com/',
    category: 'Wealth Management & Corporate Advisory',
    location: 'Baner & Shivaji Nagar, Pune',
    turnaround: '3 Weeks Turnaround',
    heroBadge: '₹14.5Cr+ Inbound AUM',
    tagline: 'Institutional Wealth Advisory & High-Yield Portfolio Management Platform',
    metrics: [
      { val: '₹14.5Cr+', lbl: 'Inbound AUM Influenced', sub: 'Qualified HNIs via search' },
      { val: '92%', lbl: 'Lead Qualification', sub: 'High net-worth filters' },
      { val: '1.1s', lbl: 'Load Speed', sub: 'Clean corporate layout' },
      { val: '24/7', lbl: 'Automated Scheduling', sub: 'Google Calendar sync' }
    ],
    overview: 'Dravya Financial Solutions is an institutional portfolio management and corporate advisory firm. They needed a digital presence communicating absolute fiduciary trust, regulatory compliance, and seamless consultation booking for high-net-worth individuals across Pune and Mumbai.',
    challenge: 'The existing site suffered from a generic WordPress theme template, 4.2-second load times on mobile, zero on-page Schema markup, and confusing contact funnels that leaked high-value corporate inquiries.',
    deliverables: [
      'Custom semantic HTML5/CSS3 corporate web engineering',
      'FinancialService & ProfessionalService JSON-LD structured data',
      'Encrypted client inquiry forms with instant WhatsApp lead routing',
      'Interactive risk profiling calculator and consultation scheduler',
      'Sub-second mobile rendering optimized for Core Web Vitals'
    ],
    outcomes: 'Within 60 days of deployment, Dravya Financial captured page 1 Google rankings for high-intent corporate financial advisory searches in Pune, driving over ₹14.5Cr in qualified inbound AUM inquiries.',
    testimonial: {
      quote: "Inrank gave us an institutional-grade digital platform that immediately commanded respect from HNI clients. Their speed, direct engineer communication, and focus on conversion are unmatched in Pune.",
      author: "Advisory Board",
      title: "Dravya Financial Solutions Pvt Ltd"
    }
  },
  {
    slug: 'cytos',
    name: 'Cytos Healthcare Solutions',
    domain: 'https://cytos.in/',
    liveUrl: 'https://cytos.in/',
    category: 'Healthcare Infrastructure & Diagnostics',
    location: 'Pune & National Distribution',
    turnaround: '3 Weeks Turnaround',
    heroBadge: '340+ Hospital Leads',
    tagline: 'National B2B Diagnostic Equipment & Clinical Consumables Portal',
    metrics: [
      { val: '340+', lbl: 'Hospital B2B Inquiries', sub: 'Direct RFQs via portal' },
      { val: '#1 Rank', lbl: 'Google 3-Pack', sub: 'Pune medical supply' },
      { val: '0.9s', lbl: 'Page Load Speed', sub: 'Lighthouse 96 Mobile' },
      { val: '4.9★', lbl: 'Verified Client Rating', sub: 'Healthcare procurement' }
    ],
    overview: 'Cytos Healthcare supplies clinical diagnostic equipment and lab consumables to hospitals and diagnostic chains. They required a fast, searchable product catalog capable of generating structured Request For Quotations (RFQs).',
    challenge: 'Previous PDF-based catalog made mobile browsing impossible for hospital purchase officers. Lack of medical equipment schema resulted in zero organic search visibility.',
    deliverables: [
      'Fast-loading responsive diagnostic equipment catalog',
      'MedicalEntity & Product JSON-LD structured data architecture',
      '1-click RFQ generator with instant WhatsApp integration',
      'Hyperlocal SEO optimization across Pune healthcare hubs',
      'Google Analytics 4 server-side conversion tracking'
    ],
    outcomes: 'Generated over 340 qualified institutional hospital inquiries in the first quarter, establishing Cytos as the preferred diagnostic supply partner in Maharashtra.',
    testimonial: {
      quote: "Our hospital purchase inquiries tripled within two months. The product catalog loads instantly on mobile, and doctors love the quick RFQ system.",
      author: "Managing Director",
      title: "Cytos Healthcare"
    }
  },
  {
    slug: 'greytothegreen',
    name: 'Grey To The Green',
    domain: 'https://greytothegreen.com/',
    liveUrl: 'https://greytothegreen.com/',
    category: 'Commercial Landscaping & Bio-Architecture',
    location: 'Koregaon Park & Hinjewadi, Pune',
    turnaround: '2.5 Weeks Turnaround',
    heroBadge: '4.8x Ad ROAS',
    tagline: 'Sustainable Bio-Architecture & Luxury Corporate Greenery Engineering',
    metrics: [
      { val: '4.8x', lbl: 'Average Meta/Google ROAS', sub: 'Commercial contracts' },
      { val: '120+', lbl: 'High-Ticket Inquiries', sub: 'IT parks & villas' },
      { val: '< 1.1s', lbl: 'Render Time', sub: 'High-res image CDN' },
      { val: '+240%', lbl: 'Organic Traffic Lift', sub: 'Pune landscaping queries' }
    ],
    overview: 'Grey To The Green engineers sustainable corporate green walls, terrace gardens, and bio-architectural installations for corporate IT parks and luxury residential estates.',
    challenge: 'A heavy, unoptimized photo gallery caused 6-second load times on mobile. PPC advertising was bleeding budget due to non-converting landing pages.',
    deliverables: [
      'Next-generation WebP responsive image pipeline with lazy loading',
      'High-conversion corporate landscape quotation funnels',
      'Targeted Google Search & Meta Retargeting campaigns',
      'Local Pune citation network for premium landscaping',
      'Dynamic project portfolio filter with case breakdown'
    ],
    outcomes: 'Achieved a consistent 4.8x ROAS on commercial ad campaigns while ranking top 3 on Google for luxury terrace garden and bio-wall keywords in Pune.',
    testimonial: {
      quote: "Inrank transformed our web presence from a slow photo album into an aggressive B2B client acquisition machine. The lead quality from Pune IT parks has been phenomenal.",
      author: "Founder & Lead Architect",
      title: "Grey To The Green"
    }
  },
  {
    slug: 'fludio',
    name: 'Fludio Design Studio',
    domain: 'https://fludio.in/',
    liveUrl: 'https://fludio.in/',
    category: 'Bespoke Architectural & Interior Systems',
    location: 'Kalyani Nagar & Baner, Pune',
    turnaround: '2 Weeks Turnaround',
    heroBadge: '₹2.8Cr+ Projects Won',
    tagline: 'High-End Architectural Planning & Contemporary Interior Engineering',
    metrics: [
      { val: '₹2.8Cr+', lbl: 'Project Value Influenced', sub: 'Luxury interior contracts' },
      { val: '38+', lbl: 'Consultation Bookings', sub: 'High-intent homeowners' },
      { val: '98%', lbl: 'Client Satisfaction', sub: 'Verified design reviews' },
      { val: '0.8s', lbl: 'LCP Speed', sub: 'Smooth micro-interactions' }
    ],
    overview: 'Fludio Design Studio crafts bespoke residential and commercial interior environments. They needed an editorial-grade web portfolio reflecting architectural precision.',
    challenge: 'Their existing portfolio failed to reflect their design standards, with disjointed typography, zero mobile responsiveness, and sluggish page transitions.',
    deliverables: [
      'Bespoke architectural layout with editorial typography and whitespace',
      'Smooth, non-blocking image carousels with micro-interactions',
      'Integrated project inquiry pipeline with budget filtering',
      'Local Pune SEO targeting luxury residential corridors',
      'Full brand style guide alignment across all devices'
    ],
    outcomes: 'Secured ₹2.8Cr+ in premium turnkey residential and boutique commercial interior commissions within the first 90 days post-launch.',
    testimonial: {
      quote: "The site Inrank built looks like an international architectural journal. Our clients constantly mention how polished and seamless the website is.",
      author: "Principal Designer",
      title: "Fludio Studio"
    }
  },
  {
    slug: 'hcpnest',
    name: 'HCP Nest Coworking & Managed Workspaces',
    domain: 'https://hcpnest.com/',
    liveUrl: 'https://hcpnest.com/',
    category: 'Commercial Real Estate & Managed Offices',
    location: 'Kharadi & Viman Nagar, Pune',
    turnaround: '2 Weeks Turnaround',
    heroBadge: '94% Desk Occupancy',
    tagline: 'Premium Enterprise Workspaces & Flexible Coworking Suites in Pune',
    metrics: [
      { val: '94%', lbl: 'Workspace Occupancy', sub: 'Enterprise suites filled' },
      { val: '280+', lbl: 'Monthly Tour Bookings', sub: 'Automated calendar sync' },
      { val: '#1 Rank', lbl: 'Kharadi Coworking', sub: 'Google 3-pack top spot' },
      { val: '1.0s', lbl: 'Speed Index', sub: 'Zero bloat architecture' }
    ],
    overview: 'HCP Nest offers premium flexible coworking spaces, private team cabins, and meeting facilities in Pune’s prominent eastern IT corridors.',
    challenge: 'High cost-per-lead on Google Ads with 70% of clicks bouncing off a slow multi-step booking form. Desk vacancy stood at 32%.',
    deliverables: [
      'High-conversion 1-page tour booking engine with instant slot selection',
      'Google Ads campaign restructuring focusing on high-intent IT terms',
      'Local SEO dominance across Kharadi, Magarpatta, and Viman Nagar',
      'Live WhatsApp desk availability bot integration',
      'Dynamic workspace pricing & amenities calculator'
    ],
    outcomes: 'Increased physical workspace tour bookings by 210% and pushed overall desk occupancy to 94% within 45 days.',
    testimonial: {
      quote: "Inrank completely turned around our digital acquisition. We reached 94% occupancy across both Kharadi floors while cutting our ad spend by 30%.",
      author: "Operations Head",
      title: "HCP Nest Coworking"
    }
  },
  {
    slug: 'hiragrafix',
    name: 'Hira Grafix Solutions',
    domain: 'https://hiragrafix.com/',
    liveUrl: 'https://hiragrafix.com/',
    category: 'Industrial Signage & Brand Environment',
    location: 'Chakan & Bhosari, Pune',
    turnaround: '2 Weeks Turnaround',
    heroBadge: '180+ Industrial RFQs',
    tagline: 'Industrial Signage, Architectural Facades & Retail Branding Hub',
    metrics: [
      { val: '180+', lbl: 'Industrial RFQs', sub: 'Bhosari & Chakan plants' },
      { val: '+185%', lbl: 'Search Visibility', sub: 'Industrial signage Pune' },
      { val: '1.1s', lbl: 'Mobile Load Speed', sub: 'Clean semantic markup' },
      { val: '100%', lbl: 'Asset Ownership', sub: 'Zero vendor lock-in' }
    ],
    overview: 'Hira Grafix provides turnkey industrial branding, exterior architectural facades, and corporate wayfinding signage across Maharashtra’s automotive and engineering belts.',
    challenge: 'A dormant web presence that generated zero leads; automotive Tier-1 suppliers in Chakan could not discover their technical fabrication capabilities online.',
    deliverables: [
      'Industrial fabrication capability showcase with detailed specs',
      'Targeted B2B SEO targeting PCMC, Bhosari, Chakan, and Talegaon clusters',
      'Fast mobile quotation request form with blueprint upload capability',
      'Full technical SEO audit and Google Search Console optimization',
      'WhatsApp direct routing to estimating engineers'
    ],
    outcomes: 'Captured over 180 enterprise signage RFQs from manufacturing plants and retail brands within 6 months of relaunch.',
    testimonial: {
      quote: "Industrial signage requires technical credibility. Inrank gave us a platform that immediately proves our capability to major automotive Tier-1 clients.",
      author: "Technical Director",
      title: "Hira Grafix"
    }
  },
  {
    slug: 'orthopedicanklefootspecialist',
    name: 'Orthopedic Ankle & Foot Specialist',
    domain: 'https://orthopedicanklefootspecialist.com/',
    liveUrl: 'https://orthopedicanklefootspecialist.com/',
    category: 'Super-Specialty Clinical Practice',
    location: 'Aundh & Baner, Pune',
    turnaround: '2 Weeks Turnaround',
    heroBadge: '450+ Consultations',
    tagline: 'Advanced Foot & Ankle Reconstruction, Sports Injury & Trauma Surgery',
    metrics: [
      { val: '450+', lbl: 'Verified Patient Bookings', sub: 'Via local search' },
      { val: '#1 Rank', lbl: 'Google 3-Pack', sub: 'Ankle specialist Pune' },
      { val: '0.9s', lbl: 'Mobile Page Speed', sub: 'Quick click-to-call' },
      { val: '99%', lbl: 'Patient Trust Rating', sub: 'Verified clinic reviews' }
    ],
    overview: 'A leading orthopedic surgical clinic specializing in complex foot reconstructive surgery, sports arthroscopy, and diabetic foot management.',
    challenge: 'Patients in severe pain were dropping off due to slow loading times and lack of direct clinic WhatsApp calling options on mobile devices.',
    deliverables: [
      'Mobile-first medical clinic layout with 1-tap phone and WhatsApp booking',
      'MedicalCondition & Physician JSON-LD schema integration',
      'Hyperlocal SEO domination across Baner, Aundh, Kothrud, and PCMC',
      'Patient educational condition guides with recovery timelines',
      'Google Maps 3-Pack review management protocol'
    ],
    outcomes: 'Secured the #1 Google 3-Pack ranking for foot & ankle surgical care in West Pune, delivering 450+ patient appointments per quarter.',
    testimonial: {
      quote: "Patients frequently tell me how easy it was to find my clinic on Google and book an appointment with one tap. Inrank understands medical growth.",
      author: "Consultant Orthopedic Surgeon",
      title: "Orthopedic Ankle & Foot Specialist"
    }
  },
  {
    slug: 'riituinstitution',
    name: 'Riitu Institution of Arts & Design',
    domain: 'https://riituinstitution.com/',
    liveUrl: 'https://riituinstitution.com/',
    category: 'Creative Arts & Higher Education',
    location: 'Shivaji Nagar & Deccan, Pune',
    turnaround: '2.5 Weeks Turnaround',
    heroBadge: '820+ Admissions Leads',
    tagline: 'Premier Design Academy, Fashion Tech & Fine Arts Education Hub',
    metrics: [
      { val: '820+', lbl: 'Admissions Inquiries', sub: 'Summer semester batch' },
      { val: '3.9x', lbl: 'Ad Campaign ROAS', sub: 'Student registrations' },
      { val: '1.2s', lbl: 'Interactive Speed', sub: 'Curriculum explorer' },
      { val: '+160%', lbl: 'Instagram Lead Surge', sub: 'Integrated Meta funnels' }
    ],
    overview: 'Riitu Institution prepares aspiring creative designers, fashion architects, and digital artists for global careers through certified intensive diplomas.',
    challenge: 'Cluttered academic prospectus on the old site caused high drop-off during the peak summer admissions intake window.',
    deliverables: [
      'Vibrant academic portal with interactive course curriculum finder',
      'Automated admissions brochure download and lead nurturing workflow',
      'Multi-channel Meta and Google Ads strategy during intake season',
      'Student work showcase gallery with high-speed lazy loading',
      'Direct WhatsApp admissions counseling integration'
    ],
    outcomes: 'Delivered 820+ verified admissions inquiries, filling 100% of seats across all core diploma cohorts two weeks before the application deadline.',
    testimonial: {
      quote: "Our admissions team had their most successful intake season thanks to Inrank’s conversion-engineered landing pages and ad targeting.",
      author: "Academic Dean",
      title: "Riitu Institution"
    }
  },
  {
    slug: 'shetkarifoodstuff',
    name: 'Shetkari Foodstuff Pvt Ltd',
    domain: 'https://shetkarifoodstuff.com/',
    liveUrl: 'https://shetkarifoodstuff.com/',
    category: 'Agri-Tech & Export Food Processing',
    location: 'Baramati & Hadapsar, Pune',
    turnaround: '3 Weeks Turnaround',
    heroBadge: '₹4.2Cr+ Export Orders',
    tagline: 'Farm-Direct Organic Food Processing & International Export Supply',
    metrics: [
      { val: '₹4.2Cr+', lbl: 'Export Contract Inquiries', sub: 'Middle East & Europe' },
      { val: '85+', lbl: 'Wholesale B2B Leads', sub: 'Supermarket distributors' },
      { val: '1.0s', lbl: 'Global CDN Speed', sub: 'Zero overseas latency' },
      { val: '100%', lbl: 'Regulatory Verified', sub: 'APEDA & FSSAI Schema' }
    ],
    overview: 'Shetkari Foodstuff processes organic agricultural produce, cold-pressed oils, and spices for national FMCG distribution and export shipments.',
    challenge: 'Overseas buyers in the UAE and Europe required immediate access to laboratory certifications, export specs, and bulk container pricing models.',
    deliverables: [
      'Global export product catalog with container load & pallet calculators',
      'Multi-currency pricing framework and international lead routing',
      'Agricultural & food processing schema markup for global discovery',
      'High-speed global CDN deployment ensuring sub-second overseas loads',
      'Instant sample order request funnel with automated CRM tracking'
    ],
    outcomes: 'Facilitated ₹4.2Cr+ in overseas container inquiries from Middle East and European organic commodity importers within the initial deployment cycle.',
    testimonial: {
      quote: "Inrank gave us an international-standard export portal that directly opened doors with supermarket distributors in Dubai and Germany.",
      author: "Export Director",
      title: "Shetkari Foodstuff Pvt Ltd"
    }
  },
  {
    slug: 'vasroventures',
    name: 'Vasro Ventures Private Limited',
    domain: 'https://vasroventures.com/',
    liveUrl: 'https://vasroventures.com/',
    category: 'Corporate Holding & Venture Capital',
    location: 'Koregaon Park & Senapati Bapat Road, Pune',
    turnaround: '2.5 Weeks Turnaround',
    heroBadge: '14 Strategic Deals',
    tagline: 'Strategic Investment, Venture Incubation & Cross-Border M&A Advisory',
    metrics: [
      { val: '14', lbl: 'Strategic Deal Funnels', sub: 'Institutional syndication' },
      { val: '100%', lbl: 'Confidential Routing', sub: 'End-to-end encrypted' },
      { val: '0.8s', lbl: 'Serverless Render', sub: 'Enterprise Next.js architecture' },
      { val: '99.9%', lbl: 'Service Uptime', sub: 'Enterprise SLA' }
    ],
    overview: 'Vasro Ventures invests in early-growth technology startups and provides cross-border strategic advisory, equity syndication, and incubation.',
    challenge: 'Needed a minimalist, ultra-high-end venture capital platform communicating sophistication, regulatory rigor, and strict confidentiality.',
    deliverables: [
      'Custom minimalist dark-mode executive web architecture',
      'Encrypted deal-room intake funnel for institutional founders',
      'Portfolio incubation showcase with real-time sector filtering',
      'Sub-second serverless deployment on high-availability edge nodes',
      'Executive bio profiles and press release archive'
    ],
    outcomes: 'Streamlined incoming founder pitch submissions and enabled smooth syndicate participation for 14 high-growth regional ventures.',
    testimonial: {
      quote: "Inrank understands corporate restraint and technical sophistication. The platform represents our venture thesis with precision and elegance.",
      author: "Managing Partner",
      title: "Vasro Ventures"
    }
  }
];

console.log('Projects loaded:', projects.length);

module.exports = { projects };

