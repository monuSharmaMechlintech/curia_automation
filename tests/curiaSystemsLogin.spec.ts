import { Browser, BrowserContext, chromium, expect, Page, test, } from "@playwright/test";
import Application from "../pages/application";
import { data } from "../support/data";

let browser: Browser;
let context: BrowserContext;
let page: Page;
let App: Application;

test.beforeAll(async () => {
    browser = await chromium.launch();
});

test.beforeEach(async () => {
    context = await browser.newContext();
    page = await context.newPage();
    App = new Application(page);
    await page.goto('/jcms/login');
});

test.afterEach(async () => {
    await page.close();
    await context.close();
});

test.afterAll(async () => {
    await browser.close();
});

test("Verify User Should Be SignIn Successfully With Valid Credentials", async () => {
    await expect(page.getByRole('heading', { name: 'Signin', exact: true })).toBeVisible();
    await expect(App.CuriaSystmesLoginPage.municipalityInputField).toBeVisible();
    await App.CuriaSystmesLoginPage.selectValidMunicipalityName(data.signInData.municipality);
    await expect(App.CuriaSystmesLoginPage.usernameField).toBeVisible();
    await App.CuriaSystmesLoginPage.enterUsername(data.signInData.username);
    await App.CuriaSystmesLoginPage.enterPassword(data.signInData.password);
    await App.CuriaSystmesLoginPage.clickOnSignInButton();
    await page.waitForTimeout(5000);
    await expect(page).toHaveURL('/jcms/home');
});
