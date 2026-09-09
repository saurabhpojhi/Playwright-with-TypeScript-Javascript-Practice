
import {test, expect} from '@playwright/test';

test('xpath on playwrgihttest ', async({page}) =>{

           await page.goto('https://try.playwright.tech/');

           const doc= page.locator("//*[normalize-space()='Documentation']");
           await expect(doc).toBeVisible();

});