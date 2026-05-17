import { test, expect } from '@playwright/test';

test('test', async ({ page, context }) => {
  await page.goto('https://www.amazon.com/');
  await page.locator('#nav-xshop').click();
  await page.getByRole('button', { name: 'Submit' }).nth(1).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('link', { name: 'Customer Service' }).click();
  const page1 = await context.newPage();
  await page1.goto('https://www.amazon.com/');
  await page1.getByRole('button', { name: 'Submit' }).nth(1).click();
  await page1.getByRole('button', { name: 'Done' }).click();
  await page1.getByRole('link', { name: 'Choose a language for shopping in Amazon United States. The current selection' }).click();
  await page1.locator('div').filter({ hasText: 'Language Settings Select the' }).nth(3).click();
  await page1.getByRole('link', { name: 'Amazon', exact: true }).click();
  await page1.getByRole('button', { name: 'Submit' }).nth(1).click();
  await page1.locator('div').filter({ hasText: 'Choose your locationChoose' }).first().click();
  await page1.locator('div').filter({ hasText: 'Choose your locationChoose' }).first().click();
  await page1.locator('div').filter({ hasText: 'Choose your locationChoose' }).first().click();
  await page1.locator('div').filter({ hasText: 'Choose your locationChoose' }).first().click();
  await page1.locator('div').filter({ hasText: 'Choose your locationChoose' }).first().click();
  await page1.getByRole('button', { name: 'Done' }).click();
  await page1.getByRole('link', { name: 'Customer Service' }).click();
  await page1.getByRole('img', { name: 'Amazon.com' }).click();
  await page.getByRole('img', { name: 'Amazon.com' }).click();
   
});