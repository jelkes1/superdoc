import { SuperDoc } from 'superdoc';
import type { TrackChangesItem } from 'superdoc/ui';
import { element, enableExport, report, showError } from '../shared/browser';

const list = element<HTMLUListElement>('changes');
const count = element('count');
let pending = false;

const superdoc = new SuperDoc({
  selector: '#editor',
  document: '/SuperDoc.docx',
  documentMode: 'suggesting',
  user: { name: 'Example reviewer', email: 'reviewer@example.com' },
  ui: { toolbar: { container: '#toolbar', responsiveTo: 'container' }, comments: false },
  onReady: ({ superdoc: ready }) => {
    enableExport(ready);
    const review = ready.ui.trackChanges;
    const stop = review.observe(({ items, total, listStatus }) => {
      count.textContent = listStatus === 'ready' ? `${total} open changes` : 'Reading changes…';
      list.replaceChildren(...items.map(row));
    });
    window.addEventListener('pagehide', () => { stop(); ready.destroy(); }, { once: true });
  },
  onContentError: ({ error }) => showError(error),
  onException: ({ error }) => showError(error),
});

function row(change: TrackChangesItem) {
  const item = document.createElement('li');
  const label = document.createElement('p');
  label.textContent = [
    change.deletedText ? `Remove “${change.deletedText}”` : '',
    change.insertedText ? `Add “${change.insertedText}”` : '',
  ].filter(Boolean).join(' · ') || change.formattingDeltaSummary || `${change.type} change`;
  const author = document.createElement('small');
  author.textContent = change.author ? `By ${change.author}` : 'Author not provided';
  item.append(label);
  item.append(author);
  for (const action of ['Show', 'Accept', 'Reject'] as const) {
    const button = document.createElement('button');
    button.textContent = action;
    button.type = 'button';
    button.addEventListener('click', async () => {
      if (pending) return;
      pending = true;
      list.querySelectorAll('button').forEach(node => { node.disabled = true; });
      try {
        // #region build-guide
        const review = superdoc.ui.trackChanges;
        const target = { id: change.id, story: change.address?.story };
        if (action === 'Show') {
          const result = await review.scrollTo(target);
          if (!result.success) throw new Error('Could not reveal this change.');
        } else {
          const result = await (action === 'Accept' ? review.acceptAsync(target) : review.rejectAsync(target));
          if (result === false || (result !== true && !result.success)) {
            throw new Error('Review decision failed. Check the document before trying again.');
          }
          report(action === 'Accept' ? 'Change accepted. Export to check the saved DOCX.' : 'Change rejected. Export to check the saved DOCX.');
        }
        // #endregion build-guide

      } catch (error) { showError(error); }
      finally {
        pending = false;
        list.querySelectorAll('button').forEach(node => { node.disabled = false; });
      }
    });
    item.append(button);
  }
  return item;
}
