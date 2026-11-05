const fs = require('fs');

console.log('inrank2.0/tech-stack/wordpress.webp exists:', fs.existsSync('inrank2.0/tech-stack/wordpress.webp'));
console.log('inrank2.0/tech-stack/WordPress_blue_logo.svg.webp exists:', fs.existsSync('inrank2.0/tech-stack/WordPress_blue_logo.svg.webp'));
console.log('inrank2.0/tech-stack/wordpress.svg content:\n', fs.readFileSync('inrank2.0/tech-stack/wordpress.svg', 'utf8'));

