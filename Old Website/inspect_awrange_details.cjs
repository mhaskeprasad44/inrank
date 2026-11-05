const fs = require('fs');

const xml = fs.readFileSync('awrange_sitemap.xml', 'utf8');
const locMatches = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
const pricingUrls = locMatches.filter(u => 
  u.includes('price') || u.includes('pricing') || u.includes('package') || u.includes('cost') || u.includes('plan')
);

console.log('Pricing/Package URLs in Awrange:');
console.log(pricingUrls);

// Check contact form details from awrange_home.html and contact-us.html
const home = fs.readFileSync('awrange_home.html', 'utf8');
const contactPath = 'awrange_pages/contact-us.html';
const contact = fs.existsSync(contactPath) ? fs.readFileSync(contactPath, 'utf8') : '';

console.log('\n--- Checking Forms in Awrange ---');
const forms = [...(contact || home).matchAll(/<form[\s\S]*?<\/form>/gi)].map(m => m[0]);
console.log(`Total forms in contact/home: ${forms.length}`);
forms.forEach((f, i) => {
  console.log(`\nForm #${i+1}:`);
  const actionMatch = f.match(/action=["'](.*?)["']/i);
  const methodMatch = f.match(/method=["'](.*?)["']/i);
  const inputs = [...f.matchAll(/<(?:input|textarea|select)[^>]*name=["'](.*?)["'][^>]*>/gi)].map(m => m[0]);
  console.log('Action:', actionMatch ? actionMatch[1] : 'none');
  console.log('Method:', methodMatch ? methodMatch[1] : 'none');
  console.log('Inputs:', inputs);
});

// Check Awrange's Schema & Ratings on Home
console.log('\n--- Checking Ratings & Trust on Awrange Home ---');
const ratingMatches = [...home.matchAll(/(?:ratingValue|ratingCount|reviewCount)[^>]*[:=]["']?([0-9.]+)/gi)].map(m => m[0]);
console.log('Rating mentions in schema:', ratingMatches);

// Check CTAs on Awrange Home
const buttons = [...home.matchAll(/<(?:a|button)[^>]*class=["'][^"']*(?:btn|cta|button)[^"']*["'][^>]*>([\s\S]*?)<\/(?:a|button)>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim()).filter(Boolean);
console.log('Sample CTA texts on Home:', [...new Set(buttons)].slice(0, 10));

// Check city pages pattern
const cityUrls = locMatches.filter(u => u.includes('pune') || u.includes('mumbai') || u.includes('pcmc') || u.includes('baner') || u.includes('hinjewadi') || u.includes('wakad'));
console.log(`\nTotal Pune / Local Geo pages in Awrange: ${cityUrls.length}`);
console.log('Sample Geo/Locality URLs:', cityUrls.slice(0, 20));
