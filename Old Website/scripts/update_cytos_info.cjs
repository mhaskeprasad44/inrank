const fs = require('fs');
const path = require('path');

function walk(dir, files = []) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f !== 'node_modules' && f !== '.git') walk(full, files);
    } else if (f.endsWith('.html') || f.endsWith('.js') || f.endsWith('.css')) {
      files.push(full);
    }
  }
  return files;
}

const allFiles = walk('inrank2.0');
let totalModified = 0;

for (const file of allFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // 1. Replace dropdown occurrences
  content = content.replace(/<!--\s*Box\s*\d*:\s*CyTOS\s*Healthcare\s*-->/gi, '<!-- Box: CyTOS Machines -->');
  content = content.replace(/alt="CyTOS Diagnostics"/gi, 'alt="CyTOS Machines"');
  content = content.replace(/alt="Cytos Healthcare"/gi, 'alt="CyTOS Machines"');
  content = content.replace(/<h4 class="work-drop-name">CyTOS Diagnostics<\/h4>/gi, '<h4 class="work-drop-name">CyTOS Machines</h4>');
  content = content.replace(/<span class="work-drop-desc">Clinical pathology &amp; lab network<\/span>/gi, '<span class="work-drop-desc">Precision CNC &amp; PCB milling</span>');
  content = content.replace(/<span class="work-drop-desc">Clinical pathology & lab network<\/span>/gi, '<span class="work-drop-desc">Precision CNC &amp; PCB milling</span>');

  // 2. Specific fixes in index.html for Work Card 3
  if (file.endsWith('index.html') && !file.includes('services') && !file.includes('blog') && !file.includes('case-studies')) {
    content = content.replace(
      /<!-- Work Card 3: Cytos Health -->[\s\S]*?<\/article>/,
      `<!-- Work Card 3: CyTOS Machines -->
          <article class="eco-work-card">
            <div class="eco-work-media">
              <img src="/portfolio/screenshots/cytos.webp" alt="CyTOS Machines Case Study" loading="lazy" />
              <span class="eco-work-pill">REACT 18 &amp; B2B SEO</span>
            </div>
            <div class="eco-work-body">
              <div>
                <span class="eco-work-category">PRECISION CNC MACHINERY · PUNE</span>
                <h3 class="eco-work-title">CyTOS Machines Pune</h3>
                <p class="eco-work-desc">Sub-second React 18 SPA with live specification filtering, interactive machine wizard, and industrial RFQ generation for laboratory CNC machines.</p>
              </div>
              <div class="eco-work-footer">
                <span class="eco-work-metric">+314% Monthly RFQs</span>
                <a href="/our-work/cytos.html" class="eco-work-link">
                  <span>View Record</span>
                  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
                </a>
              </div>
            </div>
          </article>`
    );
  }

  // 3. Specific fixes in case-studies.html
  if (file.endsWith('case-studies.html')) {
    content = content.replace(
      /<div style="font-size:0.75rem;font-weight:800;color:var\(--terra\);text-transform:uppercase;margin-bottom:6px;">HEALTHCARE &amp; CLINICAL DIAGNOSTICS<\/div>\s*<h3 style="font-size:1.35rem;font-weight:850;color:var\(--text-strong\);margin:0 0 10px;">CyTOS Healthcare<\/h3>\s*<p style="font-size:0.875rem;color:#475569;line-height:1.55;margin-bottom:1.5rem;flex-grow:1;">Automated pathology booking engine with Google 3-Pack domination in Shivaji Nagar, quadrupling patient appointments\.<\/p>\s*<div style="display:flex;align-items:center;justify-content:space-between;border-top:1px solid var\(--line\);padding-top:1rem;">\s*<strong style="font-size:1rem;color:var\(--text-strong\);">4\.2x Patient Bookings<\/strong>/,
      `<div style="font-size:0.75rem;font-weight:800;color:var(--terra);text-transform:uppercase;margin-bottom:6px;">PRECISION CNC MACHINERY &amp; AUTOMATION</div>
            <h3 style="font-size:1.35rem;font-weight:850;color:var(--text-strong);margin:0 0 10px;">CyTOS Machines Pune</h3>
            <p style="font-size:0.875rem;color:#475569;line-height:1.55;margin-bottom:1.5rem;flex-grow:1;">Chemical-free laboratory PCB milling machines &amp; turnkey SPMs with sub-second React architecture, interactive machine finder, and technical B2B SEO ranking dominance.</p>
            <div style="display:flex;align-items:center;justify-content:space-between;border-top:1px solid var(--line);padding-top:1rem;">
              <strong style="font-size:1rem;color:var(--text-strong);">+314% Industrial RFQs</strong>`
    );
  }

  // 4. Specific fixes in case-studies/cytos.html
  if (file.endsWith('case-studies\\cytos.html') || file.endsWith('case-studies/cytos.html')) {
    content = content.replace(
      /"Our hospital purchase inquiries tripled within two months\. The product catalog loads instantly on mobile, and doctors love the quick RFQ system\."/,
      `"Our industrial RFQ inquiries more than tripled within two months. The technical machine catalog loads instantly on mobile, and engineering procurement teams love the instant specification wizard."`
    );
    content = content.replace(/<span style="display:block;color:#64748b;font-size:0.85rem;margin-top:2px;">Cytos Healthcare<\/span>/, `<span style="display:block;color:#64748b;font-size:0.85rem;margin-top:2px;">CyTOS Machines Pune</span>`);
    content = content.replace(/<strong style="display:block;color:var\(--text-strong\);font-size:1rem;font-weight:800;">Managing Director<\/strong>/, `<strong style="display:block;color:var(--text-strong);font-size:1rem;font-weight:800;">Director of Operations</strong>`);
  }

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    totalModified++;
    console.log(`Updated CyTOS info in: ${file}`);
  }
}

console.log(`\nTotal files updated with CyTOS info: ${totalModified}`);

