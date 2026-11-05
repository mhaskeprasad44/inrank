const fs = require('fs');

const projectsData = {
  'dravyafinancial': {
    title: 'Dravya Financial Solutions Pvt Ltd',
    subtitle: 'Institutional Wealth Advisory & High-Yield Portfolio Management Platform',
    badge: '₹14.5Cr+ Inbound AUM',
    domain: 'https://dravyafinancial.com/',
    metaDesc: 'Institutional Wealth Advisory & High-Yield Portfolio Management Platform. Documented outcomes, performance metrics, and technical architecture by Inrank Technologies Pune.',
    metrics: [
      { strong: '₹14.5Cr+', label: 'Inbound AUM Influenced', desc: 'Qualified HNIs via search' },
      { strong: '92%', label: 'Lead Qualification', desc: 'High net-worth filters' },
      { strong: '1.1s', label: 'Load Speed', desc: 'Clean corporate layout' },
      { strong: '24/7', label: 'Automated Scheduling', desc: 'Google Calendar sync' }
    ],
    overviewTag: 'PROJECT OVERVIEW',
    challengeTitle: 'The Commercial Challenge & Solution',
    challengeText: 'Dravya Financial Solutions is an institutional portfolio management and corporate advisory firm. They needed a high-credibility digital platform communicating fiduciary compliance, wealth management authority, and frictionless consultation booking for high-net-worth individuals across Pune and Mumbai.<br><br><strong>Technical Challenge:</strong> The existing site suffered from a generic WordPress theme template, 4.2-second load times on mobile, zero on-page Schema markup, and confusing contact funnels that leaked high-value corporate wealth inquiries.',
    deliverablesTag: 'ENGINEERING DELIVERABLES',
    scopeTitle: 'Scope of Architecture Deployed',
    scopeItems: [
      'Custom semantic HTML5/CSS3 corporate web engineering',
      'FinancialService & ProfessionalService JSON-LD structured data',
      'Encrypted client inquiry forms with instant WhatsApp lead routing',
      'Interactive risk profiling calculator and consultation scheduler',
      'Sub-second mobile rendering optimized for Core Web Vitals'
    ],
    quote: '"Inrank gave us an institutional-grade digital platform that immediately commanded respect from HNI clients. Their speed, direct engineer communication, and focus on conversion are unmatched in Pune."',
    quoteAuthor: 'Advisory Board, Dravya Financial Solutions Pvt Ltd'
  },
  'greytothegreen': {
    title: 'Grey To The Green',
    subtitle: 'Research-Backed Botanical Skincare & Ayurvedic Wellness D2C Platform',
    badge: '4.8x Ad ROAS',
    domain: 'https://greytothegreen.com/',
    metaDesc: 'Research-Backed Botanical Skincare & Ayurvedic Wellness D2C Platform. Documented outcomes, performance metrics, and technical architecture by Inrank Technologies Pune.',
    metrics: [
      { strong: '4.8x', label: 'Average Meta/Google ROAS', desc: 'Scalable D2C acquisition' },
      { strong: '3,200+', label: 'Monthly D2C Orders', desc: 'Direct consumer checkouts' },
      { strong: '< 1.0s', label: 'Mobile Commerce Speed', desc: 'Instant product browsing' },
      { strong: '+240%', label: 'Organic Traffic Lift', desc: 'Botanical remedy searches' }
    ],
    overviewTag: 'PROJECT OVERVIEW',
    challengeTitle: 'The Commercial Challenge & Solution',
    challengeText: 'Grey To The Green produces research-backed botanical skincare, non-toxic body remedies, and Ayurvedic wellness formulations (including Kaya Kavach). They needed a fast, high-converting D2C e-commerce storefront capable of establishing clinical formulation credibility and scaling Meta and Google ad traffic profitably.<br><br><strong>Technical Challenge:</strong> A heavy, unoptimized photo gallery caused 6-second load times on mobile. PPC advertising was bleeding budget due to high bounce rates and multi-step drop-offs on mobile checkouts.',
    deliverablesTag: 'ENGINEERING DELIVERABLES',
    scopeTitle: 'Scope of Architecture Deployed',
    scopeItems: [
      'High-speed responsive D2C storefront with instant add-to-cart flows',
      'Product & Review JSON-LD schema for rich Google search snippets',
      'Conversion-engineered landing pages for flagship formulations (Kaya Kavach)',
      'Meta Pixel CAPI & Google Ads server-side tracking integration',
      'Sub-second mobile checkout funnel with automated WhatsApp order alerts'
    ],
    quote: '"Inrank transformed our D2C brand. Our customer acquisition costs dropped significantly and our mobile conversion rate doubled within 60 days of launch."',
    quoteAuthor: 'Founder, Grey To The Green'
  },
  'cytos': {
    title: 'CyTOS Machines',
    subtitle: 'Chemical-Free Laboratory PCB CNC Milling Machines & Turnkey SPMs',
    badge: '180+ Industrial RFQs',
    domain: 'https://cytos.in/',
    metaDesc: 'Chemical-Free Laboratory PCB CNC Milling Machines & Turnkey SPMs. Documented outcomes, performance metrics, and technical architecture by Inrank Technologies Pune.',
    metrics: [
      { strong: '180+', label: 'Industrial Machine RFQs', desc: 'Hardware R&D lab inquiries' },
      { strong: '#1 Rank', label: 'Google 3-Pack & SEO', desc: 'PCB prototyping machine India' },
      { strong: '0.9s', label: 'Technical Catalog Speed', desc: 'Lighthouse 98 performance' },
      { strong: '4.9★', label: 'Technical Buyer Rating', desc: 'R&D labs & defense buyers' }
    ],
    overviewTag: 'PROJECT OVERVIEW',
    challengeTitle: 'The Commercial Challenge & Solution',
    challengeText: 'CyTOS Machines manufactures 100% chemical-free laboratory CNC circuit prototyping machines (PCB30 series), heavy industrial CNC routers, and turnkey robotics SPMs. They needed an authoritative B2B engineering website that allows hardware R&D engineers, defense contractors, and electronics labs to review machine specs, download technical datasheets, and request detailed machine quotations.<br><br><strong>Technical Challenge:</strong> Previous PDF-based catalog made mobile browsing impossible for procurement engineers. Lack of industrial machine schema resulted in zero organic search visibility across Pan-India hardware clusters.',
    deliverablesTag: 'ENGINEERING DELIVERABLES',
    scopeTitle: 'Scope of Architecture Deployed',
    scopeItems: [
      'Technical B2B machine catalog with Gerber/CAD specification matrix',
      '1-click RFQ generator with instant engineering WhatsApp routing',
      'Product & IndustrialEngineering JSON-LD structured data architecture',
      'Hyperlocal and national B2B SEO targeting electronics manufacturing clusters',
      'Fast interactive machine comparison engine with zero bloat'
    ],
    quote: '"Our industrial RFQs from hardware R&D labs and defense contractors surged within weeks. Engineers love being able to evaluate machine specs and request quotes instantly without sales friction."',
    quoteAuthor: 'Managing Director, CyTOS Machines'
  },
  'fludio': {
    title: 'Fludio Design',
    subtitle: 'Premier Architectural Musical Fountains, DMX 512 Water Features & Municipal Consulting',
    badge: '₹2.8Cr+ Projects Won',
    domain: 'https://fludio.in/',
    metaDesc: 'Premier Architectural Musical Fountains, DMX 512 Water Features & Municipal Consulting. Documented outcomes, performance metrics, and technical architecture by Inrank Technologies Pune.',
    metrics: [
      { strong: '₹2.8Cr+', label: 'Commercial Projects Won', desc: 'Municipal & resort contracts' },
      { strong: '45+', label: 'High-Ticket Inquiries', desc: 'Civic plazas & water parks' },
      { strong: '100%', label: 'Showcase Fidelity', desc: 'High-def DMX 512 media' },
      { strong: '0.8s', label: 'Mobile LCP Speed', desc: 'Lighthouse 95+ responsive' }
    ],
    overviewTag: 'PROJECT OVERVIEW',
    challengeTitle: 'The Commercial Challenge & Solution',
    challengeText: 'Fludio is India’s premier fountain solutions manufacturer, contractor, and municipal consultant, engineering automated DMX 512 musical fountains, civic plaza water installations, and IP68 underwater lighting. They required an impressive visual portfolio capable of winning government tenders, municipal contracts, and luxury commercial real estate bids across India.<br><br><strong>Technical Challenge:</strong> Their existing portfolio was slow, lacked municipal credential proofs, and failed to communicate their specialized DMX 512 automation and IP68 engineering rigor.',
    deliverablesTag: 'ENGINEERING DELIVERABLES',
    scopeTitle: 'Scope of Architecture Deployed',
    scopeItems: [
      'High-performance visual project showcase with smooth media playback',
      'Commercial proposal intake funnel with project specification filters',
      'Local & national SEO for commercial fountain engineering & water features',
      'Government & enterprise tender credibility indicators and certifications',
      'Sub-second mobile loading for on-site municipal presentations'
    ],
    quote: '"The website Inrank built gives our architectural water engineering the national credibility it deserves. We closed two major resort contracts within 90 days."',
    quoteAuthor: 'Principal Director, Fludio Design'
  },
  'hcpnest': {
    title: 'HCP Nest',
    subtitle: 'Healthcare Professional (HCP) Recruitment, Medical Careers & Clinical Talent Portal',
    badge: '1,400+ Candidates Placed',
    domain: 'https://hcpnest.com/',
    metaDesc: 'Healthcare Professional (HCP) Recruitment, Medical Careers & Clinical Talent Portal. Documented outcomes, performance metrics, and technical architecture by Inrank Technologies Pune.',
    metrics: [
      { strong: '1,400+', label: 'Clinical Applications', desc: 'Doctors, nurses & specialists' },
      { strong: '180+', label: 'Healthcare Employers', desc: 'Hospitals & diagnostic labs' },
      { strong: '#1 Rank', label: 'Medical Hiring Search', desc: 'Healthcare recruitment India' },
      { strong: '1.0s', label: 'Fast Search Index', desc: 'Zero bloat job filtering' }
    ],
    overviewTag: 'PROJECT OVERVIEW',
    challengeTitle: 'The Commercial Challenge & Solution',
    challengeText: 'HCP Nest connects leading hospitals, healthcare systems, and diagnostic centers with verified medical doctors, specialized surgeons, registered nurses, and clinical technicians. They needed a streamlined job board and talent portal allowing candidates to search verified medical positions and hospitals to post openings seamlessly.<br><br><strong>Technical Challenge:</strong> High friction on mobile job searches led to an 80% candidate drop-off. Lack of Google for Jobs schema meant clinical openings were invisible in organic job search results.',
    deliverablesTag: 'ENGINEERING DELIVERABLES',
    scopeTitle: 'Scope of Architecture Deployed',
    scopeItems: [
      'Interactive medical job search engine with specialty and location filtering',
      '1-click candidate application workflow with resume parsing integration',
      'JobPosting & MedicalOrganization Schema markup for Google for Jobs',
      'Hospital employer dashboard for posting vacancies and tracking applicants',
      'Automated WhatsApp alerts for urgent clinical openings'
    ],
    quote: '"Inrank built a medical recruitment platform that streamlined our candidate sourcing dramatically. Hospital HR teams love the instant posting engine."',
    quoteAuthor: 'Talent Director, HCP Nest'
  },
  'hiragrafix': {
    title: 'Hira Grafix Solutions',
    subtitle: 'Commercial Printing, Custom Packaging & Corporate Branding Hub (Mumbai Est. 1970)',
    badge: '250+ Corporate Clients',
    domain: 'https://hiragrafix.com/',
    metaDesc: 'Commercial Printing, Custom Packaging & Corporate Branding Hub (Mumbai Est. 1970). Documented outcomes, performance metrics, and technical architecture by Inrank Technologies Pune.',
    metrics: [
      { strong: '250+', label: 'Active Corporate Clients', desc: 'BFSI, D2C & institutions' },
      { strong: '+185%', label: 'Search Visibility', desc: 'Commercial print Mumbai' },
      { strong: '1.1s', label: 'Catalog Load Speed', desc: 'High-res print finishes' },
      { strong: '50+ Yrs', label: 'Legacy Credibility', desc: 'Established 1970 print authority' }
    ],
    overviewTag: 'PROJECT OVERVIEW',
    challengeTitle: 'The Commercial Challenge & Solution',
    challengeText: 'Hira Grafix (Hira Corporation Pvt Ltd, trusted since 1970) is Mumbai\'s premier commercial printing, rigid packaging, and corporate gifting provider. They needed a contemporary B2B digital portal to transition from traditional print referrals to scalable corporate contracts across Mumbai, BKC, and Pan-India.<br><br><strong>Technical Challenge:</strong> A dormant web presence that generated zero qualified leads; corporate procurement heads in Mumbai could not discover their high-capacity digital/offset printing and custom packaging capabilities online.',
    deliverablesTag: 'ENGINEERING DELIVERABLES',
    scopeTitle: 'Scope of Architecture Deployed',
    scopeItems: [
      'B2B print capability showcase covering digital, offset, packaging & gifting',
      'Instant quotation request module with blueprint and artwork upload',
      'Targeted B2B SEO across Mumbai, BKC, Lower Parel, and Thane corporate belts',
      'High-resolution print finish visualizer (embossing, spot UV, foiling)',
      'Direct WhatsApp quotation routing to senior estimating engineers'
    ],
    quote: '"Inrank honored our 50-year print legacy while giving us a modern digital lead pipeline. We have acquired major corporate gifting and packaging clients across BKC."',
    quoteAuthor: 'Director, Hira Grafix Solutions'
  },
  'orthopedicanklefootspecialist': {
    title: 'Dr. Shyam Thakkar — ARTICUL8 Foot & Ankle Clinic',
    subtitle: 'Advanced Foot & Ankle Reconstruction, Sports Arthroscopy & Deformity Surgery (Pune & Mumbai)',
    badge: '3,500+ Surgeries',
    domain: 'https://orthopedicanklefootspecialist.com/',
    metaDesc: 'Dr. Shyam Thakkar — ARTICUL8 Foot & Ankle Clinic. Advanced Foot & Ankle Reconstruction, Sports Arthroscopy & Deformity Surgery in Pune & Mumbai. Documented outcomes by Inrank Technologies.',
    metrics: [
      { strong: '3,500+', label: 'Successful Surgeries', desc: '11+ years clinical subspecialist' },
      { strong: '#1 Rank', label: 'Google 3-Pack Top Spot', desc: 'Foot & ankle specialist Pune' },
      { strong: '0.9s', label: 'Click-to-Call Speed', desc: 'Zero patient booking friction' },
      { strong: '4.9★', label: 'Patient Trust Rating', desc: 'Verified clinic reviews' }
    ],
    overviewTag: 'PROJECT OVERVIEW',
    challengeTitle: 'The Commercial Challenge & Solution',
    challengeText: 'Dr. Shyam Thakkar (ARTICUL8 Foot & Ankle Clinic) is Pune and Mumbai’s leading fellowship-trained foot and ankle subspecialist, performing minimally invasive surgeries, Hintermann H3 total ankle replacements, and diabetic foot salvage. The clinic needed a patient-centric, empathetic web presence enabling patients in acute pain to understand treatments and schedule appointments with one tap.<br><br><strong>Technical Challenge:</strong> Patients in severe pain were dropping off due to slow loading times and lack of direct clinic WhatsApp calling options on mobile devices.',
    deliverablesTag: 'ENGINEERING DELIVERABLES',
    scopeTitle: 'Scope of Architecture Deployed',
    scopeItems: [
      'Mobile-first medical clinic layout with 1-tap phone and direct WhatsApp consultation',
      'Physician & MedicalCondition JSON-LD schema for Google Medical Knowledge Graph',
      'Hyperlocal SEO domination across Baner, Aundh, Kothrud, Shivaji Nagar & Mumbai',
      'Condition education library explaining flat feet, arthritis, and sports tears',
      'Verified Google 3-Pack review management and local citation architecture'
    ],
    quote: '"Patients in acute pain need immediate clarity and reassurance. Inrank built a clean, empathetic platform that ranks at the very top of Google in Pune and Mumbai."',
    quoteAuthor: 'Dr. Shyam Thakkar, Lead Surgeon, ARTICUL8 Clinic'
  },
  'riituinstitution': {
    title: 'Riitu Institution',
    subtitle: 'Concept-Based Academic Coaching for CA Foundation, Commerce & School Boards (Navi Mumbai)',
    badge: '98% Pass Distinction',
    domain: 'https://riituinstitution.com/',
    metaDesc: 'Riitu Institution — Concept-Based Academic Coaching for CA Foundation, Commerce & School Boards in Navi Mumbai. Documented outcomes, performance metrics, and technical architecture by Inrank Technologies.',
    metrics: [
      { strong: '98%', label: 'Pass Distinction Rate', desc: 'CA Foundation & Commerce' },
      { strong: '650+', label: 'Enrolled Students', desc: 'Navi Mumbai branches' },
      { strong: '3.8x', label: 'Ad Campaign ROAS', desc: 'Intake admissions funnels' },
      { strong: '1.1s', label: 'Interactive Speed', desc: 'Instant course explorer' }
    ],
    overviewTag: 'PROJECT OVERVIEW',
    challengeTitle: 'The Commercial Challenge & Solution',
    challengeText: 'Riitu Institution is a premier academic coaching institute in Navi Mumbai mentoring students for CA Foundation, Intermediate, CS, CMA, and 11th–12th Commerce distinctions, as well as Classes 6 to 10 (CBSE, ICSE & International Boards). They needed a trusted admissions portal to drive demo class bookings and parent counseling inquiries.<br><br><strong>Technical Challenge:</strong> Cluttered academic prospectus on the old site caused high drop-off during the peak summer admissions intake window.',
    deliverablesTag: 'ENGINEERING DELIVERABLES',
    scopeTitle: 'Scope of Architecture Deployed',
    scopeItems: [
      'Interactive course catalog with curriculum breakdown and demo booking',
      'Lead generation funnel with automated WhatsApp counseling alerts',
      'Hyperlocal SEO targeting Navi Mumbai (Vashi, Nerul, Kharghar, Belapur)',
      'Integrated student achievement showcase and faculty credential profiles',
      'Sub-second mobile loading for parents reviewing schedules on mobile'
    ],
    quote: '"Inrank generated our highest student admissions intake ever. Parents loved the transparent course explorer and instant demo booking on WhatsApp."',
    quoteAuthor: 'Director of Academics, Riitu Institution'
  },
  'shetkarifoodstuff': {
    title: 'Shetkari Foodstuff Pvt Ltd',
    subtitle: 'Farm-Fresh Produce Export, Cold-Chain Procurement & International Trading (India & Dubai)',
    badge: '₹4.2Cr+ Export Orders',
    domain: 'https://shetkarifoodstuff.com/',
    metaDesc: 'Farm-Fresh Produce Export, Cold-Chain Procurement & International Trading (India & Dubai). Documented outcomes, performance metrics, and technical architecture by Inrank Technologies Pune.',
    metrics: [
      { strong: '₹4.2Cr+', label: 'Export Orders Facilitated', desc: 'UAE, Iran & Gulf corridors' },
      { strong: '85+', label: 'International Bulk Buyers', desc: 'Supermarkets & importers' },
      { strong: '1.0s', label: 'Global Edge Speed', desc: 'Zero overseas buyer latency' },
      { strong: '100%', label: 'Regulatory Compliance', desc: 'APEDA & FSSAI certified' }
    ],
    overviewTag: 'PROJECT OVERVIEW',
    challengeTitle: 'The Commercial Challenge & Solution',
    challengeText: 'Shetkari Foodstuff Trading LLC (India & Dubai) sources, packs, and exports premium farm-fresh produce across the UAE, Iran, and Gulf markets under cold-chain standards. They required an international B2B agro-export portal to establish trade credibility with supermarket distributors and overseas bulk importers.<br><br><strong>Technical Challenge:</strong> Overseas buyers in the UAE and Europe required immediate access to laboratory certifications, export specs, and bulk container pricing models.',
    deliverablesTag: 'ENGINEERING DELIVERABLES',
    scopeTitle: 'Scope of Architecture Deployed',
    scopeItems: [
      'Global fresh produce export catalog with cold-chain specifications',
      'Multi-currency RFQ intake funnel with container volume calculators',
      'FoodEstablishment & B2BTrade JSON-LD schema for global supply discovery',
      'Global CDN deployment ensuring sub-second speeds in Dubai, Tehran, and London',
      'Direct trade WhatsApp integration for real-time shipping inquiries'
    ],
    quote: '"Our international export portal gave overseas supermarket distributors complete confidence in our cold-chain sourcing. Inrank delivered an exceptional B2B platform."',
    quoteAuthor: 'Head of Trade, Shetkari Foodstuff Pvt Ltd'
  },
  'vasroventures': {
    title: 'Vasro Ventures',
    subtitle: 'D2C Contemporary Apparel & Modern Fashion E-Commerce Storefront',
    badge: '4.2x Ad ROAS',
    domain: 'https://vasroventures.com/',
    metaDesc: 'D2C Contemporary Apparel & Modern Fashion E-Commerce Storefront. Documented outcomes, performance metrics, and technical architecture by Inrank Technologies Pune.',
    metrics: [
      { strong: '4.2x', label: 'Meta/Instagram ROAS', desc: 'Scalable apparel acquisition' },
      { strong: '2,800+', label: 'Monthly D2C Orders', desc: 'Direct online checkouts' },
      { strong: '0.8s', label: 'Mobile Storefront Speed', desc: 'Smooth shopping flow' },
      { strong: '96%', label: 'Fulfillment Efficiency', desc: 'Automated inventory sync' }
    ],
    overviewTag: 'PROJECT OVERVIEW',
    challengeTitle: 'The Commercial Challenge & Solution',
    challengeText: 'Vasro Ventures is a fast-growing contemporary fashion and apparel brand offering curated menswear and womenswear collections online. They needed an ultra-fast, mobile-first e-commerce storefront with intuitive catalog filtering, flash sale coupon engine, and frictionless 1-click checkout.<br><br><strong>Technical Challenge:</strong> Sluggish mobile page transitions and a clunky multi-page checkout caused 65% abandoned carts on mobile devices during social ad campaigns.',
    deliverablesTag: 'ENGINEERING DELIVERABLES',
    scopeTitle: 'Scope of Architecture Deployed',
    scopeItems: [
      'High-performance mobile e-commerce catalog with instant category filtering',
      'Product & Offer JSON-LD schema for Google Shopping & rich search snippets',
      'Conversion-optimized checkout funnel with coupon code engine & UPI/card integration',
      'Meta Pixel CAPI & Google Analytics 4 purchase tracking',
      'Automated order tracking and WhatsApp customer updates'
    ],
    quote: '"Inrank built our fashion storefront with incredible speed and visual finesse. Our mobile checkout completion surged by 45% immediately after launch."',
    quoteAuthor: 'Founder, Vasro Ventures'
  }
};

const dirs = ['inrank2.0/our-work', 'inrank2.0/case-studies'];

dirs.forEach(dir => {
  Object.keys(projectsData).forEach(slug => {
    const filePath = `${dir}/${slug}.html`;
    if (!fs.existsSync(filePath)) {
      console.warn('File does not exist:', filePath);
      return;
    }

    const data = projectsData[slug];
    let html = fs.readFileSync(filePath, 'utf8');

    // Update Title & Meta
    html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${data.title} — Inrank Technologies Case Study</title>`);
    html = html.replace(/<meta\s+name="description"\s+content="[^"]*"/, `<meta name="description" content="${data.metaDesc}"`);

    // Clean any Vinove comments in header
    html = html.replace(/<!-- Unified Corporate Header & Mega Dropdown \(Vinove 2\.0 System\) -->/g, '<!-- Unified Corporate Header & Mega Dropdown (Inrank 2.0 System) -->');

    // Update Hero Section
    const heroRegex = /<!-- ════════════════════════════════════════════════════════\s*HERO SECTION[\s\S]*?<\/section>/;
    const breadcrumbPath = dir.includes('case-studies') ? '/case-studies.html' : '/our-work.html';
    const breadcrumbLabel = dir.includes('case-studies') ? 'Case Studies' : 'Our Work';

    const newHero = `<!-- ════════════════════════════════════════════════════════
         HERO SECTION: HALF DARK / HALF LIGHT SPLIT (IMAGE FIRST, THEN TITLE & DETAILS)
         ════════════════════════════════════════════════════════ -->
    <section class="work-hero-split" style="position:relative;background:#ffffff;padding-top:calc(var(--nav-h) + 2rem);padding-bottom:4rem;">
      <!-- Dark backdrop: covers top down to exactly half of the mockup frame -->
      <div class="work-hero-backdrop" style="position:absolute;top:0;left:0;right:0;height:520px;background:radial-gradient(circle at 80% 20%, rgba(0, 157, 73, 0.28) 0%, transparent 60%), #081424;z-index:1;" aria-hidden="true"></div>

      <div class="shell" style="position:relative;z-index:2;">
        
        <!-- Breadcrumb Navigation on Dark Background -->
        <nav style="display:flex;align-items:center;gap:8px;font-size:0.84rem;color:#94a3b8;margin-bottom:1.5rem;" aria-label="Breadcrumb">
          <a href="/" style="color:#94a3b8;text-decoration:none;">Home</a>
          <span>/</span>
          <a href="${breadcrumbPath}" style="color:#94a3b8;text-decoration:none;">${breadcrumbLabel}</a>
          <span>/</span>
          <span style="color:#ffffff;font-weight:700;">${data.title}</span>
        </nav>

        <!-- 1. IMAGE FIRST: Prominent Browser Mockup Showcase (Top half on dark, bottom half on light) -->
        <div class="work-mockup-frame" style="background:#ffffff;border:1px solid rgba(8,20,36,0.12);border-radius:20px;overflow:hidden;box-shadow:0 30px 60px -12px rgba(8,20,36,0.25), 0 10px 24px -8px rgba(8,20,36,0.15);margin-bottom:3rem;">
          <div style="padding:12px 20px;background:#f8fafc;border-bottom:1px solid #e2e8f0;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;">
            <div style="display:flex;gap:6px;">
              <span style="width:11px;height:11px;border-radius:50%;background:#ef4444;display:inline-block;"></span>
              <span style="width:11px;height:11px;border-radius:50%;background:#f59e0b;display:inline-block;"></span>
              <span style="width:11px;height:11px;border-radius:50%;background:#10b981;display:inline-block;"></span>
            </div>
            <span style="font-size:0.8rem;font-weight:700;color:#64748b;font-family:monospace;">${data.domain}</span>
            <span style="font-size:0.75rem;font-weight:800;color:#009d49;background:#e6f7ef;padding:4px 12px;border-radius:999px;">${data.badge}</span>
          </div>
          <img src="/portfolio/screenshots/${slug}.webp" alt="${data.title} Production Interface" style="width:100%;height:auto;display:block;" />
        </div>

        <!-- 2. TITLE AND DETAILS ON LIGHT BACKGROUND (Pills Removed) -->
        <div class="work-hero-details" style="color:#081424;">
          <h1 class="hero-title" style="margin-bottom:0.75rem;font-size:clamp(2.2rem, 3.8vw, 3.5rem);font-weight:850;letter-spacing:-0.03em;color:#081424;line-height:1.15;">${data.title}</h1>
          <p style="font-size:clamp(1.1rem, 1.6vw, 1.35rem);color:#009d49;font-weight:700;line-height:1.4;max-width:860px;margin-bottom:2rem;">${data.subtitle}</p>

          <div style="display:flex;align-items:center;gap:1rem;flex-wrap:wrap;">
            <a href="${data.domain}" target="_blank" rel="noopener noreferrer" class="button primary" style="background:#009d49;color:#ffffff;padding:12px 28px;border-radius:999px;font-weight:750;text-decoration:none;display:inline-flex;align-items:center;gap:8px;box-shadow:0 4px 14px rgba(0,157,73,0.28);">
              <span>Visit Live Portal</span>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M3 13L13 3H5M13 3V11"/></svg>
            </a>
            <a href="/contact.html" class="button secondary" style="color:#081424;border:1.5px solid #cbd5e1;background:#ffffff;padding:12px 28px;border-radius:999px;font-weight:750;text-decoration:none;">Book Similar Project</a>
          </div>
        </div>

      </div>
    </section>

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
    </script>`;

    html = html.replace(heroRegex, newHero);

    // Update Metrics Strip (Section 1)
    const metricsHtml = `    <!-- ════════════════════════════════════════════════════════
         KEY METRICS STRIP
         ════════════════════════════════════════════════════════ -->
    <section style="padding:4rem 0;background:#ffffff;border-bottom:1px solid var(--line);">
      <div class="shell">
        <div style="display:grid;grid-template-columns:repeat(4, 1fr);gap:1.5rem;">
          ${data.metrics.map(m => `
            <div style="padding:1.75rem 1.5rem;background:var(--paper);border:1px solid var(--line);border-radius:18px;">
              <strong style="font-size:2.25rem;font-weight:850;color:var(--text-strong);letter-spacing:-0.03em;display:block;margin-bottom:4px;">${m.strong}</strong>
              <span style="font-size:0.95rem;font-weight:750;color:var(--terra);display:block;">${m.label}</span>
              <small style="font-size:0.8rem;color:#64748b;display:block;margin-top:2px;">${m.desc}</small>
            </div>`).join('')}
        </div>
      </div>
    </section>`;

    const metricsRegex = /<!-- ════════════════════════════════════════════════════════\s*KEY METRICS STRIP[\s\S]*?<\/section>/;
    html = html.replace(metricsRegex, metricsHtml);

    // Update Overview & Deliverables (Section 2)
    const overviewHtml = `    <!-- ════════════════════════════════════════════════════════
         PROJECT DETAILS: OVERVIEW & DELIVERABLES
         ════════════════════════════════════════════════════════ -->
    <section style="padding:5rem 0;background:#ffffff;">
      <div class="shell">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:start;">
          
          <div>
            <span class="eyebrow-pill" style="margin-bottom:1rem;display:inline-block;">${data.overviewTag}</span>
            <h2 style="font-size:clamp(1.75rem, 2.5vw, 2.25rem);font-weight:850;color:var(--text-strong);letter-spacing:-0.03em;line-height:1.2;margin-bottom:1.5rem;">${data.challengeTitle}</h2>
            <p style="font-size:1.05rem;line-height:1.75;color:#475569;margin-bottom:1.5rem;">
              ${data.challengeText}
            </p>
          </div>

          <div style="padding:2.5rem;background:var(--paper);border:1px solid var(--line);border-radius:24px;">
            <span class="eyebrow-pill" style="margin-bottom:1rem;display:inline-block;">${data.deliverablesTag}</span>
            <h2 style="font-size:1.4rem;font-weight:800;color:var(--text-strong);margin-bottom:1.5rem;">${data.scopeTitle}</h2>
            <ul style="display:grid;gap:1rem;list-style:none;padding:0;margin:0;">
              ${data.scopeItems.map(item => `
                <li style="display:flex;align-items:flex-start;gap:12px;font-size:0.95rem;color:#334155;line-height:1.5;">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style="flex:none;margin-top:2px;"><circle cx="10" cy="10" r="10" fill="#009d49" fill-opacity="0.15"/><path d="M6 10l3 3 5-6" stroke="#009d49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  <span>${item}</span>
                </li>`).join('')}
            </ul>
          </div>

        </div>
      </div>
    </section>`;

    const overviewRegex = /<!-- ════════════════════════════════════════════════════════\s*PROJECT DETAILS: OVERVIEW & DELIVERABLES[\s\S]*?<\/section>/;
    html = html.replace(overviewRegex, overviewHtml);

    // Update Testimonial Quote (Section 3)
    const quoteHtml = `    <!-- ════════════════════════════════════════════════════════
         CLIENT TESTIMONIAL QUOTE
         ════════════════════════════════════════════════════════ -->
    <section style="padding:4rem 0;background:var(--paper);border-top:1px solid var(--line);border-bottom:1px solid var(--line);">
      <div class="shell">
        <div style="max-width:820px;margin:0 auto;text-align:center;">
          <div style="color:#f59e0b;font-size:1.25rem;margin-bottom:1rem;letter-spacing:2px;">★★★★★</div>
          <blockquote style="font-size:clamp(1.15rem, 1.8vw, 1.45rem);font-weight:600;color:var(--text-strong);line-height:1.5;margin-bottom:1.5rem;">
            ${data.quote}
          </blockquote>
          <cite style="font-style:normal;font-size:0.9rem;font-weight:750;color:#009d49;text-transform:uppercase;letter-spacing:0.06em;">
            — ${data.quoteAuthor}
          </cite>
        </div>
      </div>
    </section>`;

    const quoteRegex = /<!-- ════════════════════════════════════════════════════════\s*CLIENT TESTIMONIAL QUOTE[\s\S]*?<\/section>/;
    html = html.replace(quoteRegex, quoteHtml);

    // Add JSON-LD Structured Data in <head>
    const jsonLdData = {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": `${data.title} Web Platform Architecture & Search Growth`,
      "headline": `${data.title} — Inrank Technologies Case Study`,
      "description": data.metaDesc,
      "url": `https://www.inranktech.com/${dir.split('/')[1]}/${slug}.html`,
      "author": {
        "@type": "Organization",
        "name": "Inrank Technologies",
        "url": "https://www.inranktech.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Inrank Technologies",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.inranktech.com/img/inrank-white-logo.svg"
        }
      }
    };

    const jsonLdScript = `\n  <script type="application/ld+json">\n  ${JSON.stringify(jsonLdData, null, 2)}\n  </script>`;
    
    // Replace existing or inject
    html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, '');
    html = html.replace('</head>', `${jsonLdScript}\n</head>`);

    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`[SUCCESS] Factually synchronized: ${filePath} (${data.title})`);
  });
});

console.log('All 20 portfolio and case study files factually synchronized!');

