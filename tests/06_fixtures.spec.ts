
import {test as base, expect} from '@playwright/test';

const test = base.extend<{url:string}>({
    url: async ({},use)=>{
        await use('https://example.com');
    }
});


test('open url using custom fixture', async({page,url})=>{
      await page.goto(url);
      await expect(page).toHaveTitle('Example Domain');

});