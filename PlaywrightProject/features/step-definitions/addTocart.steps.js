import {Given, When, Then} from '@cucumber/cucumber';
import { ProductPage } from '../Pages/ProductPage.js';
import { expect } from '@playwright/test';


When('Click on add to cart button', async function () {
  console.log("Click on add to cart button");

 // this.productPage = new ProductPage(this.page);
   await this.pages.productPage.clickOnAddToCartButton();

});

When('Click on Remove button to remove product from cart', async function () {
    await this.pages.productPage.clickOnRemoveButton();
})

Then('Verify no of products {string} added in the cart', async function (productsInCart) {
  console.log("Verify product added in the cart");
   const cartCount = await this.pages.productPage.getCartCount();

  expect(cartCount).toEqual(productsInCart);

});


Then('Verify price {string} of the product {string}', async function (productPrice, productName) {
  
   const actualProductPrice = await this.pages.productPage.getProductPrice(productName);

   console.log("Prodct "+productName+" Has actual price "+actualProductPrice+" and expected price "+productPrice);

     expect(actualProductPrice).toContain(productPrice);
});

Then ('Verify {string} text present in swaglab logo', async function(logoText)
{
     await this.pages.productPage.verifyTextInsideSwagLabLogo(logoText);
});

