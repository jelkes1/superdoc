import type { BrowserDocumentApi } from 'superdoc/ui';

export async function fillTextFields(doc: Pick<BrowserDocumentApi, 'contentControls'>, values: Iterable<[string, string]>) {
  const matches = await Promise.all([...values].map(async ([tag, value]) => {
    const { items } = await doc.contentControls.selectByTag({ tag });
    if (!items.length || items.some(item => item.controlType !== 'text')) {
      throw new Error(`Expected text fields for ${tag}. Check the template.`);
    }
    return { items, value };
  }));
  let completed = 0;
  for (const { items, value } of matches) {
    for (const { target } of items) {
      const result = await doc.contentControls.text.setValue({ target, value });
      if (!result.success) throw new Error(`Field update failed after ${completed} completed updates. Review before exporting.`);
      completed++;
    }
  }
  return completed;
}
