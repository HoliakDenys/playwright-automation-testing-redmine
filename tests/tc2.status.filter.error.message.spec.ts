import { expect, test } from '@playwright/test'
import IssuesPage from '../pages/issues.page'

test('Validation of the "Status" filter error message.', async ({ page }) => {
    const issuesPage = new IssuesPage(page);

    await issuesPage.open();
    await issuesPage.selectStatusIdThereAre();
    await issuesPage.clickApplyLink();
    
    await expect(issuesPage.errorMessage).toBeVisible();
    await expect(issuesPage.errorMessage).toHaveText(/Status cannot be blank/);
});