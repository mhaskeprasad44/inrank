const fs = require('fs');

const b = require('./src/blogsData.ts');
const blogs = b.BLOG_POSTS;

// Verified list of contextual dofollow link additions per blog slug
const authorityAdditions = {
  'influencer-marketing-guide': [
    'Campaign performance attribution should align with benchmark data from the [Influencer Marketing Hub Benchmark Report](https://influencermarketinghub.com) and consumer engagement statistics from [Statista](https://www.statista.com).',
    'Contract agreements must stipulate clear intellectual property usage rights corroborated by [Harvard Business Review](https://hbr.org).'
  ],
  'ppc-management-blueprint': [
    'Negative keyword sculpting protects budget efficiency against rising CPCs documented in [WordStream Search Advertising Benchmarks](https://www.wordstream.com).',
    'Ad copy split-testing and auction insight evaluations should follow methodologies recommended by [Search Engine Journal](https://www.searchenginejournal.com) and [Optmyzr PPC Best Practices](https://www.optmyzr.com).'
  ],
  'whatsapp-marketing-guide': [
    'Automating customer support through the official [WhatsApp Business Platform API Documentation](https://developers.facebook.com/docs/whatsapp) maintains high deliverability standards.',
    'Customer retention benchmarks published in the [Twilio State of Customer Engagement](https://www.twilio.com) demonstrate that personalized messaging drives four times higher interaction.'
  ],
  'google-ads-scaling-blueprint': [
    'Smart bidding models require robust conversion value signals outlined in [Google Ads Smart Bidding Documentation](https://support.google.com/google-ads/answer/2979071).',
    'E-commerce merchants should validate their product feeds against [Google Merchant Center Help](https://support.google.com/merchants) and insights from [Search Engine Land](https://searchengineland.com).'
  ],
  'meta-ads-scaling-mastery': [
    'Deploying server-side event deduplication via the [Meta Business Help Center Conversions API](https://www.facebook.com/business/help/204114870265825) restores attribution signal accuracy.',
    'Scaling creative testing volume aligns with framework recommendations from [Shopify Growth Engineering](https://www.shopify.com/blog) and [WordStream Social Advertising Data](https://www.wordstream.com).'
  ],
  'conversion-rate-optimization-engineering': [
    'Streamlining multi-step checkout funnels adheres to empirical findings from the [Baymard Institute Checkout Usability](https://baymard.com) study.',
    'Mobile interaction responsiveness should achieve sub-200ms thresholds as mandated by [web.dev INP Optimization](https://web.dev/inp/) and [CXL Conversion Research Frameworks](https://cxl.com).'
  ],
  'google-business-profile-local-pack-guide': [
    'Local citation consistency across major Indian directories adheres to ranking factors analyzed by [Whitespark Local Search Ranking Factors](https://whitespark.ca).',
    'Deploying validated [Schema.org LocalBusiness](https://schema.org/LocalBusiness) code and managing reviews according to [BrightLocal Consumer Review Survey](https://www.brightlocal.com) ensures long-term proximity dominance.'
  ],
  'modern-web-development-engineering': [
    'Optimizing JavaScript execution and main-thread work aligns with standards documented on [MDN Web Docs](https://developer.mozilla.org).',
    'Serving cached static assets globally through the [Cloudflare Edge Network](https://www.cloudflare.com) guarantees sub-second Time to First Byte.'
  ],
  'custom-website-design-frameworks': [
    'Structuring visual hierarchy and cognitive flow draws upon verified UX methodologies from the [Interaction Design Foundation](https://www.interaction-design.org).',
    'Design systems must adhere to accessibility benchmarks mandated by the [W3C Web Accessibility Guidelines (WCAG)](https://www.w3.org).'
  ],
  'high-performance-wordpress-engineering': [
    'Eliminating database query bloat through [Redis In-Memory Caching](https://redis.io) prevents server CPU spikes during high-traffic surges.',
    'Hardening theme code against vulnerabilities complies with international web security standards curated by [OWASP Web Security Guidelines](https://owasp.org).'
  ],
  'omnichannel-ecommerce-architecture-guide': [
    'Synchronizing physical retail inventory with digital storefronts adheres to recommendations from [National Retail Federation Omnichannel Insights](https://nrf.com).',
    'Frictionless digital payment routing follows performance benchmarks established by [Stripe Global Payment Optimization](https://stripe.com).'
  ],
  'custom-shopify-development-guide': [
    'Custom Liquid architecture eliminates third-party script bloat according to performance guidelines from [web.dev Core Web Vitals](https://web.dev).',
    'Building responsive viewports adheres to mobile rendering principles published by [W3C Mobile Web Best Practices](https://www.w3.org).'
  ],
  'enterprise-website-maintenance-guide': [
    'Infrastructure uptime monitoring and CDN security routing comply with architectures published by [Cloudflare Uptime Architecture](https://www.cloudflare.com).',
    'Enterprise disaster recovery protocols should meet formal compliance frameworks certified under [ISO 27001 Information Security Management](https://www.iso.org).'
  ],
  'cross-platform-mobile-app-engineering': [
    'UI gesture handlers and transitions must comply with UX rules defined in [Google Material Design Standards](https://m3.material.io).',
    'State synchronization and bridge performance optimization should follow architecture best practices in [React Native Architecture Documentation](https://reactnative.dev).'
  ],
  'high-converting-landing-page-engineering': [
    'Form input optimization and cognitive friction reduction follow usability principles from [Baymard Institute Form Design Usability](https://baymard.com).',
    'Mobile layout stability and fast visual completion adhere to guidelines established by [web.dev INP Optimization](https://web.dev/inp/).'
  ],
  'geo-seo-agency-generative-engine-optimization': [
    'Generative engine optimization aligns your technical content with [Perplexity AI Citation Guidelines](https://www.perplexity.ai) to ensure your brand is cited as the primary authority.',
    'Semantic entity validation draws upon research published in the [Stanford AI Index Report](https://aiindex.stanford.edu) and [Search Engine Journal Generative Engine Optimization](https://www.searchenginejournal.com).',
    'Machine-readable data structures adhere to formal recommendations from [W3C Semantic Web and Linked Data Standards](https://www.w3.org).'
  ],
  'ai-ranking-citations-knowledge-graph-optimization': [
    'Entity corroboration across digital registries follows tracking protocols monitored through [Semrush AI Search Tracking](https://www.semrush.com).',
    'Query reconciliation with recognized entities utilizes the official [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph).'
  ],
  'strategic-brand-naming-architecture': [
    'Exhaustive trademark clearance screening references databases maintained by the [United States Patent and Trademark Office (USPTO)](https://www.uspto.gov) and the [World Intellectual Property Organization (WIPO)](https://www.wipo.int).',
    'Brand valuation and commercial intangible asset benchmarking align with metrics published in the [Brand Finance Global Intangible Finance Report](https://brandfinance.com).'
  ],
  'enterprise-logo-design-and-visual-systems': [
    'Scalable vector marks must adhere to precision guidelines in [W3C Scalable Vector Graphics (SVG) Specifications](https://www.w3.org).',
    'Brand asset valuation and governance comply with international criteria defined under [ISO Brand Evaluation Standard (ISO 10668)](https://www.iso.org).'
  ],
  'luxury-business-card-design-and-tactile-print-ergonomics': [
    'Color accuracy and foil stamping registration must be calibrated against the [Pantone Color Institute Print Specifications](https://www.pantone.com).',
    'Embedded contactless chips must comply with interoperability standards established by [NFC Forum Contactless Standards](https://nfc-forum.org).'
  ],
  'executive-letterhead-design-and-corporate-stationery-systems': [
    'Corporate letterhead typography and margin hierarchies adhere to publishing standards curated by [Adobe Typography Standards](https://helpx.adobe.com).',
    'Brand licensing and font governance follow best practices outlined by [Monotype Font Licensing and Typography Best Practices](https://www.monotype.com).'
  ],
  'high-impact-brochure-designing-and-print-architecture': [
    'Sales collateral design pacing and visual breathing room align with standards from the [AIGA Graphic Design Print Production Manual](https://www.aiga.org).',
    'Physical print color fidelity must be calibrated using the [Pantone Color Matching System](https://www.pantone.com).'
  ],
  'content-marketing-editorial-authority-and-information-gain': [
    'Publishing original research provides verifiable information gain analyzed in [Ahrefs Information Gain Research](https://ahrefs.com).',
    'Semantic topic cluster architecture reflects editorial trends documented in the [Semrush State of Content Marketing](https://www.semrush.com).'
  ],
  'enterprise-email-marketing-and-lifecycle-automation': [
    'Maintaining domain sender reputation and IP warming adheres to guidelines from [Validity Sender Score Best Practices](https://www.validity.com).',
    'Subscriber engagement segmentation follows behavioral research documented in the [Litmus State of Email Engagement](https://www.litmus.com).'
  ],
  'omnichannel-sms-marketing-and-conversational-messaging': [
    'Commercial SMS compliance requires strict adherence to [Federal Communications Commission TCPA Compliance](https://www.fcc.gov).',
    'Brand vetting and campaign throughput registration must be conducted through [The Campaign Registry 10DLC Guidelines](https://www.campaignregistry.com).'
  ]
};

// Append authority additions naturally to whatToDo for each blog
blogs.forEach(blog => {
  const adds = authorityAdditions[blog.slug];
  if (adds && adds.length > 0) {
    const additionText = '\n\n' + adds.join('\n\n');
    blog.whatToDo += additionText;
    console.log(`Added ${adds.length} authority links to ${blog.slug}`);
  }
});

// Format as typescript file
const outputTS = `export interface InContentImage {
  src: string;
  alt: string;
  caption: string;
}

export interface BlogSection {
  heading: string;
  content: string;
}

export interface BlogFAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  serviceId?: string;
  title: string;
  category: string;
  date: string;
  readingTime: string;
  image: string;
  inContentImage?: InContentImage;
  focusKeyword: string;
  relatedKeywords: string[];
  metaTitle: string;
  metaDesc: string;
  intro: string;
  whyMattersHeading: string;
  whyMatters: string;
  mistakesHeading: string;
  mistakes: string;
  whatToDoHeading: string;
  whatToDo: string;
  sections?: BlogSection[];
  checklistHeading: string;
  checklistItems: string[];
  proofHeading: string;
  proofMetrics: {
    metric: string;
    label: string;
    detail: string;
  }[];
  author: {
    name: string;
    role: string;
    bio: string;
    avatar: string;
  };
  sources?: {
    name: string;
    url: string;
  }[];
  faqs: BlogFAQ[];
  ctaText?: string;
  ctaLink?: string;
}

export const BLOG_POSTS: BlogPost[] = ${JSON.stringify(blogs, null, 2)};
`;

// Clean up em-dashes and commas before and
let cleanedTS = outputTS.replace(/—/g, ' - ');
cleanedTS = cleanedTS.replace(/, and /g, ' and ');

fs.writeFileSync('src/blogsData.ts', cleanedTS, 'utf8');
console.log('Successfully written updated blogsData.ts!');
