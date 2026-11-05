const fs = require('fs');

if (fs.existsSync('src/blogsData.ts')) {
  const content = fs.readFileSync('src/blogsData.ts', 'utf8');
  console.log('src/blogsData.ts size:', (content.length / 1024).toFixed(1) + ' KB');
  const ids = content.match(/id:\s*['"]([^'"]+)['"]/g) || [];
  console.log('Total blogs found in src/blogsData.ts:', ids.length);
  ids.slice(0, 10).forEach(id => console.log('  ' + id));
} else {
  console.log('src/blogsData.ts does not exist');
}

