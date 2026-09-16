import { expect } from "playwright/test";

export class MyCartPage{

    constructor(page )
    {
    
        this.logo = page.locator(".app_logo");
        this.hamBurgerButton= page.locator("#react-burger-menu-btn");
        this.logoutLink = page.locator("#logout_sidebar_link");
        this.product = page.locator(".cart_item");

    }

  async  verifyTextInsideSwagLabLogo(logoText)
    {
       const actualText = await this.logo.textContent();

       expect(actualText).toEqual(logoText);
    }

    async clickOnhamburgerButton()
    {
         await this.hamBurgerButton.click();
    }

    async clickOnLogoutLink()
    {
         await  this.logoutLink.click();
    }

    async getNoOfProductsOnMyCartPage()
    {
        const noOfProducts = this.product.count();

        return noOfProducts;
    }
}