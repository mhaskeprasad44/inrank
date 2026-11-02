const fs = require('fs');
const path = require('path');

const serverPath = path.resolve(__dirname, '..', 'server.ts');
let content = fs.readFileSync(serverPath, 'utf8');

content = content.replace(
  'import nodemailer from "nodemailer";',
  'import nodemailer, { type Transporter } from "nodemailer";'
);
content = content.replace(
  'let mailTransporter: nodemailer.Transporter | null = null;',
  'let mailTransporter: Transporter | null = null;'
);

fs.writeFileSync(serverPath, content, 'utf8');
console.log('Fixed nodemailer typing in server.ts');

