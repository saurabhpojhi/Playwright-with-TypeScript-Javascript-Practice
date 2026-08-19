import {test, expect} from '@playwright/test';
 
 test('pdf download', async({page}) =>{

       await page.goto('https://practice-automation.com/file-download/');

         const downloadPromise = page.waitForEvent('download');
        // await page.getByText('Download').first().click();
          await page.locator('a').filter({hasText:'Download'}).first().click();
         
         const download = await downloadPromise;
             
         await download.saveAs('downloaded.pdf');

 })