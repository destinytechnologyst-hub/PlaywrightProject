import { expect } from "playwright/test";

export class LoginPage{

    constructor(page )
    {
    
        this.userName=  page.locator("#user-name");
        this.password= page.locator("[name='password']");
        this.loginButton= page.locator("#login-button");
        this.errorMessageLocator = page.locator("h3");
    }

    async loginMethod ( Username, Password )
    {
        await this.userName.fill(Username);
        await this.password.fill(Password);
        await this.loginButton.click();
    }

   async enterUserNameAndPass ( Username, Password )
    {
        await this.userName.fill(Username);
        await this.password.fill(Password);
    }

    async clickOnLoginButton()
    {
        await this.loginButton.click();
    }

    async getLoginErrorMessage()
    {
        const errorSms= await this.errorMessageLocator.textContent();

        return errorSms;
    }

    async verifyUserLoggedOut()
    {
        expect(this.loginButton).toBeVisible();
    }
}