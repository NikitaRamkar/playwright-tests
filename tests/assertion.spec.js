import {test, expect} from '@playwright/test';
test('assertions',async({page})=>{

    page.goto('https://demo.nopcommerce.com/register');
    expect(page).toHaveURL('https://demo.nopcommerce.com/register')
    await expect(page).toHaveTitle('nopCommerce demo store. Register')
     const logoo = await page.locator('.header-logo')
    await expect(logoo).toBeVisible();
    const storedbox = await page.locator('#small-searchterms')
    //controll is enables
    await expect(storedbox).toBeEnabled();
    
    //expect(locTOR).toBeChecked()   ...we can check checkbox radiobutton here
       const malebutton = await page.locator("#gender-male");
     await  malebutton.click();
     await expect(malebutton).toBeChecked();

     const checkbtn = await page.locator("#NewsLetterSubscriptions_0__IsActive");
     await expect(checkbtn).toBeChecked();

     //to have attribute ..element has attribute

     const attributecheck = await  page.locator("#register-button");
     await expect(attributecheck).toHaveAttribute('type','submit');

     //to have value    input has value 

     //to hve text     input has text

     //to contains text ---- element contains text

     //to has length --------list of elements has given length






})


