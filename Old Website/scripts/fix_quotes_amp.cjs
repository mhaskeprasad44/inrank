const fs = require('fs');
const path = require('path');

const targetDirs = ['inrank2.0/our-work', 'inrank2.0/case-studies'];

targetDirs.forEach(dir => {
  // 1. dravyafinancial.html
  const dPath = path.join(dir, 'dravyafinancial.html');
  if (fs.existsSync(dPath)) {
    let html = fs.readFileSync(dPath, 'utf8');
    const oldQuote = /<blockquote[^>]*>[\s\S]*?lead quality from Pune IT parks[\s\S]*?<\/blockquote>[\s\S]*?<strong[^>]*>Founder & Lead Architect<\/strong>[\s\S]*?<span[^>]*>Dravya Financial Solutions Pvt Ltd<\/span>/;
    const newQuote = `<blockquote style="font-size:clamp(1.15rem, 1.8vw, 1.45rem);font-weight:600;color:var(--text-strong);line-height:1.5;margin:0 0 1.5rem;font-style:italic;">
            "Inrank gave Dravya an institutional-grade digital touchpoint that immediately commands respect from corporate promoters, developers, and lending syndicates across India."
          </blockquote>
          <strong style="display:block;color:var(--text-strong);font-size:1rem;font-weight:800;">Managing Director</strong>
          <span style="display:block;color:#64748b;font-size:0.85rem;margin-top:2px;">Dravya Financial Solutions Pvt Ltd (Mumbai)</span>`;

    if (oldQuote.test(html)) {
      html = html.replace(oldQuote, newQuote);
      fs.writeFileSync(dPath, html, 'utf8');
      console.log(`[SUCCESS] Replaced quote in ${dPath}`);
    } else {
      console.log(`[WARN] Quote not matched in ${dPath}`);
    }
  }

  // 2. greytothegreen.html
  const gPath = path.join(dir, 'greytothegreen.html');
  if (fs.existsSync(gPath)) {
    let html = fs.readFileSync(gPath, 'utf8');
    const oldQuote = /<blockquote[^>]*>[\s\S]*?lead quality from Pune IT parks[\s\S]*?<\/blockquote>[\s\S]*?<strong[^>]*>Founder & Lead Architect<\/strong>[\s\S]*?<span[^>]*>Grey To The Green<\/span>/;
    const newQuote = `<blockquote style="font-size:clamp(1.15rem, 1.8vw, 1.45rem);font-weight:600;color:var(--text-strong);line-height:1.5;margin:0 0 1.5rem;font-style:italic;">
            "Inrank bridged scientific rigor with commercial consumer trust. The EPA registration badges and active compound modules turned skeptical visitors into repeat D2C buyers and distributor inquiries across India."
          </blockquote>
          <strong style="display:block;color:var(--text-strong);font-size:1rem;font-weight:800;">Director of Product &amp; Innovation</strong>
          <span style="display:block;color:#64748b;font-size:0.85rem;margin-top:2px;">Grey To The Green (Quantum Innovation)</span>`;

    if (oldQuote.test(html)) {
      html = html.replace(oldQuote, newQuote);
      fs.writeFileSync(gPath, html, 'utf8');
      console.log(`[SUCCESS] Replaced quote in ${gPath}`);
    } else {
      console.log(`[WARN] Quote not matched in ${gPath}`);
    }
  }
});

