export interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  iconName: string;
  span?: boolean;
}

export interface ReasonItem {
  title: string;
  desc: string;
  iconName: string;
}

export interface ProcessStep {
  n: string;
  title: string;
  desc: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  line: string;
  iconName: string;
}

export interface ResultItem {
  stat: string;
  label: string;
  caption: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar: string;
  initials?: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "website-development",
    title: "Website Development",
    desc: "Fast, SEO-ready websites engineered for conversion rather than just looks.",
    iconName: "CodeXml",
    span: true,
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    desc: "High-converting pages built for paid traffic, A/B tested for ROI.",
    iconName: "LayoutTemplate",
  },
  {
    id: "google-ads",
    title: "Google Ads",
    desc: "Search, Performance Max & YouTube campaigns that pay for themselves.",
    iconName: "Target",
  },
  {
    id: "meta-ads",
    title: "Meta Ads",
    desc: "Facebook & Instagram funnels that scale without burning budget.",
    iconName: "Megaphone",
  },
  {
    id: "seo",
    title: "SEO Solutions",
    desc: "Technical, on-page & Google local pack SEO to rank where active buyers search.",
    iconName: "Search",
    span: true,
  },
  {
    id: "gmb-optimization",
    title: "Google My Business / GMB",
    desc: "Google Maps 3-Pack ranking, review velocity, geo-tagged posts & citation authority to drive local calls.",
    iconName: "MapPin",
  },
  {
    id: "conversion-optimization",
    title: "Conversion Optimization",
    desc: "Heatmaps, digital audits & continuous A/B tests to lift sign-ups and sales.",
    iconName: "MousePointerClick",
  },
  {
    id: "shopify-development",
    title: "Shopify Development",
    desc: "Premium, ultra-fast D2C stores: custom theme, fast page speeds, custom apps and checkout checkout optimization.",
    iconName: "ShoppingBag",
  },
  {
    id: "wordpress-development",
    title: "WordPress Development",
    desc: "Highly robust customized themes, fast headless structures, seamless WooCommerce configurations and secure migrations.",
    iconName: "FileCode2",
  },
];

export const REASONS_DATA: ReasonItem[] = [
  {
    title: "Fast delivery",
    desc: "Most websites live in 14 days. Active ad accounts set up and optimized in 72 hours.",
    iconName: "Zap",
  },
  {
    title: "Performance-first",
    desc: "We obsess over Core Web Vitals, high click-through rates (CTR), low CAC and customer conversion rather than vanity views.",
    iconName: "Gauge",
  },
  {
    title: "ROI mindset",
    desc: "Every marketing rupee tracked. Custom pipelines and real-time dashboards focused on actual revenue additions.",
    iconName: "ChartLine",
  },
  {
    title: "One partner",
    desc: "Web designs, detailed on-page SEO, local keyword strategies and paid campaigns working in complete synchronicity under one roof.",
    iconName: "Handshake",
  },
  {
    title: "Local market depth",
    desc: "Conversion-first experts. We deeply understand modern micro-markets, buyer psychology and geo-targeted keywords.",
    iconName: "MapPin",
  },
  {
    title: "Data-backed iteration",
    desc: "Weekly performance feedback loops, asset testing experiments and monthly strategy adjustments to secure compounding growth.",
    iconName: "Layers",
  },
];

export const PROCESS_DATA: ProcessStep[] = [
  {
    n: "01",
    title: "SEO Audit",
    desc: "Full crawl of your website, speed benchmarks, tracking validation and exhaustive keyword gap discovery.",
  },
  {
    n: "02",
    title: "Strategy",
    desc: "Construct a customized 90-day execution framework mapping exact keyword clusters, content pipelines and paid ad strategies.",
  },
  {
    n: "03",
    title: "Launch",
    desc: "Rapid deployment of optimized page structures, keyword-focused metadata adjustments and conversion trackers.",
  },
  {
    n: "04",
    title: "Optimize",
    desc: "Weekly content fine-tunes, metadata A/B tests, search console tracking and continuous conversion optimization.",
  },
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "d2c-brands",
    name: "D2C Brands",
    line: "Shopify design, speed optimization, high ROAS ad campaign integrations and customer retention systems.",
    iconName: "ShoppingBag",
  },
  {
    id: "dental-healthcare",
    name: "Dental & Healthcare",
    line: "Local SEO solutions, medical lead generation, Google map pack placements and patient bookings.",
    iconName: "Stethoscope",
  },
  {
    id: "real-estate",
    name: "Real Estate",
    line: "Highly focused micro-site landing pages, Meta lead generation funnels and high-quality site visits.",
    iconName: "House",
  },
  {
    id: "education-coaching",
    name: "Education & Coaching",
    line: "Student intake funnels, digital branding, Google search campaigns and localized offline-online integrations.",
    iconName: "GraduationCap",
  },
  {
    id: "local-services",
    name: "Local Services",
    line: "Google Business listing optimization, map pack authority building, phone tracking and localized keyword domination.",
    iconName: "Wrench",
  },
  {
    id: "b2b",
    name: "B2B Enterprises",
    line: "Search intent SEO mapping, industry leader content assets, outbound landing pages and LinkedIn campaign integrations.",
    iconName: "Building2",
  },
];

export const RESULTS_DATA: ResultItem[] = [
  {
    stat: "+318%",
    label: "Qualified leads",
    caption: "for a leading dental clinic within 4 months of campaign optimization.",
  },
  {
    stat: "–47%",
    label: "Cost per lead",
    caption: "for a luxury real estate developer across Meta Ads.",
  },
  {
    stat: "2.9x",
    label: "ROAS improvement",
    caption: "for an e-commerce wellness client utilizing highly responsive landing pages.",
  },
  {
    stat: "Top 3",
    label: "Google rankings",
    caption: "ranking for 38 high-intent local search queries.",
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    name: "Rhea Kulkarni",
    role: "Founder, Wellness D2C Brand",
    quote: "Inrank rebuilt our Shopify store and rewired our Meta Ads in three weeks. Our ROAS went from 1.6x to 3.4x in the next quarter. They're now our default growth team.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1762522926157-bcc04bf0b10a?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=150&h=150&fit=crop",
    initials: "RK",
  },
  {
    name: "Aditya Shah",
    role: "Marketing Head, Real Estate Developer",
    quote: "We went from 18 monthly leads to 84 in four months at a 47% lower cost per lead. The dashboards are sharp and the team is responsive on WhatsApp.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1576558656222-ba66febe3dec?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=150&h=150&fit=crop",
    initials: "AS",
  },
  {
    name: "Dr. Neha Patil",
    role: "Owner, Dental Clinic",
    quote: "Finally an agency that ships fast and reports honestly. The SEO work alone brought us 38 buyer-intent keywords into the top 3 of Google.",
    rating: 5,
    avatar: "",
    initials: "DN",
  },
];

export const FAQS_DATA: FAQItem[] = [
  {
    q: "How fast can you launch our website?",
    a: "Our standard performance-first conversion landing pages go live in 7 days and robust custom marketing websites or Shopify store setups are typically completed and launched within 14 trading days.",
  },
  {
    q: "Do you handle ads, SEO and the website together?",
    a: "Yes. By coordinating search advertising, on-page technical SEO and conversion optimization under one unified development architecture, we eliminate disconnected handoffs so that your entire funnel compounds faster.",
  },
  {
    q: "What is the minimum engagement?",
    a: "We work with clients on lean monthly retainer programs with 30-day rolling contracts. We do not lock you into rigid annual commitments. We earn your business month after month through measurable performance results.",
  },
  {
    q: "How soon will we see results from SEO?",
    a: "Technical and local SEO fixes (like keyword density tuning and search console setup) often trigger keyword jumps on Google maps and organic rankings in 3 to 6 weeks. Core content authority ranks build over 90 to 120 days.",
  },
  {
    q: "Will I own my ad accounts, analytics and code?",
    a: "Absolutely 100%. Everything we design, configure, or construct belongs entirely to your business from day one. We set up all integrations on your registered accounts and simply act as delegates.",
  },
  {
    q: "Do you work with businesses globally?",
    a: "Yes. We act as a growth partner for regional, national and D2C brands across North America, Europe, Asia and global markets, executing fully remote campaigns.",
  },
];
