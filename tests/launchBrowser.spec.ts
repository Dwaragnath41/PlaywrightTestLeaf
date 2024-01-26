import {test, chromium, BrowserContext, Browser, Page} from '@playwright/test'

test('Launch Browser Homework Assignments', async()=> {

    const Browser = await chromium.launch({
        headless : false,
        channel: 'chrome'
    })

    const BrowserContext = await Browser.newContext();
    const Page = await BrowserContext.newPage();

    await Page.goto("https://persistentsystemindiapvtltd-dev-ed.develop.my.salesforce.com/");
    console.log(Page.url());
    

    await Page.locator("#username").fill("t.dwaragnath@gmail.com");
    await Page.locator("#password").fill("Integral@29");
    await Page.locator("#Login").click();

    await Page.waitForTimeout(5000);

    console.log(await Page.title());
    

    await Page.close();
    await BrowserContext.close();
    await Browser.close();



    
})