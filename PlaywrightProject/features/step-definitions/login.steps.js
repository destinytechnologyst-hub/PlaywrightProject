import {Given, When, Then} from '@cucumber/cucumber';
import {LoginPage} from '../Pages/LoginPage.js'
import { expect } from '@playwright/test';

Given('I open the login page', async function () {
    console.log(" 1 - I open the login page");
     this.loginPage = new LoginPage(this.page);
    await this.page.goto('https://www.saucedemo.com/');
});

When('I enter valid username and password', async function () {
  console.log(" 2 - I enter valid username and password");

  await this.loginPage.enterUserNameAndPass('standard_user','secret_sauce');

});

When('I click the login button', async function () {
  console.log(" 3 - I click the login button");
   await this.loginPage.clickOnLoginButton();

});

Then('I should see the dashboard', async function () {
  console.log(" 4 - I should see the dashboard");
   const currentURL = await this.page.url();

  expect(currentURL).toContain('inventory');

});