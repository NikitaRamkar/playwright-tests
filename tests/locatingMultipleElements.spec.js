import {test, expect} from '@playwright/test';

test('loactemultipleElement',async({page})=>{
  await page.goto('https://demoblaze.com/index.html');
    const elements = await page.$$('a');

    for(const element of elements){
      const linktext =  await element.textContent(); //like in selenium we have getText ethod // captutre the 
      //text value of link
      console.log(linktext);//print the text value of link
    }

})