const fs = require('fs');
const path = require('path');

const blogs = require('./temp_blogs_data.cjs');
console.log(`Starting Modern Vinove + Lovable Blog Generator for ${blogs.length} articles...`);

// 1. Build and write modern inrank2.0/css/blog.css
const blogCss = `/* ============================================================
   INRANK 2.0 — Modern Blog System (Vinove Architecture + Lovable Structure)
   Preserving 100% Inrank Brand Identity: Emerald Green (#009d49) & Slate Navy (#081424)
   ============================================================ */

/* ── Sticky Top Reading Progress Bar ── */
#reading-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  width: 0%;
  background: linear-gradient(90deg, #009d49, #00bf5d, #34d399);
  z-index: 9999;
  transition: width 0.08s linear;
}

/* ══════════════════════════════════════════
   BLOG HUB (Index / Directory)
══════════════════════════════════════════ */

/* §0 Blog Hero */
.blog-hero {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 76% 30%, rgba(0, 157, 73, 0.22) 0%, transparent 45%),
    radial-gradient(circle at 20% 80%, rgba(16, 33, 56, 0.8) 0%, transparent 60%),
    linear-gradient(135deg, #081424 0%, #0d1e34 72%, #081424 100%);
  min-height: clamp(380px, 45vw, 540px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-top: calc(var(--nav-h, 80px) + 4rem);
  padding-bottom: clamp(3.5rem, 6vw, 5rem);
  padding-left: var(--gutter, clamp(1.25rem, 4vw, 3.5rem));
  padding-right: var(--gutter, clamp(1.25rem, 4vw, 3.5rem));
}

.blog-hero-inner {
  width: 100%;
  max-width: var(--max, 1400px);
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.blog-hero-eyebrow {
  display: inline-block;
  font-family: var(--font, 'Inter', sans-serif);
  font-size: 0.82rem;
  font-weight: 750;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #00bf5d;
  margin-bottom: 1rem;
}

.blog-hero-h1 {
  font-family: var(--font, 'Inter', sans-serif);
  font-size: clamp(2.6rem, 5.2vw, 4.5rem);
  font-weight: 850;
  line-height: 1.08;
  letter-spacing: -0.035em;
  color: #ffffff;
  margin: 0 0 1.25rem;
  max-width: 920px;
}

.blog-hero-sub {
  font-family: var(--font, 'Inter', sans-serif);
  font-size: clamp(1.05rem, 1.4vw, 1.25rem);
  line-height: 1.6;
  color: #94a3b8;
  margin: 0;
  max-width: 680px;
}

/* §3 Sticky Category Filter Strip */
.blog-categories-section {
  position: sticky;
  top: 80px;
  z-index: 750;
  background: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(8, 20, 36, 0.08);
  padding: 0.85rem var(--gutter, clamp(1.25rem, 4vw, 3.5rem));
  transition: all 0.25s ease;
}

.blog-categories-inner {
  width: 100%;
  max-width: var(--max, 1400px);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.categories-strip {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  overflow-x: auto;
  padding-bottom: 2px;
  scrollbar-width: none;
}
.categories-strip::-webkit-scrollbar { display: none; }

.cat-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 15px;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 650;
  color: #475569;
  background: #f1f5f9;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.18s ease;
  border: 1px solid transparent;
  cursor: pointer;
}

.cat-pill:hover {
  color: #081424;
  background: #e2e8f0;
}

.cat-pill.is-active {
  color: #ffffff;
  background: #081424;
  border-color: #081424;
}

.blog-search-wrap {
  position: relative;
  min-width: 260px;
}

.blog-search-input {
  width: 100%;
  padding: 7px 14px 7px 34px;
  border-radius: 9999px;
  border: 1px solid #cbd5e1;
  background: #ffffff;
  font-size: 0.85rem;
  color: #081424;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.blog-search-input:focus {
  border-color: #009d49;
  box-shadow: 0 0 0 3px rgba(0, 157, 73, 0.12);
}

.blog-search-icon {
  position: absolute;
  left: 11px;
  top: 50%;
  transform: translateY(-50%);
  width: 14px;
  height: 14px;
  color: #94a3b8;
  pointer-events: none;
}

/* §1 Featured Post Card (50/50 Split) */
.blog-featured-section {
  background: #ffffff;
  padding: clamp(3.5rem, 6vw, 5rem) var(--gutter, clamp(1.25rem, 4vw, 3.5rem)) 2rem;
}

.blog-featured-inner {
  width: 100%;
  max-width: var(--max, 1400px);
  margin: 0 auto;
}

.blog-section-label {
  display: block;
  font-size: 0.82rem;
  font-weight: 750;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #009d49;
  margin-bottom: 1.5rem;
}

.blog-featured-card {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: clamp(2rem, 4vw, 4rem);
  align-items: center;
  background: #f8fafc;
  border: 1px solid rgba(8, 20, 36, 0.08);
  border-radius: 24px;
  padding: clamp(1.75rem, 3.5vw, 3rem);
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 10px 30px -10px rgba(8, 20, 36, 0.05);
}

.blog-featured-card:hover {
  border-color: rgba(0, 157, 73, 0.35);
  box-shadow: 0 20px 40px -12px rgba(8, 20, 36, 0.12);
  transform: translateY(-3px);
}

.blog-chip {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 750;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #009d49;
  background: rgba(0, 157, 73, 0.1);
  padding: 4px 10px;
  border-radius: 6px;
  margin-bottom: 1rem;
}

.blog-date {
  font-size: 0.84rem;
  color: #64748b;
  font-weight: 550;
  margin-left: 0.75rem;
}

.blog-featured-title {
  font-family: var(--font, 'Inter', sans-serif);
  font-size: clamp(1.6rem, 2.6vw, 2.4rem);
  font-weight: 850;
  line-height: 1.2;
  letter-spacing: -0.025em;
  color: #081424;
  margin: 0.5rem 0 1rem;
  transition: color 0.2s ease;
}

.blog-featured-card:hover .blog-featured-title {
  color: #009d49;
}

.blog-featured-excerpt {
  font-size: 1.05rem;
  line-height: 1.6;
  color: #475569;
  margin: 0 0 1.5rem;
}

.blog-read {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
  font-weight: 750;
  color: #009d49;
  transition: gap 0.2s ease;
}

.blog-featured-card:hover .blog-read {
  gap: 12px;
}

.blog-featured-img {
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: 16px;
  overflow: hidden;
  background: #e2e8f0;
}

.blog-featured-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.blog-featured-card:hover .blog-featured-img img {
  transform: scale(1.03);
}

/* §2 Post Grid (3 Columns) */
.blog-grid-section {
  background: #ffffff;
  padding: 3rem var(--gutter, clamp(1.25rem, 4vw, 3.5rem)) clamp(4rem, 7vw, 6rem);
}

.blog-grid-inner {
  width: 100%;
  max-width: var(--max, 1400px);
  margin: 0 auto;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1.5rem, 2.5vw, 2.5rem);
}

.blog-card {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid rgba(8, 20, 36, 0.08);
  border-radius: 18px;
  overflow: hidden;
  text-decoration: none;
  transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 16px rgba(8, 20, 36, 0.04);
}

.blog-card:hover {
  border-color: rgba(0, 157, 73, 0.35);
  box-shadow: 0 16px 36px -8px rgba(8, 20, 36, 0.12);
  transform: translateY(-4px);
}

.blog-card-img {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #f1f5f9;
}

.blog-card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.blog-card:hover .blog-card-img img {
  transform: scale(1.04);
}

.blog-card-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 1.5rem;
}

.blog-card-meta {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.75rem;
}

.blog-card-meta .blog-chip {
  margin-bottom: 0;
}

.blog-title {
  font-family: var(--font, 'Inter', sans-serif);
  font-size: 1.22rem;
  font-weight: 800;
  line-height: 1.35;
  letter-spacing: -0.02em;
  color: #081424;
  margin: 0 0 0.75rem;
  transition: color 0.2s ease;
}

.blog-card:hover .blog-title {
  color: #009d49;
}

.blog-excerpt {
  font-size: 0.92rem;
  line-height: 1.55;
  color: #64748b;
  margin: 0 0 1.25rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex-grow: 1;
}

.blog-card-footer {
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Dual Commercial Conversion CTA on Hub */
.blog-hub-cta {
  background: radial-gradient(circle at 80% 20%, rgba(0, 157, 73, 0.25) 0%, transparent 60%), #081424;
  border-radius: 24px;
  padding: clamp(3rem, 5vw, 4.5rem) clamp(1.5rem, 4vw, 3.5rem);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;
  flex-wrap: wrap;
  margin-top: 4rem;
}

.blog-hub-cta-copy h3 {
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: 850;
  line-height: 1.15;
  margin: 0 0 0.75rem;
}

.blog-hub-cta-copy p {
  font-size: 1.1rem;
  color: #94a3b8;
  max-width: 620px;
  margin: 0;
}

.blog-hub-cta-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

/* ══════════════════════════════════════════
   SINGLE BLOG POST (Lovable + Vinove System)
══════════════════════════════════════════ */

.post-wrapper {
  background: #ffffff;
  padding-top: calc(var(--nav-h, 80px) + 2rem);
  padding-bottom: 5rem;
}

.post-breadcrumbs {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: #64748b;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.post-breadcrumbs a {
  color: #64748b;
  text-decoration: none;
  transition: color 0.18s ease;
}

.post-breadcrumbs a:hover {
  color: #009d49;
}

.post-header-wrap {
  margin-bottom: 2.5rem;
}

.post-meta-top {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.post-h1 {
  font-family: var(--font, 'Inter', sans-serif);
  font-size: clamp(2.2rem, 4.2vw, 3.4rem);
  font-weight: 850;
  line-height: 1.12;
  letter-spacing: -0.03em;
  color: #081424;
  margin: 0 0 1.5rem;
}

.post-author-share-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1.25rem 0;
  border-top: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
  flex-wrap: wrap;
}

.post-author-box {
  display: flex;
  align-items: center;
  gap: 12px;
}

.post-author-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #081424;
  color: #00bf5d;
  display: grid;
  place-items: center;
  font-weight: 800;
  font-size: 1rem;
}

.post-author-info {
  display: flex;
  flex-direction: column;
}

.post-author-name {
  font-size: 0.95rem;
  font-weight: 750;
  color: #081424;
}

.post-author-title {
  font-size: 0.8rem;
  color: #64748b;
}

.post-share-strip {
  display: flex;
  align-items: center;
  gap: 8px;
}

.share-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  border-radius: 9999px;
  font-size: 0.82rem;
  font-weight: 650;
  color: #475569;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
}

.share-pill:hover {
  background: #081424;
  color: #ffffff;
  border-color: #081424;
}

.share-pill.wa:hover {
  background: #25d366;
  border-color: #25d366;
  color: #ffffff;
}

/* Framed 16:9 Hero Figure */
.post-main-figure {
  margin: 2.5rem 0 3.5rem;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(8, 20, 36, 0.1);
  box-shadow: 0 20px 48px -12px rgba(8, 20, 36, 0.1);
  background: #f1f5f9;
}

.post-main-figure img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
}

.post-main-caption {
  padding: 10px 18px;
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
  font-size: 0.82rem;
  color: #64748b;
  font-style: italic;
}

/* 2-Column Reading Layout */
.post-reading-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 340px;
  gap: clamp(2.5rem, 5vw, 5rem);
  align-items: start;
}

.post-article-main {
  min-width: 0;
  max-width: 820px;
}

/* AEO Direct Quick-Answer Box (Direct Answer Engine Optimization) */
.aeo-quick-answer {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-left: 4px solid #009d49;
  border-radius: 12px;
  padding: 1.5rem 1.75rem;
  margin-bottom: 2.75rem;
}

.aeo-label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #009d49;
  margin-bottom: 0.65rem;
}

.aeo-text {
  font-size: 1.05rem;
  line-height: 1.65;
  color: #1e293b;
  margin: 0;
}

.aeo-text strong {
  color: #081424;
}

/* Article Typography */
.post-intro-text {
  font-size: 1.15rem;
  line-height: 1.75;
  color: #334155;
  margin-bottom: 2.5rem;
}

.post-section {
  margin: 3rem 0;
}

.post-h2 {
  font-family: var(--font, 'Inter', sans-serif);
  font-size: clamp(1.5rem, 2.4vw, 1.95rem);
  font-weight: 850;
  line-height: 1.25;
  letter-spacing: -0.02em;
  color: #081424;
  margin: 0 0 1.25rem;
  padding-top: 0.5rem;
  scroll-margin-top: 100px;
}

.post-p {
  font-size: 1.02rem;
  line-height: 1.75;
  color: #334155;
  margin: 0 0 1.5rem;
}

/* In-Content Blueprint / Diagram */
.post-diagram-box {
  margin: 2.5rem 0;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  overflow: hidden;
  background: #f8fafc;
}

.post-diagram-box img {
  width: 100%;
  height: auto;
  display: block;
}

.post-diagram-caption {
  padding: 10px 16px;
  font-size: 0.8rem;
  color: #64748b;
  border-top: 1px solid #e2e8f0;
}

/* Implementation Checklist */
.post-checklist-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 2rem;
  margin: 2.5rem 0;
}

.post-check-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid #edf2f7;
  font-size: 0.98rem;
  color: #1e293b;
  line-height: 1.5;
}
.post-check-item:last-child { border-bottom: none; }

.check-icon {
  width: 20px;
  height: 20px;
  color: #009d49;
  flex-shrink: 0;
  margin-top: 2px;
}

/* Quantitative Proof Metrics Grid */
.post-proof-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 2.5rem 0;
}

.post-proof-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.25rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(8, 20, 36, 0.04);
}

.post-proof-val {
  font-size: 1.75rem;
  font-weight: 850;
  color: #009d49;
  line-height: 1.1;
  margin-bottom: 0.25rem;
}

.post-proof-lbl {
  font-size: 0.82rem;
  color: #64748b;
  font-weight: 600;
}

/* Topic Cluster Internal Links */
.post-cluster-strip {
  border-top: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
  padding: 1.5rem 0;
  margin: 3rem 0;
}

.post-cluster-label {
  font-size: 0.8rem;
  font-weight: 750;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #64748b;
  margin-bottom: 0.75rem;
}

.post-cluster-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.cluster-link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #081424;
  font-weight: 650;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.18s ease;
}

.cluster-link:hover {
  color: #009d49;
}

/* FAQ Accordion */
.post-faq-wrap {
  margin: 3.5rem 0 2rem;
}

.faq-card {
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  margin-bottom: 12px;
  overflow: hidden;
  background: #ffffff;
}

.faq-q-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 1.15rem 1.25rem;
  background: #ffffff;
  border: none;
  font-size: 1rem;
  font-weight: 750;
  color: #081424;
  text-align: left;
  cursor: pointer;
  outline: none;
  transition: background 0.18s ease;
}

.faq-q-btn:hover {
  background: #f8fafc;
}

.faq-icon {
  width: 16px;
  height: 16px;
  color: #64748b;
  transition: transform 0.25s ease;
  flex-shrink: 0;
}

.faq-card.open .faq-icon {
  transform: rotate(180deg);
  color: #009d49;
}

.faq-answer {
  display: none;
  padding: 0 1.25rem 1.25rem;
  font-size: 0.95rem;
  line-height: 1.65;
  color: #475569;
}

.faq-card.open .faq-answer {
  display: block;
}

/* Bottom Conversion Card in Article */
.post-bottom-cta {
  background: linear-gradient(135deg, #081424 0%, #0d1e34 100%);
  border-radius: 18px;
  padding: 2.5rem;
  color: #ffffff;
  margin-top: 3.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.post-bottom-cta h3 {
  font-size: 1.5rem;
  font-weight: 850;
  margin: 0;
  line-height: 1.2;
}

.post-bottom-cta p {
  font-size: 0.98rem;
  color: #94a3b8;
  margin: 0;
  line-height: 1.6;
}

/* Sticky Sidebar */
.post-sticky-sidebar {
  position: sticky;
  top: 100px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.sidebar-box {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 1.5rem;
}

.sidebar-title {
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #64748b;
  margin-bottom: 1rem;
}

.toc-nav {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.toc-item {
  font-size: 0.88rem;
  color: #475569;
  text-decoration: none;
  padding: 6px 10px;
  border-radius: 8px;
  line-height: 1.4;
  transition: all 0.18s ease;
  border-left: 2px solid transparent;
}

.toc-item:hover {
  color: #081424;
  background: #e2e8f0;
}

.toc-item.active {
  color: #009d49;
  font-weight: 700;
  background: rgba(0, 157, 73, 0.08);
  border-left-color: #009d49;
}

.sidebar-audit-card {
  background: #ffffff;
  border: 1px solid rgba(0, 157, 73, 0.25);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 10px 24px -8px rgba(0, 157, 73, 0.12);
}

.sidebar-audit-badge {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #009d49;
  background: rgba(0, 157, 73, 0.1);
  padding: 3px 8px;
  border-radius: 4px;
  margin-bottom: 0.75rem;
}

.sidebar-audit-title {
  font-size: 1.1rem;
  font-weight: 800;
  color: #081424;
  margin: 0 0 0.5rem;
}

.sidebar-audit-desc {
  font-size: 0.85rem;
  color: #64748b;
  line-height: 1.5;
  margin: 0 0 1.25rem;
}

.sidebar-wa-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 11px 18px;
  border-radius: 10px;
  font-size: 0.88rem;
  font-weight: 750;
  color: #ffffff;
  background: #25d366;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.25);
  transition: all 0.2s ease;
}

.sidebar-wa-btn:hover {
  background: #1ebc59;
  transform: translateY(-1px);
}

/* §6 Full-Width Author Bio Surface Strip (Vinove Style) */
.post-author-section {
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
  padding: 4rem var(--gutter, clamp(1.25rem, 4vw, 3.5rem));
}

.post-author-surface {
  width: 100%;
  max-width: var(--max, 1400px);
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 2.5rem;
  flex-wrap: wrap;
}

.author-surface-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #081424;
  color: #00bf5d;
  display: grid;
  place-items: center;
  font-size: 1.8rem;
  font-weight: 850;
  flex-shrink: 0;
}

.author-surface-content {
  flex: 1;
  min-width: 280px;
}

.author-surface-name {
  font-size: 1.35rem;
  font-weight: 850;
  color: #081424;
  margin: 0 0 0.25rem;
}

.author-surface-role {
  font-size: 0.88rem;
  font-weight: 650;
  color: #009d49;
  margin-bottom: 0.75rem;
}

.author-surface-bio {
  font-size: 0.96rem;
  line-height: 1.6;
  color: #475569;
  margin: 0;
  max-width: 820px;
}

/* §7 Related Posts Strip (Vinove Style) */
.post-related-section {
  background: #ffffff;
  padding: 4.5rem var(--gutter, clamp(1.25rem, 4vw, 3.5rem));
}

.post-related-inner {
  width: 100%;
  max-width: var(--max, 1400px);
  margin: 0 auto;
}

.post-related-title {
  font-size: clamp(1.6rem, 2.8vw, 2.2rem);
  font-weight: 850;
  color: #081424;
  margin: 0 0 2rem;
}

/* ══════════════════════════════════════════
   RESPONSIVE QUERIES
══════════════════════════════════════════ */
@media (max-width: 1080px) {
  .blog-featured-card {
    grid-template-columns: 1fr;
  }
  .blog-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .post-reading-grid {
    grid-template-columns: 1fr;
  }
  .post-sticky-sidebar {
    position: static;
    margin-top: 3rem;
  }
}

@media (max-width: 680px) {
  .blog-grid {
    grid-template-columns: 1fr;
  }
  .post-proof-grid {
    grid-template-columns: 1fr;
  }
  .post-author-share-bar {
    flex-direction: column;
    align-items: flex-start;
  }
}
`;

fs.writeFileSync('inrank2.0/css/blog.css', blogCss);
console.log('[OK] inrank2.0/css/blog.css written');
if (fs.existsSync('css')) {
  fs.writeFileSync('css/blog.css', blogCss);
  console.log('[OK] root css/blog.css synced');
}

// 2. Read index.html for Header, Mobile Drawer, and Footer
const indexHtml = fs.readFileSync('inrank2.0/index.html', 'utf8');

const headerHtml = indexHtml.slice(indexHtml.indexOf('<header'), indexHtml.indexOf('</header>') + '</header>'.length);

const mobIdx = indexHtml.indexOf('<div id="mob"');
let depth = 0;
let mobEnd = -1;
for (let i = mobIdx; i < indexHtml.length; i++) {
  if (indexHtml.startsWith('<div', i)) depth++;
  else if (indexHtml.startsWith('</div>', i)) {
    depth--;
    if (depth === 0) {
      mobEnd = i + '</div>'.length;
      break;
    }
  }
}
const mobDrawerHtml = indexHtml.slice(mobIdx, mobEnd);
const footerHtml = indexHtml.slice(indexHtml.indexOf('<footer'), indexHtml.indexOf('</footer>') + '</footer>'.length);

// 3. GENERATE BLOG HUB (inrank2.0/blog.html)
const featuredBlog = blogs[0]; // Top 5 digital marketing agencies in pune
const gridBlogs = blogs.slice(1);

const categoryCounts = {};
blogs.forEach(b => {
  categoryCounts[b.category] = (categoryCounts[b.category] || 0) + 1;
});

const catPillsHtml = `
  <button class="cat-pill is-active" data-filter="all">All (${blogs.length})</button>
  ${Object.keys(categoryCounts).map(cat => `
    <button class="cat-pill" data-filter="${cat.toLowerCase().replace(/[^a-z0-9]+/g, '-')}">${cat} (${categoryCounts[cat]})</button>
  `).join('')}
`;

const blogCardsHtml = gridBlogs.map(b => {
  const catSlug = b.category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const imgUrl = b.image || '/images/service-seo.jpg';
  return `
    <article class="blog-card" data-category="${catSlug}" data-title="${b.title.toLowerCase()}">
      <div class="blog-card-img">
        <img src="${imgUrl}" alt="${b.focusKeyword || b.title}" loading="lazy" width="600" height="340" />
      </div>
      <div class="blog-card-content">
        <div class="blog-card-meta">
          <span class="blog-chip">${b.category}</span>
          <time class="blog-date">${b.date}</time>
        </div>
        <h2 class="blog-title"><a href="/blog/${b.slug}.html" style="color:inherit;text-decoration:none;">${b.title}</a></h2>
        <p class="blog-excerpt">${b.metaDesc || b.intro.substring(0, 160)}...</p>
        <div class="blog-card-footer">
          <span style="font-size:0.8rem;color:#64748b;font-weight:600;">${b.readingTime}</span>
          <a href="/blog/${b.slug}.html" class="blog-read">
            <span>Read Guide</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 6h8M6 2l4 4-4 4"/></svg>
          </a>
        </div>
      </div>
    </article>
  `;
}).join('\n');

const blogHubHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Engineering & Growth Intelligence | Inrank Blog</title>
  <meta name="description" content="Technical perspectives, performance marketing playbooks, and architectural benchmarks for modern growth teams. Written by Inrank engineers." />
  <link rel="canonical" href="https://inrank.in/blog.html" />
  <meta property="og:title" content="Engineering & Growth Intelligence | Inrank Blog" />
  <meta property="og:description" content="Technical perspectives, performance marketing playbooks, and architectural benchmarks for modern growth teams." />
  <meta property="og:url" content="https://inrank.in/blog.html" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />

  <!-- Preload Fonts & Styles -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;850&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
  
  <link rel="stylesheet" href="/css/core.css">
  <link rel="stylesheet" href="/css/nav.css">
  <link rel="stylesheet" href="/css/components.css">
  <link rel="stylesheet" href="/css/corporate.css">
  <link rel="stylesheet" href="/css/blog.css">
</head>
<body class="page-blog-hub">
  <div id="scroll-bar"></div>

  ${headerHtml}
  ${mobDrawerHtml}

  <main id="main">
    <!-- §0 Blog Hero (Vinove Architecture) -->
    <section class="blog-hero" aria-labelledby="blog-hero-h1">
      <div class="blog-hero-inner">
        <span class="blog-hero-eyebrow">Perspective & Benchmarks</span>
        <h1 class="blog-hero-h1" id="blog-hero-h1">Engineering &amp; Growth Intelligence.</h1>
        <p class="blog-hero-sub">Data-driven strategies, enterprise web architecture, conversion mechanics, and performance playbooks for ambitious brands.</p>
      </div>
    </section>

    <!-- §3 Sticky Category Filter Strip + Search -->
    <section class="blog-categories-section" aria-label="Filter guides by topic">
      <div class="blog-categories-inner">
        <nav class="categories-strip" id="cat-strip">
          ${catPillsHtml}
        </nav>
        <div class="blog-search-wrap">
          <svg class="blog-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          <input type="text" id="blog-search" class="blog-search-input" placeholder="Search 30+ guides & playbooks..." aria-label="Search guides" />
        </div>
      </div>
    </section>

    <!-- §1 Featured Post Card (50/50 Split) -->
    <section class="blog-featured-section" aria-labelledby="featured-post-title">
      <div class="blog-featured-inner">
        <span class="blog-section-label">Featured Benchmark</span>
        <a href="/blog/${featuredBlog.slug}.html" class="blog-featured-card" aria-label="Read: ${featuredBlog.title}">
          <div class="blog-featured-content">
            <div>
              <span class="blog-chip">${featuredBlog.category}</span>
              <time class="blog-date">${featuredBlog.date}</time>
            </div>
            <h2 class="blog-featured-title" id="featured-post-title">${featuredBlog.title}</h2>
            <p class="blog-featured-excerpt">${featuredBlog.metaDesc || featuredBlog.intro.substring(0, 220)}...</p>
            <span class="blog-read">
              <span>Read Full Benchmark</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M2 6h8M6 2l4 4-4 4"/></svg>
            </span>
          </div>
          <div class="blog-featured-img">
            <img src="${featuredBlog.image || '/images/service-seo.jpg'}" alt="${featuredBlog.focusKeyword}" width="700" height="440" loading="eager" />
          </div>
        </a>
      </div>
    </section>

    <!-- §2 Post Grid (3-Column Layout) -->
    <section class="blog-grid-section" aria-labelledby="grid-section-label">
      <div class="blog-grid-inner">
        <span class="blog-section-label" id="grid-section-label">Recent Perspectives &amp; Technical Guides</span>
        <div class="blog-grid" id="blog-grid">
          ${blogCardsHtml}
        </div>

        <!-- Dual Commercial Conversion CTA Banner -->
        <div class="blog-hub-cta">
          <div class="blog-hub-cta-copy">
            <h3>Accelerate Your Commercial Growth</h3>
            <p>Deploy enterprise-grade web engineering, performance marketing, and generative AI search optimization tailored for high-growth businesses.</p>
          </div>
          <div class="blog-hub-cta-actions">
            <a href="/contact.html" class="button primary" style="background:#009d49;color:#ffffff;padding:12px 28px;border-radius:999px;font-weight:750;text-decoration:none;display:inline-flex;align-items:center;gap:8px;">Schedule Free Audit</a>
            <a href="https://wa.me/918788823182" class="button secondary" style="background:#ffffff;color:#081424;padding:12px 28px;border-radius:999px;font-weight:750;text-decoration:none;">Chat on WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  ${footerHtml}

  <script src="/js/core.js" defer></script>
  <script>
    // Live Category & Search Filtering
    document.addEventListener('DOMContentLoaded', function() {
      const pills = document.querySelectorAll('.cat-pill');
      const cards = document.querySelectorAll('.blog-card');
      const search = document.getElementById('blog-search');

      let currentFilter = 'all';
      let currentQuery = '';

      function filterCards() {
        cards.forEach(card => {
          const cardCat = card.getAttribute('data-category');
          const cardTitle = card.getAttribute('data-title');
          const matchesCat = currentFilter === 'all' || cardCat === currentFilter;
          const matchesQuery = !currentQuery || cardTitle.includes(currentQuery);

          if (matchesCat && matchesQuery) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      }

      pills.forEach(pill => {
        pill.addEventListener('click', function() {
          pills.forEach(p => p.classList.remove('is-active'));
          this.classList.add('is-active');
          currentFilter = this.getAttribute('data-filter');
          filterCards();
        });
      });

      if (search) {
        search.addEventListener('input', function() {
          currentQuery = this.value.trim().toLowerCase();
          filterCards();
        });
      }
    });
  </script>
</body>
</html>
`;

fs.writeFileSync('inrank2.0/blog.html', blogHubHtml);
fs.writeFileSync('inrank2.0/blog/index.html', blogHubHtml);
fs.writeFileSync('blog.html', blogHubHtml);
if (!fs.existsSync('blog')) fs.mkdirSync('blog');
fs.writeFileSync('blog/index.html', blogHubHtml);
console.log('[OK] inrank2.0/blog.html and blog/index.html generated');

// 4. GENERATE 30 INDIVIDUAL BLOG POSTS (Lovable + Vinove Single Post Architecture)
blogs.forEach((b, idx) => {
  const catSlug = b.category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const relatedPosts = blogs.filter(other => other.id !== b.id && other.category === b.category).slice(0, 3);
  if (relatedPosts.length < 3) {
    const others = blogs.filter(other => other.id !== b.id && !relatedPosts.some(r => r.id === other.id)).slice(0, 3 - relatedPosts.length);
    relatedPosts.push(...others);
  }

  // Schema JSON-LD
  const schemaJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `https://inrank.in/blog/${b.slug}.html#article`,
        "isPartOf": {
          "@type": "WebPage",
          "@id": `https://inrank.in/blog/${b.slug}.html`
        },
        "headline": b.title,
        "description": b.metaDesc,
        "image": b.image ? `https://inrank.in${b.image}` : "https://inrank.in/images/service-seo.jpg",
        "datePublished": "2026-10-15T09:00:00+05:30",
        "dateModified": "2026-11-03T14:30:00+05:30",
        "author": {
          "@type": "Person",
          "name": b.author || "Prasad Mhaske",
          "jobTitle": "Lead Systems Architect & Growth Strategist",
          "url": "https://inrank.in/about.html"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Inrank Technologies",
          "logo": {
            "@type": "ImageObject",
            "url": "https://inrank.in/img/inrank-white-logo.svg"
          }
        },
        "keywords": [b.focusKeyword, ...(b.relatedKeywords || [])]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://inrank.in/" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://inrank.in/blog.html" },
          { "@type": "ListItem", "position": 3, "name": b.category, "item": `https://inrank.in/blog.html#${catSlug}` },
          { "@type": "ListItem", "position": 4, "name": b.title, "item": `https://inrank.in/blog/${b.slug}.html` }
        ]
      },
      ...(b.faqs && b.faqs.length > 0 ? [{
        "@type": "FAQPage",
        "mainEntity": b.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }] : [])
    ]
  };

  // Build Sections HTML
  const sectionsHtml = (b.sections || []).map((sec, sIdx) => `
    <section class="post-section" id="section-${sIdx + 1}">
      <h2 class="post-h2">${sec.heading}</h2>
      <div class="post-p">${sec.content.replace(/\n\n/g, '</p><p class="post-p">')}</div>
    </section>
  `).join('\n');

  // Build Checklist HTML
  const checklistHtml = (b.checklistItems && b.checklistItems.length > 0) ? `
    <div class="post-checklist-card" id="checklist">
      <h3 style="font-size:1.25rem;font-weight:800;color:#081424;margin:0 0 1rem;">${b.checklistHeading || 'Actionable Implementation Checklist'}</h3>
      ${b.checklistItems.map(item => `
        <div class="post-check-item">
          <svg class="check-icon" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
          <span>${item}</span>
        </div>
      `).join('')}
    </div>
  ` : '';

  // Build Proof Metrics HTML
  const proofMetricsHtml = (b.proofMetrics && b.proofMetrics.length > 0) ? `
    <div class="post-proof-grid" id="proof-metrics">
      ${b.proofMetrics.map(pm => `
        <div class="post-proof-card">
          <div class="post-proof-val">${pm.value}</div>
          <div class="post-proof-lbl">${pm.label}</div>
          ${pm.description ? `<p style="font-size:0.75rem;color:#94a3b8;margin:0.25rem 0 0;">${pm.description}</p>` : ''}
        </div>
      `).join('')}
    </div>
  ` : '';

  // Build FAQ Accordion HTML
  const faqsHtml = (b.faqs && b.faqs.length > 0) ? `
    <div class="post-faq-wrap" id="faqs">
      <h2 class="post-h2" style="margin-bottom:1.25rem;">Frequently Asked Questions</h2>
      ${b.faqs.map((faq, fIdx) => `
        <div class="faq-card ${fIdx === 0 ? 'open' : ''}">
          <button class="faq-q-btn" aria-expanded="${fIdx === 0}">
            <span>${faq.q}</span>
            <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6 9l6 6 6-6"/></svg>
          </button>
          <div class="faq-answer">
            <p style="margin:0;">${faq.a}</p>
          </div>
        </div>
      `).join('')}
    </div>
  ` : '';

  // Related Posts HTML
  const relatedPostsHtml = relatedPosts.map(rel => `
    <article class="blog-card">
      <div class="blog-card-img">
        <img src="${rel.image || '/images/service-seo.jpg'}" alt="${rel.focusKeyword || rel.title}" loading="lazy" width="400" height="225" />
      </div>
      <div class="blog-card-content">
        <div class="blog-card-meta">
          <span class="blog-chip">${rel.category}</span>
          <time class="blog-date">${rel.date}</time>
        </div>
        <h3 class="blog-title" style="font-size:1.1rem;"><a href="/blog/${rel.slug}.html" style="color:inherit;text-decoration:none;">${rel.title}</a></h3>
        <div class="blog-card-footer">
          <span style="font-size:0.78rem;color:#64748b;font-weight:600;">${rel.readingTime}</span>
          <a href="/blog/${rel.slug}.html" class="blog-read" style="font-size:0.85rem;">
            <span>Read</span>
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 6h8M6 2l4 4-4 4"/></svg>
          </a>
        </div>
      </div>
    </article>
  `).join('');

  // Table of Contents items
  const tocItems = [
    { id: 'why-matters', title: b.whyMattersHeading || 'Why This Matters' },
    { id: 'critical-mistakes', title: b.mistakesHeading || 'Mistakes to Avoid' },
    { id: 'what-to-do', title: b.whatToDoHeading || 'Strategic Execution' },
    ...(b.sections || []).map((sec, sIdx) => ({ id: `section-${sIdx + 1}`, title: sec.heading })),
    ...(b.checklistItems && b.checklistItems.length ? [{ id: 'checklist', title: 'Action Checklist' }] : []),
    ...(b.faqs && b.faqs.length ? [{ id: 'faqs', title: 'FAQs' }] : [])
  ];

  const tocHtml = tocItems.map(item => `
    <a href="#${item.id}" class="toc-item">${item.title}</a>
  `).join('');

  const postHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${b.metaTitle || b.title}</title>
  <meta name="description" content="${b.metaDesc || b.intro.substring(0, 160)}" />
  <link rel="canonical" href="https://inrank.in/blog/${b.slug}.html" />
  <meta property="og:title" content="${b.metaTitle || b.title}" />
  <meta property="og:description" content="${b.metaDesc || b.intro.substring(0, 160)}" />
  <meta property="og:url" content="https://inrank.in/blog/${b.slug}.html" />
  <meta property="og:type" content="article" />
  <meta property="og:image" content="https://inrank.in${b.image || '/images/service-seo.jpg'}" />
  <meta name="twitter:card" content="summary_large_image" />

  <!-- Preload Fonts & Styles -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;850&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
  
  <link rel="stylesheet" href="/css/core.css">
  <link rel="stylesheet" href="/css/nav.css">
  <link rel="stylesheet" href="/css/components.css">
  <link rel="stylesheet" href="/css/corporate.css">
  <link rel="stylesheet" href="/css/blog.css">

  <!-- JSON-LD Structured Data for AEO / Google AI Overviews -->
  <script type="application/ld+json">
  ${JSON.stringify(schemaJsonLd, null, 2)}
  </script>
</head>
<body class="page-single-post">
  <!-- Top Reading Progress Bar -->
  <div id="reading-progress"></div>

  ${headerHtml}
  ${mobDrawerHtml}

  <main id="main">
    <div class="post-wrapper">
      <div class="shell">
        
        <!-- Breadcrumbs -->
        <nav class="post-breadcrumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <a href="/blog.html">Blog</a>
          <span>/</span>
          <a href="/blog.html">${b.category}</a>
          <span>/</span>
          <span style="color:#081424;font-weight:700;">${b.title.substring(0, 36)}...</span>
        </nav>

        <!-- Article Header -->
        <header class="post-header-wrap">
          <div class="post-meta-top">
            <span class="blog-chip">${b.category}</span>
            <span style="font-size:0.85rem;color:#64748b;font-weight:600;">${b.readingTime}</span>
            <span style="font-size:0.85rem;color:#94a3b8;">·</span>
            <time class="blog-date" style="margin-left:0;">${b.date}</time>
          </div>

          <h1 class="post-h1">${b.title}</h1>

          <!-- Author and Social Share Strip -->
          <div class="post-author-share-bar">
            <div class="post-author-box">
              <div class="post-author-avatar">PM</div>
              <div class="post-author-info">
                <span class="post-author-name">${b.author || 'Prasad Mhaske'}</span>
                <span class="post-author-title">Founder &amp; Principal Strategist</span>
              </div>
            </div>

            <div class="post-share-strip">
              <span style="font-size:0.8rem;color:#64748b;font-weight:700;margin-right:4px;">Share:</span>
              <a href="https://wa.me/?text=${encodeURIComponent(b.title + ' https://inrank.in/blog/' + b.slug + '.html')}" target="_blank" rel="noopener noreferrer" class="share-pill wa" aria-label="Share on WhatsApp">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
                <span>WhatsApp</span>
              </a>
              <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://inrank.in/blog/' + b.slug + '.html')}" target="_blank" rel="noopener noreferrer" class="share-pill" aria-label="Share on LinkedIn">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                <span>LinkedIn</span>
              </a>
              <button class="share-pill" id="copy-link-btn" aria-label="Copy Link">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                <span id="copy-btn-text">Copy Link</span>
              </button>
            </div>
          </div>
        </header>

        <!-- Framed Hero Figure -->
        <figure class="post-main-figure">
          <img src="${b.image || '/images/service-seo.jpg'}" alt="${b.focusKeyword || b.title}" width="1200" height="675" loading="eager" />
          <figcaption class="post-main-caption">Executive Strategy Architecture: ${b.focusKeyword} · Inrank Technical Publishing</figcaption>
        </figure>

        <!-- 2-Column Reading Layout -->
        <div class="post-reading-grid">
          
          <!-- Main Article Column -->
          <article class="post-article-main">
            
            <!-- AEO Direct Quick-Answer Box -->
            <div class="aeo-quick-answer">
              <div class="aeo-label">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <span>Direct Answer / Quick Takeaway</span>
              </div>
              <p class="aeo-text">
                When scaling commercial growth with <strong>${b.focusKeyword}</strong>, enterprise organizations prioritize technical infrastructure, measurable conversion funnels, and algorithmic search optimization over superficial marketing metrics.
              </p>
            </div>

            <!-- Introductory Paragraph -->
            <div class="post-intro-text">
              ${b.intro.replace(/\n\n/g, '</div><div class="post-intro-text">')}
            </div>

            <!-- Section 1: Why This Matters -->
            <section class="post-section" id="why-matters">
              <h2 class="post-h2">${b.whyMattersHeading || '1. Why This Matters for Scaled Growth'}</h2>
              <div class="post-p">${b.whyMatters.replace(/\n\n/g, '</p><p class="post-p">')}</div>
            </section>

            <!-- Section 2: Critical Mistakes -->
            <section class="post-section" id="critical-mistakes">
              <h2 class="post-h2">${b.mistakesHeading || '2. Critical Architecture & Execution Mistakes to Avoid'}</h2>
              <div class="post-p">${b.mistakes.replace(/\n\n/g, '</p><p class="post-p">')}</div>
            </section>

            <!-- In-Content Diagram (if available) -->
            ${b.inContentImage ? `
              <div class="post-diagram-box">
                <img src="${b.inContentImage}" alt="${b.focusKeyword} Architectural Workflow" loading="lazy" />
                <div class="post-diagram-caption">System Flow &amp; Technical Benchmark Schema · Source: Inrank Engineering Labs</div>
              </div>
            ` : ''}

            <!-- Section 3: What to Do Instead -->
            <section class="post-section" id="what-to-do">
              <h2 class="post-h2">${b.whatToDoHeading || '3. Strategic Execution: The Inrank Standard'}</h2>
              <div class="post-p">${b.whatToDo.replace(/\n\n/g, '</p><p class="post-p">')}</div>
            </section>

            <!-- Deep Dive Subsections -->
            ${sectionsHtml}

            <!-- Implementation Checklist -->
            ${checklistHtml}

            <!-- Proof Metrics Grid -->
            ${proofMetricsHtml}

            <!-- Topic Cluster Internal Links -->
            <div class="post-cluster-strip">
              <div class="post-cluster-label">Related Knowledge Cluster</div>
              <div class="post-cluster-links">
                ${relatedPosts.slice(0, 2).map(r => `
                  <a href="/blog/${r.slug}.html" class="cluster-link">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#009d49" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    <span>${r.title}</span>
                  </a>
                `).join('')}
              </div>
            </div>

            <!-- Frequently Asked Questions -->
            ${faqsHtml}

            <!-- Bottom Conversion Box -->
            <div class="post-bottom-cta">
              <h3>Deploy Enterprise Systems That Convert</h3>
              <p>Work directly with Inrank's senior engineers and performance architects to scale organic search revenue, rebuild legacy tech debt, and maximize high-intent commercial pipeline.</p>
              <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:0.5rem;">
                <a href="/contact.html" class="button primary" style="background:#009d49;color:#ffffff;padding:12px 28px;border-radius:999px;font-weight:750;text-decoration:none;">Book Growth Audit</a>
                <a href="https://wa.me/918788823182" class="button secondary" style="background:#ffffff;color:#081424;padding:12px 28px;border-radius:999px;font-weight:750;text-decoration:none;">Quick WhatsApp Chat</a>
              </div>
            </div>

          </article>

          <!-- Sticky Sidebar -->
          <aside class="post-sticky-sidebar">
            
            <!-- Table of Contents Card -->
            <div class="sidebar-box">
              <div class="sidebar-title">In This Guide</div>
              <nav class="toc-nav" id="toc-nav">
                ${tocHtml}
              </nav>
            </div>

            <!-- Free Strategy Audit Card -->
            <div class="sidebar-audit-card">
              <span class="sidebar-audit-badge">100% Free Audit</span>
              <h4 class="sidebar-audit-title">Accelerate Your Search Revenue</h4>
              <p class="sidebar-audit-desc">Get a confidential 30-point technical, SEO, and conversion audit tailored to your infrastructure.</p>
              <a href="/contact.html" style="display:block;text-align:center;background:#081424;color:#ffffff;padding:10px 18px;border-radius:8px;font-size:0.85rem;font-weight:750;text-decoration:none;transition:background 0.2s ease;">Claim Strategy Audit</a>
            </div>

            <!-- WhatsApp Direct Engineer Chat Button -->
            <a href="https://wa.me/918788823182" target="_blank" rel="noopener noreferrer" class="sidebar-wa-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
              <span>Chat with Lead Strategist</span>
            </a>

          </aside>

        </div>

      </div>
    </div>

    <!-- §6 Author Bio Surface Strip (Vinove Style) -->
    <section class="post-author-section">
      <div class="post-author-surface">
        <div class="author-surface-avatar">PM</div>
        <div class="author-surface-content">
          <h3 class="author-surface-name">${b.author || 'Prasad Mhaske'}</h3>
          <div class="author-surface-role">Founder &amp; Principal Systems Strategist at Inrank Technologies</div>
          <p class="author-surface-bio">Prasad directs architecture, search intelligence, and conversion optimization at Inrank Technologies. He advises B2B organizations, industrial enterprises, and venture-backed platforms across Maharashtra and internationally on digital infrastructure dominance.</p>
        </div>
      </div>
    </section>

    <!-- §7 Related Perspectives Grid (Vinove Style) -->
    <section class="post-related-section">
      <div class="post-related-inner">
        <h2 class="post-related-title">Related Perspectives &amp; Guides</h2>
        <div class="blog-grid">
          ${relatedPostsHtml}
        </div>
      </div>
    </section>
  </main>

  ${footerHtml}

  <script src="/js/core.js" defer></script>
  <script>
    // Reading Progress & Dynamic TOC Scrollspy
    document.addEventListener('DOMContentLoaded', function() {
      const progressBar = document.getElementById('reading-progress');
      const tocLinks = document.querySelectorAll('.toc-item');
      const sections = document.querySelectorAll('.post-section, .post-checklist-card, .post-proof-grid, .post-faq-wrap');

      window.addEventListener('scroll', function() {
        const h = document.documentElement;
        const b = document.body;
        const st = 'scrollTop';
        const sh = 'scrollHeight';
        const percent = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
        if (progressBar) progressBar.style.width = percent + '%';

        // TOC active highlight
        let currentId = '';
        sections.forEach(sec => {
          const rect = sec.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 100) {
            currentId = sec.getAttribute('id');
          }
        });

        if (currentId) {
          tocLinks.forEach(link => {
            if (link.getAttribute('href') === '#' + currentId) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });

      // FAQ Accordion interaction
      const faqCards = document.querySelectorAll('.faq-card');
      faqCards.forEach(card => {
        const btn = card.querySelector('.faq-q-btn');
        btn.addEventListener('click', () => {
          const isOpen = card.classList.contains('open');
          faqCards.forEach(c => c.classList.remove('open'));
          if (!isOpen) card.classList.add('open');
        });
      });

      // Copy Link button
      const copyBtn = document.getElementById('copy-link-btn');
      const copyText = document.getElementById('copy-btn-text');
      if (copyBtn) {
        copyBtn.addEventListener('click', function() {
          navigator.clipboard.writeText(window.location.href).then(() => {
            copyText.textContent = 'Copied!';
            setTimeout(() => { copyText.textContent = 'Copy Link'; }, 2000);
          });
        });
      }
    });
  </script>
</body>
</html>
`;

  // Write to both inrank2.0/blog/[slug].html and root blog/[slug].html
  fs.writeFileSync(`inrank2.0/blog/${b.slug}.html`, postHtml);
  fs.writeFileSync(`blog/${b.slug}.html`, postHtml);
});

console.log(`[OK] All ${blogs.length} individual blog post files generated successfully!`);

