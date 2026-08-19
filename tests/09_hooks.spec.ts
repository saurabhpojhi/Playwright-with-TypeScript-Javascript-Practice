import {test , expect} from '@playwright/test';

test.beforeEach(async ({page}) =>{
      console.log('BeforeEach hook executed');
      await page.goto('https://playwright.dev')

});

test.afterEach( async ({}) =>{
      console.log('AfterEach hook executed');
});

test('Verigy playwright title', async ({page}) =>{
            await expect(page).toHaveTitle(/Playwright/);
});