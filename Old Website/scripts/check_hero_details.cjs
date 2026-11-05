const fs = require('fs');

const corp = fs.readFileSync('scripts/vinove_assets/css/pages/corporate.css', 'utf8');

// Look for .home-image-hero or .image-hero
const imgHeroMatches = [...corp.matchAll(/\.(home-image-hero|image-hero)[^{]*\{[^}]*\}/g)];
console.log('image-hero matches:');
imgHeroMatches.forEach(m => console.log(m[0]));

// Look for .hero-content
const heroContent = [...corp.matchAll(/\.hero-content[^{]*\{[^}]*\}/g)];
console.log('hero-content matches:');
heroContent.forEach(m => console.log(m[0]));

// Look for .hero-copy
const heroCopy = [...corp.matchAll(/\.hero-copy[^{]*\{[^}]*\}/g)];
console.log('hero-copy matches:');
heroCopy.forEach(m => console.log(m[0]));

