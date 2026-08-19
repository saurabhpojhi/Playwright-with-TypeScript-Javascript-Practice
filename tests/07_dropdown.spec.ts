import {test , expect} from '@playwright/test';

test('Selct India from dropdown', async({page})=>{
   
        await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');

        const dropdown = page.locator('#select-demo');

        await dropdown.selectOption({label:'India'});

        await expect(page.locator('.select-value')).toContainText('India');
});
