const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const htmlUrl = 'http://localhost:3000/google-business-profile-top3.html';
const pdfDest = path.join(__dirname, 'Inrank_Technologies_Google_Business_Profile_Optimization_Blueprint_Top_3.pdf');
const brainDest = 'C:\\Users\\Prasad\\.gemini\\antigravity-ide\\brain\\f4bda5da-34aa-48a7-b6c0-fa0755ba23e6\\Inrank_Technologies_Google_Business_Profile_Optimization_Blueprint_Top_3.pdf';
const publicDest = path.join(__dirname, 'public', 'Inrank_Technologies_Google_Business_Profile_Optimization_Blueprint_Top_3.pdf');
const distDest = path.join(__dirname, 'dist', 'Inrank_Technologies_Google_Business_Profile_Optimization_Blueprint_Top_3.pdf');

console.log('Generating GBP PDF via Edge headless...');

const args = [
  '--headless=new',
  '--disable-gpu',
  '--no-pdf-header-footer',
  `--print-to-pdf=${pdfDest}`,
  htmlUrl
];

const proc = spawn(edgePath, args);

proc.on('close', (code) => {
  if (code === 0 && fs.existsSync(pdfDest)) {
    const size = fs.statSync(pdfDest).size;
    console.log(`✓ PDF successfully generated at: ${pdfDest} (${size} bytes)`);
    try {
      fs.copyFileSync(pdfDest, brainDest);
      fs.copyFileSync(pdfDest, publicDest);
      if (fs.existsSync(path.join(__dirname, 'dist'))) {
        fs.copyFileSync(pdfDest, distDest);
      }
      console.log('✓ Copied to artifact brain, public, and dist successfully');
    } catch (e) {
      console.log('Copy note:', e.message);
    }
  } else {
    console.error(`Edge process exited with code ${code}`);
  }
});
