import OpenAI from 'openai';
import { resolve } from 'node:path';
import { runAgent } from './agent.mjs';

if (!process.env.OPENAI_API_KEY || !process.env.OPENAI_MODEL) {
  throw new Error('Set OPENAI_API_KEY and OPENAI_MODEL in your server environment. Never put them in browser code.');
}
const openai = new OpenAI();
// #region build-guide
const result = await runAgent({
  input: resolve('public/SuperDoc.docx'),
  output: resolve('reviewed.docx'),
  callModel: async ({ messages, tools }) => {
    const response = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL,
      messages,
      tools,
      parallel_tool_calls: false,
    });
    const message = response.choices[0]?.message;
    if (!message) throw new Error('The model returned no message.');
    return message;
  },
});
// #endregion build-guide

console.log(`Saved ${result.output}. Upload this file to the browser demo to review the proposed edit.`);
