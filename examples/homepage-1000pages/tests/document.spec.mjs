import {test,expect} from '@playwright/test';
import fs from 'node:fs/promises';
import JSZip from 'jszip';
test('opens the public document, performs the workflow and exports native Word content',async({page})=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('/examples/1000pages/');await expect(page.locator('#export')).toBeEnabled({timeout:120000});await expect(page.locator('.superdoc-text-run').first()).toBeVisible();
 const run=page.locator('[data-layout-story=body] .superdoc-text-run').filter({hasText:/[A-Za-z]/}).first();await run.dblclick();await page.keyboard.type('Public example edit. ');await expect(page.locator('#editor')).toContainText('Public example edit.');
 const pending=page.waitForEvent('download');await page.locator('#export').click();const file=await(await pending).path();expect(file).toBeTruthy();const zip=await JSZip.loadAsync(await fs.readFile(file)),xml=await zip.file('word/document.xml').async('string');
 const stories=await Promise.all(Object.keys(zip.files).filter(name=>/^word\/.*\.xml$/.test(name)).map(name=>zip.file(name).async('string')));expect(stories.some(story=>[...story.matchAll(/<w:t(?: [^>]*)?>([\s\S]*?)<\/w:t>/g)].map(m=>m[1]).join('').includes('Public example edit.'))).toBe(true);
 expect(errors).toEqual([]);
});
