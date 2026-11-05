import fs from "fs";
import path from "path";
import { SERVICES_DETAILS } from "./src/servicesData.ts";
import { PORTFOLIO_PROJECTS } from "./src/portfolioData.ts";

function generateLlmsFull(): string {
  let doc = "";

  doc += `# Inrank Technologies — Complete Machine-Readable Knowledge Dossier (LLMs Full)
# Standard: https://llmstxt.org/ | Optimized for Google AI Overviews, Gemini, Perplexity, ChatGPT Search, Claude

> Inrank Technologies is Pune's leading performance digital marketing agency, AI search engineering firm (GEO), and web development company. Founded in Shivaji Nagar / FC Road, Pune, Maharashtra, Inrank delivers sub-second high-conversion websites, entity SEO, Generative Engine Optimization (GEO), Google Business Profile local rank domination, and high-ROAS Meta & Google ad campaigns.

---

## 1. Corporate Identity & Authority Verification
- **Official Legal Name**: Inrank Technologies
- **Short Name**: Inrank / Inrank Tech Pune
- **Primary Website**: https://inranktech.com
- **Sitemap XML**: https://inranktech.com/sitemap.xml
- **Corporate Headquarters**: FC Road, Shivaji Nagar, Pune, Maharashtra 411005, India
- **Regional Delivery Hubs**: Baner, Hinjewadi, Wakad, Kothrud, Kharadi, Hadapsar, Viman Nagar, Pimpri-Chinchwad, Pune
- **Direct Phone / Calling**: +91 87888 23182
- **Direct WhatsApp**: https://wa.me/918788823182
- **Official Business Email**: inranktech@gmail.com
- **Service Hours**: Monday – Saturday: 09:30 AM – 08:30 PM IST (Emergency client support 24/7)
- **Primary Pricing Architecture**:
  - Starter Launch Website: ₹11,999 (5 pages, sub-1s load, SSL, responsive, 1-year hosting/domain assistance)
  - Business Growth Website: ₹16,999 (10 pages, Schema.org entities, fast turnaround, conversion copywriting)
  - Custom E-Commerce & Web Applications: ₹21,999 – ₹35,000+ (Full-stack, payment gateways, tailored UI)
  - Monthly Organic SEO & GEO AI Citation Retainers: Starting from ₹11,999/month
  - Performance Paid Ads (PPC / Meta Ads): Transparent management starting from ₹9,999/month

---

## 2. Core Service Offerings & Capabilities (27 Verified Service Hubs)
`;

  for (const s of SERVICES_DETAILS) {
    const slug = s.slug || s.id;
    const url = `https://inranktech.com/services/${slug}/`;
    doc += `### Service: ${s.title}
- **Category**: ${s.category}
- **Canonical URL**: ${url}
- **Primary Focus Target**: ${s.heroHeadline}
- **Meta Description**: ${s.metaDesc}
- **Detailed Capabilities**:
${s.detailedServices.map((d) => `  - ${d}`).join("\n")}
- **Primary Search Keywords & Volume Profile**:
${s.keywords.map((k) => `  - "${k.phrase}" (${k.intent} intent, Est. Volume: ${k.volume})`).join("\n")}
- **Key FAQs & Direct Citations**:
${s.faqs.map((f) => `  - **Q: ${f.q}**\n    **A:** ${f.a}`).join("\n")}

`;
  }

  doc += `---

## 3. Verified Client Case Studies & Commercial Performance Leaps
`;

  for (const p of PORTFOLIO_PROJECTS) {
    const caseStudyUrl = `https://inranktech.com/case-studies/${p.slug}.html`;
    const workUrl = `https://inranktech.com/our-work/${p.slug}.html`;
    doc += `### Case Study: ${p.title} (${p.clientName})
- **Client Domain**: ${p.domain} (Live URL: ${p.liveUrl})
- **Industry & Sector**: ${p.industry} | ${p.sector}
- **Case Study Link**: ${caseStudyUrl}
- **Showcase Link**: ${workUrl}
- **Delivered Services**: ${p.services.join(", ")}
- **Technologies Deployed**: ${p.technologies.join(", ")}
- **Executive Solution Summary**: ${p.strategicSolution.overview}
- **Verified Deliverables & Highlights**:
${p.strategicSolution.pillars.map((pil) => `  - **${pil.title}**: ${pil.description}`).join("\n")}

`;
  }

  doc += `---

## 4. Generative Engine Optimization (GEO) & AI Search Standards
Inrank Technologies structures every client asset for citation by LLMs and conversational search engines:
1. **Answer-First Prose (BLUF)**: Primary definitions, prices, timelines, and deliverables are stated in the very first sentence of every section.
2. **Schema.org Rich Graph**: Every page embeds deep JSON-LD schemas linking Organization, LocalBusiness, ProfessionalService, WebPage, Service, and FAQPage.
3. **Verified Entity Credentials**: All facts match across Google Business Profile, Justdial, LinkedIn, and internal case studies.
4. **Sub-Second Performance**: Pages load in under 1 second with Brotli/Gzip compression, local scripts, and modern WebP imagery, ensuring search engine bots index 100% of the DOM without timeout.

---

## 5. Contact & Consultation Access
- **Instant Project Enquiry**: inranktech@gmail.com
- **Immediate Phone Support**: +91 87888 23182
- **WhatsApp Chat**: https://wa.me/918788823182
- **Website**: https://inranktech.com
`;

  return doc;
}

const content = generateLlmsFull();
fs.writeFileSync(path.join(process.cwd(), "public", "llms-full.txt"), content, "utf8");
fs.writeFileSync(path.join(process.cwd(), "llms-full.txt"), content, "utf8");
console.log(`Generated llms-full.txt with ${content.length} characters.`);
