# Embed a DOCX editor

Start with the public sample, then replace the document URL with a file your application is authorized to load. Uploaded files and shared room contents are never included in this project.

## Run

Requires Node.js 22 or newer. `npm install` then `npm run dev`. Open the localhost URL Vite prints. To check and build the project, run `npm run check` and `npm run build`.

Browser editor: 2.31.0. Direct dependencies are pinned in package.json.

## Try it

Open, edit and export the public sample. Your application owns access, storage and version history.

The included public DOCX is the original homepage sample. It is not your uploaded document or the current edited demo state. Export a separate DOCX, then reopen it in Word or SuperDoc. Built-in and custom review examples use Suggesting mode. The application form fills text fields directly.

## Files

- package.json
- examples/editor/main.ts
- examples/editor/index.html
- examples/shared/browser.ts
- examples/shared/style.css
- vite.config.ts
- tsconfig.json
- public/SuperDoc.docx

## Continue

[Current documentation](https://docs.superdoc.dev/editor/quickstart/)
[Try the homepage demo](https://www.superdoc.dev/?doc=ai#editor)
[SuperDoc licensing](https://docs.superdoc.dev/editor/license/)

The shared browser.ts file contains the export button, status messages and CSS imports. Document setup and task logic are in main.ts.
