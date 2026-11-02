const fs = require('fs');
const path = require('path');

const mainPath = path.resolve(__dirname, '..', 'src', 'main.ts');
let content = fs.readFileSync(mainPath, 'utf8');

// 1. Add import at the top
if (!content.includes('initReactComponents')) {
  content = `import { initReactComponents } from "./react/mount.tsx";\n` + content;

  // 2. Add call inside DOMContentLoaded
  content = content.replace(
    'initRoiForecaster();',
    'initRoiForecaster();\n\n  // Mount Interactive React Components\n  initReactComponents();'
  );

  fs.writeFileSync(mainPath, content, 'utf8');
  console.log('Successfully added initReactComponents to src/main.ts');
} else {
  console.log('initReactComponents already present in src/main.ts');
}
