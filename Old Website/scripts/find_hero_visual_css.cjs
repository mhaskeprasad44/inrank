const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('C:/Users/PrasadMhaske/.gemini/antigravity/brain/0ddbe105-ce59-4fdf-afa3-c065212d3374/.system_generated/logs/transcript_full.jsonl')
});

rl.on('line', line => {
  const obj = JSON.parse(line);
  if (obj.step_index >= 5900 && obj.step_index <= 5930) {
    if (obj.tool_calls) {
      obj.tool_calls.forEach(tc => {
        if (tc.args && JSON.stringify(tc.args).includes('.hero-visual-card')) {
          console.log('FOUND IN TOOL CALL AT STEP', obj.step_index);
          console.log(JSON.stringify(tc.args).slice(0, 500));
        }
      });
    }
    if (obj.content && obj.content.includes('.hero-visual-card {')) {
      console.log('FOUND IN CONTENT AT STEP', obj.step_index);
      const idx = obj.content.indexOf('.hero-visual-card {');
      console.log(obj.content.substring(idx - 50, idx + 1500));
    }
  }
});

