import {test, expect} from '@playwright/test';

test('take screenshots',async ({page}) =>{

      await page.goto('https://example.com');

      await page.screenshot({path:'screenshot.png', fullPage:true});
      
})