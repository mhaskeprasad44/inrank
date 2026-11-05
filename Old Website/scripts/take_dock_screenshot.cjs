// Create a temporary script that scrolls the page on load and takes screenshot
const fs = require('fs');

const testHtml = `
<script>
window.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 300);
});
</script>
`;

// Let's use Chrome remote debugging or a script injection to test scrolled screenshot
const { execFile } = require('child_process');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const args = [
  '--headless',
  '--disable-gpu',
  '--no-sandbox',
  '--screenshot=C:\\Users\\PrasadMhaske\\Downloads\\Anti Websites\\Web\\Inrank\\scripts\\screenshot_scrolled_dock.png',
  '--window-size=1440,900',
  'http://localhost:8080/'
];

// Let's first inject a scroll trigger into index.html temporarily for the screenshot
const indexFile = 'c:/Users/PrasadMhaske/Downloads/Anti Websites/Web/Inrank/inrank2.0/index.html';
let originalIndex = fs.readFileSync(indexFile, 'utf8');

fs.writeFileSync(indexFile, originalIndex.replace('</body>', '<script>window.scrollTo(0, 300);</script></body>'));

execFile(chromePath, args, (err, stdout, stderr) => {
  // restore
  fs.writeFileSync(indexFile, originalIndex);
  console.log('Scrolled dock screenshot taken!');
});

