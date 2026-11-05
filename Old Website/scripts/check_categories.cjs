const blogs = require('./temp_blogs_data.cjs');

const catCounts = {};
blogs.forEach(b => {
  catCounts[b.category] = (catCounts[b.category] || 0) + 1;
});

console.log(JSON.stringify(catCounts, null, 2));

