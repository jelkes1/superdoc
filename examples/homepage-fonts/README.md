# Inspect DOCX font resolution

Inspect requested and rendered families, then load an explicit Arial to Carlito substitution. The included Latin regular face is an evaluation input, not a complete font collection.

## Run

Requires Node.js 22 or newer. `npm install` then `npm run dev`. Open the localhost URL Vite prints. To check and build the project, run `npm run check` and `npm run build`.

Browser editor: 2.31.0. Direct dependencies are pinned in package.json.

## Try it

The report distinguishes logical and render families. A loaded explicit mapping is a rendering choice, not proof of a faithful font match. Export keeps the logical font name.

The included public DOCX is the original homepage sample. It is not your uploaded document or the current edited demo state. Export a separate DOCX, then reopen it in Word or SuperDoc. Built-in and custom review examples use Suggesting mode. The application form fills text fields directly.

## Files

- package.json
- examples/fonts/main.ts
- examples/fonts/index.html
- examples/shared/browser.ts
- examples/shared/style.css
- vite.config.ts
- tsconfig.json
- FONT-NOTES.md
- public/SuperDoc.docx

## Continue

[Current documentation](https://docs.superdoc.dev/editor/fonts/)
[Try the homepage demo](https://www.superdoc.dev/?doc=ai#editor)
[SuperDoc licensing](https://docs.superdoc.dev/editor/license/)

The shared browser.ts file contains the export button, status messages and CSS imports. Document setup and task logic are in main.ts.
