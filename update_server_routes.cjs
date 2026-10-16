const fs = require('fs');

const file = 'server.ts';
let content = fs.readFileSync(file, 'utf8');

const anchor = 'app.get(["/homepage-3", "/homepage-3.html"], (req, res) => {';
const insertIndex = content.indexOf('// Serve frontend with Vite middleware in dev or as static files in production');

if (insertIndex === -1) {
  console.error("Insert point not found!");
  process.exit(1);
}

const routesToAdd = `// Explicit direct route for Pricing
app.get(["/pricing", "/pricing.html"], (req, res) => {
  const distPage = path.join(process.cwd(), "dist", "pricing.html");
  const localPage = path.join(process.cwd(), "pricing.html");
  if (fs.existsSync(distPage)) {
    return res.sendFile(distPage);
  }
  if (fs.existsSync(localPage)) {
    return res.sendFile(localPage);
  }
  const distIndex = path.join(process.cwd(), "dist", "index.html");
  if (fs.existsSync(distIndex)) {
    return res.sendFile(distIndex);
  }
  return res.sendFile(path.join(process.cwd(), "index.html"));
});

// Explicit direct route for Contact
app.get(["/contact", "/contact.html"], (req, res) => {
  const distPage = path.join(process.cwd(), "dist", "contact.html");
  const localPage = path.join(process.cwd(), "contact.html");
  if (fs.existsSync(distPage)) {
    return res.sendFile(distPage);
  }
  if (fs.existsSync(localPage)) {
    return res.sendFile(localPage);
  }
  const distIndex = path.join(process.cwd(), "dist", "index.html");
  if (fs.existsSync(distIndex)) {
    return res.sendFile(distIndex);
  }
  return res.sendFile(path.join(process.cwd(), "index.html"));
});

`;

content = content.slice(0, insertIndex) + routesToAdd + content.slice(insertIndex);
fs.writeFileSync(file, content, 'utf8');
console.log('Successfully updated server.ts!');
