const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

// Exact replacements mapping: file -> { newTitle, newDesc }
const optimizations = {
  'index.html': {
    title: "Digital Marketing & Web Development Company in Pune | Inrank",
    desc: "Inrank is Pune's performance agency. We engineer custom web platforms, Google 3-Pack Local SEO, high-ROAS paid ads, and Generative Engine Optimization."
  },
  'digital-marketing-agency-in-pune.html': {
    title: "Digital Marketing Agency in Pune | Performance SEO & Ads | Inrank",
    desc: "Inrank is Pune's premier ROI digital marketing agency. Data-driven Local SEO, Google 3-Pack, high-ROAS ads, and Generative Engine Optimization from ₹11,999/mo."
  },
  'contact.html': {
    title: "Contact Inrank Technologies Pune | Free Growth Audit",
    desc: "Book a complimentary technical growth and SEO audit with Inrank's senior engineers in Baner, Pune. Direct response within 4 business hours."
  },
  'services/seo-company-pune.html': {
    title: "SEO Company in Pune | Google 3-Pack & Organic Growth | Inrank",
    desc: "Inrank is Pune's leading SEO company. We engineer sub-second Core Web Vitals, local 3-Pack dominance in Baner & Hinjewadi, and high-purchase search rankings."
  },
  'services/custom-website-development.html': {
    title: "Website Development Company in Pune | Custom Next.js Lab | Inrank",
    desc: "Inrank is an engineering-first website development company in Pune. Sub-second Next.js and Tailwind web platforms built for verified lead conversions."
  },
  'services/ai-seo-services.html': {
    title: "AI SEO Services in Pune | Generative Engine Optimization | Inrank",
    desc: "Generative Engine Optimization (GEO) in Pune. Get your brand cited across ChatGPT, Perplexity, Claude, and Google AI Overviews with structured knowledge graphs."
  },
  'services/brochure-design-services.html': {
    title: "Brochure Design Services in Pune | Corporate Profiles | Inrank",
    desc: "Corporate brochure and catalog design in Pune. Premium print architecture, tri-folds, and PDF corporate collateral that drive enterprise deals."
  },
  'services/influencer-marketing-agency.html': {
    title: "Influencer Marketing Agency in Pune | Creator Growth | Inrank",
    desc: "Influencer marketing agency in Pune. Creator partnerships engineered for measurable ROI, brand scaling, and qualified direct customer acquisition."
  },
  'services/landing-page-design-services.html': {
    title: "Landing Page Design Services in Pune | High-Converting Funnels | Inrank",
    desc: "High-converting landing page design in Pune. Sub-second load speeds, direct-response UX, and behavioral triggers engineered for high-ROAS ad campaigns."
  },
  'services/letterhead-stationery-design.html': {
    title: "Letterhead & Stationery Design in Pune | Corporate Suites | Inrank",
    desc: "Executive letterhead and corporate stationery design in Pune. Watermarked, vector-precise corporate identity kits for professional enterprises."
  },
  'services/luxury-business-card-design.html': {
    title: "Luxury Business Card Design in Pune | Executive Identity | Inrank",
    desc: "Luxury business card design in Pune. Minimalist, tactile, premium print finishes and corporate typography engineered for executive networking."
  },
  'services/meta-ads-agency.html': {
    title: "Meta Ads Agency in Pune | Instagram & Facebook Ads | Inrank",
    desc: "Meta ads agency in Pune. Performance Facebook and Instagram advertising engineered for lower customer acquisition costs and profitable scale."
  },
  'services/mobile-app-development.html': {
    title: "Mobile App Development Company in Pune | iOS & Android | Inrank",
    desc: "Mobile app development in Pune. High-performance Flutter, React Native, iOS, and Android applications engineered for speed, offline sync, and scalability."
  },
  'blog/autonomous-ai-search-agents-deep-research-optimization.html': {
    title: "Autonomous AI Search Agents & Deep Research Citations | Inrank",
    desc: "How autonomous AI agents and deep research models cite web content in 2026. Technical guide to vector retrieval and LLM entity visibility."
  },
  'case-studies/dravyafinancial.html': {
    title: "Dravya Financial Case Study: ₹45Cr+ Deals | Inrank",
    desc: "How Inrank engineered a high-trust digital portal for Dravya Financial, generating ₹45Cr+ in structured capital and institutional lending deals."
  },
  'case-studies/greytothegreen.html': {
    title: "Grey To The Green Case Study: 4.8x ROAS | Inrank",
    desc: "How Inrank scaled Grey To The Green to 4.8x Meta ad ROAS, 3,200+ monthly orders, and sub-second checkout speeds across India."
  },
  'case-studies/hiragrafix.html': {
    title: "Hira Grafix Case Study: 250+ Corporate Clients | Inrank",
    desc: "How Inrank built an enterprise commercial print platform for Hira Grafix, acquiring 250+ corporate accounts and +185% search impressions."
  },
  'case-studies/orthopedicanklefootspecialist.html': {
    title: "Dr. Shyam Thakkar Case Study: #1 Google 3-Pack | Inrank",
    desc: "How Inrank secured the #1 Google 3-Pack ranking for Dr. Shyam Thakkar, driving 3,500+ successful orthopedic surgeries in Pune."
  },
  'case-studies/riituinstitution.html': {
    title: "Riitu Institution Case Study: 650+ Enrolled | Inrank",
    desc: "How Inrank engineered a high-converting EdTech admissions portal for Riitu Institution, scaling enrollments to 650+ students at 3.8x ad ROAS."
  },
  'case-studies/shetkarifoodstuff.html': {
    title: "Shetkari Foodstuff Case Study: ₹4.2Cr+ Export Orders | Inrank",
    desc: "How Inrank engineered a global agricultural B2B export storefront for Shetkari Foodstuff, acquiring ₹4.2Cr+ in overseas buyer contracts."
  },
  'case-studies/vasroventures.html': {
    title: "Vasro Ventures Case Study: 4.2x ROAS | Inrank",
    desc: "How Inrank engineered an editorial D2C apparel storefront for Vasro Ventures, generating 2,800+ orders at a profitable 4.2x ROAS."
  },
  'our-work/dravyafinancial.html': {
    title: "Dravya Financial Portfolio & Fintech UI/UX | Inrank 2.0",
    desc: "Visual portfolio showcase for Dravya Financial Solutions. Enterprise fintech UI/UX, institutional landing system, and responsive web portal."
  },
  'our-work/greytothegreen.html': {
    title: "Grey To The Green Portfolio & E-Commerce UI/UX | Inrank 2.0",
    desc: "Visual portfolio showcase for Grey To The Green. D2C botanical e-commerce storefront, mobile-first product gallery, and 4.8x ROAS funnels."
  },
  'our-work/riituinstitution.html': {
    title: "Riitu Institution Portfolio & EdTech UI/UX | Inrank 2.0",
    desc: "Visual portfolio showcase for Riitu Institution. Academic admissions portal, course directory, and conversion-optimized education platform."
  },
  'our-work/shetkarifoodstuff.html': {
    title: "Shetkari Foodstuff Portfolio & B2B Agro Trade | Inrank 2.0",
    desc: "Visual portfolio showcase for Shetkari Foodstuff Trading LLC. Multi-currency agro-commodity trade catalog and global export portal."
  },
  'our-work/vasroventures.html': {
    title: "Vasro Ventures Portfolio & Apparel Storefront | Inrank 2.0",
    desc: "Visual portfolio showcase for Vasro Ventures. Modern editorial fashion lookbook, look-builder UI, and scalable D2C apparel architecture."
  },
  'our-work/cytos.html': {
    title: "CyTOS Machines Portfolio & Industrial Web System | Inrank 2.0",
    desc: "Visual portfolio showcase for CyTOS Machines. Industrial machinery product catalog, heavy equipment specifications, and B2B quote flow."
  },
  'our-work/hcpnest.html': {
    title: "HCP Nest Portfolio & Healthcare Portal UI/UX | Inrank 2.0",
    desc: "Visual portfolio showcase for HCP Nest. Clinical recruitment platform, verified practitioner directories, and healthcare compliance UI."
  },
  'our-work/orthopedicanklefootspecialist.html': {
    title: "Dr. Shyam Thakkar Clinic Portfolio & Medical UI/UX | Inrank 2.0",
    desc: "Visual portfolio showcase for Dr. Shyam Thakkar (ARTICUL8 Clinic). Patient appointment portal, orthopedic service directory, and local SEO."
  }
};

let applied = 0;

for (const [relPath, opt] of Object.entries(optimizations)) {
  const filePath = path.join(ROOT_DIR, relPath);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Title replace
  if (opt.title) {
    const titleMatch = content.match(/<title>([^<]+)<\/title>/i);
    if (titleMatch) {
      content = content.replace(/<title>[^<]+<\/title>/i, `<title>${opt.title}</title>`);
      // Also update og:title if present
      content = content.replace(/<meta\s+property=["']og:title["']\s+content=["'][^"']*["']/i, `<meta property="og:title" content="${opt.title}"`);
      changed = true;
    }
  }

  // Desc replace
  if (opt.desc) {
    const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["'][^"']*["']/i);
    if (descMatch) {
      content = content.replace(/<meta\s+name=["']description["']\s+content=["'][^"']*["']/i, `<meta name="description" content="${opt.desc}"`);
      // Also update og:description if present
      content = content.replace(/<meta\s+property=["']og:description["']\s+content=["'][^"']*["']/i, `<meta property="og:description" content="${opt.desc}"`);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    applied++;
    console.log(`Optimized snippets in ${relPath} (Title: ${opt.title.length} chars, Desc: ${opt.desc.length} chars)`);
  }
}

console.log(`\nSuccessfully applied snippet optimizations to ${applied} files.`);
