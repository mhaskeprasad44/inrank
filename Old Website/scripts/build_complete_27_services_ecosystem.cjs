const fs = require('fs');
const path = require('path');

// Master configurations for all 27 Inrank services
// Categorized by Inrank's 4 core growth pillars
const pillarConfig = {
  1: { id: 1, name: 'Search & AI Discovery', color: '#009d49', icon: 'search' },
  2: { id: 2, name: 'High-Performance Web', color: '#102138', icon: 'code' },
  3: { id: 3, name: 'Performance Marketing', color: '#047857', icon: 'trending-up' },
  4: { id: 4, name: 'Brand & CRO Optimization', color: '#081424', icon: 'sparkles' }
};

const allServices = [
  // ─── PILLAR 1: SEARCH & AI DISCOVERY ─────────────────────────────────────────
  {
    slug: 'seo-company-pune',
    name: 'SEO Company in Pune',
    pillar: 1,
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

  {
    slug: 'geo-seo-agency',
    name: 'GEO SEO Agency',
    pillar: 1,
    kicker: 'INRANK GEO · GENERATIVE ENGINE OPTIMIZATION PUNE',
    title: 'Win generative search.<br><em>Be the recommended answer in Perplexity & ChatGPT.</em>',
    metaTitle: 'GEO SEO Agency in Pune | Generative Engine Optimization | Inrank',
    metaDesc: 'Specialized Generative Engine Optimization (GEO) agency in Baner, Pune. We engineer structured entity schemas and citations to win recommendations in ChatGPT and Perplexity.',
    heroLede: 'Generative Search is replacing blue links. When potential buyers query AI engines for recommendations, our GEO engineering ensures your company is presented as the primary solution with factual citations and links.',
    decisionOverline: 'From Blue Links to AI Consensus',
    decisionTitle: 'Every AI answer<br>relies on <em>structured evidence.</em>',
    decisionSteps: [
      { num: '01', title: 'Structure entity schemas', desc: 'Deploy nested JSON-LD graphs detailing products, reviews, and corporate hierarchy.' },
      { num: '02', title: 'Publish concise factual summaries', desc: 'Answer core commercial intent with precise, extractable data snippets.' },
      { num: '03', title: 'Corroborate external signals', desc: 'Synchronize citations across credible industry platforms and knowledge hubs.' }
    ],
    frictionKicker: 'The AI Search Shift',
    frictionTitle: 'Traditional SEO ranks links.<br>Who is answering the user\'s prompt?',
    frictionCopy: 'Users are asking multi-condition prompts: "Find me a packaging manufacturer in Pune with under 5-day delivery and ISO certification." If your data is not semantically structured, you will be invisible in AI answers.',
    outcomes: [
      { forWhom: 'For Business Owners', title: 'Direct AI referrals and endorsements.', desc: 'Position your business as the vetted, consensus recommendation in conversational search tools.' },
      { forWhom: 'For Marketing Directors', title: 'Preempt the zero-click search trend.', desc: 'Secure brand citations where searchers spend their attention without leaving the chat interface.' },
      { forWhom: 'For Competitive Strategy', title: 'Outposition legacy market incumbents.', desc: 'Displace slower legacy competitors whose websites lack machine-readable entity semantics.' }
    ],
    tourKicker: 'GEO Architecture',
    tourTitle: 'How we engineer Generative Engine Optimization.',
    workflows: [
      {
        q: "What exact factors do Perplexity and Gemini use to rank citations?",
        kicker: "RAG Retrieval & Domain Consensus",
        desc: "Retrieval-Augmented Generation (RAG) models search live indexes for authoritative documents matching the prompt. They prioritize clear headings, bulleted technical specs, and verified third-party references.",
        decision: "Re-architect core landing pages into semantic Q&A and technical specification formats.",
        steps: ["Audit Prompt Queries", "Inject Technical Spec Tables", "Verify Perplexity Citation"]
      },
      {
        q: "How does GEO protect our brand from algorithmic hallucination?",
        kicker: "Canonical Data & Knowledge Ingestion",
        desc: "When AI lacks clear data about a company, it guesses or cites competitors. By publishing unambiguous canonical data feeds, we instruct AI exactly what your company does, where it operates, and how much it charges.",
        decision: "Publish canonical Organization and Service schemas with unambiguous property values.",
        steps: ["Map Canonical Facts", "Disavow Inaccurate Profiles", "Monitor Prompt Responses"]
      },
      {
        q: "Can GEO generate direct commercial leads?",
        kicker: "High-Intent Conversational Traffic",
        desc: "Yes. Searchers who use Perplexity and ChatGPT for commercial recommendations have high intent. When cited as the primary recommendation, these users click through directly to booking forms.",
        decision: "Add dedicated tracking parameters to citation links to monitor lead flow.",
        steps: ["Deploy UTM Trackers", "Analyze Prompt Variations", "Optimize Conversion Paths"]
      },
      {
        q: "How does Inrank test GEO performance?",
        kicker: "Empirical Prompt Simulation",
        desc: "We run weekly automated prompt testing across 50+ localized Pune commercial queries to track brand presence, recommendation order, and citation accuracy.",
        decision: "Deliver transparent prompt audit reports showing exact model outputs.",
        steps: ["Run Prompt Matrix", "Record Citation Share", "Iterate Content Gaps"]
      }
    ],
    equationKicker: 'The GEO Revenue Equation',
    equationTitle: 'One formula, with its assumptions visible.',
    equation: {
      b1Title: 'Prompt Share of Voice',
      b1Val: '% Recommendations in Target Queries',
      sign1: '×',
      b2Title: 'Buyer Intent',
      b2Val: 'High-Ticket Commercial Inquiries',
      sign2: '=',
      b3Title: 'Market Outcome',
      b3Val: 'Uncontested AI Inbound Pipeline'
    },
    equationCopy: 'We track genuine commercial prompts to ensure your brand captures actual buyers, not just casual questions.',
    threadKicker: 'Evidence Into Action',
    threadTitle: 'Structured GEO delivery in rapid sprints.',
    threadCopy: 'Our GEO engineering sprints align your website architecture with modern AI retrieval systems in 7 to 14 days.',
    threadSteps: [
      { num: '01', title: 'Audit', desc: 'Simulate 50+ commercial prompts across ChatGPT, Gemini & Perplexity' },
      { num: '02', title: 'Knowledge Graph', desc: 'Construct machine-readable JSON-LD Schema entity trees' },
      { num: '03', title: 'Factual Content', desc: 'Publish concise, data-dense specification tables & FAQ blocks' },
      { num: '04', title: 'Citations', desc: 'Synchronize entity data across external authority registries' },
      { num: '05', title: 'RAG Alignment', desc: 'Format content for high semantic similarity in vector embeddings' },
      { num: '06', title: 'Testing', desc: 'Verify real-time model citation retrieval and accuracy' },
      { num: '07', title: 'Expansion', desc: 'Expand prompt coverage across adjacent industry verticals' }
    ],
    principles: [
      { title: 'Machine readability first.', desc: 'We build content that both human executives and AI tokenizers can parse with zero ambiguity.' },
      { title: 'Verifiable accuracy.', desc: 'Every claim is supported by schema-linked proof to prevent algorithmic hallucinations.' },
      { title: 'Transparent prompt reporting.', desc: 'We show you the actual AI prompt outputs, not obfuscated vanity metrics.' },
      { title: 'Senior engineer execution.', desc: 'Engineered directly at Inrank Baner Lab under Prasad Mhaske\'s supervision.' }
    ],
    faqs: [
      { q: 'How does GEO differ from standard SEO?', a: 'Standard SEO optimizes for rankings on Google search engine results pages (SERPs). GEO optimizes for inclusion and citation in conversational AI summaries like ChatGPT, Perplexity, and Google AI Overviews.' },
      { q: 'Can small businesses in Pune benefit from GEO?', a: 'Yes. AI models frequently recommend local specialists over distant conglomerates when local entity signals and verified citations are properly structured.' },
      { q: 'How long until AI models start citing our website?', a: 'For search-augmented models like Perplexity and Google AI Overviews, citations can appear in 2 to 4 weeks. For foundation model retraining, improvements compound over quarterly updates.' },
      { q: 'Does GEO require rebuilding our website?', a: 'No. GEO can be integrated into your existing site by adding structured schema markup, clean content formatting, and entity citation references.' },
      { q: 'What is the investment for a GEO sprint?', a: 'Our GEO sprint starts at ₹18,999 and is included within our Market Domination package.' }
    ]
  },

  {
    slug: 'google-my-business-services',
    name: 'Google My Business Services',
    pillar: 1,
    kicker: 'INRANK LOCAL · GOOGLE 3-PACK & MAPS PUNE',
    title: 'Own the local Pune map pack.<br><em>Turn nearby searchers into phone calls.</em>',
    metaTitle: 'Google My Business Services in Pune | GMB & Local SEO | Inrank',
    metaDesc: 'Dominate Google Maps and local 3-Pack rankings in Baner, Hinjewadi, and Pune. Inrank optimizes Google Business Profiles for high phone call velocity and direct inquiries.',
    heroLede: 'Over 78% of local mobile searches result in an offline purchase or inquiry within 24 hours. Inrank engineers Google Business Profile dominance across Pune\'s top business corridors to ensure your phone rings first.',
    decisionOverline: 'From Pin on Map to Inbound Calls',
    decisionTitle: 'Every local call<br>starts with <em>prominence.</em>',
    decisionSteps: [
      { num: '01', title: 'Secondary category architecture', desc: 'Identify high-intent sub-categories that competitors overlook.' },
      { num: '02', title: 'Review velocity systems', desc: 'Deploy automated post-service review workflows to compound 5-star ratings.' },
      { num: '03', title: 'Geo-grid ranking expansion', desc: 'Expand your top-3 ranking radius beyond your office doorstep across all Pune hubs.' }
    ],
    frictionKicker: 'The Local Search Reality',
    frictionTitle: 'Your business has a profile.<br>Why is the competitor getting all the calls?',
    frictionCopy: 'Most businesses create a basic Google profile and leave it idle. Meanwhile, aggressive competitors with localized citations and high review velocity monopolize the Google 3-Pack and capture 80% of local clicks.',
    outcomes: [
      { forWhom: 'For the Local Business Owner', title: 'Direct incoming phone calls & WhatsApp inquiries.', desc: 'Capture motivated buyers within a 15km radius of your Pune office or clinic.' },
      { forWhom: 'For Clinics & Retailers', title: 'High footfall and map navigation requests.', desc: 'Guide patients and customers directly to your physical doorstep with prominent map ranking.' },
      { forWhom: 'For Service Contractors', title: 'High-ticket emergency inquiries.', desc: 'Win urgent, high-margin commercial inquiries from nearby industrial hubs in Bhosari, Chakan, and PCMC.' }
    ],
    tourKicker: 'Local GMB Optimization in Practice',
    tourTitle: 'How Inrank dominates Google Maps rankings in Pune.',
    workflows: [
      {
        q: "Why does our profile rank near our office but disappears 3 kilometers away?",
        kicker: "Proximity & Geo-Grid Radius Expansion",
        desc: "Google uses proximity as a primary local ranking factor. To expand ranking radius across Pune, we build localized landing pages, secure geographically relevant citations, and optimize category authority.",
        decision: "Deploy local hub landing pages for Baner, Hinjewadi, Aundh, and PCMC.",
        steps: ["Geo-Grid Rank Audit", "Hub Page Architecture", "Localized Pune Citations"]
      },
      {
        q: "How important are Google reviews for 3-Pack rankings?",
        kicker: "Review Velocity, Sentiment & Keyword Mentions",
        desc: "Google evaluates not just review count, but review velocity (new reviews per month) and keyword mentions in reviews. Reviews containing specific service names boost rankings dramatically.",
        decision: "Implement automated WhatsApp review request templates for your happy clients.",
        steps: ["Review Flow Setup", "Customer Keyword Prompting", "Owner Response Optimization"]
      },
      {
        q: "What should we do if our GMB profile gets suspended or flagged?",
        kicker: "Profile Reinstatement & Compliance",
        desc: "Google aggressively suspends profiles for minor address discrepancies. We audit business licenses, utility bills, and storefront signage to submit rock-solid reinstatement appeals.",
        decision: "Submit verified documentation directly to Google support for fast reinstatement.",
        steps: ["Address Proof Verification", "Reinstatement Dossier", "Compliance Hardening"]
      },
      {
        q: "How do we track phone calls and leads generated from Google Maps?",
        kicker: "GMB Insights & Call Tracking Attribution",
        desc: "We integrate UTM tracking on website links and monitor call logs, direction requests, and message inquiries to provide transparent monthly lead reports.",
        decision: "Configure UTM campaign tracking on profile action buttons.",
        steps: ["UTM Link Configuration", "Call Attribution Setup", "Monthly Lead Reporting"]
      }
    ],
    equationKicker: 'The Local ROI Equation',
    equationTitle: 'One formula, with its assumptions visible.',
    equation: {
      b1Title: 'Google 3-Pack Prominence',
      b1Val: '#1-3 Map Rank Across Target Pune Hubs',
      sign1: '×',
      b2Title: 'Review Trust Score',
      b2Val: '4.8★ Rating & 100+ Real Reviews',
      sign2: '=',
      b3Title: 'Inbound Inquiries',
      b3Val: '50-150+ Direct Monthly Phone Calls'
    },
    equationCopy: 'Local map ranking is the most direct generator of high-intent phone calls in the digital marketing ecosystem.',
    threadKicker: 'Evidence Into Action',
    threadTitle: 'Active local optimization sprint.',
    threadCopy: 'We manage and optimize your local profile weekly, keeping photos, products, posts, and review responses fresh.',
    threadSteps: [
      { num: '01', title: 'Audit', desc: 'Geo-grid 13x13 ranking scan across Pune neighborhoods' },
      { num: '02', title: 'Categories', desc: 'Optimize primary & secondary categories for maximum keyword coverage' },
      { num: '03', title: 'Photos & Info', desc: 'Upload geo-tagged photography, opening hours & product catalogs' },
      { num: '04', title: 'Citations', desc: 'Sync NAP (Name, Address, Phone) across Justdial, Sulekha & Indiamart' },
      { num: '05', title: 'Reviews', desc: 'Deploy automated client review request workflows' },
      { num: '06', title: 'Posts', desc: 'Publish weekly promotional updates and local Pune news' },
      { num: '07', title: 'Expansion', desc: 'Monitor radius growth and defend top-3 ranking positions' }
    ],
    principles: [
      { title: 'Zero fake review tactics.', desc: 'We only deploy authentic customer review systems; Google penalizes accounts using fake reviews.' },
      { title: '100% NAP consistency.', desc: 'Your Name, Address, and Phone must match perfectly across all digital directories.' },
      { title: 'Rapid response SLA.', desc: 'We respond to Google messages and reviews promptly to maintain high profile engagement scores.' },
      { title: 'Hyperlocal Pune focus.', desc: 'Deep familiarity with Pune commercial corridors from Baner to Chakan.' }
    ],
    faqs: [
      { q: 'How long does it take to rank in the Google 3-Pack in Pune?', a: 'For low-to-medium competition sectors, improvements appear within 2 to 4 weeks. Highly competitive categories (clinics, real estate) typically reach the top 3 in 6 to 10 weeks.' },
      { q: 'Can you help if our Google profile was suspended?', a: 'Yes. We specialize in GMB reinstatement, preparing the legal address documentation and appeals required by Google support.' },
      { q: 'Do we need a physical office in Pune to rank?', a: 'Yes. Google requires a legitimate commercial or residential business address in Pune to verify and rank in local map packs.' },
      { q: 'What is included in Inrank\'s GMB package?', a: 'Profile optimization, category expansion, geo-tagged photography, weekly Google posts, citation building, review management, and monthly geo-grid reports.' },
      { q: 'How much does Google My Business optimization cost?', a: 'Our local GMB sprint starts at ₹11,999/month, delivering measurable increases in phone calls and directions.' }
    ]
  },

  {
    slug: 'link-building-services',
    name: 'Link Building Services',
    pillar: 1,
    kicker: 'INRANK AUTHORITY · HIGH-IMPACT EDITORIAL BACKLINKS',
    title: 'Build genuine domain authority.<br><em>Earn editorial backlinks that move the needle.</em>',
    metaTitle: 'Link Building Services in Pune | High-Authority Backlinks | Inrank',
    metaDesc: 'Secure high-authority, editorial backlinks that permanently boost your domain rating. Inrank builds genuine industry links with zero spam or PBN risk.',
    heroLede: 'Google ranks websites with demonstrated authority. Inrank executes white-hat, editorial outreach to reputable industry publications, tech portals, and business directories to secure contextual backlinks that sustainably elevate your search positions.',
    decisionOverline: 'From Spam Links to Editorial Power',
    decisionTitle: 'Every top ranking<br>relies on <em>domain trust.</em>',
    decisionSteps: [
      { num: '01', title: 'Audit existing backlink profile', desc: 'Disavow toxic spam links that trigger algorithmic Google penalties.' },
      { num: '02', title: 'Manual editorial outreach', desc: 'Pitch bespoke research, guest articles, and data assets to vetted publications.' },
      { num: '03', title: 'Contextual anchor text strategy', desc: 'Distribute branded and partial-match anchors naturally to pass maximum PageRank.' }
    ],
    frictionKicker: 'The Dangerous Link Trap',
    frictionTitle: 'Cheap backlinks exist.<br>Do they risk your entire domain?',
    frictionCopy: 'Fiverr and budget agencies sell packages of 500 spam links on private blog networks (PBNs). Months later, Google issues a manual action penalty that wipes your domain from search indexes permanently.',
    outcomes: [
      { forWhom: 'For the CEO', title: 'Safe, sustainable domain authority.', desc: 'Invest in permanent corporate digital assets that compound search visibility year after year.' },
      { forWhom: 'For the SEO Lead', title: 'Move high-competition keywords.', desc: 'Break through stubborn page-2 ranking plateaus for Pune and national search terms.' },
      { forWhom: 'For Brand Reputation', title: 'Placement in respected publications.', desc: 'Earn mentions in industry journals, business magazines, and respected tech publications.' }
    ],
    tourKicker: 'Outreach in Practice',
    tourTitle: 'How Inrank secures editorial backlinks with zero spam.',
    workflows: [
      {
        q: "What makes a backlink high-quality in Google's eyes?",
        kicker: "Relevance, Traffic & Domain Authority",
        desc: "Google values links from websites with genuine organic traffic, topical relevance to your industry, and clean editorial standards. One link from an authoritative industry portal is worth 100 directory links.",
        decision: "Filter outreach prospects by minimum Domain Rating (DR 40+) and verified organic traffic.",
        steps: ["Prospect Screening", "Traffic Verification", "Relevance Scoring"]
      },
      {
        q: "How do you avoid Google manual penalties and spam algorithms?",
        kicker: "White-Hat Manual Outreach & Content Contribution",
        desc: "We write high-quality technical guest articles and research pieces contributed to legitimate editors. Every link is contextual, editorial, and passes manual review by real human publication teams.",
        decision: "Zero automated submission tools or private blog networks.",
        steps: ["Original Content Creation", "Editor Pitching", "Permanent Live Placement"]
      },
      {
        q: "How many backlinks do we need to rank in Pune?",
        kicker: "Competitor Backlink Gap Analysis",
        desc: "We analyze the top 3 ranking competitors for your primary keywords to calculate the exact link gap. Often, 5-10 high-authority contextual links are sufficient to surpass stagnant local competitors.",
        decision: "Target high-impact gaps rather than buying arbitrary link quantities.",
        steps: ["Competitor Link Profiling", "Gap Calculation", "Targeted Acquisition"]
      },
      {
        q: "Are the backlinks permanent?",
        kicker: "Lifetime Editorial Placement Guarantee",
        desc: "Yes. Editorial articles remain live indefinitely on the publishing domains, continuing to pass link equity and referral traffic for years.",
        decision: "Monitor live link status quarterly and replace any lost links free of charge.",
        steps: ["Live Link Tracking", "Quarterly Health Audit", "Replacement Guarantee"]
      }
    ],
    equationKicker: 'The Authority Equation',
    equationTitle: 'One formula, with its assumptions visible.',
    equation: {
      b1Title: 'High-DR Editorial Links',
      b1Val: 'Contextual In-Content Placements',
      sign1: '×',
      b2Title: 'Topical Relevance',
      b2Val: 'Industry Alignment & Organic Traffic',
      sign2: '=',
      b3Title: 'Search Outcome',
      b3Val: 'Rapid Page 1 Ranking Elevation'
    },
    equationCopy: 'Quality beats quantity. Five authoritative links routinely outperform five hundred directory submissions.',
    threadKicker: 'Evidence Into Action',
    threadTitle: 'Disciplined manual outreach progression.',
    threadCopy: 'Every link acquisition follows an accountable 7-step pipeline from prospect qualification to live verification.',
    threadSteps: [
      { num: '01', title: 'Audit', desc: 'Disavow toxic legacy links and evaluate current Domain Rating' },
      { num: '02', title: 'Competitor Gap', desc: 'Identify top backlink sources powering competitor page-1 ranks' },
      { num: '03', title: 'Prospecting', desc: 'Identify 50+ vetted industry publications with active traffic' },
      { num: '04', title: 'Content Pitch', desc: 'Write insightful editorial articles addressing real industry trends' },
      { num: '05', title: 'Outreach', desc: 'Engage editors directly with customized publication pitches' },
      { num: '06', title: 'Placement', desc: 'Verify contextual anchor text and do-follow indexing parameters' },
      { num: '07', title: 'Tracking', desc: 'Monitor PageRank flow and keyword ranking lift in Search Console' }
    ],
    principles: [
      { title: 'Zero PBNs or link farms.', desc: 'We never risk your domain reputation with automated networks or spammy directories.' },
      { title: 'Verified organic traffic.', desc: 'We only secure links from websites that Google itself trusts with organic visitors.' },
      { title: 'Contextual editorial integration.', desc: 'Links are naturally embedded inside deep, informative articles written by experienced writers.' },
      { title: 'Lifetime link integrity.', desc: 'Every placement is monitored to ensure permanent retention.' }
    ],
    faqs: [
      { q: 'How long before a backlink affects keyword rankings?', a: 'Google typically discovers and indexes new backlinks within 1 to 3 weeks. Ranking movements usually manifest within 30 to 60 days as PageRank propagates.' },
      { q: 'Do you provide reports showing the exact live links?', a: 'Yes. Every client receives a detailed monthly report listing the target URL, Domain Rating, anchor text, and live article URL for full verification.' },
      { q: 'What anchor text strategy do you use?', a: 'We use a natural, blended anchor text profile (branded, partial match, and contextual phrases) to protect your website from over-optimization penalties.' },
      { q: 'Can link building help B2B manufacturing and niche sectors?', a: 'Yes. Niche B2B sectors often have low link competition; securing just 3 to 5 high-authority trade links can elevate a site to the #1 position in Pune.' },
      { q: 'How much does Inrank\'s link building service cost?', a: 'Custom link building sprints start at ₹14,999/month, or can be bundled into our Growth Scale and Market Domination packages.' }
    ]
  },

  {
    slug: 'ai-ranking-citations',
    name: 'AI Ranking Citations',
    pillar: 1,
    kicker: 'INRANK CITATIONS · KNOWLEDGE GRAPH & DATA TRUST',
    title: 'Anchor your brand identity.<br><em>Ensure every AI engine knows who you are.</em>',
    metaTitle: 'AI Ranking Citations | Knowledge Graph & Entity Authority | Inrank',
    metaDesc: 'Build authoritative AI ranking citations and structured entity graphs that feed ChatGPT, Gemini, and Google Knowledge Graph. Dominate conversational AI discovery.',
    heroLede: 'AI models rely on consensus across authoritative knowledge bases to verify facts before recommending a brand. Inrank creates and synchronizes verified entity citations across enterprise registries to anchor your corporate presence in AI training corpora.',
    decisionOverline: 'From Scattered Profiles to Verified Entity',
    decisionTitle: 'Every AI recommendation<br>requires <em>consensus.</em>',
    decisionSteps: [
      { num: '01', title: 'Build Wikidata and WikiData alignments', desc: 'Structure machine-readable corporate entities with verifiable credentials.' },
      { num: '02', title: 'Publish uniform corporate facts', desc: 'Ensure addresses, founder details, and offerings match across all registries.' },
      { num: '03', title: 'Feed live search retrieval systems', desc: 'Inject rich snippets and linked open data that AI scrapers read instantly.' }
    ],
    frictionKicker: 'The Knowledge Gap',
    frictionTitle: 'Your business is established.<br>Why does AI know so little about you?',
    frictionCopy: 'If your digital footprint consists only of basic social profiles, AI models have no reliable entity grounding to cite your company. They default to better-documented national brands.',
    outcomes: [
      { forWhom: 'For the Enterprise Brand', title: 'Google Knowledge Panel acquisition.', desc: 'Earn a verified Google Knowledge Panel on brand searches with corporate facts.' },
      { forWhom: 'For the Executive', title: 'Personal entity authority for founders.', desc: 'Establish Prasad Mhaske-level executive positioning in Google Knowledge Graphs.' },
      { forWhom: 'For Conversational AI', title: 'Consistent factual recommendations.', desc: 'Ensure AI answers accurately describe your capabilities, location, and pricing.' }
    ],
    tourKicker: 'Citation Architecture',
    tourTitle: 'How we anchor your corporate entity across the web.',
    workflows: [
      {
        q: "What are AI Ranking Citations and how do they differ from local directories?",
        kicker: "Entity Verification vs Basic Local Listings",
        desc: "Local directories contain simple NAP listings. AI Ranking Citations are structured open-data nodes (Wikidata, Crunchbase, industry taxonomies) that AI models ingest directly into their knowledge representations.",
        decision: "Submit verified corporate profiles to semantic repositories that power AI training.",
        steps: ["Entity Schema Modeling", "Open Data Submission", "Verification Sign-off"]
      },
      {
        q: "How do we earn a verified Google Knowledge Panel for our brand?",
        kicker: "Triangulating Knowledge Graph Verification",
        desc: "Google creates Knowledge Panels when it can independently cross-verify your entity across multiple trusted authoritative nodes without ambiguity.",
        decision: "Synchronize company records across Crunchbase, Golden, LinkedIn, and corporate registries.",
        steps: ["Identify Source Gaps", "Submit Standardized Dossier", "Claim Knowledge Panel"]
      },
      {
        q: "Can AI citations help local businesses in Pune?",
        kicker: "Hyperlocal Knowledge Graph Anchoring",
        desc: "Yes. Anchoring your business as a recognized entity in Pune helps Google Maps, Gemini, and Siri associate your brand with local services instantly.",
        decision: "Link local Pune citations directly to your machine-readable Organization schema.",
        steps: ["Map Local Pune Citations", "Link with sameAs Properties", "Verify Map Placement"]
      },
      {
        q: "What happens when company details change?",
        kicker: "Continuous Entity Maintenance",
        desc: "We maintain your entity citation ecosystem, updating addresses, executive changes, and new services to ensure AI models always provide fresh facts.",
        decision: "Quarterly entity health audits across all primary knowledge hubs.",
        steps: ["Audit Active Citations", "Push Updates", "Verify Model Retrieval"]
      }
    ],
    equationKicker: 'The Entity Authority Equation',
    equationTitle: 'One formula, with its assumptions visible.',
    equation: {
      b1Title: 'Synchronized Knowledge Nodes',
      b1Val: 'Verified Profiles across 30+ Tech Hubs',
      sign1: '×',
      b2Title: 'Semantic Schema Linking',
      b2Val: 'Unambiguous sameAs Entity Mapping',
      sign2: '=',
      b3Title: 'AI Trust Score',
      b3Val: 'Unquestioned Brand Credibility & Citations'
    },
    equationCopy: 'Consensus is what transforms a simple website into an accredited entity in AI knowledge bases.',
    threadKicker: 'Evidence Into Action',
    threadTitle: 'From unverified domain to recognized industry entity.',
    threadCopy: 'Our 7-step citation sprint methodically anchors your company into the global knowledge web.',
    threadSteps: [
      { num: '01', title: 'Audit', desc: 'Scan current presence in Google Knowledge Graph & Wikidata' },
      { num: '02', title: 'Dossier', desc: 'Prepare standardized corporate facts, founders, dates & licenses' },
      { num: '03', title: 'Schema Injection', desc: 'Deploy nested Organization and Person JSON-LD schemas' },
      { num: '04', title: 'Core Registries', desc: 'Submit verified corporate profiles to top data sources' },
      { num: '05', title: 'Linking', desc: 'Interconnect all public profiles using Schema sameAs arrays' },
      { num: '06', title: 'Knowledge Panel', desc: 'Trigger and claim official Google Knowledge Panel' },
      { num: '07', title: 'AI Verification', desc: 'Verify ChatGPT, Claude, and Gemini recall your company facts' }
    ],
    principles: [
      { title: 'Absolute data consistency.', desc: 'Every citation must use the exact same corporate naming and address formatting.' },
      { title: 'Authoritative data sources only.', desc: 'We only build citations on platforms that major LLMs actively index and respect.' },
      { title: 'Machine-readable structured syntax.', desc: 'All submissions are formatted with schema.org vocabulary for direct parsing.' },
      { title: 'Permanent brand governance.', desc: 'You retain full administrative control of every registered profile.' }
    ],
    faqs: [
      { q: 'What is the Google Knowledge Graph?', a: 'The Knowledge Graph is Google\'s database of real-world entities (people, places, businesses) and their relationships, powering Knowledge Panels and AI answers.' },
      { q: 'How long does it take to earn a Knowledge Panel?', a: 'Google typically generates Knowledge Panels within 4 to 8 weeks after consistent entity signals are established across authoritative web sources.' },
      { q: 'Can individuals (founders, doctors, lawyers) get Knowledge Panels?', a: 'Yes. We build personal entity citations for executives, founders, and specialized practitioners to establish individual authority.' },
      { q: 'Is this service included in Inrank\'s SEO packages?', a: 'Foundational citations are included in all packages; advanced entity graph builds are available in our Market Domination tier.' },
      { q: 'How much does AI Ranking Citations cost as a standalone sprint?', a: 'Our complete AI Ranking Citation sprint is priced at ₹12,999.' }
    ]
  }
];

// Helper to compile each service page into Vinove Bond/Prism architecture
function buildServicePage(s) {
  const pConf = pillarConfig[s.pillar] || pillarConfig[1];
  
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
                  <svg viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 11L11 1H4M11 1V8"/></svg>
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
                  <svg class="mega-co-arr" viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 11L11 1H4M11 1V8"/></svg>
                </a>
                <a href="/services/custom-website-development.html" class="mega-co ${s.pillar === 2 ? 'is-active' : ''}" style="--co:#102138">
                  <span class="mega-co-logo">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                  </span>
                  <span class="mega-co-text">
                    <span class="mega-co-name">High-Performance Web</span>
                    <span class="mega-co-tag">Custom Next.js, WordPress &amp; E-Commerce</span>
                  </span>
                  <svg class="mega-co-arr" viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 11L11 1H4M11 1V8"/></svg>
                </a>
                <a href="/services/ppc-services.html" class="mega-co ${s.pillar === 3 ? 'is-active' : ''}" style="--co:#047857">
                  <span class="mega-co-logo">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </span>
                  <span class="mega-co-text">
                    <span class="mega-co-name">Performance Marketing</span>
                    <span class="mega-co-tag">Google Ads, Meta &amp; High-ROI Funnels</span>
                  </span>
                  <svg class="mega-co-arr" viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 11L11 1H4M11 1V8"/></svg>
                </a>
                <a href="/services/ui-ux-design-services.html" class="mega-co ${s.pillar === 4 ? 'is-active' : ''}" style="--co:#081424">
                  <span class="mega-co-logo">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg>
                  </span>
                  <span class="mega-co-text">
                    <span class="mega-co-name">Brand &amp; CRO Optimization</span>
                    <span class="mega-co-tag">UI/UX, Brand Identity &amp; Conversions</span>
                  </span>
                  <svg class="mega-co-arr" viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 11L11 1H4M11 1V8"/></svg>
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
allServices.forEach(s => {
  const filePath = path.join('inrank2.0/services', `${s.slug}.html`);
  fs.writeFileSync(filePath, buildServicePage(s), 'utf8');
  console.log(`Generated: inrank2.0/services/${s.slug}.html`);
});

console.log(`Successfully built ${allServices.length} service pages in Vinove Bond/Prism UI!`);
