import { Locator, Page } from '@playwright/test'
import BasePage from './base.page';

export default class HomePage extends BasePage {
    public searchLink: Locator;
    
    constructor(page: Page) {
        super(page);
        this.searchLink = page.locator('a', { hasText: /Search/ });
    }

    async open(): Promise<void> {
        await super.open();
    }

    async clickSearchLink(): Promise<void> {
        await this.searchLink.click();
    }
}