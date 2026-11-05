const fs = require('fs');
const zlib = require('zlib');

const buf = fs.readFileSync('C:/Users/PrasadMhaske/.gemini/antigravity/brain/0ddbe105-ce59-4fdf-afa3-c065212d3374/.user_uploaded/media_1793774926916_1bd44ff1.png');

let offset = 8;
const idatChunks = [];
let width = 0, height = 0, colorType = 0;

while (offset < buf.length) {
  const len = buf.readUInt32BE(offset);
  const type = buf.toString('ascii', offset + 4, offset + 8);
  if (type === 'IHDR') {
    width = buf.readUInt32BE(offset + 8);
    height = buf.readUInt32BE(offset + 12);
    colorType = buf.readUInt8(offset + 17);
  } else if (type === 'IDAT') {
    idatChunks.push(buf.subarray(offset + 8, offset + 8 + len));
  }
  offset += 12 + len;
}

const compressed = Buffer.concat(idatChunks);
const raw = zlib.inflateSync(compressed);
const bpp = colorType === 6 ? 4 : 3;
const stride = 1 + width * bpp;
const uncompressed = Buffer.alloc(width * height * bpp);

for (let y = 0; y < height; y++) {
  const filterType = raw[y * stride];
  const scanline = raw.subarray(y * stride + 1, (y + 1) * stride);
  const prevLine = y > 0 ? uncompressed.subarray((y - 1) * width * bpp, y * width * bpp) : null;
  const currentLine = uncompressed.subarray(y * width * bpp, (y + 1) * width * bpp);

  for (let x = 0; x < width * bpp; x++) {
    const rawVal = scanline[x];
    const a = x >= bpp ? currentLine[x - bpp] : 0;
    const b = prevLine ? prevLine[x] : 0;
    const c = (prevLine && x >= bpp) ? prevLine[x - bpp] : 0;

    let val = 0;
    if (filterType === 0) val = rawVal;
    else if (filterType === 1) val = (rawVal + a) & 0xff;
    else if (filterType === 2) val = (rawVal + b) & 0xff;
    else if (filterType === 3) val = (rawVal + Math.floor((a + b) / 2)) & 0xff;
    else if (filterType === 4) {
      const p = a + b - c;
      const pa = Math.abs(p - a);
      const pb = Math.abs(p - b);
      const pc = Math.abs(p - c);
      let pr = c;
      if (pa <= pb && pa <= pc) pr = a;
      else if (pb <= pc) pr = b;
      val = (rawVal + pr) & 0xff;
    }
    currentLine[x] = val;
  }
}

function getPixel(x, y) {
  const idx = (y * width + x) * bpp;
  return {
    r: uncompressed[idx],
    g: uncompressed[idx + 1],
    b: uncompressed[idx + 2]
  };
}

const midY = 25;
let dockLeft = -1, dockRight = -1;
let ctaLeft = -1, ctaRight = -1;

for (let x = 0; x < width; x++) {
  const p = getPixel(x, midY);
  // Detect dark dock: dark slate (r: 40-75, g: 50-85, b: 65-100)
  const isDock = p.r > 35 && p.r < 90 && p.g > 45 && p.g < 100 && p.b > 55 && p.b < 115;
  // Detect white CTA button: r > 240, g > 240, b > 240
  const isCta = p.r > 230 && p.g > 230 && p.b > 230;

  if (x < 800) {
    if (isDock) {
      if (dockLeft === -1) dockLeft = x;
      dockRight = x;
    }
  } else {
    if (isCta) {
      if (ctaLeft === -1) ctaLeft = x;
      ctaRight = x;
    }
  }
}

console.log('Dock starts at x =', dockLeft, 'ends at x =', dockRight, 'width =', dockRight - dockLeft);
console.log('CTA button starts at x =', ctaLeft, 'ends at x =', ctaRight, 'width =', ctaRight - ctaLeft);

// Check between dockRight and ctaLeft:
console.log('Gap between dock and CTA:', ctaLeft - dockRight, 'pixels');
console.log('Pixel at gap center x=' + Math.floor((dockRight + ctaLeft)/2) + ':', getPixel(Math.floor((dockRight + ctaLeft)/2), midY));
console.log('Pixel to the left of dock x=50:', getPixel(50, midY));
console.log('Pixel to the right of CTA x=1000:', getPixel(1000, midY));
