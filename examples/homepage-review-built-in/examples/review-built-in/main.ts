import { SuperDoc } from 'superdoc';
import { element, enableExport, showError } from '../shared/browser';

new SuperDoc({
  telemetry: { enabled: false },
  selector: '#editor',
  document: '/SuperDoc.docx',
  documentMode: 'suggesting',
  user: { name: 'Example reviewer', email: 'reviewer@example.com' },
  ui: { toolbar: { container: '#toolbar', responsiveTo: 'container' }, comments: { layout: 'auto' } },
  onReady: ({ superdoc }) => {
    // #region build-guide
    // Reuse SuperDoc's review UI in your application's own container.
    superdoc.addCommentsList(element('review'));
    enableExport(superdoc);
    // #endregion build-guide

  },
  onContentError: ({ error }) => showError(error),
  onException: ({ error }) => showError(error),
});
