export class ProductPage{

    constructor(page )
    {
    
        this.AddTocart =  page.locator(".btn_primary");
        this.removeButton = page.locator(".btn_secondary");
        this.productInCart = page.locator(".shopping_cart_badge");
        this.product =page.locator(".inventory_item");
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
         const productLocator = this.product.filter({ hasText: productName });

         const productPrice = productLocator.locator(".inventory_item_price").textContent();

         return productPrice;
    }
}