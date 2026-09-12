import { test, expect } from '@playwright/test';

test('Auto Waiting', async({page})=>{
     

        await page.goto('https://demowebshop.tricentis.com/');

         //Assertions :

         // Auto wait works 
           await expect(page).toHaveURL('https://demowebshop.tricentis.com/',{timeout:10000});
           await expect(page.locator('text=Welcome to our store')).toBeVisible({timeout:10000})
         
           //Actions
          await page.locator('#small-searchterms').fill("Laptop"); 

            // Disables non-essential actionability checks
  // will not check that the target element actually receives click events.
  await page.locator('.button-1.search-box-button').click({force:true})

});