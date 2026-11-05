const fs = require('fs');
const blogs = require('./temp_blogs_data.cjs');

console.log('Total blogs:', blogs.length);
const missingImages = [];
blogs.forEach(b => {
  if (b.image) {
    const cleanPath = b.image.replace(/^\//, '');
    const inPublic = fs.existsSync('public/' + cleanPath);
    const inDist = fs.existsSync('dist/' + cleanPath);
    const inRoot = fs.existsSync(cleanPath);
    const inInrank2 = fs.existsSync('inrank2.0/' + cleanPath);
    if (!inPublic && !inDist && !inRoot && !inInrank2) {
      missingImages.push({ blog: b.slug, img: b.image });
    }
  }
  if (b.inContentImage && b.inContentImage.src) {
    const cleanPath = b.inContentImage.src.replace(/^\//, '');
    const inPublic = fs.existsSync('public/' + cleanPath);
    const inDist = fs.existsSync('dist/' + cleanPath);
    const inRoot = fs.existsSync(cleanPath);
    const inInrank2 = fs.existsSync('inrank2.0/' + cleanPath);
    if (!inPublic && !inDist && !inRoot && !inInrank2) {
      missingImages.push({ blog: b.slug, inContentImg: b.inContentImage.src });
    }
  }
});

console.log('Missing images count:', missingImages.length);
if (missingImages.length > 0) {
  console.log('Sample missing:', missingImages.slice(0, 10));
}

