import { expect } from "playwright/test";

export class CheckoutPage{

    constructor(page )
    {
    
        this.logo = page.locator(".app_logo");
        this.hamBurgerButton= page.locator("#react-burger-menu-btn");
        this.logoutLink = page.locator("#logout_sidebar_link");
        this.firstNameText = page.locator("#first-name");
        this.lastNameText = page.locator("#last-name");
        this.zipCodeText = page.locator("#postal-code");
        this.continueButton = page.locator("#continue");

    }

  async  verifyTextInsideSwagLabLogo(logoText)
    {
       const actualText = await this.logo.textContent();

       expect(actualText).toEqual(logoText);
    }

    async enterFirstName(firstName)
    {
        console.log("Enter first name = "+firstName);

       await this.firstNameText.fill(firstName);
    }

     async enterLastName(lastName)
    {
         console.log("Enter last name = "+lastName);
        await this.lastNameText.fill(lastName);
    }

     async enterZipCode(zipCode)
    {
         console.log("Enter zip code = "+zipCode);
        await this.zipCodeText.fill(zipCode);
    }

    async clickOnContinueButton()
    {
         console.log("Clicking on continue button.");
        await this.continueButton.click();
    }
}