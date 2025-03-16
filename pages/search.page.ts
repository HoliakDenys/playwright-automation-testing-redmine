    import { Locator, Page } from "@playwright/test";
    import { SEARCH } from "../constants/endpoints.constants.json"
    import BasePage from "./base.page";

    export default class SearchPage extends BasePage {
        public searchInput: Locator;
        public submitSearchButton: Locator;
        public searchResults: Locator;
        public wikiPagesLink: Locator;
        public firstSearchResult: Locator;
        
        constructor(page: Page) {
            super(page);
            this.endpoint = SEARCH;
            this.searchInput = page.locator('#search-input');
            this.submitSearchButton = page.locator('input[name="commit"]');
            this.searchResults = page.locator('dl#search-results dt a');
            this.wikiPagesLink = page.locator('a', { hasText: /Wiki pages/ });
            this.firstSearchResult = this.searchResults.nth(0);
        }

        async open(): Promise<void> {
            await super.open(this.endpoint);
        }

        async clickWikiPagesLink(): Promise<void> {
            await this.wikiPagesLink.click();
        }

        async searchBarInput(query: string) {
            await this.searchInput.fill(query);
        }

        async clickSearchSubmissionButton(): Promise<void> {
            await this.submitSearchButton.click();
        }

        async clickFirstSearchResult(): Promise<void> {
            await this.firstSearchResult.click();
        }
    }