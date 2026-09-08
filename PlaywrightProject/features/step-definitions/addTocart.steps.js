import {Given, When, Then} from '@cucumber/cucumber';
import {LoginPage} from '../Pages/LoginPage.js'
import { ProductPage } from '../Pages/ProductPage.js';
import { expect } from '@playwright/test';


When('Click on add to cart button', async function () {
  console.log("Click on add to cart button");

  this.productPage = new ProductPage(this.page);
   await this.productPage.clickOnAddToCartButton();

});

Then('Verify product added in the cart', async function () {
  console.log("Verify product added in the cart");
   const cartCount = await this.productPage.getCartCount();

  expect(cartCount).toEqual("1");

});