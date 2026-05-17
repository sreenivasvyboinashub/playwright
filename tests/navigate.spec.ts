import { Page1 } from "../POM/page1";
import { test, expect } from "@playwright/test";


test("navigate to login url", async ({ page }) => {
    const pageObj = new Page1(page);
    await pageObj.navigatetologinurl();
    await expect(page).toHaveURL("https://playwright.dev/");

});
