const fs = require('fs');
const zlib = require('zlib');

const buf = fs.readFileSync('C:/Users/PrasadMhaske/.gemini/antigravity/brain/0ddbe105-ce59-4fdf-afa3-c065212d3374/ref_homepage_2_hero.png');
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

const raw = zlib.inflateSync(Buffer.concat(idatChunks));
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

function getPx(x, y) {
  const idx = (y * width + x) * bpp;
  return `rgb(${uncompressed[idx]},${uncompressed[idx+1]},${uncompressed[idx+2]})`;
}

console.log('ref_homepage_2_hero.png dimensions:', width, 'x', height);
console.log('Top header area y=40, x=700:', getPx(700, 40));
console.log('Stickers area y=180, x=700:', getPx(700, 180));
console.log('Headline area y=320, x=700:', getPx(700, 320));
console.log('Marquee area y=550, x=700:', getPx(700, 550));
console.log('Background y=750, x=100:', getPx(100, 750));

