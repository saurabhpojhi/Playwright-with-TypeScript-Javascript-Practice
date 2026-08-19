import { test, expect } from '@playwright/test';
import{firefox} from 'playwright';

test('Launch Firefox and handle dialog' , async({}) =>{

    const browser = await firefox.launch({headless:false});

   const page = await browser.newPage();

   page.on('dialog',async dialog=>{
           console.log('Dialog message:', dialog.message() )
           expect(dialog.message()).toBe('Delete operation successful');
           await dialog.accept();
   });
     
   await page.goto('file:///C:/PlaywrightInterviewPractice/dialog.html');

   await page.getByRole('button',{name:'Delete'}).click();
  

});