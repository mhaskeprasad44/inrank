const fs = require('fs');
const path = require('path');

// Read previously defined services from the three source builder files
const codeComplete27 = fs.readFileSync('scripts/build_complete_27_services_ecosystem.cjs', 'utf8');
const codeFinal11 = fs.readFileSync('scripts/build_final_11_services.cjs', 'utf8');
const codeAllPages = fs.readFileSync('scripts/build_all_service_pages_ecosystem.cjs', 'utf8');

// Function to safely extract service objects
function extractArray(code, arrayName) {
  // Extract using Function sandbox or parsing
  const start = code.indexOf(`const ${arrayName} = [`);
  if (start === -1) return [];
  const end = code.indexOf('];', start);
  const snippet = code.substring(start, end + 2);
  const fn = new Function('createService', `${snippet}\nreturn ${arrayName};`);
  function createService(opts) {
    return {
      slug: opts.slug,
      name: opts.name,
      pillar: opts.pillar,
      pillarName: opts.pillar === 1 ? 'Search & AI Discovery' : opts.pillar === 2 ? 'High-Performance Web' : opts.pillar === 3 ? 'Performance Marketing' : 'Brand & CRO Optimization',
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
      equation: opts.equation || {
        b1Title: 'Direct Investment',
        b1Val: 'Monthly Sprint Budget',
        sign1: '÷',
        b2Title: 'Qualified Leads',
        b2Val: 'High-Intent Inquiries',
        sign2: '=',
        b3Title: 'Target Metric',
        b3Val: 'Predictable Unit Acquisition Cost'
      },
      equationCopy: opts.equationCopy || 'We track fully loaded unit economics, excluding vanity vanity metrics to keep genuine acquisition costs visible.',
      threadKicker: opts.threadKicker || 'Evidence Into Action',
      threadTitle: opts.threadTitle || 'Execution should not become a stagnant PDF report.',
      threadCopy: opts.threadCopy || 'An Inrank sprint ends with an accountable verdict. The strategy becomes code, the code drives inquiries, and the data guides the next sprint.',
      threadSteps: opts.threadSteps || [
        { num: '01', title: 'Audit', desc: 'Identify bottlenecks & commercial leakage points' },
        { num: '02', title: 'Architect', desc: 'Blueprint technical deliverables & sprint milestones' },
        { num: '03', title: 'Deploy', desc: 'Roll out code, campaigns & optimized landing funnels' },
        { num: '04', title: 'Rank & Capture', desc: 'Dominate Google search & capture qualified demand' },
        { num: '05', title: 'Measure', desc: 'Review unit economics & cost per qualified inquiry' },
        { num: '06', title: 'Optimize', desc: 'Continuous testing & algorithmic performance tuning' },
        { num: '07', title: 'Scale', desc: 'Re-invest returns into high-margin growth channels' }
      ],
      principles: opts.principles || [
        { title: 'Verifiable commercial returns.', desc: 'Every sprint deliverable is judged by qualified inquiry growth and tangible ROI.' },
        { title: 'Total code & account ownership.', desc: 'You retain 100% intellectual property, repository access, and advertising accounts.' },
        { title: 'Zero vanity metric reports.', desc: 'We report real phone calls, WhatsApp leads, and revenue rather than hollow impressions.' },
        { title: 'Direct senior engineering.', desc: 'Work directly with Prasad Mhaske and senior technical specialists in Baner.' }
      ],
      faqs: opts.faqs
    };
  }
  return fn(createService);
}

const list1 = extractArray(codeComplete27, 'allServices');
const list2 = extractArray(codeFinal11, 'final11');
const list3 = extractArray(codeAllPages, 'servicesData');

const map = new Map();
[...list1, ...list2, ...list3].forEach(s => {
  if (s && s.slug && !map.has(s.slug)) {
    map.set(s.slug, s);
  }
});

console.log(`Loaded ${map.size} unique services from existing builder files.`);

// Add the 7 remaining services with bespoke high-grade Vinove Prism content
const remaining7 = [
  // 1. Google Ads Agency
  {
    slug: 'google-ads-agency',
    name: 'Google Ads Agency in Pune',
    pillar: 3,
    pillarName: 'Performance Marketing',
    kicker: 'INRANK ACQUISITION LAB · GOOGLE ADS SPECIALIST PUNE',
    title: 'Stop burning budget on clicks.<br><em>Buy qualified customer inquiries.</em>',
    metaTitle: 'Google Ads Agency in Pune | High-ROAS Google Ads Management | Inrank',
    metaDesc: 'Inrank is a Google Ads agency in Pune. Our Google Ads management services cover search, Performance Max, and tracking to cut wasted spend and lift ROAS.',
    heroLede: 'Most Google Ads agencies in Pune set campaigns on broad match and let automated bidding burn through your daily budget on irrelevant queries. Inrank treats paid search as revenue engineering: strict negative keyword sculpting, sub-second landing pages, and verified conversion tracking.',
    decisionOverline: 'From Burn Rate to Commercial Margin',
    decisionTitle: 'Every profitable lead<br>starts with <em>attribution.</em>',
    decisionSteps: [
      { num: '01', title: 'Eliminate negative query waste', desc: 'Sculpting search terms daily to exclude student, job seeker, and DIY clicks.' },
      { num: '02', title: 'Sub-second dedicated landing pages', desc: 'Never sending paid traffic to slow homepages; converting intent on dedicated funnels.' },
      { num: '03', title: 'Server-side conversion tracking', desc: 'Feeding closed-won deal data back into Google algorithms for higher lead quality.' }
    ],
    frictionKicker: 'The Paid Search Dilemma',
    frictionTitle: 'Clicks are increasing.<br>Why aren\'t sales inquiries?',
    frictionCopy: 'Generic agencies show you rising impression and click graphs while your phone sits silent. Broad match waste and slow landing pages drain capital without generating qualified commercial demand.',
    outcomes: [
      { forWhom: 'For the Business Owner', title: 'Review genuine customer inquiries, not clicks.', desc: 'Connect ad spend directly to incoming WhatsApp chats, phone inquiries, and confirmed commercial transactions.' },
      { forWhom: 'For the Growth Lead', title: 'Lower your Customer Acquisition Cost (CAC).', desc: 'Cut wasted ad spend by 30-50% in the first 14 days and redirect budget into high-converting commercial intent.' },
      { forWhom: 'For the Sales Pod', title: 'Receive high-intent, decision-maker inquiries.', desc: 'Stop answering tire-kicker calls and focus on prospects with verified purchase budgets and urgent timelines.' }
    ],
    tourKicker: 'Performance Architecture',
    tourTitle: 'How Inrank engineers profitable Google Ads campaigns.',
    workflows: [
      {
        q: "Why do our current Google Ads generate irrelevant search traffic?",
        kicker: "Broad Match Bleed & Negative Sculpting",
        desc: "Google Smart Bidding expands keyword targeting to capture search volume regardless of commercial intent. We implement strict phrase and exact match hierarchies backed by 800+ localized negative keywords.",
        decision: "Audit 90-day search query logs and eliminate wasteful queries immediately.",
        steps: ["Search Query Audit", "Negative Keyword Architecture", "Commercial Intent Segmentation"]
      },
      {
        q: "Why should we build dedicated landing pages for ad campaigns?",
        kicker: "Conversion Rate Velocity & Message Match",
        desc: "Sending ad clicks to generic homepages cuts conversion rates by up to 70%. We deploy bespoke, sub-second landing pages with 100% message match and 1-tap WhatsApp lead triggers.",
        decision: "Pair every campaign with a dedicated mobile-first conversion funnel.",
        steps: ["Intent Wireframing", "Sub-Second Funnel Build", "A/B Message Testing"]
      },
      {
        q: "How do we scale Google Ads without driving up Cost-Per-Acquisition?",
        kicker: "Marginal Efficiency & Search Impression Share",
        desc: "We analyze Search Lost IS (Budget vs Rank) to capture dominant top-of-page real estate on highest-converting queries before testing adjacent commercial terms.",
        decision: "Scale ad spend strictly based on verified customer acquisition margins.",
        steps: ["Impression Share Analysis", "Bid Cap Optimization", "High-Margin Scaling"]
      }
    ],
    equationKicker: 'The Honest Paid Growth Equation',
    equationTitle: 'One formula, with its assumptions visible.',
    equation: {
      b1Title: 'Ad Spend',
      b1Val: 'Search + PMax Media Budget',
      sign1: '÷',
      b2Title: 'Closed Inquiries',
      b2Val: 'Verified Sales Opportunities',
      sign2: '=',
      b3Title: 'Target Metric',
      b3Val: 'Profitable Customer Acquisition Cost'
    },
    equationCopy: 'We track unit economics down to the individual keyword level, ensuring every rupee invested drives measurable commercial gross margin.',
    threadKicker: 'Evidence Into Action',
    threadTitle: 'Structured Google Ads management sprint.',
    threadCopy: 'We audit search queries daily, adjust bid caps weekly, and deliver transparent reporting without agency jargon.',
    threadSteps: [
      { num: '01', title: 'Audit', desc: 'Identify wasted budget, broad match leaks & tracking errors' },
      { num: '02', title: 'Restructure', desc: 'Rebuild account into tight, single-intent thematic ad groups' },
      { num: '03', title: 'Funnels', desc: 'Deploy sub-second dedicated landing pages with CRM routing' },
      { num: '04', title: 'Launch', desc: 'Deploy Google Search & high-converting Performance Max campaigns' },
      { num: '05', title: 'Prune', desc: 'Daily negative keyword exclusions to eliminate low-quality clicks' },
      { num: '06', title: 'Attribute', desc: 'Sync phone calls & WhatsApp inquiries to Google conversion tags' },
      { num: '07', title: 'Scale', desc: 'Increase budget on proven profitable commercial keyword clusters' }
    ],
    principles: [
      { title: 'Commercial gross margin dictates spend.', desc: 'We only scale campaigns when client unit economics and profit margins prove sustainable.' },
      { title: 'Zero hidden agency markups.', desc: 'You pay Google directly via your own corporate card; we never take percentage cuts on ad spend.' },
      { title: 'Sub-second landing funnels.', desc: 'We never send expensive paid traffic to slow, distracting company homepages.' },
      { title: 'Direct engineer management.', desc: 'Your campaigns are managed directly by senior search marketing specialists in Baner.' }
    ],
    faqs: [
      { q: 'How much budget is needed to start Google Ads in Pune?', a: 'We recommend a minimum starting media spend of ₹20,000 to ₹35,000 per month to achieve statistical significance within the first two weeks.' },
      { q: 'How quickly will we see customer inquiries?', a: 'Once campaigns and dedicated landing pages are live (3-5 business days), inquiries typically begin arriving within 24 to 48 hours of ad activation.' },
      { q: 'Do you manage Google Search, Display, and Performance Max?', a: 'Yes. We build full-funnel architectures: high-intent Google Search for immediate demand, Performance Max for automated expansion, and YouTube for retargeting.' },
      { q: 'Who owns the Google Ads account and campaign data?', a: 'You retain 100% legal ownership of your Google Ads account, keyword history, and conversion tracking tags at all times.' },
      { q: 'What are Inrank\'s management retainers?', a: 'We offer fixed monthly sprint fees starting at ₹11,999/mo, with zero hidden percentage commissions or billing surprises.' }
    ]
  },

  // 2. Meta Ads Agency
  {
    slug: 'meta-ads-agency',
    name: 'Meta Ads Agency in Pune',
    pillar: 3,
    pillarName: 'Performance Marketing',
    kicker: 'INRANK PAID SOCIAL · HIGH-CONVERTING META FUNNELS',
    title: 'Transform social attention.<br><em>Acquire customers on Instagram and Facebook.</em>',
    metaTitle: 'Meta Ads Agency in Pune | Instagram & Facebook Lead Generation | Inrank',
    metaDesc: 'Inrank is a Meta ads agency and Instagram ads agency running Facebook ads with Conversions API tracking to lower your cost per lead in Pune.',
    heroLede: 'Social media ads fail when agencies post pretty pictures with zero commercial intent. Inrank engineers profit-first Meta ad funnels: high-converting video hooks, lookalike audience segmentation, Conversions API (CAPI) server tracking, and instant WhatsApp inquiry flows.',
    decisionOverline: 'From Vanity Impressions to Conversions',
    decisionTitle: 'Every viral campaign<br>starts with <em>an offer.</em>',
    decisionSteps: [
      { num: '01', title: 'Irresistible commercial offer design', desc: 'Structuring lead magnets and direct offers that compel prospects to stop scrolling.' },
      { num: '02', title: 'Meta Conversions API (CAPI) setup', desc: 'Bypassing iOS privacy blocks with reliable server-to-server conversion reporting.' },
      { num: '03', title: 'Direct WhatsApp inquiry funnels', desc: 'Connecting interested buyers directly to your sales team with 1-tap WhatsApp chat.' }
    ],
    frictionKicker: 'The Social Media Drain',
    frictionTitle: 'Post likes are up.<br>Where are the paying clients?',
    frictionCopy: 'Boosted posts and aesthetic feeds do not build a predictable sales pipeline. Without direct-response copywriting and server-side tracking, Meta algorithms optimize for casual scrollers instead of commercial buyers.',
    outcomes: [
      { forWhom: 'For the Business Owner', title: 'Consistent daily sales inquiries on WhatsApp.', desc: 'Wake up to real prospects asking for quotes, product pricing, and consultation bookings.' },
      { forWhom: 'For the Marketing Director', title: 'Verified Cost-Per-Acquisition metrics.', desc: 'Know exactly what each qualified customer inquiry costs across Instagram and Facebook placements.' },
      { forWhom: 'For the Brand Image', title: 'High-end visual positioning.', desc: 'Showcase your brand with crisp typography, motion graphics, and premium product presentation.' }
    ],
    tourKicker: 'Social Performance',
    tourTitle: 'How Inrank scales profitable Instagram & Facebook Ads.',
    workflows: [
      {
        q: "Why do boosted posts fail to generate real commercial inquiries?",
        kicker: "Boost Post Algorithm vs Direct-Response Ads Manager",
        desc: "Boosting posts optimizes for cheap post engagement (likes and comments) rather than conversions. We architect full Ads Manager campaigns targeting purchase intent and direct quotation submissions.",
        decision: "Cease boosted posts and deploy structured conversion campaigns in Meta Ads Manager.",
        steps: ["Audience Modeling", "Direct-Response Copy", "Meta Pixel & CAPI Sync"]
      },
      {
        q: "How does Inrank overcome iOS tracking limitations on Meta?",
        kicker: "Server-Side Conversions API (CAPI)",
        desc: "Browser-based tracking misses 20-30% of conversions due to ad blockers and Safari privacy rules. We configure server-side CAPI via Cloudflare/AWS, restoring 100% attribution data to Meta's AI.",
        decision: "Deploy server-side GTM and Meta Conversions API on your primary domain.",
        steps: ["CAPI Gateway Setup", "Event Deduplication", "Attribution Verification"]
      },
      {
        q: "What ad creatives convert best for B2B and high-ticket B2C in Pune?",
        kicker: "Problem-Agitation-Solution Video & Static Carousel",
        desc: "We test video hooks that address customer pain points within the first 3 seconds, paired with clean typography cards and customer proof screenshots.",
        decision: "Produce 4-6 creative variants per sprint to prevent ad fatigue.",
        steps: ["Hook Ideation", "Motion Design", "Weekly Creative Refresh"]
      }
    ],
    equationKicker: 'The Meta Funnel Equation',
    equationTitle: 'One formula, with its assumptions visible.',
    equation: {
      b1Title: 'Direct Ad Spend',
      b1Val: 'Instagram + FB Budget',
      sign1: '÷',
      b2Title: 'Engaged Prospects',
      b2Val: 'WhatsApp & Lead Submissions',
      sign2: '=',
      b3Title: 'Target CAC',
      b3Val: 'Lowest Valid Cost-Per-Customer'
    },
    equationCopy: 'We continuously refresh ad creative and test audience hooks to keep Cost-Per-Lead stable as campaign spend scales.',
    threadKicker: 'Evidence Into Action',
    threadTitle: 'From creative briefing to active leads in 5 days.',
    threadCopy: 'We design the creatives, configure tracking, write direct-response copy, and monitor campaign delivery daily.',
    threadSteps: [
      { num: '01', title: 'Audience Research', desc: 'Identify core buyer demographics & interest intersections in Maharashtra' },
      { num: '02', title: 'Offer Crafting', desc: 'Structure high-converting consultation offers & lead magnets' },
      { num: '03', title: 'Creative Production', desc: 'Design high-resolution video reels, carousels, and typography statics' },
      { num: '04', title: 'Tracking Setup', desc: 'Configure Meta Pixel, CAPI gateway, and offline event tracking' },
      { num: '05', title: 'Campaign Launch', desc: 'Deploy Advantage+ and interest-targeted ad sets' },
      { num: '06', title: 'Lead Routing', desc: 'Connect incoming leads straight to sales WhatsApp & Google Sheets' },
      { num: '07', title: 'Creative Scaling', desc: 'Scale budget on winning angles and prune underperforming assets' }
    ],
    principles: [
      { title: 'Creatives drive performance.', desc: 'High-converting ad angles and hooks are the single biggest lever in modern algorithmic advertising.' },
      { title: 'Server-side data accuracy.', desc: 'We never rely on fragile browser pixels; CAPI server integration is mandatory on all accounts.' },
      { title: 'Frictionless inquiry funnels.', desc: 'We route prospects straight to 1-tap WhatsApp discussions or instant quotation forms.' },
      { title: 'Transparent commercial retainers.', desc: 'Zero percentage commissions on ad spend; straightforward fixed pricing.' }
    ],
    faqs: [
      { q: 'What is the minimum ad spend required for Meta Ads?', a: 'We typically suggest starting with ₹15,000 to ₹25,000 per month for local campaigns to test creative angles and train the Meta pixel.' },
      { q: 'Can Meta Ads work for B2B businesses in Pune?', a: 'Yes. By targeting business owners, specific industry job titles, and remarketing to website visitors, Meta Ads frequently outperform LinkedIn on Cost-Per-Lead.' },
      { q: 'How often do you refresh ad creatives?', a: 'We review ad fatigue weekly and introduce fresh copy angles and visual creatives every 10 to 14 days.' },
      { q: 'Do leads go straight to our CRM or phone?', a: 'Yes. We integrate lead forms directly with WhatsApp Business, email notifications, and CRM webhooks in real time.' },
      { q: 'Who owns the Meta Business Manager and pixel data?', a: 'You retain 100% legal ownership of your Business Manager, ad accounts, and pixel datasets.' }
    ]
  },

  // 3. Shopify Store Development
  {
    slug: 'shopify-store-development',
    name: 'Shopify Store Development',
    pillar: 2,
    pillarName: 'High-Performance Web',
    kicker: 'INRANK COMMERCE LAB · SHOPIFY PLUS SPECIALISTS PUNE',
    title: 'High-speed D2C storefronts.<br><em>Built to maximize Average Order Value.</em>',
    metaTitle: 'Shopify Store Development in Pune | Shopify Experts | Inrank',
    metaDesc: 'Inrank offers Shopify store development in Pune: store setup, theme customization, app integration, speed optimization, and Shopify SEO to grow online sales.',
    heroLede: 'Slow Shopify stores with 25 bloated apps kill cart conversion and inflate customer acquisition costs. Inrank engineers bespoke, ultra-fast Shopify storefronts: sub-second product pages, custom Liquid architecture, 1-click checkout, and automated WhatsApp cart recovery.',
    decisionOverline: 'From Abandoned Carts to High AOV',
    decisionTitle: 'Every high-converting store<br>starts with <em>speed.</em>',
    decisionSteps: [
      { num: '01', title: 'Lean Liquid code & zero app bloat', desc: 'Replacing sluggish monthly apps with lightweight native theme code.' },
      { num: '02', title: 'Sub-second mobile product page load', desc: 'Instant product photo zoom, variant switching, and instant add-to-cart.' },
      { num: '03', title: 'Frictionless checkout & upsells', desc: 'Optimizing checkout velocity, COD verification, and post-purchase upsells.' }
    ],
    frictionKicker: 'The App Bloat Trap',
    frictionTitle: 'The store has 30 apps installed.<br>Why is mobile conversion under 1%?',
    frictionCopy: 'Every third-party Shopify app injects tracking scripts and CSS that destroy mobile page speed. When a product page takes 4+ seconds to load on mobile networks, 50% of paid ad traffic bounces before seeing the buy button.',
    outcomes: [
      { forWhom: 'For the D2C Founder', title: 'Lower your Customer Acquisition Cost (CAC).', desc: 'A faster store converts more ad clicks into paid orders, immediately lifting return on ad spend.' },
      { forWhom: 'For the Operations Lead', title: 'Seamless logistics & payment gateway integration.', desc: 'Automate Shiprocket, Delhivery, Razorpay, Cashfree, and WhatsApp tracking updates.' },
      { forWhom: 'For the Online Shopper', title: 'Sub-second shopping experience on mobile.', desc: 'Instant variant selection, clean payment options, and effortless 1-tap checkout.' }
    ],
    tourKicker: 'E-Commerce Architecture',
    tourTitle: 'How Inrank engineers high-revenue Shopify platforms.',
    workflows: [
      {
        q: "Why is our Shopify store loading slowly on mobile devices?",
        kicker: "App Script Bloat & Uncompressed Assets",
        desc: "Uninstalled apps often leave orphan code in your theme.liquid file. We perform a complete theme audit, remove redundant apps, and inline critical CSS for instant loading.",
        decision: "Purge orphan app code and optimize theme assets for sub-1.2s mobile loading.",
        steps: ["Theme Code Audit", "App Script Removal", "WebP Asset Compression"]
      },
      {
        q: "How do we recover abandoned shopping carts without high discount codes?",
        kicker: "Automated WhatsApp & SMS Recovery Workflows",
        desc: "Over 70% of Indian mobile shoppers abandon carts. We configure automated WhatsApp cart recovery messages with direct checkout links, recovering 15-25% of lost revenue.",
        decision: "Deploy automated WhatsApp recovery triggered within 15 minutes of cart abandonment.",
        steps: ["Webhook Integration", "WhatsApp Notification Sequence", "Dynamic Checkout Links"]
      },
      {
        q: "Can you build custom product page features without third-party apps?",
        kicker: "Custom Liquid & Metafields Engineering",
        desc: "Yes. We code custom variant swatches, size charts, delivery pincode checkers, and countdown timers directly in Shopify Liquid, saving you monthly SaaS app fees.",
        decision: "Build custom native theme sections powered by Shopify Metafields.",
        steps: ["Metafield Schema Setup", "Custom Liquid Section Build", "Cross-Device Testing"]
      }
    ],
    equationKicker: 'The E-Commerce Revenue Equation',
    equationTitle: 'One formula, with its assumptions visible.',
    equation: {
      b1Title: 'High Mobile Speed',
      b1Val: '< 1.2s Product Page Load',
      sign1: '×',
      b2Title: 'Frictionless Funnel',
      b2Val: '1-Click Checkout & COD Verify',
      sign2: '=',
      b3Title: 'Store Revenue',
      b3Val: '2.5x Higher Conversion Rate'
    },
    equationCopy: 'Every second shaved off e-commerce load time directly increases checkout completion rates across Indian mobile networks.',
    threadKicker: 'Evidence Into Action',
    threadTitle: 'From store architecture to live sales in 10-14 days.',
    threadCopy: 'We handle theme development, product catalog upload, payment gateway integration, and launch QA.',
    threadSteps: [
      { num: '01', title: 'Catalog Modeling', desc: 'Structure collections, product variants & custom metafield attributes' },
      { num: '02', title: 'Theme Engineering', desc: 'Build bespoke Shopify Liquid templates with 90+ mobile speed scores' },
      { num: '03', title: 'Payment Gateways', desc: 'Integrate Razorpay, Cashfree, UPI, and OTP-verified Cash on Delivery' },
      { num: '04', title: 'Shipping & Logistics', desc: 'Connect Shiprocket, Delhivery, and automated shipping rate calculators' },
      { num: '05', title: 'Shopify SEO', desc: 'Inject JSON-LD Product & Review schemas for rich Google search cards' },
      { num: '06', title: 'Checkout Testing', desc: 'End-to-end test transactions, automated invoices, and email alerts' },
      { num: '07', title: 'Store Launch', desc: 'DNS pointing, domain SSL verification, and marketing analytics setup' }
    ],
    principles: [
      { title: 'Sub-second mobile speed.', desc: 'Product pages must render immediately to capture impulsive mobile ad buyers.' },
      { title: 'Native code over app subscriptions.', desc: 'We build features natively to eliminate monthly app bills and script bloat.' },
      { title: 'Complete store ownership.', desc: 'You own 100% of your Shopify theme, assets, customer data, and sales revenue.' },
      { title: 'Direct technical support in Pune.', desc: 'Direct engineering support and guidance from our Baner development team.' }
    ],
    faqs: [
      { q: 'How long does a custom Shopify store take to build?', a: 'Most custom Shopify stores are designed, developed, and launched within 10 to 14 business days.' },
      { q: 'Can you migrate our existing store from WooCommerce or Magento?', a: 'Yes. We migrate products, customer accounts, order history, and 301 URL redirects seamlessly to preserve SEO.' },
      { q: 'Which payment gateways do you integrate?', a: 'We integrate Razorpay, Cashfree, Paytm, PhonePe UPI, and OTP-based Cash on Delivery (COD) verification.' },
      { q: 'Will our Shopify store be optimized for Google SEO?', a: 'Yes. We include structured product data, breadcrumbs, optimized collection hierarchies, and fast mobile speed.' },
      { q: 'What are your Shopify development packages?', a: 'Our Starter Shopify sprint starts at ₹18,999; full custom D2C brand stores range from ₹28,999 to ₹45,000.' }
    ]
  },

  // 4. WordPress Development Services
  {
    slug: 'wordpress-development-services',
    name: 'WordPress Development Services',
    pillar: 2,
    pillarName: 'High-Performance Web',
    kicker: 'INRANK CMS LAB · CLEAN-CODE WORDPRESS PUNE',
    title: 'Fast, secure WordPress portals.<br><em>Built with zero bloated page builders.</em>',
    metaTitle: 'WordPress Development Services in Pune | Custom WordPress | Inrank',
    metaDesc: 'Inrank provides WordPress development services in Pune: a WordPress development company for custom themes, custom plugins, speed optimization, and secure architectures.',
    heroLede: 'Over 90% of WordPress sites in Pune are burdened with heavy Elementor or Divi builders that take 4+ seconds to load. Inrank engineers custom, lightweight WordPress portals: bespoke Gutenberg block architectures, sub-second Core Web Vitals, enterprise security hardening, and intuitive admin editing.',
    decisionOverline: 'From Clunky Builders to Block Velocity',
    decisionTitle: 'Every manageable site<br>starts with <em>clean code.</em>',
    decisionSteps: [
      { num: '01', title: 'Zero page builder bloat', desc: 'Replacing heavy visual builders with native, lightweight Gutenberg blocks.' },
      { num: '02', title: 'Enterprise speed & caching', desc: 'Sub-second load times with Redis object caching and server-level optimization.' },
      { num: '03', title: 'Bulletproof security hardening', desc: 'Custom login endpoints, two-factor auth, and automated malware scanning.' }
    ],
    frictionKicker: 'The Heavy Builder Nightmare',
    frictionTitle: 'The website crashes after every plugin update.<br>Why is WordPress so fragile?',
    frictionCopy: 'When agencies stack 40 plugins on top of a bloated visual builder, every security update risks breaking the entire website layout. True corporate WordPress development requires custom-coded, modular themes that remain stable for years.',
    outcomes: [
      { forWhom: 'For the Business Owner', title: 'A dependable corporate asset with zero downtime.', desc: 'Eliminate white-screen crashes, plugin conflicts, and vulnerability warnings.' },
      { forWhom: 'For the Content Editor', title: 'Effortless publishing with custom blocks.', desc: 'Add case studies, team members, and blogs easily without touching code or breaking designs.' },
      { forWhom: 'For the Search Engine', title: 'Clean semantic HTML that Google loves.', desc: 'High Google Lighthouse scores, instant mobile indexing, and validated schema markup.' }
    ],
    tourKicker: 'WordPress Engineering',
    tourTitle: 'How Inrank builds high-performance WordPress platforms.',
    workflows: [
      {
        q: "Why do custom Gutenberg blocks outperform Elementor and WPBakery?",
        kicker: "Asset Payload & CSS Architecture",
        desc: "Page builders load megabytes of unused layout libraries on every single page view. Our custom Gutenberg blocks only enqueue the exact CSS and JS needed for visible components, reducing page weight by 80%.",
        decision: "Develop bespoke, lightweight Gutenberg blocks matched to your design tokens.",
        steps: ["Block Architecture", "Asset Scoping", "Speed Benchmarking"]
      },
      {
        q: "How do you protect WordPress sites from malware and brute-force attacks?",
        kicker: "Hardened Security & Server Permissions",
        desc: "We obscure default WordPress URLs, disable XML-RPC, enforce two-factor authentication, set strict file permissions, and route traffic through Cloudflare enterprise WAF.",
        decision: "Implement 12-point enterprise security protocol on every deployment.",
        steps: ["Login URL Obfuscation", "Cloudflare WAF Rules", "Automated Daily Backups"]
      },
      {
        q: "Can you optimize our existing slow WordPress site without rebuilding everything?",
        kicker: "WordPress Speed Diagnostic & Core Web Vitals Sprint",
        desc: "Yes. In our 48-hour speed audit, we audit database queries, eliminate orphan database tables, configure Redis object caching, convert images to WebP, and inline critical CSS.",
        decision: "Guarantee sub-1.5s mobile LCP load times on your existing server.",
        steps: ["Database Query Tuning", "Object Cache Setup", "Image Optimization"]
      }
    ],
    equationKicker: 'The CMS Efficiency Equation',
    equationTitle: 'One formula, with its assumptions visible.',
    equation: {
      b1Title: 'Bespoke Theme Code',
      b1Val: 'Zero Page Builder Bloat',
      sign1: '+',
      b2Title: 'Edge Server Caching',
      b2Val: 'Sub-Second Response Times',
      sign2: '=',
      b3Title: 'Total Stability',
      b3Val: '99.9% Uptime & 90+ Speed Score'
    },
    equationCopy: 'Clean WordPress engineering delivers the best of both worlds: complete visual customization for visitors and total editing ease for your team.',
    threadKicker: 'Evidence Into Action',
    threadTitle: 'From design prototype to live WordPress portal.',
    threadCopy: 'We build custom child themes, configure staging servers, and provide comprehensive staff training.',
    threadSteps: [
      { num: '01', title: 'Requirements', desc: 'Identify content types, custom post types & editorial workflows' },
      { num: '02', title: 'Theme Development', desc: 'Code bespoke HTML5/CSS WordPress theme with zero builder dependencies' },
      { num: '03', title: 'Block Building', desc: 'Create custom Gutenberg blocks for headers, grids, and CTA cards' },
      { num: '04', title: 'Content Migration', desc: 'Transfer legacy blog posts, case studies & customer data safely' },
      { num: '05', title: 'Security Hardening', desc: 'Apply custom security rules, SSL certificates & firewall filters' },
      { num: '06', title: 'Speed Tuning', desc: 'Configure Redis caching, WebP compression & CDN distribution' },
      { num: '07', title: 'Handover & Training', desc: 'Deliver admin credentials, video documentation & ongoing support' }
    ],
    principles: [
      { title: 'Clean code over visual builder plugins.', desc: 'We write lean PHP and CSS rather than relying on bloated drag-and-drop builders.' },
      { title: 'Sub-second mobile performance.', desc: 'Every WordPress deployment is optimized to pass Google Core Web Vitals on mobile.' },
      { title: 'Full administrative control.', desc: 'You receive complete Administrator access and full source code ownership.' },
      { title: 'Local technical support.', desc: 'Direct assistance and rapid troubleshooting from our Baner engineering lab.' }
    ],
    faqs: [
      { q: 'Do you use Elementor or pre-made themes?', a: 'No. We build custom, lightweight Gutenberg blocks and bespoke themes from scratch to guarantee sub-second speed and total stability.' },
      { q: 'Can our internal marketing team easily edit content?', a: 'Yes. You receive an intuitive, uncluttered WordPress admin dashboard where editing text, images, and blogs is as simple as typing in a Word document.' },
      { q: 'How long does WordPress development take?', a: 'Standard corporate WordPress platforms are built, tested, and deployed within 7 to 12 business days.' },
      { q: 'Will our WordPress site be secure from hackers?', a: 'Yes. We apply enterprise security hardening: two-factor authentication, custom login URLs, disabled REST API endpoints, and automated cloud backups.' },
      { q: 'What are your WordPress development charges?', a: 'Our custom WordPress development packages start from ₹14,999 for corporate platforms and up to ₹28,999 for complex multi-service portals.' }
    ]
  },

  // 5. Ecommerce Website Development Company
  {
    slug: 'ecommerce-website-development-company',
    name: 'Ecommerce Website Development Company in Pune',
    pillar: 2,
    pillarName: 'High-Performance Web',
    kicker: 'INRANK COMMERCE ENGINEERING · MULTI-PLATFORM STORE LAB',
    title: 'Online stores built for scale.<br><em>Engineered for maximum checkout conversion.</em>',
    metaTitle: 'Ecommerce Website Development Company in Pune | Custom E-Com | Inrank',
    metaDesc: 'Inrank is an ecommerce website development company in Pune building secure, fast online stores on Shopify, WooCommerce, and custom headless platforms.',
    heroLede: 'Building an online store is easy; building a store that consistently converts mobile ad traffic into profitable transactions requires serious engineering. Inrank builds secure, lightning-fast e-commerce platforms tailored for Indian payment gateways, courier automation, and high customer lifetime value.',
    decisionOverline: 'From Visitor Sessions to Completed Orders',
    decisionTitle: 'Every profitable store<br>starts with <em>frictionless UX.</em>',
    decisionSteps: [
      { num: '01', title: 'Instant sub-second mobile catalogue load', desc: 'Browse thousands of SKUs without browser lag or image buffering.' },
      { num: '02', title: 'Seamless Indian payment gateway setup', desc: 'Native UPI, Razorpay, Cashfree, credit cards, and OTP-verified COD.' },
      { num: '03', title: 'Automated courier logistics sync', desc: 'Real-time order sync with Shiprocket, Delhivery, and automated tracking.' }
    ],
    frictionKicker: 'The E-Commerce Profit Drain',
    frictionTitle: 'Traffic is coming to the store.<br>Why is checkout abandonment so high?',
    frictionCopy: 'Complicated checkout flows, unexpected shipping fees, slow loading speeds, and unreliable payment gateways cause up to 80% of shoppers to abandon their carts. We eliminate every point of friction.',
    outcomes: [
      { forWhom: 'For the Brand Owner', title: 'Higher gross revenue and Average Order Value.', desc: 'Boost sales with automated product bundles, 1-click upsells, and instant checkout.' },
      { forWhom: 'For the Logistics Team', title: 'Automated label printing and manifest generation.', desc: 'Orders flow straight to your warehouse and courier partners without manual data entry.' },
      { forWhom: 'For the Customer', title: 'Instant shopping and reliable payment processing.', desc: 'Enjoy effortless 1-tap UPI payments, real-time tracking, and automated WhatsApp updates.' }
    ],
    tourKicker: 'Commerce Systems',
    tourTitle: 'How Inrank engineers high-performance online stores.',
    workflows: [
      {
        q: "Which platform is best for our store: Shopify, WooCommerce, or Custom Headless?",
        kicker: "Platform Selection & Scalability Modeling",
        desc: "We analyze your SKU count, order volume, transaction fees, and customization needs to recommend the ideal platform: Shopify for turnkey speed, WooCommerce for total control, or Headless Next.js for high-volume scale.",
        decision: "Select the optimal commercial platform matched to your 3-year revenue roadmap.",
        steps: ["SKU & Volume Modeling", "TCO Fee Analysis", "Architecture Selection"]
      },
      {
        q: "How do you minimize Cash on Delivery (COD) return-to-origin (RTO) rates?",
        kicker: "Automated COD OTP Verification",
        desc: "High RTO rates destroy e-commerce margins in India. We implement automated WhatsApp/SMS OTP confirmation on COD orders and flag high-risk delivery addresses before dispatch.",
        decision: "Deploy automated RTO fraud prevention and COD verification workflows.",
        steps: ["Address Validation API", "WhatsApp OTP Trigger", "High-Risk Order Flagging"]
      },
      {
        q: "How do you ensure the online store ranks on Google for product keywords?",
        kicker: "E-Commerce SEO & Product Schema Injection",
        desc: "We build hierarchical collection structures, inject JSON-LD Product schema (price, availability, reviews), and optimize meta titles so Google features your products in Google Shopping and organic search.",
        decision: "Automate rich snippet product schema across all active SKUs.",
        steps: ["Category Hierarchy Map", "Product Schema Markup", "Google Merchant Center Sync"]
      }
    ],
    equationKicker: 'The E-Commerce Revenue Multiplier',
    equationTitle: 'One formula, with its assumptions visible.',
    equation: {
      b1Title: 'High-Intent Traffic',
      b1Val: 'Organic Search + Paid Ads',
      sign1: '×',
      b2Title: 'Checkout Conversion',
      b2Val: 'Sub-Second Speed + 1-Tap UPI',
      sign2: '=',
      b3Title: 'Net Store Revenue',
      b3Val: 'Predictable Profitable Scale'
    },
    equationCopy: 'We align marketing traffic with flawless checkout engineering to compound store profitability.',
    threadKicker: 'Evidence Into Action',
    threadTitle: 'From store design to first online transaction.',
    threadCopy: 'Complete end-to-end e-commerce development sprint with full payment and courier testing.',
    threadSteps: [
      { num: '01', title: 'Catalog Architecture', desc: 'Organize category taxonomy, SKU variants & inventory tracking' },
      { num: '02', title: 'UI/UX Design', desc: 'Design mobile-first store wireframes focused on product discoverability' },
      { num: '03', title: 'Store Engineering', desc: 'Code responsive storefront with sub-second mobile loading speeds' },
      { num: '04', title: 'Payment Gateways', desc: 'Configure Razorpay, Cashfree, PhonePe UPI, and COD verification' },
      { num: '05', title: 'Logistics Setup', desc: 'Integrate Shiprocket/Delhivery API for automated shipping labels' },
      { num: '06', title: 'Testing & QA', desc: 'Run simulated transactions, refund tests, and mobile stress testing' },
      { num: '07', title: 'Launch & Marketing', desc: 'Activate Google Shopping feeds, Meta catalog sync, and store go-live' }
    ],
    principles: [
      { title: 'Sub-second mobile checkout.', desc: 'Every checkout step is optimized to load instantly without unnecessary form fields.' },
      { title: 'Zero vendor lock-in.', desc: 'You own your store, product catalogs, customer database, and sales revenue.' },
      { title: 'Automated operational workflows.', desc: 'Courier dispatch, customer invoices, and inventory updates are fully automated.' },
      { title: 'Dedicated technical engineering in Pune.', desc: 'Direct support from our Baner development pod throughout your store\'s growth.' }
    ],
    faqs: [
      { q: 'How long does it take to develop a complete e-commerce website?', a: 'Standard online stores with up to 100 products are typically developed, integrated, and launched within 10 to 14 business days.' },
      { q: 'Can you integrate Indian courier services like Shiprocket?', a: 'Yes. We integrate Shiprocket, Delhivery, BlueDart, and automated courier tracking updates via WhatsApp.' },
      { q: 'Do you charge commissions on our online sales?', a: 'Never. Inrank charges a fixed development fee; you keep 100% of your store revenue and gross profits.' },
      { q: 'Can you migrate our products from an existing store?', a: 'Yes. We migrate SKUs, product descriptions, pricing, high-resolution imagery, and customer order history securely.' },
      { q: 'What are your e-commerce development charges in Pune?', a: 'Our e-commerce store packages start from ₹18,999 for modern Shopify/WooCommerce setups, with custom enterprise architectures up to ₹45,000.' }
    ]
  },

  // 6. Conversion Rate Optimization (CRO) Services
  {
    slug: 'conversion-rate-optimization-services',
    name: 'Conversion Rate Optimization (CRO) Services',
    pillar: 4,
    pillarName: 'Brand & CRO Optimization',
    kicker: 'INRANK CONVERSION LAB · BEHAVIORAL SCIENCE PUNE',
    title: 'Double your website revenue.<br><em>Without spending an extra rupee on ads.</em>',
    metaTitle: 'Conversion Rate Optimization Services in Pune | CRO Agency | Inrank',
    metaDesc: 'Inrank provides conversion rate optimization services in Pune: CRO audits, A/B testing, user session recordings, and landing page optimization that turn visitors into leads.',
    heroLede: 'Driving traffic to an unoptimized website is like pouring water into a leaky bucket. Inrank provides scientific Conversion Rate Optimization: behavioral heatmaps, user session teardowns, persuasive copywriting, A/B split testing, and frictionless mobile checkouts.',
    decisionOverline: 'From Leaky Funnels to Revenue Acceleration',
    decisionTitle: 'Every conversion surge<br>starts with <em>data.</em>',
    decisionSteps: [
      { num: '01', title: 'Identify exact drop-off bottlenecks', desc: 'Pinpoint where visitors abandon forms, product pages, and checkout screens.' },
      { num: '02', title: 'Behavioral A/B hypothesis testing', desc: 'Testing high-impact headline changes, CTA button placements, and offer framing.' },
      { num: '03', title: 'Frictionless conversion pathways', desc: 'Deploying 1-tap WhatsApp triggers, autofill inputs, and trust guarantees.' }
    ],
    frictionKicker: 'The Traffic Myth',
    frictionTitle: 'Traffic is up 200%.<br>Why hasn\'t revenue doubled?',
    frictionCopy: 'Most agencies tell you to buy more ads whenever revenue stalls. If your conversion rate is 1%, 99 out of 100 visitors leave without buying. Lifting conversion to 2% doubles your revenue immediately without increasing ad spend.',
    outcomes: [
      { forWhom: 'For the Business Owner', title: 'Instant revenue lift from existing website traffic.', desc: 'Extract significantly more inquiries and orders from the visitors already browsing your website.' },
      { forWhom: 'For the Marketing Director', title: 'Lower Customer Acquisition Cost (CAC).', desc: 'Make every Google and Meta ad dollar twice as effective by improving landing page conversion rates.' },
      { forWhom: 'For the Sales Team', title: 'Higher quality leads with higher purchase intent.', desc: 'Receive inquiries from prospects who have read your value propositions and are ready to buy.' }
    ],
    tourKicker: 'CRO Methodology',
    tourTitle: 'How Inrank optimizes websites for maximum conversion.',
    workflows: [
      {
        q: "Why do visitors land on our website and leave without inquiring?",
        kicker: "Heuristic Audit & Cognitive Friction Analysis",
        desc: "Visitors leave when value propositions are vague, page load speeds are slow (> 2s), or primary call-to-action buttons are buried beneath decorative graphics. We audit your pages for clarity, contrast, and credibility.",
        decision: "Restructure above-the-fold content to present immediate, undeniable commercial value.",
        steps: ["Heatmap Diagnostic", "Heuristic Teardown", "Copywriting Restructure"]
      },
      {
        q: "How do you run A/B split tests without breaking our live website?",
        kicker: "Client-Side & Server-Side Split Testing",
        desc: "We deploy controlled A/B test variations using Google Tag Manager or lightweight testing scripts, directing 50% of traffic to the new variation to measure conversion lift with statistical significance.",
        decision: "Only implement permanent code changes when variations prove a statistically significant win.",
        steps: ["Hypothesis Formulation", "Variant Deployment", "Significance Verification"]
      },
      {
        q: "How does mobile form optimization impact lead generation in India?",
        kicker: "Mobile Ergonomics & 1-Tap Lead Funnels",
        desc: "Long 10-field forms cause 80% mobile drop-off. We replace long forms with 2-step micro-forms, auto-detect mobile keyboards (numeric for phone numbers), and add direct WhatsApp chat buttons.",
        decision: "Reduce form friction to the absolute minimum necessary for sales qualification.",
        steps: ["Field Pruning", "Input Type Optimization", "WhatsApp Direct Trigger"]
      }
    ],
    equationKicker: 'The Conversion Multiplier Equation',
    equationTitle: 'One formula, with its assumptions visible.',
    equation: {
      b1Title: 'Existing Traffic',
      b1Val: '10,000 Monthly Visitors',
      sign1: '×',
      b2Title: 'Conversion Lift',
      b2Val: '1.2% to 2.8% Conversion Rate',
      sign2: '=',
      b3Title: 'Net Inquiries',
      b3Val: '160 Additional Leads / mo'
    },
    equationCopy: 'Conversion rate optimization is the single highest-ROI activity in digital growth because it compounds existing traffic assets.',
    threadKicker: 'Evidence Into Action',
    threadTitle: 'Structured 30-day conversion optimization sprint.',
    threadCopy: 'We analyze session recordings, deploy test variations, and report verifiable conversion lift.',
    threadSteps: [
      { num: '01', title: 'Teardown', desc: 'Install heatmaps & record 500+ real user interaction sessions' },
      { num: '02', title: 'Friction Audit', desc: 'Identify form drop-offs, broken links & mobile navigation friction' },
      { num: '03', title: 'Hypothesis', desc: 'Formulate high-conviction testing hypotheses for headlines & CTAs' },
      { num: '04', title: 'Prototype', desc: 'Design high-converting challenger wireframes in Figma' },
      { num: '05', title: 'A/B Testing', desc: 'Split traffic 50/50 and measure conversion goal completions' },
      { num: '06', title: 'Analysis', desc: 'Verify statistical significance (p < 0.05) on revenue metrics' },
      { num: '07', title: 'Code Integration', desc: 'Ship winning variants permanently to your production repository' }
    ],
    principles: [
      { title: 'Data over subjective opinion.', desc: 'We test real user behavior with analytics rather than guessing what looks nice.' },
      { title: 'Commercial revenue over micro-clicks.', desc: 'We optimize for qualified leads and sales, not vanity button clicks.' },
      { title: 'Zero page speed penalties.', desc: 'Our CRO scripts are lightweight and never drag down Core Web Vitals.' },
      { title: 'Transparent statistical reporting.', desc: 'We share complete raw data and conversion metrics with your team.' }
    ],
    faqs: [
      { q: 'How much traffic is required for Conversion Rate Optimization?', a: 'For statistical significance in A/B testing, we recommend at least 3,000 to 5,000 monthly visitors, though heuristic UX audits provide immediate value at any traffic level.' },
      { q: 'How much conversion lift can we expect?', a: 'Across our Pune client portfolio, our CRO sprints typically deliver a 35% to 80% increase in lead generation within 30 to 60 days.' },
      { q: 'Do you rewrite our website sales copy as part of CRO?', a: 'Yes. Copywriting is often the highest-leverage conversion variable; we craft high-impact value propositions and clear benefit bullets.' },
      { q: 'Will CRO testing slow down our website?', a: 'No. We use lightweight testing configurations that execute asynchronously without hurting Google Core Web Vitals.' },
      { q: 'What is the cost of an Inrank CRO audit sprint?', a: 'Our standalone CRO Heuristic Audit & Action Plan is ₹14,999; full 60-day testing retainers are ₹24,999/month.' }
    ]
  },

  // 7. Corporate Logo Design
  {
    slug: 'corporate-logo-design',
    name: 'Corporate Logo Design in Pune',
    pillar: 4,
    pillarName: 'Brand & CRO Optimization',
    kicker: 'INRANK IDENTITY LAB · STRATEGIC LOGO DESIGN PUNE',
    title: 'Distinctive visual identity.<br><em>Built to inspire immediate commercial trust.</em>',
    metaTitle: 'Corporate Logo Design Company in Pune | Brand Identity | Inrank',
    metaDesc: 'Inrank provides corporate logo design from a logo design company in Pune: professional logos, brand guidelines, vector kits, and full identity suites for ambitious businesses.',
    heroLede: 'A generic, amateur logo from a freelance contest platform harms your company\'s commercial credibility before you even quote a prospect. Inrank crafts timeless, strategic corporate logo marks: distinctive iconography, custom typography, brand guideline manuals, and scalable vector assets.',
    decisionOverline: 'From Cliché Icons to Corporate Prestige',
    decisionTitle: 'Every iconic brand<br>starts with <em>distinction.</em>',
    decisionSteps: [
      { num: '01', title: 'Strategic competitive positioning', desc: 'Analyzing industry visual clichés to craft a distinctive, unique symbol.' },
      { num: '02', title: 'Versatile vector scalability', desc: 'Crafting logos that look razor-sharp on a 16px favicon or a 40-foot billboard.' },
      { num: '03', title: 'Comprehensive brand standards manual', desc: 'Documenting exact hex colors, typography pairings, and usage rules.' }
    ],
    frictionKicker: 'The Amateur Logo Risk',
    frictionTitle: 'The logo was ₹999 on a freelance app.<br>Why does the company look cheap?',
    frictionCopy: 'Cheap template logos use stock vector shapes shared with thousands of other businesses. When prospective B2B clients visit your website, an amateur logo subconsciously signals low product quality and unreliable operations.',
    outcomes: [
      { forWhom: 'For the Business Owner', title: 'Command premium pricing in your market.', desc: 'High-end brand identity positions your firm alongside market leaders and justifies premium quotation rates.' },
      { forWhom: 'For the Marketing Team', title: 'Consistent visual branding across every medium.', desc: 'Receive complete brand style guides and vector formats (SVG, EPS, PNG, PDF) for flawless printing and digital use.' },
      { forWhom: 'For the Company Legacy', title: 'A timeless identity that endures for decades.', desc: 'Avoid trendy graphic fads with classic geometric proportions and memorable typography.' }
    ],
    tourKicker: 'Design Standards',
    tourTitle: 'How Inrank crafts strategic corporate identities.',
    workflows: [
      {
        q: "What is the difference between an amateur logo and a strategic corporate mark?",
        kicker: "Simplicity, Scalability & Trademark Defensibility",
        desc: "Amateur logos use complex 3D gradients, thin lines, and clip-art icons that blur on mobile screens and cannot be embroidered. Strategic corporate marks use clean geometric geometry with clear negative space.",
        decision: "Design timeless vector marks that scale effortlessly from digital favicons to physical building signage.",
        steps: ["Monochrome Contrast Test", "Scalability Verification", "Trademark Availability Screen"]
      },
      {
        q: "What files and formats do we receive upon final delivery?",
        kicker: "Complete Vector Master Assets Suite",
        desc: "You receive editable vector masters (AI, EPS, SVG, PDF) alongside high-resolution raster files (transparent PNG, WebP) in full-color, reversed-white, and solid-black variations.",
        decision: "Provide an organized cloud folder with every format required by printers, sign makers, and web developers.",
        steps: ["Vector Export", "Color Profile Calibration (CMYK & RGB)", "Master Cloud Archive"]
      },
      {
        q: "Do you provide brand guidelines for fonts and colors?",
        kicker: "Brand Identity Guidelines Manual",
        desc: "Yes. Every corporate logo project includes a 12-to-20 page Brand Guidelines manual specifying primary/secondary color palettes (Pantone, CMYK, RGB, HEX), typography hierarchy, minimum clear space, and forbidden usage.",
        decision: "Deliver a standardized PDF brand manual to ensure long-term visual consistency.",
        steps: ["Color Calibration", "Typography Pairing", "Guidelines Manual Assembly"]
      }
    ],
    equationKicker: 'The Brand Equity Equation',
    equationTitle: 'One formula, with its assumptions visible.',
    equation: {
      b1Title: 'Distinctive Identity',
      b1Val: 'Memorable Corporate Logo Mark',
      sign1: '+',
      b2Title: 'Consistent Execution',
      b2Val: 'Unified Brand Standards',
      sign2: '=',
      b3Title: 'Commercial Premium',
      b3Val: 'Higher Perceived Value & Trust'
    },
    equationCopy: 'Premium brand positioning allows ambitious businesses to win high-ticket contracts and stand out uncontested.',
    threadKicker: 'Evidence Into Action',
    threadTitle: 'From initial briefing to finalized identity in 7-10 days.',
    threadCopy: 'We present 3 distinctive conceptual directions with real-world mockups and refine your chosen mark.',
    threadSteps: [
      { num: '01', title: 'Discovery', desc: 'Brand values, audience psychology & competitor visual positioning' },
      { num: '02', title: 'Sketching', desc: 'Rapid ideation & geometric concept drafting in Baner Design Lab' },
      { num: '03', title: 'Vectorization', desc: 'Precision digital vector construction with mathematical grid systems' },
      { num: '04', title: 'Presentation', desc: 'Present 3 bespoke concepts on corporate stationery, signage & web' },
      { num: '05', title: 'Refinement', desc: 'Collaborative revision sprint on color shades and typographic kerning' },
      { num: '06', title: 'Master Exports', desc: 'Generate complete print-ready (CMYK) and digital (RGB) asset packages' },
      { num: '07', title: 'Brand Manual', desc: 'Deliver comprehensive brand standards guide and copyright release' }
    ],
    principles: [
      { title: 'Simplicity is timeless.', desc: 'The world\'s most enduring logos are simple enough to be recognized in a fraction of a second.' },
      { title: '100% original custom artwork.', desc: 'Zero stock vector templates or AI clip-art; every mark is hand-crafted in our studio.' },
      { title: 'Full copyright & IP ownership.', desc: 'Complete legal transfer of all intellectual property rights to your business upon delivery.' },
      { title: 'Direct collaboration with designers.', desc: 'Collaborate directly with lead identity architects in Baner, Pune.' }
    ],
    faqs: [
      { q: 'How many logo concepts do you present?', a: 'We develop and present 3 distinct, thoughtfully crafted conceptual directions, each explored with real-world mockups (business cards, signage, and website headers).' },
      { q: 'How many revisions are included in the project?', a: 'Our corporate identity packages include up to 3 rounds of structured revisions to dial in exact typography, color palettes, and geometric proportions.' },
      { q: 'Do we own the full copyright to the logo design?', a: 'Yes. Upon final payment, 100% of all intellectual property and commercial copyright is transferred to your company.' },
      { q: 'Can you design our business cards and letterheads too?', a: 'Yes. We offer complete corporate stationery suites, packaging design, company profile brochures, and digital presentation decks.' },
      { q: 'What is the investment for corporate logo design in Pune?', a: 'Our Corporate Identity Sprint starts at ₹11,999 for logo and core vector files; full identity systems with brand guideline manuals range from ₹18,999 to ₹28,000.' }
    ]
  }
];

remaining7.forEach(s => {
  map.set(s.slug, s);
});

console.log(`Total services in master catalog: ${map.size} (Expected: 27).`);

// Helper to build the unified Inrank 2.0 nav bar HTML
function getHeaderHtml(activeSlug) {
  return `  <!-- Unified Vinove 2026 Floating Dock Header -->
  <header id="nav" class="nav-dock" data-dock="default">
    <div class="nav-bar">
      <!-- Inrank Brand Logo -->
      <a href="/" class="nav-logo" aria-label="Inrank Technologies Home">
        <img src="/img/inrank-dark-logo.svg" alt="Inrank Technologies" width="36" height="36" class="logo-icon logo-icon--dark" />
        <img src="/img/inrank-white-logo.svg" alt="Inrank Technologies" width="36" height="36" class="logo-icon logo-icon--white" />
        <div class="nav-logo-brand">
          <span class="nav-logo-name">Inrank</span>
          <span class="nav-logo-sub">Technologies</span>
        </div>
      </a>

      <!-- Desktop Navigation Links -->
      <nav class="nav-links" aria-label="Main Navigation">
        <!-- Services with Mega Dropdown -->
        <div class="nav-item" data-dropdown="services">
          <button class="nav-link nav-link--drop active" aria-expanded="false" aria-haspopup="true">
            <span>Services</span>
            <svg class="nav-chev" viewBox="0 0 12 12" width="12" height="12" aria-hidden="true">
              <path d="M2.5 4.5L6 8L9.5 4.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>

          <!-- Full Width Horizontal Multimedia Mega Dropdown -->
          <div class="nav-drop drop-mega" role="region" aria-label="Capabilities Directory">
            <div class="mega-shell">
              <!-- Left: Feature Rail -->
              <div class="mega-rail">
                <span class="mega-rail-kicker">DIGITAL CAPABILITIES</span>
                <h3 class="mega-rail-title">Full-Stack<br>Growth Engineering</h3>
                <p class="mega-rail-desc">
                  We replace fragmented agencies with an accountable, high-performance growth engineering partner.
                </p>
                <a href="/services.html" class="mega-rail-link">
                  <span>Explore all 27 services</span>
                  <svg viewBox="0 0 12 12" width="12" height="12" aria-hidden="true"><path d="M1 11L11 1M11 1H4M11 1V8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                </a>
              </div>

              <!-- Right: 4 Core Pillars Grid -->
              <div class="mega-grid">
                <!-- Pillar 1: Search & AI Discovery -->
                <div class="mega-col">
                  <a href="/services.html#pillar-1" class="mega-col-head">
                    <span class="mega-col-ico"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></span>
                    <div>
                      <span class="mega-col-name">Search &amp; AI Discovery</span>
                      <span class="mega-col-sub">SEO in Pune, GEO &amp; Google 3-Pack</span>
                    </div>
                    <svg class="mega-col-arr" viewBox="0 0 12 12" width="11" height="11" aria-hidden="true"><path d="M1 11L11 1M11 1H4M11 1V8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                  </a>
                  <ul class="mega-links" role="list">
                    <li><a href="/services/seo-company-pune.html">SEO Company Pune</a></li>
                    <li><a href="/services/ai-seo-services.html">AI SEO Services</a></li>
                    <li><a href="/services/geo-seo-agency.html">GEO &amp; Answer Engines</a></li>
                    <li><a href="/services/google-my-business-services.html">Google 3-Pack &amp; Maps</a></li>
                    <li><a href="/services/link-building-services.html">Authority Link Building</a></li>
                    <li><a href="/services/ai-ranking-citations.html">AI Citations</a></li>
                    <li><a href="/services/content-marketing-services.html">Content Marketing</a></li>
                  </ul>
                </div>

                <!-- Pillar 2: High-Performance Web -->
                <div class="mega-col">
                  <a href="/services.html#pillar-2" class="mega-col-head">
                    <span class="mega-col-ico"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></span>
                    <div>
                      <span class="mega-col-name">High-Performance Web</span>
                      <span class="mega-col-sub">Custom Next.js, WordPress &amp; E-Commerce</span>
                    </div>
                    <svg class="mega-col-arr" viewBox="0 0 12 12" width="11" height="11" aria-hidden="true"><path d="M1 11L11 1M11 1H4M11 1V8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                  </a>
                  <ul class="mega-links" role="list">
                    <li><a href="/services/custom-website-development.html">Custom Web Development</a></li>
                    <li><a href="/services/wordpress-development-services.html">WordPress Development</a></li>
                    <li><a href="/services/ecommerce-website-development-company.html">E-Commerce Development</a></li>
                    <li><a href="/services/shopify-store-development.html">Shopify Stores</a></li>
                    <li><a href="/services/mobile-app-development.html">Mobile App Engineering</a></li>
                    <li><a href="/services/website-maintenance-services.html">Website Maintenance</a></li>
                    <li><a href="/services/landing-page-design-services.html">Landing Page Sprints</a></li>
                  </ul>
                </div>

                <!-- Pillar 3: Performance Marketing -->
                <div class="mega-col">
                  <a href="/services.html#pillar-3" class="mega-col-head">
                    <span class="mega-col-ico"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></span>
                    <div>
                      <span class="mega-col-name">Performance Marketing</span>
                      <span class="mega-col-sub">Google Ads, Meta &amp; High-ROI Funnels</span>
                    </div>
                    <svg class="mega-col-arr" viewBox="0 0 12 12" width="11" height="11" aria-hidden="true"><path d="M1 11L11 1M11 1H4M11 1V8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                  </a>
                  <ul class="mega-links" role="list">
                    <li><a href="/services/ppc-services.html">PPC Management</a></li>
                    <li><a href="/services/google-ads-agency.html">Google Ads Agency</a></li>
                    <li><a href="/services/meta-ads-agency.html">Meta &amp; Instagram Ads</a></li>
                    <li><a href="/services/linkedin-marketing-agency.html">LinkedIn B2B Marketing</a></li>
                    <li><a href="/services/social-media-marketing-services.html">Social Media Growth</a></li>
                    <li><a href="/services/influencer-marketing-agency.html">Influencer Campaigns</a></li>
                  </ul>
                </div>

                <!-- Pillar 4: Brand & CRO Optimization -->
                <div class="mega-col">
                  <a href="/services.html#pillar-4" class="mega-col-head">
                    <span class="mega-col-ico"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93"/></svg></span>
                    <div>
                      <span class="mega-col-name">Brand &amp; CRO Optimization</span>
                      <span class="mega-col-sub">UI/UX, Brand Identity &amp; Conversions</span>
                    </div>
                    <svg class="mega-col-arr" viewBox="0 0 12 12" width="11" height="11" aria-hidden="true"><path d="M1 11L11 1M11 1H4M11 1V8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                  </a>
                  <ul class="mega-links" role="list">
                    <li><a href="/services/ui-ux-design-services.html">UI/UX Design Systems</a></li>
                    <li><a href="/services/conversion-rate-optimization-services.html">Conversion Optimization</a></li>
                    <li><a href="/services/corporate-logo-design.html">Corporate Logo Design</a></li>
                    <li><a href="/services/brand-naming-agency.html">Brand Naming Agency</a></li>
                    <li><a href="/services/brochure-design-services.html">Brochure &amp; Collateral</a></li>
                    <li><a href="/services/letterhead-stationery-design.html">Letterhead &amp; Stationery</a></li>
                    <li><a href="/services/luxury-business-card-design.html">Luxury Business Cards</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a href="/pricing.html" class="nav-link"><span>Pricing</span></a>

        <!-- Our Work Dropdown -->
        <div class="nav-item" data-dropdown="work">
          <button class="nav-link nav-link--drop" aria-expanded="false" aria-haspopup="true">
            <span>Our Work</span>
            <svg class="nav-chev" viewBox="0 0 12 12" width="12" height="12" aria-hidden="true">
              <path d="M2.5 4.5L6 8L9.5 4.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="nav-drop drop-simple" role="menu">
            <a href="/our-work/fludio.html" class="drop-link">Fludio Media</a>
            <a href="/our-work/cytos.html" class="drop-link">CyTOS Machines</a>
            <a href="/our-work/greytothegreen.html" class="drop-link">Grey to the Green</a>
            <a href="/our-work/hiragrafix.html" class="drop-link">Hira Grafix</a>
            <a href="/our-work/shetkarifoodstuff.html" class="drop-link">Shetkari Foodstuff</a>
            <a href="/our-work/vasroventures.html" class="drop-link">Vasro Ventures</a>
            <div class="drop-divider"></div>
            <a href="/our-work.html" class="drop-link drop-link--all">
              <span>View All 50+ Projects</span>
              <svg viewBox="0 0 12 12" width="10" height="10" aria-hidden="true"><path d="M2 6h8M6 2l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            </a>
          </div>
        </div>

        <a href="/case-studies.html" class="nav-link"><span>Case Studies</span></a>

        <!-- About Dropdown -->
        <div class="nav-item" data-dropdown="about">
          <button class="nav-link nav-link--drop" aria-expanded="false" aria-haspopup="true">
            <span>About</span>
            <svg class="nav-chev" viewBox="0 0 12 12" width="12" height="12" aria-hidden="true">
              <path d="M2.5 4.5L6 8L9.5 4.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="nav-drop drop-simple" role="menu">
            <a href="/about.html" class="drop-link">About Inrank</a>
            <a href="/about.html#leadership" class="drop-link">Leadership &amp; Engineers</a>
            <a href="/about.html#process" class="drop-link">Our Proven Methodology</a>
            <a href="/about.html#guarantees" class="drop-link">Operating Guarantees</a>
          </div>
        </div>

        <a href="/blog.html" class="nav-link"><span>Blog</span></a>
        <a href="/contact.html" class="nav-link"><span>Contact</span></a>
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
      <a href="/services.html" class="mob-link active">All 27 Services</a>
      <a href="/pricing.html" class="mob-link">Pricing Packages</a>
      <a href="/our-work.html" class="mob-link">Our Work</a>
      <a href="/case-studies.html" class="mob-link">Case Studies</a>
      <a href="/about.html" class="mob-link">About Inrank</a>
      <a href="/blog.html" class="mob-link">Blog Hub</a>
      <a href="/contact.html" class="mob-link">Contact</a>
      <a href="/contact.html" class="mob-cta">Request Strategy Consultation</a>
    </nav>
  </div>`;
}

// Helper to build the unified Inrank 2.0 master homepage footer HTML
function getFooterHtml() {
  return `  <!-- ============================================================
       OACER-STYLE MASTER FOOTER (INRANK ARCHITECTURE)
       ============================================================ -->
  <footer data-nosnippet="true" class="ft">
    <div class="ft-glow" aria-hidden="true"></div>

    <!-- Top CTA Block -->
    <div class="ft-wrap ft-cta">
      <div>
        <p class="ft-label">Start a project</p>
        <h2 class="ft-title">
          Tell us what you’re building.
          <span>We’ll show you how we’d build it.</span>
        </h2>
      </div>

      <div class="ft-cta-side">
        <ul class="ft-points">
          <li>A reply within one business day</li>
          <li>Direct consultation with senior pod, no junior interns</li>
          <li>Full technical audit &amp; fixed milestone estimate</li>
        </ul>
        <div class="ft-btns">
          <a class="ft-btn" href="/contact.html">
            Start a project
            <svg stroke="currentColor" fill="none" stroke-width="2.2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" height="14" width="14">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
          <a href="https://wa.me/918788823182" class="ft-btn ft-btn--ghost" target="_blank" rel="noopener noreferrer">
            WhatsApp us
            <svg stroke="currentColor" fill="none" stroke-width="2.2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" height="14" width="14">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- 4-Column Grid -->
    <div class="ft-wrap ft-grid">
      <!-- Col 1: Brand & Pune Bio -->
      <div class="ft-brand">
        <a href="/" class="ft-brand-logo" aria-label="Inrank Technologies Home">
          <img src="/img/inrank-white-logo.svg" alt="Inrank Technologies" width="36" height="36" />
          <div style="display:flex;flex-direction:column;line-height:1.1;">
            <span style="font-size:1.25rem;font-weight:850;color:#ffffff;letter-spacing:-0.03em;">Inrank</span>
            <span style="font-size:0.65rem;font-weight:750;color:var(--green-hi, #34d399);letter-spacing:0.12em;text-transform:uppercase;">Technologies</span>
          </div>
        </a>
        <p>Performance-first digital growth engineering, conversion-engineered web platforms, and authoritative search dominance. Built by senior engineers in Baner, Pune since 2018.</p>
        
        <div class="ft-social">
          <a href="https://wa.me/918788823182" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="16" width="16"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          </a>
          <a href="https://www.linkedin.com/company/inranktech/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="16" width="16"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="https://www.instagram.com/inranktech/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="16" width="16"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="mailto:contact@inranktech.com" aria-label="Email">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="16" width="16"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </a>
          <a href="tel:+918788823182" aria-label="Phone">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="16" width="16"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </a>
        </div>
      </div>

      <!-- Col 2: Company -->
      <nav aria-labelledby="ft-company">
        <h3 id="ft-company">Company</h3>
        <ul>
          <li><a href="/about.html">About Inrank</a></li>
          <li><a href="/about.html#prasad-mhaske">Leadership Profile</a></li>
          <li><a href="/our-work.html">Our Work &amp; Portfolio</a></li>
          <li><a href="/case-studies.html">Case Studies</a></li>
          <li><a href="/pricing.html">Pricing Architecture</a></li>
          <li><a href="/contact.html">Baner Engineering Lab</a></li>
        </ul>
      </nav>

      <!-- Col 3: Expertise -->
      <nav aria-labelledby="ft-expertise">
        <h3 id="ft-expertise">Expertise</h3>
        <ul>
          <li><a href="/services/seo-company-pune.html">SEO Company Pune</a></li>
          <li><a href="/services/custom-website-development.html">Custom Web Development</a></li>
          <li><a href="/services/ppc-services.html">Google Ads &amp; PPC</a></li>
          <li><a href="/services/meta-ads-agency.html">Meta &amp; Instagram Ads</a></li>
          <li><a href="/services/ui-ux-design-services.html">Brand Identity &amp; CRO</a></li>
          <li><a href="/services.html">All 27 Services</a></li>
        </ul>
      </nav>

      <!-- Col 4: Pune HQ & Contact -->
      <div class="ft-hq">
        <h3>Pune HQ &amp; Lab</h3>
        <address>Baner Road, Near Balewadi High Street, Baner, Pune, Maharashtra 411045, India</address>
        <p>
          <a href="tel:+918788823182">Direct: (+91) 87888 23182</a>
          <a href="https://wa.me/918788823182">WhatsApp: (+91) 87888 23182</a>
          <a href="mailto:contact@inranktech.com">contact@inranktech.com</a>
        </p>
        <span class="ft-hq-corridors">Serving Baner · Balewadi · Hinjewadi · Aundh · Kothrud · PCMC Belt</span>
      </div>
    </div>

    <!-- Bottom Legal Bar -->
    <div class="ft-wrap ft-bar">
      <p>© 2026 Inrank Technologies Pvt Ltd · Baner, Pune, India. All rights reserved.</p>
      <nav aria-label="Legal">
        <a href="/privacy-policy.html">Privacy Policy</a>
        <a href="/terms-and-conditions.html">Terms of Service</a>
        <a href="/contact.html">Contact Us</a>
        <a href="https://wa.me/918788823182">Direct WhatsApp</a>
      </nav>
    </div>

    <!-- Giant Watermark Wordmark -->
    <p class="ft-mark" aria-hidden="true">INRANK</p>
  </footer>`;
}

// Master HTML template generator following Vinove Prism UI architecture
function buildVinovePrismServicePage(s) {
  const schemaJson = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://www.inranktech.com/services/${s.slug}.html#service`,
        "name": s.name,
        "serviceType": s.pillarName,
        "provider": {
          "@type": "Organization",
          "name": "Inrank Technologies",
          "url": "https://www.inranktech.com/",
          "telephone": "+918788823182",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Baner",
            "addressLocality": "Pune",
            "addressRegion": "Maharashtra",
            "postalCode": "411045",
            "addressCountry": "IN"
          }
        },
        "description": s.metaDesc,
        "areaServed": {
          "@type": "City",
          "name": "Pune"
        }
      },
      {
        "@type": "WebPage",
        "@id": `https://www.inranktech.com/services/${s.slug}.html`,
        "url": `https://www.inranktech.com/services/${s.slug}.html`,
        "name": s.metaTitle,
        "description": s.metaDesc,
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.inranktech.com/" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.inranktech.com/services.html" },
            { "@type": "ListItem", "position": 3, "name": s.name, "item": `https://www.inranktech.com/services/${s.slug}.html` }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": `https://www.inranktech.com/services/${s.slug}.html#faq`,
        "mainEntity": s.faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      }
    ]
  }, null, 2);

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

  <!-- OpenGraph / Social Metadata -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.inranktech.com/services/${s.slug}.html" />
  <meta property="og:title" content="${s.metaTitle}" />
  <meta property="og:description" content="${s.metaDesc}" />
  <meta property="og:image" content="https://www.inranktech.com/og-image.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${s.metaTitle}" />
  <meta name="twitter:description" content="${s.metaDesc}" />
  <meta name="twitter:image" content="https://www.inranktech.com/og-image.jpg" />

  <!-- Google Fonts: Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

  <!-- Master Stylesheets: Vinove Ecosystem + Inrank 2.0 Corporate -->
  <link rel="stylesheet" href="/css/nav.css" />
  <link rel="stylesheet" href="/css/service-ecosystem.css" />
  <link rel="stylesheet" href="/css/corporate.css" />
  <link rel="stylesheet" href="/css/footer-social.css" />

  <!-- Schema.org Structured Data (GEO / AEO / AI SEO / FAQPage) -->
  <script type="application/ld+json">
${schemaJson}
  </script>
</head>
<body class="theme-ecosystem">
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WLZ75BS8" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->

  <!-- Skip Link -->
  <a href="#main" class="skip-link">Skip to main content</a>

${getHeaderHtml(s.slug)}

  <main id="main">
    
    <!-- ══════════════════════════════════════════════════════════════════
         1. HERO SECTION (VINOVE PRISM DUAL-GRID ARCHITECTURE)
         ══════════════════════════════════════════════════════════════════ -->
    <section class="eco-hero prism-hero" aria-labelledby="hero-title">
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
            Inrank Growth Architecture. Guaranteed commercial accountability.
          </p>
        </div>

        <!-- Right: The Decision Card (Vinove Signature Decision Framework) -->
        <div class="prism-decision">
          <p class="prism-overline">${s.decisionOverline}</p>
          <h2>${s.decisionTitle}</h2>
          
          <ol>
            ${s.decisionSteps.map(step => `
            <li>
              <span>${step.num}</span>
              <div>
                <strong>${step.title}</strong>
                <p>${step.desc}</p>
              </div>
            </li>`).join('')}
          </ol>
        </div>

      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════════════
         2. STAKEHOLDER OUTCOMES (VINOVE PRISM STAKEHOLDER SECTION)
         ══════════════════════════════════════════════════════════════════ -->
    <section class="eco-section" aria-labelledby="outcomes-title">
      <div class="eco-shell">
        <span class="eco-kicker">${s.frictionKicker}</span>
        
        <div class="friction-split">
          <h2 class="eco-heading" id="outcomes-title">
            ${s.frictionTitle}
          </h2>
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
         3. PRACTICE TOUR & WORKFLOWS (VINOVE PRISM INTERACTIVE TOUR)
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
         4. THE HONEST PERFORMANCE EQUATION (VINOVE PRISM SIGNATURE)
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
         5. EXECUTION THREAD (.thread-map) (VINOVE 7-STEP SYSTEM)
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
          ${s.threadSteps.map(step => `
          <div class="thread-node">
            <span class="thread-idx">${step.num}</span>
            <h4>${step.title}</h4>
            <p>${step.desc}</p>
          </div>`).join('')}
        </div>

      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════════════
         6. ENGINEERING PRINCIPLES
         ══════════════════════════════════════════════════════════════════ -->
    <section class="eco-section" aria-labelledby="principles-title">
      <div class="eco-shell">
        <span class="eco-kicker">Operating Standard</span>
        <h2 class="eco-heading" id="principles-title">Engineering principles that protect client ROI.</h2>

        <div class="principles-grid">
          ${s.principles.map(p => `
          <div class="principle-card">
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
          </div>`).join('')}
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════════════
         7. CLEARLY ANSWERED FAQS (GEO / AEO / AI SEO ACCORDIONS)
         ══════════════════════════════════════════════════════════════════ -->
    <section class="eco-section eco-answer-section" aria-labelledby="answers-title">
      <div class="eco-shell answer-grid">
        <div>
          <span class="eco-kicker">Clearly Answered</span>
          <h2 class="eco-heading" id="answers-title">Frequently Asked Questions</h2>
          <p class="eco-copy">
            Everything business owners and growth leaders need to know before initiating a sprint with Inrank Technologies.
          </p>
        </div>

        <div class="answer-list">
          ${s.faqs.map((f, i) => `
          <details ${i === 0 ? 'open' : ''}>
            <summary>${f.q}<span aria-hidden="true">+</span></summary>
            <p>${f.a}</p>
          </details>`).join('')}
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════════════
         8. CLOSING ACTIONS (DUAL ACTION CARDS)
         ══════════════════════════════════════════════════════════════════ -->
    <section class="eco-section eco-closing" aria-labelledby="closing-title">
      <div class="eco-shell">
        
        <div class="closing-grid">
          <div class="eco-close-card dark">
            <div>
              <h3>Request Strategy Consultation</h3>
              <p>Receive an actionable 12-page technical audit and commercial revenue blueprint for your business within 48 hours.</p>
            </div>
            <a href="/contact.html" class="btn">
              <span>Book Strategy Session</span>
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

${getFooterHtml()}

  <script src="/js/core.js"></script>
</body>
</html>`;
}

// Generate all 27 services into both flat .html and directory index.html
let builtCount = 0;
for (const [slug, serviceObj] of map.entries()) {
  const html = buildVinovePrismServicePage(serviceObj);

  // 1. Flat file: inrank2.0/services/[slug].html
  const flatPath = path.join('inrank2.0/services', `${slug}.html`);
  fs.writeFileSync(flatPath, html, 'utf8');

  // 2. Directory index: inrank2.0/services/[slug]/index.html
  const dirPath = path.join('inrank2.0/services', slug);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  const indexPath = path.join(dirPath, 'index.html');
  fs.writeFileSync(indexPath, html, 'utf8');

  builtCount++;
  console.log(`[${builtCount}/27] Generated Vinove Prism UI for: /services/${slug}`);
}

console.log(`\nDONE! Successfully generated all ${builtCount} service pages with Vinove Prism UI architecture!`);

