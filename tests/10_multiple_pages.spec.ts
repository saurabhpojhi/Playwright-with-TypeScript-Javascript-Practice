
import {test , expect} from '@playwright/test';

test('Switch to 3rd page', async({context}) =>{

     // create 5 pages 
     const page1 = await context.newPage();
     const page2 = await context.newPage();
     const page3 = await context.newPage();
     const page4 = await context.newPage();
     const page5 = await context.newPage();

     // // Navigate each page to a different URL

          await page1.goto('https://playwright.dev');
          await page2.goto('https://example.com');
         await page3.goto('https://www.google.com');
         await page4.goto('https://www.wikipedia.org');
         await page5.goto('https://www.youtube.com/');
//          await page5.goto('https://github.com', {
//     waitUntil: 'domcontentloaded'
// });

         // Get all open pages
         const pages = context.pages();
          console.log('total pages:', pages.length);

          // switch to 3rd page

         await pages[2].bringToFront();
         console.log('Third page Title:', await pages[2].title());

         // validate we are on the third page

          await expect(pages[2]).toHaveURL('https://www.google.com/');


})