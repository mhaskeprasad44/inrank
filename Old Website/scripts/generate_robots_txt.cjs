const fs = require('fs');

const robotsContent = `# https://www.robotstxt.org/robotstxt.html
# Inrank Technologies — Search Engine & AI Agent Crawling Directives
# Production 2.0 Web Architecture & AI Growth Platform

User-agent: Googlebot
Allow: /

User-agent: Googlebot-Image
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Bingbot
Allow: /

User-agent: msnbot
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Applebot
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: cohere-ai
Allow: /

User-agent: CCBot
Allow: /

User-agent: Omgilibot
Allow: /

User-agent: Diffbot
Allow: /

User-agent: Bytespider
Allow: /

User-agent: *
Allow: /

# Canonical XML Sitemap (All 89 verified production URLs)
Sitemap: https://inranktech.com/sitemap.xml

# LLM & Answer Engine Citation Manifests (AEO / GEO)
# https://inranktech.com/llms.txt
# https://inranktech.com/llms-full.txt
`;

const destinations = ['inrank2.0/robots.txt', 'robots.txt'];
if (fs.existsSync('public')) destinations.push('public/robots.txt');
if (fs.existsSync('dist')) destinations.push('dist/robots.txt');

destinations.forEach(dest => {
  fs.writeFileSync(dest, robotsContent, 'utf8');
  console.log(`Saved ${dest}`);
});

