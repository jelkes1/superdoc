import { SuperDoc } from 'superdoc';
import { element, enableExport, report, showError } from '../shared/browser';
import { fillTextFields } from '../shared/fields';

const form = element<HTMLFormElement>('fields');
const apply = element<HTMLButtonElement>('apply');

new SuperDoc({
  telemetry: { enabled: false },
  selector: '#editor',
  document: '/testkit_docs/template-service-agreement.docx',
  ui: { toolbar: { container: '#toolbar', responsiveTo: 'container' }, contentControls: true },
  onReady: ({ superdoc }) => {
    enableExport(superdoc);
    apply.disabled = false;
    form.addEventListener('submit', async event => {
      event.preventDefault();
      if (apply.disabled) return;
      apply.disabled = true;
      element<HTMLButtonElement>('export').disabled = true;
      try {
        // #region build-guide
        const doc = superdoc.activeEditor?.doc;
        if (!doc) throw new Error('The document is not ready.');
        // Validate first, then update every distinct occurrence of each tag.
        const values = [...new FormData(form)].map(([tag, value]): [string, string] => [tag, String(value)]);
        const updated = await fillTextFields(doc, values);
        // #endregion build-guide

        report(`Updated ${updated} field occurrences. Export to check the saved agreement.`);
      } catch (error) { showError(error); }
      finally {
        apply.disabled = false;
        element<HTMLButtonElement>('export').disabled = false;
      }
    });
  },
  onContentError: ({ error }) => showError(error),
  onException: ({ error }) => showError(error),
});
