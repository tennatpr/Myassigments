import { firefox, test, webkit } from "@playwright/test";


test(`Test to launch browser`, async() => {
    
//const browser = await chromium.launch();

const browser = await firefox.launch();

const context =await browser.newContext();

const page = await context.newPage();

 await page.goto("https://www.redbus.in/");

 const browser1 = await webkit.launch();
 const context1 =await browser1.newContext();

const page1 = await context1.newPage();
 
await page1.goto("https://www.flipkart.com/");

    
 const url =  page.url();
console.log(`The url of the page ${url}`);

 const url1 =  page.title();
console.log(`The url of the title ${url1}`);

})