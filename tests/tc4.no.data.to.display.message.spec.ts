import { expect, test } from '@playwright/test'
import IssuesPage from '../pages/issues.page'

test('Validation of "No data to display" message.', async ({ page }) => {
    const issuesPage = new IssuesPage(page);

    await issuesPage.open();
    await issuesPage.selectStatusIdThereAre();
    await issuesPage.selectStatusValue('New');
    await issuesPage.selectFilterClosed();
    await issuesPage.selectClosedIdYesterday();
    await issuesPage.clickApplyLink();

    await expect(issuesPage.noDataMessage).toBeVisible();
    await expect(issuesPage.noDataMessage).toHaveText(/No data to display/);
});