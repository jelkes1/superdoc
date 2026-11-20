# Review tracked changes

The same mutual agreement as the homepage, with existing tracked changes and comments. Create an edit in Suggesting mode, accept or reject a change, then export the DOCX.

## Run

Requires Node.js 22 or newer. `npm install` then `npm run dev`. Open the localhost URL Vite prints. To check and build the project, run `npm run check` and `npm run build`.

Browser editor: 2.33.0. Direct dependencies are pinned in package.json.

## Try it

The review controls show the existing changes. Your accepted edits remain in the exported file; rejected edits are removed.

The included public DOCX is the original homepage sample. It is not your uploaded document or the current edited demo state. Export a separate DOCX, then reopen it in Word or SuperDoc. Built-in and custom review examples use Suggesting mode. The application form fills text fields directly.

## Files

- package.json
- examples/review-built-in/main.ts
- examples/review-built-in/index.html
- examples/shared/browser.ts
- examples/shared/style.css
- vite.config.ts
- tsconfig.json
- public/SuperDoc.docx

## Continue

[Current documentation](https://docs.superdoc.dev/editor/built-in-ui/comments/)
[Try the homepage demo](https://www.superdoc.dev/?doc=ai#editor)
[SuperDoc licensing](https://docs.superdoc.dev/editor/license/)

The shared browser.ts file contains the export button, status messages and CSS imports. Document setup and task logic are in main.ts.
