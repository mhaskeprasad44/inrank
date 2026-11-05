// Puppeteer or chrome script to scroll down and take screenshot of sections
const { execFile } = require('child_process');
const fs = require('fs');

// We can create a temporary HTML file that has a script to scroll down, or evaluate JS
// Let's create a script in inrank2.0 that checks all sections
console.log('Testing sections below fold...');

