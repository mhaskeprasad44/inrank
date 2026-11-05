const fs = require('fs');
const path = require('path');

// 27 Services Database with bespoke Vinove Bond/Prism Ecosystem configurations
const servicesData = [
  // ─── PILLAR 1: SEARCH & AI DISCOVERY ─────────────────────────────────────────
  {
    slug: 'seo-company-pune',
    name: 'SEO Company in Pune',
    pillar: 1,
    pillarName: 'Search & AI Discovery',
    kicker: 'INRANK SEARCH · SEARCH ENGINE DOMINANCE PUNE',
    title: 'Know what drives the rankings.<br><em>Make the traffic turn into revenue.</em>',
    metaTitle: 'SEO Company in Pune | High-Performance Search Engineering | Inrank',
    metaDesc: 'Inrank Technologies is Pune\'s leading SEO company. We engineer technical search dominance, sub-second Core Web Vitals, Google 3-Pack rank, and high-converting commercial inquiries in Baner, Pune.',
    heroLede: 'Most SEO agencies in Pune sell vanity impression charts. Inrank treats search as an engineering discipline. We re-architect your site for sub-second Core Web Vitals, build localized entity authority across Pune corridors, and capture buyers with high purchase intent.',
    decisionOverline: 'From Technical Audit to Revenue',
    decisionTitle: 'Every ranking surge<br>starts with <em>why.</em>',
    decisionSteps: [
      { num: '01', title: 'Spot technical bottlenecks', desc: 'Crawl budget waste, indexation blocks, and mobile LCP speeds above 2.5s.' },
      { num: '02', title: 'Build localized entity authority', desc: 'Structured schema markup, Pune geo-citations, and high-intent buyer keyword maps.' },
      { num: '03', title: 'Capture qualified commercial demand', desc: 'Dominating Google 3-Pack map results and converting visitors into WhatsApp calls.' }
    ],
    frictionKicker: 'Where Traditional SEO Fails',
    frictionTitle: 'Keyword charts exist.<br>Does the commercial revenue?',
    frictionCopy: 'Business owners need qualified leads. Marketing directors need predictable organic growth. Both need verifiable search rankings without deciphering deceptive agency reports filled with irrelevant traffic.',
    outcomes: [
      { forWhom: 'For the Business Owner', title: 'Review bottom-line revenue, not just ranks.', desc: 'Connect your organic search rankings directly to customer inquiries, commercial transactions, and reduced dependency on paid Google Ads.' },
      { forWhom: 'For the Growth Director', title: 'Start every week with an actionable sprint.', desc: 'Bring technical fixes, content deployment deadlines, and localized keyword moves into an accountable 5–7 day operational rhythm.' },
      { forWhom: 'For the Pune Market', title: 'Dominate Baner, Hinjewadi & PCMC.', desc: 'Carry hyper-local Google Business Profile prominence and localized geo-citations straight to your phone and WhatsApp inbox.' }
    ],
    tourKicker: 'Explore The System in Practice',
    tourTitle: 'Start with the question your business needs answered.',
    workflows: [
      {
        q: "Why isn't our website ranking in the top 3 on Google in Pune?",
        kicker: "Technical & Core Web Vitals Audit",
        desc: "Most websites fail Google's mobile rendering standards or suffer from fragmented internal architecture. We crawl your entire domain with enterprise diagnostics to identify duplicate URLs, slow server response times (> 1.2s), missing canonical tags, and unindexed commercial landing pages.",
        decision: "Eliminate crawl bottlenecks immediately and re-engineer core templates to achieve sub-second LCP.",
        steps: ["Deep Technical Crawl", "Eliminate Bloated Code", "Verify Google Re-Indexation"]
      },
      {
        q: "How do we displace established competitors on high-intent keywords?",
        kicker: "Semantic Entity Architecture & Topic Clusters",
        desc: "Instead of stuffing repetitive keywords onto single pages, we construct interconnected topic clusters with clear semantic hierarchies. Google recognises your domain as the definitive authoritative resource for your commercial category in Maharashtra.",
        decision: "Build 5–10 deep pillar pages covering commercial purchase intent, backed by verified technical documentation.",
        steps: ["Cluster Gap Analysis", "Authoritative Pillar Content", "Internal Semantic Link Graph"]
      },
      {
        q: "How do we dominate local Pune searches on Google Maps & 3-Pack?",
        kicker: "Google Business Profile (GMB) & Pune Citations",
        desc: "Over 46% of all Google searches have local intent. We optimize your Google Business Profile with localized secondary categories, geo-tagged photography, automated review acquisition systems, and verified citations across Pune business directories.",
        decision: "Establish #1 ranking radius across Baner, Balewadi, Hinjewadi, and Shivaji Nagar to capture incoming phone calls.",
        steps: ["GMB Audit & Categorization", "Local NAP Citation Sync", "Review Velocity Sprint"]
      },
      {
        q: "How do we ensure generative AI search (ChatGPT, Gemini, Perplexity) cites our brand?",
        kicker: "Generative Engine Optimization (GEO) & Knowledge Graph",
        desc: "AI answer engines synthesize answers from authoritative, structured web sources. We implement JSON-LD Schema (Organization, Service, FAQ, Product), publish direct factual answers, and secure citations in industry registries so AI models recommend your business first.",
        decision: "Deploy structured Schema markup and publish authoritative definitions to become the primary AI reference entity.",
        steps: ["Schema JSON-LD Injection", "Entity Definition Publishing", "Perplexity & Gemini Validation"]
      }
    ],
    equationKicker: 'The Honest Performance Equation',
    equationTitle: 'One formula, with its assumptions visible.',
    equation: {
      b1Title: 'High-Intent Organic Demand',
      b1Val: 'Top-3 Google Ranks for Commercial Queries',
      sign1: '×',
      b2Title: 'Conversion Architecture',
      b2Val: 'Sub-Second Speed & 1-Tap Inquiries',
      sign2: '=',
      b3Title: 'Commercial Reality',
      b3Val: 'Predictable Revenue at Lowest CAC'
    },
    equationCopy: 'Each metric is aggregated to genuine commercial inquiries before calculating performance. That prevents vanity impression counts from masking stagnant revenue and keeps unavailable lead evidence completely visible.',
    threadKicker: 'Evidence Into Action',
    threadTitle: 'SEO should not become a monthly PDF graveyard.',
    threadCopy: 'An Inrank SEO sprint ends with an accountable verdict. The technical audit becomes code. The rankings become incoming phone calls. The commercial data informs the next optimization sprint.',
    threadSteps: [
      { num: '01', title: 'Audit', desc: 'Core Web Vitals, crawl budget & competitor gap analysis' },
      { num: '02', title: 'Architect', desc: 'Semantic keyword maps & localized entity hierarchies' },
      { num: '03', title: 'Engineer', desc: 'Sub-second code optimizations & structured Schema markup' },
      { num: '04', title: 'Dominate', desc: 'Hyperlocal Google 3-Pack & high-authority Pune citations' },
      { num: '05', title: 'Convert', desc: '1-tap WhatsApp lead pathways & frictionless booking' },
      { num: '06', title: 'Measure', desc: 'Verified revenue inquiries, phone calls & rank positions' },
      { num: '07', title: 'Compound', desc: 'Scale high-converting query clusters & defend #1 ranks' }
    ],
    principles: [
      { title: 'A priority comes with a reason.', desc: 'Every keyword targeted and technical fix made comes with clear commercial rationale based on user search intent and competitor vulnerability.' },
      { title: 'Missing evidence stays missing.', desc: 'We never inflate reporting with bot traffic or irrelevant rankings. If a keyword didn\'t drive an inquiry, it is not labeled as a success.' },
      { title: '100% Code & Asset Ownership.', desc: 'All content, Schema markup, code optimizations, and Google Search Console access belong entirely to you with zero lock-in retainers.' },
      { title: 'Direct Senior Engineering Access.', desc: 'You work directly with senior growth practitioners led by Prasad Mhaske at our Baner lab, not inexperienced junior account managers.' }
    ],
    faqs: [
      { q: 'How fast can we expect to see tangible ranking movements in Pune?', a: 'Technical fixes and Google Business Profile optimizations often show local movement within 3 to 6 weeks. High-competition organic keywords typically scale between 60 to 90 days as domain authority and crawl frequency compound.' },
      { q: 'What is included in the complimentary technical SEO audit?', a: 'We inspect your mobile Core Web Vitals, server response times, indexation health, internal link architecture, Schema markup validation, and complete competitor keyword gap analysis across Pune.' },
      { q: 'How much does Inrank\'s SEO service cost?', a: 'We operate on transparent, fixed-price sprint packages: Starter Sprint (₹11,999) for local dominance, Growth Scale (₹18,999) for competitive expansion, and Market Domination (₹34,999) for full-scale category leadership.' },
      { q: 'Do you require long-term binding contracts?', a: 'No. We do not believe in locking clients into 6-month or 12-month handcuffs. We work in accountable 30-day or 90-day sprints where performance and lead generation earn continuation.' },
      { q: 'Can Inrank help our brand appear in AI search engines like ChatGPT and Gemini?', a: 'Yes. Every Inrank SEO sprint includes Generative Engine Optimization (GEO). We structure your content with entity citations and schema markup so AI answer engines quote and recommend your brand.' }
    ]
  },

  {
    slug: 'ai-seo-services',
    name: 'AI SEO Services',
    pillar: 1,
    pillarName: 'Search & AI Discovery',
    kicker: 'INRANK AI SEO · NEXT-GENERATION GENERATIVE SEARCH',
    title: 'Get cited by answer engines.<br><em>Lead the conversational discovery era.</em>',
    metaTitle: 'AI SEO Services in Pune | Generative Engine Optimization | Inrank',
    metaDesc: 'Optimize your brand to be cited and recommended by ChatGPT, Google AI Overviews, Gemini, and Perplexity. Inrank deploys structured knowledge graph and entity AI SEO.',
    heroLede: 'Over 35% of high-intent purchase searches now happen through conversational AI models. Inrank structures your enterprise entity graph, schema definitions, and authoritative industry citations so generative models recommend your brand first.',
    decisionOverline: 'From Algorithms to Answers',
    decisionTitle: 'Every AI citation<br>starts with <em>authority.</em>',
    decisionSteps: [
      { num: '01', title: 'Map your corporate entity graph', desc: 'Define your business, founder, products, and specialties in standard Schema JSON-LD.' },
      { num: '02', title: 'Publish definitive answer models', desc: 'Answer core commercial questions concisely so Large Language Models extract your data.' },
      { num: '03', title: 'Secure multi-source verification', desc: 'Align third-party directories, industry journals, and Wikidata entries for AI consensus.' }
    ],
    frictionKicker: 'The New Discovery Landscape',
    frictionTitle: 'Traditional rankings exist.<br>Does your AI citation presence?',
    frictionCopy: 'When prospects ask AI: "Who is the most reliable commercial contractor in Pune?", does your brand get recommended? Traditional SEO alone will not protect your brand from AI zero-click searches.',
    outcomes: [
      { forWhom: 'For the Enterprise Leader', title: 'Protect your brand in AI-synthesized responses.', desc: 'Ensure accurate corporate facts, service descriptions, and pricing models are ingested into major LLMs.' },
      { forWhom: 'For Growth Teams', title: 'Win high-intent conversational buyers.', desc: 'Capture users asking complex comparison queries across ChatGPT, Claude, and Perplexity.' },
      { forWhom: 'For Local Authority', title: 'Become the Pune industry benchmark.', desc: 'Establish definitive local entity prominence across Google Gemini and AI Overviews.' }
    ],
    tourKicker: 'AI SEO in Action',
    tourTitle: 'How Inrank trains AI models to cite your business.',
    workflows: [
      {
        q: "How do ChatGPT and Google AI Overviews decide who to recommend?",
        kicker: "Entity Salience & Fact Extraction",
        desc: "LLMs do not scan raw keywords; they query internal knowledge representations and live retrieval indices. They select sources with unambiguous semantic structures, clear factual consensus, and high citation credibility.",
        decision: "Inject structured JSON-LD entity graphs across every core service page.",
        steps: ["Entity Definition", "Wikidata Mapping", "Knowledge Graph Publishing"]
      },
      {
        q: "What is the difference between traditional SEO and AI SEO?",
        kicker: "From Clicks to Synthesized Recommendations",
        desc: "Traditional SEO targets rank positions on a 10-blue-link page. AI SEO (GEO) ensures your brand is the chosen entity cited in conversational answer blocks, giving you direct brand endorsement rather than an easily skipped link.",
        decision: "Re-structure content with definitive answers, statistics, and Q&A formats optimized for AI ingestion.",
        steps: ["Format for Retrieval", "Publish Verified Facts", "Monitor Citation Frequency"]
      },
      {
        q: "Can negative or outdated AI citations be corrected?",
        kicker: "Algorithmic Brand Reputation Management",
        desc: "Yes. By publishing authoritative canonical data, disavowing outdated profiles, and securing citations in authoritative secondary sources, we overwrite outdated training tokens with fresh factual data.",
        decision: "Deploy authoritative knowledge feeds that search bots ingest during real-time retrieval passes.",
        steps: ["Audit AI Hallucinations", "Publish Canonical Truth", "Reinforce Authority Sources"]
      },
      {
        q: "How do we measure the commercial ROI of AI SEO?",
        kicker: "Attribution & Referral Analytics",
        desc: "We track direct referral traffic from AI platforms (Perplexity, ChatGPT, Claude) and measure lift in direct brand searches and assisted organic conversions.",
        decision: "Establish dedicated UTM channels and query log attribution to quantify revenue from AI discovery.",
        steps: ["Tag Inbound Traffic", "Log Prompt Variations", "Track Commercial Pipeline"]
      }
    ],
    equationKicker: 'The Generative Discovery Equation',
    equationTitle: 'One formula, with its assumptions visible.',
    equation: {
      b1Title: 'Entity Authority Score',
      b1Val: 'Schema Structure + Verified Citations',
      sign1: '×',
      b2Title: 'Retrieval Frequency',
      b2Val: 'Prompt Alignment in ChatGPT & Gemini',
      sign2: '=',
      b3Title: 'Market Dominance',
      b3Val: 'Uncontested AI Brand Recommendations'
    },
    equationCopy: 'We evaluate actual prompt recommendations across 50+ industry queries to verify your brand presence before calculating campaign success.',
    threadKicker: 'Evidence Into Action',
    threadTitle: 'AI optimization is an active engineering process.',
    threadCopy: 'We do not wait for models to retrain. We publish live, retrieval-ready architectures that Google AI Overviews and Perplexity access during live search queries.',
    threadSteps: [
      { num: '01', title: 'Audit', desc: 'Inspect current brand presence in ChatGPT, Gemini & Perplexity' },
      { num: '02', title: 'Entities', desc: 'Define schema graphs for corporate identity, people & services' },
      { num: '03', title: 'Content', desc: 'Publish concise, fact-dense documentation and Q&A blocks' },
      { num: '04', title: 'Consensus', desc: 'Secure verified citations across authoritative industry directories' },
      { num: '05', title: 'Retrieval', desc: 'Optimize for Retrieval-Augmented Generation (RAG) pipelines' },
      { num: '06', title: 'Validation', desc: 'Test 100+ prompt variations across commercial buyer queries' },
      { num: '07', title: 'Defense', desc: 'Continuously refresh structured feeds to maintain AI citation dominance' }
    ],
    principles: [
      { title: 'Factual accuracy above all.', desc: 'We only publish verifiable data, case study outcomes, and accredited credentials to prevent algorithmic hallucination.' },
      { title: 'Semantic clarity over keyword density.', desc: 'Modern LLMs prioritize logical clarity, structured lists, and clean definitions over keyword frequency.' },
      { title: 'Independent source corroboration.', desc: 'AI models cross-reference multiple sites before citing; we ensure your business data matches across all digital channels.' },
      { title: 'Direct technical execution.', desc: 'Engineered directly by Prasad Mhaske at Inrank Baner Lab with zero outsourced fluff.' }
    ],
    faqs: [
      { q: 'What is Generative Engine Optimization (GEO)?', a: 'GEO is the science of optimizing digital content so generative AI models like ChatGPT, Perplexity, and Google AI Overviews cite and recommend your brand in conversational answers.' },
      { q: 'How long does AI SEO take to show results?', a: 'For live search tools like Perplexity and Google AI Overviews, optimizations can take effect in 2 to 4 weeks. For foundation model training, updates compound over several months.' },
      { q: 'Does AI SEO replace traditional SEO?', a: 'No, it compounds on top of it. Traditional technical SEO ensures your site is crawled and indexed; AI SEO ensures your data is understood and selected as the definitive answer.' },
      { q: 'What is an Entity Graph?', a: 'An entity graph is a machine-readable map of your company, founders, products, and locations using schema.org markup, enabling AI to understand who you are without guesswork.' },
      { q: 'How much does Inrank\'s AI SEO service cost?', a: 'AI SEO is available as a standalone sprint (₹18,999) or included within our Market Domination package (₹34,999).' }
    ]
  },

  // ─── PILLAR 2: HIGH-PERFORMANCE WEB DEVELOPMENT ─────────────────────────────
  {
    slug: 'custom-website-development',
    name: 'Custom Website Development',
    pillar: 2,
    pillarName: 'High-Performance Web',
    kicker: 'INRANK WEB LAB · CUSTOM WEB ARCHITECTURE PUNE',
    title: 'Engineered for sub-second speed.<br><em>Built to convert visitors into clients.</em>',
    metaTitle: 'Custom Website Development Company in Pune | Next.js & Web Lab | Inrank',
    metaDesc: 'Inrank Technologies builds high-performance custom websites in Baner, Pune. Sub-second load speeds, modern Next.js/React architecture, custom WordPress, and 90+ Lighthouse scores.',
    heroLede: 'Slow, bloated WordPress templates cost Pune businesses over 40% of their prospective leads. Inrank engineers bespoke, lightweight web platforms that load in under 1.2 seconds, showcase premium brand positioning, and guide visitors straight to inquiry.',
    decisionOverline: 'From Slow Templates to Code Velocity',
    decisionTitle: 'Every fast checkout<br>starts with <em>architecture.</em>',
    decisionSteps: [
      { num: '01', title: 'Zero bloated plugins', desc: 'Hand-crafted semantic HTML5, modern CSS, and minimal JavaScript runtimes.' },
      { num: '02', title: 'Sub-second mobile rendering', desc: 'Achieving 90+ Google Lighthouse performance scores on 4G mobile connections.' },
      { num: '03', title: 'Conversion-engineered pathways', desc: 'Frictionless 1-tap WhatsApp inquiries, clean call funnels, and CRM routing.' }
    ],
    frictionKicker: 'The Problem With Traditional Web Agencies',
    frictionTitle: 'The website looks pretty.<br>Why aren\'t people converting?',
    frictionCopy: 'Most Pune web agencies buy a $39 theme, install 45 sluggish plugins, and hand you a slow website that fails Google\'s Core Web Vitals. Your visitors bounce before the first paragraph even renders.',
    outcomes: [
      { forWhom: 'For the Business Owner', title: 'Sub-second speed that closes deals.', desc: 'Position your company as the premium authority in your sector with an ultra-responsive, corporate-grade web portal.' },
      { forWhom: 'For the Marketing Lead', title: 'Zero technical debt or broken plugins.', desc: 'Enjoy reliable, clean code with full control over landing pages, meta tags, and analytics tracking.' },
      { forWhom: 'For the Customer', title: 'Instant loading on mobile devices.', desc: 'Frictionless navigation, legible typography, and instant WhatsApp inquiry triggers.' }
    ],
    tourKicker: 'Engineering Standards',
    tourTitle: 'How Inrank builds modern high-performance web platforms.',
    workflows: [
      {
        q: "Why do custom-coded websites outperform template WordPress sites?",
        kicker: "Lighthouse Performance & Core Web Vitals",
        desc: "Pre-made templates bundle megabytes of unused CSS and JavaScript that choke mobile browsers. Our custom architectures deliver exactly the code required for each view, ensuring sub-second rendering and instant interactivity.",
        decision: "Eliminate third-party page builders and code custom responsive components from scratch.",
        steps: ["Clean Wireframing", "Modular Component Build", "Sub-Second Asset Compression"]
      },
      {
        q: "Can our team easily manage content and publish blogs?",
        kicker: "Intuitive Headless & Custom CMS Architecture",
        desc: "Yes. We configure streamlined admin dashboards (custom WordPress or Headless CMS) where your team can update text, add portfolio items, and publish blogs without touching code or breaking layouts.",
        decision: "Provide a locked-down, user-friendly CMS dashboard tailored to your daily publishing workflow.",
        steps: ["Schema Modeling", "Clean Admin Interface", "Staff Handover & Video Guide"]
      },
      {
        q: "How does site speed affect Google search rankings and Google Ads CAC?",
        kicker: "Core Web Vitals as a Direct Ranking & Quality Factor",
        desc: "Google explicitly penalizes slow websites. Fast sites earn higher Quality Scores in Google Ads (lowering cost-per-click) and higher organic rankings for competitive commercial queries.",
        decision: "Guarantee Core Web Vitals compliance (LCP < 1.2s, CLS < 0.05, INP < 100ms).",
        steps: ["Server Edge Caching", "Critical CSS Inlining", "WebP Image Optimization"]
      },
      {
        q: "Do we own 100% of the code and design assets after launch?",
        kicker: "Total Code Ownership & Freedom",
        desc: "Yes. Inrank does not hold code hostage. You receive the complete source repository, design files, hosting credentials, and documentation with zero recurring software licensing lock-ins.",
        decision: "Full IP and repository transfer upon project completion.",
        steps: ["Final QA Sign-off", "Source Code Handover", "DNS & Hosting Transfer"]
      }
    ],
    equationKicker: 'The Web Performance Equation',
    equationTitle: 'One formula, with its assumptions visible.',
    equation: {
      b1Title: 'Sub-Second Speed',
      b1Val: '0.8s Mobile LCP Load Time',
      sign1: '×',
      b2Title: 'Conversion UX',
      b2Val: '1-Tap Frictionless Inquiries',
      sign2: '=',
      b3Title: 'Commercial ROI',
      b3Val: '2x Higher Lead Conversion Rate'
    },
    equationCopy: 'Every 500ms reduction in load time lifts conversion rates by 8-12%. We engineer speed directly into the foundation.',
    threadKicker: 'Evidence Into Action',
    threadTitle: 'From wireframe to deployment in 7-14 days.',
    threadCopy: 'We run focused, high-velocity engineering sprints with direct milestone sign-offs. No 6-month delays.',
    threadSteps: [
      { num: '01', title: 'Briefing', desc: 'Commercial requirements, buyer personas & conversion goals' },
      { num: '02', title: 'Architecture', desc: 'Wireframing, sitemap planning & technical stack selection' },
      { num: '03', title: 'UI Design', desc: 'High-fidelity Figma prototypes matching Inrank 2.0 standards' },
      { num: '04', title: 'Engineering', desc: 'Semantic HTML5, CSS/Next.js & responsive mobile builds' },
      { num: '05', title: 'Optimization', desc: 'Core Web Vitals tuning, image compression & schema injection' },
      { num: '06', title: 'Testing', desc: 'Cross-browser QA, mobile device testing & security hardening' },
      { num: '07', title: 'Launch', desc: 'DNS propagation, SSL configuration & Google Console indexing' }
    ],
    principles: [
      { title: 'Sub-second speed is non-negotiable.', desc: 'Every website we launch must achieve 90+ Lighthouse performance scores on mobile.' },
      { title: 'Mobile-first, conversion-engineered.', desc: 'Over 70% of your visitors are on smartphones; mobile experience receives primary design focus.' },
      { title: 'Zero hidden retainer lock-ins.', desc: 'Transparent fixed pricing with complete code ownership upon delivery.' },
      { title: 'Direct engineering communication.', desc: 'Speak directly with lead architect Prasad Mhaske throughout your project.' }
    ],
    faqs: [
      { q: 'How long does custom website development take?', a: 'Most custom corporate platforms are delivered within 7 to 14 business days, split into clear milestones: wireframing, design approval, coding, and final QA.' },
      { q: 'Which technologies does Inrank use?', a: 'We specialize in Next.js, React, semantic HTML5/CSS, and custom-engineered WordPress architectures with zero plugin bloat.' },
      { q: 'How much does a custom website cost?', a: 'Our Starter Web Sprint starts at ₹11,999 for local businesses; full corporate platforms and e-commerce portals range from ₹18,999 to ₹34,999.' },
      { q: 'Will the website be optimized for SEO?', a: 'Yes. Every website includes foundational technical SEO: metadata, schema markup, semantic headings, fast load times, and Google Search Console integration.' },
      { q: 'Can you migrate our old content without losing rankings?', a: 'Yes. We map 301 redirects for all legacy URLs to ensure existing Google rankings and traffic are completely preserved.' }
    ]
  },

  // ─── PILLAR 3: PERFORMANCE MARKETING & ADS ───────────────────────────────────
  {
    slug: 'ppc-services',
    name: 'PPC Services & Ad Management',
    pillar: 3,
    pillarName: 'Performance Marketing',
    kicker: 'INRANK PERFORMANCE ADS · HIGH-ROAS ACQUISITION PUNE',
    title: 'Stop wasting budget on clicks.<br><em>Buy qualified customer inquiries.</em>',
    metaTitle: 'PPC Services in Pune | Google Ads & Performance Marketing | Inrank',
    metaDesc: 'High-ROI PPC advertising across Google Search, Performance Max, Meta Ads, and LinkedIn. Inrank engineers profit-first acquisition with transparent attribution.',
    heroLede: 'Most digital agencies manage ad spend to collect their percentage fee. Inrank manages ad spend to maximize your commercial gross margin. We eliminate negative keyword waste, build high-converting landing pages, and optimize for cost-per-qualified-lead.',
    decisionOverline: 'From Burn Rate to Commercial Margin',
    decisionTitle: 'Every profitable lead<br>starts with <em>attribution.</em>',
    decisionSteps: [
      { num: '01', title: 'Eliminate wasted search queries', desc: 'Aggressive negative keyword sculpting to stop paying for student and job-seeker clicks.' },
      { num: '02', title: 'Conversion-engineered landing pages', desc: 'Dedicated sub-second landing pages built specifically to match campaign search intent.' },
      { num: '03', title: 'End-to-end CRM lead tracking', desc: 'Tracking which keywords generate genuine closed revenue, not just soft website visits.' }
    ],
    frictionKicker: 'The Paid Search Money Pit',
    frictionTitle: 'The ad budget is spent.<br>Where are the paying customers?',
    frictionCopy: 'Generic agencies set up broad match campaigns, let Google AI spend your daily budget on irrelevant search terms, and report high click counts while your phone never rings.',
    outcomes: [
      { forWhom: 'For the Business Owner', title: 'Predictable Customer Acquisition Cost (CAC).', desc: 'Know exactly how many rupees of ad spend are required to generate one qualified customer transaction.' },
      { forWhom: 'For the Sales Team', title: 'Pre-qualified, high-intent leads.', desc: 'Receive inquiries from prospects with verified budgets, legitimate phone numbers, and urgent purchase requirements.' },
      { forWhom: 'For the Marketing Budget', title: 'Zero budget leakage on waste terms.', desc: 'Every rupee spent is attributed directly to high-intent buyer searches in Pune and target export regions.' }
    ],
    tourKicker: 'Performance Architecture',
    tourTitle: 'How Inrank engineers profitable paid acquisition.',
    workflows: [
      {
        q: "Why do our current Google Ads generate clicks but zero qualified leads?",
        kicker: "Intent Mismatch & Broad Match Leakage",
        desc: "Google defaults campaigns to broad match, triggering ads for free tutorials, job queries, and DIY searches. We restrict campaigns to exact and phrase match intent, backed by 500+ localized negative keywords.",
        decision: "Audit search term reports and prune 30-50% of wasted spend in the first 48 hours.",
        steps: ["Search Query Audit", "Negative Keyword Injection", "Intent-Focused Match Types"]
      },
      {
        q: "Why do we need dedicated landing pages instead of sending ad traffic to the homepage?",
        kicker: "Message Match & Conversion Velocity",
        desc: "Homepages have too many distractions (links, menus, multiple services). A dedicated landing page maintains 100% message match with the ad copy, eliminating friction and boosting conversion rates by 3x.",
        decision: "Deploy custom sub-second landing pages with 1-step quotation forms for every ad group.",
        steps: ["Message Match Wireframe", "Sub-Second Page Build", "A/B Testing Funnel"]
      },
      {
        q: "How do you track whether leads turn into actual paying customers?",
        kicker: "Offline Conversion Tracking & CRM Sync",
        desc: "We configure Google Ads Enhanced Conversions and sync lead data back to your CRM or WhatsApp business channel so bidding algorithms optimize for closed deals rather than spam form fills.",
        decision: "Deploy server-side GTM tracking and offline conversion import.",
        steps: ["Server-Side GTM", "Enhanced Conversions", "CRM Revenue Attribution"]
      },
      {
        q: "What is an acceptable ROAS (Return on Ad Spend) for our industry?",
        kicker: "Unit Economics & Margin Engineering",
        desc: "We model your customer lifetime value (LTV) and gross margins to calculate target CAC. Across our Pune client portfolio, our campaigns average 4.8x ROAS across high-ticket B2B and direct services.",
        decision: "Set strict bidding caps tied to actual gross profit margins.",
        steps: ["Margin Modeling", "Target CPA Bidding", "Weekly Budget Re-Allocation"]
      }
    ],
    equationKicker: 'The Honest Paid Growth Equation',
    equationTitle: 'One formula, with its assumptions visible.',
    equation: {
      b1Title: 'Total Ad Spend',
      b1Val: 'Google + Meta + Retargeting Budget',
      sign1: '÷',
      b2Title: 'Qualified Leads',
      b2Val: 'Genuine Commercial Inquiries',
      sign2: '=',
      b3Title: 'Target Metric',
      b3Val: 'Lowest Valid Cost-Per-Acquisition (CPA)'
    },
    equationCopy: 'We track the fully loaded cost of acquisition, including ad spend and platform fees, so your profit margins remain protected.',
    threadKicker: 'Evidence Into Action',
    threadTitle: 'Continuous optimization rhythm, not set-and-forget.',
    threadCopy: 'We audit search queries daily, test ad creatives weekly, and optimize bidding algorithms to compound return on investment.',
    threadSteps: [
      { num: '01', title: 'Audit', desc: 'Identify wasted budget, negative keywords & tracking leaks' },
      { num: '02', title: 'Re-Structure', desc: 'Re-organize campaigns into high-intent thematic ad groups' },
      { num: '03', title: 'Landing Pages', desc: 'Deploy high-velocity landing pages with 1-click inquiry funnels' },
      { num: '04', title: 'Launch', desc: 'Deploy Google Search, PMax & Meta retargeting campaigns' },
      { num: '05', title: 'Prune', desc: 'Daily negative keyword exclusions to eliminate low-quality clicks' },
      { num: '06', title: 'Attribute', desc: 'Track qualified phone calls, WhatsApp leads & closed contracts' },
      { num: '07', title: 'Scale', desc: 'Re-invest budget into top-performing keywords and audiences' }
    ],
    principles: [
      { title: 'Profit margins dictate ad spend.', desc: 'We only scale campaigns when the unit economics and gross margins prove commercially viable.' },
      { title: 'Zero hidden agency markups on media.', desc: 'You pay Google and Meta directly on your corporate credit card; we never hide ad spend markups.' },
      { title: 'Dedicated landing pages for every campaign.', desc: 'We never dump expensive paid ad traffic onto generic, slow homepages.' },
      { title: 'Direct senior management.', desc: 'Campaigns managed directly by senior acquisition engineers, not automated agency software.' }
    ],
    faqs: [
      { q: 'How much budget do we need to start Google Ads in Pune?', a: 'We typically recommend a minimum ad spend of ₹15,000 to ₹30,000 per month for local campaigns to gather statistical significance within the first 14 days.' },
      { q: 'How quickly can campaigns go live?', a: 'After the initial audit and landing page build, campaigns typically launch within 3 to 5 business days.' },
      { q: 'Do you manage both Google Ads and Meta Ads?', a: 'Yes. We manage full-funnel acquisition: capturing search intent on Google and retargeting engaged prospects on Instagram, Facebook, and LinkedIn.' },
      { q: 'Who owns the Google Ads account?', a: 'You retain 100% ownership of your Google Ads and Meta Ads accounts. All data, negative keyword lists, and history remain yours.' },
      { q: 'What are Inrank\'s management fees?', a: 'We offer fixed sprint management starting at ₹11,999/month, ensuring you always know your exact monthly investment with zero percentage-of-spend surprises.' }
    ]
  },

  // ─── PILLAR 4: BRAND IDENTITY & CRO ──────────────────────────────────────────
  {
    slug: 'ui-ux-design-services',
    name: 'UI/UX Design Services',
    pillar: 4,
    pillarName: 'Brand & CRO Optimization',
    kicker: 'INRANK DESIGN LAB · BEHAVIORAL INTERFACES PUNE',
    title: 'Interfaces built for clarity.<br><em>Designed to turn attention into action.</em>',
    metaTitle: 'UI UX Design Services in Pune | Web & Mobile Product Design | Inrank',
    metaDesc: 'Inrank Technologies provides high-converting UI/UX design services in Baner, Pune. User research, Figma design systems, mobile app UX, and conversion rate optimization.',
    heroLede: 'Great UI/UX design is not about superficial decorative graphics. It is about cognitive ergonomics—making complex software, web portals, and checkouts effortlessly intuitive for human users so they convert with zero hesitation.',
    decisionOverline: 'From Friction to Fluidity',
    decisionTitle: 'Every seamless checkout<br>starts with <em>clarity.</em>',
    decisionSteps: [
      { num: '01', title: 'Eliminate cognitive overload', desc: 'Streamline visual hierarchy and focus user attention on high-value action triggers.' },
      { num: '02', title: 'Mobile-first ergonomics', desc: 'Design for natural thumb zones, clear button affordance, and frictionless inputs.' },
      { num: '03', title: 'Component design systems', desc: 'Build scalable, reusable Figma libraries that developers can implement without guesswork.' }
    ],
    frictionKicker: 'Where Typical Designers Miss the Mark',
    frictionTitle: 'The mockup looks beautiful.<br>Why do users struggle to use it?',
    frictionCopy: 'Designers often create flashy Dribbble concepts with illegible contrast, tiny fonts, and confusing navigation. Real users get frustrated and abandon the site before finding what they need.',
    outcomes: [
      { forWhom: 'For the Product Owner', title: 'Accelerated development velocity.', desc: 'Hand developers pixel-perfect Figma design tokens and interactive prototypes that eliminate costly rework.' },
      { forWhom: 'For the End User', title: 'Effortless, intuitive task completion.', desc: 'Users accomplish their goals—booking an appointment, requesting a quote, or completing an order—without friction.' },
      { forWhom: 'For the Business', title: 'Measurable conversion rate lift.', desc: 'Every redesign is judged by conversion lift, lower bounce rates, and increased session engagement.' }
    ],
    tourKicker: 'Design Methodology',
    tourTitle: 'How Inrank crafts conversion-engineered interfaces.',
    workflows: [
      {
        q: "How do you identify why visitors are dropping off our current website?",
        kicker: "Behavioral Audits & Heatmap Analysis",
        desc: "We analyze user session recordings, scroll heatmaps, and funnel drop-off points to identify visual friction, confusing form fields, and hidden calls to action.",
        decision: "Restructure information hierarchy to present key value propositions above the fold.",
        steps: ["Heatmap & Drop-off Review", "Information Architecture Audit", "Friction Point Mapping"]
      },
      {
        q: "What deliverables do we receive at the end of a design sprint?",
        kicker: "Complete Figma Design System & Tokens",
        desc: "You receive responsive desktop and mobile Figma prototypes, auto-layout components, typography scales, color palettes, micro-interactions, and developer export specs.",
        decision: "Provide an organized, developer-ready Figma design system.",
        steps: ["Wireframe Sign-off", "Component System Creation", "Developer Handover Specs"]
      },
      {
        q: "How do you balance aesthetic elegance with conversion rate optimization?",
        kicker: "Cognitive Design & Visual Hierarchy",
        desc: "We combine minimalist Swiss typography, generous whitespace, and high-contrast primary buttons. Beauty comes from restraint and precision, not visual clutter.",
        decision: "Use disciplined visual hierarchy where primary actions stand out uncontested.",
        steps: ["Visual Weight Balancing", "Micro-Copy Optimization", "Contrast Ratio Verification"]
      },
      {
        q: "Can you redesign existing web apps or SaaS dashboards?",
        kicker: "Enterprise Dashboard & Complex UX Simplification",
        desc: "Yes. We specialize in untangling complex B2B workflows, dense data tables, and multi-step customer portals into clear, productive user interfaces.",
        decision: "Map user jobs-to-be-done and eliminate redundant clicks.",
        steps: ["Workflow Decomposition", "Data Table Redesign", "Interactive Prototyping"]
      }
    ],
    equationKicker: 'The UX Conversion Equation',
    equationTitle: 'One formula, with its assumptions visible.',
    equation: {
      b1Title: 'Intuitive Navigation',
      b1Val: 'Zero Cognitive Friction',
      sign1: '×',
      b2Title: 'Clear Affordance',
      b2Val: 'Unambiguous Call-to-Action',
      sign2: '=',
      b3Title: 'Product Outcome',
      b3Val: 'Highest User Task Completion Rate'
    },
    equationCopy: 'We test interfaces against actual user completion times to ensure zero hesitation.',
    threadKicker: 'Evidence Into Action',
    threadTitle: 'Structured design sprints with zero guesswork.',
    threadCopy: 'Our design sprints follow a proven 7-step progression from user empathy to production-ready design systems.',
    threadSteps: [
      { num: '01', title: 'Discovery', desc: 'User goals, commercial objectives & competitor UX benchmarks' },
      { num: '02', title: 'User Flows', desc: 'Journey maps, decision trees & content hierarchy architecture' },
      { num: '03', title: 'Wireframing', desc: 'Low-fidelity layout validation focusing on functionality' },
      { num: '04', title: 'Design System', desc: 'Color tokens, typography scales, spacing & component libraries' },
      { num: '05', title: 'High-Fidelity', desc: 'Pixel-perfect responsive screen designs for desktop and mobile' },
      { num: '06', title: 'Prototyping', desc: 'Interactive clickable Figma flows for stakeholder walkthrough' },
      { num: '07', title: 'Handover', desc: 'Developer design specs, asset export & front-end implementation QA' }
    ],
    principles: [
      { title: 'Clarity over cleverness.', desc: 'An interface should explain itself instantly; users should never have to wonder what happens next.' },
      { title: 'Accessibility by default.', desc: 'High-contrast text, legible font scales, and accessible touch targets conform to WCAG standards.' },
      { title: 'Component-driven scalability.', desc: 'All screens are built using reusable Figma components that scale seamlessly with your engineering team.' },
      { title: 'Prasad Mhaske oversight.', desc: 'Every design system is reviewed for conversion fidelity by senior leadership.' }
    ],
    faqs: [
      { q: 'What design tools does Inrank use?', a: 'We work primarily in Figma, producing cloud-collaborative files with auto-layout, interactive prototypes, and developer inspect modes.' },
      { q: 'How long does a UI/UX redesign sprint take?', a: 'A standard website or landing page UI/UX sprint takes 5 to 10 business days. Complex web apps or SaaS dashboards range from 2 to 3 weeks.' },
      { q: 'Do you also handle the front-end coding?', a: 'Yes. Inrank has an in-house engineering team that can translate Figma designs directly into pixel-perfect Next.js, React, or custom HTML/CSS.' },
      { q: 'Can we test the designs before writing code?', a: 'Yes. We provide interactive, clickable Figma prototypes so you can click through every user journey on your phone and desktop before development begins.' },
      { q: 'How much do UI/UX design services cost?', a: 'Design sprints start at ₹11,999 for key conversion funnels; comprehensive multi-page corporate redesigns start at ₹18,999.' }
    ]
  }
];

// Read the template generator helper
function generateEcosystemServicePage(s) {
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
  <title>${s.metaTitle}</title>
  <meta name="description" content="${s.metaDesc}" />
  <link rel="canonical" href="https://www.inranktech.com/services/${s.slug}.html" />
  <link rel="icon" type="image/svg+xml" href="/img/inrank-white-logo.svg" />

  <!-- Google Fonts: Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

  <!-- Master Stylesheets -->
  <link rel="stylesheet" href="/css/nav.css" />
  <link rel="stylesheet" href="/css/service-ecosystem.css" />
  <link rel="stylesheet" href="/css/corporate.css" />
  <link rel="stylesheet" href="/css/footer-social.css" />

  <!-- Schema.org Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.inranktech.com/services/${s.slug}.html#service",
        "name": "${s.name}",
        "serviceType": "${s.name}",
        "provider": {
          "@type": "Organization",
          "name": "Inrank Technologies",
          "url": "https://www.inranktech.com",
          "logo": "https://www.inranktech.com/img/inrank-white-logo.svg",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Baner Road, Near Balewadi High Street",
            "addressLocality": "Pune",
            "postalCode": "411045",
            "addressRegion": "Maharashtra",
            "addressCountry": "IN"
          },
          "telephone": "+918788823182"
        },
        "areaServed": ["Pune", "Baner", "Hinjewadi", "Shivaji Nagar", "PCMC", "Maharashtra"],
        "description": "${s.metaDesc.replace(/"/g, '&quot;')}"
      }
    ]
  }
  </script>
</head>
<body class="theme-ecosystem">
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WLZ75BS8" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

  <div id="scroll-bar" role="progressbar" aria-label="Page reading progress" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>

  <!-- Skip Link for Accessibility -->
  <a class="skip-link" href="#main">Skip to main content</a>

  <!-- Vinove 2.0 Floating Dock Navigation -->
  <header id="nav" class="nav-dock" role="banner">
    <div class="nav-bar">
      <!-- Inrank Brand Logo -->
      <a href="/" class="nav-logo" aria-label="Inrank Technologies Home">
        <img src="/img/inrank-white-logo.svg" alt="Inrank Technologies" width="36" height="36" class="logo-icon" />
        <div class="nav-logo-brand">
          <span class="nav-logo-name">Inrank</span>
          <span class="nav-logo-sub">Technologies</span>
        </div>
      </a>

      <!-- Desktop Links -->
      <nav class="nav-links" aria-label="Main Navigation">
        <!-- Services Mega Dropdown -->
        <div class="nav-item" data-dropdown="services">
          <button class="nav-link nav-link--drop is-current" aria-expanded="false" aria-haspopup="true">
            <span>Services</span>
            <svg class="nav-chev" viewBox="0 0 12 12" width="12" height="12"><path d="M2.5 4.5L6 8L9.5 4.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
          </button>
          <div class="nav-drop drop-mega" role="region" aria-label="Services Directory">
            <div class="mega-grid-wrap">
              <div class="mega-rail">
                <span class="mega-rail-eyebrow">Digital Capabilities</span>
                <p class="mega-rail-title">Full-Stack Growth Engineering</p>
                <p class="mega-rail-text">We replace fragmented agencies with an accountable, high-performance growth engineering partner.</p>
                <a href="/services.html" class="mega-rail-cta">
                  <span>Explore all 27 services</span>
                  <svg viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 11L11 1M11 1H4M11 1V8"/></svg>
                </a>
              </div>
              <div class="mega-cards">
                <a href="/services/seo-company-pune.html" class="mega-co ${s.pillar === 1 ? 'is-active' : ''}" style="--co:#009d49">
                  <span class="mega-co-logo">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                  </span>
                  <span class="mega-co-text">
                    <span class="mega-co-name">Search &amp; AI Discovery</span>
                    <span class="mega-co-tag">SEO in Pune, GEO &amp; Google 3-Pack</span>
                  </span>
                  <svg class="mega-co-arr" viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 11L11 1M11 1H4M11 1V8"/></svg>
                </a>
                <a href="/services/custom-website-development.html" class="mega-co ${s.pillar === 2 ? 'is-active' : ''}" style="--co:#102138">
                  <span class="mega-co-logo">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                  </span>
                  <span class="mega-co-text">
                    <span class="mega-co-name">High-Performance Web</span>
                    <span class="mega-co-tag">Custom Next.js, WordPress &amp; E-Commerce</span>
                  </span>
                  <svg class="mega-co-arr" viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 11L11 1M11 1H4M11 1V8"/></svg>
                </a>
                <a href="/services/ppc-services.html" class="mega-co ${s.pillar === 3 ? 'is-active' : ''}" style="--co:#047857">
                  <span class="mega-co-logo">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </span>
                  <span class="mega-co-text">
                    <span class="mega-co-name">Performance Marketing</span>
                    <span class="mega-co-tag">Google Ads, Meta &amp; High-ROI Funnels</span>
                  </span>
                  <svg class="mega-co-arr" viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 11L11 1M11 1H4M11 1V8"/></svg>
                </a>
                <a href="/services/ui-ux-design-services.html" class="mega-co ${s.pillar === 4 ? 'is-active' : ''}" style="--co:#081424">
                  <span class="mega-co-logo">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg>
                  </span>
                  <span class="mega-co-text">
                    <span class="mega-co-name">Brand &amp; CRO Optimization</span>
                    <span class="mega-co-tag">UI/UX, Brand Identity &amp; Conversions</span>
                  </span>
                  <svg class="mega-co-arr" viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 11L11 1M11 1H4M11 1V8"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <a href="/pricing.html" class="nav-link">Pricing</a>
        <a href="/our-work.html" class="nav-link">Our Work</a>
        <a href="/case-studies.html" class="nav-link">Case Studies</a>

        <!-- About Dropdown -->
        <div class="nav-item" data-dropdown="about">
          <button class="nav-link nav-link--drop" aria-expanded="false">
            <span>About</span>
            <svg class="nav-chev" viewBox="0 0 12 12" width="12" height="12"><path d="M2.5 4.5L6 8L9.5 4.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
          </button>
          <div class="nav-drop drop-simple" role="region" aria-label="About Inrank">
            <div class="mega-grid-wrap">
              <div class="simple-cards">
                <a href="/about.html" class="drop-row">
                  <span class="drop-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </span>
                  <span class="drop-row-text">
                    <span class="drop-name">Leadership &amp; Founder</span>
                    <span class="drop-desc">Prasad Mhaske and our Baner Engineering Lab.</span>
                  </span>
                </a>
                <a href="/about.html#operating-model" class="drop-row">
                  <span class="drop-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m10 15 5-3-5-3v6Z"/></svg>
                  </span>
                  <span class="drop-row-text">
                    <span class="drop-name">The Inrank Standard</span>
                    <span class="drop-desc">5-7 day sprints, transparent fixed pricing.</span>
                  </span>
                </a>
                <a href="/about.html#baner-lab" class="drop-row">
                  <span class="drop-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  </span>
                  <span class="drop-row-text">
                    <span class="drop-name">Baner, Pune Office</span>
                    <span class="drop-desc">Direct technical consultation on FC Road / Baner.</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <a href="/contact.html" class="nav-link">Contact</a>
      </nav>

      <!-- CTA -->
      <a href="/contact.html" class="nav-cta">Book Consultation</a>

      <!-- Mobile Hamburger -->
      <button id="nav-burger" class="nav-burger" aria-label="Open mobile menu" aria-expanded="false" aria-controls="mob">
        <span class="nav-burger-box" aria-hidden="true"><span></span><span></span><span></span></span>
      </button>
    </div>
  </header>

  <!-- Mobile Drawer Menu -->
  <div id="mob" aria-hidden="true">
    <div class="mob-hd">
      <a href="/" class="mob-logo" aria-label="Inrank Technologies">
        <img src="/img/inrank-white-logo.svg" alt="Inrank Technologies" width="32" height="32" class="logo-icon" />
        <div class="nav-logo-brand">
          <span class="nav-logo-name">Inrank</span>
          <span class="nav-logo-sub">Technologies</span>
        </div>
      </a>
      <button id="mob-x" class="mob-x" aria-label="Close menu">✕</button>
    </div>
    <nav class="mob-body">
      <a href="/services.html" class="mob-link">All 27 Services</a>
      <a href="/pricing.html" class="mob-link">Pricing Packages</a>
      <a href="/our-work.html" class="mob-link">Our Work</a>
      <a href="/case-studies.html" class="mob-link">Case Studies</a>
      <a href="/about.html" class="mob-link">About Inrank</a>
      <a href="/contact.html" class="mob-link">Contact</a>
      <a href="/contact.html" class="mob-cta">Request Strategy Consultation</a>
    </nav>
  </div>

  <main id="main">
    
    <!-- ══════════════════════════════════════════════════════════════════
         1. HERO SECTION (VINOVE BOND/PRISM DUAL GRID)
         ══════════════════════════════════════════════════════════════════ -->
    <section class="eco-hero" aria-labelledby="hero-title">
      <div class="eco-shell eco-hero-grid">
        
        <!-- Left: Hero Hook & Direct Actions -->
        <div>
          <nav style="display:flex;align-items:center;gap:8px;font-size:0.8rem;color:#94a3b8;margin-bottom:1.5rem;" aria-label="Breadcrumb">
            <a href="/" style="color:#94a3b8;text-decoration:none;">Home</a>
            <span>/</span>
            <a href="/services.html" style="color:#94a3b8;text-decoration:none;">Services</a>
            <span>/</span>
            <span style="color:#ffffff;font-weight:700;">${s.name}</span>
          </nav>

          <span class="eco-kicker">${s.kicker}</span>
          <h1 class="eco-title" id="hero-title">
            ${s.title}
          </h1>
          <p class="eco-hero-lede">
            ${s.heroLede}
          </p>

          <div class="eco-actions">
            <a class="eco-button" href="/contact.html">
              <span>Book Strategy Consultation</span>
              <span aria-hidden="true">↗</span>
            </a>
            <a class="eco-text-link" href="#service-tour">
              <span>Explore The Blueprint ↓</span>
            </a>
          </div>

          <p class="eco-availability">
            ⚡ Engineered &amp; executed directly by Inrank Baner Lab. Transparent fixed pricing from ₹11,999.
          </p>
        </div>

        <!-- Right: Decision Framework Card (Vinove Signature) -->
        <div class="eco-decision" aria-label="${s.name} Decision Framework">
          <p class="eco-overline">${s.decisionOverline}</p>
          <h2>${s.decisionTitle}</h2>
          <ol>
            ${s.decisionSteps.map(st => `
            <li>
              <span>${st.num}</span>
              <div>
                <strong>${st.title}</strong>
                <p>${st.desc}</p>
              </div>
            </li>`).join('')}
          </ol>
          <p class="eco-diagram-note">Engineered framework · 100% verified outcomes</p>
        </div>

      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════════════
         2. STAKEHOLDER OUTCOMES & FRICTION (VINOVE OUTCOMES)
         ══════════════════════════════════════════════════════════════════ -->
    <section class="eco-section" aria-labelledby="friction-title">
      <div class="eco-shell">
        
        <div class="eco-intro-head">
          <div>
            <span class="eco-kicker">${s.frictionKicker}</span>
            <h2 class="eco-heading" id="friction-title">
              ${s.frictionTitle}
            </h2>
          </div>
          <p class="eco-copy">
            ${s.frictionCopy}
          </p>
        </div>

        <div class="eco-outcomes">
          ${s.outcomes.map(o => `
          <article>
            <span>${o.forWhom}</span>
            <h3>${o.title}</h3>
            <p>${o.desc}</p>
          </article>`).join('')}
        </div>

      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════════════
         3. PRACTICE TOUR & WORKFLOWS (VINOVE BOND STYLE)
         ══════════════════════════════════════════════════════════════════ -->
    <section class="eco-section product-tour" id="service-tour" aria-labelledby="tour-title">
      <div class="eco-shell">
        
        <div class="tour-heading">
          <div>
            <span class="eco-kicker">${s.tourKicker}</span>
            <h2 class="eco-heading" id="tour-title">
              ${s.tourTitle}
            </h2>
          </div>
          <p class="eco-copy">
            Open a workflow below to inspect how Inrank approaches technical diagnosis, execution standards, and measurable commercial outcomes.
          </p>
        </div>

        <div class="eco-workflows">
          ${s.workflows.map((w, idx) => `
          <details ${idx === 0 ? 'open' : ''}>
            <summary>
              <span class="eco-step">0${idx + 1}</span>
              <h3>${w.q}</h3>
              <span class="eco-expand" aria-hidden="true">+</span>
            </summary>
            <div class="eco-workflow-body">
              <div>
                <span class="eco-kicker">${w.kicker}</span>
                <p>${w.desc}</p>
                <div class="eco-decision-line">
                  <strong>The Decision</strong>
                  ${w.decision}
                </div>
              </div>
              <ol class="eco-process">
                ${w.steps.map(step => `<li>${step}</li>`).join('')}
              </ol>
            </div>
          </details>`).join('')}
        </div>

      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════════════
         4. THE HONEST PERFORMANCE EQUATION (VINOVE PRISM STYLE)
         ══════════════════════════════════════════════════════════════════ -->
    <section class="eco-section" aria-labelledby="equation-title">
      <div class="eco-shell">
        <span class="eco-kicker">${s.equationKicker}</span>
        <h2 class="eco-heading" id="equation-title">${s.equationTitle}</h2>
        
        <div class="equation" aria-label="Performance Equation">
          <div class="equation-block">
            <span>${s.equation.b1Title}</span>
            <strong>${s.equation.b1Val}</strong>
          </div>
          <div class="equation-sign">${s.equation.sign1}</div>
          <div class="equation-block">
            <span>${s.equation.b2Title}</span>
            <strong>${s.equation.b2Val}</strong>
          </div>
          <div class="equation-sign">${s.equation.sign2}</div>
          <div class="equation-block">
            <span>${s.equation.b3Title}</span>
            <strong>${s.equation.b3Val}</strong>
          </div>
        </div>

        <p class="eco-copy" style="margin-top:2rem;">
          ${s.equationCopy}
        </p>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════════════
         5. EXECUTION THREAD (.thread-map) (VINOVE PRISM SIGNATURE)
         ══════════════════════════════════════════════════════════════════ -->
    <section class="eco-section eco-dark" aria-labelledby="thread-title">
      <div class="eco-shell">
        
        <div class="thread-head">
          <div>
            <span class="eco-kicker">${s.threadKicker}</span>
            <h2 class="eco-heading" id="thread-title">
              ${s.threadTitle}
            </h2>
          </div>
          <p class="eco-copy">
            ${s.threadCopy}
          </p>
        </div>

        <div class="thread-map">
          ${s.threadSteps.map(ts => `
          <article class="thread-step">
            <span>${ts.num}</span>
            <div>
              <h3>${ts.title}</h3>
              <small>${ts.desc}</small>
            </div>
          </article>`).join('')}
        </div>

      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════════════
         6. TRUST & PRINCIPLES (.principles-grid)
         ══════════════════════════════════════════════════════════════════ -->
    <section class="eco-section" aria-labelledby="principles-title">
      <div class="eco-shell principles-grid">
        
        <div>
          <span class="eco-kicker">Engineering Principles</span>
          <h2 class="eco-heading" id="principles-title">
            A useful strategy shows its working.
          </h2>
          <p class="eco-copy">
            We maintain total transparency in our operations so your leadership team can verify every optimization before deploying it.
          </p>
        </div>

        <div class="principle-list">
          ${s.principles.map(p => `
          <article class="principle">
            <div>
              <h3>${p.title}</h3>
              <p>${p.desc}</p>
            </div>
          </article>`).join('')}
        </div>

      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════════════
         7. CLEAR ANSWERS (FAQ) (.answer-grid)
         ══════════════════════════════════════════════════════════════════ -->
    <section class="eco-section eco-answer-section" aria-labelledby="faq-title" style="background:#ffffff;border-top:1px solid var(--eco-line);border-bottom:1px solid var(--eco-line);">
      <div class="eco-shell answer-grid">
        
        <div>
          <span class="eco-kicker">${s.name}, Clearly Answered</span>
          <h2 class="eco-heading" id="faq-title">
            Questions leaders ask before beginning a sprint.
          </h2>
          <p class="eco-copy">
            Everything you need to know about timelines, deliverables, commercial guarantees, and operating methods.
          </p>
        </div>

        <div class="answer-list">
          ${s.faqs.map((f, i) => `
          <details ${i === 0 ? 'open' : ''}>
            <summary>
              ${f.q}
              <span aria-hidden="true">+</span>
            </summary>
            <p>${f.a}</p>
          </details>`).join('')}
        </div>

      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════════════
         8. CLOSING DUAL ACTION CARDS (VINOVE SIGNATURE)
         ══════════════════════════════════════════════════════════════════ -->
    <section class="eco-section eco-close" aria-labelledby="close-title">
      <div class="eco-shell">
        <span class="eco-kicker" style="color:var(--eco-signal)">Next Steps</span>
        <h2 class="eco-heading" id="close-title" style="color:#ffffff;">
          Ready to engineer ${s.name} for your brand?
        </h2>

        <div class="eco-close-grid">
          <div class="eco-close-card dark">
            <div>
              <h3>Request a Free Technical Audit</h3>
              <p>Receive a comprehensive diagnostic report analyzing your current digital footprint, speed, and market opportunities in Pune.</p>
            </div>
            <a href="/contact.html" class="btn">
              <span>Book Strategy Consultation</span>
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
            </a>
          </div>

          <div class="eco-close-card light">
            <div>
              <h3>Speak Directly With an Engineer</h3>
              <p>Schedule a 30-minute direct technical consultation with Prasad Mhaske at our Baner lab or over WhatsApp.</p>
            </div>
            <a href="https://wa.me/918788823182" target="_blank" rel="noopener noreferrer" class="btn">
              <span>Message on WhatsApp (+91 87888 23182)</span>
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
            </a>
          </div>
        </div>

      </div>
    </section>

  </main>

  <!-- Corporate Footer -->
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
          <a href="/contact.html">Contact</a>
        </div>
      </div>
    </div>
  </footer>

  <script src="/js/core.js"></script>
</body>
</html>`;
}

// Generate the services
servicesData.forEach(s => {
  const filePath = path.join('inrank2.0/services', `${s.slug}.html`);
  fs.writeFileSync(filePath, generateEcosystemServicePage(s), 'utf8');
  console.log(`Generated Vinove Ecosystem Service Page: ${filePath}`);
});

console.log(`Batch 1: ${servicesData.length} core services successfully built in Vinove Bond/Prism UI!`);
