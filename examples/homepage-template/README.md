# Fill the service agreement

The same six tagged text fields as the homepage. Fill the form, update every matching occurrence, then export the agreement. This sample has one occurrence per tag; the helper also handles repeated tags in your templates.

## Run

Requires Node.js 22 or newer. `npm install` then `npm run dev`. Open the localhost URL Vite prints. To check and build the project, run `npm run check` and `npm run build`.

Browser editor: 2.31.0. Direct dependencies are pinned in package.json.

## Try it

The application values replace the placeholders in the DOCX. A missing tag or failed update produces an error instead of a success message.

The included public DOCX is the original homepage sample. It is not your uploaded document or the current edited demo state. Export a separate DOCX, then reopen it in Word or SuperDoc. Built-in and custom review examples use Suggesting mode. The application form fills text fields directly.

## Files

- package.json
- examples/template/main.ts
- examples/template/index.html
- examples/shared/browser.ts
- examples/shared/style.css
- examples/shared/fields.ts
- vite.config.ts
- tsconfig.json
- public/testkit_docs/template-service-agreement.docx

## Continue

[Current documentation](https://docs.superdoc.dev/editor/content-controls/fill-a-docx-template/)
[Try the homepage demo](https://www.superdoc.dev/?doc=template#editor)
[SuperDoc licensing](https://docs.superdoc.dev/editor/license/)

The shared browser.ts file contains the export button, status messages and CSS imports. Document setup and task logic are in main.ts.
