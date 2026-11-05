const fs = require('fs');
const readline = require('readline');

async function inspectTranscript() {
  const fileStream = fs.createReadStream('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\.system_generated\\logs\\transcript.jsonl');
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

  const steps = [];
  for await (const line of rl) {
    if (line.trim()) {
      try {
        const parsed = JSON.parse(line);
        if (parsed.type === 'USER_INPUT' || parsed.source === 'USER_EXPLICIT' || (parsed.media && parsed.media.length > 0)) {
          steps.push({
            step_index: parsed.step_index,
            source: parsed.source,
            type: parsed.type,
            content: parsed.content ? parsed.content.substring(0, 200) : '',
            media: parsed.media
          });
        }
      } catch (e) {}
    }
  }

  console.log('Recent user inputs and media:', JSON.stringify(steps.slice(-10), null, 2));
}

inspectTranscript();

