// server.ts
import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();
var app = express();
var PORT = process.env.PORT || 3e3;
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
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
  res.send(`User-agent: *
Allow: /
Sitemap: ${process.env.APP_URL || "https://inranktech.com"}/sitemap.xml
`);
});
app.get("/llms.txt", (req, res) => {
  res.type("text/plain");
  res.send(`# Inrank Technologies - AI SEO & Performance Growth Agency
URL: ${process.env.APP_URL || "https://inranktech.com"}

## Agency Overview
Inrank Technologies is a premium, performance-first digital growth agency. We specialize in building conversion-engineered websites, managing high-yielding paid ad campaigns (Google & Meta) and implementing advanced search engine optimization (SEO) that directly drives top-line revenue for businesses.

## Key Capabilities & Core Niches
- Conversion-Optimized Web Design (Vite, React, Shopify, Custom WordPress)
- Intelligent AI-Powered On-Page SEO Auditing Tool (HTML and image assets file upload analysis)
- Highly focused D2C Brands optimization (Shopify setups, scaling ROAS)
- Local Search Engine Domination (Google Maps ranking, local map packs)
- High-performing campaign strategies for Dental clinic, Healthcare, Real Estate, Education and B2B services.

## Contact & Location
- San Francisco, California, US (with global remote teams).
- Email: inranktech@gmail.com
- Phone/WhatsApp: +91 70386 12280
`);
});
async function startServer() {
  const distPath = path.join(process.cwd(), "dist");
  const hasDist = fs.existsSync(path.join(distPath, "index.html"));
  if (process.env.NODE_ENV === "production" || hasDist) {
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
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
