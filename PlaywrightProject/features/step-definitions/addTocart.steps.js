import {Given, When, Then} from '@cucumber/cucumber';
import { ProductPage } from '../Pages/ProductPage.js';
import { expect } from '@playwright/test';


When('Click on add to cart button', async function () {
  console.log("Click on add to cart button");

  this.productPage = new ProductPage(this.page);
   await this.productPage.clickOnAddToCartButton();

});

When('Click on Remove button to remove product from cart', async function () {
    await this.productPage.clickOnRemoveButton();
})

Then('Verify no of products {string} added in the cart', async function (productsInCart) {
  console.log("Verify product added in the cart");
   const cartCount = await this.productPage.getCartCount();

  expect(cartCount).toEqual(productsInCart);

});


Then('Verify price {string} of the product {string}', async function (productPrice, productName) {
  
   const actualProductPrice = await this.productPage.getProductPrice(productName);

   console.log("Prodct "+productName+" Has actual price "+actualProductPrice+" and expected price "+productPrice);

     expect(actualProductPrice).toContain(productPrice);
});

