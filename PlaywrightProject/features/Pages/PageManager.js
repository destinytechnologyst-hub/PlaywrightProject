import { LoginPage } from './LoginPage.js';
import { ProductPage } from './ProductPage.js';
import { MyCartPage } from './MyCartPage.js';
import {CheckoutPage} from './CheckoutPage.js';
import {OverviewPage} from './OverviewPage.js';
import {OrderComfirmationPage} from './OrderComfirmationPage.js';

export class PageManager {

    constructor(page) {
        this.page = page;

        this._loginPage = null;
        this._productPage = null;
        this._mycartPage =null;
        this._checkoutPage =null;
        this._overviewPage = null;
        this._orderConfirmPage = null;
    }

    get loginPage() {
        if (!this._loginPage) {
            console.log('Creating LoginPage object');
            this._loginPage = new LoginPage(this.page);
        }

        return this._loginPage;
    }

    get productPage() {
        if (!this._productPage) {
            console.log('Creating ProductPage object');
            this._productPage = new ProductPage(this.page);
        }

        return this._productPage;
    }

    get myCartPage(){
        if (!this._mycartPage){
            console.log('Creating My Cart Page Object');
            this._mycartPage = new MyCartPage(this.page)
        }

        return this._mycartPage;
    }

    get checkoutPage()
    {
         if (!this._checkoutPage){
            console.log('Creating Checkout Page Object');
            this._checkoutPage = new CheckoutPage(this.page)
        }

        return this._checkoutPage;
    }

    get overviewPage()
  {

         if (!this._overviewPage){
            console.log('Creating OverviewPage Page Object');
            this._overviewPage = new OverviewPage(this.page)
        }

        return this._overviewPage;
    
   }

    get orderConfirmPage()
  {

         if (!this._orderConfirmPage){
            console.log('Creating OverviewPage Page Object');
            this._orderConfirmPage = new OrderComfirmationPage(this.page)
        }

        return this._orderConfirmPage;
    
   }

   
}