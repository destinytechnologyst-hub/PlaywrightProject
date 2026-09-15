import {Given, When, Then} from '@cucumber/cucumber';
import {LoginPage} from '../Pages/LoginPage.js'
import { expect } from '@playwright/test';

Given('I open the login page', async function () {
    console.log(" 1 - I open the login page");
   //  this.loginPage = new LoginPage(this.page);
    await this.page.goto('https://www.saucedemo.com/');
});

When('I enter valid {string} and {string}', async function (username , password) {
  console.log(" 2 - I enter valid "+username+" and "+password);

  await this.pages.loginPage.enterUserNameAndPass(username,password);

});

When('I click the login button', async function () {
  console.log(" 3 - I click the login button");
   await this.pages.loginPage.clickOnLoginButton();

});

Then('I should see the dashboard', async function () {
  console.log(" 4 - I should see the dashboard");
   const currentURL = await this.page.url();

  expect(currentURL).toContain('inventory');

});

Then('Verify error message {string} displayed on login page', async function (errorMessage) {
    const actualErrormessage = await this.pages.loginPage.getLoginErrorMessage();
     console.log(actualErrormessage);
  expect(actualErrormessage).toContain(errorMessage);
});