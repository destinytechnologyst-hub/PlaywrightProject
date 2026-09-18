import {Given, When, Then} from '@cucumber/cucumber';
import { expect } from '@playwright/test';



When('Click on sort dropdown list',async function () {
  console.log("Click on sort dropdown list");
    await this.pages.productPage.clickOnSortDropdown();

  });


Then('Verify below options are presnet in sort drop down list:', async function (dataTable) {
  
         await this.pages.productPage.verifySortOptions(dataTable);
});

