const { blogsDigitalMarketing: b1 } = require('./data_blogs_dm_batch1.cjs');
const { blogsDigitalMarketingBatch2: b2 } = require('./data_blogs_dm_batch2.cjs');
const { blogsDigitalMarketingBatch3: b3 } = require('./data_blogs_dm_batch3.cjs');
const { blogsDigitalMarketingBatch4: b4 } = require('./data_blogs_dm_batch4.cjs');
const { blogsDigitalMarketingBatch5: b5 } = require('./data_blogs_dm_batch5.cjs');

const blogsDigitalMarketing = [...b1, ...b2, ...b3, ...b4, ...b5];

module.exports = { blogsDigitalMarketing };
