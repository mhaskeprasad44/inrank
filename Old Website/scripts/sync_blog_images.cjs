const fs = require('fs');
const blogs = require('./temp_blogs_data.cjs');

let missingInInrank2 = [];
blogs.forEach(b => {
  if (b.image) {
    const cleanPath = b.image.replace(/^\//, '');
    if (!fs.existsSync('inrank2.0/' + cleanPath)) {
      missingInInrank2.push(b.image);
    }
  }
  if (b.inContentImage && b.inContentImage.src) {
    const cleanPath = b.inContentImage.src.replace(/^\//, '');
    if (!fs.existsSync('inrank2.0/' + cleanPath)) {
      missingInInrank2.push(b.inContentImage.src);
    }
  }
});

console.log('Missing in inrank2.0/ count:', missingInInrank2.length);
if (missingInInrank2.length > 0) {
  console.log('Copying missing images from public/ or dist/ to inrank2.0/...');
  missingInInrank2.forEach(imgPath => {
    const cleanPath = imgPath.replace(/^\//, '');
    const targetPath = 'inrank2.0/' + cleanPath;
    const targetDir = path.dirname(targetPath);
    if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
    
    if (fs.existsSync('public/' + cleanPath)) {
      fs.copyFileSync('public/' + cleanPath, targetPath);
    } else if (fs.existsSync('dist/' + cleanPath)) {
      fs.copyFileSync('dist/' + cleanPath, targetPath);
    } else if (fs.existsSync(cleanPath)) {
      fs.copyFileSync(cleanPath, targetPath);
    }
  });
  console.log('Copied all missing images to inrank2.0/!');
}

