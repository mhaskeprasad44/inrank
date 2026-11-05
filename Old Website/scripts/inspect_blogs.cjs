const fs = require('fs');
const path = require('path');

const srcBlogs = fs.readFileSync('src/blogsData.ts', 'utf8');

// Match "slug": "..." or 'slug': '...'
const slugMatches = [...srcBlogs.matchAll(/["']?slug["']?\s*:\s*["']([^"']+)["']/g)].map(m => m[1]);
console.log('Total slugs in src/blogsData.ts:', slugMatches.length);

// Check what data_blogs_*.cjs files export
const files = fs.readdirSync('.').filter(f => f.startsWith('data_blogs_') && f.endsWith('.cjs'));
console.log('\nInspecting data_blogs_ files:');
const additionalSlugs = new Set();
for (const file of files) {
  try {
    const mod = require(path.resolve(process.cwd(), file));
    const keys = Object.keys(mod);
    let items = [];
    if (Array.isArray(mod)) items = mod;
    else {
      for (const k of keys) {
        if (Array.isArray(mod[k])) items.push(...mod[k]);
      }
    }
    console.log(`${file}: found ${items.length} items`);
    items.forEach(it => {
      if (it && it.slug) additionalSlugs.add(it.slug);
    });
  } catch (err) {
    console.log(`${file}: error ${err.message}`);
  }
}

console.log('Total unique slugs in data_blogs_*.cjs:', additionalSlugs.size);
const allCombined = new Set([...slugMatches, ...additionalSlugs]);
console.log('Total combined unique slugs across entire project:', allCombined.size);
