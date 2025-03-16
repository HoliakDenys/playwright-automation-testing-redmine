import { expect, test } from '@playwright/test'
import IssuesPage from '../pages/issues.page';

test('Validation of selecting different statuses filters.', async ({ page }) => {
    const issuesPage = new IssuesPage(page);

    await issuesPage.open();
    await issuesPage.selectStatusIdThereAre();
    
    for (const { name } of issuesPage.statusValues) {
        await issuesPage.selectStatusValue(name);
        await issuesPage.clickApplyLink();

        const displayedStatuses = await issuesPage.getDisplayedIssueStatuses();

        for (const displayedStatus of displayedStatuses) {
            expect(displayedStatus).toContain(name);
        }
    }
});