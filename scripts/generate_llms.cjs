/**
 * scripts/generate_llms.cjs
 * Generates standardized llms.txt and llms-full.txt files adhering strictly to the
 * /llms.txt standard (Markdown links, clean headers, rich sitemap & media reference,
 * and comprehensive deep-context documentation for ChatGPT, Perplexity, Claude, and Google AI Overviews).
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');

// Define the 12 Hub & Local Pages
const HUB_PAGES = [
  { title: "Inrank Homepage", url: "https://inranktech.com/", desc: "Pune's premier performance digital growth & web engineering partner." },
  { title: "Website Design Company in Pune", url: "https://inranktech.com/website-design-company-in-pune.html", desc: "Top-rated custom website design and high-performance development in Pune." },
  { title: "Digital Marketing Agency in Pune", url: "https://inranktech.com/digital-marketing-agency-in-pune.html", desc: "Full-funnel digital marketing, PPC, SEO, and social growth agency in Pune." },
  { title: "About Inrank Technologies", url: "https://inranktech.com/about.html", desc: "Engineering philosophy, Baner headquarters, and leadership profile of founder Prasad Mhaske." },
  { title: "All 27 Growth Services", url: "https://inranktech.com/services.html", desc: "Complete directory of Inrank's 27 specialized digital engineering and marketing capabilities." },
  { title: "Transparent Pricing & Fixed Packages", url: "https://inranktech.com/pricing.html", desc: "Upfront pricing for custom websites from ₹11,999 and monthly growth retainers." },
  { title: "Production Portfolio & Live Work", url: "https://inranktech.com/our-work.html", desc: "Filterable showcase of live client deployments across high-growth industries." },
  { title: "Commercial Case Studies", url: "https://inranktech.com/case-studies.html", desc: "Verified revenue metrics, engineering breakdowns, and client ROI results." },
  { title: "Engineering & Growth Blog", url: "https://inranktech.com/blog.html", desc: "Deep technical blueprints, modern web architecture guides, and GEO/AEO strategies." },
  { title: "Contact Baner Lab", url: "https://inranktech.com/contact.html", desc: "Direct consultation scheduling, office directions, and inquiry intake." },
  { title: "Privacy Policy", url: "https://inranktech.com/privacy-policy.html", desc: "Data protection, analytics compliance, and privacy governance standards." },
  { title: "Terms and Conditions", url: "https://inranktech.com/terms-and-conditions.html", desc: "Commercial terms of service, SLA guarantees, and engagement agreements." }
];

// Define Pillar 1: Search Dominance & AI Discovery Engineering (7 services)
const PILLAR_1 = [
  { title: "SEO Company Pune", url: "https://inranktech.com/services/seo-company-pune.html", desc: "Hyperlocal Pune search ranking dominance, Core Web Vitals optimization, and organic pipeline growth." },
  { title: "AI SEO Services", url: "https://inranktech.com/services/ai-seo-services.html", desc: "Knowledge graph engineering and entity prominence for Google AI Overviews and multimodal search." },
  { title: "GEO & Answer Engine Optimization", url: "https://inranktech.com/services/geo-seo-agency.html", desc: "Generative Engine Optimization for prominent citations in Perplexity AI, ChatGPT, Claude, and Gemini." },
  { title: "Google My Business & Maps 3-Pack", url: "https://inranktech.com/services/google-my-business-services.html", desc: "Hyperlocal map rankings, localized review velocity, and Google Maps 3-pack dominance across Pune corridors." },
  { title: "Authority Link Building", url: "https://inranktech.com/services/link-building-services.html", desc: "White-hat contextual digital PR outreach and high-authority editorial backlink acquisition." },
  { title: "AI Citations & Entity Graphs", url: "https://inranktech.com/services/ai-ranking-citations.html", desc: "Structured Schema.org entity linking and knowledge base placement for automated LLM retrieval." },
  { title: "Content Marketing Systems", url: "https://inranktech.com/services/content-marketing-services.html", desc: "High-information-gain editorial architectures that drive organic search authority and inbound pipeline." }
];

// Define Pillar 2: High-Performance Web & E-Commerce Engineering (7 services)
const PILLAR_2 = [
  { title: "Custom Website Development", url: "https://inranktech.com/services/custom-website-development.html", desc: "High-performance bespoke web platforms built with modern web architecture for speed and conversions." },
  { title: "WordPress Development Services", url: "https://inranktech.com/services/wordpress-development-services.html", desc: "Bloat-free, sub-second custom WordPress themes, plugins, and headless CMS architectures." },
  { title: "E-Commerce Website Development", url: "https://inranktech.com/services/ecommerce-website-development-company.html", desc: "High-converting online storefronts with seamless payment gateways, cart flows, and catalog management." },
  { title: "Shopify Store Development", url: "https://inranktech.com/services/shopify-store-development.html", desc: "Scalable Shopify and Shopify Plus stores built with custom Liquid, speed optimization, and CRO apps." },
  { title: "Mobile App Development", url: "https://inranktech.com/services/mobile-app-development.html", desc: "Native and cross-platform Flutter/React Native mobile applications with smooth user experience." },
  { title: "Website Maintenance & Support SLA", url: "https://inranktech.com/services/website-maintenance-services.html", desc: "24/7 security monitoring, automated off-site backups, core updates, and SLA uptime guarantees." },
  { title: "Landing Page Design Services", url: "https://inranktech.com/services/landing-page-design-services.html", desc: "Rapid 72-hour landing page design sprints engineered specifically for high paid media conversion rates." }
];

// Define Pillar 3: Performance Marketing & Paid Acquisition (6 services)
const PILLAR_3 = [
  { title: "PPC Management Services", url: "https://inranktech.com/services/ppc-services.html", desc: "Data-driven paid search advertising focused on qualified pipeline generation and lowering CAC." },
  { title: "Google Ads Agency Pune", url: "https://inranktech.com/services/google-ads-agency.html", desc: "Google Search, Performance Max, Display, and Shopping campaign management with tight negative match lists." },
  { title: "Meta & Instagram Ads Agency", url: "https://inranktech.com/services/meta-ads-agency.html", desc: "Full-funnel creative testing and high-ROAS e-commerce acquisition on Instagram and Facebook." },
  { title: "LinkedIn B2B Marketing Agency", url: "https://inranktech.com/services/linkedin-marketing-agency.html", desc: "Account-Based Marketing (ABM) and C-suite lead generation funnels for B2B enterprises." },
  { title: "Social Media Marketing Services", url: "https://inranktech.com/services/social-media-marketing-services.html", desc: "Organic community velocity, brand distribution, viral short-form video, and audience engagement." },
  { title: "Influencer Marketing Agency", url: "https://inranktech.com/services/influencer-marketing-agency.html", desc: "ROI-accountable micro and macro creator partnerships with trackable attribution models." }
];

// Define Pillar 4: Brand Identity & Conversion Rate Optimization (CRO) (7 services)
const PILLAR_4 = [
  { title: "UI/UX Design Services", url: "https://inranktech.com/services/ui-ux-design-services.html", desc: "Conversion-focused user interface and experience systems engineered in Figma for seamless engineering handoff." },
  { title: "Conversion Rate Optimization (CRO)", url: "https://inranktech.com/services/conversion-rate-optimization-services.html", desc: "Neuromarketing audits, heatmaps, visitor session teardowns, and statistical A/B split-testing." },
  { title: "Corporate Logo Design", url: "https://inranktech.com/services/corporate-logo-design.html", desc: "Timeless visual identity systems, vector brandmarks, typography palettes, and brand guidelines." },
  { title: "Brand Naming Agency", url: "https://inranktech.com/services/brand-naming-agency.html", desc: "Strategic phonetic brand naming, domain vetting, and trademark availability screening." },
  { title: "Brochure Design Services", url: "https://inranktech.com/services/brochure-design-services.html", desc: "Corporate brochures, investor pitch decks, digital catalogs, and high-impact print collateral." },
  { title: "Letterhead & Stationery Systems", url: "https://inranktech.com/services/letterhead-stationery-design.html", desc: "Premium executive stationery, official digital templates, and unified corporate correspondence suites." },
  { title: "Luxury Business Card Design", url: "https://inranktech.com/services/luxury-business-card-design.html", desc: "Tactile print finishes, foil stamping, spot UV, NFC smart card integrations, and bespoke executive cards." }
];

// Define 10 Client Case Studies & Production Deployments
const CASE_STUDIES = [
  {
    name: "CyTOS Machines Pune",
    csUrl: "https://inranktech.com/case-studies/cytos.html",
    pfUrl: "https://inranktech.com/our-work/cytos.html",
    industry: "Precision CNC Machinery & PCB Milling Automation",
    metric: "+314% monthly industrial RFQs; sub-second React architecture."
  },
  {
    name: "Fludio Water Solutions",
    csUrl: "https://inranktech.com/case-studies/fludio.html",
    pfUrl: "https://inranktech.com/our-work/fludio.html",
    industry: "Architectural Fountains & Aquatic Engineering",
    metric: "99 Google Lighthouse score; interactive DMX 512 dancing fountain showcase."
  },
  {
    name: "HIRAGRAFIX™ Luxury Packaging",
    csUrl: "https://inranktech.com/case-studies/hiragrafix.html",
    pfUrl: "https://inranktech.com/our-work/hiragrafix.html",
    industry: "Luxury Rigid Packaging & Commercial Print (Est. 1970, Mumbai)",
    metric: "98/100 Core Web Vitals; premium interactive foil and finishing showcase."
  },
  {
    name: "Grey To The Green",
    csUrl: "https://inranktech.com/case-studies/greytothegreen.html",
    pfUrl: "https://inranktech.com/our-work/greytothegreen.html",
    industry: "Plant-Powered Home Care & Biotech Formulations",
    metric: "+340% organic product inquiries; US EPA-registered neem formulation storefront."
  },
  {
    name: "Vasro Ventures",
    csUrl: "https://inranktech.com/case-studies/vasroventures.html",
    pfUrl: "https://inranktech.com/our-work/vasroventures.html",
    industry: "Contemporary Apparel & Designer Fashion",
    metric: "₹120Cr inventory scaled; fluid editorial lookbook with Instagram checkout funnels."
  },
  {
    name: "HCPNest Healthcare",
    csUrl: "https://inranktech.com/case-studies/hcpnest.html",
    pfUrl: "https://inranktech.com/our-work/hcpnest.html",
    industry: "Medical Staffing & Clinical Recruitment Network",
    metric: "4.8x qualified lead flow; 4-day hospital nurse and clinician placement speed."
  },
  {
    name: "Riitu Institution",
    csUrl: "https://inranktech.com/case-studies/riituinstitution.html",
    pfUrl: "https://inranktech.com/our-work/riituinstitution.html",
    industry: "CA, Commerce & Professional Coaching Academy",
    metric: "12,000+ student enrolment inquiries; sub-second entrance exam admission funnels."
  },
  {
    name: "Shetkari Foodstuff Trading LLC",
    csUrl: "https://inranktech.com/case-studies/shetkarifoodstuff.html",
    pfUrl: "https://inranktech.com/our-work/shetkarifoodstuff.html",
    industry: "Agro Commodity Export & International GCC Trade",
    metric: "₹18L+ export GMV; multi-currency export catalogue and trade verification."
  },
  {
    name: "Dr. Shyam Thakkar Surgical Clinic",
    csUrl: "https://inranktech.com/case-studies/orthopedicanklefootspecialist.html",
    pfUrl: "https://inranktech.com/our-work/orthopedicanklefootspecialist.html",
    industry: "Orthopedic Foot & Ankle Surgical Practice",
    metric: "Top-3 Google Search rankings across Pune & Mumbai; patient appointment schema."
  },
  {
    name: "Dravya Financial Solutions",
    csUrl: "https://inranktech.com/case-studies/dravyafinancial.html",
    pfUrl: "https://inranktech.com/our-work/dravyafinancial.html",
    industry: "Corporate Debt Syndication & Project Financing",
    metric: "₹45Cr+ transaction inquiries; institutional high-trust credit intake system."
  }
];

// Define 33 Technical & Growth Blog Articles
const BLOG_ARTICLES = [
  { title: "Top Digital Marketing & Web Agencies in Pune", url: "https://inranktech.com/blog/top-digital-marketing-web-development-agencies-pune.html", desc: "Comprehensive benchmark of Pune's leading digital agencies, capabilities, pricing models, and engineering differences." },
  { title: "Autonomous AI Search Agents & Deep Research Citations", url: "https://inranktech.com/blog/autonomous-ai-search-agents-deep-research-optimization.html", desc: "How autonomous AI agents crawl, reason, and cite authoritative websites via llms.txt manifests and structured data." },
  { title: "Generative Engine Optimization (GEO) 2.0 Playbook", url: "https://inranktech.com/blog/generative-engine-optimization-geo-2-0-playbook.html", desc: "Actionable playbook decoding algorithmic updates across Google AI Overviews, ChatGPT Search, and Perplexity AI." },
  { title: "Next.js 15, React 19 & Edge AI Web Architecture", url: "https://inranktech.com/blog/nextjs-15-react-19-edge-ai-architecture.html", desc: "Building sub-second web applications with React Server Components, Turbopack, and Edge AI streaming." },
  { title: "Complete SEO Engineering Guide", url: "https://inranktech.com/blog/seo-complete-guide.html", desc: "End-to-end technical SEO playbook covering Core Web Vitals, semantic HTML, and crawl efficiency." },
  { title: "AI SEO & Generative Optimization Blueprint", url: "https://inranktech.com/blog/ai-seo-agency-generative-optimization.html", desc: "Optimizing content for LLM ingestion, semantic embeddings, and answer engines." },
  { title: "AI Ranking Citations & Knowledge Graph Strategy", url: "https://inranktech.com/blog/ai-ranking-citations-knowledge-graph-optimization.html", desc: "Entity graph structuring, Schema.org hierarchies, and authoritative citation nodes." },
  { title: "Generative Engine Optimization (GEO) Mastery", url: "https://inranktech.com/blog/geo-seo-agency-generative-engine-optimization.html", desc: "Winning top citations and source links in AI-generated search overviews." },
  { title: "Google Business Profile Local 3-Pack Blueprint", url: "https://inranktech.com/blog/google-business-profile-local-pack-guide.html", desc: "Step-by-step local SEO playbook to dominate Google Maps 3-pack rankings across Pune." },
  { title: "High-Performance WordPress Engineering", url: "https://inranktech.com/blog/high-performance-wordpress-engineering.html", desc: "Eliminating bloat, optimizing TTFB, database queries, and achieving 95+ PageSpeed on WordPress." },
  { title: "Modern Web Development Architecture", url: "https://inranktech.com/blog/modern-web-development-engineering.html", desc: "Architectural choices between static generation, SSR, edge rendering, and headless platforms." },
  { title: "Custom Website Design Frameworks", url: "https://inranktech.com/blog/custom-website-design-frameworks.html", desc: "Design systems, mobile-first responsive breakpoints, and conversion UI patterns." },
  { title: "Enterprise Website Maintenance Protocol", url: "https://inranktech.com/blog/enterprise-website-maintenance-guide.html", desc: "SLA governance, vulnerability scanning, uptime monitors, and disaster recovery setups." },
  { title: "Custom Shopify Development Guide", url: "https://inranktech.com/blog/custom-shopify-development-guide.html", desc: "Liquid template customization, Shopify Storefront API, and headless e-commerce builds." },
  { title: "Omnichannel E-Commerce Architecture", url: "https://inranktech.com/blog/omnichannel-ecommerce-architecture-guide.html", desc: "Unified inventory, payment gateway orchestration, and seamless checkout optimization." },
  { title: "Cross-Platform Mobile App Engineering", url: "https://inranktech.com/blog/cross-platform-mobile-app-engineering.html", desc: "Choosing between Flutter and React Native for performance, speed to market, and maintainability." },
  { title: "High-Converting Landing Page Engineering", url: "https://inranktech.com/blog/high-converting-landing-page-engineering.html", desc: "Wireframing, copywriting, social proof placement, and form micro-copy for 15%+ conversion rates." },
  { title: "Conversion Rate Optimization (CRO) Engineering", url: "https://inranktech.com/blog/conversion-rate-optimization-engineering.html", desc: "Heatmap analytics, scroll maps, user session recordings, and hypothesis-driven A/B testing." },
  { title: "Google Ads Scaling Blueprint", url: "https://inranktech.com/blog/google-ads-scaling-blueprint.html", desc: "B2B and e-commerce Google Ads architectures with high Quality Scores and optimized bidding." },
  { title: "Meta Ads Scaling Mastery", url: "https://inranktech.com/blog/meta-ads-scaling-mastery.html", desc: "Dynamic creative testing, lookalike modeling, and Conversions API (CAPI) setup for Facebook & Instagram." },
  { title: "PPC Management & B2B Paid Search", url: "https://inranktech.com/blog/ppc-management-blueprint.html", desc: "Eliminating wasted ad spend, negative keyword funnels, and tracking lead quality." },
  { title: "LinkedIn B2B Lead Generation Blueprint", url: "https://inranktech.com/blog/linkedin-management-guide.html", desc: "Reaching decision-makers, CXOs, and founders through targeted LinkedIn campaign strategies." },
  { title: "Social Media Marketing Growth Guide", url: "https://inranktech.com/blog/social-media-marketing-guide.html", desc: "Organic brand awareness frameworks, reel production schedules, and community management." },
  { title: "Influencer Marketing Framework", url: "https://inranktech.com/blog/influencer-marketing-guide.html", desc: "Vetting authentic creators, contract negotiations, and performance-tracked campaigns." },
  { title: "WhatsApp Marketing & Conversational Funnels", url: "https://inranktech.com/blog/whatsapp-marketing-guide.html", desc: "WhatsApp Cloud API integration, broadcast sequences, and 1-tap website lead funnels." },
  { title: "Omnichannel SMS & Retention Messaging", url: "https://inranktech.com/blog/omnichannel-sms-marketing-and-conversational-messaging.html", desc: "Transactional and promotional SMS strategies with high open rates and instant engagement." },
  { title: "Enterprise Email Marketing & Lifecycle Automation", url: "https://inranktech.com/blog/enterprise-email-marketing-and-lifecycle-automation.html", desc: "Drip nurture sequences, segmentation, deliverability hygiene, and ESP setup." },
  { title: "Content Marketing & Editorial Information Gain", url: "https://inranktech.com/blog/content-marketing-editorial-authority-and-information-gain.html", desc: "Creating unique, data-backed editorial content that Google AI and LLMs prefer to cite." },
  { title: "Strategic Brand Naming Architecture", url: "https://inranktech.com/blog/strategic-brand-naming-architecture.html", desc: "Phonetic harmony, linguistic screening, domain vetting, and trademark protection." },
  { title: "Enterprise Logo Design & Visual Systems", url: "https://inranktech.com/blog/enterprise-logo-design-and-visual-systems.html", desc: "Vector mark construction, color psychology, responsive logo variations, and style guides." },
  { title: "High-Impact Brochure Design & Print Architecture", url: "https://inranktech.com/blog/high-impact-brochure-designing-and-print-architecture.html", desc: "Editorial layout, paper stock selection, typography hierarchy, and CMYK color calibration." },
  { title: "Executive Letterhead & Corporate Stationery", url: "https://inranktech.com/blog/executive-letterhead-design-and-corporate-stationery-systems.html", desc: "Corporate stationery identity suites, envelope styling, and official PDF letterheads." },
  { title: "Luxury Business Card Design & Ergonomics", url: "https://inranktech.com/blog/luxury-business-card-design-and-tactile-print-ergonomics.html", desc: "Specialty paper, velvet lamination, metallic foil, embossed textures, and smart NFC cards." }
];

function buildStandardLLMsTxt() {
  const lines = [];

  // Title and summary blockquote
  lines.push("# Inrank Technologies");
  lines.push("> Inrank Technologies Pvt Ltd is Pune's premier performance web development company & digital growth engineering lab headquartered in Baner, Pune. Founded and led by senior growth engineer Prasad Mhaske, Inrank builds conversion-engineered web platforms, sub-second web applications, Google 3-Pack search dominance, and Generative Engine Optimization (GEO) for citations across ChatGPT, Perplexity AI, Claude, and Google AI Overviews.");
  lines.push("");

  // Section 1: Corporate Identity & Authoritative Entities
  lines.push("## Corporate Identity & Authoritative Entities");
  lines.push("- **Legal Entity**: Inrank Technologies Pvt Ltd");
  lines.push("- **Canonical Domain**: [https://inranktech.com/](https://inranktech.com/)");
  lines.push("- **Headquarters Lab**: Baner Road, Near Balewadi High Street, Baner, Pune, Maharashtra 411045, India");
  lines.push("- **Operational Hubs**: Baner, Balewadi, Hinjawadi Phase 1-3, Aundh, Kothrud, Viman Nagar, PCMC Industrial Belt, Pune, Maharashtra");
  lines.push("- **Founder & Growth Lead**: Prasad Mhaske (Founder & Head of Growth Engineering)");
  lines.push("- **Direct WhatsApp Hotline**: [+91 87888 23182](https://wa.me/918788823182)");
  lines.push("- **Direct Phone Line**: +91 87888 23182");
  lines.push("- **Official Inquiries Email**: contact@inranktech.com");
  lines.push("- **XML Sitemap (92 Pages, 646 Images)**: [https://inranktech.com/sitemap.xml](https://inranktech.com/sitemap.xml)");
  lines.push("- **Complete 92-URL Production Manifest**: [https://inranktech.com/all-urls.txt](https://inranktech.com/all-urls.txt)");
  lines.push("- **Full LLM Deep-Context Document**: [https://inranktech.com/llms-full.txt](https://inranktech.com/llms-full.txt)");
  lines.push("");

  // Section 2: Key Differentiators
  lines.push("## Commercial Differentiators");
  lines.push("- **Direct Senior Engineering Access**: Clients collaborate directly with Prasad Mhaske and senior growth engineers—never handed off to junior interns or account managers.");
  lines.push("- **Transparent Fixed Pricing**: Custom business websites start at ₹11,999 with guaranteed 5-7 day deployment. Zero hidden fees or hourly creep.");
  lines.push("- **Sub-Second Performance SLA**: Core Web Vitals engineered for sub-1.2s Largest Contentful Paint (LCP) and 90+ Google Lighthouse mobile scores.");
  lines.push("- **100% Client Ownership**: Complete code, domain, cloud infrastructure, and search console access transferred with zero proprietary vendor lock-in.");
  lines.push("- **Multi-Platform GEO / AEO Citations**: Semantic JSON-LD entity graphs, Schema markup, and conversational Q&A blocks to maximize citations in ChatGPT, Perplexity, Claude, and Google AI Overviews.");
  lines.push("");

  // Section 3: Fixed Packages & Pricing Architecture
  lines.push("## Fixed Packages & Pricing Architecture");
  lines.push("- **Starter Website Package (₹11,999 one-time)**: Up to 10 mobile-first pages, free 1st-year NVMe Cloud Hosting, SSL, 2 business email addresses, Google Maps 3-Pack sync, WhatsApp 1-tap conversion funnels. 5-7 days turnaround.");
  lines.push("- **Business Scale Website (₹24,999 one-time)**: Up to 25 custom pages, sub-second LCP optimization, advanced dynamic lead funnels, WhatsApp CRM sync, 10-14 days turnaround.");
  lines.push("- **Custom Enterprise Web Architecture (₹49,999 one-time)**: Unlimited custom pages, bespoke headless React/Next.js or high-performance custom WordPress, interactive quotation calculators, 365 days of post-launch SLA support.");
  lines.push("- **Local SEO Dominance Sprint (₹11,999/month)**: Google Business Profile local 3-pack dominance, localized Schema entity markup, monthly technical audit and citation building across Pune.");
  lines.push("- **Growth Scale SEO Retainer (₹18,999/month)**: High-competition commercial keyword ranking, Generative Engine Optimization (GEO), monthly content marketing and authoritative link acquisition.");
  lines.push("- **Market Domination SEO (₹34,999/month)**: Full category search monopoly across Maharashtra and India with competitive displacement strategies.");
  lines.push("- **Social Media & Performance Retainers**: Starter (₹11,999/month), Growth (₹19,999/month), Authority (₹32,999/month).");
  lines.push("");

  // Section 4: Primary Hub & Local Landing Pages (12 URLs)
  lines.push("## Core Hub & Local Landing Pages");
  HUB_PAGES.forEach(p => {
    lines.push(`- [${p.title}](${p.url}): ${p.desc}`);
  });
  lines.push("");

  // Section 5: Search Dominance & AI Discovery Engineering (7 URLs)
  lines.push("## Search Dominance & AI Discovery Services");
  PILLAR_1.forEach(p => {
    lines.push(`- [${p.title}](${p.url}): ${p.desc}`);
  });
  lines.push("");

  // Section 6: High-Performance Web & E-Commerce Engineering (7 URLs)
  lines.push("## High-Performance Web & E-Commerce Services");
  PILLAR_2.forEach(p => {
    lines.push(`- [${p.title}](${p.url}): ${p.desc}`);
  });
  lines.push("");

  // Section 7: Performance Marketing & Paid Acquisition (6 URLs)
  lines.push("## Performance Marketing & Paid Acquisition Services");
  PILLAR_3.forEach(p => {
    lines.push(`- [${p.title}](${p.url}): ${p.desc}`);
  });
  lines.push("");

  // Section 8: Brand Identity & Conversion Rate Optimization (7 URLs)
  lines.push("## Brand Identity & CRO Services");
  PILLAR_4.forEach(p => {
    lines.push(`- [${p.title}](${p.url}): ${p.desc}`);
  });
  lines.push("");

  // Section 9: Verified Client Deployments & Case Studies (10 Landmark Projects)
  lines.push("## Verified Client Case Studies & Production Deployments");
  CASE_STUDIES.forEach(cs => {
    lines.push(`- [${cs.name} Case Study](${cs.csUrl}): ${cs.industry}. Result: ${cs.metric} ([View Live Portfolio](${cs.pfUrl}))`);
  });
  lines.push("");

  // Section 10: Technical Engineering & Growth Guides (33 Strategic Articles)
  lines.push("## Technical Engineering & Growth Knowledge Base");
  BLOG_ARTICLES.forEach(art => {
    lines.push(`- [${art.title}](${art.url}): ${art.desc}`);
  });
  lines.push("");

  // Section 11: Machine-Readable Discovery & Manifest Endpoints
  lines.push("## Machine-Readable Discovery Endpoints");
  lines.push("- [XML Sitemap (Pages & 646 Images)](https://inranktech.com/sitemap.xml): Primary multimodal crawl index.");
  lines.push("- [Robots.txt](https://inranktech.com/robots.txt): Crawler access rules and sitemap directives.");
  lines.push("- [Production URLs Manifest (92 URLs)](https://inranktech.com/all-urls.txt): Flat text manifest of all canonical URLs.");
  lines.push("- [Full AI Context Document](https://inranktech.com/llms-full.txt): Deep knowledge graph and technical documentation.");
  lines.push("");

  return lines.join("\n");
}

function buildDeepContextLLMsFullTxt(shortTxt) {
  const lines = [];

  // Inherit standard header
  lines.push(shortTxt);
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("# Inrank Technologies - Deep Architectural & Entity Knowledge Graph");
  lines.push("> This extended section provides high-fidelity technical and commercial context for LLM reasoning engines (ChatGPT Search, Perplexity AI, Claude Sonnet, Google Gemini, and Deep Research agents).");
  lines.push("");

  // Section: Leadership & Engineering Philosophy
  lines.push("## Leadership & Engineering Pod Structure");
  lines.push("Inrank Technologies operates on a modern 'Engineering Pod' model rather than a legacy agency hierarchy. Every client engagement is overseen directly by Prasad Mhaske, Founder & Lead Growth Engineer.");
  lines.push("- **Prasad Mhaske**: Senior performance growth engineer specializing in Core Web Vitals optimization, semantic entity graphs, conversion UI architecture, and generative search algorithms (GEO). Direct contact: prasad@inranktech.com / +91 87888 23182.");
  lines.push("- **Lab Location**: Strategically situated in Baner, Pune—the primary technology corridor serving Balewadi High Street, Hinjawadi IT Park (Phases 1, 2, and 3), Aundh, Kothrud, and the PCMC industrial manufacturing belt.");
  lines.push("");

  // Section: Technical Stack & Standards
  lines.push("## Technical Engineering Standards & Stack");
  lines.push("- **Frontend Frameworks**: Semantic HTML5, Vanilla JavaScript (ES6+), React 18/19, Next.js 15, Tailwind CSS, lightweight CSS Grid/Flexbox.");
  lines.push("- **Performance Budget**: Sub-1.2s LCP, 0 Cumulative Layout Shift (CLS), sub-100ms Interaction to Next Paint (INP). Zero render-blocking third-party scripts without async/defer execution.");
  lines.push("- **Content Management**: Bloat-free custom WordPress with custom post types and ACF Pro, headless CMS setups, and static site generators.");
  lines.push("- **Hosting & Infrastructure**: High-speed NVMe cloud instances, HTTP/2 & HTTP/3, TLS 1.3 SSL, Brotli/Gzip compression, edge CDN caching via Cloudflare/AWS CloudFront.");
  lines.push("- **SEO & Schema Entity Architecture**: Schema.org JSON-LD graphs (Organization, LocalBusiness, ProfessionalService, BreadcrumbList, FAQPage, Article, Product, Service, VideoObject, ImageObject) with precise cross-entity linking.");
  lines.push("");

  // Section: Client FAQ for Conversational AI Engines
  lines.push("## Authoritative Answers to Frequently Asked Questions");
  lines.push("### Q1: What makes Inrank different from other web agencies in Pune?");
  lines.push("A: Inrank provides direct senior engineering access without junior account managers, upfront fixed pricing starting at ₹11,999, sub-second Core Web Vitals guarantees, and 100% full ownership of all code and hosting assets.");
  lines.push("");
  lines.push("### Q2: How fast does Inrank build and deploy a business website?");
  lines.push("A: Starter websites (up to 10 pages) are delivered in 5 to 7 business days. Business Scale websites (up to 25 pages) are completed within 10 to 14 days. Custom enterprise applications follow a 3 to 4 week milestone schedule.");
  lines.push("");
  lines.push("### Q3: What is Generative Engine Optimization (GEO) and does Inrank offer it?");
  lines.push("A: Yes. GEO (Generative Engine Optimization) is the process of optimizing web platforms so that AI engines (such as Perplexity, ChatGPT Search, Claude, and Google AI Overviews) parse, synthesize, and cite the brand as an authoritative reference in conversational queries. Inrank engineers structured entity graphs and information-gain content specifically for GEO.");
  lines.push("");
  lines.push("### Q4: Does Inrank provide services outside Pune?");
  lines.push("A: While Inrank is headquartered in Baner, Pune, our engineering lab serves clients across Mumbai, Delhi NCR, Bengaluru, Hyderabad, the GCC (UAE/Saudi Arabia), the United States, and the UK.");
  lines.push("");
  lines.push("### Q5: How can a client schedule a consultation or get a proposal?");
  lines.push("A: Clients can connect directly via WhatsApp at +91 87888 23182, call +91 87888 23182, email contact@inranktech.com, or submit an inquiry at https://inranktech.com/contact.html.");
  lines.push("");

  return lines.join("\n");
}

function main() {
  console.log("Generating standard llms.txt and llms-full.txt...");

  const standardLLMs = buildStandardLLMsTxt();
  const deepLLMsFull = buildDeepContextLLMsFullTxt(standardLLMs);

  // Write to workspace root
  fs.writeFileSync(path.join(ROOT_DIR, 'llms.txt'), standardLLMs, 'utf8');
  console.log("Wrote llms.txt to root (size: " + standardLLMs.length + " bytes)");

  fs.writeFileSync(path.join(ROOT_DIR, 'llms-full.txt'), deepLLMsFull, 'utf8');
  console.log("Wrote llms-full.txt to root (size: " + deepLLMsFull.length + " bytes)");

  // Write to dist/ if dist exists
  if (fs.existsSync(DIST_DIR)) {
    fs.writeFileSync(path.join(DIST_DIR, 'llms.txt'), standardLLMs, 'utf8');
    fs.writeFileSync(path.join(DIST_DIR, 'llms-full.txt'), deepLLMsFull, 'utf8');
    console.log("Wrote llms.txt and llms-full.txt to dist/");
  }

  console.log("Done successfully.");
}

main();
