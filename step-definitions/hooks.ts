import { Before, After,Status } from "@cucumber/cucumber";
import { chromium, Browser, BrowserContext,  } from '@playwright/test';

export let browser:Browser;
export let context:BrowserContext;
export let :;

//Before -> Browser configuration
Before(async function(){
    browser = await chromium.launch({
        headless:false
    })
    context = await browser.newContext();
     = await context.new();

})

//After - failed testcases captured ,, screenshot captured browser close 
After(async function(){
    await context?.close();
})