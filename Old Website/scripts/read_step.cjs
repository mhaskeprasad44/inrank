const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: fs.createReadStream('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\.system_generated\\logs\\transcript.jsonl')
});
const userSteps = [];
rl.on('line', line => {
  if (line.includes('"source":"USER_EXPLICIT"') || line.includes('"type":"USER_INPUT"')) {
    userSteps.push(JSON.parse(line));
  }
});
rl.on('close', () => {
  console.log('Last 3 user steps:', userSteps.slice(-3).map(s => ({ idx: s.step_index, content: s.content, media: s.media })));
});
