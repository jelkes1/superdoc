import {test,expect} from '@playwright/test';
import fs from 'node:fs/promises';
import JSZip from 'jszip';
test('opens the public document, performs the workflow and exports native Word content',async({page})=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('/examples/review-custom/');await expect(page.locator('#export')).toBeEnabled({timeout:120000});await expect(page.locator('.superdoc-text-run').first()).toBeVisible();
 const actions=page.getByRole('button',{name:'Accept',exact:true}),before=await actions.count();expect(before).toBeGreaterThan(0);await actions.first().click();await expect(actions).toHaveCount(before-1);
 const pending=page.waitForEvent('download');await page.locator('#export').click();const file=await(await pending).path();expect(file).toBeTruthy();const zip=await JSZip.loadAsync(await fs.readFile(file)),xml=await zip.file('word/document.xml').async('string');
 expect(xml).toContain('<w:document');
 expect(errors).toEqual([]);
});
