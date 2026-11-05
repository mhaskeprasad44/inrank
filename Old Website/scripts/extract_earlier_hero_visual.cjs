const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('C:/Users/PrasadMhaske/.gemini/antigravity/brain/0ddbe105-ce59-4fdf-afa3-c065212d3374/.system_generated/logs/transcript_full.jsonl')
});

rl.on('line', line => {
  const obj = JSON.parse(line);
  if (obj.step_index >= 5920 && obj.step_index <= 5924) {
    if (obj.content && obj.content.includes('hero-visual-card')) {
      console.log('STEP', obj.step_index, obj.content);
    }
  }
});

