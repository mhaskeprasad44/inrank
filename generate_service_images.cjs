const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outputDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const services = [
  { id: 'website-development', title: 'Website Development Services', category: 'Web Designing', icon: '💻', color: '#10b981', gradient: ['#064e3b', '#022c22'] },
  { id: 'custom-website-design', title: 'Custom Website Design', category: 'Web Designing', icon: '🎨', color: '#8b5cf6', gradient: ['#4c1d95', '#2e1065'] },
  { id: 'wordpress-development', title: 'WordPress Development', category: 'Web Designing', icon: '🌐', color: '#3b82f6', gradient: ['#1e3a8a', '#172554'] },
  { id: 'e-commerce-development', title: 'E-Commerce Development', category: 'Web Designing', icon: '🛒', color: '#f59e0b', gradient: ['#78350f', '#451a03'] },
  { id: 'shopify-development', title: 'Shopify Store Development', category: 'Web Designing', icon: '🛍️', color: '#10b981', gradient: ['#064e3b', '#022c22'] },
  { id: 'website-maintenance', title: 'Website Maintenance & Care', category: 'Web Designing', icon: '🛠️', color: '#06b6d4', gradient: ['#164e63', '#083344'] },
  { id: 'mobile-app-development', title: 'Mobile App Development', category: 'Web Designing', icon: '📱', color: '#ec4899', gradient: ['#831843', '#500724'] },
  
  { id: 'seo', title: 'Search Engine Optimization (SEO)', category: 'Digital Marketing', icon: '🔍', color: '#10b981', gradient: ['#064e3b', '#022c22'] },
  { id: 'social-media-marketing', title: 'Social Media Marketing', category: 'Digital Marketing', icon: '📣', color: '#f43f5e', gradient: ['#881337', '#4c0519'] },
  { id: 'influencer-marketing', title: 'Influencer Marketing', category: 'Digital Marketing', icon: '⭐', color: '#a855f7', gradient: ['#581c87', '#3b0764'] },
  { id: 'linkedin-management', title: 'LinkedIn B2B Management', category: 'Digital Marketing', icon: '💼', color: '#0284c7', gradient: ['#0c4a6e', '#082f49'] },
  { id: 'pay-per-click-ppc', title: 'Pay Per Click (PPC) Ads', category: 'Digital Marketing', icon: '🎯', color: '#eab308', gradient: ['#713f12', '#422006'] },
  { id: 'whatsapp-marketing', title: 'WhatsApp Business Marketing', category: 'Digital Marketing', icon: '💬', color: '#22c55e', gradient: ['#14532d', '#052e16'] },
  { id: 'political-digital-marketing', title: 'Political Digital Campaigns', category: 'Digital Marketing', icon: '🏛️', color: '#f97316', gradient: ['#7c2d12', '#431407'] },

  { id: 'brand-name', title: 'Brand Naming & Strategy', category: 'Brand Identity', icon: '🏷️', color: '#8b5cf6', gradient: ['#4c1d95', '#2e1065'] },
  { id: 'logo-design', title: 'Logo Design & Brand Identity', category: 'Brand Identity', icon: '✒️', color: '#ec4899', gradient: ['#831843', '#500724'] },
  { id: 'business-card-design', title: 'Business Card Design', category: 'Brand Identity', icon: '📇', color: '#6366f1', gradient: ['#312e81', '#1e1b4b'] },
  { id: 'letterhead-design', title: 'Letterhead & Stationery', category: 'Brand Identity', icon: '📄', color: '#0ea5e9', gradient: ['#0c4a6e', '#082f49'] },
  { id: 'brochure-designing', title: 'Brochure & Print Design', category: 'Brand Identity', icon: '📖', color: '#14b8a6', gradient: ['#134e4a', '#042f2e'] },

  { id: 'ai-seo-agency', title: 'AI SEO Agency Services', category: 'AI Solutions', icon: '🤖', color: '#10b981', gradient: ['#064e3b', '#022c22'] },
  { id: 'geo-seo-agency', title: 'GEO SEO Agency', category: 'AI Solutions', icon: '🌍', color: '#8b5cf6', gradient: ['#4c1d95', '#2e1065'] },
  { id: 'ai-ranking-citations', title: 'AI Ranking & Citations', category: 'AI Solutions', icon: '✨', color: '#06b6d4', gradient: ['#164e63', '#083344'] },

  { id: 'content-marketing', title: 'Content Marketing Strategy', category: 'Other Services', icon: '📝', color: '#f59e0b', gradient: ['#78350f', '#451a03'] },
  { id: 'email-marketing', title: 'Email Marketing Automation', category: 'Other Services', icon: '✉️', color: '#3b82f6', gradient: ['#1e3a8a', '#172554'] },
  { id: 'sms-marketing', title: 'SMS Marketing Campaigns', category: 'Other Services', icon: '📲', color: '#22c55e', gradient: ['#14532d', '#052e16'] },

  { id: 'landing-pages', title: 'High-Converting Landing Pages', category: 'Web Designing', icon: '⚡', color: '#10b981', gradient: ['#064e3b', '#022c22'] },
  { id: 'google-ads', title: 'Google Ads Management', category: 'Digital Marketing', icon: '📊', color: '#eab308', gradient: ['#713f12', '#422006'] },
  { id: 'meta-ads', title: 'Meta Facebook & Instagram Ads', category: 'Digital Marketing', icon: '♾️', color: '#0284c7', gradient: ['#0c4a6e', '#082f49'] },
  { id: 'conversion-optimization', title: 'Conversion Rate Optimization', category: 'Digital Marketing', icon: '📈', color: '#10b981', gradient: ['#064e3b', '#022c22'] },
  { id: 'gmb-optimization', title: 'Google My Business Local SEO', category: 'Digital Marketing', icon: '📍', color: '#ef4444', gradient: ['#7f1d1d', '#450a0a'] }
];

async function generateImages() {
  console.log(`Generating ${services.length} high-resolution service images...`);

  for (const item of services) {
    const svg = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${item.gradient[0]}" />
          <stop offset="100%" stop-color="${item.gradient[1]}" />
        </linearGradient>
        <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.12" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0.03" />
        </linearGradient>
        <radialGradient id="glow" cx="80%" cy="20%" r="60%">
          <stop offset="0%" stop-color="${item.color}" stop-opacity="0.35" />
          <stop offset="100%" stop-color="${item.color}" stop-opacity="0" />
        </radialGradient>
      </defs>

      <!-- Background -->
      <rect width="1200" height="630" fill="url(#bgGrad)" />
      <rect width="1200" height="630" fill="url(#glow)" />

      <!-- Grid lines overlay -->
      <path d="M 0 100 L 1200 100 M 0 200 L 1200 200 M 0 300 L 1200 300 M 0 400 L 1200 400 M 0 500 L 1200 500" stroke="#ffffff" stroke-opacity="0.04" stroke-width="1"/>
      <path d="M 200 0 L 200 630 M 400 0 L 400 630 M 600 0 L 600 630 M 800 0 L 800 630 M 1000 0 L 1000 630" stroke="#ffffff" stroke-opacity="0.04" stroke-width="1"/>

      <!-- Main Glassmorphic Panel -->
      <rect x="80" y="80" width="1040" height="470" rx="24" fill="url(#cardGrad)" stroke="#ffffff" stroke-opacity="0.18" stroke-width="1.5" />

      <!-- Category Pill Badge -->
      <rect x="120" y="130" width="220" height="38" rx="19" fill="${item.color}" fill-opacity="0.2" stroke="${item.color}" stroke-opacity="0.6" stroke-width="1.5" />
      <text x="230" y="154" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" fill="#ffffff" letter-spacing="1.5" text-anchor="middle">${esc(item.category.toUpperCase())}</text>

      <!-- Location Badge -->
      <rect x="355" y="130" width="180" height="38" rx="19" fill="#ffffff" fill-opacity="0.08" stroke="#ffffff" stroke-opacity="0.2" stroke-width="1" />
      <text x="445" y="154" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="600" fill="#e2e8f0" text-anchor="middle">📍 PUNE, INDIA</text>

      <!-- Main Headline Title -->
      <text x="120" y="240" font-family="system-ui, -apple-system, sans-serif" font-size="42" font-weight="800" fill="#ffffff" letter-spacing="-0.5">${esc(item.title)}</text>
      
      <!-- Subtitle -->
      <text x="120" y="285" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="500" fill="#cbd5e1">Inrank Technologies Pune • Growth &amp; Search Performance</text>

      <!-- Metrics Badge Box -->
      <g transform="translate(120, 340)">
        <!-- Box 1 -->
        <rect x="0" y="0" width="220" height="150" rx="16" fill="#000000" fill-opacity="0.3" stroke="#ffffff" stroke-opacity="0.1" />
        <text x="24" y="42" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600" fill="#94a3b8">SEARCH RANK</text>
        <text x="24" y="85" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="800" fill="${item.color}">#1 PAGE</text>
        <text x="24" y="118" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="500" fill="#64748b">Google &amp; AI Overviews</text>

        <!-- Box 2 -->
        <rect x="240" y="0" width="220" height="150" rx="16" fill="#000000" fill-opacity="0.3" stroke="#ffffff" stroke-opacity="0.1" />
        <text x="264" y="42" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600" fill="#94a3b8">PAGE SPEED</text>
        <text x="264" y="85" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="800" fill="#10b981">99 / 100</text>
        <text x="264" y="118" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="500" fill="#64748b">Core Web Vitals</text>

        <!-- Box 3 -->
        <rect x="480" y="0" width="220" height="150" rx="16" fill="#000000" fill-opacity="0.3" stroke="#ffffff" stroke-opacity="0.1" />
        <text x="504" y="42" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600" fill="#94a3b8">GEO &amp; AEO</text>
        <text x="504" y="85" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="800" fill="#38bdf8">CITATIONS</text>
        <text x="504" y="118" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="500" fill="#64748b">ChatGPT / Claude</text>
      </g>

      <!-- Right Side Graphic Icon Circle -->
      <g transform="translate(930, 290)">
        <circle cx="0" cy="0" r="110" fill="${item.color}" fill-opacity="0.15" stroke="${item.color}" stroke-opacity="0.5" stroke-width="2" />
        <circle cx="0" cy="0" r="85" fill="${item.color}" fill-opacity="0.25" />
        <text x="0" y="22" font-family="system-ui, -apple-system, sans-serif" font-size="54" text-anchor="middle">${esc(item.icon)}</text>
      </g>

      <!-- Logo Branding in Bottom Right -->
      <text x="1040" y="520" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="800" fill="#ffffff" text-anchor="end" letter-spacing="-0.5">INRANK TECHNOLOGIES</text>
      <text x="1040" y="538" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="600" fill="#94a3b8" text-anchor="end">inrank.in</text>
    </svg>
    `;

    const filePath = path.join(outputDir, `service-${item.id}.jpg`);
    await sharp(Buffer.from(svg))
      .jpeg({ quality: 90 })
      .toFile(filePath);

    console.log(`✓ Saved: /images/service-${item.id}.jpg`);
  }

  console.log("All 30 service images generated successfully!");
}

generateImages().catch(err => {
  console.error("Error generating service images:", err);
  process.exit(1);
});
