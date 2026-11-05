const fs = require('fs');
const path = require('path');
const https = require('https');
const sharp = require('sharp');

const targetDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Curated list of high-definition, copyright-free Unsplash images (licensed for free commercial use)
const imageManifest = [
  // --- LEADERSHIP & TEAM ---
  {
    name: 'lead-growth-engineer.jpg',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80', // sharp professional portrait
    width: 800,
    height: 800
  },
  {
    name: 'team-warroom.jpg',
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80', // modern engineering team collaboration
    width: 1200,
    height: 800
  },
  {
    name: 'pune-tech-hub.jpg',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80', // modern tech skyline / glass building
    width: 1200,
    height: 800
  },
  {
    name: 'office-strategy.jpg',
    url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80', // strategy design wireframe
    width: 1200,
    height: 800
  },

  // --- CLIENT TESTIMONIALS ---
  {
    name: 'client-rhea-kulkarni.jpg',
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80', // professional female founder
    width: 400,
    height: 400
  },
  {
    name: 'client-aditya-shah.jpg',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80', // male marketing director
    width: 400,
    height: 400
  },
  {
    name: 'client-neha-patil.jpg',
    url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80', // female doctor / healthcare clinic director
    width: 400,
    height: 400
  },

  // --- PROOF & CASE STUDIES ---
  {
    name: 'proof-search-rankings.jpg',
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80', // analytics charts and traffic graphs
    width: 1200,
    height: 750
  },
  {
    name: 'proof-ecommerce-roas.jpg',
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80', // financial & sales growth dashboard
    width: 1200,
    height: 750
  },
  {
    name: 'proof-lead-generation.jpg',
    url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80', // business meetings & lead conversion
    width: 1200,
    height: 750
  },

  // --- 10 BLOG POSTS ---
  {
    name: 'blog-seo-in-2026.jpg',
    url: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80', // modern search code & data analytics
    width: 1200,
    height: 630
  },
  {
    name: 'blog-entity-seo.jpg',
    url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80', // server nodes, entity knowledge graphs
    width: 1200,
    height: 630
  },
  {
    name: 'blog-website-performance.jpg',
    url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80', // high speed clean code on screen
    width: 1200,
    height: 630
  },
  {
    name: 'blog-landing-pages.jpg',
    url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80', // UI design mockup, CRO testing
    width: 1200,
    height: 630
  },
  {
    name: 'blog-google-ads-shopify.jpg',
    url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80', // mobile shopping checkout and metrics
    width: 1200,
    height: 630
  },
  {
    name: 'blog-programmatic-seo.jpg',
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80', // big data analytics and automated map indexing
    width: 1200,
    height: 630
  },
  {
    name: 'blog-shopify-speed-optimization.jpg',
    url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80', // speed optimization workstation
    width: 1200,
    height: 630
  },
  {
    name: 'blog-gmc-optimization.jpg',
    url: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80', // e-commerce retail store products
    width: 1200,
    height: 630
  },
  {
    name: 'blog-wordpress-core-web-vitals.jpg',
    url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80', // web dev code on laptop
    width: 1200,
    height: 630
  },
  {
    name: 'blog-omnichannel-ad-strategy.jpg',
    url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80', // social media marketing & omnichannel ads
    width: 1200,
    height: 630
  },

  // --- CORE SERVICES IMAGES ---
  {
    name: 'service-seo.jpg',
    url: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=1200&q=80', // SEO ranking search bar, analytics
    width: 1200,
    height: 630
  },
  {
    name: 'service-website-development.jpg',
    url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80', // developer laptop, clean web application
    width: 1200,
    height: 630
  },
  {
    name: 'service-custom-website-design.jpg',
    url: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80', // UI/UX design wireframing in Figma
    width: 1200,
    height: 630
  },
  {
    name: 'service-wordpress-development.jpg',
    url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80', // modern website design & CMS
    width: 1200,
    height: 630
  },
  {
    name: 'service-e-commerce-development.jpg',
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80', // online store checkout & sales growth
    width: 1200,
    height: 630
  },
  {
    name: 'service-shopify-development.jpg',
    url: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80', // store checkout payment terminal & commerce
    width: 1200,
    height: 630
  },
  {
    name: 'service-website-maintenance.jpg',
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80', // technical maintenance, security audit
    width: 1200,
    height: 630
  },
  {
    name: 'service-mobile-app-development.jpg',
    url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80', // smartphone mobile application UI
    width: 1200,
    height: 630
  },
  {
    name: 'service-social-media-marketing.jpg',
    url: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1200&q=80', // social media reels, feed management
    width: 1200,
    height: 630
  },
  {
    name: 'service-influencer-marketing.jpg',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80', // creator with camera / influencer
    width: 1200,
    height: 630
  },
  {
    name: 'service-linkedin-management.jpg',
    url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80', // B2B corporate conference, professional networking
    width: 1200,
    height: 630
  },
  {
    name: 'service-pay-per-click-ppc.jpg',
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80', // PPC target ads, conversion graph
    width: 1200,
    height: 630
  },
  {
    name: 'service-whatsapp-marketing.jpg',
    url: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=1200&q=80', // mobile chat, customer messaging
    width: 1200,
    height: 630
  },
  {
    name: 'service-political-digital-marketing.jpg',
    url: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=1200&q=80', // rally, audience engagement, public speech
    width: 1200,
    height: 630
  },
  {
    name: 'service-brand-name.jpg',
    url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80', // notebook brainstorming, creative branding
    width: 1200,
    height: 630
  },
  {
    name: 'service-logo-design.jpg',
    url: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80', // graphic designer sketch tablet, vector branding
    width: 1200,
    height: 630
  },
  {
    name: 'service-business-card-design.jpg',
    url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80', // clean corporate stationery mockups
    width: 1200,
    height: 630
  },
  {
    name: 'service-letterhead-design.jpg',
    url: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80', // pen, stationery papers, branding desk
    width: 1200,
    height: 630
  },
  {
    name: 'service-brochure-designing.jpg',
    url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80', // printed booklet, brochure layouts
    width: 1200,
    height: 630
  },
  {
    name: 'service-ai-seo-agency.jpg',
    url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80', // artificial intelligence neural network graph
    width: 1200,
    height: 630
  },
  {
    name: 'service-geo-seo-agency.jpg',
    url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80', // global earth data network, generative engine
    width: 1200,
    height: 630
  },
  {
    name: 'service-ai-ranking-citations.jpg',
    url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80', // verified AI server nodes & citation links
    width: 1200,
    height: 630
  },
  {
    name: 'service-content-marketing.jpg',
    url: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80', // content writing, editorial strategy
    width: 1200,
    height: 630
  },
  {
    name: 'service-email-marketing.jpg',
    url: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=1200&q=80', // email campaign newsletter inbox
    width: 1200,
    height: 630
  },
  {
    name: 'service-sms-marketing.jpg',
    url: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=1200&q=80', // smartphone messaging alerts
    width: 1200,
    height: 630
  },
  {
    name: 'service-landing-pages.jpg',
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80', // high converting landing page analytics
    width: 1200,
    height: 630
  },
  {
    name: 'service-google-ads.jpg',
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80', // Google ads search campaign analytics
    width: 1200,
    height: 630
  },
  {
    name: 'service-meta-ads.jpg',
    url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80', // Meta Ads manager & social campaign
    width: 1200,
    height: 630
  },
  {
    name: 'service-conversion-optimization.jpg',
    url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80', // CRO testing, user growth funnel
    width: 1200,
    height: 630
  },
  {
    name: 'service-gmb-optimization.jpg',
    url: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80', // Google Maps local location pin & local search
    width: 1200,
    height: 630
  }
];

function downloadFile(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      // Follow redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status code ${res.statusCode}`));
      }
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

async function processAll() {
  console.log(`Starting download and optimization of ${imageManifest.length} images...`);
  let successCount = 0;

  for (const item of imageManifest) {
    const destPath = path.join(targetDir, item.name);
    try {
      console.log(`Downloading: ${item.name}...`);
      const buffer = await downloadFile(item.url);
      
      // Process with sharp for optimal web performance
      await sharp(buffer)
        .resize(item.width, item.height, { fit: 'cover', position: 'center' })
        .jpeg({ quality: 85, progressive: true })
        .toFile(destPath);

      console.log(`✓ Saved and optimized: ${item.name} (${fs.statSync(destPath).size} bytes)`);
      successCount++;
    } catch (err) {
      console.error(`✗ Error processing ${item.name}:`, err.message);
    }
  }

  console.log(`\nFinished! Successfully processed ${successCount}/${imageManifest.length} images.`);
}

processAll();
