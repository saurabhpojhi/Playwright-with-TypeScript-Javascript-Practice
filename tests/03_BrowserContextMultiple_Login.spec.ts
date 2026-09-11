/*
//Browser context for Two Different Users

Browser
│
├── Admin context
│     └── Admin Page (Login as a Admin user)
│
├── Customer context
│     └── Customer Page (Login as a Other user)


*/

import {test,chromium} from "@playwright/test";

 test("Browser context demo for Two Different Users", async ()=>{
         
         const browser = await chromium.launch();
    // user 1 context for admin user 
       const adminContext = await browser.newContext();
       const adminPage = await adminContext.newPage();

       // user 2 context for  Customer 
          const customerContext = await browser.newContext();
          const customerpage = await customerContext.newPage();

            /// Login as admin 
            await adminPage.goto("https://www.saucedemo.com/");
            await adminPage.getByPlaceholder('Username').fill('standard_user');
            await adminPage.getByPlaceholder('Password').fill('secret_sauce');
            await adminPage.getByRole('button',{name:'Login'}).click();

            // Login as another user
            await customerpage.goto("https://www.saucedemo.com/");
            await customerpage.getByPlaceholder('Username').fill('visual_user');
            await customerpage.getByPlaceholder('Password').fill('secret_sauce');
            await customerpage.getByRole('button',{name:'Login'}).click();
         
             console.log('Both users are logged in independently.');
            
           await adminPage.waitForTimeout(5000);
  await customerpage.waitForTimeout(5000);

  await adminContext.close();
  await customerContext.close();
  await browser.close();

 });