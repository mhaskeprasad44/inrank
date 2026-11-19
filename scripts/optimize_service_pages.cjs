const fs = require('fs');
const path = require('path');

const updates = {
  'seo-company-pune.html': {
    title: 'SEO Company in Pune | Google 3-Pack & Organic Growth | Inrank',
    kicker: 'INRANK SEARCH · #1 SEO COMPANY IN PUNE',
    h1: 'SEO Company in Pune<br><em>Engineered to Turn Google Searches Into Inquiries</em>',
    lede: 'Inrank Technologies is an engineering-first SEO company in Pune. We re-architect your site for sub-second Core Web Vitals, build localized entity authority across Baner, Hinjewadi, and Kharadi corridors, and capture buyers with high purchase intent.'
  },
  'wordpress-development-services.html': {
    title: 'WordPress Development Company in Pune | Custom & Fast | Inrank',
    kicker: 'INRANK CMS LAB · WORDPRESS DEVELOPMENT COMPANY IN PUNE',
    h1: 'WordPress Development Company in Pune<br><em>Engineered for Sub-Second Speed &amp; High Conversions</em>',
    lede: 'Inrank is a leading WordPress development company in Pune. Unlike agencies that deploy bloated page builders taking 4+ seconds to load, we engineer custom Gutenberg block portals with sub-second Core Web Vitals, enterprise security, and bespoke UI tailored for Pune businesses.'
  },
  'custom-website-development.html': {
    title: 'Website Development Company in Pune | Custom Next.js & Web Lab | Inrank',
    kicker: 'INRANK WEB LAB · WEBSITE DEVELOPMENT COMPANY IN PUNE',
    h1: 'Website Development Company in Pune<br><em>Engineered for Sub-Second Speed &amp; High Conversions</em>',
    lede: 'Inrank Technologies is a premier website development company in Pune. We engineer custom, sub-second web applications and corporate websites built on modern stacks that turn visitors into high-ticket business inquiries across Pune\'s commercial hubs.'
  },
  'corporate-logo-design.html': {
    title: 'Logo Design Company in Pune | Corporate Brand Identity | Inrank',
    kicker: 'INRANK BRAND STUDIO · LOGO DESIGN COMPANY IN PUNE',
    h1: 'Logo Design Company in Pune<br><em>Corporate Brand Identities Built to Inspire Commercial Trust</em>',
    lede: 'Inrank is a corporate logo design company in Pune creating distinctive, trademark-ready visual identities for technology companies, manufacturing leaders, and high-growth startups across Pune and Maharashtra.'
  },
  'brand-naming-agency.html': {
    title: 'Branding & Brand Naming Agency in Pune | Strategic Naming | Inrank',
    kicker: 'INRANK BRAND LAB · STRATEGIC BRANDING AGENCY IN PUNE',
    h1: 'Branding &amp; Brand Naming Agency in Pune<br><em>Distinctive, Memorable, and Trademarkable Brand Identities</em>',
    lede: 'Inrank is a strategic branding agency in Pune providing corporate brand naming, market positioning, and trademark-ready identity frameworks that help businesses stand out and command authority.'
  },
  'ecommerce-website-development-company.html': {
    title: 'Ecommerce Website Development Company in Pune | Custom E-Com | Inrank',
    kicker: 'INRANK E-COMMERCE · ECOMMERCE WEBSITE DEVELOPMENT PUNE',
    h1: 'Ecommerce Website Development Company in Pune<br><em>Online Storefronts Built for Maximum Checkout Conversion</em>',
    lede: 'Inrank is an ecommerce website development company in Pune building high-speed online storefronts with frictionless multi-currency checkouts, seamless payment gateways, and automated inventory sync.'
  },
  'shopify-store-development.html': {
    title: 'Shopify Store Development in Pune | Certified Shopify Experts | Inrank',
    kicker: 'INRANK SHOPIFY LAB · SHOPIFY STORE DEVELOPMENT IN PUNE',
    h1: 'Shopify Store Development Company in Pune<br><em>High-Speed D2C Storefronts Built to Maximize AOV</em>',
    lede: 'Inrank delivers specialized Shopify store development in Pune, engineering bespoke Liquid themes, sub-second mobile product catalogs, and high-converting checkout funnels for growing brands.'
  },
  'google-ads-agency.html': {
    title: 'Google Ads Agency in Pune | High-ROAS Google Ads Management | Inrank',
    kicker: 'INRANK PERFORMANCE MEDIA · GOOGLE ADS AGENCY IN PUNE',
    h1: 'Google Ads Agency in Pune<br><em>High-ROAS PPC Campaigns That Generate Qualified Inquiries</em>',
    lede: 'Inrank is a performance-driven Google Ads agency in Pune managing high-yield Search, Display, and Performance Max campaigns that lower Cost-Per-Acquisition and drive predictable enterprise pipeline.'
  },
  'ppc-services.html': {
    title: 'PPC Services in Pune | Pay-Per-Click Marketing Company | Inrank',
    kicker: 'INRANK PAID SEARCH · PPC SERVICES IN PUNE',
    h1: 'PPC Services in Pune<br><em>Performance Pay-Per-Click Advertising Built for Maximum ROAS</em>',
    lede: 'Inrank provides data-engineered PPC services in Pune across Google Ads, Microsoft Ads, and programmatic networks, optimizing bid strategies and landing pages to deliver maximum return on ad spend.'
  },
  'meta-ads-agency.html': {
    title: 'Meta Ads Agency in Pune | Instagram & Facebook Lead Generation | Inrank',
    kicker: 'INRANK SOCIAL PERFORMANCE · META ADS AGENCY IN PUNE',
    h1: 'Meta Ads Agency in Pune<br><em>Instagram &amp; Facebook Campaigns That Acquire High-Value Customers</em>',
    lede: 'Inrank is a specialized Meta ads agency in Pune scaling Instagram and Facebook campaigns with server-side CAPI attribution, high-velocity creative testing, and optimized customer acquisition funnels.'
  },
  'social-media-marketing-services.html': {
    title: 'Social Media Marketing Agency in Pune | SMM Services | Inrank',
    kicker: 'INRANK SOCIAL MEDIA · SOCIAL MEDIA MARKETING AGENCY IN PUNE',
    h1: 'Social Media Marketing Agency in Pune<br><em>Strategic Storytelling That Builds Brand Equity &amp; Inquiries</em>',
    lede: 'Inrank is a full-service social media marketing agency in Pune delivering strategic brand narrative, high-impact motion creative, and community growth engines that convert attention into commercial revenue.'
  },
  'google-my-business-services.html': {
    title: 'Google My Business Services in Pune | GMB & Local Map Pack | Inrank',
    kicker: 'INRANK LOCAL DISCOVERY · GOOGLE MY BUSINESS SERVICES IN PUNE',
    h1: 'Google My Business Services in Pune<br><em>Dominate the Local 3-Pack &amp; Turn Nearby Searches Into Calls</em>',
    lede: 'Inrank provides Google My Business services in Pune designed to rank your location in Google\'s local 3-Pack, driving phone calls, foot traffic, and high-intent inbound inquiries across Pune corridors.'
  },
  'link-building-services.html': {
    title: 'Link Building Services in Pune | High-Authority Digital PR | Inrank',
    kicker: 'INRANK AUTHORITY LAB · LINK BUILDING SERVICES IN PUNE',
    h1: 'Link Building Services in Pune<br><em>High-Authority Editorial Backlinks &amp; Digital PR That Move Rankings</em>',
    lede: 'Inrank offers ethical, white-hat link building services in Pune, securing contextual editorial placements, industry citations, and digital PR coverage that build permanent domain authority.'
  },
  'ai-seo-services.html': {
    title: 'AI SEO Services in Pune | Generative Engine Optimization (GEO) | Inrank',
    kicker: 'INRANK AI SEARCH · AI SEO SERVICES IN PUNE',
    h1: 'AI SEO Services in Pune<br><em>Generative Search Optimization to Get Cited by AI Answer Engines</em>',
    lede: 'Inrank delivers cutting-edge AI SEO services in Pune, optimizing your brand\'s digital knowledge graph and semantic content so you are recommended and cited by ChatGPT, Perplexity, and Google AI Overviews.'
  },
  'geo-seo-agency.html': {
    title: 'GEO Agency in Pune | Generative Engine Optimization | Inrank',
    kicker: 'INRANK NEXT-GEN SEARCH · GEO AGENCY IN PUNE',
    h1: 'Generative Engine Optimization (GEO) Agency in Pune<br><em>Win AI Answer Engine Citations in Perplexity, Claude &amp; Gemini</em>',
    lede: 'Inrank is a leading GEO agency in Pune specializing in Generative Engine Optimization, structuring entity data and verifiable facts to win synthesized AI search recommendations for your business.'
  },
  'ai-ranking-citations.html': {
    title: 'AI Ranking & Citations Agency in Pune | Knowledge Graph SEO | Inrank',
    kicker: 'INRANK VECTOR DISCOVERY · AI CITATIONS AGENCY IN PUNE',
    h1: 'AI Ranking &amp; Citations Agency in Pune<br><em>Knowledge Graph Engineering for AI Discovery &amp; Vector Search</em>',
    lede: 'Inrank provides AI ranking and citations services in Pune, anchoring your corporate entity across trusted knowledge graphs and public datasets so AI models accurately reference your brand.'
  },
  'content-marketing-services.html': {
    title: 'Content Marketing Services in Pune | Authority SEO Content | Inrank',
    kicker: 'INRANK EDITORIAL · CONTENT MARKETING SERVICES IN PUNE',
    h1: 'Content Marketing Agency in Pune<br><em>High-Authority Editorial Content That Turns Readers Into Buyers</em>',
    lede: 'Inrank is an editorial content marketing agency in Pune crafting deep-dive industry playbooks, data-driven case studies, and ranking SEO articles that establish undisputed topical authority.'
  },
  'conversion-rate-optimization-services.html': {
    title: 'Conversion Rate Optimization in Pune | CRO Agency | Inrank',
    kicker: 'INRANK FUNNEL LAB · CRO AGENCY IN PUNE',
    h1: 'Conversion Rate Optimization (CRO) Agency in Pune<br><em>Scale Inbound Website Revenue Without Increasing Ad Spend</em>',
    lede: 'Inrank is a specialized conversion rate optimization (CRO) agency in Pune, employing behavioral analytics, heatmaps, and systematic A/B testing to double inquiry and checkout conversion rates.'
  },
  'landing-page-design-services.html': {
    title: 'Landing Page Design Services in Pune | High-Converting Funnels | Inrank',
    kicker: 'INRANK FUNNEL DESIGN · LANDING PAGE DESIGN IN PUNE',
    h1: 'Landing Page Design Services in Pune<br><em>High-Velocity Campaign Pages Built for High-ROAS Conversions</em>',
    lede: 'Inrank engineers custom landing page design services in Pune optimized for Google Ads and Meta campaigns, delivering sub-second load speeds and frictionless lead generation forms.'
  },
  'ui-ux-design-services.html': {
    title: 'UI UX Design Company in Pune | Web & Mobile Product Design | Inrank',
    kicker: 'INRANK PRODUCT DESIGN · UI UX DESIGN COMPANY IN PUNE',
    h1: 'UI UX Design Company in Pune<br><em>Intuitive Digital Product Interfaces Engineered for Conversion</em>',
    lede: 'Inrank is an elite UI UX design company in Pune creating intuitive design systems, web dashboards, and mobile app interfaces that reduce cognitive friction and delight enterprise users.'
  },
  'mobile-app-development.html': {
    title: 'Mobile App Development Company in Pune | iOS, Android & Flutter | Inrank',
    kicker: 'INRANK APP LAB · MOBILE APP DEVELOPMENT IN PUNE',
    h1: 'Mobile App Development Company in Pune<br><em>High-Performance iOS &amp; Android Apps Built with Flutter</em>',
    lede: 'Inrank Technologies is a mobile app development company in Pune engineering cross-platform Flutter and native applications with fluid sub-second rendering and rock-solid backend APIs.'
  },
  'website-maintenance-services.html': {
    title: 'Website Maintenance Services in Pune | Technical SLA Support | Inrank',
    kicker: 'INRANK SITE RELIABILITY · WEBSITE MAINTENANCE IN PUNE',
    h1: 'Website Maintenance Services in Pune<br><em>Zero-Downtime Technical Support, Security Hardening &amp; SLAs</em>',
    lede: 'Inrank delivers comprehensive website maintenance services in Pune with guaranteed uptime SLAs, daily automated backups, security patching, and Core Web Vitals performance tuning.'
  },
  'brochure-design-services.html': {
    title: 'Brochure Design Services in Pune | Corporate & Industrial Profiles | Inrank',
    kicker: 'INRANK PRINT STUDIO · BROCHURE DESIGN IN PUNE',
    h1: 'Brochure Design Services in Pune<br><em>Executive Sales Collateral &amp; Corporate Product Catalogs</em>',
    lede: 'Inrank offers corporate brochure design services in Pune, creating high-impact corporate sales literature, technical product catalogs, and investor presentations that close high-ticket contracts.'
  },
  'luxury-business-card-design.html': {
    title: 'Luxury Business Card Design in Pune | Executive Brand Identity | Inrank',
    kicker: 'INRANK PRINT ATELIER · BUSINESS CARD DESIGN IN PUNE',
    h1: 'Luxury Business Card Design in Pune<br><em>Tactile, Minimalist Corporate Cards for High-Stakes Handshakes</em>',
    lede: 'Inrank crafts luxury business card design in Pune with premium tactile finishes, foil stamping, edge gilding, and architectural typography for founders, C-suite executives, and luxury brands.'
  },
  'letterhead-stationery-design.html': {
    title: 'Letterhead & Stationery Design in Pune | Corporate Identity Kit | Inrank',
    kicker: 'INRANK BRAND SUITE · STATIONERY DESIGN IN PUNE',
    h1: 'Letterhead &amp; Corporate Stationery Design in Pune<br><em>Executive Brand Suites That Inspire Absolute Commercial Confidence</em>',
    lede: 'Inrank delivers executive letterhead and corporate stationery design in Pune, structuring branded invoice templates, legal documentation suites, and presentation collateral.'
  },
  'linkedin-marketing-agency.html': {
    title: 'LinkedIn Marketing Agency in Pune | B2B Founder & Lead Gen | Inrank',
    kicker: 'INRANK B2B ACCELERATOR · LINKEDIN MARKETING AGENCY IN PUNE',
    h1: 'B2B LinkedIn Marketing Agency in Pune<br><em>Founder Ghostwriting &amp; Enterprise Account-Based Lead Generation</em>',
    lede: 'Inrank is a specialized LinkedIn marketing agency in Pune helping B2B enterprises, manufacturing firms, and tech founders generate verified decision-maker meetings through organic thought leadership.'
  },
  'influencer-marketing-agency.html': {
    title: 'Influencer Marketing Agency in Pune | Creator Growth Campaigns | Inrank',
    kicker: 'INRANK CREATOR LAB · INFLUENCER MARKETING AGENCY IN PUNE',
    h1: 'Influencer Marketing Agency in Pune<br><em>Creator Partnerships Engineered for Measurable ROI &amp; Brand Scaling</em>',
    lede: 'Inrank is an influencer marketing agency in Pune connecting consumer brands with vetted creators, managing authentic product integrations and performance tracking that drive verified customer acquisition.'
  }
};

const servicesDir = path.join(process.cwd(), 'services');
let updatedCount = 0;

for (const [filename, data] of Object.entries(updates)) {
  const filePath = path.join(servicesDir, filename);
  if (!fs.existsSync(filePath)) {
    console.error('File not found: ' + filename);
    continue;
  }
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace Title
  content = content.replace(/<title>[^<]+<\/title>/i, `<title>${data.title}</title>`);

  // Replace og:title & twitter:title
  content = content.replace(/<meta\s+property=["']og:title["']\s+content=["'][^"']*["']/i, `<meta property="og:title" content="${data.title}"`);
  content = content.replace(/<meta\s+name=["']twitter:title["']\s+content=["'][^"']*["']/i, `<meta name="twitter:title" content="${data.title}"`);

  // Replace Kicker
  content = content.replace(/<span class=["']eco-kicker["']>[^<]+<\/span>/i, `<span class="eco-kicker">${data.kicker}</span>`);

  // Replace H1
  content = content.replace(/<h1 class=["']eco-title["'] id=["']hero-title["']>[\s\S]*?<\/h1>/i, `<h1 class="eco-title" id="hero-title">\n            ${data.h1}\n          </h1>`);

  // Replace Lede
  content = content.replace(/<p class=["']eco-hero-lede["']>[\s\S]*?<\/p>/i, `<p class="eco-hero-lede">\n            ${data.lede}\n          </p>`);

  fs.writeFileSync(filePath, content, 'utf8');
  updatedCount++;
}

console.log(`Successfully updated ${updatedCount} service pages with optimized Pune keywords!`);
