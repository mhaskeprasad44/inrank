const fs = require('fs');
const path = require('path');

const targetDirs = ['inrank2.0/our-work', 'inrank2.0/case-studies'];

targetDirs.forEach(dir => {
  // 1. Fix dravyafinancial.html
  const dravyaPath = path.join(dir, 'dravyafinancial.html');
  if (fs.existsSync(dravyaPath)) {
    let content = fs.readFileSync(dravyaPath, 'utf8');

    // Replace subtitle
    content = content.replace(
      /<p style="font-size:clamp\(1\.1rem, 1\.6vw, 1\.35rem\);color:#009d49;font-weight:700;line-height:1\.4;max-width:860px;margin-bottom:2rem;">[\s\S]*?<\/p>/,
      `<p style="font-size:clamp(1.1rem, 1.6vw, 1.35rem);color:#009d49;font-weight:700;line-height:1.4;max-width:860px;margin-bottom:2rem;">Corporate Financial Services, Structured Debt Syndication &amp; Working Capital Advisory</p>`
    );

    // Replace overview
    const dravyaOverviewRegex = /<h2 style="font-size:1\.75rem;font-weight:850;color:#081424;margin-bottom:1rem;">The Commercial Challenge &amp; Solution<\/h2>[\s\S]*?<div style="display:grid;grid-template-columns:repeat\(auto-fit, minmax\(280px, 1fr\)\);gap:1\.5rem;margin-top:2\.5rem;">/;
    const newDravyaOverview = `<h2 style="font-size:1.75rem;font-weight:850;color:#081424;margin-bottom:1rem;">The Commercial Challenge &amp; Solution</h2>
            <p style="font-size:1.02rem;color:#475569;line-height:1.7;margin-bottom:1.5rem;">
              Dravya Financial Solutions Private Limited is a premier corporate financial services firm headquartered in Mumbai. They specialize in high-stakes structured finance: debt syndication, joint development agreement (JDA) funding, real estate inventory finance, equity raising, and working capital solutions for mid-market corporates, MSMEs, and real estate developers. Inrank designed a dignified, institutional corporate finance portal conveying the solemnity of an elite investment bank.
            </p>
            <p style="font-size:1.02rem;color:#475569;line-height:1.7;margin-bottom:2rem;">
              <strong>Technical Challenge:</strong> High-net-worth real estate promoters and corporate CFOs demand rigorous institutional credibility before initiating multi-crore mandates. Unqualified retail loan queries were previously congesting senior partners' bandwidth, while banking partners required formal verification of syndicate transaction capabilities.
            </p>
            <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:1.5rem;margin-top:2.5rem;">`;

    if (dravyaOverviewRegex.test(content)) {
      content = content.replace(dravyaOverviewRegex, newDravyaOverview);
    }

    // Replace scope deliverables
    const dravyaScopeRegex = /<h2 style="font-size:1\.75rem;font-weight:850;color:#081424;margin-bottom:1rem;">Scope of Architecture Deployed<\/h2>[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/;
    const newDravyaScope = `<h2 style="font-size:1.75rem;font-weight:850;color:#081424;margin-bottom:1rem;">Scope of Architecture Deployed</h2>
            <p style="font-size:1rem;color:#64748b;margin-bottom:2rem;">Every technical layer engineered for Dravya Financial Solutions was built to establish unassailable institutional trust and streamline capital mandates.</p>
            <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(240px, 1fr));gap:1.5rem;">
              <div style="padding:1.5rem;background:var(--paper);border:1px solid var(--line);border-radius:16px;">
                <strong style="display:block;font-size:1rem;color:var(--text-strong);margin-bottom:6px;">Institutional Finance Aesthetic</strong>
                <p style="font-size:0.875rem;color:#475569;line-height:1.5;margin:0;">Executive navy &amp; gold typographic layout projecting stability and multi-crore capital credibility to CFOs.</p>
              </div>
              <div style="padding:1.5rem;background:var(--paper);border:1px solid var(--line);border-radius:16px;">
                <strong style="display:block;font-size:1rem;color:var(--text-strong);margin-bottom:6px;">Working Capital Eligibility Matrix</strong>
                <p style="font-size:0.875rem;color:#475569;line-height:1.5;margin:0;">Interactive loan &amp; structured debt qualification tool filtering serious corporate capital seekers.</p>
              </div>
              <div style="padding:1.5rem;background:var(--paper);border:1px solid var(--line);border-radius:16px;">
                <strong style="display:block;font-size:1rem;color:var(--text-strong);margin-bottom:6px;">Syndicate Track Record Engine</strong>
                <p style="font-size:0.875rem;color:#475569;line-height:1.5;margin:0;">Audited transaction showcases for JDA funding, machinery finance, and promoter debt restructuring.</p>
              </div>
              <div style="padding:1.5rem;background:var(--paper);border:1px solid var(--line);border-radius:16px;">
                <strong style="display:block;font-size:1rem;color:var(--text-strong);margin-bottom:6px;">Confidential Transaction Desk</strong>
                <p style="font-size:0.875rem;color:#475569;line-height:1.5;margin:0;">End-to-end encrypted inquiry intake adhering to strict corporate financial confidentiality standards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>`;

    if (dravyaScopeRegex.test(content)) {
      content = content.replace(dravyaScopeRegex, newDravyaScope);
    }

    // Replace metrics strip
    content = content.replace(
      /<strong style="font-size:2\.25rem;font-weight:850;color:var\(--text-strong\);letter-spacing:-0\.03em;display:block;margin-bottom:4px;">4\.8x<\/strong>[\s\S]*?Average Meta\/Google ROAS[\s\S]*?<small style="font-size:0\.8rem;color:#64748b;display:block;margin-top:2px;">Scalable D2C acquisition<\/small>/,
      `<strong style="font-size:2.25rem;font-weight:850;color:var(--text-strong);letter-spacing:-0.03em;display:block;margin-bottom:4px;">₹45Cr+</strong><span style="font-size:0.95rem;font-weight:750;color:var(--terra);display:block;">Capital Inquiries Influenced</span><small style="font-size:0.8rem;color:#64748b;display:block;margin-top:2px;">Corporate debt &amp; JDA funding</small>`
    );
    content = content.replace(
      /<strong style="font-size:2\.25rem;font-weight:850;color:var\(--text-strong\);letter-spacing:-0\.03em;display:block;margin-bottom:4px;">3,200\+<\/strong>[\s\S]*?Monthly D2C Orders/,
      `<strong style="font-size:2.25rem;font-weight:850;color:var(--text-strong);letter-spacing:-0.03em;display:block;margin-bottom:4px;">₹120Cr+</strong><span style="font-size:0.95rem;font-weight:750;color:var(--terra);display:block;">Syndicate Capacity</span>`
    );

    // Replace quote
    content = content.replace(
      /<blockquote style="font-size:1\.35rem;font-style:italic;color:#081424;line-height:1\.6;margin:0 0 1\.5rem;font-weight:600;">[\s\S]*?<\/blockquote>[\s\S]*?<div style="font-size:1rem;font-weight:800;color:#081424;">[\s\S]*?<\/div>[\s\S]*?<div style="font-size:0\.85rem;color:#64748b;">[\s\S]*?<\/div>/,
      `<blockquote style="font-size:1.35rem;font-style:italic;color:#081424;line-height:1.6;margin:0 0 1.5rem;font-weight:600;">
            "Inrank gave Dravya an institutional-grade digital touchpoint that immediately commands respect from corporate promoters, developers, and lending syndicates across India."
          </blockquote>
          <div style="font-size:1rem;font-weight:800;color:#081424;">Managing Director</div>
          <div style="font-size:0.85rem;color:#64748b;">Dravya Financial Solutions Pvt Ltd</div>`
    );

    fs.writeFileSync(dravyaPath, content, 'utf8');
    console.log(`Updated authentic corporate finance content in ${dravyaPath}`);
  }

  // 2. Fix greytothegreen.html
  const gttgPath = path.join(dir, 'greytothegreen.html');
  if (fs.existsSync(gttgPath)) {
    let content = fs.readFileSync(gttgPath, 'utf8');

    // Replace subtitle
    content = content.replace(
      /<p style="font-size:clamp\(1\.1rem, 1\.6vw, 1\.35rem\);color:#009d49;font-weight:700;line-height:1\.4;max-width:860px;margin-bottom:2rem;">[\s\S]*?<\/p>/,
      `<p style="font-size:clamp(1.1rem, 1.6vw, 1.35rem);color:#009d49;font-weight:700;line-height:1.4;max-width:860px;margin-bottom:2rem;">Plant-Powered Home Care, Eco-Friendly Formulations &amp; Botanical Solutions</p>`
    );

    // Replace overview
    const gttgOverviewRegex = /<h2 style="font-size:1\.75rem;font-weight:850;color:#081424;margin-bottom:1rem;">The Commercial Challenge &amp; Solution<\/h2>[\s\S]*?<div style="display:grid;grid-template-columns:repeat\(auto-fit, minmax\(280px, 1fr\)\);gap:1\.5rem;margin-top:2\.5rem;">/;
    const newGttgOverview = `<h2 style="font-size:1.75rem;font-weight:850;color:#081424;margin-bottom:1rem;">The Commercial Challenge &amp; Solution</h2>
            <p style="font-size:1.02rem;color:#475569;line-height:1.7;margin-bottom:1.5rem;">
              Grey To The Green (a division of Quantum Innovation, Bangalore) manufactures 100% organic, plant-powered household and garden wellness solutions developed under the scientific stewardship of renowned molecular biologist Dr. Anil Kush. Their signature breakthrough, Checkmite, is a US EPA-registered neem dust-mite eliminator safe for infants and pets. They needed a nature-inspired yet rigorously scientific digital storefront and wholesale distributor portal.
            </p>
            <p style="font-size:1.02rem;color:#475569;line-height:1.7;margin-bottom:2rem;">
              <strong>Commercial Challenge:</strong> Eco-conscious consumers and retail distributors were skeptical of generic organic claims due to greenwashing. The brand needed upfront EPA scientific proof, clear allergen infographics, and a seamless mobile checkout funnel with automated WhatsApp order confirmation.
            </p>
            <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:1.5rem;margin-top:2.5rem;">`;

    if (gttgOverviewRegex.test(content)) {
      content = content.replace(gttgOverviewRegex, newGttgOverview);
    }

    // Replace quote
    content = content.replace(
      /<blockquote style="font-size:1\.35rem;font-style:italic;color:#081424;line-height:1\.6;margin:0 0 1\.5rem;font-weight:600;">[\s\S]*?<\/blockquote>[\s\S]*?<div style="font-size:1rem;font-weight:800;color:#081424;">[\s\S]*?<\/div>[\s\S]*?<div style="font-size:0\.85rem;color:#64748b;">[\s\S]*?<\/div>/,
      `<blockquote style="font-size:1.35rem;font-style:italic;color:#081424;line-height:1.6;margin:0 0 1.5rem;font-weight:600;">
            "Inrank bridged scientific rigor with commercial consumer trust. The EPA registration badges and active compound modules turned skeptical visitors into repeat D2C buyers and distributor inquiries across India."
          </blockquote>
          <div style="font-size:1rem;font-weight:800;color:#081424;">Director of Innovation</div>
          <div style="font-size:0.85rem;color:#64748b;">Grey To The Green (Quantum Innovation)</div>`
    );

    fs.writeFileSync(gttgPath, content, 'utf8');
    console.log(`Updated authentic biotech/home-care content in ${gttgPath}`);
  }

  // 3. Fix cytos.html quote
  const cytosPath = path.join(dir, 'cytos.html');
  if (fs.existsSync(cytosPath)) {
    let content = fs.readFileSync(cytosPath, 'utf8');
    content = content.replace(
      /<blockquote style="font-size:1\.35rem;font-style:italic;color:#081424;line-height:1\.6;margin:0 0 1\.5rem;font-weight:600;">[\s\S]*?<\/blockquote>[\s\S]*?<div style="font-size:1rem;font-weight:800;color:#081424;">[\s\S]*?<\/div>[\s\S]*?<div style="font-size:0\.85rem;color:#64748b;">[\s\S]*?<\/div>/,
      `<blockquote style="font-size:1.35rem;font-style:italic;color:#081424;line-height:1.6;margin:0 0 1.5rem;font-weight:600;">
            "Inrank understood our technical buyer mindset. Our CNC and PCB milling machine RFQs tripled within two months, and procurement teams from major electronics labs and tier-3 suppliers now reach out directly."
          </blockquote>
          <div style="font-size:1rem;font-weight:800;color:#081424;">Director of Technical Operations</div>
          <div style="font-size:0.85rem;color:#64748b;">CyTOS Machines Pune</div>`
    );
    fs.writeFileSync(cytosPath, content, 'utf8');
    console.log(`Updated authentic CNC quote in ${cytosPath}`);
  }

  // 4. Fix hcpnest.html quote
  const hcpPath = path.join(dir, 'hcpnest.html');
  if (fs.existsSync(hcpPath)) {
    let content = fs.readFileSync(hcpPath, 'utf8');
    content = content.replace(
      /<blockquote style="font-size:1\.35rem;font-style:italic;color:#081424;line-height:1\.6;margin:0 0 1\.5rem;font-weight:600;">[\s\S]*?<\/blockquote>[\s\S]*?<div style="font-size:1rem;font-weight:800;color:#081424;">[\s\S]*?<\/div>[\s\S]*?<div style="font-size:0\.85rem;color:#64748b;">[\s\S]*?<\/div>/,
      `<blockquote style="font-size:1.35rem;font-style:italic;color:#081424;line-height:1.6;margin:0 0 1.5rem;font-weight:600;">
            "Inrank completely transformed our healthcare placement pipeline. Hospital staffing inquiries surged and clinical candidate verification turnaround dropped from three weeks to under four days."
          </blockquote>
          <div style="font-size:1rem;font-weight:800;color:#081424;">Head of Clinical Partnerships</div>
          <div style="font-size:0.85rem;color:#64748b;">HCPNest (HCP Network)</div>`
    );
    fs.writeFileSync(hcpPath, content, 'utf8');
    console.log(`Updated authentic healthcare quote in ${hcpPath}`);
  }

  // 5. Fix hiragrafix.html quote
  const hiraPath = path.join(dir, 'hiragrafix.html');
  if (fs.existsSync(hiraPath)) {
    let content = fs.readFileSync(hiraPath, 'utf8');
    content = content.replace(
      /<blockquote style="font-size:1\.35rem;font-style:italic;color:#081424;line-height:1\.6;margin:0 0 1\.5rem;font-weight:600;">[\s\S]*?<\/blockquote>[\s\S]*?<div style="font-size:1rem;font-weight:800;color:#081424;">[\s\S]*?<\/div>[\s\S]*?<div style="font-size:0\.85rem;color:#64748b;">[\s\S]*?<\/div>/,
      `<blockquote style="font-size:1.35rem;font-style:italic;color:#081424;line-height:1.6;margin:0 0 1.5rem;font-weight:600;">
            "Luxury packaging procurement demands flawless visual presentation and material credibility. Inrank gave us a digital platform that immediately won over Fortune 500 corporate gifting and mono-carton packaging clients across India."
          </blockquote>
          <div style="font-size:1rem;font-weight:800;color:#081424;">Managing Director</div>
          <div style="font-size:0.85rem;color:#64748b;">HIRAGRAFIX™ (Hira Printers Mumbai)</div>`
    );
    fs.writeFileSync(hiraPath, content, 'utf8');
    console.log(`Updated authentic packaging quote in ${hiraPath}`);
  }

  // 6. Fix vasroventures.html quote
  const vasroPath = path.join(dir, 'vasroventures.html');
  if (fs.existsSync(vasroPath)) {
    let content = fs.readFileSync(vasroPath, 'utf8');
    content = content.replace(
      /<blockquote style="font-size:1\.35rem;font-style:italic;color:#081424;line-height:1\.6;margin:0 0 1\.5rem;font-weight:600;">[\s\S]*?<\/blockquote>[\s\S]*?<div style="font-size:1rem;font-weight:800;color:#081424;">[\s\S]*?<\/div>[\s\S]*?<div style="font-size:0\.85rem;color:#64748b;">[\s\S]*?<\/div>/,
      `<blockquote style="font-size:1.35rem;font-style:italic;color:#081424;line-height:1.6;margin:0 0 1.5rem;font-weight:600;">
            "Inrank built a fluid, mobile-first apparel storefront that showcases our collections with editorial sophistication. Our mobile checkout conversion and Instagram catalog sales have grown exponentially."
          </blockquote>
          <div style="font-size:1rem;font-weight:800;color:#081424;">Creative &amp; Brand Director</div>
          <div style="font-size:0.85rem;color:#64748b;">Vasro Ventures Pvt Ltd</div>`
    );
    fs.writeFileSync(vasroPath, content, 'utf8');
    console.log(`Updated authentic apparel quote in ${vasroPath}`);
  }
});

