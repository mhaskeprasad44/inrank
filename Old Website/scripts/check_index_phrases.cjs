const fs = require('fs');

function decodeEntities(str) {
  return str.replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'")
            .replace(/&apos;/g, "'")
            .replace(/–/g, '-')
            .replace(/—/g, '-');
}

function clean(str) {
  return decodeEntities(str)
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

const current = fs.readFileSync('index.html', 'utf8');
const v2 = fs.readFileSync('inrank2.0/index.html', 'utf8');

const currentClean = clean(current);
const v2Clean = clean(v2);

const keyPhrases = [
  "Websites, SEO & Ads that turn traffic into revenue",
  "15-Minute Response SLA",
  "Trusted by Ambitious Brands Scaling Real Revenue",
  "Fludio Interiors",
  "CyTOS Biosciences",
  "Dravya Financial",
  "Grey to Green",
  "Hira Grafix",
  "Digital Marketing & Web Development in Pune",
  "SEO Services",
  "Website Development",
  "Pay Per Click (PPC)",
  "Social Media Marketing",
  "Custom Website Design",
  "AI SEO & GEO Agency",
  "E-Commerce Development",
  "Google My Business / Google Map",
  "Need specialized branding, AI SEO, or content marketing",
  "Built like a growth team. Priced like an agency",
  "Fast delivery",
  "Performance-first",
  "ROI mindset",
  "One partner",
  "Local market depth",
  "Data-backed iteration",
  "A simple, proven 4-step engagement",
  "SEO Audit",
  "Strategy",
  "Launch",
  "Optimize",
  "Niches we know inside-out",
  "D2C Brands",
  "Dental & Healthcare",
  "Real Estate",
  "Education & Coaching",
  "Local Services",
  "B2B Enterprises",
  "Numbers that move P&Ls, not just dashboards",
  "+318%",
  "₹11,999",
  "4.9 / 5",
  "15 min",
  "Real websites. Engineered for commercial dominance",
  "CyTOS Machines Pune",
  "Fludio Water Solutions",
  "HIRAGRAFIX",
  "Dravya Financial",
  "Substantiated outcomes. Not empty marketing adjectives",
  "318% Qualified Patient Leads",
  "Scaled Blended ROAS from 1.6x to 3.4x",
  "2.9x Pipeline Return & Elimination of ₹1.4L Wasted Clicks",
  "How Inrank outperforms legacy Pune agencies",
  "We're a small, senior growth team focused on performance",
  "Senior Growth Engineer",
  "When you hire Inrank, you don't get passed to an account manager",
  "What founders actually say",
  "Vikram Shinde",
  "Dr. Snehal Kulkarni",
  "Amit Deshmukh",
  "Rajesh Patel",
  "Download the 2026 Pune SEO & AI Search Growth Checklist",
  "Fixed-Price Websites & Growth Retainers. No Surprises",
  "Starter",
  "Growth",
  "Enterprise",
  "11,999",
  "16,999",
  "24,999",
  "Transparent Add-Ons & Renewals",
  "Quick answers before the call",
  "How fast can you launch our website",
  "Do you handle ads, SEO and the website together",
  "What is the minimum engagement",
  "How soon will we see results from SEO",
  "Will I own my ad accounts, analytics and code",
  "Do you work with businesses globally",
  "Book your free 30-minute growth call",
  "Baner, Pune",
  "inranktech@gmail.com",
  "70386 12280"
];

console.log('--- CHECKING KEY PHRASES IN INRANK 2.0 INDEX.HTML ---');
let missingCount = 0;
keyPhrases.forEach(kp => {
  const present = v2Clean.includes(decodeEntities(kp).toLowerCase());
  if (!present) {
    console.log(`[MISSING] ${kp}`);
    missingCount++;
  }
});

console.log(`Total checked: ${keyPhrases.length} | Missing: ${missingCount}`);
