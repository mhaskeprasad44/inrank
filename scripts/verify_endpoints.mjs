import http from 'http';

const slugs = [
  "ai-ranking-citations",
  "ai-seo-services",
  "brand-naming-agency",
  "brochure-design-services",
  "content-marketing-services",
  "conversion-rate-optimization-services",
  "corporate-logo-design",
  "custom-website-development",
  "ecommerce-website-development-company",
  "geo-seo-agency",
  "google-ads-agency",
  "google-my-business-services",
  "influencer-marketing-agency",
  "landing-page-design-services",
  "letterhead-stationery-design",
  "link-building-services",
  "linkedin-marketing-agency",
  "luxury-business-card-design",
  "meta-ads-agency",
  "mobile-app-development",
  "ppc-services",
  "seo-company-pune",
  "shopify-store-development",
  "social-media-marketing-services",
  "ui-ux-design-services",
  "website-maintenance-services",
  "wordpress-development-services"
];

function checkUrl(urlPath) {
  return new Promise((resolve) => {
    http.get(`http://localhost:3000${urlPath}`, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        resolve({
          url: urlPath,
          statusCode: res.statusCode,
          length: data.length,
          hasCss: data.includes('.css') || data.includes('inrank-services.css'),
          hasHeader: data.includes('<header') || data.includes('HEADER SECTION'),
          hasSparkles: data.includes('sparkles')
        });
      });
    }).on('error', (err) => {
      resolve({ url: urlPath, error: err.message });
    });
  });
}

async function run() {
  console.log(`Verifying all 27 individual service endpoints...`);
  let errors = 0;
  for (const slug of slugs) {
    const res = await checkUrl(`/services/${slug}/`);
    if (res.statusCode !== 200 || !res.hasCss || !res.hasHeader || res.hasSparkles) {
      console.error(`FAIL: ${slug}`, res);
      errors++;
    }
  }

  // Also check root services endpoints
  for (const root of ['/services', '/services/', '/services.html']) {
    const res = await checkUrl(root);
    if (res.statusCode !== 200 || !res.hasCss || !res.hasHeader || res.hasSparkles) {
      console.error(`FAIL: ${root}`, res);
      errors++;
    }
  }

  if (errors === 0) {
    console.log(`ALL 27 SERVICES + /services ENDPOINTS RETURNED HTTP 200 WITH CSS AND HEADER, ZERO SPARKLES!`);
  } else {
    console.log(`Encountered ${errors} errors.`);
  }
}

run();
