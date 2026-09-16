import { expect } from "playwright/test";

export class ProductPage{

    constructor(page )
    {
    
        this.logo = page.locator(".app_logo");
        this.AddTocart =  page.locator(".btn_primary");
        this.removeButton = page.locator(".btn_secondary");
        this.productInCart = page.locator(".shopping_cart_badge");
        this.product =page.locator(".inventory_item");
        this.hamBurgerButton= page.locator("#react-burger-menu-btn");
        this.logoutLink = page.locator("#logout_sidebar_link");
        this.cartIcon  = page.locator(".shopping_cart_link");
    }


    async clickOnAddToCartButton()
    {
        await this.AddTocart.nth(0).click();
    }

   async clickOnRemoveButton()
    {
       await this.removeButton.nth(0).click();
    }

    async getCartCount()
    {
        const cartCount= await  this.productInCart.textContent();

        console.log("products added in cart = "+cartCount);
        return cartCount;
    }

    async getProductPrice(productName)
    {
         const productLocator = await this.product.filter({ hasText: productName });

         const productPrice = await productLocator.locator(".inventory_item_price").textContent();

         return productPrice;
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

    async clickOnCartIcon()
    {
         await  this.cartIcon.click();
    }
}