# Edit tables and columns

Embed a DOCX with Word tables and section columns. The table structure and column layout come from the file, while your application supplies the Editor container and controls.

## Run

Requires Node.js 22 or newer. `npm install` then `npm run dev`. Open the localhost URL Vite prints. To check and build the project, run `npm run check` and `npm run build`.

Browser editor: 2.33.0. Direct dependencies are pinned in package.json.

## Build tables and columns in the document

1. Create tables in your Word template, set cell widths and merge cells there, then save the DOCX. This sample contains fixed-width table grids; the Editor reads those structures from the file.

2. For a newspaper-style layout, set columns on the relevant Word section. This sample has two-column sections, which are separate from the columns inside a table.

3. Load that DOCX with the setup above and let the built-in toolbar edit its tables. Do not recreate the document using HTML tables or CSS columns around the Editor. Your app can style its surrounding controls independently.

[Choose built-in or custom controls](https://docs.superdoc.dev/editor/custom-ui/overview/)

## Try it

Your cell edit is saved in the exported DOCX. Evaluate the table structures and layout your product needs.

The included public DOCX is the original homepage sample. It is not your uploaded document or the current edited demo state. Export a separate DOCX, then reopen it in Word or SuperDoc. Built-in and custom review examples use Suggesting mode. The application form fills text fields directly.

## Files

- package.json
- examples/tables-columns/main.ts
- examples/tables-columns/index.html
- examples/shared/browser.ts
- examples/shared/style.css
- vite.config.ts
- tsconfig.json
- public/testkit_docs/advanced-tables-columns.docx

## Continue

[Current documentation](https://docs.superdoc.dev/editor/docx-support/)
[Try the homepage demo](https://www.superdoc.dev/?doc=tables-columns#editor)
[SuperDoc licensing](https://docs.superdoc.dev/editor/license/)

The shared browser.ts file contains the export button, status messages and CSS imports. Document setup and task logic are in main.ts.
