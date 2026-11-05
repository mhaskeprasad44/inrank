const fs = require('fs');
const path = require('path');

// Helper to construct service objects systematically
function createService(opts) {
  return {
    slug: opts.slug,
    name: opts.name,
    pillar: opts.pillar,
    kicker: opts.kicker,
    title: opts.title,
    metaTitle: opts.metaTitle || `${opts.name} in Pune | Inrank Technologies`,
    metaDesc: opts.metaDesc,
    heroLede: opts.heroLede,
    decisionOverline: opts.decisionOverline || 'From Strategy to Execution',
    decisionTitle: opts.decisionTitle || `Every outcome<br>starts with <em>why.</em>`,
    decisionSteps: opts.decisionSteps,
    frictionKicker: opts.frictionKicker || 'Where Traditional Agencies Fail',
    frictionTitle: opts.frictionTitle || `The service exists.<br>Does the commercial return?`,
    frictionCopy: opts.frictionCopy,
    outcomes: opts.outcomes,
    tourKicker: opts.tourKicker || 'Explore in Practice',
    tourTitle: opts.tourTitle || 'Start with the question your business needs answered.',
    workflows: opts.workflows,
    equationKicker: opts.equationKicker || 'The Honest Performance Equation',
    equationTitle: opts.equationTitle || 'One formula, with its assumptions visible.',
    equation: opts.equation,
    equationCopy: opts.equationCopy || 'We track fully loaded unit economics, excluding vanity vanity metrics to keep genuine acquisition costs visible.',
    threadKicker: opts.threadKicker || 'Evidence Into Action',
    threadTitle: opts.threadTitle || 'Execution should not become a stagnant PDF report.',
    threadCopy: opts.threadCopy || 'An Inrank sprint ends with an accountable verdict. The strategy becomes code, the code drives inquiries, and the data guides the next sprint.',
    threadSteps: opts.threadSteps,
    principles: opts.principles,
    faqs: opts.faqs
  };
}

const final11 = [
  createService({
    slug: 'brand-naming-agency',
    name: 'Brand Naming Agency',
    pillar: 4,
    kicker: 'INRANK NOMENCLATURE · STRATEGIC BRAND NAMING PUNE',
    title: 'Names that build immediate authority.<br><em>Distinctive, memorable, and legally trademarkable.</em>',
    metaDesc: 'Brand naming agency in Pune. Inrank develops distinctive corporate names, domain acquisitions, linguistic screening, and trademark clearance for ambitious businesses.',
    heroLede: 'A weak or derivative name forces your company to spend millions compensating for lack of memorability. Inrank develops strategic corporate and product names rooted in phonetics, category differentiation, and rigorous trademark availability.',
    decisionSteps: [
      { num: '01', title: 'Phonetic & linguistic screening', desc: 'Ensuring names are easy to pronounce, spell, and recall across Indian and global markets.' },
      { num: '02', title: 'Trademark & domain clearance', desc: 'Pre-screening against Class registries and securing clean .com/.in domains.' },
      { num: '03', title: 'Category positioning architecture', desc: 'Choosing evocative, invented, or associative naming models that stand out from competitors.' }
    ],
    frictionCopy: 'Most founders settle for bland abbreviations or uninspired descriptive names that get rejected by trademark authorities or lost in search results.',
    outcomes: [
      { forWhom: 'For the Founders', title: 'A permanent corporate asset.', desc: 'Own a distinctive, legally defensible brand name that investors and customers remember instantly.' },
      { forWhom: 'For Marketing', title: 'High word-of-mouth recall.', desc: 'Drive lower customer acquisition costs through natural memorability and clean digital handles.' },
      { forWhom: 'For Legal & IP', title: 'Risk-free trademark registration.', desc: 'Clear comprehensive Indian and international trademark class searches before launch.' }
    ],
    workflows: [
      {
        q: "What makes a corporate brand name legally trademarkable in India?",
        kicker: "Distinctiveness & Class Clearance",
        desc: "Names that describe a product's function (e.g. 'Fast Delivery') are legally non-distinct and cannot be trademarked. We develop coined, evocative, and associative names that sail through Class 35, 42, and relevant trademark classes.",
        decision: "Develop coined and associative names with uncontested trademark registries.",
        steps: ["Trademark Class Mapping", "Phonetic Collision Check", "Pre-Registration Clearance"]
      },
      {
        q: "How do you handle domain name availability (.com / .in)?",
        kicker: "Domain Strategy & Acquisition",
        desc: "We verify clean .com, .in, and .co domain availability simultaneously with naming generation, avoiding situations where a selected name has an unobtainable digital address.",
        decision: "Pair every presented name candidate with an available, clean primary domain.",
        steps: ["Global DNS Check", "Social Handle Verification", "Domain Securing Strategy"]
      },
      {
        q: "How many name options do we evaluate during a naming sprint?",
        kicker: "Curated Strategic Shortlist",
        desc: "We generate 200+ raw phonetic permutations, filtering down to 10-15 vetted candidates presented across 3 strategic naming architectures (Coined, Associative, Evocative).",
        decision: "Deliver a curated strategic dossier with etymology, rationale, and trademark status.",
        steps: ["Divergent Brainstorming", "Linguistic & Legal Filter", "Executive Naming Dossier"]
      },
      {
        q: "Do you also create the visual identity and logo for the new name?",
        kicker: "Seamless Identity Integration",
        desc: "Yes. Our brand naming sprints seamlessly integrate with Inrank's Corporate Logo Design and Brand Guidelines services for complete end-to-end launch readiness.",
        decision: "Seamlessly transition chosen name into vector logo mark and brand guidelines.",
        steps: ["Name Selection Sign-off", "Vector Logo Exploration", "Brand Manual Finalization"]
      }
    ],
    equation: {
      b1Title: 'High-Recall Phonetics',
      b1Val: 'Uncontested Category Memorability',
      sign1: '×',
      b2Title: 'Trademark Clearance',
      b2Val: '100% Class Protection & .com',
      sign2: '=',
      b3Title: 'Enterprise Value',
      b3Val: 'Defensible Multimillion-Rupee Brand Asset'
    },
    threadSteps: [
      { num: '01', title: 'Briefing', desc: 'Category positioning, target audience, brand personality & competitor naming audit' },
      { num: '02', title: 'Linguistic Mapping', desc: 'Explore semantic roots, Latin/Sanskrit etymologies & phonetic sound symbolism' },
      { num: '03', title: 'Generation', desc: 'Generate 200+ raw candidate names across invented, associative & compound models' },
      { num: '04', title: 'Screening', desc: 'Screen against Indian Trademark Registry, global databases & domain registries' },
      { num: '05', title: 'Presentation', desc: 'Present executive dossier with top 10 vetted names and strategic rationales' },
      { num: '06', title: 'Shortlisting', desc: 'Collaborative executive workshop to select top 3 finalists' },
      { num: '07', title: 'Clearance', desc: 'Final legal verification, domain acquisition & IP handover documentation' }
    ],
    principles: [
      { title: 'Phonetic memorability first.', desc: 'If people struggle to spell it or hear it over a phone call, it is discarded.' },
      { title: 'Zero generic descriptiveness.', desc: 'We never suggest generic descriptive labels that cannot be protected legally.' },
      { title: 'Global linguistic safety.', desc: 'Every candidate is vetted across multiple languages to avoid unintended negative meanings.' },
      { title: 'Led by Prasad Mhaske.', desc: 'Strategic brand naming overseen directly by senior leadership.' }
    ],
    faqs: [
      { q: 'How long does a brand naming project take?', a: 'A comprehensive brand naming sprint is completed within 7 to 10 business days.' },
      { q: 'Do you help register the trademark?', a: 'We handle the preliminary trademark clearance searches and coordinate directly with trademark attorneys for formal filing.' },
      { q: 'Can you help rename an existing company without alienating customers?', a: 'Yes. We specialize in corporate re-naming and transition strategies that preserve customer goodwill and SEO equity.' },
      { q: 'What naming categories do you explore?', a: 'We explore invented/coined names, associative names, evocative metaphors, and compound words.' },
      { q: 'What is the investment for Inrank\'s brand naming service?', a: 'Strategic brand naming sprints start at ₹14,999, including domain clearance and trademark pre-screening.' }
    ]
  }),

  createService({
    slug: 'brochure-design-services',
    name: 'Brochure Design Services',
    pillar: 4,
    kicker: 'INRANK COLLATERAL · CORPORATE SALES PITCHBOOKS PUNE',
    title: 'Brochures that close high-ticket contracts.<br><em>Executive sales literature for industrial & corporate leaders.</em>',
    metaDesc: 'Corporate brochure design company in Pune. Inrank designs high-impact corporate profiles, product catalogs, and digital sales pitchbooks for B2B enterprises.',
    heroLede: 'A flimsy, cluttered brochure undermines your sales team in face-to-face meetings. Inrank designs authoritative corporate profiles, industrial equipment catalogs, and digital sales pitchbooks that clearly communicate engineering capability and close high-value contracts.',
    decisionSteps: [
      { num: '01', title: 'Information hierarchy structuring', desc: 'Organizing complex technical specs and company achievements into compelling layouts.' },
      { num: '02', title: 'Executive editorial typography', desc: 'Swiss typography, generous margins, and crisp infographics that command respect.' },
      { num: '03', title: 'Print & interactive digital formats', desc: 'Delivering press-ready CMYK files alongside lightweight interactive PDF sales decks.' }
    ],
    frictionCopy: 'Most print shops just copy-paste your text into garish templates with clip-art and low-res photos, making your multi-crore business look like an unvetted local vendor.',
    outcomes: [
      { forWhom: 'For the Sales Director', title: 'A powerful sales enablement tool.', desc: 'Arm your business development team with pitchbooks that leave a lasting impression on procurement heads.' },
      { forWhom: 'For B2B Manufacturers', title: 'Crystal-clear technical specifications.', desc: 'Present machine dimensions, capacities, and tolerance charts in clean, legible vector tables.' },
      { forWhom: 'For Corporate Governance', title: 'Impeccable institutional presentation.', desc: 'Communicate safety accreditations, client case studies, and corporate vision with executive polish.' }
    ],
    workflows: [
      {
        q: "What is the difference between a product catalog and a corporate profile brochure?",
        kicker: "Strategic Content Architecture",
        desc: "A corporate profile sells your company's stability, leadership, machinery, and credibility. A product catalog provides detailed technical specifications and part numbers for procurement teams. We design both formats with disciplined visual systems.",
        decision: "Structure clear page flows separating company credibility from technical data.",
        steps: ["Information Scoping", "Wireframe Flow Design", "Editorial Content Curation"]
      },
      {
        q: "Do you deliver digital interactive PDFs as well as print-ready files?",
        kicker: "Hybrid Print & Digital Distribution",
        desc: "Yes. You receive press-ready CMYK PDFs with crop marks and bleed for your commercial printer, plus lightweight interactive digital PDFs with clickable email, website, and WhatsApp links for WhatsApp and email dispatch.",
        decision: "Provide both high-res print master files and compressed interactive digital versions.",
        steps: ["Press-Ready CMYK Export", "Interactive Digital PDF Build", "WhatsApp File Compression (< 5MB)"]
      },
      {
        q: "Can you help write or refine the corporate copywriting in the brochure?",
        kicker: "Executive B2B Copywriting & Proofreading",
        desc: "Yes. Our senior writers refine technical jargon into persuasive commercial propositions, ensuring headers, subheads, and callout statistics speak directly to decision-makers.",
        decision: "Provide professional copywriting refinement and proofreading.",
        steps: ["Draft Review", "Copy Polish & Punchy Headlines", "Executive Sign-Off"]
      },
      {
        q: "Do you recommend paper stocks and luxury print finishes?",
        kicker: "Print Production Specifications",
        desc: "We provide exact paper stock recommendations (e.g. 350 GSM velvet matte covers with 170 GSM inner art paper) and specify spot UV, foil stamping, or embossing for commercial printers.",
        decision: "Supply print specification sheets for your printer.",
        steps: ["Paper GSM Guidance", "Special Finishes Mapping", "Printer Vendor Handover"]
      }
    ],
    equation: {
      b1Title: 'High-Polish Sales Deck',
      b1Val: 'Executive Layout & Clear Specs',
      sign1: '×',
      b2Title: 'Buyer Trust',
      b2Val: 'Institutional Credibility',
      sign2: '=',
      b3Title: 'Sales Velocity',
      b3Val: 'Shorter High-Ticket Enterprise Sales Cycles'
    },
    threadSteps: [
      { num: '01', title: 'Briefing', desc: 'Define target audience, page count, core products & corporate credentials' },
      { num: '02', title: 'Wireframe', desc: 'Create low-fidelity page-by-page flat plan and content outline' },
      { num: '03', title: 'Content Polish', desc: 'Refine product descriptions, headings, case study blurbs & statistics' },
      { num: '04', title: 'Design System', desc: 'Apply brand typography, color palettes & vector infographic elements' },
      { num: '05', title: 'Review', desc: 'Present full digital draft for executive feedback and revisions' },
      { num: '06', title: 'Pre-Press QA', desc: 'Verify CMYK color profiles, bleed settings, margin alignment & font embedding' },
      { num: '07', title: 'Delivery', desc: 'Deliver print-ready master PDFs + lightweight interactive digital sales decks' }
    ],
    principles: [
      { title: 'Clarity over visual clutter.', desc: 'Generous margins and clear typographic hierarchy make technical specifications effortless to read.' },
      { title: 'High-resolution vector assets.', desc: 'Every diagram, icon, and chart is vector-rendered for razor-sharp reproduction.' },
      { title: 'Dual-purpose utility.', desc: 'Engineered for both luxury physical printing and instant digital sharing on WhatsApp.' },
      { title: 'Zero template shortcuts.', desc: 'Bespoke layouts tailored specifically to your company\'s commercial story.' }
    ],
    faqs: [
      { q: 'How long does brochure design take?', a: 'Standard corporate brochures (8 to 16 pages) are designed and finalized in 5 to 8 business days.' },
      { q: 'Can you help if we don\'t have high-resolution photos?', a: 'We can curate and color-grade licensed industrial photography or arrange professional on-site photoshoot direction in Pune.' },
      { q: 'What page counts do you design?', a: 'We design everything from 4-page executive bi-folds to 32-page comprehensive industrial equipment catalogs.' },
      { q: 'Will the digital PDF open fast on mobile phones?', a: 'Yes. We compress the interactive digital PDF so it opens in under 1 second on mobile devices without pixelating text or logos.' },
      { q: 'How much does corporate brochure design cost?', a: 'Brochure design sprints start at ₹9,999 for standard profiles and scale based on total page count and technical complexity.' }
    ]
  }),

  createService({
    slug: 'content-marketing-services',
    name: 'Content Marketing Services',
    pillar: 4,
    kicker: 'INRANK EDITORIAL · THOUGHT LEADERSHIP & ORGANIC LEADS',
    title: 'Content that establishes authority.<br><em>Articles and case studies that turn readers into buyers.</em>',
    metaDesc: 'Content marketing agency in Pune. Inrank writes authoritative B2B whitepapers, technical articles, and SEO content that builds industry trust and drives organic sales.',
    heroLede: 'Generic AI-generated blog posts do not build enterprise trust. Inrank produces rigorous, research-backed industry articles, client case studies, and commercial whitepapers that answer complex buyer questions and establish your company as the definitive category authority.',
    decisionSteps: [
      { num: '01', title: 'Search-intent topic modeling', desc: 'Targeting commercial problems your highest-paying buyers research.' },
      { num: '02', title: 'Expert-led technical depth', desc: 'Articles written with deep industry knowledge, concrete data, and zero fluff.' },
      { num: '03', title: 'Lead capture & internal linking', desc: 'Guiding readers through logical decision paths straight into consultation funnels.' }
    ],
    frictionCopy: 'Most digital marketing agencies churn out superficial 500-word blog posts that nobody reads, Google ignores as thin content, and AI models never cite.',
    outcomes: [
      { forWhom: 'For the CEO & Founders', title: 'Industry thought leadership.', desc: 'Position executive leadership as the respected, quoted voice in your market vertical.' },
      { forWhom: 'For Organic SEO', title: 'Compounding topical authority.', desc: 'Build semantic topic clusters that lift rankings across all commercial keyword targets.' },
      { forWhom: 'For Sales Teams', title: 'Compelling sales collateral.', desc: 'Use deep-dive case studies and comparison guides to overcome prospect objections.' }
    ],
    workflows: [
      {
        q: "Why do superficial blog posts fail to generate commercial leads?",
        kicker: "Search Intent Alignment & Technical Depth",
        desc: "High-ticket decision-makers search for specific engineering solutions, regulatory requirements, and ROI comparisons. We write 1,500+ word authoritative articles that thoroughly answer these technical questions.",
        decision: "Produce in-depth, original research articles that provide genuine commercial value.",
        steps: ["Search Intent Mapping", "Technical SME Interview", "In-Depth Article Drafting"]
      },
      {
        q: "How does content marketing feed Generative AI (GEO) and search citations?",
        kicker: "Fact-Dense Semantic Architecture",
        desc: "Large Language Models look for authoritative, clearly defined factual statements. By publishing structured guides with definitions, tables, and statistics, we train AI search engines to quote your brand.",
        decision: "Structure content with clear definitions, comparative data, and summary tables.",
        steps: ["Schema Markup Embedding", "Entity Fact Verification", "AI Retrieval Validation"]
      },
      {
        q: "How do you measure the ROI of content marketing?",
        kicker: "Attribution Modeling & Assisted Conversions",
        desc: "We track assisted conversions in Google Analytics 4, identifying how many closed clients read your articles and case studies before submitting an inquiry.",
        decision: "Set up multi-touch attribution to track content-assisted commercial revenue.",
        steps: ["GA4 Event Configuration", "Assisted Conversion Tracking", "Content Revenue Reporting"]
      },
      {
        q: "Can Inrank write for complex technical and industrial B2B niches?",
        kicker: "Specialized Engineering & Industry Writers",
        desc: "Yes. We have documented experience across manufacturing, healthcare, clinical diagnostics, real estate, and financial advisory in Pune.",
        decision: "Assign specialized writers who understand your industry's technical language.",
        steps: ["Industry SME Briefing", "Terminology Review", "Executive Sign-Off"]
      }
    ],
    equation: {
      b1Title: 'Authoritative Topic Clusters',
      b1Val: '1,500+ Word Deep-Dive Content',
      sign1: '×',
      b2Title: 'Commercial Intent',
      b2Val: 'Direct Buyer Questions',
      sign2: '=',
      b3Title: 'Inbound Growth',
      b3Val: 'Compounding Unpaid Lead Pipeline'
    },
    threadSteps: [
      { num: '01', title: 'Keyword Strategy', desc: 'Identify high-intent commercial search queries and buyer decision pain points' },
      { num: '02', title: 'Content Calendar', desc: 'Map out 90-day publishing schedule across pillar topics and sub-clusters' },
      { num: '03', title: 'Research & Draft', desc: 'Write deeply researched, fact-checked articles with concrete data' },
      { num: '04', title: 'Technical SEO', desc: 'Optimize headings, internal link graphs, metadata & schema.org markup' },
      { num: '05', title: 'Design Assets', desc: 'Create custom vector diagrams, infographic tables & featured visuals' },
      { num: '06', title: 'Publish', desc: 'Deploy on clean CMS with sub-second page rendering and sticky CTAs' },
      { num: '07', title: 'Distribute', desc: 'Repurpose insights for LinkedIn leadership posts and client email newsletters' }
    ],
    principles: [
      { title: 'Zero generic AI fluff.', desc: 'Every piece is crafted with original perspective, verified facts, and authentic depth.' },
      { title: 'Direct commercial relevance.', desc: 'Content must connect logically to an inquiry or service booking.' },
      { title: 'Sub-second reading experience.', desc: 'Articles load instantly on mobile without disruptive pop-ups.' },
      { title: 'Permanent organic assets.', desc: 'Articles continue to attract qualified organic search traffic for years.' }
    ],
    faqs: [
      { q: 'How many articles should we publish per month?', a: 'For most B2B and professional services, 2 to 4 deeply researched, authoritative articles per month deliver vastly superior results compared to daily low-quality posts.' },
      { q: 'Do you also write client case studies?', a: 'Yes. We write documented client growth case studies featuring challenges, solutions, technical architecture, and verified metrics.' },
      { q: 'Who owns the copyright to the written content?', a: 'You retain 100% ownership and copyright of all articles, guides, and case studies produced during our sprints.' },
      { q: 'Can you update and improve our existing blog posts?', a: 'Yes. We frequently conduct content pruning and optimization sprints—re-writing outdated posts to reclaim lost Google rankings.' },
      { q: 'How much does content marketing cost with Inrank?', a: 'Content marketing sprints start at ₹11,999/month, covering topic research, writing, SEO optimization, and publishing.' }
    ]
  }),

  createService({
    slug: 'landing-page-design-services',
    name: 'Landing Page Design Services',
    pillar: 2,
    kicker: 'INRANK CONVERSION · HIGH-VELOCITY LANDING PAGES PUNE',
    title: 'Single-page funnels that convert.<br><em>Built for high-ROAS Google and Meta campaigns.</em>',
    metaDesc: 'High-converting landing page design company in Pune. Inrank builds sub-second landing pages with 100% ad message match and frictionless lead capture.',
    heroLede: 'Sending expensive paid ad traffic to a generic website homepage wastes 70% of your marketing budget. Inrank designs laser-focused, sub-second landing pages built for a single commercial outcome: getting the prospect to call, message, or request a quote.',
    decisionSteps: [
      { num: '01', title: '100% ad-to-page message match', desc: 'Instantly reassuring visitors they have found the exact service promised in the ad.' },
      { num: '02', title: 'Sub-second mobile speed (< 0.9s)', desc: 'Eliminating mobile bounce before the visitor can change their mind.' },
      { num: '03', title: 'Frictionless 1-step inquiry actions', desc: 'Sticky WhatsApp triggers, 1-tap phone calls, and clean 3-field lead capture forms.' }
    ],
    frictionCopy: 'Most landing page builders (Unbounce, Leadpages) load dozens of third-party tracking scripts that slow load times to 4+ seconds, causing mobile visitors to bounce immediately.',
    outcomes: [
      { forWhom: 'For the Growth Marketer', title: 'Higher Quality Scores and lower CPA.', desc: 'Achieve 9/10 Google Ads Quality Scores and slash your cost-per-lead by 30-50%.' },
      { forWhom: 'For the Sales Team', title: 'Clean, pre-qualified inbound leads.', desc: 'Capture essential lead qualification data upfront without overwhelming the user.' },
      { forWhom: 'For Campaign ROI', title: 'Immediate conversion rate lift.', desc: 'Convert 8% to 15% of ad clicks into genuine inquiries compared to 1-2% on regular sites.' }
    ],
    workflows: [
      {
        q: "What makes a landing page convert at 10%+ while standard websites convert at 2%?",
        kicker: "Singular Focus & Absence of Navigation Leaks",
        desc: "Standard websites feature top menus, social icons, and multiple links that distract visitors. A high-converting landing page removes all external exit paths, guiding the user towards a single clear action.",
        decision: "Strip all global navigation headers and focus 100% of visual weight on the inquiry trigger.",
        steps: ["Remove Header Links", "Single Value Proposition", "Prominent Sticky Action Button"]
      },
      {
        q: "How fast do your landing pages load on mobile devices?",
        kicker: "Sub-Second Static Architecture",
        desc: "We hand-code landing pages using pure semantic HTML5, lightweight modern CSS, and pre-compressed SVG/WebP assets, consistently achieving 95+ Lighthouse mobile performance scores.",
        decision: "Hard-code landing pages without heavy third-party framework overhead.",
        steps: ["Inline Critical CSS", "Compress Media Assets", "Verify < 0.9s Render on 4G"]
      },
      {
        q: "Can you set up multi-step dynamic quote calculators?",
        kicker: "Interactive Micro-Funnels",
        desc: "Yes. For complex products or high-ticket services, we build interactive 2-step calculators that engage visitors before asking for their contact information, lifting completion rates by 25%.",
        decision: "Deploy interactive question micro-funnels for complex commercial offerings.",
        steps: ["Funnel Step Mapping", "Instant Calculation Logic", "Lead Delivery Webhook"]
      },
      {
        q: "How do you track conversions from landing pages?",
        kicker: "Server-Side Tracking & Direct CRM Delivery",
        desc: "We track button clicks, form submissions, and direct phone calls with Google Tag Manager, delivering lead notifications straight to your email, WhatsApp, and CRM in real time.",
        decision: "Configure multi-channel lead dispatch with zero data drop.",
        steps: ["GTM Event Triggers", "WhatsApp Webhook Sync", "CRM Lead Routing"]
      }
    ],
    equation: {
      b1Title: 'Paid Ad Clicks',
      b1Val: '1,000 Targeted Visitors',
      sign1: '×',
      b2Title: 'Landing Page Conversion',
      b2Val: '12% Conversion Rate',
      sign2: '=',
      b3Title: 'Inbound Inquiries',
      b3Val: '120 Qualified Leads per Campaign'
    },
    threadSteps: [
      { num: '01', title: 'Audit', desc: 'Inspect target ad campaigns, keyword intent & competitor landing pages' },
      { num: '02', title: 'Offer Architecture', desc: 'Craft compelling headline hook, value proposition & primary offer' },
      { num: '03', title: 'Figma UI', desc: 'Design responsive mobile and desktop layouts following Inrank 2.0 standards' },
      { num: '04', title: 'Engineering', desc: 'Clean, lightweight HTML5/CSS development with sub-second performance' },
      { num: '05', title: 'Tracking', desc: 'Implement GTM tags, Meta CAPI, Google Ads conversion tracking & UTM capture' },
      { num: '06', title: 'Testing', desc: 'Verify cross-browser rendering, form validation & WhatsApp notification delivery' },
      { num: '07', title: 'Launch', desc: 'Connect domain, launch ad traffic & begin A/B split testing' }
    ],
    principles: [
      { title: 'One page, one goal.', desc: 'Every element on the page exists solely to guide the visitor to submit an inquiry.' },
      { title: 'Sub-second speed.', desc: 'Mobile users will not wait; pages must load completely in under 1 second.' },
      { title: 'Relentless message match.', desc: 'The headline must repeat the exact promise made in the advertising creative.' },
      { title: 'Total code ownership.', desc: 'Zero recurring page-builder subscription fees.' }
    ],
    faqs: [
      { q: 'How fast can a landing page be designed and deployed?', a: 'We typically deliver and launch custom high-converting landing pages in 3 to 5 business days.' },
      { q: 'Can the landing page be hosted on our existing domain?', a: 'Yes. We can host it on a sub-domain (e.g. go.yourcompany.com) or a dedicated sub-folder on your existing server.' },
      { q: 'Do you write the copywriting for the landing page?', a: 'Yes. We write conversion-optimized headlines, bullet points, social proof sections, and callout guarantees.' },
      { q: 'Can we run A/B split tests on the landing page?', a: 'Yes. We can deploy variant testing (headline tests, offer tests) to continuously optimize conversion efficiency.' },
      { q: 'How much does landing page design cost?', a: 'Custom high-performance landing page sprints start at ₹9,999, including mobile optimization and conversion tracking.' }
    ]
  }),

  createService({
    slug: 'website-maintenance-services',
    name: 'Website Maintenance Services',
    pillar: 2,
    kicker: 'INRANK GUARDIAN · 24/7 SPEED & SECURITY PUNE',
    title: 'Zero downtime, zero hacks, zero stress.<br><em>Proactive engineering maintenance for corporate web assets.</em>',
    metaDesc: 'Website maintenance services in Pune. Inrank provides 24/7 security monitoring, daily cloud backups, Core Web Vitals speed tuning, and ongoing developer updates.',
    heroLede: 'A neglected website develops plugin vulnerabilities, slows down as databases bloat, and eventually crashes or gets hacked. Inrank acts as your dedicated web engineering team—proactively monitoring uptime, patching security vulnerabilities, and tuning speed 365 days a year.',
    decisionSteps: [
      { num: '01', title: 'Daily automated cloud backups', desc: 'Secure off-site backups with instant 1-click disaster recovery.' },
      { num: '02', title: 'Continuous security & malware defense', desc: 'Real-time firewall monitoring, vulnerability patching, and brute-force protection.' },
      { num: '03', title: 'Core Web Vitals speed maintenance', desc: 'Monthly database cleanup, cache tuning, and Google performance compliance.' }
    ],
    frictionCopy: 'Most businesses only think about their website when it suddenly crashes, shows a blank screen, or gets infected with malware during a critical sales week.',
    outcomes: [
      { forWhom: 'For Executive Leadership', title: 'Peace of mind and business continuity.', desc: 'Ensure your primary corporate digital touchpoint is always secure, fast, and operational.' },
      { forWhom: 'For the Marketing Team', title: 'On-demand developer updates.', desc: 'Add new team members, publish case studies, and update pricing without touching code.' },
      { forWhom: 'For Search Rankings', title: 'Protected Google positions.', desc: 'Prevent slow load times and 500 errors that cause sudden Google ranking drops.' }
    ],
    workflows: [
      {
        q: "What happens if our website crashes or gets hacked?",
        kicker: "Rapid Disaster Recovery SLA",
        desc: "We maintain encrypted off-site cloud backups taken every 24 hours. In the event of server failure or malicious attack, we restore your entire platform within 30 minutes.",
        decision: "Maintain automated daily snapshots with guaranteed rapid recovery SLAs.",
        steps: ["Automated Daily Snapshots", "Isolated Cloud Storage", "30-Minute Restore SLA"]
      },
      {
        q: "How do you test updates without risking downtime on our live site?",
        kicker: "Staging-First QA Protocol",
        desc: "We never apply core or plugin updates directly to production. We replicate your site on an isolated staging server, apply updates, verify visual and functional integrity, and then deploy.",
        decision: "Strict staging mirror protocol for all technical updates.",
        steps: ["Staging Mirror Sync", "Automated Update Testing", "Verified Production Deployment"]
      },
      {
        q: "Are developer hours included for adding new content or making changes?",
        kicker: "Dedicated Monthly Engineering Support",
        desc: "Yes. Our maintenance packages include dedicated developer hours every month for updating content, adding new pages, adjusting layouts, and installing tracking pixels.",
        decision: "Provide direct access to senior developers with 4-hour turnaround on requests.",
        steps: ["Ticket Submission", "Same-Day Execution", "Verification & Sign-Off"]
      },
      {
        q: "How do you maintain fast page speed over time?",
        kicker: "Database Optimization & Cache Tuning",
        desc: "As sites grow, database tables bloat with post revisions and transient options. We perform monthly database sanitization and tune Redis/server caching to maintain sub-second speed.",
        decision: "Automated monthly database pruning and speed audits.",
        steps: ["Database Overhead Cleaning", "Cache Invalidation Tuning", "Lighthouse Compliance Check"]
      }
    ],
    equation: {
      b1Title: 'Proactive Maintenance',
      b1Val: '24/7 Monitoring & Daily Backups',
      sign1: '×',
      b2Title: 'Fast Developer Support',
      b2Val: 'Sub-4-Hour Ticket Turnaround',
      sign2: '=',
      b3Title: 'Digital Security',
      b3Val: '99.9% Uptime & Zero Business Disruption'
    },
    threadSteps: [
      { num: '01', title: 'Baseline Audit', desc: 'Scan domain for existing malware, database bloat & outdated scripts' },
      { num: '02', title: 'Backup Setup', desc: 'Configure encrypted daily off-site cloud backups (AWS S3)' },
      { num: '03', title: 'Firewall', desc: 'Deploy server-level web application firewall (WAF) & login protection' },
      { num: '04', title: 'Uptime Monitor', desc: 'Set up 60-second ping monitoring with instant SMS/WhatsApp alerts' },
      { num: '05', title: 'Speed Tuning', desc: 'Clean database overhead, optimize image assets & tune caching rules' },
      { num: '06', title: 'Monthly QA', desc: 'Test checkout funnels, forms, links, and SSL certificates' },
      { num: '07', title: 'Reporting', desc: 'Deliver monthly executive maintenance report detailing updates & performance' }
    ],
    principles: [
      { title: 'Proactive prevention over reactive fixes.', desc: 'We catch and patch issues before they cause downtime.' },
      { title: 'Isolated staging testing.', desc: 'Zero code is deployed to live production without staging validation.' },
      { title: 'Fast response commitment.', desc: 'Emergency response within 30 minutes for critical issues.' },
      { title: 'Transparent activity logs.', desc: 'Every update and backup is logged and documented.' }
    ],
    faqs: [
      { q: 'What types of websites do you maintain?', a: 'We maintain custom Next.js/React applications, WordPress websites, Shopify stores, and custom PHP web portals.' },
      { q: 'How often are backups taken?', a: 'We take automated full backups every 24 hours and store them off-site on redundant AWS cloud storage.' },
      { q: 'Can we ask you to add new pages or change banners?', a: 'Yes. Content updates, banner changes, and new page setups are included in our monthly maintenance hours.' },
      { q: 'Do you require long-term contracts for maintenance?', a: 'No. Maintenance is billed month-to-month, and you can cancel anytime with zero cancellation penalties.' },
      { q: 'What is the monthly fee for website maintenance?', a: 'Our maintenance packages start at ₹4,999/month for standard corporate sites and ₹9,999/month for high-volume e-commerce stores.' }
    ]
  }),

  createService({
    slug: 'mobile-app-development',
    name: 'Mobile App Development',
    pillar: 2,
    kicker: 'INRANK MOBILE LAB · NATIVE & FLUTTER APPS PUNE',
    title: 'High-performance iOS & Android applications.<br><em>Built with Flutter for fluid, sub-second native speed.</em>',
    metaDesc: 'Mobile app development company in Pune. Inrank builds native iOS and Android apps using Flutter, with offline sync, clean APIs, and secure payment integrations.',
    heroLede: 'Clunky cross-platform apps feel sluggish and alienate mobile users. Inrank engineers high-performance mobile applications using Flutter and native Swift/Kotlin, delivering fluid 60fps animations, robust offline sync, and enterprise security.',
    decisionSteps: [
      { num: '01', title: 'Single-codebase Flutter architecture', desc: 'Building pixel-perfect iOS and Android apps simultaneously to cut development time by 40%.' },
      { num: '02', title: 'Offline-first database architecture', desc: 'Ensuring seamless app functionality even on intermittent 4G/5G connections.' },
      { num: '03', title: 'Secure API & payment gateways', desc: 'End-to-end encrypted REST/GraphQL APIs with instant UPI and biometric authentication.' }
    ],
    frictionCopy: 'Most mobile app agencies overcharge, drag projects out for 12 months, and deliver buggy apps that get rejected by the Apple App Store and crash on real Android devices.',
    outcomes: [
      { forWhom: 'For Startup Founders', title: 'Rapid speed-to-market.', desc: 'Launch on both the Apple App Store and Google Play Store in 6 to 10 weeks.' },
      { forWhom: 'For Enterprises', title: 'Scalable cloud backend.', desc: 'Robust Firebase or AWS serverless backends engineered to support 100,000+ daily active users.' },
      { forWhom: 'For End Users', title: 'Fluid 60fps native feel.', desc: 'Instant touch response, intuitive navigation, and biometric sign-in.' }
    ],
    workflows: [
      {
        q: "Why choose Flutter over separate native iOS and Android development?",
        kicker: "Codebase Efficiency & Native Performance",
        desc: "Flutter compiles directly to native ARM machine code, delivering true native performance while sharing 90%+ of code between iOS and Android. This cuts your initial build cost and future maintenance bills in half.",
        decision: "Standardize on Flutter for cross-platform velocity with native speed.",
        steps: ["Single Codebase Architecture", "Native Compilation QA", "Multi-Platform Verification"]
      },
      {
        q: "How do you handle App Store and Google Play review and approval?",
        kicker: "Guaranteed Store Submission Compliance",
        desc: "Apple and Google enforce strict privacy and security guidelines. We handle all developer account setup, privacy policy compliance, metadata, screenshots, and guarantee store approval.",
        decision: "Full end-to-end management of app store review and release pipelines.",
        steps: ["Compliance Pre-Audit", "Asset & Metadata Packaging", "Guaranteed Store Approval"]
      },
      {
        q: "Can the app function offline when users have poor network connectivity?",
        kicker: "Offline-First Local Database Sync",
        desc: "We implement local SQLite or Hive databases with background synchronization. Users can browse data and submit actions offline, which automatically sync once connection is restored.",
        decision: "Deploy local caching and queued synchronization logic.",
        steps: ["Local Schema Architecture", "Conflict Resolution Rules", "Background Network Sync"]
      },
      {
        q: "Who owns the source code and backend infrastructure?",
        kicker: "100% Intellectual Property Sovereignty",
        desc: "You retain full ownership of the Git repository, app store developer accounts, cloud backend servers, and databases with complete documentation upon handover.",
        decision: "Complete repository and infrastructure transfer upon milestone completion.",
        steps: ["Git Repository Handover", "Cloud Infrastructure Transfer", "Staff Technical Walkthrough"]
      }
    ],
    equation: {
      b1Title: 'Flutter Single Codebase',
      b1Val: 'Dual Platform Launch (iOS + Android)',
      sign1: '×',
      b2Title: 'Sub-Second Backend APIs',
      b2Val: '60fps Native Performance',
      sign2: '=',
      b3Title: 'Market Outcome',
      b3Val: '5-Star User Ratings & Rapid Adoption'
    },
    threadSteps: [
      { num: '01', title: 'Scoping', desc: 'User persona mapping, feature prioritization & technical architecture definition' },
      { num: '02', title: 'UI/UX Wireframes', desc: 'Design interactive mobile Figma prototypes following iOS and Material guidelines' },
      { num: '03', title: 'Backend APIs', desc: 'Build secure REST/GraphQL endpoints, database schemas & authentication' },
      { num: '04', title: 'Flutter Coding', desc: 'Develop frontend views, state management (Bloc/Provider) & API integration' },
      { num: '05', title: 'Device Testing', desc: 'Run automated and manual QA across 20+ real iOS and Android devices' },
      { num: '06', title: 'Store Submission', desc: 'Package binaries, prepare store listings & manage Apple/Google review' },
      { num: '07', title: 'Launch & Monitor', desc: 'Live production release, crashlytics tracking & user analytics sync' }
    ],
    principles: [
      { title: 'Zero compromise on speed.', desc: 'Every mobile view must render at a consistent 60 frames per second.' },
      { title: 'Offline capability.', desc: 'Apps are engineered to handle real-world mobile network fluctuations.' },
      { title: 'Clean, modular architecture.', desc: 'Code is cleanly decoupled for easy feature expansion and team scaling.' },
      { title: 'Senior mobile architect leadership.', desc: 'Supervised directly at Inrank Baner Lab.' }
    ],
    faqs: [
      { q: 'How long does mobile app development take?', a: 'Standard MVP mobile applications are developed and submitted to stores within 6 to 10 weeks.' },
      { q: 'Will the app work on both iPhones and Android phones?', a: 'Yes. Our Flutter applications run natively on all modern iPhones and Android smartphones with adaptive UI.' },
      { q: 'Do you build the backend database and API as well?', a: 'Yes. We provide complete full-stack development, including secure cloud databases, serverless APIs, and admin web portals.' },
      { q: 'What happens after the app is launched?', a: 'We provide post-launch warranty support, bug fixing, OS compatibility updates, and feature scaling.' },
      { q: 'How much does mobile app development cost?', a: 'Custom mobile app projects start at ₹34,999 for targeted MVPs and scale based on feature complexity and third-party integrations.' }
    ]
  }),

  createService({
    slug: 'linkedin-marketing-agency',
    name: 'LinkedIn Marketing Agency',
    pillar: 3,
    kicker: 'INRANK B2B ACQUISITION · ACCOUNT-BASED MARKETING PUNE',
    title: 'Reach verified decision-makers.<br><em>B2B lead generation that fills your enterprise pipeline.</em>',
    metaDesc: 'LinkedIn marketing agency in Pune. Inrank manages high-ticket B2B account-based marketing (ABM), thought leadership ads, and sponsored content for corporate growth.',
    heroLede: 'LinkedIn is the premier commercial channel for enterprise B2B sales, but most companies waste money running generic display ads. Inrank executes precision Account-Based Marketing (ABM) and executive thought leadership campaigns targeting exact job titles, company sizes, and industries.',
    decisionSteps: [
      { num: '01', title: 'Account-Based Target Lists', desc: 'Curating target company lists and decision-maker job titles.' },
      { num: '02', title: 'Thought leadership sponsored content', desc: 'Publishing deep-dive case studies and data insights that build credibility.' },
      { num: '03', title: 'Lead Gen Forms & CRM Sync', desc: 'Frictionless in-app lead forms that auto-fill verified business emails.' }
    ],
    frictionCopy: 'Most agencies treat LinkedIn like Facebook, posting generic quotes and running broad ads that generate expensive clicks from irrelevant interns.',
    outcomes: [
      { forWhom: 'For the B2B CEO', title: 'Direct access to CXOs and procurement heads.', desc: 'Put your commercial proposals in front of the exact executives who control procurement budgets.' },
      { forWhom: 'For the Enterprise Sales Team', title: 'Pre-qualified enterprise leads.', desc: 'Receive inquiries with verified corporate email addresses, company names, and seniority.' },
      { forWhom: 'For Brand Authority', title: 'Dominant B2B thought leadership.', desc: 'Become the undisputed authority in manufacturing, technology, or industrial services.' }
    ],
    workflows: [
      {
        q: "Why are LinkedIn Lead Gen Forms more effective than external landing pages?",
        kicker: "Auto-Fill Verified Corporate Data",
        desc: "LinkedIn Lead Gen Forms auto-populate with the user's verified corporate email, job title, and company name directly from their profile. This eliminates mobile typing friction and delivers 2x higher completion rates.",
        decision: "Deploy native LinkedIn Lead Gen Forms with instant CRM webhook sync.",
        steps: ["Lead Gen Form Setup", "Field Mapping & Privacy Terms", "Direct CRM Webhook Dispatch"]
      },
      {
        q: "How do you keep cost-per-lead affordable on LinkedIn?",
        kicker: "Precision Audience Layering & Exclusions",
        desc: "LinkedIn advertising is expensive if targeted broadly. We layer job function, seniority (Director+), and company headcount, while excluding entry-level roles and irrelevant industries.",
        decision: "Strict negative audience exclusions and tight budget capping.",
        steps: ["Audience Layering", "Negative Exclusions", "Bid Capping Optimization"]
      },
      {
        q: "Can LinkedIn ads support founder thought leadership?",
        kicker: "Thought Leader Ad Formats",
        desc: "Yes. Sponsoring executive posts directly from your CEO or founder's personal profile generates 3x higher engagement and trust compared to standard corporate brand page ads.",
        decision: "Amplify founder thought leadership posts targeting key enterprise accounts.",
        steps: ["Executive Content Strategy", "Thought Leader Ad Setup", "Engagement Follow-Up"]
      },
      {
        q: "Do you integrate with sales automation and outreach workflows?",
        kicker: "Omnichannel ABM Retargeting",
        desc: "We coordinate LinkedIn advertising with cold email outreach and sales team follow-ups so prospects see your brand across multiple professional touchpoints.",
        decision: "Align ad flight schedules with active sales development outreach.",
        steps: ["Target Account List Match", "Coordinated Ad Flights", "Sales Pipeline Reporting"]
      }
    ],
    equation: {
      b1Title: 'Verified CXO Targeting',
      b1Val: 'Decision-Makers with Real Budgets',
      sign1: '×',
      b2Title: 'Lead Gen Form UX',
      b2Val: 'Auto-Filled Corporate Verified Data',
      sign2: '=',
      b3Title: 'Enterprise Pipeline',
      b3Val: 'High-Ticket B2B Contracts Closed'
    },
    threadSteps: [
      { num: '01', title: 'ICP Definition', desc: 'Identify Ideal Customer Profile (industry, company size, revenue, job titles)' },
      { num: '02', title: 'Account Lists', desc: 'Compile vetted lists of 200-500 target enterprise companies in Pune/India' },
      { num: '03', title: 'Creative Strategy', desc: 'Develop data-driven carousel slides, whitepaper downloads & case study ads' },
      { num: '04', title: 'Tracking', desc: 'Deploy LinkedIn Insight Tag and Conversions API on your website' },
      { num: '05', title: 'Campaign Launch', desc: 'Launch Matched Audience and Sponsored Content campaigns' },
      { num: '06', title: 'Lead Routing', desc: 'Route leads immediately to sales reps via WhatsApp and CRM' },
      { num: '07', title: 'Account Review', desc: 'Analyze account engagement reports to identify warm accounts for sales outreach' }
    ],
    principles: [
      { title: 'Quality over lead volume.', desc: 'One qualified VP inquiry is worth 100 unqualified student leads.' },
      { title: 'Verified corporate credentials.', desc: 'Every lead contains real company names, verified emails, and real titles.' },
      { title: 'Zero spam automation.', desc: 'We respect professional etiquette and run high-authority paid campaigns.' },
      { title: 'Senior B2B strategists.', desc: 'Managed directly by senior enterprise marketers at Inrank.' }
    ],
    faqs: [
      { q: 'What is the minimum budget for LinkedIn advertising?', a: 'We typically recommend a minimum ad spend of ₹25,000 to ₹50,000/month for LinkedIn B2B campaigns due to higher platform CPMs.' },
      { q: 'What type of content performs best on LinkedIn Ads?', a: 'Downloadable industry research, customer case studies, and executive problem-solving guides generate the highest conversion rates.' },
      { q: 'Can we target specific companies by name?', a: 'Yes. LinkedIn allows us to upload an exact list of target companies (Account-Based Marketing) and deliver ads only to their leadership.' },
      { q: 'How quickly do leads arrive?', a: 'Leads begin flowing within 24 to 48 hours of campaign launch and are instantly forwarded to your sales team.' },
      { q: 'What does Inrank charge for LinkedIn Ads management?', a: 'Our B2B LinkedIn Ads sprint management is priced at ₹14,999/month on a transparent flat fee.' }
    ]
  }),

  createService({
    slug: 'social-media-marketing-services',
    name: 'Social Media Marketing Services',
    pillar: 3,
    kicker: 'INRANK SOCIAL · BRAND STORYTELLING & ENGAGEMENT PUNE',
    title: 'Social media that builds brand equity.<br><em>Consistent, high-impact visual storytelling that attracts customers.</em>',
    metaDesc: 'Social media marketing services in Pune. Inrank manages Instagram, LinkedIn, and Facebook with custom visual design, video reels, and community growth.',
    heroLede: 'Posting generic Canva templates three times a week does not grow a business. Inrank engineers strategic social media presence—curating bespoke visual aesthetics, writing punchy copy, producing engaging video reels, and cultivating genuine customer loyalty.',
    decisionSteps: [
      { num: '01', title: 'Distinctive visual grid aesthetic', desc: 'Custom graphics matching Inrank 2.0 corporate brand standards.' },
      { num: '02', title: 'Short-form video reels production', desc: 'Engaging product demonstrations, behind-the-scenes, and founder insights.' },
      { num: '03', title: 'Active community engagement', desc: 'Direct response to comments and messages to convert followers into inquiries.' }
    ],
    frictionCopy: 'Most social media agencies outsource posts to interns who post generic festival greetings and motivational quotes that get zero engagement and bring zero customers.',
    outcomes: [
      { forWhom: 'For the Brand Owner', title: 'A polished, authoritative social presence.', desc: 'Showcase your company\'s real work, team, and client outcomes with professional visual pride.' },
      { forWhom: 'For Customer Acquisition', title: 'Inbound direct message leads.', desc: 'Convert social followers into quotation inquiries via automated DM and WhatsApp links.' },
      { forWhom: 'For Brand Loyalty', title: 'Engaged local community.', desc: 'Build an authentic base of brand advocates across Pune and Maharashtra.' }
    ],
    workflows: [
      {
        q: "How does Inrank create content that actually gets organic reach?",
        kicker: "Hook-Driven Reels & Educational Carousels",
        desc: "Social algorithms prioritize watch time and saves. We engineer short-form video reels with strong 3-second visual hooks and educational multi-slide carousels that users save and share.",
        decision: "Produce high-retention video reels and educational carousel slides.",
        steps: ["Hook Ideation", "Visual Storyboard", "High-Retention Video Editing"]
      },
      {
        q: "What does your monthly social media package include?",
        kicker: "Comprehensive Monthly Content Production",
        desc: "We deliver 12 to 16 custom-designed posts and reels per month, complete with strategic copywriting, trending audio research, hashtag clusters, and scheduled publishing.",
        decision: "Deliver a structured monthly content calendar with executive preview.",
        steps: ["Monthly Calendar Planning", "Asset Production", "Scheduled Auto-Publishing"]
      },
      {
        q: "How do you handle brand tone and industry accuracy?",
        kicker: "Brand Tone Guidelines & Fact Checking",
        desc: "We establish a clear brand voice manual for your company, ensuring every caption and graphic accurately represents your industry expertise and tone.",
        decision: "Codify company voice, banned phrases, and visual guidelines.",
        steps: ["Tone Manual Creation", "Copywriting Guidelines", "Executive Review Workflow"]
      },
      {
        q: "Can social media drive direct B2B inquiries in Pune?",
        kicker: "Social Selling & Inquiry Routing",
        desc: "Yes. By featuring real behind-the-scenes factory footage, doctor clinic walkthroughs, and client case study highlights, we generate direct inbound DMs from commercial buyers.",
        decision: "Integrate direct WhatsApp links and clear calls-to-action in all bios and posts.",
        steps: ["Bio Link Optimization", "WhatsApp Direct Routing", "Inquiry Follow-Up"]
      }
    ],
    equation: {
      b1Title: 'High-Retention Reels & Visuals',
      b1Val: 'Original Thought Leadership Content',
      sign1: '×',
      b2Title: 'Consistent Publishing',
      b2Val: '12-16 Strategic Monthly Drops',
      sign2: '=',
      b3Title: 'Brand Growth',
      b3Val: 'Compounding Organic Audience & Inbound DMs'
    },
    threadSteps: [
      { num: '01', title: 'Brand Audit', desc: 'Review existing social profiles, audience demographics & competitor presence' },
      { num: '02', title: 'Content Pillars', desc: 'Define 4 core content themes (Educational, Proof/Work, Culture, Offer)' },
      { num: '03', title: 'Monthly Calendar', desc: 'Present monthly content plan with copy, visual concepts & publishing dates' },
      { num: '04', title: 'Design & Editing', desc: 'Design custom graphics and edit high-retention video reels' },
      { num: '05', title: 'Client Review', desc: 'Secure executive approval on content batch via shared preview link' },
      { num: '06', title: 'Publishing', desc: 'Schedule and publish across Instagram, LinkedIn, and Facebook' },
      { num: '07', title: 'Analytics', desc: 'Deliver monthly growth report tracking reach, saves, profile visits & leads' }
    ],
    principles: [
      { title: 'Zero generic Canva templates.', desc: 'Every post is designed custom to match your brand identity.' },
      { title: 'Substance over fluff.', desc: 'We share real business insights, case studies, and work proofs.' },
      { title: 'Consistency and discipline.', desc: 'Predictable weekly publishing schedule that builds algorithmic momentum.' },
      { title: 'Prasad Mhaske creative direction.', desc: 'High visual standards maintained across all published creative.' }
    ],
    faqs: [
      { q: 'Which social platforms do you manage?', a: 'We manage Instagram, LinkedIn, Facebook, and YouTube Shorts.' },
      { q: 'Do you shoot the videos or do we provide footage?', a: 'We can organize professional on-site video shoots at your Pune office or edit raw smartphone clips captured by your internal team.' },
      { q: 'Do we get to approve posts before they go live?', a: 'Yes. We share the complete monthly content calendar 5 days in advance for your review and approval.' },
      { q: 'How do you measure success on social media?', a: 'We track profile visits, website click-throughs, direct message inquiries, saves, and follower growth.' },
      { q: 'What is the cost of social media management with Inrank?', a: 'Monthly management packages range from ₹11,999 to ₹18,999 depending on posting frequency and video production requirements.' }
    ]
  }),

  createService({
    slug: 'influencer-marketing-agency',
    name: 'Influencer Marketing Agency',
    pillar: 3,
    kicker: 'INRANK CREATORS · VETTED INFLUENCER PARTNERSHIPS PUNE',
    title: 'Authentic creator endorsements.<br><em>Vetted influencers that drive measurable brand trust and sales.</em>',
    metaDesc: 'Influencer marketing agency in Pune. Inrank manages vetted creator partnerships, micro-influencer campaigns, and ROI-driven social endorsements.',
    heroLede: 'Paying influencers for vanity story shoutouts wastes your marketing budget. Inrank sources, vets, and manages performance-driven creator partnerships—ensuring influencers have genuine audience engagement, transparent pricing, and measurable commercial deliverables.',
    decisionSteps: [
      { num: '01', title: 'Fake follower & engagement vetting', desc: 'Auditing creator audiences to eliminate bot accounts and engagement pods.' },
      { num: '02', title: 'Contract negotiation & usage rights', desc: 'Securing whitelisting rights to run creator content as high-ROAS paid ads.' },
      { num: '03', title: 'Trackable affiliate & coupon attribution', desc: 'Equipping every creator with unique discount codes and UTM tracking links.' }
    ],
    frictionCopy: 'Most agencies hire flashy influencers who have 100k fake followers, post low-effort videos, and generate zero sales for your business.',
    outcomes: [
      { forWhom: 'For D2C & Lifestyle Brands', title: 'Massive surge in brand awareness.', desc: 'Leverage trusted voices to introduce your products to targeted regional and national audiences.' },
      { forWhom: 'For Growth Marketers', title: 'High-performing User-Generated Content (UGC).', desc: 'Repurpose creator videos into winning paid Meta and Instagram ad creatives.' },
      { forWhom: 'For Budget Protection', title: 'Guaranteed deliverable compliance.', desc: 'Strict milestone-based creator contracts with verified proof of posting.' }
    ],
    workflows: [
      {
        q: "How do you distinguish authentic influencers from accounts with fake followers?",
        kicker: "Audience Authenticity & Engagement Auditing",
        desc: "We analyze creator audience demographics, comment quality, follower growth curves, and historical engagement rates to ensure real humans in your target market will see the content.",
        decision: "Only contract creators with 3%+ verified organic engagement rates.",
        steps: ["Audience Demographics Scan", "Bot Follower Purge Check", "Engagement Ratio Verification"]
      },
      {
        q: "What is creator whitelisting and why is it essential?",
        kicker: "Creator Whitelisting & Partnership Ads",
        desc: "Whitelisting allows us to run paid ads through the influencer's actual handle. This blends seamlessly into user feeds, boosting click-through rates by 2x compared to brand page ads.",
        decision: "Secure 90-day advertising usage rights in every creator contract.",
        steps: ["Usage Rights Negotiation", "Meta Partnership Access Setup", "Dark Post Ad Scaling"]
      },
      {
        q: "Do you manage local Pune micro-influencers?",
        kicker: "Hyperlocal Pune Lifestyle & Niche Influencers",
        desc: "Yes. We maintain an active network of vetted Pune food, fitness, medical, tech, and lifestyle creators with strong local followings across Baner, Kothrud, and PCMC.",
        decision: "Deploy regional micro-influencer clusters for concentrated local impact.",
        steps: ["Local Creator Shortlisting", "Sample Product Seeding", "Synchronized Campaign Drop"]
      },
      {
        q: "How do you measure the financial return on influencer campaigns?",
        kicker: "UTM Tracking & Coupon Attribution",
        desc: "We track every creator through dedicated discount codes and custom landing page links, providing transparent post-campaign ROI reports detailing sales and cost-per-acquisition.",
        decision: "Deliver transparent post-campaign revenue and CPA analytics.",
        steps: ["Coupon Code Generation", "Real-Time Sales Tracking", "Post-Campaign ROI Report"]
      }
    ],
    equation: {
      b1Title: 'Vetted Creator Reach',
      b1Val: 'Real Engaged Target Audience',
      sign1: '×',
      b2Title: 'Authentic Recommendation',
      b2Val: 'High Social Proof & Trust',
      sign2: '=',
      b3Title: 'Commercial Sales',
      b3Val: 'Rapid Product Adoption & High UGC ROAS'
    },
    threadSteps: [
      { num: '01', title: 'Strategy', desc: 'Define campaign objectives, target audience, budget & creative brief' },
      { num: '02', title: 'Vetting', desc: 'Scan and shortlist 30+ potential creators, auditing engagement authenticity' },
      { num: '03', title: 'Negotiation', desc: 'Negotiate commercial deliverables, timelines & paid advertising usage rights' },
      { num: '04', title: 'Contracts', desc: 'Execute legal creator contracts with strict deliverable guidelines' },
      { num: '05', title: 'Briefing & Seeding', desc: 'Deliver product samples and provide creative direction briefs' },
      { num: '06', title: 'Review & Live', desc: 'Review creator drafts, approve final videos & coordinate synchronized live drop' },
      { num: '07', title: 'Amplification', desc: 'Whitelisted paid ad scaling of top-performing creator videos' }
    ],
    principles: [
      { title: 'Audience authenticity non-negotiable.', desc: 'Zero tolerance for bot followers, engagement pods, or inflated metrics.' },
      { title: 'Contract-backed deliverables.', desc: 'Creators only get paid after deliverables are posted and verified.' },
      { title: 'Ad usage rights included.', desc: 'Every campaign secures rights to run winning creator videos as paid ads.' },
      { title: 'Transparent agency fees.', desc: 'Flat campaign management with zero hidden creator markups.' }
    ],
    faqs: [
      { q: 'How many influencers should we work with?', a: 'We typically recommend running campaigns in cohorts of 5 to 10 micro-influencers (10k-50k followers) for maximum authentic reach and cost efficiency.' },
      { q: 'How long does an influencer campaign take from start to finish?', a: 'Standard creator campaigns run over 3 to 4 weeks: 1 week for vetting and contracts, 1 week for product shipping, and 2 weeks for content review and publishing.' },
      { q: 'Do you handle the legal contracts with creators?', a: 'Yes. We provide complete legal agreements covering deliverables, exclusivity, approval rights, and digital advertising whitelisting.' },
      { q: 'Can B2B companies benefit from influencer marketing?', a: 'Yes. We partner with respected industry experts and LinkedIn thought leaders who hold immense credibility among enterprise decision-makers.' },
      { q: 'What is Inrank\'s fee for managing influencer marketing?', a: 'Campaign management starts at ₹14,999 plus creator compensation, delivering complete end-to-end execution.' }
    ]
  }),

  createService({
    slug: 'luxury-business-card-design',
    name: 'Luxury Business Card Design',
    pillar: 4,
    kicker: 'INRANK PRINT LAB · EXECUTIVE VISITING CARDS PUNE',
    title: 'Business cards that demand respect.<br><em>Minimalist, tactile, and engineered for high-stakes handshakes.</em>',
    metaDesc: 'Luxury business card and visiting card design in Pune. Inrank crafts minimalist executive visiting cards with foil stamping, spot UV, and ultra-thick 450+ GSM cardstocks.',
    heroLede: 'In a digital world, a tactile, ultra-premium business card makes a powerful physical statement. Inrank designs bespoke executive visiting cards—utilizing disciplined typography, foil stamping, spot UV, and heavyweight 450+ GSM paper stocks that command immediate respect.',
    decisionSteps: [
      { num: '01', title: 'Disciplined minimalist layout', desc: 'Generous whitespace, refined kerning, and zero visual clutter.' },
      { num: '02', title: 'Tactile print finish specifications', desc: 'Gold/silver hot foil stamping, debossing, and velvet matte lamination.' },
      { num: '03', title: 'Press-ready master vector files', desc: 'CMYK vectors with exact crop marks and finish separation layers.' }
    ],
    frictionCopy: 'Cheap 250 GSM flimsy business cards printed on glossy paper feel cheap and get thrown in the trash within 5 minutes of a meeting.',
    outcomes: [
      { forWhom: 'For the CEO & Executive', title: 'A tangible symbol of institutional authority.', desc: 'Hand over a card that feels substantial, luxurious, and memorable.' },
      { forWhom: 'For Sales Meetings', title: 'Instant icebreaker and credibility builder.', desc: 'Prospective clients physically admire the card, signaling quality before the pitch begins.' },
      { forWhom: 'For Print Precision', title: 'Exact printer finish specifications.', desc: 'Separate vector layers for foil, deboss, and spot UV ensure zero printer errors.' }
    ],
    workflows: [
      {
        q: "What paper stocks and thickness do you recommend for luxury cards?",
        kicker: "Paper Density & Tactile Substrates",
        desc: "We specify minimum 350 to 450 GSM heavyweight art cards, cotton paper, or duplex sandwich cards with colored core edges. The card feels rigid, substantial, and never bends easily.",
        decision: "Specify minimum 400+ GSM velvet matte or textured cotton stock.",
        steps: ["Paper Substrate Selection", "GSM Weight Specification", "Edge Color Matching"]
      },
      {
        q: "How do you prepare files for specialty finishes like gold foil or embossing?",
        kicker: "Vector Finish Separation Layers",
        desc: "Specialty finishes require dedicated 100% black vector spot layers. We supply separate technical layers for hot foil, blind deboss, and raised spot UV so your printer executes flawlessly.",
        decision: "Provide color-separated vector finish plates for commercial print houses.",
        steps: ["Finish Layer Separation", "Vector Registration Alignment", "Printer Proofing"]
      },
      {
        q: "Do you include QR codes for instant digital contact saving?",
        kicker: "Seamless vCard & Digital Integration",
        desc: "Yes. We generate clean, custom vector QR codes that link directly to your vCard or website, allowing recipients to save your contact information into their smartphone with 1 tap.",
        decision: "Embed custom vector QR code with direct phone contact download.",
        steps: ["vCard Data Encoding", "Vector QR Generation", "Scanning Distance Verification"]
      },
      {
        q: "Can Inrank manage printing and physical delivery in Pune?",
        kicker: "End-to-End Print Procurement",
        desc: "Yes. We work directly with Pune's top commercial luxury printers to oversee proofing, paper sampling, and courier delivery straight to your office in Baner, Hinjewadi, or PCMC.",
        decision: "Coordinate physical sample proofing and direct doorstep delivery.",
        steps: ["Physical Proof Review", "Batch Production Oversight", "Doorstep Delivery"]
      }
    ],
    equation: {
      b1Title: 'Heavyweight Paper Stock',
      b1Val: '450 GSM Velvet Matte / Cotton',
      sign1: '×',
      b2Title: 'Tactile Finish',
      b2Val: 'Hot Foil & Blind Deboss',
      sign2: '=',
      b3Title: 'Physical Impact',
      b3Val: 'Unforgettable Executive Handshake'
    },
    threadSteps: [
      { num: '01', title: 'Consultation', desc: 'Review corporate brand guidelines, card format (vertical/horizontal) & finishes' },
      { num: '02', title: 'Layout Drafting', desc: 'Craft 3 distinct minimalist layout directions in Adobe Illustrator' },
      { num: '03', title: 'Finishes Mapping', desc: 'Design dedicated layers for foil stamping, debossing, and spot UV' },
      { num: '04', title: 'Digital Proof', desc: 'Present realistic 3D photorealistic mockups showing paper texture and foil reflections' },
      { num: '05', title: 'Refinements', desc: 'Fine-tune typography, spacing, contact details & QR code scanning' },
      { num: '06', title: 'Pre-Press QA', desc: 'Verify CMYK ink limits, bleed safety margins & finish registration' },
      { num: '07', title: 'Delivery', desc: 'Deliver master print files + coordinate commercial printing and shipping' }
    ],
    principles: [
      { title: 'Restraint and elegance.', desc: 'True luxury relies on whitespace, balanced typography, and fine paper—not visual clutter.' },
      { title: 'Heavyweight tactile feel.', desc: 'We never design for cheap, lightweight paper stocks.' },
      { title: 'Flawless print preparation.', desc: 'Separate vector plates for every specialty finish guarantee print accuracy.' },
      { title: 'Personalized executive attention.', desc: 'Every card design is curated by Prasad Mhaske.' }
    ],
    faqs: [
      { q: 'What is the standard turnaround time for business card design?', a: 'Digital design concepts are delivered in 2 to 3 business days; physical luxury printing typically takes 4 to 6 days after proof approval.' },
      { q: 'What dimensions do you use?', a: 'Standard Indian/International dimensions (85mm x 55mm or 90mm x 50mm) with custom square (65mm x 65mm) and slimline options.' },
      { q: 'Can you design individual cards for multiple team members?', a: 'Yes. We establish the master executive template and format cards for your entire leadership team.' },
      { q: 'What file formats do we receive?', a: 'You receive press-ready vector PDFs (CMYK with bleed), separate finish plate files, and digital preview images.' },
      { q: 'How much does luxury business card design cost?', a: 'Design packages start at ₹4,999 for master executive templates.' }
    ]
  }),

  createService({
    slug: 'letterhead-stationery-design',
    name: 'Letterhead & Stationery Design',
    pillar: 4,
    kicker: 'INRANK CORPORATE · EXECUTIVE STATIONERY SYSTEMS PUNE',
    title: 'Official documents that inspire confidence.<br><em>Corporate letterheads, invoices, and stationery suites.</em>',
    metaDesc: 'Corporate letterhead and stationery design in Pune. Inrank designs professional executive letterheads, digital Word templates, envelopes, and invoicing suites.',
    heroLede: 'Sending formal business proposals or legal contracts on a poorly formatted document weakens your commercial authority. Inrank designs cohesive corporate stationery suites—delivering both physical print-ready stationery and editable digital Microsoft Word/Google Docs templates.',
    decisionSteps: [
      { num: '01', title: 'Print-ready executive stationery', desc: 'Calibrated CMYK layouts with exact margins for physical letterhead printing.' },
      { num: '02', title: 'Editable Microsoft Word templates', desc: 'Locked header/footer digital templates that your team can type into without breaking formatting.' },
      { num: '03', title: 'Complete corporate suite consistency', desc: 'Matching envelopes, invoices, quotation sheets, and presentation folders.' }
    ],
    frictionCopy: 'Most offices use distorted logo screenshots pasted into Word headers that print blurry and make multimillion-rupee proposals look like student assignments.',
    outcomes: [
      { forWhom: 'For Operations & Legal', title: 'Standardized corporate documentation.', desc: 'Ensure every contract, proposal, and invoice maintains strict brand standards.' },
      { forWhom: 'For Executive Communications', title: 'Polished official correspondence.', desc: 'Deliver formal correspondence with executive dignity and clear contact details.' },
      { forWhom: 'For Digital Teams', title: 'Frictionless Word & PDF templates.', desc: 'Easily type and export clean official PDF proposals from your desktop.' }
    ],
    workflows: [
      {
        q: "How do you ensure the letterhead template is easy for non-designers to use in Word?",
        kicker: "Locked Header/Footer & Styled Document Margins",
        desc: "We embed high-resolution vector assets into locked Microsoft Word header and footer sections, establishing pre-styled paragraph and heading styles so anyone on your team can type naturally without displacing logos.",
        decision: "Provide locked Word templates (.dotx) and Google Docs styles.",
        steps: ["Template Margin Calibration", "Header/Footer Lock", "Typography Style Pre-Sets"]
      },
      {
        q: "What items are included in a complete corporate stationery suite?",
        kicker: "Comprehensive Brand Collateral",
        desc: "A complete suite includes: Corporate Letterhead (Print & Word), Business Envelope (DL and C4), Quotation Template, Tax Invoice layout, Payment Receipt, and Presentation Folder.",
        decision: "Deliver a unified stationery system across all internal and external touchpoints.",
        steps: ["Asset Scope Definition", "Unified Grid Layouts", "Multi-Format Export"]
      },
      {
        q: "What paper stock is recommended for official letterhead printing?",
        kicker: "Executive Paper Stock Recommendations",
        desc: "We recommend 100 to 120 GSM high-bright executive bond paper (such as Alabaster, Sunshine, or Conqueror) that runs smoothly through office laser printers without ink bleeding.",
        decision: "Specify laser-compatible bond paper stocks for physical letterheads.",
        steps: ["Paper GSM Specification", "Laser Compatibility Testing", "Print Proof Approval"]
      },
      {
        q: "Do you supply digital invoice templates for accounting software?",
        kicker: "ERP & Accounting Software Compatibility",
        desc: "Yes. We format invoice headers and layouts compatible with Zoho Books, Tally, QuickBooks, and custom ERP systems.",
        decision: "Deliver pixel-perfect header banners and layout templates for billing software.",
        steps: ["Accounting Software Sizing", "Header Banner Export", "PDF Generation QA"]
      }
    ],
    equation: {
      b1Title: 'Crisp Vector Header',
      b1Val: 'Precision Typography & Legal Details',
      sign1: '×',
      b2Title: 'Editable Digital Template',
      b2Val: 'Locked Word & Docs Formats',
      sign2: '=',
      b3Title: 'Corporate Integrity',
      b3Val: 'Unified Institutional Commercial Authority'
    },
    threadSteps: [
      { num: '01', title: 'Audit', desc: 'Review existing letterhead, legal company details, GST/CIN numbers & brand guidelines' },
      { num: '02', title: 'Layout Drafting', desc: 'Design 3 distinct letterhead and envelope layout options in Illustrator' },
      { num: '03', title: 'Review', desc: 'Present digital proofs showing physical print appearance and Word layout' },
      { num: '04', title: 'Word Configuration', desc: 'Build locked .docx/.dotx templates with predefined typography and margins' },
      { num: '05', title: 'Collateral Extension', desc: 'Design matching envelopes, invoices, quotation sheets & folders' },
      { num: '06', title: 'Print QA', desc: 'Verify CMYK colors, bleed zones, and font embedding for commercial printing' },
      { num: '07', title: 'Delivery', desc: 'Deliver master vector print files + editable Microsoft Word/Google Docs templates' }
    ],
    principles: [
      { title: 'Functional elegance.', desc: 'Maximizes readable document area while maintaining strong brand presence.' },
      { title: 'Dual physical & digital utility.', desc: 'Flawless when printed on bond paper or exported to digital PDF.' },
      { title: 'Zero distorted logos.', desc: 'High-resolution vector assets embedded at exact physical dimensions.' },
      { title: 'Legal & tax compliance.', desc: 'Clean placement of GST, CIN, registered address, and official contact channels.' }
    ],
    faqs: [
      { q: 'Will the letterhead work in Microsoft Word?', a: 'Yes. We deliver editable .docx templates with locked headers and footers, so you can type letters and export clean PDFs easily.' },
      { q: 'Can we use the digital letterhead in Google Docs?', a: 'Yes. We provide Google Docs-compatible templates for cloud teams.' },
      { q: 'How long does stationery design take?', a: 'Standard corporate letterhead and stationery suites are completed in 3 to 5 business days.' },
      { q: 'What sizes do you design for letterheads and envelopes?', a: 'Standard A4 size for letterheads; DL (110x220mm) and C4 (catalog size) for corporate envelopes.' },
      { q: 'How much does corporate stationery design cost?', a: 'Letterhead & stationery suites start at ₹6,999, including editable digital templates and print-ready files.' }
    ]
  })
];

console.log(`Building final ${final11.length} services...`);

// Load the generator from build_all_service_pages_ecosystem.cjs
const generatorScript = fs.readFileSync('scripts/build_all_service_pages_ecosystem.cjs', 'utf8');
const funcMatch = generatorScript.match(/function generateEcosystemServicePage\(s\) \{[\s\S]*?\n\}/);
const generatePage = new Function('s', funcMatch[0].replace('function generateEcosystemServicePage(s) {', '').replace(/\n\}$/, ''));

final11.forEach(s => {
  const filePath = path.join('inrank2.0/services', `${s.slug}.html`);
  const html = generatePage(s);
  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Generated: inrank2.0/services/${s.slug}.html`);
});

console.log('All remaining services generated successfully!');
