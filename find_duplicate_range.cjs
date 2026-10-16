const fs = require('fs');

const home = fs.readFileSync('../cytos/src/pages/HomePage.jsx', 'utf8');
console.log(home.substring(144000, 146000));
console.log(home.substring(153500, 154500));
