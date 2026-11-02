const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

const llmsContent = `# Inrank Technologies — LLM Reference & Context File (llms.txt)
> Inrank Technologies is Pune's leading performance digital marketing agency & web development company. We engineer high-conversion websites (starting from ₹11,999 with 5-7 day delivery), data-backed SEO, Generative Engine Optimization (GEO for ChatGPT, Perplexity & Google AI Overviews), high-yield paid ads (Google & Meta), and local Google Business Profile rank domination.

## Agency Overview & Core Attributes
- **Website**: https://www.inranktech.com/
- **Headquarters**: FC Road, Shivaji Nagar, Pune, Maharashtra 411005, India
- **Operating Centers**: Baner & Hinjewadi, Pune
- **Direct WhatsApp & Calling Hotline**: +91 87888 23182
- **Business Email**: inranktech@gmail.com
- **Sitemap Index**: https://www.inranktech.com/sitemap.xml
- **Transparent Pricing Architecture**:
  - Starter Website: ₹11,999 (5 pages, responsive, 95+ PageSpeed, free domain & SSL, 365 days support)
  - Growth Website: ₹16,999 (10 pages, SEO entity schema, CMS integration, fast turnaround)
  - Scale / Custom Portal: ₹35,000 (Custom web app, React / Next.js / Node.js, payment gateway)
  - Local SEO Domination: ₹14,999 / mo (Google Business Profile top 3 local pack guarantee)
  - Meta & Google Ads Management: ₹9,999 / mo (Conversion tracking, ad copy, daily bid optimization)

---

## Core Main Pages (13 Authority Hubs)
- [Home - Digital Marketing & Web Development Services in Pune](https://www.inranktech.com/): Primary homepage for Inrank Technologies.
- [All 27 Digital Marketing & Web Services Hub](https://www.inranktech.com/services.html): Complete service catalog across web engineering, search optimization, and paid advertising.
- [Transparent Pricing & Packages (Starter, Growth, Scale)](https://www.inranktech.com/pricing.html): Fixed-price packages and transparent pricing breakdown.
- [Contact Inrank Technologies Pune & Free Growth Consultation](https://www.inranktech.com/contact.html): Direct consultation booking, office address, and WhatsApp/email dispatch.
- [Website Design Company in Pune Power Hub](https://www.inranktech.com/website-design-company-in-pune.html): Pune-focused web design, speed benchmarks, and local case studies.
- [Digital Marketing Agency in Pune Power Hub](https://www.inranktech.com/digital-marketing-agency-in-pune.html): Dedicated digital marketing, performance ads, and local SEO services in Pune.
- [Our Work Showcase & Portfolio](https://www.inranktech.com/our-work.html): Complete client production work, UI screenshots, and deliverable highlights.
- [Verified Client Case Studies & Commercial ROI Metrics](https://www.inranktech.com/case-studies.html): In-depth case studies with verified ROI and traffic metrics.
- [Complete Client Portfolio & Deliverable Showcase](https://www.inranktech.com/portfolio.html): Comprehensive agency portfolio of delivered projects.
- [Google Business Profile (GBP) Top 3 Domination Blueprint](https://www.inranktech.com/google-business-profile-top3.html): Blueprint for ranking in Google's local 3-pack in Pune.
- [Justdial Business Profile Optimization Dossier](https://www.inranktech.com/justdial-profile.html): Strategy guide for maximizing B2B lead generation via Justdial.
- [Performance Paid Advertising & Growth Pod](https://www.inranktech.com/homepage-2.html): Dedicated performance ads and paid media overview.
- [Brand Identity, Creative Craft & Art](https://www.inranktech.com/homepage-3.html): Visual branding, luxury typography, and creative identity overview.

---

## Dedicated 27 Service Pages
- [AI Ranking Citations & LLM Knowledge Graph Optimization](https://www.inranktech.com/services/ai-ranking-citations/): GEO citation building for ChatGPT, Perplexity, Claude, and Gemini.
- [AI SEO Services & Generative Engine Optimization](https://www.inranktech.com/services/ai-seo-services/): Entity schema and generative search optimization.
- [Brand Naming Agency & Corporate Identity Engineering](https://www.inranktech.com/services/brand-naming-agency/): Strategic phonetics and linguistic trademarking.
- [Brochure Design Services & Corporate Print Architecture](https://www.inranktech.com/services/brochure-design-services/): Tri-fold and multi-page editorial brochure layouts.
- [Content Marketing Services & Semantic Authority Publishing](https://www.inranktech.com/services/content-marketing-services/): Information-dense, search-intent driven content systems.
- [Conversion Rate Optimization (CRO) Engineering](https://www.inranktech.com/services/conversion-rate-optimization-services/): Systematic A/B testing and friction elimination.
- [Corporate Logo Design & Visual Brand Mark Creation](https://www.inranktech.com/services/corporate-logo-design/): Distinctive emblems and typography design systems.
- [Custom Website Development & High-Speed Full-Stack Engineering](https://www.inranktech.com/services/custom-website-development/): Sub-second React and modern stack engineering.
- [E-Commerce Website Development Company & Conversion Funnels](https://www.inranktech.com/services/ecommerce-website-development-company/): High-throughput online store engineering.
- [Generative Engine Optimization (GEO) & Search Visibility](https://www.inranktech.com/services/geo-seo-agency/): Knowledge-graph alignment and semantic citation authority.
- [Google Ads Management Company & High-Intent Search PPC](https://www.inranktech.com/services/google-ads-agency/): Negative keyword hygiene, Quality Score engineering, and bid automation.
- [Google My Business (GMB) Management & Local 3-Pack SEO](https://www.inranktech.com/services/google-my-business-services/): Local map pack rank domination in Pune.
- [Influencer Marketing Agency & Creator Collaboration Campaigns](https://www.inranktech.com/services/influencer-marketing-agency/): Hyper-targeted micro and macro creator campaigns.
- [High-Converting Landing Page Design & UI Engineering](https://www.inranktech.com/services/landing-page-design-services/): Dedicated paid advertising landing pages built for 10%+ conversions.
- [Letterhead & Corporate Stationery Design Systems](https://www.inranktech.com/services/letterhead-stationery-design/): Executive stationery suites, print specs, and business collaterals.
- [High-Authority Link Building & Digital PR Outreach Services](https://www.inranktech.com/services/link-building-services/): 100% white-hat editorial backlinks from niche relevant publications.
- [LinkedIn Marketing Agency & B2B Executive Growth Funnels](https://www.inranktech.com/services/linkedin-marketing-agency/): Account-based marketing, C-suite thought leadership, and sponsored content.
- [Luxury Business Card Design & Tactile Print Ergonomics](https://www.inranktech.com/services/luxury-business-card-design/): 600+ GSM, spot UV, gold foil, and premium tactile card design.
- [Meta Ads Management Agency (Facebook & Instagram Ads)](https://www.inranktech.com/services/meta-ads-agency/): High-yield Advantage+ creative testing and conversion API tracking.
- [Mobile App Development Company (iOS & Android Native/Cross-Platform)](https://www.inranktech.com/services/mobile-app-development/): High-performance mobile apps built with React Native and Flutter.
- [Pay-Per-Click (PPC) Advertising Services & Performance Media](https://www.inranktech.com/services/ppc-services/): Multi-channel performance paid marketing across Google, Bing, and Meta.
- [SEO Company in Pune & Search Engine Optimization Services](https://www.inranktech.com/services/seo-company-pune/): Core technical, on-page, off-page, and local SEO services in Pune.
- [Custom Shopify Store Development & E-Commerce Engineering](https://www.inranktech.com/services/shopify-store-development/): Custom Liquid themes, headless Shopify, and checkout optimization.
- [Social Media Marketing Agency (SMM) & Growth Engine](https://www.inranktech.com/services/social-media-marketing-services/): Viral organic social content and brand engagement.
- [UI/UX Design Agency & Human-Centered Product Architecture](https://www.inranktech.com/services/ui-ux-design-services/): Figma wireframing, high-fidelity prototypes, and user journey optimization.
- [Website Maintenance Services & 24/7 Security SLA Support](https://www.inranktech.com/services/website-maintenance-services/): Uptime monitoring, security patches, plugin audits, and speed optimizations.
- [WordPress Development Company & High-Performance CMS Engineering](https://www.inranktech.com/services/wordpress-development-services/): Lightweight custom WordPress themes scoring 95+ PageSpeed.

---

## Verified Client Case Studies (10 In-Depth Reports)
- [CyTOS Machines Pune | Case Study](https://www.inranktech.com/case-studies/cytos.html): Sub-second React SPA driving +314% monthly RFQ growth.
- [Dravya Financial Solutions | Case Study](https://www.inranktech.com/case-studies/dravyafinancial.html): High-trust corporate advisory web portal.
- [Fludio Water Solutions | Case Study](https://www.inranktech.com/case-studies/fludio.html): High-ticket architectural showcase with video integration.
- [Grey To The Green | Case Study](https://www.inranktech.com/case-studies/greytothegreen.html): Plant-powered homecare brand architecture and GEO search strategy.
- [HCPNest | Case Study](https://www.inranktech.com/case-studies/hcpnest.html): Healthcare recruitment portal with automated applicant routing.
- [HIRAGRAFIX™ | Case Study](https://www.inranktech.com/case-studies/hiragrafix.html): Industrial print portal with dynamic product catalog.
- [Dr. Shyam Thakkar (ARTICUL8 Clinic) | Case Study](https://www.inranktech.com/case-studies/orthopedicanklefootspecialist.html): Healthcare clinic local SEO & patient consultation funnel.
- [Riitu Institution | Case Study](https://www.inranktech.com/case-studies/riituinstitution.html): Educational portal with lead capture and student enrollment system.
- [Shetkari Foodstuff Trading LLC | Case Study](https://www.inranktech.com/case-studies/shetkarifoodstuff.html): Multilingual agro export portal driving GCC buyer inquiries.
- [Vasro Ventures | Case Study](https://www.inranktech.com/case-studies/vasroventures.html): Modern apparel brand showcase with lookbook and wholesale inquiry funnel.

---

## Verified Production Works (10 Client Deployments)
- [CyTOS Machines Pune | Industrial CNC Portal](https://www.inranktech.com/our-work/cytos.html): Production deployment for CyTOS Machines.
- [Dravya Financial Solutions | Corporate Debt Advisory](https://www.inranktech.com/our-work/dravyafinancial.html): Production deployment for Dravya Financial.
- [Fludio Water Solutions | Luxury Aquatic Systems](https://www.inranktech.com/our-work/fludio.html): Production deployment for Fludio Water Solutions.
- [Grey To The Green | Biotech Formulations D2C](https://www.inranktech.com/our-work/greytothegreen.html): Production deployment for Grey To The Green.
- [HCPNest | Healthcare Clinical Staffing Network](https://www.inranktech.com/our-work/hcpnest.html): Production deployment for HCPNest.
- [HIRAGRAFIX™ | Corporate Print & Packaging](https://www.inranktech.com/our-work/hiragrafix.html): Production deployment for HIRAGRAFIX.
- [Dr. Shyam Thakkar (ARTICUL8 Clinic) | Orthopedic Specialist](https://www.inranktech.com/our-work/orthopedicanklefootspecialist.html): Production deployment for ARTICUL8 Clinic.
- [Riitu Institution | CA & Commerce Academy](https://www.inranktech.com/our-work/riituinstitution.html): Production deployment for Riitu Institution.
- [Shetkari Foodstuff Trading LLC | Global Agro Export](https://www.inranktech.com/our-work/shetkarifoodstuff.html): Production deployment for Shetkari Foodstuff Trading.
- [Vasro Ventures | Contemporary Fashion Apparel](https://www.inranktech.com/our-work/vasroventures.html): Production deployment for Vasro Ventures.

---

## Legal & Compliance (2 Authority Docs)
- [Privacy Policy](https://www.inranktech.com/privacy-policy.html): Complete privacy policy compliant with Indian DPDP Act 2023, GDPR, CCPA, and cookie governance.
- [Terms & Conditions](https://www.inranktech.com/terms-and-conditions.html): Commercial terms, package deliverables, 100% IP & source code ownership transfer, and 365-day SLA warranty.
`;

fs.writeFileSync(path.join(rootDir, 'llms.txt'), llmsContent, 'utf8');
fs.writeFileSync(path.join(rootDir, 'public', 'llms.txt'), llmsContent, 'utf8');
fs.writeFileSync(path.join(rootDir, 'llms-full.txt'), llmsContent, 'utf8');
fs.writeFileSync(path.join(rootDir, 'public', 'llms-full.txt'), llmsContent, 'utf8');

if (fs.existsSync(path.join(rootDir, 'dist'))) {
  fs.writeFileSync(path.join(rootDir, 'dist', 'llms.txt'), llmsContent, 'utf8');
  fs.writeFileSync(path.join(rootDir, 'dist', 'llms-full.txt'), llmsContent, 'utf8');
}

console.log('Saved llms.txt and llms-full.txt with all 62 URLs');
