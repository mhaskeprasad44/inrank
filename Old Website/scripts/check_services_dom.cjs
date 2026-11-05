const { spawn } = require('child_process');
const http = require('http');

async function inspectServices() {
  const tabs = await new Promise((resolve) => {
    http.get('http://127.0.0.1:9433/json', res => {
      let d = ''; res.on('data', c => d += c); res.on('end', () => resolve(JSON.parse(d)));
    }).on('error', () => resolve([]));
  });
  console.log('Tabs:', tabs.length);
}
inspectServices();

