
import {test, expect} from '@playwright/test';

test('google test locator', async({page}) =>{
        await page.goto('https://www.google.com/');
         
       await expect (page.getByRole('button', {name:"I'm Feeling Lucky"})).toBeVisible();
   //  const luckyButton = page.getByRole('button', {name:"I'm Feeling Lucky"}); 
  // const luckyButton = page.locator('input[name="btnI"]').first();
   // const luckyButton = page.getByText("I'm Feeling Lucky", {exact:true});


        //await expect(luckyButton).toBeVisible();

        
})


