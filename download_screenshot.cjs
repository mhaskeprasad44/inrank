const https = require('https');
const fs = require('fs');
const path = require('path');

const screenshotUrl = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop';
const targetPath = path.join(__dirname, 'inrank-theme', 'screenshot.png');

console.log('Downloading theme screenshot from Unsplash...');

const file = fs.createWriteStream(targetPath);
https.get(screenshotUrl, (response) => {
  if (response.statusCode !== 200) {
    console.error(`Failed to download: Status Code ${response.statusCode}`);
    process.exit(1);
  }
  response.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('WordPress theme screenshot successfully saved to ' + targetPath);
  });
}).on('error', (err) => {
  fs.unlink(targetPath, () => {});
  console.error('Error downloading screenshot:', err.message);
  process.exit(1);
});
