import {Given, When, Then} from '@cucumber/cucumber';
import { expect } from '@playwright/test';


When('Verify order got placed successfully', async function () {
  console.log("Verify order got placed successfully message");

   await this.pages.orderConfirmPage.verifyOrderConfirmationMessgae();

});