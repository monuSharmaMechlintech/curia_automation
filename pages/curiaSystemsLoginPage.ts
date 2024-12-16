import { Locator, Page, expect } from "@playwright/test";
import Base from "./base";

export default class curiaSystemsLoginPage extends Base {
    constructor(page: Page) {
        super(page);
        this.page = page;
    }

    selectors = {
        municipalityField: 'input[type="text"]',
        usernameInputField: '#username',
        passwordInputField: '#password',
        signInBtn: '#btnLoginSubmit'        
    }
    
    get municipalityInputField(): Locator {
        return this.page.locator(this.selectors.municipalityField);
    }

    get usernameField(): Locator {
        return this.page.locator(this.selectors.usernameInputField);
    }

    get passwordField(): Locator {
        return this.page.locator(this.selectors.passwordInputField);
    }

    get signInButton(): Locator {
        return this.page.locator(this.selectors.signInBtn);
    }   

    async selectValidMunicipalityName(municipality: string): Promise<void> {
        await this.municipalityInputField.click();
        await this.municipalityInputField.fill(municipality);
        await this.page.getByText(municipality).click();
    }    

    async enterUsername(username: string): Promise<void> {
        await expect(this.usernameField).toBeVisible();
        await this.usernameField.click()
        await this.usernameField.fill(username);     
    }

    async enterPassword(password: string): Promise<void> {
        await expect(this.passwordField).toBeVisible();
        await this.passwordField.click();
        await this.passwordField.fill(password);
    }

    async clickOnSignInButton(): Promise<void> {
        await expect(this.signInButton).toBeVisible();
        await this.signInButton.click();
    }

    async signIn(municipality: string, email: string, password: string): Promise<void> {
        await this.selectValidMunicipalityName(municipality)
        await this.enterUsername(email);
        await this.enterPassword(password);
        await this.clickOnSignInButton();
    }         
    
}
