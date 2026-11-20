# Propose a tracked edit on your server

A complete Node.js agent loop with an OpenAI adapter, bounded tool calls, tracked editing and checked receipts. It writes a separate reviewed file for a person to open in the browser.

## Run

Requires Node.js 22 or newer. Set OPENAI_API_KEY and OPENAI_MODEL in your server environment, then run `npm start`. This calls your model provider and may incur its charges. Never expose your key in browser code. The script refuses to overwrite reviewed.docx; move or remove your own prior output before rerunning.

Install dependencies with `npm install` first. Node SDK: 2.30.0. Direct dependencies are pinned in package.json.

## Try it

The output proposes changing the agreement title to Mutual Agreement for DOCX Excellence. It preserves the source and leaves review decisions to a person. This saved-file example does not live-sync with the homepage.

The included public DOCX is the original homepage sample. It is not your uploaded document or the current edited demo state. The agent writes reviewed.docx separately. Upload that output at https://www.superdoc.dev/#editor to accept or reject its proposed edit. No collaboration server is included.

## Files

- package.json
- examples/review-server/main.mjs
- examples/review-server/agent.mjs
- public/SuperDoc.docx

## Continue

[Current documentation](https://docs.superdoc.dev/agents/build/build-an-agent/)
[Try the homepage demo](https://www.superdoc.dev/?doc=ai#editor)
[SuperDoc licensing](https://docs.superdoc.dev/editor/license/)

main.mjs implements the model adapter; agent.mjs contains the full tool loop. Automated SDK checks use a deterministic model adapter; they do not establish the result of your selected live model.
