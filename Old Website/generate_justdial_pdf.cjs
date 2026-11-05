const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const htmlUrl = 'http://localhost:3000/justdial-profile.html';
const pdfDest = path.join(__dirname, 'Inrank_Technologies_Justdial_Business_Profile.pdf');
const brainDest = 'C:\\Users\\Prasad\\.gemini\\antigravity-ide\\brain\\f4bda5da-34aa-48a7-b6c0-fa0755ba23e6\\Inrank_Technologies_Justdial_Business_Profile.pdf';

console.log('Generating PDF via Edge headless...');

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
      console.log(`✓ Copied to artifact brain at: ${brainDest}`);
    } catch (e) {
      console.log('Brain copy note:', e.message);
    }
  } else {
    console.error(`Edge process exited with code ${code}`);
  }
});
