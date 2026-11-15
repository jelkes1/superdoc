import type { SuperDoc } from 'superdoc';
import 'superdoc/style.css';
import './style.css';

export function element<T extends HTMLElement>(id: string): T {
  const node = document.getElementById(id);
  if (!node) throw new Error(`Missing element: ${id}`);
  return node as T;
}

const status = element<HTMLOutputElement>('status');
const exportButton = element<HTMLButtonElement>('export');
export function report(message: string) { status.value = message; }
export function showError(error: unknown) {
  report(error instanceof Error ? error.message : String(error));
}

export function enableExport(superdoc: SuperDoc) {
  report('Ready. Edit the document, then export a copy.');
  exportButton.disabled = false;
  exportButton.addEventListener('click', async () => {
    exportButton.disabled = true;
    try {
      await superdoc.export({ exportType: ['docx'], exportedName: 'edited-example', triggerDownload: true });
      report('DOCX exported. Open the saved file to check your changes.');
    } catch (error) { showError(error); }
    finally { exportButton.disabled = false; }
  });
}
