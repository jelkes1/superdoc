import {test,expect} from '@playwright/test';
import fs from 'node:fs/promises';
import JSZip from 'jszip';
test('opens the public document, performs the workflow and exports native Word content',async({page})=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('/examples/template/');await expect(page.locator('#export')).toBeEnabled({timeout:120000});await expect(page.locator('.superdoc-text-run').first()).toBeVisible();
 for(const [name,value]of[['client_legal_name','Example Client LLC'],['project_name','Example project']])await page.locator('[name="'+name+'"]').fill(value);await page.locator('#apply').click();await expect(page.locator('#status')).toContainText('Updated');
 const pending=page.waitForEvent('download');await page.locator('#export').click();const file=await(await pending).path();expect(file).toBeTruthy();const zip=await JSZip.loadAsync(await fs.readFile(file)),xml=await zip.file('word/document.xml').async('string');
 expect(xml).toContain('Example Client LLC');expect(xml).toContain('Example project');
 expect(errors).toEqual([]);
});
