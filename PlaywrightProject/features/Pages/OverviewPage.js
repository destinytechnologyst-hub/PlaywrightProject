import { expect } from "playwright/test";

export class OverviewPage{

    constructor(page )
    {
    
        this.logo = page.locator(".app_logo");
        this.hamBurgerButton= page.locator("#react-burger-menu-btn");
        this.logoutLink = page.locator("#logout_sidebar_link");
        this.finishButton = page.locator("#finish");
    

    }

  async  verifyTextInsideSwagLabLogo(logoText)
    {
       const actualText = await this.logo.textContent();

       expect(actualText).toEqual(logoText);
    }

    async clickOnFinishButton()
    {
       await  this.finishButton.click();
    }

};