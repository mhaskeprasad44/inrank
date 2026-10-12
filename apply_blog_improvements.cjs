const fs = require('fs');

const file = 'src/blogsData.ts';
let content = fs.readFileSync(file, 'utf8');

// Load images map
const imageMap = {
  'influencer-marketing-guide': {
    src: '/images/blog-influencer-analytics.jpg',
    alt: 'Creator Campaign Attribution and Coupon Code ROI Dashboard',
    caption: 'Creator campaign attribution model: Tracking verified influencer coupon codes, audience demographics and post-campaign sales conversion lift.'
  },
  'linkedin-management-guide': {
    src: '/images/blog-linkedin-growth.jpg',
    alt: 'B2B LinkedIn Pipeline and Executive Content Analytics Dashboard',
    caption: 'B2B LinkedIn pipeline architecture: Tracking executive thought leadership impressions, profile visibility and warm inbound qualified opportunities.'
  },
  'cross-platform-mobile-app-engineering': {
    src: '/images/blog-mobile-app-engineering.jpg',
    alt: 'Mobile App Engineering Workspace with iOS and Android UI Mockups',
    caption: 'Mobile application engineering architecture: Designing high-performance iOS and Android client viewports with sub-second data synchronization.'
  },
  'strategic-brand-naming-architecture': {
    src: '/images/blog-brand-naming-board.jpg',
    alt: 'Strategic Brand Naming Workspace with Phonetic Cards and Trademark Clearance',
    caption: 'Brand naming validation matrix: Systematic phonetic screening, category association mapping and global trademark clearance vetting.'
  },
  'enterprise-logo-design-and-visual-systems': {
    src: '/images/blog-logo-design-system.jpg',
    alt: 'Visual Identity Design System with Golden Ratio Grid and Vector Geometry',
    caption: 'Visual identity design system: Golden ratio geometry, responsive vector marks and enterprise typography guidelines.'
  },
  'luxury-business-card-design-and-tactile-print-ergonomics': {
    src: '/images/blog-business-card-tactile.jpg',
    alt: 'Luxury Corporate Business Cards with Embossed Gold Foil and Heavyweight Cotton Stock',
    caption: 'Tactile corporate card architecture: Ultra-heavyweight cotton paper stocks, embossed metallic foil typography and contactless NFC integration.'
  },
  'executive-letterhead-design-and-corporate-stationery-systems': {
    src: '/images/blog-letterhead-stationery.jpg',
    alt: 'Executive Corporate Stationery Set with Letterhead, Folder and Luxury Pen',
    caption: 'Executive corporate stationery system: Formal typographic grid hierarchy, security watermarking and unified letterhead and envelope layouts.'
  },
  'high-impact-brochure-designing-and-print-architecture': {
    src: '/images/blog-brochure-design-mockup.jpg',
    alt: 'Corporate Sales Brochure Mockup with Open Editorial Infographic Spreads',
    caption: 'Corporate sales brochure architecture: Multi-page visual pacing, data infographic spreads and premium print tactile finishes.'
  },
  'content-marketing-editorial-authority-and-information-gain': {
    src: '/images/blog-content-topic-clusters.jpg',
    alt: 'Content Marketing Editorial Strategy Calendar and Topic Cluster Architecture',
    caption: 'Information gain editorial framework: Topic cluster semantic hierarchy, publishing sprint pipeline and organic growth curves.'
  },
  'enterprise-email-marketing-and-lifecycle-automation': {
    src: '/images/blog-email-automation-flow.jpg',
    alt: 'Enterprise Email Marketing Automation Customer Engagement Journey Flowchart',
    caption: 'Email lifecycle automation logic: Multi-branch trigger sequences, welcome workflows, abandoned cart recovery and deliverability monitoring.'
  },
  'omnichannel-sms-marketing-and-conversational-messaging': {
    src: '/images/blog-sms-conversational.jpg',
    alt: 'Conversational SMS Marketing Interface on Smartphone with Real-Time Engagement Analytics',
    caption: 'SMS conversational commerce flow: Automated order updates, two-way conversational messaging and carrier-compliant delivery analytics.'
  }
};

// Apply inContentImage updates by regex replacement for each slug
for (const [slug, img] of Object.entries(imageMap)) {
  // Find the block for this slug
  const slugRegex = new RegExp(`("slug":\\s*"${slug}"[\\s\\S]*?"inContentImage":\\s*\\{[\\s\\S]*?\\})`, 'g');
  const match = slugRegex.exec(content);
  if (match) {
    const originalBlock = match[1];
    const updatedBlock = originalBlock.replace(/"inContentImage":\s*\{[\s\S]*?\}/, `"inContentImage": {\n      "src": "${img.src}",\n      "alt": "${img.alt}",\n      "caption": "${img.caption}"\n    }`);
    content = content.replace(originalBlock, updatedBlock);
    console.log(`Updated inContentImage for ${slug}`);
  } else {
    console.warn(`Could not find inContentImage block for ${slug}`);
  }
}

// Write intermediate file
fs.writeFileSync(file, content, 'utf8');
console.log('Image updates applied successfully to', file);
