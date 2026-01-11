const {test, expect} = require('@playwright/test');

test("Browser context playwright test", async ({browser}) =>{
    console.log("Hello, Playwright!");
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com");
    comsole.log(await page.title());
});

test("page context new page", async ({page}) =>{
    await page.goto("https://google.com");
     await expect(page).toHaveTitle("Google");
});

test("register test", async ({page}) =>{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/register");
    await page.locator("#firstName").fill("test_user");
    await page.locator("#lastName").fill("test_lastname");
    await page.locator("#userEmail").fill("fatocol764@roastic.com");
    await page.locator("#userMobile").fill("7312222222");
    await page.locator("#userPassword").fill("Test@1234");
    await page.locator("#confirmPassword").fill("Test@1234");
    await page.getByText("I am 18 year or Older").click();
    await page.locator("#login").click();
});

test.only("Login test", async ({page}) =>{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill("fatocol764@roastic.com");
    await page.locator("#userPassword").fill("Test@1234");
    await page.locator("#login").click();
    await page.waitForLoadState("networkidle")
    console.log(await page.locator(".card-body b").allTextContents());
});