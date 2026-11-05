const fs = require('fs');

const workHtml = fs.readFileSync('inrank2.0/our-work.html', 'utf8');
console.log('--- our-work.html items check ---');
const workCards = workHtml.match(/<article[\s\S]*?<\/article>/gi) || [];
console.log('Article tags in our-work.html:', workCards.length);
const filterTags = workHtml.match(/data-category=["']([^"']+)["']/gi) || [];
console.log('data-category count:', filterTags.length);
if (filterTags.length > 0) console.log('Sample data-category:', filterTags.slice(0, 5));

const csHtml = fs.readFileSync('inrank2.0/case-studies.html', 'utf8');
console.log('--- case-studies.html items check ---');
const csCards = csHtml.match(/<article[\s\S]*?<\/article>/gi) || [];
console.log('Article tags in case-studies.html:', csCards.length);
const csDataCat = csHtml.match(/data-category=["']([^"']+)["']/gi) || [];
console.log('data-category in case-studies:', csDataCat.length);

const indexHtml = fs.readFileSync('inrank2.0/index.html', 'utf8');
console.log('--- index.html mobile nav check ---');
const mobNavMatch = indexHtml.match(/class=["'][^"']*(?:mob|drawer|menu)[^"']*["']/gi) || [];
console.log('Mobile classes sample:', [...new Set(mobNavMatch)].slice(0, 10));

