//const {test , expect } = require('@playwright/test');   we can use both method
import{test , expect} from '@playwright/test';

test('locators', async ({page})=>{

   await page.goto("https://demoblaze.com/");
   
   //click on login button ==== property
   await page.click('id=login2');

   // provide username ====css 
   await page.fill('#loginusername','pavanol');
   // also we can use=== page.fill('loginusername', 'NIKITa')  or page.type('liginusername)

   // css for password

   await page.fill("input[id = 'loginpassword']", 'test@123');

   //for login i m using x path

   await page.click("//button[normalize-space()='Log in']");

   //verify login is succesfull and logout option is visble  xpath

   await page.locator("//a[normalize-space()='Log out']")
   // store in a variabel

   const logoutt = await page.locator("//a[normalize-space()='Log out']");

   await expect(logoutt).toBeVisible(); ///here we r using assertion is element visibele ot nott

   await page.close();


}) 