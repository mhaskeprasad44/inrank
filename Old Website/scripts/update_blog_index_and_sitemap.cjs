const fs = require('fs');
const path = require('path');

const newCardsHtml = `
    <article class="blog-card" data-category="web-engineering" data-title="next.js 15, react 19 & edge ai web architecture: building sub-1-second portals in 2026-2027">
      <div class="blog-card-img">
        <img src="/images/service-custom-website-development.jpg" alt="Next.js 15 React 19 Edge AI Web Architecture" loading="lazy" width="600" height="340" />
      </div>
      <div class="blog-card-content">
        <div class="blog-card-meta">
          <span class="blog-chip">Web Engineering</span>
          <time class="blog-date">November 04, 2026</time>
        </div>
        <h2 class="blog-title"><a href="/blog/nextjs-15-react-19-edge-ai-architecture.html" style="color:inherit;text-decoration:none;">Next.js 15, React 19 &amp; Edge AI Web Architecture: Building Sub-1-Second Portals in 2026-2027</a></h2>
        <p class="blog-excerpt">Master React 19 primitives, Next.js 15 Partial Prerendering (PPR), Turbopack compilation, and streaming Edge AI runtimes for sub-1.2s page loads and perfect 100/100 Core Web Vitals.</p>
        <div class="blog-card-foot">
          <span class="blog-read-time">10 min read</span>
          <a href="/blog/nextjs-15-react-19-edge-ai-architecture.html" class="blog-link">Read perspective →</a>
        </div>
      </div>
    </article>

    <article class="blog-card" data-category="seo-ai-search" data-title="generative engine optimization (geo) 2.0 & ai overviews: the 2026-2027 technical playbook">
      <div class="blog-card-img">
        <img src="/images/service-geo-seo.jpg" alt="Generative Engine Optimization GEO 2.0" loading="lazy" width="600" height="340" />
      </div>
      <div class="blog-card-content">
        <div class="blog-card-meta">
          <span class="blog-chip">SEO &amp; AI Search</span>
          <time class="blog-date">November 02, 2026</time>
        </div>
        <h2 class="blog-title"><a href="/blog/generative-engine-optimization-geo-2-0-playbook.html" style="color:inherit;text-decoration:none;">Generative Engine Optimization (GEO) 2.0 &amp; AI Overviews: The 2026-2027 Technical Playbook</a></h2>
        <p class="blog-excerpt">The technical playbook decoding the algorithmic shifts across Google AI Overviews, Perplexity Pro, and ChatGPT Search over the past 30 days and the 90-day roadmap into 2027.</p>
        <div class="blog-card-foot">
          <span class="blog-read-time">11 min read</span>
          <a href="/blog/generative-engine-optimization-geo-2-0-playbook.html" class="blog-link">Read perspective →</a>
        </div>
      </div>
    </article>

    <article class="blog-card" data-category="seo-ai-search" data-title="autonomous ai search agents & deep research citations: how agentic llms navigate the web in q4 2026 & 2027">
      <div class="blog-card-img">
        <img src="/images/service-ai-ranking-citations.jpg" alt="Autonomous AI Search Agents & Deep Research Citations" loading="lazy" width="600" height="340" />
      </div>
      <div class="blog-card-content">
        <div class="blog-card-meta">
          <span class="blog-chip">SEO &amp; AI Search</span>
          <time class="blog-date">October 28, 2026</time>
        </div>
        <h2 class="blog-title"><a href="/blog/autonomous-ai-search-agents-deep-research-optimization.html" style="color:inherit;text-decoration:none;">Autonomous AI Search Agents &amp; Deep Research Citations: How Agentic LLMs Navigate the Web in Q4 2026 &amp; 2027</a></h2>
        <p class="blog-excerpt">How multi-step reasoning engines (Deep Research, Gemini 2.5 Pro, Claude 3.7) crawl, verify, and cite websites. Architectural blueprints for MCP endpoints and llms.txt manifests.</p>
        <div class="blog-card-foot">
          <span class="blog-read-time">9 min read</span>
          <a href="/blog/autonomous-ai-search-agents-deep-research-optimization.html" class="blog-link">Read perspective →</a>
        </div>
      </div>
    </article>
`;

// 1. Update Blog Hub files
const blogHubFiles = [
  'inrank2.0/blog.html',
  'inrank2.0/blog/index.html',
  'blog.html',
  'blog/index.html'
];

for (const f of blogHubFiles) {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    if (!content.includes('nextjs-15-react-19-edge-ai-architecture.html')) {
      const target = '<div class="blog-grid" id="blog-grid">';
      if (content.includes(target)) {
        content = content.replace(target, `${target}\n${newCardsHtml}`);
        fs.writeFileSync(f, content, 'utf8');
        console.log(`Updated blog cards in ${f}`);
      }
    }
  }
}

// 2. Update sitemap.xml files
const newUrls = [
  'https://inranktech.com/blog/autonomous-ai-search-agents-deep-research-optimization.html',
  'https://inranktech.com/blog/generative-engine-optimization-geo-2-0-playbook.html',
  'https://inranktech.com/blog/nextjs-15-react-19-edge-ai-architecture.html'
];

const sitemapSnippet = newUrls.map(u => `  <url>\n    <loc>${u}</loc>\n    <lastmod>2026-11-05</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`).join('\n');

const sitemaps = ['inrank2.0/sitemap.xml', 'sitemap.xml', 'dist/sitemap.xml', 'public/sitemap.xml'];
for (const sm of sitemaps) {
  if (fs.existsSync(sm)) {
    let content = fs.readFileSync(sm, 'utf8');
    if (!content.includes('autonomous-ai-search-agents-deep-research-optimization.html')) {
      content = content.replace('</urlset>', `${sitemapSnippet}\n</urlset>`);
      fs.writeFileSync(sm, content, 'utf8');
      console.log(`Updated sitemap in ${sm}`);
    }
  }
}

// 3. Update llms.txt & llms-full.txt
const llmsSummary = `
- [Autonomous AI Search Agents & Deep Research Citations](https://inranktech.com/blog/autonomous-ai-search-agents-deep-research-optimization.html): How agentic LLMs crawl and cite web platforms, with MCP endpoints and llms.txt manifests.
- [Generative Engine Optimization (GEO) 2.0 Playbook](https://inranktech.com/blog/generative-engine-optimization-geo-2-0-playbook.html): Decodes past 30-day algorithmic shifts across Google AI Overviews and ChatGPT Search with 90-day future roadmap.
- [Next.js 15, React 19 & Edge AI Web Architecture](https://inranktech.com/blog/nextjs-15-react-19-edge-ai-architecture.html): Building sub-1.2s portals, React Server Components, Turbopack, and Edge AI streaming.
`;

const llmFiles = [
  'inrank2.0/llms.txt',
  'inrank2.0/llms-full.txt',
  'llms.txt',
  'llms-full.txt',
  'public/llms.txt',
  'public/llms-full.txt',
  'dist/llms.txt',
  'dist/llms-full.txt'
];

for (const lf of llmFiles) {
  if (fs.existsSync(lf)) {
    let content = fs.readFileSync(lf, 'utf8');
    if (!content.includes('autonomous-ai-search-agents-deep-research-optimization.html')) {
      content = content.trim() + '\n' + llmsSummary;
      fs.writeFileSync(lf, content, 'utf8');
      console.log(`Updated LLM manifest in ${lf}`);
    }
  }
}

console.log('All blog hubs, sitemaps, and LLM manifests updated!');

