import { LoginPage } from './LoginPage.js';
import { ProductPage } from './ProductPage.js';
import { MyCartPage } from './MyCartPage.js';

export class PageManager {

    constructor(page) {
        this.page = page;

        this._loginPage = null;
        this._productPage = null;
        this._mycartPage =null;
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
}