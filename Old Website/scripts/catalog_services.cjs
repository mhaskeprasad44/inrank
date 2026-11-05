const fs = require('fs');
const path = require('path');

const servicesDir = 'inrank2.0/services';
const files = fs.readdirSync(servicesDir).filter(f => f.endsWith('.html'));

console.log('Total files in inrank2.0/services:', files.length);

const services = files.map(file => {
  const content = fs.readFileSync(path.join(servicesDir, file), 'utf8');
  const titleMatch = content.match(/<title>([\s\S]*?)<\/title>/);
  const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  const descMatch = content.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"/i);
  
  return {
    file,
    title: titleMatch ? titleMatch[1].replace(/ \| Inrank.*$/, '').trim() : file,
    h1: h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ') : '',
    desc: descMatch ? descMatch[1] : ''
  };
});

console.log(JSON.stringify(services, null, 2));

