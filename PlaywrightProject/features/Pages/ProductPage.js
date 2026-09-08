export class ProductPage{

    constructor(page )
    {
    
        this.AddTocart =  page.locator("#add-to-cart-sauce-labs-bike-light");
        this.productInCart = page.locator(".shopping_cart_badge");
    }


    async clickOnAddToCartButton()
    {
        await this.AddTocart.click();
    }

    async getCartCount()
    {
        const cartCount= await  this.productInCart.textContent();

        console.log("products added in cart = "+cartCount);
        return cartCount;
    }
}