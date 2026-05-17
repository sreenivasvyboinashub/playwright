import { Page } from "@playwright/test";

export class Page1 {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async navigatetologinurl() {

        await this.page.goto('/');
        
    }
}