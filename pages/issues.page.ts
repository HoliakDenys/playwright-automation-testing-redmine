import { Locator, Page } from "@playwright/test";
import { ISSUES } from '../constants/endpoints.constants.json';
import BasePage from './base.page';

export default class IssuesPage extends BasePage {
    public statusIdDropdown: Locator;
    public applyLink: Locator;
    public errorMessage: Locator;
    public statusValueDropdown: Locator;
    public issueStatuses: Locator;
    public addFilterDropdown: Locator;
    public closedFilterIdDropdown: Locator;
    public noDataMessage: Locator;
    public optionsLegend: Locator;
    public selectedColumnsTable: Locator;
    public moveLeftButton: Locator;
    public categoryColumn: Locator;

    public statusValues = [
        { name: 'Needs feedback', value: 10 },
        { name: 'Confirmed', value: 9 },
        { name: 'Resolved', value: 3 },
        { name: 'Closed', value: 5 },
        { name: 'Reopened', value: 8 },
        { name: 'New', value: 1 },
    ];

    constructor(page: Page) {
        super(page);
        this.endpoint = ISSUES;
        this.statusIdDropdown = page.locator('select[name="op[status_id]"]');
        this.applyLink = page.locator('a.icon.icon-checked', { 
            hasText: /Apply\s*/ 
          });
        this.errorMessage = page.locator('#errorExplanation li');
        this.statusValueDropdown = page.locator('select#values_status_id_1');
        this.issueStatuses = page.locator('tr td.status');
        this.addFilterDropdown = page.locator('select#add_filter_select');
        this.closedFilterIdDropdown = page.locator('select#operators_closed_on');
        this.noDataMessage = page.locator('p.nodata');
        this.optionsLegend = page.locator('legend.icon.icon-collapsed');
        this.selectedColumnsTable = page.locator('select#selected_c');
        this.moveLeftButton = page.locator('input.move-left');
        this.categoryColumn = page.locator('th.category');
    }

    async open(): Promise<void> {
        await super.open(this.endpoint);
    }

    async selectStatusIdThereAre(): Promise<void> {
        await this.statusIdDropdown.selectOption("=");
    }

    async clickApplyLink(): Promise<void> {
        await this.applyLink.click();
    }

    async selectStatusValue(value: string): Promise<void> {
        await this.statusValueDropdown.selectOption(value);
    }

    async getDisplayedIssueStatuses(): Promise<string[]> {
        return await this.issueStatuses.allTextContents();
    }

    async selectFilterClosed(): Promise<void> {
        await this.addFilterDropdown.selectOption("closed_on");
    }

    async selectClosedIdYesterday(): Promise<void> {
        await this.closedFilterIdDropdown.selectOption('ld');
    }

    async clickOptionsLegend(): Promise<void> {
        await this.optionsLegend.click();
    }

    async selectCategoryColumn(): Promise<void> {
        await this.selectedColumnsTable.selectOption('category');
    }

    async clickMoveLeftArrowButton(): Promise<void> {
        await this.moveLeftButton.click();
    }

    async checkCategoryColumnPresence(): Promise<boolean> {
        const columnCount = await this.categoryColumn.count();
        return columnCount === 0;
    }
}