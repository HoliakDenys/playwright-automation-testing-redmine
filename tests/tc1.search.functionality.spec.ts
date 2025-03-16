import { expect, test } from '@playwright/test'
import HomePage from '../pages/home.page'
import SearchPage from '../pages/search.page'
import WikiPage from '../pages/wiki.page';

test('Validation of search functionality on Redmine search page.', async ({ page }) => {
    const homePage = new HomePage(page);
    const searchPage = new SearchPage(page);
    const wikiPage = new WikiPage(page);

    await homePage.open();
    await homePage.clickSearchLink();
    await searchPage.clickWikiPagesLink();
    await searchPage.searchBarInput("How to install Redmine");
    await searchPage.clickSearchSubmissionButton();
    await searchPage.clickFirstSearchResult();

    await expect(page).toHaveURL(/How_to_Install_Redmine/);
    await expect(wikiPage.articleTitle).toContainText('Install Redmine');
});