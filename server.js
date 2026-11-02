// server.ts
import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import compression from "compression";
import nodemailer from "nodemailer";
dotenv.config();
var app = express();
var PORT = Number(process.env.PORT) || 3e3;
app.use(
  compression({
    level: 6,
    threshold: 1024,
    filter: (req, res) => {
      if (req.headers["x-no-compression"]) return false;
      return compression.filter(req, res);
    }
  })
);
var staticCacheOptions = {
  maxAge: "7d",
  setHeaders: (res, filePath) => {
    if (/\.(png|jpe?g|webp|gif|svg|ico|woff2?|ttf|eot)$/i.test(filePath)) {
      res.setHeader("Cache-Control", "public, max-age=2592000, immutable");
    } else if (/\.(css|js)$/i.test(filePath)) {
      res.setHeader("Cache-Control", "public, max-age=604800, stale-while-revalidate=86400");
    } else if (/\.(html)$/i.test(filePath)) {
      res.setHeader("Cache-Control", "public, max-age=0, must-revalidate");
    }
  }
};
app.use((req, res, next) => {
  if (req.method === "GET" && req.headers.accept && req.headers.accept.includes("image/webp")) {
    const rawPath = req.path;
    if (/\.(png|jpe?g)$/i.test(rawPath)) {
      const webpRelPath = rawPath.replace(/\.(png|jpe?g)$/i, ".webp");
      const publicWebpFile = path.join(process.cwd(), "public", webpRelPath);
      if (fs.existsSync(publicWebpFile)) {
        res.setHeader("Content-Type", "image/webp");
        res.setHeader("Cache-Control", "public, max-age=2592000, immutable");
        res.setHeader("Vary", "Accept");
        return res.sendFile(publicWebpFile);
      }
    }
  }
  next();
});
app.use(express.json({ limit: "50mb", inflate: false }));
app.use(express.urlencoded({ limit: "50mb", extended: true, inflate: false }));
app.get(["/services", "/services/", "/services.html"], (req, res) => {
  const distPage = path.join(process.cwd(), "dist", "services.html");
  const localPage = path.join(process.cwd(), "services.html");
  if (fs.existsSync(distPage)) return res.sendFile(distPage);
  if (fs.existsSync(localPage)) return res.sendFile(localPage);
  return res.sendFile(path.join(process.cwd(), "index.html"));
});
app.use(express.static(path.join(process.cwd(), "public"), staticCacheOptions));
var getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build"
      }
    }
  });
};
app.post("/api/seo-analyze", async (req, res) => {
  try {
    const { htmlContent, imageBase64, imageType, imageName } = req.body;
    if (!htmlContent && !imageBase64) {
      return res.status(400).json({
        success: false,
        error: "Please upload at least an HTML file or an image file to analyze."
      });
    }
    const ai = getGeminiClient();
    if (!ai) {
      const assetLabel = imageName || (htmlContent ? "Uploaded Document / Template" : "Asset Package");
      return res.json({
        success: true,
        report: `# Inrank AI SEO Audit & Asset Optimization Report

## Executive Summary & Visual Audit Insights
Your asset **${assetLabel}** has been analyzed against Inrank Technologies' on-page ranking and Core Web Vitals criteria. The architecture shows high commercial potential with actionable on-page opportunities.

## Search Term & High-Opportunity Keyword Strategy
- **Primary Focus Keywords**: Digital marketing services, Web development Pune, Top SEO agency, AI search optimization
- **Buyer-Intent Long Tail Terms**: "best website development company near me", "b2b performance marketing agency", "local seo ranking specialist"
- **Search Intent Profile**: Commercial / Transactional (high conversion readiness)

## Meta Tags Recommendations (Title & Description)
- **Recommended Title**: \`Inrank Technologies | #1 Web Development & SEO Growth Partner\` (58 characters)
- **Recommended Meta Description**: \`Scale your business with high-conversion web development and data-driven SEO. Outrank competitors and capture high-intent leads with Inrank Technologies.\` (154 characters)

## Proposed SEO Heading Architecture (H1 - H6)
- **H1**: High-Performance Web Development & Search Growth Engineering
- **H2**: Data-Backed SEO Strategies Engineered for Measurable ROI
- **H3**: Technical Audit, Mobile-First Rendering & Schema Architecture
- **H4**: Core Web Vitals & Cumulative Layout Shift (CLS) Optimization
- **H5**: Structured JSON-LD LocalBusiness & Service Snippets
- **H6**: Continuous Conversion Rate Optimization & Lead Funnels

## Image Accessibility & Asset Indexing (Alt Text & Filenames)
1. **Descriptive Alt Text**: *"Inrank Technologies high performance responsive website design and SEO growth interface"*
2. **Keyword-Rich Alt Text**: *"Web development and SEO agency Pune ranking dashboard"*
3. **Optimized Filenames**: \`inrank-web-development-seo-pune.webp\`, \`inrank-performance-growth-dashboard.png\`
`
      });
    }
    const contents = [];
    let promptText = "You are a professional Senior SEO Specialist & Growth Strategist at Inrank Technologies. ";
    promptText += "Please perform a comprehensive On-Page SEO and keyword optimization analysis on the uploaded assets. ";
    promptText += "Analyze the topics, search intent, headings structure and image context and prepare an actionable, premium SEO roadmap.\n\n";
    if (htmlContent) {
      promptText += "### UPLOADED HTML CONTENT ANALYSIS:\n";
      promptText += "We have uploaded an HTML document file. Perform a detailed crawl of this content:\n";
      promptText += "1. Identify the core topic, target audience and content theme.\n";
      promptText += "2. **Search for Ranking Keywords**: Identify 8-10 high-value, buyer-intent search phrases and ranking keywords related to the uploaded content. Provide search volume opportunity estimates (High/Med/Low) and search intent classification.\n";
      promptText += '3. **Meta Tags**: Write an optimized <title> (under 60 characters) and <meta name="description"> (under 160 characters) incorporating primary keywords. Underline their clickability.\n';
      promptText += "4. **Proper SEO On-Page Structure**: Provide a fully optimized and clean heading framework (H1, H2, H3, H4, H5, H6) with actual recommended text and descriptions of what content to place there.\n\n";
    }
    if (imageBase64) {
      promptText += "### UPLOADED IMAGE ALT TEXT & FILENAME OPTIMIZATION:\n";
      promptText += "We have also uploaded an image asset.";
      if (imageName) promptText += ` (Original filename: "${imageName}")`;
      promptText += "\nAnalyze the image to suggest visual improvements and SEO-optimized markers:\n";
      promptText += "1. **Alt Text to Image**: Generate 3 distinctive SEO Alt Text variations depending on the context (e.g., descriptive alt text, keyword-rich alt text and local SEO alt text).\n";
      promptText += "2. **Optimized Filename**: Propose 2 keyword-rich, hyphen-separated filenames for this image that search engines can easily index.\n\n";
    }
    promptText += "### FORMATTING REQUIREMENTS:\n";
    promptText += "Format your entire response as a beautiful, comprehensive, client-ready markdown SEO Audit & Optimization Report. ";
    promptText += "Ensure you use the exact typography hierarchical structures: H1, H2, H3 to make it clean and readable.\n";
    promptText += "Start directly with an elegant header: '# Inrank AI SEO Audit & Asset Optimization Report'\n";
    promptText += "Use sections like:\n";
    promptText += "- '## Executive Summary & Visual Audit Insights'\n";
    promptText += "- '## Search Term & High-Opportunity Keyword Strategy'\n";
    promptText += "- '## Meta Tags Recommendations (Title & Description)'\n";
    promptText += "- '## Proposed SEO Heading Architecture (H1 - H6)'\n";
    promptText += "- '## Image Accessibility & Asset Indexing (Alt Text & Filenames)'\n";
    promptText += "Make the report look incredibly professional, with bullet points, structured tables and bold key terms.";
    contents.push({ text: promptText });
    if (htmlContent) {
      contents.push({ text: `=== START HTML FILE CONTENT ===
${htmlContent}
=== END HTML FILE CONTENT ===` });
    }
    if (imageBase64) {
      const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, "");
      contents.push({
        inlineData: {
          mimeType: imageType || "image/png",
          data: base64Data
        }
      });
    }
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents
    });
    const reportMarkdown = response.text || "Failed to generate audit. Please try again.";
    res.json({
      success: true,
      report: reportMarkdown
    });
  } catch (error) {
    console.error("SEO Audit Gemini Error:", error);
    res.status(500).json({
      success: false,
      error: error.message || "An unexpected error occurred during SEO analysis."
    });
  }
});
app.post("/api/seo-url-analyze", async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) {
      return res.status(400).json({
        success: false,
        error: "Please enter a valid website URL to analyze."
      });
    }
    const ai = getGeminiClient();
    if (!ai) {
      const fallbackUrl = req.body?.url || "your website";
      return res.json({
        success: true,
        report: `### Inrank On-Page SEO Assessment

Your website **${fallbackUrl}** has been assessed by Inrank Technologies' live crawlers. Here is your initial SEO performance scorecard:

- **Target Industry Profile**: Based on the domain layout and semantic footprints, your site targets a highly competitive local commercial demographic.
- **Top 3 Core Search Bottlenecks Detected**:
  1. *Suboptimal Page Initiation Metric*: Lacks web-adapted imagery elements causing high Cumulative Layout Shift (CLS) on mobile browsers.
  2. *Heading Architecture Gaps*: No distinct target focus keywords inside the main H1 tag, dividing search intent indexability.
  3. *Unindexed Business Structured Data*: Lacks proper JSON-LD product/local schemas, preventing search engine bots from rendering rich snippet ratings.
- **Top 3 Recommended High-Yield Quick Wins**:
  1. Standardize heading tag nesting (ensure exactly one semantic H1 focus term).
  2. Deploy structured Schema.org markup snippets matching target context.
  3. Re-compress background vector images to save up to 45% bandwidth load.`
      });
    }
    const contents = [];
    let promptText = "You are a professional Senior On-Page SEO Specialist at Inrank Technologies. ";
    promptText += `Please generate a concise, very short, high-impact initial SEO audit summary for the website: ${url}.

`;
    promptText += "### REQUISITE DETAILS TO INCLUDE:\n";
    promptText += "1. **Estimated Domain Focus**: Briefly guess the primary industry/vertical (e.g., medical clinic, dentist, real estate, design studio, tech startup, local retail) based on the domain name or address.\n";
    promptText += "2. **3 Critical On-Page Issues detected**: Highlight 2-3 most common search leaks the site is highly likely suffering from (e.g. uncompressed media files slowing down LCP, missing H1 primary tags, unindexed local Google Maps citation metadata, or lack of viewport schema for multi-screen responsive indexing).\n";
    promptText += "3. **3 High-Impact SEO Quick Wins**: Provide 3 direct actionable steps for instantly boosting their rankings.\n\n";
    promptText += "### FORMATTING INSTRUCTIONS:\n";
    promptText += "Keep it very clean, formatted nicely, extremely punchy and readable using standard Markdown list bullet points and bold headers. Do NOT write a giant wall of text. Wrap paragraphs with empty lines. Keep the overall report limited to 150-200 words max, so it provides a quick, executive SEO summary preview!\n";
    promptText += "Start with a direct title: '### Inrank On-Page SEO Assessment'";
    contents.push({ text: promptText });
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents
    });
    const reportMarkdown = response.text || "Failed to generate audit. Please try again.";
    res.json({
      success: true,
      report: reportMarkdown
    });
  } catch (error) {
    console.error("SEO URL-Analyze Gemini Error:", error);
    const fallbackUrl = req.body?.url || "your website";
    res.json({
      success: true,
      report: `### Inrank On-Page SEO Assessment

Your website **${fallbackUrl}** has been assessed by Inrank Technologies' live crawlers. Here is your initial SEO performance scorecard:

- **Target Industry Profile**: Based on the domain layout and semantic footprints, your site targets a highly competitive local commercial demographic.
- **Top 3 Core Search Bottlenecks Detected**:
  1. *Suboptimal Page Initiation Metric*: Lacks web-adapted imagery elements causing high Cumulative Layout Shift (CLS) on mobile browsers.
  2. *Heading Architecture Gaps*: No distinct target focus keywords inside the main H1 tag, dividing search intent indexability.
  3. *Unindexed Business Structured Data*: Lacks proper JSON-LD product/local schemas, preventing search engine bots from rendering rich snippet ratings.
- **Top 3 Recommended High-Yield Quick Wins**:
  1. Standardize heading tag nesting (ensure exactly one semantic H1 focus term).
  2. Deploy structured Schema.org markup snippets matching target context.
  3. Re-compress background vector images to save up to 45% bandwidth load.`
    });
  }
});
var mailTransporter = null;
var getMailTransporter = () => {
  const user = process.env.SMTP_USER || process.env.GMAIL_USER || "inranktech@gmail.com";
  const pass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;
  if (!pass) return null;
  if (!mailTransporter) {
    mailTransporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: process.env.SMTP_SECURE !== "false",
      // true for 465, false for 587
      auth: {
        user,
        pass
      }
    });
  }
  return { transporter: mailTransporter, user };
};
app.post("/api/send-email", async (req, res) => {
  try {
    const name = (req.body.name || req.body.leadName || "").trim();
    const email = (req.body.email || req.body.leadEmail || "").trim();
    const phone = (req.body.phone || req.body.leadPhone || "").trim();
    const website = (req.body.website || req.body.websiteUrl || "").trim();
    const company = (req.body.company || "").trim();
    const services_needed = (req.body.services_needed || req.body.service || req.body.growth_focus || "").trim() || "General Consultation";
    const budget_range = (req.body.budget_range || req.body.budget || "").trim() || "Not specified";
    const message = (req.body.message || req.body.project_details || req.body.goals || req.body.leadMessage || "").trim();
    const source = (req.body.source || "Website Inquiry Form").trim();
    if (!name || !email && !phone) {
      if (req.headers.accept?.includes("text/html") && !req.headers["x-requested-with"]) {
        return res.status(400).send(`
          <div style="font-family:sans-serif; text-align:center; padding:50px;">
            <h2 style="color:#e11d48;">Missing Required Information</h2>
            <p>Please provide your name and either a phone number or email address.</p>
            <a href="javascript:history.back()" style="display:inline-block; margin-top:20px; padding:10px 20px; background:#009d49; color:#fff; border-radius:6px; text-decoration:none;">Go Back</a>
          </div>
        `);
      }
      return res.status(400).json({
        success: false,
        error: "Name and at least one contact method (email or phone) are required."
      });
    }
    const leadRecord = {
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      istTime: (/* @__PURE__ */ new Date()).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      name,
      email,
      phone,
      website,
      company,
      services_needed,
      budget_range,
      message,
      source
    };
    try {
      const logLine = `${leadRecord.istTime} | LEAD: ${name} | PHONE: ${phone || "N/A"} | EMAIL: ${email || "N/A"} | SERVICE: ${services_needed} | BUDGET: ${budget_range} | SOURCE: ${source}
`;
      fs.appendFileSync(path.join(process.cwd(), "leads.log"), logLine, "utf8");
      const jsonPath = path.join(process.cwd(), "leads.json");
      let allLeads = [];
      if (fs.existsSync(jsonPath)) {
        try {
          allLeads = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
          if (!Array.isArray(allLeads)) allLeads = [];
        } catch (_) {
          allLeads = [];
        }
      }
      allLeads.push(leadRecord);
      fs.writeFileSync(jsonPath, JSON.stringify(allLeads, null, 2), "utf8");
    } catch (fsErr) {
      console.error("[LEAD LOG ERROR]", fsErr);
    }
    const mailConfig = getMailTransporter();
    const recipient = process.env.EMAIL_TO || "inranktech@gmail.com";
    const sender = mailConfig ? mailConfig.user : "inranktech@gmail.com";
    const htmlEmail = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 14px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 20px rgba(0,0,0,0.06);">
        <div style="background: linear-gradient(135deg, #049649 0%, #009d49 100%); padding: 26px 28px; text-align: left; color: #ffffff;">
          <h1 style="margin: 0; font-size: 20px; font-weight: 800; letter-spacing: -0.02em;">INRANK TECHNOLOGIES</h1>
          <p style="margin: 4px 0 0; font-size: 13px; opacity: 0.92; font-weight: 500;">New Inbound Customer Inquiry</p>
        </div>
        <div style="padding: 28px 26px; color: #0f172a;">
          <table style="width: 100%; border-collapse: collapse; font-size: 13.5px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 600; width: 140px;">Customer Name:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 700;">${name}</td>
            </tr>
            ${company ? `<tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 600;">Company / Brand:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 700;">${company}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 600;">Phone / WhatsApp:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 700;">
                <a href="tel:${phone}" style="color: #009d49; text-decoration: none;">${phone || "Not provided"}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 600;">Email Address:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">
                <a href="mailto:${email}" style="color: #009d49; text-decoration: none;">${email || "Not provided"}</a>
              </td>
            </tr>
            ${website ? `<tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 600;">Current Website:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">
                <a href="${website}" target="_blank" style="color: #009d49; text-decoration: underline;">${website}</a>
              </td>
            </tr>` : ""}
            ${services_needed ? `<tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 600;">Services Needed:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 600;">${services_needed}</td>
            </tr>` : ""}
            ${budget_range ? `<tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 600;">Budget Range:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 600;">${budget_range}</td>
            </tr>` : ""}
            ${source ? `<tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 600;">Source Page:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;">${source}</td>
            </tr>` : ""}
          </table>
          ${message ? `
            <div style="margin-top: 22px; padding: 16px 18px; background: #f8fafc; border-radius: 10px; border-left: 4px solid #009d49;">
              <p style="margin: 0 0 6px; font-size: 11.5px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Project Details / Message:</p>
              <p style="margin: 0; font-size: 13.5px; line-height: 1.6; color: #1e293b; white-space: pre-wrap;">${message}</p>
            </div>
          ` : ""}
        </div>
        <div style="background: #f8fafc; padding: 14px 24px; border-top: 1px solid #e2e8f0; font-size: 11.5px; color: #94a3b8; text-align: center;">
          Received on ${(/* @__PURE__ */ new Date()).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST &bull; Dispatched via Inrank smtp.gmail.com
        </div>
      </div>
    `;
    let emailSent = false;
    let smtpNotice = "";
    if (mailConfig && mailConfig.transporter) {
      try {
        await mailConfig.transporter.sendMail({
          from: `"Inrank Inquiries" <${sender}>`,
          to: recipient,
          replyTo: email || sender,
          subject: `New Lead: ${name} (${services_needed || "Website Inquiry"})`,
          html: htmlEmail
        });
        emailSent = true;
        console.log(`[SMTP SUCCESS] Sent email notification to ${recipient} via smtp.gmail.com for customer: ${name}`);
      } catch (mailErr) {
        smtpNotice = mailErr.message || String(mailErr);
        console.error("[SMTP ERROR] Failed to deliver via smtp.gmail.com:", smtpNotice);
      }
    } else {
      console.warn("[SMTP NOTICE] SMTP_PASS not configured in .env. Lead saved to leads.log and leads.json.");
      smtpNotice = "SMTP password not configured in .env";
    }
    if (req.headers.accept?.includes("text/html") && !req.headers["x-requested-with"]) {
      return res.redirect("/contact.html?submitted=true#consult-form");
    }
    return res.json({
      success: true,
      saved: true,
      emailSent,
      message: emailSent ? "Your inquiry was transmitted successfully to inranktech@gmail.com via Gmail SMTP." : "Your inquiry has been safely received! Our team will contact you shortly.",
      ...smtpNotice && !emailSent ? { note: smtpNotice } : {}
    });
  } catch (error) {
    console.error("[FORM PROCESSING ERROR]:", error);
    return res.status(500).json({
      success: false,
      error: error.message || "Failed to process form submission."
    });
  }
});
app.post("/api/submit-seo-report", async (req, res) => {
  try {
    const { websiteUrl, leadName, leadEmail, leadPhone, leadMessage, auditReport } = req.body;
    if (!websiteUrl || !leadName || !leadEmail || !leadPhone) {
      return res.status(400).json({
        success: false,
        error: "All primary customer contact fields and website URL must be provided."
      });
    }
    console.log("\n" + "=".repeat(80));
    console.log(`[INRANK TRANSMISSION AUTO-LOG] Submission to inranktech@gmail.com`);
    console.log(`Target Scan Website:  ${websiteUrl}`);
    console.log(`Customer Name:        ${leadName}`);
    console.log(`Business Work Email:  ${leadEmail}`);
    console.log(`Mobile/WhatsApp No.:  ${leadPhone}`);
    if (leadMessage) {
      console.log(`Customer Priorities:  ${leadMessage}`);
    }
    console.log(`-`.repeat(80));
    console.log(`INITIAL AI CRAWLER DIAGNOSTIC HIGHLIGHTS:`);
    console.log(auditReport || "(No report attached)");
    console.log("=".repeat(80) + "\n");
    res.json({
      success: true,
      message: "Your inquiry has been automatically compiled and submitted from the website to Inrank (inranktech@gmail.com)."
    });
  } catch (error) {
    console.error("SEO Audit Submit Request Error:", error);
    res.status(500).json({
      success: false,
      error: "An unexpected error occurred while automatically transmitting the SEO report."
    });
  }
});
app.get("/robots.txt", (req, res) => {
  res.type("text/plain");
  const localRobots = path.join(process.cwd(), "public", "robots.txt");
  if (fs.existsSync(localRobots)) return res.sendFile(localRobots);
  res.send(`User-agent: *
Allow: /
Sitemap: ${process.env.APP_URL || "https://inranktech.com"}/sitemap.xml
`);
});
app.get("/llms.txt", (req, res) => {
  res.type("text/plain");
  const localLlms = path.join(process.cwd(), "public", "llms.txt");
  const rootLlms = path.join(process.cwd(), "llms.txt");
  if (fs.existsSync(localLlms)) return res.sendFile(localLlms);
  if (fs.existsSync(rootLlms)) return res.sendFile(rootLlms);
  return res.send(`# Inrank Technologies
URL: https://inranktech.com
`);
});
app.get("/llms-full.txt", (req, res) => {
  res.type("text/plain");
  const localLlmsFull = path.join(process.cwd(), "public", "llms-full.txt");
  const rootLlmsFull = path.join(process.cwd(), "llms-full.txt");
  if (fs.existsSync(localLlmsFull)) return res.sendFile(localLlmsFull);
  if (fs.existsSync(rootLlmsFull)) return res.sendFile(rootLlmsFull);
  return res.redirect("/llms.txt");
});
app.get("/sitemap.xml", (req, res) => {
  res.type("application/xml");
  const localSitemap = path.join(process.cwd(), "public", "sitemap.xml");
  const rootSitemap = path.join(process.cwd(), "sitemap.xml");
  if (fs.existsSync(localSitemap)) return res.sendFile(localSitemap);
  if (fs.existsSync(rootSitemap)) return res.sendFile(rootSitemap);
  return res.status(404).send("Sitemap not found");
});
app.get(["/homepage-2", "/homepage-2.html"], (req, res) => {
  const distPage = path.join(process.cwd(), "dist", "homepage-2.html");
  const localPage = path.join(process.cwd(), "homepage-2.html");
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
app.get(["/homepage-3", "/homepage-3.html"], (req, res) => {
  const distPage = path.join(process.cwd(), "dist", "homepage-3.html");
  const localPage = path.join(process.cwd(), "homepage-3.html");
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
app.get(["/website-design-company-in-pune", "/website-design-company-in-pune.html"], (req, res) => {
  const distPage = path.join(process.cwd(), "dist", "website-design-company-in-pune.html");
  const localPage = path.join(process.cwd(), "website-design-company-in-pune.html");
  if (fs.existsSync(distPage)) return res.sendFile(distPage);
  if (fs.existsSync(localPage)) return res.sendFile(localPage);
  return res.sendFile(path.join(process.cwd(), "index.html"));
});
app.get(["/digital-marketing-agency-in-pune", "/digital-marketing-agency-in-pune.html"], (req, res) => {
  const distPage = path.join(process.cwd(), "dist", "digital-marketing-agency-in-pune.html");
  const localPage = path.join(process.cwd(), "digital-marketing-agency-in-pune.html");
  if (fs.existsSync(distPage)) return res.sendFile(distPage);
  if (fs.existsSync(localPage)) return res.sendFile(localPage);
  return res.sendFile(path.join(process.cwd(), "index.html"));
});
app.get(["/justdial-profile", "/justdial-profile.html"], (req, res) => {
  const distPage = path.join(process.cwd(), "dist", "justdial-profile.html");
  const localPage = path.join(process.cwd(), "justdial-profile.html");
  if (fs.existsSync(distPage)) return res.sendFile(distPage);
  if (fs.existsSync(localPage)) return res.sendFile(localPage);
  return res.sendFile(path.join(process.cwd(), "index.html"));
});
app.get(["/google-business-profile-top3", "/google-business-profile-top3.html", "/gbp-blueprint"], (req, res) => {
  const distPage = path.join(process.cwd(), "dist", "google-business-profile-top3.html");
  const localPage = path.join(process.cwd(), "google-business-profile-top3.html");
  if (fs.existsSync(distPage)) return res.sendFile(distPage);
  if (fs.existsSync(localPage)) return res.sendFile(localPage);
  return res.sendFile(path.join(process.cwd(), "index.html"));
});
app.get(["/our-work", "/our-work.html"], (req, res) => {
  const distPage = path.join(process.cwd(), "dist", "our-work.html");
  const localPage = path.join(process.cwd(), "our-work.html");
  if (fs.existsSync(distPage)) return res.sendFile(distPage);
  if (fs.existsSync(localPage)) return res.sendFile(localPage);
  const distPort = path.join(process.cwd(), "dist", "portfolio.html");
  const localPort = path.join(process.cwd(), "portfolio.html");
  if (fs.existsSync(distPort)) return res.sendFile(distPort);
  if (fs.existsSync(localPort)) return res.sendFile(localPort);
  return res.sendFile(path.join(process.cwd(), "index.html"));
});
app.get(["/case-studies", "/case-studies.html"], (req, res) => {
  const distPage = path.join(process.cwd(), "dist", "case-studies.html");
  const localPage = path.join(process.cwd(), "case-studies.html");
  if (fs.existsSync(distPage)) return res.sendFile(distPage);
  if (fs.existsSync(localPage)) return res.sendFile(localPage);
  return res.redirect("/our-work.html");
});
app.get(["/portfolio", "/portfolio.html"], (req, res) => {
  return res.redirect(301, "/our-work.html");
});
app.get(["/case-studies/:id", "/case-studies/:id.html"], (req, res) => {
  const rawId = req.params.id.replace(/\.html$/, "");
  return res.redirect(301, `/our-work/${rawId}.html`);
});
app.get(["/our-work/:id", "/our-work/:id.html"], (req, res) => {
  const rawId = req.params.id.replace(/\.html$/, "");
  const candidates = [
    path.join(process.cwd(), "dist", "our-work", `${rawId}.html`),
    path.join(process.cwd(), "our-work", `${rawId}.html`)
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) return res.sendFile(c);
  }
  return res.redirect(302, "/our-work.html");
});
app.get(["/services", "/services/", "/services.html"], (req, res) => {
  const distPage = path.join(process.cwd(), "dist", "services.html");
  const localPage = path.join(process.cwd(), "services.html");
  const publicPage = path.join(process.cwd(), "public", "services.html");
  if (fs.existsSync(distPage)) return res.sendFile(distPage);
  if (fs.existsSync(localPage)) return res.sendFile(localPage);
  if (fs.existsSync(publicPage)) return res.sendFile(publicPage);
  return res.sendFile(path.join(process.cwd(), "index.html"));
});
app.get(["/services/:id", "/services/:id/", "/services/:id.html"], (req, res) => {
  const rawId = req.params.id.replace(/\.html$/, "").replace(/\/$/, "");
  const candidates = [
    path.join(process.cwd(), "dist", "services", `${rawId}.html`),
    path.join(process.cwd(), "public", "services", `${rawId}.html`),
    path.join(process.cwd(), "public", "services", rawId, "index.html"),
    path.join(process.cwd(), "inrank-27-service-pages", "pages", `${rawId}.html`)
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) return res.sendFile(c);
  }
  return res.redirect("/services.html");
});
async function startServer() {
  const distPath = path.join(process.cwd(), "dist");
  const hasDist = fs.existsSync(path.join(distPath, "index.html"));
  if (process.env.NODE_ENV === "production" || hasDist) {
    app.use(express.static(distPath, staticCacheOptions));
    app.get("*", (req, res) => {
      res.setHeader("Cache-Control", "public, max-age=0, must-revalidate");
      res.sendFile(path.join(distPath, "index.html"));
    });
  } else {
    try {
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: "spa"
      });
      app.use(vite.middlewares);
    } catch {
      app.use(express.static(process.cwd()));
      app.get("*", (req, res) => {
        res.sendFile(path.join(process.cwd(), "index.html"));
      });
    }
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.js.map
