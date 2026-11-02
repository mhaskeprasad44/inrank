const fs = require('fs');
const path = require('path');

const configPath = path.resolve(__dirname, '..', 'vite.config.ts');
let content = fs.readFileSync(configPath, 'utf8');

if (!content.includes('@vitejs/plugin-react')) {
  content = content.replace(
    /import tailwindcss from ['"]@tailwindcss\/vite['"];/,
    `import tailwindcss from '@tailwindcss/vite';\nimport react from '@vitejs/plugin-react';`
  );
  content = content.replace(
    /plugins:\s*\[tailwindcss\(\)\]/,
    `plugins: [tailwindcss(), react()]`
  );
  fs.writeFileSync(configPath, content, 'utf8');
  console.log('Successfully updated vite.config.ts with @vitejs/plugin-react');
} else {
  console.log('vite.config.ts already includes @vitejs/plugin-react');
}
