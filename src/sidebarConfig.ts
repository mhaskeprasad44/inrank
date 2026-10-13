export interface SidebarBenchmark {
  label: string;
  value: string;
  sub: string;
}

export interface SidebarAuditCta {
  tag: string;
  title: string;
  description: string;
  checklist: string[];
  buttonText: string;
}

export interface SidebarOutsourcing {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
}

export interface SidebarExperience {
  badge: string;
  name: string;
  role: string;
  years: string;
  description: string;
}

export interface ServiceSidebarData {
  benchmarks: SidebarBenchmark[];
  auditCta: SidebarAuditCta;
  outsourcing: SidebarOutsourcing;
  experience: SidebarExperience;
}

export const SERVICES_SIDEBAR_CONFIG: Record<string, ServiceSidebarData> = {
  "seo": {
    benchmarks: [
      { label: "Organic Traffic Lift", value: "+340%", sub: "Average within 90-120 days" },
      { label: "Top-3 Keyword Placements", value: "82%", sub: "High commercial intent terms" },
      { label: "Core Web Vitals Pass", value: "100%", sub: "Sub-second mobile LCP metrics" }
    ],
    auditCta: {
      tag: "Free Technical SEO Audit",
      title: "Get a Competitor SEO & Traffic Audit",
      description: "Our senior SEO engineers will evaluate your top 3 competitors, scan keyword search gaps and perform a deep crawling audit.",
      checklist: [
        "3-Competitor Traffic Gap Analysis",
        "Technical Indexing & Crawling Scan",
        "Evergreen Topic Cluster Architecture Plan"
      ],
      buttonText: "Request Free SEO Audit"
    },
    outsourcing: {
      badge: "Agency White-Label",
      title: "Outsource SEO Under Strict NDA",
      description: "We execute complete white-label SEO campaigns, technical audits and link outreach for digital marketing agencies worldwide with 100% confidential reporting.",
      buttonText: "Partner as White-Label Agency"
    },
    experience: {
      badge: "Lead Growth Engineer",
      name: "Senior Growth Engineer",
      role: "Senior Growth & SEO Engineer",
      years: "8+ Years",
      description: "Our technical lead brings over 8+ years of hands-on technical software engineering and SEO architecture experience, having directed enterprise search campaigns across India and North America."
    }
  },
  "social-media-marketing": {
    benchmarks: [
      { label: "Average Engagement Lift", value: "4.6x", sub: "Organic community interaction" },
      { label: "Monthly Brand Impressions", value: "2.4M+", sub: "Omnichannel social reach" },
      { label: "Inbound Lead Conversion", value: "+185%", sub: "Profile funnel optimization" }
    ],
    auditCta: {
      tag: "Social Strategy Audit",
      title: "Get a Social Media Competitor Audit",
      description: "We will inspect your current social media creative hooks, engagement drop-off rates and competitor content strategies.",
      checklist: [
        "Competitive Social Share-of-Voice Scan",
        "Creative Hook & Visual Fatigue Review",
        "Omnichannel Social Content Calendar Blueprint"
      ],
      buttonText: "Request Social Media Audit"
    },
    outsourcing: {
      badge: "Agency White-Label",
      title: "Outsource Social Media Management",
      description: "Digital agencies outsource creative production, community engagement workflows and social copywriting to Inrank under confidential white-label agreements.",
      buttonText: "Outsource Social Retainers"
    },
    experience: {
      badge: "Lead Growth Engineer",
      name: "Senior Growth Engineer",
      role: "Senior Growth Engineer",
      years: "8+ Years",
      description: "Over 8+ years engineering data-backed social acquisition funnels, algorithmic content schedules and brand community architectures for scale."
    }
  },
  "influencer-marketing": {
    benchmarks: [
      { label: "Verified Audience Quality", value: "94%+", sub: "Filtered bot-free audiences" },
      { label: "Average Campaign ROAS", value: "4.2x", sub: "Influencer tracking links" },
      { label: "CPA Reduction", value: "-36%", sub: "Compared to standard social ads" }
    ],
    auditCta: {
      tag: "Influencer ROI Audit",
      title: "Get an Influencer Campaign Blueprint",
      description: "We will vet potential creator partnerships, analyze genuine follower demographics and construct an automated performance tracking funnel.",
      checklist: [
        "Creator Audience Authenticity Scan",
        "Brand Affinity & Engagement Metric Test",
        "Contract Negotiation & Whitelisting Plan"
      ],
      buttonText: "Request Influencer Audit"
    },
    outsourcing: {
      badge: "Agency White-Label",
      title: "Outsource Influencer Campaigns",
      description: "We manage creator sourcing, contract negotiation, content approvals and attribution tracking under complete white-label terms for marketing agencies.",
      buttonText: "White-Label Influencer Partner"
    },
    experience: {
      badge: "Lead Growth Engineer",
      name: "Senior Growth Engineer",
      role: "Senior Growth Engineer",
      years: "8+ Years",
      description: "Our lead engineer applies 8+ years of growth engineering experience to model influencer unit economics, UTM tracking systems and creator whitelisting funnels."
    }
  },
  "linkedin-management": {
    benchmarks: [
      { label: "Qualified B2B Pipeline", value: "+240%", sub: "Executive outreach workflows" },
      { label: "Executive Content Reach", value: "520K+", sub: "Quarterly algorithmic views" },
      { label: "Target Account Engagement", value: "78%", sub: "Fortune 500 decision-makers" }
    ],
    auditCta: {
      tag: "LinkedIn B2B Audit",
      title: "Get a LinkedIn Thought Leadership Audit",
      description: "Our B2B growth team will audit your executive profiles, company page positioning and cold connection message response rates.",
      checklist: [
        "Executive Profile SSI Score Diagnosis",
        "High-Intent ICP Target List Mapping",
        "B2B Thought Leadership Publishing Calendar"
      ],
      buttonText: "Request LinkedIn Audit"
    },
    outsourcing: {
      badge: "Agency White-Label",
      title: "Outsource LinkedIn B2B Operations",
      description: "Creative studios and B2B consultancies outsource executive ghostwriting, connection workflows and account-based marketing to Inrank under strict NDAs.",
      buttonText: "White-Label B2B Retainers"
    },
    experience: {
      badge: "Lead Growth Engineer",
      name: "Senior Growth Engineer",
      role: "Senior Growth Engineer",
      years: "8+ Years",
      description: "Bringing 8+ years of technical growth engineering, B2B account-based marketing frameworks and executive thought leadership systems to your brand."
    }
  },
  "pay-per-click-ppc": {
    benchmarks: [
      { label: "Wasted Spend Eliminated", value: "34%", sub: "Negative keyword filtering" },
      { label: "Average Blended ROAS", value: "5.1x", sub: "High-intent buyer funnels" },
      { label: "Cost-Per-Acquisition Drop", value: "-42%", sub: "Landing page parity tuning" }
    ],
    auditCta: {
      tag: "PPC Waste Audit",
      title: "Get a PPC Campaign Spend Audit",
      description: "Our certified PPC engineers will review your multi-channel keyword bidding, match types, ad copy and landing page quality scores.",
      checklist: [
        "Negative Keyword Bleed Detection",
        "Auction Insights & Competitor Bid Map",
        "Search Impression Share Recovery Roadmap"
      ],
      buttonText: "Request PPC Audit"
    },
    outsourcing: {
      badge: "Agency White-Label",
      title: "Outsource PPC Campaign Management",
      description: "Media buying firms and marketing agencies outsource multi-platform PPC campaign setup, negative keyword pruning and reporting under strict NDAs.",
      buttonText: "White-Label PPC Services"
    },
    experience: {
      badge: "Lead Growth Engineer",
      name: "Senior Growth Engineer",
      role: "Senior Growth Engineer",
      years: "8+ Years",
      description: "Our technical lead brings over 8+ years managing multi-million-rupee advertising budgets, conversion tracking architectures and programmatic bid modeling."
    }
  },
  "google-ads": {
    benchmarks: [
      { label: "Average Google Ads ROAS", value: "4.8x", sub: "Search & Performance Max" },
      { label: "Average Quality Score", value: "9.2/10", sub: "Ad & landing page alignment" },
      { label: "Cost Per Click Reduction", value: "-35%", sub: "Negative keyword governance" }
    ],
    auditCta: {
      tag: "Google Ads Audit",
      title: "Get a Google Ads ROI & Spend Audit",
      description: "Our certified Google Ads specialists will audit your Performance Max asset groups, search term logs and conversion tracking accuracy.",
      checklist: [
        "Wasted Ad Spend Leak Locator",
        "High-Intent Buyer Keyword Match Map",
        "Enhanced Conversions & CAPI Verification"
      ],
      buttonText: "Request Google Ads Audit"
    },
    outsourcing: {
      badge: "Agency White-Label",
      title: "Outsource Google Ads Management",
      description: "Digital agencies outsource Google Search, Shopping and Performance Max campaign management to Inrank under strict non-disclosure agreements.",
      buttonText: "White-Label Google Ads Partner"
    },
    experience: {
      badge: "Lead Growth Engineer",
      name: "Senior Growth Engineer",
      role: "Senior Growth Engineer",
      years: "8+ Years",
      description: "Our lead engineer brings 8+ years managing high-volume Google Ads accounts, First-Party tracking pipelines and conversion rate optimization architectures."
    }
  },
  "meta-ads": {
    benchmarks: [
      { label: "Blended E-Commerce ROAS", value: "4.4x", sub: "Advantage+ shopping campaigns" },
      { label: "Meta CAPI Match Quality", value: "9.1/10", sub: "Server-side event enrichment" },
      { label: "Ad Creative Longevity", value: "3.5x", sub: "Iterative creative hook variants" }
    ],
    auditCta: {
      tag: "Meta Ads Audit",
      title: "Get a Meta Ads Funnel Strategy Audit",
      description: "We will check your Meta Pixel health, Conversions API match rate, creative fatigue cycles and Advantage+ audience settings.",
      checklist: [
        "Server-Side CAPI Tracking Audit",
        "Creative Fatigue & Visual Hook Review",
        "Custom & Lookalike Funnel Segmentation"
      ],
      buttonText: "Audit My Meta Ads"
    },
    outsourcing: {
      badge: "Agency White-Label",
      title: "Outsource Facebook & IG Ads",
      description: "Advertising agencies partner with Inrank to run Meta advertising, creative testing pipelines and server-side tracking under 100% white-label NDAs.",
      buttonText: "White-Label Meta Ad Services"
    },
    experience: {
      badge: "Lead Growth Engineer",
      name: "Senior Growth Engineer",
      role: "Senior Growth Engineer",
      years: "8+ Years",
      description: "Bringing over 8+ years of technical advertising experience, server-side tracking engineering and full-funnel media buying leadership."
    }
  },
  "conversion-optimization": {
    benchmarks: [
      { label: "Average Conversion Lift", value: "+68%", sub: "Statistically verified tests" },
      { label: "Checkout Drop-Off Reduction", value: "-45%", sub: "Frictionless form ergonomics" },
      { label: "Mobile Bounce Rate", value: "<28%", sub: "Above-the-fold clarity tuning" }
    ],
    auditCta: {
      tag: "CRO Diagnostic Audit",
      title: "Get a Comprehensive CRO Audit",
      description: "We will inspect your conversion funnels, user heatmaps, mobile form friction points and checkout drop-off triggers.",
      checklist: [
        "Checkout & Form Abandonment Inspection",
        "Heatmap & User Session Friction Scan",
        "Priority 10x ROI A/B Multivariate Blueprint"
      ],
      buttonText: "Request CRO Audit"
    },
    outsourcing: {
      badge: "Agency White-Label",
      title: "Outsource Conversion Rate Optimization",
      description: "We execute heuristic UX audits, A/B multivariate test coding and behavioral analytics reporting for client websites under agency white-label terms.",
      buttonText: "White-Label CRO Retainers"
    },
    experience: {
      badge: "Lead Growth Engineer",
      name: "Senior Growth Engineer",
      role: "Senior Growth Engineer",
      years: "8+ Years",
      description: "Over 8+ years designing high-converting user flows, behavioral analytics pipelines and statistical experimentation frameworks."
    }
  },
  "gmb-optimization": {
    benchmarks: [
      { label: "Google Maps 3-Pack Rank", value: "#1 to #3", sub: "Local proximity searches" },
      { label: "Direct Phone Calls", value: "+210%", sub: "Monthly inbound lead volume" },
      { label: "Direction Request Velocity", value: "+175%", sub: "High-intent local foot traffic" }
    ],
    auditCta: {
      tag: "Local GMB Audit",
      title: "Get a Google My Business & Maps Audit",
      description: "Our local SEO specialists will audit your GMB profile completeness, proximity geo-grid ranking, citation consistency and reviews.",
      checklist: [
        "Google Maps Geo-Grid Ranking Scan",
        "NAP Citation Inconsistency Locator",
        "Review Velocity & Local Schema Roadmap"
      ],
      buttonText: "Request Local GMB Audit"
    },
    outsourcing: {
      badge: "Agency White-Label",
      title: "Outsource Local SEO & GMB Retainers",
      description: "Digital agencies outsource multi-location GMB management, local citation cleanup and geo-grid tracking to Inrank under strict NDAs.",
      buttonText: "White-Label Local SEO"
    },
    experience: {
      badge: "Lead Growth Engineer",
      name: "Senior Growth Engineer",
      role: "Senior Growth Engineer",
      years: "8+ Years",
      description: "Our lead engineer brings 8+ years of hands-on technical SEO, local schema graph development and multi-location map pack dominance architecture."
    }
  },
  "website-development": {
    benchmarks: [
      { label: "Mobile Lighthouse Score", value: "98/100", sub: "Core Web Vitals passed" },
      { label: "Largest Contentful Paint", value: "<1.1s", sub: "Distributed edge CDN delivery" },
      { label: "Organic Lead Conversion", value: "+85%", sub: "Optimized semantic layout" }
    ],
    auditCta: {
      tag: "Free Code & Speed Audit",
      title: "Get a Free Website Speed & Architecture Audit",
      description: "We will analyze your website's Core Web Vitals, mobile responsiveness, server response latency and semantic HTML structure.",
      checklist: [
        "Core Web Vitals Benchmark Report",
        "Mobile Usability & JavaScript Payload Check",
        "Technical SEO & Schema Tag Verification"
      ],
      buttonText: "Book Free Speed Audit"
    },
    outsourcing: {
      badge: "Agency White-Label",
      title: "Outsource Custom Web Development",
      description: "Design studios and marketing agencies outsource custom front-end and back-end web development to Inrank under 100% white-label agreements.",
      buttonText: "White-Label Web Dev Partner"
    },
    experience: {
      badge: "Lead Growth Engineer",
      name: "Senior Growth Engineer",
      role: "Senior Growth Engineer",
      years: "8+ Years",
      description: "Our technical lead brings over 8+ years of full-stack software engineering, modern web framework architecture and sub-second performance optimization."
    }
  },
  "custom-website-design": {
    benchmarks: [
      { label: "Sub-Second Global Render", value: "<850ms", sub: "Zero layout shift (CLS 0.0)" },
      { label: "Visitor Session Duration", value: "+145%", sub: "Compelling visual storytelling" },
      { label: "Direct Lead Form Velocity", value: "+92%", sub: "Engineered UX friction removal" }
    ],
    auditCta: {
      tag: "Custom Design Audit",
      title: "Get a Custom UI/UX & Speed Audit",
      description: "Our design engineers will inspect your brand typography, responsive breakpoints, user flow clarity and Core Web Vitals.",
      checklist: [
        "Brand Identity & UI Cohesion Inspection",
        "Mobile Responsive Breakpoint Review",
        "Core Web Vitals Technical Code Assessment"
      ],
      buttonText: "Request Custom Design Audit"
    },
    outsourcing: {
      badge: "Agency White-Label",
      title: "Outsource Bespoke Web Design",
      description: "Creative agencies outsource custom Figma-to-code development, bespoke typography layouts and performance engineering under strict NDAs.",
      buttonText: "White-Label Custom Design"
    },
    experience: {
      badge: "Lead Growth Engineer",
      name: "Senior Growth Engineer",
      role: "Senior Growth Engineer",
      years: "8+ Years",
      description: "Over 8+ years designing and engineering bespoke digital experiences, brand design systems and high-converting commercial frontends."
    }
  },
  "wordpress-development": {
    benchmarks: [
      { label: "Mobile Google Speed Score", value: "95+", sub: "Zero slow plugin bloat" },
      { label: "Database Query Latency", value: "<45ms", sub: "Indexed clean SQL tables" },
      { label: "Admin Security Hardening", value: "100%", sub: "WAF & brute-force protected" }
    ],
    auditCta: {
      tag: "WordPress Health Audit",
      title: "Get a WordPress Speed & Security Review",
      description: "We will audit your loaded plugins, page builder overhead, database query bottlenecks and server caching configurations.",
      checklist: [
        "INP & LCP Performance Bottleneck Scan",
        "Active Plugin Conflict & Weight Audit",
        "95+ Mobile Score Setup Roadmap"
      ],
      buttonText: "Request WordPress Review"
    },
    outsourcing: {
      badge: "Agency White-Label",
      title: "Outsource WordPress Development",
      description: "We build custom Gutenberg blocks, lightweight WordPress themes and headless setups for digital agencies under confidential white-label terms.",
      buttonText: "White-Label WordPress Team"
    },
    experience: {
      badge: "Lead Growth Engineer",
      name: "Senior Growth Engineer",
      role: "Senior Growth Engineer",
      years: "8+ Years",
      description: "Our technical lead brings 8+ years developing custom WordPress architectures, enterprise theme engineering and sub-second caching systems."
    }
  },
  "e-commerce-development": {
    benchmarks: [
      { label: "Cart Abandonment Drop", value: "-34%", sub: "Streamlined single-page checkout" },
      { label: "Average Order Value (AOV)", value: "+28%", sub: "Engineered one-click upsells" },
      { label: "Product Page Mobile Speed", value: "<1.2s", sub: "Next-gen WebP/AVIF media" }
    ],
    auditCta: {
      tag: "E-Commerce Funnel Audit",
      title: "Get an E-Commerce Conversion & Speed Audit",
      description: "We will inspect your product catalog taxonomy, checkout friction points, mobile loading speeds and server-side conversion pixels.",
      checklist: [
        "Checkout Friction & Form Speed Diagnosis",
        "Product Schema & Rich Snippets Inspection",
        "High-Converting Upsell & Cart Architecture"
      ],
      buttonText: "Request E-Commerce Audit"
    },
    outsourcing: {
      badge: "Agency White-Label",
      title: "Outsource E-Commerce Store Builds",
      description: "Marketing consultancies outsource complex e-commerce builds, ERP integrations and custom checkout funnels to Inrank under strict NDAs.",
      buttonText: "White-Label E-Commerce Dev"
    },
    experience: {
      badge: "Lead Growth Engineer",
      name: "Senior Growth Engineer",
      role: "Senior Growth Engineer",
      years: "8+ Years",
      description: "Over 8+ years engineering high-volume e-commerce storefronts, payment gateway integrations and frictionless checkout experiences."
    }
  },
  "shopify-development": {
    benchmarks: [
      { label: "Shopify Store Speed Score", value: "92+", sub: "Pruned unneeded app scripts" },
      { label: "Checkout Conversion Rate", value: "4.8%", sub: "Shopify Extensibility custom blocks" },
      { label: "Organic Search Revenue", value: "+160%", sub: "Structured Product JSON-LD graphs" }
    ],
    auditCta: {
      tag: "Shopify Store Speed Audit",
      title: "Get a Shopify Speed & Liquid Code Review",
      description: "Let our Shopify certified developers audit your theme.liquid scripts, third-party app payloads and checkout extensibility setups.",
      checklist: [
        "Shopify App Load Weight & Orphan Script Scan",
        "Mobile Cart & Checkout Performance Check",
        "Custom Liquid Code & Schema Review"
      ],
      buttonText: "Book Shopify Speed Audit"
    },
    outsourcing: {
      badge: "Agency White-Label",
      title: "Outsource Shopify Theme Development",
      description: "Creative agencies partner with Inrank to build bespoke Shopify Online Store 2.0 themes, app blocks and migrations under white-label NDAs.",
      buttonText: "White-Label Shopify Team"
    },
    experience: {
      badge: "Lead Growth Engineer",
      name: "Senior Growth Engineer",
      role: "Senior Growth Engineer",
      years: "8+ Years",
      description: "Our technical lead brings over 8+ years of hands-on Shopify Liquid engineering, Hydrogen headless commerce architectures and store speed tuning."
    }
  },
  "website-maintenance": {
    benchmarks: [
      { label: "Guaranteed Uptime SLA", value: "99.99%", sub: "Real-time edge health monitoring" },
      { label: "Incident Resolution SLA", value: "<30m", sub: "Direct senior engineer response" },
      { label: "Automated Offsite Backups", value: "Daily", sub: "Encrypted multi-cloud disaster storage" }
    ],
    auditCta: {
      tag: "Website Health Audit",
      title: "Get a Website Security & Uptime Audit",
      description: "We will perform a forensic audit of your website's security vulnerabilities, plugin update risks, backup integrity and server logs.",
      checklist: [
        "Security Vulnerability & Malware Scan",
        "Automated Backup & Disaster Recovery Test",
        "Database Bloat & Slow Query Inspection"
      ],
      buttonText: "Request Maintenance Audit"
    },
    outsourcing: {
      badge: "Agency White-Label",
      title: "Outsource Website Maintenance Retainers",
      description: "Digital agencies deliver 24/7 maintenance retainers to their clients using Inrank's white-label DevOps and technical support infrastructure.",
      buttonText: "White-Label Maintenance Partner"
    },
    experience: {
      badge: "Lead Growth Engineer",
      name: "Senior Growth Engineer",
      role: "Senior Growth Engineer",
      years: "8+ Years",
      description: "Over 8+ years managing mission-critical enterprise web infrastructure, automated CI/CD deployment pipelines and disaster recovery drills."
    }
  },
  "mobile-app-development": {
    benchmarks: [
      { label: "Shared Codebase Efficiency", value: "92%+", sub: "React Native & Flutter builds" },
      { label: "Native 60 FPS Fluidity", value: "60 FPS", sub: "Hardware-accelerated rendering" },
      { label: "30-Day App User Retention", value: "+74%", sub: "Offline-first data sync architecture" }
    ],
    auditCta: {
      tag: "Mobile App Architecture Audit",
      title: "Get a Mobile App Tech & UX Blueprint",
      description: "Our mobile engineers will review your cross-platform framework feasibility, API payload structures and offline data persistence.",
      checklist: [
        "Cross-Platform Architecture Evaluation",
        "Offline-First Data Sync & Storage Plan",
        "Biometric Security & API Latency Check"
      ],
      buttonText: "Request Mobile App Audit"
    },
    outsourcing: {
      badge: "Agency White-Label",
      title: "Outsource Mobile App Engineering",
      description: "Digital agencies expand their service catalog to include enterprise iOS and Android mobile app development with Inrank fulfilling under strict NDAs.",
      buttonText: "White-Label Mobile App Team"
    },
    experience: {
      badge: "Lead Growth Engineer",
      name: "Senior Growth Engineer",
      role: "Senior Growth Engineer",
      years: "8+ Years",
      description: "Our technical lead brings over 8+ years architecting mobile applications, scalable cloud API gateways and high-retention consumer digital products."
    }
  },
  "landing-pages": {
    benchmarks: [
      { label: "Average Conversion Rate", value: "8.4%+", sub: "Targeted single-objective flow" },
      { label: "Mobile Page Load Speed", value: "<900ms", sub: "High Google Ads Quality Score" },
      { label: "Cost Per Lead Reduction", value: "-48%", sub: "Dynamic keyword intent matching" }
    ],
    auditCta: {
      tag: "Landing Page CRO Audit",
      title: "Get a Landing Page Strategy & Speed Audit",
      description: "We will review your target buyer persona, headline value proposition, mobile form friction points and ad click message alignment.",
      checklist: [
        "Ad-to-Page Message Match Inspection",
        "Hero Section Above-the-Fold Clarity Test",
        "Interactive Multi-Step Lead Form Blueprint"
      ],
      buttonText: "Analyze My Landing Page"
    },
    outsourcing: {
      badge: "Agency White-Label",
      title: "Outsource High-Converting Landing Pages",
      description: "Media buying agencies and PPC firms outsource bespoke, custom-coded high-speed landing pages to Inrank under confidential white-label agreements.",
      buttonText: "White-Label Landing Page Team"
    },
    experience: {
      badge: "Lead Growth Engineer",
      name: "Senior Growth Engineer",
      role: "Senior Growth Engineer",
      years: "8+ Years",
      description: "Over 8+ years designing high-converting landing page funnels, neuromarketing copy architectures and sub-second front-end experiences."
    }
  },
  "ai-seo-agency": {
    benchmarks: [
      { label: "AI Overview Citation Rate", value: "78%+", sub: "Top source in Google AI answers" },
      { label: "Knowledge Graph Entities", value: "40+", sub: "Connected linked data nodes" },
      { label: "Hallucination Risk", value: "0%", sub: "Verified factual schema consensus" }
    ],
    auditCta: {
      tag: "AI SEO Diagnostic Audit",
      title: "Get an AI Search & Knowledge Graph Audit",
      description: "Our AI search engineers will evaluate your digital entity clarity across Wikidata, test Perplexity citation frequency and audit JSON-LD schemas.",
      checklist: [
        "Google AI Overviews & Perplexity Scan",
        "Entity Knowledge Graph Reconciliation",
        "Answer Engine (AEO) 40-Word Definition Plan"
      ],
      buttonText: "Request AI SEO Audit"
    },
    outsourcing: {
      badge: "Agency White-Label",
      title: "Outsource AI SEO & GEO Solutions",
      description: "SEO agencies partner with Inrank to deliver cutting-edge Generative Engine Optimization, Knowledge Graph modeling and AI search citations under NDAs.",
      buttonText: "White-Label AI SEO Partner"
    },
    experience: {
      badge: "Lead Growth Engineer",
      name: "Senior Growth Engineer",
      role: "Senior Growth Engineer",
      years: "8+ Years",
      description: "Our lead engineer applies 8+ years of technical software engineering, data science and modern search architecture to dominate generative AI search."
    }
  },
  "geo-seo-agency": {
    benchmarks: [
      { label: "Perplexity Citation Share", value: "85%+", sub: "Numbered primary source badge" },
      { label: "LLM Topical Salience", value: "9.4/10", sub: "Mathematical semantic proximity" },
      { label: "Commercial Intent AI Traffic", value: "+215%", sub: "Referrals from ChatGPT & Perplexity" }
    ],
    auditCta: {
      tag: "GEO Strategy Audit",
      title: "Get a Generative Engine Optimization Audit",
      description: "We will inspect how Perplexity, ChatGPT Search and Claude summarize your brand, evaluating citation frequency and factual authority.",
      checklist: [
        "Multi-LLM Brand Citation Frequency Scan",
        "Semantic Vector Embedding Gap Analysis",
        "Quotation & Statistical Credibility Blueprint"
      ],
      buttonText: "Request GEO Strategy Audit"
    },
    outsourcing: {
      badge: "Agency White-Label",
      title: "Outsource Generative Engine Optimization",
      description: "Digital agencies and PR firms outsource LLM citation engineering, semantic entity modeling and GEO strategies to Inrank under strict NDAs.",
      buttonText: "White-Label GEO Services"
    },
    experience: {
      badge: "Lead Growth Engineer",
      name: "Senior Growth Engineer",
      role: "Senior Growth Engineer",
      years: "8+ Years",
      description: "Over 8+ years engineering algorithmic content frameworks, structured data pipelines and generative artificial intelligence search systems."
    }
  },
  "ai-ranking-citations": {
    benchmarks: [
      { label: "Entity Confidence Score", value: "98/100", sub: "Verified linked data consensus" },
      { label: "Wikidata Node Validation", value: "100%", sub: "Direct sameAs property mapping" },
      { label: "Vector Search Proximity", value: "Top 3%", sub: "High cosine similarity score" }
    ],
    auditCta: {
      tag: "Entity Authority Audit",
      title: "Get a Digital Entity & Citation Audit",
      description: "We will audit your brand consistency across public linked data repositories, Wikidata statements and Google Knowledge Graph nodes.",
      checklist: [
        "Wikidata & Knowledge Base Verification",
        "Nested Organization & Person Schema Check",
        "Digital Entity Consensus & PR Mapping"
      ],
      buttonText: "Request Entity Audit"
    },
    outsourcing: {
      badge: "Agency White-Label",
      title: "Outsource Knowledge Graph Engineering",
      description: "We build linked data architectures, deploy advanced nested JSON-LD and verify public entities for partner agencies under complete NDAs.",
      buttonText: "White-Label Entity Partner"
    },
    experience: {
      badge: "Lead Growth Engineer",
      name: "Senior Growth Engineer",
      role: "Senior Growth Engineer",
      years: "8+ Years",
      description: "Our technical lead brings over 8+ years developing linked data ontologies, enterprise Knowledge Graphs and semantic vector search integrations."
    }
  },
  "brand-name": {
    benchmarks: [
      { label: "Trademark Clearance Rate", value: "100%", sub: "Multi-jurisdiction search passed" },
      { label: "Linguistic Neutrality", value: "12+ Dialects", sub: "Zero cultural or slang conflicts" },
      { label: "Spontaneous Recall Lift", value: "3.2x", sub: "Phonosemantic acoustic design" }
    ],
    auditCta: {
      tag: "Brand Naming Assessment",
      title: "Get a Brand Naming & Phonetics Review",
      description: "Our linguistic branding team will evaluate your candidate brand names for acoustic memorability, phonosemantics and preliminary trademark risks.",
      checklist: [
        "Phonosemantic Sound Symbolism Analysis",
        "Preliminary Trademark Registry Conflict Scan",
        "Global Linguistic & Cultural Neutrality Check"
      ],
      buttonText: "Request Naming Assessment"
    },
    outsourcing: {
      badge: "Agency White-Label",
      title: "Outsource Brand Naming Engagements",
      description: "Design studios and branding agencies partner with Inrank to deliver comprehensive naming, phonosemantic research and trademark screening under NDAs.",
      buttonText: "White-Label Naming Partner"
    },
    experience: {
      badge: "Lead Growth Engineer",
      name: "Senior Growth Engineer",
      role: "Senior Growth Engineer",
      years: "8+ Years",
      description: "Over 8+ years directing corporate naming strategies, linguistic identity architectures and digital domain acquisition frameworks."
    }
  },
  "logo-design": {
    benchmarks: [
      { label: "Vector Precision Fidelity", value: "Infinite", sub: "Clean SVG and EPS Bezier curves" },
      { label: "Brand Recognition Speed", value: "<50ms", sub: "Gestalt silhouette memorability" },
      { label: "Responsive Layout Variants", value: "4 Formats", sub: "Horizontal, vertical, icon & favicon" }
    ],
    auditCta: {
      tag: "Visual Identity Audit",
      title: "Get a Logo Scalability & Brand System Review",
      description: "We will evaluate your current logo's geometric balance, responsive scalability, color contrast standards and vector cleanliness.",
      checklist: [
        "Gestalt Perceptual & Silhouette Clarity Test",
        "Mobile & Favicon Micro-Scalability Check",
        "Pantone & WCAG 2.2 Contrast Ratio Audit"
      ],
      buttonText: "Request Visual Identity Audit"
    },
    outsourcing: {
      badge: "Agency White-Label",
      title: "Outsource Enterprise Logo Design",
      description: "We design iconic vector marks, comprehensive 40-page corporate brand manuals and responsive identity systems for agencies under strict NDAs.",
      buttonText: "White-Label Logo Partner"
    },
    experience: {
      badge: "Lead Growth Engineer",
      name: "Senior Growth Engineer",
      role: "Senior Growth Engineer",
      years: "8+ Years",
      description: "Our lead engineer brings 8+ years of hands-on experience engineering corporate visual identities, digital product design systems and brand governance manuals."
    }
  },
  "business-card-design": {
    benchmarks: [
      { label: "Executive Paper Substance", value: "600 GSM+", sub: "Heavy cotton and duplex boards" },
      { label: "Color Matching Accuracy", value: "100%", sub: "Formula Pantone spot inks" },
      { label: "Smart NFC Integration", value: "Instant", sub: "Tap-to-save digital profile" }
    ],
    auditCta: {
      tag: "Tactile Print Review",
      title: "Get a Luxury Print & Stationery Audit",
      description: "Our print engineers will review your business card layout ergonomics, typography weights, bleed settings and paper substrate suitability.",
      checklist: [
        "Substrate Weight & Haptic Tactility Plan",
        "Finishing Die Review (Debossing & Foil)",
        "Prepress Vector & Color Separation Check"
      ],
      buttonText: "Request Print Architecture Review"
    },
    outsourcing: {
      badge: "Agency White-Label",
      title: "Outsource Luxury Print Design",
      description: "Creative studios and marketing consultancies outsource high-end stationery engineering, vector prepress and print house coordination under NDAs.",
      buttonText: "White-Label Print Solutions"
    },
    experience: {
      badge: "Lead Growth Engineer",
      name: "Senior Growth Engineer",
      role: "Senior Growth Engineer",
      years: "8+ Years",
      description: "Bringing over 8+ years of print production architecture, prepress color separation and tactile luxury collateral engineering."
    }
  },
  "letterhead-design": {
    benchmarks: [
      { label: "Format Standardization", value: "A4 & Letter", sub: "Strict ISO baseline grid" },
      { label: "Template Compatibility", value: "100%", sub: "Locked Word and Google Docs" },
      { label: "Statutory Compliance", value: "Verified", sub: "Mandatory corporate disclosures" }
    ],
    auditCta: {
      tag: "Stationery System Audit",
      title: "Get a Corporate Document Governance Review",
      description: "We will inspect your formal document margins, typography hierarchy, template protections and statutory corporate disclosures.",
      checklist: [
        "Print Margin & Laser Printer Grip Check",
        "Locked Digital Template Integrity Test",
        "Statutory Entity Disclosure Compliance Scan"
      ],
      buttonText: "Request Stationery Audit"
    },
    outsourcing: {
      badge: "Agency White-Label",
      title: "Outsource Corporate Stationery Systems",
      description: "We design complete executive stationery suites, build locked Microsoft Word templates and code automated PDF generation templates under NDAs.",
      buttonText: "White-Label Stationery Partner"
    },
    experience: {
      badge: "Lead Growth Engineer",
      name: "Senior Growth Engineer",
      role: "Senior Growth Engineer",
      years: "8+ Years",
      description: "Over 8+ years architecting corporate document governance, automated PDF generation pipelines and corporate identity guidelines."
    }
  },
  "brochure-designing": {
    benchmarks: [
      { label: "Executive Desk Retention", value: "4.5x", sub: "Tactile print vs digital email" },
      { label: "Prepress Print Accuracy", value: "300 DPI", sub: "Flawless CMYK color management" },
      { label: "Digital Edition Weight", value: "<4.5 MB", sub: "Interactive fast-loading PDF" }
    ],
    auditCta: {
      tag: "Brochure Architecture Audit",
      title: "Get a Corporate Brochure & Sales Deck Review",
      description: "Our editorial designers will analyze your brochure's narrative arc, fold dimensional compensations, typography and call to action.",
      checklist: [
        "Buyer Journey Narrative Structure Test",
        "Mechanical Fold Dimensional Clearance Check",
        "Infographic Data Visualization & Prepress Audit"
      ],
      buttonText: "Request Brochure Review"
    },
    outsourcing: {
      badge: "Agency White-Label",
      title: "Outsource Corporate Brochure Design",
      description: "Advertising agencies and marketing consultancies outsource multi-page corporate brochures, annual reports and sales decks to Inrank under NDAs.",
      buttonText: "White-Label Brochure Team"
    },
    experience: {
      badge: "Lead Growth Engineer",
      name: "Senior Growth Engineer",
      role: "Senior Growth Engineer",
      years: "8+ Years",
      description: "Our technical lead brings over 8+ years directing editorial design layouts, complex print finishing specifications and interactive sales collateral."
    }
  },
  "content-marketing": {
    benchmarks: [
      { label: "Information Gain Score", value: "High", sub: "Original empirical research data" },
      { label: "Organic Search Leads", value: "+280%", sub: "Bottom-of-funnel conversion guides" },
      { label: "Average Time on Page", value: "4m 42s", sub: "Deep technical engagement" }
    ],
    auditCta: {
      tag: "Content Strategy Audit",
      title: "Get a Content Authority & Keyword Gap Audit",
      description: "Our editorial engineers will audit your existing blog content, evaluate information gain scores, map topical clusters and identify lead leaks.",
      checklist: [
        "Information Gain & Content Decay Scan",
        "Semantic Topic Cluster & Pillar Hierarchy",
        "Bottom-of-Funnel Conversion Path Blueprint"
      ],
      buttonText: "Request Content Audit"
    },
    outsourcing: {
      badge: "Agency White-Label",
      title: "Outsource Technical Content Marketing",
      description: "Digital agencies and SEO firms outsource in-depth technical guides, whitepapers and content repurposing to Inrank under strict NDAs.",
      buttonText: "White-Label Content Retainers"
    },
    experience: {
      badge: "Lead Growth Engineer",
      name: "Senior Growth Engineer",
      role: "Senior Growth Engineer",
      years: "8+ Years",
      description: "Over 8+ years developing authoritative inbound content engines, programmatic SEO architectures and full-funnel editorial operations."
    }
  },
  "email-marketing": {
    benchmarks: [
      { label: "Primary Inbox Placement", value: "99.4%", sub: "DMARC & 2048-bit DKIM aligned" },
      { label: "Average Email Open Rate", value: "42.8%", sub: "Behavioral event-driven triggers" },
      { label: "Lifecycle Revenue Share", value: "32%+", sub: "Automated cart and loyalty flows" }
    ],
    auditCta: {
      tag: "Email Deliverability Audit",
      title: "Get an Email Deliverability & Lifecycle Audit",
      description: "We will inspect your SPF, DKIM, DMARC and BIMI records, analyze spam complaint rates and review your behavioral automation workflows.",
      checklist: [
        "DNS Authentication & Deliverability Scan",
        "Subscriber List Hygiene & Sunset Plan",
        "Behavioral Lifecycle Automation Blueprint"
      ],
      buttonText: "Request Email Audit"
    },
    outsourcing: {
      badge: "Agency White-Label",
      title: "Outsource Email & Lifecycle Automation",
      description: "E-commerce consultancies and agencies outsource Klaviyo, HubSpot and ActiveCampaign lifecycle automation to Inrank under white-label NDAs.",
      buttonText: "White-Label Email Partner"
    },
    experience: {
      badge: "Lead Growth Engineer",
      name: "Senior Growth Engineer",
      role: "Senior Growth Engineer",
      years: "8+ Years",
      description: "Our technical lead brings over 8+ years engineering email deliverability infrastructure, behavioral customer journeys and retention revenue systems."
    }
  },
  "sms-marketing": {
    benchmarks: [
      { label: "Message Open Rate", value: "98.2%", sub: "Read within 180 seconds" },
      { label: "Click-Through Rate", value: "19.5%", sub: "Branded short URL redirects" },
      { label: "Abandoned Cart Recovery", value: "24%+", sub: "Sub-15-minute trigger automation" }
    ],
    auditCta: {
      tag: "SMS Funnel Audit",
      title: "Get an SMS Compliance & Conversion Review",
      description: "Our mobile messaging team will audit your 10DLC or TRAI DLT registration status, opt-in consent capture mechanisms and automated trigger funnels.",
      checklist: [
        "Carrier 10DLC / TRAI Regulatory Compliance Check",
        "Timestamped Opt-In & Opt-Out Audit",
        "Abandoned Cart & Flash Sale SMS Blueprint"
      ],
      buttonText: "Request SMS Audit"
    },
    outsourcing: {
      badge: "Agency White-Label",
      title: "Outsource Omnichannel SMS Messaging",
      description: "We manage carrier compliance filings, automated mobile SMS funnels and two-way conversational bots for agencies under white-label terms.",
      buttonText: "White-Label SMS Partner"
    },
    experience: {
      badge: "Lead Growth Engineer",
      name: "Senior Growth Engineer",
      role: "Senior Growth Engineer",
      years: "8+ Years",
      description: "Over 8+ years developing telecom API webhook integrations, automated messaging pipelines and high-converting mobile commerce funnels."
    }
  }
};

export function getServiceSidebarData(serviceId: string): ServiceSidebarData {
  return SERVICES_SIDEBAR_CONFIG[serviceId] || SERVICES_SIDEBAR_CONFIG["seo"];
}
