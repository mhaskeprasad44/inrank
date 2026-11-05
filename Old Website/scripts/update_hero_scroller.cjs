const fs = require('fs');
const path = require('path');

// 1. Define the 17 Tech Stack items for index.html (Tailwind / shadcn theme classes)
function getTechStackItemIndex(num, name, iconType, iconSrc, borderHover) {
  let iconHtml = '';
  if (iconType === 'svg-google-ads') {
    iconHtml = `<svg class="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.784 16.924L8.71 8.391a2.846 2.846 0 013.889-1.042 2.846 2.846 0 011.042 3.889l-4.927 8.533a2.846 2.846 0 01-3.889 1.042 2.846 2.846 0 01-1.041-3.889z" fill="#FBBC04"/>
      <path d="M20.216 16.924a2.846 2.846 0 01-1.042 3.889 2.846 2.846 0 01-3.889-1.042L10.358 11.24a2.846 2.846 0 011.042-3.889 2.846 2.846 0 013.889 1.042l4.927 8.532z" fill="#4285F4"/>
      <circle cx="5.32" cy="18.68" r="2.846" fill="#34A853"/>
    </svg>`;
  } else {
    iconHtml = `<img src="${iconSrc}" alt="${name}" class="h-5.5 sm:h-6 w-auto max-w-[28px] max-h-6 object-contain flex-shrink-0" height="24" loading="eager" decoding="async" />`;
  }

  return `<!-- ${num}. ${name} -->
  <div class="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-border/80 bg-card hover:border-${borderHover} text-xs font-semibold text-foreground whitespace-nowrap transition-all shadow-xs group">
    ${iconHtml}
    <span>${name}</span>
  </div>`;
}

// 2. Define the 17 Tech Stack items for homepage-2.html (Stone theme classes)
function getTechStackItemHp2(num, name, iconType, iconSrc, borderHover) {
  let iconHtml = '';
  if (iconType === 'svg-google-ads') {
    iconHtml = `<svg class="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.784 16.924L8.71 8.391a2.846 2.846 0 013.889-1.042 2.846 2.846 0 011.042 3.889l-4.927 8.533a2.846 2.846 0 01-3.889 1.042 2.846 2.846 0 01-1.041-3.889z" fill="#FBBC04"/>
      <path d="M20.216 16.924a2.846 2.846 0 01-1.042 3.889 2.846 2.846 0 01-3.889-1.042L10.358 11.24a2.846 2.846 0 011.042-3.889 2.846 2.846 0 013.889 1.042l4.927 8.532z" fill="#4285F4"/>
      <circle cx="5.32" cy="18.68" r="2.846" fill="#34A853"/>
    </svg>`;
  } else {
    iconHtml = `<img src="${iconSrc}" alt="${name}" class="h-5.5 sm:h-6 w-auto max-w-[28px] max-h-6 object-contain flex-shrink-0" height="24" loading="eager" decoding="async" />`;
  }

  return `<!-- ${num}. ${name} -->
  <div class="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-stone-200/90 bg-white hover:border-${borderHover} text-xs font-semibold text-stone-800 whitespace-nowrap transition-all shadow-xs group">
    ${iconHtml}
    <span>${name}</span>
  </div>`;
}

const techItemsData = [
  { num: 1, name: 'Google Ads', type: 'svg-google-ads', src: '', hover: 'amber-500/50' },
  { num: 2, name: 'Moz Pro', type: 'img', src: '/tech-stack/moz.png', hover: 'sky-500/50' },
  { num: 3, name: 'GA4 Analytics', type: 'img', src: '/tech-stack/google-analytics.webp', hover: 'amber-500/50' },
  { num: 4, name: 'Tag Manager', type: 'img', src: '/tech-stack/gtm.webp', hover: 'blue-500/50' },
  { num: 5, name: 'Search Console', type: 'img', src: '/tech-stack/google-search-console.webp', hover: 'blue-500/50' },
  { num: 6, name: 'Meta Ads', type: 'img', src: '/tech-stack/meta.png', hover: 'blue-600/50' },
  { num: 7, name: 'Semrush', type: 'img', src: '/tech-stack/semrush.png', hover: 'orange-500/50' },
  { num: 8, name: 'Ahrefs', type: 'img', src: '/tech-stack/ahrefs.webp', hover: 'blue-500/50' },
  { num: 9, name: 'WordPress', type: 'img', src: '/tech-stack/wordpress.webp', hover: 'sky-500/50' },
  { num: 10, name: 'Shopify', type: 'img', src: '/tech-stack/shopify.webp', hover: 'emerald-500/50' },
  { num: 11, name: 'ChatGPT', type: 'img', src: '/tech-stack/chatgpt.png', hover: 'emerald-500/50' },
  { num: 12, name: 'Perplexity AI', type: 'img', src: '/tech-stack/perplexity.png', hover: 'teal-500/50' },
  { num: 13, name: 'HubSpot', type: 'img', src: '/tech-stack/hubspot.png', hover: 'orange-500/50' },
  { num: 14, name: 'Screaming Frog', type: 'img', src: '/tech-stack/screaming-frog.png', hover: 'green-600/50' },
  { num: 15, name: 'Cloudflare', type: 'img', src: '/tech-stack/cloudflare.png', hover: 'amber-500/50' },
  { num: 16, name: 'Tailwind CSS', type: 'img', src: '/tech-stack/tailwind.png', hover: 'cyan-500/50' },
  { num: 17, name: 'Rank Math', type: 'img', src: '/tech-stack/rankmath.png', hover: 'indigo-500/50' }
];

function buildTrackHtml(builderFn) {
  const set1 = techItemsData.map(d => builderFn(d.num, d.name, d.type, d.src, d.hover)).join('\n');
  const set2 = techItemsData.map(d => builderFn(d.num + ' (Loop)', d.name, d.type, d.src, d.hover)).join('\n');
  return `${set1}\n\n<!-- SEAMLESS REPETITION FOR INFINITE SMOOTH LOOP -->\n${set2}`;
}

// 3. Update index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');

// Regex replace the marquee track inner items in index.html
const indexTrackRegex = /(<!-- HERO TECH STACK MARQUEE STRIP -->[\s\S]*?<div class="flex w-max items-center gap-5 sm:gap-7 marquee-track"[^>]*>)([\s\S]*?)(<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<!-- Big Results Grid -->)/;

if (indexTrackRegex.test(indexHtml)) {
  const trackContent = buildTrackHtml(getTechStackItemIndex);
  indexHtml = indexHtml.replace(indexTrackRegex, `$1\n${trackContent}\n                    $3`);
  console.log('Successfully updated Hero Tech Stack in index.html!');
} else {
  console.error('Failed to match Hero Tech Stack in index.html');
}

// Also update client logos in index.html to remove harsh grayscale
indexHtml = indexHtml.replace(/filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100/g, 'opacity-90 group-hover:opacity-100');

fs.writeFileSync('index.html', indexHtml, 'utf8');

// 4. Update homepage-2.html
let hp2Html = fs.readFileSync('homepage-2.html', 'utf8');

const hp2TrackRegex = /(<!-- HERO TECH STACK MARQUEE STRIP -->[\s\S]*?<div class="flex w-max items-center gap-5 sm:gap-7 marquee-track"[^>]*>)([\s\S]*?)(<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>)/;

if (hp2TrackRegex.test(hp2Html)) {
  const trackContent = buildTrackHtml(getTechStackItemHp2);
  hp2Html = hp2Html.replace(hp2TrackRegex, `$1\n${trackContent}\n                $3`);
  console.log('Successfully updated Hero Tech Stack in homepage-2.html!');
} else {
  console.error('Failed to match Hero Tech Stack in homepage-2.html');
}

// Also update client logos in homepage-2.html
hp2Html = hp2Html.replace(/filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100/g, 'opacity-90 group-hover:opacity-100');

fs.writeFileSync('homepage-2.html', hp2Html, 'utf8');
console.log('Finished updating Hero Tech Stack and Client Logo scrollers!');

