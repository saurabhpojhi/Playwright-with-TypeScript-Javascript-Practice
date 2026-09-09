import { test, expect } from "@playwright/test";

/* // syntex

test("title",()=>{
   //step1 
     //step12
       //step3

}); */

     test("title2",async({page})=>{
           await page.goto("https://www.google.com/");

     });
test("verify the patge title", async ({page})=>{
          await  page.goto("https://www.google.com/");
     //.  await    const title : String=page.title();
        //   console.log(title);
         await  expect(page).toHaveTitle("Google");
      //  await expect(page.getByRole('button',{name:'I am feeling lucky'})).toBeVisible();
            //  await page.getByText('I am feeling lucky', { exact: true }) 
            const feelingLucky = page.getByText("I am feeling lucky", {
        exact: true
    });
 
    console.log(await feelingLucky.count());

});  