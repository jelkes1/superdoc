import { SuperDoc } from 'superdoc';
import { enableExport, showError } from '../shared/browser';

// #region build-guide
new SuperDoc({
  telemetry: { enabled: false },
  selector: '#editor',
  document: '/testkit_docs/case-formatting-gauntlet.docx',
  documentMode: 'editing',
  ui: { toolbar: { container: '#toolbar', responsiveTo: 'container' } },
  onReady: ({ superdoc }) => enableExport(superdoc),

  onContentError: ({ error }) => showError(error),
  onException: ({ error }) => showError(error),
});
// #endregion build-guide
