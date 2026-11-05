const fs = require('fs');
const path = require('path');

const tsconfigPath = path.resolve(__dirname, '..', 'tsconfig.json');
const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf8'));

tsconfig.compilerOptions.jsx = 'react-jsx';

fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2), 'utf8');
console.log('Successfully updated tsconfig.json with jsx: react-jsx');

