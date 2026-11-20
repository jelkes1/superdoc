import { SuperDoc } from 'superdoc';
import { unzipSync, strFromU8 } from 'fflate';
import { element, enableExport, report, showError } from '../shared/browser';

const output = element('report');
const substitute = element<HTMLButtonElement>('substitute');
const reset = element<HTMLButtonElement>('reset');
const superdoc = new SuperDoc({
  telemetry: { enabled: false },
  selector: '#editor',
  document: '/SuperDoc.docx',
  ui: { toolbar: { container: '#toolbar', responsiveTo: 'container' } },
  fonts: {
    families: [{ family: 'Carlito', faces: [{ source: '/fonts/Carlito-latin.woff2', weight: 400, style: 'normal' }] }],
  },
  onReady: ({ superdoc: ready }) => {
    enableExport(ready);
    const refresh = () => {
      const rows = ready.fonts.getReport();
      element('raw-report').textContent = JSON.stringify(rows, null, 2);
      output.replaceChildren(...rows.map(font => {
        const item = document.createElement('section');
        item.style.cssText = 'padding:12px 0;border-top:1px solid #d1d5db';
        const title = document.createElement('strong');
        title.textContent = `${font.logicalFamily} → ${font.physicalFamily}`;
        const detail = document.createElement('p');
        detail.textContent = `${font.face?.weight ?? '400'} ${font.face?.style ?? 'normal'} · ${font.loadStatus} · ${font.reason}`;
        const exported = document.createElement('p');
        exported.textContent = `DOCX export: ${font.exportFamily}. API missing flag: ${font.missing ? 'yes' : 'no'}.`;
        item.append(title, detail, exported);
        return item;
      }));
    };
    const stop = ready.fonts.onReport(refresh);
    refresh();
    substitute.disabled = reset.disabled = false;
    const check = element<HTMLButtonElement>('check-export');
    check.disabled = false;
    check.addEventListener('click', async () => {
      check.disabled = true;
      const result = element('export-check');
      result.textContent = 'Checking exported DOCX…';
      try {
        const blob = await ready.export({ exportType: ['docx'], triggerDownload: false });
        const bytes = new Uint8Array(await blob.arrayBuffer());
        const parts = unzipSync(bytes);
        const xml = ['word/document.xml', 'word/styles.xml'].map(name => strFromU8(parts[name])).join('');
        if (!xml.includes('Arial') || xml.includes('Carlito')) throw new Error('Unexpected exported font names. Inspect the Word file.');
        const sha256 = Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', bytes))).map(n => n.toString(16).padStart(2, '0')).join('');
        result.textContent = 'Export checked: Arial retained. Carlito was not written into document or style font names.';
        result.dataset.sha256 = sha256;
        result.dataset.bytes = String(bytes.byteLength);
        const download = element<HTMLAnchorElement>('checked-download');
        const reader = new FileReader();
        download.href = await new Promise<string>((resolve, reject) => {
          reader.onload = () => resolve(String(reader.result));
          reader.onerror = () => reject(new Error('Could not prepare the checked DOCX download.'));
          reader.readAsDataURL(blob);
        });
        download.hidden = false;
      } catch (error) { console.error('Font export diagnostic', error instanceof Error ? error.stack : String(error)); result.textContent = (error instanceof Error ? error.message : String(error)) || 'Export failed. Inspect the console diagnostic before retrying.'; }
      finally { check.disabled = false; }
    });
    substitute.addEventListener('click', async () => {
      substitute.disabled = true;
      try {
        // #region build-guide
        ready.fonts.map({ Arial: 'Carlito' });
        await ready.fonts.preload(['Arial']);
        // #endregion build-guide
        refresh();
        report('Carlito is registered for Arial. Check the load status and exported DOCX font name.');
      } catch (error) { showError(error); }
      finally { substitute.disabled = false; }
    });
    reset.addEventListener('click', () => { ready.fonts.unmap('Arial'); refresh(); report('Runtime substitution removed.'); });
    window.addEventListener('pagehide', () => { stop(); ready.destroy(); }, { once: true });
  },

  onContentError: ({ error }) => showError(error),
  onException: ({ error }) => showError(error),
});
