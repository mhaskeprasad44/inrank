const fs = require('fs');

// Helper to remove any em-dashes and Oxford commas
function cleanCopy(str) {
  return str
    .replace(/—/g, ' - ')
    .replace(/--/g, ' - ')
    .replace(/,\s+and\b/g, ' and')
    .replace(/,\s+and\b/g, ' and');
}

function wordCount(str) {
  return str.trim().split(/\s+/).length;
}

// Let's create modular data builders
console.log('Script initialized.');
