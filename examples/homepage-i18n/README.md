# Edit international and RTL text

Embed one DOCX containing mixed left-to-right and right-to-left text. Document direction and font resolution are separate from the direction and theme of your application UI.

## Run

Requires Node.js 22 or newer. `npm install` then `npm run dev`. Open the localhost URL Vite prints. To check and build the project, run `npm run check` and `npm run build`.

Browser editor: 2.33.0. Direct dependencies are pinned in package.json.

## Build mixed-direction editing

1. Set the intended paragraph direction in the source Word document, then load it with the setup above. This sample contains both paragraph bidi and text-run rtl markers; Arabic or Hebrew text does not require turning the whole application right-to-left.

2. Keep the host UI direction independent. A page-wide dir="rtl" or CSS direction rule changes your controls too and cannot replace the direction stored in each DOCX paragraph and run.

3. Provide the fonts your audience needs. When a requested family is unavailable, register licensed web-font faces with fonts.families, matching the family name in the DOCX. The browser fallback can change glyphs and pagination even while export retains the requested name.

[Register document fonts](https://docs.superdoc.dev/editor/fonts/)

## Try it

Review the mixed text directions, edit a paragraph and export a copy. Check direction, punctuation and font coverage in the saved DOCX.

The included public DOCX is the original homepage sample. It is not your uploaded document or the current edited demo state. Export a separate DOCX, then reopen it in Word or SuperDoc. Built-in and custom review examples use Suggesting mode. The application form fills text fields directly.

## Files

- package.json
- examples/i18n/main.ts
- examples/i18n/index.html
- examples/shared/browser.ts
- examples/shared/style.css
- vite.config.ts
- tsconfig.json
- public/testkit_docs/international.docx

## Continue

[Current documentation](https://docs.superdoc.dev/editor/docx-support/)
[Try the homepage demo](https://www.superdoc.dev/?doc=i18n#editor)
[SuperDoc licensing](https://docs.superdoc.dev/editor/license/)

The shared browser.ts file contains the export button, status messages and CSS imports. Document setup and task logic are in main.ts.
