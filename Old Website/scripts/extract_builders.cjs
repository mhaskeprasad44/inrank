const fs = require('fs');
const readline = require('readline');

async function extract() {
  const rl = readline.createInterface({
    input: fs.createReadStream('C:/Users/PrasadMhaske/.gemini/antigravity/brain/0ddbe105-ce59-4fdf-afa3-c065212d3374/.system_generated/logs/transcript_full.jsonl'),
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    if (line.includes('"step_index":5325') || line.includes('"step_index":5323')) {
      try {
        const obj = JSON.parse(line);
        const call = (obj.tool_calls || []).find(t => t.name === 'write_file');
        if (call) {
          const fn = call.args.Path.replace(/^.*[\\\/]/, '').replace(/"/g, '');
          fs.writeFileSync('scripts/' + fn, call.args.Content);
          console.log('Saved', fn, 'length:', call.args.Content.length);
        }
      } catch (e) {
        console.error('Error parsing step 5323/5325:', e.message);
      }
    }
    if (line.includes('"step_index":5341') || line.includes('"step_index":5298')) {
      try {
        const obj = JSON.parse(line);
        const call = (obj.tool_calls || []).find(t => t.name === 'write_file');
        if (call) {
          const fn = call.args.Path.replace(/^.*[\\\/]/, '').replace(/"/g, '');
          fs.writeFileSync('scripts/' + fn, call.args.Content);
          console.log('Saved', fn, 'length:', call.args.Content.length);
        }
      } catch (e) {
        console.error('Error parsing step 5298/5341:', e.message);
      }
    }
  }
}
extract();

