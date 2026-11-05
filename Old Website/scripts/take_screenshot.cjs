const { execFile } = require('child_process');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const args = [
  '--headless',
  '--disable-gpu',
  '--no-sandbox',
  '--screenshot=C:\\Users\\PrasadMhaske\\Downloads\\Anti Websites\\Web\\Inrank\\scripts\\screenshot_home.png',
  '--window-size=1440,900',
  'http://localhost:8080/'
];

execFile(chromePath, args, (err, stdout, stderr) => {
  console.log('err:', err);
  console.log('stdout:', stdout);
  console.log('stderr:', stderr);
});

