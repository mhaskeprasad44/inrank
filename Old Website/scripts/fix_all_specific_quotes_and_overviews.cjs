const fs = require('fs');
const path = require('path');

const targetDirs = ['inrank2.0/our-work', 'inrank2.0/case-studies'];

targetDirs.forEach(dir => {
  // 1. cytos.html
  const cytosPath = path.join(dir, 'cytos.html');
  if (fs.existsSync(cytosPath)) {
    let html = fs.readFileSync(cytosPath, 'utf8');
    const oldCytosQuote = /<blockquote[^>]*>[\s\S]*?Our hospital purchase inquiries[\s\S]*?<\/blockquote>[\s\S]*?<strong[^>]*>[\s\S]*?<\/strong>[\s\S]*?<span[^>]*>Cytos Healthcare<\/span>/;
    const newCytosQuote = `<blockquote style="font-size:clamp(1.15rem, 1.8vw, 1.45rem);font-weight:600;color:var(--text-strong);line-height:1.5;margin:0 0 1.5rem;font-style:italic;">
            "Inrank understood our technical buyer mindset. Our CNC and PCB milling machine RFQs tripled within two months, and procurement teams from major electronics labs and tier-3 suppliers now reach out directly."
          </blockquote>
          <strong style="display:block;color:var(--text-strong);font-size:1rem;font-weight:800;">Director of Technical Operations</strong>
          <span style="display:block;color:#64748b;font-size:0.85rem;margin-top:2px;">CyTOS Machines Pune</span>`;
    if (oldCytosQuote.test(html)) {
      html = html.replace(oldCytosQuote, newCytosQuote);
      fs.writeFileSync(cytosPath, html, 'utf8');
      console.log(`[SUCCESS] Fixed cytos quote in ${cytosPath}`);
    } else {
      console.log(`[WARN] Old cytos quote not matched in ${cytosPath}`);
    }
  }

  // 2. hcpnest.html
  const hcpPath = path.join(dir, 'hcpnest.html');
  if (fs.existsSync(hcpPath)) {
    let html = fs.readFileSync(hcpPath, 'utf8');
    const oldHcpQuote = /<blockquote[^>]*>[\s\S]*?occupancy across both Kharadi floors[\s\S]*?<\/blockquote>[\s\S]*?<strong[^>]*>[\s\S]*?<\/strong>[\s\S]*?<span[^>]*>HCP Nest Coworking<\/span>/;
    const newHcpQuote = `<blockquote style="font-size:clamp(1.15rem, 1.8vw, 1.45rem);font-weight:600;color:var(--text-strong);line-height:1.5;margin:0 0 1.5rem;font-style:italic;">
            "Inrank completely transformed our healthcare placement pipeline. Hospital staffing inquiries surged and clinical candidate verification turnaround dropped from three weeks to under four days."
          </blockquote>
          <strong style="display:block;color:var(--text-strong);font-size:1rem;font-weight:800;">Head of Clinical Partnerships</strong>
          <span style="display:block;color:#64748b;font-size:0.85rem;margin-top:2px;">HCPNest (Healthcare Talent Network)</span>`;
    if (oldHcpQuote.test(html)) {
      html = html.replace(oldHcpQuote, newHcpQuote);
      fs.writeFileSync(hcpPath, html, 'utf8');
      console.log(`[SUCCESS] Fixed hcpnest quote in ${hcpPath}`);
    } else {
      console.log(`[WARN] Old hcp quote not matched in ${hcpPath}`);
    }
  }

  // 3. hiragrafix.html
  const hiraPath = path.join(dir, 'hiragrafix.html');
  if (fs.existsSync(hiraPath)) {
    let html = fs.readFileSync(hiraPath, 'utf8');
    const oldHiraQuote = /<blockquote[^>]*>[\s\S]*?Industrial signage requires technical credibility[\s\S]*?<\/blockquote>[\s\S]*?<strong[^>]*>[\s\S]*?<\/strong>[\s\S]*?<span[^>]*>Hira Grafix<\/span>/;
    const newHiraQuote = `<blockquote style="font-size:clamp(1.15rem, 1.8vw, 1.45rem);font-weight:600;color:var(--text-strong);line-height:1.5;margin:0 0 1.5rem;font-style:italic;">
            "Luxury packaging procurement demands flawless visual presentation and material credibility. Inrank gave us a digital platform that immediately won over Fortune 500 corporate gifting and mono-carton packaging clients across India."
          </blockquote>
          <strong style="display:block;color:var(--text-strong);font-size:1rem;font-weight:800;">Managing Director</strong>
          <span style="display:block;color:#64748b;font-size:0.85rem;margin-top:2px;">HIRAGRAFIX™ (Hira Printers Mumbai)</span>`;
    if (oldHiraQuote.test(html)) {
      html = html.replace(oldHiraQuote, newHiraQuote);
      fs.writeFileSync(hiraPath, html, 'utf8');
      console.log(`[SUCCESS] Fixed hiragrafix quote in ${hiraPath}`);
    } else {
      console.log(`[WARN] Old hira quote not matched in ${hiraPath}`);
    }
  }

  // 4. vasroventures.html
  const vasroPath = path.join(dir, 'vasroventures.html');
  if (fs.existsSync(vasroPath)) {
    let html = fs.readFileSync(vasroPath, 'utf8');
    const oldVasroQuote = /<blockquote[^>]*>[\s\S]*?represents our venture thesis[\s\S]*?<\/blockquote>[\s\S]*?<strong[^>]*>[\s\S]*?<\/strong>[\s\S]*?<span[^>]*>Vasro Ventures<\/span>/;
    const newVasroQuote = `<blockquote style="font-size:clamp(1.15rem, 1.8vw, 1.45rem);font-weight:600;color:var(--text-strong);line-height:1.5;margin:0 0 1.5rem;font-style:italic;">
            "Inrank built a fluid, mobile-first apparel storefront that showcases our collections with editorial sophistication. Our mobile checkout conversion and Instagram catalog sales have grown exponentially."
          </blockquote>
          <strong style="display:block;color:var(--text-strong);font-size:1rem;font-weight:800;">Creative &amp; Brand Director</strong>
          <span style="display:block;color:#64748b;font-size:0.85rem;margin-top:2px;">Vasro Ventures Pvt Ltd</span>`;
    if (oldVasroQuote.test(html)) {
      html = html.replace(oldVasroQuote, newVasroQuote);
      fs.writeFileSync(vasroPath, html, 'utf8');
      console.log(`[SUCCESS] Fixed vasroventures quote in ${vasroPath}`);
    } else {
      console.log(`[WARN] Old vasro quote not matched in ${vasroPath}`);
    }
  }

  // 5. greytothegreen.html
  const gttgPath = path.join(dir, 'greytothegreen.html');
  if (fs.existsSync(gttgPath)) {
    let html = fs.readFileSync(gttgPath, 'utf8');
    // Fix Quote
    const oldGttgQuote = /<blockquote[^>]*>[\s\S]*?lead quality from Pune IT parks[\s\S]*?<\/blockquote>[\s\S]*?<strong[^>]*>Founder &amp; Lead Architect<\/strong>[\s\S]*?<span[^>]*>Grey To The Green<\/span>/;
    const newGttgQuote = `<blockquote style="font-size:clamp(1.15rem, 1.8vw, 1.45rem);font-weight:600;color:var(--text-strong);line-height:1.5;margin:0 0 1.5rem;font-style:italic;">
            "Inrank bridged scientific rigor with commercial consumer trust. The EPA registration badges and active compound modules turned skeptical visitors into repeat D2C buyers and distributor inquiries across India."
          </blockquote>
          <strong style="display:block;color:var(--text-strong);font-size:1rem;font-weight:800;">Director of Product &amp; Innovation</strong>
          <span style="display:block;color:#64748b;font-size:0.85rem;margin-top:2px;">Grey To The Green (Quantum Innovation)</span>`;
    if (oldGttgQuote.test(html)) {
      html = html.replace(oldGttgQuote, newGttgQuote);
    }

    // Fix Overview challenge text
    const oldGttgChallenge = /Grey To The Green produces research-backed botanical skincare, non-toxic body remedies, and Ayurvedic wellness formulations \(including Kaya Kavach\)[\s\S]*?Technical Challenge:[\s\S]*?bleed.*ad.*drop-offs/i;
    const newGttgChallenge = `Grey To The Green (a division of Quantum Innovation, Bangalore) manufactures 100% organic, plant-powered household and wellness solutions developed under the scientific stewardship of renowned molecular biologist Dr. Anil Kush. Their signature breakthrough, Checkmite, is a US EPA-registered neem dust-mite eliminator safe for infants and pets. They needed a nature-inspired yet rigorously scientific digital storefront and wholesale distributor portal.</p><p style="font-size:1.05rem;line-height:1.75;color:#475569;margin-bottom:1.5rem;"><strong>Commercial Challenge:</strong> Eco-conscious consumers and retail distributors were skeptical of generic organic claims due to greenwashing. The brand needed upfront EPA scientific proof, clear allergen infographics, and a seamless mobile checkout funnel with automated WhatsApp order confirmation.`;
    if (oldGttgChallenge.test(html)) {
      html = html.replace(oldGttgChallenge, newGttgChallenge);
    }

    // Fix Scope of Architecture
    html = html.replace(/Conversion-engineered landing pages for flagship formulations \(Kaya Kavach\)/g, 'Conversion-engineered landing pages for EPA formulations (Checkmite)');
    html = html.replace(/Research-Backed Botanical Skincare & Ayurvedic Wellness D2C Platform/g, 'Plant-Powered Home Care, Eco-Friendly Formulations & Botanical Solutions');

    fs.writeFileSync(gttgPath, html, 'utf8');
    console.log(`[SUCCESS] Fixed greytothegreen in ${gttgPath}`);
  }

  // 6. dravyafinancial.html
  const dravyaPath = path.join(dir, 'dravyafinancial.html');
  if (fs.existsSync(dravyaPath)) {
    let html = fs.readFileSync(dravyaPath, 'utf8');

    // Fix Quote
    const oldDravyaQuote = /<blockquote[^>]*>[\s\S]*?lead quality from Pune IT parks[\s\S]*?<\/blockquote>[\s\S]*?<strong[^>]*>Founder &amp; Lead Architect<\/strong>[\s\S]*?<span[^>]*>Dravya Financial Solutions Pvt Ltd<\/span>/;
    const newDravyaQuote = `<blockquote style="font-size:clamp(1.15rem, 1.8vw, 1.45rem);font-weight:600;color:var(--text-strong);line-height:1.5;margin:0 0 1.5rem;font-style:italic;">
            "Inrank gave Dravya an institutional-grade digital touchpoint that immediately commands respect from corporate promoters, developers, and lending syndicates across India."
          </blockquote>
          <strong style="display:block;color:var(--text-strong);font-size:1rem;font-weight:800;">Managing Director</strong>
          <span style="display:block;color:#64748b;font-size:0.85rem;margin-top:2px;">Dravya Financial Solutions Pvt Ltd (Mumbai)</span>`;
    if (oldDravyaQuote.test(html)) {
      html = html.replace(oldDravyaQuote, newDravyaQuote);
    }

    // Fix Overview challenge text
    const oldDravyaChallenge = /Dravya Financial Solutions Pvt Ltd produces research-backed botanical skincare[\s\S]*?Technical Challenge:[\s\S]*?bleed.*ad.*drop-offs/i;
    const newDravyaChallenge = `Dravya Financial Solutions Private Limited is a premier corporate financial services firm headquartered in Mumbai. They specialize in high-stakes structured finance: debt syndication, joint development agreement (JDA) funding, real estate inventory finance, equity raising, and working capital solutions for mid-market corporates, MSMEs, and real estate developers. Inrank designed a dignified, institutional corporate finance portal conveying the solemnity of an elite investment bank.</p><p style="font-size:1.05rem;line-height:1.75;color:#475569;margin-bottom:1.5rem;"><strong>Commercial Challenge:</strong> High-net-worth real estate promoters and corporate CFOs demand rigorous institutional credibility before initiating multi-crore mandates. Unqualified retail loan queries were previously congesting senior partners' bandwidth, while banking partners required formal verification of syndicate transaction capabilities.`;
    if (oldDravyaChallenge.test(html)) {
      html = html.replace(oldDravyaChallenge, newDravyaChallenge);
    }

    // Fix subtitle if still botanical
    html = html.replace(/Research-Backed Botanical Skincare & Ayurvedic Wellness D2C Platform/g, 'Corporate Financial Services, Structured Debt Syndication & Working Capital Advisory');
    html = html.replace(/D2C storefront with instant add-to-cart flows/g, 'Institutional finance portal with corporate loan qualification desk');
    html = html.replace(/Product & Review JSON-LD schema for rich Google search snippets/g, 'FinancialService & Organization JSON-LD entity schema');
    html = html.replace(/Conversion-engineered landing pages for flagship formulations \(Kaya Kavach\)/g, 'Institutional debt syndication and JDA capital advisory funnels');
    html = html.replace(/Meta Pixel CAPI & Google Ads server-side tracking integration/g, 'Confidential deal qualification desk with encrypted intake');
    html = html.replace(/Sub-second mobile checkout funnel with automated WhatsApp order alerts/g, 'Working Capital Eligibility Matrix for corporate CFOs and promoters');
    html = html.replace(/Average Meta\/Google ROAS/g, 'Capital Inquiries Influenced');
    html = html.replace(/Monthly D2C Orders/g, 'Syndicate Capacity');
    html = html.replace(/Direct consumer checkouts/g, 'Multi-crore banking syndicates');
    html = html.replace(/Scalable D2C acquisition/g, 'Corporate debt & JDA funding');

    fs.writeFileSync(dravyaPath, html, 'utf8');
    console.log(`[SUCCESS] Fixed dravyafinancial in ${dravyaPath}`);
  }
});

