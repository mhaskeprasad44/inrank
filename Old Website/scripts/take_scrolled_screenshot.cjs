const { execFile } = require('child_process');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

// We can scroll by evaluating script before screenshot or taking full page screenshot!
const args = [
  '--headless',
  '--disable-gpu',
  '--no-sandbox',
  '--screenshot=C:\\Users\\PrasadMhaske\\Downloads\\Anti Websites\\Web\\Inrank\\scripts\\screenshot_scrolled.png',
  '--window-size=1440,2400',
  'http://localhost:8080/'
];

execFile(chromePath, args, (err, stdout, stderr) => {
  console.log('Scrolled screenshot taken!');
});

