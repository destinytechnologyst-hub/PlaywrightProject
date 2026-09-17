import {Given, When, Then} from '@cucumber/cucumber';
import { expect } from '@playwright/test';


When('Click on checkout Button', async function () {
  console.log("Click on add to cart button");

   await this.pages.myCartPage.clickOnCheckoutButton();

});

Then ('Verify {string} text present in swaglab logo on my car page', async function(logoText)
{
     await this.pages.productPage.verifyTextInsideSwagLabLogo(logoText);
});

When('Click on Hamburger button on my cart page',async function () {
  
  await this.pages.productPage.clickOnhamburgerButton();
});

When('Click on logout link on my cart page', async function () {
  await this.pages.productPage.clickOnLogoutLink();
});

When('Enter first name on checkout page', async function () {
      await this.pages.checkoutPage.enterFirstName("John");
});

When('Enter last name on checkout page', async function () {
  await this.pages.checkoutPage.enterLastName("Smith");
});

When('Enter Zip code on checkout page', async function () {
 await this.pages.checkoutPage.enterZipCode("411044");
});

When('Click on Continue button', async function () {
     
   await this.pages.checkoutPage.clickOnContinueButton();
}
);

When('Click on finish button on overview page',async function ()
{
     await this.pages.overviewPage.clickOnFinishButton();
});