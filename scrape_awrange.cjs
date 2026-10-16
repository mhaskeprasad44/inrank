const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const client = parsed.protocol === 'https:' ? https : http;
    const req = client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      },
      timeout: 10000
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith('http')) {
          redirectUrl = new URL(redirectUrl, url).href;
        }
        return fetchUrl(redirectUrl).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data }));
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('Timeout')); });
  });
}

async function main() {
  console.log('--- Analyzing Awrange Sitemap ---');
  const xml = fs.readFileSync('awrange_sitemap.xml', 'utf8');
  
  // Extract all urls from loc
  const locMatches = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1].trim());
  console.log(`Total URLs found in sitemap: ${locMatches.length}`);

  // Create folder for awrange pages
  const outDir = path.join(__dirname, 'awrange_pages');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // Group URLs by intent
  const groups = {
    core_services: [],
    city_and_local: [],
    case_studies: [],
    blogs: [],
    other: []
  };

  locMatches.forEach(url => {
    const u = url.toLowerCase();
    if (u.includes('/blog/') || u.includes('/category/') || u.includes('/tag/') || u.includes('/author/')) {
      groups.blogs.push(url);
    } else if (u.includes('case-stud') || u.includes('our-work') || u.includes('portfolio') || u.includes('client')) {
      groups.case_studies.push(url);
    } else if (u.includes('pune') || u.includes('mumbai') || u.includes('-in-') || u.includes('near-me')) {
      groups.city_and_local.push(url);
    } else if (u.includes('service') || u.includes('seo') || u.includes('marketing') || u.includes('web-design') || u.includes('development') || u.includes('branding') || u.includes('performance') || u.includes('social-media')) {
      groups.core_services.push(url);
    } else {
      groups.other.push(url);
    }
  });

  console.log('Group counts:', {
    core_services: groups.core_services.length,
    city_and_local: groups.city_and_local.length,
    case_studies: groups.case_studies.length,
    blogs: groups.blogs.length,
    other: groups.other.length
  });

  console.log('\n--- Core Services Samples ---');
  console.log(groups.core_services.slice(0, 15));

  console.log('\n--- City & Local Samples ---');
  console.log(groups.city_and_local.slice(0, 15));

  console.log('\n--- Case Studies Samples ---');
  console.log(groups.case_studies.slice(0, 10));

  console.log('\n--- Other / Main Pages ---');
  console.log(groups.other.slice(0, 15));

  // Save parsed breakdown
  fs.writeFileSync('awrange_urls_summary.json', JSON.stringify({
    total: locMatches.length,
    groups
  }, null, 2));

  // Select key 15-20 target URLs to scrape for deep analysis
  const priorityUrls = [
    'https://awrange.com/',
    'https://awrange.com/about-us/',
    'https://awrange.com/contact-us/',
    ...groups.core_services.slice(0, 8),
    ...groups.city_and_local.slice(0, 8),
    ...groups.case_studies.slice(0, 4)
  ];

  const uniquePriority = [...new Set(priorityUrls)];
  console.log(`\nFetching ${uniquePriority.length} high-priority Awrange pages for deep analysis...`);

  const results = [];
  for (const url of uniquePriority) {
    try {
      const slug = url.replace('https://awrange.com/', '').replace(/\/$/, '').replace(/[^a-zA-Z0-9_-]/g, '_') || 'home';
      const filepath = path.join(outDir, `${slug}.html`);
      
      let html = '';
      if (slug === 'home' && fs.existsSync('awrange_home.html')) {
        html = fs.readFileSync('awrange_home.html', 'utf8');
        console.log(`Loaded cached home: ${url}`);
      } else if (fs.existsSync(filepath)) {
        html = fs.readFileSync(filepath, 'utf8');
        console.log(`Loaded cached: ${url}`);
      } else {
        process.stdout.write(`Fetching ${url}... `);
        const res = await fetchUrl(url);
        html = res.data;
        fs.writeFileSync(filepath, html);
        console.log(`Done (${res.status}, ${html.length} bytes)`);
      }

      // Quick extract meta
      const titleMatch = html.match(/<title[^>]*>(.*?)<\/title>/is);
      const title = titleMatch ? titleMatch[1].trim() : '';
      const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["'](.*?)["']/is) || html.match(/<meta[^>]*content=["'](.*?)["'][^>]*name=["']description["']/is);
      const desc = descMatch ? descMatch[1].trim() : '';
      const h1Match = html.match(/<h1[^>]*>(.*?)<\/h1>/is);
      const h1 = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : '';

      // Check form presence
      const hasForm = html.includes('<form');
      const forms = [...html.matchAll(/<form[^>]*>([\s\S]*?)<\/form>/gi)].map(f => f[0]);
      
      // Check phone numbers, emails, addresses
      const phoneMatches = [...html.matchAll(/(?:\+91|0)?[6-9]\d{9}/g)].map(m => m[0]);
      const emailMatches = [...html.matchAll(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g)].map(m => m[0]);

      // Pricing check
      const pricingKeywords = ['₹', 'INR', 'package', 'pricing', 'cost', 'retainer'];
      const pricingMentions = pricingKeywords.filter(k => html.includes(k));

      results.push({
        url,
        slug,
        title,
        desc,
        h1,
        hasForm,
        formCount: forms.length,
        formFields: forms.length ? forms[0].match(/<input[^>]+>|<select[^>]+>|<textarea[^>]+>/gi) : [],
        phoneMatches: [...new Set(phoneMatches)],
        emailMatches: [...new Set(emailMatches)],
        pricingMentions
      });
    } catch (e) {
      console.log(`Failed ${url}: ${e.message}`);
    }
  }

  fs.writeFileSync('awrange_extracted.json', JSON.stringify(results, null, 2));
  console.log(`Extracted metadata saved to awrange_extracted.json`);
}

main().catch(console.error);
