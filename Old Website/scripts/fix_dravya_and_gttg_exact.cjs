const fs = require('fs');
const path = require('path');

const targetDirs = ['inrank2.0/our-work', 'inrank2.0/case-studies'];

targetDirs.forEach(dir => {
  // 1. dravyafinancial.html
  const dPath = path.join(dir, 'dravyafinancial.html');
  if (fs.existsSync(dPath)) {
    let html = fs.readFileSync(dPath, 'utf8');

    // Replace the challenge paragraph
    const dravyaChallengeOld = /Dravya Financial Solutions Pvt Ltd produces research-backed botanical skincare[\s\S]*?drop-offs on mobile checkouts\./;
    const dravyaChallengeNew = `Dravya Financial Solutions Private Limited is a premier corporate financial services firm headquartered in Mumbai. They specialize in high-stakes structured finance: debt syndication, joint development agreement (JDA) funding, real estate inventory finance, equity raising, and working capital solutions for mid-market corporates, MSMEs, and real estate developers. Inrank designed a dignified, institutional corporate finance portal conveying the solemnity of an elite investment bank.<br><br><strong>Technical Challenge:</strong> High-net-worth real estate promoters and corporate CFOs demand rigorous institutional credibility before initiating multi-crore mandates. Unqualified retail loan queries were previously congesting senior partners' bandwidth, while banking partners required formal verification of syndicate transaction capabilities.`;
    
    if (dravyaChallengeOld.test(html)) {
      html = html.replace(dravyaChallengeOld, dravyaChallengeNew);
      console.log(`[SUCCESS] Replaced dravya overview challenge in ${dPath}`);
    } else {
      console.log(`[WARN] Dravya overview challenge not matched in ${dPath}`);
    }

    // Replace quote
    const dravyaQuoteOld = /<blockquote[^>]*>[\s\S]*?lead quality from Pune IT parks[\s\S]*?<\/blockquote>[\s\S]*?<strong[^>]*>Founder &amp; Lead Architect<\/strong>[\s\S]*?<span[^>]*>Dravya Financial Solutions Pvt Ltd<\/span>/;
    const dravyaQuoteNew = `<blockquote style="font-size:clamp(1.15rem, 1.8vw, 1.45rem);font-weight:600;color:var(--text-strong);line-height:1.5;margin:0 0 1.5rem;font-style:italic;">
            "Inrank gave Dravya an institutional-grade digital touchpoint that immediately commands respect from corporate promoters, developers, and lending syndicates across India."
          </blockquote>
          <strong style="display:block;color:var(--text-strong);font-size:1rem;font-weight:800;">Managing Director</strong>
          <span style="display:block;color:#64748b;font-size:0.85rem;margin-top:2px;">Dravya Financial Solutions Pvt Ltd (Mumbai)</span>`;

    if (dravyaQuoteOld.test(html)) {
      html = html.replace(dravyaQuoteOld, dravyaQuoteNew);
      console.log(`[SUCCESS] Replaced dravya quote in ${dPath}`);
    } else {
      console.log(`[WARN] Dravya quote not matched in ${dPath}`);
    }

    fs.writeFileSync(dPath, html, 'utf8');
  }

  // 2. greytothegreen.html
  const gPath = path.join(dir, 'greytothegreen.html');
  if (fs.existsSync(gPath)) {
    let html = fs.readFileSync(gPath, 'utf8');

    // Replace the challenge paragraph
    const gttgChallengeOld = /Grey To The Green produces research-backed botanical skincare[\s\S]*?drop-offs on mobile checkouts\./;
    const gttgChallengeNew = `Grey To The Green (a division of Quantum Innovation, Bangalore) manufactures 100% organic, plant-powered household and wellness solutions developed under the scientific stewardship of renowned molecular biologist Dr. Anil Kush. Their signature breakthrough, Checkmite, is a US EPA-registered neem dust-mite eliminator safe for infants and pets. They needed a nature-inspired yet rigorously scientific digital storefront and wholesale distributor portal.<br><br><strong>Commercial Challenge:</strong> Eco-conscious consumers and retail distributors were skeptical of generic organic claims due to greenwashing. The brand needed upfront EPA scientific proof, clear allergen infographics, and a seamless mobile checkout funnel with automated WhatsApp order confirmation.`;

    if (gttgChallengeOld.test(html)) {
      html = html.replace(gttgChallengeOld, gttgChallengeNew);
      console.log(`[SUCCESS] Replaced greytothegreen overview challenge in ${gPath}`);
    } else {
      console.log(`[WARN] Greytothegreen overview challenge not matched in ${gPath}`);
    }

    // Replace quote
    const gttgQuoteOld = /<blockquote[^>]*>[\s\S]*?lead quality from Pune IT parks[\s\S]*?<\/blockquote>[\s\S]*?<strong[^>]*>Founder &amp; Lead Architect<\/strong>[\s\S]*?<span[^>]*>Grey To The Green<\/span>/;
    const gttgQuoteNew = `<blockquote style="font-size:clamp(1.15rem, 1.8vw, 1.45rem);font-weight:600;color:var(--text-strong);line-height:1.5;margin:0 0 1.5rem;font-style:italic;">
            "Inrank bridged scientific rigor with commercial consumer trust. The EPA registration badges and active compound modules turned skeptical visitors into repeat D2C buyers and distributor inquiries across India."
          </blockquote>
          <strong style="display:block;color:var(--text-strong);font-size:1rem;font-weight:800;">Director of Product &amp; Innovation</strong>
          <span style="display:block;color:#64748b;font-size:0.85rem;margin-top:2px;">Grey To The Green (Quantum Innovation)</span>`;

    if (gttgQuoteOld.test(html)) {
      html = html.replace(gttgQuoteOld, gttgQuoteNew);
      console.log(`[SUCCESS] Replaced greytothegreen quote in ${gPath}`);
    } else {
      console.log(`[WARN] Greytothegreen quote not matched in ${gPath}`);
    }

    fs.writeFileSync(gPath, html, 'utf8');
  }
});

