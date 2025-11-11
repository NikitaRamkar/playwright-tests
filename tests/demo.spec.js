const {test, expect} = require('@playwright/test');
test('Home page', async({page})=>
{
    await page.goto('https://demoblaze.com/')

    const pagetitle = await page.title()
    console.log ("page title is : ",pagetitle)

    await expect(page).toHaveTitle('STORE')
    await expect(page).toHaveURL('https://demoblaze.com/')

     const homeLink = page.getByRole('link',{name: 'Home'});
    await expect(homeLink).toBeVisible();
    await homeLink.click();
  page.close()
})