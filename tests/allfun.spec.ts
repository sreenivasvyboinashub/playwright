import {test, expect} from '@playwright/test';
import {UserAPI} from '../API/listt';

test('test', async ({ page }) => {
  await page.goto('https://ui.shadcn.com/docs/components/radix/tooltip');
  
 //const tooltipButton = page.locator("//button[text()='Hover']");
 //await tooltipButton.hover();//
 await page.getByRole('button', { name: 'Hover' }).hover();
 await page.waitForTimeout(30000);
 
 await expect(page.getByRole('tooltip')).toBeVisible();

//    // Wait for the tooltip to appear
//   const tooltip = page.getByRole('tooltip');
//   await expect(tooltip).toBeVisible();
//   console.log(tooltip);
//   await page.waitForFunction(() => {
//     const tooltipElement = document.querySelector('[role="tooltip"]');
//     return tooltipElement && tooltipElement.textContent === 'Tooltip content';
  //});

});

