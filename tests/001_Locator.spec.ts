
import { test, expect } from '@playwright/test';

test("Playwright locator", async({page})=>{
           await  page.goto("https://sdetqa.vercel.app/");
          
    const signinbutton = page.getByRole('button',{name:'Sign In'});
        await   expect(signinbutton).toBeVisible();
        await signinbutton.click();
      
        // 1 . GetbyRole - finsd the element based on the role and name of the element
     //     prepfer to intetrect elemets like  button , cyheckbox, links , list6s heading table etc

         // 2. GetByText - finds the element based on the text of the element
            // use this locator find non-interactive elements like div, span, p, h1, h2, h3 etc
           // for interactive elements like button, checkbox, links, lists, 
   
              const welcomeText = page.getByText("✨ Welcome text placeholder"); //exact match 
              // const welcomeText = page.getByText("✨ Welcome text placeholder",{exact: true}); // bydefault 
                await expect(welcomeText).toBeVisible(); 
               
                // 3. GetByLabel- locate a form fields using its label text 
                // When to use - ideal for from fileds with visdible labels 
                 const labeltext = page.getByLabel("Your feedback (getByLabel)")  
                    await expect(labeltext).toBeVisible();
                     await labeltext.fill("text leable input");

                  // 4. getByplaceholder - locate input by placeholder text 
                  // best for inputs a withiut a label but having a placeholder
                   
                  const username = page.getByPlaceholder("e.g., automation_user");
                  await expect(username).toBeVisible();
                  await  username.fill("test@gmail.com"); 

        });
