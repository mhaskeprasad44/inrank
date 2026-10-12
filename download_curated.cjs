const https = require('https');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const targetDir = path.join(__dirname, 'public', 'images');

// Carefully matched Unsplash IDs to exact subject matter
const curatedImages = [
  // SEO: Search engine rankings, graphs, analytics dashboard
  { name: 'service-seo.jpg', id: '1551288049-bebda4e38f71', w: 1200, h: 630 },
  { name: 'proof-search-rankings.jpg', id: '1460925895917-afdab827c52f', w: 1200, h: 750 },
  
  // Web Dev: Clean code and modern responsive websites
  { name: 'service-website-development.jpg', id: '1498050108023-c5249f4df085', w: 1200, h: 630 },
  { name: 'service-custom-website-design.jpg', id: '1581291518857-4e27b48ff24e', w: 1200, h: 630 },
  { name: 'service-landing-pages.jpg', id: '1507238691740-187a5b1d37b8', w: 1200, h: 630 },
  { name: 'service-wordpress-development.jpg', id: '1461749280684-dccba630e2f6', w: 1200, h: 630 },
  { name: 'service-shopify-development.jpg', id: '1556740738-b6a63e27c4df', w: 1200, h: 630 },
  { name: 'service-e-commerce-development.jpg', id: '1556742049-0a67e557224e', w: 1200, h: 630 },
  { name: 'service-mobile-app-development.jpg', id: '1512941937669-90a1b58e7e9c', w: 1200, h: 630 },
  { name: 'service-website-maintenance.jpg', id: '1581091226825-a6a2a5aee158', w: 1200, h: 630 },
  
  // Paid Ads: Google Ads & Meta Ads & PPC
  { name: 'service-google-ads.jpg', id: '1551288049-bebda4e38f71', w: 1200, h: 630 },
  { name: 'service-meta-ads.jpg', id: '1611162617474-5b21e879e113', w: 1200, h: 630 },
  { name: 'service-pay-per-click-ppc.jpg', id: '1460925895917-afdab827c52f', w: 1200, h: 630 },
  { name: 'service-conversion-optimization.jpg', id: '1551836022-d5d88e9218df', w: 1200, h: 630 },
  
  // Social & Influencer
  { name: 'service-social-media-marketing.jpg', id: '1611162616305-c69b3fa7fbe0', w: 1200, h: 630 },
  { name: 'service-influencer-marketing.jpg', id: '1534528741775-53994a69daeb', w: 1200, h: 630 },
  { name: 'service-linkedin-management.jpg', id: '1556761175-5973dc0f32e7', w: 1200, h: 630 },
  { name: 'service-whatsapp-marketing.jpg', id: '1577563908411-5077b6dc7624', w: 1200, h: 630 },
  
  // Local SEO & GMB
  { name: 'service-gmb-optimization.jpg', id: '1524661135-423995f22d0b', w: 1200, h: 630 },
  
  // AI Solutions
  { name: 'service-ai-seo-agency.jpg', id: '1677442136019-21780ecad995', w: 1200, h: 630 },
  { name: 'service-geo-seo-agency.jpg', id: '1451187580459-43490279c0fa', w: 1200, h: 630 },
  { name: 'service-ai-ranking-citations.jpg', id: '1558494949-ef010cbdcc31', w: 1200, h: 630 },
  
  // Brand Identity
  { name: 'service-brand-name.jpg', id: '1499750310107-5fef28a66643', w: 1200, h: 630 },
  { name: 'service-logo-design.jpg', id: '1626785774573-4b799315345d', w: 1200, h: 630 },
  { name: 'service-business-card-design.jpg', id: '1589829545856-d10d557cf95f', w: 1200, h: 630 },
  { name: 'service-letterhead-design.jpg', id: '1455390582262-044cdead277a', w: 1200, h: 630 },
  { name: 'service-brochure-designing.jpg', id: '1544716278-ca5e3f4abd8c', w: 1200, h: 630 },
  
  // Other marketing
  { name: 'service-content-marketing.jpg', id: '1455390582262-044cdead277a', w: 1200, h: 630 },
  { name: 'service-email-marketing.jpg', id: '1596526131083-e8c633c948d2', w: 1200, h: 630 },
  { name: 'service-sms-marketing.jpg', id: '1512428559087-560fa5ceab42', w: 1200, h: 630 },
  { name: 'service-political-digital-marketing.jpg', id: '1540910419892-4a36d2c3266c', w: 1200, h: 630 },

  // Team, Office & Founder
  { name: 'team-warroom.jpg', id: '1522071820081-009f0129c71c', w: 1200, h: 800 },
  { name: 'pune-tech-hub.jpg', id: '1486406146926-c627a92ad1ab', w: 1200, h: 800 },
  { name: 'office-strategy.jpg', id: '1531403009284-440f080d1e12', w: 1200, h: 800 },
  { name: 'proof-ecommerce-roas.jpg', id: '1551288049-bebda4e38f71', w: 1200, h: 750 },
  { name: 'proof-lead-generation.jpg', id: '1551836022-d5d88e9218df', w: 1200, h: 750 }
];

function downloadFile(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode}`));
      }
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

async function run() {
  for (const img of curatedImages) {
    const url = `https://images.unsplash.com/photo-${img.id}?auto=format&fit=crop&w=${img.w}&q=80`;
    const dest = path.join(targetDir, img.name);
    try {
      const buf = await downloadFile(url);
      await sharp(buf)
        .resize(img.w, img.h, { fit: 'cover', position: 'center' })
        .jpeg({ quality: 85, progressive: true })
        .toFile(dest);
      console.log(`✓ Updated ${img.name}`);
    } catch (e) {
      console.error(`✗ ${img.name}: ${e.message}`);
    }
  }
}

run();
