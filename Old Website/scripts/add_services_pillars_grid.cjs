const fs = require('fs');
let content = fs.readFileSync('inrank2.0/services.html', 'utf8');

const target = '<section style="padding:5rem 0 6rem;background:var(--paper);">\n      <div class="shell">';
const replacement = `<section style="padding:5rem 0 6rem;background:var(--paper);">
      <div class="shell">
        
        <!-- 4 ACCOUNTABLE GROWTH PILLARS (IMAGE 5 DESIGN SPECIFICATION) -->
        <div class="pillars-grid-4">
          
          <!-- Pillar 1: Search Dominance (Featured) -->
          <div class="pillar-card-4 featured">
            <div class="pillar-card-4-header">
              <span class="pillar-card-4-kicker">PILLAR 01</span>
              <span class="pillar-card-4-stat">+318%</span>
            </div>
            <h3 class="pillar-card-4-title">Search Dominance</h3>
            <p class="pillar-card-4-sub">Organic Reach Surge</p>
          </div>

          <!-- Pillar 2: High-Performance Web -->
          <div class="pillar-card-4">
            <div class="pillar-card-4-header">
              <span class="pillar-card-4-kicker">PILLAR 02</span>
              <span class="pillar-card-4-stat">&lt; 1.2s</span>
            </div>
            <h3 class="pillar-card-4-title">High-Performance Web</h3>
            <p class="pillar-card-4-sub">Core Web Vitals Speed</p>
          </div>

          <!-- Pillar 3: Paid Acquisition -->
          <div class="pillar-card-4">
            <div class="pillar-card-4-header">
              <span class="pillar-card-4-kicker">PILLAR 03</span>
              <span class="pillar-card-4-stat">4.8x</span>
            </div>
            <h3 class="pillar-card-4-title">Paid Acquisition</h3>
            <p class="pillar-card-4-sub">Average Campaign ROAS</p>
          </div>

          <!-- Pillar 4: Brand & CRO -->
          <div class="pillar-card-4">
            <div class="pillar-card-4-header">
              <span class="pillar-card-4-kicker">PILLAR 04</span>
              <span class="pillar-card-4-stat">+42%</span>
            </div>
            <h3 class="pillar-card-4-title">Brand &amp; CRO</h3>
            <p class="pillar-card-4-sub">Lead Conversion Lift</p>
          </div>

        </div>`;

content = content.replace(target, replacement);
fs.writeFileSync('inrank2.0/services.html', content, 'utf8');
console.log('Successfully added 4-pillars grid to inrank2.0/services.html');

