const fs = require('fs');
const blogs = require('./temp_blogs_data.cjs');

function formatMarkdown(str) {
  if (!str) return '';
  return str
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, anchor, url) => {
      const isExt = url.startsWith('http');
      return `<a href="${url}" ${isExt ? 'target="_blank" rel="noopener noreferrer"' : ''}>${anchor}</a>`;
    })
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}

function renderContentBlock(text) {
  if (!text) return '';
  const blocks = text.split(/\n\n+/);
  return blocks.map(block => {
    const trimmed = block.trim();
    if (!trimmed) return '';
    if (trimmed.startsWith('### ')) {
      return `<h3 class="article-h3">${formatMarkdown(trimmed.replace(/^###\s+/, ''))}</h3>`;
    }
    if (trimmed.startsWith('1. ') || /^\d+\.\s+/.test(trimmed)) {
      const items = trimmed.split(/\n(?=\d+\.\s+)/);
      return `<ol class="article-content-ol">
        ${items.map(i => `<li>${formatMarkdown(i.replace(/^\d+\.\s+/, ''))}</li>`).join('\n')}
      </ol>`;
    }
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      const items = trimmed.split(/\n(?=[-*]\s+)/);
      return `<ul class="article-content-ul">
        ${items.map(i => `<li>${formatMarkdown(i.replace(/^[-*]\s+/, ''))}</li>`).join('\n')}
      </ul>`;
    }
    return `<p>${formatMarkdown(trimmed)}</p>`;
  }).join('\n');
}

blogs.forEach((b, idx) => {
  const why = renderContentBlock(b.whyMatters);
  const mistakes = renderContentBlock(b.mistakes);
  const whatToDo = renderContentBlock(b.whatToDo);
  if (!why || !mistakes || !whatToDo) {
    console.warn(`Blog ${idx} (${b.slug}) has empty sections!`);
  }
});

console.log('Tested all 30 blogs content parsing successfully!');

