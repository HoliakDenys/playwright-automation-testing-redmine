import { Locator, Page } from '@playwright/test';
import { WIKI } from '../constants/endpoints.constants.json'
import BasePage from './base.page';

export default class WikiPage extends BasePage {
    public articleTitle: Locator;

    constructor(page: Page) {
        super(page);
        this.endpoint = WIKI;
        this.articleTitle = page.locator('h1', { hasText: 'Install Redmine' }); 
    }
}