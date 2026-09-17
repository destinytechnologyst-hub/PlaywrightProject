import { expect } from "playwright/test";

export class OrderComfirmationPage{

    constructor(page )
    {
    
        this.logo = page.locator(".app_logo");
        this.hamBurgerButton= page.locator("#react-burger-menu-btn");
        this.logoutLink = page.locator("#logout_sidebar_link");
        this.orderConfirmMessage = page.locator(".complete-header");
    

    }

  async  verifyTextInsideSwagLabLogo(logoText)
    {
       const actualText = await this.logo.textContent();

       expect(actualText).toEqual(logoText);
    }

    async verifyOrderConfirmationMessgae()
    {
        const message= await this.orderConfirmMessage.textContent();

        expect(message).toEqual('Thank you for your order!');
    }

};