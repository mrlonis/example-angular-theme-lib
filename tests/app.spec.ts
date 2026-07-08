import { expect, test } from '@playwright/test';

test.describe('example-theme-app', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load', async ({ page }) => {
    await expect(page).toHaveTitle(/ExampleThemeApp/);
  });
});
