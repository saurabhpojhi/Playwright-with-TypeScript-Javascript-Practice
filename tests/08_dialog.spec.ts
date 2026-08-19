import {test , expect} from '@playwright/test';

test('handle and accept dialog', async({page}) =>{

         page.on('dialog', async dialog =>{
                  console.log('Dilog Message:', dialog.message());
                  await dialog.accept();
         });
 
         await page.goto('file:///C:/PlaywrightInterviewPractice/dialog.html');
          await page.getByRole('button',{name:'delete'}).click();

});