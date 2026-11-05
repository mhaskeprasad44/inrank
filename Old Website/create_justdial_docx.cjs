const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  WidthType,
  BorderStyle,
  HeadingLevel,
  AlignmentType,
  ShadingType,
  Header,
  Footer,
  PageNumber,
  ImageRun,
  convertInchesToTwip
} = require('docx');
const fs = require('fs');
const path = require('path');

// Colors
const COLOR_PRIMARY = '059669';       // Emerald 600
const COLOR_PRIMARY_DARK = '065f46';  // Emerald 800
const COLOR_PRIMARY_LIGHT = 'ecfdf5'; // Emerald 50
const COLOR_PRIMARY_BORDER = 'a7f3d0';// Emerald 200
const COLOR_TEXT_DARK = '0f172a';     // Slate 900
const COLOR_TEXT_MUTED = '475569';    // Slate 600
const COLOR_BORDER = 'cbd5e1';        // Slate 300
const COLOR_ZEBRA = 'f8fafc';         // Slate 50
const COLOR_WHITE = 'ffffff';
const FONT_FAMILY = 'Inter';

// Helper: Paragraph with default Inter font
function p(text = '', options = {}) {
  const runs = Array.isArray(text) ? text : [new TextRun({ text, font: FONT_FAMILY, ...options })];
  return new Paragraph({
    spacing: { after: 120, line: 276, ...(options.spacing || {}) },
    alignment: options.alignment || AlignmentType.LEFT,
    children: runs,
    ...(options.paraProps || {})
  });
}

// Helper: Bold Run
function bold(text, color = COLOR_TEXT_DARK, size = 22) {
  return new TextRun({ text, bold: true, font: FONT_FAMILY, color, size });
}

// Helper: Normal Run
function normal(text, color = COLOR_TEXT_DARK, size = 21) {
  return new TextRun({ text, font: FONT_FAMILY, color, size });
}

// Helper: Section Heading
function sectionHeading(num, title) {
  return [
    new Paragraph({
      heading: HeadingLevel.HEADING_2,
      spacing: { before: 280, after: 140 },
      children: [
        new TextRun({
          text: `${num}. ${title.toUpperCase()}`,
          bold: true,
          font: FONT_FAMILY,
          color: COLOR_PRIMARY_DARK,
          size: 26,
        })
      ],
      border: {
        bottom: { style: BorderStyle.SINGLE, size: 12, color: COLOR_PRIMARY }
      }
    })
  ];
}

// Helper: Subsection Heading
function subHeading(title) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 200, after: 100 },
    children: [
      new TextRun({
        text: title,
        bold: true,
        font: FONT_FAMILY,
        color: COLOR_PRIMARY,
        size: 23,
      })
    ]
  });
}

// Helper: Callout Box
function calloutBox(title, textRuns) {
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.NONE },
      right: { style: BorderStyle.NONE },
      bottom: { style: BorderStyle.NONE },
      left: { style: BorderStyle.SINGLE, size: 28, color: COLOR_PRIMARY }
    },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            shading: { fill: COLOR_PRIMARY_LIGHT, type: ShadingType.CLEAR },
            margins: { top: 160, bottom: 160, left: 240, right: 200 },
            children: [
              new Paragraph({
                spacing: { after: 80 },
                children: [
                  new TextRun({ text: title, bold: true, font: FONT_FAMILY, color: COLOR_PRIMARY_DARK, size: 21 })
                ]
              }),
              new Paragraph({
                spacing: { after: 0, line: 260 },
                children: textRuns
              })
            ]
          })
        ]
      })
    ]
  });
}

// Helper: Table Cell with padding and font
function createCell(content, options = {}) {
  const isHeader = options.isHeader || false;
  const fill = options.fill || (isHeader ? COLOR_PRIMARY_DARK : COLOR_WHITE);
  const runs = Array.isArray(content) ? content : [
    new TextRun({
      text: String(content),
      bold: isHeader || options.bold || false,
      font: FONT_FAMILY,
      color: isHeader ? COLOR_WHITE : (options.color || COLOR_TEXT_DARK),
      size: options.size || (isHeader ? 20 : 19)
    })
  ];

  return new TableCell({
    width: options.width ? { size: options.width, type: WidthType.PERCENTAGE } : undefined,
    shading: { fill, type: ShadingType.CLEAR },
    margins: { top: 120, bottom: 120, left: 160, right: 160 },
    children: [
      new Paragraph({
        alignment: options.alignment || AlignmentType.LEFT,
        spacing: { before: 20, after: 20, line: 240 },
        children: runs
      })
    ]
  });
}

// Read Logo
let logoRun = null;
const logoPath = path.join(__dirname, 'Logo.png');
if (fs.existsSync(logoPath)) {
  try {
    const logoBuffer = fs.readFileSync(logoPath);
    logoRun = new ImageRun({
      data: logoBuffer,
      transformation: {
        width: 60,
        height: 60
      }
    });
  } catch (e) {
    console.log('Logo read error:', e.message);
  }
}

// Build Document
const doc = new Document({
  styles: {
    default: {
      document: {
        run: {
          font: FONT_FAMILY,
          size: 21,
          color: COLOR_TEXT_DARK
        }
      }
    }
  },
  sections: [
    {
      properties: {
        page: {
          margin: {
            top: convertInchesToTwip(0.8),
            bottom: convertInchesToTwip(0.8),
            left: convertInchesToTwip(0.8),
            right: convertInchesToTwip(0.8)
          }
        }
      },
      headers: {
        default: new Header({
          children: [
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              spacing: { after: 80 },
              children: [
                new TextRun({
                  text: 'Inrank Technologies — Justdial Official Vendor Dossier | Phone & WhatsApp: 8788823182',
                  size: 16,
                  font: FONT_FAMILY,
                  color: COLOR_TEXT_MUTED
                })
              ],
              border: {
                bottom: { style: BorderStyle.SINGLE, size: 4, color: COLOR_BORDER }
              }
            })
          ]
        })
      },
      footers: {
        default: new Footer({
          children: [
            new Table({
              width: { size: 100, type: WidthType.PERCENTAGE },
              borders: {
                top: { style: BorderStyle.SINGLE, size: 4, color: COLOR_BORDER },
                bottom: { style: BorderStyle.NONE },
                left: { style: BorderStyle.NONE },
                right: { style: BorderStyle.NONE }
              },
              rows: [
                new TableRow({
                  children: [
                    new TableCell({
                      width: { size: 70, type: WidthType.PERCENTAGE },
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: 'Inrank Technologies • Office No. 11, Shree Bhagwati Suvarna Complex, Baner, Pune 411045 • inranktech@gmail.com',
                              size: 16,
                              font: FONT_FAMILY,
                              color: COLOR_TEXT_MUTED
                            })
                          ]
                        })
                      ]
                    }),
                    new TableCell({
                      width: { size: 30, type: WidthType.PERCENTAGE },
                      children: [
                        new Paragraph({
                          alignment: AlignmentType.RIGHT,
                          children: [
                            new TextRun({ text: 'Page ', size: 16, font: FONT_FAMILY, color: COLOR_TEXT_MUTED }),
                            new TextRun({ children: [PageNumber.CURRENT], size: 16, font: FONT_FAMILY, color: COLOR_TEXT_MUTED }),
                            new TextRun({ text: ' of ', size: 16, font: FONT_FAMILY, color: COLOR_TEXT_MUTED }),
                            new TextRun({ children: [PageNumber.TOTAL_PAGES], size: 16, font: FONT_FAMILY, color: COLOR_TEXT_MUTED })
                          ]
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        })
      },
      children: [
        // ==========================================
        // HEADER TITLE BLOCK
        // ==========================================
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          borders: {
            top: { style: BorderStyle.NONE },
            bottom: { style: BorderStyle.SINGLE, size: 16, color: COLOR_PRIMARY },
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE }
          },
          rows: [
            new TableRow({
              children: [
                ...(logoRun ? [
                  new TableCell({
                    width: { size: 12, type: WidthType.PERCENTAGE },
                    children: [new Paragraph({ children: [logoRun], alignment: AlignmentType.CENTER })]
                  })
                ] : []),
                new TableCell({
                  width: { size: logoRun ? 88 : 100, type: WidthType.PERCENTAGE },
                  children: [
                    new Paragraph({
                      spacing: { after: 40 },
                      children: [
                        new TextRun({
                          text: 'JUSTDIAL OFFICIAL BUSINESS LISTING DOSSIER',
                          bold: true,
                          font: FONT_FAMILY,
                          color: COLOR_PRIMARY_DARK,
                          size: 32
                        })
                      ]
                    }),
                    new Paragraph({
                      spacing: { after: 80 },
                      children: [
                        new TextRun({
                          text: 'Inrank Technologies — Web Development, Web Designing & Digital Marketing Agency',
                          bold: true,
                          font: FONT_FAMILY,
                          color: COLOR_TEXT_MUTED,
                          size: 20
                        })
                      ]
                    }),
                    new Paragraph({
                      spacing: { after: 100 },
                      children: [
                        new TextRun({ text: 'Document Purpose: ', bold: true, font: FONT_FAMILY, size: 18, color: COLOR_PRIMARY_DARK }),
                        new TextRun({ text: 'Vendor Onboarding, Profile Verification, Category Mapping & Lead Routing | ', font: FONT_FAMILY, size: 18 }),
                        new TextRun({ text: 'Official Helpline: 8788823182', bold: true, font: FONT_FAMILY, size: 18, color: COLOR_PRIMARY })
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        }),

        new Paragraph({ spacing: { after: 180 } }),

        // Executive Notice Callout
        calloutBox('VERIFIED VENDOR REGISTRATION NOTICE FOR JUSTDIAL OPERATIONS DESK', [
          new TextRun({
            text: 'This official document contains comprehensive verified business credentials, service catalogs, package pricing, 10 portfolio deployments, and search tags for Inrank Technologies. All Justdial client leads, SMS alerts, and call forwards must be mapped to mobile number ',
            font: FONT_FAMILY,
            size: 20
          }),
          new TextRun({
            text: '8788823182',
            bold: true,
            font: FONT_FAMILY,
            color: COLOR_PRIMARY_DARK,
            size: 21
          }),
          new TextRun({
            text: ' and email ',
            font: FONT_FAMILY,
            size: 20
          }),
          new TextRun({
            text: 'inranktech@gmail.com',
            bold: true,
            font: FONT_FAMILY,
            color: COLOR_PRIMARY_DARK,
            size: 20
          }),
          new TextRun({
            text: '.',
            font: FONT_FAMILY,
            size: 20
          })
        ]),

        // ==========================================
        // SECTION 1: BASIC BUSINESS IDENTITY
        // ==========================================
        ...sectionHeading('1', 'Basic Business Identity & Contact Details'),

        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          borders: {
            top: { style: BorderStyle.SINGLE, size: 6, color: COLOR_BORDER },
            bottom: { style: BorderStyle.SINGLE, size: 6, color: COLOR_BORDER },
            left: { style: BorderStyle.SINGLE, size: 6, color: COLOR_BORDER },
            right: { style: BorderStyle.SINGLE, size: 6, color: COLOR_BORDER },
            insideHorizontal: { style: BorderStyle.SINGLE, size: 4, color: COLOR_BORDER },
            insideVertical: { style: BorderStyle.SINGLE, size: 4, color: COLOR_BORDER }
          },
          rows: [
            new TableRow({
              children: [
                createCell('Field / Attribute', { isHeader: true, width: 32 }),
                createCell('Official Information (Strict Verification Data)', { isHeader: true, width: 68 })
              ]
            }),
            new TableRow({
              children: [
                createCell('Business / Entity Name', { bold: true, width: 32 }),
                createCell([
                  bold('Inrank Technologies '),
                  normal('(Also referred to as Inrank Tech / Inrank)')
                ], { width: 68 })
              ]
            }),
            new TableRow({
              children: [
                createCell('Primary Contact Person', { bold: true, width: 32 }),
                createCell('Business Operations & Technical Director', { width: 68 })
              ]
            }),
            new TableRow({
              children: [
                createCell('Primary Calling Number', { bold: true, width: 32 }),
                createCell([
                  bold('8788823182 ', COLOR_PRIMARY_DARK, 22),
                  normal('(Format: +91 87888 23182 • 24x7 Customer Priority Call Line)')
                ], { width: 68, fill: COLOR_PRIMARY_LIGHT })
              ]
            }),
            new TableRow({
              children: [
                createCell('Primary WhatsApp Number', { bold: true, width: 32 }),
                createCell([
                  bold('8788823182 ', COLOR_PRIMARY_DARK, 22),
                  normal('(Direct Link: https://wa.me/918788823182 • Instant Lead Desk)')
                ], { width: 68, fill: COLOR_PRIMARY_LIGHT })
              ]
            }),
            new TableRow({
              children: [
                createCell('Official Business Email', { bold: true, width: 32 }),
                createCell('inranktech@gmail.com', { width: 68, bold: true })
              ]
            }),
            new TableRow({
              children: [
                createCell('Official Website URL', { bold: true, width: 32 }),
                createCell('https://www.inranktech.com', { width: 68, color: COLOR_PRIMARY })
              ]
            }),
            new TableRow({
              children: [
                createCell('Portfolio & Case Studies URL', { bold: true, width: 32 }),
                createCell('https://www.inranktech.com/our-work.html', { width: 68, color: COLOR_PRIMARY })
              ]
            }),
            new TableRow({
              children: [
                createCell('Pricing Packages URL', { bold: true, width: 32 }),
                createCell('https://www.inranktech.com/pricing.html', { width: 68, color: COLOR_PRIMARY })
              ]
            }),
            new TableRow({
              children: [
                createCell('Year of Establishment', { bold: true, width: 32 }),
                createCell('2021 (5+ Years of Proven Industry Track Record)', { width: 68 })
              ]
            }),
            new TableRow({
              children: [
                createCell('Legal Constitution', { bold: true, width: 32 }),
                createCell('Private Enterprise / Digital Technology Consulting Agency', { width: 68 })
              ]
            }),
            new TableRow({
              children: [
                createCell('Registered Office Address', { bold: true, width: 32 }),
                createCell([
                  bold('Office No. 11, Shree Bhagwati Suvarna Complex, Pancard Club Rd, Baner Gaon, Baner, Pune, Maharashtra 411045, India\n'),
                  normal('Landmark: Near Pancard Club / Baner Gaon, Off Baner Main Road')
                ], { width: 68 })
              ]
            }),
            new TableRow({
              children: [
                createCell('Primary Service Coverage', { bold: true, width: 32 }),
                createCell('Pune (Baner, Balewadi, Hinjewadi, Wakad, Aundh, Pashan, FC Road, Shivaji Nagar, Kothrud, Viman Nagar, Kharadi, Hadapsar, Magarpatta, Camp, Pimpri-Chinchwad), Mumbai, Maharashtra, PAN-India, and Global Exporters (GCC, US, UK)', { width: 68 })
              ]
            }),
            new TableRow({
              children: [
                createCell('Working Hours', { bold: true, width: 32 }),
                createCell('Monday to Saturday: 9:00 AM – 8:00 PM | Sunday: Priority Web Support / Appointments', { width: 68 })
              ]
            }),
            new TableRow({
              children: [
                createCell('Payment Modes Accepted', { bold: true, width: 32 }),
                createCell('UPI (Google Pay, PhonePe, Paytm, BHIM), Net Banking (NEFT / RTGS / IMPS), Credit Cards, Debit Cards, Cheque, Bank Wire', { width: 68 })
              ]
            })
          ]
        }),

        new Paragraph({ spacing: { after: 180 } }),

        // ==========================================
        // SECTION 2: BUSINESS OVERVIEW
        // ==========================================
        ...sectionHeading('2', 'Business Overview & Executive Summary (About Us)'),

        calloutBox('Short Description (For Justdial SMS, WhatsApp Notification & Mobile App Preview - 200 chars)', [
          new TextRun({
            text: 'Inrank Technologies is Pune’s premier web development and digital marketing agency. High-speed custom websites, React SPAs, Shopify stores, and Google/AI SEO from ₹11,999. Call: 8788823182.',
            italic: true,
            font: FONT_FAMILY,
            size: 21,
            bold: true,
            color: COLOR_PRIMARY_DARK
          })
        ]),

        new Paragraph({ spacing: { after: 120 } }),

        calloutBox('Full Business Description (For Justdial Web Portal, Desktop Listing & Search Snippets)', [
          new TextRun({
            text: 'Inrank Technologies is a performance-driven web engineering, visual design, and search growth agency headquartered at Office No. 11, Shree Bhagwati Suvarna Complex, Pancard Club Rd, Baner, Pune. We specialize in engineering sub-second loading business websites, high-conversion e-commerce storefronts, and data-backed search engine optimization (SEO) that delivers measurable commercial ROI.\n\n',
            font: FONT_FAMILY,
            size: 20
          }),
          new TextRun({
            text: 'Unlike conventional agencies that provide slow, bloated WordPress templates, Inrank develops modern, lightweight React 18, Vite, and semantic HTML5 architectures boasting 98+ Google PageSpeed scores, zero layout shifts (CLS 0.00), and sub-second mobile loading times. With over 100+ successfully deployed projects across industrial manufacturing, healthcare, luxury architecture, e-commerce, and professional education, we help local Pune enterprises and international exporters achieve undisputed category authority.\n\n',
            font: FONT_FAMILY,
            size: 20
          }),
          new TextRun({
            text: 'In addition to cutting-edge web design, Inrank is a recognized pioneer in Generative Engine Optimization (GEO)—ensuring client businesses not only rank in Google’s Top 3-Pack, but are also actively recommended and cited by conversational AI engines like ChatGPT Search, Perplexity AI, and Google AI Overviews.',
            font: FONT_FAMILY,
            size: 20
          })
        ]),

        new Paragraph({ spacing: { after: 180 } }),

        // ==========================================
        // SECTION 3: CORE SERVICES CATALOG
        // ==========================================
        ...sectionHeading('3', 'Core Services Catalog & Category Mapping'),

        p('Please map Inrank Technologies under the following primary and secondary business categories on the Justdial master taxonomy:'),

        subHeading('A. Web Development & Designing (Primary Category)'),
        p([
          bold('1. Custom Website Development: '),
          normal('Modern business websites built on React 18, Vite, semantic HTML5, and TailwindCSS for sub-second page loads and zero layout shifts.\n'),
          bold('2. Web Designing in Pune (Local Hub): '),
          normal('Tailored responsive web design with transparent fixed pricing starting from ₹11,999.\n'),
          bold('3. E-Commerce Storefront Development: '),
          normal('Full-scale online stores on Shopify, WooCommerce, and custom frameworks with 0% transaction commission, automated WhatsApp cart abandonment, and payment gateways.\n'),
          bold('4. Corporate & B2B Portals: '),
          normal('High-ticket industrial catalogs, machinery spec finders, inquiry wizards, and direct RFQ pipelines.\n'),
          bold('5. Mobile-First Responsive Layouts: '),
          normal('Pixel-perfect rendering across iPhone, Android, tablets, and 4K displays.\n'),
          bold('6. Website Redesign & Speed Optimization: '),
          normal('Upgrading slow legacy websites to achieve 90+ Core Web Vitals on Google PageSpeed.\n'),
          bold('7. Maintenance & AMC: '),
          normal('365-day technical security, SSL certificates, daily backups, uptime monitoring, and content updates.')
        ]),

        subHeading('B. Search Engine Optimization & AI Search (Primary Category)'),
        p([
          bold('1. Local SEO & Google Business Profile (GMB) Optimization: '),
          normal('Dominating local Google 3-Pack map rankings for high-intent queries (e.g., "near me" searches).\n'),
          bold('2. Generative Engine Optimization (GEO): '),
          normal('Pioneering AI search entity indexing for recommendations on ChatGPT, Perplexity, and Google Gemini.\n'),
          bold('3. National & International B2B SEO: '),
          normal('Technical on-page, keyword architecture, JSON-LD schema, and high-authority link acquisition.\n'),
          bold('4. Content Marketing & Technical Guides: '),
          normal('In-depth industry pillar hubs that establish search authority and answer customer procurement questions.')
        ]),

        subHeading('C. Performance Digital Marketing & Paid Advertising'),
        p([
          bold('1. Google Ads Management (PPC): '),
          normal('High-intent Search Ads, Performance Max campaigns, and Display Ads with strict ROAS tracking.\n'),
          bold('2. Social Media Marketing (SMM): '),
          normal('High-engagement Meta advertising (Facebook & Instagram), creative viral reels strategy, and lead-gen funnels.\n'),
          bold('3. LinkedIn B2B Lead Generation: '),
          normal('Targeted outreach and sponsored content for corporate decision-makers, CXOs, and directors.\n'),
          bold('4. Influencer Marketing & Brand Partnerships: '),
          normal('Connecting Pune and national brands with verified micro-influencers.')
        ]),

        subHeading('D. Corporate Branding & Graphic Design'),
        p([
          bold('1. Brand Identity & Corporate Logo Design: '),
          normal('Vector logos, visual style guidelines, color harmony, and brand typography.\n'),
          bold('2. Brochures, Catalogues & Packaging Design: '),
          normal('Print-ready tri-fold brochures, B2B product catalogs, rigid box packaging, and labels.\n'),
          bold('3. Corporate Stationery Suites: '),
          normal('Luxury business cards, letterheads, presentation folders, and brand merchandise.')
        ]),

        new Paragraph({ spacing: { after: 180 } }),

        // ==========================================
        // SECTION 4: TRANSPARENT PRICING PACKAGES
        // ==========================================
        ...sectionHeading('4', 'Transparent Pricing Packages (For Inquiry Reference)'),

        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          borders: {
            top: { style: BorderStyle.SINGLE, size: 6, color: COLOR_BORDER },
            bottom: { style: BorderStyle.SINGLE, size: 6, color: COLOR_BORDER },
            left: { style: BorderStyle.SINGLE, size: 6, color: COLOR_BORDER },
            right: { style: BorderStyle.SINGLE, size: 6, color: COLOR_BORDER },
            insideHorizontal: { style: BorderStyle.SINGLE, size: 4, color: COLOR_BORDER },
            insideVertical: { style: BorderStyle.SINGLE, size: 4, color: COLOR_BORDER }
          },
          rows: [
            new TableRow({
              children: [
                createCell('Package Name', { isHeader: true, width: 22 }),
                createCell('Price (Fixed)', { isHeader: true, width: 18 }),
                createCell('Timeline', { isHeader: true, width: 15 }),
                createCell('Included Deliverables & Specifications', { isHeader: true, width: 45 })
              ]
            }),
            new TableRow({
              children: [
                createCell('Starter Business Web Package', { bold: true, width: 22 }),
                createCell('₹11,999 (Fixed)', { bold: true, color: COLOR_PRIMARY_DARK, width: 18 }),
                createCell('5 – 7 Days', { width: 15 }),
                createCell([
                  normal('• Up to 5 Custom Mobile-Responsive Pages\n'),
                  normal('• Free 1-Year Fast Cloud Hosting & SSL Certificate\n'),
                  normal('• Direct Click-to-Call & WhatsApp Lead Buttons\n'),
                  normal('• Google Maps Integration & Basic SEO Setup\n'),
                  normal('• 365 Days of Free Technical Support')
                ], { width: 45 })
              ]
            }),
            new TableRow({
              children: [
                createCell('Professional Growth Portal', { bold: true, width: 22 }),
                createCell('₹24,999 (Fixed)', { bold: true, color: COLOR_PRIMARY_DARK, width: 18 }),
                createCell('10 – 14 Days', { width: 15 }),
                createCell([
                  normal('• Up to 12 Pages with Bespoke Custom UI/UX\n'),
                  normal('• Sub-Second React 18 / Vite Architecture (0.8s load time)\n'),
                  normal('• Interactive Lead Wizard or Quotation Form\n'),
                  normal('• Advanced Technical SEO, Breadcrumbs & JSON-LD Schema\n'),
                  normal('• 1 Year Free Priority Maintenance & Security Patches')
                ], { width: 45, fill: COLOR_ZEBRA })
              ]
            }),
            new TableRow({
              children: [
                createCell('E-Commerce & Online Storefront', { bold: true, width: 22 }),
                createCell('₹34,999 – ₹49,999', { bold: true, color: COLOR_PRIMARY_DARK, width: 18 }),
                createCell('2 – 3 Weeks', { width: 15 }),
                createCell([
                  normal('• Full Shopify or Custom React E-Commerce Store\n'),
                  normal('• Unlimited Product Catalog & Category Architecture\n'),
                  normal('• Payment Gateway Integration (Razorpay, Stripe, Cashfree)\n'),
                  normal('• Automated WhatsApp Cart Recovery & Order Notifications\n'),
                  normal('• Courier Shipping API Integration & Customer Account Portal')
                ], { width: 45 })
              ]
            }),
            new TableRow({
              children: [
                createCell('Local SEO & GMB Domination', { bold: true, width: 22 }),
                createCell('₹8,999 / month', { bold: true, color: COLOR_PRIMARY_DARK, width: 18 }),
                createCell('Monthly Retainer', { width: 15 }),
                createCell([
                  normal('• Google Business Profile Setup & 100% Verification\n'),
                  normal('• Top 3-Pack Local Map Optimization in Pune\n'),
                  normal('• 50+ High-Authority Local Pune Citations & Directories\n'),
                  normal('• Review Generation Strategy & Review Mitigation\n'),
                  normal('• Monthly Ranking & Inquiry Growth Reports')
                ], { width: 45, fill: COLOR_ZEBRA })
              ]
            }),
            new TableRow({
              children: [
                createCell('360° Full-Service Digital Marketing', { bold: true, width: 22 }),
                createCell('₹18,000 – ₹35,000 / mo', { bold: true, color: COLOR_PRIMARY_DARK, width: 18 }),
                createCell('Monthly Retainer', { width: 15 }),
                createCell([
                  normal('• Full SEO + Google Ads (PPC) + Meta (Instagram/FB) Ads\n'),
                  normal('• 12 Monthly High-Quality Social Media Posts & Viral Reels\n'),
                  normal('• Ad Spend ROAS Management & Qualified Lead Verification\n'),
                  normal('• Dedicated Account Manager with Weekly Analytics Desk')
                ], { width: 45 })
              ]
            })
          ]
        }),

        new Paragraph({ spacing: { after: 180 } }),

        // ==========================================
        // SECTION 5: VERIFIED CLIENT PORTFOLIO
        // ==========================================
        ...sectionHeading('5', 'Verified Client Portfolio & Case Study References'),

        p('The Justdial onboarding team and customer prospects can directly inspect these 10 live client deployments engineered by Inrank Technologies:'),

        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          borders: {
            top: { style: BorderStyle.SINGLE, size: 6, color: COLOR_BORDER },
            bottom: { style: BorderStyle.SINGLE, size: 6, color: COLOR_BORDER },
            left: { style: BorderStyle.SINGLE, size: 6, color: COLOR_BORDER },
            right: { style: BorderStyle.SINGLE, size: 6, color: COLOR_BORDER },
            insideHorizontal: { style: BorderStyle.SINGLE, size: 4, color: COLOR_BORDER },
            insideVertical: { style: BorderStyle.SINGLE, size: 4, color: COLOR_BORDER }
          },
          rows: [
            new TableRow({
              children: [
                createCell('No.', { isHeader: true, width: 6 }),
                createCell('Client / Website', { isHeader: true, width: 26 }),
                createCell('Industry / Sector', { isHeader: true, width: 24 }),
                createCell('Engineered Deliverable & Business Impact', { isHeader: true, width: 44 })
              ]
            }),
            new TableRow({
              children: [
                createCell('1', { bold: true, width: 6 }),
                createCell([bold('CyTOS Machines Pune\n'), normal('cytos.in', COLOR_PRIMARY)], { width: 26 }),
                createCell('Industrial CNC Machinery & Automation', { width: 24 }),
                createCell('Custom React 18 SPA, 3-step Machine Finder Wizard, WhatsApp RFQ desk. PageSpeed 97/100, 0.72s load time, +314% monthly RFQs.', { width: 44 })
              ]
            }),
            new TableRow({
              children: [
                createCell('2', { bold: true, width: 6 }),
                createCell([bold('Fludio Water Solutions\n'), normal('fludio.in', COLOR_PRIMARY)], { width: 26 }),
                createCell('Luxury Architectural Fountains & Aquatic Engineering', { width: 24 }),
                createCell('Cinematic visual showcase, DMX 512 spec matrix, direct architect and developer RFQ inquiry routing.', { width: 44, fill: COLOR_ZEBRA })
              ]
            }),
            new TableRow({
              children: [
                createCell('3', { bold: true, width: 6 }),
                createCell([bold('HIRAGRAFIX™ Mumbai\n'), normal('hiragrafix.com', COLOR_PRIMARY)], { width: 26 }),
                createCell('Corporate Printing, Luxury Packaging & Merchandising', { width: 24 }),
                createCell('Interactive paper GSM selector, corporate gifting catalog, instant RFQ volume calculator.', { width: 44 })
              ]
            }),
            new TableRow({
              children: [
                createCell('4', { bold: true, width: 6 }),
                createCell([bold('Grey To The Green\n'), normal('greytothegreen.com', COLOR_PRIMARY)], { width: 26 }),
                createCell('Eco-Friendly Plant-Powered Biotechnology & D2C', { width: 24 }),
                createCell('Botanical brand identity, formulation transparency matrix, dual retail and commercial bulk ordering funnel.', { width: 44, fill: COLOR_ZEBRA })
              ]
            }),
            new TableRow({
              children: [
                createCell('5', { bold: true, width: 6 }),
                createCell([bold('Vasro Ventures\n'), normal('vasroventures.com', COLOR_PRIMARY)], { width: 26 }),
                createCell('Contemporary Fashion Apparel & Lifestyle E-Commerce', { width: 24 }),
                createCell('High-fashion storefront, dynamic discount coupon engine, mobile quick-add cart, sub-second product page transitions.', { width: 44 })
              ]
            }),
            new TableRow({
              children: [
                createCell('6', { bold: true, width: 6 }),
                createCell([bold('HCPNest\n'), normal('hcpnest.com', COLOR_PRIMARY)], { width: 26 }),
                createCell('Healthcare Recruitment & Clinical Staffing', { width: 24 }),
                createCell('HIPAA-conscious medical talent platform, dual hospital/clinician flows, 1-click resume ingestion reducing turnaround by 80%.', { width: 44, fill: COLOR_ZEBRA })
              ]
            }),
            new TableRow({
              children: [
                createCell('7', { bold: true, width: 6 }),
                createCell([bold('Riitu Institution\n'), normal('riituinstitution.com', COLOR_PRIMARY)], { width: 26 }),
                createCell('CA, Commerce & K-12 Academic Mentorship Academy', { width: 24 }),
                createCell('Course curriculum breakdown, 1-click free demo booking engine, hyper-local Navi Mumbai SEO outranking regional academies.', { width: 44 })
              ]
            }),
            new TableRow({
              children: [
                createCell('8', { bold: true, width: 6 }),
                createCell([bold('Shetkari Foodstuff Trading\n'), normal('shetkarifoodstuff.com', COLOR_PRIMARY), normal(' (Collaboration)', COLOR_TEXT_MUTED)], { width: 26 }),
                createCell('Agro-Commodity Export (India & Dubai, UAE)', { width: 24 }),
                createCell('Multi-market SEO & Generative Engine Optimization (GEO), APEDA/FSSAI schema, top Google & AI rankings across UAE and GCC.', { width: 44, fill: COLOR_ZEBRA })
              ]
            }),
            new TableRow({
              children: [
                createCell('9', { bold: true, width: 6 }),
                createCell([bold('Dr. Shyam Thakkar — ARTICUL8\n'), normal('orthopedicanklefootspecialist.com', COLOR_PRIMARY), normal(' (Collaboration)', COLOR_TEXT_MUTED)], { width: 26 }),
                createCell('Specialized Orthopedic Foot & Ankle Surgery', { width: 24 }),
                createCell('Clinical self-triage Symptom Helper, Hintermann H3 surgeon authority verification, instant WhatsApp consultation booking.', { width: 44 })
              ]
            }),
            new TableRow({
              children: [
                createCell('10', { bold: true, width: 6 }),
                createCell([bold('Dravya Financial Advisory\n'), normal('dravyafinancial.com', COLOR_PRIMARY), normal(' (Collaboration)', COLOR_TEXT_MUTED)], { width: 26 }),
                createCell('Corporate Debt Syndication & Capital Advisory', { width: 24 }),
                createCell('Institutional advisory portal, corporate debt eligibility calculator, multi-crore fund syndication tombstones, enterprise NDA assurances.', { width: 44, fill: COLOR_ZEBRA })
              ]
            })
          ]
        }),

        new Paragraph({ spacing: { after: 180 } }),

        // ==========================================
        // SECTION 6: KEY USPS & DIFFERENTIATORS
        // ==========================================
        ...sectionHeading('6', 'Key USPs & Differentiators (Why Pune Businesses Choose Inrank)'),

        p([
          bold('1. Sub-Second Speed Guarantee: '),
          normal('Every website is engineered on modern React 18/Vite to load in under 1 second, scoring 95+ on Google PageSpeed for higher conversion rates.\n'),
          bold('2. Fixed & Transparent Pricing: '),
          normal('Zero surprise billing or hidden extras. Clear, itemized scopes of work starting from ₹11,999.\n'),
          bold('3. Rapid 5 – 7 Day Delivery: '),
          normal('Fastest deployment cycles in Pune without sacrificing visual sophistication or source code quality.\n'),
          bold('4. AI Search Ready (Generative Engine Optimization - GEO): '),
          normal('Structured JSON-LD schema ensuring recommendation on ChatGPT Search, Perplexity AI, and Google AI Overviews.\n'),
          bold('5. 365-Day Dedicated Support: '),
          normal('Direct phone and WhatsApp support with real engineers at 8788823182, not unhelpful ticket queues.\n'),
          bold('6. 100% Strict NDA & Data Confidentiality: '),
          normal('Enterprise security protocols ensuring your business intellectual property and customer databases remain 100% confidential.')
        ]),

        new Paragraph({ spacing: { after: 180 } }),

        // ==========================================
        // SECTION 7: KEYWORDS & SEARCH TAGS
        // ==========================================
        ...sectionHeading('7', 'Keywords & Search Tags for Justdial System Entry'),

        p('Please tag all the following keywords under Inrank Technologies’ profile in the Justdial database:'),

        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          borders: {
            top: { style: BorderStyle.SINGLE, size: 6, color: COLOR_BORDER },
            bottom: { style: BorderStyle.SINGLE, size: 6, color: COLOR_BORDER },
            left: { style: BorderStyle.SINGLE, size: 6, color: COLOR_BORDER },
            right: { style: BorderStyle.SINGLE, size: 6, color: COLOR_BORDER },
            insideHorizontal: { style: BorderStyle.SINGLE, size: 4, color: COLOR_BORDER },
            insideVertical: { style: BorderStyle.SINGLE, size: 4, color: COLOR_BORDER }
          },
          rows: [
            new TableRow({
              children: [
                createCell('Web Development & Design Tags', { isHeader: true, width: 34 }),
                createCell('SEO & Digital Marketing Tags', { isHeader: true, width: 33 }),
                createCell('Industry-Specific Specialist Tags', { isHeader: true, width: 33 })
              ]
            }),
            new TableRow({
              children: [
                createCell([
                  normal('• Website Development Company in Pune\n'),
                  normal('• Web Designers in FC Road Pune\n'),
                  normal('• Web Designing Company in Shivaji Nagar\n'),
                  normal('• Website Developers in Baner Pune\n'),
                  normal('• Website Design Company in Hinjewadi\n'),
                  normal('• Best Web Development Agency in Pune\n'),
                  normal('• E-Commerce Website Developers Pune\n'),
                  normal('• Shopify Website Developers in Pune\n'),
                  normal('• WordPress Website Designers Pune\n'),
                  normal('• Low Cost Website Design in Pune\n'),
                  normal('• Responsive Mobile Website Developers\n'),
                  normal('• React JS Website Developers Pune\n'),
                  normal('• Corporate Website Designers in Pune\n'),
                  normal('• Startup Web Development Company')
                ], { width: 34 }),
                createCell([
                  normal('• Digital Marketing Agency in Pune\n'),
                  normal('• Best SEO Company in Pune\n'),
                  normal('• Local SEO Services in Pune\n'),
                  normal('• Google My Business Optimization Pune\n'),
                  normal('• GMB Ranking Specialist in Pune\n'),
                  normal('• AI SEO Agency Pune\n'),
                  normal('• Generative Engine Optimization (GEO)\n'),
                  normal('• Google Ads Agency in Pune\n'),
                  normal('• PPC Management Services Pune\n'),
                  normal('• Social Media Marketing Company Pune\n'),
                  normal('• Instagram Marketing Agency in Pune\n'),
                  normal('• Meta Ads Specialist Pune\n'),
                  normal('• B2B Lead Generation Services Pune\n'),
                  normal('• Search Engine Optimization Consultants')
                ], { width: 33, fill: COLOR_ZEBRA }),
                createCell([
                  normal('• Industrial Website Development Pune\n'),
                  normal('• Manufacturing Company Website Designers\n'),
                  normal('• Doctor & Clinic Website Development\n'),
                  normal('• Real Estate Digital Marketing Agency Pune\n'),
                  normal('• Education & Coaching Classes Website Designers\n'),
                  normal('• Export Import Company Website Developers\n'),
                  normal('• Architecture & Interior Design Website Makers\n'),
                  normal('• High-Ticket B2B Lead Funnels\n'),
                  normal('• Custom Web App Development Pune\n'),
                  normal('• Corporate Logo & Stationery Design')
                ], { width: 33 })
              ]
            })
          ]
        }),

        new Paragraph({ spacing: { after: 180 } }),

        // ==========================================
        // SECTION 8: CONTACT & LEAD ROUTING
        // ==========================================
        ...sectionHeading('8', 'Official Contact & Lead Routing Summary'),

        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          borders: {
            top: { style: BorderStyle.SINGLE, size: 8, color: COLOR_PRIMARY },
            bottom: { style: BorderStyle.SINGLE, size: 8, color: COLOR_PRIMARY },
            left: { style: BorderStyle.SINGLE, size: 8, color: COLOR_PRIMARY },
            right: { style: BorderStyle.SINGLE, size: 8, color: COLOR_PRIMARY }
          },
          rows: [
            new TableRow({
              children: [
                new TableCell({
                  shading: { fill: COLOR_PRIMARY_LIGHT, type: ShadingType.CLEAR },
                  margins: { top: 180, bottom: 180, left: 240, right: 240 },
                  children: [
                    new Paragraph({
                      spacing: { after: 100 },
                      children: [
                        new TextRun({
                          text: 'INRANK TECHNOLOGIES — JUSTDIAL PRIORITY LEAD DESK',
                          bold: true,
                          font: FONT_FAMILY,
                          color: COLOR_PRIMARY_DARK,
                          size: 24
                        })
                      ]
                    }),
                    new Paragraph({
                      spacing: { after: 60 },
                      children: [
                        bold('Primary Phone & Calling Line: ', COLOR_TEXT_DARK, 22),
                        bold('8788823182', COLOR_PRIMARY_DARK, 24),
                        normal(' (+91 87888 23182)')
                      ]
                    }),
                    new Paragraph({
                      spacing: { after: 60 },
                      children: [
                        bold('Primary WhatsApp Hotline: ', COLOR_TEXT_DARK, 22),
                        bold('8788823182', COLOR_PRIMARY_DARK, 24),
                        normal(' (Direct Link: wa.me/918788823182)')
                      ]
                    }),
                    new Paragraph({
                      spacing: { after: 60 },
                      children: [
                        bold('Official Inquiries Email: ', COLOR_TEXT_DARK, 22),
                        bold('inranktech@gmail.com', COLOR_PRIMARY_DARK, 22)
                      ]
                    }),
                    new Paragraph({
                      spacing: { after: 60 },
                      children: [
                        bold('Official Website: ', COLOR_TEXT_DARK, 22),
                        normal('https://www.inranktech.com', COLOR_PRIMARY, 22)
                      ]
                    }),
                    new Paragraph({
                      spacing: { after: 60 },
                      children: [
                        bold('Client Work Showcase: ', COLOR_TEXT_DARK, 22),
                        normal('https://www.inranktech.com/our-work.html', COLOR_PRIMARY, 22)
                      ]
                    }),
                    new Paragraph({
                      spacing: { after: 120 },
                      children: [
                        bold('Physical Headquarters: ', COLOR_TEXT_DARK, 22),
                        normal('Office No. 11, Shree Bhagwati Suvarna Complex, Pancard Club Rd, Baner Gaon, Baner, Pune, Maharashtra 411045, India')
                      ]
                    }),
                    new Paragraph({
                      spacing: { after: 0 },
                      children: [
                        new TextRun({
                          text: '✓ Formal Signoff: This dossier is prepared, authorized, and signed off by Inrank Technologies for official Justdial onboarding, verified vendor registration, and automated CRM lead distribution.',
                          italic: true,
                          bold: true,
                          font: FONT_FAMILY,
                          size: 19,
                          color: COLOR_PRIMARY_DARK
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        })
      ]
    }
  ]
});

// Write to files
const outPath = path.join(__dirname, 'Inrank_Technologies_Justdial_Business_Profile.docx');
const publicPath = path.join(__dirname, 'public', 'Inrank_Technologies_Justdial_Business_Profile.docx');
const brainPath = 'C:\\Users\\Prasad\\.gemini\\antigravity-ide\\brain\\f4bda5da-34aa-48a7-b6c0-fa0755ba23e6\\Inrank_Technologies_Justdial_Business_Profile.docx';

console.log('Generating Word Document (.docx)...');

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync(outPath, buffer);
  console.log(`✓ Generated Word Document: ${outPath} (${buffer.length} bytes)`);

  try {
    fs.writeFileSync(publicPath, buffer);
    console.log(`✓ Copied to public: ${publicPath}`);
  } catch (e) {
    console.log('Public copy note:', e.message);
  }

  try {
    fs.writeFileSync(brainPath, buffer);
    console.log(`✓ Copied to artifact brain: ${brainPath}`);
  } catch (e) {
    console.log('Brain copy note:', e.message);
  }
}).catch(err => {
  console.error('Error generating docx:', err);
});
