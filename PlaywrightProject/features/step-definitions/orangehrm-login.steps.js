import { Given, When, Then } from '@cucumber/cucumber';

Given('I open the OrangeHRM login page', async function () {
  await this.pages.orangeHRMLoginPage.openLoginPage();
});

When('I enter the OrangeHRM username {string} and password {string}', async function (username, password) {
  await this.pages.orangeHRMLoginPage.enterCredentials(username, password);
});

When('I submit the OrangeHRM login form', async function () {
  await this.pages.orangeHRMLoginPage.submitLogin();
});

Then('I should be redirected to the OrangeHRM dashboard', async function () {
  await this.pages.orangeHRMLoginPage.verifyDashboard();
});