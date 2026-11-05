async function testDiscoveryEndpoints() {
  const endpoints = ['/robots.txt', '/sitemap.xml', '/llms.txt', '/llms-full.txt', '/favicon.ico'];
  console.log('Testing discovery endpoints on http://localhost:8080...');
  for (const ep of endpoints) {
    const res = await fetch('http://localhost:8080' + ep);
    const text = await res.text();
    console.log(`[STATUS ${res.status}] ${ep} (${text.length} bytes)`);
  }
}

testDiscoveryEndpoints().catch(console.error);

