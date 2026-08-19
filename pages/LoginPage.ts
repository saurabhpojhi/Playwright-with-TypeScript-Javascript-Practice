import {Page, Locator} from '@playwright/test';

export class LoginPage{

           readonly page: Page;
           readonly userName:Locator;
           readonly password: Locator;
           readonly loginButton:Locator;

           constructor(page:Page){
             this.page =page;
             this.userName = page.getByPlaceholder('username');
             this.password = page.getByPlaceholder('Password');
             this.loginButton = page.getByRole('button', {
                 name:'Login'
             });

           }
          async login(userName:string, password:string){
              await this.userName.fill(userName);
              await this.password.fill(password);
              await this.loginButton.click();
          }

}