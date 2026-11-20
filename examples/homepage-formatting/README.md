# Edit a formatted Word document

Embed a formatted Word file without rebuilding its pages in HTML. The sample brings its own paragraph styles, list definitions and table structures.

## Run

Requires Node.js 22 or newer. `npm install` then `npm run dev`. Open the localhost URL Vite prints. To check and build the project, run `npm run check` and `npm run build`.

Browser editor: 2.33.0. Direct dependencies are pinned in package.json.

## Build on the Word template styles

1. Design headings, nested lists and tables in a Word template, save it as DOCX, then pass its URL to the Editor above. This sample contains paragraph-style references and multilevel numbering definitions, rather than an HTML reconstruction.

2. Style the surrounding application separately. Changing your site heading, list or table CSS is not a way to define Word paragraph styles or numbering; avoid broad rules that reset the Editor document descendants.

3. Supply the document fonts when devices do not have them. Use fonts.families for the requested faces, then export DOCX through the included button to keep the edited file in the Word workflow.

[Configure document fonts and substitutions](https://docs.superdoc.dev/editor/fonts/)

## Try it

Your text edit is saved. Inspect the styles and references relevant to your files rather than treating one sample as a fidelity guarantee.

The included public DOCX is the original homepage sample. It is not your uploaded document or the current edited demo state. Export a separate DOCX, then reopen it in Word or SuperDoc. Built-in and custom review examples use Suggesting mode. The application form fills text fields directly.

## Files

- package.json
- examples/formatting/main.ts
- examples/formatting/index.html
- examples/shared/browser.ts
- examples/shared/style.css
- vite.config.ts
- tsconfig.json
- public/testkit_docs/case-formatting-gauntlet.docx

## Continue

[Current documentation](https://docs.superdoc.dev/editor/docx-support/)
[Try the homepage demo](https://www.superdoc.dev/?doc=formatting#editor)
[SuperDoc licensing](https://docs.superdoc.dev/editor/license/)

The shared browser.ts file contains the export button, status messages and CSS imports. Document setup and task logic are in main.ts.
