const fs = require('fs');
const content = fs.readFileSync('scripts/extracted_pricing_snippet.html', 'utf8');

// Find tab buttons
const tabBtns = content.match(/<button[^>]*class="[^"]*pricing-tab-btn[^"]*"[^>]*>[\s\S]*?<\/button>/gi) || [];
console.log('Tab Buttons:');
tabBtns.forEach(b => console.log(' - ' + b.replace(/<[^>]+>/g, '').trim()));

// Find all panels
const panels = content.match(/id="tab-[^"]*"[\s\S]*?(?=(id="tab-|<\/section>|<div class="mt-16))/gi) || [];
console.log('Panels found:', panels.length);

panels.forEach((p, idx) => {
  const idMatch = p.match(/id="(tab-[^"]*)"/);
  const panelId = idMatch ? idMatch[1] : `panel-${idx}`;
  console.log(`\n================ PANEL: ${panelId} ================`);
  
  // Find cards in panel
  const cards = p.split(/class="[^"]*border rounded-2xl[^"]*"/);
  console.log('Cards count:', cards.length - 1);
  for (let i = 1; i < cards.length; i++) {
    const c = cards[i];
    const titleMatch = c.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
    const priceMatch = c.match(/<span[^>]*font-extrabold[^>]*>(₹[\d,]+)<\/span>/i) || c.match(/(₹[\d,]+)/);
    const subMatch = c.match(/<p[^>]*text-muted-foreground[^>]*>([\s\S]*?)<\/p>/i);
    const isPopular = /Most Popular/i.test(c);
    
    // features
    const feats = (c.match(/<li[^>]*>([\s\S]*?)<\/li>/gi) || []).map(f => f.replace(/<[^>]+>/g, '').trim());
    
    console.log(`  Plan: ${titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : 'Unknown'} ${isPopular ? '(POPULAR)' : ''}`);
    console.log(`  Price: ${priceMatch ? priceMatch[1] : 'Unknown'}`);
    console.log(`  Desc: ${subMatch ? subMatch[1].replace(/<[^>]+>/g, '').trim() : ''}`);
    console.log(`  Features (${feats.length}):`, feats.slice(0, 4).join(' | ') + (feats.length > 4 ? ` ... (+${feats.length-4} more)` : ''));
  }
});

