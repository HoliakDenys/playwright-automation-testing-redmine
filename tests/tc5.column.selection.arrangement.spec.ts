import { expect, test } from '@playwright/test'
import IssuesPage from '../pages/issues.page'

test('Validation of column selection and arrangement', async ({page}) => {
    const issuesPage = new IssuesPage(page);

    await issuesPage.open();
    await issuesPage.clickOptionsLegend();
    await issuesPage.selectCategoryColumn();
    await issuesPage.clickMoveLeftArrowButton();
    await issuesPage.clickApplyLink();

    const columnPresence = await issuesPage.checkCategoryColumnPresence();
    expect(columnPresence).toBe(true);
});