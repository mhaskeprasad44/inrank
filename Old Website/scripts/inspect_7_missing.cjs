const fs = require('fs');

const missing = [
  'conversion-rate-optimization-services',
  'corporate-logo-design',
  'ecommerce-website-development-company',
  'google-ads-agency',
  'meta-ads-agency',
  'shopify-store-development',
  'wordpress-development-services'
];

missing.forEach(slug => {
  const p = `inrank2.0/services/${slug}.html`;
  if (fs.existsSync(p)) {
    const html = fs.readFileSync(p, 'utf8');
    const title = (html.match(/<title>([^<]+)<\/title>/i) || [])[1] || '';
    const desc = (html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i) || [])[1] || '';
    const h1 = (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1]?.replace(/<[^>]+>/g, '').trim() || '';
    console.log(`\n=== ${slug} ===`);
    console.log('Title:', title);
    console.log('Desc:', desc);
    console.log('H1:', h1);
  } else {
    console.log('Not found:', p);
  }
});

