# Open the 1,000-page agreement

Embed the large agreement with the same browser Editor setup. The page window and scroll container keep the integration bounded as the document grows.

## Run

Requires Node.js 22 or newer. `npm install` then `npm run dev`. Open the localhost URL Vite prints. To check and build the project, run `npm run check` and `npm run build`.

Browser editor: 2.31.0. Direct dependencies are pinned in package.json.

## Build for a large document

1. Give the Editor its own scroll container. In this project, shared/style.css sets #editor to height: 76vh and overflow: auto, so scrolling stays inside the document.

2. Keep page virtualization enabled. SuperDoc virtualizes paginated documents by default; loading this file does not require mounting 1,000 page elements or splitting it into separate editors.

3. To tune scrolling, adjust layoutEngineOptions.virtualization.window and overscan only after measuring your workload. Use onPaginationUpdate and totalPages for a page-count display, independently of how many pages are mounted.

[Page window and pagination API](https://docs.superdoc.dev/editor/performance-and-large-documents/)

## Try it

The document opens progressively and remains editable. Use your own workload to assess speed; this example makes no performance guarantee.

The included public DOCX is the original homepage sample. It is not your uploaded document or the current edited demo state. Export a separate DOCX, then reopen it in Word or SuperDoc. Built-in and custom review examples use Suggesting mode. The application form fills text fields directly.

## Files

- package.json
- examples/1000pages/main.ts
- examples/1000pages/index.html
- examples/shared/browser.ts
- examples/shared/style.css
- vite.config.ts
- tsconfig.json
- public/testkit_docs/msa-1000pages.docx

## Continue

[Current documentation](https://docs.superdoc.dev/editor/performance-and-large-documents/)
[Try the homepage demo](https://www.superdoc.dev/?doc=1000pages#editor)
[SuperDoc licensing](https://docs.superdoc.dev/editor/license/)

The shared browser.ts file contains the export button, status messages and CSS imports. Document setup and task logic are in main.ts.
