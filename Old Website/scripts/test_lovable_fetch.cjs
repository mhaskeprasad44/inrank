const fs = require('fs');

async function testFetch() {
  try {
    const res = await fetch('https://id-preview--8bef5f12-eade-4f08-ad18-1d342af2cabc.lovable.app/blogs/chemical-free-living/natural-ways-to-freshen-bathrooms-and-reduce-unpleasant-odours', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      },
      redirect: 'manual'
    });
    console.log('Status:', res.status);
    console.log('Location:', res.headers.get('location'));
    const text = await res.text();
    console.log('Body length:', text.length);
    console.log('Body start:', text.slice(0, 500));
  } catch (err) {
    console.error(err);
  }
}
testFetch();

