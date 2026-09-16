import {Given, When, Then} from '@cucumber/cucumber';
import { expect } from '@playwright/test';


When('Click on add to cart button', async function () {
  console.log("Click on add to cart button");

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

When('Click on Hamburger button on product page',async function () {
  
  await this.pages.productPage.clickOnhamburgerButton();
});

When('Click on logout link on product page', async function () {
  await this.pages.productPage.clickOnLogoutLink();
});

When('Click on cart icon', async function () {
  await this.pages.productPage.clickOnCartIcon();
});

Then('Verify No of products on my cart page is {string}',async function (noOfProducts) {
  const actualProducts = await this.pages.myCartPage.getNoOfProductsOnMyCartPage();

  expect(String(actualProducts)).toEqual(noOfProducts);
});

