import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import compression from 'compression';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = __dirname;

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// Enable trust proxy for Cloudflare, Hostinger, and Nginx reverse proxies
app.set('trust proxy', true);

// Enforce Canonical Hostname: redirect www to non-www
app.use((req, res, next) => {
  const host = req.headers.host || '';
  if (host.startsWith('www.inranktech.com')) {
    const nonWwwHost = host.replace(/^www\./, '');
    return res.redirect(301, `https://${nonWwwHost}${req.originalUrl}`);
  }
  next();
});

// High-performance gzip/deflate compression
app.use(compression({
  level: 6,
  threshold: 1024,
  filter: (req, res) => {
    if (req.headers['x-no-compression']) return false;
    return compression.filter(req, res);
  }
}));

// Body parsers for contact form submissions
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Static asset caching options
const staticCacheOptions = {
  maxAge: '7d',
  setHeaders: (res, filePath) => {
    if (/\.(png|jpe?g|webp|gif|svg|ico|woff2?|ttf|eot)$/i.test(filePath)) {
      res.setHeader('Cache-Control', 'public, max-age=2592000, immutable');
    } else if (/\.(css|js)$/i.test(filePath)) {
      res.setHeader('Cache-Control', 'public, max-age=604800, stale-while-revalidate=86400');
    } else if (/\.(html)$/i.test(filePath)) {
      res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    }
  }
};

// Explicit route for sitemap, robots, llms manifests
app.get('/sitemap.xml', (req, res) => res.type('application/xml').sendFile(path.join(rootDir, 'sitemap.xml')));
app.get('/robots.txt', (req, res) => res.type('text/plain').sendFile(path.join(rootDir, 'robots.txt')));
app.get('/llms.txt', (req, res) => res.type('text/plain').sendFile(path.join(rootDir, 'llms.txt')));
app.get('/llms-full.txt', (req, res) => res.type('text/plain').sendFile(path.join(rootDir, 'llms-full.txt')));

// Contact Form Handler for /contact.php and /api/contact (Node fallback when PHP is bypassed)
async function handleContact(req, res) {
  const body = req.body || {};
  const name = (body.name || body.leadName || '').trim();
  const email = (body.email || body.leadEmail || '').trim();
  const phone = (body.phone || body.leadPhone || '').trim();
  const website = (body.website || body.websiteUrl || body.url || '').trim();
  const service = (body.services_needed || body.service || 'General Consultation').trim();
  const budget = (body.budget_range || body.budget || body.package || 'Not specified').trim();
  const message = (body.message || body.project_details || '').trim();
  const source = (body.source || 'Inrank 2.0 Web Form').trim();

  if (!name || (!email && !phone)) {
    return res.status(400).json({ success: false, error: 'Name and phone or email are required.' });
  }

  // Log lead to leads.json
  const leadEntry = {
    timestamp: new Date().toISOString(),
    name,
    email,
    phone,
    website,
    service,
    budget,
    message,
    source,
    ip: req.ip || req.headers['x-forwarded-for'] || 'unknown'
  };

  try {
    const leadsFile = path.join(rootDir, 'leads.json');
    let leads = [];
    if (fs.existsSync(leadsFile)) {
      try { leads = JSON.parse(fs.readFileSync(leadsFile, 'utf8')) || []; } catch (e) {}
    }
    leads.push(leadEntry);
    fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2), 'utf8');
  } catch (err) {
    console.error('Failed to write leads.json:', err.message);
  }

  // Attempt nodemailer dispatch if credentials exist
  let mailSent = false;
  if (process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: Number(process.env.SMTP_PORT) || 465,
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });

      await transporter.sendMail({
        from: `"Inrank Inquiries" <${process.env.SMTP_USER}>`,
        to: 'inranktech@gmail.com',
        replyTo: email || process.env.SMTP_USER,
        subject: `New Inrank Lead: ${name} (${service})`,
        text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nWebsite: ${website}\nService: ${service}\nBudget: ${budget}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 10px;">
            <div style="background: #009d49; color: white; padding: 15px 20px; border-radius: 8px;">
              <h2 style="margin: 0; font-size: 20px;">New Inbound Lead: Inrank Technologies</h2>
            </div>
            <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #64748b;">Customer Name:</td><td style="padding: 8px 0; font-weight: bold;">${name}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;">WhatsApp / Phone:</td><td style="padding: 8px 0; font-weight: bold; color: #009d49;">${phone}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;">Email Address:</td><td style="padding: 8px 0;">${email}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;">Website URL:</td><td style="padding: 8px 0;">${website || 'None'}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;">Capability:</td><td style="padding: 8px 0; font-weight: bold;">${service}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;">Budget:</td><td style="padding: 8px 0;">${budget}</td></tr>
            </table>
            <div style="margin-top: 20px; padding: 15px; background: #f8fafc; border-radius: 8px; border-left: 4px solid #009d49;">
              <p style="margin: 0 0 5px; font-weight: bold; font-size: 12px; color: #64748b;">PROJECT DETAILS:</p>
              <p style="margin: 0; line-height: 1.5;">${message || 'No additional message provided.'}</p>
            </div>
          </div>
        `
      });
      mailSent = true;
    } catch (mErr) {
      console.error('Nodemailer error:', mErr.message);
    }
  }

  // Handle standard HTML form redirect vs JSON AJAX response
  const acceptHeader = req.headers.accept || '';
  if (acceptHeader.includes('text/html') && !req.headers['x-requested-with']) {
    return res.redirect('/contact.html?submitted=true#inrank-contact-form');
  }

  return res.json({
    success: true,
    mailSent,
    message: 'Your inquiry was transmitted to our Baner engineering team.'
  });
}

app.post('/contact.php', handleContact);
app.post('/api/contact', handleContact);

// Dynamic clean URL resolver for services, blogs, case studies, and hub pages
app.use((req, res, next) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') return next();

  let reqPath = req.path;
  if (reqPath.endsWith('/') && reqPath.length > 1) {
    reqPath = reqPath.slice(0, -1);
  }

  // 1. Check exact file first (e.g. /css/corporate.css, /images/logo.png)
  const exactFile = path.join(rootDir, reqPath);
  if (fs.existsSync(exactFile) && fs.statSync(exactFile).isFile()) {
    return res.sendFile(exactFile, staticCacheOptions);
  }

  // 2. Check if clean URL matches .html file (e.g. /about -> /about.html)
  const htmlFile = path.join(rootDir, `${reqPath}.html`);
  if (fs.existsSync(htmlFile) && fs.statSync(htmlFile).isFile()) {
    res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    return res.sendFile(htmlFile);
  }

  // 3. Check directory index.html (e.g. /services/seo-company-pune/index.html)
  const dirIndex = path.join(rootDir, reqPath, 'index.html');
  if (fs.existsSync(dirIndex) && fs.statSync(dirIndex).isFile()) {
    res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    return res.sendFile(dirIndex);
  }

  next();
});

// Serve root static directory
app.use(express.static(rootDir, staticCacheOptions));

// Homepage route
app.get('/', (req, res) => {
  res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
  res.sendFile(path.join(rootDir, 'index.html'));
});

// Clean 404 Fallback
app.use((req, res) => {
  const notFoundPage = path.join(rootDir, '404.html');
  if (fs.existsSync(notFoundPage)) {
    return res.status(404).sendFile(notFoundPage);
  }
  return res.status(404).sendFile(path.join(rootDir, 'index.html'));
});

// Start listening
app.listen(PORT, '0.0.0.0', () => {
  console.log(`==================================================`);
  console.log(`🚀 Inrank 2.0 Production Server listening on :${PORT}`);
  console.log(`📂 Root directory: ${rootDir}`);
  console.log(`==================================================`);
});
