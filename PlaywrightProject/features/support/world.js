import { setWorldConstructor } from '@cucumber/cucumber';
import { PageManager } from '../Pages/PageManager.js';

class CustomWorld {

    constructor() {
        this.browser = null;
        this.context = null;
        this.page = null;
        this.pages = null;
    }

    initializePages() {
        this.pages = new PageManager(this.page);
    }
}

setWorldConstructor(CustomWorld);