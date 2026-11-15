# Build your own review queue

Keep the editor toolbar and render your own tracked change queue. Each row can reveal, accept or reject its exact change, and reports failed decisions.

## Run

Requires Node.js 22 or newer. `npm install` then `npm run dev`. Open the localhost URL Vite prints. To check and build the project, run `npm run check` and `npm run build`.

Browser editor: 2.31.0. Direct dependencies are pinned in package.json.

## Try it

Accepting or rejecting a change removes its row and updates the open count. Export the DOCX to inspect the result.

The included public DOCX is the original homepage sample. It is not your uploaded document or the current edited demo state. Export a separate DOCX, then reopen it in Word or SuperDoc. Built-in and custom review examples use Suggesting mode. The application form fills text fields directly.

## Files

- package.json
- examples/review-custom/main.ts
- examples/review-custom/index.html
- examples/shared/browser.ts
- examples/shared/style.css
- vite.config.ts
- tsconfig.json
- public/SuperDoc.docx

## Continue

[Current documentation](https://docs.superdoc.dev/editor/custom-ui/tracked-changes/)
[Try the homepage demo](https://www.superdoc.dev/?doc=ai#editor)
[SuperDoc licensing](https://docs.superdoc.dev/editor/license/)

The shared browser.ts file contains the export button, status messages and CSS imports. Document setup and task logic are in main.ts.
