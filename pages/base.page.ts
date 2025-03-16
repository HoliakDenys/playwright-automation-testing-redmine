import { Page } from '@playwright/test';

export default class BasePage {
    public page: Page;
    public endpoint: string;

    constructor(page: Page) {
        this.page = page;
    }

    async open(path = ''): Promise<void> {
        await this.page.goto(path);
    }
}