import {Before,After, Status, setDefaultTimeout} from '@cucumber/cucumber';
import { chromium } from 'playwright';

setDefaultTimeout(30 * 1000);

Before(async function () {

    this.browser = await chromium.launch({
        headless: false,

        executablePath:
            '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
    });
    this.context = await this.browser.newContext();

    this.page = await this.context.newPage();

      this.initializePages();
});

After(async function () {

    if (this.page) {
        await this.page.screenshot({
            path: `screenshots/${Date.now()}.png`,
            fullPage: true
        });
    }

    if (this.context) {
        await this.context.close();
    }

    if (this.browser) {
        await this.browser.close();
    }
}
);