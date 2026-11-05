// Script: compile_services_data.cjs
const fs = require('fs');

const dm = require('./data_digital_marketing.cjs');
const wd = require('./data_web_design.cjs');
const ai = require('./data_ai_solutions.cjs');
const bi = require('./data_brand_identity.cjs');
const os = require('./data_other_services.cjs');

const allServices = [...dm, ...wd, ...ai, ...bi, ...os];

console.log('Total services loaded:', allServices.length);

function cleanString(str) {
  if (typeof str !== 'string') return str;
  return str
    .replace(/—/g, ' - ')
    .replace(/--/g, ' - ')
    .replace(/,\s+and\b/g, ' and')
    .replace(/,\s+and\b/g, ' and');
}

function cleanObject(obj) {
  if (typeof obj === 'string') return cleanString(obj);
  if (Array.isArray(obj)) return obj.map(cleanObject);
  if (typeof obj === 'object' && obj !== null) {
    const res = {};
    for (const [k, v] of Object.entries(obj)) {
      res[k] = cleanObject(v);
    }
    return res;
  }
  return obj;
}

const cleanedServices = allServices.map(cleanObject);

// Verification checks
let hasError = false;
cleanedServices.forEach((s, idx) => {
  const words = s.longDescMarkdown.trim().split(/\s+/).length;
  const hasEmDash = s.longDescMarkdown.includes('—');
  const hasOxfordComma = /,\s+and\b/.test(s.longDescMarkdown);
  const hasExperience = s.longDescMarkdown.includes('8+ years') || s.longDescMarkdown.includes('8+ Years');
  const hasOutsourcing = s.longDescMarkdown.toLowerCase().includes('white-label') || s.longDescMarkdown.toLowerCase().includes('outsource');

  console.log(`[${idx + 1}/29] ${s.id} | Words: ${words} | EmDash: ${hasEmDash} | OxfordComma: ${hasOxfordComma} | Exp: ${hasExperience} | Outsource: ${hasOutsourcing}`);

  if (words < 800) {
    console.error(`ERROR: Service ${s.id} has only ${words} words! Minimum 800 required.`);
    hasError = true;
  }
  if (hasEmDash) {
    console.error(`ERROR: Service ${s.id} contains em-dash!`);
    hasError = true;
  }
  if (hasOxfordComma) {
    console.error(`ERROR: Service ${s.id} contains Oxford comma before 'and'!`);
    hasError = true;
  }
});

if (hasError) {
  console.error('Validation failed! Please fix issues before writing.');
  process.exit(1);
}

// Generate TypeScript code
const tsCode = `export interface KeywordItem {
  phrase: string;
  volume: string;
  intent: string;
}

export interface HeadingItem {
  level: string;
  text: string;
  note: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  category: "Digital Marketing" | "Web Designing" | "Brand Identity" | "AI Solutions" | "Other Services";
  metaTitle: string;
  metaDesc: string;
  heroHeadline: string;
  heroImage: string;
  imageAlt: string;
  shortDesc: string;
  longDescMarkdown: string;
  keywords: KeywordItem[];
  headingStructure: HeadingItem[];
  faqs: FAQItem[];
  detailedServices: string[];
  serviceTypes: string[];
}

export const SERVICES_DETAILS: ServiceDetail[] = ${JSON.stringify(cleanedServices, null, 2)};
`;

fs.writeFileSync('src/servicesData.ts', tsCode, 'utf8');
console.log('Successfully wrote src/servicesData.ts! Total services:', cleanedServices.length);
