const fs = require('fs');

const files = [
  'inrank2.0/blog.html',
  'inrank2.0/blog/index.html',
  'blog.html',
  'blog/index.html'
];

for (const f of files) {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    
    // Count total articles
    const articleCount = (content.match(/<article class="blog-card"/g) || []).length;
    console.log(f, 'Total articles:', articleCount);

    // Update All (30) -> All (articleCount)
    content = content.replace(/All \(\d+\)/g, `All (${articleCount})`);
    
    // Count seo-ai-search
    const seoCount = (content.match(/data-category="seo-ai-search"/g) || []).length;
    content = content.replace(/SEO & AI Search \(\d+\)/g, `SEO & AI Search (${seoCount})`);

    // In new cards, let's make sure web-engineering matches web-development-website-performance or has its own filter
    // Let's check existing pills in content
    if (content.includes('data-filter="web-development-website-performance"')) {
      content = content.replace(
        'data-category="web-engineering"',
        'data-category="web-development-website-performance"'
      );
      const webCount = (content.match(/data-category="web-development-website-performance"/g) || []).length;
      content = content.replace(/Web Development & Website Performance \(\d+\)/g, `Web Development & Website Performance (${webCount})`);
    }

    fs.writeFileSync(f, content, 'utf8');
  }
}

console.log('Filter pills updated cleanly!');

